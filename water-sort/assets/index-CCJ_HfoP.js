import{W as tt,P as st,C as Oe,S as Ve,a as C,B as fe,b as A,c as He,d as it,A as G,G as j,M as x,e as d,f as O,g as Z,h as We,i as de,j as nt,k as ot,l as rt,D as X,m as at,V as m,n as lt,o as me,p as ee,Q as ct,q as ht,r as we,T as ge,s as ut,R as dt,t as pt,u as Se,H as ft,v as mt,w as wt,x as gt}from"./three-Cgn8e5J4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const bt=(()=>{try{return typeof location<"u"&&new URLSearchParams(location.search).has("debug")?!0:typeof localStorage<"u"&&localStorage.getItem("jeez.debug")==="1"}catch{return!1}})();function M(...o){bt&&console.debug(...o)}class vt{}class yt extends vt{async initialize(){M("[ads] noop provider initialized")}async showInterstitial(){return M("[ads] interstitial (noop)"),!0}async showRewarded(){return M("[ads] rewarded (noop) — granting reward"),!0}async showBanner(e="bottom"){M(`[ads] show banner at ${e} (noop)`)}async hideBanner(){M("[ads] hide banner (noop)")}}class xt{async initialize(){M("[analytics] console provider initialized")}track(e,t){M(`[analytics] ${e}`,t??{})}identify(e,t){M(`[analytics] identify ${e}`,t??{})}isFeatureEnabled(e){return!1}reset(){M("[analytics] reset")}}class Mt{graph=null;buffers=new Map;currentBgm=null;volumes={master:1,bgm:.6,sfx:1};_muted=!1;get muted(){return this._muted}unlock(){const{ctx:e}=this.ensure();e.state==="suspended"&&e.resume()}async load(e,t){const s=await fetch(t);if(!s.ok)throw new Error(`Failed to load audio "${e}" from ${t}`);const i=await s.arrayBuffer(),n=await this.ensure().ctx.decodeAudioData(i);this.buffers.set(e,n)}playSfx(e,t={}){const s=this.ensure(),i=this.buffers.get(e);if(!i){console.warn(`[audio] SFX "${e}" not loaded`);return}const n=s.ctx.createBufferSource();if(n.buffer=i,n.playbackRate.value=t.playbackRate??1,t.volume!==void 0){const r=s.ctx.createGain();r.gain.value=t.volume,n.connect(r).connect(s.sfx)}else n.connect(s.sfx);n.start()}playTone(e=880,t=.08,s=.2){const i=this.ensure();if(i.ctx.state!=="running")return;const n=i.ctx.currentTime,r=i.ctx.createOscillator(),a=i.ctx.createGain();r.type="sine",r.frequency.value=e,a.gain.setValueAtTime(s,n),a.gain.exponentialRampToValueAtTime(.001,n+t),r.connect(a).connect(i.sfx),r.start(n),r.stop(n+t)}playBgm(e,t={}){if(this.currentBgm?.name===e)return;this.stopBgm();const s=this.ensure(),i=this.buffers.get(e);if(!i){console.warn(`[audio] BGM "${e}" not loaded`);return}const n=s.ctx.createBufferSource();n.buffer=i,n.loop=t.loop??!0;const r=s.ctx.createGain(),a=t.fadeInSec??.5,l=s.ctx.currentTime;r.gain.setValueAtTime(.001,l),r.gain.exponentialRampToValueAtTime(1,l+a),n.connect(r).connect(s.bgm),n.start(),this.currentBgm={source:n,gain:r,name:e}}stopBgm(e=.3){const t=this.currentBgm;if(!t||!this.graph)return;this.currentBgm=null;const s=this.graph.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,s),t.gain.gain.exponentialRampToValueAtTime(.001,s+e),t.source.stop(s+e)}setMuted(e){this._muted=e,this.applyVolumes()}toggleMuted(){return this.setMuted(!this._muted),this._muted}setVolume(e,t){this.volumes[e]=Math.min(1,Math.max(0,t)),this.applyVolumes()}getVolume(e){return this.volumes[e]}async suspend(){this.graph&&this.graph.ctx.state==="running"&&await this.graph.ctx.suspend()}async resume(){this.graph&&this.graph.ctx.state==="suspended"&&await this.graph.ctx.resume()}ensure(){if(!this.graph){const e=new AudioContext,t=e.createGain();t.connect(e.destination);const s=e.createGain();s.connect(t);const i=e.createGain();i.connect(t),this.graph={ctx:e,master:t,bgm:s,sfx:i},this.applyVolumes()}return this.graph}applyVolumes(){this.graph&&(this.graph.master.gain.value=this._muted?0:this.volumes.master,this.graph.bgm.gain.value=this.volumes.bgm,this.graph.sfx.gain.value=this.volumes.sfx)}}class St{}class kt extends St{owned=new Set;async initialize(){M("[iap] noop provider initialized")}async getProducts(e){return e.map(t=>({id:t,title:t,description:`Placeholder product "${t}"`,price:"$0.00"}))}async purchase(e){return M(`[iap] simulated purchase of ${e}`),this.owned.add(e),{productId:e,success:!0}}async restorePurchases(){return[...this.owned]}isOwned(e){return this.owned.has(e)}}const Tt=250,Et=12,zt=8,Pt=40,At=400;class Lt{listeners={};pointers=new Map;keys=new Set;target;startX=0;startY=0;startTime=0;lastX=0;lastY=0;dragging=!1;pinching=!1;pinchStartDist=1;pinchScale=1;constructor(e){this.target=e,e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}on(e,t){return this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),()=>this.listeners[e]?.delete(t)}off(e,t){this.listeners[e]?.delete(t)}isKeyDown(e){return this.keys.has(e)}dispose(){this.target.removeEventListener("pointerdown",this.onPointerDown),this.target.removeEventListener("pointermove",this.onPointerMove),this.target.removeEventListener("pointerup",this.onPointerUp),this.target.removeEventListener("pointercancel",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}emit(e,t){const s=this.listeners[e];if(s)for(const i of s)i(t)}pinchDistance(){const[e,t]=[...this.pointers.values()];return!e||!t?1:Math.hypot(e.x-t.x,e.y-t.y)||1}pinchCenter(){const[e,t]=[...this.pointers.values()];return!e||!t?{x:0,y:0}:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}onPointerDown=e=>{this.target.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1?(this.startX=this.lastX=e.clientX,this.startY=this.lastY=e.clientY,this.startTime=performance.now(),this.dragging=!1):this.pointers.size===2&&(this.dragging&&(this.emit("dragend",this.dragEvent(e.clientX,e.clientY,0,0)),this.dragging=!1),this.pinching=!0,this.pinchStartDist=this.pinchDistance(),this.pinchScale=1)};onPointerMove=e=>{const t=this.pointers.get(e.pointerId);if(!t)return;if(t.x=e.clientX,t.y=e.clientY,this.pinching&&this.pointers.size>=2){const n=this.pinchDistance()/this.pinchStartDist,r=this.pinchCenter();this.emit("pinch",{scale:n,deltaScale:n-this.pinchScale,centerX:r.x,centerY:r.y}),this.pinchScale=n;return}if(this.pointers.size!==1)return;const s=e.clientX-this.lastX,i=e.clientY-this.lastY;this.dragging||Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>zt&&(this.dragging=!0,this.emit("dragstart",this.dragEvent(e.clientX,e.clientY,0,0))),this.dragging&&this.emit("drag",this.dragEvent(e.clientX,e.clientY,s,i)),this.lastX=e.clientX,this.lastY=e.clientY};onPointerUp=e=>{if(!this.pointers.delete(e.pointerId))return;if(this.pinching&&this.pointers.size<2){this.pinching=!1;const r=this.pinchCenter();this.emit("pinchend",{scale:this.pinchScale,deltaScale:0,centerX:r.x,centerY:r.y});const a=[...this.pointers.values()][0];a&&(this.startX=this.lastX=a.x,this.startY=this.lastY=a.y,this.startTime=performance.now(),this.dragging=!1);return}if(this.pointers.size>0)return;const t=performance.now()-this.startTime,s=e.clientX-this.startX,i=e.clientY-this.startY,n=Math.hypot(s,i);if(this.dragging){if(this.dragging=!1,this.emit("dragend",this.dragEvent(e.clientX,e.clientY,0,0)),n>=Pt&&t<=At){const r=Math.abs(s)>Math.abs(i)?s>0?"right":"left":i>0?"down":"up";this.emit("swipe",{direction:r,dx:s,dy:i,durationMs:t})}}else t<=Tt&&n<=Et&&this.emit("tap",{x:e.clientX,y:e.clientY})};dragEvent(e,t,s,i){return{x:e,y:t,dx:s,dy:i,totalDx:e-this.startX,totalDy:t-this.startY}}onKeyDown=e=>{this.keys.add(e.code),this.emit("keydown",e)};onKeyUp=e=>{this.keys.delete(e.code),this.emit("keyup",e)}}const Ct=2;class _t{webgl;camera;container;observer;constructor(e){this.container=e,getComputedStyle(e).position==="static"&&(e.style.position="relative"),this.webgl=new tt({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.webgl.setPixelRatio(Math.min(window.devicePixelRatio,Ct)),this.webgl.shadowMap.enabled=!1,this.webgl.domElement.style.display="block",e.appendChild(this.webgl.domElement),this.camera=new st(60,1,.1,100),this.camera.position.z=5,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize()}get domElement(){return this.webgl.domElement}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.webgl.setSize(e,t)}render(e){this.webgl.render(e,this.camera)}dispose(){this.observer.disconnect(),this.webgl.dispose(),this.webgl.domElement.remove()}}class Bt{states=new Map;changeListeners=new Set;_current=null;get current(){return this._current}is(e){return this._current===e}register(e,t={}){this.states.set(e,t)}transition(e){const t=this.states.get(e);if(!t)throw new Error(`Unknown state "${e}" — did you register() it?`);if(this._current===e)return;const s=this._current;s!==null&&this.states.get(s)?.onExit?.(e),this._current=e,t.onEnter?.(s);for(const i of this.changeListeners)i(e,s)}onChange(e){return this.changeListeners.add(e),()=>this.changeListeners.delete(e)}}const ke="jeez-ui-style",Rt=`
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
`;class It{root;screens=new Map;constructor(e){if(!document.getElementById(ke)){const t=document.createElement("style");t.id=ke,t.textContent=Rt,document.head.appendChild(t)}this.root=document.createElement("div"),this.root.className="jeez-ui-root",e.appendChild(this.root)}screen(e,t=""){let s=this.screens.get(e);return s||(s=document.createElement("div"),s.hidden=!0,this.root.appendChild(s),this.screens.set(e,s)),s.className=`jeez-ui-screen${t?` ${t}`:""}`,s}show(e,t={}){if(t.exclusive??!0)for(const[i,n]of this.screens)i!==e&&(n.hidden=!0);const s=this.screens.get(e);s&&(s.hidden=!1)}hide(e){const t=this.screens.get(e);t&&(t.hidden=!0)}hideAll(){for(const e of this.screens.values())e.hidden=!0}isVisible(e){const t=this.screens.get(e);return!!t&&!t.hidden}button(e,t,s=""){const i=document.createElement("button");return i.type="button",i.className=`jeez-ui-button${s?` ${s}`:""}`,i.textContent=e,i.addEventListener("click",t),i}iconButton(e,t){return this.button(e,t,"jeez-ui-icon-button")}title(e){const t=document.createElement("h1");return t.className="jeez-ui-title",t.textContent=e,t}text(e,t="jeez-ui-text"){const s=document.createElement("p");return s.className=t,s.textContent=e,s}}const Gt=250;class jt{renderer;input;audio;ui;states=new Bt;ads;analytics;iap;scenes=new Map;activeScene=null;stepMs;accumulator=0;lastTime=0;rafId=0;running=!1;manuallyPaused=!1;autoPaused=!1;pauseListeners=new Set;constructor(e){this.stepMs=1e3/(e.logicHz??60),this.renderer=new _t(e.container),this.input=new Lt(this.renderer.domElement),this.audio=new Mt,this.ui=new It(e.container),this.ads=e.ads??new yt,this.analytics=e.analytics??new xt,this.iap=e.iap??new kt;const t=()=>this.audio.unlock();window.addEventListener("pointerdown",t,{once:!0}),window.addEventListener("keydown",t,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?this.paused||(this.autoPaused=!0,this.applyPause(!0)):this.autoPaused&&(this.autoPaused=!1,this.manuallyPaused||this.applyPause(!1))})}registerScene(e,t){this.scenes.set(e,t),this.states.register(e,{onEnter:()=>this.activateScene(e)})}setScene(e){this.states.transition(e)}get scene(){return this.activeScene}start(e){this.running||(this.running=!0,this.setScene(e),this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}get paused(){return this.manuallyPaused||this.autoPaused}pause(){this.manuallyPaused||(this.manuallyPaused=!0,this.autoPaused||this.applyPause(!0))}resume(){this.manuallyPaused&&(this.manuallyPaused=!1,this.autoPaused||this.applyPause(!1))}togglePause(){this.manuallyPaused?this.resume():this.pause()}onPauseChange(e){return this.pauseListeners.add(e),()=>this.pauseListeners.delete(e)}applyPause(e){e?this.audio.suspend():(this.lastTime=performance.now(),this.accumulator=0,this.audio.resume());for(const t of this.pauseListeners)t(e)}activateScene(e){const t=this.scenes.get(e);if(!t)throw new Error(`Unknown scene "${e}" — did you registerScene() it?`);this.activeScene?.exit(this),this.activeScene=t,this.accumulator=0,t.enter(this)}frame=e=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);const t=Math.min(e-this.lastTime,Gt);this.lastTime=e;const s=this.activeScene;if(s){if(!this.paused)for(this.accumulator+=t;this.accumulator>=this.stepMs;)s.update(this,this.stepMs/1e3),this.accumulator-=this.stepMs;s.render?.(this,this.accumulator/this.stepMs),this.renderer.render(s.three)}}}class Yt{constructor(e){this.options=e,this.cache=this.read()}cache;get(e){return this.cache[e]}set(e,t){this.cache[e]=t,this.persist()}update(e){Object.assign(this.cache,e),this.persist()}get all(){return this.cache}clear(){this.cache={...this.options.defaults};try{localStorage.removeItem(this.options.key)}catch{}}async syncToCloud(){M("[storage] cloud sync not implemented (placeholder)")}read(){try{const e=localStorage.getItem(this.options.key);if(!e)return{...this.options.defaults};const t=JSON.parse(e);let s=t.data??{};const i=t.version??1;for(let n=i+1;n<=this.options.version;n++){const r=this.options.migrations?.[n];r&&(s=r(s))}return{...this.options.defaults,...s}}catch(e){return console.warn("[storage] failed to read save, using defaults",e),{...this.options.defaults}}}persist(){try{const e={version:this.options.version,data:this.cache};localStorage.setItem(this.options.key,JSON.stringify(e))}catch(e){console.warn("[storage] failed to persist save",e)}}}const $t="water-sort",Te="Water Sort",Nt=`${$t}.save`,Dt=1,qt=60,g=[16729943,3621626,3069299,16753922,10837738,16737096,16739201,2003199,8121759,13459763,53971,16370212,15856374,5726319],Ee=2,Ut=3;function te(o=128){const e=document.createElement("canvas");e.width=e.height=o;const t=e.getContext("2d");if(t){const i=t.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,o,o)}const s=new Oe(e);return s.colorSpace=Ve,s}function be(){const t=document.createElement("canvas");t.width=32,t.height=256;const s=t.getContext("2d");if(s){const n=s.createLinearGradient(0,0,0,256);n.addColorStop(0,"#0b1338"),n.addColorStop(.45,"#0a1130"),n.addColorStop(.78,"#0c1434"),n.addColorStop(1,"#10283f"),s.fillStyle=n,s.fillRect(0,0,32,256);const r=s.createRadialGradient(32/2,256*.92,2,32/2,256*.92,256*.55);r.addColorStop(0,"rgba(45,180,210,0.22)"),r.addColorStop(1,"rgba(45,180,210,0)"),s.fillStyle=r,s.fillRect(0,0,32,256)}const i=new Oe(t);return i.colorSpace=Ve,i}function Ke(o,e,t=5.5){const s=new Float32Array(o*3),i=new Float32Array(o*3),n=[],r=new C;for(let c=0;c<o;c++)s[c*3]=(Math.random()-.5)*11,s[c*3+1]=(Math.random()-.5)*2*t,s[c*3+2]=-2.5-Math.random()*2,r.setHex(e[c%e.length]),i[c*3]=r.r,i[c*3+1]=r.g,i[c*3+2]=r.b,n.push(.1+Math.random()*.22);const a=new fe;return a.setAttribute("position",new A(s,3)),a.setAttribute("color",new A(i,3)),{points:new He(a,new it({size:.55,map:te(),vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,blending:G})),update(c){for(let h=0;h<o;h++){let u=s[h*3+1]+n[h]*c;u>t&&(u=-t),s[h*3+1]=u}a.getAttribute("position").needsUpdate=!0}}}class ve{group=new j;glows=[];t=0;constructor(){const e=te(256),t=[[2282478,-2.6,-2.6,7.5,.14],[10980346,2.8,-3.1,6.5,.11],[16739201,3.2,2.9,5.5,.06],[2282478,-3.4,3.2,5,.07]];for(const[s,i,n,r,a]of t){const l=new x({map:e,color:s,transparent:!0,opacity:a,depthWrite:!1,blending:G}),c=new d(new O(1,1),l);c.position.set(i,n,-3.6),c.scale.setScalar(r),this.group.add(c),this.glows.push({mesh:c,baseX:i,baseY:n,speed:.12+Math.random()*.1,phase:Math.random()*Math.PI*2})}}update(e){this.t+=e;for(const t of this.glows)t.mesh.position.x=t.baseX+Math.sin(this.t*t.speed+t.phase)*.5,t.mesh.position.y=t.baseY+Math.cos(this.t*t.speed*.8+t.phase)*.35}}class Xt extends Z{constructor(){super();const e=new We;e.deleteAttribute("uv");const t=new de({side:nt}),s=new de,i=new ot(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const n=new d(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const r=new d(e,s);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const a=new d(e,s);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new d(e,s);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new d(e,s);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new d(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new d(e,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const p=new d(e,Y(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const w=new d(e,Y(50));w.position.set(-16.109,18.021,-8.207),w.scale.set(.1,2.425,2.751),this.add(w);const v=new d(e,Y(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const S=new d(e,Y(43));S.position.set(-.462,8.89,14.52),S.scale.set(4.38,5.441,.088),this.add(S);const k=new d(e,Y(20));k.position.set(3.235,11.486,-12.541),k.scale.set(2.5,2,.1),this.add(k);const N=new d(e,Y(100));N.position.set(0,20,0),N.scale.set(1,.1,1),this.add(N)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Y(o){const e=new x;return e.color.setScalar(o),e}let se=null;function Ft(o){if(!se){const e=new rt(o);se=e.fromScene(new Xt,.04).texture,e.dispose()}return se}function ye(o,e){const t=Ft(e);o.environment!==t&&(o.environment=t)}const f='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"',Ot={home:{body:`<path ${f} d="M4 11.3 12 4l8 7.3"/><path ${f} d="M6.4 9.4V20h11.2V9.4"/>`},undo:{body:`<path ${f} d="M8.5 5.5 4 10l4.5 4.5"/><path ${f} d="M4 10h10.5a5.5 5.5 0 0 1 0 11H7"/>`},restart:{body:`<path ${f} d="M20.4 12a8.4 8.4 0 1 1-2.46-5.94"/><path ${f} d="M20.6 2.8v4.6h-4.6"/>`},plus:{body:`<path ${f} d="M12 5v14M5 12h14"/>`},"sound-on":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${f} d="M15 9.5a3.6 3.6 0 0 1 0 5"/><path ${f} d="M17.5 7.2a7.2 7.2 0 0 1 0 9.6"/>`},"sound-off":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${f} d="M15.5 9.5l5 5"/><path ${f} d="M20.5 9.5l-5 5"/>`},"star-fill":{body:'<path fill="currentColor" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>'},"star-off":{body:`<path ${f} stroke-width="1.7" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>`},lock:{body:`<rect ${f} x="6.5" y="10.5" width="11" height="9.5" rx="2.2"/><path ${f} d="M9 10.5V8a3 3 0 0 1 6 0v2.5"/>`},check:{body:`<path ${f} stroke-width="2.2" d="M5 12.5l4.5 4.5L19 7.5"/>`},play:{body:'<path fill="currentColor" d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l9.7-6.2c.6-.4.6-1.4 0-1.8L10.1 4.9c-.7-.4-1.6.1-1.6.9z"/>'},grid:{body:`<rect ${f} x="4" y="4" width="7" height="7" rx="2"/><rect ${f} x="13" y="4" width="7" height="7" rx="2"/><rect ${f} x="4" y="13" width="7" height="7" rx="2"/><rect ${f} x="13" y="13" width="7" height="7" rx="2"/>`},back:{body:`<path ${f} d="M14.5 5.5 8 12l6.5 6.5"/>`},"add-tube":{body:`<path ${f} d="M7.5 3.5h9"/><path ${f} d="M9 3.5v6a3 3 0 0 1-1.5 2.6V18a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5.9A3 3 0 0 1 15 9.5v-6"/><path fill="currentColor" d="M12 11.6c1.2 1.4 2.1 2.6 2.1 3.7a2.1 2.1 0 1 1-4.2 0c0-1.1.9-2.3 2.1-3.7z"/>`}},ze={viewBox:"0 0 48 48",body:`
    <path fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"
      d="M16 5.5h16M20.5 5.5v10.2L10.6 35a3.4 3.4 0 0 0 3 4.9h20.8a3.4 3.4 0 0 0 3-4.9L27.5 15.7V5.5"/>
    <path fill="currentColor" opacity="0.9"
      d="M13 30c3-2.2 6-2.2 9 0s6 2.2 9 0l3.2 5.1a3.4 3.4 0 0 1-3 4.8H16.8a3.4 3.4 0 0 1-3-4.8L13 30z"/>
    <circle cx="21" cy="34" r="1.7" fill="#0d1533"/>
    <circle cx="26.5" cy="30.5" r="1.3" fill="#0d1533"/>
    <circle cx="29.5" cy="35.5" r="1.1" fill="#0d1533"/>
  `};function E(o,e=24){const t=Ot[o];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${e}" height="${e}" aria-hidden="true">${t.body}</svg>`}function T(o,e){o.innerHTML=e}function ie(o,e=24,t="ws-ic"){const s=document.createElement("span");return s.className=t,s.setAttribute("aria-hidden","true"),T(s,E(o,e)),s}class Vt{constructor(e,t){this.save=e,this.session=t,this.three.background=be(),this.bokeh=Ke(50,g),this.three.add(this.bokeh.points,this.aurora.group)}three=new Z;bokeh;aurora=new ve;enter(e){e.renderer.camera.position.set(0,0,6),e.renderer.camera.lookAt(0,0,0),ye(this.three,e.renderer.webgl);const t=this.session.level,s=this.save.get("levels")[String(t)];e.analytics.track("win_shown",{level:t,stars:s?.stars??0});const i=document.createElement("div");i.className="ws-card ws-panel",i.append(e.ui.text("LEVEL COMPLETE","ws-eyebrow"),e.ui.title(`Level ${t}`),this.starsElement(s?.stars??0),e.ui.text(s?`Best: ${s.bestMoves} moves`:"","ws-chip ws-best"));const n=e.ui.button("Next level",()=>{this.session.level=t+1,e.setScene("play")});i.append(n,e.ui.button("Menu",()=>e.setScene("menu"),"jeez-ui-button--ghost")),e.ui.screen("gameover").replaceChildren(i),e.ui.show("gameover")}exit(e){e.ui.hide("gameover")}update(e,t){this.bokeh.update(t),this.aurora.update(t)}starsElement(e){const t=document.createElement("div");t.className="ws-stars-wrap";const s=document.createElement("div");s.className="ws-rays";const i=document.createElement("div");i.className="ws-stars-row";for(let n=0;n<3;n++){const r=document.createElement("span"),a=n<e;r.className=a?"ws-star ws-star--on":"ws-star ws-star--off",r.style.animationDelay=`${.25+n*.18}s`,T(r,E(a?"star-fill":"star-off",46)),i.append(r)}return t.append(s,i),t}}class Ht{constructor(e,t){this.save=e,this.session=t,this.three.background=be(),this.bokeh=Ke(70,g),this.three.add(this.bokeh.points,this.aurora.group)}three=new Z;bokeh;aurora=new ve;enter(e){e.renderer.camera.position.set(0,0,6),e.renderer.camera.lookAt(0,0,0),ye(this.three,e.renderer.webgl),e.analytics.track("menu_shown");const t=this.save.get("currentLevel"),s=e.ui.screen("menu"),i=document.createElement("div");i.className="ws-hero";const n=document.createElement("div");n.className="ws-logo",T(n,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${ze.viewBox}" aria-hidden="true">${ze.body}</svg>`);const r=document.createElement("div");r.className="ws-word ws-word--a",r.textContent=Te.split(" ")[0];const a=document.createElement("div");a.className="ws-word ws-word--b",a.textContent=Te.split(" ")[1]??"",i.append(n,r,a);const l=e.ui.text(`LEVEL ${t}`,"ws-chip"),c=e.ui.button("Play",()=>{this.session.level=t,e.setScene("play")});c.prepend(ie("play",20,"ws-ic"));const h=e.ui.button("Levels",()=>this.showLevels(e),"jeez-ui-button--ghost");h.prepend(ie("grid",20,"ws-ic"));const u=document.createElement("div");u.className="ws-stack",u.append(c,h),s.replaceChildren(i,e.ui.text("SORT THE COLORS","ws-subtitle"),l,u,this.muteButton(e)),e.ui.show("menu")}exit(e){e.ui.hide("menu"),e.ui.hide("levels")}update(e,t){this.bokeh.update(t),this.aurora.update(t)}showLevels(e){const t=this.save.get("currentLevel"),s=this.save.get("levels"),i=Math.max(20,t),n=document.createElement("div");n.className="ws-grid";for(let l=1;l<=i;l++){const c=s[String(l)],h=l>t;let u="ws-cell";c&&(u+=" ws-cell--done"),l===t&&(u+=" ws-cell--current"),h&&(u+=" ws-cell--locked");const p=e.ui.button("",()=>{this.session.level=l,e.setScene("play")},u);if(p.disabled=h,p.setAttribute("aria-label",h?`Level ${l} (locked)`:`Level ${l}`),h){const w=document.createElement("span");w.className="ws-cell-num",T(w,E("lock",18)),p.append(w)}else{const w=document.createElement("span");if(w.className="ws-cell-num",w.textContent=String(l),p.append(w),c){const v=document.createElement("span");v.className="ws-cell-stars";for(let S=0;S<3;S++){const k=document.createElement("span");k.className=S<c.stars?"ws-mini-on":"ws-mini-off",T(k,E(S<c.stars?"star-fill":"star-off",9)),v.append(k)}p.append(v)}}n.append(p)}const r=e.ui.button("Back",()=>e.ui.show("menu"),"jeez-ui-button--ghost");r.prepend(ie("back",18,"ws-ic")),e.ui.screen("levels").replaceChildren(e.ui.title("Select Level"),n,r),e.ui.show("levels")}muteButton(e){const t=()=>{const i=e.audio.muted;T(s,E(i?"sound-off":"sound-on",22)),s.setAttribute("aria-label",i?"Sound off, tap to unmute":"Sound on, tap to mute")},s=e.ui.button("",()=>{const i=e.audio.toggleMuted();this.save.set("muted",i),t(),e.audio.playTone(660,.06)},"jeez-ui-icon-button");return t(),s.classList.add("ws-mute"),s}}const z=4;function xe(o){const e=o[o.length-1];if(e===void 0)return null;let t=1;for(let s=o.length-2;s>=0&&o[s]===e;s--)t++;return{color:e,count:t}}function R(o){const e=[];for(const t of o){const s=e[e.length-1];s&&s.color===t?s.count++:e.push({color:t,count:1})}return e}function Wt(o,e,t){if(e===t)return!1;const s=o[e],i=o[t],n=xe(s);return!n||i.length>=z?!1:i.length===0||i[i.length-1]===n.color}function Kt(o,e){const t=xe(o);return t?Math.min(t.count,z-e.length):0}function Qt(o,e,t){const s=o[e],i=o[t],n=Kt(s,i),r=s[s.length-1];for(let a=0;a<n;a++)s.pop(),i.push(r);return{from:e,to:t,count:n}}function Jt(o,e){const t=o[e.from],s=o[e.to];for(let i=0;i<e.count;i++){const n=s.pop();n!==void 0&&t.push(n)}}function J(o){return o.every(e=>e.length===0?!0:e.length!==z?!1:e.every(t=>t===e[0]))}function ne(o){return o.map(e=>e.slice())}function Zt(o){let e=o>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function es(o,e){for(let t=o.length-1;t>0;t--){const s=Math.floor(e()*(t+1)),i=o[t];o[t]=o[s],o[s]=i}return o}class ts{items=[];get size(){return this.items.length}push(e){const t=this.items;t.push(e);let s=t.length-1;for(;s>0;){const i=s-1>>1;if(t[i].f<=t[s].f)break;const n=t[i];t[i]=t[s],t[s]=n,s=i}}pop(){const e=this.items,t=e[0],s=e.pop();if(e.length===0||s===void 0)return t;e[0]=s;let i=0;for(;;){const n=i*2+1,r=n+1;let a=i;if(n<e.length&&e[n].f<e[a].f&&(a=n),r<e.length&&e[r].f<e[a].f&&(a=r),a===i)break;const l=e[a];e[a]=e[i],e[i]=l,i=a}return t}}function Pe(o){return o.map(e=>e.join(",")).sort().join(";")}function Ae(o){let e=0;const t=new Set;for(const s of o)for(let i=0;i<s.length;i++)(i===0||s[i]!==s[i-1])&&e++,t.add(s[i]);return e-t.size}function ss(o){const e=[];for(let t=0;t<o.length;t++){const s=o[t],i=xe(s);if(!i)continue;const n=i.count===s.length;let r=!1;for(let a=0;a<o.length;a++){if(a===t)continue;const l=o[a];if(l.length>=z)continue;if(l.length===0){if(n||r)continue;r=!0}else if(l[l.length-1]!==i.color)continue;const c=Math.min(i.count,z-l.length),h=o.slice();h[t]=s.slice(0,s.length-c),h[a]=l.concat(new Array(c).fill(i.color)),e.push(h)}}return e}function Le(o,e){if(J(o))return{moves:0,optimal:!0};const t=new ts,s=new Map,i=Ae(o);t.push({tubes:o,g:0,f:i*e.weight}),s.set(Pe(o),0);let n=0;for(;t.size>0;){const r=t.pop();if(!r)break;if(++n>e.maxNodes)return null;for(const a of ss(r.tubes)){const l=r.g+1;if(J(a))return{moves:l,optimal:e.weight===1};const c=Pe(a),h=s.get(c);h!==void 0&&h<=l||(s.set(c,l),t.push({tubes:a,g:l,f:l+Ae(a)*e.weight}))}}return null}function is(o){return o<=10?{colors:4,emptyTubes:2}:o<=20?{colors:5,emptyTubes:2}:o<=80?{colors:Math.min(9,6+Math.floor((o-21)/15)),emptyTubes:2}:o<=200?{colors:Math.min(12,10+Math.floor((o-81)/40)),emptyTubes:2}:{colors:Math.min(14,12+Math.floor((o-201)/100)),emptyTubes:1}}function ns(o,e){return o<=Math.ceil(e*1.3)?3:o<=Math.ceil(e*1.8)?2:1}function os(o){const{colors:e,emptyTubes:t}=is(o);for(let s=0;s<200;s++){const i=(Math.imul(o,2654435769)^Math.imul(s+1,2246822507))>>>0,n=Zt(i),r=[];for(let c=0;c<e;c++)for(let h=0;h<z;h++)r.push(c);es(r,n);const a=[];for(let c=0;c<e;c++)a.push(r.slice(c*z,(c+1)*z));for(let c=0;c<t;c++)a.push([]);if(a.some(c=>c.length===z&&c.every(h=>h===c[0]))||J(a))continue;let l=e<=9?Le(a,{maxNodes:15e4,weight:1}):null;if(l||(l=Le(a,{maxNodes:2e5,weight:3})),!!l&&!(l.moves<e+2))return{tubes:a,minMoves:l.moves,optimal:l.optimal,numColors:e,emptyTubes:t}}throw new Error(`Could not generate a solvable level ${o}`)}const I=14,Qe={value:1400};function rs(o,e){Qe.value=o/(2*Math.tan(me.degToRad(e/2)))}const as=`
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
`,ls=`
uniform sampler2D uMap;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 tex = texture2D(uMap, gl_PointCoord);
  float a = tex.a * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor * tex.rgb, a);
}
`,Ce=new C;function _e(o){return Ce.setHex(g[o%g.length]).lerp(new C(16777215),.55),Ce.clone()}class cs{constructor(e){this.liquidRadius=e;const t=new fe;t.setAttribute("position",new A(this.positions,3).setUsage(X)),t.setAttribute("aColor",new A(this.colors,3).setUsage(X)),t.setAttribute("aSize",new A(this.sizes,1).setUsage(X)),t.setAttribute("aAlpha",new A(this.alphas,1).setUsage(X)),t.setDrawRange(0,I),t.boundingSphere=new at(new m(0,0,0),e+2);const s=new lt({uniforms:{uMap:{value:te(64)},uScale:Qe},vertexShader:as,fragmentShader:ls,transparent:!0,depthWrite:!1,depthTest:!1});this.points=new He(t,s),this.points.renderOrder=4,this.points.frustumCulled=!1;for(let i=0;i<I;i++)this.bubbles.push({baseX:0,z:0,y:0,yTop:0,size:.02,speed:0,wobbleAmp:0,wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:4+Math.random()*3,delay:Math.random()*7+.4,color:_e(0)}),this.alphas[i]=0}points;bubbles=[];positions=new Float32Array(I*3);colors=new Float32Array(I*3);sizes=new Float32Array(I);alphas=new Float32Array(I);layers=[];topY=0;stirLevel=0;setStack(e,t,s){this.layers=[];let i=s;for(const n of e){const r=n.count*t;r>.03&&this.layers.push({color:n.color,y0:i,y1:i+r}),i+=r}this.topY=this.layers.length?this.layers[this.layers.length-1].y1:0}stir(e=1){this.stirLevel=Math.min(1.5,this.stirLevel+e*.12)}burst(e=6){let t=0;for(const s of this.bubbles){if(t>=e)break;s.delay>0&&(s.delay=Math.random()*.12,t++)}}update(e){this.stirLevel=Math.max(0,this.stirLevel-e*1.1);const t=this.layers.length>0,s=e*(t?2.2:0)*(1+this.stirLevel*3.2),i=1+this.stirLevel*1.1;for(let r=0;r<this.bubbles.length;r++){const a=this.bubbles[r];if(a.delay>0){a.delay-=e*(1+this.stirLevel),a.delay<=0&&t?this.spawn(a):a.delay<=0&&(a.delay=.5),this.alphas[r]=0;continue}if(!t){this.alphas[r]=0,a.delay=.4+Math.random();continue}if(a.speed<=0){Math.random()<s?this.spawn(a):this.alphas[r]=0;continue}a.speed+=.55*e,a.y+=a.speed*e*i,a.wobblePhase+=a.wobbleSpeed*e;const l=a.yTop>0?(a.y-this.layers[0].y0)/Math.max(.1,a.yTop-this.layers[0].y0):1,c=Math.min(1,l/.08),h=Math.min(1,Math.max(0,(1-l)/.14));if(this.alphas[r]=.62*c*h,a.y>=a.yTop){a.speed=0,a.delay=2+Math.random()*6/(1+this.stirLevel*2),this.alphas[r]=0;continue}const u=a.baseX+Math.sin(a.wobblePhase)*a.wobbleAmp;this.positions[r*3]=u,this.positions[r*3+1]=Math.max(a.y,.001),this.positions[r*3+2]=a.z,this.colors[r*3]=a.color.r,this.colors[r*3+1]=a.color.g,this.colors[r*3+2]=a.color.b,this.sizes[r]=a.size}if(t)for(let r=0;r<this.bubbles.length;r++){const a=this.bubbles[r];a.delay>0&&Math.random()<s/I&&(a.delay=Math.min(a.delay,.05))}const n=this.points.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("aColor").needsUpdate=!0,n.getAttribute("aSize").needsUpdate=!0,n.getAttribute("aAlpha").needsUpdate=!0}spawn(e){const t=this.layers[Math.floor(Math.random()*this.layers.length)],s=this.liquidRadius*.62*Math.sqrt(Math.random()),i=Math.random()*Math.PI*2;e.baseX=Math.cos(i)*s,e.z=Math.sin(i)*s*.5,e.y=t.y0+.01+Math.random()*.08,e.yTop=Math.max(this.topY-.03,e.y+.1),e.size=.016+Math.random()*.026,e.speed=.12+Math.random()*.18+this.stirLevel*.2,e.wobbleAmp=.008+Math.random()*.02,e.wobbleSpeed=3+Math.random()*4,e.color=_e(t.color),e.delay=0}}const hs=new O(.1,.065),Be=g.map(o=>new x({color:o,side:ee,transparent:!0}));class us{group=new j;pieces=[];burst(e,t,s){for(let i=0;i<t;i++){const n=Be[Math.floor(Math.random()*Be.length)],r=new d(hs,n),a=.75+Math.random()*.7;r.scale.set(a,a,a),r.position.set(e.x+(Math.random()-.5)*s,e.y+Math.random()*.6,e.z+.8+Math.random()*.4);const l={mesh:r,velocity:new m((Math.random()-.5)*2.4,1.5+Math.random()*2.5,(Math.random()-.5)*.6),spin:new m(Math.random()*8,Math.random()*8,Math.random()*8),life:2.2+Math.random()*.8};this.pieces.push(l),this.group.add(r)}}update(e){for(let t=this.pieces.length-1;t>=0;t--){const s=this.pieces[t];if(s.life-=e,s.life<=0){this.group.remove(s.mesh),this.pieces.splice(t,1);continue}s.velocity.y-=5.5*e,s.mesh.position.addScaledVector(s.velocity,e),s.mesh.rotation.x+=s.spin.x*e,s.mesh.rotation.y+=s.spin.y*e,s.mesh.rotation.z+=s.spin.z*e}}clear(){for(const e of this.pieces)this.group.remove(e.mesh);this.pieces=[]}}const F=32,L=8,ds=.045;function pe(o,e){const t=new C(o);return t.lerp(new C(16777215),e),t}function ps(){const o=new Uint16Array(F*L*6);let e=0;for(let t=0;t<F;t++)for(let s=0;s<L;s++){const i=t*(L+1)+s,n=i+L+1;o[e++]=i,o[e++]=n,o[e++]=i+1,o[e++]=n,o[e++]=n+1,o[e++]=i+1}return new A(o,1)}class Re{mesh;geometry;pos;constructor(e){this.pos=new Float32Array((F+1)*(L+1)*3),this.geometry=new fe,this.geometry.setAttribute("position",new A(this.pos,3).setUsage(X)),this.geometry.setIndex(ps()),this.geometry.setDrawRange(0,0),this.mesh=new d(this.geometry,e),this.mesh.visible=!1,this.mesh.renderOrder=8,this.mesh.frustumCulled=!1}get positions(){return this.pos}commit(e){this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.setDrawRange(0,e*L*6),this.mesh.visible=e>0}}const W=new m,oe=new m,q=new m,K=new m,fs=new m(0,0,1);class ms{group=new j;body=new Re(new x({color:16777215,transparent:!0,opacity:.95}));foam=new Re(new x({color:16777215,transparent:!0,opacity:.42,blending:G,depthWrite:!1}));curve=new ct(new m,new m,new m);time=0;constructor(){this.group.add(this.body.mesh,this.foam.mesh)}begin(e){this.body.mesh.material.color.copy(pe(g[e%g.length],.16)),this.foam.mesh.material.color.copy(pe(g[e%g.length],.5))}update(e,t,s,i=1/60){if(this.time+=i,s=Math.min(1,Math.max(0,s)),s<=.02||s>=.995){this.body.commit(0),this.foam.commit(0);return}this.curve.v0.copy(e),this.curve.v2.copy(t),this.curve.v1.lerpVectors(e,t,.42);const n=Math.hypot(t.x-e.x,t.y-e.y);this.curve.v1.y+=Math.min(.9,.3+n*.3)*(1.45-.85*s);const r=Math.max(1,Math.floor(F*s));this.rebuildTube(this.body,r,s,1),this.rebuildTube(this.foam,r,s,.5)}tipPoint(e,t){return this.curve.getPoint(Math.min(1,Math.max(0,e)),t)}end(){this.body.commit(0),this.foam.commit(0)}rebuildTube(e,t,s,i){const n=e.positions;let r=0;for(let a=0;a<=t;a++){const l=a/F,c=l/s;this.curve.getPoint(l,W),this.curve.getTangent(l,oe).normalize(),q.crossVectors(oe,fs).normalize(),K.crossVectors(q,oe).normalize();let h=ds*i*(1.06-.42*c);h*=1-.5*me.smoothstep(c,.86,1),h*=1+.085*Math.sin(l*16-this.time*24)+.035*Math.sin(l*33-this.time*41);for(let u=0;u<=L;u++){const p=u/L*Math.PI*2,w=Math.cos(p)*h,v=Math.sin(p)*h;n[r++]=W.x+K.x*w+q.x*v,n[r++]=W.y+K.y*w+q.y*v,n[r++]=W.z+K.z*w+q.z*v}}e.commit(t)}}const ws=48;class gs{group=new j;geo=new ht(.035,8,6);mats=new Map;drops=[];constructor(){for(let e=0;e<ws;e++){const t=new d(this.geo,this.materialFor(0));t.visible=!1,this.group.add(t),this.drops.push({mesh:t,velocity:new m,life:0,maxLife:0,baseScale:1,active:!1})}}materialFor(e){let t=this.mats.get(e);return t||(t=new x({color:pe(g[e%g.length],.2)}),this.mats.set(e,t)),t}spawn(e,t,s,i){const n=this.drops.find(r=>!r.active)??this.drops[0];n.active=!0,n.mesh.visible=!0,n.mesh.material=this.materialFor(t),n.mesh.position.copy(e),n.velocity.set((Math.random()-.5)*s,i*(.6+Math.random()*.7),(Math.random()-.5)*s*.4),n.maxLife=n.life=.3+Math.random()*.22,n.baseScale=.6+Math.random()*.55,n.mesh.scale.setScalar(n.baseScale)}trickle(e,t,s=2){for(let i=0;i<s;i++)this.spawn(e,t,.5,.5)}splash(e,t,s=8){for(let i=0;i<s;i++)this.spawn(e,t,1.5,1.2)}update(e){for(const t of this.drops){if(!t.active)continue;if(t.life-=e,t.life<=0){t.active=!1,t.mesh.visible=!1;continue}t.velocity.y-=7.5*e,t.mesh.position.addScaledVector(t.velocity,e);const s=Math.min(1,t.life/(t.maxLife*.4));t.mesh.scale.setScalar(Math.max(.05,t.baseScale*s))}}clear(){for(const e of this.drops)e.active=!1,e.mesh.visible=!1}}const P=.3,b=2.1,$=.235,Ie=.45,Ge=-b/2+.09,bs=new we(P,P,b,28,1,!0),vs=new ge(P,.032,10,28),ys=new we(P,P*.9,.09,28),xs=new we(1,1,1,24),Ms=new ge(P+.13,.035,10,40),Ss=new ge(P+.13,.09,10,40),ks=new ut($*.96,24),Ts=new O(.22,.075),Es=new O(.035,b-.25),zs=new dt(.86,1,40),Ps=new O(1.15,.5),As=new We(.85,b+.9,.9),y=new pt({color:15004159,metalness:0,roughness:.07,transmission:1,thickness:.1,ior:1.45,attenuationColor:new C(10475263),attenuationDistance:1.4,clearcoat:.7,clearcoatRoughness:.25,specularIntensity:1,envMapIntensity:1.15,side:ee});let je=!0;function re(o){je!==o&&(je=o,o?(y.transmission=1,y.opacity=1,y.transparent=!1,y.depthWrite=!0,y.thickness=.1):(y.transmission=0,y.transparent=!0,y.opacity=.18,y.depthWrite=!1,y.thickness=0),y.needsUpdate=!0)}const Ls=new x({color:6809849,transparent:!0,opacity:.95,blending:G,depthWrite:!1}),Cs=new x({color:2282478,transparent:!0,opacity:.28,blending:G,depthWrite:!1,side:ee}),Ye=new x({color:16777215,transparent:!0,opacity:.13,blending:G,depthWrite:!1});let ae=null;const _s=new x({visible:!1}),$e=new Map,Ne=new Map;function Je(o,e){const t=new C(o);return t.lerp(new C(16777215),e),t}function De(o){let e=$e.get(o);if(!e){const t=g[o%g.length];e=new de({color:t,roughness:.34,metalness:.04,emissive:t,emissiveIntensity:.26,envMapIntensity:.6}),$e.set(o,e)}return e}function qe(o){let e=Ne.get(o);return e||(e=new x({color:Je(g[o%g.length],.42)}),Ne.set(o,e)),e}function Bs(){return new x({color:16777215,transparent:!0,opacity:0,blending:G,depthWrite:!1,side:ee})}const le=6,Rs=5,Is=.5;class Gs{group=new j;ripples=[];cooldown=0;constructor(){for(let e=0;e<Rs;e++){const t=new d(zs,Bs());t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=4,this.group.add(t),this.ripples.push({mesh:t,t:0,active:!1})}}pulse(e,t,s=!1){if(this.cooldown>0&&!s)return;this.cooldown=s?.05:.13;const i=this.ripples.find(n=>!n.active)??this.ripples[0];i.active=!0,i.t=s?-.08:0,i.mesh.visible=!0,i.mesh.material.color.copy(Je(g[e%g.length],.6)),i.mesh.position.y=t+.018}update(e){this.cooldown=Math.max(0,this.cooldown-e);for(const t of this.ripples){if(!t.active)continue;if(t.t+=e,t.t<0){t.mesh.visible=!1;continue}t.mesh.visible=!0;const s=t.t/Is;if(s>=1){t.active=!1,t.mesh.visible=!1;continue}const i=1-(1-s)*(1-s);t.mesh.scale.setScalar($*(.12+i*.92)),t.mesh.material.opacity=.6*(1-s)*(1-s)}}clear(){for(const e of this.ripples)e.active=!1,e.mesh.visible=!1}}class js{group=new j;hit;home=new m;wobble=0;bubbles=new cs($);ripples=new Gs;ring;ringGlow;surface;shine;layerMeshes=[];surfaceColorId=-1;topMesh=null;topBaseScaleY=0;topBaseY=0;liquidTopY=0;wobbleT=Math.random()*Math.PI*2;ringT=Math.random()*Math.PI*2;selected=!1;constructor(){ae||(ae=new x({map:te(),color:132631,transparent:!0,opacity:.55,depthWrite:!1}));const e=new d(Ps,ae);e.position.y=-b/2-.09,e.position.z=-.15,e.renderOrder=-1,e.scale.set(1,.75,1),e.rotation.x=-.35;const t=new d(ys,y);t.position.y=-b/2;const s=new d(bs,y),i=new d(Es,Ye);i.position.set(-P*.55,0,P*.82),i.renderOrder=6;const n=new d(vs,y);n.rotation.x=Math.PI/2,n.position.y=b/2,this.ring=new d(Ms,Ls.clone()),this.ring.rotation.x=Math.PI/2,this.ring.position.y=-b/2-.05,this.ring.renderOrder=7,this.ring.visible=!1,this.ringGlow=new d(Ss,Cs),this.ringGlow.rotation.x=Math.PI/2,this.ringGlow.position.y=-b/2-.05,this.ringGlow.renderOrder=7,this.ringGlow.visible=!1,this.surface=new d(ks,qe(0)),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.surface.visible=!1,this.shine=new d(Ts,Ye),this.shine.rotation.x=-Math.PI/2,this.shine.position.x=-$*.4,this.shine.renderOrder=4,this.shine.visible=!1,this.hit=new d(As,_s);for(let r=0;r<le;r++){const a=new d(xs,De(0));a.visible=!1,a.renderOrder=1,this.layerMeshes.push(a),this.group.add(a)}this.group.add(e,t,s,i,n,this.ring,this.ringGlow,this.surface,this.shine,this.bubbles.points,this.ripples.group,this.hit)}setStack(e){let t=Ge,s=0;this.topMesh=null;for(const i of e){if(i.count<=.02||s>=le)continue;const n=this.layerMeshes[s++],r=i.count*Ie;n.visible=!0,n.material=De(i.color),n.scale.set($,r,$),n.position.y=t+r/2,t+=r,this.topMesh=n,this.topBaseScaleY=r,this.topBaseY=n.position.y,this.surfaceColorId=i.color}for(let i=s;i<le;i++)this.layerMeshes[i].visible=!1;this.liquidTopY=this.topMesh?t:0,this.bubbles.setStack(e,Ie,Ge),this.topMesh?(this.surface.material=qe(this.surfaceColorId),this.surface.visible=!0,this.shine.visible=!0):(this.surface.visible=!1,this.shine.visible=!1)}get surfaceLocalY(){return this.liquidTopY}pourImpact(e){this.liquidTopY>0&&this.ripples.pulse(e,this.liquidTopY,!0),this.bubbles.burst(7)}pourFlow(e){this.liquidTopY>0&&this.ripples.pulse(e,this.liquidTopY),this.bubbles.stir()}setSelected(e){this.selected=e,this.ring.visible=e,this.ringGlow.visible=e}tick(e){if(this.wobbleT+=e,this.wobble=Math.max(0,this.wobble-e*1.6),this.bubbles.update(e),this.ripples.update(e),this.selected){this.ringT+=e;const r=1+.045*Math.sin(this.ringT*5);this.ring.scale.setScalar(r),this.ringGlow.scale.setScalar(1+.08*Math.sin(this.ringT*5-.6)),this.ring.material.opacity=.85+.15*Math.sin(this.ringT*5)}if(!this.topMesh)return;const s=1+(.02+this.wobble*.1)*Math.sin(this.wobbleT*(3+this.wobble*9)),i=this.topBaseScaleY*s;this.topMesh.scale.y=i,this.topMesh.position.y=this.topBaseY+(i-this.topBaseScaleY)/2;const n=this.topMesh.position.y+i/2+.012;this.surface.position.y=n,this.shine.position.y=n+.004}}function U(o){o.audio.playTone(660,.05,.15)}function ce(o){o.audio.playTone(880,.06,.18)}function Ys(o){o.audio.playTone(180,.12,.2)}function $s(o){o.audio.playTone(520,.07,.16),window.setTimeout(()=>o.audio.playTone(460,.07,.14),70),window.setTimeout(()=>o.audio.playTone(400,.08,.12),150)}function Ns(o){o.audio.playTone(240,.09,.25)}function Ds(o){[523,659,784,1047].forEach((t,s)=>{window.setTimeout(()=>o.audio.playTone(t,.14,.22),s*110)})}const Ue=.85,he=1.35,qs=.3,Us=.55,Xs=1.6,Xe=new m;class Fs{constructor(e,t){this.save=e,this.session=t,this.three.background=be();const s=new Se(16777215,2);s.position.set(2,4,6);const i=new Se(6809849,.7);i.position.set(-4,2,-5),this.three.add(s,i,new ft(5928152,725027,.55),new mt(16777215,.32),this.aurora.group,this.tubesGroup,this.confetti.group,this.stream.group,this.droplets.group)}three=new Z;tubesGroup=new j;confetti=new us;aurora=new ve;stream=new ms;droplets=new gs;raycaster=new wt;level=1;data;initial=[];tubes=[];views=[];history=[];selected=-1;extraTubes=0;anim=null;pendingTap=null;won=!1;winTimer=0;finished=!1;needAd=!1;movesEl=null;undoBtn=null;addBtn=null;cleanups=[];qualityStop=null;qaProbe=new URLSearchParams(location.search).has("ws_probe");qaFreezePour=(()=>{const e=new URLSearchParams(location.search).get("ws_freezepour");if(e===null)return null;const t=Number(e);return Number.isFinite(t)&&t>0&&t<1?t:null})();enter(e){if(this.level=this.session.level,this.data=os(this.level),this.initial=ne(this.data.tubes),e.analytics.track("level_start",{level:this.level,minMoves:this.data.minMoves}),ye(this.three,e.renderer.webgl),this.startQualityWatchdog(e),this.buildHud(e),this.resetBoard(),this.fitCamera(e),this.cleanups.push(e.input.on("tap",t=>this.onTap(e,t.x,t.y))),this.qaProbe&&(window.__wsDebug={state:()=>({tubes:ne(this.tubes),selected:this.selected,anim:this.anim!==null,won:this.won,moves:this.history.length}),tubeScreen:t=>{const s=this.views[t];if(!s)return null;const i=e.renderer.domElement.getBoundingClientRect(),n=s.home.clone().project(e.renderer.camera);return{x:i.left+(n.x*.5+.5)*i.width,y:i.top+(-n.y*.5+.5)*i.height}}}),new URLSearchParams(location.search).has("ws_streamtest")&&this.views.length>=2){const t=this.views[0],s=this.views[this.views.length-1];this.stream.begin(0),this.stream.update(new m(t.home.x,t.home.y+b/2,0),new m(s.home.x,s.home.y+b/2,0),.85)}}exit(e){e.ui.hide("play-hud");for(const t of this.cleanups)t();this.cleanups=[],this.qualityStop?.(),this.qualityStop=null,this.confetti.clear(),this.stream.end(),this.droplets.clear(),this.pendingTap=null,this.qaProbe&&delete window.__wsDebug;for(const t of this.views)this.tubesGroup.remove(t.group);this.views=[],this.movesEl=null,this.undoBtn=null,this.addBtn=null}update(e,t){this.fitCamera(e),rs(e.renderer.domElement.height,e.renderer.camera.fov),this.confetti.update(t),this.aurora.update(t),this.droplets.update(t);for(let s=0;s<this.views.length;s++){const i=this.views[s];if(i.tick(t),this.anim&&this.anim.from===s)continue;const n=i.home.y+(s===this.selected?qs:0),r=Math.min(1,12*t);i.group.position.x+=(i.home.x-i.group.position.x)*r,i.group.position.y+=(n-i.group.position.y)*r,i.group.position.z+=(i.home.z-i.group.position.z)*r,i.group.rotation.z+=(0-i.group.rotation.z)*r}if(this.anim&&this.updatePour(e,t),this.won&&!this.finished&&(this.winTimer-=t,this.winTimer<=0)){this.finished=!0;const s=()=>e.setScene("gameover");this.needAd?e.ads.showInterstitial().then(s,s):s()}}resetBoard(){this.tubes=ne(this.initial),this.history=[],this.selected=-1,this.extraTubes=0,this.anim=null,this.pendingTap=null,this.won=!1,this.finished=!1,this.winTimer=0,this.confetti.clear();for(const e of this.views)this.tubesGroup.remove(e.group);this.views=[];for(const e of this.tubes)this.createView(e);this.layout();for(const e of this.views)e.group.position.copy(e.home);this.refreshHud()}createView(e){const t=new js;return t.setStack(R(e)),this.tubesGroup.add(t.group),this.views.push(t),t}layout(){const e=this.views.length,t=e>6,s=t?Math.ceil(e/2):e;(t?[this.views.slice(0,s),this.views.slice(s)]:[this.views]).forEach((n,r)=>{const a=t?r===0?he:-he:0;n.forEach((l,c)=>{l.home.set((c-(n.length-1)/2)*Ue,a,0)})})}fitCamera(e){const t=e.renderer.camera,s=this.views.length,i=s>6,r=((i?Math.ceil(s/2):s)-1)*Ue/2+.9,a=(i?he:0)+b/2+1.5,l=Math.tan(me.degToRad(t.fov/2)),c=Math.max(a/l,r/(l*t.aspect),5);t.position.set(0,0,c),t.lookAt(0,-.13,0)}onTap(e,t,s){if(this.won)return;if(this.anim){this.pendingTap={x:t,y:s};return}const i=this.pickTube(e,t,s);if(i===-1){this.selected!==-1&&(this.deselect(),U(e));return}if(this.selected===-1){this.tubes[i].length>0?(this.select(i),ce(e)):U(e);return}if(i===this.selected){this.deselect(),U(e);return}Wt(this.tubes,this.selected,i)?this.startPour(e,this.selected,i):this.tubes[i].length>0?(this.select(i),ce(e)):Ys(e)}startQualityWatchdog(e){const t=new URLSearchParams(location.search),s=(()=>{try{return localStorage.getItem("ws.lowfx")==="1"}catch{return!1}})();if(t.has("ws_lowfx")||s){re(!1);return}if(re(!0),t.has("ws_probe")||t.has("ws_hiqual"))return;let i=0,n=0,r=performance.now(),a=0;const l=c=>{a=requestAnimationFrame(l);const h=c-r;if(r=c,h>250||(i++,i<=30))return;n+=h;const u=i-30;if(u<90)return;const p=n/u;if(p>1e3/50){re(!1);try{localStorage.setItem("ws.lowfx","1")}catch{}e.analytics.track("fx_degraded",{level:this.level,avgFrameMs:Math.round(p*10)/10})}cancelAnimationFrame(a),this.qualityStop=null};a=requestAnimationFrame(l),this.qualityStop=()=>cancelAnimationFrame(a)}pickTube(e,t,s){const i=e.renderer.domElement.getBoundingClientRect(),n=new gt((t-i.left)/i.width*2-1,-((s-i.top)/i.height)*2+1);this.raycaster.setFromCamera(n,e.renderer.camera);const a=this.raycaster.intersectObjects(this.views.map(l=>l.hit),!1)[0]?.object;return a?this.views.findIndex(l=>l.hit===a):-1}select(e){this.deselect(),this.selected=e,this.views[e].setSelected(!0)}deselect(){this.selected!==-1&&this.views[this.selected].setSelected(!1),this.selected=-1}startPour(e,t,s){const i=R(this.tubes[t]),n=R(this.tubes[s]),r=i[i.length-1].color,a=Qt(this.tubes,t,s);this.history.push(a),this.deselect(),this.anim={from:t,to:s,count:a.count,color:r,fromRuns:i,toRuns:n,t:0,duration:.34+a.count*.085},this.stream.begin(r),$s(e),this.refreshHud()}updatePour(e,t){const s=this.anim;if(!s)return;s.t+=t;const n=window.__wsFreezePour??this.qaFreezePour??Math.min(1,s.t/s.duration),r=n*n*(3-2*n),a=s.count*r,l=s.fromRuns.map(B=>({...B}));l[l.length-1].count-=a;const c=s.toRuns.map(B=>({...B})),h=c[c.length-1];h&&h.color===s.color?h.count+=a:a>.001&&c.push({color:s.color,count:a});const u=this.views[s.from],p=this.views[s.to];u.setStack(l),p.setStack(c);const w=Math.sin(n*Math.PI),v=p.home.x-u.home.x,S=Math.sign(v)||1;u.group.position.set(u.home.x+v*.15*w,u.home.y+Us*w,u.home.z+.5*w),u.group.rotation.z=-S*.5*w;const k=u.group.rotation.z,N=new m(u.group.position.x-Math.sin(k)*(b/2),u.group.position.y+Math.cos(k)*(b/2),u.group.position.z),et=new m(p.group.position.x,p.group.position.y+b/2+.02,p.group.position.z),D=Math.min(1,Math.max(0,(n-.1)/.78));if(this.stream.update(N,et,D,t),D>.05&&D<.985&&(p.pourFlow(s.color),u.bubbles.stir(.5),Math.random()<t*26&&(this.stream.tipPoint(D,Xe),this.droplets.trickle(Xe,s.color,1))),this.qaProbe&&(window.__wsPour={p:n,reveal:D,streamVisible:this.stream.group.children[0]?.visible??!1}),n>=1){u.setStack(R(this.tubes[s.from])),p.setStack(R(this.tubes[s.to])),p.wobble=1,p.pourImpact(s.color),u.group.position.copy(u.home),u.group.rotation.z=0,this.stream.end(),this.droplets.splash(new m(p.home.x,p.home.y+b/2,0),s.color),this.anim=null,Ns(e);const B=this.pendingTap;this.pendingTap=null,J(this.tubes)?this.onWin(e):B&&this.onTap(e,B.x,B.y)}}undo(e){if(this.won||this.anim||this.history.length===0)return;const t=this.history.pop();t&&(Jt(this.tubes,t),this.views[t.from].setStack(R(this.tubes[t.from])),this.views[t.to].setStack(R(this.tubes[t.to])),this.deselect(),U(e),this.refreshHud())}restart(e){this.won||(e.analytics.track("level_restart",{level:this.level,moves:this.history.length}),this.resetBoard(),U(e))}addTube(e){if(this.won||this.anim||this.extraTubes>=Ee)return;this.extraTubes++,this.tubes.push([]);const t=this.createView([]);this.layout(),t.group.position.set(t.home.x,t.home.y+2.5,t.home.z),e.analytics.track("extra_tube",{level:this.level,extra:this.extraTubes}),ce(e),this.refreshHud()}onWin(e){this.won=!0,this.winTimer=Xs,this.deselect(),Ds(e),this.confetti.burst(new m(-1.2,.4,0),60,1.6),this.confetti.burst(new m(1.2,.4,0),60,1.6);const t=this.history.length,s=ns(t,this.data.minMoves),i=String(this.level),n={...this.save.get("levels")},r=n[i];n[i]={stars:Math.max(r?.stars??0,s),bestMoves:Math.min(r?.bestMoves??t,t)};const a=this.save.get("completions")+1;this.save.update({levels:n,completions:a,currentLevel:Math.max(this.save.get("currentLevel"),this.level+1)}),this.needAd=a%Ut===0&&!this.save.get("noAds"),e.analytics.track("level_complete",{level:this.level,moves:t,stars:s,minMoves:this.data.minMoves,extraTubes:this.extraTubes})}buildHud(e){const t=e.ui.screen("play-hud","jeez-ui-hud"),s=e.ui.iconButton("",()=>e.setScene("menu"));s.setAttribute("aria-label","Back to menu"),T(s,E("home",22));const i=document.createElement("div");i.className="ws-topbar",this.movesEl=e.ui.text("","ws-chip"),i.append(s,e.ui.text(`Level ${this.level}`,"ws-chip"),this.movesEl);const n=document.createElement("div");n.className="ws-bottombar",this.undoBtn=e.ui.button("",()=>this.undo(e),"ws-round"),this.undoBtn.setAttribute("aria-label","Undo last move"),T(this.undoBtn,E("undo",26));const r=e.ui.button("",()=>this.restart(e),"ws-round");r.setAttribute("aria-label","Restart level"),T(r,E("restart",26)),this.addBtn=e.ui.button("",()=>this.addTube(e),"ws-round"),this.addBtn.setAttribute("aria-label","Add an empty tube"),T(this.addBtn,E("add-tube",26)),n.append(this.undoBtn,r,this.addBtn),t.replaceChildren(i,n),e.ui.show("play-hud")}refreshHud(){this.movesEl&&(this.movesEl.innerHTML=`Moves <b>${this.history.length}</b> · Min ${this.data.minMoves}`),this.undoBtn&&(this.undoBtn.disabled=this.history.length===0),this.addBtn&&(this.addBtn.disabled=this.extraTubes>=Ee)}}const Fe="water-sort-style",Os=`
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
`;function Vs(){if(document.getElementById(Fe))return;const o=document.createElement("style");o.id=Fe,o.textContent=Os,document.head.appendChild(o)}const Ze=document.getElementById("app");if(!Ze)throw new Error("Missing #app container in index.html");const V=new Yt({key:Nt,version:Dt,defaults:{currentLevel:1,levels:{},completions:0,muted:!1,noAds:!1}}),H={level:V.get("currentLevel")},_=new jt({container:Ze,logicHz:qt});_.audio.setMuted(V.get("muted"));Vs();_.registerScene("menu",new Ht(V,H));_.registerScene("play",new Fs(V,H));_.registerScene("gameover",new Vt(V,H));_.analytics.initialize();_.ads.initialize();_.iap.initialize();const Me=new URLSearchParams(location.search),ue=Number(Me.get("ws_level"));Number.isFinite(ue)&&ue>0&&(H.level=Math.floor(ue));const Q=Me.get("ws_scene");Q==="gameover"&&!Me.has("ws_level")&&(H.level=1);_.start(Q==="play"||Q==="gameover"?Q:"menu");requestAnimationFrame(()=>{requestAnimationFrame(()=>document.getElementById("boot")?.remove())});
