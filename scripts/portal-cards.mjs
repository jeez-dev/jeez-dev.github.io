#!/usr/bin/env node
/**
 * portal-cards.mjs — JEE-668 release gate: no deploy without a visible portal card.
 *
 * WHAT
 *   Reconciles the jeez.games portal (root index.html, the .games grid) against
 *   the deployed game directories. Every top-level directory that ships an
 *   index.html (names starting with "." or "_" are excluded, symlinks are
 *   ignored) MUST have a portal card. Any missing card is inserted immediately
 *   before the grid-closing "  </div>" line. All other bytes of index.html are
 *   left untouched.
 *
 * TITLE / BLURB RESOLUTION ORDER (per slug)
 *   title: (1) OVERRIDES map below
 *          (2) {slug}/card.json ("title" field)
 *          (3) first <title>…</title> of {slug}/index.html: entity-decoded,
 *              any "(jeez.games)"/"(jez.games)" parenthetical stripped, then the
 *              segment before the first " — " / " - " separator
 *          (4) prettified slug (paper-io → Paper.io, 8-ball-pool → 8 Ball Pool)
 *   blurb: (1) OVERRIDES map below
 *          (2) {slug}/card.json ("blurb" field)
 *          (3) <meta name="description" content="…"> of {slug}/index.html:
 *              entity-decoded, leading "<title> — " prefix and trailing
 *              " by jeez.games" stripped, first letter capitalized, discarded
 *              if under 8 characters
 *          (4) generic fallback: "Free browser game on jeez.games"
 *   card.json is optional; absence is fine, malformed JSON is a hard failure.
 *   Title and blurb are HTML-escaped (&, <, >) when emitted into index.html.
 *
 * DELISTED CONTRACT (additive-only guarantee)
 *   This reconciler NEVER modifies or removes an existing card — it only ever
 *   appends missing ones. That means it will re-add any card that is deleted
 *   from index.html … unless the slug is recorded in DELISTED. A deliberate
 *   removal MUST therefore be recorded in DELISTED, otherwise the removed card
 *   silently resurrects on the next run.
 *
 * FLEET PARITY
 *   The fleet deploy template (jeez-dev/.github workflow-templates/
 *   deploy-game.yml) invokes this same script best-effort so a deploy can land
 *   its card in the same commit; the portal-cards workflow in THIS repo
 *   (.github/workflows/portal-cards.yml) runs on every push to main and is the
 *   guaranteed follow-up that restores parity.
 *
 * USAGE
 *   node scripts/portal-cards.mjs [--dry-run | --check] [repo-root]
 *     repo-root : default process.cwd() (run from the repo root)
 *     --dry-run : print the cards that would be added; write nothing
 *     --check   : exit 0 when in sync; exit 1 listing missing slugs otherwise
 *   Exit code 2 is a hard failure (bad portal markup, malformed card.json, …).
 */

import fs from 'node:fs';
import path from 'node:path';

// ── DELISTED ─────────────────────────────────────────────────────────────────
// Slugs intentionally kept off the portal. The reconciler will re-add any card
// deleted from index.html, so deliberate removals MUST be recorded here.
const DELISTED = new Set([
  // 'some-slug',
]);

// ── OVERRIDES ────────────────────────────────────────────────────────────────
// slug → { title, blurb }: highest-priority source for card text.
const OVERRIDES = new Map(Object.entries({
  '8-ball-pool':    { title: 'Midnight Break',   blurb: 'Single-player cue sport — break, line up the shot, clear the table' },
  'among-us':       { title: 'Drift Station',    blurb: 'Social deduction on a drifting station — run tasks, call meetings, eject the impostor' },
  'angry-birds':    { title: 'Flock & Fortress', blurb: 'Mesh-first physics slingshot — topple the towers, crack every fortress' },
  'candy-crush':    { title: 'Sugar Circuit',    blurb: 'Match-three puzzler — chain candies, light the circuit' },
  'paper-io':       { title: 'Grid Trails',      blurb: 'Claim territory with your trail — close the loop, cut rivals, hold the grid' },
  'slither-io':     { title: 'Slither.io',       blurb: 'Grow the longest snake — cut off rivals, survive the arena' },
  'subway-surfers': { title: 'Neon Rail Runner', blurb: 'Endless runner on neon rails — dodge trains, ride the light, chase the high score' },
  'sudoku':         { title: 'Sudoku',           blurb: 'Classic number placement — fill the grid, no repeats' },
  'tetris':         { title: 'Block Drop',       blurb: 'Tetris-style stacker — clear lines, chase the high score' },
  'wordle':         { title: 'Wordle',           blurb: 'Guess the five-letter word in six tries' },
}));

