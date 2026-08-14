import{W as te,P as ee,C as Ot,S as Vt,a as C,B as pt,b as P,c as Ht,d as se,A as I,G,M as x,e as d,f as F,g as J,h as Wt,i as ut,j as ie,k as ne,l as oe,D as q,m as re,V as m,n as ae,o as ft,p as Z,Q as le,q as ce,r as mt,T as wt,s as he,R as ue,t as de,u as Mt,H as pe,v as fe,w as me,x as we}from"./three-Cgn8e5J4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const ge=(()=>{try{return typeof location<"u"&&new URLSearchParams(location.search).has("debug")?!0:typeof localStorage<"u"&&localStorage.getItem("jeez.debug")==="1"}catch{return!1}})();function M(...o){ge&&console.debug(...o)}class be{}class ve extends be{async initialize(){M("[ads] noop provider initialized")}async showInterstitial(){return M("[ads] interstitial (noop)"),!0}async showRewarded(){return M("[ads] rewarded (noop) — granting reward"),!0}async showBanner(t="bottom"){M(`[ads] show banner at ${t} (noop)`)}async hideBanner(){M("[ads] hide banner (noop)")}}class ye{async initialize(){M("[analytics] console provider initialized")}track(t,e){M(`[analytics] ${t}`,e??{})}identify(t,e){M(`[analytics] identify ${t}`,e??{})}isFeatureEnabled(t){return!1}reset(){M("[analytics] reset")}}class xe{graph=null;buffers=new Map;currentBgm=null;volumes={master:1,bgm:.6,sfx:1};_muted=!1;get muted(){return this._muted}unlock(){const{ctx:t}=this.ensure();t.state==="suspended"&&t.resume()}async load(t,e){const s=await fetch(e);if(!s.ok)throw new Error(`Failed to load audio "${t}" from ${e}`);const i=await s.arrayBuffer(),n=await this.ensure().ctx.decodeAudioData(i);this.buffers.set(t,n)}playSfx(t,e={}){const s=this.ensure(),i=this.buffers.get(t);if(!i){console.warn(`[audio] SFX "${t}" not loaded`);return}const n=s.ctx.createBufferSource();if(n.buffer=i,n.playbackRate.value=e.playbackRate??1,e.volume!==void 0){const r=s.ctx.createGain();r.gain.value=e.volume,n.connect(r).connect(s.sfx)}else n.connect(s.sfx);n.start()}playTone(t=880,e=.08,s=.2){const i=this.ensure();if(i.ctx.state!=="running")return;const n=i.ctx.currentTime,r=i.ctx.createOscillator(),a=i.ctx.createGain();r.type="sine",r.frequency.value=t,a.gain.setValueAtTime(s,n),a.gain.exponentialRampToValueAtTime(.001,n+e),r.connect(a).connect(i.sfx),r.start(n),r.stop(n+e)}playBgm(t,e={}){if(this.currentBgm?.name===t)return;this.stopBgm();const s=this.ensure(),i=this.buffers.get(t);if(!i){console.warn(`[audio] BGM "${t}" not loaded`);return}const n=s.ctx.createBufferSource();n.buffer=i,n.loop=e.loop??!0;const r=s.ctx.createGain(),a=e.fadeInSec??.5,l=s.ctx.currentTime;r.gain.setValueAtTime(.001,l),r.gain.exponentialRampToValueAtTime(1,l+a),n.connect(r).connect(s.bgm),n.start(),this.currentBgm={source:n,gain:r,name:t}}stopBgm(t=.3){const e=this.currentBgm;if(!e||!this.graph)return;this.currentBgm=null;const s=this.graph.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,s),e.gain.gain.exponentialRampToValueAtTime(.001,s+t),e.source.stop(s+t)}setMuted(t){this._muted=t,this.applyVolumes()}toggleMuted(){return this.setMuted(!this._muted),this._muted}setVolume(t,e){this.volumes[t]=Math.min(1,Math.max(0,e)),this.applyVolumes()}getVolume(t){return this.volumes[t]}async suspend(){this.graph&&this.graph.ctx.state==="running"&&await this.graph.ctx.suspend()}async resume(){this.graph&&this.graph.ctx.state==="suspended"&&await this.graph.ctx.resume()}ensure(){if(!this.graph){const t=new AudioContext,e=t.createGain();e.connect(t.destination);const s=t.createGain();s.connect(e);const i=t.createGain();i.connect(e),this.graph={ctx:t,master:e,bgm:s,sfx:i},this.applyVolumes()}return this.graph}applyVolumes(){this.graph&&(this.graph.master.gain.value=this._muted?0:this.volumes.master,this.graph.bgm.gain.value=this.volumes.bgm,this.graph.sfx.gain.value=this.volumes.sfx)}}class Me{}class Se extends Me{owned=new Set;async initialize(){M("[iap] noop provider initialized")}async getProducts(t){return t.map(e=>({id:e,title:e,description:`Placeholder product "${e}"`,price:"$0.00"}))}async purchase(t){return M(`[iap] simulated purchase of ${t}`),this.owned.add(t),{productId:t,success:!0}}async restorePurchases(){return[...this.owned]}isOwned(t){return this.owned.has(t)}}const ke=250,Ee=12,ze=8,Te=40,Ae=400;class Pe{listeners={};pointers=new Map;keys=new Set;target;startX=0;startY=0;startTime=0;lastX=0;lastY=0;dragging=!1;pinching=!1;pinchStartDist=1;pinchScale=1;constructor(t){this.target=t,t.style.touchAction="none",t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}on(t,e){return this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),()=>this.listeners[t]?.delete(e)}off(t,e){this.listeners[t]?.delete(e)}isKeyDown(t){return this.keys.has(t)}dispose(){this.target.removeEventListener("pointerdown",this.onPointerDown),this.target.removeEventListener("pointermove",this.onPointerMove),this.target.removeEventListener("pointerup",this.onPointerUp),this.target.removeEventListener("pointercancel",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}emit(t,e){const s=this.listeners[t];if(s)for(const i of s)i(e)}pinchDistance(){const[t,e]=[...this.pointers.values()];return!t||!e?1:Math.hypot(t.x-e.x,t.y-e.y)||1}pinchCenter(){const[t,e]=[...this.pointers.values()];return!t||!e?{x:0,y:0}:{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}onPointerDown=t=>{this.target.setPointerCapture(t.pointerId),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===1?(this.startX=this.lastX=t.clientX,this.startY=this.lastY=t.clientY,this.startTime=performance.now(),this.dragging=!1):this.pointers.size===2&&(this.dragging&&(this.emit("dragend",this.dragEvent(t.clientX,t.clientY,0,0)),this.dragging=!1),this.pinching=!0,this.pinchStartDist=this.pinchDistance(),this.pinchScale=1)};onPointerMove=t=>{const e=this.pointers.get(t.pointerId);if(!e)return;if(e.x=t.clientX,e.y=t.clientY,this.pinching&&this.pointers.size>=2){const n=this.pinchDistance()/this.pinchStartDist,r=this.pinchCenter();this.emit("pinch",{scale:n,deltaScale:n-this.pinchScale,centerX:r.x,centerY:r.y}),this.pinchScale=n;return}if(this.pointers.size!==1)return;const s=t.clientX-this.lastX,i=t.clientY-this.lastY;this.dragging||Math.hypot(t.clientX-this.startX,t.clientY-this.startY)>ze&&(this.dragging=!0,this.emit("dragstart",this.dragEvent(t.clientX,t.clientY,0,0))),this.dragging&&this.emit("drag",this.dragEvent(t.clientX,t.clientY,s,i)),this.lastX=t.clientX,this.lastY=t.clientY};onPointerUp=t=>{if(!this.pointers.delete(t.pointerId))return;if(this.pinching&&this.pointers.size<2){this.pinching=!1;const r=this.pinchCenter();this.emit("pinchend",{scale:this.pinchScale,deltaScale:0,centerX:r.x,centerY:r.y});const a=[...this.pointers.values()][0];a&&(this.startX=this.lastX=a.x,this.startY=this.lastY=a.y,this.startTime=performance.now(),this.dragging=!1);return}if(this.pointers.size>0)return;const e=performance.now()-this.startTime,s=t.clientX-this.startX,i=t.clientY-this.startY,n=Math.hypot(s,i);if(this.dragging){if(this.dragging=!1,this.emit("dragend",this.dragEvent(t.clientX,t.clientY,0,0)),n>=Te&&e<=Ae){const r=Math.abs(s)>Math.abs(i)?s>0?"right":"left":i>0?"down":"up";this.emit("swipe",{direction:r,dx:s,dy:i,durationMs:e})}}else e<=ke&&n<=Ee&&this.emit("tap",{x:t.clientX,y:t.clientY})};dragEvent(t,e,s,i){return{x:t,y:e,dx:s,dy:i,totalDx:t-this.startX,totalDy:e-this.startY}}onKeyDown=t=>{this.keys.add(t.code),this.emit("keydown",t)};onKeyUp=t=>{this.keys.delete(t.code),this.emit("keyup",t)}}const Le=2;class Ce{webgl;camera;container;observer;constructor(t){this.container=t,getComputedStyle(t).position==="static"&&(t.style.position="relative"),this.webgl=new te({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.webgl.setPixelRatio(Math.min(window.devicePixelRatio,Le)),this.webgl.shadowMap.enabled=!1,this.webgl.domElement.style.display="block",t.appendChild(this.webgl.domElement),this.camera=new ee(60,1,.1,100),this.camera.position.z=5,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize()}get domElement(){return this.webgl.domElement}resize(){const t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.webgl.setSize(t,e)}render(t){this.webgl.render(t,this.camera)}dispose(){this.observer.disconnect(),this.webgl.dispose(),this.webgl.domElement.remove()}}class Be{states=new Map;changeListeners=new Set;_current=null;get current(){return this._current}is(t){return this._current===t}register(t,e={}){this.states.set(t,e)}transition(t){const e=this.states.get(t);if(!e)throw new Error(`Unknown state "${t}" — did you register() it?`);if(this._current===t)return;const s=this._current;s!==null&&this.states.get(s)?.onExit?.(t),this._current=t,e.onEnter?.(s);for(const i of this.changeListeners)i(t,s)}onChange(t){return this.changeListeners.add(t),()=>this.changeListeners.delete(t)}}const St="jeez-ui-style",_e=`
.jeez-ui-root {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 10;
  color: #fff;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-user-select: none;
  user-select: none;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
}
.jeez-ui-screen {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  pointer-events: none;
}
.jeez-ui-screen[hidden] { display: none !important; }
.jeez-ui-screen > * { pointer-events: auto; }
.jeez-ui-overlay {
  background: rgba(10, 10, 20, 0.65);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.jeez-ui-button {
  appearance: none;
  border: 0;
  border-radius: 12px;
  padding: 14px 32px;
  font: 600 18px/1 inherit;
  font-family: inherit;
  background: #7c5cff;
  color: #fff;
  cursor: pointer;
  touch-action: manipulation;
  transition: transform 0.08s ease;
}
.jeez-ui-button:active { transform: scale(0.96); }
.jeez-ui-button--ghost { background: rgba(255, 255, 255, 0.12); }
.jeez-ui-icon-button {
  width: 44px;
  height: 44px;
  padding: 0;
  font-size: 20px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.35);
}
.jeez-ui-title {
  margin: 0;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}
