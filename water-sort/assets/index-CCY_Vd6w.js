import{W as he,P as ue,C as Kt,S as Zt,a as _,B as wt,b as A,c as Qt,d as de,A as G,G as j,M as S,e as p,f as X,g as st,h as Jt,i as ft,j as pe,k as fe,l as me,D as F,m as we,V as m,n as ge,o as te,p as it,Q as be,q as ve,r as gt,T as bt,s as ye,R as xe,t as Me,u as kt,H as Se,v as ke,w as Te,x as Pe}from"./three-Cgn8e5J4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const Ee=(()=>{try{return typeof location<"u"&&new URLSearchParams(location.search).has("debug")?!0:typeof localStorage<"u"&&localStorage.getItem("jeez.debug")==="1"}catch{return!1}})();function k(...o){Ee&&console.debug(...o)}class ze{}class Ae extends ze{async initialize(){k("[ads] noop provider initialized")}async showInterstitial(){return k("[ads] interstitial (noop)"),!0}async showRewarded(){return k("[ads] rewarded (noop) — granting reward"),!0}async showBanner(t="bottom"){k(`[ads] show banner at ${t} (noop)`)}async hideBanner(){k("[ads] hide banner (noop)")}}class Le{async initialize(){k("[analytics] console provider initialized")}track(t,e){k(`[analytics] ${t}`,e??{})}identify(t,e){k(`[analytics] identify ${t}`,e??{})}isFeatureEnabled(t){return!1}reset(){k("[analytics] reset")}}class _e{graph=null;buffers=new Map;currentBgm=null;volumes={master:1,bgm:.6,sfx:1};_muted=!1;get muted(){return this._muted}unlock(){const{ctx:t}=this.ensure();t.state==="suspended"&&t.resume()}async load(t,e){const s=await fetch(e);if(!s.ok)throw new Error(`Failed to load audio "${t}" from ${e}`);const i=await s.arrayBuffer(),n=await this.ensure().ctx.decodeAudioData(i);this.buffers.set(t,n)}playSfx(t,e={}){const s=this.ensure(),i=this.buffers.get(t);if(!i){console.warn(`[audio] SFX "${t}" not loaded`);return}const n=s.ctx.createBufferSource();if(n.buffer=i,n.playbackRate.value=e.playbackRate??1,e.volume!==void 0){const r=s.ctx.createGain();r.gain.value=e.volume,n.connect(r).connect(s.sfx)}else n.connect(s.sfx);n.start()}playTone(t=880,e=.08,s=.2){const i=this.ensure();if(i.ctx.state!=="running")return;const n=i.ctx.currentTime,r=i.ctx.createOscillator(),a=i.ctx.createGain();r.type="sine",r.frequency.value=t,a.gain.setValueAtTime(s,n),a.gain.exponentialRampToValueAtTime(.001,n+e),r.connect(a).connect(i.sfx),r.start(n),r.stop(n+e)}playBgm(t,e={}){if(this.currentBgm?.name===t)return;this.stopBgm();const s=this.ensure(),i=this.buffers.get(t);if(!i){console.warn(`[audio] BGM "${t}" not loaded`);return}const n=s.ctx.createBufferSource();n.buffer=i,n.loop=e.loop??!0;const r=s.ctx.createGain(),a=e.fadeInSec??.5,c=s.ctx.currentTime;r.gain.setValueAtTime(.001,c),r.gain.exponentialRampToValueAtTime(1,c+a),n.connect(r).connect(s.bgm),n.start(),this.currentBgm={source:n,gain:r,name:t}}stopBgm(t=.3){const e=this.currentBgm;if(!e||!this.graph)return;this.currentBgm=null;const s=this.graph.ctx.currentTime;e.gain.gain.setValueAtTime(e.gain.gain.value,s),e.gain.gain.exponentialRampToValueAtTime(.001,s+t),e.source.stop(s+t)}setMuted(t){this._muted=t,this.applyVolumes()}toggleMuted(){return this.setMuted(!this._muted),this._muted}setVolume(t,e){this.volumes[t]=Math.min(1,Math.max(0,e)),this.applyVolumes()}getVolume(t){return this.volumes[t]}async suspend(){this.graph&&this.graph.ctx.state==="running"&&await this.graph.ctx.suspend()}async resume(){this.graph&&this.graph.ctx.state==="suspended"&&await this.graph.ctx.resume()}ensure(){if(!this.graph){const t=new AudioContext,e=t.createGain();e.connect(t.destination);const s=t.createGain();s.connect(e);const i=t.createGain();i.connect(e),this.graph={ctx:t,master:e,bgm:s,sfx:i},this.applyVolumes()}return this.graph}applyVolumes(){this.graph&&(this.graph.master.gain.value=this._muted?0:this.volumes.master,this.graph.bgm.gain.value=this.volumes.bgm,this.graph.sfx.gain.value=this.volumes.sfx)}}class Ce{}class Re extends Ce{owned=new Set;async initialize(){k("[iap] noop provider initialized")}async getProducts(t){return t.map(e=>({id:e,title:e,description:`Placeholder product "${e}"`,price:"$0.00"}))}async purchase(t){return k(`[iap] simulated purchase of ${t}`),this.owned.add(t),{productId:t,success:!0}}async restorePurchases(){return[...this.owned]}isOwned(t){return this.owned.has(t)}}const Be=250,Ie=12,Ye=8,Ge=40,je=400;class Oe{listeners={};pointers=new Map;keys=new Set;target;startX=0;startY=0;startTime=0;lastX=0;lastY=0;dragging=!1;pinching=!1;pinchStartDist=1;pinchScale=1;constructor(t){this.target=t,t.style.touchAction="none",t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}on(t,e){return this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),()=>this.listeners[t]?.delete(e)}off(t,e){this.listeners[t]?.delete(e)}isKeyDown(t){return this.keys.has(t)}dispose(){this.target.removeEventListener("pointerdown",this.onPointerDown),this.target.removeEventListener("pointermove",this.onPointerMove),this.target.removeEventListener("pointerup",this.onPointerUp),this.target.removeEventListener("pointercancel",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}emit(t,e){const s=this.listeners[t];if(s)for(const i of s)i(e)}pinchDistance(){const[t,e]=[...this.pointers.values()];return!t||!e?1:Math.hypot(t.x-e.x,t.y-e.y)||1}pinchCenter(){const[t,e]=[...this.pointers.values()];return!t||!e?{x:0,y:0}:{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}onPointerDown=t=>{this.target.setPointerCapture(t.pointerId),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===1?(this.startX=this.lastX=t.clientX,this.startY=this.lastY=t.clientY,this.startTime=performance.now(),this.dragging=!1):this.pointers.size===2&&(this.dragging&&(this.emit("dragend",this.dragEvent(t.clientX,t.clientY,0,0)),this.dragging=!1),this.pinching=!0,this.pinchStartDist=this.pinchDistance(),this.pinchScale=1)};onPointerMove=t=>{const e=this.pointers.get(t.pointerId);if(!e)return;if(e.x=t.clientX,e.y=t.clientY,this.pinching&&this.pointers.size>=2){const n=this.pinchDistance()/this.pinchStartDist,r=this.pinchCenter();this.emit("pinch",{scale:n,deltaScale:n-this.pinchScale,centerX:r.x,centerY:r.y}),this.pinchScale=n;return}if(this.pointers.size!==1)return;const s=t.clientX-this.lastX,i=t.clientY-this.lastY;this.dragging||Math.hypot(t.clientX-this.startX,t.clientY-this.startY)>Ye&&(this.dragging=!0,this.emit("dragstart",this.dragEvent(t.clientX,t.clientY,0,0))),this.dragging&&this.emit("drag",this.dragEvent(t.clientX,t.clientY,s,i)),this.lastX=t.clientX,this.lastY=t.clientY};onPointerUp=t=>{if(!this.pointers.delete(t.pointerId))return;if(this.pinching&&this.pointers.size<2){this.pinching=!1;const r=this.pinchCenter();this.emit("pinchend",{scale:this.pinchScale,deltaScale:0,centerX:r.x,centerY:r.y});const a=[...this.pointers.values()][0];a&&(this.startX=this.lastX=a.x,this.startY=this.lastY=a.y,this.startTime=performance.now(),this.dragging=!1);return}if(this.pointers.size>0)return;const e=performance.now()-this.startTime,s=t.clientX-this.startX,i=t.clientY-this.startY,n=Math.hypot(s,i);if(this.dragging){if(this.dragging=!1,this.emit("dragend",this.dragEvent(t.clientX,t.clientY,0,0)),n>=Ge&&e<=je){const r=Math.abs(s)>Math.abs(i)?s>0?"right":"left":i>0?"down":"up";this.emit("swipe",{direction:r,dx:s,dy:i,durationMs:e})}}else e<=Be&&n<=Ie&&this.emit("tap",{x:t.clientX,y:t.clientY})};dragEvent(t,e,s,i){return{x:t,y:e,dx:s,dy:i,totalDx:t-this.startX,totalDy:e-this.startY}}onKeyDown=t=>{this.keys.add(t.code),this.emit("keydown",t)};onKeyUp=t=>{this.keys.delete(t.code),this.emit("keyup",t)}}const $e=2;class Ne{webgl;camera;container;observer;constructor(t){this.container=t,getComputedStyle(t).position==="static"&&(t.style.position="relative"),this.webgl=new he({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.webgl.setPixelRatio(Math.min(window.devicePixelRatio,$e)),this.webgl.shadowMap.enabled=!1,this.webgl.domElement.style.display="block",t.appendChild(this.webgl.domElement),this.camera=new ue(60,1,.1,100),this.camera.position.z=5,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize()}get domElement(){return this.webgl.domElement}resize(){const t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.webgl.setSize(t,e)}render(t){this.webgl.render(t,this.camera)}dispose(){this.observer.disconnect(),this.webgl.dispose(),this.webgl.domElement.remove()}}class De{states=new Map;changeListeners=new Set;_current=null;get current(){return this._current}is(t){return this._current===t}register(t,e={}){this.states.set(t,e)}transition(t){const e=this.states.get(t);if(!e)throw new Error(`Unknown state "${t}" — did you register() it?`);if(this._current===t)return;const s=this._current;s!==null&&this.states.get(s)?.onExit?.(t),this._current=t,e.onEnter?.(s);for(const i of this.changeListeners)i(t,s)}onChange(t){return this.changeListeners.add(t),()=>this.changeListeners.delete(t)}}const Tt="jeez-ui-style",Ue=`
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
`;class Fe{root;screens=new Map;constructor(t){if(!document.getElementById(Tt)){const e=document.createElement("style");e.id=Tt,e.textContent=Ue,document.head.appendChild(e)}this.root=document.createElement("div"),this.root.className="jeez-ui-root",t.appendChild(this.root)}screen(t,e=""){let s=this.screens.get(t);return s||(s=document.createElement("div"),s.hidden=!0,this.root.appendChild(s),this.screens.set(t,s)),s.className=`jeez-ui-screen${e?` ${e}`:""}`,s}show(t,e={}){if(e.exclusive??!0)for(const[i,n]of this.screens)i!==t&&(n.hidden=!0);const s=this.screens.get(t);s&&(s.hidden=!1)}hide(t){const e=this.screens.get(t);e&&(e.hidden=!0)}hideAll(){for(const t of this.screens.values())t.hidden=!0}isVisible(t){const e=this.screens.get(t);return!!e&&!e.hidden}button(t,e,s=""){const i=document.createElement("button");return i.type="button",i.className=`jeez-ui-button${s?` ${s}`:""}`,i.textContent=t,i.addEventListener("click",e),i}iconButton(t,e){return this.button(t,e,"jeez-ui-icon-button")}title(t){const e=document.createElement("h1");return e.className="jeez-ui-title",e.textContent=t,e}text(t,e="jeez-ui-text"){const s=document.createElement("p");return s.className=e,s.textContent=t,s}}const He=250;class qe{renderer;input;audio;ui;states=new De;ads;analytics;iap;scenes=new Map;activeScene=null;stepMs;accumulator=0;lastTime=0;rafId=0;running=!1;manuallyPaused=!1;autoPaused=!1;pauseListeners=new Set;constructor(t){this.stepMs=1e3/(t.logicHz??60),this.renderer=new Ne(t.container),this.input=new Oe(this.renderer.domElement),this.audio=new _e,this.ui=new Fe(t.container),this.ads=t.ads??new Ae,this.analytics=t.analytics??new Le,this.iap=t.iap??new Re;const e=()=>this.audio.unlock();window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?this.paused||(this.autoPaused=!0,this.applyPause(!0)):this.autoPaused&&(this.autoPaused=!1,this.manuallyPaused||this.applyPause(!1))})}registerScene(t,e){this.scenes.set(t,e),this.states.register(t,{onEnter:()=>this.activateScene(t)})}setScene(t){this.states.transition(t)}get scene(){return this.activeScene}start(t){this.running||(this.running=!0,this.setScene(t),this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}get paused(){return this.manuallyPaused||this.autoPaused}pause(){this.manuallyPaused||(this.manuallyPaused=!0,this.autoPaused||this.applyPause(!0))}resume(){this.manuallyPaused&&(this.manuallyPaused=!1,this.autoPaused||this.applyPause(!1))}togglePause(){this.manuallyPaused?this.resume():this.pause()}onPauseChange(t){return this.pauseListeners.add(t),()=>this.pauseListeners.delete(t)}applyPause(t){t?this.audio.suspend():(this.lastTime=performance.now(),this.accumulator=0,this.audio.resume());for(const e of this.pauseListeners)e(t)}activateScene(t){const e=this.scenes.get(t);if(!e)throw new Error(`Unknown scene "${t}" — did you registerScene() it?`);this.activeScene?.exit(this),this.activeScene=e,this.accumulator=0,e.enter(this)}frame=t=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);const e=Math.min(t-this.lastTime,He);this.lastTime=t;const s=this.activeScene;if(s){if(!this.paused)for(this.accumulator+=e;this.accumulator>=this.stepMs;)s.update(this,this.stepMs/1e3),this.accumulator-=this.stepMs;s.render?.(this,this.accumulator/this.stepMs),this.renderer.render(s.three)}}}class Xe{constructor(t){this.options=t,this.cache=this.read()}cache;get(t){return this.cache[t]}set(t,e){this.cache[t]=e,this.persist()}update(t){Object.assign(this.cache,t),this.persist()}get all(){return this.cache}clear(){this.cache={...this.options.defaults};try{localStorage.removeItem(this.options.key)}catch{}}async syncToCloud(){k("[storage] cloud sync not implemented (placeholder)")}read(){try{const t=localStorage.getItem(this.options.key);if(!t)return{...this.options.defaults};const e=JSON.parse(t);let s=e.data??{};const i=e.version??1;for(let n=i+1;n<=this.options.version;n++){const r=this.options.migrations?.[n];r&&(s=r(s))}return{...this.options.defaults,...s}}catch(t){return console.warn("[storage] failed to read save, using defaults",t),{...this.options.defaults}}}persist(){try{const t={version:this.options.version,data:this.cache};localStorage.setItem(this.options.key,JSON.stringify(t))}catch(t){console.warn("[storage] failed to persist save",t)}}}const Ve="water-sort",Pt="Water Sort",We=`${Ve}.save`,Ke=1,Ze=60,v=[16729943,3621626,3069299,16753922,10837738,16737096,16739201,2003199,8121759,13459763,53971,16370212,15856374,5726319],Et=2,Qe=3;function nt(o=128){const t=document.createElement("canvas");t.width=t.height=o;const e=t.getContext("2d");if(e){const i=e.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,o,o)}const s=new Kt(t);return s.colorSpace=Zt,s}function vt(){const e=document.createElement("canvas");e.width=32,e.height=256;const s=e.getContext("2d");if(s){const n=s.createLinearGradient(0,0,0,256);n.addColorStop(0,"#0b1338"),n.addColorStop(.45,"#0a1130"),n.addColorStop(.78,"#0c1434"),n.addColorStop(1,"#10283f"),s.fillStyle=n,s.fillRect(0,0,32,256);const r=s.createRadialGradient(32/2,256*.92,2,32/2,256*.92,256*.55);r.addColorStop(0,"rgba(45,180,210,0.22)"),r.addColorStop(1,"rgba(45,180,210,0)"),s.fillStyle=r,s.fillRect(0,0,32,256)}const i=new Kt(e);return i.colorSpace=Zt,i}function ee(o,t,e=5.5){const s=new Float32Array(o*3),i=new Float32Array(o*3),n=[],r=new _;for(let l=0;l<o;l++)s[l*3]=(Math.random()-.5)*11,s[l*3+1]=(Math.random()-.5)*2*e,s[l*3+2]=-2.5-Math.random()*2,r.setHex(t[l%t.length]),i[l*3]=r.r,i[l*3+1]=r.g,i[l*3+2]=r.b,n.push(.1+Math.random()*.22);const a=new wt;return a.setAttribute("position",new A(s,3)),a.setAttribute("color",new A(i,3)),{points:new Qt(a,new de({size:.55,map:nt(),vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,blending:G})),update(l){for(let h=0;h<o;h++){let u=s[h*3+1]+n[h]*l;u>e&&(u=-e),s[h*3+1]=u}a.getAttribute("position").needsUpdate=!0}}}class yt{group=new j;glows=[];t=0;constructor(){const t=nt(256),e=[[2282478,-2.6,-2.6,7.5,.14],[10980346,2.8,-3.1,6.5,.11],[16739201,3.2,2.9,5.5,.06],[2282478,-3.4,3.2,5,.07]];for(const[s,i,n,r,a]of e){const c=new S({map:t,color:s,transparent:!0,opacity:a,depthWrite:!1,blending:G}),l=new p(new X(1,1),c);l.position.set(i,n,-3.6),l.scale.setScalar(r),this.group.add(l),this.glows.push({mesh:l,baseX:i,baseY:n,speed:.12+Math.random()*.1,phase:Math.random()*Math.PI*2})}}update(t){this.t+=t;for(const e of this.glows)e.mesh.position.x=e.baseX+Math.sin(this.t*e.speed+e.phase)*.5,e.mesh.position.y=e.baseY+Math.cos(this.t*e.speed*.8+e.phase)*.35}}class Je extends st{constructor(){super();const t=new Jt;t.deleteAttribute("uv");const e=new ft({side:pe}),s=new ft,i=new fe(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const n=new p(t,e);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const r=new p(t,s);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new p(t,s);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new p(t,s);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new p(t,s);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new p(t,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new p(t,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new p(t,O(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new p(t,O(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new p(t,O(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const M=new p(t,O(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const y=new p(t,O(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);const R=new p(t,O(100));R.position.set(0,20,0),R.scale.set(1,.1,1),this.add(R)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function O(o){const t=new S;return t.color.setScalar(o),t}let ot=null;function ts(o){if(!ot){const t=new me(o);ot=t.fromScene(new Je,.04).texture,t.dispose()}return ot}function xt(o,t){const e=ts(t);o.environment!==e&&(o.environment=e)}const w='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"',es={home:{body:`<path ${w} d="M4 11.3 12 4l8 7.3"/><path ${w} d="M6.4 9.4V20h11.2V9.4"/>`},undo:{body:`<path ${w} d="M8.5 5.5 4 10l4.5 4.5"/><path ${w} d="M4 10h10.5a5.5 5.5 0 0 1 0 11H7"/>`},restart:{body:`<path ${w} d="M20.4 12a8.4 8.4 0 1 1-2.46-5.94"/><path ${w} d="M20.6 2.8v4.6h-4.6"/>`},plus:{body:`<path ${w} d="M12 5v14M5 12h14"/>`},"sound-on":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${w} d="M15 9.5a3.6 3.6 0 0 1 0 5"/><path ${w} d="M17.5 7.2a7.2 7.2 0 0 1 0 9.6"/>`},"sound-off":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${w} d="M15.5 9.5l5 5"/><path ${w} d="M20.5 9.5l-5 5"/>`},"star-fill":{body:'<path fill="currentColor" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>'},"star-off":{body:`<path ${w} stroke-width="1.7" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>`},lock:{body:`<rect ${w} x="6.5" y="10.5" width="11" height="9.5" rx="2.2"/><path ${w} d="M9 10.5V8a3 3 0 0 1 6 0v2.5"/>`},check:{body:`<path ${w} stroke-width="2.2" d="M5 12.5l4.5 4.5L19 7.5"/>`},play:{body:'<path fill="currentColor" d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l9.7-6.2c.6-.4.6-1.4 0-1.8L10.1 4.9c-.7-.4-1.6.1-1.6.9z"/>'},grid:{body:`<rect ${w} x="4" y="4" width="7" height="7" rx="2"/><rect ${w} x="13" y="4" width="7" height="7" rx="2"/><rect ${w} x="4" y="13" width="7" height="7" rx="2"/><rect ${w} x="13" y="13" width="7" height="7" rx="2"/>`},back:{body:`<path ${w} d="M14.5 5.5 8 12l6.5 6.5"/>`},"add-tube":{body:`<path ${w} d="M7.5 3.5h9"/><path ${w} d="M9 3.5v6a3 3 0 0 1-1.5 2.6V18a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5.9A3 3 0 0 1 15 9.5v-6"/><path fill="currentColor" d="M12 11.6c1.2 1.4 2.1 2.6 2.1 3.7a2.1 2.1 0 1 1-4.2 0c0-1.1.9-2.3 2.1-3.7z"/>`}},zt={viewBox:"0 0 48 48",body:`
    <path fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"
      d="M16 5.5h16M20.5 5.5v10.2L10.6 35a3.4 3.4 0 0 0 3 4.9h20.8a3.4 3.4 0 0 0 3-4.9L27.5 15.7V5.5"/>
    <path fill="currentColor" opacity="0.9"
      d="M13 30c3-2.2 6-2.2 9 0s6 2.2 9 0l3.2 5.1a3.4 3.4 0 0 1-3 4.8H16.8a3.4 3.4 0 0 1-3-4.8L13 30z"/>
    <circle cx="21" cy="34" r="1.7" fill="#0d1533"/>
    <circle cx="26.5" cy="30.5" r="1.3" fill="#0d1533"/>
    <circle cx="29.5" cy="35.5" r="1.1" fill="#0d1533"/>
  `};function E(o,t=24){const e=es[o];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${t}" height="${t}" aria-hidden="true">${e.body}</svg>`}function P(o,t){o.innerHTML=t}function rt(o,t=24,e="ws-ic"){const s=document.createElement("span");return s.className=e,s.setAttribute("aria-hidden","true"),P(s,E(o,t)),s}class ss{constructor(t,e){this.save=t,this.session=e,this.three.background=vt(),this.bokeh=ee(50,v),this.three.add(this.bokeh.points,this.aurora.group)}three=new st;bokeh;aurora=new yt;enter(t){t.renderer.camera.position.set(0,0,6),t.renderer.camera.lookAt(0,0,0),xt(this.three,t.renderer.webgl);const e=this.session.level,s=this.save.get("levels")[String(e)];t.analytics.track("win_shown",{level:e,stars:s?.stars??0});const i=document.createElement("div");i.className="ws-card ws-panel",i.append(t.ui.text("LEVEL COMPLETE","ws-eyebrow"),t.ui.title(`Level ${e}`),this.starsElement(s?.stars??0),t.ui.text(s?`Best: ${s.bestMoves} moves`:"","ws-chip ws-best"));const n=t.ui.button("Next level",()=>{this.session.level=e+1,t.setScene("play")});i.append(n,t.ui.button("Menu",()=>t.setScene("menu"),"jeez-ui-button--ghost")),t.ui.screen("gameover").replaceChildren(i),t.ui.show("gameover")}exit(t){t.ui.hide("gameover")}update(t,e){this.bokeh.update(e),this.aurora.update(e)}starsElement(t){const e=document.createElement("div");e.className="ws-stars-wrap";const s=document.createElement("div");s.className="ws-rays";const i=document.createElement("div");i.className="ws-stars-row";for(let n=0;n<3;n++){const r=document.createElement("span"),a=n<t;r.className=a?"ws-star ws-star--on":"ws-star ws-star--off",r.style.animationDelay=`${.25+n*.18}s`,P(r,E(a?"star-fill":"star-off",46)),i.append(r)}return e.append(s,i),e}}class is{constructor(t,e){this.save=t,this.session=e,this.three.background=vt(),this.bokeh=ee(70,v),this.three.add(this.bokeh.points,this.aurora.group)}three=new st;bokeh;aurora=new yt;enter(t){t.renderer.camera.position.set(0,0,6),t.renderer.camera.lookAt(0,0,0),xt(this.three,t.renderer.webgl),t.analytics.track("menu_shown");const e=this.save.get("currentLevel"),s=t.ui.screen("menu"),i=document.createElement("div");i.className="ws-hero";const n=document.createElement("div");n.className="ws-logo",P(n,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${zt.viewBox}" aria-hidden="true">${zt.body}</svg>`);const r=document.createElement("div");r.className="ws-word ws-word--a",r.textContent=Pt.split(" ")[0];const a=document.createElement("div");a.className="ws-word ws-word--b",a.textContent=Pt.split(" ")[1]??"",i.append(n,r,a);const c=t.ui.text(`LEVEL ${e}`,"ws-chip"),l=t.ui.button("Play",()=>{this.session.level=e,t.setScene("play")});l.prepend(rt("play",20,"ws-ic"));const h=t.ui.button("Levels",()=>this.showLevels(t),"jeez-ui-button--ghost");h.prepend(rt("grid",20,"ws-ic"));const u=document.createElement("div");u.className="ws-stack",u.append(l,h),s.replaceChildren(i,t.ui.text("SORT THE COLORS","ws-subtitle"),c,u,this.muteButton(t)),t.ui.show("menu")}exit(t){t.ui.hide("menu"),t.ui.hide("levels")}update(t,e){this.bokeh.update(e),this.aurora.update(e)}showLevels(t){const e=this.save.get("currentLevel"),s=this.save.get("levels"),i=Math.max(20,e),n=document.createElement("div");n.className="ws-grid";for(let c=1;c<=i;c++){const l=s[String(c)],h=c>e;let u="ws-cell";l&&(u+=" ws-cell--done"),c===e&&(u+=" ws-cell--current"),h&&(u+=" ws-cell--locked");const d=t.ui.button("",()=>{this.session.level=c,t.setScene("play")},u);if(d.disabled=h,d.setAttribute("aria-label",h?`Level ${c} (locked)`:`Level ${c}`),h){const f=document.createElement("span");f.className="ws-cell-num",P(f,E("lock",18)),d.append(f)}else{const f=document.createElement("span");if(f.className="ws-cell-num",f.textContent=String(c),d.append(f),l){const g=document.createElement("span");g.className="ws-cell-stars";for(let M=0;M<3;M++){const y=document.createElement("span");y.className=M<l.stars?"ws-mini-on":"ws-mini-off",P(y,E(M<l.stars?"star-fill":"star-off",9)),g.append(y)}d.append(g)}}n.append(d)}const r=t.ui.button("Back",()=>t.ui.show("menu"),"jeez-ui-button--ghost");r.prepend(rt("back",18,"ws-ic")),t.ui.screen("levels").replaceChildren(t.ui.title("Select Level"),n,r),t.ui.show("levels")}muteButton(t){const e=()=>{const i=t.audio.muted;P(s,E(i?"sound-off":"sound-on",22)),s.setAttribute("aria-label",i?"Sound off, tap to unmute":"Sound on, tap to mute")},s=t.ui.button("",()=>{const i=t.audio.toggleMuted();this.save.set("muted",i),e(),t.audio.playTone(660,.06)},"jeez-ui-icon-button");return e(),s.classList.add("ws-mute"),s}}const z=4;function Mt(o){const t=o[o.length-1];if(t===void 0)return null;let e=1;for(let s=o.length-2;s>=0&&o[s]===t;s--)e++;return{color:t,count:e}}function I(o){const t=[];for(const e of o){const s=t[t.length-1];s&&s.color===e?s.count++:t.push({color:e,count:1})}return t}function ns(o,t,e){if(t===e)return!1;const s=o[t],i=o[e],n=Mt(s);return!n||i.length>=z?!1:i.length===0||i[i.length-1]===n.color}function os(o,t){const e=Mt(o);return e?Math.min(e.count,z-t.length):0}function rs(o,t,e){const s=o[t],i=o[e],n=os(s,i),r=s[s.length-1];for(let a=0;a<n;a++)s.pop(),i.push(r);return{from:t,to:e,count:n}}function as(o,t){const e=o[t.from],s=o[t.to];for(let i=0;i<t.count;i++){const n=s.pop();n!==void 0&&e.push(n)}}function et(o){return o.every(t=>t.length===0?!0:t.length!==z?!1:t.every(e=>e===t[0]))}function at(o){return o.map(t=>t.slice())}function cs(o){let t=o>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ls(o,t){for(let e=o.length-1;e>0;e--){const s=Math.floor(t()*(e+1)),i=o[e];o[e]=o[s],o[s]=i}return o}class hs{items=[];get size(){return this.items.length}push(t){const e=this.items;e.push(t);let s=e.length-1;for(;s>0;){const i=s-1>>1;if(e[i].f<=e[s].f)break;const n=e[i];e[i]=e[s],e[s]=n,s=i}}pop(){const t=this.items,e=t[0],s=t.pop();if(t.length===0||s===void 0)return e;t[0]=s;let i=0;for(;;){const n=i*2+1,r=n+1;let a=i;if(n<t.length&&t[n].f<t[a].f&&(a=n),r<t.length&&t[r].f<t[a].f&&(a=r),a===i)break;const c=t[a];t[a]=t[i],t[i]=c,i=a}return e}}function At(o){return o.map(t=>t.join(",")).sort().join(";")}function Lt(o){let t=0;const e=new Set;for(const s of o)for(let i=0;i<s.length;i++)(i===0||s[i]!==s[i-1])&&t++,e.add(s[i]);return t-e.size}function us(o){const t=[];for(let e=0;e<o.length;e++){const s=o[e],i=Mt(s);if(!i)continue;const n=i.count===s.length;let r=!1;for(let a=0;a<o.length;a++){if(a===e)continue;const c=o[a];if(c.length>=z)continue;if(c.length===0){if(n||r)continue;r=!0}else if(c[c.length-1]!==i.color)continue;const l=Math.min(i.count,z-c.length),h=o.slice();h[e]=s.slice(0,s.length-l),h[a]=c.concat(new Array(l).fill(i.color)),t.push(h)}}return t}function _t(o,t){if(et(o))return{moves:0,optimal:!0};const e=new hs,s=new Map,i=Lt(o);e.push({tubes:o,g:0,f:i*t.weight}),s.set(At(o),0);let n=0;for(;e.size>0;){const r=e.pop();if(!r)break;if(++n>t.maxNodes)return null;for(const a of us(r.tubes)){const c=r.g+1;if(et(a))return{moves:c,optimal:t.weight===1};const l=At(a),h=s.get(l);h!==void 0&&h<=c||(s.set(l,c),e.push({tubes:a,g:c,f:c+Lt(a)*t.weight}))}}return null}function ds(o){return o<=10?{colors:4,emptyTubes:2}:o<=20?{colors:5,emptyTubes:2}:o<=80?{colors:Math.min(9,6+Math.floor((o-21)/15)),emptyTubes:2}:o<=200?{colors:Math.min(12,10+Math.floor((o-81)/40)),emptyTubes:2}:{colors:Math.min(14,12+Math.floor((o-201)/100)),emptyTubes:1}}function ps(o,t){return o<=Math.ceil(t*1.3)?3:o<=Math.ceil(t*1.8)?2:1}function fs(o){const{colors:t,emptyTubes:e}=ds(o);for(let s=0;s<200;s++){const i=(Math.imul(o,2654435769)^Math.imul(s+1,2246822507))>>>0,n=cs(i),r=[];for(let l=0;l<t;l++)for(let h=0;h<z;h++)r.push(l);ls(r,n);const a=[];for(let l=0;l<t;l++)a.push(r.slice(l*z,(l+1)*z));for(let l=0;l<e;l++)a.push([]);if(a.some(l=>l.length===z&&l.every(h=>h===l[0]))||et(a))continue;let c=t<=9?_t(a,{maxNodes:15e4,weight:1}):null;if(c||(c=_t(a,{maxNodes:2e5,weight:3})),!!c&&!(c.moves<t+2))return{tubes:a,minMoves:c.moves,optimal:c.optimal,numColors:t,emptyTubes:e}}throw new Error(`Could not generate a solvable level ${o}`)}const Y=14,se={value:1400};function ms(o,t){se.value=o/(2*Math.tan(te.degToRad(t/2)))}const ws=`
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
`,gs=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 tex = texture2D(uMap, gl_PointCoord);
  float a = tex.a * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor * tex.rgb, a);
}
`,Ct=new _;function Rt(o){return Ct.setHex(v[o%v.length]).lerp(new _(16777215),.55),Ct.clone()}class bs{constructor(t){this.liquidRadius=t;const e=new wt;e.setAttribute("position",new A(this.positions,3).setUsage(F)),e.setAttribute("aColor",new A(this.colors,3).setUsage(F)),e.setAttribute("aSize",new A(this.sizes,1).setUsage(F)),e.setAttribute("aAlpha",new A(this.alphas,1).setUsage(F)),e.setDrawRange(0,Y),e.boundingSphere=new we(new m(0,0,0),t+2);const s=new ge({uniforms:{uMap:{value:nt(64)},uScale:se},vertexShader:ws,fragmentShader:gs,transparent:!0,depthWrite:!1,depthTest:!1});this.points=new Qt(e,s),this.points.renderOrder=4,this.points.frustumCulled=!1;for(let i=0;i<Y;i++)this.bubbles.push({baseX:0,z:0,y:0,yTop:0,size:.02,speed:0,wobbleAmp:0,wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:4+Math.random()*3,delay:Math.random()*7+.4,color:Rt(0)}),this.alphas[i]=0}points;bubbles=[];positions=new Float32Array(Y*3);colors=new Float32Array(Y*3);sizes=new Float32Array(Y);alphas=new Float32Array(Y);layers=[];topY=0;stirLevel=0;setStack(t,e,s){this.layers=[];let i=s;for(const n of t){const r=n.count*e;r>.03&&this.layers.push({color:n.color,y0:i,y1:i+r}),i+=r}this.topY=this.layers.length?this.layers[this.layers.length-1].y1:0}stir(t=1){this.stirLevel=Math.min(1.5,this.stirLevel+t*.12)}burst(t=6){let e=0;for(const s of this.bubbles){if(e>=t)break;s.delay>0&&(s.delay=Math.random()*.12,e++)}}update(t){this.stirLevel=Math.max(0,this.stirLevel-t*1.1);const e=this.layers.length>0,s=t*(e?2.2:0)*(1+this.stirLevel*3.2),i=1+this.stirLevel*1.1;for(let r=0;r<this.bubbles.length;r++){const a=this.bubbles[r];if(a.delay>0){a.delay-=t*(1+this.stirLevel),a.delay<=0&&e?this.spawn(a):a.delay<=0&&(a.delay=.5),this.alphas[r]=0;continue}if(!e){this.alphas[r]=0,a.delay=.4+Math.random();continue}if(a.speed<=0){Math.random()<s?this.spawn(a):this.alphas[r]=0;continue}a.speed+=.55*t,a.y+=a.speed*t*i,a.wobblePhase+=a.wobbleSpeed*t;const c=a.yTop>0?(a.y-this.layers[0].y0)/Math.max(.1,a.yTop-this.layers[0].y0):1,l=Math.min(1,c/.08),h=Math.min(1,Math.max(0,(1-c)/.14));if(this.alphas[r]=.62*l*h,a.y>=a.yTop){a.speed=0,a.delay=2+Math.random()*6/(1+this.stirLevel*2),this.alphas[r]=0;continue}const u=a.baseX+Math.sin(a.wobblePhase)*a.wobbleAmp;this.positions[r*3]=u,this.positions[r*3+1]=Math.max(a.y,.001),this.positions[r*3+2]=a.z,this.colors[r*3]=a.color.r,this.colors[r*3+1]=a.color.g,this.colors[r*3+2]=a.color.b,this.sizes[r]=a.size}if(e)for(let r=0;r<this.bubbles.length;r++){const a=this.bubbles[r];a.delay>0&&Math.random()<s/Y&&(a.delay=Math.min(a.delay,.05))}const n=this.points.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("aColor").needsUpdate=!0,n.getAttribute("aSize").needsUpdate=!0,n.getAttribute("aAlpha").needsUpdate=!0}spawn(t){const e=this.layers[Math.floor(Math.random()*this.layers.length)],s=this.liquidRadius*.62*Math.sqrt(Math.random()),i=Math.random()*Math.PI*2;t.baseX=Math.cos(i)*s,t.z=Math.sin(i)*s*.5,t.y=e.y0+.01+Math.random()*.08,t.yTop=Math.max(this.topY-.03,t.y+.1),t.size=.016+Math.random()*.026,t.speed=.12+Math.random()*.18+this.stirLevel*.2,t.wobbleAmp=.008+Math.random()*.02,t.wobbleSpeed=3+Math.random()*4,t.color=Rt(e.color),t.delay=0}}const vs=.45;function ys(o,t,e,s,i){const r=Math.max(vs,1-2*i/s)*e,a=.13,c=o.y+a+r*o.z,l=a*(o.z-r*o.y);return(c+Math.sqrt(Math.max(0,c*c-4*r*l)))/(2*r)}function xs(o){const t=Math.tan(o.fovDeg*Math.PI/360),e=o.halfH/t,s=o.halfW/(t*o.aspect);let i=Math.max(e,s,o.minZ);if(o.hudBandPx>0&&o.viewportH>0)for(const n of o.clearance){const r=ys(n,o.lookAtY,t,o.viewportH,o.hudBandPx);r>i&&(i=r)}return i}const Ms=new X(.1,.065),Bt=v.map(o=>new S({color:o,side:it,transparent:!0}));class Ss{group=new j;pieces=[];burst(t,e,s){for(let i=0;i<e;i++){const n=Bt[Math.floor(Math.random()*Bt.length)],r=new p(Ms,n),a=.75+Math.random()*.7;r.scale.set(a,a,a),r.position.set(t.x+(Math.random()-.5)*s,t.y+Math.random()*.6,t.z+.8+Math.random()*.4);const c={mesh:r,velocity:new m((Math.random()-.5)*2.4,1.5+Math.random()*2.5,(Math.random()-.5)*.6),spin:new m(Math.random()*8,Math.random()*8,Math.random()*8),life:2.2+Math.random()*.8};this.pieces.push(c),this.group.add(r)}}update(t){for(let e=this.pieces.length-1;e>=0;e--){const s=this.pieces[e];if(s.life-=t,s.life<=0){this.group.remove(s.mesh),this.pieces.splice(e,1);continue}s.velocity.y-=5.5*t,s.mesh.position.addScaledVector(s.velocity,t),s.mesh.rotation.x+=s.spin.x*t,s.mesh.rotation.y+=s.spin.y*t,s.mesh.rotation.z+=s.spin.z*t}}clear(){for(const t of this.pieces)this.group.remove(t.mesh);this.pieces=[]}}const H=32,L=8,ks=.05;function mt(o,t){const e=new _(o);return e.lerp(new _(16777215),t),e}function Ts(){const o=new Uint16Array(H*L*6);let t=0;for(let e=0;e<H;e++)for(let s=0;s<L;s++){const i=e*(L+1)+s,n=i+L+1;o[t++]=i,o[t++]=n,o[t++]=i+1,o[t++]=n,o[t++]=n+1,o[t++]=i+1}return new A(o,1)}class It{mesh;geometry;pos;constructor(t){this.pos=new Float32Array((H+1)*(L+1)*3),this.geometry=new wt,this.geometry.setAttribute("position",new A(this.pos,3).setUsage(F)),this.geometry.setIndex(Ts()),this.geometry.setDrawRange(0,0),this.mesh=new p(this.geometry,t),this.mesh.visible=!1,this.mesh.renderOrder=8,this.mesh.frustumCulled=!1}get positions(){return this.pos}commit(t){this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.setDrawRange(0,t*L*6),this.mesh.visible=t>0}}const Z=new m,ct=new m,D=new m,Q=new m,Ps=new m(0,0,1);class Es{group=new j;body=new It(new S({color:16777215,transparent:!0,opacity:.95}));foam=new It(new S({color:16777215,transparent:!0,opacity:.42,blending:G,depthWrite:!1}));curve=new be(new m,new m,new m);time=0;constructor(){this.group.add(this.body.mesh,this.foam.mesh)}begin(t){this.body.mesh.material.color.copy(mt(v[t%v.length],.16)),this.foam.mesh.material.color.copy(mt(v[t%v.length],.5))}update(t,e,s,i=1/60){if(this.time+=i,s=Math.min(1,Math.max(0,s)),s<=.02||s>=.995){this.body.commit(0),this.foam.commit(0);return}this.curve.v0.copy(t),this.curve.v2.copy(e),this.curve.v1.lerpVectors(t,e,.42);const n=Math.hypot(e.x-t.x,e.y-t.y);this.curve.v1.y+=Math.min(.9,.3+n*.3)*(1.45-.85*s);const r=Math.max(1,Math.floor(H*s));this.rebuildTube(this.body,r,s,1),this.rebuildTube(this.foam,r,s,.5)}tipPoint(t,e){return this.curve.getPoint(Math.min(1,Math.max(0,t)),e)}end(){this.body.commit(0),this.foam.commit(0)}rebuildTube(t,e,s,i){const n=t.positions;let r=0;for(let a=0;a<=e;a++){const c=a/H,l=c/s;this.curve.getPoint(c,Z),this.curve.getTangent(c,ct).normalize(),D.crossVectors(ct,Ps).normalize(),Q.crossVectors(D,ct).normalize();let h=ks*i*(1.06-.42*l);h*=1-.5*te.smoothstep(l,.86,1),h*=1+.085*Math.sin(c*16-this.time*24)+.035*Math.sin(c*33-this.time*41);for(let u=0;u<=L;u++){const d=u/L*Math.PI*2,f=Math.cos(d)*h,g=Math.sin(d)*h;n[r++]=Z.x+Q.x*f+D.x*g,n[r++]=Z.y+Q.y*f+D.y*g,n[r++]=Z.z+Q.z*f+D.z*g}}t.commit(e)}}const zs=48;class As{group=new j;geo=new ve(.035,8,6);mats=new Map;drops=[];constructor(){for(let t=0;t<zs;t++){const e=new p(this.geo,this.materialFor(0));e.visible=!1,this.group.add(e),this.drops.push({mesh:e,velocity:new m,life:0,maxLife:0,baseScale:1,active:!1})}}materialFor(t){let e=this.mats.get(t);return e||(e=new S({color:mt(v[t%v.length],.2)}),this.mats.set(t,e)),e}spawn(t,e,s,i){const n=this.drops.find(r=>!r.active)??this.drops[0];n.active=!0,n.mesh.visible=!0,n.mesh.material=this.materialFor(e),n.mesh.position.copy(t),n.velocity.set((Math.random()-.5)*s,i*(.6+Math.random()*.7),(Math.random()-.5)*s*.4),n.maxLife=n.life=.3+Math.random()*.22,n.baseScale=.6+Math.random()*.55,n.mesh.scale.setScalar(n.baseScale)}trickle(t,e,s=2){for(let i=0;i<s;i++)this.spawn(t,e,.5,.5)}splash(t,e,s=8){for(let i=0;i<s;i++)this.spawn(t,e,1.5,1.2)}update(t){for(const e of this.drops){if(!e.active)continue;if(e.life-=t,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.velocity.y-=7.5*t,e.mesh.position.addScaledVector(e.velocity,t);const s=Math.min(1,e.life/(e.maxLife*.4));e.mesh.scale.setScalar(Math.max(.05,e.baseScale*s))}}clear(){for(const t of this.drops)t.active=!1,t.mesh.visible=!1}}const Yt=12,Gt=24;function Ls(o){const t=[...o].sort((i,n)=>n.y-i.y||n.z-i.z),e=[];let s=-1/0;for(const i of t)i.z>s&&(e.push(i),s=i.z);return e}function _s(o){const t=[{y:o.rowY+o.selectLift+o.rimTopY,z:o.rimR}];for(let e=0;e<=Yt;e++){const s=e/Yt,i=o.tilt*s,n=o.rowY+o.lift*s,r=o.hopZ*s;for(let a=0;a<Gt;a++){const c=a/Gt*Math.PI*2;t.push({y:n+o.rimR*Math.cos(c)*Math.sin(i)+o.rimTopY*Math.cos(i),z:r+o.rimR*Math.sin(c)})}}return Ls(t)}const T=.36,b=1.75,$=.285,jt=.38,Ot=-b/2+.09,q=.032,Cs=new gt(T,T,b,28,1,!0),Rs=new bt(T,q,10,28),Bs=new gt(T,T*.9,.09,28),Is=new gt(1,1,1,24),Ys=new bt(T+.08,.032,10,40),Gs=new bt(T+.08,.07,10,40),js=new ye($*.96,24),Os=new X(.24,.075),$s=new X(.035,b-.25),Ns=new xe(.86,1,40),Ds=new X(1,.45),Us=new Jt(.9,b+.9,.9),x=new Me({color:15004159,metalness:0,roughness:.07,transmission:1,thickness:.1,ior:1.45,attenuationColor:new _(10475263),attenuationDistance:1.4,clearcoat:.7,clearcoatRoughness:.25,specularIntensity:1,envMapIntensity:1.15,side:it});let $t=!0;function lt(o){$t!==o&&($t=o,o?(x.transmission=1,x.opacity=1,x.transparent=!1,x.depthWrite=!0,x.thickness=.1):(x.transmission=0,x.transparent=!0,x.opacity=.18,x.depthWrite=!1,x.thickness=0),x.needsUpdate=!0)}const Fs=new S({color:6809849,transparent:!0,opacity:.95,blending:G,depthWrite:!1}),Hs=new S({color:2282478,transparent:!0,opacity:.28,blending:G,depthWrite:!1,side:it}),Nt=new S({color:16777215,transparent:!0,opacity:.13,blending:G,depthWrite:!1});let ht=null;const qs=new S({visible:!1}),Dt=new Map,Ut=new Map;function ie(o,t){const e=new _(o);return e.lerp(new _(16777215),t),e}function Ft(o){let t=Dt.get(o);if(!t){const e=v[o%v.length];t=new ft({color:e,roughness:.34,metalness:.04,emissive:e,emissiveIntensity:.26,envMapIntensity:.6}),Dt.set(o,t)}return t}function Ht(o){let t=Ut.get(o);return t||(t=new S({color:ie(v[o%v.length],.42)}),Ut.set(o,t)),t}function Xs(){return new S({color:16777215,transparent:!0,opacity:0,blending:G,depthWrite:!1,side:it})}const ut=6,Vs=5,Ws=.5;class Ks{group=new j;ripples=[];cooldown=0;constructor(){for(let t=0;t<Vs;t++){const e=new p(Ns,Xs());e.rotation.x=-Math.PI/2,e.visible=!1,e.renderOrder=4,this.group.add(e),this.ripples.push({mesh:e,t:0,active:!1})}}pulse(t,e,s=!1){if(this.cooldown>0&&!s)return;this.cooldown=s?.05:.13;const i=this.ripples.find(n=>!n.active)??this.ripples[0];i.active=!0,i.t=s?-.08:0,i.mesh.visible=!0,i.mesh.material.color.copy(ie(v[t%v.length],.6)),i.mesh.position.y=e+.018}update(t){this.cooldown=Math.max(0,this.cooldown-t);for(const e of this.ripples){if(!e.active)continue;if(e.t+=t,e.t<0){e.mesh.visible=!1;continue}e.mesh.visible=!0;const s=e.t/Ws;if(s>=1){e.active=!1,e.mesh.visible=!1;continue}const i=1-(1-s)*(1-s);e.mesh.scale.setScalar($*(.12+i*.92)),e.mesh.material.opacity=.6*(1-s)*(1-s)}}clear(){for(const t of this.ripples)t.active=!1,t.mesh.visible=!1}}class Zs{group=new j;hit;home=new m;wobble=0;bubbles=new bs($);ripples=new Ks;ring;ringGlow;surface;shine;layerMeshes=[];surfaceColorId=-1;topMesh=null;topBaseScaleY=0;topBaseY=0;liquidTopY=0;wobbleT=Math.random()*Math.PI*2;ringT=Math.random()*Math.PI*2;selected=!1;constructor(){ht||(ht=new S({map:nt(),color:132631,transparent:!0,opacity:.55,depthWrite:!1}));const t=new p(Ds,ht);t.position.y=-b/2-.09,t.position.z=-.15,t.renderOrder=-1,t.scale.set(1,.75,1),t.rotation.x=-.35;const e=new p(Bs,x);e.position.y=-b/2;const s=new p(Cs,x),i=new p($s,Nt);i.position.set(-T*.55,0,T*.82),i.renderOrder=6;const n=new p(Rs,x);n.rotation.x=Math.PI/2,n.position.y=b/2,this.ring=new p(Ys,Fs.clone()),this.ring.rotation.x=Math.PI/2,this.ring.position.y=-b/2-.05,this.ring.renderOrder=7,this.ring.visible=!1,this.ringGlow=new p(Gs,Hs),this.ringGlow.rotation.x=Math.PI/2,this.ringGlow.position.y=-b/2-.05,this.ringGlow.renderOrder=7,this.ringGlow.visible=!1,this.surface=new p(js,Ht(0)),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.surface.visible=!1,this.shine=new p(Os,Nt),this.shine.rotation.x=-Math.PI/2,this.shine.position.x=-$*.4,this.shine.renderOrder=4,this.shine.visible=!1,this.hit=new p(Us,qs);for(let r=0;r<ut;r++){const a=new p(Is,Ft(0));a.visible=!1,a.renderOrder=1,this.layerMeshes.push(a),this.group.add(a)}this.group.add(t,e,s,i,n,this.ring,this.ringGlow,this.surface,this.shine,this.bubbles.points,this.ripples.group,this.hit)}setStack(t){let e=Ot,s=0;this.topMesh=null;for(const i of t){if(i.count<=.02||s>=ut)continue;const n=this.layerMeshes[s++],r=i.count*jt;n.visible=!0,n.material=Ft(i.color),n.scale.set($,r,$),n.position.y=e+r/2,e+=r,this.topMesh=n,this.topBaseScaleY=r,this.topBaseY=n.position.y,this.surfaceColorId=i.color}for(let i=s;i<ut;i++)this.layerMeshes[i].visible=!1;this.liquidTopY=this.topMesh?e:0,this.bubbles.setStack(t,jt,Ot),this.topMesh?(this.surface.material=Ht(this.surfaceColorId),this.surface.visible=!0,this.shine.visible=!0):(this.surface.visible=!1,this.shine.visible=!1)}get surfaceLocalY(){return this.liquidTopY}pourImpact(t){this.liquidTopY>0&&this.ripples.pulse(t,this.liquidTopY,!0),this.bubbles.burst(7)}pourFlow(t){this.liquidTopY>0&&this.ripples.pulse(t,this.liquidTopY),this.bubbles.stir()}setSelected(t){this.selected=t,this.ring.visible=t,this.ringGlow.visible=t}tick(t){if(this.wobbleT+=t,this.wobble=Math.max(0,this.wobble-t*1.6),this.bubbles.update(t),this.ripples.update(t),this.selected){this.ringT+=t;const r=1+.045*Math.sin(this.ringT*5);this.ring.scale.setScalar(r),this.ringGlow.scale.setScalar(1+.08*Math.sin(this.ringT*5-.6)),this.ring.material.opacity=.85+.15*Math.sin(this.ringT*5)}if(!this.topMesh)return;const s=1+(.02+this.wobble*.1)*Math.sin(this.wobbleT*(3+this.wobble*9)),i=this.topBaseScaleY*s;this.topMesh.scale.y=i,this.topMesh.position.y=this.topBaseY+(i-this.topBaseScaleY)/2;const n=this.topMesh.position.y+i/2+.012;this.surface.position.y=n,this.shine.position.y=n+.004}}function U(o){o.audio.playTone(660,.05,.15)}function dt(o){o.audio.playTone(880,.06,.18)}function Qs(o){o.audio.playTone(180,.12,.2)}function Js(o){o.audio.playTone(520,.07,.16),window.setTimeout(()=>o.audio.playTone(460,.07,.14),70),window.setTimeout(()=>o.audio.playTone(400,.08,.12),150)}function ti(o){o.audio.playTone(240,.09,.25)}function ei(o){[523,659,784,1047].forEach((e,s)=>{window.setTimeout(()=>o.audio.playTone(e,.14,.22),s*110)})}const qt=.9,J=1.15,ne=.3,oe=.55,re=.5,ae=.5,si=.15,ii=1.6,Xt=-.13,ni=8,oi=58,ce=o=>_s({rowY:o,lift:oe,tilt:re,hopZ:ae,selectLift:ne,rimR:T+q,rimTopY:b/2+q}),ri=ce(J),ai=ce(0),Vt=new m;class ci{constructor(t,e){this.save=t,this.session=e,this.three.background=vt();const s=new kt(16777215,2);s.position.set(2,4,6);const i=new kt(6809849,.7);i.position.set(-4,2,-5),this.three.add(s,i,new Se(5928152,725027,.55),new ke(16777215,.32),this.aurora.group,this.tubesGroup,this.confetti.group,this.stream.group,this.droplets.group)}three=new st;tubesGroup=new j;confetti=new Ss;aurora=new yt;stream=new Es;droplets=new As;raycaster=new Te;level=1;data;initial=[];tubes=[];views=[];history=[];selected=-1;extraTubes=0;anim=null;pendingTap=null;won=!1;winTimer=0;finished=!1;needAd=!1;movesEl=null;topbarEl=null;undoBtn=null;addBtn=null;hudKey="";hudObserver=null;hudBandPx=0;hudViewportH=0;cleanups=[];qualityStop=null;qaProbe=new URLSearchParams(location.search).has("ws_probe");qaFreezePour=(()=>{const t=new URLSearchParams(location.search).get("ws_freezepour");if(t===null)return null;const e=Number(t);return Number.isFinite(e)&&e>0&&e<1?e:null})();enter(t){if(this.level=this.session.level,this.data=fs(this.level),this.initial=at(this.data.tubes),t.analytics.track("level_start",{level:this.level,minMoves:this.data.minMoves}),xt(this.three,t.renderer.webgl),this.startQualityWatchdog(t),this.buildHud(t),this.resetBoard(),this.fitCamera(t),this.cleanups.push(t.input.on("tap",e=>this.onTap(t,e.x,e.y))),this.qaProbe){const e=i=>{const n=t.renderer.domElement.getBoundingClientRect(),r=i.clone().project(t.renderer.camera);return{x:n.left+(r.x*.5+.5)*n.width,y:n.top+(-r.y*.5+.5)*n.height}},s=(i,n)=>e(new m(i,n,0));window.__wsDebug={state:()=>({tubes:at(this.tubes),selected:this.selected,anim:this.anim!==null,won:this.won,moves:this.history.length}),tubeScreen:i=>{const n=this.views[i];return n?s(n.home.x,n.home.y):null},tubeTop:i=>{const n=this.views[i];if(!n)return null;n.group.updateWorldMatrix(!0,!1);const r=new m;let a=null;for(let c=0;c<48;c++){const l=c/48*Math.PI*2,h=T+q;r.set(h*Math.cos(l),b/2+q,h*Math.sin(l));const u=e(n.group.localToWorld(r));(!a||u.y<a.y)&&(a=u)}return a},hudBand:()=>this.hudReserve(t).bandPx}}if(new URLSearchParams(location.search).has("ws_streamtest")&&this.views.length>=2){const e=this.views[0],s=this.views[this.views.length-1];this.stream.begin(0),this.stream.update(new m(e.home.x,e.home.y+b/2,0),new m(s.home.x,s.home.y+b/2,0),.85)}}exit(t){t.ui.hide("play-hud");for(const e of this.cleanups)e();this.cleanups=[],this.qualityStop?.(),this.qualityStop=null,this.confetti.clear(),this.stream.end(),this.droplets.clear(),this.pendingTap=null,this.qaProbe&&delete window.__wsDebug;for(const e of this.views)this.tubesGroup.remove(e.group);this.views=[],this.movesEl=null,this.topbarEl=null,this.undoBtn=null,this.addBtn=null,this.hudObserver?.disconnect(),this.hudObserver=null,this.hudKey=""}update(t,e){this.fitCamera(t),ms(t.renderer.domElement.height,t.renderer.camera.fov),this.confetti.update(e),this.aurora.update(e),this.droplets.update(e);for(let s=0;s<this.views.length;s++){const i=this.views[s];if(i.tick(e),this.anim&&this.anim.from===s)continue;const n=i.home.y+(s===this.selected?ne:0),r=Math.min(1,12*e);i.group.position.x+=(i.home.x-i.group.position.x)*r,i.group.position.y+=(n-i.group.position.y)*r,i.group.position.z+=(i.home.z-i.group.position.z)*r,i.group.rotation.z+=(0-i.group.rotation.z)*r}if(this.anim&&this.updatePour(t,e),this.won&&!this.finished&&(this.winTimer-=e,this.winTimer<=0)){this.finished=!0;const s=()=>t.setScene("gameover");this.needAd?t.ads.showInterstitial().then(s,s):s()}}resetBoard(){this.tubes=at(this.initial),this.history=[],this.selected=-1,this.extraTubes=0,this.anim=null,this.pendingTap=null,this.won=!1,this.finished=!1,this.winTimer=0,this.confetti.clear();for(const t of this.views)this.tubesGroup.remove(t.group);this.views=[];for(const t of this.tubes)this.createView(t);this.layout();for(const t of this.views)t.group.position.copy(t.home);this.refreshHud()}createView(t){const e=new Zs;return e.setStack(I(t)),this.tubesGroup.add(e.group),this.views.push(e),e}layout(){const t=this.views.length,e=t>6,s=e?Math.ceil(t/2):t;(e?[this.views.slice(0,s),this.views.slice(s)]:[this.views]).forEach((n,r)=>{const a=e?r===0?J:-J:0;n.forEach((c,l)=>{c.home.set((l-(n.length-1)/2)*qt,a,0)})})}fitCamera(t){const e=t.renderer.camera,s=this.views.length,i=s>6,n=i?Math.ceil(s/2):s,r=this.hudReserve(t),a=xs({halfW:(n-1)*qt/2+T+.26,halfH:(i?J:0)+b/2+.8,clearance:i?ri:ai,lookAtY:Xt,aspect:e.aspect,fovDeg:e.fov,viewportH:r.viewportH,hudBandPx:r.bandPx,minZ:5});e.position.set(0,0,a),e.lookAt(0,Xt,0)}hudReserve(t){const e=t.renderer.domElement,s=`${e.width}x${e.height}`;if(s!==this.hudKey){this.hudKey=s;const i=this.topbarEl,n=i?i.offsetTop+i.offsetHeight:0;this.hudBandPx=(n>0?n:oi)+ni,this.hudViewportH=e.clientHeight||e.getBoundingClientRect().height}return{bandPx:this.hudBandPx,viewportH:this.hudViewportH}}onTap(t,e,s){if(this.won)return;if(this.anim){this.pendingTap={x:e,y:s};return}const i=this.pickTube(t,e,s);if(i===-1){this.selected!==-1&&(this.deselect(),U(t));return}if(this.selected===-1){this.tubes[i].length>0?(this.select(i),dt(t)):U(t);return}if(i===this.selected){this.deselect(),U(t);return}ns(this.tubes,this.selected,i)?this.startPour(t,this.selected,i):this.tubes[i].length>0?(this.select(i),dt(t)):Qs(t)}startQualityWatchdog(t){const e=new URLSearchParams(location.search),s=(()=>{try{return localStorage.getItem("ws.lowfx")==="1"}catch{return!1}})();if(e.has("ws_lowfx")||s){lt(!1);return}if(lt(!0),e.has("ws_probe")||e.has("ws_hiqual"))return;const i=30,n=1500,r=3500,a=100;let c=0,l=0,h=0;const u=performance.now();let d=-1,f=u,g=0;const M=y=>{g=requestAnimationFrame(M);const R=y-f;if(f=y,c++,c<=i&&y-u<n||(d<0&&(d=y),l++,h+=Math.min(R,a),y-d<r))return;const K=h/l;if(K>1e3/50){lt(!1);try{localStorage.setItem("ws.lowfx","1")}catch{}t.analytics.track("fx_degraded",{level:this.level,avgFrameMs:Math.round(K*10)/10})}cancelAnimationFrame(g),this.qualityStop=null};g=requestAnimationFrame(M),this.qualityStop=()=>cancelAnimationFrame(g)}pickTube(t,e,s){const i=t.renderer.domElement.getBoundingClientRect(),n=new Pe((e-i.left)/i.width*2-1,-((s-i.top)/i.height)*2+1);this.raycaster.setFromCamera(n,t.renderer.camera);const a=this.raycaster.intersectObjects(this.views.map(c=>c.hit),!1)[0]?.object;return a?this.views.findIndex(c=>c.hit===a):-1}select(t){this.deselect(),this.selected=t,this.views[t].setSelected(!0)}deselect(){this.selected!==-1&&this.views[this.selected].setSelected(!1),this.selected=-1}startPour(t,e,s){const i=I(this.tubes[e]),n=I(this.tubes[s]),r=i[i.length-1].color,a=rs(this.tubes,e,s);this.history.push(a),this.deselect(),this.anim={from:e,to:s,count:a.count,color:r,fromRuns:i,toRuns:n,t:0,duration:.34+a.count*.085},this.stream.begin(r),Js(t),this.refreshHud()}updatePour(t,e){const s=this.anim;if(!s)return;s.t+=e;const n=window.__wsFreezePour??this.qaFreezePour??Math.min(1,s.t/s.duration),r=n*n*(3-2*n),a=s.count*r,c=s.fromRuns.map(B=>({...B}));c[c.length-1].count-=a;const l=s.toRuns.map(B=>({...B})),h=l[l.length-1];h&&h.color===s.color?h.count+=a:a>.001&&l.push({color:s.color,count:a});const u=this.views[s.from],d=this.views[s.to];u.setStack(c),d.setStack(l);const f=Math.sin(n*Math.PI),g=d.home.x-u.home.x,M=Math.sign(g)||1;u.group.position.set(u.home.x+g*si*f,u.home.y+oe*f,u.home.z+ae*f),u.group.rotation.z=-M*re*f;const y=u.group.rotation.z,R=new m(u.group.position.x-Math.sin(y)*(b/2),u.group.position.y+Math.cos(y)*(b/2),u.group.position.z),K=new m(d.group.position.x,d.group.position.y+b/2+.02,d.group.position.z),N=Math.min(1,Math.max(0,(n-.1)/.78));if(this.stream.update(R,K,N,e),N>.05&&N<.985&&(d.pourFlow(s.color),u.bubbles.stir(.5),Math.random()<e*26&&(this.stream.tipPoint(N,Vt),this.droplets.trickle(Vt,s.color,1))),this.qaProbe&&(window.__wsPour={p:n,reveal:N,streamVisible:this.stream.group.children[0]?.visible??!1}),n>=1){u.setStack(I(this.tubes[s.from])),d.setStack(I(this.tubes[s.to])),d.wobble=1,d.pourImpact(s.color),u.group.position.copy(u.home),u.group.rotation.z=0,this.stream.end(),this.droplets.splash(new m(d.home.x,d.home.y+b/2,0),s.color),this.anim=null,ti(t);const B=this.pendingTap;this.pendingTap=null,et(this.tubes)?this.onWin(t):B&&this.onTap(t,B.x,B.y)}}undo(t){if(this.won||this.anim||this.history.length===0)return;const e=this.history.pop();e&&(as(this.tubes,e),this.views[e.from].setStack(I(this.tubes[e.from])),this.views[e.to].setStack(I(this.tubes[e.to])),this.deselect(),U(t),this.refreshHud())}restart(t){this.won||(t.analytics.track("level_restart",{level:this.level,moves:this.history.length}),this.resetBoard(),U(t))}addTube(t){if(this.won||this.anim||this.extraTubes>=Et)return;this.extraTubes++,this.tubes.push([]);const e=this.createView([]);this.layout(),e.group.position.set(e.home.x,e.home.y+2.5,e.home.z),t.analytics.track("extra_tube",{level:this.level,extra:this.extraTubes}),dt(t),this.refreshHud()}onWin(t){this.won=!0,this.winTimer=ii,this.deselect(),ei(t),this.confetti.burst(new m(-1.2,.4,0),60,1.6),this.confetti.burst(new m(1.2,.4,0),60,1.6);const e=this.history.length,s=ps(e,this.data.minMoves),i=String(this.level),n={...this.save.get("levels")},r=n[i];n[i]={stars:Math.max(r?.stars??0,s),bestMoves:Math.min(r?.bestMoves??e,e)};const a=this.save.get("completions")+1;this.save.update({levels:n,completions:a,currentLevel:Math.max(this.save.get("currentLevel"),this.level+1)}),this.needAd=a%Qe===0&&!this.save.get("noAds"),t.analytics.track("level_complete",{level:this.level,moves:e,stars:s,minMoves:this.data.minMoves,extraTubes:this.extraTubes})}buildHud(t){const e=t.ui.screen("play-hud","jeez-ui-hud"),s=t.ui.iconButton("",()=>t.setScene("menu"));s.setAttribute("aria-label","Back to menu"),P(s,E("home",22));const i=document.createElement("div");i.className="ws-topbar",this.topbarEl=i,this.movesEl=t.ui.text("","ws-chip"),i.append(s,t.ui.text(`Level ${this.level}`,"ws-chip"),this.movesEl);const n=document.createElement("div");n.className="ws-bottombar",this.undoBtn=t.ui.button("",()=>this.undo(t),"ws-round"),this.undoBtn.setAttribute("aria-label","Undo last move"),P(this.undoBtn,E("undo",26));const r=t.ui.button("",()=>this.restart(t),"ws-round");r.setAttribute("aria-label","Restart level"),P(r,E("restart",26)),this.addBtn=t.ui.button("",()=>this.addTube(t),"ws-round"),this.addBtn.setAttribute("aria-label","Add an empty tube"),P(this.addBtn,E("add-tube",26)),n.append(this.undoBtn,r,this.addBtn),e.replaceChildren(i,n),t.ui.show("play-hud"),this.hudObserver?.disconnect(),this.hudObserver=new ResizeObserver(()=>{this.hudKey=""}),this.hudObserver.observe(i)}refreshHud(){this.movesEl&&(this.movesEl.innerHTML=`Moves <b>${this.history.length}</b> · Min ${this.data.minMoves}`),this.undoBtn&&(this.undoBtn.disabled=this.history.length===0),this.addBtn&&(this.addBtn.disabled=this.extraTubes>=Et)}}const Wt="water-sort-style",li=`
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
`;function hi(){if(document.getElementById(Wt))return;const o=document.createElement("style");o.id=Wt,o.textContent=li,document.head.appendChild(o)}const le=document.getElementById("app");if(!le)throw new Error("Missing #app container in index.html");const V=new Xe({key:We,version:Ke,defaults:{currentLevel:1,levels:{},completions:0,muted:!1,noAds:!1}}),W={level:V.get("currentLevel")},C=new qe({container:le,logicHz:Ze});C.audio.setMuted(V.get("muted"));hi();C.registerScene("menu",new is(V,W));C.registerScene("play",new ci(V,W));C.registerScene("gameover",new ss(V,W));C.analytics.initialize();C.ads.initialize();C.iap.initialize();const St=new URLSearchParams(location.search),pt=Number(St.get("ws_level"));Number.isFinite(pt)&&pt>0&&(W.level=Math.floor(pt));const tt=St.get("ws_scene");tt==="gameover"&&!St.has("ws_level")&&(W.level=1);C.start(tt==="play"||tt==="gameover"?tt:"menu");requestAnimationFrame(()=>{requestAnimationFrame(()=>document.getElementById("boot")?.remove())});