const GENERIC_BLURB = 'Free browser game on jeez.games';
const GAMES_OPEN = '<div class="games">';
const GAMES_CLOSE = /^  <\/div>\s*$/; // exactly 2 spaces + </div> (+ trailing ws)

function die(msg, code = 2) {
  console.error(`portal-cards: error: ${msg}`);
  process.exit(code);
}

// ── HTML entity helpers ──────────────────────────────────────────────────────

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&'); // &amp; last so "&amp;lt;" decodes to "&lt;"
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;') // must be first
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Title / blurb derivation ────────────────────────────────────────────────

// paper-io → Paper.io ; hole-io → Hole.io ; 8-ball-pool → 8 Ball Pool
function prettifySlug(slug) {
  const tokens = [];
  for (const tok of slug.split('-')) {
    if (tok === 'io' && tokens.length > 0) {
      tokens[tokens.length - 1] += '.io';
    } else {
      tokens.push(tok);
    }
  }
  return tokens.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' ');
}

function titleFromGameHtml(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  if (!m) return '';
  let t = decodeEntities(m[1]);
  t = t.replace(/\((?:jeez|jez)\.games\)/gi, ' ');
  const seps = [t.indexOf(' — '), t.indexOf(' - ')].filter(i => i >= 0);
  if (seps.length > 0) t = t.slice(0, Math.min(...seps));
  return t.trim();
}

