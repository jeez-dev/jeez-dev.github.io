(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="170",nc=0,za=1,ic=2,al=1,rc=2,Mn=3,kn=0,Nt=1,yn=2,Fn=0,wi=1,Ha=2,Va=3,Ga=4,sc=5,Zn=100,ac=101,oc=102,lc=103,cc=104,uc=200,hc=201,dc=202,fc=203,Ps=204,Ls=205,pc=206,mc=207,gc=208,_c=209,vc=210,xc=211,Mc=212,Sc=213,yc=214,Ds=0,Is=1,Us=2,Li=3,Ns=4,Fs=5,Os=6,ks=7,_a=0,Ec=1,bc=2,On=0,Tc=1,Ac=2,wc=3,ol=4,Rc=5,Cc=6,Pc=7,ll=300,Di=301,Ii=302,Bs=303,zs=304,Xr=306,Hs=1e3,Qn=1001,Vs=1002,Gt=1003,Lc=1004,dr=1005,ln=1006,Zr=1007,ei=1008,Tn=1009,cl=1010,ul=1011,ar=1012,va=1013,ti=1014,cn=1015,lr=1016,xa=1017,Ma=1018,Ui=1020,hl=35902,dl=1021,fl=1022,nn=1023,pl=1024,ml=1025,Ri=1026,Ni=1027,Sa=1028,ya=1029,gl=1030,Ea=1031,ba=1033,Nr=33776,Fr=33777,Or=33778,kr=33779,Gs=35840,Ws=35841,Xs=35842,qs=35843,$s=36196,Ys=37492,Ks=37496,Zs=37808,js=37809,Js=37810,Qs=37811,ea=37812,ta=37813,na=37814,ia=37815,ra=37816,sa=37817,aa=37818,oa=37819,la=37820,ca=37821,Br=36492,ua=36494,ha=36495,_l=36283,da=36284,fa=36285,pa=36286,Dc=3200,Ic=3201,vl=0,Uc=1,Nn="",Vt="srgb",zi="srgb-linear",qr="linear",rt="srgb",oi=7680,Wa=519,Nc=512,Fc=513,Oc=514,xl=515,kc=516,Bc=517,zc=518,Hc=519,Xa=35044,qa=35048,$a="300 es",En=2e3,Vr=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const nr=Math.PI/180,or=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Ta(n,e){return(n%e+e)%e}function Vc(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gc(n,e,t){return n!==e?(t-n)/(e-n):0}function ir(n,e,t){return(1-t)*n+t*e}function Wc(n,e,t,i){return ir(n,e,1-Math.exp(-t*i))}function Xc(n,e=1){return e-Math.abs(Ta(n,e*2)-e)}function qc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $c(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kc(n,e){return n+Math.random()*(e-n)}function Zc(n){return n*(.5-Math.random())}function jc(n){n!==void 0&&(Ya=n);let e=Ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jc(n){return n*nr}function Qc(n){return n*or}function eu(n){return(n&n-1)===0&&n!==0}function tu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:nr,RAD2DEG:or,generateUUID:Vi,clamp:Pt,euclideanModulo:Ta,mapLinear:Vc,inverseLerp:Gc,lerp:ir,damp:Wc,pingpong:Xc,smoothstep:qc,smootherstep:$c,randInt:Yc,randFloat:Kc,randFloatSpread:Zc,seededRandom:jc,degToRad:Jc,radToDeg:Qc,isPowerOfTwo:eu,ceilPowerOfTwo:tu,floorPowerOfTwo:nu,setQuaternionFromProperEuler:iu,normalize:Rt,denormalize:Ei};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],M=r[0],p=r[3],h=r[6],T=r[1],b=r[4],S=r[7],F=r[2],w=r[5],R=r[8];return s[0]=a*M+o*T+c*F,s[3]=a*p+o*b+c*w,s[6]=a*h+o*S+c*R,s[1]=l*M+u*T+f*F,s[4]=l*p+u*b+f*w,s[7]=l*h+u*S+f*R,s[2]=d*M+m*T+g*F,s[5]=d*p+m*b+g*w,s[8]=d*h+m*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,g=t*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(r*l-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(i*c-l*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jr.makeScale(e,t)),this}rotate(e){return this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Oe;function Ml(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ru(){const n=Gr("canvas");return n.style.display="block",n}const Ka={};function er(n){n in Ka||(Ka[n]=!0,console.warn(n))}function su(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function au(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ou(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(n.r=bn(n.r),n.g=bn(n.g),n.b=bn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Nn?qr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ci(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Za=[.64,.33,.3,.6,.15,.06],ja=[.2126,.7152,.0722],Ja=[.3127,.329],Qa=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[zi]:{primaries:Za,whitePoint:Ja,transfer:qr,toXYZ:Qa,fromXYZ:eo,luminanceCoefficients:ja,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:Za,whitePoint:Ja,transfer:rt,toXYZ:Qa,fromXYZ:eo,luminanceCoefficients:ja,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});let li;class lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=Gr("canvas")),li.width=e.width,li.height=e.height;const i=li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bn(t[i]/255)*255):t[i]=bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cu=0;class Sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jr(r[a].image)):s.push(Jr(r[a]))}else s=Jr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uu=0;class Dt extends Hi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Qn,r=Qn,s=ln,a=ei,o=nn,c=Tn,l=Dt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Vi(),this.name="",this.source=new Sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=ll;Dt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],M=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(m+1)/2,F=(h+1)/2,w=(u+d)/4,R=(f+M)/4,P=(g+p)/4;return b>S&&b>F?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=w/i,s=R/i):S>F?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=P/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=R/s,r=P/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-M)/T,this.z=(d-u)/T,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hu extends Hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends hu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yl extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(f!==M||c!==d||l!==m||u!==g){let p=1-o;const h=c*d+l*m+u*g+f*M,T=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const F=Math.sqrt(b),w=Math.atan2(F,h*T);p=Math.sin(p*w)/F,o=Math.sin(o*w)/F}const S=o*T;if(c=c*p+d*S,l=l*p+m*S,u=u*p+g*S,f=f*p+M*S,p===1-o){const F=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=F,l*=F,u*=F,f*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*m-l*d,e[t+1]=c*g+u*d+l*f-o*m,e[t+2]=l*g+u*m+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(to.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(to.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new U,to=new Gi;class ii{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),pr.subVectors(this.max,Yi),ci.subVectors(e.a,Yi),ui.subVectors(e.b,Yi),hi.subVectors(e.c,Yi),Rn.subVectors(ui,ci),Cn.subVectors(hi,ui),Hn.subVectors(ci,hi);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];return!es(t,ci,ui,hi,pr)||(t=[1,0,0,0,1,0,0,0,1],!es(t,ci,ui,hi,pr))?!1:(mr.crossVectors(Rn,Cn),t=[mr.x,mr.y,mr.z],es(t,ci,ui,hi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new U,new U,new U,new U,new U,new U,new U,new U],Zt=new U,fr=new ii,ci=new U,ui=new U,hi=new U,Rn=new U,Cn=new U,Hn=new U,Yi=new U,pr=new U,mr=new U,Vn=new U;function es(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vn.fromArray(n,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),u=i.dot(Vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const fu=new ii,Ki=new U,ts=new U;class cr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ki,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(ts)),this.expandByPoint(Ki.copy(e.center).sub(ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new U,ns=new U,gr=new U,Pn=new U,is=new U,_r=new U,rs=new U;class pu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ns.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(ns);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=Pn.dot(this.direction),c=-Pn.dot(gr),l=Pn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const M=1/u;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ns).addScaledVector(gr,d),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){is.subVectors(t,e),_r.subVectors(i,e),rs.crossVectors(is,_r);let a=this.direction.dot(rs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const c=o*this.direction.dot(_r.crossVectors(Pn,_r));if(c<0)return null;const l=o*this.direction.dot(is.cross(Pn));if(l<0||c+l>a)return null;const u=-o*Pn.dot(rs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,c,l,u,f,d,m,g,M,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,m,g,M,p)}set(e,t,i,r,s,a,o,c,l,u,f,d,m,g,M,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,g=o*u,M=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,g=l*u,M=l*f;t[0]=d+M*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,g=l*u,M=l*f;t[0]=d-M*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,g=o*u,M=o*f;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+M,t[1]=c*f,t[5]=M*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=M-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+g,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*c,m=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+M,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mu,e,gu)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Ln.crossVectors(i,zt),Ln.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Ln.crossVectors(i,zt)),Ln.normalize(),vr.crossVectors(zt,Ln),r[0]=Ln.x,r[4]=vr.x,r[8]=zt.x,r[1]=Ln.y,r[5]=vr.y,r[9]=zt.y,r[2]=Ln.z,r[6]=vr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],M=i[6],p=i[10],h=i[14],T=i[3],b=i[7],S=i[11],F=i[15],w=r[0],R=r[4],P=r[8],y=r[12],x=r[1],A=r[5],z=r[9],O=r[13],q=r[2],$=r[6],k=r[10],X=r[14],G=r[3],te=r[7],ne=r[11],pe=r[15];return s[0]=a*w+o*x+c*q+l*G,s[4]=a*R+o*A+c*$+l*te,s[8]=a*P+o*z+c*k+l*ne,s[12]=a*y+o*O+c*X+l*pe,s[1]=u*w+f*x+d*q+m*G,s[5]=u*R+f*A+d*$+m*te,s[9]=u*P+f*z+d*k+m*ne,s[13]=u*y+f*O+d*X+m*pe,s[2]=g*w+M*x+p*q+h*G,s[6]=g*R+M*A+p*$+h*te,s[10]=g*P+M*z+p*k+h*ne,s[14]=g*y+M*O+p*X+h*pe,s[3]=T*w+b*x+S*q+F*G,s[7]=T*R+b*A+S*$+F*te,s[11]=T*P+b*z+S*k+F*ne,s[15]=T*y+b*O+S*X+F*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],M=e[7],p=e[11],h=e[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*m-i*c*m)+M*(+t*c*m-t*l*d+s*a*d-r*a*m+r*l*u-s*c*u)+p*(+t*l*f-t*o*m-s*a*f+i*a*m+s*o*u-i*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],M=e[13],p=e[14],h=e[15],T=f*p*l-M*d*l+M*c*m-o*p*m-f*c*h+o*d*h,b=g*d*l-u*p*l-g*c*m+a*p*m+u*c*h-a*d*h,S=u*M*l-g*f*l+g*o*m-a*M*m-u*o*h+a*f*h,F=g*f*c-u*M*c-g*o*d+a*M*d+u*o*p-a*f*p,w=t*T+i*b+r*S+s*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=T*R,e[1]=(M*d*s-f*p*s-M*r*m+i*p*m+f*r*h-i*d*h)*R,e[2]=(o*p*s-M*c*s+M*r*l-i*p*l-o*r*h+i*c*h)*R,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*R,e[4]=b*R,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*h+t*d*h)*R,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*h-t*c*h)*R,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*m+t*c*m)*R,e[8]=S*R,e[9]=(g*f*s-u*M*s-g*i*m+t*M*m+u*i*h-t*f*h)*R,e[10]=(a*M*s-g*o*s+g*i*l-t*M*l-a*i*h+t*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*m-t*o*m)*R,e[12]=F*R,e[13]=(u*M*r-g*f*r+g*i*d-t*M*d-u*i*p+t*f*p)*R,e[14]=(g*o*r-a*M*r-g*i*c+t*M*c+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,g=s*f,M=a*u,p=a*f,h=o*f,T=c*l,b=c*u,S=c*f,F=i.x,w=i.y,R=i.z;return r[0]=(1-(M+h))*F,r[1]=(m+S)*F,r[2]=(g-b)*F,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+h))*w,r[6]=(p+T)*w,r[7]=0,r[8]=(g+b)*R,r[9]=(p-T)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const l=1/s,u=1/a,f=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=f,jt.elements[9]*=f,jt.elements[10]*=f,t.setFromRotationMatrix(jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=En){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(o===En)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Vr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=En){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*l,m=(i+r)*u;let g,M;if(o===En)g=(a+s)*f,M=-2*f;else if(o===Vr)g=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const di=new U,jt=new ct,mu=new U(0,0,0),gu=new U(1,1,1),Ln=new U,vr=new U,zt=new U,no=new ct,io=new Gi;class sn{constructor(e=0,t=0,i=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return no.makeRotationFromQuaternion(e),this.setFromRotationMatrix(no,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return io.setFromEuler(this),this.setFromQuaternion(io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _u=0;const ro=new U,fi=new Gi,_n=new ct,xr=new U,Zi=new U,vu=new U,xu=new Gi,so=new U(1,0,0),ao=new U(0,1,0),oo=new U(0,0,1),lo={type:"added"},Mu={type:"removed"},pi={type:"childadded",child:null},ss={type:"childremoved",child:null};class Mt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new U,t=new sn,i=new Gi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ao,e)}rotateZ(e){return this.rotateOnAxis(oo,e)}translateOnAxis(e,t){return ro.copy(e).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ao,e)}translateZ(e){return this.translateOnAxis(oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Zi,xr,this.up):_n.lookAt(xr,Zi,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(_n),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lo),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mu),ss.child=e,this.dispatchEvent(ss),ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new U(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new U,vn=new U,as=new U,xn=new U,mi=new U,gi=new U,co=new U,os=new U,ls=new U,cs=new U,us=new ft,hs=new ft,ds=new ft;class tn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),vn.subVectors(i,t),as.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(vn),c=Jt.dot(as),l=vn.dot(vn),u=vn.dot(as),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return us.setScalar(0),hs.setScalar(0),ds.setScalar(0),us.fromBufferAttribute(e,t),hs.fromBufferAttribute(e,i),ds.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(us,s.x),a.addScaledVector(hs,s.y),a.addScaledVector(ds,s.z),a}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),vn.subVectors(e,t),Jt.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;mi.subVectors(r,i),gi.subVectors(s,i),os.subVectors(e,i);const c=mi.dot(os),l=gi.dot(os);if(c<=0&&l<=0)return t.copy(i);ls.subVectors(e,r);const u=mi.dot(ls),f=gi.dot(ls);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(mi,a);cs.subVectors(e,s);const m=mi.dot(cs),g=gi.dot(cs);if(g>=0&&m<=g)return t.copy(s);const M=m*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(gi,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return co.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(co,o);const h=1/(p+M+d);return a=M*h,o=d*h,t.copy(i).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function fs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Ta(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fs(a,s,e+1/3),this.g=fs(a,s,e),this.b=fs(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=bl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ye.fromWorkingColorSpace(bt.copy(this),e),Math.round(Pt(bt.r*255,0,255))*65536+Math.round(Pt(bt.g*255,0,255))*256+Math.round(Pt(bt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Vt){Ye.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Mr);const i=ir(Dn.h,Mr.h,t),r=ir(Dn.s,Mr.s,t),s=ir(Dn.l,Mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new $e;$e.NAMES=bl;let Su=0;class ur extends Hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Vi(),this.name="",this.blending=wi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ps,this.blendDst=Ls,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ps&&(i.blendSrc=this.blendSrc),this.blendDst!==Ls&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends ur{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new U,Sr=new je;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xa,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class Tl extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Al extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yu=0;const qt=new ct,ps=new Mt,_i=new U,Ht=new ii,ji=new ii,xt=new U;class hn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)?Al:Tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return ps.lookAt(e),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Ht.min,ji.min),Ht.expandByPoint(xt),xt.addVectors(Ht.max,ji.max),Ht.expandByPoint(xt)):(Ht.expandByPoint(ji.min),Ht.expandByPoint(ji.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xt.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(e,l),xt.add(_i)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new U,c[P]=new U;const l=new U,u=new U,f=new U,d=new je,m=new je,g=new je,M=new U,p=new U;function h(P,y,x){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(l),f.sub(l),m.sub(d),g.sub(d);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(A),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(A),o[P].add(M),o[y].add(M),o[x].add(M),c[P].add(p),c[y].add(p),c[x].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,y=T.length;P<y;++P){const x=T[P],A=x.start,z=x.count;for(let O=A,q=A+z;O<q;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new U,S=new U,F=new U,w=new U;function R(P){F.fromBufferAttribute(r,P),w.copy(F);const y=o[P];b.copy(y),b.sub(F.multiplyScalar(F.dot(y))).normalize(),S.crossVectors(w,y);const A=S.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,A)}for(let P=0,y=T.length;P<y;++P){const x=T[P],A=x.start,z=x.count;for(let O=A,q=A+z;O<q;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,f=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*u;for(let h=0;h<u;h++)d[g++]=l[m++]}return new rn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uo=new ct,Gn=new pu,yr=new cr,ho=new U,Er=new U,br=new U,Tr=new U,ms=new U,Ar=new U,fo=new U,wr=new U;class dt extends Mt{constructor(e=new hn,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ar.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(ms.fromBufferAttribute(f,e),a?Ar.addScaledVector(ms,u):Ar.addScaledVector(ms.sub(t),u))}t.add(Ar)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(yr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(yr,ho)===null||Gn.origin.distanceToSquared(ho)>(e.far-e.near)**2))&&(uo.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(uo),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,F=b;S<F;S+=3){const w=o.getX(S),R=o.getX(S+1),P=o.getX(S+2);r=Rr(this,h,e,i,l,u,f,w,R,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,h=M;p<h;p+=3){const T=o.getX(p),b=o.getX(p+1),S=o.getX(p+2);r=Rr(this,a,e,i,l,u,f,T,b,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,F=b;S<F;S+=3){const w=S,R=S+1,P=S+2;r=Rr(this,h,e,i,l,u,f,w,R,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=g,h=M;p<h;p+=3){const T=p,b=p+1,S=p+2;r=Rr(this,a,e,i,l,u,f,T,b,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Eu(n,e,t,i,r,s,a,o){let c;if(e.side===Nt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===kn,o),c===null)return null;wr.copy(o),wr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:n}}function Rr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Er),n.getVertexPosition(c,br),n.getVertexPosition(l,Tr);const u=Eu(n,e,t,i,Er,br,Tr,fo);if(u){const f=new U;tn.getBarycoord(fo,Er,br,Tr,f),r&&(u.uv=tn.getInterpolatedAttribute(r,o,c,l,f,new je)),s&&(u.uv1=tn.getInterpolatedAttribute(s,o,c,l,f,new je)),a&&(u.normal=tn.getInterpolatedAttribute(a,o,c,l,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};tn.getNormal(Er,br,Tr,d.normal),u.face=d,u.barycoord=f}return u}class Bn extends hn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function g(M,p,h,T,b,S,F,w,R,P,y){const x=S/R,A=F/P,z=S/2,O=F/2,q=w/2,$=R+1,k=P+1;let X=0,G=0;const te=new U;for(let ne=0;ne<k;ne++){const pe=ne*A-O;for(let _e=0;_e<$;_e++){const We=_e*x-z;te[M]=We*T,te[p]=pe*b,te[h]=q,l.push(te.x,te.y,te.z),te[M]=0,te[p]=0,te[h]=w>0?1:-1,u.push(te.x,te.y,te.z),f.push(_e/R),f.push(1-ne/P),X+=1}}for(let ne=0;ne<P;ne++)for(let pe=0;pe<R;pe++){const _e=d+pe+$*ne,We=d+pe+$*(ne+1),B=d+(pe+1)+$*(ne+1),K=d+(pe+1)+$*ne;c.push(_e,We,K),c.push(We,B,K),G+=6}o.addGroup(m,G,y),m+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=Fi(n[t]);for(const r in i)e[r]=i[r]}return e}function bu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Tu={clone:Fi,merge:Ct};var Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends ur{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rl extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new U,po=new je,mo=new je;class $t extends Rl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,po,mo),t.subVectors(mo,po)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class Ru extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(vi,xi,e,t);r.layers=this.layers,this.add(r);const s=new $t(vi,xi,e,t);s.layers=this.layers,this.add(s);const a=new $t(vi,xi,e,t);a.layers=this.layers,this.add(a);const o=new $t(vi,xi,e,t);o.layers=this.layers,this.add(o);const c=new $t(vi,xi,e,t);c.layers=this.layers,this.add(c);const l=new $t(vi,xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cl extends Dt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cu extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bn(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new dt(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=ln),new Ru(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const gs=new U,Pu=new U,Lu=new Oe;class Yn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gs.subVectors(i,t).cross(Pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lu.getNormalMatrix(e),r=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new cr,Cr=new U;class Aa{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],g=r[9],M=r[10],p=r[11],h=r[12],T=r[13],b=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,p-m,S-h).normalize(),i[1].setComponents(c+s,d+l,p+m,S+h).normalize(),i[2].setComponents(c+a,d+u,p+g,S+T).normalize(),i[3].setComponents(c-a,d-u,p-g,S-T).normalize(),i[4].setComponents(c-o,d-f,p-M,S-b).normalize(),t===En)i[5].setComponents(c+o,d+f,p+M,S+b).normalize();else if(t===Vr)i[5].setComponents(o,f,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Du(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],M=f[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const M=f[m];n.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Oi extends hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,m=[],g=[],M=[],p=[];for(let h=0;h<u;h++){const T=h*d-a;for(let b=0;b<l;b++){const S=b*f-s;g.push(S,-T,0),M.push(0,0,1),p.push(b/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<o;T++){const b=T+l*h,S=T+l*(h+1),F=T+1+l*(h+1),w=T+1+l*h;m.push(b,S,w),m.push(S,F,w)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(M,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ph=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Lh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,Gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,td=`#ifdef USE_NORMALMAP
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
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,_d=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
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
}`,Bd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zd=`#define DISTANCE
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
}`,Hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,$d=`uniform vec3 diffuse;
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
}`,Yd=`#define LAMBERT
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
}`,Kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Zd=`#define MATCAP
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
}`,jd=`#define MATCAP
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
}`,Jd=`#define NORMAL
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
}`,Qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ef=`#define PHONG
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
}`,tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,nf=`#define STANDARD
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
}`,rf=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,sf=`#define TOON
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
}`,af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,of=`uniform float size;
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#include <common>
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
}`,uf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hf=`uniform float rotation;
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
}`,df=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Iu,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:ku,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:Hu,batching_vertex:Vu,begin_vertex:Gu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:ju,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:eh,color_vertex:th,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:rh,displacementmap_pars_vertex:sh,displacementmap_vertex:ah,emissivemap_fragment:oh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:uh,envmap_fragment:hh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:Th,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:vh,fog_pars_fragment:xh,gradientmap_pars_fragment:Mh,lightmap_pars_fragment:Sh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Eh,lights_pars_begin:bh,lights_toon_fragment:Ah,lights_toon_pars_fragment:wh,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Ph,lights_physical_pars_fragment:Lh,lights_fragment_begin:Dh,lights_fragment_maps:Ih,lights_fragment_end:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:kh,map_fragment:Bh,map_pars_fragment:zh,map_particle_fragment:Hh,map_particle_pars_fragment:Vh,metalnessmap_fragment:Gh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:Xh,morphcolor_vertex:qh,morphnormal_vertex:$h,morphtarget_pars_vertex:Yh,morphtarget_vertex:Kh,normal_fragment_begin:Zh,normal_fragment_maps:jh,normal_pars_fragment:Jh,normal_pars_vertex:Qh,normal_vertex:ed,normalmap_pars_fragment:td,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:rd,iridescence_pars_fragment:sd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:ud,dithering_pars_fragment:hd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:vd,skinning_pars_vertex:xd,skinning_vertex:Md,skinnormal_vertex:Sd,specularmap_fragment:yd,specularmap_pars_fragment:Ed,tonemapping_fragment:bd,tonemapping_pars_fragment:Td,transmission_fragment:Ad,transmission_pars_fragment:wd,uv_pars_fragment:Rd,uv_pars_vertex:Cd,uv_vertex:Pd,worldpos_vertex:Ld,background_vert:Dd,background_frag:Id,backgroundCube_vert:Ud,backgroundCube_frag:Nd,cube_vert:Fd,cube_frag:Od,depth_vert:kd,depth_frag:Bd,distanceRGBA_vert:zd,distanceRGBA_frag:Hd,equirect_vert:Vd,equirect_frag:Gd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:$d,meshlambert_vert:Yd,meshlambert_frag:Kd,meshmatcap_vert:Zd,meshmatcap_frag:jd,meshnormal_vert:Jd,meshnormal_frag:Qd,meshphong_vert:ef,meshphong_frag:tf,meshphysical_vert:nf,meshphysical_frag:rf,meshtoon_vert:sf,meshtoon_frag:af,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:uf,sprite_vert:hf,sprite_frag:df},se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},on={basic:{uniforms:Ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new $e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([se.points,se.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([se.common,se.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([se.sprite,se.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ct([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ct([se.lights,se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};on.physical={uniforms:Ct([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Pr={r:0,b:0,g:0},Xn=new sn,ff=new ct;function pf(n,e,t,i,r,s,a){const o=new $e(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function M(T){let b=!1;const S=g(T);S===null?h(o,c):S&&S.isColor&&(h(S,1),b=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Xr)?(u===void 0&&(u=new dt(new Bn(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Fi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xn.copy(b.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(Xn)),u.material.toneMapped=Ye.getTransfer(S.colorSpace)!==rt,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dt(new Oi(2,2),new zn({name:"BackgroundMaterial",uniforms:Fi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,b){T.getRGB(Pr,wl(n)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),c=b,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:M,addToRenderList:p}}function mf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,A,z,O,q){let $=!1;const k=f(O,z,A);s!==k&&(s=k,l(s.object)),$=m(x,O,z,q),$&&g(x,O,z,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(x,A,z,O),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,A,z){const O=z.wireframe===!0;let q=i[x.id];q===void 0&&(q={},i[x.id]=q);let $=q[A.id];$===void 0&&($={},q[A.id]=$);let k=$[O];return k===void 0&&(k=d(c()),$[O]=k),k}function d(x){const A=[],z=[],O=[];for(let q=0;q<t;q++)A[q]=0,z[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,A,z,O){const q=s.attributes,$=A.attributes;let k=0;const X=z.getAttributes();for(const G in X)if(X[G].location>=0){const ne=q[G];let pe=$[G];if(pe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),ne===void 0||ne.attribute!==pe||pe&&ne.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function g(x,A,z,O){const q={},$=A.attributes;let k=0;const X=z.getAttributes();for(const G in X)if(X[G].location>=0){let ne=$[G];ne===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));const pe={};pe.attribute=ne,ne&&ne.data&&(pe.data=ne.data),q[G]=pe,k++}s.attributes=q,s.attributesNum=k,s.index=O}function M(){const x=s.newAttributes;for(let A=0,z=x.length;A<z;A++)x[A]=0}function p(x){h(x,0)}function h(x,A){const z=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),q[x]!==A&&(n.vertexAttribDivisor(x,A),q[x]=A)}function T(){const x=s.newAttributes,A=s.enabledAttributes;for(let z=0,O=A.length;z<O;z++)A[z]!==x[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function b(x,A,z,O,q,$,k){k===!0?n.vertexAttribIPointer(x,A,z,q,$):n.vertexAttribPointer(x,A,z,O,q,$)}function S(x,A,z,O){M();const q=O.attributes,$=z.getAttributes(),k=A.defaultAttributeValues;for(const X in $){const G=$[X];if(G.location>=0){let te=q[X];if(te===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const ne=te.normalized,pe=te.itemSize,_e=e.get(te);if(_e===void 0)continue;const We=_e.buffer,B=_e.type,K=_e.bytesPerElement,fe=B===n.INT||B===n.UNSIGNED_INT||te.gpuType===va;if(te.isInterleavedBufferAttribute){const ie=te.data,Re=ie.stride,Ce=te.offset;if(ie.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)h(G.location+ke,ie.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ke=0;ke<G.locationSize;ke++)b(G.location+ke,pe/G.locationSize,B,ne,Re*K,(Ce+pe/G.locationSize*ke)*K,fe)}else{if(te.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)h(G.location+ie,te.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<G.locationSize;ie++)p(G.location+ie);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ie=0;ie<G.locationSize;ie++)b(G.location+ie,pe/G.locationSize,B,ne,pe*K,pe/G.locationSize*ie*K,fe)}}else if(k!==void 0){const ne=k[X];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(G.location,ne);break;case 3:n.vertexAttrib3fv(G.location,ne);break;case 4:n.vertexAttrib4fv(G.location,ne);break;default:n.vertexAttrib1fv(G.location,ne)}}}}T()}function F(){P();for(const x in i){const A=i[x];for(const z in A){const O=A[z];for(const q in O)u(O[q].object),delete O[q];delete A[z]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const A=i[x.id];for(const z in A){const O=A[z];for(const q in O)u(O[q].object),delete O[q];delete A[z]}delete i[x.id]}function R(x){for(const A in i){const z=i[A];if(z[x.id]===void 0)continue;const O=z[x.id];for(const q in O)u(O[q].object),delete O[q];delete z[x.id]}}function P(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function gf(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let M=0;M<f;M++)g+=u[M]*d[M];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _f(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==cn&&!P)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:F,maxSamples:w}}function vf(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Yn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const T=s?0:i,b=T*4;let S=h.clippingState||null;c.value=S,S=u(g,d,b,m);for(let F=0;F!==b;++F)S[F]=t[F];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const h=m+M*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,S=m;b!==M;++b,S+=4)a.copy(f[b]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function xf(n){let e=new WeakMap;function t(a,o){return o===Bs?a.mapping=Di:o===zs&&(a.mapping=Ii),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bs||o===zs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cu(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ll extends Rl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bi=4,go=[.125,.215,.35,.446,.526,.582],jn=20,_s=new Ll,_o=new $e;let vs=null,xs=0,Ms=0,Ss=!1;const Kn=(1+Math.sqrt(5))/2,Mi=1/Kn,vo=[new U(-Kn,Mi,0),new U(Kn,Mi,0),new U(-Mi,0,Kn),new U(Mi,0,Kn),new U(0,Kn,-Mi),new U(0,Kn,Mi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vs,xs,Ms),this._renderer.xr.enabled=Ss,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:lr,format:nn,colorSpace:zi,depthBuffer:!1},r=Mo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mf(s)),this._blurMaterial=Sf(s,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,i,r){const o=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_o),u.toneMapping=On,u.autoClear=!1;const m=new Qt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new dt(new Bn,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(_o),M=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):T===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const b=this._cubeSize;Lr(r,T*b,h>2?b:0,b,b),u.setRenderTarget(r),M&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Di||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,_s)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vo[(r-s-1)%vo.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),M=s/g,p=isFinite(s)?1+Math.floor(u*M):jn;p>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const h=[];let T=0;for(let R=0;R<jn;++R){const P=R/M,y=Math.exp(-P*P/2);h.push(y),R===0?T+=y:R<p&&(T+=2*y)}for(let R=0;R<h.length;R++)h[R]=h[R]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const S=this._sizeLods[r],F=3*S*(r>b-bi?r-b+bi:0),w=4*(this._cubeSize-S);Lr(t,F,w,3*S,2*S),c.setRenderTarget(t),c.render(f,_s)}}function Mf(n){const e=[],t=[],i=[];let r=n;const s=n-bi+1+go.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-bi?c=go[a-n+bi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,M=3,p=2,h=1,T=new Float32Array(M*g*m),b=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,P=w>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];T.set(y,M*g*w),b.set(d,p*g*w);const x=[w,w,w,w,w,w];S.set(x,h*g*w)}const F=new hn;F.setAttribute("position",new rn(T,M)),F.setAttribute("uv",new rn(b,p)),F.setAttribute("faceIndex",new rn(S,h)),e.push(F),r>bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mo(n,e,t){const i=new ni(n,e,t);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sf(n,e,t){const i=new Float32Array(jn),r=new U(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function So(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function yo(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function yf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Bs||c===zs,u=c===Di||c===Ii;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xo(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new xo(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ef(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&er("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bf(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let p=0,h=M.length;p<h;p++)e.remove(M[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const M=m[g];for(let p=0,h=M.length;p<h;p++)e.update(M[p],n.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,g=f.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let b=0,S=T.length;b<S;b+=3){const F=T[b+0],w=T[b+1],R=T[b+2];d.push(F,w,w,R,R,F)}}else if(g!==void 0){const T=g.array;M=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const F=b+0,w=b+1,R=b+2;d.push(F,w,w,R,R,F)}}else return;const p=new(Ml(d)?Al:Tl)(d,1);p.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Tf(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function f(d,m,g,M){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*M[T];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Af(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wf(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let x=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let F=o.attributes.position.count*S,w=1;F>e.maxTextureSize&&(w=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*w*4*f),P=new yl(R,F,w,f);P.type=cn,P.needsUpdate=!0;const y=S*4;for(let A=0;A<f;A++){const z=h[A],O=T[A],q=b[A],$=F*w*4*A;for(let k=0;k<z.count;k++){const X=k*y;g===!0&&(r.fromBufferAttribute(z,k),R[$+X+0]=r.x,R[$+X+1]=r.y,R[$+X+2]=r.z,R[$+X+3]=0),M===!0&&(r.fromBufferAttribute(O,k),R[$+X+4]=r.x,R[$+X+5]=r.y,R[$+X+6]=r.z,R[$+X+7]=0),p===!0&&(r.fromBufferAttribute(q,k),R[$+X+8]=r.x,R[$+X+9]=r.y,R[$+X+10]=r.z,R[$+X+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new je(F,w)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Rf(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Dl extends Dt{constructor(e,t,i,r,s,a,o,c,l,u=Ri){if(u!==Ri&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ri&&(i=ti),i===void 0&&u===Ni&&(i=Ui),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Il=new Dt,Eo=new Dl(1,1),Ul=new yl,Nl=new du,Fl=new Cl,bo=[],To=[],Ao=new Float32Array(16),wo=new Float32Array(9),Ro=new Float32Array(4);function Wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bo[r];if(s===void 0&&(s=new Float32Array(r),bo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $r(n,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function Lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function Df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function If(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Ro.set(i),n.uniformMatrix2fv(this.addr,!1,Ro),gt(t,i)}}function Uf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;wo.set(i),n.uniformMatrix3fv(this.addr,!1,wo),gt(t,i)}}function Nf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Ao.set(i),n.uniformMatrix4fv(this.addr,!1,Ao),gt(t,i)}}function Ff(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function zf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function Wf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Eo.compareFunction=xl,s=Eo):s=Il,t.setTexture2D(e||s,r)}function Xf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nl,r)}function qf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fl,r)}function $f(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ul,r)}function Yf(n){switch(n){case 5126:return Cf;case 35664:return Pf;case 35665:return Lf;case 35666:return Df;case 35674:return If;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return Of;case 35668:case 35672:return kf;case 35669:case 35673:return Bf;case 5125:return zf;case 36294:return Hf;case 36295:return Vf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return $f}}function Kf(n,e){n.uniform1fv(this.addr,e)}function Zf(n,e){const t=Wi(e,this.size,2);n.uniform2fv(this.addr,t)}function jf(n,e){const t=Wi(e,this.size,3);n.uniform3fv(this.addr,t)}function Jf(n,e){const t=Wi(e,this.size,4);n.uniform4fv(this.addr,t)}function Qf(n,e){const t=Wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ep(n,e){const t=Wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tp(n,e){const t=Wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function np(n,e){n.uniform1iv(this.addr,e)}function ip(n,e){n.uniform2iv(this.addr,e)}function rp(n,e){n.uniform3iv(this.addr,e)}function sp(n,e){n.uniform4iv(this.addr,e)}function ap(n,e){n.uniform1uiv(this.addr,e)}function op(n,e){n.uniform2uiv(this.addr,e)}function lp(n,e){n.uniform3uiv(this.addr,e)}function cp(n,e){n.uniform4uiv(this.addr,e)}function up(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Il,s[a])}function hp(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nl,s[a])}function dp(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fl,s[a])}function fp(n,e,t){const i=this.cache,r=e.length,s=$r(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ul,s[a])}function pp(n){switch(n){case 5126:return Kf;case 35664:return Zf;case 35665:return jf;case 35666:return Jf;case 35674:return Qf;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yf(t.type)}}class gp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pp(t.type)}}class _p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function Co(n,e){n.seq.push(e),n.map[e.id]=e}function vp(n,e,t){const i=n.name,r=i.length;for(ys.lastIndex=0;;){const s=ys.exec(i),a=ys.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Co(t,l===void 0?new mp(o,n,e):new gp(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new _p(o),Co(t,f)),t=f}}}class zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);vp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Po(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xp=37297;let Mp=0;function Sp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Lo=new Oe;function yp(n){Ye._getMatrix(Lo,Ye.workingColorSpace,n);const e=`mat3( ${Lo.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case qr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Do(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sp(n.getShaderSource(e),a)}else return r}function Ep(n,e){const t=yp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bp(n,e){let t;switch(e){case Tc:t="Linear";break;case Ac:t="Reinhard";break;case wc:t="Cineon";break;case ol:t="ACESFilmic";break;case Cc:t="AgX";break;case Pc:t="Neutral";break;case Rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new U;function Tp(){Ye.getLuminanceCoefficients(Dr);const n=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ap(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function wp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function tr(n){return n!==""}function Io(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(n){return n.replace(Cp,Lp)}const Pp=new Map;function Lp(n,e){let t=He[e];if(t===void 0){const i=Pp.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ma(t)}const Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function No(n){return n.replace(Dp,Ip)}function Ip(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===al?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Np(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Di:case Ii:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Op(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _a:e="ENVMAP_BLENDING_MULTIPLY";break;case Ec:e="ENVMAP_BLENDING_MIX";break;case bc:e="ENVMAP_BLENDING_ADD";break}return e}function kp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Up(t),l=Np(t),u=Fp(t),f=Op(t),d=kp(t),m=Ap(t),g=wp(s),M=r.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),h.length>0&&(h+=`
`)):(p=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),h=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?He.tonemapping_pars_fragment:"",t.toneMapping!==On?bp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Ep("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=ma(a),a=Io(a,t),a=Uo(a,t),o=ma(o),o=Io(o,t),o=Uo(o,t),a=No(a),o=No(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=T+p+a,S=T+h+o,F=Po(r,r.VERTEX_SHADER,b),w=Po(r,r.FRAGMENT_SHADER,S);r.attachShader(M,F),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(A){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(M).trim(),O=r.getShaderInfoLog(F).trim(),q=r.getShaderInfoLog(w).trim();let $=!0,k=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,F,w);else{const X=Do(r,F,"vertex"),G=Do(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+X+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||q==="")&&(k=!1);k&&(A.diagnostics={runnable:$,programLog:z,vertexShader:{log:O,prefix:p},fragmentShader:{log:q,prefix:h}})}r.deleteShader(F),r.deleteShader(w),P=new zr(r,M),y=Rp(r,M)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,xp)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=w,this}let zp=0;class Hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vp(e),t.set(e,i)),i}}class Vp{constructor(e){this.id=zp++,this.code=e,this.usedTimes=0}}function Gp(n,e,t,i,r,s,a){const o=new El,c=new Hp,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,x,A,z,O){const q=z.fog,$=O.geometry,k=y.isMeshStandardMaterial?z.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),G=X&&X.mapping===Xr?X.image.height:null,te=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ne=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pe=ne!==void 0?ne.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let We,B,K,fe;if(te){const Ze=on[te];We=Ze.vertexShader,B=Ze.fragmentShader}else We=y.vertexShader,B=y.fragmentShader,c.update(y),K=c.getVertexShaderID(y),fe=c.getFragmentShaderID(y);const ie=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,ke=O.isBatchedMesh===!0,tt=!!y.map,Xe=!!y.matcap,ut=!!X,L=!!y.aoMap,At=!!y.lightMap,Be=!!y.bumpMap,Ve=!!y.normalMap,Te=!!y.displacementMap,nt=!!y.emissiveMap,we=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,N=y.clearcoat>0,Z=y.dispersion>0,J=y.iridescence>0,Y=y.sheen>0,ve=y.transmission>0,ae=_&&!!y.anisotropyMap,ce=N&&!!y.clearcoatMap,qe=N&&!!y.clearcoatNormalMap,Q=N&&!!y.clearcoatRoughnessMap,me=J&&!!y.iridescenceMap,ye=J&&!!y.iridescenceThicknessMap,Ee=Y&&!!y.sheenColorMap,de=Y&&!!y.sheenRoughnessMap,ze=!!y.specularMap,Ue=!!y.specularColorMap,it=!!y.specularIntensityMap,C=ve&&!!y.transmissionMap,oe=ve&&!!y.thicknessMap,W=!!y.gradientMap,j=!!y.alphaMap,ue=y.alphaTest>0,le=!!y.alphaHash,Ie=!!y.extensions;let ht=On;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=n.toneMapping);const _t={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:B,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ke,batchingColor:ke&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:zi,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:Xe,envMap:ut,envMapMode:ut&&X.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:At,bumpMap:Be,normalMap:Ve,displacementMap:d&&Te,emissiveMap:nt,normalMapObjectSpace:Ve&&y.normalMapType===Uc,normalMapTangentSpace:Ve&&y.normalMapType===vl,metalnessMap:we,roughnessMap:E,anisotropy:_,anisotropyMap:ae,clearcoat:N,clearcoatMap:ce,clearcoatNormalMap:qe,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:ye,sheen:Y,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ze,specularColorMap:Ue,specularIntensityMap:it,transmission:ve,transmissionMap:C,thicknessMap:oe,gradientMap:W,opaque:y.transparent===!1&&y.blending===wi&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:le,combine:y.combine,mapUv:tt&&M(y.map.channel),aoMapUv:L&&M(y.aoMap.channel),lightMapUv:At&&M(y.lightMap.channel),bumpMapUv:Be&&M(y.bumpMap.channel),normalMapUv:Ve&&M(y.normalMap.channel),displacementMapUv:Te&&M(y.displacementMap.channel),emissiveMapUv:nt&&M(y.emissiveMap.channel),metalnessMapUv:we&&M(y.metalnessMap.channel),roughnessMapUv:E&&M(y.roughnessMap.channel),anisotropyMapUv:ae&&M(y.anisotropyMap.channel),clearcoatMapUv:ce&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(y.sheenRoughnessMap.channel),specularMapUv:ze&&M(y.specularMap.channel),specularColorMapUv:Ue&&M(y.specularColorMap.channel),specularIntensityMapUv:it&&M(y.specularIntensityMap.channel),transmissionMapUv:C&&M(y.transmissionMap.channel),thicknessMapUv:oe&&M(y.thicknessMap.channel),alphaMapUv:j&&M(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ve||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(tt||j),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:_e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function h(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(T(x,y),b(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const x=g[y.type];let A;if(x){const z=on[x];A=Tu.clone(z.uniforms)}else A=y.uniforms;return A}function F(y,x){let A;for(let z=0,O=u.length;z<O;z++){const q=u[z];if(q.cacheKey===x){A=q,++A.usedTimes;break}}return A===void 0&&(A=new Bp(n,x,y,s),u.push(A)),A}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function R(y){c.remove(y)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:F,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:P}}function Wp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Xp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ko(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,g,M,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:M,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=M,h.group=p),e++,h}function o(f,d,m,g,M,p){const h=a(f,d,m,g,M,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(f,d,m,g,M,p){const h=a(f,d,m,g,M,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Xp),i.length>1&&i.sort(d||Oo),r.length>1&&r.sort(d||Oo)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function qp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ko,n.set(i,[a])):r>=s.length?(a=new ko,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function $p(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Yp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Kp=0;function Zp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jp(n){const e=new $p,t=Yp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new ct,a=new ct;function o(l){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,M=0,p=0,h=0,T=0,b=0,S=0,F=0,w=0,R=0;l.sort(Zp);for(let y=0,x=l.length;y<x;y++){const A=l[y],z=A.color,O=A.intensity,q=A.distance,$=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=z.r*O,f+=z.g*O,d+=z.b*O;else if(A.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],O);R++}else if(A.isDirectionalLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const X=A.shadow,G=t.get(A);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=A.shadow.matrix,T++}i.directional[m]=k,m++}else if(A.isSpotLight){const k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(z).multiplyScalar(O),k.distance=q,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[M]=k;const X=A.shadow;if(A.map&&(i.spotLightMap[F]=A.map,F++,X.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[M]=X.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=$,S++}M++}else if(A.isRectAreaLight){const k=e.get(A);k.color.copy(z).multiplyScalar(O),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=k,p++}else if(A.isPointLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const X=A.shadow,G=t.get(A);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=A.shadow.matrix,b++}i.point[g]=k,g++}else if(A.isHemisphereLight){const k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(O),k.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[h]=k,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==M||P.rectAreaLength!==p||P.hemiLength!==h||P.numDirectionalShadows!==T||P.numPointShadows!==b||P.numSpotShadows!==S||P.numSpotMaps!==F||P.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+F-w,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,P.directionalLength=m,P.pointLength=g,P.spotLength=M,P.rectAreaLength=p,P.hemiLength=h,P.numDirectionalShadows=T,P.numPointShadows=b,P.numSpotShadows=S,P.numSpotMaps=F,P.numLightProbes=R,i.version=Kp++)}function c(l,u){let f=0,d=0,m=0,g=0,M=0;const p=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){const b=l[h];if(b.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(b.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:i}}function Bo(n){const e=new jp(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Jp(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bo(n),e.set(r,[o])):s>=a.length?(o=new Bo(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Qp extends ur{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class em extends ur{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(n,e,t){let i=new Aa;const r=new je,s=new je,a=new ft,o=new Qp({depthPacking:Ic}),c=new em,l={},u=t.maxTextureSize,f={[kn]:Nt,[Nt]:kn,[yn]:yn},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new dt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let h=this.type;this.render=function(w,R,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Fn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=h!==Mn&&this.type===Mn,q=h===Mn&&this.type!==Mn;for(let $=0,k=w.length;$<k;$++){const X=w[$],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const te=G.getFrameExtents();if(r.multiply(te),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,G.mapSize.y=s.y)),G.map===null||O===!0||q===!0){const pe=this.type!==Mn?{minFilter:Gt,magFilter:Gt}:{};G.map!==null&&G.map.dispose(),G.map=new ni(r.x,r.y,pe),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ne=G.getViewportCount();for(let pe=0;pe<ne;pe++){const _e=G.getViewport(pe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),z.viewport(a),G.updateMatrices(X,pe),i=G.getFrustum(),S(R,P,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&T(G,P),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(y,x,A)};function T(w,R){const P=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,P,m,M,null)}function b(w,R,P,y){let x=null;const A=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)x=A;else if(x=P.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=x.uuid,O=R.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let $=q[O];$===void 0&&($=x.clone(),q[O]=$,R.addEventListener("dispose",F)),x=$}if(x.visible=R.visible,x.wireframe=R.wireframe,y===Mn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=P}return x}function S(w,R,P,y,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Mn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=e.update(w),q=w.material;if(Array.isArray(q)){const $=O.groups;for(let k=0,X=$.length;k<X;k++){const G=$[k],te=q[G.materialIndex];if(te&&te.visible){const ne=b(w,te,y,x);w.onBeforeShadow(n,w,R,P,O,ne,G),n.renderBufferDirect(P,null,O,ne,w,G),w.onAfterShadow(n,w,R,P,O,ne,G)}}}else if(q.visible){const $=b(w,q,y,x);w.onBeforeShadow(n,w,R,P,O,$,null),n.renderBufferDirect(P,null,O,$,w,null),w.onAfterShadow(n,w,R,P,O,$,null)}}const z=w.children;for(let O=0,q=z.length;O<q;O++)S(z[O],R,P,y,x)}function F(w){w.target.removeEventListener("dispose",F);for(const P in l){const y=l[P],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const rm={[Ds]:Is,[Us]:Os,[Ns]:ks,[Li]:Fs,[Is]:Ds,[Os]:Us,[ks]:Ns,[Fs]:Li};function sm(n,e){function t(){let C=!1;const oe=new ft;let W=null;const j=new ft(0,0,0,0);return{setMask:function(ue){W!==ue&&!C&&(n.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){C=ue},setClear:function(ue,le,Ie,ht,_t){_t===!0&&(ue*=ht,le*=ht,Ie*=ht),oe.set(ue,le,Ie,ht),j.equals(oe)===!1&&(n.clearColor(ue,le,Ie,ht),j.copy(oe))},reset:function(){C=!1,W=null,j.set(-1,0,0,0)}}}function i(){let C=!1,oe=!1,W=null,j=null,ue=null;return{setReversed:function(le){if(oe!==le){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const ht=ue;ue=null,this.setClear(ht)}oe=le},getReversed:function(){return oe},setTest:function(le){le?ie(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(le){W!==le&&!C&&(n.depthMask(le),W=le)},setFunc:function(le){if(oe&&(le=rm[le]),j!==le){switch(le){case Ds:n.depthFunc(n.NEVER);break;case Is:n.depthFunc(n.ALWAYS);break;case Us:n.depthFunc(n.LESS);break;case Li:n.depthFunc(n.LEQUAL);break;case Ns:n.depthFunc(n.EQUAL);break;case Fs:n.depthFunc(n.GEQUAL);break;case Os:n.depthFunc(n.GREATER);break;case ks:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=le}},setLocked:function(le){C=le},setClear:function(le){ue!==le&&(oe&&(le=1-le),n.clearDepth(le),ue=le)},reset:function(){C=!1,W=null,j=null,ue=null,oe=!1}}}function r(){let C=!1,oe=null,W=null,j=null,ue=null,le=null,Ie=null,ht=null,_t=null;return{setTest:function(Ze){C||(Ze?ie(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!C&&(n.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,kt,Yt){(W!==Ze||j!==kt||ue!==Yt)&&(n.stencilFunc(Ze,kt,Yt),W=Ze,j=kt,ue=Yt)},setOp:function(Ze,kt,Yt){(le!==Ze||Ie!==kt||ht!==Yt)&&(n.stencilOp(Ze,kt,Yt),le=Ze,Ie=kt,ht=Yt)},setLocked:function(Ze){C=Ze},setClear:function(Ze){_t!==Ze&&(n.clearStencil(Ze),_t=Ze)},reset:function(){C=!1,oe=null,W=null,j=null,ue=null,le=null,Ie=null,ht=null,_t=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,M=!1,p=null,h=null,T=null,b=null,S=null,F=null,w=null,R=new $e(0,0,0),P=0,y=!1,x=null,A=null,z=null,O=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=X>=2);let te=null,ne={};const pe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),We=new ft().fromArray(pe),B=new ft().fromArray(_e);function K(C,oe,W,j){const ue=new Uint8Array(4),le=n.createTexture();n.bindTexture(C,le),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<W;Ie++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(oe+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return le}const fe={};fe[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Li),Be(!1),Ve(za),ie(n.CULL_FACE),L(Fn);function ie(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function Re(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Ce(C,oe){return f[C]!==oe?(n.bindFramebuffer(C,oe),f[C]=oe,C===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=oe),C===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function ke(C,oe){let W=m,j=!1;if(C){W=d.get(oe),W===void 0&&(W=[],d.set(oe,W));const ue=C.textures;if(W.length!==ue.length||W[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ie=ue.length;le<Ie;le++)W[le]=n.COLOR_ATTACHMENT0+le;W.length=ue.length,j=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,j=!0);j&&n.drawBuffers(W)}function tt(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const Xe={[Zn]:n.FUNC_ADD,[ac]:n.FUNC_SUBTRACT,[oc]:n.FUNC_REVERSE_SUBTRACT};Xe[lc]=n.MIN,Xe[cc]=n.MAX;const ut={[uc]:n.ZERO,[hc]:n.ONE,[dc]:n.SRC_COLOR,[Ps]:n.SRC_ALPHA,[vc]:n.SRC_ALPHA_SATURATE,[gc]:n.DST_COLOR,[pc]:n.DST_ALPHA,[fc]:n.ONE_MINUS_SRC_COLOR,[Ls]:n.ONE_MINUS_SRC_ALPHA,[_c]:n.ONE_MINUS_DST_COLOR,[mc]:n.ONE_MINUS_DST_ALPHA,[xc]:n.CONSTANT_COLOR,[Mc]:n.ONE_MINUS_CONSTANT_COLOR,[Sc]:n.CONSTANT_ALPHA,[yc]:n.ONE_MINUS_CONSTANT_ALPHA};function L(C,oe,W,j,ue,le,Ie,ht,_t,Ze){if(C===Fn){M===!0&&(Re(n.BLEND),M=!1);return}if(M===!1&&(ie(n.BLEND),M=!0),C!==sc){if(C!==p||Ze!==y){if((h!==Zn||S!==Zn)&&(n.blendEquation(n.FUNC_ADD),h=Zn,S=Zn),Ze)switch(C){case wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.ONE,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ga:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ga:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,b=null,F=null,w=null,R.set(0,0,0),P=0,p=C,y=Ze}return}ue=ue||oe,le=le||W,Ie=Ie||j,(oe!==h||ue!==S)&&(n.blendEquationSeparate(Xe[oe],Xe[ue]),h=oe,S=ue),(W!==T||j!==b||le!==F||Ie!==w)&&(n.blendFuncSeparate(ut[W],ut[j],ut[le],ut[Ie]),T=W,b=j,F=le,w=Ie),(ht.equals(R)===!1||_t!==P)&&(n.blendColor(ht.r,ht.g,ht.b,_t),R.copy(ht),P=_t),p=C,y=!1}function At(C,oe){C.side===yn?Re(n.CULL_FACE):ie(n.CULL_FACE);let W=C.side===Nt;oe&&(W=!W),Be(W),C.blending===wi&&C.transparent===!1?L(Fn):L(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const j=C.stencilWrite;o.setTest(j),j&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),nt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){x!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),x=C)}function Ve(C){C!==nc?(ie(n.CULL_FACE),C!==A&&(C===za?n.cullFace(n.BACK):C===ic?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),A=C}function Te(C){C!==z&&(k&&n.lineWidth(C),z=C)}function nt(C,oe,W){C?(ie(n.POLYGON_OFFSET_FILL),(O!==oe||q!==W)&&(n.polygonOffset(oe,W),O=oe,q=W)):Re(n.POLYGON_OFFSET_FILL)}function we(C){C?ie(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function E(C){C===void 0&&(C=n.TEXTURE0+$-1),te!==C&&(n.activeTexture(C),te=C)}function _(C,oe,W){W===void 0&&(te===null?W=n.TEXTURE0+$-1:W=te);let j=ne[W];j===void 0&&(j={type:void 0,texture:void 0},ne[W]=j),(j.type!==C||j.texture!==oe)&&(te!==W&&(n.activeTexture(W),te=W),n.bindTexture(C,oe||fe[C]),j.type=C,j.texture=oe)}function N(){const C=ne[te];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(C){We.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),We.copy(C))}function de(C){B.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),B.copy(C))}function ze(C,oe){let W=l.get(oe);W===void 0&&(W=new WeakMap,l.set(oe,W));let j=W.get(C);j===void 0&&(j=n.getUniformBlockIndex(oe,C.name),W.set(C,j))}function Ue(C,oe){const j=l.get(oe).get(C);c.get(oe)!==j&&(n.uniformBlockBinding(oe,j,C.__bindingPointIndex),c.set(oe,j))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,ne={},f={},d=new WeakMap,m=[],g=null,M=!1,p=null,h=null,T=null,b=null,S=null,F=null,w=null,R=new $e(0,0,0),P=0,y=!1,x=null,A=null,z=null,O=null,q=null,We.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Re,bindFramebuffer:Ce,drawBuffers:ke,useProgram:tt,setBlending:L,setMaterial:At,setFlipSided:Be,setCullFace:Ve,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:we,activeTexture:E,bindTexture:_,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:me,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:qe,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:ce,scissor:Ee,viewport:de,reset:it}}function zo(n,e,t,i){const r=am(i);switch(t){case dl:return n*e;case pl:return n*e;case ml:return n*e*2;case Sa:return n*e/r.components*r.byteLength;case ya:return n*e/r.components*r.byteLength;case gl:return n*e*2/r.components*r.byteLength;case Ea:return n*e*2/r.components*r.byteLength;case fl:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case ba:return n*e*4/r.components*r.byteLength;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Or:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ws:case qs:return Math.max(n,16)*Math.max(e,8)/4;case Gs:case Xs:return Math.max(n,8)*Math.max(e,8)/2;case $s:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Js:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Br:case ua:case ha:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _l:case da:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fa:case pa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function am(n){switch(n){case Tn:case cl:return{byteLength:1,components:1};case ar:case ul:case lr:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case ti:case va:case cn:return{byteLength:4,components:1};case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function om(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Gr("canvas")}function M(E,_,N){let Z=1;const J=we(E);if((J.width>N||J.height>N)&&(Z=N/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);f===void 0&&(f=g(Y,ve));const ae=_?g(Y,ve):f;return ae.width=Y,ae.height=ve,ae.getContext("2d").drawImage(E,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+ve+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,_,N,Z,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=_;if(_===n.RED&&(N===n.FLOAT&&(Y=n.R32F),N===n.HALF_FLOAT&&(Y=n.R16F),N===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.R8UI),N===n.UNSIGNED_SHORT&&(Y=n.R16UI),N===n.UNSIGNED_INT&&(Y=n.R32UI),N===n.BYTE&&(Y=n.R8I),N===n.SHORT&&(Y=n.R16I),N===n.INT&&(Y=n.R32I)),_===n.RG&&(N===n.FLOAT&&(Y=n.RG32F),N===n.HALF_FLOAT&&(Y=n.RG16F),N===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RG8UI),N===n.UNSIGNED_SHORT&&(Y=n.RG16UI),N===n.UNSIGNED_INT&&(Y=n.RG32UI),N===n.BYTE&&(Y=n.RG8I),N===n.SHORT&&(Y=n.RG16I),N===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),N===n.UNSIGNED_INT&&(Y=n.RGB32UI),N===n.BYTE&&(Y=n.RGB8I),N===n.SHORT&&(Y=n.RGB16I),N===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),N===n.UNSIGNED_INT&&(Y=n.RGBA32UI),N===n.BYTE&&(Y=n.RGBA8I),N===n.SHORT&&(Y=n.RGBA16I),N===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const ve=J?qr:Ye.getTransfer(Z);N===n.FLOAT&&(Y=n.RGBA32F),N===n.HALF_FLOAT&&(Y=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Y=ve===rt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(E,_){let N;return E?_===null||_===ti||_===Ui?N=n.DEPTH24_STENCIL8:_===cn?N=n.DEPTH32F_STENCIL8:_===ar&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===Ui?N=n.DEPTH_COMPONENT24:_===cn?N=n.DEPTH_COMPONENT32F:_===ar&&(N=n.DEPTH_COMPONENT16),N}function F(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Gt&&E.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),P(_),_.isVideoTexture&&u.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),x(_)}function P(E){const _=i.get(E);if(_.__webglInit===void 0)return;const N=E.source,Z=d.get(N);if(Z){const J=Z[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(E),Object.keys(Z).length===0&&d.delete(N)}i.remove(E)}function y(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const N=E.source,Z=d.get(N);delete Z[_.__cacheKey],a.memory.textures--}function x(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let J=0;J<_.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let Z=0,J=N.length;Z<J;Z++){const Y=i.get(N[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(N[Z])}i.remove(E)}let A=0;function z(){A=0}function O(){const E=A;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),A+=1,E}function q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){const N=i.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(N,E,_);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function k(E,_){const N=i.get(E);if(E.version>0&&N.__version!==E.version){B(N,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function X(E,_){const N=i.get(E);if(E.version>0&&N.__version!==E.version){B(N,E,_);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function G(E,_){const N=i.get(E);if(E.version>0&&N.__version!==E.version){K(N,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const te={[Hs]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Vs]:n.MIRRORED_REPEAT},ne={[Gt]:n.NEAREST,[Lc]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Zr]:n.LINEAR_MIPMAP_NEAREST,[ei]:n.LINEAR_MIPMAP_LINEAR},pe={[Nc]:n.NEVER,[Hc]:n.ALWAYS,[Fc]:n.LESS,[xl]:n.LEQUAL,[Oc]:n.EQUAL,[zc]:n.GEQUAL,[kc]:n.GREATER,[Bc]:n.NOTEQUAL};function _e(E,_){if(_.type===cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===Zr||_.magFilter===dr||_.magFilter===ei||_.minFilter===ln||_.minFilter===Zr||_.minFilter===dr||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,te[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,te[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,te[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ne[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ne[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==dr&&_.minFilter!==ei||_.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function We(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const Z=_.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const Y=q(_);if(Y!==E.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[Y].usedTimes++;const ve=J[E.__cacheKey];ve!==void 0&&(J[E.__cacheKey].usedTimes--,ve.usedTimes===0&&y(_)),E.__cacheKey=Y,E.__webglTexture=J[Y].texture}return N}function B(E,_,N){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const J=We(E,_),Y=_.source;t.bindTexture(Z,E.__webglTexture,n.TEXTURE0+N);const ve=i.get(Y);if(Y.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),ce=_.colorSpace===Nn?null:Ye.getPrimaries(_.colorSpace),qe=_.colorSpace===Nn||ae===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Q=M(_.image,!1,r.maxTextureSize);Q=nt(_,Q);const me=s.convert(_.format,_.colorSpace),ye=s.convert(_.type);let Ee=b(_.internalFormat,me,ye,_.colorSpace,_.isVideoTexture);_e(Z,_);let de;const ze=_.mipmaps,Ue=_.isVideoTexture!==!0,it=ve.__version===void 0||J===!0,C=Y.dataReady,oe=F(_,Q);if(_.isDepthTexture)Ee=S(_.format===Ni,_.type),it&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ee,Q.width,Q.height,0,me,ye,null));else if(_.isDataTexture)if(ze.length>0){Ue&&it&&t.texStorage2D(n.TEXTURE_2D,oe,Ee,ze[0].width,ze[0].height);for(let W=0,j=ze.length;W<j;W++)de=ze[W],Ue?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,me,ye,de.data):t.texImage2D(n.TEXTURE_2D,W,Ee,de.width,de.height,0,me,ye,de.data);_.generateMipmaps=!1}else Ue?(it&&t.texStorage2D(n.TEXTURE_2D,oe,Ee,Q.width,Q.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,me,ye,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,Q.width,Q.height,0,me,ye,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ze[0].width,ze[0].height,Q.depth);for(let W=0,j=ze.length;W<j;W++)if(de=ze[W],_.format!==nn)if(me!==null)if(Ue){if(C)if(_.layerUpdates.size>0){const ue=zo(de.width,de.height,_.format,_.type);for(const le of _.layerUpdates){const Ie=de.data.subarray(le*ue/de.data.BYTES_PER_ELEMENT,(le+1)*ue/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,le,de.width,de.height,1,me,Ie)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,me,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ee,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,me,ye,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ee,de.width,de.height,Q.depth,0,me,ye,de.data)}else{Ue&&it&&t.texStorage2D(n.TEXTURE_2D,oe,Ee,ze[0].width,ze[0].height);for(let W=0,j=ze.length;W<j;W++)de=ze[W],_.format!==nn?me!==null?Ue?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ee,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,me,ye,de.data):t.texImage2D(n.TEXTURE_2D,W,Ee,de.width,de.height,0,me,ye,de.data)}else if(_.isDataArrayTexture)if(Ue){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ee,Q.width,Q.height,Q.depth),C)if(_.layerUpdates.size>0){const W=zo(Q.width,Q.height,_.format,_.type);for(const j of _.layerUpdates){const ue=Q.data.subarray(j*W/Q.data.BYTES_PER_ELEMENT,(j+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,me,ye,ue)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,ye,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,me,ye,Q.data);else if(_.isData3DTexture)Ue?(it&&t.texStorage3D(n.TEXTURE_3D,oe,Ee,Q.width,Q.height,Q.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,me,ye,Q.data);else if(_.isFramebufferTexture){if(it)if(Ue)t.texStorage2D(n.TEXTURE_2D,oe,Ee,Q.width,Q.height);else{let W=Q.width,j=Q.height;for(let ue=0;ue<oe;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ee,W,j,0,me,ye,null),W>>=1,j>>=1}}else if(ze.length>0){if(Ue&&it){const W=we(ze[0]);t.texStorage2D(n.TEXTURE_2D,oe,Ee,W.width,W.height)}for(let W=0,j=ze.length;W<j;W++)de=ze[W],Ue?C&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,me,ye,de):t.texImage2D(n.TEXTURE_2D,W,Ee,me,ye,de);_.generateMipmaps=!1}else if(Ue){if(it){const W=we(Q);t.texStorage2D(n.TEXTURE_2D,oe,Ee,W.width,W.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ee,me,ye,Q);p(_)&&h(Z),ve.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function K(E,_,N){if(_.image.length!==6)return;const Z=We(E,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const Y=i.get(J);if(J.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+N);const ve=Ye.getPrimaries(Ye.workingColorSpace),ae=_.colorSpace===Nn?null:Ye.getPrimaries(_.colorSpace),ce=_.colorSpace===Nn||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const qe=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,me=[];for(let j=0;j<6;j++)!qe&&!Q?me[j]=M(_.image[j],!0,r.maxCubemapSize):me[j]=Q?_.image[j].image:_.image[j],me[j]=nt(_,me[j]);const ye=me[0],Ee=s.convert(_.format,_.colorSpace),de=s.convert(_.type),ze=b(_.internalFormat,Ee,de,_.colorSpace),Ue=_.isVideoTexture!==!0,it=Y.__version===void 0||Z===!0,C=J.dataReady;let oe=F(_,ye);_e(n.TEXTURE_CUBE_MAP,_);let W;if(qe){Ue&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ze,ye.width,ye.height);for(let j=0;j<6;j++){W=me[j].mipmaps;for(let ue=0;ue<W.length;ue++){const le=W[ue];_.format!==nn?Ee!==null?Ue?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,le.width,le.height,Ee,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,ze,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,le.width,le.height,Ee,de,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,ze,le.width,le.height,0,Ee,de,le.data)}}}else{if(W=_.mipmaps,Ue&&it){W.length>0&&oe++;const j=we(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ze,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Ue?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,me[j].width,me[j].height,Ee,de,me[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,me[j].width,me[j].height,0,Ee,de,me[j].data);for(let ue=0;ue<W.length;ue++){const Ie=W[ue].image[j].image;Ue?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Ie.width,Ie.height,Ee,de,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,ze,Ie.width,Ie.height,0,Ee,de,Ie.data)}}else{Ue?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,de,me[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,Ee,de,me[j]);for(let ue=0;ue<W.length;ue++){const le=W[ue];Ue?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Ee,de,le.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,ze,Ee,de,le.image[j])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function fe(E,_,N,Z,J,Y){const ve=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),ce=b(N.internalFormat,ve,ae,N.colorSpace),qe=i.get(_),Q=i.get(N);if(Q.__renderTarget=_,!qe.__hasExternalTextures){const me=Math.max(1,_.width>>Y),ye=Math.max(1,_.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,ce,me,ye,_.depth,0,ve,ae,null):t.texImage2D(J,Y,ce,me,ye,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ve(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,Q.__webglTexture,0,Be(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(E,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const Z=_.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,Y=S(_.stencilBuffer,J),ve=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Be(_);Ve(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Y,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,E)}else{const Z=_.textures;for(let J=0;J<Z.length;J++){const Y=Z[J],ve=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),ce=b(Y.internalFormat,ve,ae,Y.colorSpace),qe=Be(_);N&&Ve(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ce,_.width,_.height):Ve(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ce,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const J=Z.__webglTexture,Y=Be(_);if(_.depthTexture.format===Ri)Ve(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(_.depthTexture.format===Ni)Ve(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(E){const _=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Z}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),ie(_.__webglDepthbuffer[Z],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ie(_.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(E,_,N){const Z=i.get(E);_!==void 0&&fe(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ce(E)}function tt(E){const _=E.texture,N=i.get(E),Z=i.get(_);E.addEventListener("dispose",R);const J=E.textures,Y=E.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let ce=0;ce<_.mipmaps.length;ce++)N.__webglFramebuffer[ae][ce]=n.createFramebuffer()}else N.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)N.__webglFramebuffer[ae]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ae=0,ce=J.length;ae<ce;ae++){const qe=i.get(J[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ve(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const ce=J[ae];N.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const qe=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),me=b(ce.internalFormat,qe,Q,ce.colorSpace,E.isXRRenderTarget===!0),ye=Be(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(n.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)fe(N.__webglFramebuffer[ae][ce],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else fe(N.__webglFramebuffer[ae],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,ce=J.length;ae<ce;ae++){const qe=J[ae],Q=i.get(qe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),_e(n.TEXTURE_2D,qe),fe(N.__webglFramebuffer,E,qe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),p(qe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),_e(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)fe(N.__webglFramebuffer[ce],E,_,n.COLOR_ATTACHMENT0,ae,ce);else fe(N.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ae,0);p(_)&&h(ae),t.unbindTexture()}E.depthBuffer&&Ce(E)}function Xe(E){const _=E.textures;for(let N=0,Z=_.length;N<Z;N++){const J=_[N];if(p(J)){const Y=T(E),ve=i.get(J).__webglTexture;t.bindTexture(Y,ve),h(Y),t.unbindTexture()}}}const ut=[],L=[];function At(E){if(E.samples>0){if(Ve(E)===!1){const _=E.textures,N=E.width,Z=E.height;let J=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(E),ae=_.length>1;if(ae)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ce]);const qe=i.get(_[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,N,Z,0,0,N,Z,J,n.NEAREST),c===!0&&(ut.length=0,L.length=0,ut.push(n.COLOR_ATTACHMENT0+ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(Y),L.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ce]);const qe=i.get(_[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Be(E){return Math.min(r.maxSamples,E.samples)}function Ve(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function nt(E,_){const N=E.colorSpace,Z=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==zi&&N!==Nn&&(Ye.getTransfer(N)===rt?(Z!==nn||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ve}function lm(n,e){function t(i,r=Nn){let s;const a=Ye.getTransfer(r);if(i===Tn)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ma)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cl)return n.BYTE;if(i===ul)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===va)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===lr)return n.HALF_FLOAT;if(i===dl)return n.ALPHA;if(i===fl)return n.RGB;if(i===nn)return n.RGBA;if(i===pl)return n.LUMINANCE;if(i===ml)return n.LUMINANCE_ALPHA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Sa)return n.RED;if(i===ya)return n.RED_INTEGER;if(i===gl)return n.RG;if(i===Ea)return n.RG_INTEGER;if(i===ba)return n.RGBA_INTEGER;if(i===Nr||i===Fr||i===Or||i===kr)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gs||i===Ws||i===Xs||i===qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$s||i===Ys||i===Ks)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$s||i===Ys)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ks)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zs||i===js||i===Js||i===Qs||i===ea||i===ta||i===na||i===ia||i===ra||i===sa||i===aa||i===oa||i===la||i===ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zs)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===js)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Js)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qs)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ea)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ta)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===na)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ia)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ra)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===aa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===la)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ca)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Br||i===ua||i===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Br)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_l||i===da||i===fa||i===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Br)return s.COMPRESSED_RED_RGTC1_EXT;if(i===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ui?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class cm extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class en extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),h=this._getHandJoint(l,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new en;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`;class fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zn({vertexShader:hm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pm extends Hi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null;const M=new fm,p=t.getContextAttributes();let h=null,T=null;const b=[],S=[],F=new je;let w=null;const R=new $t;R.viewport=new ft;const P=new $t;P.viewport=new ft;const y=[R,P],x=new cm;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=b[B];return K===void 0&&(K=new Es,b[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=b[B];return K===void 0&&(K=new Es,b[B]=K),K.getGripSpace()},this.getHand=function(B){let K=b[B];return K===void 0&&(K=new Es,b[B]=K),K.getHandSpace()};function O(B){const K=S.indexOf(B.inputSource);if(K===-1)return;const fe=b[K];fe!==void 0&&(fe.update(B.inputSource,B.frame,l||a),fe.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let B=0;B<b.length;B++){const K=S[B];K!==null&&(S[B]=null,b[B].disconnect(K))}A=null,z=null,M.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,T=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ni(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,fe=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=p.stencil?Ni:Ri,fe=p.stencil?Ui:ti);const Re={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ni(d.textureWidth,d.textureHeight,{format:nn,type:Tn,depthTexture:new Dl(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(B){for(let K=0;K<B.removed.length;K++){const fe=B.removed[K],ie=S.indexOf(fe);ie>=0&&(S[ie]=null,b[ie].disconnect(fe))}for(let K=0;K<B.added.length;K++){const fe=B.added[K];let ie=S.indexOf(fe);if(ie===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=S.length){S.push(fe),ie=Ce;break}else if(S[Ce]===null){S[Ce]=fe,ie=Ce;break}if(ie===-1)break}const Re=b[ie];Re&&Re.connect(fe)}}const k=new U,X=new U;function G(B,K,fe){k.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const ie=k.distanceTo(X),Re=K.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,ke=Re[14]/(Re[10]-1),tt=Re[14]/(Re[10]+1),Xe=(Re[9]+1)/Re[5],ut=(Re[9]-1)/Re[5],L=(Re[8]-1)/Re[0],At=(Ce[8]+1)/Ce[0],Be=ke*L,Ve=ke*At,Te=ie/(-L+At),nt=Te*-L;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(nt),B.translateZ(Te),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Re[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const we=ke+Te,E=tt+Te,_=Be-nt,N=Ve+(ie-nt),Z=Xe*tt/E*we,J=ut*tt/E*we;B.projectionMatrix.makePerspective(_,N,Z,J,we,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function te(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,fe=B.far;M.texture!==null&&(M.depthNear>0&&(K=M.depthNear),M.depthFar>0&&(fe=M.depthFar)),x.near=P.near=R.near=K,x.far=P.far=R.far=fe,(A!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,z=x.far),R.layers.mask=B.layers.mask|2,P.layers.mask=B.layers.mask|4,x.layers.mask=R.layers.mask|P.layers.mask;const ie=B.parent,Re=x.cameras;te(x,ie);for(let Ce=0;Ce<Re.length;Ce++)te(Re[Ce],ie);Re.length===2?G(x,R,P):x.projectionMatrix.copy(R.projectionMatrix),ne(B,x,ie)};function ne(B,K,fe){fe===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(fe.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=or*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let pe=null;function _e(B,K){if(u=K.getViewerPose(l||a),g=K,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ie=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Ce=0;Ce<fe.length;Ce++){const ke=fe[Ce];let tt=null;if(m!==null)tt=m.getViewport(ke);else{const ut=f.getViewSubImage(d,ke);tt=ut.viewport,Ce===0&&(e.setRenderTargetTextures(T,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(T))}let Xe=y[Ce];Xe===void 0&&(Xe=new $t,Xe.layers.enable(Ce),Xe.viewport=new ft,y[Ce]=Xe),Xe.matrix.fromArray(ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(Xe)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ce=f.getDepthInformation(fe[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(e,Ce,r.renderState)}}for(let fe=0;fe<b.length;fe++){const ie=S[fe],Re=b[fe];ie!==null&&Re!==void 0&&Re.update(ie,K,l||a)}pe&&pe(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const We=new Pl;We.setAnimationLoop(_e),this.setAnimationLoop=function(B){pe=B},this.dispose=function(){}}}const qn=new sn,mm=new ct;function gm(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,wl(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,T,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Nt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Nt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h),b=T.envMap,S=T.envMapRotation;b&&(p.envMap.value=b,qn.copy(S),qn.x*=-1,qn.y*=-1,qn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),p.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(qn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,T,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _m(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const S=b.program;i.uniformBlockBinding(T,S)}function l(T,b){let S=r[T.id];S===void 0&&(g(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",p));const F=b.program;i.updateUBOMapping(T,F);const w=e.render.frame;s[T.id]!==w&&(d(T),s[T.id]=w)}function u(T){const b=f();T.__bindingPointIndex=b;const S=n.createBuffer(),F=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,F,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=r[T.id],S=T.uniforms,F=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,R=S.length;w<R;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,x=P.length;y<x;y++){const A=P[y];if(m(A,w,y,F)===!0){const z=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let q=0;for(let $=0;$<O.length;$++){const k=O[$],X=M(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,z+q,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,b,S,F){const w=T.value,R=b+"_"+S;if(F[R]===void 0)return typeof w=="number"||typeof w=="boolean"?F[R]=w:F[R]=w.clone(),!0;{const P=F[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return F[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const b=T.uniforms;let S=0;const F=16;for(let R=0,P=b.length;R<P;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,A=y.length;x<A;x++){const z=y[x],O=Array.isArray(z.value)?z.value:[z.value];for(let q=0,$=O.length;q<$;q++){const k=O[q],X=M(k),G=S%F,te=G%X.boundary,ne=G+te;S+=te,ne!==0&&F-ne<X.storage&&(S+=F-ne),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=X.storage}}}const w=S%F;return w>0&&(S+=F-w),T.__size=S,T.__cache={},this}function M(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){const b=T.target;b.removeEventListener("dispose",p);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class vm{constructor(e={}){const{canvas:t=ru(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=On,this.toneMappingExposure=1;const S=this;let F=!1,w=0,R=0,P=null,y=-1,x=null;const A=new ft,z=new ft;let O=null;const q=new $e(0);let $=0,k=t.width,X=t.height,G=1,te=null,ne=null;const pe=new ft(0,0,k,X),_e=new ft(0,0,k,X);let We=!1;const B=new Aa;let K=!1,fe=!1;const ie=new ct,Re=new ct,Ce=new U,ke=new ft,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ut(){return P===null?G:1}let L=i;function At(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const D="webgl2";if(L=At(D,v),L===null)throw At(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Be,Ve,Te,nt,we,E,_,N,Z,J,Y,ve,ae,ce,qe,Q,me,ye,Ee,de,ze,Ue,it,C;function oe(){Be=new Ef(L),Be.init(),Ue=new lm(L,Be),Ve=new _f(L,Be,e,Ue),Te=new sm(L,Be),Ve.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),nt=new Af(L),we=new Wp,E=new om(L,Be,Te,we,Ve,Ue,nt),_=new xf(S),N=new yf(S),Z=new Du(L),it=new mf(L,Z),J=new bf(L,Z,nt,it),Y=new Rf(L,J,Z,nt),Ee=new wf(L,Ve,E),Q=new vf(we),ve=new Gp(S,_,N,Be,Ve,it,Q),ae=new gm(S,we),ce=new qp,qe=new Jp(Be),ye=new pf(S,_,N,Te,Y,m,c),me=new im(S,Y,Ve),C=new _m(L,nt,Ve,Te),de=new gf(L,Be,nt),ze=new Tf(L,Be,nt),nt.programs=ve.programs,S.capabilities=Ve,S.extensions=Be,S.properties=we,S.renderLists=ce,S.shadowMap=me,S.state=Te,S.info=nt}oe();const W=new pm(S,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Be.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Be.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(k,X,!1))},this.getSize=function(v){return v.set(k,X)},this.setSize=function(v,D,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=v,X=D,t.width=Math.floor(v*G),t.height=Math.floor(D*G),H===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(k*G,X*G).floor()},this.setDrawingBufferSize=function(v,D,H){k=v,X=D,G=H,t.width=Math.floor(v*H),t.height=Math.floor(D*H),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(A)},this.getViewport=function(v){return v.copy(pe)},this.setViewport=function(v,D,H,V){v.isVector4?pe.set(v.x,v.y,v.z,v.w):pe.set(v,D,H,V),Te.viewport(A.copy(pe).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(_e)},this.setScissor=function(v,D,H,V){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,D,H,V),Te.scissor(z.copy(_e).multiplyScalar(G).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){Te.setScissorTest(We=v)},this.setOpaqueSort=function(v){te=v},this.setTransparentSort=function(v){ne=v},this.getClearColor=function(v){return v.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(v=!0,D=!0,H=!0){let V=0;if(v){let I=!1;if(P!==null){const ee=P.texture.format;I=ee===ba||ee===Ea||ee===ya}if(I){const ee=P.texture.type,he=ee===Tn||ee===ti||ee===ar||ee===Ui||ee===xa||ee===Ma,xe=ye.getClearColor(),Me=ye.getClearAlpha(),De=xe.r,Fe=xe.g,Se=xe.b;he?(g[0]=De,g[1]=Fe,g[2]=Se,g[3]=Me,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=De,M[1]=Fe,M[2]=Se,M[3]=Me,L.clearBufferiv(L.COLOR,0,M))}else V|=L.COLOR_BUFFER_BIT}D&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ce.dispose(),qe.dispose(),we.dispose(),_.dispose(),N.dispose(),Y.dispose(),it.dispose(),C.dispose(),ve.dispose(),W.dispose(),W.removeEventListener("sessionstart",ge),W.removeEventListener("sessionend",Ae),Pe.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const v=nt.autoReset,D=me.enabled,H=me.autoUpdate,V=me.needsUpdate,I=me.type;oe(),nt.autoReset=v,me.enabled=D,me.autoUpdate=H,me.needsUpdate=V,me.type=I}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ie(v){const D=v.target;D.removeEventListener("dispose",Ie),ht(D)}function ht(v){_t(v),we.remove(v)}function _t(v){const D=we.get(v).programs;D!==void 0&&(D.forEach(function(H){ve.releaseProgram(H)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,H,V,I,ee){D===null&&(D=tt);const he=I.isMesh&&I.matrixWorld.determinant()<0,xe=Xi(v,D,H,V,I);Te.setMaterial(V,he);let Me=H.index,De=1;if(V.wireframe===!0){if(Me=J.getWireframeAttribute(H),Me===void 0)return;De=2}const Fe=H.drawRange,Se=H.attributes.position;let Ke=Fe.start*De,at=(Fe.start+Fe.count)*De;ee!==null&&(Ke=Math.max(Ke,ee.start*De),at=Math.min(at,(ee.start+ee.count)*De)),Me!==null?(Ke=Math.max(Ke,0),at=Math.min(at,Me.count)):Se!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,Se.count));const ot=at-Ke;if(ot<0||ot===1/0)return;it.setup(I,V,xe,H,Me);let Ut,Je=de;if(Me!==null&&(Ut=Z.get(Me),Je=ze,Je.setIndex(Ut)),I.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*ut()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(I.isLine){let be=V.linewidth;be===void 0&&(be=1),Te.setLineWidth(be*ut()),I.isLineSegments?Je.setMode(L.LINES):I.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else I.isPoints?Je.setMode(L.POINTS):I.isSprite&&Je.setMode(L.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Je.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const be=I._multiDrawStarts,pn=I._multiDrawCounts,Qe=I._multiDrawCount,Kt=Me?Z.get(Me).bytesPerElement:1,ai=we.get(V).currentProgram.getUniforms();for(let Bt=0;Bt<Qe;Bt++)ai.setValue(L,"_gl_DrawID",Bt),Je.render(be[Bt]/Kt,pn[Bt])}else if(I.isInstancedMesh)Je.renderInstances(Ke,ot,I.count);else if(H.isInstancedBufferGeometry){const be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pn=Math.min(H.instanceCount,be);Je.renderInstances(Ke,ot,pn)}else Je.render(Ke,ot)};function Ze(v,D,H){v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Nt,v.needsUpdate=!0,fn(v,D,H),v.side=kn,v.needsUpdate=!0,fn(v,D,H),v.side=yn):fn(v,D,H)}this.compile=function(v,D,H=null){H===null&&(H=v),h=qe.get(H),h.init(D),b.push(h),H.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),v!==H&&v.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const V=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){const xe=ee[he];Ze(xe,H,I),V.add(xe)}else Ze(ee,H,I),V.add(ee)}),b.pop(),h=null,V},this.compileAsync=function(v,D,H=null){const V=this.compile(v,D,H);return new Promise(I=>{function ee(){if(V.forEach(function(he){we.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){I(v);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let kt=null;function Yt(v){kt&&kt(v)}function ge(){Pe.stop()}function Ae(){Pe.start()}const Pe=new Pl;Pe.setAnimationLoop(Yt),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(v){kt=v,W.setAnimationLoop(v),v===null?Pe.stop():Pe.start()},W.addEventListener("sessionstart",ge),W.addEventListener("sessionend",Ae),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,P),h=qe.get(v,b.length),h.init(D),b.push(h),Re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(Re),fe=this.localClippingEnabled,K=Q.init(this.clippingPlanes,fe),p=ce.get(v,T.length),p.init(),T.push(p),W.enabled===!0&&W.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Ge(ee,D,-1/0,S.sortObjects)}Ge(v,D,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(te,ne),Xe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xe&&ye.addToRenderList(p,v),this.info.render.frame++,K===!0&&Q.beginShadows();const H=h.state.shadowsArray;me.render(H,v,D),K===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,I=p.transmissive;if(h.setupLights(),D.isArrayCamera){const ee=D.cameras;if(I.length>0)for(let he=0,xe=ee.length;he<xe;he++){const Me=ee[he];Ne(V,I,v,Me)}Xe&&ye.render(v);for(let he=0,xe=ee.length;he<xe;he++){const Me=ee[he];Le(p,v,Me,Me.viewport)}}else I.length>0&&Ne(V,I,v,D),Xe&&ye.render(v),Le(p,v,D);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),v.isScene===!0&&v.onAfterRender(S,v,D),it.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],K===!0&&Q.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Ge(v,D,H,V){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||B.intersectsSprite(v)){V&&ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Re);const he=Y.update(v),xe=v.material;xe.visible&&p.push(v,he,xe,H,ke.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||B.intersectsObject(v))){const he=Y.update(v),xe=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ke.copy(v.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ke.copy(he.boundingSphere.center)),ke.applyMatrix4(v.matrixWorld).applyMatrix4(Re)),Array.isArray(xe)){const Me=he.groups;for(let De=0,Fe=Me.length;De<Fe;De++){const Se=Me[De],Ke=xe[Se.materialIndex];Ke&&Ke.visible&&p.push(v,he,Ke,H,ke.z,Se)}}else xe.visible&&p.push(v,he,xe,H,ke.z,null)}}const ee=v.children;for(let he=0,xe=ee.length;he<xe;he++)Ge(ee[he],D,H,V)}function Le(v,D,H,V){const I=v.opaque,ee=v.transmissive,he=v.transparent;h.setupLightsView(H),K===!0&&Q.setGlobalState(S.clippingPlanes,H),V&&Te.viewport(A.copy(V)),I.length>0&&st(I,D,H),ee.length>0&&st(ee,D,H),he.length>0&&st(he,D,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ne(v,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new ni(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?lr:Tn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ee=h.state.transmissionRenderTarget[V.id],he=V.viewport||A;ee.setSize(he.z,he.w);const xe=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(q),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&ye.render(H);const Me=S.toneMapping;S.toneMapping=On;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),K===!0&&Q.setGlobalState(S.clippingPlanes,V),st(v,H,V),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Se=0,Ke=D.length;Se<Ke;Se++){const at=D[Se],ot=at.object,Ut=at.geometry,Je=at.material,be=at.group;if(Je.side===yn&&ot.layers.test(V.layers)){const pn=Je.side;Je.side=Nt,Je.needsUpdate=!0,vt(ot,H,V,Ut,Je,be),Je.side=pn,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}S.setRenderTarget(xe),S.setClearColor(q,$),De!==void 0&&(V.viewport=De),S.toneMapping=Me}function st(v,D,H){const V=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ee=v.length;I<ee;I++){const he=v[I],xe=he.object,Me=he.geometry,De=V===null?he.material:V,Fe=he.group;xe.layers.test(H.layers)&&vt(xe,D,H,Me,De,Fe)}}function vt(v,D,H,V,I,ee){v.onBeforeRender(S,D,H,V,I,ee),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,D,H,V,v,ee),I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=Nt,I.needsUpdate=!0,S.renderBufferDirect(H,D,V,I,v,ee),I.side=kn,I.needsUpdate=!0,S.renderBufferDirect(H,D,V,I,v,ee),I.side=yn):S.renderBufferDirect(H,D,V,I,v,ee),v.onAfterRender(S,D,H,V,I,ee)}function fn(v,D,H){D.isScene!==!0&&(D=tt);const V=we.get(v),I=h.state.lights,ee=h.state.shadowsArray,he=I.state.version,xe=ve.getParameters(v,I.state,ee,D,H),Me=ve.getProgramCacheKey(xe);let De=V.programs;V.environment=v.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(v.isMeshStandardMaterial?N:_).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",Ie),De=new Map,V.programs=De);let Fe=De.get(Me);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===he)return si(v,xe),Fe}else xe.uniforms=ve.getUniforms(v),v.onBeforeCompile(xe,S),Fe=ve.acquireProgram(xe,Me),De.set(Me,Fe),V.uniforms=xe.uniforms;const Se=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=Q.uniform),si(v,xe),V.needsLights=tc(v),V.lightsStateVersion=he,V.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function ri(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=zr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function si(v,D){const H=we.get(v);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Xi(v,D,H,V,I){D.isScene!==!0&&(D=tt),E.resetTextureUnits();const ee=D.fog,he=V.isMeshStandardMaterial?D.environment:null,xe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zi,Me=(V.isMeshStandardMaterial?N:_).get(V.envMap||he),De=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,at=!!H.morphAttributes.color;let ot=On;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ot=S.toneMapping);const Ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=Ut!==void 0?Ut.length:0,be=we.get(V),pn=h.state.lights;if(K===!0&&(fe===!0||v!==x)){const Xt=v===x&&V.id===y;Q.setState(V,v,Xt)}let Qe=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==pn.state.version||be.outputColorSpace!==xe||I.isBatchedMesh&&be.batching===!1||!I.isBatchedMesh&&be.batching===!0||I.isBatchedMesh&&be.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&be.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&be.instancing===!1||!I.isInstancedMesh&&be.instancing===!0||I.isSkinnedMesh&&be.skinning===!1||!I.isSkinnedMesh&&be.skinning===!0||I.isInstancedMesh&&be.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&be.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&be.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&be.instancingMorph===!1&&I.morphTexture!==null||be.envMap!==Me||V.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Q.numPlanes||be.numIntersection!==Q.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==Fe||be.morphTargets!==Se||be.morphNormals!==Ke||be.morphColors!==at||be.toneMapping!==ot||be.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,be.__version=V.version);let Kt=be.currentProgram;Qe===!0&&(Kt=fn(V,D,I));let ai=!1,Bt=!1,qi=!1;const lt=Kt.getUniforms(),an=be.uniforms;if(Te.useProgram(Kt.program)&&(ai=!0,Bt=!0,qi=!0),V.id!==y&&(y=V.id,Bt=!0),ai||x!==v){Te.buffers.depth.getReversed()?(ie.copy(v.projectionMatrix),au(ie),ou(ie),lt.setValue(L,"projectionMatrix",ie)):lt.setValue(L,"projectionMatrix",v.projectionMatrix),lt.setValue(L,"viewMatrix",v.matrixWorldInverse);const An=lt.map.cameraPosition;An!==void 0&&An.setValue(L,Ce.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Bt=!0,qi=!0)}if(I.isSkinnedMesh){lt.setOptional(L,I,"bindMatrix"),lt.setOptional(L,I,"bindMatrixInverse");const Xt=I.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),lt.setValue(L,"boneTexture",Xt.boneTexture,E))}I.isBatchedMesh&&(lt.setOptional(L,I,"batchingTexture"),lt.setValue(L,"batchingTexture",I._matricesTexture,E),lt.setOptional(L,I,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",I._indirectTexture,E),lt.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",I._colorsTexture,E));const $i=H.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&Ee.update(I,H,Kt),(Bt||be.receiveShadow!==I.receiveShadow)&&(be.receiveShadow=I.receiveShadow,lt.setValue(L,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(an.envMap.value=Me,an.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(an.envMapIntensity.value=D.environmentIntensity),Bt&&(lt.setValue(L,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&ec(an,qi),ee&&V.fog===!0&&ae.refreshFogUniforms(an,ee),ae.refreshMaterialUniforms(an,V,G,X,h.state.transmissionRenderTarget[v.id]),zr.upload(L,ri(be),an,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zr.upload(L,ri(be),an,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(L,"center",I.center),lt.setValue(L,"modelViewMatrix",I.modelViewMatrix),lt.setValue(L,"normalMatrix",I.normalMatrix),lt.setValue(L,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xt=V.uniformsGroups;for(let An=0,wn=Xt.length;An<wn;An++){const Ba=Xt[An];C.update(Ba,Kt),C.bind(Ba,Kt)}}return Kt}function ec(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function tc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(v,D,H){we.get(v.texture).__webglTexture=D,we.get(v.depthTexture).__webglTexture=H;const V=we.get(v);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const H=we.get(v);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,H=0){P=v,w=D,R=H;let V=!0,I=null,ee=!1,he=!1;if(v){const Me=we.get(v);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(Me.__hasExternalTextures)E.rebindTextures(v,we.get(v.texture).__webglTexture,we.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Se=v.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&we.has(Se)&&(v.width!==Se.image.width||v.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Fe=we.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?I=Fe[D][H]:I=Fe[D],ee=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?I=we.get(v).__webglMultisampledFramebuffer:Array.isArray(Fe)?I=Fe[H]:I=Fe,A.copy(v.viewport),z.copy(v.scissor),O=v.scissorTest}else A.copy(pe).multiplyScalar(G).floor(),z.copy(_e).multiplyScalar(G).floor(),O=We;if(Te.bindFramebuffer(L.FRAMEBUFFER,I)&&V&&Te.drawBuffers(v,I),Te.viewport(A),Te.scissor(z),Te.setScissorTest(O),ee){const Me=we.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,H)}else if(he){const Me=we.get(v.texture),De=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,De)}y=-1},this.readRenderTargetPixels=function(v,D,H,V,I,ee,he){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Te.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Me=v.texture,De=Me.format,Fe=Me.type;if(!Ve.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-V&&H>=0&&H<=v.height-I&&L.readPixels(D,H,V,I,Ue.convert(De),Ue.convert(Fe),ee)}finally{const Me=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,D,H,V,I,ee,he){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){const Me=v.texture,De=Me.format,Fe=Me.type;if(!Ve.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-V&&H>=0&&H<=v.height-I){Te.bindFramebuffer(L.FRAMEBUFFER,xe);const Se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(D,H,V,I,Ue.convert(De),Ue.convert(Fe),0);const Ke=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ke);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await su(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Se),L.deleteSync(at),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,H=0){v.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const V=Math.pow(2,-H),I=Math.floor(v.image.width*V),ee=Math.floor(v.image.height*V),he=D!==null?D.x:0,xe=D!==null?D.y:0;E.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,he,xe,I,ee),Te.unbindTexture()},this.copyTextureToTexture=function(v,D,H=null,V=null,I=0){v.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,v=arguments[1],D=arguments[2],I=arguments[3]||0,H=null);let ee,he,xe,Me,De,Fe,Se,Ke,at;const ot=v.isCompressedTexture?v.mipmaps[I]:v.image;H!==null?(ee=H.max.x-H.min.x,he=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,De=H.min.y,Fe=H.isBox3?H.min.z:0):(ee=ot.width,he=ot.height,xe=ot.depth||1,Me=0,De=0,Fe=0),V!==null?(Se=V.x,Ke=V.y,at=V.z):(Se=0,Ke=0,at=0);const Ut=Ue.convert(D.format),Je=Ue.convert(D.type);let be;D.isData3DTexture?(E.setTexture3D(D,0),be=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),be=L.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const pn=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kt=L.getParameter(L.UNPACK_SKIP_PIXELS),ai=L.getParameter(L.UNPACK_SKIP_ROWS),Bt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe);const qi=v.isDataArrayTexture||v.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const an=we.get(v),$i=we.get(D),Xt=we.get(an.__renderTarget),An=we.get($i.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let wn=0;wn<xe;wn++)qi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(v).__webglTexture,I,Fe+wn),v.isDepthTexture?(lt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(D).__webglTexture,I,at+wn),L.blitFramebuffer(Me,De,ee,he,Se,Ke,ee,he,L.DEPTH_BUFFER_BIT,L.NEAREST)):lt?L.copyTexSubImage3D(be,I,Se,Ke,at+wn,Me,De,ee,he):L.copyTexSubImage2D(be,I,Se,Ke,at+wn,Me,De,ee,he);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else lt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(be,I,Se,Ke,at,ee,he,xe,Ut,Je,ot.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(be,I,Se,Ke,at,ee,he,xe,Ut,ot.data):L.texSubImage3D(be,I,Se,Ke,at,ee,he,xe,Ut,Je,ot):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,Se,Ke,ee,he,Ut,Je,ot.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,Se,Ke,ot.width,ot.height,Ut,ot.data):L.texSubImage2D(L.TEXTURE_2D,I,Se,Ke,ee,he,Ut,Je,ot);L.pixelStorei(L.UNPACK_ROW_LENGTH,pn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ai),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt),I===0&&D.generateMipmaps&&L.generateMipmap(be),Te.unbindTexture()},this.copyTextureToTexture3D=function(v,D,H=null,V=null,I=0){return v.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,v=arguments[2],D=arguments[3],I=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,H,V,I)},this.initRenderTarget=function(v){we.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Te.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,Te.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class xm extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mm extends Dt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Gt,u=Gt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho extends rn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Si=new ct,Vo=new ct,Ir=[],Go=new ii,Sm=new ct,Ji=new dt,Qi=new cr;class ym extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Si),Go.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(Go)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Si),Qi.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(i),e.ray.intersectsSphere(Qi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Si),Vo.multiplyMatrices(i,Si),Ji.matrixWorld=Vo,Ji.raycast(e,Ir);for(let a=0,o=Ir.length;a<o;a++){const c=Ir[a];c.instanceId=s,c.object=this,t.push(c)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mm(new Float32Array(r*this.count),r,this.count,Sa,cn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ki extends hn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const M=[],p=i/2;let h=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(m,2));function T(){const S=new U,F=new U;let w=0;const R=(t-e)/i;for(let P=0;P<=s;P++){const y=[],x=P/s,A=x*(t-e)+e;for(let z=0;z<=r;z++){const O=z/r,q=O*c+o,$=Math.sin(q),k=Math.cos(q);F.x=A*$,F.y=-x*i+p,F.z=A*k,f.push(F.x,F.y,F.z),S.set($,R,k).normalize(),d.push(S.x,S.y,S.z),m.push(O,1-x),y.push(g++)}M.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const x=M[y][P],A=M[y+1][P],z=M[y+1][P+1],O=M[y][P+1];(e>0||y!==0)&&(u.push(x,A,O),w+=3),(t>0||y!==s-1)&&(u.push(A,z,O),w+=3)}l.addGroup(h,w,0),h+=w}function b(S){const F=g,w=new je,R=new U;let P=0;const y=S===!0?e:t,x=S===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),g++;const A=g;for(let z=0;z<=r;z++){const q=z/r*c+o,$=Math.cos(q),k=Math.sin(q);R.x=y*k,R.y=p*x,R.z=y*$,f.push(R.x,R.y,R.z),d.push(0,x,0),w.x=$*.5+.5,w.y=k*.5*x+.5,m.push(w.x,w.y),g++}for(let z=0;z<r;z++){const O=F+z,q=A+z;S===!0?u.push(q,q+1,O):u.push(q+1,q,O),P+=3}l.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ra extends ki{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca extends hn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new U,d=new U,m=[],g=[],M=[],p=[];for(let h=0;h<=i;h++){const T=[],b=h/i;let S=0;h===0&&a===0?S=.5/t:h===i&&c===Math.PI&&(S=-.5/t);for(let F=0;F<=t;F++){const w=F/t;f.x=-e*Math.cos(r+w*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),p.push(w+S,1-b),T.push(l++)}u.push(T)}for(let h=0;h<i;h++)for(let T=0;T<t;T++){const b=u[h][T+1],S=u[h][T],F=u[h+1][T],w=u[h+1][T+1];(h!==0||a>0)&&m.push(b,S,w),(h!==i-1||c<Math.PI)&&m.push(S,F,w)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(M,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rr extends hn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new U,f=new U,d=new U;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const M=g/r*s,p=m/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const M=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,T=(r+1)*m+g;a.push(M,p,T),a.push(p,h,T)}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jn extends ur{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ol extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Em extends Ol{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bs=new ct,Wo=new U,Xo=new U;class bm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tm extends bm{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qo extends Ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);let Am=!1;function wm(){return Am}function Rm(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function Cm(n,e={}){const t=wm(),i=new vm({canvas:n,antialias:!t,alpha:!1,powerPreference:"high-performance"});i.setClearColor("#17233F"),i.outputColorSpace=Vt,i.toneMapping=ol,i.toneMappingExposure=1.1;const r=new xm;r.background=new $e("#17233F");const s=new $t(38,9/16,.1,200);function a(){const o=n.parentElement;if(!o)return;const c=o.clientWidth,l=o.clientHeight;c===0||l===0||(i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(c,l,!1),s.aspect=c/l,s.updateProjectionMatrix())}return{renderer:i,scene:r,camera:s,resize:a}}function Pm(n){const e=Sn.degToRad(35),t=Sn.degToRad(22),i=27,r=new U(0,0,0);function s(){const o=new U(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)).normalize();n.position.copy(r).addScaledVector(o,i),n.lookAt(r)}s();const a=6;return{panBy(o,c){r.x=Sn.clamp(r.x+o,-a,a),r.z=Sn.clamp(r.z+c,-a,a),s()},setPan(o,c){r.x=Sn.clamp(o,-a,a),r.z=Sn.clamp(c,-a,a),s()},update(){}}}const re={inkNavy:"#17233F",moonBlue:"#5B79C8",plum:"#6D3E78",parchment:"#F4E7C7",sealingRed:"#C74B55",brass:"#D6A84B",routeMint:"#72D6C1"},$o=new Gi,Yo=new U,Ko=new U;class Lm{mesh;dummy=new Mt;actives;colors;constructor(e,t,i){this.mesh=new ym(t,i,e),this.mesh.instanceMatrix.setUsage(qa),this.mesh.frustumCulled=!1,this.actives=new Array(e).fill(!1),this.colors=[];for(let r=0;r<e;r++)this.colors.push(new $e("#F4E7C7")),this.mesh.setColorAt(r,this.colors[r]);this.mesh.instanceColor&&this.mesh.instanceColor.setUsage(qa);for(let r=0;r<e;r++)this.place(r,-999,-999,-999,1,1,1,0,0,0)}place(e,t,i,r,s,a,o,c,l,u){$o.setFromEuler(new sn(c,l,u)),Yo.set(t,i,r),Ko.set(s,a,o),this.dummy.position.copy(Yo),this.dummy.quaternion.copy($o),this.dummy.scale.copy(Ko),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}acquire(e,t,i,r={}){let s=-1;for(let o=0;o<this.actives.length;o++)if(!this.actives[o]){s=o;break}if(s===-1)return null;this.actives[s]=!0;const a=r.scale??1;return this.place(s,e,t,i,a,a*.12,a*.75,0,r.rot??0,0),r.color&&this.mesh.instanceColor&&(this.colors[s].set(r.color),this.mesh.setColorAt(s,this.colors[s])),{index:s,active:!0,id:s}}move(e,t,i,r,s=0,a=1){this.place(e.index,t,i,r,a,a*.12,a*.75,0,s,0)}hide(e){this.actives[e.index]&&(this.actives[e.index]=!1,this.place(e.index,-999,-999,-999,1,1,1,0,0,0))}commit(){this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}get usedCount(){let e=0;for(const t of this.actives)t&&e++;return e}}const Zo={desk:{family:"desk",color:"#F4E7C7",glyph:"stacked-tray",badge:"square"},satchel:{family:"satchel",color:"#6D3E78",glyph:"buckle",badge:"capsule"},route:{family:"route",color:"#72D6C1",glyph:"thread-needle",badge:"needle-pulse"},inflow:{family:"inflow",color:"#5B79C8",glyph:"tray-arrow",badge:"rain-line"}},Dm={desk:{warnAt:.7,chokeAt:.85,chokeSustainS:3,burstFullAt:.999},satchel:{queueWarnAt:.4,deskPileChokeAt:.4,chokeSustainS:3},route:{okSlack:.15,utilWarnAt:.85,utilChokeAt:.999,queueChokeAt:.4,chokeSustainS:3},inflow:{okAt:.35,chokeAt:.2,chokeSustainS:3}},Ts={capacityPulseS:.4,purchasePunchS:.25},jo={kept:["Stars banked (+ pending claim)","Unlocked districts' identity on the route map (postcards stay readable)","Night Clerk License stub state","Save/version lineage"],lost:["Postage balance and E_run","All hall upgrade tiers (F1–F10)","Desk pads / satchel racks / route lanes and their tiers (back to first-slot T1 installed)","Backlog pool to Lantern Lane state","Active district back to Lantern Lane; gate progress resets (Rainmarket bond re-payable)","Night Ledger snapshot (unsettled away time settles into run Postage before confirm)"]},Ur={title:"The night kept working.",neverEmpty:"The hall barely noticed you leave. +0 — step back in, Clerk.",collect:"Collect",doubler:"Double it — free"},kl=[{beat:"point-hold",trigger:{t:0},speaker:null,copy:null,highlight:"sort"},{beat:"letters-stream",trigger:{t:10},speaker:"Pip",copy:"They answer the thumb. They always do.",grantId:1},{beat:"desks-fill",trigger:{t:30},speaker:"Mara",copy:"Desks are your lungs. Buy the second tray.",grantId:2,highlight:"desk"},{beat:"rail-pad2",trigger:{t:45},speaker:"Pip",copy:"Room to breathe.",rail:{family:"desk",note:"pad2 unlock (300)"},highlight:"desk"},{beat:"routes-pulse",trigger:{t:75},speaker:"Mara",copy:"The lanes decide what's real. Feed them.",grantId:3,rail:{family:"route",note:"lane1 T2 (380)"},highlight:"route"},{beat:"first-hall-tier",trigger:{t:120},speaker:"Pip",copy:"The hall likes investment. Watch the pile.",grantId:4,rail:{family:"hall",note:"first district upgrade (F4/F1 cheapest)"},highlight:"inflow"},{beat:"night-ledger-card",trigger:{t:300},speaker:"Mara",copy:"Dawn always wins. The Ledger makes sure it doesn't win everything.",grantId:5},{beat:"seal-grammar",trigger:{event:"rv_complete"},speaker:"Mara",copy:"Rainmarket is listening. Finish the list.",highlight:"seal-rainmarket"},{beat:"bond-prelight",trigger:{event:"list_nearly"},speaker:null,copy:null,highlight:"seal-rainmarket"},{beat:"rainmarket-answers",trigger:{event:"advance"},speaker:"Mara",copy:"Rainmarket answers. First time in years, Clerk.",grantId:6},{beat:"horizon-remembers",trigger:{event:"horizon_rv"},speaker:"Mara",copy:"That seal doesn't open tonight. It remembers.",highlight:"seal-horizon"},{beat:"redraw-offered",trigger:{event:"horizon_list"},speaker:"Mara",copy:"Tear up the routes. Draw them better.",highlight:"seal-horizon"},{beat:"second-wind",trigger:{event:"claim"},speaker:"Pip",copy:"Again. But faster. Much faster."}],Im=.9,It={onboardBeat:"md.onboard.beat",meterChoke:"md.meter.choke",meterRemedy:"md.meter.remedy",purchase:"md.purchase",gateCross:"md.gate.cross",advance:"md.advance",redrawShow:"md.redraw.show",redrawClaim:"md.redraw.claim",ledgerReturn:"md.ledger.return",saveWrite:"md.save.write",saveLoad:"md.save.load"},Jo={budget:250},Ft={sortPull:(n,e)=>.035*n*(1+.2*e),backlogPoolBase:400,backlogPoolScale:1.8,backlogRefillBase:7,backlogRefillScale:1.8,satchelBufferSeconds:15,perfectSort:{psMaxBase:1.5,psMaxPerF5:.25,rampS:20,rampS_F5t1:15,rampS_F5t4:12,decayS:5,decayS_F5t2:8},starScalar:3,starDenom:1e4,starMultStep:.22},Bl=[{id:"lantern_lane",name:"Lantern Lane",letterValue:1,gate:null},{id:"rainmarket",name:"Rainmarket",letterValue:6,gate:{rv:16e3,deliveryList:36e3,bond:6e3}}],yt={rainmarket:{id:"rainmarket",rv:16e3,deliveryList:36e3,bond:6e3},horizon:{id:"horizon",rv:12e6,deliveryList:45e5}},Qo={f1Step:.3,psMultiplier:n=>n,starsMultiplier:n=>1+Ft.starMultStep*n},Wt={count:4,unlock:[0,300,2400,18e4],tier:[0,700,22e3],caps:[240,560,1100],F6:{capMult:1.25,costMult:.9}},dn={count:4,unlock:[0,1100,12e3,42e4],tier:[0,450,13e3],rates:[13,18,50]},un={count:4,unlock:[0,850,9500,32e4],tier:[0,380,11e3],rates:[11.5,16,48],F7:{rateMult:1.25,costMult:.9}},hr={F4:{id:"F4",label:"Taller Racks",tiers:4,cost:[600,1600,22e3,2e5],effect:"pool ×1.8, refill ×1.8 per tier"},F1:{id:"F1",label:"Warmer Seals",tiers:5,cost:[1e3,2600,42e3,12e4,38e4],effect:"letter value +30% per tier",letterValueStep:.3},F2:{id:"F2",label:"Lighter Ink",tiers:5,cost:[900,4200,5e4,16e4,45e4],effect:"base sort pull +20% per tier",sortPullStep:.2},F5:{id:"F5",label:"Sweet Spot",tiers:5,cost:[1200,6500,7e4,24e4,56e4],effect:"ps_max +0.25 per tier; t1 ramp 20→15s; t2 decay 5→8s; t4 ramp 15→12s",unlockAtRun:1200,psMaxPerTier:.25,rampAtTiers:[{tier:1,rampS:15},{tier:4,rampS:12}],decayAtTiers:[{tier:2,decayS:8}]},F6:{id:"F6",label:"Sturdy Trays",tiers:1,cost:[3e3],effect:"desk caps ×1.25, desk costs ×0.90",deskCapMult:1.25,deskCostMult:.9},F7:{id:"F7",label:"Swift Lanes",tiers:1,cost:[3e3],effect:"route rates ×1.25, route costs ×0.90",routeRateMult:1.25,routeCostMult:.9},F10:{id:"F10",label:"Ledger Eyes",tiers:1,cost:[3e3],effect:"hall factor 0.05 → 0.08",hfacAfter:.08},F3:{id:"F3",label:"Night Habits",tiers:1,cost:[4e3],unlockAtRun:2500,effect:"Night Ledger away fraction 0.50 → 0.65",awayFractionAfter:.65},F8:{id:"F8",label:"Longer Nights",tiers:1,cost:[24e3],effect:"Night Ledger cap 2 h → 3 h",capHoursAfter:3}},Um={hfac:.05},Ti={capHours:2,awayFraction:.5,doublerMaxPer24h:3,neverEmptyElapsedS:120},Nm=[{id:1,grant:50},{id:2,grant:150},{id:3,grant:400},{id:4,grant:1200},{id:5,grant:2400},{id:6,grant:6e3}];function Yr(n){const e=n.hall.F4??0;return Ft.backlogPoolBase*Math.pow(Ft.backlogPoolScale,e)}function Pa(n){const e=(n.hall.F6??0)>0;let t=0;for(const i of n.desks)i.unlocked&&(t+=Wt.caps[i.tier]);return e?t*Wt.F6.capMult:t}function Fm(n){const e=n.hall.F2??0,t=Ft.sortPull(Yr(n),e),i=(n.hall.F6??0)>0,r=n.desks.filter(a=>a.unlocked).length||1,s=i?Wt.F6.capMult:1;return t*r*s}function zl(n){let e=0;for(const t of n.racks)t.unlocked&&(e+=dn.rates[t.tier]);return e*Ft.satchelBufferSeconds}function Hl(n){const e=(n.hall.F7??0)>0;let t=0;for(const i of n.lanes)i.unlocked&&(t+=un.rates[i.tier]);return e?t*un.F7.rateMult:t}function Vl(n){const e=Bl[n.districtIndex],t=e?e.letterValue:1,i=n.hall.F1??0;return t*(1+Qo.f1Step*i)*Qo.starsMultiplier(n.stars)}function La(n){const e=n.hall.F5??0;return Ft.perfectSort.psMaxBase+Ft.perfectSort.psMaxPerF5*e}function Om(n){const e=n.hall.F5??0,t=hr.F5;let i=Ft.perfectSort.rampS;for(const r of t.rampAtTiers??[])e>=r.tier&&(i=r.rampS);return i}function km(n){const e=n.hall.F5??0,t=hr.F5;let i=Ft.perfectSort.decayS;for(const r of t.decayAtTiers??[])e>=r.tier&&(i=r.decayS);return i}function Bm(n){return Math.floor(Ft.starScalar*Math.log(1+n/Ft.starDenom))}function zm(n,e,t,i){const r=La(n);t?n.perfect=Math.min(r,n.perfect+1/Om(n)*e):n.perfect=Math.max(0,n.perfect-1/km(n)*e);const s=Yr(n),a=Ft.backlogRefillBase*Math.pow(Ft.backlogRefillScale,n.hall.F4??0);n.backlog=Math.min(s,n.backlog+a*e);const o=Fm(n),c=Pa(n),l=zl(n),u=Hl(n);let f=0;const d=n.desks.reduce((A,z)=>A+z.inProcess,0),m=c-d,g=t?Math.min(m,o*e,n.backlog)*n.perfect:0;if(g>0){let A=g;const z=n.desks.filter(O=>O.unlocked);for(;A>1e-6&&z.length;){let O=!1;for(const q of z){const $=Wt.caps[q.tier],X=(n.hall.F6??0)>0?$*Wt.F6.capMult:$,G=X/c,te=Math.min(c>0?A*G:0,X-q.inProcess,A);te>1e-6&&(q.inProcess+=te,A-=te,O=!0)}if(!O)break}n.backlog=Math.max(0,n.backlog-g)}const M=n.racks.reduce((A,z)=>A+(z.unlocked?dn.rates[z.tier]:0),0),p=n.desks.reduce((A,z)=>A+z.inProcess,0),h=Math.min(p,M*e);n.bundled=(n.bundled??0)+h;let T=h;const b=n.desks.filter(A=>A.unlocked);for(const A of b){if(T<=1e-6)break;const z=Math.min(A.inProcess,T);A.inProcess-=z,T-=z}const S=Math.min(n.bundled??0,u*e);n.bundled=(n.bundled??0)-S;const F=Vl(n),w=S*F;n.postage+=w,n.totalEarnedRun+=w,n.blocking.eRunRaw+=S,n.districtRouteValue+=S,f=S;const R=g>0&&m<=1e-6,P=(n.bundled??0)>=l-1e-6,y=(n.bundled??0)>0&&S<(n.bundled??0)*.5+1e-6;let x="none";return y&&(n.bundled??0)>l*.9?x="lane":P?x="rack":R&&(x="desk"),{delivered:f,postageEarned:w,bottleneck:x}}function et(n,e,t,i){const r=new Bn(n,e,t),s=new Jn({color:i});return new dt(r,s)}function $n(n,e,t,i,r=20){return new dt(new ki(n,e,t,r),new Jn({color:i}))}const Hm=-5.2,yi=-4.95,As=[-3.4,-1.2,1.1,3.3],el=[-4.4,-3.1,-1.8,-.5],tl=[-4.4,-3.1,-1.8,-.5];function Vm(n,e={}){const t=new en,i=new Em("#5B79C8","#17233F",.9);n.add(i);const r=new qo("#F4E7C7",1.15);r.position.set(8,14,6),n.add(r);const s=new qo(re.plum,.35);s.position.set(-6,6,-4),n.add(s);const a=new dt(new Bn(16,.3,16),new Jn({color:"#20304f"}));a.position.y=-.15,t.add(a);const o={color:re.brass},c=et(14.5,.12,.12,o.color);c.position.set(0,.5,-4.6);const l=et(14.5,.12,.12,o.color);l.position.set(0,.5,4.6);const u=et(.12,.12,9.2,o.color);u.position.set(-7.2,.5,0);const f=et(.12,.12,9.2,o.color);f.position.set(7.2,.5,0);for(const ge of[c,l,u,f])$n(.05,.05,.5,re.brass,8).position.set(ge.position.x-(ge.scale.x||0),.25,ge.position.z),t.add(ge);const d=et(14.6,5.4,.4,"#241f3a");d.position.set(0,2.7,Hm),t.add(d);const m=new dt(new ki(1.5,1.5,.12,28),new Jn({color:re.inkNavy}));m.rotation.x=Math.PI/2,m.position.set(-2.4,3.1,yi+.08),t.add(m);const g=new dt(new rr(1.5,.06,8,28),new Jn({color:re.brass}));g.position.copy(m.position),t.add(g);const M=new Qt({color:re.routeMint}),p=new Qt({color:re.inkNavy}),h=new Qt({color:"#101a30"});function T(ge,Ae,Pe){const Ge=ge.distanceTo(Ae),Le=new dt(new ki(.035,.035,Ge,6),Pe),Ne=ge.clone().add(Ae).multiplyScalar(.5);return Le.position.copy(Ne),Le.lookAt(Ae),Le.rotateX(Math.PI/2),Le}const b=m.position.clone(),S=new U(-.4,2.15,yi+.12),F=new U(.5,3.3,yi+.12),w=new U(1.7,3.9,yi+.12);t.add(T(b,S,M));const R=T(b,F,p);t.add(R),t.add(T(b,w,h));const P=new dt(new rr(.42,.07,8,20),new Qt({color:"#0d1730"}));P.position.copy(w),t.add(P);const y=et(.22,1,.1,"#0d1730");y.position.set(w.x-.14,w.y+.8,w.z);const x=et(.16,.7,.1,"#0d1730");x.position.set(w.x+.18,w.y+.65,w.z),t.add(y),t.add(x);const A=new en,z=et(2.4,3.2,.5,re.moonBlue);z.position.y=1.6,A.add(z);const O=et(1.2,2.2,.5,re.plum);O.position.set(1.6,1.1,0),A.add(O);const q=et(1.4,2.7,.5,re.brass);q.position.set(-1.4,1.35,-.2),A.add(q),A.position.set(-5.2,0,-4.35),t.add(A);const $=new en,k=et(2,2.6,.5,re.moonBlue);k.position.y=1.3,$.add(k);const X=et(2.6,1.8,.5,re.plum);X.position.set(.4,.9,.2),$.add(X),$.position.set(4.9,0,-4.35),t.add($);const G=[],te=[],ne=[];As.forEach((ge,Ae)=>{const Pe=et(1.4,.6,.8,re.brass);Pe.position.set(ge,-.09,1.6);const Ge=et(1.5,.18,.9,re.parchment);Ge.position.set(ge,.12,1.6);const Le=et(.4,.09,.3,re.brass);Le.position.set(ge-.45,.245,1.95);const Ne=et(.5,1,.36,re.parchment);Ne.position.set(ge+.38,.21,1.35),Ne.scale.y=.02,t.add(Pe,Ge,Le,Ne),G.push(Ge),te.push(Ne),ne.push(Le)});const pe=[],_e=[],We=[];el.forEach(ge=>{const Ae=et(.9,1.5,.5,"#3a2b46");Ae.position.set(ge,.75,-1.4);const Pe=et(.56,.5,.34,re.plum);Pe.position.set(ge,1.02,-1.32);const Ge=et(.12,1,.05,re.routeMint);Ge.position.set(ge+.38,.5,-1.12),Ge.scale.y=.02;const Le=.5;Ge.position.y=Le,t.add(Ae,Pe,Ge),pe.push(Ae),_e.push(Pe),We.push(Ge)});const B=[];for(let ge=0;ge<2;ge++){const Ae=new dt(new Oi(2.6,.5),new Qt({color:re.routeMint,transparent:!0,opacity:.25}));Ae.rotation.x=-Math.PI/2,Ae.rotation.z=Math.PI/2,Ae.position.set(-2.6+ge*1.4,.03,.35),t.add(Ae),B.push(Ae)}const K=new en,fe=et(.22,1.7,.22,re.brass);fe.position.set(-.85,.85,.3);const ie=et(.22,1.7,.22,re.brass);ie.position.set(.85,.85,.3);const Re=et(1.95,.24,.24,re.brass);Re.position.set(0,1.72,.3);const Ce=$n(.09,.09,.3,re.inkNavy,8);Ce.position.set(1.02,1.15,.3),Ce.rotation.z=Math.PI/2;const ke=et(.07,.62,.07,re.sealingRed);ke.position.set(0,.31,0);const tt=new en;tt.position.set(1.02,1.15,.3),tt.add(ke),tt.rotation.z=-.5,K.add(fe,ie,Re,Ce,tt),t.add(K);const Xe=[],ut=[];tl.forEach(ge=>{const Ae=new dt(new Oi(.7,3),new Qt({color:re.routeMint,transparent:!0,opacity:.85}));Ae.rotation.x=-Math.PI/2,Ae.position.set(ge,.02,-3);const Pe=et(.4,.3,.12,"#0d1730");Pe.position.set(ge,.15,-3),t.add(Ae,Pe),Xe.push(Ae),ut.push(Pe)});const L=et(1.7,.18,1.4,"#2a3d68");L.position.set(-2.6,.09,4);const At=et(1.7,.3,.1,re.brass);At.position.set(-2.6,.24,4.62);const Be=$n(1.1,1.3,1.1,re.parchment);Be.position.set(-2.6,.55,4);const Ve=new dt(new Ra(.3,.5,4),new Jn({color:re.moonBlue}));Ve.rotation.x=Math.PI,Ve.position.set(-2.6,1.9,4),t.add(L,At,Be,Ve);const Te=new en,nt=$n(.24,.26,.2,re.sealingRed,12);nt.position.y=.1;const we=$n(.19,.19,.06,re.parchment,12);we.position.y=.23;const E=et(.045,.05,.03,re.inkNavy);E.position.set(-.06,.27,.16);const _=et(.045,.05,.03,re.inkNavy);_.position.set(.06,.27,.16),Te.add(nt,we,E,_),Te.position.set(1.65,0,.95),t.add(Te);const N=new en,Z=$n(.22,.42,1.5,re.plum,10);Z.position.y=.75;const J=$n(.17,.17,.3,re.parchment,10);J.position.y=1.68;const Y=new dt(new rr(.07,.015,6,12),new Qt({color:re.brass}));Y.position.set(-.075,1.7,.16);const ve=Y.clone();ve.position.x=.075;const ae=et(.05,.015,.02,re.brass);ae.position.set(0,1.7,.17),N.add(Z,J,Y,ve,ae),N.position.set(2.3,0,-3.6),t.add(N);const ce=new dt(new Ca(.32,12,12),new Qt({color:"#72D6C1"}));ce.position.set(0,2.4,0);const qe=et(.1,2.2,.1,re.brass);qe.position.set(0,1.1,0),t.add(qe,ce),n.add(t);const Q=new Bn(.34,.05,.24),me=new Jn({color:re.parchment}),ye=new Lm(Jo.budget,Q,me);n.add(ye.mesh);const Ee=[];let de=0,ze=0;function Ue(ge,Ae,Pe){const Ge=ye.acquire(ge.x,ge.y+.3,ge.z,{color:Pe});if(Ge&&(Ee.push({inst:Ge,from:ge.clone(),to:Ae.clone(),t:0,dur:.55+Math.random()*.35}),Ee.length>Jo.budget-20)){const Le=Ee.shift();ye.hide(Le.inst)}}function it(ge,Ae){const Pe=[];if(Ae){const Le=Ee.length>0?.95:.5;for(const Ne of Xe)Ne.material.opacity=Le*.85;for(const Ne of Ee.splice(0))ye.hide(Ne.inst);ce.material.opacity=Le}else{for(let Le=Ee.length-1;Le>=0;Le--){const Ne=Ee[Le];Ne.t+=ge;const st=Math.min(1,Ne.t/Ne.dur),vt=st*st*(3-2*st),fn=Sn.lerp(Ne.from.x,Ne.to.x,vt),ri=Sn.lerp(Ne.from.y+.3,Ne.to.y,vt)+Math.sin(st*Math.PI)*.4,si=Sn.lerp(Ne.from.z,Ne.to.z,vt);ye.move(Ne.inst,fn,ri,si,vt*1.2),st>=1&&Pe.push(Le)}for(const Le of Pe)ye.hide(Ee[Le].inst),Ee.splice(Le,1)}ye.commit(),de>0&&(de=Math.max(0,de-ge*4),tt.rotation.z=-.5+Math.sin(de*Math.PI)*.7);const Ge=Ee.length>0?.55:.25;for(const Le of B){const Ne=Le.material;Ne.opacity+=(Ge-Ne.opacity)*Math.min(1,ge*6)}Ve.position.y=1.9+Math.sin(performance.now()/600)*.08}const C={ok:"#72D6C1",warn:"#D6A84B",red:"#C74B55"};function oe(ge){ce.material.color.set(C[ge]),ce.material.opacity=1}function W(ge){const Ae=Math.max(1e-9,Pa(ge));G.forEach((Pe,Ge)=>{const Le=ge.desks[Ge],Ne=!!Le?.unlocked,st=Le?.tier??0,vt=Ne?1+st*.18:1;Pe.scale.y=vt,Pe.position.y=.12+(vt-1)*.18,Pe.scale.x=Ne&&st>0?1+st*.08:1;const fn=Pe.material;Ne?fn.color.set((Le?.inProcess??0)>0?re.parchment:re.moonBlue):fn.color.set("#1c1830");const ri=Ae/As.length,si=Ne?Math.min(1,(Le?.inProcess??0)/Math.max(1e-9,ri)):0,Xi=te[Ge];Xi.scale.y=Math.max(.02,si*.55),Xi.position.y=.21+Xi.scale.y/2,ne[Ge].material.color.set(Ne&&st>=2?re.routeMint:re.brass)})}function j(ge){const Ae=ge.blocking.everDistricts.includes(1)||ge.districtIndex>=1;R.material.color.set(Ae?re.routeMint:re.inkNavy);const Pe=(Ge,Le)=>{Ge.children.forEach(Ne=>{const st=Ne.material;if(st&&!(st instanceof Qt)){const vt=new $e(Le?re.brass:re.moonBlue);st.color.copy(vt.multiplyScalar(Le?1:.3))}})};Pe(A,ge.districtIndex===0),Pe($,Ae)}function ue(ge){const Ae=Math.max(1e-9,168),Pe=Math.min(1,(ge.bundled??0)/Ae);pe.forEach((Ge,Le)=>{const Ne=!!ge.racks[Le]?.unlocked;Ge.material.color.set(Ne?"#3a2b46":"#1c1830"),_e[Le].visible=Ne;const st=Math.min(1,Math.max(0,Pe*le(ge)-Ie(ge,Le))),vt=We[Le];vt.visible=Ne,vt.scale.y=Math.max(.02,st),vt.position.y=.02+st/2})}function le(ge){return ge.racks.filter(Ae=>Ae.unlocked).length}function Ie(ge,Ae){let Pe=0;for(let Ge=0;Ge<=Ae;Ge++)ge.racks[Ge]?.unlocked&&Pe++;return Pe}function ht(ge,Ae){Xe.forEach((Pe,Ge)=>{const Le=ge.lanes[Ge],Ne=!!Le?.unlocked,st=Pe.material;if(Ne){const vt=[0,.1,.2][Le?.tier??0]??.3;st.opacity=Math.min(1,.35+.5*Ae+vt),st.color.set(re.routeMint)}else st.opacity=.12,st.color.set("#101a30");ut[Ge].visible=!Ne})}function _t(ge,Ae,Pe){Be.scale.y=Math.max(.15,Ae),Be.position.y=.18+1.1*Be.scale.y/2,L.material.color.set(Pe?"#17233F":"#2a3d68")}function Ze(ge,Ae){P.material.color.set(Ae?re.brass:"#0d1730")}function kt(ge,Ae,Pe){const Ge=Pe?.03:.12;ze>0&&(ze=Math.max(0,ze-ge*3)),Te.position.y=Math.abs(Math.sin(Ae*2.2))*Ge+Math.sin(ze*Math.PI)*.25,Te.rotation.y=Math.sin(Ae*.8)*.3,N.rotation.y=Math.sin(Ae*.4)*.18}const Yt=[...As.map((ge,Ae)=>({label:`PAD-${Ae+1}`,pos:new U(ge,.9,1.6)})),...el.map((ge,Ae)=>({label:`RACK-${Ae+1}`,pos:new U(ge,1.9,-1.4)})),...tl.map((ge,Ae)=>({label:`LANE-${Ae+1}`,pos:new U(ge,.4,-3)})),{label:"STAMP GATE",pos:new U(0,2.1,.3)},{label:"BACKLOG TRAY",pos:new U(-2.6,2.1,4)},{label:"ROUTE MAP",pos:new U(-2.4,4.9,yi)},{label:"PIP",pos:new U(1.65,.8,.95)},{label:"MARA",pos:new U(2.3,2.2,-3.6)},{label:"CLOCKTOWER SEAL",pos:new U(1.7,4.6,yi)}];return{scene:t,pool:ye,flyers:Ee,lamp:ce,setLampLevel:oe,deskMeshes:G,updateDesks:W,updateLanterns:j,animateFlyers:it,spawnFlyer:Ue,leverKick:()=>{de=1},pipPulse:()=>{ze=1},updateRacks:ue,updateLanes:ht,updateTray:_t,updateWall:Ze,tickCharacters:kt,debugAnchors:Yt}}const St={sortHold:"HOLD TO SORT",postage:"Postage",stars:"Stars",districtLL:"Lantern Lane",districtRM:"Rainmarket",districtCW:"Clocktower Ward",buy:"Buy",redraw:"Redraw Routes",notEnabled:"Not enabled in this web build",license:"Night Clerk License",priorityPost:"Priority Post",waxPacks:"Wax Seal packs"},nl=["","K","M","B","T","Qa","Qi","Sx","Sp"];function wt(n){if(!isFinite(n))return"—";const e=Math.abs(n);if(e<1e3)return n<0?`-${Math.floor(e)}`:`${Math.floor(n)}`;const t=Math.floor(Math.log10(e)/3),i=e/Math.pow(10,t*3),r=nl[Math.min(t,nl.length-1)];let s=i.toFixed(2);return s=s.replace(/\.?0+$/,""),`${n<0?"-":""}${s}${r}`}function ws(n){return isFinite(n)?`${Math.floor(n)}`:"—"}const sr=3,Gl="midnight-dispatch.save.v1";function Hr(){return{gates:{rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1}},checklist:[],railsFired:[],everDistricts:[0],eRunRaw:0,snapshotRate:0,nightMs:0}}function Wl(){return Array.from({length:Wt.count},(n,e)=>({unlocked:e===0,tier:0,inProcess:0}))}function Xl(){return Array.from({length:dn.count},(n,e)=>({unlocked:e===0,tier:0}))}function ql(){return Array.from({length:un.count},(n,e)=>({unlocked:e===0,tier:0}))}function Bi(){const n=Date.now();return{v:sr,savedAt:n,run:0,postage:0,totalEarnedRun:0,stars:0,starMultiplier:1,redrawCount:0,backlog:90,bundled:0,desks:Wl(),racks:Xl(),lanes:ql(),hall:{},districtIndex:0,districtRouteValue:0,perfect:1,onboarded:!1,clipsSeen:[],ledgerWindow:2*3600,ledgerAwayRate:0,lastLedgerTs:n,doublersUsed:0,doublerDay:0,doublerTracked:!1,returnCardPending:!1,reducedMotion:!1,blocking:Hr()}}function Gm(n){const e=n.deskTiers??[0,0,0,0],t=n.deskInProcess??[0,0,0,0],i=typeof n.satchelTier=="number"?n.satchelTier:0,r=n.routeTiers??[0,0],s=n.hall??{},a=Array.from({length:Wt.count},(f,d)=>({unlocked:!0,tier:e[d]??0,inProcess:t[d]??0})),o=Array.from({length:dn.count},(f,d)=>({unlocked:d===0,tier:d===0?i:0})),c=Array.from({length:un.count},(f,d)=>({unlocked:d<r.length,tier:r[d]??0})),l={};s.letterValue&&(l.F1=Math.min(5,s.letterValue)),s.sortRate&&(l.F2=Math.min(5,s.sortRate)),s.backlogPool&&(l.F4=Math.min(4,s.backlogPool)),s.perfectRamp&&(l.F5=Math.min(5,s.perfectRamp));const u={...n};return delete u.deskTiers,delete u.deskInProcess,delete u.satchelTier,delete u.routeTiers,delete u.backlogLevel,u.desks=a,u.racks=o,u.lanes=c,u.hall=l,u}const Wm={2:Gm};function Xm(n){const e=n,t=Bi(),i={...t,...e},r=(e.desks??t.desks).map((c,l)=>({unlocked:c?.unlocked??l===0,tier:c?.tier??0,inProcess:c?.inProcess??0}));for(;r.length<Wt.count;)r.push({unlocked:r.length===0,tier:0,inProcess:0});const s=(e.racks??t.racks).map((c,l)=>({unlocked:c?.unlocked??l===0,tier:c?.tier??0}));for(;s.length<dn.count;)s.push({unlocked:s.length===0,tier:0});const a=(e.lanes??t.lanes).map((c,l)=>({unlocked:c?.unlocked??l===0,tier:c?.tier??0}));for(;a.length<un.count;)a.push({unlocked:a.length===0,tier:0});i.desks=r,i.racks=s,i.lanes=a,i.hall={...e.hall??{}};const o=e.blocking;return i.blocking={...Hr(),...o??{}},i.blocking.gates={rainmarket:{...Hr().gates.rainmarket,...o?.gates?.rainmarket??{}},horizon:{...Hr().gates.horizon,...o?.gates?.horizon??{}}},{...i,v:sr}}function qm(n){if(n==null||typeof n!="object")return Bi();const e=n,t=typeof e.v=="number"?e.v:0;if(t>sr)throw new Error(`Save version ${t} is newer than supported ${sr}`);if(t<1)return Bi();let i=n;for(let r=t;r<sr;r++){const s=Wm[r];s&&(i=s(i))}return Xm(i)}function $l(n){const{savedAt:e,lastLedgerTs:t,...i}=n,r=o=>{if(o===null||typeof o!="object")return JSON.stringify(o)??"null";if(Array.isArray(o))return`[${o.map(r).join(",")}]`;const c=o;return`{${Object.keys(c).sort().map(l=>`${JSON.stringify(l)}:${r(c[l])}`).join(",")}}`},s=r(i);let a=2166136261;for(let o=0;o<s.length;o++)a^=s.charCodeAt(o),a=Math.imul(a,16777619);return(a>>>0).toString(16).padStart(8,"0")}function $m(n,e){const t=hr[e];if(!t)return!1;const i=n.hall[e]??0;if(i>=t.tiers)return!1;const r=t.cost[i]??1/0;return n.postage<r?!1:(n.postage-=r,n.hall[e]=i+1,!0)}function Da(n,e){return Wt.unlock[e]??1/0}function Ym(n,e){const t=n.desks[e];if(!t||t.unlocked)return!1;const i=Da(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function Ia(n,e){const t=n.desks[e];if(!t||!t.unlocked)return 1/0;const i=(n.hall.F6??0)>0,r=Wt.tier[t.tier+1]??1/0;return i?Math.ceil(r*Wt.F6.costMult):r}function Km(n,e){const t=Ia(n,e),i=n.desks[e];return!i||!i.unlocked||i.tier>=Wt.caps.length-1||n.postage<t?!1:(n.postage-=t,i.tier+=1,!0)}function Ua(n,e){return dn.unlock[e]??1/0}function Zm(n,e){const t=n.racks[e];if(!t||t.unlocked)return!1;const i=Ua(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function Na(n,e){const t=n.racks[e];return!t||!t.unlocked?1/0:dn.tier[t.tier+1]??1/0}function jm(n,e){const t=n.racks[e];if(!t||!t.unlocked)return!1;const i=Na(n,e);return t.tier>=dn.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}function Fa(n,e){return un.unlock[e]??1/0}function Jm(n,e){const t=n.lanes[e];if(!t||t.unlocked)return!1;const i=Fa(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function Oa(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return 1/0;const i=(n.hall.F7??0)>0,r=un.tier[t.tier+1]??1/0;return i?Math.ceil(r*un.F7.costMult):r}function Qm(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return!1;const i=Oa(n,e);return t.tier>=un.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}const eg=2e3,Pi=[],tg=[],Wr={};function ng(){Pi.length=0;for(const n of Object.keys(Wr))delete Wr[n]}function Ot(n,e,t={}){if(!Object.values(It).includes(e))throw new Error(`unknown md event: ${e}`);const i={name:e,run_id:n.run,night_ms:Math.round(n.blocking.nightMs),stars_banked:n.stars,district:n.districtIndex,props:t};Pi.push(i),Pi.length>eg&&Pi.shift(),Wr[e]=(Wr[e]??0)+1;for(const r of[...tg])r(i);return i}function ig(n){return n?Pi.filter(n):[...Pi]}function rg(n){return Object.values(n.hall).reduce((e,t)=>e+(t??0),0)}function Yl(n){const e=Um.hfac;return n.blocking.eRunRaw*(1+e*rg(n))}function Kl(n){return n.districtIndex===0?"rainmarket":n.districtIndex===1?"horizon":null}function Kr(n,e){n.blocking.eRunRaw+=e;const t=Kl(n);t&&(n.blocking.gates[t].listValue+=e),sg(n)}function sg(n){const e=Kl(n);if(!e)return;const t=yt[e],i=n.blocking.gates[e],r=Yl(n);!i.rvDone&&r>=t.rv&&(i.rvDone=!0,Ot(n,It.gateCross,{gate:t.id,req:"rv",t_s:n.blocking.nightMs/1e3})),!i.listDone&&i.listValue>=t.deliveryList&&(i.listDone=!0,Ot(n,It.gateCross,{gate:t.id,req:"list",t_s:n.blocking.nightMs/1e3}))}function ag(n,e){const t=n.blocking.gates[e];return!t.listDone&&t.listValue>=yt[e].deliveryList*Im}function og(n){return n.districtIndex!==0?!1:n.blocking.gates.rainmarket.listDone&&n.postage>=yt.rainmarket.bond}function lg(n){if(!og(n))return!1;const e=yt.rainmarket.bond;return n.postage-=e,Ot(n,It.purchase,{kind:"bond",id:"rainmarket",cost:e,wallet_after:n.postage}),n.districtIndex=1,n.blocking.everDistricts.includes(1)||n.blocking.everDistricts.push(1),Ot(n,It.advance,{district:"rainmarket",t_s:n.blocking.nightMs/1e3}),!0}function Rs(n){return n.blocking.gates.horizon.listDone}function cg(n){n.blocking.gates={rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1}},n.blocking.eRunRaw=0,n.blocking.nightMs=0,n.blocking.checklist=[],n.blocking.railsFired=[]}function ug(){return{desks:Wl(),racks:Xl(),lanes:ql()}}function Zl(n){return n<=0?0:Bm(n)}function ka(n){return Zl(n.blocking.eRunRaw)}function hg(n){return 1+Ft.starMultStep*n}function dg(n){const e=ka(n),t=n.blocking.eRunRaw;return Ot(n,It.redrawShow,{stars_pending:e,earned_booked:t}),{starsPending:e,earnedBooked:t}}function fg(n,e){const t=n.blocking.eRunRaw,i=Zl(t);Ot(n,It.redrawClaim,{stars_awarded:i,earned_booked:t,forecast_shown:e}),n.stars+=i,n.starMultiplier=hg(n.stars),n.redrawCount+=1,n.run+=1,n.postage=0,n.totalEarnedRun=0;for(const s of Object.keys(n.hall))n.hall[s]=0;const r=ug();return n.desks=r.desks,n.racks=r.racks,n.lanes=r.lanes,n.backlog=Bi().backlog,n.bundled=0,n.perfect=0,n.districtIndex=0,n.districtRouteValue=0,n.blocking.snapshotRate=0,cg(n),{starsAwarded:i,earnedBooked:t,forecastShown:e,multiplierNext:n.starMultiplier}}class pg{root;cb;top;meters;seals;sortBtn;plumeFill;plume;panelLayer;ring;sortHeld=!1;reduceMotion;redrawShown=null;sealsCollapsed=!1;lastCoachSig="";constructor(e,t,i){this.root=e,this.cb=t,this.reduceMotion=i,this.root.innerHTML="",this.top=this.el("div","hud-top"),this.meters=this.el("div","hud-meters"),this.seals=this.el("div","seal-row"),this.panelLayer=this.el("div","hud-panel-layer"),this.ring=this.el("div","guide-ring"),this.ring.style.display="none";const r=this.el("div","hud-controls");this.plume=this.el("div","plume"),this.plumeFill=this.el("div","plume-fill"),this.plume.appendChild(this.plumeFill);const s=this.el("div","plume-cap");this.plume.appendChild(s),this.sortBtn=this.el("button","sort-btn"),this.sortBtn.textContent=St.sortHold,this.sortBtn.style.background=re.sealingRed,this.bindSortBtn(),r.appendChild(this.plume),r.appendChild(this.sortBtn),this.root.appendChild(this.top),this.root.appendChild(this.meters),this.root.appendChild(this.seals),this.root.appendChild(this.panelLayer),this.root.appendChild(r),this.root.appendChild(this.ring);const a=this.el("button","seal-toggle");a.textContent="SEALS",a.addEventListener("click",()=>{this.sealsCollapsed=!this.sealsCollapsed,this.seals.classList.toggle("collapsed",this.sealsCollapsed)}),this.root.appendChild(a),this.injectCss()}el(e,t){const i=document.createElement(e);return t&&(i.className=t),i}bindSortBtn(){const e=i=>{i.preventDefault(),this.sortHeld=!0,this.sortBtn.classList.add("held"),this.cb.onSortHold(!0)},t=()=>{this.sortHeld&&(this.sortHeld=!1,this.sortBtn.classList.remove("held"),this.cb.onSortHold(!1))};this.sortBtn.addEventListener("pointerdown",e),this.sortBtn.addEventListener("pointerup",t),this.sortBtn.addEventListener("pointercancel",t),this.sortBtn.addEventListener("pointerleave",t)}get modalOpen(){return this.panelLayer.classList.contains("open")}get redrawForecastShown(){return this.redrawShown}updateHud(e,t,i){const r=Bl[e.districtIndex],s=Math.floor(e.blocking.nightMs/1e3),a=`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;this.top.innerHTML=[`<span class="stat"><b>${St.postage}</b><i>${wt(e.postage)}</i></span>`,`<span class="stat"><b>${St.stars}</b><i>${ws(e.stars)}</i></span>`,`<span class="stat"><b>${r?r.name:"—"}</b><i>R${e.run+1} ${a}</i></span>`].join("");const o=["desk","satchel","route","inflow"];this.meters.innerHTML="";for(const u of o){const f=Zo[u],d=t.per[u],m=this.el("button",`meter meter-${u} lvl-${d.level}`);m.dataset.kind=u,m.style.background=f.color;const g=this.el("span",`glyph glyph-${f.glyph}`);m.appendChild(g);const M=this.el("span",`badge badge-${f.badge}`);if(m.appendChild(M),d.level==="choke"){const p=this.el("span","choke-tri");m.appendChild(p)}m.setAttribute("aria-label",`${u} meter ${d.level}`),m.addEventListener("click",()=>this.cb.onOpenPanel(mg[u])),this.meters.appendChild(m)}const c=La(e),l=Math.min(1,Math.max(0,e.perfect/Math.max(1e-6,c)));this.plumeFill.style.height=`${Math.round(l*100)}%`,this.plume.classList.toggle("gold",l>=.999),this.renderSeals(e,i)}showBottleneckPulse(e){const t=this.meters.querySelector(`[data-kind="${e}"]`);if(t){if(this.reduceMotion){t.classList.add("pulse-static");return}t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}}renderSeals(e,t){const i=Yl(e),r=[];r.push({id:"lantern",name:St.districtLL,stateText:"OPEN",rvFrac:1,rvText:"—",listFrac:1,listText:"—",action:{label:"—",enabled:!1,act:"none"},ticker:null,locked:!1});const s=e.blocking.gates.rainmarket,a=e.districtIndex>=1||e.blocking.everDistricts.includes(1),o=yt.rainmarket.bond;r.push({id:"rainmarket",name:St.districtRM,stateText:a?"OPEN":`${s.rvDone?"✓":"…"}`,rvFrac:Math.min(1,i/yt.rainmarket.rv),rvText:`${wt(Math.min(i,yt.rainmarket.rv))} / ${wt(yt.rainmarket.rv)}`,listFrac:Math.min(1,s.listValue/yt.rainmarket.deliveryList),listText:`${wt(Math.min(s.listValue,yt.rainmarket.deliveryList))} / ${wt(yt.rainmarket.deliveryList)}`,action:a?{label:"OPEN",enabled:!1,act:"none"}:{label:`Bond ${wt(o)}`,enabled:s.listDone&&e.postage>=o,act:"bond"},ticker:null,locked:!a});const c=e.blocking.gates.horizon,l=ka(e);r.push({id:"horizon",name:St.districtCW,stateText:c.listDone?"SEALED — offers Redraw":"SEALED",rvFrac:Math.min(1,i/yt.horizon.rv),rvText:`${wt(Math.min(i,yt.horizon.rv))} / ${wt(yt.horizon.rv)}`,listFrac:Math.min(1,c.listValue/yt.horizon.deliveryList),listText:`${wt(Math.min(c.listValue,yt.horizon.deliveryList))} / ${wt(yt.horizon.deliveryList)}`,action:{label:St.redraw,enabled:t,act:"redraw"},ticker:c.rvDone?`+${l} ★ pending`:null,locked:!0}),this.seals.innerHTML="";for(const u of r){const f=this.el("div",`seal seal-${u.id}${u.locked?" locked":""}`);if(f.dataset.seal=u.id,f.innerHTML=`
        <div class="seal-head"><span class="seal-name">${u.name}</span><span class="seal-state">${u.stateText}</span></div>
        <div class="gauge"><span class="gauge-label">thread</span><div class="gauge-track"><div class="gauge-fill" style="width:${Math.round(u.rvFrac*100)}%"></div></div><span class="gauge-num">${u.rvText}</span></div>
        <div class="gauge"><span class="gauge-label">list</span><div class="gauge-track"><div class="gauge-fill list" style="width:${Math.round(u.listFrac*100)}%"></div></div><span class="gauge-num">${u.listText}</span></div>
        ${u.ticker?`<div class="ticker">${u.ticker}</div>`:""}
      `,u.id==="horizon"){const m=this.el("span","seal-silhouette");f.querySelector(".seal-head")?.appendChild(m)}const d=this.el("button","seal-action");d.textContent=u.action.label,d.disabled=!u.action.enabled,u.action.act==="bond"&&d.addEventListener("click",()=>this.cb.onBond()),u.action.act==="redraw"&&d.addEventListener("click",()=>this.openRedrawPanel()),f.appendChild(d),this.seals.appendChild(f)}}hidePanel(){this.panelLayer.innerHTML="",this.panelLayer.classList.remove("open"),this.ring.style.display="none"}frame(e){this.panelLayer.innerHTML="";const t=this.el("div","card");return t.innerHTML=`<h3>${e}</h3>`,this.panelLayer.appendChild(t),this.panelLayer.classList.add("open"),t}closeBtn(e,t="Close"){const i=this.el("button","buy ghost");i.textContent=t,i.addEventListener("click",()=>this.hidePanel()),e.appendChild(i)}purchasePunch(e){this.reduceMotion||(e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"))}showFamilyPanel(e,t){if(t==="hall")return this.showUpgradePanel(e);const i=Zo[t==="desk"?"desk":t==="satchel"?"satchel":"route"].glyph,r=this.frame(`${i} — ${t}`),s=t==="desk"?e.desks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Wt.caps.length-1,label:`pad${o+1}`})):t==="satchel"?e.racks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:dn.rates.length-1,label:`rack${o+1}`})):e.lanes.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:un.rates.length-1,label:`lane${o+1}`}));for(const a of s)if(a.unlocked){const o=a.tier>=a.maxTier,c=t==="desk"?Ia(e,a.idx):t==="satchel"?Na(e,a.idx):Oa(e,a.idx),l=e.postage>=c;this.buyRow(r,`${a.label} T${a.tier+1}${o?" (max)":""}`,c,!o&&l,u=>{this.cb.onBuy(t,a.idx),this.purchasePunch(u)})}else{const o=t==="desk"?Da(e,a.idx):t==="satchel"?Ua(e,a.idx):Fa(e,a.idx),c=e.postage>=o;this.buyRow(r,`${a.label} (locked)`,o,c,l=>{this.cb.onBuy(t,a.idx),this.purchasePunch(l)})}this.closeBtn(r)}buyRow(e,t,i,r,s){const a=this.el("div","row");a.innerHTML=`<span class="name">${t}</span>`;const o=this.el("button",`buy${r?"":" dim"}`);o.textContent=`${St.buy} ${isFinite(i)?wt(i):"max"}`,o.disabled=!r,o.addEventListener("click",c=>{c.stopPropagation(),s(o)}),a.appendChild(o),e.appendChild(a)}showUpgradePanel(e){const t=this.frame("Hall"),i=Object.values(hr);for(const r of i){const s=r.id,a=e.hall[s]??0,o=a>=r.tiers,c=o?1/0:r.cost[a]??1/0,l=this.el("div","row");l.innerHTML=`<span class="name">${r.label}</span><span class="lvl">L${a}${o?" max":""}</span>`;const u=this.el("button",`buy${e.postage>=c?"":" dim"}`);u.textContent=`${St.buy} ${isFinite(c)?wt(c):"max"}`,u.disabled=e.postage<c||!isFinite(c),u.addEventListener("click",f=>{f.stopPropagation(),this.cb.onBuy("hall",s),this.purchasePunch(u)}),l.appendChild(u),t.appendChild(l)}this.closeBtn(t)}openRedrawPanel(){const e=this.cb.onRedrawOpen();if(!e)return;this.redrawShown=e;const t=this.frame(St.redraw);t.classList.add("card-redraw"),t.insertAdjacentHTML("beforeend",`
      <p class="forecast"><b>${ws(e.starsPending)}</b> ${St.stars} pending</p>
      <p class="earned">booked this run: ${wt(e.earnedBooked)}</p>
      <div class="preview">
        <div class="keep"><b>Kept:</b><ul>${jo.kept.map(r=>`<li>${r}</li>`).join("")}</ul></div>
        <div class="lost"><b>Lost:</b><ul>${jo.lost.map(r=>`<li>${r}</li>`).join("")}</ul></div>
      </div>`);const i=this.el("button","buy big");i.textContent=`${St.redraw} — claim ${ws(e.starsPending)} ★`,i.addEventListener("click",()=>this.cb.onRedrawConfirm()),t.appendChild(i),this.closeBtn(t,"Not yet")}showReturnCard(e,t){const i=this.frame(Ur.title);if(i.classList.add("card-return"),e.kind==="never-empty")i.insertAdjacentHTML("beforeend",`<p class="ledger-line">${Ur.neverEmpty}</p>`);else{const s=Math.floor(e.elapsedS/3600),a=Math.floor(e.elapsedS%3600/60),o=Math.floor(e.capS/3600),c=Math.floor(e.capS%3600/60);if(i.insertAdjacentHTML("beforeend",`
        <p class="ledger-line">Away ${s} h ${String(a).padStart(2,"0")} min · Ledger holds ${o} h ${String(c).padStart(2,"0")} min</p>
        <p class="ledger-line big">Letters settled without you: <b>+${wt(e.base)}</b></p>`),e.doublerLeftToday>0){const l=this.el("button","buy big");l.textContent=`${Ur.doubler} · ${e.doublerLeftToday} left today`,l.addEventListener("click",()=>this.cb.onDouble()),i.appendChild(l)}}const r=this.el("button",`buy ${e.kind==="ledger"?"ghost":"big"}`);r.textContent=Ur.collect,r.addEventListener("click",()=>this.cb.onDismissMinor()),i.appendChild(r)}showMonetizationStubs(){const e=this.frame("Store");e.insertAdjacentHTML("beforeend",[St.license,St.priorityPost,St.waxPacks].map(t=>`<div class="row"><span class="name">${t}</span><span class="stub">${St.notEnabled}</span></div>`).join("")),this.closeBtn(e)}showCoach(e,t){this.lastCoachSig=e.beat;const i=e.speaker?`<b>${e.speaker==="Pip"?"Pip":"Mara"}:</b> `:"",r=this.frame(`${e.speaker??"First Night"}`);r.classList.add("card-coach"),r.insertAdjacentHTML("beforeend",`<p>${i}${e.copy??e.beat}</p>`),e.grantAmount!=null&&r.insertAdjacentHTML("beforeend",`<p class="grant">+${wt(e.grantAmount)} ${St.postage} (First Night ${e.grantId})</p>`),e.rail&&r.insertAdjacentHTML("beforeend",`<p class="rail-note">Rail: ${e.rail.note}</p>`);const s=this.el("button","buy big");if(s.textContent="OK",s.addEventListener("click",()=>{this.ring.style.display="none",this.cb.onDismissMinor()}),r.appendChild(s),this.ring.style.display=t?"block":"none",t){const a=t.getBoundingClientRect(),o=this.root.getBoundingClientRect();this.ring.style.left=`${a.left-o.left-6}px`,this.ring.style.top=`${a.top-o.top-6}px`,this.ring.style.width=`${a.width+12}px`,this.ring.style.height=`${a.height+12}px`}}anchorFor(e){return e?e==="sort"?this.sortBtn:e.startsWith("seal-")?this.seals.querySelector(`[data-seal="${e.slice(5)}"]`):this.meters.querySelector(`[data-kind="${e}"]`):null}get lastCoach(){return this.lastCoachSig}injectCss(){if(document.getElementById("md-hud-css"))return;const e=document.createElement("style");e.id="md-hud-css",e.textContent=`
      #hud { font-family: ui-monospace, Menlo, Consolas, monospace; color: ${re.parchment}; }
      .hud-top { position:absolute; top:0; left:0; right:0; height:15%; padding:10px 14px; display:flex; justify-content:space-between; align-items:flex-start; background:linear-gradient(180deg, rgba(23,35,63,.92), rgba(23,35,63,0)); z-index:3; pointer-events:none; }
      .stat { display:flex; flex-direction:column; align-items:center; }
      .stat b { font-size:10px; letter-spacing:.08em; color:${re.moonBlue}; text-transform:uppercase; }
      .stat i { font-style:normal; font-size:16px; font-weight:700; font-variant-numeric:tabular-nums; }
      .hud-meters { position:absolute; top:16%; left:0; right:0; display:flex; gap:10px; justify-content:center; padding:6px; z-index:3; }
      .meter { position:relative; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; transition:transform ${Ts.capacityPulseS}s; }
      .meter .glyph { width:18px; height:18px; background:#17233F; display:block; }
      .glyph-stacked-tray { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%, 0 100%, 100% 100%, 100% 100%, 0 100%); background:#17233F; }
      .glyph-stacked-tray { clip-path: polygon(0% 40%, 100% 40%, 100% 58%, 0% 58%, 0% 66%, 100% 66%, 100% 84%, 0% 84%); }
      .glyph-buckle { background:transparent!important; border:3px solid #17233F; border-radius:4px; box-sizing:border-box; }
      .glyph-thread-needle { clip-path: polygon(45% 0, 55% 0, 55% 70%, 100% 100%, 0 100%, 45% 70%); }
      .glyph-tray-arrow { clip-path: polygon(0 55%, 60% 55%, 60% 30%, 100% 62%, 60% 94%, 60% 70%, 0 70%); }
      .meter .badge { position:absolute; top:-3px; right:-3px; width:12px; height:12px; }
      .badge-square { background:#17233F; border-radius:1px; }
      .badge-capsule { background:#17233F; border-radius:8px; width:16px!important; height:8px!important; }
      .badge-needle-pulse { background:#17233F; clip-path: polygon(50% 0, 100% 100%, 0 100%); }
      .badge-rain-line { width:3px!important; background:#17233F; box-shadow: 4px 0 0 #17233F, 8px 0 0 #17233F; }
      .meter.lvl-warn { animation: breathe 1.2s ease-in-out infinite alternate; }
      @keyframes breathe { from { outline: 2px solid rgba(244,231,199,.25); outline-offset:2px; } to { outline: 3px solid rgba(244,231,199,.8); outline-offset:3px; } }
      .meter.lvl-choke { filter: saturate(.35) brightness(.92); }
      .choke-tri { position:absolute; left:50%; top:-14px; transform:translateX(-50%); width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:13px solid transparent; border-bottom-color:transparent; box-shadow:none; outline:none; border-bottom:13px solid rgba(244,231,199,.0); }
      .choke-tri::after { content:''; position:absolute; left:-8px; top:0; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:13px solid ${re.parchment}; clip-path: polygon(50% 0, 100% 100%, 82% 100%, 50% 34%, 18% 100%, 0 100%); }
      .meter.pulse { animation: meterPulse ${Ts.capacityPulseS}s infinite alternate; }
      .meter.pulse-static { outline: 3px solid #F4E7C7; outline-offset: 2px; }
      @keyframes meterPulse { from{ transform:scale(1);} to{ transform:scale(1.18);} }
      .seal-row { position:absolute; top:calc(16% + 56px); left:0; right:0; display:flex; gap:8px; justify-content:center; padding:4px 8px; z-index:2; }
      .seal-row.collapsed { display:none; }
      .seal { width:31%; max-width:150px; background:rgba(23,35,63,.82); border:1px solid rgba(214,168,75,.45); border-radius:10px; padding:6px 7px; font-size:10px; }
      .seal.locked { opacity:.85; }
      .seal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; }
      .seal-name { font-weight:700; color:${re.parchment}; }
      .seal-state { color:${re.moonBlue}; font-size:9px; }
      .seal-silhouette { width:10px; height:14px; background:#0d1730; clip-path: polygon(50% 0, 90% 20%, 90% 60%, 70% 60%, 70% 100%, 30% 100%, 30% 60%, 10% 60%, 10% 20%); }
      .gauge { display:flex; align-items:center; gap:4px; margin:3px 0; }
      .gauge-label { width:26px; color:${re.brass}; font-size:8px; text-transform:uppercase; }
      .gauge-track { flex:1; height:5px; background:#101a30; border-radius:3px; overflow:hidden; }
      .gauge-fill { height:100%; background:${re.routeMint}; }
      .gauge-fill.list { background:${re.plum}; }
      .gauge-num { font-size:8px; color:${re.parchment}; font-variant-numeric:tabular-nums; }
      .ticker { margin-top:3px; color:${re.brass}; font-weight:700; font-size:9px; }
      .seal-action { width:100%; min-height:44px; margin-top:5px; background:${re.sealingRed}; color:${re.parchment}; border:none; border-radius:8px; font:700 10px/1 ui-monospace; cursor:pointer; }
      .seal-action:disabled { opacity:.45; cursor:default; background:#3a4666; }
      .seal-toggle { position:absolute; top:calc(16% + 4px); right:6px; z-index:3; min-height:44px; min-width:44px; background:transparent; color:${re.moonBlue}; border:1px solid rgba(91,121,200,.5); border-radius:8px; font:700 9px/1 ui-monospace; }
      .hud-controls { position:absolute; bottom:0; left:0; right:0; height:18%; display:flex; align-items:flex-start; justify-content:center; gap:14px; padding-top:10px; background:linear-gradient(0deg, rgba(23,35,63,.94), rgba(23,35,63,0)); z-index:3; }
      .sort-btn { width:min(230px, 62%); height:64px; border:none; border-radius:22px; color:${re.parchment}; font:800 18px/1 ui-monospace; letter-spacing:.12em; box-shadow:0 6px 0 #8f3038; touch-action:none; cursor:pointer; user-select:none; background-image:linear-gradient(rgba(255,255,255,.14), rgba(255,255,255,0)); }
      .sort-btn.held { transform:translateY(4px); box-shadow:0 2px 0 #8f3038; }
      .plume { width:26px; height:64px; border:2px solid ${re.brass}; border-radius:12px; position:relative; overflow:hidden; background:#101a30; }
      .plume-fill { position:absolute; bottom:0; left:0; right:0; background:${re.brass}; transition:height .2s; }
      .plume.gold .plume-fill { background:${re.routeMint}; box-shadow:0 0 10px ${re.brass}; }
      .plume.gold { box-shadow:0 0 14px ${re.brass}; }
      .hud-panel-layer { position:absolute; inset:0; display:none; align-items:flex-end; justify-content:center; background:rgba(10,16,32,.45); z-index:10; }
      .hud-panel-layer.open { display:flex; }
      .card { width:88%; max-width:420px; max-height:72%; overflow-y:auto; background:${re.parchment}; color:#241d12; border-radius:16px; padding:20px; margin-bottom:6%; box-shadow:0 10px 30px rgba(0,0,0,.5); }
      .card h3 { margin:0 0 12px; color:${re.inkNavy}; }
      .row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed rgba(36,29,18,.3); }
      .row .name { font-size:14px; }
      .row .lvl { color:#777; font-size:12px; }
      .buy { background:${re.sealingRed}; color:${re.parchment}; border:none; border-radius:10px; padding:10px 14px; font:700 13px/1 ui-monospace; cursor:pointer; min-height:44px; min-width:44px; }
      .buy.dim { opacity:.5; }
      .buy.ghost { background:transparent; color:#241d12; border:1px solid rgba(36,29,18,.4); }
      .buy.big { width:100%; margin:8px 0; font-size:15px; }
      .buy.punch { animation: punch ${Ts.purchasePunchS}s; }
      @keyframes punch { 0% { transform:scale(.94); } 60% { transform:scale(1.04); } 100% { transform:scale(1); } }
      .card ul { padding-left:18px; }
      .card li { margin:6px 0; }
      .stub { color:#777; font-size:11px; text-align:right; }
      .card-redraw .forecast { font-size:34px; margin:10px 0; color:${re.plum}; }
      .card-redraw .earned { font-size:12px; color:#555; margin:-6px 0 10px; }
      .preview { display:flex; gap:14px; font-size:11px; margin-bottom:6px; }
      .preview div { flex:1; }
      .preview .keep b { color:#3a7d5f; } .preview .lost b { color:${re.sealingRed}; }
      .ledger-line { font-size:14px; margin:6px 0; }
      .ledger-line.big { font-size:18px; }
      .card-coach p { font-size:16px; margin:8px 0 12px; }
      .card-coach .grant { color:#3a7d5f; font-weight:700; font-size:13px; }
      .card-coach .rail-note { color:#777; font-size:11px; }
      .guide-ring { position:absolute; border:3px dashed ${re.brass}; border-radius:14px; z-index:9; pointer-events:none; animation: breathe 1.2s ease-in-out infinite alternate; }
      .debug-label { position:absolute; background:rgba(23,35,63,.85); color:${re.routeMint}; font:700 9px/1 ui-monospace; padding:2px 5px; border-radius:4px; pointer-events:none; z-index:4; white-space:nowrap; }
    `,document.head.appendChild(e)}}const mg={desk:"desk",satchel:"satchel",route:"route",inflow:"hall"};function gg(n,e=Date.now()){n.lastLedgerTs=e,n.savedAt=e}function jl(n=Date.now()){const e=new Date(n);return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function _g(n,e){const t=jl();return n.doublerDay!==t&&(n.doublerDay=t,n.doublersUsed=0),n.doublersUsed>=3?!1:(n.doublersUsed+=1,n.postage+=e,n.totalEarnedRun+=e,!0)}function vg(){const n=e=>({family:e,level:"ok",chokeHoldS:0,warnHoldS:0,chokedAtNightMs:null,firstChokeThisRun:!1,remedyLoggedAtS:null,chokeClearS:0});return{per:{desk:n("desk"),satchel:n("satchel"),route:n("route"),inflow:n("inflow")},deliveredEma:0}}const Lt=Dm;function xg(n,e,t,i,r){const s=Math.max(1e-9,Pa(n)),a=n.desks.reduce((M,p)=>M+p.inProcess,0)/s,o=Math.max(1e-9,zl(n)),l=(n.bundled??0)/o,u=Math.min(1,i/2),f=r/Math.max(1e-9,i);e.deliveredEma+=(f-e.deliveredEma)*u;const d=Math.max(1e-9,Hl(n)*Math.max(1,n.starMultiplier)),m=e.deliveredEma/d,g=Mg(n);return{deskPile:a,satQueue:l,routesBelowSatchels:d<g,routesAboveSatchels:d>g,routeUtil:m,routeDeliveredOkSlack:e.deliveredEma>=g*(1-Lt.route.okSlack)||l<.02,inflowPool:n.backlog/Math.max(1e-9,Yr(n)),holding:t}}function Mg(n){return n.racks.reduce((e,t)=>e+(t.unlocked?dn.rates[t.tier]:0),0)}function Sg(n){return Yr(n)}function yg(n,e,t,i){for(const r of Object.keys(e.per)){const s=e.per[r],a=bg(r,t),o=Tg(r,t);if(a){if(s.chokeHoldS+=i,s.chokeClearS=0,s.level!=="choke"&&s.chokeHoldS>=Eg(r,t)){const c=!s.firstChokeThisRun;s.firstChokeThisRun=!0,s.level="choke",s.chokedAtNightMs=n.blocking.nightMs,s.remedyLoggedAtS=null,Ot(n,It.meterChoke,{family:r,first_in_run:c})}}else s.chokeHoldS=0,s.level==="choke"?(s.chokeClearS+=i,s.chokeClearS>=1.5&&(s.level=o?"warn":"ok",s.chokeClearS=0)):s.chokeClearS=0;o&&s.level!=="choke"?(s.warnHoldS+=i,s.level="warn"):s.level!=="choke"&&(s.warnHoldS=0,s.level=a?s.level:"ok")}}function Eg(n,e){return n==="desk"&&e.holding&&e.deskPile>=Lt.desk.burstFullAt?0:n==="desk"?Lt.desk.chokeSustainS:n==="satchel"?Lt.satchel.chokeSustainS:n==="route"?Lt.route.chokeSustainS:Lt.inflow.chokeSustainS}function bg(n,e){switch(n){case"desk":return e.deskPile>=Lt.desk.chokeAt;case"satchel":return e.routesAboveSatchels&&e.deskPile>=Lt.satchel.deskPileChokeAt;case"route":return e.routeUtil>=Lt.route.utilChokeAt&&e.satQueue>=Lt.route.queueChokeAt;case"inflow":return e.inflowPool<Lt.inflow.chokeAt&&e.holding}}function Tg(n,e){switch(n){case"desk":return e.deskPile>=Lt.desk.warnAt;case"satchel":return e.satQueue>=Lt.satchel.queueWarnAt&&e.routesBelowSatchels;case"route":return e.routeUtil>=Lt.route.utilWarnAt;case"inflow":return e.inflowPool<Lt.inflow.okAt}}function Ag(n,e,t,i){const r=e.per[t];if(r.remedyLoggedAtS!=null||r.chokedAtNightMs==null)return;r.remedyLoggedAtS=n.blocking.nightMs;const s=(n.blocking.nightMs-r.chokedAtNightMs)/1e3;Ot(n,It.meterRemedy,{family:t,purchase_id:i,latency_s:s})}function wg(n){for(const e of Object.keys(n.per)){const t=n.per[e];t.level="ok",t.chokeHoldS=0,t.warnHoldS=0,t.chokedAtNightMs=null,t.firstChokeThisRun=!1,t.remedyLoggedAtS=null,t.chokeClearS=0}n.deliveredEma=0}const Rg=60;function Cg(n,e,t){if(e<=0)return;const i=e/Math.max(1e-9,t),r=Math.min(1,t/Rg);n.blocking.snapshotRate+=(i-n.blocking.snapshotRate)*r}function il(n,e=Date.now()){const t=Math.max(0,(e-n.lastLedgerTs)/1e3),i=n.blocking.snapshotRate;if(t<Ti.neverEmptyElapsedS||i<=0){const o={kind:"never-empty",elapsedS:t,capS:Ti.capHours*3600,base:0,doubled:!1,doublerLeftToday:rl(n),snapshotRate:i};return n.lastLedgerTs>0&&t>=1&&Ot(n,It.ledgerReturn,{elapsed_s:t,credited:0,snapshot_rate:i,doubled:!1}),n.lastLedgerTs=e,n.lastLedgerTs>0?o:null}const r=Ti.capHours*3600,a=Math.min(t,r)*Ti.awayFraction*i;return n.postage+=a,n.totalEarnedRun+=a,Kr(n,a),Ot(n,It.ledgerReturn,{elapsed_s:t,credited:a,snapshot_rate:i,doubled:!1}),n.lastLedgerTs=e,{kind:"ledger",elapsedS:t,capS:r,base:a,doubled:!1,doublerLeftToday:rl(n),snapshotRate:i}}function rl(n,e=Date.now()){const t=jl(e),i=n.doublerDay===t?n.doublersUsed:0;return Math.max(0,Ti.doublerMaxPer24h-i)}function Pg(n,e){return e.kind!=="ledger"||e.doubled||!_g(n,e.base)?!1:(Kr(n,e.base),e.doubled=!0,!0)}const Cs=kl.filter(n=>"t"in n.trigger);function Jl(n,e){n.blocking.railsFired.push(e.beat);const t=e.grantId??e.beat;Ot(n,It.onboardBeat,{copy_id:t,t_s:n.blocking.nightMs/1e3});let i;if(e.grantId!=null&&!n.blocking.checklist.includes(e.grantId)){const r=Nm.find(s=>s.id===e.grantId);r&&(n.blocking.checklist.push(r.id),i=r.grant,n.postage+=r.grant,n.totalEarnedRun+=r.grant,Kr(n,r.grant))}return{beat:e.beat,copyId:t,speaker:e.speaker,copy:e.copy,highlight:e.highlight,rail:e.rail,grantId:e.grantId,grantAmount:i}}function Lg(n){if(n.onboarded)return[];const e=n.blocking.nightMs/1e3,t=[];for(const r of Cs)e>=r.trigger.t&&!n.blocking.railsFired.includes(r.beat)&&t.push(Jl(n,r));const i=Cs[Cs.length-1];return i&&n.blocking.railsFired.includes(i.beat)&&(n.onboarded=!0),t}function Ai(n,e){const t=[];for(const i of kl)"event"in i.trigger&&i.trigger.event===e&&!n.blocking.railsFired.includes(i.beat)&&t.push(Jl(n,i));return t}function Dg(n,e,t){let i=[];return e.rainmarket.rvDone&&(i=i.concat(Ai(n,"rv_complete"))),t.rainmarketListNearly&&(i=i.concat(Ai(n,"list_nearly"))),e.horizon.rvDone&&(i=i.concat(Ai(n,"horizon_rv"))),e.horizon.listDone&&(i=i.concat(Ai(n,"horizon_list"))),i}const Ig=30;function Ug(n,e=()=>Date.now()){const t={lastWriteMs:e(),save(i,r){Ql(i),n(i),t.lastWriteMs=e(),Ot(i,It.saveWrite,{version:i.v,bytes:JSON.stringify(i).length,state_hash:$l(i),ok:!0,reason:r})},tick(i,r){(r-t.lastWriteMs)/1e3>=Ig&&t.save(i,"autosave")}};return t}function Ng(n,e){Ot(n,It.saveLoad,{version:n.v,bytes:JSON.stringify(n).length,state_hash:$l(n),ok:e})}function Ql(n){n.ledgerWindow=Ti.capHours*3600}const Un=1/60,Fg=[-3.4,-1.2,1.1,3.3];function Og(){try{const n=localStorage.getItem(Gl);return n?{state:qm(JSON.parse(n)),ok:!0}:{state:Bi(),ok:!1}}catch{return{state:Bi(),ok:!1}}}function sl(n){n.savedAt=Date.now(),gg(n),localStorage.setItem(Gl,JSON.stringify(n))}function kg(n){return new U(Fg[n]??0,.3,1.6)}function Bg(){const n=document.getElementById("game"),e=document.getElementById("hud"),t=document.getElementById("boot");if(!n||!e)return;const i=Rm(),{renderer:r,scene:s,camera:a,resize:o}=Cm(n,{});Pm(a);const c=Vm(s,{});ng();const{state:l,ok:u}=Og();Ql(l),Ng(l,u);const f=Ug(sl),d=vg();let m=null;!u||(m=il(l),m&&m.kind==="ledger"&&m.base===0&&(m=null)),m&&m.kind==="never-empty"&&!u&&(m=null);let g=!1,M=!1;const p=[];let h=l.bundled??0;const T=k=>{for(const X of k)(X.copy!=null||X.rail)&&p.push(X),X.grantAmount!=null&&f.save(l,"checklist")},b=new pg(e,{onSortHold:k=>{M=k},onBuy:(k,X)=>{const G=()=>JSON.stringify([l.postage,l.hall,l.desks,l.racks,l.lanes]),te=G();let ne=!1,pe="",_e=0;if(k==="hall"){const B=String(X??""),K=l.hall[B]??0,fe=hr[B];_e=fe?fe.cost[K]??0:0,ne=$m(l,B),pe=B}else if(k==="desk"){const B=Number(X??0),K=l.desks[B];K&&!K.unlocked?(_e=Da(l,B),ne=Ym(l,B)):K&&K.unlocked&&(_e=Ia(l,B),ne=Km(l,B)),pe=`pad${B+1}`}else if(k==="satchel"){const B=Number(X??0),K=l.racks[B];K&&!K.unlocked?(_e=Ua(l,B),ne=Zm(l,B)):K&&K.unlocked&&(_e=Na(l,B),ne=jm(l,B)),pe=`rack${B+1}`}else if(k==="route"){const B=Number(X??0),K=l.lanes[B];K&&!K.unlocked?(_e=Fa(l,B),ne=Jm(l,B)):K&&K.unlocked&&(_e=Oa(l,B),ne=Qm(l,B)),pe=`lane${B+1}`}const We=G();ne&&te!==We&&(Ot(l,It.purchase,{kind:k,id:pe,cost:_e,wallet_after:l.postage}),Ag(l,d,k==="hall"?"inflow":k,pe),f.save(l,"purchase")),k==="hall"?b.showUpgradePanel(l):b.showFamilyPanel(l,k)},onBond:()=>{lg(l)&&(c.updateLanterns(l),c.pipPulse(),T(Ai(l,"advance")),f.save(l,"district_advance"))},onRedrawOpen:()=>(il(l),dg(l)),onRedrawConfirm:()=>{const k=b.redrawForecastShown;k&&(fg(l,k.starsPending),wg(d),S=0,h=0,b.hidePanel(),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateWall(l,!1),f.save(l,"redraw"),T(Ai(l,"claim")))},onDismissMinor:()=>{l.returnCardPending=!1,m=null,b.hidePanel(),f.save(l,"ledger_settle")},onDouble:()=>{m&&Pg(l,m),l.returnCardPending=!1,b.hidePanel(),sl(l),m=null},onOpenPanel:k=>{k==="hall"?b.showUpgradePanel(l):b.showFamilyPanel(l,k)}},i);let S=l.districtIndex;m&&(l.returnCardPending=!0,g=!0,b.showReturnCard(m,l)),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateLanes(l,0),c.updateWall(l,Rs(l));let F=0,w=0,R=l.totalEarnedRun,P=performance.now(),y=0,x=0,A=0;o(),window.addEventListener("resize",o),requestAnimationFrame(()=>t?.remove());const z=new URLSearchParams(location.search).get("debug")==="1",O=document.createElement("div");z&&(e.appendChild(O),c.debugAnchors.forEach(k=>{const X=document.createElement("div");X.className="debug-label",X.textContent=k.label,X.dataset.label=k.label,O.appendChild(X)}));let q=0;function $(k){requestAnimationFrame($);let X=(k-P)/1e3;if(P=k,X>.25&&(X=.25),!b.modalOpen){y+=X;let _e=0;for(;y>=Un&&_e<10;){const B=l.postage,K=zm(l,Un,M);if(l.blocking.nightMs+=Un*1e3,l.districtIndex!==S&&(l.districtIndex=S),K.postageEarned>0||l.postage!==B){const ie=K.postageEarned;Kr(l,ie),Cg(l,ie,Un)}const fe=xg(l,d,M,Un,K.delivered);yg(l,d,fe,Un),T(Lg(l)),T(Dg(l,{rainmarket:l.blocking.gates.rainmarket,horizon:l.blocking.gates.horizon},{rainmarketListNearly:ag(l,"rainmarket")})),(l.bundled??0)>h+.5&&c.leverKick(),h=l.bundled??0,y-=Un,_e++,A+=Un}const We=l.totalEarnedRun-R;if(R=l.totalEarnedRun,We>0){for(w+=We/Math.max(1,Vl(l)),F-=X;!i&&w>=1&&c.flyers.length<80&&!(F>0);)w-=1,F+=.09,c.spawnFlyer(new U(-2.6+(Math.random()-.5)*1.4,.5,4),kg(Math.floor(Math.random()*4)));w>12&&(w=12)}if(p.length>0&&!b.modalOpen&&!g){const B=p.shift();b.showCoach(B,b.anchorFor(B.highlight))}}g&&!b.modalOpen&&(g=!1),c.animateFlyers(X,i),c.tickCharacters(X,A,i),c.updateDesks(l),c.updateRacks(l);const te=l.backlog/Math.max(1e-9,Sg(l)),ne=d.per.inflow.level==="choke";if(c.updateTray(l,te,ne),k-x>250){x=k;const _e=Math.max(1e-9,64);c.updateLanes(l,Math.min(1,d.deliveredEma/_e)),c.updateWall(l,Rs(l))}const pe=Object.keys(d.per).find(_e=>d.per[_e].level==="choke");c.setLampLevel(pe?"red":M?"ok":"warn"),b.updateHud(l,d,Rs(l));for(const _e of["desk","satchel","route","inflow"])d.per[_e].level==="choke"&&k%1e3<34&&b.showBottleneckPulse(_e);if(l.perfect>=La(l)-1e-6&&c.pipPulse(),f.tick(l,k),z&&(q+=X,q>.25)){q=0;const _e=r.domElement.clientWidth,We=r.domElement.clientHeight;c.debugAnchors.forEach(B=>{const K=O.querySelector(`[data-label="${B.label}"]`);if(!K)return;const fe=B.pos.clone().project(a);K.style.left=`${(fe.x+1)/2*_e}px`,K.style.top=`${(-fe.y+1)/2*We}px`})}r.render(s,a)}requestAnimationFrame($),window.__md={get state(){return l},hall:c,blocking:{get meters(){return d},events:ig,forecast:()=>ka(l),get queue(){return p.length}}}}Bg();
