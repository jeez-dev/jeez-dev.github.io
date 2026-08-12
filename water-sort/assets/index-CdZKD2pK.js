import{W as Be,P as Ce,C as Me,S as ke,a as C,B as Se,b as ne,c as _e,d as je,A as _,G as L,M as y,e as f,f as j,g as F,D as W,V as g,Q as Ge,T as Ie,h as Re,i as K,j as Q,k as $e,l as Ne,m as Ye,n as Oe,o as oe,H as De,p as Xe,R as Ve,q as Ue,r as He}from"./three-DlVV29cs.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const qe=(()=>{try{return typeof location<"u"&&new URLSearchParams(location.search).has("debug")?!0:typeof localStorage<"u"&&localStorage.getItem("jeez.debug")==="1"}catch{return!1}})();function m(...n){qe&&console.debug(...n)}class Fe{}class We extends Fe{async initialize(){m("[ads] noop provider initialized")}async showInterstitial(){return m("[ads] interstitial (noop)"),!0}async showRewarded(){return m("[ads] rewarded (noop) — granting reward"),!0}async showBanner(e="bottom"){m(`[ads] show banner at ${e} (noop)`)}async hideBanner(){m("[ads] hide banner (noop)")}}class Ke{async initialize(){m("[analytics] console provider initialized")}track(e,t){m(`[analytics] ${e}`,t??{})}identify(e,t){m(`[analytics] identify ${e}`,t??{})}isFeatureEnabled(e){return!1}reset(){m("[analytics] reset")}}class Qe{graph=null;buffers=new Map;currentBgm=null;volumes={master:1,bgm:.6,sfx:1};_muted=!1;get muted(){return this._muted}unlock(){const{ctx:e}=this.ensure();e.state==="suspended"&&e.resume()}async load(e,t){const s=await fetch(t);if(!s.ok)throw new Error(`Failed to load audio "${e}" from ${t}`);const i=await s.arrayBuffer(),o=await this.ensure().ctx.decodeAudioData(i);this.buffers.set(e,o)}playSfx(e,t={}){const s=this.ensure(),i=this.buffers.get(e);if(!i){console.warn(`[audio] SFX "${e}" not loaded`);return}const o=s.ctx.createBufferSource();if(o.buffer=i,o.playbackRate.value=t.playbackRate??1,t.volume!==void 0){const r=s.ctx.createGain();r.gain.value=t.volume,o.connect(r).connect(s.sfx)}else o.connect(s.sfx);o.start()}playTone(e=880,t=.08,s=.2){const i=this.ensure();if(i.ctx.state!=="running")return;const o=i.ctx.currentTime,r=i.ctx.createOscillator(),a=i.ctx.createGain();r.type="sine",r.frequency.value=e,a.gain.setValueAtTime(s,o),a.gain.exponentialRampToValueAtTime(.001,o+t),r.connect(a).connect(i.sfx),r.start(o),r.stop(o+t)}playBgm(e,t={}){if(this.currentBgm?.name===e)return;this.stopBgm();const s=this.ensure(),i=this.buffers.get(e);if(!i){console.warn(`[audio] BGM "${e}" not loaded`);return}const o=s.ctx.createBufferSource();o.buffer=i,o.loop=t.loop??!0;const r=s.ctx.createGain(),a=t.fadeInSec??.5,c=s.ctx.currentTime;r.gain.setValueAtTime(.001,c),r.gain.exponentialRampToValueAtTime(1,c+a),o.connect(r).connect(s.bgm),o.start(),this.currentBgm={source:o,gain:r,name:e}}stopBgm(e=.3){const t=this.currentBgm;if(!t||!this.graph)return;this.currentBgm=null;const s=this.graph.ctx.currentTime;t.gain.gain.setValueAtTime(t.gain.gain.value,s),t.gain.gain.exponentialRampToValueAtTime(.001,s+e),t.source.stop(s+e)}setMuted(e){this._muted=e,this.applyVolumes()}toggleMuted(){return this.setMuted(!this._muted),this._muted}setVolume(e,t){this.volumes[e]=Math.min(1,Math.max(0,t)),this.applyVolumes()}getVolume(e){return this.volumes[e]}async suspend(){this.graph&&this.graph.ctx.state==="running"&&await this.graph.ctx.suspend()}async resume(){this.graph&&this.graph.ctx.state==="suspended"&&await this.graph.ctx.resume()}ensure(){if(!this.graph){const e=new AudioContext,t=e.createGain();t.connect(e.destination);const s=e.createGain();s.connect(t);const i=e.createGain();i.connect(t),this.graph={ctx:e,master:t,bgm:s,sfx:i},this.applyVolumes()}return this.graph}applyVolumes(){this.graph&&(this.graph.master.gain.value=this._muted?0:this.volumes.master,this.graph.bgm.gain.value=this.volumes.bgm,this.graph.sfx.gain.value=this.volumes.sfx)}}class Je{}class Ze extends Je{owned=new Set;async initialize(){m("[iap] noop provider initialized")}async getProducts(e){return e.map(t=>({id:t,title:t,description:`Placeholder product "${t}"`,price:"$0.00"}))}async purchase(e){return m(`[iap] simulated purchase of ${e}`),this.owned.add(e),{productId:e,success:!0}}async restorePurchases(){return[...this.owned]}isOwned(e){return this.owned.has(e)}}const et=250,tt=12,st=8,it=40,nt=400;class ot{listeners={};pointers=new Map;keys=new Set;target;startX=0;startY=0;startTime=0;lastX=0;lastY=0;dragging=!1;pinching=!1;pinchStartDist=1;pinchScale=1;constructor(e){this.target=e,e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}on(e,t){return this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),()=>this.listeners[e]?.delete(t)}off(e,t){this.listeners[e]?.delete(t)}isKeyDown(e){return this.keys.has(e)}dispose(){this.target.removeEventListener("pointerdown",this.onPointerDown),this.target.removeEventListener("pointermove",this.onPointerMove),this.target.removeEventListener("pointerup",this.onPointerUp),this.target.removeEventListener("pointercancel",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}emit(e,t){const s=this.listeners[e];if(s)for(const i of s)i(t)}pinchDistance(){const[e,t]=[...this.pointers.values()];return!e||!t?1:Math.hypot(e.x-t.x,e.y-t.y)||1}pinchCenter(){const[e,t]=[...this.pointers.values()];return!e||!t?{x:0,y:0}:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}onPointerDown=e=>{this.target.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1?(this.startX=this.lastX=e.clientX,this.startY=this.lastY=e.clientY,this.startTime=performance.now(),this.dragging=!1):this.pointers.size===2&&(this.dragging&&(this.emit("dragend",this.dragEvent(e.clientX,e.clientY,0,0)),this.dragging=!1),this.pinching=!0,this.pinchStartDist=this.pinchDistance(),this.pinchScale=1)};onPointerMove=e=>{const t=this.pointers.get(e.pointerId);if(!t)return;if(t.x=e.clientX,t.y=e.clientY,this.pinching&&this.pointers.size>=2){const o=this.pinchDistance()/this.pinchStartDist,r=this.pinchCenter();this.emit("pinch",{scale:o,deltaScale:o-this.pinchScale,centerX:r.x,centerY:r.y}),this.pinchScale=o;return}if(this.pointers.size!==1)return;const s=e.clientX-this.lastX,i=e.clientY-this.lastY;this.dragging||Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>st&&(this.dragging=!0,this.emit("dragstart",this.dragEvent(e.clientX,e.clientY,0,0))),this.dragging&&this.emit("drag",this.dragEvent(e.clientX,e.clientY,s,i)),this.lastX=e.clientX,this.lastY=e.clientY};onPointerUp=e=>{if(!this.pointers.delete(e.pointerId))return;if(this.pinching&&this.pointers.size<2){this.pinching=!1;const r=this.pinchCenter();this.emit("pinchend",{scale:this.pinchScale,deltaScale:0,centerX:r.x,centerY:r.y});const a=[...this.pointers.values()][0];a&&(this.startX=this.lastX=a.x,this.startY=this.lastY=a.y,this.startTime=performance.now(),this.dragging=!1);return}if(this.pointers.size>0)return;const t=performance.now()-this.startTime,s=e.clientX-this.startX,i=e.clientY-this.startY,o=Math.hypot(s,i);if(this.dragging){if(this.dragging=!1,this.emit("dragend",this.dragEvent(e.clientX,e.clientY,0,0)),o>=it&&t<=nt){const r=Math.abs(s)>Math.abs(i)?s>0?"right":"left":i>0?"down":"up";this.emit("swipe",{direction:r,dx:s,dy:i,durationMs:t})}}else t<=et&&o<=tt&&this.emit("tap",{x:e.clientX,y:e.clientY})};dragEvent(e,t,s,i){return{x:e,y:t,dx:s,dy:i,totalDx:e-this.startX,totalDy:t-this.startY}}onKeyDown=e=>{this.keys.add(e.code),this.emit("keydown",e)};onKeyUp=e=>{this.keys.delete(e.code),this.emit("keyup",e)}}const rt=2;class at{webgl;camera;container;observer;constructor(e){this.container=e,getComputedStyle(e).position==="static"&&(e.style.position="relative"),this.webgl=new Be({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.webgl.setPixelRatio(Math.min(window.devicePixelRatio,rt)),this.webgl.shadowMap.enabled=!1,this.webgl.domElement.style.display="block",e.appendChild(this.webgl.domElement),this.camera=new Ce(60,1,.1,100),this.camera.position.z=5,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize()}get domElement(){return this.webgl.domElement}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.webgl.setSize(e,t)}render(e){this.webgl.render(e,this.camera)}dispose(){this.observer.disconnect(),this.webgl.dispose(),this.webgl.domElement.remove()}}class ct{states=new Map;changeListeners=new Set;_current=null;get current(){return this._current}is(e){return this._current===e}register(e,t={}){this.states.set(e,t)}transition(e){const t=this.states.get(e);if(!t)throw new Error(`Unknown state "${e}" — did you register() it?`);if(this._current===e)return;const s=this._current;s!==null&&this.states.get(s)?.onExit?.(e),this._current=e,t.onEnter?.(s);for(const i of this.changeListeners)i(e,s)}onChange(e){return this.changeListeners.add(e),()=>this.changeListeners.delete(e)}}const re="jeez-ui-style",lt=`
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
`;class ht{root;screens=new Map;constructor(e){if(!document.getElementById(re)){const t=document.createElement("style");t.id=re,t.textContent=lt,document.head.appendChild(t)}this.root=document.createElement("div"),this.root.className="jeez-ui-root",e.appendChild(this.root)}screen(e,t=""){let s=this.screens.get(e);return s||(s=document.createElement("div"),s.hidden=!0,this.root.appendChild(s),this.screens.set(e,s)),s.className=`jeez-ui-screen${t?` ${t}`:""}`,s}show(e,t={}){if(t.exclusive??!0)for(const[i,o]of this.screens)i!==e&&(o.hidden=!0);const s=this.screens.get(e);s&&(s.hidden=!1)}hide(e){const t=this.screens.get(e);t&&(t.hidden=!0)}hideAll(){for(const e of this.screens.values())e.hidden=!0}isVisible(e){const t=this.screens.get(e);return!!t&&!t.hidden}button(e,t,s=""){const i=document.createElement("button");return i.type="button",i.className=`jeez-ui-button${s?` ${s}`:""}`,i.textContent=e,i.addEventListener("click",t),i}iconButton(e,t){return this.button(e,t,"jeez-ui-icon-button")}title(e){const t=document.createElement("h1");return t.className="jeez-ui-title",t.textContent=e,t}text(e,t="jeez-ui-text"){const s=document.createElement("p");return s.className=t,s.textContent=e,s}}const ut=250;class dt{renderer;input;audio;ui;states=new ct;ads;analytics;iap;scenes=new Map;activeScene=null;stepMs;accumulator=0;lastTime=0;rafId=0;running=!1;manuallyPaused=!1;autoPaused=!1;pauseListeners=new Set;constructor(e){this.stepMs=1e3/(e.logicHz??60),this.renderer=new at(e.container),this.input=new ot(this.renderer.domElement),this.audio=new Qe,this.ui=new ht(e.container),this.ads=e.ads??new We,this.analytics=e.analytics??new Ke,this.iap=e.iap??new Ze;const t=()=>this.audio.unlock();window.addEventListener("pointerdown",t,{once:!0}),window.addEventListener("keydown",t,{once:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?this.paused||(this.autoPaused=!0,this.applyPause(!0)):this.autoPaused&&(this.autoPaused=!1,this.manuallyPaused||this.applyPause(!1))})}registerScene(e,t){this.scenes.set(e,t),this.states.register(e,{onEnter:()=>this.activateScene(e)})}setScene(e){this.states.transition(e)}get scene(){return this.activeScene}start(e){this.running||(this.running=!0,this.setScene(e),this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}get paused(){return this.manuallyPaused||this.autoPaused}pause(){this.manuallyPaused||(this.manuallyPaused=!0,this.autoPaused||this.applyPause(!0))}resume(){this.manuallyPaused&&(this.manuallyPaused=!1,this.autoPaused||this.applyPause(!1))}togglePause(){this.manuallyPaused?this.resume():this.pause()}onPauseChange(e){return this.pauseListeners.add(e),()=>this.pauseListeners.delete(e)}applyPause(e){e?this.audio.suspend():(this.lastTime=performance.now(),this.accumulator=0,this.audio.resume());for(const t of this.pauseListeners)t(e)}activateScene(e){const t=this.scenes.get(e);if(!t)throw new Error(`Unknown scene "${e}" — did you registerScene() it?`);this.activeScene?.exit(this),this.activeScene=t,this.accumulator=0,t.enter(this)}frame=e=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);const t=Math.min(e-this.lastTime,ut);this.lastTime=e;const s=this.activeScene;if(s){if(!this.paused)for(this.accumulator+=t;this.accumulator>=this.stepMs;)s.update(this,this.stepMs/1e3),this.accumulator-=this.stepMs;s.render?.(this,this.accumulator/this.stepMs),this.renderer.render(s.three)}}}class pt{constructor(e){this.options=e,this.cache=this.read()}cache;get(e){return this.cache[e]}set(e,t){this.cache[e]=t,this.persist()}update(e){Object.assign(this.cache,e),this.persist()}get all(){return this.cache}clear(){this.cache={...this.options.defaults};try{localStorage.removeItem(this.options.key)}catch{}}async syncToCloud(){m("[storage] cloud sync not implemented (placeholder)")}read(){try{const e=localStorage.getItem(this.options.key);if(!e)return{...this.options.defaults};const t=JSON.parse(e);let s=t.data??{};const i=t.version??1;for(let o=i+1;o<=this.options.version;o++){const r=this.options.migrations?.[o];r&&(s=r(s))}return{...this.options.defaults,...s}}catch(e){return console.warn("[storage] failed to read save, using defaults",e),{...this.options.defaults}}}persist(){try{const e={version:this.options.version,data:this.cache};localStorage.setItem(this.options.key,JSON.stringify(e))}catch(e){console.warn("[storage] failed to persist save",e)}}}const ft="water-sort",ae="Water Sort",gt=`${ft}.save`,mt=1,wt=60,b=[16729943,3621626,3069299,16753922,10837738,16737096,16739201,2003199,8121759,13459763,53971,16370212,15856374,5726319],ce=2,bt=3;function J(n=128){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d");if(t){const i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n)}const s=new Me(e);return s.colorSpace=ke,s}function Z(){const t=document.createElement("canvas");t.width=32,t.height=256;const s=t.getContext("2d");if(s){const o=s.createLinearGradient(0,0,0,256);o.addColorStop(0,"#0b1338"),o.addColorStop(.45,"#0a1130"),o.addColorStop(.78,"#0c1434"),o.addColorStop(1,"#10283f"),s.fillStyle=o,s.fillRect(0,0,32,256);const r=s.createRadialGradient(32/2,256*.92,2,32/2,256*.92,256*.55);r.addColorStop(0,"rgba(45,180,210,0.22)"),r.addColorStop(1,"rgba(45,180,210,0)"),s.fillStyle=r,s.fillRect(0,0,32,256)}const i=new Me(t);return i.colorSpace=ke,i}function Ee(n,e,t=5.5){const s=new Float32Array(n*3),i=new Float32Array(n*3),o=[],r=new C;for(let l=0;l<n;l++)s[l*3]=(Math.random()-.5)*11,s[l*3+1]=(Math.random()-.5)*2*t,s[l*3+2]=-2.5-Math.random()*2,r.setHex(e[l%e.length]),i[l*3]=r.r,i[l*3+1]=r.g,i[l*3+2]=r.b,o.push(.1+Math.random()*.22);const a=new Se;return a.setAttribute("position",new ne(s,3)),a.setAttribute("color",new ne(i,3)),{points:new _e(a,new je({size:.55,map:J(),vertexColors:!0,transparent:!0,opacity:.35,depthWrite:!1,blending:_})),update(l){for(let h=0;h<n;h++){let u=s[h*3+1]+o[h]*l;u>t&&(u=-t),s[h*3+1]=u}a.getAttribute("position").needsUpdate=!0}}}class ee{group=new L;glows=[];t=0;constructor(){const e=J(256),t=[[2282478,-2.6,-2.6,7.5,.14],[10980346,2.8,-3.1,6.5,.11],[16739201,3.2,2.9,5.5,.06],[2282478,-3.4,3.2,5,.07]];for(const[s,i,o,r,a]of t){const c=new y({map:e,color:s,transparent:!0,opacity:a,depthWrite:!1,blending:_}),l=new f(new j(1,1),c);l.position.set(i,o,-3.6),l.scale.setScalar(r),this.group.add(l),this.glows.push({mesh:l,baseX:i,baseY:o,speed:.12+Math.random()*.1,phase:Math.random()*Math.PI*2})}}update(e){this.t+=e;for(const t of this.glows)t.mesh.position.x=t.baseX+Math.sin(this.t*t.speed+t.phase)*.5,t.mesh.position.y=t.baseY+Math.cos(this.t*t.speed*.8+t.phase)*.35}}const d='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"',vt={home:{body:`<path ${d} d="M4 11.3 12 4l8 7.3"/><path ${d} d="M6.4 9.4V20h11.2V9.4"/>`},undo:{body:`<path ${d} d="M8.5 5.5 4 10l4.5 4.5"/><path ${d} d="M4 10h10.5a5.5 5.5 0 0 1 0 11H7"/>`},restart:{body:`<path ${d} d="M20.4 12a8.4 8.4 0 1 1-2.46-5.94"/><path ${d} d="M20.6 2.8v4.6h-4.6"/>`},plus:{body:`<path ${d} d="M12 5v14M5 12h14"/>`},"sound-on":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${d} d="M15 9.5a3.6 3.6 0 0 1 0 5"/><path ${d} d="M17.5 7.2a7.2 7.2 0 0 1 0 9.6"/>`},"sound-off":{body:`<path fill="currentColor" d="M4 10v4h3.5L12 19V5L7.5 10H4z"/><path ${d} d="M15.5 9.5l5 5"/><path ${d} d="M20.5 9.5l-5 5"/>`},"star-fill":{body:'<path fill="currentColor" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>'},"star-off":{body:`<path ${d} stroke-width="1.7" d="M12 3.4l2.56 5.3 5.84.78-4.28 4.07 1.06 5.79L12 16.88 6.82 19.7l1.06-5.79L3.6 9.84l5.84-.78L12 3.4z"/>`},lock:{body:`<rect ${d} x="6.5" y="10.5" width="11" height="9.5" rx="2.2"/><path ${d} d="M9 10.5V8a3 3 0 0 1 6 0v2.5"/>`},check:{body:`<path ${d} stroke-width="2.2" d="M5 12.5l4.5 4.5L19 7.5"/>`},play:{body:'<path fill="currentColor" d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l9.7-6.2c.6-.4.6-1.4 0-1.8L10.1 4.9c-.7-.4-1.6.1-1.6.9z"/>'},grid:{body:`<rect ${d} x="4" y="4" width="7" height="7" rx="2"/><rect ${d} x="13" y="4" width="7" height="7" rx="2"/><rect ${d} x="4" y="13" width="7" height="7" rx="2"/><rect ${d} x="13" y="13" width="7" height="7" rx="2"/>`},back:{body:`<path ${d} d="M14.5 5.5 8 12l6.5 6.5"/>`},"add-tube":{body:`<path ${d} d="M7.5 3.5h9"/><path ${d} d="M9 3.5v6a3 3 0 0 1-1.5 2.6V18a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5.9A3 3 0 0 1 15 9.5v-6"/><path fill="currentColor" d="M12 11.6c1.2 1.4 2.1 2.6 2.1 3.7a2.1 2.1 0 1 1-4.2 0c0-1.1.9-2.3 2.1-3.7z"/>`}},le={viewBox:"0 0 48 48",body:`
    <path fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"
      d="M16 5.5h16M20.5 5.5v10.2L10.6 35a3.4 3.4 0 0 0 3 4.9h20.8a3.4 3.4 0 0 0 3-4.9L27.5 15.7V5.5"/>
    <path fill="currentColor" opacity="0.9"
      d="M13 30c3-2.2 6-2.2 9 0s6 2.2 9 0l3.2 5.1a3.4 3.4 0 0 1-3 4.8H16.8a3.4 3.4 0 0 1-3-4.8L13 30z"/>
    <circle cx="21" cy="34" r="1.7" fill="#0d1533"/>
    <circle cx="26.5" cy="30.5" r="1.3" fill="#0d1533"/>
    <circle cx="29.5" cy="35.5" r="1.1" fill="#0d1533"/>
  `};function M(n,e=24){const t=vt[n];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${e}" height="${e}" aria-hidden="true">${t.body}</svg>`}function x(n,e){n.innerHTML=e}function O(n,e=24,t="ws-ic"){const s=document.createElement("span");return s.className=t,s.setAttribute("aria-hidden","true"),x(s,M(n,e)),s}class xt{constructor(e,t){this.save=e,this.session=t,this.three.background=Z(),this.bokeh=Ee(50,b),this.three.add(this.bokeh.points,this.aurora.group)}three=new F;bokeh;aurora=new ee;enter(e){e.renderer.camera.position.set(0,0,6),e.renderer.camera.lookAt(0,0,0);const t=this.session.level,s=this.save.get("levels")[String(t)];e.analytics.track("win_shown",{level:t,stars:s?.stars??0});const i=document.createElement("div");i.className="ws-card ws-panel",i.append(e.ui.text("LEVEL COMPLETE","ws-eyebrow"),e.ui.title(`Level ${t}`),this.starsElement(s?.stars??0),e.ui.text(s?`Best: ${s.bestMoves} moves`:"","ws-chip ws-best"));const o=e.ui.button("Next level",()=>{this.session.level=t+1,e.setScene("play")});i.append(o,e.ui.button("Menu",()=>e.setScene("menu"),"jeez-ui-button--ghost")),e.ui.screen("gameover").replaceChildren(i),e.ui.show("gameover")}exit(e){e.ui.hide("gameover")}update(e,t){this.bokeh.update(t),this.aurora.update(t)}starsElement(e){const t=document.createElement("div");t.className="ws-stars-wrap";const s=document.createElement("div");s.className="ws-rays";const i=document.createElement("div");i.className="ws-stars-row";for(let o=0;o<3;o++){const r=document.createElement("span"),a=o<e;r.className=a?"ws-star ws-star--on":"ws-star ws-star--off",r.style.animationDelay=`${.25+o*.18}s`,x(r,M(a?"star-fill":"star-off",46)),i.append(r)}return t.append(s,i),t}}class yt{constructor(e,t){this.save=e,this.session=t,this.three.background=Z(),this.bokeh=Ee(70,b),this.three.add(this.bokeh.points,this.aurora.group)}three=new F;bokeh;aurora=new ee;enter(e){e.renderer.camera.position.set(0,0,6),e.renderer.camera.lookAt(0,0,0),e.analytics.track("menu_shown");const t=this.save.get("currentLevel"),s=e.ui.screen("menu"),i=document.createElement("div");i.className="ws-hero";const o=document.createElement("div");o.className="ws-logo",x(o,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${le.viewBox}" aria-hidden="true">${le.body}</svg>`);const r=document.createElement("div");r.className="ws-word ws-word--a",r.textContent=ae.split(" ")[0];const a=document.createElement("div");a.className="ws-word ws-word--b",a.textContent=ae.split(" ")[1]??"",i.append(o,r,a);const c=e.ui.text(`LEVEL ${t}`,"ws-chip"),l=e.ui.button("Play",()=>{this.session.level=t,e.setScene("play")});l.prepend(O("play",20,"ws-ic"));const h=e.ui.button("Levels",()=>this.showLevels(e),"jeez-ui-button--ghost");h.prepend(O("grid",20,"ws-ic"));const u=document.createElement("div");u.className="ws-stack",u.append(l,h),s.replaceChildren(i,e.ui.text("SORT THE COLORS","ws-subtitle"),c,u,this.muteButton(e)),e.ui.show("menu")}exit(e){e.ui.hide("menu"),e.ui.hide("levels")}update(e,t){this.bokeh.update(t),this.aurora.update(t)}showLevels(e){const t=this.save.get("currentLevel"),s=this.save.get("levels"),i=Math.max(20,t),o=document.createElement("div");o.className="ws-grid";for(let c=1;c<=i;c++){const l=s[String(c)],h=c>t;let u="ws-cell";l&&(u+=" ws-cell--done"),c===t&&(u+=" ws-cell--current"),h&&(u+=" ws-cell--locked");const w=e.ui.button("",()=>{this.session.level=c,e.setScene("play")},u);if(w.disabled=h,w.setAttribute("aria-label",h?`Level ${c} (locked)`:`Level ${c}`),h){const v=document.createElement("span");v.className="ws-cell-num",x(v,M("lock",18)),w.append(v)}else{const v=document.createElement("span");if(v.className="ws-cell-num",v.textContent=String(c),w.append(v),l){const P=document.createElement("span");P.className="ws-cell-stars";for(let T=0;T<3;T++){const A=document.createElement("span");A.className=T<l.stars?"ws-mini-on":"ws-mini-off",x(A,M(T<l.stars?"star-fill":"star-off",9)),P.append(A)}w.append(P)}}o.append(w)}const r=e.ui.button("Back",()=>e.ui.show("menu"),"jeez-ui-button--ghost");r.prepend(O("back",18,"ws-ic")),e.ui.screen("levels").replaceChildren(e.ui.title("Select Level"),o,r),e.ui.show("levels")}muteButton(e){const t=()=>{const i=e.audio.muted;x(s,M(i?"sound-off":"sound-on",22)),s.setAttribute("aria-label",i?"Sound off, tap to unmute":"Sound on, tap to mute")},s=e.ui.button("",()=>{const i=e.audio.toggleMuted();this.save.set("muted",i),t(),e.audio.playTone(660,.06)},"jeez-ui-icon-button");return t(),s.classList.add("ws-mute"),s}}const k=4;function te(n){const e=n[n.length-1];if(e===void 0)return null;let t=1;for(let s=n.length-2;s>=0&&n[s]===e;s--)t++;return{color:e,count:t}}function z(n){const e=[];for(const t of n){const s=e[e.length-1];s&&s.color===t?s.count++:e.push({color:t,count:1})}return e}function Mt(n,e,t){if(e===t)return!1;const s=n[e],i=n[t],o=te(s);return!o||i.length>=k?!1:i.length===0||i[i.length-1]===o.color}function kt(n,e){const t=te(n);return t?Math.min(t.count,k-e.length):0}function St(n,e,t){const s=n[e],i=n[t],o=kt(s,i),r=s[s.length-1];for(let a=0;a<o;a++)s.pop(),i.push(r);return{from:e,to:t,count:o}}function Et(n,e){const t=n[e.from],s=n[e.to];for(let i=0;i<e.count;i++){const o=s.pop();o!==void 0&&t.push(o)}}function N(n){return n.every(e=>e.length===0?!0:e.length!==k?!1:e.every(t=>t===e[0]))}function he(n){return n.map(e=>e.slice())}function Tt(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function zt(n,e){for(let t=n.length-1;t>0;t--){const s=Math.floor(e()*(t+1)),i=n[t];n[t]=n[s],n[s]=i}return n}class Lt{items=[];get size(){return this.items.length}push(e){const t=this.items;t.push(e);let s=t.length-1;for(;s>0;){const i=s-1>>1;if(t[i].f<=t[s].f)break;const o=t[i];t[i]=t[s],t[s]=o,s=i}}pop(){const e=this.items,t=e[0],s=e.pop();if(e.length===0||s===void 0)return t;e[0]=s;let i=0;for(;;){const o=i*2+1,r=o+1;let a=i;if(o<e.length&&e[o].f<e[a].f&&(a=o),r<e.length&&e[r].f<e[a].f&&(a=r),a===i)break;const c=e[a];e[a]=e[i],e[i]=c,i=a}return t}}function ue(n){return n.map(e=>e.join(",")).sort().join(";")}function de(n){let e=0;const t=new Set;for(const s of n)for(let i=0;i<s.length;i++)(i===0||s[i]!==s[i-1])&&e++,t.add(s[i]);return e-t.size}function Pt(n){const e=[];for(let t=0;t<n.length;t++){const s=n[t],i=te(s);if(!i)continue;const o=i.count===s.length;let r=!1;for(let a=0;a<n.length;a++){if(a===t)continue;const c=n[a];if(c.length>=k)continue;if(c.length===0){if(o||r)continue;r=!0}else if(c[c.length-1]!==i.color)continue;const l=Math.min(i.count,k-c.length),h=n.slice();h[t]=s.slice(0,s.length-l),h[a]=c.concat(new Array(l).fill(i.color)),e.push(h)}}return e}function pe(n,e){if(N(n))return{moves:0,optimal:!0};const t=new Lt,s=new Map,i=de(n);t.push({tubes:n,g:0,f:i*e.weight}),s.set(ue(n),0);let o=0;for(;t.size>0;){const r=t.pop();if(!r)break;if(++o>e.maxNodes)return null;for(const a of Pt(r.tubes)){const c=r.g+1;if(N(a))return{moves:c,optimal:e.weight===1};const l=ue(a),h=s.get(l);h!==void 0&&h<=c||(s.set(l,c),t.push({tubes:a,g:c,f:c+de(a)*e.weight}))}}return null}function At(n){return n<=10?{colors:4,emptyTubes:2}:n<=20?{colors:5,emptyTubes:2}:n<=80?{colors:Math.min(9,6+Math.floor((n-21)/15)),emptyTubes:2}:n<=200?{colors:Math.min(12,10+Math.floor((n-81)/40)),emptyTubes:2}:{colors:Math.min(14,12+Math.floor((n-201)/100)),emptyTubes:1}}function Bt(n,e){return n<=Math.ceil(e*1.3)?3:n<=Math.ceil(e*1.8)?2:1}function Ct(n){const{colors:e,emptyTubes:t}=At(n);for(let s=0;s<200;s++){const i=(Math.imul(n,2654435769)^Math.imul(s+1,2246822507))>>>0,o=Tt(i),r=[];for(let l=0;l<e;l++)for(let h=0;h<k;h++)r.push(l);zt(r,o);const a=[];for(let l=0;l<e;l++)a.push(r.slice(l*k,(l+1)*k));for(let l=0;l<t;l++)a.push([]);if(a.some(l=>l.length===k&&l.every(h=>h===l[0]))||N(a))continue;let c=e<=9?pe(a,{maxNodes:15e4,weight:1}):null;if(c||(c=pe(a,{maxNodes:2e5,weight:3})),!!c&&!(c.moves<e+2))return{tubes:a,minMoves:c.moves,optimal:c.optimal,numColors:e,emptyTubes:t}}throw new Error(`Could not generate a solvable level ${n}`)}const _t=new j(.1,.065),fe=b.map(n=>new y({color:n,side:W,transparent:!0}));class jt{group=new L;pieces=[];burst(e,t,s){for(let i=0;i<t;i++){const o=fe[Math.floor(Math.random()*fe.length)],r=new f(_t,o),a=.75+Math.random()*.7;r.scale.set(a,a,a),r.position.set(e.x+(Math.random()-.5)*s,e.y+Math.random()*.6,e.z+.8+Math.random()*.4);const c={mesh:r,velocity:new g((Math.random()-.5)*2.4,1.5+Math.random()*2.5,(Math.random()-.5)*.6),spin:new g(Math.random()*8,Math.random()*8,Math.random()*8),life:2.2+Math.random()*.8};this.pieces.push(c),this.group.add(r)}}update(e){for(let t=this.pieces.length-1;t>=0;t--){const s=this.pieces[t];if(s.life-=e,s.life<=0){this.group.remove(s.mesh),this.pieces.splice(t,1);continue}s.velocity.y-=5.5*e,s.mesh.position.addScaledVector(s.velocity,e),s.mesh.rotation.x+=s.spin.x*e,s.mesh.rotation.y+=s.spin.y*e,s.mesh.rotation.z+=s.spin.z*e}}clear(){for(const e of this.pieces)this.group.remove(e.mesh);this.pieces=[]}}const Te=30,ze=8,Gt=Te*ze*6;function Le(n,e){const t=new C(n);return t.lerp(new C(16777215),e),t}class It{group=new L;mesh;mat;curve=new Ge(new g,new g,new g);constructor(){this.mat=new y({color:16777215,transparent:!0,opacity:.95});const e=new Se;this.mesh=new f(e,this.mat),this.mesh.visible=!1,this.mesh.renderOrder=8,this.group.add(this.mesh)}begin(e){this.mat.color.copy(Le(b[e%b.length],.16))}update(e,t,s){this.curve.v0.copy(e),this.curve.v2.copy(t),this.curve.v1.lerpVectors(e,t,.42),this.curve.v1.y+=.55;const i=new Ie(this.curve,Te,.045,ze,!1);i.setDrawRange(0,Math.floor(Gt*Math.min(1,Math.max(0,s)))),this.mesh.geometry.dispose(),this.mesh.geometry=i,this.mesh.visible=s>.02&&s<.995}end(){this.mesh.visible=!1}}class Rt{group=new L;geo=new Re(.035,8,6);drops=[];splash(e,t,s=6){const i=new y({color:Le(b[t%b.length],.2)});for(let o=0;o<s;o++){const r=new f(this.geo,i);r.position.copy(e);const a={mesh:r,velocity:new g((Math.random()-.5)*1.4,1.1+Math.random()*.9,(Math.random()-.5)*.5),life:.35+Math.random()*.15};this.drops.push(a),this.group.add(r)}}update(e){for(let t=this.drops.length-1;t>=0;t--){const s=this.drops[t];if(s.life-=e,s.life<=0){this.group.remove(s.mesh),this.drops.splice(t,1);continue}s.velocity.y-=7.5*e,s.mesh.position.addScaledVector(s.velocity,e)}}clear(){for(const e of this.drops)this.group.remove(e.mesh);this.drops.length=0}}const S=.3,p=2.1,R=.235,$t=.45,Nt=-p/2+.09,Yt=new K(S,S,p,28,1,!0),Ot=new Q(S,.032,10,28),Dt=new K(S,S*.9,.09,28),Xt=new K(1,1,1,24),Vt=new Q(S+.13,.035,10,40),Ut=new Q(S+.13,.09,10,40),Ht=new $e(R*.96,24),qt=new j(.22,.075),Ft=new j(.035,p-.25),Wt=new j(1.15,.5),Kt=new Ne(.85,p+.9,.9),D=new Ye({color:12376319,transparent:!0,opacity:.17,shininess:100,specular:13953279,side:W,depthWrite:!1}),Qt=new y({color:6809849,transparent:!0,opacity:.95,blending:_,depthWrite:!1}),Jt=new y({color:2282478,transparent:!0,opacity:.28,blending:_,depthWrite:!1,side:W}),ge=new y({color:16777215,transparent:!0,opacity:.13,blending:_,depthWrite:!1});let X=null;const Zt=new y({visible:!1}),me=new Map,we=new Map;function es(n,e){const t=new C(n);return t.lerp(new C(16777215),e),t}function be(n){let e=me.get(n);if(!e){const t=b[n%b.length];e=new Oe({color:t,emissive:t,emissiveIntensity:.3}),me.set(n,e)}return e}function ve(n){let e=we.get(n);return e||(e=new y({color:es(b[n%b.length],.42)}),we.set(n,e)),e}const V=6;class ts{group=new L;hit;home=new g;wobble=0;ring;ringGlow;surface;shine;layerMeshes=[];surfaceColorId=-1;topMesh=null;topBaseScaleY=0;topBaseY=0;wobbleT=Math.random()*Math.PI*2;ringT=Math.random()*Math.PI*2;selected=!1;constructor(){X||(X=new y({map:J(),color:132631,transparent:!0,opacity:.55,depthWrite:!1}));const e=new f(Wt,X);e.position.y=-p/2-.09,e.position.z=-.15,e.renderOrder=-1,e.scale.set(1,.75,1),e.rotation.x=-.35;const t=new f(Dt,D);t.position.y=-p/2;const s=new f(Yt,D);s.renderOrder=5;const i=new f(Ft,ge);i.position.set(-S*.55,0,S*.82),i.renderOrder=6;const o=new f(Ot,D);o.rotation.x=Math.PI/2,o.position.y=p/2,o.renderOrder=6,this.ring=new f(Vt,Qt.clone()),this.ring.rotation.x=Math.PI/2,this.ring.position.y=-p/2-.05,this.ring.renderOrder=7,this.ring.visible=!1,this.ringGlow=new f(Ut,Jt),this.ringGlow.rotation.x=Math.PI/2,this.ringGlow.position.y=-p/2-.05,this.ringGlow.renderOrder=7,this.ringGlow.visible=!1,this.surface=new f(Ht,ve(0)),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.surface.visible=!1,this.shine=new f(qt,ge),this.shine.rotation.x=-Math.PI/2,this.shine.position.x=-R*.4,this.shine.renderOrder=4,this.shine.visible=!1,this.hit=new f(Kt,Zt);for(let r=0;r<V;r++){const a=new f(Xt,be(0));a.visible=!1,a.renderOrder=1,this.layerMeshes.push(a),this.group.add(a)}this.group.add(e,t,s,i,o,this.ring,this.ringGlow,this.surface,this.shine,this.hit)}setStack(e){let t=Nt,s=0;this.topMesh=null;for(const i of e){if(i.count<=.02||s>=V)continue;const o=this.layerMeshes[s++],r=i.count*$t;o.visible=!0,o.material=be(i.color),o.scale.set(R,r,R),o.position.y=t+r/2,t+=r,this.topMesh=o,this.topBaseScaleY=r,this.topBaseY=o.position.y,this.surfaceColorId=i.color}for(let i=s;i<V;i++)this.layerMeshes[i].visible=!1;this.topMesh?(this.surface.material=ve(this.surfaceColorId),this.surface.visible=!0,this.shine.visible=!0):(this.surface.visible=!1,this.shine.visible=!1)}setSelected(e){this.selected=e,this.ring.visible=e,this.ringGlow.visible=e}tick(e){if(this.wobbleT+=e,this.wobble=Math.max(0,this.wobble-e*1.6),this.selected){this.ringT+=e;const r=1+.045*Math.sin(this.ringT*5);this.ring.scale.setScalar(r),this.ringGlow.scale.setScalar(1+.08*Math.sin(this.ringT*5-.6)),this.ring.material.opacity=.85+.15*Math.sin(this.ringT*5)}if(!this.topMesh)return;const s=1+(.02+this.wobble*.1)*Math.sin(this.wobbleT*(3+this.wobble*9)),i=this.topBaseScaleY*s;this.topMesh.scale.y=i,this.topMesh.position.y=this.topBaseY+(i-this.topBaseScaleY)/2;const o=this.topMesh.position.y+i/2+.012;this.surface.position.y=o,this.shine.position.y=o+.004}}function B(n){n.audio.playTone(660,.05,.15)}function U(n){n.audio.playTone(880,.06,.18)}function ss(n){n.audio.playTone(180,.12,.2)}function is(n){n.audio.playTone(520,.07,.16),window.setTimeout(()=>n.audio.playTone(460,.07,.14),70),window.setTimeout(()=>n.audio.playTone(400,.08,.12),150)}function ns(n){n.audio.playTone(240,.09,.25)}function os(n){[523,659,784,1047].forEach((t,s)=>{window.setTimeout(()=>n.audio.playTone(t,.14,.22),s*110)})}const xe=.85,H=1.35,rs=.3,as=.55,cs=1.6;class ls{constructor(e,t){this.save=e,this.session=t,this.three.background=Z();const s=new oe(16777215,2);s.position.set(2,4,6);const i=new oe(6809849,.7);i.position.set(-4,2,-5),this.three.add(s,i,new De(5928152,725027,.55),new Xe(16777215,.32),this.aurora.group,this.tubesGroup,this.confetti.group,this.stream.group,this.droplets.group)}three=new F;tubesGroup=new L;confetti=new jt;aurora=new ee;stream=new It;droplets=new Rt;raycaster=new Ve;level=1;data;initial=[];tubes=[];views=[];history=[];selected=-1;extraTubes=0;anim=null;won=!1;winTimer=0;finished=!1;needAd=!1;movesEl=null;undoBtn=null;addBtn=null;cleanups=[];qaProbe=new URLSearchParams(location.search).has("ws_probe");qaFreezePour=(()=>{const e=new URLSearchParams(location.search).get("ws_freezepour");if(e===null)return null;const t=Number(e);return Number.isFinite(t)&&t>0&&t<1?t:null})();enter(e){if(this.level=this.session.level,this.data=Ct(this.level),this.initial=he(this.data.tubes),e.analytics.track("level_start",{level:this.level,minMoves:this.data.minMoves}),this.buildHud(e),this.resetBoard(),this.fitCamera(e),this.cleanups.push(e.input.on("tap",t=>this.onTap(e,t.x,t.y))),new URLSearchParams(location.search).has("ws_streamtest")&&this.views.length>=2){const t=this.views[0],s=this.views[this.views.length-1];this.stream.begin(0),this.stream.update(new g(t.home.x,t.home.y+p/2,0),new g(s.home.x,s.home.y+p/2,0),.85)}}exit(e){e.ui.hide("play-hud");for(const t of this.cleanups)t();this.cleanups=[],this.confetti.clear(),this.stream.end(),this.droplets.clear();for(const t of this.views)this.tubesGroup.remove(t.group);this.views=[],this.movesEl=null,this.undoBtn=null,this.addBtn=null}update(e,t){this.fitCamera(e),this.confetti.update(t),this.aurora.update(t),this.droplets.update(t);for(let s=0;s<this.views.length;s++){const i=this.views[s];if(i.tick(t),this.anim&&this.anim.from===s)continue;const o=i.home.y+(s===this.selected?rs:0),r=Math.min(1,12*t);i.group.position.x+=(i.home.x-i.group.position.x)*r,i.group.position.y+=(o-i.group.position.y)*r,i.group.position.z+=(i.home.z-i.group.position.z)*r,i.group.rotation.z+=(0-i.group.rotation.z)*r}if(this.anim&&this.updatePour(e,t),this.won&&!this.finished&&(this.winTimer-=t,this.winTimer<=0)){this.finished=!0;const s=()=>e.setScene("gameover");this.needAd?e.ads.showInterstitial().then(s,s):s()}}resetBoard(){this.tubes=he(this.initial),this.history=[],this.selected=-1,this.extraTubes=0,this.anim=null,this.won=!1,this.finished=!1,this.winTimer=0,this.confetti.clear();for(const e of this.views)this.tubesGroup.remove(e.group);this.views=[];for(const e of this.tubes)this.createView(e);this.layout();for(const e of this.views)e.group.position.copy(e.home);this.refreshHud()}createView(e){const t=new ts;return t.setStack(z(e)),this.tubesGroup.add(t.group),this.views.push(t),t}layout(){const e=this.views.length,t=e>6,s=t?Math.ceil(e/2):e;(t?[this.views.slice(0,s),this.views.slice(s)]:[this.views]).forEach((o,r)=>{const a=t?r===0?H:-H:0;o.forEach((c,l)=>{c.home.set((l-(o.length-1)/2)*xe,a,0)})})}fitCamera(e){const t=e.renderer.camera,s=this.views.length,i=s>6,r=((i?Math.ceil(s/2):s)-1)*xe/2+.9,a=(i?H:0)+p/2+1.5,c=Math.tan(Ue.degToRad(t.fov/2)),l=Math.max(a/c,r/(c*t.aspect),5);t.position.set(0,0,l),t.lookAt(0,-.13,0)}onTap(e,t,s){if(this.won||this.anim)return;const i=this.pickTube(e,t,s);if(i===-1){this.selected!==-1&&(this.deselect(),B(e));return}if(this.selected===-1){this.tubes[i].length>0?(this.select(i),U(e)):B(e);return}if(i===this.selected){this.deselect(),B(e);return}Mt(this.tubes,this.selected,i)?this.startPour(e,this.selected,i):this.tubes[i].length>0?(this.select(i),U(e)):ss(e)}pickTube(e,t,s){const i=e.renderer.domElement.getBoundingClientRect(),o=new He((t-i.left)/i.width*2-1,-((s-i.top)/i.height)*2+1);this.raycaster.setFromCamera(o,e.renderer.camera);const a=this.raycaster.intersectObjects(this.views.map(c=>c.hit),!1)[0]?.object;return a?this.views.findIndex(c=>c.hit===a):-1}select(e){this.deselect(),this.selected=e,this.views[e].setSelected(!0)}deselect(){this.selected!==-1&&this.views[this.selected].setSelected(!1),this.selected=-1}startPour(e,t,s){const i=z(this.tubes[t]),o=z(this.tubes[s]),r=i[i.length-1].color,a=St(this.tubes,t,s);this.history.push(a),this.deselect(),this.anim={from:t,to:s,count:a.count,color:r,fromRuns:i,toRuns:o,t:0,duration:.34+a.count*.085},this.stream.begin(r),is(e),this.refreshHud()}updatePour(e,t){const s=this.anim;if(!s)return;s.t+=t;const i=this.qaFreezePour??Math.min(1,s.t/s.duration),o=i*i*(3-2*i),r=s.count*o,a=s.fromRuns.map(Y=>({...Y}));a[a.length-1].count-=r;const c=s.toRuns.map(Y=>({...Y})),l=c[c.length-1];l&&l.color===s.color?l.count+=r:r>.001&&c.push({color:s.color,count:r});const h=this.views[s.from],u=this.views[s.to];h.setStack(a),u.setStack(c);const w=Math.sin(i*Math.PI),v=u.home.x-h.home.x,P=Math.sign(v)||1;h.group.position.set(h.home.x+v*.15*w,h.home.y+as*w,h.home.z+.5*w),h.group.rotation.z=-P*.5*w;const T=h.group.rotation.z,A=new g(h.group.position.x-Math.sin(T)*(p/2),h.group.position.y+Math.cos(T)*(p/2),h.group.position.z),Ae=new g(u.group.position.x,u.group.position.y+p/2+.02,u.group.position.z),ie=Math.min(1,Math.max(0,(i-.1)/.78));this.stream.update(A,Ae,ie),this.qaProbe&&(window.__wsPour={p:i,reveal:ie,streamVisible:this.stream.group.children[0]?.visible??!1}),i>=1&&(h.setStack(z(this.tubes[s.from])),u.setStack(z(this.tubes[s.to])),u.wobble=1,h.group.position.copy(h.home),h.group.rotation.z=0,this.stream.end(),this.droplets.splash(new g(u.home.x,u.home.y+p/2,0),s.color),this.anim=null,ns(e),N(this.tubes)&&this.onWin(e))}undo(e){if(this.won||this.anim||this.history.length===0)return;const t=this.history.pop();t&&(Et(this.tubes,t),this.views[t.from].setStack(z(this.tubes[t.from])),this.views[t.to].setStack(z(this.tubes[t.to])),this.deselect(),B(e),this.refreshHud())}restart(e){this.won||(e.analytics.track("level_restart",{level:this.level,moves:this.history.length}),this.resetBoard(),B(e))}addTube(e){if(this.won||this.anim||this.extraTubes>=ce)return;this.extraTubes++,this.tubes.push([]);const t=this.createView([]);this.layout(),t.group.position.set(t.home.x,t.home.y+2.5,t.home.z),e.analytics.track("extra_tube",{level:this.level,extra:this.extraTubes}),U(e),this.refreshHud()}onWin(e){this.won=!0,this.winTimer=cs,this.deselect(),os(e),this.confetti.burst(new g(-1.2,.4,0),60,1.6),this.confetti.burst(new g(1.2,.4,0),60,1.6);const t=this.history.length,s=Bt(t,this.data.minMoves),i=String(this.level),o={...this.save.get("levels")},r=o[i];o[i]={stars:Math.max(r?.stars??0,s),bestMoves:Math.min(r?.bestMoves??t,t)};const a=this.save.get("completions")+1;this.save.update({levels:o,completions:a,currentLevel:Math.max(this.save.get("currentLevel"),this.level+1)}),this.needAd=a%bt===0&&!this.save.get("noAds"),e.analytics.track("level_complete",{level:this.level,moves:t,stars:s,minMoves:this.data.minMoves,extraTubes:this.extraTubes})}buildHud(e){const t=e.ui.screen("play-hud","jeez-ui-hud"),s=e.ui.iconButton("",()=>e.setScene("menu"));s.setAttribute("aria-label","Back to menu"),x(s,M("home",22));const i=document.createElement("div");i.className="ws-topbar",this.movesEl=e.ui.text("","ws-chip"),i.append(s,e.ui.text(`Level ${this.level}`,"ws-chip"),this.movesEl);const o=document.createElement("div");o.className="ws-bottombar",this.undoBtn=e.ui.button("",()=>this.undo(e),"ws-round"),this.undoBtn.setAttribute("aria-label","Undo last move"),x(this.undoBtn,M("undo",26));const r=e.ui.button("",()=>this.restart(e),"ws-round");r.setAttribute("aria-label","Restart level"),x(r,M("restart",26)),this.addBtn=e.ui.button("",()=>this.addTube(e),"ws-round"),this.addBtn.setAttribute("aria-label","Add an empty tube"),x(this.addBtn,M("add-tube",26)),o.append(this.undoBtn,r,this.addBtn),t.replaceChildren(i,o),e.ui.show("play-hud")}refreshHud(){this.movesEl&&(this.movesEl.innerHTML=`Moves <b>${this.history.length}</b> · Min ${this.data.minMoves}`),this.undoBtn&&(this.undoBtn.disabled=this.history.length===0),this.addBtn&&(this.addBtn.disabled=this.extraTubes>=ce)}}const ye="water-sort-style",hs=`
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
`;function us(){if(document.getElementById(ye))return;const n=document.createElement("style");n.id=ye,n.textContent=hs,document.head.appendChild(n)}const Pe=document.getElementById("app");if(!Pe)throw new Error("Missing #app container in index.html");const G=new pt({key:gt,version:mt,defaults:{currentLevel:1,levels:{},completions:0,muted:!1,noAds:!1}}),I={level:G.get("currentLevel")},E=new dt({container:Pe,logicHz:wt});E.audio.setMuted(G.get("muted"));us();E.registerScene("menu",new yt(G,I));E.registerScene("play",new ls(G,I));E.registerScene("gameover",new xt(G,I));E.analytics.initialize();E.ads.initialize();E.iap.initialize();const se=new URLSearchParams(location.search),q=Number(se.get("ws_level"));Number.isFinite(q)&&q>0&&(I.level=Math.floor(q));const $=se.get("ws_scene");$==="gameover"&&!se.has("ws_level")&&(I.level=1);E.start($==="play"||$==="gameover"?$:"menu");requestAnimationFrame(()=>{requestAnimationFrame(()=>document.getElementById("boot")?.remove())});