function metaDescriptionFromGameHtml(html) {
  const tag = (html.match(/<meta\b[^>]*>/gi) || [])
    .find(t => /name\s*=\s*["']description["']/i.test(t));
  if (!tag) return '';
  const c = tag.match(/content\s*=\s*["']([^"']*)["']/i);
  return c ? c[1] : '';
}

function blurbFromGameHtml(html, title) {
  let b = decodeEntities(metaDescriptionFromGameHtml(html)).trim();
  if (!b) return '';
  if (title && b.toLowerCase().startsWith(title.toLowerCase())) {
    const rest = b.slice(title.length);
    const sep = rest.match(/^\s*(?:—|-)\s+/); // " — " or " - " (allow no leading ws)
    if (sep) b = rest.slice(sep[0].length);
  }
  b = b.replace(/\s+by jeez\.games\.?\s*$/i, '').trim();
  b = b.charAt(0).toUpperCase() + b.slice(1);
  return b.length >= 8 ? b : '';
}

// ── card.json ────────────────────────────────────────────────────────────────

function readCardJson(file) {
  let raw;
  try {
    raw = fs.readFileSync(file, 'utf8');
  } catch (err) {
    die(`cannot read ${file}: ${err.message}`);
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    die(`malformed JSON in ${file}: ${err.message}`);
  }
  for (const k of ['title', 'blurb']) {
    if (data[k] !== undefined && typeof data[k] !== 'string') {
      die(`malformed ${file}: field "${k}" must be a string`);
    }
  }
  return {
    title: data.title?.trim() || undefined,
    blurb: data.blurb?.trim() || undefined,
  };
}

function resolveCard(root, slug) {
  const override = OVERRIDES.get(slug);
  const cardJsonPath = path.join(root, slug, 'card.json');
  const cardJson = fs.existsSync(cardJsonPath) ? readCardJson(cardJsonPath) : null;

  let gameHtml = null; // lazily read only when a derivation step needs it
  const gameHtmlOnce = () => {
    if (gameHtml === null) {
      const p = path.join(root, slug, 'index.html');
      try {
        gameHtml = fs.readFileSync(p, 'utf8');
      } catch (err) {
        die(`cannot read ${p}: ${err.message}`);
      }
    }
    return gameHtml;
  };

  let title = override?.title || cardJson?.title;
  if (!title) title = titleFromGameHtml(gameHtmlOnce());
  if (!title) title = prettifySlug(slug);

  let blurb = override?.blurb || cardJson?.blurb;
  if (!blurb) blurb = blurbFromGameHtml(gameHtmlOnce(), title);
  if (!blurb) blurb = GENERIC_BLURB;

  return { slug, title, blurb };
}

// ── Discovery & portal parsing ───────────────────────────────────────────────

function discoverGameDirs(root) {
  let entries;
  try {
    entries = fs.readdirSync(root, { withFileTypes: true });
  } catch (err) {
    die(`cannot list repo root ${root}: ${err.message}`);
  }
  return entries
    .filter(e => e.isDirectory()) // symlinks report isDirectory() === false
    .map(e => e.name)
    .filter(name => !name.startsWith('.') && !name.startsWith('_'))
    .filter(name => {
      try {
        return fs.statSync(path.join(root, name, 'index.html')).isFile();
      } catch {
        return false;
      }
    })
    .sort();
}

function parsePortal(content) {
  const lines = content.split('\n');
  const openIdx = lines.findIndex(l => l.includes(GAMES_OPEN));
  if (openIdx === -1) {
    die(`root index.html: no line contains "${GAMES_OPEN}"`);
  }
  let closeIdx = -1;
  for (let i = openIdx + 1; i < lines.length; i++) {
    if (GAMES_CLOSE.test(lines[i])) { closeIdx = i; break; }
  }
  if (closeIdx === -1) {
    die('root index.html: no closing "  </div>" line after the .games grid opener');
  }
  const listed = new Set();
  for (let i = openIdx + 1; i < closeIdx; i++) {
    for (const m of lines[i].matchAll(/href="\/([^"/]+)\/"/g)) {
      listed.add(m[1]);
    }
  }
  return { lines, closeIdx, listed };
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  let root = process.cwd();
  let dryRun = false;
  let check = false;
  const positional = [];
  for (const arg of process.argv.slice(2)) {
    if (arg === '--dry-run') dryRun = true;
    else if (arg === '--check') check = true;
    else if (arg.startsWith('--')) die(`unknown flag: ${arg}`);
    else positional.push(arg);
  }
  if (positional.length > 1) {
    die('usage: node scripts/portal-cards.mjs [--dry-run | --check] [repo-root]');
  }
  if (positional.length === 1) root = path.resolve(positional[0]);

  const indexPath = path.join(root, 'index.html');
  let content;
  try {
    content = fs.readFileSync(indexPath, 'utf8');
  } catch (err) {
    die(`cannot read ${indexPath}: ${err.message}`);
  }

  const { lines, closeIdx, listed } = parsePortal(content);
  const candidates = discoverGameDirs(root);
  const missingSlugs = candidates.filter(s => !listed.has(s) && !DELISTED.has(s));

  if (missingSlugs.length === 0) {
    console.log(`portal-cards: ${listed.size} listed, 0 missing, in sync`);
    return;
  }

  const cards = missingSlugs.map(s => resolveCard(root, s));
  cards.sort((a, b) => {
    const x = a.title.toLowerCase();
    const y = b.title.toLowerCase();
    if (x !== y) return x < y ? -1 : 1;
    return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
  });

  const slugList = cards.map(c => c.slug).join(', ');

  if (check) {
    for (const c of cards) console.log(`MISSING ${c.slug} | ${c.title}`);
    console.log(`portal-cards: ${listed.size} listed, ${cards.length} missing: ${slugList}`);
    process.exit(1);
  }
  if (dryRun) {
    for (const c of cards) console.log(`MISSING ${c.slug} | ${c.title}`);
    console.log(`portal-cards: ${listed.size} listed, ${cards.length} missing (dry-run, nothing written): ${slugList}`);
    return;
  }

  // Additive-only: splice the new card lines in before the closing "  </div>";
  // every other byte of the file is preserved as-is.
  const cardLines = [];
  for (const c of cards) {
    console.log(`ADDED ${c.slug} | ${c.title}`);
    cardLines.push(
      `    <a class="game-card" href="/${c.slug}/">`,
      `      <h2>${escapeHtml(c.title)}</h2>`,
      `      <p>${escapeHtml(c.blurb)}</p>`,
      `    </a>`,
    );
  }
  lines.splice(closeIdx, 0, ...cardLines);
  const updated = lines.join('\n');
  fs.writeFileSync(indexPath, updated);
  console.log(`portal-cards: added ${cards.length} card(s): ${slugList}`);
}

main();
