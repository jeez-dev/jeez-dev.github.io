(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Oc=(()=>{try{return typeof location<"u"&&new URLSearchParams(location.search).has("debug")?!0:typeof localStorage<"u"&&localStorage.getItem("jeez.debug")==="1"}catch{return!1}})();function Ys(...i){Oc&&console.debug(...i)}class Bc{}class kc extends Bc{async initialize(){Ys("[ads] noop provider initialized")}async showInterstitial(){return Ys("[ads] interstitial (noop)"),!0}async showRewarded(){return Ys("[ads] rewarded (noop) — granting reward"),!0}}class zc{graph=null;volumes={master:1,sfx:1};_muted=!1;get muted(){return this._muted}unlock(){const{ctx:e}=this.ensure();e.state==="suspended"&&e.resume()}playTone(e,t,n={}){const s=this.ensure();if(s.ctx.state!=="running")return;const r=s.ctx.currentTime,a=n.volume??.2,o=n.attackSec??.004,l=s.ctx.createOscillator(),c=s.ctx.createGain();l.type=n.type??"sine",l.frequency.setValueAtTime(e,r),n.slideTo!==void 0&&l.frequency.exponentialRampToValueAtTime(Math.max(1,n.slideTo),r+t),c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(a,r+o),c.gain.exponentialRampToValueAtTime(.001,r+t),l.connect(c).connect(s.sfx),l.start(r),l.stop(r+t+.02)}playNoise(e,t={}){const n=this.ensure();if(n.ctx.state!=="running")return;const s=n.ctx.currentTime,r=Math.max(1,Math.floor(n.ctx.sampleRate*e)),a=n.ctx.createBuffer(1,r,n.ctx.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=Math.random()*2-1;const l=n.ctx.createBufferSource();l.buffer=a;const c=n.ctx.createBiquadFilter();c.type="bandpass",c.Q.value=t.q??1.2,c.frequency.setValueAtTime(t.filterFrom??800,s),c.frequency.exponentialRampToValueAtTime(Math.max(20,t.filterTo??t.filterFrom??800),s+e);const d=n.ctx.createGain(),p=t.volume??.15;d.gain.setValueAtTime(p,s),d.gain.exponentialRampToValueAtTime(.001,s+e),l.connect(c).connect(d).connect(n.sfx),l.start(s)}setMuted(e){this._muted=e,this.applyVolumes()}toggleMuted(){return this.setMuted(!this._muted),this._muted}async suspend(){this.graph&&this.graph.ctx.state==="running"&&await this.graph.ctx.suspend()}async resume(){this.graph&&this.graph.ctx.state==="suspended"&&await this.graph.ctx.resume()}ensure(){if(!this.graph){const e=new AudioContext,t=e.createGain();t.connect(e.destination);const n=e.createGain();n.connect(t),this.graph={ctx:e,master:t,sfx:n},this.applyVolumes()}return this.graph}applyVolumes(){this.graph&&(this.graph.master.gain.value=this._muted?0:this.volumes.master,this.graph.sfx.gain.value=this.volumes.sfx)}}class er{view;container;constructor(e,t=360,n=640){this.container=e;const s=document.createElement("canvas"),r=s.getContext("2d");if(!r)throw new Error("Canvas 2D not supported");e.appendChild(s),this.view={canvas:s,ctx:r,viewW:0,viewH:0,designW:t,designH:n,scale:1,offX:0,offY:0},this.resize()}resize(){const e=this.view,t=Math.min(window.devicePixelRatio||1,2),n=this.container.getBoundingClientRect();e.viewW=Math.max(1,n.width),e.viewH=Math.max(1,n.height),e.canvas.width=Math.round(e.viewW*t),e.canvas.height=Math.round(e.viewH*t),e.canvas.style.width=`${e.viewW}px`,e.canvas.style.height=`${e.viewH}px`,e.scale=Math.min(e.viewW/e.designW,e.viewH/e.designH),e.offX=(e.viewW-e.designW*e.scale)/2,e.offY=(e.viewH-e.designH*e.scale)/2,this.applyTransform()}applyTransform(){const e=this.view,t=Math.min(window.devicePixelRatio||1,2);e.ctx.setTransform(t*e.scale,0,0,t*e.scale,t*e.offX,t*e.offY)}beginFrame(){const e=this.view,t=Math.min(window.devicePixelRatio||1,2);e.ctx.setTransform(1,0,0,1,0,0),e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.ctx.setTransform(t*e.scale,0,0,t*e.scale,t*e.offX,t*e.offY)}toDesign(e,t){const n=this.view,s=n.canvas.getBoundingClientRect(),r=e-s.left,a=t-s.top;return{x:(r-n.offX)/n.scale,y:(a-n.offY)/n.scale}}toClient(e,t){const n=this.view,s=n.canvas.getBoundingClientRect();return{x:s.left+n.offX+e*n.scale,y:s.top+n.offY+t*n.scale}}}const Hc=350,Ao=14,Gc=40,Vc=400;class Wc{listeners={};pointers=new Map;target;startX=0;startY=0;startTime=0;moved=!1;constructor(e){this.target=e,e.style.touchAction="none",e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}on(e,t){return this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),()=>this.listeners[e]?.delete(t)}dispose(){this.target.removeEventListener("pointerdown",this.onPointerDown),this.target.removeEventListener("pointermove",this.onPointerMove),this.target.removeEventListener("pointerup",this.onPointerUp),this.target.removeEventListener("pointercancel",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}emit(e,t){const n=this.listeners[e];if(n)for(const s of n)s(t)}get isDown(){return this.pointers.size>0}onPointerDown=e=>{this.target.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1&&(this.startX=e.clientX,this.startY=e.clientY,this.startTime=performance.now(),this.moved=!1),this.emit("pointerdown",{x:e.clientX,y:e.clientY,pointerId:e.pointerId})};onPointerMove=e=>{const t=this.pointers.get(e.pointerId);t&&(t.x=e.clientX,t.y=e.clientY,Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>Ao&&(this.moved=!0),this.emit("pointermove",{x:e.clientX,y:e.clientY,pointerId:e.pointerId}))};onPointerUp=e=>{if(!this.pointers.delete(e.pointerId)||(this.emit("pointerup",{x:e.clientX,y:e.clientY,pointerId:e.pointerId}),this.pointers.size>0))return;const t=performance.now()-this.startTime,n=e.clientX-this.startX,s=e.clientY-this.startY,r=Math.hypot(n,s);if(!this.moved&&t<=Hc&&r<=Ao)this.emit("tap",{x:e.clientX,y:e.clientY});else if(r>=Gc&&t<=Vc){const a=Math.abs(n)>Math.abs(s)?n>0?"right":"left":s>0?"down":"up";this.emit("swipe",{direction:a,dx:n,dy:s,durationMs:t})}};onKeyDown=e=>{this.emit("keydown",e)};onKeyUp=e=>{this.emit("keyup",e)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="185",Xc=0,Ro=1,Yc=2,qs=1,qc=2,ts=3,Jn=0,Ot=1,vn=2,Dn=0,Ii=1,jr=2,Co=3,Po=4,Kc=5,si=100,$c=101,Zc=102,Jc=103,Qc=104,jc=200,eh=201,th=202,nh=203,ea=204,ta=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,dh=214,na=0,ia=1,sa=2,Bi=3,ra=4,aa=5,oa=6,la=7,kl=0,uh=1,fh=2,yn=0,zl=1,Hl=2,Gl=3,Ka=4,Vl=5,Wl=6,Xl=7,Yl=300,ci=301,ki=302,vr=303,xr=304,lr=306,ca=1e3,Ln=1001,ha=1002,Pt=1003,ph=1004,vs=1005,Nt=1006,Mr=1007,oi=1008,Zt=1009,ql=1010,Kl=1011,ss=1012,$a=1013,bn=1014,on=1015,Un=1016,Za=1017,Ja=1018,rs=1020,$l=35902,Zl=35899,Jl=1021,Ql=1022,ln=1023,Nn=1026,li=1027,Qa=1028,ja=1029,hi=1030,eo=1031,to=1033,Ks=33776,$s=33777,Zs=33778,Js=33779,da=35840,ua=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,va=37488,xa=37489,tr=37490,Ma=37491,ya=37808,Sa=37809,ba=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Ua=37821,Na=36492,Fa=36494,Oa=36495,Ba=36283,ka=36284,nr=36285,za=36286,mh=3200,Ha=0,gh=1,Kn="",$t="srgb",ir="srgb-linear",sr="linear",Je="srgb",gi=7680,Lo=519,_h=512,vh=513,xh=514,no=515,Mh=516,yh=517,io=518,Sh=519,Do=35044,jl=35048,Io="300 es",Mn=2e3,as=2001;function bh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eh(){const i=rr("canvas");return i.style.display="block",i}const Uo={};function No(...i){const e="THREE."+i.shift();console.log(e,...i)}function ec(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=ec(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=ec(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ui(...i){const e=i.join(" ");e in Uo||(Uo[e]=!0,Pe(...i))}function wh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Th={[na]:ia,[sa]:oa,[ra]:la,[Bi]:aa,[ia]:na,[oa]:sa,[la]:ra,[aa]:Bi};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,Ga=180/Math.PI;function hs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function Sr(i,e,t){return(1-t)*i+t*e}function Xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Oe{static{Oe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],p=n[s+3],h=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];if(p!==x||l!==h||c!==m||d!==v){let f=l*h+c*m+d*v+p*x;f<0&&(h=-h,m=-m,v=-v,x=-x,f=-f);let u=1-o;if(f<.9995){const S=Math.acos(f),w=Math.sin(S);u=Math.sin(u*S)/w,o=Math.sin(o*S)/w,l=l*u+h*o,c=c*u+m*o,d=d*u+v*o,p=p*u+x*o}else{l=l*u+h*o,c=c*u+m*o,d=d*u+v*o,p=p*u+x*o;const S=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=S,c*=S,d*=S,p*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],p=r[a],h=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+d*p+l*m-c*h,e[t+1]=l*v+d*h+c*p-o*m,e[t+2]=c*v+d*m+o*h-l*p,e[t+3]=d*v-o*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),p=o(r/2),h=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*d*p+c*m*v,this._y=c*m*p-h*d*v,this._z=c*d*v+h*m*p,this._w=c*d*p-h*m*v;break;case"YXZ":this._x=h*d*p+c*m*v,this._y=c*m*p-h*d*v,this._z=c*d*v-h*m*p,this._w=c*d*p+h*m*v;break;case"ZXY":this._x=h*d*p-c*m*v,this._y=c*m*p+h*d*v,this._z=c*d*v+h*m*p,this._w=c*d*p-h*m*v;break;case"ZYX":this._x=h*d*p-c*m*v,this._y=c*m*p+h*d*v,this._z=c*d*v-h*m*p,this._w=c*d*p+h*m*v;break;case"YZX":this._x=h*d*p+c*m*v,this._y=c*m*p+h*d*v,this._z=c*d*v-h*m*p,this._w=c*d*p-h*m*v;break;case"XZY":this._x=h*d*p-c*m*v,this._y=c*m*p-h*d*v,this._z=c*d*v+h*m*p,this._w=c*d*p+h*m*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{static{N.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*d,this.y=n+l*d+o*c-r*p,this.z=s+l*p+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new N,Fo=new ui;class De{static{De.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],h=n[2],m=n[5],v=n[8],x=s[0],f=s[3],u=s[6],S=s[1],w=s[4],M=s[7],A=s[2],E=s[5],R=s[8];return r[0]=a*x+o*S+l*A,r[3]=a*f+o*w+l*E,r[6]=a*u+o*M+l*R,r[1]=c*x+d*S+p*A,r[4]=c*f+d*w+p*E,r[7]=c*u+d*M+p*R,r[2]=h*x+m*S+v*A,r[5]=h*f+m*w+v*E,r[8]=h*u+m*M+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*a-o*c,h=o*l-d*r,m=c*r-a*l,v=t*p+n*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=p*x,e[1]=(s*c-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=h*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Er.makeScale(e,t)),this}rotate(e){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new De,Oo=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rh(){const i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:e,whitePoint:n,transfer:sr,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const ze=Rh();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=rr("canvas")),_i.width=e.width,_i.height=e.height;const s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class so{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ch.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Lh=0;const Tr=new N;class Bt extends di{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Ln,s=Ln,r=Nt,a=oi,o=ln,l=Zt,c=Bt.DEFAULT_ANISOTROPY,d=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=hs(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tr).x}get height(){return this.source.getSize(Tr).y}get depth(){return this.source.getSize(Tr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Yl;Bt.DEFAULT_ANISOTROPY=1;class lt{static{lt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],m=l[5],v=l[9],x=l[2],f=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+x)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(m+1)/2,A=(u+1)/2,E=(d+h)/4,R=(p+x)/4,_=(v+f)/4;return w>M&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=R/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((f-v)*(f-v)+(p-x)*(p-x)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(p-x)/S,this.z=(h-d)/S,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Bt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new so(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tc extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class et{static{et.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,p,h,m,v,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,p,h,m,v,x,f)}set(e,t,n,s,r,a,o,l,c,d,p,h,m,v,x,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=m,u[7]=v,u[11]=x,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=a*d,m=a*p,v=o*d,x=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*p,v=c*d,x=c*p;t[0]=h+x*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=m*o-v,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*p,v=c*d,x=c*p;t[0]=h-x*o,t[4]=-a*p,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*d,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*p,v=o*d,x=o*p;t[0]=l*d,t[4]=v*c-m,t[8]=h*c+x,t[1]=l*p,t[5]=x*c+h,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,v=o*l,x=o*c;t[0]=l*d,t[4]=x-h*p,t[8]=v*p+m,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+v,t[10]=h-x*p}else if(e.order==="XZY"){const h=a*l,m=a*c,v=o*l,x=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+x,t[5]=a*d,t[9]=m*p-v,t[2]=v*p-m,t[6]=o*d,t[10]=x*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Nh)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),zn.crossVectors(n,Yt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),zn.crossVectors(n,Yt)),zn.normalize(),xs.crossVectors(Yt,zn),s[0]=zn.x,s[4]=xs.x,s[8]=Yt.x,s[1]=zn.y,s[5]=xs.y,s[9]=Yt.y,s[2]=zn.z,s[6]=xs.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],h=n[9],m=n[13],v=n[2],x=n[6],f=n[10],u=n[14],S=n[3],w=n[7],M=n[11],A=n[15],E=s[0],R=s[4],_=s[8],b=s[12],C=s[1],P=s[5],I=s[9],V=s[13],q=s[2],O=s[6],Y=s[10],H=s[14],J=s[3],j=s[7],de=s[11],me=s[15];return r[0]=a*E+o*C+l*q+c*J,r[4]=a*R+o*P+l*O+c*j,r[8]=a*_+o*I+l*Y+c*de,r[12]=a*b+o*V+l*H+c*me,r[1]=d*E+p*C+h*q+m*J,r[5]=d*R+p*P+h*O+m*j,r[9]=d*_+p*I+h*Y+m*de,r[13]=d*b+p*V+h*H+m*me,r[2]=v*E+x*C+f*q+u*J,r[6]=v*R+x*P+f*O+u*j,r[10]=v*_+x*I+f*Y+u*de,r[14]=v*b+x*V+f*H+u*me,r[3]=S*E+w*C+M*q+A*J,r[7]=S*R+w*P+M*O+A*j,r[11]=S*_+w*I+M*Y+A*de,r[15]=S*b+w*V+M*H+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],m=e[14],v=e[3],x=e[7],f=e[11],u=e[15],S=l*m-c*h,w=o*m-c*p,M=o*h-l*p,A=a*m-c*d,E=a*h-l*d,R=a*p-o*d;return t*(x*S-f*w+u*M)-n*(v*S-f*A+u*E)+s*(v*w-x*A+u*R)-r*(v*M-x*E+f*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],m=e[11],v=e[12],x=e[13],f=e[14],u=e[15],S=t*o-n*a,w=t*l-s*a,M=t*c-r*a,A=n*l-s*o,E=n*c-r*o,R=s*c-r*l,_=d*x-p*v,b=d*f-h*v,C=d*u-m*v,P=p*f-h*x,I=p*u-m*x,V=h*u-m*f,q=S*V-w*I+M*P+A*C-E*b+R*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/q;return e[0]=(o*V-l*I+c*P)*O,e[1]=(s*I-n*V-r*P)*O,e[2]=(x*R-f*E+u*A)*O,e[3]=(h*E-p*R-m*A)*O,e[4]=(l*C-a*V-c*b)*O,e[5]=(t*V-s*C+r*b)*O,e[6]=(f*M-v*R-u*w)*O,e[7]=(d*R-h*M+m*w)*O,e[8]=(a*I-o*C+c*_)*O,e[9]=(n*C-t*I-r*_)*O,e[10]=(v*E-x*M+u*S)*O,e[11]=(p*M-d*E-m*S)*O,e[12]=(o*b-a*P-l*_)*O,e[13]=(t*P-n*b+s*_)*O,e[14]=(x*w-v*A-f*S)*O,e[15]=(d*A-p*w+h*S)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,p=o+o,h=r*c,m=r*d,v=r*p,x=a*d,f=a*p,u=o*p,S=l*c,w=l*d,M=l*p,A=n.x,E=n.y,R=n.z;return s[0]=(1-(x+u))*A,s[1]=(m+M)*A,s[2]=(v-w)*A,s[3]=0,s[4]=(m-M)*E,s[5]=(1-(h+u))*E,s[6]=(f+S)*E,s[7]=0,s[8]=(v+w)*R,s[9]=(f-S)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);const c=1/a,d=1/o,p=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=d,nn.elements[5]*=d,nn.elements[6]*=d,nn.elements[8]*=p,nn.elements[9]*=p,nn.elements[10]*=p,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Mn,l=!1){const c=this.elements,d=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let v,x;if(l)v=r/(a-r),x=a*r/(a-r);else if(o===Mn)v=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===as)v=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,l=!1){const c=this.elements,d=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,x;if(l)v=1/(a-r),x=a/(a-r);else if(o===Mn)v=-2/(a-r),x=-(a+r)/(a-r);else if(o===as)v=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new N,nn=new et,Uh=new N(0,0,0),Nh=new N(1,1,1),zn=new N,xs=new N,Yt=new N,ko=new et,zo=new ui;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const Ho=new N,xi=new ui,En=new et,Ms=new N,Yi=new N,Oh=new N,Bh=new ui,Go=new N(1,0,0),Vo=new N(0,1,0),Wo=new N(0,0,1),Xo={type:"added"},kh={type:"removed"},Mi={type:"childadded",child:null},Ar={type:"childremoved",child:null};class Rt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new N,t=new Fn,n=new ui,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new De}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Vo,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Vo,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Yi,Ms,this.up):En.lookAt(Ms,Yi,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(En),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kh),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new N(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zh={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),u=this._getHandJoint(c,x);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Cr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ze.workingColorSpace){if(e=Ah(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cr(a,r,e+1/3),this.g=Cr(a,r,e),this.b=Cr(a,r,e-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ze.workingToColorSpace(It.copy(this),e),Math.round(He(It.r*255,0,255))*65536+Math.round(He(It.g*255,0,255))*256+Math.round(He(It.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=$t){ze.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(ys);const n=Sr(Hn.h,ys.h,t),s=Sr(Hn.s,ys.s,t),r=Sr(Hn.l,ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new le;le.NAMES=ic;class ro{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(e),this.near=t,this.far=n}clone(){return new ro(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new N,wn=new N,Pr=new N,Tn=new N,yi=new N,Si=new N,Yo=new N,Lr=new N,Dr=new N,Ir=new N,Ur=new lt,Nr=new lt,Fr=new lt;class an{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),wn.subVectors(n,t),Pr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(wn),l=sn.dot(Pr),c=wn.dot(wn),d=wn.dot(Pr),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(c*l-o*d)*h,v=(a*d-o*l)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ur.setScalar(0),Nr.setScalar(0),Fr.setScalar(0),Ur.fromBufferAttribute(e,t),Nr.fromBufferAttribute(e,n),Fr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Nr,r.y),a.addScaledVector(Fr,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),wn.subVectors(e,t),sn.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),sn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),Si.subVectors(r,n),Lr.subVectors(e,n);const l=yi.dot(Lr),c=Si.dot(Lr);if(l<=0&&c<=0)return t.copy(n);Dr.subVectors(e,s);const d=yi.dot(Dr),p=Si.dot(Dr);if(d>=0&&p<=d)return t.copy(s);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(yi,a);Ir.subVectors(e,r);const m=yi.dot(Ir),v=Si.dot(Ir);if(v>=0&&m<=v)return t.copy(r);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Si,o);const f=d*v-m*p;if(f<=0&&p-d>=0&&m-v>=0)return Yo.subVectors(r,s),o=(p-d)/(p-d+(m-v)),t.copy(s).addScaledVector(Yo,o);const u=1/(f+x+h);return a=x*u,o=h*u,t.copy(n).addScaledVector(yi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),bs.subVectors(this.max,qi),bi.subVectors(e.a,qi),Ei.subVectors(e.b,qi),wi.subVectors(e.c,qi),Gn.subVectors(Ei,bi),Vn.subVectors(wi,Ei),jn.subVectors(bi,wi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-jn.z,jn.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,jn.z,0,-jn.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-jn.y,jn.x,0];return!Or(t,bi,Ei,wi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,bi,Ei,wi,bs))?!1:(Es.crossVectors(Gn,Vn),t=[Es.x,Es.y,Es.z],Or(t,bi,Ei,wi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],rn=new N,Ss=new fi,bi=new N,Ei=new N,wi=new N,Gn=new N,Vn=new N,jn=new N,qi=new N,bs=new N,Es=new N,ei=new N;function Or(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),d=n.dot(ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const yt=new N,ws=new Oe;let Gh=0;class pt extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sc extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vh=new fi,Ki=new N,Br=new N;class Gi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Br)),this.expandByPoint(Ki.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wh=0;const Qt=new et,kr=new Rt,Ti=new N,qt=new fi,$i=new fi,Tt=new N;class mt extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?rc:sc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(qt.min,$i.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,$i.max),qt.expandByPoint(Tt)):(qt.expandByPoint($i.min),qt.expandByPoint($i.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Tt.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),Tt.add(Ti)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new N,l[_]=new N;const c=new N,d=new N,p=new N,h=new Oe,m=new Oe,v=new Oe,x=new N,f=new N;function u(_,b,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,C),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),d.sub(c),p.sub(c),m.sub(h),v.sub(h);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(P),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),o[_].add(x),o[b].add(x),o[C].add(x),l[_].add(f),l[b].add(f),l[C].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,b=S.length;_<b;++_){const C=S[_],P=C.start,I=C.count;for(let V=P,q=P+I;V<q;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new N,M=new N,A=new N,E=new N;function R(_){A.fromBufferAttribute(s,_),E.copy(A);const b=o[_];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(E,b);const P=M.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,b=S.length;_<b;++_){const C=S[_],P=C.start,I=C.count;for(let V=P,q=P+I;V<q;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,d=new N,p=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let m=0,v=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)h[v++]=c[m++]}return new pt(h,d,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let h=0,m=p.length;h<m;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Xh=0;class Vi extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Ii,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rn=new N,zr=new N,Ts=new N,Wn=new N,Hr=new N,As=new N,Gr=new N;class ac{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zr.copy(e).add(t).multiplyScalar(.5),Ts.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ts),o=Wn.dot(this.direction),l=-Wn.dot(Ts),c=Wn.lengthSq(),d=Math.abs(1-a*a);let p,h,m,v;if(d>0)if(p=a*l-o,h=a*o-l,v=r*d,p>=0)if(h>=-v)if(h<=v){const x=1/d;p*=x,h*=x,m=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h<=-v?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c):h<=v?(p=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zr).addScaledVector(Ts,h),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Hr.subVectors(t,e),As.subVectors(n,e),Gr.crossVectors(Hr,As);let a=this.direction.dot(Gr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(As.crossVectors(Wn,As));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Wn));if(c<0||l+c>a)return null;const d=-o*Wn.dot(Gr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cr extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qo=new et,ti=new ac,Rs=new Gi,Ko=new N,Cs=new N,Ps=new N,Ls=new N,Vr=new N,Ds=new N,$o=new N,Is=new N;class Qe extends Rt{constructor(e=new mt,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(Vr.fromBufferAttribute(p,e),a?Ds.addScaledVector(Vr,d):Ds.addScaledVector(Vr.sub(t),d))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Rs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Rs,Ko)===null||ti.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(qo.copy(r).invert(),ti.copy(e.ray).applyMatrix4(qo),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const f=h[v],u=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,A=w;M<A;M+=3){const E=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=Us(this,u,e,n,c,d,p,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=v,u=x;f<u;f+=3){const S=o.getX(f),w=o.getX(f+1),M=o.getX(f+2);s=Us(this,a,e,n,c,d,p,S,w,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const f=h[v],u=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,A=w;M<A;M+=3){const E=M,R=M+1,_=M+2;s=Us(this,u,e,n,c,d,p,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,u=x;f<u;f+=3){const S=f,w=f+1,M=f+2;s=Us(this,a,e,n,c,d,p,S,w,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Yh(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;Is.copy(o),Is.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:i}}function Us(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Cs),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Ls);const d=Yh(i,e,t,n,Cs,Ps,Ls,$o);if(d){const p=new N;an.getBarycoord($o,Cs,Ps,Ls,p),s&&(d.uv=an.getInterpolatedAttribute(s,o,l,c,p,new Oe)),r&&(d.uv1=an.getInterpolatedAttribute(r,o,l,c,p,new Oe)),a&&(d.normal=an.getInterpolatedAttribute(a,o,l,c,p,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};an.getNormal(Cs,Ps,Ls,h.normal),d.face=h,d.barycoord=p}return d}class oc extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Pt,d=Pt,p,h){super(null,a,o,l,c,d,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ai=new et,Jo=new et,Ns=[],Qo=new fi,qh=new et,Zi=new Qe,Ji=new Gi;class lc extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),Qo.copy(e.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Qo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),Ji.copy(e.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(Ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),e.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),Jo.multiplyMatrices(n,Ai),Zi.matrixWorld=Jo,Zi.raycast(e,Ns);for(let a=0,o=Ns.length;a<o;a++){const l=Ns[a];l.instanceId=r,l.object=this,t.push(l)}Ns.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(s*this.count),s,this.count,Qa,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wr=new N,Kh=new N,$h=new De;class ii{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Wr.subVectors(n,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Wr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$h.getNormalMatrix(e),s=this.coplanarPoint(Wr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Gi,Zh=new Oe(.5,.5),Fs=new N;class ao{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],h=r[6],m=r[7],v=r[8],x=r[9],f=r[10],u=r[11],S=r[12],w=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,m-d,u-v,A-S).normalize(),s[1].setComponents(c+a,m+d,u+v,A+S).normalize(),s[2].setComponents(c+o,m+p,u+x,A+w).normalize(),s[3].setComponents(c-o,m-p,u-x,A-w).normalize(),n)s[4].setComponents(l,h,f,M).normalize(),s[5].setComponents(c-l,m-h,u-f,A-M).normalize();else if(s[4].setComponents(c-l,m-h,u-f,A-M).normalize(),t===Mn)s[5].setComponents(c+l,m+h,u+f,A+M).normalize();else if(t===as)s[5].setComponents(l,h,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Zh.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fs.x=s.normal.x>0?e.max.x:e.min.x,Fs.y=s.normal.y>0?e.max.y:e.min.y,Fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oo extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jo=new et,Va=new ac,Os=new Gi,Bs=new N;class cc extends Rt{constructor(e=new mt,t=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;jo.copy(s).invert(),Va.copy(e.ray).applyMatrix4(jo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=h,x=m;v<x;v++){const f=c.getX(v);Bs.fromBufferAttribute(p,f),el(Bs,f,l,s,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=h,x=m;v<x;v++)Bs.fromBufferAttribute(p,v),el(Bs,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function el(i,e,t,n,s,r,a){const o=Va.distanceSqToPoint(i);if(o<t){const l=new N;Va.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class hc extends Bt{constructor(e=[],t=ci,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zi extends Bt{constructor(e,t,n=bn,s,r,a,o=Pt,l=Pt,c,d=Nn,p=1){if(d!==Nn&&d!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jh extends zi{constructor(e,t=bn,n=ci,s,r,a=Pt,o=Pt,l,c=Nn){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ds extends mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(p,2));function v(x,f,u,S,w,M,A,E,R,_,b){const C=M/R,P=A/_,I=M/2,V=A/2,q=E/2,O=R+1,Y=_+1;let H=0,J=0;const j=new N;for(let de=0;de<Y;de++){const me=de*P-V;for(let Me=0;Me<O;Me++){const Xe=Me*C-I;j[x]=Xe*S,j[f]=me*w,j[u]=q,c.push(j.x,j.y,j.z),j[x]=0,j[f]=0,j[u]=E>0?1:-1,d.push(j.x,j.y,j.z),p.push(Me/R),p.push(1-de/_),H+=1}}for(let de=0;de<_;de++)for(let me=0;me<R;me++){const Me=h+me+O*de,Xe=h+me+O*(de+1),ct=h+(me+1)+O*(de+1),Ye=h+(me+1)+O*de;l.push(Me,Xe,Ye),l.push(Xe,ct,Ye),J+=6}o.addGroup(m,J,b),m+=J,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ri extends mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],d=t/2,p=Math.PI/2*e,h=t,m=2*p+h,v=n*2+r,x=s+1,f=new N,u=new N;for(let S=0;S<=v;S++){let w=0,M=0,A=0,E=0;if(S<=n){const b=S/n,C=b*Math.PI/2;M=-d-e*Math.cos(C),A=e*Math.sin(C),E=-e*Math.cos(C),w=b*p}else if(S<=n+r){const b=(S-n)/r;M=-d+b*t,A=e,E=0,w=p+b*h}else{const b=(S-n-r)/n,C=b*Math.PI/2;M=d+e*Math.sin(C),A=e*Math.cos(C),E=e*Math.sin(C),w=p+h+b*p}const R=Math.max(0,Math.min(1,w/m));let _=0;S===0?_=.5/s:S===v&&(_=-.5/s);for(let b=0;b<=s;b++){const C=b/s,P=C*Math.PI*2,I=Math.sin(P),V=Math.cos(P);u.x=-A*V,u.y=M,u.z=A*I,o.push(u.x,u.y,u.z),f.set(-A*V,E,A*I),f.normalize(),l.push(f.x,f.y,f.z),c.push(C+_,R)}if(S>0){const b=(S-1)*x;for(let C=0;C<s;C++){const P=b+C,I=b+C+1,V=S*x+C,q=S*x+C+1;a.push(P,I,V),a.push(I,q,V)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class lo extends mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,d=new Oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const m=n+p/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hr extends mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],h=[],m=[];let v=0;const x=[],f=n/2;let u=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(m,2));function S(){const M=new N,A=new N;let E=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const b=[],C=_/r,P=C*(t-e)+e;for(let I=0;I<=s;I++){const V=I/s,q=V*l+o,O=Math.sin(q),Y=Math.cos(q);A.x=P*O,A.y=-C*n+f,A.z=P*Y,p.push(A.x,A.y,A.z),M.set(O,R,Y).normalize(),h.push(M.x,M.y,M.z),m.push(V,1-C),b.push(v++)}x.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const C=x[b][_],P=x[b+1][_],I=x[b+1][_+1],V=x[b][_+1];(e>0||b!==0)&&(d.push(C,P,V),E+=3),(t>0||b!==r-1)&&(d.push(P,I,V),E+=3)}c.addGroup(u,E,0),u+=E}function w(M){const A=v,E=new Oe,R=new N;let _=0;const b=M===!0?e:t,C=M===!0?1:-1;for(let I=1;I<=s;I++)p.push(0,f*C,0),h.push(0,C,0),m.push(.5,.5),v++;const P=v;for(let I=0;I<=s;I++){const q=I/s*l+o,O=Math.cos(q),Y=Math.sin(q);R.x=b*Y,R.y=f*C,R.z=b*O,p.push(R.x,R.y,R.z),h.push(0,C,0),E.x=O*.5+.5,E.y=Y*.5*C+.5,m.push(E.x,E.y),v++}for(let I=0;I<s;I++){const V=A+I,q=P+I;M===!0?d.push(q,q+1,V):d.push(q+1,q,V),_+=3}c.addGroup(u,_,M===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi extends hr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class co extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new N,M=new N,A=new N;for(let E=0;E<t.length;E+=3)m(t[E+0],w),m(t[E+1],M),m(t[E+2],A),l(w,M,A,S)}function l(S,w,M,A){const E=A+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const b=S.clone().lerp(M,_/E),C=w.clone().lerp(M,_/E),P=E-_;for(let I=0;I<=P;I++)I===0&&_===E?R[_][I]=b:R[_][I]=b.clone().lerp(C,I/P)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){const C=Math.floor(b/2);b%2===0?(h(R[_][C+1]),h(R[_+1][C]),h(R[_][C])):(h(R[_][C+1]),h(R[_+1][C+1]),h(R[_+1][C]))}}function c(S){const w=new N;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(S),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function d(){const S=new N;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const M=f(S)/2/Math.PI+.5,A=u(S)/Math.PI+.5;a.push(M,1-A)}v(),p()}function p(){for(let S=0;S<a.length;S+=6){const w=a[S+0],M=a[S+2],A=a[S+4],E=Math.max(w,M,A),R=Math.min(w,M,A);E>.9&&R<.1&&(w<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function m(S,w){const M=S*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function v(){const S=new N,w=new N,M=new N,A=new N,E=new Oe,R=new Oe,_=new Oe;for(let b=0,C=0;b<r.length;b+=9,C+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),A.copy(S).add(w).add(M).divideScalar(3);const P=f(A);x(E,C+0,S,P),x(R,C+2,w,P),x(_,C+4,M,P)}}function x(S,w,M,A){A<0&&S.x===1&&(a[w]=S.x-1),M.x===0&&M.z===0&&(a[w]=A/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.vertices,e.indices,e.radius,e.detail)}}class us extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,p=e/o,h=t/l,m=[],v=[],x=[],f=[];for(let u=0;u<d;u++){const S=u*h-a;for(let w=0;w<c;w++){const M=w*p-r;v.push(M,-S,0),x.push(0,0,1),f.push(w/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const w=S+c*u,M=S+c*(u+1),A=S+1+c*(u+1),E=S+1+c*u;m.push(w,M,E),m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}class ho extends mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let p=e;const h=(t-e)/s,m=new N,v=new Oe;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){const u=r+f/n*a;m.x=p*Math.cos(u),m.y=p*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,d.push(v.x,v.y)}p+=h}for(let x=0;x<s;x++){const f=x*(n+1);for(let u=0;u<n;u++){const S=u+f,w=S,M=S+n+1,A=S+n+2,E=S+1;o.push(w,M,E),o.push(M,A,E)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dr extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],p=new N,h=new N,m=[],v=[],x=[],f=[];for(let u=0;u<=n;u++){const S=[],w=u/n,M=a+w*o,A=e*Math.cos(M),E=Math.sqrt(e*e-A*A);let R=0;u===0&&a===0?R=.5/t:u===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const b=_/t,C=s+b*r;p.x=-E*Math.cos(C),p.y=A,p.z=E*Math.sin(C),v.push(p.x,p.y,p.z),h.copy(p).normalize(),x.push(h.x,h.y,h.z),f.push(b+R,1-w),S.push(c++)}d.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const w=d[u][S+1],M=d[u][S],A=d[u+1][S],E=d[u+1][S+1];(u!==0||a>0)&&m.push(w,M,E),(u!==n-1||l<Math.PI)&&m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uo extends co{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uo(e.radius,e.detail)}}class ar extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],p=[],h=new N,m=new N,v=new N;for(let x=0;x<=n;x++){const f=a+x/n*o;for(let u=0;u<=s;u++){const S=u/s*r;m.x=(e+t*Math.cos(f))*Math.cos(S),m.y=(e+t*Math.cos(f))*Math.sin(S),m.z=t*Math.sin(f),c.push(m.x,m.y,m.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),v.subVectors(m,h).normalize(),d.push(v.x,v.y,v.z),p.push(u/s),p.push(x/n)}}for(let x=1;x<=n;x++)for(let f=1;f<=s;f++){const u=(s+1)*x+f-1,S=(s+1)*(x-1)+f-1,w=(s+1)*(x-1)+f,M=(s+1)*x+f;l.push(u,S,M),l.push(S,w,M)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(tl(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function tl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const jh={clone:Hi,merge:Ft};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nd extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xn extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sd extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fc extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Xr=new et,nl=new N,il=new N;class rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(nl),il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(il),t.updateMatrixWorld(),Xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===as||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ks=new N,zs=new ui,pn=new N;class pc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ks,zs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ks,zs,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ks,zs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ks,zs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new N,sl=new Oe,rl=new Oe;class en extends pc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,sl,rl),t.subVectors(rl,sl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fo extends pc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ad extends rd{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class al extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class od extends fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ri=-90,Ci=1;class ld extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Ri,Ci,e,t);s.layers=this.layers,this.add(s);const r=new en(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const a=new en(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const o=new en(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const l=new en(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new en(Ri,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class cd extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mc{static{mc.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function ol(i,e,t,n){const s=hd(n);switch(t){case Jl:return i*e;case Qa:return i*e/s.components*s.byteLength;case ja:return i*e/s.components*s.byteLength;case hi:return i*e*2/s.components*s.byteLength;case eo:return i*e*2/s.components*s.byteLength;case Ql:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case to:return i*e*4/s.components*s.byteLength;case Ks:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:case pa:return Math.max(i,16)*Math.max(e,8)/4;case da:case fa:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ga:case va:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case tr:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Na:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ba:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nr:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hd(i){switch(i){case Zt:case ql:return{byteLength:1,components:1};case ss:case Kl:case Un:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case bn:case $a:case on:return{byteLength:4,components:1};case $l:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dd(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<p.length;m++){const v=p[h],x=p[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,p[h]=x)}p.length=h+1;for(let m=0,v=p.length;m<v;m++){const x=p[m];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Su=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:xd,batching_pars_vertex:Md,batching_vertex:yd,begin_vertex:Sd,beginnormal_vertex:bd,bsdfs:Ed,iridescence_fragment:wd,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Dd,color_pars_vertex:Id,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:Bd,displacementmap_vertex:kd,emissivemap_fragment:zd,emissivemap_pars_fragment:Hd,colorspace_fragment:Gd,colorspace_pars_fragment:Vd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:Yd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:su,envmap_vertex:Kd,fog_vertex:$d,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:eu,lights_lambert_fragment:tu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:du,lights_fragment_maps:uu,lights_fragment_end:fu,lightprobes_pars_fragment:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:Mu,map_particle_fragment:yu,map_particle_pars_fragment:Su,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Eu,morphinstance_vertex:wu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Lu,normal_pars_fragment:Du,normal_pars_vertex:Iu,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:ku,opaque_fragment:zu,packing:Hu,premultiplied_alpha_fragment:Gu,project_vertex:Vu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:$u,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:ju,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:of,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:hf,uv_vertex:df,worldpos_vertex:uf,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:vf,depth_vert:xf,depth_frag:Mf,distance_vert:yf,distance_frag:Sf,equirect_vert:bf,equirect_frag:Ef,linedashed_vert:wf,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Rf,meshlambert_vert:Cf,meshlambert_frag:Pf,meshmatcap_vert:Lf,meshmatcap_frag:Df,meshnormal_vert:If,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:kf,meshtoon_frag:zf,points_vert:Hf,points_frag:Gf,shadow_vert:Vf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:Yf},he={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},_n={basic:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new le(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ft([he.points,he.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ft([he.common,he.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ft([he.sprite,he.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Ft([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Ft([he.lights,he.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};_n.physical={uniforms:Ft([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Hs={r:0,b:0,g:0},qf=new et,_c=new De;_c.set(-1,0,0,0,1,0,0,0,1);function Kf(i,e,t,n,s,r){const a=new le(0);let o=s===!0?0:1,l,c,d=null,p=0,h=null;function m(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const M=S.backgroundBlurriness>0;w=e.get(w,M)}return w}function v(S){let w=!1;const M=m(S);M===null?f(a,o):M&&M.isColor&&(f(M,1),w=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,w){const M=m(w);M&&(M.isCubeTexture||M.mapping===lr)?(c===void 0&&(c=new Qe(new ds(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Hi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_c),c.material.toneMapped=ze.getTransfer(M.colorSpace)!==Je,(d!==M||p!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Qe(new us(2,2),new Wt({name:"BackgroundMaterial",uniforms:Hi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ze.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,w){S.getRGB(Hs,uc(i)),t.buffers.color.setClear(Hs.r,Hs.g,Hs.b,w,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:v,addToRenderList:x,dispose:u}}function $f(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(P,I,V,q,O){let Y=!1;const H=p(P,q,V,I);r!==H&&(r=H,c(r.object)),Y=m(P,q,V,O),Y&&v(P,q,V,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(P,I,V,q),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function p(P,I,V,q){const O=q.wireframe===!0;let Y=n[I.id];Y===void 0&&(Y={},n[I.id]=Y);const H=P.isInstancedMesh===!0?P.id:0;let J=Y[H];J===void 0&&(J={},Y[H]=J);let j=J[V.id];j===void 0&&(j={},J[V.id]=j);let de=j[O];return de===void 0&&(de=h(l()),j[O]=de),de}function h(P){const I=[],V=[],q=[];for(let O=0;O<t;O++)I[O]=0,V[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function m(P,I,V,q){const O=r.attributes,Y=I.attributes;let H=0;const J=V.getAttributes();for(const j in J)if(J[j].location>=0){const me=O[j];let Me=Y[j];if(Me===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Me=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Me=P.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==q}function v(P,I,V,q){const O={},Y=I.attributes;let H=0;const J=V.getAttributes();for(const j in J)if(J[j].location>=0){let me=Y[j];me===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));const Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),O[j]=Me,H++}r.attributes=O,r.attributesNum=H,r.index=q}function x(){const P=r.newAttributes;for(let I=0,V=P.length;I<V;I++)P[I]=0}function f(P){u(P,0)}function u(P,I){const V=r.newAttributes,q=r.enabledAttributes,O=r.attributeDivisors;V[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),O[P]!==I&&(i.vertexAttribDivisor(P,I),O[P]=I)}function S(){const P=r.newAttributes,I=r.enabledAttributes;for(let V=0,q=I.length;V<q;V++)I[V]!==P[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function w(P,I,V,q,O,Y,H){H===!0?i.vertexAttribIPointer(P,I,V,O,Y):i.vertexAttribPointer(P,I,V,q,O,Y)}function M(P,I,V,q){x();const O=q.attributes,Y=V.getAttributes(),H=I.defaultAttributeValues;for(const J in Y){const j=Y[J];if(j.location>=0){let de=O[J];if(de===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),de!==void 0){const me=de.normalized,Me=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const ct=Xe.buffer,Ye=Xe.type,Z=Xe.bytesPerElement,ie=Ye===i.INT||Ye===i.UNSIGNED_INT||de.gpuType===$a;if(de.isInterleavedBufferAttribute){const ee=de.data,Le=ee.stride,Ie=de.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<j.locationSize;Re++)u(j.location+Re,ee.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<j.locationSize;Re++)f(j.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Re=0;Re<j.locationSize;Re++)w(j.location+Re,Me/j.locationSize,Ye,me,Le*Z,(Ie+Me/j.locationSize*Re)*Z,ie)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)u(j.location+ee,de.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<j.locationSize;ee++)f(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ee=0;ee<j.locationSize;ee++)w(j.location+ee,Me/j.locationSize,Ye,me,Me*Z,Me/j.locationSize*ee*Z,ie)}}else if(H!==void 0){const me=H[J];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(j.location,me);break;case 3:i.vertexAttrib3fv(j.location,me);break;case 4:i.vertexAttrib4fv(j.location,me);break;default:i.vertexAttrib1fv(j.location,me)}}}}S()}function A(){b();for(const P in n){const I=n[P];for(const V in I){const q=I[V];for(const O in q){const Y=q[O];for(const H in Y)d(Y[H].object),delete Y[H];delete q[O]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const V in I){const q=I[V];for(const O in q){const Y=q[O];for(const H in Y)d(Y[H].object),delete Y[H];delete q[O]}}delete n[P.id]}function R(P){for(const I in n){const V=n[I];for(const q in V){const O=V[q];if(O[P.id]===void 0)continue;const Y=O[P.id];for(const H in Y)d(Y[H].object),delete Y[H];delete O[P.id]}}}function _(P){for(const I in n){const V=n[I],q=P.isInstancedMesh===!0?P.id:0,O=V[q];if(O!==void 0){for(const Y in O){const H=O[Y];for(const J in H)d(H[J].object),delete H[J];delete O[Y]}delete V[q],Object.keys(V).length===0&&delete n[I]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:f,disableUnusedAttributes:S}}function Zf(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let m=0;m<d;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==on&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Pe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:E}}function Qf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ii,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||s;return s=h,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,m){const v=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!s||v===null||v.length===0||r&&!f)r?d(null):c();else{const S=r?0:n,w=S*4;let M=u.clippingState||null;l.value=M,M=d(v,h,w,m);for(let A=0;A!==w;++A)M[A]=t[A];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,m,v){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,v!==!0||f===null){const u=m+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let w=0,M=m;w!==x;++w,M+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}const $n=4,ll=[.125,.215,.35,.446,.526,.582],ai=20,jf=256,Qi=new fo,cl=new le;let Yr=null,qr=0,Kr=0,$r=!1;const ep=new N;class hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ep}=r;Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,qr,Kr),this._renderer.xr.enabled=$r,e.scissorTest=!1,Pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Un,format:ln,colorSpace:ir,depthBuffer:!1},s=dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tp(r)),this._blurMaterial=ip(r,e,t),this._ggxMaterial=np(r,e,t)}return s}_compileMaterial(e){const t=new Qe(new mt,e);this._renderer.compile(t,Qi)}_sceneToCubeUV(e,t,n,s,r){const l=new en(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(cl),p.toneMapping=yn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new ds,new cr({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,f=x.material;let u=!1;const S=e.background;S?S.isColor&&(f.color.copy(S),e.background=null,u=!0):(f.color.copy(cl),u=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const A=this._cubeSize;Pi(s,M*A,w>2?A:0,A,A),p.setRenderTarget(s),u&&p.render(x,l),p.render(e,l)}p.toneMapping=m,p.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ci||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=0+c*1.25,m=p*h,{_lodMax:v}=this,x=this._sizeLods[n],f=3*x*(n>v-$n?n-v+$n:0),u=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,Pi(r,f,u,3*x,2*x),s.setRenderTarget(r),s.render(o,Qi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,Pi(e,f,u,3*x,2*x),s.setRenderTarget(e),s.render(o,Qi)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[s];p.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ai-1),x=r/v,f=isFinite(r)?1+Math.floor(d*x):ai;f>ai&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ai}`);const u=[];let S=0;for(let R=0;R<ai;++R){const _=R/x,b=Math.exp(-_*_/2);u.push(b),R===0?S+=b:R<f&&(S+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/S;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-n;const M=this._sizeLods[s],A=3*M*(s>w-$n?s-w+$n:0),E=4*(this._cubeSize-M);Pi(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(p,Qi)}}function tp(i){const e=[],t=[],n=[];let s=i;const r=i-$n+1+ll.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$n?l=ll[a-i+$n-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,v=6,x=3,f=2,u=1,S=new Float32Array(x*v*m),w=new Float32Array(f*v*m),M=new Float32Array(u*v*m);for(let E=0;E<m;E++){const R=E%3*2/3-1,_=E>2?0:-1,b=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];S.set(b,x*v*E),w.set(h,f*v*E);const C=[E,E,E,E,E,E];M.set(C,u*v*E)}const A=new mt;A.setAttribute("position",new pt(S,x)),A.setAttribute("uv",new pt(w,f)),A.setAttribute("faceIndex",new pt(M,u)),n.push(new Qe(A,null)),s>$n&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function dl(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function np(i,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ur(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ip(i,e,t){const n=new Float32Array(ai),s=new N(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ul(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function fl(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ur(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class vc extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ds(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Dn});r.uniforms.tEquirect.value=t;const a=new Qe(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=Nt),new ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function sp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===vr||m===xr)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const x=new vc(v.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,v=m===vr||m===xr,x=m===ci||m===ki;if(v||x){let f=t.get(h);const u=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new hl(i)),f=v?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const S=h.image;return v&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new hl(i)),f=v?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",d),f.texture):null}}}return h}function o(h,m){return m===vr?h.mapping=ci:m===xr&&(h.mapping=ki),h}function l(h){let m=0;const v=6;for(let x=0;x<v;x++)h[x]!==void 0&&m++;return m===v}function c(h){const m=h.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(h){const m=h.target;m.removeEventListener("dispose",d);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function rp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ui("WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,e,t,n){const s={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(p){const h=[],m=p.index,v=p.attributes.position;let x=0;if(v===void 0)return;if(m!==null){const S=m.array;x=m.version;for(let w=0,M=S.length;w<M;w+=3){const A=S[w+0],E=S[w+1],R=S[w+2];h.push(A,E,E,R,R,A)}}else{const S=v.array;x=v.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const A=w+0,E=w+1,R=w+2;h.push(A,E,E,R,R,A)}}const f=new(v.count>=65535?rc:sc)(h,1);f.version=x;const u=r.get(p);u&&e.remove(u),r.set(p,f)}function d(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function op(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*a),t.update(h,n,1)}function c(p,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,p*a,m),t.update(h,n,m))}function d(p,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,m);let x=0;for(let f=0;f<m;f++)x+=h[f];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cp(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var m=C;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),f===!0&&(M=3);let A=o.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*E*4*p),_=new tc(R,A,E,p);_.type=on,_.needsUpdate=!0;const b=M*4;for(let P=0;P<p;P++){const I=u[P],V=S[P],q=w[P],O=A*E*4*P;for(let Y=0;Y<I.count;Y++){const H=Y*b;v===!0&&(s.fromBufferAttribute(I,Y),R[O+H+0]=s.x,R[O+H+1]=s.y,R[O+H+2]=s.z,R[O+H+3]=0),x===!0&&(s.fromBufferAttribute(V,Y),R[O+H+4]=s.x,R[O+H+5]=s.y,R[O+H+6]=s.z,R[O+H+7]=0),f===!0&&(s.fromBufferAttribute(q,Y),R[O+H+8]=s.x,R[O+H+9]=s.y,R[O+H+10]=s.z,R[O+H+11]=q.itemSize===4?s.w:1)}}h={count:p,texture:_,size:new Oe(A,E)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function hp(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return h}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const dp={[zl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Xl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function up(i,e,t,n,s,r){const a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new zi(e,t):void 0}),o=new Sn(e,t,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new mt;l.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $e([0,2,0,0,2,0],2));const c=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Qe(l,c),p=new fo(-1,1,1,-1,0,1);let h=null,m=null,v=!1,x,f=null,u=[],S=!1;this.setSize=function(w,M){a.setSize(w,M),o.setSize(w,M);for(let A=0;A<u.length;A++){const E=u[A];E.setSize&&E.setSize(w,M)}},this.setEffects=function(w){u=w,S=u.length>0&&u[0].isRenderPass===!0;const M=a.width,A=a.height;for(let E=0;E<u.length;E++){const R=u[E];R.setSize&&R.setSize(M,A)}},this.begin=function(w,M){if(v||w.toneMapping===yn&&u.length===0)return!1;if(f=M,M!==null){const A=M.width,E=M.height;(a.width!==A||a.height!==E)&&this.setSize(A,E)}return S===!1&&w.setRenderTarget(a),x=w.toneMapping,w.toneMapping=yn,!0},this.hasRenderPass=function(){return S},this.end=function(w,M){w.toneMapping=x,v=!0;let A=a,E=o;for(let R=0;R<u.length;R++){const _=u[R];if(_.enabled!==!1&&(_.render(w,E,A,M),_.needsSwap!==!1)){const b=A;A=E,E=b}}if(h!==w.outputColorSpace||m!==w.toneMapping){h=w.outputColorSpace,m=w.toneMapping,c.defines={},ze.getTransfer(h)===Je&&(c.defines.SRGB_TRANSFER="");const R=dp[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(f),w.render(d,p),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const xc=new Bt,Wa=new zi(1,1),Mc=new tc,yc=new Ih,Sc=new hc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function Wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pl[s];if(r===void 0&&(r=new Float32Array(s),pl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fr(i,e){let t=ml[e];t===void 0&&(t=new Int32Array(e),ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function _p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;vl.set(n),i.uniformMatrix2fv(this.addr,!1,vl),Et(t,n)}}function vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),Et(t,n)}}function xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;gl.set(n),i.uniformMatrix4fv(this.addr,!1,gl),Et(t,n)}}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function Ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Rp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wa.compareFunction=t.isReversedDepthBuffer()?io:no,r=Wa):r=xc,t.setTexture2D(e||r,s)}function Cp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yc,s)}function Pp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sc,s)}function Lp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mc,s)}function Dp(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return bp;case 5125:return Ep;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Ip(i,e){i.uniform1fv(this.addr,e)}function Up(i,e){const t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Np(i,e){const t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Fp(i,e){const t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Op(i,e){const t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bp(i,e){const t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kp(i,e){const t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zp(i,e){i.uniform1iv(this.addr,e)}function Hp(i,e){i.uniform2iv(this.addr,e)}function Gp(i,e){i.uniform3iv(this.addr,e)}function Vp(i,e){i.uniform4iv(this.addr,e)}function Wp(i,e){i.uniform1uiv(this.addr,e)}function Xp(i,e){i.uniform2uiv(this.addr,e)}function Yp(i,e){i.uniform3uiv(this.addr,e)}function qp(i,e){i.uniform4uiv(this.addr,e)}function Kp(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wa:a=xc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function $p(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yc,r[a])}function Zp(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sc,r[a])}function Jp(i,e,t){const n=this.cache,s=e.length,r=fr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mc,r[a])}function Qp(i){switch(i){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return Yp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dp(t.type)}}class em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qp(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function xl(i,e){i.seq.push(e),i.map[e.id]=e}function nm(i,e,t){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),a=Zr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xl(t,c===void 0?new jp(o,i,e):new em(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new tm(o),xl(t,p)),t=p}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ml(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const im=37297;let sm=0;function rm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yl=new De;function am(i){ze._getMatrix(yl,ze.workingColorSpace,i);const e=`mat3( ${yl.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case sr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rm(i.getShaderSource(e),o)}else return r}function om(i,e){const t=am(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lm={[zl]:"Linear",[Hl]:"Reinhard",[Gl]:"Cineon",[Ka]:"ACESFilmic",[Wl]:"AgX",[Xl]:"Neutral",[Vl]:"Custom"};function cm(i,e){const t=lm[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gs=new N;function hm(){ze.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),e=Gs.y.toFixed(4),t=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ns(i){return i!==""}function bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function El(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(pm,gm)}const mm=new Map;function gm(i,e){let t=Fe[e];if(t===void 0){const n=mm.get(e);if(n!==void 0)t=Fe[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xa(t)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(i){return i.replace(_m,vm)}function vm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xm={[qs]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function Mm(i){return xm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ym={[ci]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function Sm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ym[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const bm={[ki]:"ENVMAP_MODE_REFRACTION"};function Em(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wm={[kl]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function Tm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wm[i.combine]||"ENVMAP_BLENDING_NONE"}function Am(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mm(t),c=Sm(t),d=Em(t),p=Tm(t),h=Am(t),m=dm(t),v=um(r),x=s.createProgram();let f,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ns).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ns).join(`
`),u.length>0&&(u+=`
`)):(f=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),u=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==yn?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=Xa(a),a=bl(a,t),a=El(a,t),o=Xa(o),o=bl(o,t),o=El(o,t),a=wl(a),o=wl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=S+f+a,M=S+u+o,A=Ml(s,s.VERTEX_SHADER,w),E=Ml(s,s.FRAGMENT_SHADER,M);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(E)||"",O=I.trim(),Y=V.trim(),H=q.trim();let J=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const de=Sl(s,A,"vertex"),me=Sl(s,E,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+de+`
`+me)}else O!==""?Pe("WebGLProgram: Program Info Log:",O):(Y===""||H==="")&&(j=!1);j&&(P.diagnostics={runnable:J,programLog:O,vertexShader:{log:Y,prefix:f},fragmentShader:{log:H,prefix:u}})}s.deleteShader(A),s.deleteShader(E),_=new Qs(s,x),b=fm(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,im)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Cm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lm(e),t.set(e,n)),n}}class Lm{constructor(e){this.id=Cm++,this.code=e,this.usedTimes=0}}function Dm(i){return i===hi||i===tr||i===nr}function Im(i,e,t,n,s,r){const a=new nc,o=new Pm,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,b,C,P,I,V){const q=P.fog,O=I.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||Y,H),j=J&&J.mapping===lr?J.image.height:null,de=m[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const me=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Me=me!==void 0?me.length:0;let Xe=0;O.morphAttributes.position!==void 0&&(Xe=1),O.morphAttributes.normal!==void 0&&(Xe=2),O.morphAttributes.color!==void 0&&(Xe=3);let ct,Ye,Z,ie;if(de){const ye=_n[de];ct=ye.vertexShader,Ye=ye.fragmentShader}else{ct=_.vertexShader,Ye=_.fragmentShader;const ye=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,ye,dt),Z=ye.id,ie=dt.id}const ee=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,gt=!!_.map,ke=!!_.matcap,tt=!!J,qe=!!_.aoMap,Ge=!!_.lightMap,xt=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,wt=!!_.displacementMap,Ct=!!_.emissiveMap,ht=!!_.metalnessMap,Mt=!!_.roughnessMap,D=_.anisotropy>0,zt=_.clearcoat>0,Ze=_.dispersion>0,T=_.iridescence>0,g=_.sheen>0,F=_.transmission>0,z=D&&!!_.anisotropyMap,W=zt&&!!_.clearcoatMap,te=zt&&!!_.clearcoatNormalMap,se=zt&&!!_.clearcoatRoughnessMap,X=T&&!!_.iridescenceMap,$=T&&!!_.iridescenceThicknessMap,re=g&&!!_.sheenColorMap,Ee=g&&!!_.sheenRoughnessMap,ce=!!_.specularMap,ae=!!_.specularColorMap,Ae=!!_.specularIntensityMap,Ce=F&&!!_.transmissionMap,Ue=F&&!!_.thicknessMap,L=!!_.gradientMap,ne=!!_.alphaMap,K=_.alphaTest>0,oe=!!_.alphaHash,pe=!!_.extensions;let Q=yn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=i.toneMapping);const be={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:ct,fragmentShader:Ye,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:ke,envMap:tt,envMapMode:tt&&J.mapping,envMapCubeUVHeight:j,aoMap:qe,lightMap:Ge,bumpMap:xt,normalMap:St,displacementMap:wt,emissiveMap:Ct,normalMapObjectSpace:St&&_.normalMapType===gh,normalMapTangentSpace:St&&_.normalMapType===Ha,packedNormalMap:St&&_.normalMapType===Ha&&Dm(_.normalMap.format),metalnessMap:ht,roughnessMap:Mt,anisotropy:D,anisotropyMap:z,clearcoat:zt,clearcoatMap:W,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:Ze,iridescence:T,iridescenceMap:X,iridescenceThicknessMap:$,sheen:g,sheenColorMap:re,sheenRoughnessMap:Ee,specularMap:ce,specularColorMap:ae,specularIntensityMap:Ae,transmission:F,transmissionMap:Ce,thicknessMap:Ue,gradientMap:L,opaque:_.transparent===!1&&_.blending===Ii&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:K,alphaHash:oe,combine:_.combine,mapUv:gt&&v(_.map.channel),aoMapUv:qe&&v(_.aoMap.channel),lightMapUv:Ge&&v(_.lightMap.channel),bumpMapUv:xt&&v(_.bumpMap.channel),normalMapUv:St&&v(_.normalMap.channel),displacementMapUv:wt&&v(_.displacementMap.channel),emissiveMapUv:Ct&&v(_.emissiveMap.channel),metalnessMapUv:ht&&v(_.metalnessMap.channel),roughnessMapUv:Mt&&v(_.roughnessMap.channel),anisotropyMapUv:z&&v(_.anisotropyMap.channel),clearcoatMapUv:W&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(_.sheenRoughnessMap.channel),specularMapUv:ce&&v(_.specularMap.channel),specularColorMapUv:ae&&v(_.specularColorMap.channel),specularIntensityMapUv:Ae&&v(_.specularIntensityMap.channel),transmissionMapUv:Ce&&v(_.transmissionMap.channel),thicknessMapUv:Ue&&v(_.thicknessMap.channel),alphaMapUv:ne&&v(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(St||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(gt||ne),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Xe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function f(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(u(b,_),S(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function u(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const b=m[_.type];let C;if(b){const P=_n[b];C=jh.clone(P.uniforms)}else C=_.uniforms;return C}function M(_,b){let C=d.get(b);return C!==void 0?++C.usedTimes:(C=new Rm(i,b,_,s),c.push(C),d.set(b,C)),C}function A(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:w,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:R}}function Um(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,v,x,f,u){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:m,material:v,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:f,group:u},i[e]=S):(S.id=h.id,S.object=h,S.geometry=m,S.material=v,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=f,S.group=u),e++,S}function l(h,m,v,x,f,u){const S=o(h,m,v,x,f,u);v.transmission>0?n.push(S):v.transparent===!0?s.push(S):t.push(S)}function c(h,m,v,x,f,u){const S=o(h,m,v,x,f,u);v.transmission>0?n.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function d(h,m,v){t.length>1&&t.sort(h||Nm),n.length>1&&n.sort(m||Al),s.length>1&&s.sort(m||Al),v&&(t.reverse(),n.reverse(),s.reverse())}function p(){for(let h=e,m=i.length;h<m;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:d}}function Fm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rl,i.set(n,[a])):s>=r.length?(a=new Rl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new le};break;case"SpotLight":t={position:new N,direction:new N,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let km=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hm(i){const e=new Om,t=Bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new et,a=new et;function o(c){let d=0,p=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,x=0,f=0,u=0,S=0,w=0,M=0,A=0,E=0,R=0;c.sort(zm);for(let b=0,C=c.length;b<C;b++){const P=c[b],I=P.color,V=P.intensity,q=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hi?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=I.r*V,p+=I.g*V,h+=I.b*V;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],V);R++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=P.shadow.matrix,S++}n.directional[m]=Y,m++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(I).multiplyScalar(V),Y.distance=q,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[x]=Y;const H=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,H.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=H.matrix,P.castShadow){const J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=O,M++}x++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(I).multiplyScalar(V),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=Y,f++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const H=P.shadow,J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=P.shadow.matrix,w++}n.point[v]=Y,v++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(V),Y.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[u]=Y,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==m||_.pointLength!==v||_.spotLength!==x||_.rectAreaLength!==f||_.hemiLength!==u||_.numDirectionalShadows!==S||_.numPointShadows!==w||_.numSpotShadows!==M||_.numSpotMaps!==A||_.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,_.directionalLength=m,_.pointLength=v,_.spotLength=x,_.rectAreaLength=f,_.hemiLength=u,_.numDirectionalShadows=S,_.numPointShadows=w,_.numSpotShadows=M,_.numSpotMaps=A,_.numLightProbes=R,n.version=km++)}function l(c,d){let p=0,h=0,m=0,v=0,x=0;const f=d.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const w=c[u];if(w.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),p++}else if(w.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),m++}else if(w.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(f),h++}else if(w.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function Cl(i){const e=new Hm(i),t=[],n=[],s=[];function r(h){p.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Cl(i),e.set(s,[o])):r>=a.length?(o=new Cl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xm=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Ym=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Pl=new et,ji=new N,Jr=new N;function qm(i,e,t){let n=new ao;const s=new Oe,r=new Oe,a=new lt,o=new id,l=new sd,c={},d=t.maxTextureSize,p={[Jn]:Ot,[Ot]:Jn,[vn]:vn},h=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new mt;v.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(v,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let u=this.type;this.render=function(E,R,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===qc&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qs);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Dn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=u!==this.type;V&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=E.length;q<O;q++){const Y=E[q],H=Y.shadow;if(H===void 0){Pe("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=j,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ts){if(Y.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Sn(s.x,s.y,{format:hi,type:Un,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new zi(s.x,s.y,on),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Nn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt}else Y.isPointLight?(H.map=new vc(s.x),H.map.depthTexture=new Jh(s.x,bn)):(H.map=new Sn(s.x,s.y),H.map.depthTexture=new zi(s.x,s.y,bn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Nn,this.type===qs?(H.map.depthTexture.compareFunction=j?io:no,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt);H.camera.updateProjectionMatrix()}const de=H.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<de;me++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,me),i.clear();else{me===0&&(i.setRenderTarget(H.map),i.clear());const Me=H.getViewport(me);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),I.viewport(a)}if(Y.isPointLight){const Me=H.camera,Xe=H.matrix,ct=Y.distance||Me.far;ct!==Me.far&&(Me.far=ct,Me.updateProjectionMatrix()),ji.setFromMatrixPosition(Y.matrixWorld),Me.position.copy(ji),Jr.copy(Me.position),Jr.add(Xm[me]),Me.up.copy(Ym[me]),Me.lookAt(Jr),Me.updateMatrixWorld(),Xe.makeTranslation(-ji.x,-ji.y,-ji.z),Pl.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Pl,Me.coordinateSystem,Me.reversedDepth)}else H.updateMatrices(Y);n=H.getFrustum(),M(R,_,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===ts&&S(H,_),H.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(b,C,P)};function S(E,R){const _=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Sn(s.x,s.y,{format:hi,type:Un})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,m,x,null)}function w(E,R,_,b){let C=null;const P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=C.uuid,V=R.uuid;let q=c[I];q===void 0&&(q={},c[I]=q);let O=q[V];O===void 0&&(O=C.clone(),q[V]=O,R.addEventListener("dispose",A)),C=O}if(C.visible=R.visible,C.wireframe=R.wireframe,b===ts?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:p[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=i.properties.get(C);I.light=_}return C}function M(E,R,_,b,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ts)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const V=e.update(E),q=E.material;if(Array.isArray(q)){const O=V.groups;for(let Y=0,H=O.length;Y<H;Y++){const J=O[Y],j=q[J.materialIndex];if(j&&j.visible){const de=w(E,j,b,C);E.onBeforeShadow(i,E,R,_,V,de,J),i.renderBufferDirect(_,null,V,de,E,J),E.onAfterShadow(i,E,R,_,V,de,J)}}}else if(q.visible){const O=w(E,q,b,C);E.onBeforeShadow(i,E,R,_,V,O,null),i.renderBufferDirect(_,null,V,O,E,null),E.onAfterShadow(i,E,R,_,V,O,null)}}const I=E.children;for(let V=0,q=I.length;V<q;V++)M(I[V],R,_,b,C)}function A(E){E.target.removeEventListener("dispose",A);for(const _ in c){const b=c[_],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Km(i,e){function t(){let L=!1;const ne=new lt;let K=null;const oe=new lt(0,0,0,0);return{setMask:function(pe){K!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){L=pe},setClear:function(pe,Q,be,ye,dt){dt===!0&&(pe*=ye,Q*=ye,be*=ye),ne.set(pe,Q,be,ye),oe.equals(ne)===!1&&(i.clearColor(pe,Q,be,ye),oe.copy(ne))},reset:function(){L=!1,K=null,oe.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,K=null,oe=null,pe=null;return{setReversed:function(Q){if(ne!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ne=Q;const ye=pe;pe=null,this.setClear(ye)}},getReversed:function(){return ne},setTest:function(Q){Q?ee(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(Q){K!==Q&&!L&&(i.depthMask(Q),K=Q)},setFunc:function(Q){if(ne&&(Q=Th[Q]),oe!==Q){switch(Q){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Q}},setLocked:function(Q){L=Q},setClear:function(Q){pe!==Q&&(pe=Q,ne&&(Q=1-Q),i.clearDepth(Q))},reset:function(){L=!1,K=null,oe=null,pe=null,ne=!1}}}function s(){let L=!1,ne=null,K=null,oe=null,pe=null,Q=null,be=null,ye=null,dt=null;return{setTest:function(st){L||(st?ee(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(st){ne!==st&&!L&&(i.stencilMask(st),ne=st)},setFunc:function(st,dn,un){(K!==st||oe!==dn||pe!==un)&&(i.stencilFunc(st,dn,un),K=st,oe=dn,pe=un)},setOp:function(st,dn,un){(Q!==st||be!==dn||ye!==un)&&(i.stencilOp(st,dn,un),Q=st,be=dn,ye=un)},setLocked:function(st){L=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){L=!1,ne=null,K=null,oe=null,pe=null,Q=null,be=null,ye=null,dt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},p={},h={},m=new WeakMap,v=[],x=null,f=!1,u=null,S=null,w=null,M=null,A=null,E=null,R=null,_=new le(0,0,0),b=0,C=!1,P=null,I=null,V=null,q=null,O=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=J>=2);let de=null,me={};const Me=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),ct=new lt().fromArray(Me),Ye=new lt().fromArray(Xe);function Z(L,ne,K,oe){const pe=new Uint8Array(4),Q=i.createTexture();i.bindTexture(L,Q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<K;be++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ne+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Q}const ie={};ie[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Bi),xt(!1),St(Ro),ee(i.CULL_FACE),qe(Dn);function ee(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Le(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Ie(L,ne){return h[L]!==ne?(i.bindFramebuffer(L,ne),h[L]=ne,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Re(L,ne){let K=v,oe=!1;if(L){K=m.get(ne),K===void 0&&(K=[],m.set(ne,K));const pe=L.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,be=pe.length;Q<be;Q++)K[Q]=i.COLOR_ATTACHMENT0+Q;K.length=pe.length,oe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,oe=!0);oe&&i.drawBuffers(K)}function gt(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const ke={[si]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Zc]:i.FUNC_REVERSE_SUBTRACT};ke[Jc]=i.MIN,ke[Qc]=i.MAX;const tt={[jc]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(L,ne,K,oe,pe,Q,be,ye,dt,st){if(L===Dn){f===!0&&(Le(i.BLEND),f=!1);return}if(f===!1&&(ee(i.BLEND),f=!0),L!==Kc){if(L!==u||st!==C){if((S!==si||A!==si)&&(i.blendEquation(i.FUNC_ADD),S=si,A=si),st)switch(L){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Co:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Po:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}w=null,M=null,E=null,R=null,_.set(0,0,0),b=0,u=L,C=st}return}pe=pe||ne,Q=Q||K,be=be||oe,(ne!==S||pe!==A)&&(i.blendEquationSeparate(ke[ne],ke[pe]),S=ne,A=pe),(K!==w||oe!==M||Q!==E||be!==R)&&(i.blendFuncSeparate(tt[K],tt[oe],tt[Q],tt[be]),w=K,M=oe,E=Q,R=be),(ye.equals(_)===!1||dt!==b)&&(i.blendColor(ye.r,ye.g,ye.b,dt),_.copy(ye),b=dt),u=L,C=!1}function Ge(L,ne){L.side===vn?Le(i.CULL_FACE):ee(i.CULL_FACE);let K=L.side===Ot;ne&&(K=!K),xt(K),L.blending===Ii&&L.transparent===!1?qe(Dn):qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const oe=L.stencilWrite;o.setTest(oe),oe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function St(L){L!==Xc?(ee(i.CULL_FACE),L!==I&&(L===Ro?i.cullFace(i.BACK):L===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),I=L}function wt(L){L!==V&&(H&&i.lineWidth(L),V=L)}function Ct(L,ne,K){L?(ee(i.POLYGON_OFFSET_FILL),(q!==ne||O!==K)&&(q=ne,O=K,a.getReversed()&&(ne=-ne),i.polygonOffset(ne,K))):Le(i.POLYGON_OFFSET_FILL)}function ht(L){L?ee(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function Mt(L){L===void 0&&(L=i.TEXTURE0+Y-1),de!==L&&(i.activeTexture(L),de=L)}function D(L,ne,K){K===void 0&&(de===null?K=i.TEXTURE0+Y-1:K=de);let oe=me[K];oe===void 0&&(oe={type:void 0,texture:void 0},me[K]=oe),(oe.type!==L||oe.texture!==ne)&&(de!==K&&(i.activeTexture(K),de=K),i.bindTexture(L,ne||ie[L]),oe.type=L,oe.texture=ne)}function zt(){const L=me[de];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function g(){try{i.texSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function te(){try{i.texStorage2D(...arguments)}catch(L){We("WebGLState:",L)}}function se(){try{i.texStorage3D(...arguments)}catch(L){We("WebGLState:",L)}}function X(){try{i.texImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function $(){try{i.texImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function re(L){return p[L]!==void 0?p[L]:i.getParameter(L)}function Ee(L,ne){p[L]!==ne&&(i.pixelStorei(L,ne),p[L]=ne)}function ce(L){ct.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function ae(L){Ye.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ye.copy(L))}function Ae(L,ne){let K=c.get(ne);K===void 0&&(K=new WeakMap,c.set(ne,K));let oe=K.get(L);oe===void 0&&(oe=i.getUniformBlockIndex(ne,L.name),K.set(L,oe))}function Ce(L,ne){const oe=c.get(ne).get(L);l.get(ne)!==oe&&(i.uniformBlockBinding(ne,oe,L.__bindingPointIndex),l.set(ne,oe))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},de=null,me={},h={},m=new WeakMap,v=[],x=null,f=!1,u=null,S=null,w=null,M=null,A=null,E=null,R=null,_=new le(0,0,0),b=0,C=!1,P=null,I=null,V=null,q=null,O=null,ct.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Le,bindFramebuffer:Ie,drawBuffers:Re,useProgram:gt,setBlending:qe,setMaterial:Ge,setFlipSided:xt,setCullFace:St,setLineWidth:wt,setPolygonOffset:Ct,setScissorTest:ht,activeTexture:Mt,bindTexture:D,unbindTexture:zt,compressedTexImage2D:Ze,compressedTexImage3D:T,texImage2D:X,texImage3D:$,pixelStorei:Ee,getParameter:re,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:te,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:ce,viewport:ae,reset:Ue}}function $m(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,d=new WeakMap,p=new Set;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return v?new OffscreenCanvas(T,g):rr("canvas")}function f(T,g,F){let z=1;const W=Ze(T);if((W.width>F||W.height>F)&&(z=F/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const te=Math.floor(z*W.width),se=Math.floor(z*W.height);h===void 0&&(h=x(te,se));const X=g?x(te,se):h;return X.width=te,X.height=se,X.getContext("2d").drawImage(T,0,0,te,se),Pe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+te+"x"+se+")."),X}else return"data"in T&&Pe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function u(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,g,F,z,W,te=!1){if(T!==null){if(i[T]!==void 0)return i[T];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&se&&(X=se.R16_EXT),F===i.SHORT&&se&&(X=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),g===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&se&&(X=se.RG16_EXT),F===i.SHORT&&se&&(X=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&se&&(X=se.RGB16_EXT),F===i.SHORT&&se&&(X=se.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){const $=te?sr:ze.getTransfer(W);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=$===Je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&se&&(X=se.RGBA16_EXT),F===i.SHORT&&se&&(X=se.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(T,g){let F;return T?g===null||g===bn||g===rs?F=i.DEPTH24_STENCIL8:g===on?F=i.DEPTH32F_STENCIL8:g===ss&&(F=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bn||g===rs?F=i.DEPTH_COMPONENT24:g===on?F=i.DEPTH_COMPONENT32F:g===ss&&(F=i.DEPTH_COMPONENT16),F}function E(T,g){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pt&&T.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){const g=T.target;g.removeEventListener("dispose",R),b(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function _(T){const g=T.target;g.removeEventListener("dispose",_),P(g)}function b(T){const g=n.get(T);if(g.__webglInit===void 0)return;const F=T.source,z=m.get(F);if(z){const W=z[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(T),Object.keys(z).length===0&&m.delete(F)}n.remove(T)}function C(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const F=T.source,z=m.get(F);delete z[g.__cacheKey],a.memory.textures--}function P(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let W=0;W<g.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[z][W]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=T.textures;for(let z=0,W=F.length;z<W;z++){const te=n.get(F[z]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(F[z])}n.remove(T)}let I=0;function V(){I=0}function q(){return I}function O(T){I=T}function Y(){const T=I;return T>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function H(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function J(T,g){const F=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const z=T.image;if(z===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function j(T,g){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Le(F,T,g);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function de(T,g){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Le(F,T,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function me(T,g){const F=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Ie(F,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const Me={[ca]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},Xe={[Pt]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ct={[_h]:i.NEVER,[Sh]:i.ALWAYS,[vh]:i.LESS,[no]:i.LEQUAL,[xh]:i.EQUAL,[io]:i.GEQUAL,[Mh]:i.GREATER,[yh]:i.NOTEQUAL};function Ye(T,g){if(g.type===on&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===Mr||g.magFilter===vs||g.magFilter===oi||g.minFilter===Nt||g.minFilter===Mr||g.minFilter===vs||g.minFilter===oi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Me[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Me[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Me[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Xe[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ct[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==vs&&g.minFilter!==oi||g.type===on&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Z(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));const z=g.source;let W=m.get(z);W===void 0&&(W={},m.set(z,W));const te=H(g);if(te!==T.__cacheKey){W[te]===void 0&&(W[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[te].usedTimes++;const se=W[T.__cacheKey];se!==void 0&&(W[T.__cacheKey].usedTimes--,se.usedTimes===0&&C(g)),T.__cacheKey=te,T.__webglTexture=W[te].texture}return F}function ie(T,g,F){return Math.floor(Math.floor(T/F)/g)}function ee(T,g,F,z){const te=T.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,z,g.data);else{te.sort((Ee,ce)=>Ee.start-ce.start);let se=0;for(let Ee=1;Ee<te.length;Ee++){const ce=te[se],ae=te[Ee],Ae=ce.start+ce.count,Ce=ie(ae.start,g.width,4),Ue=ie(ce.start,g.width,4);ae.start<=Ae+1&&Ce===Ue&&ie(ae.start+ae.count-1,g.width,4)===Ce?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,te[se]=ae)}te.length=se+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,ce=te.length;Ee<ce;Ee++){const ae=te[Ee],Ae=Math.floor(ae.start/4),Ce=Math.ceil(ae.count/4),Ue=Ae%g.width,L=Math.floor(Ae/g.width),ne=Ce,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ue,L,ne,K,F,z,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function Le(T,g,F){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);const W=Z(T,g),te=g.source;t.bindTexture(z,T.__webglTexture,i.TEXTURE0+F);const se=n.get(te);if(te.version!==se.__version||W===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const K=ze.getPrimaries(ze.workingColorSpace),oe=g.colorSpace===Kn?null:ze.getPrimaries(g.colorSpace),pe=g.colorSpace===Kn||K===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let $=f(g.image,!1,s.maxTextureSize);$=zt(g,$);const re=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let ce=M(g.internalFormat,re,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Ye(z,g);let ae;const Ae=g.mipmaps,Ce=g.isVideoTexture!==!0,Ue=se.__version===void 0||W===!0,L=te.dataReady,ne=E(g,$);if(g.isDepthTexture)ce=A(g.format===li,g.type),Ue&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,ce,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ce,$.width,$.height,0,re,Ee,null));else if(g.isDataTexture)if(Ae.length>0){Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Ae[0].width,Ae[0].height);for(let K=0,oe=Ae.length;K<oe;K++)ae=Ae[K],Ce?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,re,Ee,ae.data):t.texImage2D(i.TEXTURE_2D,K,ce,ae.width,ae.height,0,re,Ee,ae.data);g.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ce,$.width,$.height),L&&ee(g,$,re,Ee)):t.texImage2D(i.TEXTURE_2D,0,ce,$.width,$.height,0,re,Ee,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ce,Ae[0].width,Ae[0].height,$.depth);for(let K=0,oe=Ae.length;K<oe;K++)if(ae=Ae[K],g.format!==ln)if(re!==null)if(Ce){if(L)if(g.layerUpdates.size>0){const pe=ol(ae.width,ae.height,g.format,g.type);for(const Q of g.layerUpdates){const be=ae.data.subarray(Q*pe/ae.data.BYTES_PER_ELEMENT,(Q+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Q,ae.width,ae.height,1,re,be)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,$.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ce,ae.width,ae.height,$.depth,0,ae.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,$.depth,re,Ee,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ce,ae.width,ae.height,$.depth,0,re,Ee,ae.data)}else{Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Ae[0].width,Ae[0].height);for(let K=0,oe=Ae.length;K<oe;K++)ae=Ae[K],g.format!==ln?re!==null?Ce?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ce,ae.width,ae.height,0,ae.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,re,Ee,ae.data):t.texImage2D(i.TEXTURE_2D,K,ce,ae.width,ae.height,0,re,Ee,ae.data)}else if(g.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ce,$.width,$.height,$.depth),L)if(g.layerUpdates.size>0){const K=ol($.width,$.height,g.format,g.type);for(const oe of g.layerUpdates){const pe=$.data.subarray(oe*K/$.data.BYTES_PER_ELEMENT,(oe+1)*K/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,$.width,$.height,1,re,Ee,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,re,Ee,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,$.width,$.height,$.depth,0,re,Ee,$.data);else if(g.isData3DTexture)Ce?(Ue&&t.texStorage3D(i.TEXTURE_3D,ne,ce,$.width,$.height,$.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,re,Ee,$.data)):t.texImage3D(i.TEXTURE_3D,0,ce,$.width,$.height,$.depth,0,re,Ee,$.data);else if(g.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(i.TEXTURE_2D,ne,ce,$.width,$.height);else{let K=$.width,oe=$.height;for(let pe=0;pe<ne;pe++)t.texImage2D(i.TEXTURE_2D,pe,ce,K,oe,0,re,Ee,null),K>>=1,oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),$.parentNode!==K){K.appendChild($),p.add(g),K.onpaint=oe=>{const pe=oe.changedElements;for(const Q of p)pe.includes(Q.image)&&(Q.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const pe=i.RGBA,Q=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,Q,be,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ce&&Ue){const K=Ze(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ne,ce,K.width,K.height)}for(let K=0,oe=Ae.length;K<oe;K++)ae=Ae[K],Ce?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,re,Ee,ae):t.texImage2D(i.TEXTURE_2D,K,ce,re,Ee,ae);g.generateMipmaps=!1}else if(Ce){if(Ue){const K=Ze($);t.texStorage2D(i.TEXTURE_2D,ne,ce,K.width,K.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Ee,$)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,Ee,$);u(g)&&S(z),se.__version=te.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ie(T,g,F){if(g.image.length!==6)return;const z=Z(T,g),W=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const te=n.get(W);if(W.version!==te.__version||z===!0){t.activeTexture(i.TEXTURE0+F);const se=ze.getPrimaries(ze.workingColorSpace),X=g.colorSpace===Kn?null:ze.getPrimaries(g.colorSpace),$=g.colorSpace===Kn||se===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const re=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!re&&!Ee?ce[Q]=f(g.image[Q],!0,s.maxCubemapSize):ce[Q]=Ee?g.image[Q].image:g.image[Q],ce[Q]=zt(g,ce[Q]);const ae=ce[0],Ae=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type),Ue=M(g.internalFormat,Ae,Ce,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,ne=te.__version===void 0||z===!0,K=W.dataReady;let oe=E(g,ae);Ye(i.TEXTURE_CUBE_MAP,g);let pe;if(re){L&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ue,ae.width,ae.height);for(let Q=0;Q<6;Q++){pe=ce[Q].mipmaps;for(let be=0;be<pe.length;be++){const ye=pe[be];g.format!==ln?Ae!==null?L?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Ue,ye.width,ye.height,0,ye.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,ye.width,ye.height,Ae,Ce,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Ue,ye.width,ye.height,0,Ae,Ce,ye.data)}}}else{if(pe=g.mipmaps,L&&ne){pe.length>0&&oe++;const Q=Ze(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ue,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ee){L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,Ae,Ce,ce[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,ce[Q].width,ce[Q].height,0,Ae,Ce,ce[Q].data);for(let be=0;be<pe.length;be++){const dt=pe[be].image[Q].image;L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,dt.width,dt.height,Ae,Ce,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Ue,dt.width,dt.height,0,Ae,Ce,dt.data)}}else{L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,Ce,ce[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,Ae,Ce,ce[Q]);for(let be=0;be<pe.length;be++){const ye=pe[be];L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Ae,Ce,ye.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Ue,Ae,Ce,ye.image[Q])}}}u(g)&&S(i.TEXTURE_CUBE_MAP),te.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Re(T,g,F,z,W,te){const se=r.convert(F.format,F.colorSpace),X=r.convert(F.type),$=M(F.internalFormat,se,X,F.normalized,F.colorSpace),re=n.get(g),Ee=n.get(F);if(Ee.__renderTarget=g,!re.__hasExternalTextures){const ce=Math.max(1,g.width>>te),ae=Math.max(1,g.height>>te);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,te,$,ce,ae,g.depth,0,se,X,null):t.texImage2D(W,te,$,ce,ae,0,se,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,Ee.__webglTexture,0,ht(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,Ee.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const z=g.depthTexture,W=z&&z.isDepthTexture?z.type:null,te=A(g.stencilBuffer,W),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),te,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,T)}else{const z=g.textures;for(let W=0;W<z.length;W++){const te=z[W],se=r.convert(te.format,te.colorSpace),X=r.convert(te.type),$=M(te.internalFormat,se,X,te.normalized,te.colorSpace);Mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(g),$,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(g),$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(T,g,F){const z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,g.depthTexture);const re=r.convert(g.depthTexture.format),Ee=r.convert(g.depthTexture.type);let ce;g.depthTexture.format===Nn?ce=i.DEPTH_COMPONENT24:g.depthTexture.format===li&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,g.width,g.height,0,re,Ee,null)}}else J(g.depthTexture,0);const te=W.__webglTexture,se=ht(g),X=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,$=g.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Nn)Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,X,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,$,X,te,0);else if(g.depthTexture.format===li)Mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,X,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,$,X,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(T){const g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const z=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=z}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)ke(g.__webglFramebuffer[z],T,z);else{const z=T.texture.mipmaps;z&&z.length>0?ke(g.__webglFramebuffer[0],T,0):ke(g.__webglFramebuffer,T,0)}else if(F){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),gt(g.__webglDepthbuffer[z],T,!1);else{const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,te)}}else{const z=T.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),gt(g.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(T,g,F){const z=n.get(T);g!==void 0&&Re(z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&tt(T)}function Ge(T){const g=T.texture,F=n.get(T),z=n.get(g);T.addEventListener("dispose",_);const W=T.textures,te=T.isWebGLCubeRenderTarget===!0,se=W.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),te){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[X][$]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(se)for(let X=0,$=W.length;X<$;X++){const re=n.get(W[X]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Mt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){const $=W[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const re=r.convert($.format,$.colorSpace),Ee=r.convert($.type),ce=M($.internalFormat,re,Ee,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),ae=ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Re(F.__webglFramebuffer[X][$],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else Re(F.__webglFramebuffer[X],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);u(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let X=0,$=W.length;X<$;X++){const re=W[X],Ee=n.get(re);let ce=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Ee.__webglTexture),Ye(ce,re),Re(F.__webglFramebuffer,T,re,i.COLOR_ATTACHMENT0+X,ce,0),u(re)&&S(ce)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,z.__webglTexture),Ye(X,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Re(F.__webglFramebuffer[$],T,g,i.COLOR_ATTACHMENT0,X,$);else Re(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,X,0);u(g)&&S(X),t.unbindTexture()}T.depthBuffer&&tt(T)}function xt(T){const g=T.textures;for(let F=0,z=g.length;F<z;F++){const W=g[F];if(u(W)){const te=w(T),se=n.get(W).__webglTexture;t.bindTexture(te,se),S(te),t.unbindTexture()}}}const St=[],wt=[];function Ct(T){if(T.samples>0){if(Mt(T)===!1){const g=T.textures,F=T.width,z=T.height;let W=i.COLOR_BUFFER_BIT;const te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(T),X=g.length>1;if(X)for(let re=0;re<g.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const $=T.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Ee=n.get(g[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,F,z,0,0,F,z,W,i.NEAREST),l===!0&&(St.length=0,wt.length=0,St.push(i.COLOR_ATTACHMENT0+re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(St.push(te),wt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let re=0;re<g.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Ee=n.get(g[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ht(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){const g=a.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function zt(T,g){const F=T.colorSpace,z=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==ir&&F!==Kn&&(ze.getTransfer(F)===Je?(z!==ln||W!==Zt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",F)),g}function Ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=de,this.setTextureCube=me,this.rebindTextures=qe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zm(i,e){function t(n,s=Kn){let r;const a=ze.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Kl)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===ln)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Qa)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===Ks||n===$s||n===Zs||n===Js)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===ua||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===tr||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===va)return r.COMPRESSED_R11_EAC;if(n===xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ya||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Fa||n===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===ka||n===nr||n===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:Jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e0 extends di{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,m=null,v=null;const x=typeof XRWebGLBinding<"u",f=new jm,u={},S=t.getContextAttributes();let w=null,M=null;const A=[],E=[],R=new Oe;let _=null;const b=new en;b.viewport=new lt;const C=new en;C.viewport=new lt;const P=[b,C],I=new cd;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=A[Z];return ie===void 0&&(ie=new Rr,A[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=A[Z];return ie===void 0&&(ie=new Rr,A[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=A[Z];return ie===void 0&&(ie=new Rr,A[Z]=ie),ie.getHandSpace()};function O(Z){const ie=E.indexOf(Z.inputSource);if(ie===-1)return;const ee=A[ie];ee!==void 0&&(ee.update(Z.inputSource,Z.frame,c||a),ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",H);for(let Z=0;Z<A.length;Z++){const ie=E[Z];ie!==null&&(E[Z]=null,A[Z].disconnect(ie))}V=null,q=null,f.reset();for(const Z in u)delete u[Z];e.setRenderTarget(w),m=null,h=null,p=null,s=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Le=null,Ie=null;S.depth&&(Ie=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?li:Nn,Le=S.stencil?rs:bn);const Re={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Sn(h.textureWidth,h.textureHeight,{format:ln,type:Zt,depthTexture:new zi(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Sn(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function H(Z){for(let ie=0;ie<Z.removed.length;ie++){const ee=Z.removed[ie],Le=E.indexOf(ee);Le>=0&&(E[Le]=null,A[Le].disconnect(ee))}for(let ie=0;ie<Z.added.length;ie++){const ee=Z.added[ie];let Le=E.indexOf(ee);if(Le===-1){for(let Re=0;Re<A.length;Re++)if(Re>=E.length){E.push(ee),Le=Re;break}else if(E[Re]===null){E[Re]=ee,Le=Re;break}if(Le===-1)break}const Ie=A[Le];Ie&&Ie.connect(ee)}}const J=new N,j=new N;function de(Z,ie,ee){J.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const Le=J.distanceTo(j),Ie=ie.projectionMatrix.elements,Re=ee.projectionMatrix.elements,gt=Ie[14]/(Ie[10]-1),ke=Ie[14]/(Ie[10]+1),tt=(Ie[9]+1)/Ie[5],qe=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],xt=(Re[8]+1)/Re[0],St=gt*Ge,wt=gt*xt,Ct=Le/(-Ge+xt),ht=Ct*-Ge;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ht),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Mt=gt+Ct,D=ke+Ct,zt=St-ht,Ze=wt+(Le-ht),T=tt*ke/D*Mt,g=qe*ke/D*Mt;Z.projectionMatrix.makePerspective(zt,Ze,T,g,Mt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function me(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ie=Z.near,ee=Z.far;f.texture!==null&&(f.depthNear>0&&(ie=f.depthNear),f.depthFar>0&&(ee=f.depthFar)),I.near=C.near=b.near=ie,I.far=C.far=b.far=ee,(V!==I.near||q!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,q=I.far),I.layers.mask=Z.layers.mask|6,b.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const Le=Z.parent,Ie=I.cameras;me(I,Le);for(let Re=0;Re<Ie.length;Re++)me(Ie[Re],Le);Ie.length===2?de(I,b,C):I.projectionMatrix.copy(b.projectionMatrix),Me(Z,I,Le)};function Me(Z,ie,ee){ee===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ga*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(I)},this.getCameraTexture=function(Z){return u[Z]};let Xe=null;function ct(Z,ie){if(d=ie.getViewerPose(c||a),v=ie,d!==null){const ee=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Le=!1;ee.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let ke=0;ke<ee.length;ke++){const tt=ee[ke];let qe=null;if(m!==null)qe=m.getViewport(tt);else{const xt=p.getViewSubImage(h,tt);qe=xt.viewport,ke===0&&(e.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(M))}let Ge=P[ke];Ge===void 0&&(Ge=new en,Ge.layers.enable(ke),Ge.viewport=new lt,P[ke]=Ge),Ge.matrix.fromArray(tt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(tt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(qe.x,qe.y,qe.width,qe.height),ke===0&&(I.matrix.copy(Ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(Ge)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();const ke=p.getDepthInformation(ee[0]);ke&&ke.isValid&&ke.texture&&f.init(ke,s.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let ke=0;ke<ee.length;ke++){const tt=ee[ke].camera;if(tt){let qe=u[tt];qe||(qe=new dc,u[tt]=qe);const Ge=p.getCameraImage(tt);qe.sourceTexture=Ge}}}}for(let ee=0;ee<A.length;ee++){const Le=E[ee],Ie=A[ee];Le!==null&&Ie!==void 0&&Ie.update(Le,ie,c||a)}Xe&&Xe(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ye=new gc;Ye.setAnimationLoop(ct),this.setAnimationLoop=function(Z){Xe=Z},this.dispose=function(){}}}const t0=new et,bc=new De;bc.set(-1,0,0,0,1,0,0,0,1);function n0(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,uc(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,S,w,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(f,u):u.isMeshLambertMaterial?(r(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(f,u),p(f,u)):u.isMeshPhongMaterial?(r(f,u),d(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,M)):u.isMeshMatcapMaterial?(r(f,u),v(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),x(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,S,w):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ot&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ot&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=e.get(u),w=S.envMap,M=S.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(bc),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,S,w){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=w*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,S){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,u){u.matcap&&(f.matcap.value=u.matcap)}function x(f,u){const S=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const E=A.program;n.uniformBlockBinding(M,E)}function c(M,A){let E=s[M.id];E===void 0&&(f(M),E=d(M),s[M.id]=E,M.addEventListener("dispose",S));const R=A.program;n.updateUBOMapping(M,R);const _=e.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function d(M){const A=p();M.__bindingPointIndex=A;const E=i.createBuffer(),R=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=s[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,b=E.length;_<b;_++){const C=E[_];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)m(C[P],_,P,R);else m(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,A,E,R){if(x(M,A,E,R)===!0){const _=M.__offset,b=M.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){const I=b[P],V=u(I);v(I,M.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,A,E){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,E)}function x(M,A,E,R){const _=M.value,b=A+"_"+E;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const C=R[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function f(M){const A=M.uniforms;let E=0;const R=16;for(let b=0,C=A.length;b<C;b++){const P=Array.isArray(A[b])?A[b]:[A[b]];for(let I=0,V=P.length;I<V;I++){const q=P[I],O=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,H=O.length;Y<H;Y++){const J=O[Y],j=u(J),de=E%R,me=de%j.boundary,Me=de+me;E+=me,Me!==0&&R-Me<j.storage&&(E+=R-Me),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=j.storage}}}const _=E%R;return _>0&&(E+=R-_),M.__size=E,M.__cache={},this}function u(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),A}function S(M){const A=M.target;A.removeEventListener("dispose",S);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function w(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const s0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function r0(){return mn===null&&(mn=new oc(s0,16,16,hi,Un),mn.name="DFG_LUT",mn.minFilter=Nt,mn.magFilter=Nt,mn.wrapS=Ln,mn.wrapT=Ln,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class a0{constructor(e={}){const{canvas:t=Eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const x=m,f=new Set([to,eo,ja]),u=new Set([Zt,bn,ss,rs,Za,Ja]),S=new Uint32Array(4),w=new Int32Array(4),M=new N;let A=null,E=null;const R=[],_=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,V=null,q=null,O=null;this._outputColorSpace=$t;let Y=0,H=0,J=null,j=-1,de=null;const me=new lt,Me=new lt;let Xe=null;const ct=new le(0);let Ye=0,Z=t.width,ie=t.height,ee=1,Le=null,Ie=null;const Re=new lt(0,0,Z,ie),gt=new lt(0,0,Z,ie);let ke=!1;const tt=new ao;let qe=!1,Ge=!1;const xt=new et,St=new N,wt=new lt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Mt(){return J===null?ee:1}let D=n;function zt(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",dn,!1),D===null){const U="webgl2";if(D=zt(U,y),D===null)throw zt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw We("WebGLRenderer: "+y.message),y}let Ze,T,g,F,z,W,te,se,X,$,re,Ee,ce,ae,Ae,Ce,Ue,L,ne,K,oe,pe,Q;function be(){Ze=new rp(D),Ze.init(),oe=new Zm(D,Ze),T=new Jf(D,Ze,e,oe),g=new Km(D,Ze),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),V=D.createFramebuffer(),q=D.createFramebuffer(),O=D.createFramebuffer(),F=new lp(D),z=new Um,W=new $m(D,Ze,g,z,T,oe,F),te=new sp(C),se=new dd(D),pe=new $f(D,se),X=new ap(D,se,F,pe),$=new hp(D,X,se,pe,F),L=new cp(D,T,W),Ae=new Qf(z),re=new Im(C,te,Ze,T,pe,Ae),Ee=new n0(C,z),ce=new Fm,ae=new Gm(Ze),Ue=new Kf(C,te,g,$,v,l),Ce=new qm(C,$,T),Q=new i0(D,F,T,g),ne=new Zf(D,Ze,F),K=new op(D,Ze,F),F.programs=re.programs,C.capabilities=T,C.extensions=Ze,C.properties=z,C.renderLists=ce,C.shadowMap=Ce,C.state=g,C.info=F}be(),x!==Zt&&(b=new up(x,t.width,t.height,o,s,r));const ye=new e0(C,D);this.xr=ye,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(Z,ie,!1))},this.getSize=function(y){return y.set(Z,ie)},this.setSize=function(y,U,G=!0){if(ye.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,ie=U,t.width=Math.floor(y*ee),t.height=Math.floor(U*ee),G===!0&&(t.style.width=y+"px",t.style.height=U+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Z*ee,ie*ee).floor()},this.setDrawingBufferSize=function(y,U,G){Z=y,ie=U,ee=G,t.width=Math.floor(y*G),t.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===Zt){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(me)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,U,G,B){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,U,G,B),g.viewport(me.copy(Re).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(gt)},this.setScissor=function(y,U,G,B){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,U,G,B),g.scissor(Me.copy(gt).multiplyScalar(ee).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(y){g.setScissorTest(ke=y)},this.setOpaqueSort=function(y){Le=y},this.setTransparentSort=function(y){Ie=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,G=!0){let B=0;if(y){let k=!1;if(J!==null){const fe=J.texture.format;k=f.has(fe)}if(k){const fe=J.texture.type,ve=u.has(fe),ue=Ue.getClearColor(),Se=Ue.getClearAlpha(),we=ue.r,Ne=ue.g,Be=ue.b;ve?(S[0]=we,S[1]=Ne,S[2]=Be,S[3]=Se,D.clearBufferuiv(D.COLOR,0,S)):(w[0]=we,w[1]=Ne,w[2]=Be,w[3]=Se,D.clearBufferiv(D.COLOR,0,w))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),Ue.dispose(),ce.dispose(),ae.dispose(),z.dispose(),te.dispose(),$.dispose(),pe.dispose(),Q.dispose(),re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",xo),ye.removeEventListener("sessionend",Mo),Qn.stop()};function dt(y){y.preventDefault(),No("WebGLRenderer: Context Lost."),P=!0}function st(){No("WebGLRenderer: Context Restored."),P=!1;const y=F.autoReset,U=Ce.enabled,G=Ce.autoUpdate,B=Ce.needsUpdate,k=Ce.type;be(),F.autoReset=y,Ce.enabled=U,Ce.autoUpdate=G,Ce.needsUpdate=B,Ce.type=k}function dn(y){We("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function un(y){const U=y.target;U.removeEventListener("dispose",un),Pc(U)}function Pc(y){Lc(y),z.remove(y)}function Lc(y){const U=z.get(y).programs;U!==void 0&&(U.forEach(function(G){re.releaseProgram(G)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,B,k,fe){U===null&&(U=Ct);const ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=Uc(y,U,G,B,k);g.setMaterial(B,ve);let Se=G.index,we=1;if(B.wireframe===!0){if(Se=X.getWireframeAttribute(G),Se===void 0)return;we=2}const Ne=G.drawRange,Be=G.attributes.position;let Te=Ne.start*we,je=(Ne.start+Ne.count)*we;fe!==null&&(Te=Math.max(Te,fe.start*we),je=Math.min(je,(fe.start+fe.count)*we)),Se!==null?(Te=Math.max(Te,0),je=Math.min(je,Se.count)):Be!=null&&(Te=Math.max(Te,0),je=Math.min(je,Be.count));const _t=je-Te;if(_t<0||_t===1/0)return;pe.setup(k,B,ue,G,Se);let ut,nt=ne;if(Se!==null&&(ut=se.get(Se),nt=K,nt.setIndex(ut)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Mt()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(k.isLine){let Lt=B.linewidth;Lt===void 0&&(Lt=1),g.setLineWidth(Lt*Mt()),k.isLineSegments?nt.setMode(D.LINES):k.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else k.isPoints?nt.setMode(D.POINTS):k.isSprite&&nt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,_e=k._multiDrawCounts,Xt=k._multiDrawCount,Ve=Se?se.get(Se).bytesPerElement:1,Jt=z.get(B).currentProgram.getUniforms();for(let fn=0;fn<Xt;fn++)Jt.setValue(D,"_gl_DrawID",fn),nt.render(Lt[fn]/Ve,_e[fn])}else if(k.isInstancedMesh)nt.renderInstances(Te,_t,k.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_e=Math.min(G.instanceCount,Lt);nt.renderInstances(Te,_t,_e)}else nt.render(Te,_t)};function vo(y,U,G){y.transparent===!0&&y.side===vn&&y.forceSinglePass===!1?(y.side=Ot,y.needsUpdate=!0,_s(y,U,G),y.side=Jn,y.needsUpdate=!0,_s(y,U,G),y.side=vn):_s(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),E=ae.get(G),E.init(U),_.push(E),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),y!==G&&y.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const ue=fe[ve];vo(ue,G,k),B.add(ue)}else vo(fe,G,k),B.add(fe)}),E=_.pop(),B},this.compileAsync=function(y,U,G=null){const B=this.compile(y,U,G);return new Promise(k=>{function fe(){if(B.forEach(function(ve){z.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){k(y);return}setTimeout(fe,10)}Ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let gr=null;function Dc(y){gr&&gr(y)}function xo(){Qn.stop()}function Mo(){Qn.start()}const Qn=new gc;Qn.setAnimationLoop(Dc),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(y){gr=y,ye.setAnimationLoop(y),y===null?Qn.stop():Qn.start()},ye.addEventListener("sessionstart",xo),ye.addEventListener("sessionend",Mo),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(y,U);const G=ye.enabled===!0&&ye.isPresenting===!0,B=b!==null&&(J===null||G)&&b.begin(C,J);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(U),U=ye.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,U,J),E=ae.get(y,_.length),E.init(U),E.state.textureUnits=W.getTextureUnits(),_.push(E),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(xt,Mn,U.reversedDepth),Ge=this.localClippingEnabled,qe=Ae.init(this.clippingPlanes,Ge),A=ce.get(y,R.length),A.init(),R.push(A),ye.enabled===!0&&ye.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&_r(ve,U,-1/0,C.sortObjects)}_r(y,U,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(Le,Ie,U.reversedDepth),ht=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ht&&Ue.addToRenderList(A,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Ae.beginShadows();const k=E.state.shadowsArray;if(Ce.render(k,y,U),qe===!0&&Ae.endShadows(),(B&&b.hasRenderPass())===!1){const ve=A.opaque,ue=A.transmissive;if(E.setupLights(),U.isArrayCamera){const Se=U.cameras;if(ue.length>0)for(let we=0,Ne=Se.length;we<Ne;we++){const Be=Se[we];So(ve,ue,y,Be)}ht&&Ue.render(y);for(let we=0,Ne=Se.length;we<Ne;we++){const Be=Se[we];yo(A,y,Be,Be.viewport)}}else ue.length>0&&So(ve,ue,y,U),ht&&Ue.render(y),yo(A,y,U)}J!==null&&H===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),B&&b.end(C),y.isScene===!0&&y.onAfterRender(C,y,U),pe.resetDefaultState(),j=-1,de=null,_.pop(),_.length>0?(E=_[_.length-1],W.setTextureUnits(E.state.textureUnits),qe===!0&&Ae.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,I!==null&&I.renderEnd()};function _r(y,U,G,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||tt.intersectsSprite(y)){B&&wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const ve=$.update(y),ue=y.material;ue.visible&&A.push(y,ve,ue,G,wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||tt.intersectsObject(y))){const ve=$.update(y),ue=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),wt.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),wt.copy(ve.boundingSphere.center)),wt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(ue)){const Se=ve.groups;for(let we=0,Ne=Se.length;we<Ne;we++){const Be=Se[we],Te=ue[Be.materialIndex];Te&&Te.visible&&A.push(y,ve,Te,G,wt.z,Be)}}else ue.visible&&A.push(y,ve,ue,G,wt.z,null)}}const fe=y.children;for(let ve=0,ue=fe.length;ve<ue;ve++)_r(fe[ve],U,G,B)}function yo(y,U,G,B){const{opaque:k,transmissive:fe,transparent:ve}=y;E.setupLightsView(G),qe===!0&&Ae.setGlobalState(C.clippingPlanes,G),B&&g.viewport(me.copy(B)),k.length>0&&gs(k,U,G),fe.length>0&&gs(fe,U,G),ve.length>0&&gs(ve,U,G),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function So(y,U,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Te=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Sn(1,1,{generateMipmaps:!0,type:Te?Un:Zt,minFilter:oi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const fe=E.state.transmissionRenderTarget[B.id],ve=B.viewport||me;fe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),Se=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(ct),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Ue.render(G);const Ne=C.toneMapping;C.toneMapping=yn;const Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),qe===!0&&Ae.setGlobalState(C.clippingPlanes,B),gs(y,G,B),W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let je=0,_t=U.length;je<_t;je++){const ut=U[je],{object:nt,geometry:Lt,material:_e,group:Xt}=ut;if(_e.side===vn&&nt.layers.test(B.layers)){const Ve=_e.side;_e.side=Ot,_e.needsUpdate=!0,bo(nt,G,B,Lt,_e,Xt),_e.side=Ve,_e.needsUpdate=!0,Te=!0}}Te===!0&&(W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe))}C.setRenderTarget(ue,Se,we),C.setClearColor(ct,Ye),Be!==void 0&&(B.viewport=Be),C.toneMapping=Ne}function gs(y,U,G){const B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,fe=y.length;k<fe;k++){const ve=y[k],{object:ue,geometry:Se,group:we}=ve;let Ne=ve.material;Ne.allowOverride===!0&&B!==null&&(Ne=B),ue.layers.test(G.layers)&&bo(ue,U,G,Se,Ne,we)}}function bo(y,U,G,B,k,fe){y.onBeforeRender(C,U,G,B,k,fe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(C,U,G,B,y,fe),k.transparent===!0&&k.side===vn&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,C.renderBufferDirect(G,U,B,k,y,fe),k.side=Jn,k.needsUpdate=!0,C.renderBufferDirect(G,U,B,k,y,fe),k.side=vn):C.renderBufferDirect(G,U,B,k,y,fe),y.onAfterRender(C,U,G,B,k,fe)}function _s(y,U,G){U.isScene!==!0&&(U=Ct);const B=z.get(y),k=E.state.lights,fe=E.state.shadowsArray,ve=k.state.version,ue=re.getParameters(y,k.state,fe,U,G,E.state.lightProbeGridArray),Se=re.getProgramCacheKey(ue);let we=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=te.get(y.envMap||B.environment,Ne),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",un),we=new Map,B.programs=we);let Be=we.get(Se);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===ve)return wo(y,ue),Be}else ue.uniforms=re.getUniforms(y),I!==null&&y.isNodeMaterial&&I.build(y,G,ue),y.onBeforeCompile(ue,C),Be=re.acquireProgram(ue,Se),we.set(Se,Be),B.uniforms=ue.uniforms;const Te=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=Ae.uniform),wo(y,ue),B.needsLights=Fc(y),B.lightsStateVersion=ve,B.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Be,B.uniformsList=null,Be}function Eo(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Qs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function wo(y,U){const G=z.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ic(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let G=0,B=y.length;G<B;G++){const k=y[G];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Uc(y,U,G,B,k){U.isScene!==!0&&(U=Ct),W.resetTextureUnits();const fe=U.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ue=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ze.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=te.get(B.envMap||ve,Se),Ne=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color;let ut=yn;B.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ut=C.toneMapping);const nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Lt=nt!==void 0?nt.length:0,_e=z.get(B),Xt=E.state.lights;if(qe===!0&&(Ge===!0||y!==de)){const rt=y===de&&B.id===j;Ae.setState(B,y,rt)}let Ve=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Xt.state.version||_e.outputColorSpace!==ue||k.isBatchedMesh&&_e.batching===!1||!k.isBatchedMesh&&_e.batching===!0||k.isBatchedMesh&&_e.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&_e.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&_e.instancing===!1||!k.isInstancedMesh&&_e.instancing===!0||k.isSkinnedMesh&&_e.skinning===!1||!k.isSkinnedMesh&&_e.skinning===!0||k.isInstancedMesh&&_e.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&_e.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&_e.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&_e.instancingMorph===!1&&k.morphTexture!==null||_e.envMap!==we||B.fog===!0&&_e.fog!==fe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==Ne||_e.vertexTangents!==Be||_e.morphTargets!==Te||_e.morphNormals!==je||_e.morphColors!==_t||_e.toneMapping!==ut||_e.morphTargetsCount!==Lt||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ve=!0):(Ve=!0,_e.__version=B.version);let Jt=_e.currentProgram;Ve===!0&&(Jt=_s(B,U,k),I&&B.isNodeMaterial&&I.onUpdateProgram(B,Jt,_e));let fn=!1,On=!1,pi=!1;const it=Jt.getUniforms(),vt=_e.uniforms;if(g.useProgram(Jt.program)&&(fn=!0,On=!0,pi=!0),B.id!==j&&(j=B.id,On=!0),_e.needsLights){const rt=Ic(E.state.lightProbeGridArray,k);_e.lightProbeGrid!==rt&&(_e.lightProbeGrid=rt,On=!0)}if(fn||de!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(D,"projectionMatrix",y.projectionMatrix),it.setValue(D,"viewMatrix",y.matrixWorldInverse);const kn=it.map.cameraPosition;kn!==void 0&&kn.setValue(D,St.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),de!==y&&(de=y,On=!0,pi=!0)}if(_e.needsLights&&(Xt.state.directionalShadowMap.length>0&&it.setValue(D,"directionalShadowMap",Xt.state.directionalShadowMap,W),Xt.state.spotShadowMap.length>0&&it.setValue(D,"spotShadowMap",Xt.state.spotShadowMap,W),Xt.state.pointShadowMap.length>0&&it.setValue(D,"pointShadowMap",Xt.state.pointShadowMap,W)),k.isSkinnedMesh){it.setOptional(D,k,"bindMatrix"),it.setOptional(D,k,"bindMatrixInverse");const rt=k.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),it.setValue(D,"boneTexture",rt.boneTexture,W))}k.isBatchedMesh&&(it.setOptional(D,k,"batchingTexture"),it.setValue(D,"batchingTexture",k._matricesTexture,W),it.setOptional(D,k,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",k._indirectTexture,W),it.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",k._colorsTexture,W));const Bn=G.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&L.update(k,G,Jt),(On||_e.receiveShadow!==k.receiveShadow)&&(_e.receiveShadow=k.receiveShadow,it.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(vt.envMapIntensity.value=U.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=r0()),On){if(it.setValue(D,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&Nc(vt,pi),fe&&B.fog===!0&&Ee.refreshFogUniforms(vt,fe),Ee.refreshMaterialUniforms(vt,B,ee,ie,E.state.transmissionRenderTarget[y.id]),_e.needsLights&&_e.lightProbeGrid){const rt=_e.lightProbeGrid;vt.probesSH.value=rt.texture,vt.probesMin.value.copy(rt.boundingBox.min),vt.probesMax.value.copy(rt.boundingBox.max),vt.probesResolution.value.copy(rt.resolution)}Qs.upload(D,Eo(_e),vt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qs.upload(D,Eo(_e),vt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(D,"center",k.center),it.setValue(D,"modelViewMatrix",k.modelViewMatrix),it.setValue(D,"normalMatrix",k.normalMatrix),it.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const rt=B.uniformsGroups;for(let kn=0,mi=rt.length;kn<mi;kn++){const To=rt[kn];Q.update(To,Jt),Q.bind(To,Jt)}}return Jt}function Nc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Fc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(y,U,G){const B=z.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(y.texture).__webglTexture=U,z.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const G=z.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){J=y,Y=U,H=G;let B=null,k=!1,fe=!1;if(y){const ue=z.get(y);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),me.copy(y.viewport),Me.copy(y.scissor),Xe=y.scissorTest,g.viewport(me),g.scissor(Me),g.setScissorTest(Xe),j=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(ue.__hasExternalTextures)W.rebindTextures(y,z.get(y.texture).__webglTexture,z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(ue.__boundDepthTexture!==Ne){if(Ne!==null&&z.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);const we=z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[U])?B=we[U][G]:B=we[U],k=!0):y.samples>0&&W.useMultisampledRTT(y)===!1?B=z.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[G]:B=we,me.copy(y.viewport),Me.copy(y.scissor),Xe=y.scissorTest}else me.copy(Re).multiplyScalar(ee).floor(),Me.copy(gt).multiplyScalar(ee).floor(),Xe=ke;if(G!==0&&(B=V),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(y,B),g.viewport(me),g.scissor(Me),g.setScissorTest(Xe),k){const ue=z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,G)}else if(fe){const ue=U;for(let Se=0;Se<y.textures.length;Se++){const we=z.get(y.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,we.__webglTexture,G,ue)}}else if(y!==null&&G!==0){const ue=z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,G)}j=-1},this.readRenderTargetPixels=function(y,U,G,B,k,fe,ve,ue=0){if(!(y&&y.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){g.bindFramebuffer(D.FRAMEBUFFER,Se);try{const we=y.textures[ue],Ne=we.format,Be=we.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!T.textureFormatReadable(Ne)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Be)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&G>=0&&G<=y.height-k&&D.readPixels(U,G,B,k,oe.convert(Ne),oe.convert(Be),fe)}finally{const we=J!==null?z.get(J).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,U,G,B,k,fe,ve,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(U>=0&&U<=y.width-B&&G>=0&&G<=y.height-k){g.bindFramebuffer(D.FRAMEBUFFER,Se);const we=y.textures[ue],Ne=we.format,Be=we.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),!T.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(U,G,B,k,oe.convert(Ne),oe.convert(Be),0);const je=J!==null?z.get(J).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,je);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await wh(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(Te),D.deleteSync(_t),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,G=0){const B=Math.pow(2,-G),k=Math.floor(y.image.width*B),fe=Math.floor(y.image.height*B),ve=U!==null?U.x:0,ue=U!==null?U.y:0;W.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ve,ue,k,fe),g.unbindTexture()},this.copyTextureToTexture=function(y,U,G=null,B=null,k=0,fe=0){let ve,ue,Se,we,Ne,Be,Te,je,_t;const ut=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(G!==null)ve=G.max.x-G.min.x,ue=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Ne=G.min.y,Be=G.isBox3?G.min.z:0;else{const vt=Math.pow(2,-k);ve=Math.floor(ut.width*vt),ue=Math.floor(ut.height*vt),y.isDataArrayTexture?Se=ut.depth:y.isData3DTexture?Se=Math.floor(ut.depth*vt):Se=1,we=0,Ne=0,Be=0}B!==null?(Te=B.x,je=B.y,_t=B.z):(Te=0,je=0,_t=0);const nt=oe.convert(U.format),Lt=oe.convert(U.type);let _e;U.isData3DTexture?(W.setTexture3D(U,0),_e=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(W.setTexture2DArray(U,0),_e=D.TEXTURE_2D_ARRAY):(W.setTexture2D(U,0),_e=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Xt=g.getParameter(D.UNPACK_ROW_LENGTH),Ve=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(D.UNPACK_SKIP_PIXELS),fn=g.getParameter(D.UNPACK_SKIP_ROWS),On=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,we),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const pi=y.isDataArrayTexture||y.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const vt=z.get(y),Bn=z.get(U),rt=z.get(vt.__renderTarget),kn=z.get(Bn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let mi=0;mi<Se;mi++)pi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(y).__webglTexture,k,Be+mi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(U).__webglTexture,fe,_t+mi)),D.blitFramebuffer(we,Ne,ve,ue,Te,je,ve,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||z.has(y)){const vt=z.get(y),Bn=z.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,q),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let rt=0;rt<Se;rt++)pi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.__webglTexture,k,Be+rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vt.__webglTexture,k),it?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bn.__webglTexture,fe,_t+rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bn.__webglTexture,fe),k!==0?D.blitFramebuffer(we,Ne,ve,ue,Te,je,ve,ue,D.COLOR_BUFFER_BIT,D.NEAREST):it?D.copyTexSubImage3D(_e,fe,Te,je,_t+rt,we,Ne,ve,ue):D.copyTexSubImage2D(_e,fe,Te,je,we,Ne,ve,ue);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(_e,fe,Te,je,_t,ve,ue,Se,nt,Lt,ut.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,fe,Te,je,_t,ve,ue,Se,nt,ut.data):D.texSubImage3D(_e,fe,Te,je,_t,ve,ue,Se,nt,Lt,ut):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,Te,je,ve,ue,nt,Lt,ut.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,Te,je,ut.width,ut.height,nt,ut.data):D.texSubImage2D(D.TEXTURE_2D,fe,Te,je,ve,ue,nt,Lt,ut);g.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ve),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(D.UNPACK_SKIP_ROWS,fn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,On),fe===0&&U.generateMipmaps&&D.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(y){z.get(y).__webglFramebuffer===void 0&&W.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?W.setTextureCube(y,0):y.isData3DTexture?W.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?W.setTexture2DArray(y,0):W.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){Y=0,H=0,J=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class Ec{view;container;constructor(e,t=360,n=640){this.container=e;const s=new a0({antialias:!0,powerPreference:"high-performance",stencil:!1});s.toneMapping=Ka,s.outputColorSpace=$t,e.appendChild(s.domElement),this.view={canvas:s.domElement,renderer:s,viewW:0,viewH:0,designW:t,designH:n,scale:1,offX:0,offY:0},this.resize()}resize(){const e=this.view,t=Math.min(window.devicePixelRatio||1,2),n=this.container.getBoundingClientRect();e.viewW=Math.max(1,n.width),e.viewH=Math.max(1,n.height),e.renderer.setPixelRatio(t),e.renderer.setSize(Math.round(e.viewW),Math.round(e.viewH),!1),e.canvas.style.width=`${e.viewW}px`,e.canvas.style.height=`${e.viewH}px`}beginFrame(){}toDesign(e,t){const n=this.view.canvas.getBoundingClientRect();return{x:e-n.left,y:t-n.top}}toClient(e,t){const n=this.view.canvas.getBoundingClientRect();return{x:n.left+e,y:n.top+t}}}const o0=250;class l0{canvas;input;audio;ads;scenes=new Map;activeScene=null;stepMs;accumulator=0;lastTime=0;rafId=0;running=!1;manuallyPaused=!1;autoPaused=!1;pauseListeners=new Set;constructor(e){this.stepMs=1e3/(e.logicHz??60);let t;if((e.rendering??"webgl")==="webgl")try{t=new Ec(e.container,e.designW,e.designH)}catch{t=new er(e.container,e.designW,e.designH)}else t=new er(e.container,e.designW,e.designH);this.canvas=t,this.input=new Wc(this.canvas.view.canvas),this.audio=new zc,this.ads=e.ads??new kc;const n=()=>this.audio.unlock();window.addEventListener("pointerdown",n,{once:!0}),window.addEventListener("keydown",n,{once:!0}),window.addEventListener("resize",()=>this.canvas.resize()),document.addEventListener("visibilitychange",()=>{document.hidden?this.paused||(this.autoPaused=!0,this.applyPause(!0)):this.autoPaused&&(this.autoPaused=!1,this.manuallyPaused||this.applyPause(!1))})}registerScene(e,t){this.scenes.set(e,t)}setScene(e){const t=this.scenes.get(e);if(!t)throw new Error(`Unknown scene "${e}" — did you registerScene() it?`);this.activeScene!==t&&(this.activeScene?.exit(this),this.activeScene=t,this.accumulator=0,t.enter(this))}get scene(){return this.activeScene}start(e){this.running||(this.running=!0,this.setScene(e),this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}get paused(){return this.manuallyPaused||this.autoPaused}pause(){this.manuallyPaused||(this.manuallyPaused=!0,this.autoPaused||this.applyPause(!0))}resume(){this.manuallyPaused&&(this.manuallyPaused=!1,this.autoPaused||this.applyPause(!1))}onPauseChange(e){return this.pauseListeners.add(e),()=>this.pauseListeners.delete(e)}applyPause(e){e?this.audio.suspend():(this.lastTime=performance.now(),this.accumulator=0,this.audio.resume());for(const t of this.pauseListeners)t(e)}frame=e=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);const t=Math.min(e-this.lastTime,o0);this.lastTime=e;const n=this.activeScene;if(n){if(!this.paused)for(this.accumulator+=t;this.accumulator>=this.stepMs;)n.update(this,this.stepMs/1e3),this.accumulator-=this.stepMs;this.canvas.beginFrame(),n.render(this,this.accumulator/this.stepMs)}}}class c0{constructor(e){this.options=e,this.cache=this.read()}cache;get(e){return this.cache[e]}set(e,t){this.cache[e]=t,this.persist()}update(e){Object.assign(this.cache,e),this.persist()}get all(){return this.cache}clear(){this.cache={...this.options.defaults};try{localStorage.removeItem(this.options.key)}catch{}}read(){try{const e=localStorage.getItem(this.options.key);if(!e)return{...this.options.defaults};const t=JSON.parse(e);let n=t.data??{};const s=t.version??1;for(let r=s+1;r<=this.options.version;r++){const a=this.options.migrations?.[r];a&&(n=a(n))}return{...this.options.defaults,...n}}catch(e){return console.warn("[storage] failed to read save, using defaults",e),{...this.options.defaults}}}persist(){try{const e={version:this.options.version,data:this.cache};localStorage.setItem(this.options.key,JSON.stringify(e))}catch(e){console.warn("[storage] failed to persist save",e),Ys(e)}}}const h0="wave-dash.save",hn=360,at=640,ge={bg:"#0b1026",bgDeep:"#070a1a",text:"#f2f6ff",accent:"#45e0ff",accentSoft:"#a5efff",accentDeep:"#1899c4",gold:"#ffd803",danger:"#ff4d6d",dangerDeep:"#8f1533",dangerHot:"#ff8fa3",violet:"#7f5af0",violetDeep:"#4a2fa0",green:"#2cb67d",greenSoft:"#7ee0b8",wall:"#182050",wallDeep:"#0f1636",wallEdgeHot:"#8fa4ff"},d0="'Fredoka', 'Nunito', system-ui, sans-serif",js=9,Qr=8,u0=140,f0=.7,p0=.38,m0=64,tn=.66;function g0(i){return i===0?3:i<=2?2:1}const Oi=.85,_0=400;class pr{pts;spikes;baseSpeed;length;checkpoints;constructor(e,t,n,s,r=[]){this.pts=e,this.spikes=t,this.baseSpeed=n,this.length=s,this.checkpoints=r}static fromLevel(e){const t=[{...e.start}];let n=e.start.y;for(const s of e.segments)n+=s.dy,t.push({y:n,c:s.c,w:s.w});return new pr(t,e.spikes,e.speed,e.length,e.checkpoints)}ensureAhead(e){}speedAt(e){return this.baseSpeed}segmentIndex(e){this.ensureAhead(e);const t=this.pts;if(e<=t[0].y)return 0;let n=0,s=t.length-2;for(;n<s;){const r=n+s+1>>1;t[r].y<=e?n=r:s=r-1}return n}interp(e,t){const n=this.pts,s=this.segmentIndex(e),r=n[s],a=n[Math.min(s+1,n.length-1)];if(a===r||e<=r.y)return r[t];if(e>=a.y)return a[t];const o=(e-r.y)/(a.y-r.y),l=(1-Math.cos(Math.PI*o))/2;return r[t]+(a[t]-r[t])*l}center(e){return this.interp(e,"c")}width(e){return this.interp(e,"w")}leftX(e){return this.center(e)-this.width(e)/2}rightX(e){return this.center(e)+this.width(e)/2}spikesBetween(e,t){this.ensureAhead(t);const n=this.spikes;let s=0,r=n.length;for(;s<r;){const o=s+r>>1;n[o].y+n[o].height>=e?r=o:s=o+1}const a=[];for(let o=s;o<n.length&&n[o].y-n[o].height<=t;o++)a.push(n[o]);return a}narrowedBounds(e){let t=this.leftX(e),n=this.rightX(e);for(const s of this.spikesBetween(e-48,e+48))Math.abs(s.y-e)>s.height*Oi/2+10||(s.side==="left"?t=Math.max(t,this.leftX(s.y)+s.depth*Oi):n=Math.min(n,this.rightX(s.y)-s.depth*Oi));return{left:t,right:n}}}function v0(i,e,t,n=js){if(e-n<i.leftX(t)||e+n>i.rightX(t))return{kind:"wall",x:e,y:t};for(const s of i.spikesBetween(t-n-40,t+n+40)){const r=s.height*Oi/2;if(!(t+n<s.y-r||t-n>s.y+r)){if(s.side==="left"){if(e-n<i.leftX(s.y)+s.depth*Oi)return{kind:"spike",x:e,y:t}}else if(e+n>i.rightX(s.y)-s.depth*Oi)return{kind:"spike",x:e,y:t}}}return null}function x0(i,e,t){const n=i.speedAt(t)*.33,s=i.narrowedBounds(t+n*.55),r=i.narrowedBounds(t+n),a=(s.left+s.right)/2,o=(r.left+r.right)/2,l=(a+o)/2;return e>l+1.4}function M0(i,e,t){if(e<=i[0].y)return i[0][t];let n=0,s=i.length-2;for(;n<s;){const c=n+s+1>>1;i[c].y<=e?n=c:s=c-1}const r=i[n],a=i[n+1];if(e>=a.y)return a[t];const o=(e-r.y)/(a.y-r.y),l=(1-Math.cos(Math.PI*o))/2;return r[t]+(a[t]-r[t])*l}class y0 extends pr{extender;constructor(e,t,n){super([e,{y:e.y+260,c:e.c,w:e.w}],[],t,Number.MAX_SAFE_INTEGER),this.extender=n,this.ensureAhead(e.y+1200)}speedAt(e){return Math.min(320,this.baseSpeed+e*.004)}ensureAhead(e){const t=e+_0*2;let n=this.pts[this.pts.length-1];const s=(o,l)=>M0(this.pts,o,l);for(;n.y<t;){const o=this.extender.next(n);this.pts.push(o);for(const l of this.extender.spikes(o,n,s))this.spikes.push(l);n=o}const r=e-3e3;let a=0;for(;a<this.pts.length-2&&this.pts[a+1].y<r;)a++;if(a>0){this.pts.splice(0,a);let o=0;for(;o<this.spikes.length&&this.spikes[o].y+this.spikes[o].height<r;)o++;o>0&&this.spikes.splice(0,o)}}}const S0=JSON.parse('[{"id":1,"params":{"speed":150,"width":300,"amp":38,"wavelength":540,"length":2200,"spikeDensity":0,"spikePairs":false,"checkpoints":1},"seed":20268731,"speed":150,"length":2200,"start":{"y":0,"c":180,"w":300},"segments":[{"dy":240,"c":168.6,"w":300},{"dy":571.3702754806728,"c":197.59975351579487,"w":308.80049296841025},{"dy":551.3611632809044,"c":171.64439217527396,"w":311.75086237583304},{"dy":512.0950973946601,"c":194.6240940289572,"w":314.7518119420856},{"dy":626.92423084192,"c":166.94580120174214,"w":317.8916024034843},{"dy":614.8323716651648,"c":193.36084230358247,"w":298.4193031154573}],"spikes":[],"checkpoints":[1100]},{"id":2,"params":{"speed":155,"width":293,"amp":41,"wavelength":527,"length":2311,"spikeDensity":0.2,"spikePairs":false,"checkpoints":1},"seed":20276650,"speed":155,"length":2311,"start":{"y":0,"c":180,"w":293},"segments":[{"dy":240,"c":167.7,"w":293},{"dy":460.4694844573737,"c":151.8219038784597,"w":287.6438077569194},{"dy":424.00545976655553,"c":199.36327548388857,"w":301.7935195796378},{"dy":559.1392393774354,"c":163.23665772970764,"w":280.3453058308456},{"dy":491.2164811244236,"c":186.39186427113367,"w":299.80859331905845},{"dy":623.3909675803966,"c":151.6683084428357,"w":287.3366168856714}],"spikes":[{"y":726.5796211469243,"side":"left","depth":54,"height":30.368498564697802},{"y":803.9700050796451,"side":"right","depth":54,"height":35.942378759384155},{"y":1498.732919727638,"side":"left","depth":54,"height":37.206240634433925},{"y":1937.8868710532035,"side":"left","depth":54,"height":30.377861659042537}],"checkpoints":[1156]},{"id":3,"params":{"speed":159,"width":286,"amp":43,"wavelength":514,"length":2421,"spikeDensity":0.27157894736842103,"spikePairs":false,"checkpoints":1},"seed":20284569,"speed":159,"length":2421,"start":{"y":0,"c":180,"w":286},"segments":[{"dy":240,"c":192.9,"w":286},{"dy":614.989692289196,"c":153.05284178395755,"w":290.1056835679151},{"dy":535.5183427123354,"c":191.23515841326676,"w":281.8561341305263},{"dy":606.7417995126918,"c":203.91295536832885,"w":296.1740892633423},{"dy":564.9420728001744,"c":152.0129066498205,"w":288.025813299641},{"dy":451.47264059148756,"c":184.37369344977895,"w":290.4638323313929}],"spikes":[{"y":589.5349864526712,"side":"left","depth":54,"height":32.41123019531369},{"y":1194.7525532418013,"side":"left","depth":54,"height":28.337439326569438},{"y":1441.512901773323,"side":"right","depth":54,"height":26.038007957860827},{"y":1610.033380975822,"side":"left","depth":54,"height":37.849779492244124},{"y":1687.0989952983987,"side":"right","depth":54,"height":31.85588568355888},{"y":1803.5797591647356,"side":"left","depth":54,"height":27.981149952858686},{"y":1918.9714932429329,"side":"right","depth":54,"height":30.075060425326228},{"y":2081.248608230006,"side":"right","depth":54,"height":27.16093321610242}],"checkpoints":[1301]},{"id":4,"params":{"speed":164,"width":279,"amp":46,"wavelength":501,"length":2532,"spikeDensity":0.28736842105263155,"spikePairs":false,"checkpoints":1},"seed":20292488,"speed":164,"length":2532,"start":{"y":0,"c":180,"w":279},"segments":[{"dy":240,"c":166.2,"w":279},{"dy":428.88372556557874,"c":213.12567286472768,"w":274.1478090264927},{"dy":534.8971665261313,"c":187.44217861995565,"w":268.310717724245},{"dy":459.3435646184721,"c":155.36460768359245,"w":264.32899169283917},{"dy":465.0601350274869,"c":193.89241460622287,"w":292.8557333553862},{"dy":474.71674902616087,"c":153.97733198255298,"w":275.5380841271393},{"dy":415.37388177830735,"c":140.36554921274538,"w":264.73109842549076}],"spikes":[{"y":1197.5687246417106,"side":"right","depth":54,"height":37.18240465875715},{"y":1398.1258972265684,"side":"left","depth":54,"height":31.63332273531705},{"y":1500.9703294075616,"side":"right","depth":54,"height":32.23218283895403},{"y":2055.573057146469,"side":"right","depth":54,"height":30.516229803673923}],"checkpoints":[1311]},{"id":5,"params":{"speed":169,"width":273,"amp":49,"wavelength":487,"length":2642,"spikeDensity":0.30315789473684207,"spikePairs":false,"checkpoints":1},"seed":20300407,"speed":169,"length":2642,"start":{"y":0,"c":180,"w":273},"segments":[{"dy":240,"c":166,"w":273},{"dy":535.3010781295598,"c":213.9424490684597,"w":276.1151018630806},{"dy":407.8837475125679,"c":154.4112342684483,"w":266.1009395282529},{"dy":401.0840593672358,"c":137.339563681921,"w":258.679127363842},{"dy":472.3913306007164,"c":177.4834189597657,"w":281.95178647521885},{"dy":531.7543151863852,"c":220.7957491809316,"w":262.4085016381368},{"dy":452.5762723487801,"c":183.77437548228073,"w":270.47651176714334},{"dy":412.23182560894656,"c":217.84891907298473,"w":268.30216185403054}],"spikes":[{"y":627.594170988157,"side":"right","depth":54,"height":35.93368431739509},{"y":834.0149935580482,"side":"right","depth":54,"height":34.783067726530135},{"y":938.0848263002382,"side":"right","depth":54,"height":29.443879736587405},{"y":1495.3970047794253,"side":"left","depth":54,"height":35.91409031674266},{"y":1742.7303291234093,"side":"right","depth":54,"height":27.656117271631956},{"y":2111.4573606496347,"side":"right","depth":54,"height":36.91205615084618},{"y":2267.1412174042066,"side":"right","depth":54,"height":34.90490628313273}],"checkpoints":[1321]},{"id":6,"params":{"speed":174,"width":266,"amp":51,"wavelength":474,"length":2753,"spikeDensity":0.31894736842105265,"spikePairs":false,"checkpoints":2},"seed":20308326,"speed":174,"length":2753,"start":{"y":0,"c":180,"w":266},"segments":[{"dy":240,"c":194,"w":266},{"dy":395.7089336005971,"c":152.84315298123983,"w":253.96133427307007},{"dy":409.9587872771548,"c":137.98884058157913,"w":259.97768116315825},{"dy":416.8560716472566,"c":174.67207037241664,"w":258.4628666693717},{"dy":417.6945456923918,"c":148.18360008040443,"w":280.36720016080886},{"dy":551.487853322737,"c":189.86609002009035,"w":265.1611426641233},{"dy":473.87540801335126,"c":218.2044001822919,"w":267.5911996354162},{"dy":468.0799842445181,"c":155.90029480149738,"w":253.01169942444187}],"spikes":[{"y":1742.1117370865811,"side":"left","depth":54,"height":33.91665253508836},{"y":2330.6820974005286,"side":"right","depth":54,"height":37.82420977577567}],"checkpoints":[1101,2037]},{"id":7,"params":{"speed":178,"width":259,"amp":54,"wavelength":461,"length":2863,"spikeDensity":0.3347368421052631,"spikePairs":false,"checkpoints":2},"seed":20316245,"speed":178,"length":2863,"start":{"y":0,"c":180,"w":259},"segments":[{"dy":240,"c":194,"w":259},{"dy":536.8516599575989,"c":221.43864416788333,"w":261.12271166423335},{"dy":494.13841285407557,"c":168.14289462530053,"w":266.28668427243826},{"dy":492.199465449527,"c":139.3660498867603,"w":262.7320997735206},{"dy":419.52956482153377,"c":174.41389709618875,"w":248.13207285215148},{"dy":430.7294257326985,"c":214.16658720437903,"w":253.47483796263114},{"dy":541.4652618000282,"c":161.49396491144785,"w":255.32804568013177},{"dy":424.71718007028085,"c":131.93504110897425,"w":247.8700822179485}],"spikes":[{"y":1101.861281984307,"side":"left","depth":54,"height":28.681900091469288},{"y":1261.1772225407847,"side":"right","depth":54,"height":36.80210458021611},{"y":1391.979769251001,"side":"right","depth":54,"height":35.00391716789454},{"y":1577.8797721682674,"side":"right","depth":54,"height":30.50410179886967},{"y":1749.346816712085,"side":"left","depth":54,"height":27.793019700795412},{"y":2534.4370507581802,"side":"left","depth":54,"height":27.444892219267786}],"checkpoints":[1190,2119]},{"id":8,"params":{"speed":183,"width":252,"amp":56,"wavelength":448,"length":2974,"spikeDensity":0.3505263157894737,"spikePairs":true,"checkpoints":2},"seed":20324164,"speed":183,"length":2974,"start":{"y":0,"c":180,"w":252},"segments":[{"dy":240,"c":166,"w":252},{"dy":366.42264840602877,"c":223.98004996748642,"w":247.41976368572563},{"dy":531.2134666025639,"c":155.2957468610257,"w":259.11854262784124},{"dy":505.3177293002607,"c":218.61896095748992,"w":266.76207808502016},{"dy":521.8971259117127,"c":175.27527828959748,"w":265.7617283882573},{"dy":402.56115447878847,"c":227.09782909661533,"w":249.80434180676934},{"dy":449.358955836296,"c":194.26451183384285,"w":256.07529631320386},{"dy":491.40027520656577,"c":224.05249833945186,"w":255.8950033210963}],"spikes":[{"y":1135.090330523944,"side":"right","depth":54,"height":27.491886717267334},{"y":1228.2659875376323,"side":"left","depth":54,"height":31.361895610578358},{"y":1690.7780971369075,"side":"right","depth":54,"height":33.86107458546758},{"y":1782.8864882003593,"side":"left","depth":54,"height":28.278762000612915},{"y":2126.511379969449,"side":"left","depth":54,"height":37.86990901827812},{"y":2219.4453586764953,"side":"right","depth":54,"height":30.11805658508092}],"checkpoints":[1325,2291]},{"id":9,"params":{"speed":188,"width":245,"amp":59,"wavelength":435,"length":3084,"spikeDensity":0.36631578947368415,"spikePairs":true,"checkpoints":2},"seed":20436812,"speed":188,"length":3084,"start":{"y":0,"c":180,"w":245},"segments":[{"dy":240,"c":166,"w":245},{"dy":427.5699117751792,"c":216.5828458812204,"w":248.67267404184676},{"dy":399.9036634359509,"c":181.5907892951509,"w":255.62468683249318},{"dy":466.70911216316745,"c":148.21680433537114,"w":233.91210006582548},{"dy":441.13097111927345,"c":180.67022274859482,"w":253.05965800369157},{"dy":493.99651865987107,"c":135.79162546050503,"w":236.32515213480218},{"dy":487.14450679253787,"c":175.558804120461,"w":243.59238001089543},{"dy":438.2277005533688,"c":227.39121071090923,"w":249.21757857818153},{"dy":430.0786783131771,"c":151.5562422706862,"w":257.90246025719676}],"spikes":[{"y":1106.1407861136322,"side":"right","depth":54,"height":37.949446056969464},{"y":1190.7597383417574,"side":"left","depth":54,"height":35.034486941061914},{"y":2349.2667067910597,"side":"left","depth":54,"height":30.237820936366916},{"y":2428.946694107076,"side":"right","depth":54,"height":35.765891269780695}],"checkpoints":[1279,2507]},{"id":10,"params":{"speed":193,"width":238,"amp":62,"wavelength":422,"length":3195,"spikeDensity":0.3821052631578947,"spikePairs":true,"checkpoints":2},"seed":20340002,"speed":193,"length":3195,"start":{"y":0,"c":180,"w":238},"segments":[{"dy":240,"c":194,"w":238},{"dy":390.4523060375825,"c":159.55079857001547,"w":251.27387126302347},{"dy":466.72686991710225,"c":131.94432984347452,"w":247.88865968694907},{"dy":413.1313893973827,"c":172.03488268737212,"w":246.09474264178425},{"dy":351.3044427156449,"c":221.15751469346225,"w":228.76999570921063},{"dy":424.7914643008264,"c":152.58743752480012,"w":226.35002690728754},{"dy":401.0728992067279,"c":209.1495255648763,"w":239.4571371418424},{"dy":414.18665945585826,"c":236.533548727436,"w":230.932902545128},{"dy":348.1310924088584,"c":183.24158788892908,"w":243.18408557780083},{"dy":344.3260278750213,"c":129.2920380157139,"w":242.5840760314278}],"spikes":[{"y":802.0046663517115,"side":"left","depth":54,"height":36.00839556194842},{"y":874.9871817351218,"side":"right","depth":54,"height":31.767243715934455},{"y":1123.5555802324573,"side":"left","depth":54,"height":28.6742933858186},{"y":1212.817439147991,"side":"right","depth":54,"height":33.806056139059365},{"y":2335.976683275951,"side":"left","depth":54,"height":26.480222878046334},{"y":2412.6440281196647,"side":"right","depth":54,"height":27.169826398603618}],"checkpoints":[1323,2499]},{"id":11,"params":{"speed":197,"width":232,"amp":64,"wavelength":408,"length":3305,"spikeDensity":0.39789473684210525,"spikePairs":true,"checkpoints":2},"seed":20347921,"speed":197,"length":3305,"start":{"y":0,"c":180,"w":232},"segments":[{"dy":240,"c":194,"w":232},{"dy":439.1435558930041,"c":231.98573907211426,"w":240.02852185577152},{"dy":359.1600042030216,"c":175.69034956067804,"w":241.18479625418783},{"dy":364.9570046782494,"c":117.2458939309418,"w":218.4917878618836},{"dy":379.30619670823216,"c":185.85744803652165,"w":219.72469526670872},{"dy":463.21041871458306,"c":121.4645376042649,"w":226.9290752085298},{"dy":462.1475921854376,"c":176.7389188626036,"w":234.80485013693573},{"dy":358.1687874533236,"c":126.78378995969891,"w":237.56757991939782},{"dy":392.14223400950414,"c":207.138046605289,"w":219.68392705850303},{"dy":396.61915636360663,"c":160.93029799029233,"w":238.05609097830953}],"spikes":[{"y":810.9616039066477,"side":"left","depth":54,"height":29.52915584202856},{"y":896.6009802848715,"side":"right","depth":54,"height":36.02035698760301},{"y":1398.9090437426948,"side":"right","depth":52.439939340574,"height":28.82850452605635},{"y":1497.7138628454027,"side":"left","depth":52.48103940026483,"height":32.7417032038793},{"y":1798.4665828101179,"side":"left","depth":52.73894860790067,"height":35.057637598365545},{"y":1870.4022047718145,"side":"right","depth":52.882845411726315,"height":35.174043823964894},{"y":2201.6363468862155,"side":"left","depth":54,"height":28.45949997007847},{"y":2275.7006676499554,"side":"right","depth":54,"height":34.604617519304156},{"y":2929.1931653741667,"side":"right","depth":54,"height":27.57441829983145},{"y":2995,"side":"left","depth":54,"height":37.00410952512175}],"checkpoints":[1322,2446]},{"id":12,"params":{"speed":202,"width":225,"amp":67,"wavelength":395,"length":3416,"spikeDensity":0.41368421052631577,"spikePairs":true,"checkpoints":2},"seed":20355840,"speed":202,"length":3416,"start":{"y":0,"c":180,"w":225},"segments":[{"dy":240,"c":194,"w":225},{"dy":413.32709071738645,"c":241.82828337245155,"w":220.3434332550969},{"dy":441.5088335284963,"c":180.77544914509636,"w":233.00278880051337},{"dy":400.0462970533408,"c":223.76395831769332,"w":229.5724177218508},{"dy":396.6809800234623,"c":162.11609452116537,"w":227.44185656891204},{"dy":440.9938568412326,"c":222.22189960133983,"w":223.25565320136954},{"dy":441.34647612739354,"c":163.64856449343498,"w":224.42166091455147},{"dy":445.99446480255574,"c":119.66762441967148,"w":223.33524883934297},{"dy":420.4291968992911,"c":198.04509767170532,"w":219.80920532648452},{"dy":399.41268739756197,"c":236.44463036058005,"w":231.1107392788399}],"spikes":[{"y":759.7206525319507,"side":"left","depth":53.297351580578244,"height":37.66741663776338},{"y":845.2990045511452,"side":"right","depth":54,"height":35.56763661745936},{"y":1534.3606568210007,"side":"right","depth":54,"height":37.593786753714085},{"y":1605.0450621187392,"side":"left","depth":54,"height":33.13514082040638},{"y":1803.3514293953644,"side":"left","depth":54,"height":36.357368528842926},{"y":1900.708942455584,"side":"right","depth":54,"height":35.51177576743066},{"y":2321.493997331962,"side":"right","depth":53.582916076779185,"height":27.73241305910051},{"y":2395.3552956564827,"side":"left","depth":53.59510491812446,"height":26.413763421587646},{"y":2669.60936672296,"side":"right","depth":53.824379418262986,"height":26.602170896716416},{"y":2767.637346028807,"side":"left","depth":53.86105945515189,"height":31.53657615184784}],"checkpoints":[1366,2528]},{"id":13,"params":{"speed":207,"width":218,"amp":70,"wavelength":382,"length":3526,"spikeDensity":0.4294736842105263,"spikePairs":true,"checkpoints":2},"seed":20363759,"speed":207,"length":3526,"start":{"y":0,"c":180,"w":218},"segments":[{"dy":240,"c":166,"w":218},{"dy":333.6459671104327,"c":236.168274163967,"w":225.08845240727067},{"dy":433.48682702165104,"c":194.2826944772387,"w":211.9395759832114},{"dy":409.21844656318444,"c":145.33194519637618,"w":227.0678507596813},{"dy":381.5266572162509,"c":112.67532255873084,"w":209.35064511746168},{"dy":390.29158319570115,"c":188.4175559632713,"w":221.18903110761195},{"dy":370.10704696457833,"c":242.27092603532597,"w":219.45814792934806},{"dy":379.2538328351452,"c":170.77082411382813,"w":229.97674950076268},{"dy":333.5521521411838,"c":246.24176338752733,"w":211.51647322494534},{"dy":321.5336672043427,"c":168.8630546414759,"w":207.82910742577164},{"dy":452.0865253454076,"c":235.76454616764096,"w":216.7404247932881}],"spikes":[{"y":651.9774863976743,"side":"left","depth":53.7737337797423,"height":29.661404814571142},{"y":738.5995440929946,"side":"right","depth":53.021783188076775,"height":29.887038403190672},{"y":1190.8384636767328,"side":"right","depth":52.39080988385752,"height":34.79681972786784},{"y":1286.2034118524723,"side":"left","depth":53.66304714546429,"height":32.792746582999825},{"y":2280.314954828466,"side":"left","depth":53.02500636813749,"height":37.40666360128671},{"y":2375.7576038248103,"side":"right","depth":52.87319313306512,"height":37.35820035357028},{"y":3104.491919772389,"side":"right","depth":52.97531674478877,"height":27.838492684997618},{"y":3199.361204208958,"side":"left","depth":51.2504505132891,"height":35.03238629363477}],"checkpoints":[1410,2609]},{"id":14,"params":{"speed":212,"width":211,"amp":72,"wavelength":369,"length":3637,"spikeDensity":0.4452631578947368,"spikePairs":true,"checkpoints":2},"seed":20476407,"speed":212,"length":3637,"start":{"y":0,"c":180,"w":211},"segments":[{"dy":240,"c":166,"w":211},{"dy":364.49168154699737,"c":114.30528377433774,"w":212.61056754867548},{"dy":320.8137968016788,"c":181.37541769081264,"w":204.71597123003565},{"dy":413.75249495124444,"c":117.23786525012459,"w":218.47573050024917},{"dy":407.17701024888083,"c":161.96802278648596,"w":214.3327828161884},{"dy":385.8200812716966,"c":201.8201731111249,"w":207.493628320666},{"dy":396.029010605067,"c":245.87146085143553,"w":212.2570782971289},{"dy":410.7335453812034,"c":196.7135438623512,"w":219.28831385625523},{"dy":409.70554606374344,"c":245.24489031985868,"w":213.51021936028263},{"dy":351.491729158256,"c":187.21513015760576,"w":214.85416067457757},{"dy":414.8620125995949,"c":251.01837898433212,"w":201.96324203133582}],"spikes":[{"y":584.0980985999458,"side":"left","depth":51.02355822131081,"height":27.53094791714102},{"y":675.4960216228679,"side":"right","depth":50.80661025875661,"height":31.38768769055605},{"y":875.0139541261025,"side":"right","depth":49.244415059724986,"height":34.3097668197006},{"y":961.1451689377777,"side":"left","depth":49.192594433901434,"height":36.03667814005166},{"y":1111.5626856693182,"side":"left","depth":50.5255534469392,"height":37.32204434927553},{"y":1196.6678638992519,"side":"right","depth":51.55956145894964,"height":33.30053439177573},{"y":1560.2213381483757,"side":"left","depth":51.86981414214941,"height":37.514064656570554},{"y":1628.8816703228483,"side":"right","depth":51.630110848614045,"height":34.845535217784345},{"y":1786.0144076357585,"side":"right","depth":51.397190242568755,"height":33.240202302113175},{"y":1859.9901244884943,"side":"left","depth":51.11226344535843,"height":31.963425825349987},{"y":2408.25389979617,"side":"left","depth":50.70231285514179,"height":34.29976154305041},{"y":2478.5718076130347,"side":"right","depth":50.898172270126764,"height":32.808594345115125},{"y":2926.6093473961078,"side":"right","depth":52.625519497344136,"height":32.8884076429531},{"y":3002.715356900562,"side":"left","depth":52.54762029592048,"height":27.012377158738673},{"y":3198.631158033267,"side":"right","depth":51.652186235724294,"height":30.570668015629053},{"y":3294.8086606208576,"side":"left","depth":51.30043913252035,"height":36.020105343312025}],"checkpoints":[1455,2691]},{"id":15,"params":{"speed":216,"width":204,"amp":75,"wavelength":356,"length":3747,"spikeDensity":0.4610526315789474,"spikePairs":true,"checkpoints":2},"seed":20379597,"speed":216,"length":3747,"start":{"y":0,"c":180,"w":204},"segments":[{"dy":240,"c":194,"w":204},{"dy":347.23682098425934,"c":245.76411374210147,"w":197.1250023818761},{"dy":298.3559586171061,"c":184.1274673145963,"w":205.22404845423998},{"dy":414.36088857389996,"c":234.64851909439312,"w":210.98814440131187},{"dy":411.87491111792633,"c":164.51777075394057,"w":208.07341757331042},{"dy":373.4720669135452,"c":219.84960306354333,"w":193.35095995031296},{"dy":377.3566333532335,"c":141.67589662078535,"w":193.7364438997954},{"dy":344.21017834059876,"c":228.53729461703915,"w":209.72748224604877},{"dy":422.3725883886218,"c":144.83670718595386,"w":194.68405390441418},{"dy":397.1348818484694,"c":232.06635195738636,"w":204.08022462017834},{"dy":422.17609810084105,"c":145.93158559995936,"w":204.59106874868272},{"dy":372.0972580157222,"c":112.61960839454083,"w":209.23921678908167}],"spikes":[{"y":1632.243480402924,"side":"left","depth":50.00010930679362,"height":30.033586651086807},{"y":1734.2882452812753,"side":"right","depth":49.906184059310974,"height":34.761222494766116},{"y":2021.2683643682803,"side":"right","depth":46.65437296983911,"height":26.23967031762004},{"y":2115.1504048926254,"side":"left","depth":46.405651403528665,"height":29.85840116161853},{"y":2620.1887829830434,"side":"right","depth":48.16118207276253,"height":27.291518123820424},{"y":2691.6597942271133,"side":"left","depth":49.36798164035671,"height":35.97452746797353},{"y":2897.777289259997,"side":"right","depth":49.93738860991337,"height":30.40537820663303},{"y":2990.8644415093554,"side":"left","depth":48.89197452892346,"height":27.821722229011357},{"y":3256.917600544806,"side":"left","depth":46.751091112709204,"height":28.38382034189999},{"y":3340.926327374983,"side":"right","depth":47.136354812021665,"height":32.66672463528812}],"checkpoints":[1499,2773]},{"id":16,"params":{"speed":221,"width":197,"amp":77,"wavelength":343,"length":3858,"spikeDensity":0.47684210526315784,"spikePairs":true,"checkpoints":2},"seed":20387516,"speed":221,"length":3858,"start":{"y":0,"c":180,"w":197},"segments":[{"dy":240,"c":194,"w":197},{"dy":354.59332663938403,"c":144.6234139898792,"w":194.1765476613026},{"dy":404.0577130301856,"c":187.506382552383,"w":189.89939897486937},{"dy":352.79313454004,"c":243.56332995651755,"w":208.4360894871876},{"dy":291.3339950196446,"c":200.7470940373023,"w":192.55226692299357},{"dy":321.36741001717746,"c":246.79267535745166,"w":203.36326187327506},{"dy":371.73456631274894,"c":185.1814831115771,"w":200.73823165992275},{"dy":285.131722095236,"c":110.54789305959362,"w":205.09578611918724},{"dy":391.65913946777573,"c":160.80260439630598,"w":187.84819298240353},{"dy":311.3674678862094,"c":104.644443164533,"w":193.288886329066},{"dy":378.6708340958694,"c":160.1026908186963,"w":192.53821187551134},{"dy":304.6662904355676,"c":237.23094894376118,"w":205.404992160555},{"dy":313.17763237720374,"c":161.8616212401888,"w":197.85729273868725}],"spikes":[{"y":669.1624293234134,"side":"left","depth":46.518495671691475,"height":35.27410220913589},{"y":765.6366417271435,"side":"right","depth":46.21157292811939,"height":37.80635232664645},{"y":1070.145890639481,"side":"left","depth":46.01164169284049,"height":34.31213174853474},{"y":1152.007217155579,"side":"right","depth":47.347067142805386,"height":34.61810120474547},{"y":1395.9110368356478,"side":"right","depth":49.80970064939916,"height":34.65160197857767},{"y":1481.7062705970548,"side":"left","depth":48.43377985892099,"height":29.756523883901536},{"y":1776.889438472833,"side":"left","depth":47.176643424143606,"height":32.8464696733281},{"y":1865.6224916651472,"side":"right","depth":48.25056930034943,"height":30.321642700582743},{"y":2358.316189348133,"side":"right","depth":48.193071405609956,"height":27.969738164916635},{"y":2461.7101377644044,"side":"left","depth":48.604205511915595,"height":33.11558098997921},{"y":2947.0907242838875,"side":"left","depth":45.36338180873723,"height":34.448295472189784},{"y":3026.7005666646683,"side":"right","depth":45.09009644159186,"height":26.27777439635247},{"y":3121.2772948628617,"side":"left","depth":45.43786351616121,"height":31.39056237321347},{"y":3219.4802113541978,"side":"right","depth":46.058493704193744,"height":28.86758154258132}],"checkpoints":[1588,2855]},{"id":17,"params":{"speed":226,"width":191,"amp":80,"wavelength":329,"length":3968,"spikeDensity":0.49263157894736836,"spikePairs":true,"checkpoints":2},"seed":20395435,"speed":226,"length":3968,"start":{"y":0,"c":180,"w":191},"segments":[{"dy":240,"c":166,"w":191},{"dy":326.1741070476361,"c":119.74698143359274,"w":183.69584191738625},{"dy":358.32623430211095,"c":176.4034478822723,"w":187.73926677716895},{"dy":346.56765967281535,"c":123.16632313467562,"w":191.31584834052248},{"dy":319.5419303848407,"c":199.70910498779267,"w":202.38998654602094},{"dy":325.57957572843884,"c":261.87686100513673,"w":180.2462779897265},{"dy":389.2587259678169,"c":205.45997867179102,"w":186.2017707544379},{"dy":280.27624896848556,"c":252.22458446867302,"w":199.55083106265403},{"dy":365.75762109281504,"c":190.86461999829396,"w":186.26129483190365},{"dy":295.64776542792106,"c":141.5961058046995,"w":183.34889891008845},{"dy":300.2961713962259,"c":99.52510624058078,"w":183.05021248116157},{"dy":274.23881391072655,"c":176.167109906259,"w":186.61047572875395},{"dy":290.80174129745,"c":221.18126838985364,"w":182.0736853124853},{"dy":392.9997769459151,"c":255.1844383141771,"w":193.63112337164577}],"spikes":[{"y":719.5513871737485,"side":"right","depth":44.46345100387981,"height":36.10767277888954},{"y":830.0002841668789,"side":"left","depth":44.90019949987709,"height":36.230731257237494},{"y":1403.4791466898646,"side":"left","depth":46.89153613603161,"height":35.44585265498608},{"y":1477.2806730119937,"side":"right","depth":47.830602150802385,"height":36.63171507883817},{"y":2677.490483716861,"side":"left","depth":47.42194189132895,"height":32.5405152766034},{"y":2773.1196098435967,"side":"right","depth":46.235607475946956,"height":28.23574963863939},{"y":2895.714745612965,"side":"left","depth":44.88219010006739,"height":30.049453124403954},{"y":2981.0907450096106,"side":"right","depth":44.685555247593655,"height":36.55118721257895},{"y":3511.383566216957,"side":"right","depth":43.93456892987538,"height":27.456420426256955},{"y":3624.07091973996,"side":"left","depth":44.08641983420841,"height":37.01388059742749}],"checkpoints":[1587,3071]},{"id":18,"params":{"speed":231,"width":184,"amp":83,"wavelength":316,"length":4079,"spikeDensity":0.5084210526315789,"spikePairs":true,"checkpoints":2},"seed":20508083,"speed":231,"length":4079,"start":{"y":0,"c":180,"w":184},"segments":[{"dy":240,"c":194,"w":184},{"dy":354.8357737135143,"c":105.30987863484769,"w":194.61975726969538},{"dy":342.3108351882547,"c":153.7344888913329,"w":192.96116083830594},{"dy":331.04619483761485,"c":104.43467169344424,"w":192.8693433868885},{"dy":293.4322325158864,"c":170.88537231547292,"w":184.63551766067744},{"dy":261.1556415371597,"c":101.54821595642716,"w":187.0964319128543},{"dy":365.44141006506993,"c":197.05626843238716,"w":189.0738293019682},{"dy":311.24451291263085,"c":121.5160938508343,"w":189.28565080665052},{"dy":337.6378543499859,"c":172.3264936420368,"w":173.83710647076367},{"dy":370.0198950447143,"c":101.89824108909816,"w":187.79648217819633},{"dy":317.4302430473267,"c":147.71887716057245,"w":192.57422559693455},{"dy":348.73800425753006,"c":215.9164455982158,"w":187.26049447655677},{"dy":336.83022818751624,"c":265.16518242467197,"w":173.6696351506561},{"dy":296.90236996449494,"c":179.27095707219328,"w":182.02552209235728}],"spikes":[{"y":743.4276573892391,"side":"right","depth":46.55063152597582,"height":30.75772575289011},{"y":842.4690920189681,"side":"left","depth":46.381203983487296,"height":28.659846027381718},{"y":1037.7278649042396,"side":"left","depth":46.30602910371489,"height":30.38155545759946},{"y":1118.2293922681881,"side":"right","depth":46.29803948375747,"height":31.483088115230203},{"y":1476.3962215303065,"side":"left","depth":44.69611116897761,"height":32.0437833853066},{"y":1557.4573665457535,"side":"right","depth":44.313507686921525,"height":28.10101026017219},{"y":1747.858709642308,"side":"right","depth":44.7911052093701,"height":37.20250699389726},{"y":1823.719691942162,"side":"left","depth":44.90315139036412,"height":29.394225537776947},{"y":2246.892121577501,"side":"right","depth":45.382047368343734,"height":35.383849976584315},{"y":2363.073626247458,"side":"left","depth":45.40804027877179,"height":37.060448786243796},{"y":2875.126768129759,"side":"right","depth":41.80743600844781,"height":37.809248209930956},{"y":2987.747411378917,"side":"left","depth":42.91415680554931,"height":33.2829542607069},{"y":3560.6154200778633,"side":"left","depth":46.1844637634769,"height":29.89957692567259},{"y":3643.7215412215824,"side":"right","depth":45.884350913739326,"height":37.01160879712552}],"checkpoints":[1632,3063]},{"id":19,"params":{"speed":235,"width":177,"amp":85,"wavelength":303,"length":4189,"spikeDensity":0.5242105263157895,"spikePairs":true,"checkpoints":2},"seed":20411273,"speed":235,"length":4189,"start":{"y":0,"c":180,"w":177},"segments":[{"dy":240,"c":166,"w":177},{"dy":289.6931185472756,"c":116.1450340471929,"w":185.778848174829},{"dy":304.89978436678643,"c":217.6653576446697,"w":178.929771214826},{"dy":328.49387955637644,"c":123.88517808675533,"w":177.89219033296217},{"dy":322.53464856594815,"c":189.26538804074517,"w":185.79857816353442},{"dy":287.73210361534734,"c":236.02241096936632,"w":175.92689238348976},{"dy":304.3866042799316,"c":137.42052483686712,"w":167.2630546649359},{"dy":301.2231598176063,"c":92.70969221912324,"w":169.41938443824648},{"dy":348.49608758920795,"c":178.37553417749237,"w":167.1718553794641},{"dy":313.7352174701168,"c":98.24061308233533,"w":180.48122616467066},{"dy":248.45069597940892,"c":168.3640813508816,"w":181.81950246828606},{"dy":327.7756095606833,"c":95.34576973488088,"w":174.69153946976175},{"dy":245.46584885129687,"c":190.81515475147404,"w":167.1966614898853},{"dy":262.69658506717496,"c":97.37539131596219,"w":178.75078263192438},{"dy":342.80665019173193,"c":184.94366862555268,"w":181.7000835830625},{"dy":249.30588384987823,"c":256.88385469332803,"w":174.20946699284946}],"spikes":[{"y":956.4213575233077,"side":"right","depth":42.867771726227566,"height":27.26321250665933},{"y":1039.455860422228,"side":"left","depth":42.771478359196024,"height":27.006664316169918},{"y":1364.3581370048296,"side":"left","depth":44.003297129904475,"height":37.22088431380689},{"y":1458.2459897134129,"side":"right","depth":44.55812950475943,"height":27.897594364359975},{"y":1561.182016782934,"side":"left","depth":44.210871778107006,"height":37.451006417162716},{"y":1641.8274514589236,"side":"right","depth":43.24793329871503,"height":36.377851265482605},{"y":2305.3677747754564,"side":"left","depth":40.58809773411584,"height":32.9588176663965},{"y":2414.187484984125,"side":"right","depth":40.64716915022619,"height":26.345310631208122},{"y":2521.2783261547506,"side":"left","depth":40.46751966395182,"height":31.224452953785658},{"y":2611.007729141823,"side":"right","depth":40.256700295776355,"height":33.14658017363399},{"y":2761.1554295326923,"side":"left","depth":40.21130188609509,"height":36.79399568680674},{"y":2870.0066986640395,"side":"right","depth":41.49013176638442,"height":34.7724614450708},{"y":3215.953745980551,"side":"right","depth":43.57186231474434,"height":35.00824069045484},{"y":3319.199521193604,"side":"left","depth":43.60259300067738,"height":29.5942888148129},{"y":3654.223375486261,"side":"left","depth":41.82803330372996,"height":35.00804977025837},{"y":3756.410930478852,"side":"right","depth":40.84079960058012,"height":28.55782864615321}],"checkpoints":[1721,3100]},{"id":20,"params":{"speed":240,"width":170,"amp":88,"wavelength":290,"length":4300,"spikeDensity":0.54,"spikePairs":true,"checkpoints":2},"seed":20419192,"speed":240,"length":4300,"start":{"y":0,"c":180,"w":170},"segments":[{"dy":240,"c":194,"w":170},{"dy":327.5559938782826,"c":270.6053881955333,"w":162.78922360893338},{"dy":331.26370385847986,"c":216.0735394197516,"w":173.5086211820133},{"dy":281.48972418997437,"c":263.10654893405734,"w":177.78690213188528},{"dy":319.7119717206806,"c":178.42005092808975,"w":176.70860743550583},{"dy":320.7548640361056,"c":97.72827621279282,"w":172.39299625800922},{"dy":245.40270332433283,"c":157.05448424462227,"w":162.38006802881137},{"dy":306.2250166442245,"c":230.63280178215354,"w":177.79273784449322},{"dy":323.4633819749579,"c":156.78084868118165,"w":178.19132556468247},{"dy":301.0411101048812,"c":89.30308124008589,"w":162.60616248017178},{"dy":346.14226292353123,"c":184.31994385332803,"w":162.2255908757448},{"dy":333.8717468827963,"c":95.32172303362749,"w":174.64344606725498},{"dy":304.66441843658686,"c":164.6418281072285,"w":168.17389622051266},{"dy":289.71585063729435,"c":88.72541877147741,"w":161.45083754295482},{"dy":307.1368068680167,"c":146.99676953763702,"w":162.14858243148774},{"dy":340.3775313459337,"c":89.47263313187285,"w":162.9452662637457}],"spikes":[{"y":885.9343094500043,"side":"right","depth":41.63247666387161,"height":36.890802410431206},{"y":989.1384561897331,"side":"left","depth":41.881544668245574,"height":32.142533293925226},{"y":1206.9967253163234,"side":"left","depth":42.66443276955536,"height":31.4281024672091},{"y":1309.4768854825347,"side":"right","depth":42.57789230519692,"height":37.67898040637374},{"y":1481.2968521751222,"side":"right","depth":42.41224985929696,"height":37.47373905777931},{"y":1603.9309900733215,"side":"left","depth":42.16423103906583,"height":31.740771575830877},{"y":2054.8777385735943,"side":"right","depth":38.98376930024337,"height":27.297416483052075},{"y":2143.0167102125347,"side":"left","depth":39.516710552699074,"height":30.049907507374883},{"y":2325.949738414614,"side":"right","depth":42.46416437763463,"height":27.779538979753852},{"y":2420.99952270641,"side":"left","depth":42.67548634598989,"height":27.807991542853415},{"y":3219.0941203256198,"side":"left","depth":38.96012050381511,"height":35.04611752182245},{"y":3331.0340151799714,"side":"right","depth":38.93441315359353,"height":37.70772780012339},{"y":3806.0089047032916,"side":"left","depth":41.32239610721579,"height":31.28123523760587},{"y":3916.8264249189147,"side":"right","depth":40.52849901711143,"height":33.91560840141028}],"checkpoints":[1720,3407]}]'),b0={levels:S0},wc=b0;function os(){return wc.levels.length}function E0(i){const e=wc.levels[i-1];if(!e||e.id!==i)throw new Error(`No level ${i}`);return e}const Ll=new Map;function w0(i){let e=Ll.get(i);return e||(e=pr.fromLevel(E0(i)),Ll.set(i,e)),e}class Tc{state;constructor(e){this.state=e>>>0}next(){this.state=this.state+1831565813|0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e,t){return e+Math.floor(this.next()*(t-e+1))}pick(e){return e[this.int(0,e.length-1)]}chance(e){return this.next()<e}shuffle(e){for(let t=e.length-1;t>0;t--){const n=this.int(0,t);[e[t],e[n]]=[e[n],e[t]]}return e}}function T0(i){const e=new Tc(20260812),t=[];for(let r=0;r<90;r++)t.push({x:e.next()*hn,y:e.next()*at,s:.8+e.next()*1.6,tw:e.next()*Math.PI*2});let n=0;const s=(r,a,o,l)=>{r.save(),r.strokeStyle=o,r.globalAlpha=.5,r.lineWidth=3,r.lineCap="round",r.shadowColor=o,r.shadowBlur=16,r.beginPath();for(let c=-20;c<=at+20;c+=10){const d=hn/2+Math.sin((c-n*90)*.011+a)*l;c===-20?r.moveTo(d,c):r.lineTo(d,c)}r.stroke(),r.restore()};return{enter(){i?.enterAmbient()},exit(){},update(r,a){n+=a;for(const o of t)o.y+=a*(14*o.s),o.y>at+4&&(o.y=-4,o.x=(o.x*7919+37)%hn)},render(r){if(i){i.renderAmbient(r.canvas.view.viewW,r.canvas.view.viewH);return}const a=r.canvas;if(!(a instanceof er))return;const o=a.view.ctx,l=a.view,c=-l.offX/l.scale-2,d=-l.offY/l.scale-2,p=l.viewW/l.scale+4,h=l.viewH/l.scale+4,m=o.createLinearGradient(0,d,0,d+h);m.addColorStop(0,ge.bgDeep),m.addColorStop(1,ge.bg),o.fillStyle=m,o.fillRect(c,d,p,h);const v=[{x:70,y:150,rad:150,color:ge.accentDeep,a:.16,ph:0},{x:300,y:430,rad:175,color:ge.violetDeep,a:.22,ph:2.1},{x:110,y:610,rad:130,color:ge.violet,a:.1,ph:4.2}];for(const x of v){const f=x.y+Math.sin(n*.11+x.ph)*22,u=x.x+Math.cos(n*.07+x.ph)*14,S=o.createRadialGradient(u,f,0,u,f,x.rad);S.addColorStop(0,x.color),S.addColorStop(1,"rgba(7,10,26,0)"),o.globalAlpha=x.a,o.fillStyle=S,o.fillRect(u-x.rad,f-x.rad,x.rad*2,x.rad*2)}for(const x of t)o.globalAlpha=.25+.3*(.5+.5*Math.sin(n*1.6+x.tw)),o.fillStyle=x.s>2?ge.accentSoft:"#8fa3c8",o.fillRect(x.x-x.s/2,x.y-x.s/2,x.s,x.s);o.globalAlpha=1,s(o,0,ge.accent,86),s(o,Math.PI*.66,ge.violet,104)}}}const A0=430,R0=110;function ls(i,e,t){return i<e?e:i>t?t:i}function Ya(i){const e=(i-1)/19;return{speed:Math.round(150+e*90),width:Math.round(300-e*130),amp:Math.round(38+e*50),wavelength:Math.round(540-e*250),length:Math.round(2200+e*2100),spikeDensity:.24+e*.3,spikePairs:i>=8,checkpoints:2}}function Dl(i){const e=ls(i/14e3,0,1),t=Ya(20);return{...t,width:Math.round(t.width-e*18),wavelength:Math.round(t.wavelength-e*60),spikeDensity:t.spikeDensity+e*.1,checkpoints:0}}function C0(i){return{dir:i.chance(.5)?1:-1,lastRowY:0}}function P0(i,e,t,n){const s=Math.max(R0,e.wavelength*(.8+i.next()*.4));i.chance(.62)&&(n.dir=n.dir===1?-1:1);const r=f0*2/Math.PI*s;let a=t.c,o=ls(e.width*(.94+i.next()*.12),u0,e.width*1.14);o=Math.min(o,hn-2*Qr);const l=o/2+Qr,c=hn-o/2-Qr,d=Math.max(0,n.dir===1?c-t.c:t.c-l),p=Math.min(e.amp*(.55+i.next()*.75),r,d);return a=t.c+n.dir*p,p<e.amp*.25&&r>e.amp*.4&&(n.dir=n.dir===1?-1:1,a=t.c+n.dir*Math.min(e.amp*(.55+i.next()*.75),r)),a=ls(a,l,c),{y:t.y+s,c:a,w:o}}function L0(i,e,t,n,s,r){const a=[];if(s-n<60)return a;const o=p=>t(p,"w"),l=e.speed*p0;let c=n+i.next()*70;const d=(p,h)=>{const m=o(p),v=Math.min(ls(m*.24,30,54),m-m0);return v<24?null:{y:p,side:h,depth:v,height:26+i.next()*12}};for(;c<s;){const p=l*(1.05+i.next()*1.5)*(e.spikePairs?1.35:1);if(c+=p,c>=s)break;if(i.next()>=e.spikeDensity||c-r.lastRowY<l)continue;const h=i.chance(.5)?"left":"right",m=d(c,h);if(!m)continue;a.push(m);let v=m.y;if(e.spikePairs){const x=ls(c+l*(.85+i.next()*.5),n+30,s-10),f=d(x,h==="left"?"right":"left");f&&(a.push(f),v=f.y)}r.lastRowY=Math.max(r.lastRowY,v)}return a.sort((p,h)=>p.y-h.y),a}function D0(i){const e=new Tc(i),t=C0(e),n={y:0,c:hn/2,w:Ya(20).width},s={next(r){return P0(e,Dl(r.y),r,t)},spikes(r,a,o){const l=Dl((a.y+r.y)/2),c=Math.max(a.y,A0);return L0(e,l,o,c,r.y,t)}};return new y0(n,Ya(20).speed,s)}const Il=["#45e0ff","#ffd803","#7f5af0","#2cb67d","#ff4d6d","#fffffe"];class I0{list=[];burstShards(e,t,n=26,s=ge.accent){for(let r=0;r<n;r++){const a=Math.random()*Math.PI*2,o=60+Math.random()*260;this.list.push({kind:"shard",x:e,y:t,vx:Math.cos(a)*o,vy:Math.sin(a)*o-60,rot:Math.random()*Math.PI,vr:(Math.random()-.5)*14,size:2.5+Math.random()*5,life:0,ttl:.5+Math.random()*.5,color:Math.random()<.7?s:ge.danger})}}ringPulse(e,t,n,s=ge.gold){this.list.push({kind:"ring",x:e,y:t,rx:n,color:s,life:0,ttl:.45})}exhaust(e,t,n,s,r=ge.accent){const a=-n*s*.16,o=26,l=2;for(let c=0;c<l;c++)this.list.push({kind:"mote",x:e+(Math.random()-.5)*3,y:t+8+Math.random()*3,vx:a*(.5+Math.random()*.6)+(Math.random()-.5)*o,vy:s*(.35+Math.random()*.3),size:1.2+Math.random()*1.6,color:Math.random()<.25?ge.accentSoft:r,life:0,ttl:.28+Math.random()*.22})}flipSpark(e,t,n=ge.accentSoft){for(let s=0;s<8;s++){const r=s/8*Math.PI*2+Math.random()*.5,a=90+Math.random()*70;this.list.push({kind:"mote",x:e,y:t,vx:Math.cos(r)*a,vy:Math.sin(r)*a,size:1.4+Math.random()*1.2,color:n,life:0,ttl:.18+Math.random()*.12})}}confetti(e=90,t=360){for(let n=0;n<e;n++)this.list.push({kind:"confetti",x:Math.random()*t,y:-20-Math.random()*200,vx:(Math.random()-.5)*40,vy:90+Math.random()*160,w:4+Math.random()*5,h:6+Math.random()*8,rot:Math.random()*Math.PI,vr:(Math.random()-.5)*10,phase:Math.random()*Math.PI*2,color:Il[n%Il.length],life:0,ttl:2.2+Math.random()*.9})}update(e){if(this.list.length===0)return;const t=[];for(const n of this.list)if(n.life+=e,!(n.life>=n.ttl)){if(n.kind==="shard")n.x+=n.vx*e,n.y+=n.vy*e,n.vy+=520*e,n.rot+=n.vr*e;else if(n.kind==="confetti")n.x+=(n.vx+Math.sin(n.life*5+n.phase)*30)*e,n.y+=n.vy*e,n.rot+=n.vr*e;else if(n.kind==="mote"){n.x+=n.vx*e,n.y+=n.vy*e;const s=Math.exp(-3.2*e);n.vx*=s,n.vy*=s}t.push(n)}this.list=t}draw(e){for(const t of this.list){const n=1-t.life/t.ttl;if(t.kind==="shard")e.save(),e.globalAlpha=Math.max(0,n),e.translate(t.x,t.y),e.rotate(t.rot),e.fillStyle=t.color,e.fillRect(-t.size/2,-t.size/2,t.size,t.size),e.restore();else if(t.kind==="confetti")e.save(),e.globalAlpha=Math.max(0,Math.min(1,n*2)),e.translate(t.x,t.y),e.rotate(t.rot),e.fillStyle=t.color,e.fillRect(-t.w/2,-t.h/2,t.w,t.h),e.restore();else if(t.kind==="mote")e.save(),e.globalAlpha=Math.max(0,n)*.85,e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,t.size*(.5+n*.5),0,Math.PI*2),e.fill(),e.restore();else{const s=t.life/t.ttl;e.save(),e.globalAlpha=Math.max(0,.9*(1-s)),e.strokeStyle=t.color,e.lineWidth=3*(1-s)+1,e.beginPath(),e.ellipse(t.x,t.y,t.rx*(1+s*.9),t.rx*.45*(1+s*.9),0,0,Math.PI*2),e.stroke(),e.restore()}}}clear(){this.list=[]}get size(){return this.list.length}}class U0{constructor(e,t){this.particles=e,this.currentArrowY=t}sy(e){return at*tn-(e-this.currentArrowY())}update(e){this.particles.update(e)}clear(){this.particles.clear()}exhaust(e,t,n,s){this.particles.exhaust(e,this.sy(t),n,s)}flipSpark(e,t){this.particles.flipSpark(e,this.sy(t))}burstShards(e,t){this.particles.burstShards(e,this.sy(t))}ringPulse(e,t,n,s=ge.gold){this.particles.ringPulse(e,this.sy(t),n,s)}confetti(){this.particles.confetti()}}const N0=.5,F0=.34,O0=.6;function Zn(i,e){return at*tn-(e-i.arrowY)}function B0(i,e,t){const n=i.ctx;if(n.save(),e.shakeT>0){const s=7*(e.shakeT/N0);n.translate((Math.random()-.5)*s*2,(Math.random()-.5)*s*2)}k0(n,i,e),e.course?(V0(n,e),W0(n,e),e.state!=="crashed"&&X0(n,e),t.draw(n),H0(n,i,e)):Ac(n,e),G0(n,i),n.restore()}function po(i){return{x:-i.offX/i.scale-2,y:-i.offY/i.scale-2,w:i.viewW/i.scale+4,h:i.viewH/i.scale+4}}function k0(i,e,t){const n=po(e),s=i.createLinearGradient(0,n.y,0,n.y+n.h);s.addColorStop(0,ge.bgDeep),s.addColorStop(1,ge.bg),i.fillStyle=s,i.fillRect(n.x,n.y,n.w,n.h),z0(i,t),Ac(i,t)}function z0(i,e){const n=[{wx:60,wy:180,rad:150,color:ge.accentDeep,a:.16},{wx:310,wy:470,rad:170,color:ge.violetDeep,a:.2},{wx:90,wy:760,rad:140,color:ge.violet,a:.1},{wx:280,wy:1050,rad:160,color:ge.accentDeep,a:.14}];i.save();for(const s of n){const r=s.wy+Math.sin(e.time*.07+s.wy)*26;let a=Zn(e,e.arrowY*.28+r);const o=720+s.rad*2;a=-s.rad+((a+s.rad)%o+o)%o;const l=i.createRadialGradient(s.wx,a,0,s.wx,a,s.rad);l.addColorStop(0,s.color),l.addColorStop(1,"rgba(7,10,26,0)"),i.globalAlpha=s.a,i.fillStyle=l,i.fillRect(s.wx-s.rad,a-s.rad,s.rad*2,s.rad*2)}i.restore()}function H0(i,e,t){if(t.flashT<=0||!t.flashKind)return;const n=t.flashKind==="crash"?F0:O0,s=t.flashT/n,r=t.flashKind==="crash"?ge.danger:ge.gold,a=po(e),o=Math.max(a.w,a.h)*(t.flashKind==="crash"?.75:1),l=i.createRadialGradient(t.flashX,t.flashY,0,t.flashX,t.flashY,o);l.addColorStop(0,r),l.addColorStop(1,"rgba(7,10,26,0)"),i.save(),i.globalAlpha=.34*s,i.fillStyle=l,i.fillRect(a.x,a.y,a.w,a.h),i.restore()}function G0(i,e){const t=po(e),n=hn/2,s=at/2,r=i.createRadialGradient(n,s,at*.42,n,s,at*.78);r.addColorStop(0,"rgba(4,6,16,0)"),r.addColorStop(1,"rgba(4,6,16,0.5)"),i.save(),i.fillStyle=r,i.fillRect(t.x,t.y,t.w,t.h),i.restore()}function Ac(i,e){const n=e.arrowY+at*tn+40,s=e.arrowY-at*(1-tn)-40,r=Math.floor(s/46),a=Math.floor(n/46);i.save();for(let o=r;o<=a;o++){let l=o*374761393+e.gridSeed*668265263>>>0;const c=1+l%3;for(let d=0;d<c;d++){l=l*1103515245+12345>>>0;const p=l%360,h=o*46+(l>>8)%46,m=Zn(e,h);if(m<-10||m>at+10)continue;const v=.35+.3*Math.sin(e.time*2+o*1.7+d*2.4);i.globalAlpha=Math.max(.1,v),i.fillStyle=(l>>4&7)===0?ge.accentSoft:(l>>4&3)===1?"#8fa3c8":"#5a6ea8";const x=(l>>12)%3===0?2:1.4;i.fillRect(p-x/2,m-x/2,x,x)}}i.restore()}function V0(i,e){const t=e.course,n=7,s=-40,r=at+40,a=[],o=[],l=[];for(let x=s;x<=r;x+=n){const f=e.arrowY+(at*tn-x);a.push(t.leftX(f)),o.push(t.rightX(f)),l.push(x)}const c=i.createLinearGradient(0,s,0,r);c.addColorStop(0,ge.wallDeep),c.addColorStop(.62,ge.wall),c.addColorStop(1,ge.wall),i.fillStyle=c,i.beginPath(),i.moveTo(-30,l[0]);for(let x=0;x<l.length;x++)i.lineTo(a[x],l[x]);i.lineTo(-30,l[l.length-1]),i.closePath(),i.fill(),i.beginPath(),i.moveTo(hn+30,l[0]);for(let x=0;x<l.length;x++)i.lineTo(o[x],l[x]);i.lineTo(hn+30,l[l.length-1]),i.closePath(),i.fill(),i.save(),i.strokeStyle=ge.bgDeep,i.globalAlpha=.22,i.lineWidth=15,i.lineJoin="round",i.shadowColor=ge.bgDeep,i.shadowBlur=10;for(const x of[a,o]){i.beginPath();for(let f=0;f<l.length;f++)f===0?i.moveTo(x[f],l[f]):i.lineTo(x[f],l[f]);i.stroke()}i.restore(),i.save(),i.strokeStyle=ge.wallEdgeHot,i.lineWidth=2.4,i.lineCap="round";const d=64,p=e.arrowY+at*tn+30,h=e.arrowY-at*(1-tn)-30;for(let x=Math.floor(h/d)*d;x<=p;x+=d){const f=x/d*2654435761+e.gridSeed>>>0;if((f&3)===0)continue;const u=Zn(e,x);if(u<-12||u>at+12)continue;const S=5+(f>>5)%7;if(i.globalAlpha=.16+(f>>9)%3*.05,(f&1)===0){const w=t.leftX(x);i.beginPath(),i.moveTo(w+1.5,u),i.lineTo(w-S,u),i.stroke()}else{const w=t.rightX(x);i.beginPath(),i.moveTo(w-1.5,u),i.lineTo(w+S,u),i.stroke()}}i.restore(),i.save(),i.lineJoin="round",i.lineCap="round",i.strokeStyle=ge.violet,i.globalAlpha=.3,i.lineWidth=7,i.shadowColor=ge.violet,i.shadowBlur=18;for(const x of[a,o]){i.beginPath();for(let f=0;f<l.length;f++)f===0?i.moveTo(x[f],l[f]):i.lineTo(x[f],l[f]);i.stroke()}i.restore(),i.save(),i.strokeStyle=ge.wallEdgeHot,i.globalAlpha=.85,i.lineWidth=1.7;for(const x of[a,o]){i.beginPath();for(let f=0;f<l.length;f++)f===0?i.moveTo(x[f],l[f]):i.lineTo(x[f],l[f]);i.stroke()}i.restore();for(const x of t.checkpoints){const f=Zn(e,x);if(f<-40||f>at+40)continue;const u=t.width(x)*.42,S=e.checkpointsHit.has(x),w=S?1:.82+.18*Math.sin(e.time*4.4+x*.013),M=S?ge.green:ge.gold;i.save(),i.strokeStyle=M,i.shadowColor=M,i.globalAlpha=(S?.1:.16)*w,i.lineWidth=9,i.shadowBlur=16,i.beginPath(),i.ellipse(t.center(x),f,u,u*.42,0,0,Math.PI*2),i.stroke(),i.globalAlpha=(S?.9:1)*w,i.lineWidth=3.2,i.shadowBlur=8,i.beginPath(),i.ellipse(t.center(x),f,u,u*.42,0,0,Math.PI*2),i.stroke(),S&&(i.globalAlpha=.22,i.fillStyle=ge.green,i.beginPath(),i.ellipse(t.center(x),f,u,u*.42,0,0,Math.PI*2),i.fill()),i.restore()}if(e.mode==="level"){const x=Zn(e,t.length);if(x>-40&&x<at+40){const f=t.leftX(t.length),u=t.rightX(t.length),S=14;i.save(),i.shadowColor=ge.accentSoft,i.shadowBlur=12;for(let w=0;w<2;w++)for(let M=f;M<u;M+=S)i.fillStyle=(Math.floor((M-f)/S)+w)%2===0?"#f2f6ff":"#0b1026",i.fillRect(M,x-14+w*S,Math.min(S,u-M),S);i.restore(),i.save(),i.fillStyle=ge.text,i.font=`600 16px ${d0}`,i.textAlign="center",i.shadowColor=ge.accent,i.shadowBlur=14,i.fillText("FINISH",(f+u)/2,x-24),i.restore()}}const m=e.arrowY+at*tn+50,v=e.arrowY-at*(1-tn)-50;for(const x of t.spikesBetween(v,m)){const f=Zn(e,x.y);if(f<-50||f>at+50)continue;const u=x.height/2,S=10+4*Math.sin(e.time*6+x.y*.02);i.save(),i.beginPath();let w,M;if(x.side==="left"){const E=t.leftX(x.y+u),R=t.leftX(x.y-u),_=t.leftX(x.y);i.moveTo(E,f-u),i.lineTo(R,f+u),i.lineTo(_+x.depth,f),w=(E+R)/2,M=_+x.depth}else{const E=t.rightX(x.y+u),R=t.rightX(x.y-u),_=t.rightX(x.y);i.moveTo(E,f-u),i.lineTo(R,f+u),i.lineTo(_-x.depth,f),w=(E+R)/2,M=_-x.depth}i.closePath();const A=i.createLinearGradient(w,0,M,0);A.addColorStop(0,ge.dangerDeep),A.addColorStop(.68,ge.danger),A.addColorStop(1,ge.dangerHot),i.fillStyle=A,i.shadowColor=ge.danger,i.shadowBlur=S,i.fill(),i.shadowBlur=0,i.strokeStyle="rgba(7,10,26,0.65)",i.lineWidth=1.6,i.stroke(),i.strokeStyle=ge.dangerHot,i.globalAlpha=.85,i.lineWidth=1.8,i.lineCap="round",i.beginPath(),x.side==="left"?(i.moveTo(w,f-u*.66),i.lineTo(M-2.5,f-1.5)):(i.moveTo(w,f-u*.66),i.lineTo(M+2.5,f-1.5)),i.stroke(),i.restore()}}function W0(i,e){if(e.state==="crashed")return;const t=e.trail;if(t.length<2)return;const n=(r,a)=>{i.beginPath();for(let o=r;o<a;o++){const l=t[o].x,c=Zn(e,t[o].y);o===r?i.moveTo(l,c):i.lineTo(l,c)}a-r===1&&i.lineTo(t[a-1].x+.01,Zn(e,t[a-1].y))},s=Math.max(2,Math.floor(t.length*.62));i.save(),i.lineCap="round",i.lineJoin="round",i.strokeStyle=ge.violet,i.globalAlpha=.22,i.lineWidth=js*1.55,i.shadowColor=ge.violet,i.shadowBlur=14,n(0,t.length),i.stroke(),i.shadowBlur=0,i.strokeStyle=ge.accent,i.globalAlpha=.62,i.lineWidth=js*.85,n(0,t.length),i.stroke(),i.strokeStyle=ge.accentSoft,i.globalAlpha=.95,i.lineWidth=js*.38,n(s,t.length),i.stroke(),i.restore()}function X0(i,e){const t=e.x,n=at*tn+(e.state==="ready"?Math.sin(e.time*3)*3:0),s=e.flipAnim>0?e.flipAnim/.16:0,r=1+.16*Math.sin(Math.PI*s);if(i.save(),i.translate(t,n),i.rotate(e.rot),i.scale(1/r,r),e.state==="flying"){const o=6+Math.sin(e.time*34)*2.4+Math.sin(e.time*57)*1.2;i.save(),i.globalAlpha=.9;const l=i.createLinearGradient(0,8,0,8+o+7);l.addColorStop(0,ge.accentSoft),l.addColorStop(.55,ge.accent),l.addColorStop(1,"rgba(24,153,196,0)"),i.fillStyle=l,i.shadowColor=ge.accent,i.shadowBlur=10,i.beginPath(),i.moveTo(-3.6,7),i.lineTo(0,8+o),i.lineTo(3.6,7),i.closePath(),i.fill(),i.restore()}const a=i.createLinearGradient(0,-15,0,9);a.addColorStop(0,"#ffffff"),a.addColorStop(.42,ge.accentSoft),a.addColorStop(1,ge.accentDeep),i.shadowColor=ge.accent,i.shadowBlur=16,i.fillStyle=a,i.beginPath(),i.moveTo(0,-14.5),i.lineTo(9.8,8),i.lineTo(0,3.2),i.lineTo(-9.8,8),i.closePath(),i.fill(),i.shadowBlur=0,i.strokeStyle="rgba(7,10,26,0.55)",i.lineWidth=1.4,i.stroke(),i.globalAlpha=.85,i.strokeStyle="#ffffff",i.lineWidth=1.7,i.lineCap="round",i.beginPath(),i.moveTo(0,-10.5),i.lineTo(0,-1.5),i.stroke(),i.restore()}const Ul=.55,Y0=.95,q0=110,K0=.5,$0=.34,Z0=.6,J0=7;class Q0{constructor(e,t,n,s){if(this.dom=e,this.sfx=t,this.events=n,this.world=s,s)this.fx=s.fx,this.particles2d=null;else{const r=new I0;this.particles2d=r,this.fx=new U0(r,()=>this.arrowY)}this.snap={mode:"level",state:"ready",course:null,x:this.x,arrowY:0,heading:1,rot:this.rot,flipAnim:0,time:0,trail:this.trail,shakeT:0,gridSeed:this.gridSeed,checkpointsHit:this.checkpointsHit,levelId:0,flashT:0,flashKind:null,flashX:0,flashY:0}}mode="level";currentLevelId=0;course=null;state="ready";x=hn/2;arrowY=0;heading=1;rot=0;flipAnim=0;held=!1;spaceHeld=!1;crashes=0;attempts=0;checkpointsHit=new Set;trail=[];time=0;cardTimer=-1;crashCard=null;shakeT=0;gridSeed=7;exhaustAcc=0;flashT=0;flashKind=null;flashX=0;flashY=0;autopilot=!1;fx;particles2d;snap;unsubs=[];loadLevel(e){this.mode="level",this.currentLevelId=e,this.course=w0(e),this.world?.enterCourse(this.course,!1),this.resetRun(!0)}loadEndless(){this.mode="endless",this.currentLevelId=0,this.course=D0(Math.floor(Math.random()*2**31)),this.world?.enterCourse(this.course,!0),this.resetRun(!0)}resetRun(e){const t=this.course;this.arrowY=0,this.x=t.center(0),this.heading=1,this.rot=Math.PI/4,this.held=!1,this.spaceHeld=!1,this.state="ready",this.cardTimer=-1,this.crashCard=null,this.trail=[],this.fx.clear(),this.exhaustAcc=0,this.flashT=0,this.flashKind=null,this.checkpointsHit=e?new Set:this.checkpointsHit,e&&(this.crashes=0,this.attempts=0,this.gridSeed=this.currentLevelId*131+7>>>0),this.attempts++,this.events.showBanner(this.mode==="endless"?`HOLD to fly — release to cut back.
Go as far as you can.`:`LEVEL ${this.currentLevelId}
Hold to fly up-left · release to fly up-right`),this.updateHud()}retry(e){e.showInterstitial(),this.resetRun(!1),this.sfx.button()}resumeFromCheckpoint(e){const t=[...this.checkpointsHit].pop();e.showRewarded().then(n=>{!n||t===void 0||(this.arrowY=t+4,this.x=this.course.center(this.arrowY),this.heading=1,this.rot=Math.PI/4,this.held=!1,this.trail=[],this.state="ready",this.cardTimer=-1,this.events.showBanner("HOLD to continue from checkpoint"),this.updateHud())}),this.sfx.button()}beginFlight(){this.state="flying",this.events.showBanner(null),this.sfx.startGo()}enter(e){const t=()=>{this.state==="ready"&&this.beginFlight(),this.state==="flying"&&this.setHeld(!0)},n=()=>this.setHeld(!1);this.unsubs.push(e.input.on("pointerdown",t),e.input.on("pointerup",n),e.input.on("keydown",s=>{(s.code==="Space"||s.code==="ArrowUp"||s.code==="ArrowLeft")&&(s.repeat||(this.spaceHeld=!0,t()),s.preventDefault())}),e.input.on("keyup",s=>{(s.code==="Space"||s.code==="ArrowUp"||s.code==="ArrowLeft")&&(this.spaceHeld=!1,n())}))}exit(e){for(const t of this.unsubs)t();this.unsubs=[],this.events.showBanner(null)}setHeld(e){this.state==="flying"&&(this.held=e)}setAutopilot(e){this.autopilot=e}update(e,t){if(this.time+=t,this.fx.update(t),this.shakeT>0&&(this.shakeT=Math.max(0,this.shakeT-t)),this.flipAnim>0&&(this.flipAnim=Math.max(0,this.flipAnim-t)),this.flashT>0&&(this.flashT=Math.max(0,this.flashT-t)),this.cardTimer>=0&&(this.cardTimer-=t,this.cardTimer<0&&(this.state==="crashed"?this.mode==="endless"?(this.state="overCard",this.events.onOverCard({distance:Math.floor(this.arrowY)})):(this.state="crashedCard",this.events.onCrashCard(this.crashCard)):this.state==="complete"&&(this.state="completeCard",this.events.onCompleteCard({levelId:this.currentLevelId,crashes:this.crashes})))),!this.course||(this.state==="ready"&&this.autopilot&&this.beginFlight(),this.state!=="flying"))return;const n=this.course.speedAt(this.arrowY),r=(this.autopilot?x0(this.course,this.x,this.arrowY):this.held||this.spaceHeld)?-1:1;r!==this.heading&&(this.heading=r,this.flipAnim=.16,this.sfx.flipTick(this.heading),this.fx.flipSpark(this.x,this.arrowY)),this.x+=this.heading*n*t,this.arrowY+=n*t,this.trail.push({x:this.x,y:this.arrowY}),this.trail.length>q0&&this.trail.shift(),this.exhaustAcc+=n*t,this.exhaustAcc>=J0&&(this.exhaustAcc=0,this.fx.exhaust(this.x,this.arrowY,this.heading,n));const a=this.heading===1?Math.PI/4:-Math.PI/4;this.rot+=(a-this.rot)*Math.min(1,t*14);for(const l of this.course.checkpoints)!this.checkpointsHit.has(l)&&this.arrowY>=l&&(this.checkpointsHit.add(l),this.sfx.checkpoint(),this.fx.ringPulse(this.course.center(l),l,this.course.width(l)*.42));if(v0(this.course,this.x,this.arrowY)){this.crash();return}this.updateHud(),this.mode==="level"&&this.arrowY>=this.course.length&&this.win()}crash(){this.crashes++,this.state="crashed",this.shakeT=K0,this.sfx.crash();const e=this.sy(this.arrowY);if(this.fx.burstShards(this.x,this.arrowY),this.fx.ringPulse(this.x,this.arrowY,26,ge.danger),this.flashT=$0,this.flashKind="crash",this.flashX=this.x,this.flashY=e,this.dom.worldFlash("crash"),this.trail=[],this.mode==="endless")this.sfx.gameOver(),this.cardTimer=Ul+.55,this.crashCard={canResume:!1,detail:""};else{const t=this.checkpointsHit.size>0,n=this.course.checkpoints.length;this.crashCard={canResume:t,detail:`Attempt ${this.attempts} · ${this.checkpointsHit.size}/${n} checkpoints · ${this.crashes} crash${this.crashes===1?"":"es"}`},this.cardTimer=Ul}}win(){this.state="complete",this.sfx.win(),this.fx.confetti(),this.fx.ringPulse(this.x,this.arrowY,40,ge.gold),this.flashT=Z0,this.flashKind="win",this.flashX=this.x,this.flashY=at*tn,this.dom.worldFlash("win"),this.cardTimer=Y0}updateHud(){this.mode==="endless"?this.dom.setDistance(Math.floor(this.arrowY)):(this.dom.setProgress(Math.min(1,this.arrowY/this.course.length),this.currentLevelId),this.dom.setMarkerProgress(this.checkpointsHit.size))}get courseMarkerFracs(){return!this.course||this.mode!=="level"||this.course.length<=0?[]:this.course.checkpoints.map(e=>e/this.course.length)}sy(e){return at*tn-(e-this.arrowY)}render(e,t){const n=this.snap;n.mode=this.mode,n.state=this.state,n.course=this.course,n.x=this.x,n.arrowY=this.arrowY,n.heading=this.heading,n.rot=this.rot,n.flipAnim=this.flipAnim,n.time=this.time,n.trail=this.trail,n.shakeT=this.shakeT,n.gridSeed=this.gridSeed,n.checkpointsHit=this.checkpointsHit,n.levelId=this.currentLevelId,n.flashT=this.flashT,n.flashKind=this.flashKind,n.flashX=this.flashX,n.flashY=this.flashY;const s=e.canvas;this.world?this.world.render(n,s.view.viewW,s.view.viewH):s instanceof er&&B0(s.view,n,this.particles2d)}get levelId(){return this.currentLevelId}get debugState(){return{mode:()=>this.mode,level:()=>this.currentLevelId,state:()=>this.state,x:()=>this.x,y:()=>this.arrowY,heading:()=>this.heading,crashes:()=>this.crashes,attempts:()=>this.attempts,checkpointsReached:()=>this.checkpointsHit.size,progress:()=>this.course&&this.mode==="level"?Math.min(1,this.arrowY/this.course.length):0,distance:()=>Math.floor(this.arrowY),checkpoints:()=>this.course?.checkpoints??[],courseLength:()=>this.mode==="level"?this.course?.length??0:0,held:()=>this.held||this.spaceHeld}}}class j0{constructor(e){this.audio=e}flipTick(e){this.audio.playTone(e===-1?520:420,.05,{type:"square",volume:.05,slideTo:e===-1?660:540,attackSec:.002})}startGo(){this.audio.playTone(392,.07,{type:"triangle",volume:.12}),this.audio.playTone(587,.1,{type:"triangle",volume:.1,attackSec:.05})}checkpoint(){this.audio.playTone(880,.12,{type:"sine",volume:.16}),this.audio.playTone(1318,.22,{type:"sine",volume:.14,attackSec:.08})}crash(){this.audio.playNoise(.32,{volume:.24,filterFrom:2400,filterTo:220,q:.9}),this.audio.playTone(90,.28,{type:"sine",volume:.22,slideTo:45})}win(){[523.25,659.25,783.99,1046.5].forEach((t,n)=>{this.audio.playTone(t,.16,{type:"triangle",volume:.16,attackSec:.004+n*.07})}),this.audio.playTone(2093,.5,{type:"sine",volume:.08,attackSec:.3})}gameOver(){this.audio.playTone(392,.18,{type:"sawtooth",volume:.1}),this.audio.playTone(311,.26,{type:"sawtooth",volume:.1,attackSec:.14}),this.audio.playTone(233,.4,{type:"sawtooth",volume:.1,attackSec:.32})}button(){this.audio.playTone(660,.06,{type:"triangle",volume:.1})}}const jt=(i,e=24)=>`<svg viewBox="0 0 ${e} ${e}" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,Cn=(i,e=2.1,t="currentColor",n="")=>`<path d="${i}" stroke="${t}" stroke-width="${e}" stroke-linecap="round" stroke-linejoin="round" fill="none" ${n}/>`,Kt=(i,e="currentColor",t="")=>`<path d="${i}" fill="${e}" stroke="none" ${t}/>`,Rc={play:jt(Kt("M8.5 5.2v13.6c0 .9.98 1.45 1.74.97l10.3-6.8a1.15 1.15 0 0 0 0-1.94l-10.3-6.8a1.13 1.13 0 0 0-1.74.97z")),infinity:jt(Cn("M7.2 15.6c-1.98 0-3.6-1.6-3.6-3.6s1.62-3.6 3.6-3.6c3.3 0 6.3 7.2 9.6 7.2 1.98 0 3.6-1.6 3.6-3.6s-1.62-3.6-3.6-3.6c-3.3 0-6.3 7.2-9.6 7.2z",2.2)),back:jt(Cn("M14.5 5.5 8 12l6.5 6.5",2.4)),replay:jt(Cn("M4.6 8.4A8 8 0 1 1 4 12.8",2.2)+'<path d="M4.2 4.4v4.2h4.2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'),next:jt(Cn("M6 5l7 7-7 7",2.4)+Cn("M13.5 5l7 7-7 7",2.4)),levels:jt(Kt("M4 4h6.4v6.4H4z")+Kt("M13.6 4H20v6.4h-6.4z")+Kt("M4 13.6h6.4V20H4z")+Kt("M13.6 13.6H20V20h-6.4z")),"sound-on":jt(Kt("M4 9.2v5.6h3.4L12 19V5L7.4 9.2H4z")+Cn("M15.2 9.4a4.4 4.4 0 0 1 0 5.2",2)+Cn("M17.8 7a7.8 7.8 0 0 1 0 10",2)),"sound-off":jt(Kt("M4 9.2v5.6h3.4L12 19V5L7.4 9.2H4z")+Cn("M15 9.6l5 5m0-5-5 5",2.1)),ring:jt('<ellipse cx="12" cy="12" rx="7.2" ry="4.6" stroke="currentColor" stroke-width="2.2" fill="none" transform="rotate(-18 12 12)"/>'+Kt("M12 2.8l1.8 3.2-1.8 1.1-1.8-1.1z")),star:jt(Kt("M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z")),lock:jt(Cn("M7 10.2V8a5 5 0 0 1 10 0v2.2",2.2)+'<rect x="5" y="10.2" width="14" height="9.8" rx="2.4" fill="currentColor" stroke="none"/>'+Kt("M12 13.4c.83 0 1.5.67 1.5 1.5 0 .5-.24.94-.62 1.21l.42 1.99h-2.6l.42-1.99a1.5 1.5 0 0 1-.62-1.21c0-.83.67-1.5 1.5-1.5z","#141a3a")),skull:jt('<circle cx="12" cy="10.5" r="6.5" fill="currentColor" stroke="none"/>'+Kt("M8.2 13.8h7.6v3.2a1.2 1.2 0 0 1-1.2 1.2h-.9v-1.7h-1.4v1.7h-.6v-1.7h-1.4v1.7h-.9a1.2 1.2 0 0 1-1.2-1.2v-3.2z")+'<circle cx="9.6" cy="10" r="1.7" fill="#141a3a"/><circle cx="14.4" cy="10" r="1.7" fill="#141a3a"/>'+Kt("M12 12l.9 1.7h-1.8L12 12z","#141a3a"))};function es(i,e){i.innerHTML=Rc[e]??""}const Li=i=>`<svg viewBox="0 0 24 24" class="star ${i?"on":"off"}" width="1em" height="1em" aria-hidden="true">${Kt("M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z",i?"#ffd803":"none",i?"":'stroke="#3d4d9f" stroke-width="1.8" stroke-linejoin="round"')}</svg>`,eg=i=>`<svg viewBox="0 0 64 64" width="${i}" height="${i}" aria-hidden="true"><defs><linearGradient id="lg-wave" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1899c4"/><stop offset=".55" stop-color="#45e0ff"/><stop offset="1" stop-color="#a5efff"/></linearGradient></defs><path d="M12 46 L26 26 L38 44 L52 18" fill="none" stroke="url(#lg-wave)" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M52 18 l-2.6 12.6 M52 18 l-12.4 -1.2" fill="none" stroke="url(#lg-wave)" stroke-width="5.5" stroke-linecap="round"/><circle cx="12" cy="46" r="3.6" fill="#ff4d6d"/></svg>`;function xe(i,e={}){const t=document.createElement(i);return e.class&&(t.className=e.class),e.id&&(t.id=e.id),e.text&&(t.textContent=e.text),e.html&&(t.innerHTML=e.html),t}class tg{root;cbs=null;heldPointers=new Set;cardSpillGuardArmed=!1;fxEnabled=!1;fxVignette;fxFlash;hud;hudLabel;hudProgressFill;hudProgress;hudPips;hudDist;hudDistNum;banner;screenMenu;menuBest;menuLevel;screenLevels;levelsGrid;screenCrash;crashDetail;crashBest;btnResume;screenComplete;completeStars;completeDetail;btnNext;screenOver;overDist;overBest;soundIcons=[];constructor(e){this.root=xe("div",{class:"ui"}),e.appendChild(this.root),this.buildFxOverlay(),this.buildHud(),this.buildBanner(),this.buildMenu(),this.buildLevels(),this.buildCrash(),this.buildComplete(),this.buildOver(),this.installCardSpillGuard()}installCardSpillGuard(){const e=t=>this.heldPointers.delete(t.pointerId);window.addEventListener("pointerdown",t=>{this.heldPointers.add(t.pointerId),this.cardSpillGuardArmed=!1},{capture:!0,passive:!0}),window.addEventListener("pointerup",e,{capture:!0,passive:!0}),window.addEventListener("pointercancel",e,{capture:!0,passive:!0}),this.root.addEventListener("click",t=>{this.cardSpillGuardArmed&&(this.cardSpillGuardArmed=!1,t.preventDefault(),t.stopPropagation())},{capture:!0})}bind(e){this.cbs=e,this.root.querySelector("#btn-play").onclick=()=>e.onPlay(),this.root.querySelector("#btn-levels").onclick=()=>e.onOpenLevels(),this.root.querySelector("#btn-endless").onclick=()=>e.onEndless(),this.root.querySelector("#btn-levels-back").onclick=()=>e.onBackToMenu(),this.root.querySelector("#btn-hud-back").onclick=()=>e.onHudBack(),this.root.querySelector("#btn-retry").onclick=()=>e.onRetry(),this.btnResume.onclick=()=>e.onResume(),this.root.querySelector("#btn-crash-levels").onclick=()=>e.onCrashToLevels(),this.btnNext.onclick=()=>e.onNext(),this.root.querySelector("#btn-replay").onclick=()=>e.onReplay(),this.root.querySelector("#btn-complete-levels").onclick=()=>e.onCompleteToLevels(),this.root.querySelector("#btn-over-retry").onclick=()=>e.onOverRetry(),this.root.querySelector("#btn-over-menu").onclick=()=>e.onOverToMenu();for(const t of this.soundIcons)t.onclick=()=>e.onToggleSound()}iconLabel(e,t){const n=xe("span",{class:"btn-inner"}),s=xe("span",{class:"btn-icon"});return es(s,e),n.append(s,xe("span",{class:"btn-text",text:t})),n}makeSoundButton(){const e=xe("button",{class:"icon-btn sound-toggle"});return e.title="Sound",e.setAttribute("aria-label","Toggle sound"),e.setAttribute("aria-pressed","false"),es(e,"sound-on"),this.soundIcons.push(e),e}setFlashFxEnabled(e){this.fxEnabled=e,this.fxVignette.classList.toggle("on",e)}worldFlash(e){if(!this.fxEnabled)return;const t=this.fxFlash;t.classList.remove("run-crash","run-win"),t.offsetWidth,t.classList.add(e==="crash"?"run-crash":"run-win")}buildFxOverlay(){this.fxVignette=xe("div",{id:"fx-vignette"}),this.fxVignette.setAttribute("aria-hidden","true"),this.fxFlash=xe("div",{id:"fx-flash"}),this.fxFlash.setAttribute("aria-hidden","true"),this.root.append(this.fxVignette,this.fxFlash)}buildHud(){this.hud=xe("div",{id:"hud"});const e=xe("div",{class:"hud-row"}),t=xe("button",{class:"icon-btn"});t.id="btn-hud-back",t.title="Back",t.setAttribute("aria-label","Back"),es(t,"back"),this.hudLabel=xe("div",{class:"hud-label",text:"LEVEL 1"}),e.append(t,this.hudLabel,this.makeSoundButton()),this.hudProgress=xe("div",{class:"hud-progress"}),this.hudProgressFill=xe("div",{class:"hud-progress-fill"}),this.hudProgress.appendChild(this.hudProgressFill),this.hudPips=xe("div",{class:"hud-pips"}),this.hudProgress.appendChild(this.hudPips),this.hudDist=xe("div",{class:"hud-dist"}),this.hudDistNum=xe("span",{class:"hud-dist-num",text:"0"}),this.hudDist.append(this.hudDistNum,xe("span",{class:"hud-dist-unit",text:"m"})),this.hud.append(e,this.hudProgress,this.hudDist),this.root.appendChild(this.hud)}buildBanner(){this.banner=xe("div",{id:"play-banner"}),this.root.appendChild(this.banner)}buildMenu(){this.screenMenu=xe("div",{class:"screen",id:"screen-menu"});const e=this.makeSoundButton(),t=xe("div",{class:"menu-top"});t.appendChild(e);const n=xe("div",{class:"menu-mid"}),s=xe("div",{class:"menu-wave",html:eg(108)});s.setAttribute("role","img"),s.setAttribute("aria-label","Wave Dash logo");const r=xe("h1",{});r.append(xe("span",{class:"title-a",text:"WAVE"}),xe("span",{class:"title-b",text:"DASH"}));const a=xe("p",{class:"tagline",text:"One button. Hold to cut left, release to cut right. Thread the tunnel."}),o=xe("button",{class:"btn",id:"btn-play"});o.appendChild(this.iconLabel("play","PLAY"));const l=xe("div",{class:"menu-row"}),c=xe("button",{class:"btn btn-secondary btn-sm",id:"btn-levels"});c.appendChild(this.iconLabel("levels","LEVELS"));const d=xe("button",{class:"btn btn-outline btn-sm",id:"btn-endless"});d.appendChild(this.iconLabel("infinity","ENDLESS")),l.append(c,d);const p=xe("div",{class:"menu-stats",id:"menu-stats"});this.menuBest=xe("p",{class:"menu-best"}),this.menuLevel=xe("p",{class:"menu-level"}),p.append(this.menuBest,this.menuLevel),n.append(s,r,a,o,l,p),this.screenMenu.append(t,n),this.root.appendChild(this.screenMenu)}buildLevels(){this.screenLevels=xe("div",{class:"screen",id:"screen-levels"});const e=xe("div",{class:"levels-head"}),t=xe("button",{class:"icon-btn",id:"btn-levels-back"});t.setAttribute("aria-label","Back to menu"),es(t,"back"),e.append(t,xe("h2",{text:"LEVELS"}),xe("span",{class:"levels-spacer"})),this.levelsGrid=xe("div",{class:"levels-grid",id:"levels-grid"}),this.screenLevels.append(e,this.levelsGrid),this.root.appendChild(this.screenLevels)}buildCrash(){this.screenCrash=xe("div",{class:"screen card-screen card-danger",id:"screen-crash"});const e=xe("div",{class:"card"});e.append(xe("h2",{text:"CRASHED"})),this.crashDetail=xe("p",{class:"card-detail"}),this.crashBest=xe("p",{class:"card-best"}),this.btnResume=xe("button",{class:"btn btn-sm btn-resume",id:"btn-resume"}),this.btnResume.appendChild(this.iconLabel("ring","RESUME FROM CHECKPOINT"));const t=xe("button",{class:"btn btn-sm",id:"btn-retry"});t.appendChild(this.iconLabel("replay","RETRY"));const n=xe("button",{class:"btn btn-sm btn-outline",id:"btn-crash-levels"});n.appendChild(this.iconLabel("levels","LEVELS")),e.append(this.crashDetail,this.crashBest,this.btnResume,t,n),this.screenCrash.appendChild(e),this.root.appendChild(this.screenCrash)}buildComplete(){this.screenComplete=xe("div",{class:"screen card-screen card-win",id:"screen-complete"});const e=xe("div",{class:"card"});e.append(xe("h2",{text:"LEVEL CLEAR"})),this.completeStars=xe("div",{class:"stars"}),this.completeDetail=xe("p",{class:"card-detail"}),this.btnNext=xe("button",{class:"btn btn-sm",id:"btn-next"}),this.btnNext.appendChild(this.iconLabel("next","NEXT"));const t=xe("button",{class:"btn btn-sm btn-outline",id:"btn-replay"});t.appendChild(this.iconLabel("replay","REPLAY"));const n=xe("button",{class:"btn btn-sm btn-outline",id:"btn-complete-levels"});n.appendChild(this.iconLabel("levels","LEVELS")),e.append(this.completeStars,this.completeDetail,this.btnNext,t,n),this.screenComplete.appendChild(e),this.root.appendChild(this.screenComplete)}buildOver(){this.screenOver=xe("div",{class:"screen card-screen card-danger",id:"screen-over"});const e=xe("div",{class:"card"});e.append(xe("h2",{text:"WIPEOUT"})),this.overDist=xe("div",{class:"over-dist",text:"0"}),this.overBest=xe("p",{class:"card-detail"});const t=xe("button",{class:"btn btn-sm",id:"btn-over-retry"});t.appendChild(this.iconLabel("replay","GO AGAIN"));const n=xe("button",{class:"btn btn-sm btn-outline",id:"btn-over-menu"});n.appendChild(this.iconLabel("back","MENU")),e.append(this.overDist,this.overBest,t,n),this.screenOver.appendChild(e),this.root.appendChild(this.screenOver)}showScreen(e){for(const t of this.root.querySelectorAll(".screen"))t.classList.remove("active");e&&this.root.querySelector(`#screen-${e}`).classList.add("active"),(e==="crash"||e==="complete"||e==="over")&&this.heldPointers.size>0&&(this.cardSpillGuardArmed=!0)}showHud(e){this.hud.classList.toggle("active",e)}setSoundIcon(e){for(const t of this.soundIcons)es(t,e?"sound-off":"sound-on"),t.setAttribute("aria-pressed",e?"true":"false")}setBanner(e){if(!e){this.banner.classList.remove("active");return}this.banner.textContent=e,this.banner.classList.add("active")}setHudLabel(e){this.hudLabel.textContent=e}setProgress(e,t){this.hudProgress.style.display="",this.hudDist.style.display="none",this.hudProgressFill.style.width=`${Math.round(e*100)}%`}setCourseMarkers(e){this.hudPips.innerHTML="";for(const t of e){const n=xe("span",{class:"hud-pip"});n.style.left=`${Math.round(t*1e3)/10}%`,this.hudPips.appendChild(n)}}setMarkerProgress(e){const t=this.hudPips.children;for(let n=0;n<t.length;n++)t[n].classList.toggle("pip-hit",n<e)}setDistance(e){this.hudProgress.style.display="none",this.hudDist.style.display="",this.hudDistNum.textContent=`${e}`}setMenuBest(e,t){this.menuBest.textContent=e>0?`Endless best: ${e}m`:"",this.menuLevel.textContent=t>1?`Best level: ${t}`:""}activeScreen(){return this.root.querySelector(".screen.active")?.id??null}buildLevelsGrid(e,t,n){this.levelsGrid.innerHTML="";for(let s=1;s<=e;s++){const r=s<=t,a=xe("button",{class:`level-btn ${r?"unlocked":"locked"}`,text:""});a.dataset.level=String(s),a.disabled=!r,a.setAttribute("aria-label",r?`Level ${s}`:`Level ${s} locked`),a.appendChild(xe("span",{class:"level-num",text:String(s)}));const o=n[String(s)]??0,l=xe("span",{class:"level-stars"});l.dataset.stars=String(o),r?l.innerHTML=Li(o>=1)+Li(o>=2)+Li(o>=3):(l.classList.add("is-lock"),l.innerHTML=Rc.lock),a.appendChild(l),a.onclick=()=>this.cbs?.onPickLevel(s),this.levelsGrid.appendChild(a)}}setCrashCard(e){this.crashDetail.textContent=e.detail,this.crashBest.textContent=`Best: ${e.bestDistance}m · Level ${e.bestLevel}`,this.btnResume.style.display=e.canResume?"":"none"}setCompleteCard(e){this.completeStars.innerHTML=Li(e.stars>=1)+Li(e.stars>=2)+Li(e.stars>=3),this.completeStars.dataset.stars=String(e.stars),this.completeDetail.textContent=e.detail,this.btnNext.style.display=e.hasNext?"":"none"}setOverCard(e){this.overDist.textContent=`${e.distance}`,this.overBest.textContent=`Best: ${e.best}m · Level ${e.bestLevel}`}}const Vt=.1,Ut=.05,gn={fov:66,near:.5,far:620,back:11,up:7.4,lookAhead:14,lookUp:1.2,followX:1,followDamp:9},At={css:{zenith:"#241b4a",violet:"#7a3f8f",horizon:"#ff7e5f",sunCore:"#ffd803",sunHalo:"#ffb45c",waterDeep:"#16305c",waterMid:"#1f5a78",wallBody:"#0d3350",wallCrest:"#2290a8",foam:"#eaffff"}},mo=new N(-.42,.34,-.84).normalize(),cs=`
float wdHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}
float wdNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = wdHash(i);
  float b = wdHash(i + vec2(1.0, 0.0));
  float c = wdHash(i + vec2(0.0, 1.0));
  float d = wdHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float wdFbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 3; i++) {
    v += amp * wdNoise(p);
    p = p * 2.03 + vec2(19.7, 7.31);
    amp *= 0.5;
  }
  return v;
}
`,ng=[[-.22,-.975,38,.32,3.1],[.34,-.94,17,.18,2.3],[-.53,-.82,8,.09,1.7]];function go(i,e,t){let n=0;for(const[s,r,a,o,l]of ng){const d=Math.PI*2/a*(s*i+r*e)+t*l*Math.PI*2/a;n+=o*Math.sin(d)}return n}const ig=`
uniform float uTime;
// Must mirror SWELLS in ocean.ts (CPU bob uses it).
vec3 wdWaveNormalOffset(vec2 p, out float h) {
  h = 0.0;
  float dhx = 0.0;
  float dhz = 0.0;
  // swell 1
  {
    float k = 6.28318 / 38.0;
    float ph = k * dot(vec2(-0.22, -0.975), p) + uTime * 3.1 * k;
    h += 0.32 * sin(ph);
    float c = 0.32 * k * cos(ph);
    dhx += c * -0.22; dhz += c * -0.975;
  }
  {
    float k = 6.28318 / 17.0;
    float ph = k * dot(vec2(0.34, -0.94), p) + uTime * 2.3 * k;
    h += 0.18 * sin(ph);
    float c = 0.18 * k * cos(ph);
    dhx += c * 0.34; dhz += c * -0.94;
  }
  {
    float k = 6.28318 / 8.0;
    float ph = k * dot(vec2(-0.53, -0.82), p) + uTime * 1.7 * k;
    h += 0.09 * sin(ph);
    float c = 0.09 * k * cos(ph);
    dhx += c * -0.53; dhz += c * -0.82;
  }
  return vec3(dhx, 0.0, dhz);
}
`;class sg{mesh;material;constructor(e,t,n){const s=new us(560,640,116,120);s.rotateX(-Math.PI/2),this.material=new Wt({uniforms:{uTime:{value:0},uSunDir:{value:mo.clone()},uDeep:{value:new le(At.css.waterDeep)},uMid:{value:new le(At.css.waterMid)},uHorizon:{value:new le(At.css.horizon)},uSunCore:{value:new le(At.css.sunCore)},uZenith:{value:new le(At.css.zenith)},uFogColor:{value:e},uFogNear:{value:t},uFogFar:{value:n}},vertexShader:`
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vH;
        ${ig}
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          float h;
          vec3 slope = wdWaveNormalOffset(wp.xz, h);
          wp.y += h;
          vH = h;
          vNormalW = normalize(vec3(-slope.x, 1.0, -slope.z));
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 uSunDir;
        uniform vec3 uDeep;
        uniform vec3 uMid;
        uniform vec3 uHorizon;
        uniform vec3 uSunCore;
        uniform vec3 uZenith;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vH;
        ${cs}
        void main() {
          vec3 N = normalize(vNormalW);
          // Sparkle chop: tiny normal jitter so the sun path twinkles.
          float ch = wdNoise(vWorld.xz * 2.2 + uTime * vec2(0.35, 0.9));
          float ch2 = wdNoise(vWorld.xz * 5.1 - uTime * vec2(0.22, 0.55));
          N = normalize(N + vec3(ch - 0.5, 0.0, wdNoise(vWorld.zx * 1.7 - uTime * 0.4) - 0.5) * 0.14
                        + vec3(ch2 - 0.5, 0.0, ch - 0.5) * 0.1);

          vec3 V = normalize(cameraPosition - vWorld);
          vec3 col = mix(uDeep, uMid, clamp(vH * 1.6 + 0.5, 0.0, 1.0));

          // Fresnel: faces away from the eye pick up the sunset sky.
          float fres = pow(1.0 - max(dot(N, V), 0.0), 4.0);
          col = mix(col, mix(uZenith * 1.05, uHorizon, 0.45), fres * 0.42);

          // Sun path glints (Blinn spec).
          vec3 H = normalize(normalize(uSunDir) + V);
          float spec = pow(max(dot(N, H), 0.0), 340.0);
          col += uSunCore * spec * 1.6;
          col += uHorizon * pow(max(dot(N, H), 0.0), 64.0) * 0.18 * fres;

          // Hand fog toward hazy violet horizon.
          float dist = length(cameraPosition - vWorld);
          float fogF = smoothstep(uFogNear, uFogFar, dist);
          col = mix(col, uFogColor, fogF);

          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `}),this.mesh=new Qe(s,this.material),this.mesh.frustumCulled=!1}update(e,t,n){this.mesh.position.set(e,0,t-120),this.material.uniforms.uTime.value=n}}const Yn=700,Vs=44,qn=260,rg=8,Nl=new Map;function Cc(i){let e=Nl.get(i);return e||(e=new le(i),Nl.set(i,e)),e}class ag{points;pos;vel;life;ttl;geo=new mt;cursor=0;constructor(){this.pos=new Float32Array(Yn*3),this.vel=new Float32Array(Yn*3),this.life=new Float32Array(Yn),this.ttl=new Float32Array(Yn).fill(1);const e=new pt(this.pos,3);e.setUsage(jl),this.geo.setAttribute("position",e),this.points=new cc(this.geo,new oo({color:new le("#dff8ff"),size:.34,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1})),this.points.frustumCulled=!1,this.points.renderOrder=4,this.geo.setDrawRange(0,Yn)}emit(e,t,n,s,r,a,o){const l=this.cursor;this.cursor=(this.cursor+1)%Yn,this.pos[l*3]=e,this.pos[l*3+1]=t,this.pos[l*3+2]=n,this.vel[l*3]=s,this.vel[l*3+1]=r,this.vel[l*3+2]=a,this.life[l]=o,this.ttl[l]=o}update(e){let t=!1;for(let n=0;n<Yn;n++)this.life[n]<=0||(t=!0,this.life[n]-=e,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.vel[n*3+1]-=9.8*e,this.life[n]<=0&&(this.pos[n*3+1]=-999));t&&(this.geo.getAttribute("position").needsUpdate=!0)}clear(){this.life.fill(0);for(let e=0;e<Yn;e++)this.pos[e*3+1]=-999;this.geo.getAttribute("position").needsUpdate=!0}}class og{mesh;items=[];dummy=new Rt;constructor(){const e=new uo(.24);this.mesh=new lc(e,new xn({color:new le("#ffe2c8"),emissive:new le("#ff8a5c"),emissiveIntensity:.5,roughness:.5,flatShading:!0}),Vs);for(let t=0;t<Vs;t++)this.items.push({active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,s:1,life:0,ttl:1});this.mesh.frustumCulled=!1,this.mesh.count=Vs}burst(e,t,n,s){let r=0;for(const a of this.items){if(r>=s)break;if(a.active)continue;a.active=!0;const o=Math.random()*Math.PI*2,l=2.5+Math.random()*6;a.x=e,a.y=t,a.z=n,a.vx=Math.cos(o)*l,a.vz=Math.sin(o)*l*.6-2,a.vy=3+Math.random()*7,a.rx=Math.random()*Math.PI,a.s=.6+Math.random()*1.4,a.life=0,a.ttl=.9+Math.random()*.6,r++}}update(e){for(let t=0;t<Vs;t++){const n=this.items[t];if(!n.active){this.dummy.position.set(0,-999,0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix);continue}if(n.life+=e,n.life>=n.ttl){n.active=!1;continue}n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.vy-=12*e,this.dummy.position.set(n.x,Math.max(n.y,-.4),n.z),this.dummy.rotation.set(n.life*7,n.rx+n.life*9,0);const s=n.s*Math.max(.001,1-n.life/n.ttl);this.dummy.scale.setScalar(s),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}clear(){for(const e of this.items)e.active=!1}}class lg{points;pos;vel;life;geo=new mt;active=!1;t=0;constructor(){this.pos=new Float32Array(qn*3),this.vel=new Float32Array(qn*3),this.life=new Float32Array(qn);const e=new Float32Array(qn*3),t=["#45e0ff","#ffd803","#ff7e5f","#eaffff","#7ee0b8"];for(let n=0;n<qn;n++){const s=Cc(t[n%t.length]);e[n*3]=s.r,e[n*3+1]=s.g,e[n*3+2]=s.b,this.pos[n*3+1]=-999}this.geo.setAttribute("position",new pt(this.pos,3).setUsage(jl)),this.geo.setAttribute("color",new pt(e,3)),this.points=new cc(this.geo,new oo({size:.5,vertexColors:!0,sizeAttenuation:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.points.frustumCulled=!1,this.points.renderOrder=4}burst(e,t){this.active=!0,this.t=0;for(let n=0;n<qn;n++)this.pos[n*3]=e+(Math.random()-.5)*30,this.pos[n*3+1]=7+Math.random()*14,this.pos[n*3+2]=t-6-Math.random()*26,this.vel[n*3]=(Math.random()-.5)*2.4,this.vel[n*3+1]=-(1.6+Math.random()*2.6),this.vel[n*3+2]=-1-Math.random()*2,this.life[n]=2.4+Math.random()*1.4}update(e){if(!this.active)return;this.t+=e;let t=!1;for(let n=0;n<qn;n++)this.life[n]<=0||(t=!0,this.life[n]-=e,this.pos[n*3]+=(this.vel[n*3]+Math.sin(this.t*3+n)*.8)*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.life[n]<=0&&(this.pos[n*3+1]=-999));this.geo.getAttribute("position").needsUpdate=!0,t||(this.active=!1)}clear(){this.active=!1,this.life.fill(0);for(let e=0;e<qn;e++)this.pos[e*3+1]=-999}}class cg{group=new cn;items=[];constructor(){for(let e=0;e<rg;e++){const t=new ho(.82,1,40);t.rotateX(-Math.PI/2);const n=new Qe(t,new cr({color:new le("#ffd803"),transparent:!0,opacity:0,depthWrite:!1,side:vn}));n.renderOrder=3,n.visible=!1,this.group.add(n),this.items.push({mesh:n,life:0,ttl:1,r:1,active:!1})}}pulse(e,t,n,s,r,a=.6){const o=this.items.find(l=>!l.active)??this.items[0];o.active=!0,o.life=0,o.ttl=a,o.r=s,o.mesh.visible=!0,o.mesh.position.set(e,t,n),o.mesh.material.color.copy(Cc(r))}update(e){for(const t of this.items){if(!t.active)continue;t.life+=e;const n=t.life/t.ttl;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}const s=t.r*(.25+n*1.1);t.mesh.scale.set(s,1,s),t.mesh.material.opacity=.85*(1-n)}}clear(){for(const e of this.items)e.active=!1,e.mesh.visible=!1}}class hg{group=new cn;spray=new ag;shards=new og;confettiPool=new lg;rings=new cg;time=0;constructor(){this.group.add(this.spray.points,this.shards.mesh,this.confettiPool.points,this.rings.group)}exhaust(e,t,n,s){const r=e*Ut,a=-t*Vt,o=.3;for(let l=0;l<2;l++)this.spray.emit(r+(Math.random()-.5)*.5,o,a+1.3,-n*(1.4+Math.random()*1.6)+(Math.random()-.5)*1.2,1.6+Math.random()*2.4,2.2+Math.random()*s*.008,.35+Math.random()*.3)}flipSpark(e,t){const n=e*Ut,s=-t*Vt;for(let r=0;r<16;r++){const a=Math.random()*Math.PI*2,o=1.5+Math.random()*3.4;this.spray.emit(n,.4,s,Math.cos(a)*o,2.6+Math.random()*4.2,Math.sin(a)*o,.5+Math.random()*.3)}this.rings.pulse(n,.22,s,2.2,"#eaffff",.5)}burstShards(e,t){const n=e*Ut,s=-t*Vt;this.shards.burst(n,.6,s,30);for(let r=0;r<34;r++){const a=Math.random()*Math.PI*2,o=2+Math.random()*5;this.spray.emit(n,.4,s,Math.cos(a)*o,4+Math.random()*7,Math.sin(a)*o,.7+Math.random()*.4)}}ringPulse(e,t,n,s){this.rings.pulse(e*Ut,.24,-t*Vt,Math.max(1.5,n*.08),s,.7)}confetti(){this.confettiPool.burst(this.group.userData.sx??0,this.group.userData.sz??0)}clear(){this.spray.clear(),this.shards.clear(),this.confettiPool.clear(),this.rings.clear()}setAnchor(e,t){this.group.userData.sx=e*Ut,this.group.userData.sz=-t*Vt}update(e,t){this.time=t??this.time+e,this.spray.update(e),this.shards.update(e),this.confettiPool.update(e),this.rings.update(e)}bobY(e,t){return .25+go(e,t,this.time)*.5}}function dg(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new mt;let c=0;for(let d=0;d<i.length;++d){const p=i[d];let h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,d),c+=m}}if(t){let d=0;const p=[];for(let h=0;h<i.length;++h){const m=i[h].index;for(let v=0;v<m.count;++v)p.push(m.getX(v)+d);d+=i[h].attributes.position.count}l.setIndex(p)}for(const d in r){const p=Fl(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(const d in a){const p=a[d][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<p;++h){const m=[];for(let x=0;x<a[d].length;++x)m.push(a[d][x][h]);const v=Fl(m);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(v)}}}return l}function Fl(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const a=new e(r),o=new pt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const d=i[c];if(d.isInterleavedBufferAttribute){const p=l/t;for(let h=0,m=d.count;h<m;h++)for(let v=0;v<t;v++){const x=d.getComponent(h,v);o.setComponent(h+p,v,x)}}else a.set(d.array,l);l+=d.count*t}return s!==void 0&&(o.gpuType=s),o}const Ol=192;function Ws(i){let e=(Math.imul(Math.floor(i),2654435761)^2654435769)>>>0;return e=Math.imul(e^e>>>13,2246822507)>>>0,((e^e>>>15)>>>0)/4294967296}function ug(){const i=new Fi(.5,1.7,5,1);i.translate(0,.85,0);const e=new Fi(.34,1.05,5,1);e.translate(-.42,.5,.16),e.rotateZ(.5);const t=new Fi(.3,.9,4,1);t.translate(.36,.42,-.22),t.rotateZ(-.42),t.rotateY(.6);const n=dg([i,e,t]);for(const s of[i,e,t])s.dispose();return n.computeVertexNormals(),n}class fg{group=new cn;spikes;spikeMat;gates=[];gateCps=[];gateHit=new Set;finish=null;course=null;endless=!1;builtHalfSpan=0;constructor(){this.spikeMat=new xn({color:new le("#26172f"),roughness:.62,metalness:.05,flatShading:!0,emissive:new le(ge.danger),emissiveIntensity:.25}),this.spikes=new lc(ug(),this.spikeMat,Ol),this.spikes.count=0,this.spikes.frustumCulled=!1,this.group.add(this.spikes)}load(e,t){this.course=e,this.endless=t,this.builtHalfSpan=Number.NEGATIVE_INFINITY,this.gateHit.clear(),this.gates=[],this.gateCps=[...e.checkpoints],this.buildFinish(t?null:e.length),this.rebuild(0)}update(e,t){this.spikeMat.emissiveIntensity=.22+.16*(.5+.5*Math.sin(t*3.2)),this.endless&&e-this.builtHalfSpan>350&&this.rebuild(e);for(const n of this.gates)n.position.y=2.3+Math.sin(t*1.4+n.userData.phase)*.22,n.rotation.z=Math.sin(t*.9+n.userData.phase)*.06;this.finish&&(this.finish.rotation.y=Math.sin(t*.4)*.02)}setGatePassed(e){for(const t of e){if(this.gateHit.has(t))continue;this.gateHit.add(t);const n=this.gates[this.gateCps.indexOf(t)];if(n){const s=n.material;s.emissive.set(new le(ge.green)),s.color.set(new le(ge.greenSoft).multiplyScalar(.35)),s.emissiveIntensity=1.5}}}rebuild(e){if(!this.course)return;this.builtHalfSpan=e;const t=this.course,n=this.endless?e-60:-80,s=this.endless?e+1500:t.length+200,r=t.spikesBetween(n,s).slice(0,Ol),a=new et,o=new N,l=new ui,c=new Fn,d=new N;let p=0;for(const h of r){const m=pg(t,h),v=(Ws(h.y*7.13)-.5)*.5+(h.side==="left"?0:Math.PI);c.set((Ws(h.y*3.7)-.5)*.16,v,(h.side==="left"?-1:1)*.62),l.setFromEuler(c),o.set(m.x,-.35,m.z),d.set(m.w,1.6+Ws(h.y*5.3)*.7,m.l),a.compose(o,l,d),this.spikes.setMatrixAt(p,a),p++}this.spikes.count=p,this.spikes.instanceMatrix.needsUpdate=!0;for(const h of this.gates)this.group.remove(h),h.material.dispose(),h.geometry.dispose();this.gates=[];for(const h of this.gateCps){const m=t.width(h)*Ut/2,v=new ar(Math.max(1.6,m*.84),.3,10,44),x=new xn({color:new le(ge.gold).multiplyScalar(.4),emissive:new le(this.gateHit.has(h)?ge.green:ge.gold),emissiveIntensity:1.6,roughness:.35}),f=new Qe(v,x);f.position.set(t.center(h)*Ut,2.3,-h*Vt),f.userData.phase=Ws(h)*Math.PI*2,this.gates.push(f),this.group.add(f)}}buildFinish(e){if(this.finish&&(this.group.remove(this.finish),this.finish.traverse(h=>{h instanceof Qe&&(h.geometry.dispose(),h.material.dispose())}),this.finish=null),e===null||!this.course)return;const t=this.course,n=-e*Vt,s=t.width(e)*Ut/2,r=t.center(e)*Ut,a=new cn;a.position.set(r,0,n);const o=new xn({color:new le(ge.gold),emissive:new le(ge.gold),emissiveIntensity:.9,roughness:.4}),l=new hr(.9,1.1,3.4,10);for(const h of[-1,1]){const m=new Qe(l,o);m.position.set(h*(s-.6),1.4,0),a.add(m)}const c=new Qe(new ar(s,.22,8,40,Math.PI),o);c.position.set(0,1.8,0),a.add(c);const d=[ge.accent,ge.gold,ge.danger,ge.greenSoft],p=new Fi(.5,1.1,3,1);for(let h=0;h<7;h++){const m=(h+1)/8,v=Math.PI*m,x=new Qe(p,new xn({color:new le(d[h%d.length]),flatShading:!0,emissiveIntensity:.25,emissive:new le(d[h%d.length])}));x.position.set(-Math.cos(v)*s,1.8+Math.sin(v)*s,.1),x.rotation.z=Math.PI,a.add(x)}this.finish=a,this.group.add(a)}}function pg(i,e){const t=e.side==="left"?i.leftX(e.y):i.rightX(e.y),n=e.side==="left"?1:-1;return{x:t*Ut+n*(e.depth*Ut/2)*.72,z:-e.y*Vt,w:Math.max(.7,e.depth*Ut*.55),l:Math.max(.8,e.height*Vt*.9)}}class mg{mesh;material;constructor(){this.material=new Wt({side:Ot,depthWrite:!1,depthTest:!0,uniforms:{uTime:{value:0},uSunDir:{value:mo.clone()},uZenith:{value:new le(At.css.zenith)},uViolet:{value:new le(At.css.violet)},uHorizon:{value:new le(At.css.horizon)},uSunCore:{value:new le(At.css.sunCore)},uSunHalo:{value:new le(At.css.sunHalo)}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform vec3 uZenith;
        uniform vec3 uViolet;
        uniform vec3 uHorizon;
        uniform vec3 uSunCore;
        uniform vec3 uSunHalo;
        varying vec3 vDir;
        ${cs}
        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.12, 1.0);

          // Sunset gradient bands.
          vec3 col = mix(uHorizon, uViolet, smoothstep(-0.02, 0.34, h));
          col = mix(col, uZenith, smoothstep(0.3, 0.85, h));

          // Sun disc + soft halo, slightly above the horizon ahead.
          float sunAmt = max(dot(d, uSunDir), 0.0);
          col += uSunCore * smoothstep(0.9986, 0.9992, sunAmt) * 0.95;
          col += uSunHalo * pow(sunAmt, 160.0) * 0.9;
          col += uHorizon * pow(sunAmt, 22.0) * 0.3;

          // Two long drifting cloud streaks; tint deeper with height.
          float az = atan(d.x, d.z);
          vec2 cp1 = vec2(az * 2.4, d.y * 7.0) + vec2(uTime * 0.008, 0.0);
          vec2 cp2 = vec2(az * 3.7, d.y * 11.0) - vec2(uTime * 0.012, 1.7);
          float c1 = smoothstep(0.55, 0.78, wdFbm(cp1)) * smoothstep(0.55, 0.2, d.y) * smoothstep(-0.02, 0.12, d.y);
          float c2 = smoothstep(0.6, 0.8, wdFbm(cp2)) * smoothstep(0.8, 0.3, d.y) * smoothstep(0.05, 0.2, d.y);
          vec3 cloudCol = mix(uSunHalo, uViolet, clamp(d.y * 2.2, 0.0, 1.0));
          col = mix(col, cloudCol * 1.12, clamp(c1 + c2 * 0.7, 0.0, 0.85));

          // Faint stars near the zenith (stable 3D cells, tiny at any pitch).
          vec3 cell = floor(d * 340.0);
          float star = step(0.9965, wdHash(cell.xz + cell.y * 61.7));
          float tw = 0.5 + 0.5 * sin(uTime * 2.2 + wdHash(cell.xy) * 40.0);
          col += vec3(0.9, 0.95, 1.0) * star * tw * smoothstep(0.5, 0.78, d.y) * 0.45;

          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `}),this.mesh=new Qe(new dr(560,48,20),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10}update(e,t){this.mesh.position.copy(e),this.material.uniforms.uTime.value=t}}class gg{group=new cn;rider=new cn;board;bank=0;armL;armR;head;constructor(){const e=new xn({color:new le("#fff4e8"),roughness:.4,metalness:.05}),t=new xn({color:new le(ge.danger),roughness:.4}),n=new xn({color:new le("#3a2a66"),roughness:.75,flatShading:!0}),s=new xn({color:new le(ge.accent),roughness:.5,flatShading:!0}),r=new xn({color:new le("#e8b48c"),roughness:.65,flatShading:!0}),a=new ri(.62,2.5,6,12);a.rotateX(Math.PI/2),a.scale(1,.22,1),this.board=new Qe(a,e);const o=new ri(.63,2.1,6,12);o.rotateX(Math.PI/2),o.scale(.34,.23,1);const l=new Qe(o,t);l.position.y=.015,this.board.add(l);const c=new Qe(new ri(.3,.55,6,10),n);c.position.y=.85,c.rotation.x=-.42;const d=new Qe(new ri(.33,.3,6,10),s);d.position.y=.78,d.rotation.x=-.42,this.head=new Qe(new dr(.235,12,10),r),this.head.position.set(0,1.32,.14);const p=new ri(.085,.5,4,8);p.translate(.28,0,0),this.armL=new Qe(p,r),this.armL.position.set(-.28,1.02,.02),this.armR=new Qe(p,r),this.armR.position.set(.28,1.02,.02),this.rider.add(c,d,this.head,this.armL,this.armR),this.rider.position.y=.16,this.group.add(this.board,this.rider);const h=new lo(1.7,24);h.rotateX(-Math.PI/2);const m=new Qe(h,new cr({color:new le("#020814"),transparent:!0,opacity:.34,depthWrite:!1}));m.position.y=.03,m.renderOrder=2,this.group.add(m)}pose(e,t,n,s,r,a){const o=.22+go(e,t,n)*.5;this.group.position.set(e,o,t);const l=s===-1?.42:-.42;this.bank+=(l-this.bank)*.16,this.group.rotation.z=this.bank,this.group.rotation.y=s===-1?.3:-.3;const c=r>0?Math.sin(Math.PI*Math.min(1,r/.16)):0;this.rider.rotation.x=c*.45,this.rider.scale.setScalar(1-c*.08);const d=a?Math.sin(n*7)*.14:Math.sin(n*1.6)*.06;this.armL.rotation.z=1.15+d+this.bank*.7,this.armR.rotation.z=Math.PI-(1.15+d-this.bank*.7),this.head.rotation.x=a?-.35:0}}const _g=120;function vg(i,e){const t=Math.min(i.length,_g),n=[],s=[],r=[],a=[];if(t<2)return{positions:n,uvs:s,alphas:r,indices:a};for(let o=0;o<t;o++){const l=i[i.length-t+o],c=l.x*Ut,d=-l.y*Vt,p=i[Math.max(i.length-t+o-1,0)],h=i[Math.min(i.length-t+o+1,i.length-1)],m=(h.x-p.x)*Ut,v=-(h.y-p.y)*Vt,x=Math.hypot(m,v)||1,f=-v/x||0,u=m/x||-1,S=o/(t-1),w=.9+(1-S)*3.6,M=.16+go(c,d,e)*.5;for(const A of[-1,1])n.push(c+f*A*w*.5,M,d+u*A*w*.5),s.push(S,A),r.push(Math.min(1,S*5.5)*(.28+S*.5))}for(let o=0;o<t-1;o++){const l=o*2;a.push(l,l+1,l+2,l+1,l+3,l+2)}return{positions:n,uvs:s,alphas:r,indices:a}}class xg{mesh;geo=new mt;mat;constructor(){this.mat=new Wt({transparent:!0,depthWrite:!1,blending:jr,uniforms:{uTime:{value:0},uFoam:{value:new le(At.css.foam)},uTint:{value:new le("#57d7ff")}},vertexShader:`
        attribute float aAlpha;
        varying vec2 vUv;
        varying float vAlpha;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vAlpha = aAlpha;
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uFoam;
        uniform vec3 uTint;
        varying vec2 vUv;
        varying float vAlpha;
        varying vec3 vWorld;
        ${cs}
        void main() {
          float edge = smoothstep(1.0, 0.25, abs(vUv.y));
          float churn = wdFbm(vec2(vWorld.x * 1.4, vWorld.z * 1.4 + uTime * 0.7));
          float foam = smoothstep(0.35, 0.75, churn + (1.0 - vUv.x) * 0.25);
          vec3 col = mix(uTint, uFoam, foam * 0.85 + edge * 0.15);
          float a = vAlpha * edge * (0.35 + foam * 0.65);
          gl_FragColor = vec4(col * a, a);
          #include <colorspace_fragment>
        }
      `}),this.mesh=new Qe(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}update(e,t){this.mat.uniforms.uTime.value=t;const n=vg(e,t);if(n.indices.length===0){this.mesh.visible=!1;return}this.mesh.visible=!0,this.geo.setAttribute("position",new pt(new Float32Array(n.positions),3)),this.geo.setAttribute("uv",new pt(new Float32Array(n.uvs),2)),this.geo.setAttribute("aAlpha",new pt(new Float32Array(n.alphas),1)),this.geo.setIndex(new pt(new Uint16Array(n.indices),1))}}function Mg(i,e,t,n=8){const s=[],r=Math.max(2,Math.ceil((t-e)/n)+1);for(let a=0;a<r;a++){const o=e+(t-e)*a/(r-1);s.push({y:o,lx:i.leftX(o),rx:i.rightX(o),z:-o*Vt})}return s}const yg=[[-.6,-.8],[0,.4],[.5,3.2],[1.1,7],[1.8,11],[3.4,14.2],[6.2,13.4],[10.5,8],[16,2.2],[22,-.5]];function Sg(i,e){const t=yg,n=t.length,s=n,r=new Float32Array(i.length*s*3),a=new Float32Array(i.length*s*2),o=(i.length-1)*(n-1),l=new Uint32Array(o*6);for(let d=0;d<i.length;d++){const p=i[d],h=(e==="left"?p.lx:p.rx)*Ut,m=e==="left"?-1:1;for(let v=0;v<n;v++){const x=d*n+v;r[x*3]=h+t[v][0]*m,r[x*3+1]=t[v][1],r[x*3+2]=p.z,a[x*2]=p.y,a[x*2+1]=v/(n-1)}}let c=0;for(let d=0;d<i.length-1;d++)for(let p=0;p<n-1;p++){const h=d*n+p,m=h+1,v=h+n,x=v+1;l[c++]=h,l[c++]=v,l[c++]=m,l[c++]=m,l[c++]=v,l[c++]=x}return{positions:r,uvs:a,indices:l}}const bg=560,Eg=420,wg=1300,Tg=300;class Ag{group=new cn;left=null;right=null;material;course=null;endless=!1;windowY=Number.NaN;constructor(e,t,n){this.material=new Wt({uniforms:{uTime:{value:0},uSunDir:{value:mo.clone()},uBody:{value:new le(At.css.wallBody)},uCrest:{value:new le(At.css.wallCrest)},uFoam:{value:new le(At.css.foam)},uSunHalo:{value:new le(At.css.sunHalo)},uFogColor:{value:e},uFogNear:{value:t},uFogFar:{value:n}},vertexShader:`
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying vec2 vUvW;
        ${cs}
        void main() {
          vec3 p = position;
          // Height-weighted sway: waterline stays planted, the face breathes.
          float w = uv.y;
          float n1 = wdFbm(vec2(p.z * 0.045 + uTime * 0.14, p.x * 0.05));
          float n2 = wdFbm(vec2(p.z * 0.06 - uTime * 0.1, p.x * 0.033 + 7.3));
          p.x += (n1 - 0.5) * 2.2 * w;
          p.y += (n2 - 0.5) * 1.7 * w;
          p.z += (n1 - 0.5) * 1.1 * w;
          vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
          vNormalW = normalize(mat3(modelMatrix) * normal);
          vUvW = uv;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform vec3 uBody;
        uniform vec3 uCrest;
        uniform vec3 uFoam;
        uniform vec3 uSunHalo;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying vec2 vUvW;
        ${cs}
        void main() {
          vec3 N = normalize(vNormalW);
          vec3 V = normalize(cameraPosition - vWorld);

          // Body ramp: dark trough water at the base, lit teal at the lip.
          vec3 col = mix(uBody, uCrest, smoothstep(0.0, 0.62, vUvW.y));
          // Sunset key light (fixed sun; walls are stylized lambert).
          float ndl = max(dot(N, uSunDir), 0.0);
          col *= 0.55 + 0.65 * ndl;
          // Backlit rim: edges against camera catch the low sun.
          float rim = pow(1.0 - abs(dot(N, V)), 2.4);
          col += uSunHalo * rim * 0.55;

          // Animated churn masks run along the channel (uv.x = design y).
          float churn = wdFbm(vec2(vUvW.x * 0.05, vUvW.y * 7.0 - uTime * 0.9));
          float churn2 = wdNoise(vec2(vUvW.x * 0.16 + uTime * 0.35, vUvW.y * 11.0));

          // Foam hugging the waterline (where wall meets wave).
          float baseFoam = smoothstep(0.085, 0.015, vUvW.y) * smoothstep(0.25, 0.55, churn + churn2 * 0.4);
          // Lip crown foam where the wave curls over.
          float lipFoam = smoothstep(0.1, 0.02, abs(vUvW.y - 0.55) - 0.03) * smoothstep(0.3, 0.62, churn);
          col = mix(col, uFoam, clamp(baseFoam * 1.15 + lipFoam * 1.3, 0.0, 1.0));

          // Glassy sheen stripes running down the face.
          float streak = smoothstep(0.72, 0.98, sin(vUvW.x * 0.13 + vUvW.y * 22.0 + uTime * 0.7) * 0.5 + 0.5);
          col += uFoam * streak * 0.05 * (1.0 - vUvW.y);

          float dist = length(cameraPosition - vWorld);
          col = mix(col, uFogColor, smoothstep(uFogNear, uFogFar, dist));
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `})}get sharedMaterial(){return this.material}load(e,t){this.course=e,this.endless=t,this.windowY=Number.NaN,this.rebuildFor(0)}loadRows(e){this.course=null,this.endless=!1,this.windowY=Number.NaN,this.setMeshes(e)}update(e,t){this.material.uniforms.uTime.value=t,!(!this.course||!this.endless)&&(Number.isNaN(this.windowY)||e-this.windowY>Tg)&&this.rebuildFor(e)}rebuildFor(e){if(!this.course)return;const t=this.endless?e-Eg:-260,n=this.endless?e+wg:this.course.length+bg;this.windowY=e,this.setMeshes(Mg(this.course,t,n))}setMeshes(e){const t=this.left,n=this.right;this.left=this.buildSide(e,"left"),this.right=this.buildSide(e,"right"),t&&(this.group.remove(t),t.geometry.dispose()),n&&(this.group.remove(n),n.geometry.dispose()),this.group.add(this.left,this.right)}buildSide(e,t){const n=Sg(e,t),s=new mt;return s.setAttribute("position",new pt(n.positions,3)),s.setAttribute("uv",new pt(n.uvs,2)),s.setIndex(new pt(n.indices,1)),s.computeVertexNormals(),s.computeBoundingSphere(),new Qe(s,this.material)}}class Rg{renderer;scene=new Hh;camera;sky;ocean;walls;obstacles=new fg;surfer=new gg;wake=new xg;fx=new hg;camX=0;lastNow=0;time=0;constructor(e){this.renderer=e,this.camera=new en(gn.fov,1,gn.near,gn.far);const t=new le(At.css.zenith).lerp(new le(At.css.violet),.55),n=70,s=320;this.scene.fog=new ro(t,n,s),this.sky=new mg,this.ocean=new sg(t,n,s),this.walls=new Ag(t,n,s);const r=new al(new le(At.css.sunHalo),2.2);r.position.set(-42,34,-84);const a=new od(new le("#5a4a8f"),.85),o=new al(new le("#45e0ff"),.5);o.position.set(30,12,40),this.scene.add(this.sky.mesh,this.ocean.mesh,this.walls.group,this.obstacles.group,this.surfer.group,this.wake.mesh,this.fx.group,r,a,o),this.loadAmbientChannel()}enterAmbient(){this.loadAmbientChannel(),this.wake.mesh.visible=!1,this.surfer.group.visible=!0,this.fx.clear()}enterCourse(e,t){this.walls.load(e,t),this.obstacles.load(e,t),this.obstacles.group.visible=!0,this.surfer.group.visible=!0,this.fx.clear()}get clock(){return this.time}render(e,t,n){this.tickClock();const s=e.x*Ut,r=-e.arrowY*Vt;this.camX+=(s*gn.followX-this.camX)*Math.min(1,this.dtNow*gn.followDamp);let a=gn.up+Math.sin(this.time*.5)*.18,o=r+gn.back;if(e.shakeT>0){const c=.3*(e.shakeT/.5);a+=(Math.random()-.5)*c,o+=(Math.random()-.5)*c}this.camera.position.set(this.camX,a,o),this.camera.lookAt(s,gn.lookUp,r-gn.lookAhead);const l=e.state==="flying";this.surfer.group.visible=e.state!=="crashed",this.surfer.pose(s,r,this.time,e.heading,e.flipAnim,l),this.wake.update(e.state==="crashed"?[]:e.trail,this.time),this.obstacles.update(e.arrowY,this.time),this.obstacles.setGatePassed(e.checkpointsHit),this.walls.update(e.arrowY,this.time),this.fx.setAnchor(e.x,e.arrowY),this.fx.update(this.dtNow,this.time),this.sky.update(this.camera.position,this.time),this.ocean.update(this.camX,o,this.time),this.renderFrame(t,n)}renderAmbient(e,t){this.tickClock();const n=Math.sin(this.time*.08)*2.2;this.camX+=(n-this.camX)*Math.min(1,this.dtNow*2),this.camera.position.set(this.camX,gn.up+1.2,10),this.camera.lookAt(this.camX*.5,2.2,-30),this.surfer.group.visible=!0;const s=Math.sin(this.time*.3)*1.4;this.surfer.pose(s,-6,this.time,this.time%6<3?1:-1,0,!1),this.walls.update(0,this.time),this.obstacles.update(0,this.time),this.fx.update(this.dtNow,this.time),this.sky.update(this.camera.position,this.time),this.ocean.update(this.camX,this.camera.position.z,this.time),this.renderFrame(e,t)}surferScreen(){this.surfer.group.updateWorldMatrix(!0,!1);const e=new N().setFromMatrixPosition(this.surfer.group.matrixWorld);return e.project(this.camera),{x:(e.x+1)/2,y:(1-e.y)/2}}get stats(){return{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,webgl:!0}}dtNow=1/60;tickClock(){const e=performance.now();this.dtNow=this.lastNow>0?Math.min(.1,(e-this.lastNow)/1e3):1/60,this.lastNow=e,this.time+=this.dtNow}renderFrame(e,t){if(this.renderer.domElement.width>0){const n=e/Math.max(1,t);Math.abs(n-this.camera.aspect)>.001&&(this.camera.aspect=n,this.camera.updateProjectionMatrix())}this.renderer.render(this.scene,this.camera)}loadAmbientChannel(){const e=[];for(let r=0;r<=76;r++){const a=-400+4600*r/76,o=180+Math.sin(a*.0011)*70,l=560;e.push({y:a,lx:o-l/2,rx:o+l/2,z:-a*Vt})}this.walls.loadRows(e),this.obstacles.group.visible=!1}}const mr=document.getElementById("app");if(!mr)throw new Error("#app missing");const fs=i=>i.preventDefault(),ps=mr;ps.style.touchAction="none";ps.addEventListener("touchmove",fs,{passive:!1});ps.addEventListener("dragstart",fs);ps.addEventListener("selectstart",fs);ps.addEventListener("contextmenu",fs);document.addEventListener("gesturestart",fs);document.querySelectorAll("img,canvas").forEach(i=>i.setAttribute("draggable","false"));const ft=new c0({key:h0,version:1,defaults:{unlocked:1,stars:{},endlessBest:0,muted:!1}}),kt=new l0({container:mr,designW:hn,designH:at,rendering:"webgl"});kt.audio.setMuted(ft.get("muted"));const Ke=new tg(mr),Gt=new j0(kt.audio),Pn=kt.canvas instanceof Ec?new Rg(kt.canvas.view.renderer):null;Ke.setFlashFxEnabled(Pn!==null);let ms="menu",_o="level";const ot=new Q0(Ke,Gt,{showBanner:i=>Ke.setBanner(i),onCrashCard:i=>{Ke.setCrashCard({...i,bestDistance:ft.get("endlessBest"),bestLevel:ft.get("unlocked")}),Ke.showScreen("crash")},onCompleteCard:({levelId:i,crashes:e})=>{const t=g0(e),n=ft.all,s=n.stars[String(i)]??0;ft.update({stars:{...n.stars,[String(i)]:Math.max(s,t)},unlocked:Math.max(n.unlocked,Math.min(i+1,os()))}),Ke.setCompleteCard({stars:t,detail:`${e===0?"Flawless run — no crashes":`${e} crash${e===1?"":"es"}`} on Level ${i}`,hasNext:i<os()}),Ke.showScreen("complete")},onOverCard:({distance:i})=>{const e=Math.max(i,ft.get("endlessBest"));e!==ft.get("endlessBest")&&ft.set("endlessBest",e),Ke.setOverCard({distance:i,best:e,bestLevel:ft.get("unlocked")}),Ke.showScreen("over")}},Pn);function or(){ms="menu",Ke.showHud(!1),Ke.setMenuBest(ft.get("endlessBest"),ft.get("unlocked")),Ke.showScreen("menu"),kt.setScene("ambient")}function is(){ms="levels",Ke.showHud(!1),Ke.buildLevelsGrid(os(),ft.get("unlocked"),ft.get("stars")),Ke.showScreen("levels"),kt.setScene("ambient")}function Xs(i){ms="play",_o="level",Ke.showScreen(null),Ke.showHud(!0),Ke.setHudLabel(`LEVEL ${i}`),Ke.setProgress(0,i),ot.loadLevel(i),Ke.setCourseMarkers(ot.courseMarkerFracs),kt.setScene("play")}function Bl(){ms="play",_o="endless",Ke.showScreen(null),Ke.showHud(!0);const i=ft.get("endlessBest");Ke.setHudLabel(i>0?`ENDLESS · BEST ${i}`:"ENDLESS"),Ke.setDistance(0),ot.loadEndless(),kt.setScene("play")}function Cg(){const i=ft.get("unlocked");return Math.min(i,os())}function Pg(){_o==="endless"?or():is()}Ke.bind({onPlay:()=>{Gt.button(),Xs(Cg())},onOpenLevels:()=>{Gt.button(),is()},onEndless:()=>{Gt.button(),Bl()},onBackToMenu:()=>{Gt.button(),or()},onPickLevel:i=>{Gt.button(),i<=ft.get("unlocked")&&Xs(i)},onHudBack:()=>{Gt.button(),Pg()},onToggleSound:()=>{const i=kt.audio.toggleMuted();ft.set("muted",i),Ke.setSoundIcon(i),i||Gt.button()},onRetry:()=>{Ke.showScreen(null),ot.retry(kt.ads)},onResume:()=>{Ke.showScreen(null),ot.resumeFromCheckpoint(kt.ads)},onCrashToLevels:()=>{Gt.button(),is()},onNext:()=>{Gt.button();const i=ot.levelId+1;i<=os()?Xs(i):is()},onReplay:()=>{Gt.button(),Xs(ot.levelId)},onCompleteToLevels:()=>{Gt.button(),is()},onOverRetry:()=>{Gt.button(),Bl()},onOverToMenu:()=>{Gt.button(),or()}});Ke.setSoundIcon(ft.get("muted"));kt.registerScene("ambient",T0(Pn));kt.registerScene("play",ot);kt.ads.initialize();or();kt.start("ambient");const Di=document.getElementById("boot-splash");Di&&requestAnimationFrame(()=>{Di.classList.add("splash-out"),Di.addEventListener("transitionend",()=>Di.remove(),{once:!0}),setTimeout(()=>Di.parentNode&&Di.remove(),600)});window.__waveDashDebug={screen:()=>ms,overlay:()=>Ke.activeScreen(),mode:()=>ot.debugState.mode(),level:()=>ot.debugState.level(),state:()=>ot.debugState.state(),x:()=>ot.debugState.x(),y:()=>ot.debugState.y(),heading:()=>ot.debugState.heading(),crashes:()=>ot.debugState.crashes(),attempts:()=>ot.debugState.attempts(),checkpointsReached:()=>ot.debugState.checkpointsReached(),checkpointYs:()=>ot.debugState.checkpoints(),checkpointCount:()=>ot.debugState.checkpoints().length,progress:()=>ot.debugState.progress(),distance:()=>ot.debugState.distance(),courseLength:()=>ot.debugState.courseLength(),unlocked:()=>ft.get("unlocked"),stars:()=>ft.get("stars"),muted:()=>ft.get("muted"),endlessBest:()=>ft.get("endlessBest"),setAutopilot:i=>ot.setAutopilot(i),webgl:()=>Pn!==null,renderStats:()=>Pn?{calls:Pn.stats.calls,triangles:Pn.stats.triangles}:null,surferScreen:()=>Pn?Pn.surferScreen():null};