.jeez-ui-text { margin: 0; font-size: 16px; opacity: 0.85; }
.jeez-ui-score { margin: 0; font-size: 26px; font-weight: 700; }
.jeez-ui-hud { justify-content: flex-start; }
.jeez-ui-hud-top {
  position: absolute;
  top: 12px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}
.jeez-ui-hud-top > * { pointer-events: auto; }
`;class Re{root;screens=new Map;constructor(t){if(!document.getElementById(St)){const e=document.createElement("style");e.id=St,e.textContent=_e,document.head.appendChild(e)}this.root=document.createElement("div"),this.root.className="jeez-ui-root",t.appendChild(this.root)}screen(t,e=""){let s=this.screens.get(t);return s||(s=document.createElement("div"),s.hidden=!0,this.root.appendChild(s),this.screens.set(t,s)),s.className=`jeez-ui-screen${e?` ${e}`:""}`,s}show(t,e={}){if(e.exclusive??!0)for(const[i,n]of this.screens)i!==t&&(n.hidden=!0);const s=this.screens.get(t);s&&(s.hidden=!1)}hide(t){const e=this.screens.get(t);e&&(e.hidden=!0)}hideAll(){for(const t of this.screens.values())t.hidden=!0}isVisible(t){const e=this.screens.get(t);return!!e&&!e.hidden}button(t,e,s=""){const i=document.createElement("button");return i.type="button",i.className=`jeez-ui-button${s?` ${s}`:""}`,i.textContent=t,i.addEventListener("click",e),i}iconButton(t,e){return this.button(t,e,"jeez-ui-icon-button")}title(t){const e=document.createElement("h1");return e.className="jeez-ui-title",e.textContent=t,e}text(t,e="jeez-ui-text"){const s=document.createElement("p");return s.className=e,s.textContent=t,s}}const Ie=250;class Ge{renderer;input;audio;ui;states=new Be;ads;analytics;iap;scenes=new Map;activeScene=null;stepMs;accumulator=0;lastTime=0;rafId=0;running=!1;manuallyPaused=!1;autoPaused=!1;pauseListeners=new Set;constructor(t){this.stepMs=1e3/(t.logicHz??60),this.renderer=new Ce(t.container),this.input=new Pe(this.renderer.domElement),this.audio=new xe,this.ui=new Re(t.container),this.ads=t.ads??new ve,this.analytics=t.analytics??new ye,this.iap=t.iap??new Se;const e=()=>this.audio.unlock();window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?this.paused||(this.autoPaused=!0,this.applyPause(!0)):this.autoPaused&&(this.autoPaused=!1,this.manuallyPaused||this.applyPause(!1))})}registerScene(t,e){this.scenes.set(t,e),this.states.register(t,{onEnter:()=>this.activateScene(t)})}setScene(t){this.states.transition(t)}get scene(){return this.activeScene}start(t){this.running||(this.running=!0,this.setScene(t),this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}get paused(){return this.manuallyPaused||this.autoPaused}pause(){this.manuallyPaused||(this.manuallyPaused=!0,this.autoPaused||this.applyPause(!0))}resume(){this.manuallyPaused&&(this.manuallyPaused=!1,this.autoPaused||this.applyPause(!1))}togglePause(){this.manuallyPaused?this.resume():this.pause()}onPauseChange(t){return this.pauseListeners.add(t),()=>this.pauseListeners.delete(t)}applyPause(t){t?this.audio.suspend():(this.lastTime=performance.now(),this.accumulator=0,this.audio.resume());for(const e of this.pauseListeners)e(t)}activateScene(t){const e=this.scenes.get(t);if(!e)throw new Error(`Unknown scene "${t}" — did you registerScene() it?`);this.activeScene?.exit(this),this.activeScene=e,this.accumulator=0,e.enter(this)}frame=t=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);const e=Math.min(t-this.lastTime,Ie);this.lastTime=t;const s=this.activeScene;if(s){if(!this.paused)for(this.accumulator+=e;this.accumulator>=this.stepMs;)s.update(this,this.stepMs/1e3),this.accumulator-=this.stepMs;s.render?.(this,this.accumulator/this.stepMs),this.renderer.render(s.three)}}}class je{constructor(t){this.options=t,this.cache=this.read()}cache;get(t){return this.cache[t]}set(t,e){this.cache[t]=e,this.persist()}update(t){Object.assign(this.cache,t),this.persist()}get all(){return this.cache}clear(){this.cache={...this.options.defaults};try{localStorage.removeItem(this.options.key)}catch{}}async syncToCloud(){M("[storage] cloud sync not implemented (placeholder)")}read(){try{const t=localStorage.getItem(this.options.key);if(!t)return{...this.options.defaults};const e=JSON.parse(t);let s=e.data??{};const i=e.version??1;for(let n=i+1;n<=this.options.version;n++){const r=this.options.migrations?.[n];r&&(s=r(s))}return{...this.options.defaults,...s}}catch(t){return console.warn("[storage] failed to read save, using defaults",t),{...this.options.defaults}}}persist(){try{const t={version:this.options.version,data:this.cache};localStorage.setItem(this.options.key,JSON.stringify(t))}catch(t){console.warn("[storage] failed to persist save",t)}}}const Ye="water-sort",kt="Water Sort",$e=`${Ye}.save`,Ne=1,De=60,g=[16729943,3621626,3069299,16753922,10837738,16737096,16739201,2003199,8121759,13459763,53971,16370212,15856374,5726319],Et=2,Ue=3;function tt(o=128){const t=document.createElement("canvas");t.width=t.height=o;const e=t.getContext("2d");if(e){const i=e.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,o,o)}const s=new Ot(t);return s.colorSpace=Vt,s}function gt(){const e=document.createElement("canvas");e.width=32,e.height=256;const s=e.getContext("2d");if(s){const n=s.createLinearGradient(0,0,0,256);n.addColorStop(0,"#0b1338"),n.addColorStop(.45,"#0a1130"),n.addColorStop(.78,"#0c1434"),n.addColorStop(1,"#10283f"),s.fillStyle=n,s.fillRect(0,0,32,256);const r=s.createRadialGradient(32/2,256*.92,2,32/2,256*.92,256*.55);r.addColorStop(0,"rgba(45,180,210,0.22)"),r.addColorStop(1,"rgba(45,180,210,0)"),s.fillStyle=r,s.fillRect(0,0,32,256)}const i=new Ot(e);return i.colorSpace=Vt,i}function Kt(o,t,e=5.5){const s=new Float32Array(o*3),i=new Float32Array(o*3),n=[],r=new C;for(let c=0;c<o;c++)s[c*3]=(Math.random()-.5)*11,s[c*3+1]=(Math.random()-.5)*2*e,s[c*3+2]=-2.5-Math.random()*2,r.setHex(t[c%t.length]),i[c*3]=r.r,i[c*3+1]=r.g,i[c*3+2]=r.b,n.push(.1+Math.random()*.22);const a=new pt;return a.setAttribute("position",new P(s,3)),a.setAttribute("color",new P(i,3)),{points:new Ht(a,new se({size:.55,map:tt(),vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,blending:I})),update(c){for(let h=0;h<o;h++){let u=s[h*3+1]+n[h]*c;u>e&&(u=-e),s[h*3+1]=u}a.getAttribute("position").needsUpdate=!0}}}class bt{group=new G;glows=[];t=0;constructor(){const t=tt(256),e=[[2282478,-2.6,-2.6,7.5,.14],[10980346,2.8,-3.1,6.5,.11],[16739201,3.2,2.9,5.5,.06],[2282478,-3.4,3.2,5,.07]];for(const[s,i,n,r,a]of e){const l=new x({map:t,color:s,transparent:!0,opacity:a,depthWrite:!1,blending:I}),c=new d(new F(1,1),l);c.position.set(i,n,-3.6),c.scale.setScalar(r),this.group.add(c),this.glows.push({mesh:c,baseX:i,baseY:n,speed:.12+Math.random()*.1,phase:Math.random()*Math.PI*2})}}update(t){this.t+=t;for(const e of this.glows)e.mesh.position.x=e.baseX+Math.sin(this.t*e.speed+e.phase)*.5,e.mesh.position.y=e.baseY+Math.cos(this.t*e.speed*.8+e.phase)*.35}}class qe extends J{constructor(){super();const t=new Wt;t.deleteAttribute("uv");const e=new ut({side:ie}),s=new ut,i=new ne(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const n=new d(t,e);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const r=new d(t,s);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new d(t,s);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new d(t,s);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new d(t,s);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new d(t,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new d(t,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new d(t,j(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const w=new d(t,j(50));w.position.set(-16.109,18.021,-8.207),w.scale.set(.1,2.425,2.751),this.add(w);const y=new d(t,j(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const S=new d(t,j(43));S.position.set(-.462,8.89,14.52),S.scale.set(4.38,5.441,.088),this.add(S);const E=new d(t,j(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,.1),this.add(E);const $=new d(t,j(100));$.position.set(0,20,0),$.scale.set(1,.1,1),this.add($)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function j(o){const t=new x;return t.color.setScalar(o),t}let st=null;function Xe(o){if(!st){const t=new oe(o);st=t.fromScene(new qe,.04).texture,t.dispose()}return st}function vt(o,t){const e=Xe(t);o.environment!==e&&(o.environment=e)}const p='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"',Fe={home:{body:`<path ${p} d="M4 11.3 12 4l8 7.3"/><path ${p} d="M6.4 9.4V20h11.2V9.4"/>`},undo:{body:`<path ${p} d="M8.5 5.5 4 10l4.5 4.5"/><path ${p} d="M4 10h10.5a5.5 5.5 0 0 1 0 11H7"/>`},restart:{body:`<path ${p} d="M20.4 12a8.4 8.4 0 1 1-2.46-5.94"/><path ${p} d="M20.6 2.8v4.6h-4.6"/>`},plus:{body:`<path ${p} d="M12 5v14M5 12h14"/>`},"sound-on":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${p} d="M15 9.5a3.6 3.6 0 0 1 0 5"/><path ${p} d="M17.5 7.2a7.2 7.2 0 0 1 0 9.6"/>`},"sound-off":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${p} d="M15.5 9.5l5 5"/><path ${p} d="M20.5 9.5l-5 5"/>`},"star-fill":{body:'<path fill="currentColor" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>'},"star-off":{body:`<path ${p} stroke-width="1.7" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>`},lock:{body:`<rect ${p} x="6.5" y="10.5" width="11" height="9.5" rx="2.2"/><path ${p} d="M9 10.5V8a3 3 0 0 1 6 0v2.5"/>`},check:{body:`<path ${p} stroke-width="2.2" d="M5 12.5l4.5 4.5L19 7.5"/>`},play:{body:'<path fill="currentColor" d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l9.7-6.2c.6-.4.6-1.4 0-1.8L10.1 4.9c-.7-.4-1.6.1-1.6.9z"/>'},grid:{body:`<rect ${p} x="4" y="4" width="7" height="7" rx="2"/><rect ${p} x="13" y="4" width="7" height="7" rx="2"/><rect ${p} x="4" y="13" width="7" height="7" rx="2"/><rect ${p} x="13" y="13" width="7" height="7" rx="2"/>`},back:{body:`<path ${p} d="M14.5 5.5 8 12l6.5 6.5"/>`},"add-tube":{body:`<path ${p} d="M7.5 3.5h9"/><path ${p} d="M9 3.5v6a3 3 0 0 1-1.5 2.6V18a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5.9A3 3 0 0 1 15 9.5v-6"/><path fill="currentColor" d="M12 11.6c1.2 1.4 2.1 2.6 2.1 3.7a2.1 2.1 0 1 1-4.2 0c0-1.1.9-2.3 2.1-3.7z"/>`}},zt={viewBox:"0 0 48 48",body:`
    <path fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"
      d="M16 5.5h16M20.5 5.5v10.2L10.6 35a3.4 3.4 0 0 0 3 4.9h20.8a3.4 3.4 0 0 0 3-4.9L27.5 15.7V5.5"/>
    <path fill="currentColor" opacity="0.9"
      d="M13 30c3-2.2 6-2.2 9 0s6 2.2 9 0l3.2 5.1a3.4 3.4 0 0 1-3 4.8H16.8a3.4 3.4 0 0 1-3-4.8L13 30z"/>
    <circle cx="21" cy="34" r="1.7" fill="#0d1533"/>
    <circle cx="26.5" cy="30.5" r="1.3" fill="#0d1533"/>
    <circle cx="29.5" cy="35.5" r="1.1" fill="#0d1533"/>
  `};function z(o,t=24){const e=Fe[o];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${t}" height="${t}" aria-hidden="true">${e.body}</svg>`}function k(o,t){o.innerHTML=t}function it(o,t=24,e="ws-ic"){const s=document.createElement("span");return s.className=e,s.setAttribute("aria-hidden","true"),k(s,z(o,t)),s}class Oe{constructor(t,e){this.save=t,this.session=e,this.three.background=gt(),this.bokeh=Kt(50,g),this.three.add(this.bokeh.points,this.aurora.group)}three=new J;bokeh;aurora=new bt;enter(t){t.renderer.camera.position.set(0,0,6),t.renderer.camera.lookAt(0,0,0),vt(this.three,t.renderer.webgl);const e=this.session.level,s=this.save.get("levels")[String(e)];t.analytics.track("win_shown",{level:e,stars:s?.stars??0});const i=document.createElement("div");i.className="ws-card ws-panel",i.append(t.ui.text("LEVEL COMPLETE","ws-eyebrow"),t.ui.title(`Level ${e}`),this.starsElement(s?.stars??0),t.ui.text(s?`Best: ${s.bestMoves} moves`:"","ws-chip ws-best"));const n=t.ui.button("Next level",()=>{this.session.level=e+1,t.setScene("play")});i.append(n,t.ui.button("Menu",()=>t.setScene("menu"),"jeez-ui-button--ghost")),t.ui.screen("gameover").replaceChildren(i),t.ui.show("gameover")}exit(t){t.ui.hide("gameover")}update(t,e){this.bokeh.update(e),this.aurora.update(e)}starsElement(t){const e=document.createElement("div");e.className="ws-stars-wrap";const s=document.createElement("div");s.className="ws-rays";const i=document.createElement("div");i.className="ws-stars-row";for(let n=0;n<3;n++){const r=document.createElement("span"),a=n<t;r.className=a?"ws-star ws-star--on":"ws-star ws-star--off",r.style.animationDelay=`${.25+n*.18}s`,k(r,z(a?"star-fill":"star-off",46)),i.append(r)}return e.append(s,i),e}}class Ve{constructor(t,e){this.save=t,this.session=e,this.three.background=gt(),this.bokeh=Kt(70,g),this.three.add(this.bokeh.points,this.aurora.group)}three=new J;bokeh;aurora=new bt;enter(t){t.renderer.camera.position.set(0,0,6),t.renderer.camera.lookAt(0,0,0),vt(this.three,t.renderer.webgl),t.analytics.track("menu_shown");const e=this.save.get("currentLevel"),s=t.ui.screen("menu"),i=document.createElement("div");i.className="ws-hero";const n=document.createElement("div");n.className="ws-logo",k(n,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${zt.viewBox}" aria-hidden="true">${zt.body}</svg>`);const r=document.createElement("div");r.className="ws-word ws-word--a",r.textContent=kt.split(" ")[0];const a=document.createElement("div");a.className="ws-word ws-word--b",a.textContent=kt.split(" ")[1]??"",i.append(n,r,a);const l=t.ui.text(`LEVEL ${e}`,"ws-chip"),c=t.ui.button("Play",()=>{this.session.level=e,t.setScene("play")});c.prepend(it("play",20,"ws-ic"));const h=t.ui.button("Levels",()=>this.showLevels(t),"jeez-ui-button--ghost");h.prepend(it("grid",20,"ws-ic"));const u=document.createElement("div");u.className="ws-stack",u.append(c,h),s.replaceChildren(i,t.ui.text("SORT THE COLORS","ws-subtitle"),l,u,this.muteButton(t)),t.ui.show("menu")}exit(t){t.ui.hide("menu"),t.ui.hide("levels")}update(t,e){this.bokeh.update(e),this.aurora.update(e)}showLevels(t){const e=this.save.get("currentLevel"),s=this.save.get("levels"),i=Math.max(20,e),n=document.createElement("div");n.className="ws-grid";for(let l=1;l<=i;l++){const c=s[String(l)],h=l>e;let u="ws-cell";c&&(u+=" ws-cell--done"),l===e&&(u+=" ws-cell--current"),h&&(u+=" ws-cell--locked");const f=t.ui.button("",()=>{this.session.level=l,t.setScene("play")},u);if(f.disabled=h,f.setAttribute("aria-label",h?`Level ${l} (locked)`:`Level ${l}`),h){const w=document.createElement("span");w.className="ws-cell-num",k(w,z("lock",18)),f.append(w)}else{const w=document.createElement("span");if(w.className="ws-cell-num",w.textContent=String(l),f.append(w),c){const y=document.createElement("span");y.className="ws-cell-stars";for(let S=0;S<3;S++){const E=document.createElement("span");E.className=S<c.stars?"ws-mini-on":"ws-mini-off",k(E,z(S<c.stars?"star-fill":"star-off",9)),y.append(E)}f.append(y)}}n.append(f)}const r=t.ui.button("Back",()=>t.ui.show("menu"),"jeez-ui-button--ghost");r.prepend(it("back",18,"ws-ic")),t.ui.screen("levels").replaceChildren(t.ui.title("Select Level"),n,r),t.ui.show("levels")}muteButton(t){const e=()=>{const i=t.audio.muted;k(s,z(i?"sound-off":"sound-on",22)),s.setAttribute("aria-label",i?"Sound off, tap to unmute":"Sound on, tap to mute")},s=t.ui.button("",()=>{const i=t.audio.toggleMuted();this.save.set("muted",i),e(),t.audio.playTone(660,.06)},"jeez-ui-icon-button");return e(),s.classList.add("ws-mute"),s}}const T=4;function yt(o){const t=o[o.length-1];if(t===void 0)return null;let e=1;for(let s=o.length-2;s>=0&&o[s]===t;s--)e++;return{color:t,count:e}}function _(o){const t=[];for(const e of o){const s=t[t.length-1];s&&s.color===e?s.count++:t.push({color:e,count:1})}return t}function He(o,t,e){if(t===e)return!1;const s=o[t],i=o[e],n=yt(s);return!n||i.length>=T?!1:i.length===0||i[i.length-1]===n.color}function We(o,t){const e=yt(o);return e?Math.min(e.count,T-t.length):0}function Ke(o,t,e){const s=o[t],i=o[e],n=We(s,i),r=s[s.length-1];for(let a=0;a<n;a++)s.pop(),i.push(r);return{from:t,to:e,count:n}}function Qe(o,t){const e=o[t.from],s=o[t.to];for(let i=0;i<t.count;i++){const n=s.pop();n!==void 0&&e.push(n)}}function Q(o){return o.every(t=>t.length===0?!0:t.length!==T?!1:t.every(e=>e===t[0]))}function Tt(o){return o.map(t=>t.slice())}function Je(o){let t=o>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ze(o,t){for(let e=o.length-1;e>0;e--){const s=Math.floor(t()*(e+1)),i=o[e];o[e]=o[s],o[s]=i}return o}class ts{items=[];get size(){return this.items.length}push(t){const e=this.items;e.push(t);let s=e.length-1;for(;s>0;){const i=s-1>>1;if(e[i].f<=e[s].f)break;const n=e[i];e[i]=e[s],e[s]=n,s=i}}pop(){const t=this.items,e=t[0],s=t.pop();if(t.length===0||s===void 0)return e;t[0]=s;let i=0;for(;;){const n=i*2+1,r=n+1;let a=i;if(n<t.length&&t[n].f<t[a].f&&(a=n),r<t.length&&t[r].f<t[a].f&&(a=r),a===i)break;const l=t[a];t[a]=t[i],t[i]=l,i=a}return e}}function At(o){return o.map(t=>t.join(",")).sort().join(";")}function Pt(o){let t=0;const e=new Set;for(const s of o)for(let i=0;i<s.length;i++)(i===0||s[i]!==s[i-1])&&t++,e.add(s[i]);return t-e.size}function es(o){const t=[];for(let e=0;e<o.length;e++){const s=o[e],i=yt(s);if(!i)continue;const n=i.count===s.length;let r=!1;for(let a=0;a<o.length;a++){if(a===e)continue;const l=o[a];if(l.length>=T)continue;if(l.length===0){if(n||r)continue;r=!0}else if(l[l.length-1]!==i.color)continue;const c=Math.min(i.count,T-l.length),h=o.slice();h[e]=s.slice(0,s.length-c),h[a]=l.concat(new Array(c).fill(i.color)),t.push(h)}}return t}function Lt(o,t){if(Q(o))return{moves:0,optimal:!0};const e=new ts,s=new Map,i=Pt(o);e.push({tubes:o,g:0,f:i*t.weight}),s.set(At(o),0);let n=0;for(;e.size>0;){const r=e.pop();if(!r)break;if(++n>t.maxNodes)return null;for(const a of es(r.tubes)){const l=r.g+1;if(Q(a))return{moves:l,optimal:t.weight===1};const c=At(a),h=s.get(c);h!==void 0&&h<=l||(s.set(c,l),e.push({tubes:a,g:l,f:l+Pt(a)*t.weight}))}}return null}function ss(o){return o<=10?{colors:4,emptyTubes:2}:o<=20?{colors:5,emptyTubes:2}:o<=80?{colors:Math.min(9,6+Math.floor((o-21)/15)),emptyTubes:2}:o<=200?{colors:Math.min(12,10+Math.floor((o-81)/40)),emptyTubes:2}:{colors:Math.min(14,12+Math.floor((o-201)/100)),emptyTubes:1}}function is(o,t){return o<=Math.ceil(t*1.3)?3:o<=Math.ceil(t*1.8)?2:1}function ns(o){const{colors:t,emptyTubes:e}=ss(o);for(let s=0;s<200;s++){const i=(Math.imul(o,2654435769)^Math.imul(s+1,2246822507))>>>0,n=Je(i),r=[];for(let c=0;c<t;c++)for(let h=0;h<T;h++)r.push(c);Ze(r,n);const a=[];for(let c=0;c<t;c++)a.push(r.slice(c*T,(c+1)*T));for(let c=0;c<e;c++)a.push([]);if(a.some(c=>c.length===T&&c.every(h=>h===c[0]))||Q(a))continue;let l=t<=9?Lt(a,{maxNodes:15e4,weight:1}):null;if(l||(l=Lt(a,{maxNodes:2e5,weight:3})),!!l&&!(l.moves<t+2))return{tubes:a,minMoves:l.moves,optimal:l.optimal,numColors:t,emptyTubes:e}}throw new Error(`Could not generate a solvable level ${o}`)}const R=14,Qt={value:1400};function os(o,t){Qt.value=o/(2*Math.tan(ft.degToRad(t/2)))}const rs=`
attribute float aSize;
attribute vec3 aColor;
attribute float aAlpha;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,as=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 tex = texture2D(uMap, gl_PointCoord);
  float a = tex.a * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor * tex.rgb, a);
}
`,Ct=new C;function Bt(o){return Ct.setHex(g[o%g.length]).lerp(new C(16777215),.55),Ct.clone()}class ls{constructor(t){this.liquidRadius=t;const e=new pt;e.setAttribute("position",new P(this.positions,3).setUsage(q)),e.setAttribute("aColor",new P(this.colors,3).setUsage(q)),e.setAttribute("aSize",new P(this.sizes,1).setUsage(q)),e.setAttribute("aAlpha",new P(this.alphas,1).setUsage(q)),e.setDrawRange(0,R),e.boundingSphere=new re(new m(0,0,0),t+2);const s=new ae({uniforms:{uMap:{value:tt(64)},uScale:Qt},vertexShader:rs,fragmentShader:as,transparent:!0,depthWrite:!1,depthTest:!1});this.points=new Ht(e,s),this.points.renderOrder=4,this.points.frustumCulled=!1;for(let i=0;i<R;i++)this.bubbles.push({baseX:0,z:0,y:0,yTop:0,size:.02,speed:0,wobbleAmp:0,wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:4+Math.random()*3,delay:Math.random()*7+.4,color:Bt(0)}),this.alphas[i]=0}points;bubbles=[];positions=new Float32Array(R*3);colors=new Float32Array(R*3);sizes=new Float32Array(R);alphas=new Float32Array(R);layers=[];topY=0;stirLevel=0;setStack(t,e,s){this.layers=[];let i=s;for(const n of t){const r=n.count*e;r>.03&&this.layers.push({color:n.color,y0:i,y1:i+r}),i+=r}this.topY=this.layers.length?this.layers[this.layers.length-1].y1:0}stir(t=1){this.stirLevel=Math.min(1.5,this.stirLevel+t*.12)}burst(t=6){let e=0;for(const s of this.bubbles){if(e>=t)break;s.delay>0&&(s.delay=Math.random()*.12,e++)}}update(t){this.stirLevel=Math.max(0,this.stirLevel-t*1.1);const e=this.layers.length>0,s=t*(e?2.2:0)*(1+this.stirLevel*3.2),i=1+this.stirLevel*1.1;for(let r=0;r<this.bubbles.length;r++){const a=this.bubbles[r];if(a.delay>0){a.delay-=t*(1+this.stirLevel),a.delay<=0&&e?this.spawn(a):a.delay<=0&&(a.delay=.5),this.alphas[r]=0;continue}if(!e){this.alphas[r]=0,a.delay=.4+Math.random();continue}if(a.speed<=0){Math.random()<s?this.spawn(a):this.alphas[r]=0;continue}a.speed+=.55*t,a.y+=a.speed*t*i,a.wobblePhase+=a.wobbleSpeed*t;const l=a.yTop>0?(a.y-this.layers[0].y0)/Math.max(.1,a.yTop-this.layers[0].y0):1,c=Math.min(1,l/.08),h=Math.min(1,Math.max(0,(1-l)/.14));if(this.alphas[r]=.62*c*h,a.y>=a.yTop){a.speed=0,a.delay=2+Math.random()*6/(1+this.stirLevel*2),this.alphas[r]=0;continue}const u=a.baseX+Math.sin(a.wobblePhase)*a.wobbleAmp;this.positions[r*3]=u,this.positions[r*3+1]=Math.max(a.y,.001),this.positions[r*3+2]=a.z,this.colors[r*3]=a.color.r,this.colors[r*3+1]=a.color.g,this.colors[r*3+2]=a.color.b,this.sizes[r]=a.size}if(e)for(let r=0;r<this.bubbles.length;r++){const a=this.bubbles[r];a.delay>0&&Math.random()<s/R&&(a.delay=Math.min(a.delay,.05))}const n=this.points.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("aColor").needsUpdate=!0,n.getAttribute("aSize").needsUpdate=!0,n.getAttribute("aAlpha").needsUpdate=!0}spawn(t){const e=this.layers[Math.floor(Math.random()*this.layers.length)],s=this.liquidRadius*.62*Math.sqrt(Math.random()),i=Math.random()*Math.PI*2;t.baseX=Math.cos(i)*s,t.z=Math.sin(i)*s*.5,t.y=e.y0+.01+Math.random()*.08,t.yTop=Math.max(this.topY-.03,t.y+.1),t.size=.016+Math.random()*.026,t.speed=.12+Math.random()*.18+this.stirLevel*.2,t.wobbleAmp=.008+Math.random()*.02,t.wobbleSpeed=3+Math.random()*4,t.color=Bt(e.color),t.delay=0}}const cs=new F(.1,.065),_t=g.map(o=>new x({color:o,side:Z,transparent:!0}));class hs{group=new G;pieces=[];burst(t,e,s){for(let i=0;i<e;i++){const n=_t[Math.floor(Math.random()*_t.length)],r=new d(cs,n),a=.75+Math.random()*.7;r.scale.set(a,a,a),r.position.set(t.x+(Math.random()-.5)*s,t.y+Math.random()*.6,t.z+.8+Math.random()*.4);const l={mesh:r,velocity:new m((Math.random()-.5)*2.4,1.5+Math.random()*2.5,(Math.random()-.5)*.6),spin:new m(Math.random()*8,Math.random()*8,Math.random()*8),life:2.2+Math.random()*.8};this.pieces.push(l),this.group.add(r)}}update(t){for(let e=this.pieces.length-1;e>=0;e--){const s=this.pieces[e];if(s.life-=t,s.life<=0){this.group.remove(s.mesh),this.pieces.splice(e,1);continue}s.velocity.y-=5.5*t,s.mesh.position.addScaledVector(s.velocity,t),s.mesh.rotation.x+=s.spin.x*t,s.mesh.rotation.y+=s.spin.y*t,s.mesh.rotation.z+=s.spin.z*t}}clear(){for(const t of this.pieces)this.group.remove(t.mesh);this.pieces=[]}}const X=32,L=8,us=.045;function dt(o,t){const e=new C(o);return e.lerp(new C(16777215),t),e}function ds(){const o=new Uint16Array(X*L*6);let t=0;for(let e=0;e<X;e++)for(let s=0;s<L;s++){const i=e*(L+1)+s,n=i+L+1;o[t++]=i,o[t++]=n,o[t++]=i+1,o[t++]=n,o[t++]=n+1,o[t++]=i+1}return new P(o,1)}class Rt{mesh;geometry;pos;constructor(t){this.pos=new Float32Array((X+1)*(L+1)*3),this.geometry=new pt,this.geometry.setAttribute("position",new P(this.pos,3).setUsage(q)),this.geometry.setIndex(ds()),this.geometry.setDrawRange(0,0),this.mesh=new d(this.geometry,t),this.mesh.visible=!1,this.mesh.renderOrder=8,this.mesh.frustumCulled=!1}get positions(){return this.pos}commit(t){this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.setDrawRange(0,t*L*6),this.mesh.visible=t>0}}const H=new m,nt=new m,D=new m,W=new m,ps=new m(0,0,1);class fs{group=new G;body=new Rt(new x({color:16777215,transparent:!0,opacity:.95}));foam=new Rt(new x({color:16777215,transparent:!0,opacity:.42,blending:I,depthWrite:!1}));curve=new le(new m,new m,new m);time=0;constructor(){this.group.add(this.body.mesh,this.foam.mesh)}begin(t){this.body.mesh.material.color.copy(dt(g[t%g.length],.16)),this.foam.mesh.material.color.copy(dt(g[t%g.length],.5))}update(t,e,s,i=1/60){if(this.time+=i,s=Math.min(1,Math.max(0,s)),s<=.02||s>=.995){this.body.commit(0),this.foam.commit(0);return}this.curve.v0.copy(t),this.curve.v2.copy(e),this.curve.v1.lerpVectors(t,e,.42);const n=Math.hypot(e.x-t.x,e.y-t.y);this.curve.v1.y+=Math.min(.9,.3+n*.3)*(1.45-.85*s);const r=Math.max(1,Math.floor(X*s));this.rebuildTube(this.body,r,s,1),this.rebuildTube(this.foam,r,s,.5)}tipPoint(t,e){return this.curve.getPoint(Math.min(1,Math.max(0,t)),e)}end(){this.body.commit(0),this.foam.commit(0)}rebuildTube(t,e,s,i){const n=t.positions;let r=0;for(let a=0;a<=e;a++){const l=a/X,c=l/s;this.curve.getPoint(l,H),this.curve.getTangent(l,nt).normalize(),D.crossVectors(nt,ps).normalize(),W.crossVectors(D,nt).normalize();let h=us*i*(1.06-.42*c);h*=1-.5*ft.smoothstep(c,.86,1),h*=1+.085*Math.sin(l*16-this.time*24)+.035*Math.sin(l*33-this.time*41);for(let u=0;u<=L;u++){const f=u/L*Math.PI*2,w=Math.cos(f)*h,y=Math.sin(f)*h;n[r++]=H.x+W.x*w+D.x*y,n[r++]=H.y+W.y*w+D.y*y,n[r++]=H.z+W.z*w+D.z*y}}t.commit(e)}}const ms=48;class ws{group=new G;geo=new ce(.035,8,6);mats=new Map;drops=[];constructor(){for(let t=0;t<ms;t++){const e=new d(this.geo,this.materialFor(0));e.visible=!1,this.group.add(e),this.drops.push({mesh:e,velocity:new m,life:0,maxLife:0,baseScale:1,active:!1})}}materialFor(t){let e=this.mats.get(t);return e||(e=new x({color:dt(g[t%g.length],.2)}),this.mats.set(t,e)),e}spawn(t,e,s,i){const n=this.drops.find(r=>!r.active)??this.drops[0];n.active=!0,n.mesh.visible=!0,n.mesh.material=this.materialFor(e),n.mesh.position.copy(t),n.velocity.set((Math.random()-.5)*s,i*(.6+Math.random()*.7),(Math.random()-.5)*s*.4),n.maxLife=n.life=.3+Math.random()*.22,n.baseScale=.6+Math.random()*.55,n.mesh.scale.setScalar(n.baseScale)}trickle(t,e,s=2){for(let i=0;i<s;i++)this.spawn(t,e,.5,.5)}splash(t,e,s=8){for(let i=0;i<s;i++)this.spawn(t,e,1.5,1.2)}update(t){for(const e of this.drops){if(!e.active)continue;if(e.life-=t,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.velocity.y-=7.5*t,e.mesh.position.addScaledVector(e.velocity,t);const s=Math.min(1,e.life/(e.maxLife*.4));e.mesh.scale.setScalar(Math.max(.05,e.baseScale*s))}}clear(){for(const t of this.drops)t.active=!1,t.mesh.visible=!1}}const A=.3,b=2.1,Y=.235,It=.45,Gt=-b/2+.09,gs=new mt(A,A,b,28,1,!0),bs=new wt(A,.032,10,28),vs=new mt(A,A*.9,.09,28),ys=new mt(1,1,1,24),xs=new wt(A+.13,.035,10,40),Ms=new wt(A+.13,.09,10,40),Ss=new he(Y*.96,24),ks=new F(.22,.075),Es=new F(.035,b-.25),zs=new ue(.86,1,40),Ts=new F(1.15,.5),As=new Wt(.85,b+.9,.9),v=new de({color:15004159,metalness:0,roughness:.07,transmission:1,thickness:.1,ior:1.45,attenuationColor:new C(10475263),attenuationDistance:1.4,clearcoat:.7,clearcoatRoughness:.25,specularIntensity:1,envMapIntensity:1.15,side:Z});let jt=!0;function ot(o){jt!==o&&(jt=o,o?(v.transmission=1,v.opacity=1,v.transparent=!1,v.depthWrite=!0,v.thickness=.1):(v.transmission=0,v.transparent=!0,v.opacity=.18,v.depthWrite=!1,v.thickness=0),v.needsUpdate=!0)}const Ps=new x({color:6809849,transparent:!0,opacity:.95,blending:I,depthWrite:!1}),Ls=new x({color:2282478,transparent:!0,opacity:.28,blending:I,depthWrite:!1,side:Z}),Yt=new x({color:16777215,transparent:!0,opacity:.13,blending:I,depthWrite:!1});let rt=null;const Cs=new x({visible:!1}),$t=new Map,Nt=new Map;function Jt(o,t){const e=new C(o);return e.lerp(new C(16777215),t),e}function Dt(o){let t=$t.get(o);if(!t){const e=g[o%g.length];t=new ut({color:e,roughness:.34,metalness:.04,emissive:e,emissiveIntensity:.26,envMapIntensity:.6}),$t.set(o,t)}return t}function Ut(o){let t=Nt.get(o);return t||(t=new x({color:Jt(g[o%g.length],.42)}),Nt.set(o,t)),t}function Bs(){return new x({color:16777215,transparent:!0,opacity:0,blending:I,depthWrite:!1,side:Z})}const at=6,_s=5,Rs=.5;class Is{group=new G;ripples=[];cooldown=0;constructor(){for(let t=0;t<_s;t++){const e=new d(zs,Bs());e.rotation.x=-Math.PI/2,e.visible=!1,e.renderOrder=4,this.group.add(e),this.ripples.push({mesh:e,t:0,active:!1})}}pulse(t,e,s=!1){if(this.cooldown>0&&!s)return;this.cooldown=s?.05:.13;const i=this.ripples.find(n=>!n.active)??this.ripples[0];i.active=!0,i.t=s?-.08:0,i.mesh.visible=!0,i.mesh.material.color.copy(Jt(g[t%g.length],.6)),i.mesh.position.y=e+.018}update(t){this.cooldown=Math.max(0,this.cooldown-t);for(const e of this.ripples){if(!e.active)continue;if(e.t+=t,e.t<0){e.mesh.visible=!1;continue}e.mesh.visible=!0;const s=e.t/Rs;if(s>=1){e.active=!1,e.mesh.visible=!1;continue}const i=1-(1-s)*(1-s);e.mesh.scale.setScalar(Y*(.12+i*.92)),e.mesh.material.opacity=.6*(1-s)*(1-s)}}clear(){for(const t of this.ripples)t.active=!1,t.mesh.visible=!1}}class Gs{group=new G;hit;home=new m;wobble=0;bubbles=new ls(Y);ripples=new Is;ring;ringGlow;surface;shine;layerMeshes=[];surfaceColorId=-1;topMesh=null;topBaseScaleY=0;topBaseY=0;liquidTopY=0;wobbleT=Math.random()*Math.PI*2;ringT=Math.random()*Math.PI*2;selected=!1;constructor(){rt||(rt=new x({map:tt(),color:132631,transparent:!0,opacity:.55,depthWrite:!1}));const t=new d(Ts,rt);t.position.y=-b/2-.09,t.position.z=-.15,t.renderOrder=-1,t.scale.set(1,.75,1),t.rotation.x=-.35;const e=new d(vs,v);e.position.y=-b/2;const s=new d(gs,v),i=new d(Es,Yt);i.position.set(-A*.55,0,A*.82),i.renderOrder=6;const n=new d(bs,v);n.rotation.x=Math.PI/2,n.position.y=b/2,this.ring=new d(xs,Ps.clone()),this.ring.rotation.x=Math.PI/2,this.ring.position.y=-b/2-.05,this.ring.renderOrder=7,this.ring.visible=!1,this.ringGlow=new d(Ms,Ls),this.ringGlow.rotation.x=Math.PI/2,this.ringGlow.position.y=-b/2-.05,this.ringGlow.renderOrder=7,this.ringGlow.visible=!1,this.surface=new d(Ss,Ut(0)),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.surface.visible=!1,this.shine=new d(ks,Yt),this.shine.rotation.x=-Math.PI/2,this.shine.position.x=-Y*.4,this.shine.renderOrder=4,this.shine.visible=!1,this.hit=new d(As,Cs);for(let r=0;r<at;r++){const a=new d(ys,Dt(0));a.visible=!1,a.renderOrder=1,this.layerMeshes.push(a),this.group.add(a)}this.group.add(t,e,s,i,n,this.ring,this.ringGlow,this.surface,this.shine,this.bubbles.points,this.ripples.group,this.hit)}setStack(t){let e=Gt,s=0;this.topMesh=null;for(const i of t){if(i.count<=.02||s>=at)continue;const n=this.layerMeshes[s++],r=i.count*It;n.visible=!0,n.material=Dt(i.color),n.scale.set(Y,r,Y),n.position.y=e+r/2,e+=r,this.topMesh=n,this.topBaseScaleY=r,this.topBaseY=n.position.y,this.surfaceColorId=i.color}for(let i=s;i<at;i++)this.layerMeshes[i].visible=!1;this.liquidTopY=this.topMesh?e:0,this.bubbles.setStack(t,It,Gt),this.topMesh?(this.surface.material=Ut(this.surfaceColorId),this.surface.visible=!0,this.shine.visible=!0):(this.surface.visible=!1,this.shine.visible=!1)}get surfaceLocalY(){return this.liquidTopY}pourImpact(t){this.liquidTopY>0&&this.ripples.pulse(t,this.liquidTopY,!0),this.bubbles.burst(7)}pourFlow(t){this.liquidTopY>0&&this.ripples.pulse(t,this.liquidTopY),this.bubbles.stir()}setSelected(t){this.selected=t,this.ring.visible=t,this.ringGlow.visible=t}tick(t){if(this.wobbleT+=t,this.wobble=Math.max(0,this.wobble-t*1.6),this.bubbles.update(t),this.ripples.update(t),this.selected){this.ringT+=t;const r=1+.045*Math.sin(this.ringT*5);this.ring.scale.setScalar(r),this.ringGlow.scale.setScalar(1+.08*Math.sin(this.ringT*5-.6)),this.ring.material.opacity=.85+.15*Math.sin(this.ringT*5)}if(!this.topMesh)return;const s=1+(.02+this.wobble*.1)*Math.sin(this.wobbleT*(3+this.wobble*9)),i=this.topBaseScaleY*s;this.topMesh.scale.y=i,this.topMesh.position.y=this.topBaseY+(i-this.topBaseScaleY)/2;const n=this.topMesh.position.y+i/2+.012;this.surface.position.y=n,this.shine.position.y=n+.004}}function U(o){o.audio.playTone(660,.05,.15)}function lt(o){o.audio.playTone(880,.06,.18)}function js(o){o.audio.playTone(180,.12,.2)}function Ys(o){o.audio.playTone(520,.07,.16),window.setTimeout(()=>o.audio.playTone(460,.07,.14),70),window.setTimeout(()=>o.audio.playTone(400,.08,.12),150)}function $s(o){o.audio.playTone(240,.09,.25)}function Ns(o){[523,659,784,1047].forEach((e,s)=>{window.setTimeout(()=>o.audio.playTone(e,.14,.22),s*110)})}const qt=.85,ct=1.35,Ds=.3,Us=.55,qs=1.6,Xt=new m;class Xs{constructor(t,e){this.save=t,this.session=e,this.three.background=gt();const s=new Mt(16777215,2);s.position.set(2,4,6);const i=new Mt(6809849,.7);i.position.set(-4,2,-5),this.three.add(s,i,new pe(5928152,725027,.55),new fe(16777215,.32),this.aurora.group,this.tubesGroup,this.confetti.group,this.stream.group,this.droplets.group)}three=new J;tubesGroup=new G;confetti=new hs;aurora=new bt;stream=new fs;droplets=new ws;raycaster=new me;level=1;data;initial=[];tubes=[];views=[];history=[];selected=-1;extraTubes=0;anim=null;won=!1;winTimer=0;finished=!1;needAd=!1;movesEl=null;undoBtn=null;addBtn=null;cleanups=[];qualityStop=null;qaProbe=new URLSearchParams(location.search).has("ws_probe");qaFreezePour=(()=>{const t=new URLSearchParams(location.search).get("ws_freezepour");if(t===null)return null;const e=Number(t);return Number.isFinite(e)&&e>0&&e<1?e:null})();enter(t){if(this.level=this.session.level,this.data=ns(this.level),this.initial=Tt(this.data.tubes),t.analytics.track("level_start",{level:this.level,minMoves:this.data.minMoves}),vt(this.three,t.renderer.webgl),this.startQualityWatchdog(t),this.buildHud(t),this.resetBoard(),this.fitCamera(t),this.cleanups.push(t.input.on("tap",e=>this.onTap(t,e.x,e.y))),new URLSearchParams(location.search).has("ws_streamtest")&&this.views.length>=2){const e=this.views[0],s=this.views[this.views.length-1];this.stream.begin(0),this.stream.update(new m(e.home.x,e.home.y+b/2,0),new m(s.home.x,s.home.y+b/2,0),.85)}}exit(t){t.ui.hide("play-hud");for(const e of this.cleanups)e();this.cleanups=[],this.qualityStop?.(),this.qualityStop=null,this.confetti.clear(),this.stream.end(),this.droplets.clear();for(const e of this.views)this.tubesGroup.remove(e.group);this.views=[],this.movesEl=null,this.undoBtn=null,this.addBtn=null}update(t,e){this.fitCamera(t),os(t.renderer.domElement.height,t.renderer.camera.fov),this.confetti.update(e),this.aurora.update(e),this.droplets.update(e);for(let s=0;s<this.views.length;s++){const i=this.views[s];if(i.tick(e),this.anim&&this.anim.from===s)continue;const n=i.home.y+(s===this.selected?Ds:0),r=Math.min(1,12*e);i.group.position.x+=(i.home.x-i.group.position.x)*r,i.group.position.y+=(n-i.group.position.y)*r,i.group.position.z+=(i.home.z-i.group.position.z)*r,i.group.rotation.z+=(0-i.group.rotation.z)*r}if(this.anim&&this.updatePour(t,e),this.won&&!this.finished&&(this.winTimer-=e,this.winTimer<=0)){this.finished=!0;const s=()=>t.setScene("gameover");this.needAd?t.ads.showInterstitial().then(s,s):s()}}resetBoard(){this.tubes=Tt(this.initial),this.history=[],this.selected=-1,this.extraTubes=0,this.anim=null,this.won=!1,this.finished=!1,this.winTimer=0,this.confetti.clear();for(const t of this.views)this.tubesGroup.remove(t.group);this.views=[];for(const t of this.tubes)this.createView(t);this.layout();for(const t of this.views)t.group.position.copy(t.home);this.refreshHud()}createView(t){const e=new Gs;return e.setStack(_(t)),this.tubesGroup.add(e.group),this.views.push(e),e}layout(){const t=this.views.length,e=t>6,s=e?Math.ceil(t/2):t;(e?[this.views.slice(0,s),this.views.slice(s)]:[this.views]).forEach((n,r)=>{const a=e?r===0?ct:-ct:0;n.forEach((l,c)=>{l.home.set((c-(n.length-1)/2)*qt,a,0)})})}fitCamera(t){const e=t.renderer.camera,s=this.views.length,i=s>6,r=((i?Math.ceil(s/2):s)-1)*qt/2+.9,a=(i?ct:0)+b/2+1.5,l=Math.tan(ft.degToRad(e.fov/2)),c=Math.max(a/l,r/(l*e.aspect),5);e.position.set(0,0,c),e.lookAt(0,-.13,0)}onTap(t,e,s){if(this.won||this.anim)return;const i=this.pickTube(t,e,s);if(i===-1){this.selected!==-1&&(this.deselect(),U(t));return}if(this.selected===-1){this.tubes[i].length>0?(this.select(i),lt(t)):U(t);return}if(i===this.selected){this.deselect(),U(t);return}He(this.tubes,this.selected,i)?this.startPour(t,this.selected,i):this.tubes[i].length>0?(this.select(i),lt(t)):js(t)}startQualityWatchdog(t){const e=new URLSearchParams(location.search),s=(()=>{try{return localStorage.getItem("ws.lowfx")==="1"}catch{return!1}})();if(e.has("ws_lowfx")||s){ot(!1);return}if(ot(!0),e.has("ws_probe")||e.has("ws_hiqual"))return;let i=0,n=0,r=performance.now(),a=0;const l=c=>{a=requestAnimationFrame(l);const h=c-r;if(r=c,h>250||(i++,i<=30))return;n+=h;const u=i-30;if(u<90)return;const f=n/u;if(f>1e3/50){ot(!1);try{localStorage.setItem("ws.lowfx","1")}catch{}t.analytics.track("fx_degraded",{level:this.level,avgFrameMs:Math.round(f*10)/10})}cancelAnimationFrame(a),this.qualityStop=null};a=requestAnimationFrame(l),this.qualityStop=()=>cancelAnimationFrame(a)}pickTube(t,e,s){const i=t.renderer.domElement.getBoundingClientRect(),n=new we((e-i.left)/i.width*2-1,-((s-i.top)/i.height)*2+1);this.raycaster.setFromCamera(n,t.renderer.camera);const a=this.raycaster.intersectObjects(this.views.map(l=>l.hit),!1)[0]?.object;return a?this.views.findIndex(l=>l.hit===a):-1}select(t){this.deselect(),this.selected=t,this.views[t].setSelected(!0)}deselect(){this.selected!==-1&&this.views[this.selected].setSelected(!1),this.selected=-1}startPour(t,e,s){const i=_(this.tubes[e]),n=_(this.tubes[s]),r=i[i.length-1].color,a=Ke(this.tubes,e,s);this.history.push(a),this.deselect(),this.anim={from:e,to:s,count:a.count,color:r,fromRuns:i,toRuns:n,t:0,duration:.34+a.count*.085},this.stream.begin(r),Ys(t),this.refreshHud()}updatePour(t,e){const s=this.anim;if(!s)return;s.t+=e;const i=this.qaFreezePour??Math.min(1,s.t/s.duration),n=i*i*(3-2*i),r=s.count*n,a=s.fromRuns.map(et=>({...et}));a[a.length-1].count-=r;const l=s.toRuns.map(et=>({...et})),c=l[l.length-1];c&&c.color===s.color?c.count+=r:r>.001&&l.push({color:s.color,count:r});const h=this.views[s.from],u=this.views[s.to];h.setStack(a),u.setStack(l);const f=Math.sin(i*Math.PI),w=u.home.x-h.home.x,y=Math.sign(w)||1;h.group.position.set(h.home.x+w*.15*f,h.home.y+Us*f,h.home.z+.5*f),h.group.rotation.z=-y*.5*f;const S=h.group.rotation.z,E=new m(h.group.position.x-Math.sin(S)*(b/2),h.group.position.y+Math.cos(S)*(b/2),h.group.position.z),$=new m(u.group.position.x,u.group.position.y+b/2+.02,u.group.position.z),N=Math.min(1,Math.max(0,(i-.1)/.78));this.stream.update(E,$,N,e),N>.05&&N<.985&&(u.pourFlow(s.color),h.bubbles.stir(.5),Math.random()<e*26&&(this.stream.tipPoint(N,Xt),this.droplets.trickle(Xt,s.color,1))),this.qaProbe&&(window.__wsPour={p:i,reveal:N,streamVisible:this.stream.group.children[0]?.visible??!1}),i>=1&&(h.setStack(_(this.tubes[s.from])),u.setStack(_(this.tubes[s.to])),u.wobble=1,u.pourImpact(s.color),h.group.position.copy(h.home),h.group.rotation.z=0,this.stream.end(),this.droplets.splash(new m(u.home.x,u.home.y+b/2,0),s.color),this.anim=null,$s(t),Q(this.tubes)&&this.onWin(t))}undo(t){if(this.won||this.anim||this.history.length===0)return;const e=this.history.pop();e&&(Qe(this.tubes,e),this.views[e.from].setStack(_(this.tubes[e.from])),this.views[e.to].setStack(_(this.tubes[e.to])),this.deselect(),U(t),this.refreshHud())}restart(t){this.won||(t.analytics.track("level_restart",{level:this.level,moves:this.history.length}),this.resetBoard(),U(t))}addTube(t){if(this.won||this.anim||this.extraTubes>=Et)return;this.extraTubes++,this.tubes.push([]);const e=this.createView([]);this.layout(),e.group.position.set(e.home.x,e.home.y+2.5,e.home.z),t.analytics.track("extra_tube",{level:this.level,extra:this.extraTubes}),lt(t),this.refreshHud()}onWin(t){this.won=!0,this.winTimer=qs,this.deselect(),Ns(t),this.confetti.burst(new m(-1.2,.4,0),60,1.6),this.confetti.burst(new m(1.2,.4,0),60,1.6);const e=this.history.length,s=is(e,this.data.minMoves),i=String(this.level),n={...this.save.get("levels")},r=n[i];n[i]={stars:Math.max(r?.stars??0,s),bestMoves:Math.min(r?.bestMoves??e,e)};const a=this.save.get("completions")+1;this.save.update({levels:n,completions:a,currentLevel:Math.max(this.save.get("currentLevel"),this.level+1)}),this.needAd=a%Ue===0&&!this.save.get("noAds"),t.analytics.track("level_complete",{level:this.level,moves:e,stars:s,minMoves:this.data.minMoves,extraTubes:this.extraTubes})}buildHud(t){const e=t.ui.screen("play-hud","jeez-ui-hud"),s=t.ui.iconButton("",()=>t.setScene("menu"));s.setAttribute("aria-label","Back to menu"),k(s,z("home",22));const i=document.createElement("div");i.className="ws-topbar",this.movesEl=t.ui.text("","ws-chip"),i.append(s,t.ui.text(`Level ${this.level}`,"ws-chip"),this.movesEl);const n=document.createElement("div");n.className="ws-bottombar",this.undoBtn=t.ui.button("",()=>this.undo(t),"ws-round"),this.undoBtn.setAttribute("aria-label","Undo last move"),k(this.undoBtn,z("undo",26));const r=t.ui.button("",()=>this.restart(t),"ws-round");r.setAttribute("aria-label","Restart level"),k(r,z("restart",26)),this.addBtn=t.ui.button("",()=>this.addTube(t),"ws-round"),this.addBtn.setAttribute("aria-label","Add an empty tube"),k(this.addBtn,z("add-tube",26)),n.append(this.undoBtn,r,this.addBtn),e.replaceChildren(i,n),t.ui.show("play-hud")}refreshHud(){this.movesEl&&(this.movesEl.innerHTML=`Moves <b>${this.history.length}</b> · Min ${this.data.minMoves}`),this.undoBtn&&(this.undoBtn.disabled=this.history.length===0),this.addBtn&&(this.addBtn.disabled=this.extraTubes>=Et)}}const Ft="water-sort-style",Fs=`
/* ---------- fonts ---------- */
.jeez-ui-root {
  font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --ws-ink: #eef4ff;
  --ws-ink-2: rgba(226, 236, 255, 0.72);
  --ws-ink-3: rgba(226, 236, 255, 0.42);
  --ws-aqua: #22d3ee;
  --ws-aqua-deep: #0e94c4;
  --ws-aqua-edge: #075e8c;
  --ws-violet: #a78bfa;
  --ws-gold: #ffd23f;
  --ws-glass: rgba(158, 187, 255, 0.09);
  --ws-glass-strong: rgba(158, 187, 255, 0.14);
  --ws-glass-border: rgba(170, 198, 255, 0.18);
  --ws-r-sm: 12px;
  --ws-r-md: 16px;
  --ws-r-lg: 20px;
  color: var(--ws-ink);
}
.jeez-ui-root button { font: inherit; }
.jeez-ui-root button:focus-visible { outline: 2px solid var(--ws-aqua); outline-offset: 2px; }

/* ---------- screen entrance ---------- */
@keyframes ws-screen-in {
  from { opacity: 0; transform: translateY(12px) scale(0.985); }
  to { opacity: 1; transform: none; }
}
.jeez-ui-screen { animation: ws-screen-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both; gap: 20px; }
.jeez-ui-overlay { background: rgba(6, 10, 28, 0.55); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }

/* ---------- buttons ---------- */
.jeez-ui-button {
  appearance: none;
  border: 0;
  border-radius: var(--ws-r-md);
  padding: 16px 30px;
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Nunito', system-ui, sans-serif;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.015em;
  background: linear-gradient(180deg, #35dcf3, var(--ws-aqua-deep));
  color: #083344;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
  box-shadow: 0 3px 0 var(--ws-aqua-edge), 0 12px 26px rgba(34, 211, 238, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.42);
  cursor: pointer;
  touch-action: manipulation;
  transition: transform 0.09s ease, box-shadow 0.09s ease, filter 0.12s ease;
}
.jeez-ui-button:active {
  transform: translateY(3px);
  box-shadow: 0 0 0 var(--ws-aqua-edge), 0 6px 16px rgba(34, 211, 238, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.42);
}
.jeez-ui-button--ghost {
  background: var(--ws-glass);
  color: var(--ws-ink);
  text-shadow: none;
  border: 1.5px solid var(--ws-glass-border);
  box-shadow: 0 3px 0 rgba(110, 138, 190, 0.28), 0 8px 18px rgba(4, 8, 24, 0.35),
    inset 0 1px 0 rgba(232, 240, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.jeez-ui-button--ghost:active {
  box-shadow: 0 0 0 rgba(110, 138, 190, 0.28), 0 4px 10px rgba(4, 8, 24, 0.3),
    inset 0 1px 0 rgba(232, 240, 255, 0.1);
}
.jeez-ui-icon-button {
  width: 46px;
  height: 46px;
  min-height: 46px;
  padding: 0;
  border-radius: 50%;
  font-size: 20px;
  background: var(--ws-glass);
  color: var(--ws-ink);
  text-shadow: none;
  border: 1.5px solid var(--ws-glass-border);
  box-shadow: 0 3px 0 rgba(110, 138, 190, 0.28), 0 8px 18px rgba(4, 8, 24, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.jeez-ui-icon-button:active {
  box-shadow: 0 0 0 rgba(110, 138, 190, 0.25), 0 4px 10px rgba(4, 8, 24, 0.3);
}
.jeez-ui-button svg, .jeez-ui-icon-button svg { display: block; }

/* ---------- title / text ---------- */
.jeez-ui-title {
  margin: 0;
  font-family: 'Fredoka', 'Nunito', system-ui, sans-serif;
  font-weight: 600;
  font-size: 42px;
  line-height: 1;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 20px rgba(34, 211, 238, 0.35), 0 2px 6px rgba(3, 8, 22, 0.6);
}
.jeez-ui-text { margin: 0; font-size: 16px; color: var(--ws-ink-2); }
.jeez-ui-score { margin: 0; font-size: 26px; font-weight: 800; }

/* ---------- menu hero ---------- */
.ws-hero { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 4px; }
.ws-logo {
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  color: var(--ws-aqua);
  filter: drop-shadow(0 0 18px rgba(34, 211, 238, 0.55));
  animation: ws-bob 3.6s ease-in-out infinite;
}
@keyframes ws-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
.ws-logo svg { width: 88px; height: 88px; }
.ws-word { font-family: 'Fredoka', 'Nunito', sans-serif; font-weight: 600; font-size: 52px; line-height: 0.95; letter-spacing: 0; }
.ws-word--a { color: #8feaff; text-shadow: 0 0 26px rgba(34, 211, 238, 0.55), 0 2px 6px rgba(3, 8, 22, 0.7); }
.ws-word--b { color: #d6c7ff; text-shadow: 0 0 26px rgba(167, 139, 250, 0.5), 0 2px 6px rgba(3, 8, 22, 0.7); }
.ws-subtitle {
  margin: 10px 0 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--ws-ink-2);
}
.ws-stack { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.ws-mute { margin-top: auto; margin-bottom: 6px; }

/* ---------- chips / HUD ---------- */
.ws-topbar {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  pointer-events: none;
}
.ws-topbar > * { pointer-events: auto; }
.ws-chip {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 44px;
  background: var(--ws-glass);
  border: 1.5px solid var(--ws-glass-border);
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: var(--ws-ink);
  text-shadow: 0 1px 2px rgba(3, 8, 22, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 14px rgba(3, 8, 22, 0.35), inset 0 1px 0 rgba(232, 240, 255, 0.1);
}
.ws-chip b { color: #8feaff; font-weight: 800; }
.ws-bottombar {
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  pointer-events: none;
}
.ws-bottombar > * { pointer-events: auto; }
.ws-round {
  width: 56px;
  height: 56px;
  padding: 0;
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--ws-ink);
  background: var(--ws-glass-strong);
  border: 1.5px solid var(--ws-glass-border);
  box-shadow: 0 3px 0 rgba(110, 138, 190, 0.3), 0 10px 22px rgba(3, 8, 22, 0.45),
    inset 0 1px 0 rgba(232, 240, 255, 0.14);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.09s ease, box-shadow 0.09s ease, opacity 0.12s ease;
}
.ws-round:active {
  transform: translateY(3px);
  box-shadow: 0 0 0 rgba(110, 138, 190, 0.2), 0 4px 12px rgba(3, 8, 22, 0.4),
    inset 0 1px 0 rgba(232, 240, 255, 0.1);
}
.ws-round:disabled { opacity: 0.38; filter: saturate(0); box-shadow: 0 3px 0 rgba(110, 138, 190, 0.15), 0 6px 14px rgba(3, 8, 22, 0.35); }

/* ---------- glass panel ---------- */
.ws-panel {
  background: var(--ws-glass);
  border: 1.5px solid var(--ws-glass-border);
  border-radius: var(--ws-r-lg);
  box-shadow: 0 18px 40px rgba(3, 8, 22, 0.45), inset 0 1px 0 rgba(232, 240, 255, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

/* ---------- level select ---------- */
.ws-grid {
  display: grid;
  grid-template-columns: repeat(6, 52px);
  gap: 10px;
  max-height: 54vh;
  overflow-y: auto;
  padding: 14px;
  border-radius: var(--ws-r-lg);
  background: var(--ws-glass);
  border: 1.5px solid var(--ws-glass-border);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  scrollbar-width: none;
}
.ws-grid::-webkit-scrollbar { display: none; }
.ws-cell {
  width: 52px;
  height: 52px;
  min-height: 52px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 800;
  line-height: 1;
  color: var(--ws-ink);
  background: var(--ws-glass-strong);
  border: 1.5px solid var(--ws-glass-border);
  box-shadow: inset 0 1px 0 rgba(232, 240, 255, 0.1), 0 3px 8px rgba(3, 8, 22, 0.3);
  transition: transform 0.09s ease, box-shadow 0.09s ease;
}
.ws-cell:active { transform: scale(0.93); }
.ws-cell--done {
  background: rgba(255, 210, 63, 0.1);
  border-color: rgba(255, 210, 63, 0.42);
}
.ws-cell--current {
  background: linear-gradient(180deg, #35dcf3, var(--ws-aqua-deep));
  color: #083344;
  border-color: rgba(190, 245, 255, 0.85);
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.45);
}
.ws-cell--locked {
  background: rgba(120, 132, 168, 0.1);
  border-color: rgba(160, 172, 205, 0.14);
  color: var(--ws-ink-3);
  box-shadow: none;
}
.ws-cell--locked:disabled { opacity: 1; }
.ws-cell-stars { display: flex; gap: 2px; height: 9px; align-items: center; justify-content: center; }
.ws-cell-stars svg { width: 9px; height: 9px; }
.ws-cell-stars .ws-mini-on { color: var(--ws-gold); }
.ws-cell-stars .ws-mini-off { color: rgba(226, 236, 255, 0.22); }

/* ---------- game over card ---------- */
.ws-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 26px 30px 24px;
  border-radius: 24px;
  max-width: 320px;
  width: calc(100vw - 64px);
  box-sizing: border-box;
}
.ws-eyebrow {
  margin: 0;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #8feaff;
  text-shadow: 0 0 16px rgba(34, 211, 238, 0.5);
}
.ws-stars-wrap { position: relative; display: grid; place-items: center; height: 96px; }
.ws-rays {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: repeating-conic-gradient(rgba(255, 210, 63, 0.14) 0deg 14deg, transparent 14deg 28deg);
  -webkit-mask-image: radial-gradient(circle, #000 28%, transparent 66%);
  mask-image: radial-gradient(circle, #000 28%, transparent 66%);
  animation: ws-spin 16s linear infinite;
}
@keyframes ws-spin { to { transform: rotate(360deg); } }
.ws-stars-row { display: flex; gap: 10px; position: relative; }
.ws-star { width: 46px; height: 46px; animation: ws-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) backwards; }
.ws-star:nth-child(2) { width: 54px; height: 54px; margin-top: -8px; }
.ws-star--on { color: var(--ws-gold); filter: drop-shadow(0 2px 10px rgba(255, 210, 63, 0.65)); }
.ws-star--off { color: rgba(226, 236, 255, 0.3); }
@keyframes ws-pop { from { transform: scale(0) rotate(-30deg); } }
.ws-best { margin: 0; }

/* ---------- stars inside cells ---------- */
.ws-cell-num { line-height: 1; }
`;function Os(){if(document.getElementById(Ft))return;const o=document.createElement("style");o.id=Ft,o.textContent=Fs,document.head.appendChild(o)}const Zt=document.getElementById("app");if(!Zt)throw new Error("Missing #app container in index.html");const O=new je({key:$e,version:Ne,defaults:{currentLevel:1,levels:{},completions:0,muted:!1,noAds:!1}}),V={level:O.get("currentLevel")},B=new Ge({container:Zt,logicHz:De});B.audio.setMuted(O.get("muted"));Os();B.registerScene("menu",new Ve(O,V));B.registerScene("play",new Xs(O,V));B.registerScene("gameover",new Oe(O,V));B.analytics.initialize();B.ads.initialize();B.iap.initialize();const xt=new URLSearchParams(location.search),ht=Number(xt.get("ws_level"));Number.isFinite(ht)&&ht>0&&(V.level=Math.floor(ht));const K=xt.get("ws_scene");K==="gameover"&&!xt.has("ws_level")&&(V.level=1);B.start(K==="play"||K==="gameover"?K:"menu");requestAnimationFrame(()=>{requestAnimationFrame(()=>document.getElementById("boot")?.remove())});
