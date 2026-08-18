(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="170",eh=0,ol=1,th=2,Wc=1,nh=2,Wn=3,mi=0,Qt=1,$n=2,fi=0,dr=1,ll=2,cl=3,dl=4,ih=5,Ci=100,rh=101,sh=102,ah=103,oh=104,lh=200,ch=201,dh=202,hh=203,za=204,Ha=205,uh=206,fh=207,ph=208,mh=209,gh=210,_h=211,vh=212,xh=213,yh=214,Va=0,Ga=1,Wa=2,pr=3,Xa=4,$a=5,qa=6,Ya=7,Uo=0,bh=1,Mh=2,pi=0,Sh=1,wh=2,Eh=3,Xc=4,Th=5,Ah=6,Ch=7,$c=300,mr=301,gr=302,ja=303,Ka=304,Ys=306,Za=1e3,Li=1001,Ja=1002,sn=1003,Rh=1004,ds=1005,Rn=1006,ia=1007,Di=1008,Jn=1009,qc=1010,Yc=1011,Jr=1012,Fo=1013,Ii=1014,Pn=1015,ns=1016,No=1017,Oo=1018,_r=1020,jc=35902,Kc=1021,Zc=1022,xn=1023,Jc=1024,Qc=1025,hr=1026,vr=1027,Bo=1028,zo=1029,ed=1030,Ho=1031,Vo=1033,Us=33776,Fs=33777,Ns=33778,Os=33779,Qa=35840,eo=35841,to=35842,no=35843,io=36196,ro=37492,so=37496,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,vo=37819,xo=37820,yo=37821,Bs=36492,bo=36494,Mo=36495,td=36283,So=36284,wo=36285,Eo=36286,Ph=3200,Lh=3201,nd=0,Dh=1,hi="",rn="srgb",Mr="srgb-linear",js="linear",mt="srgb",Gi=7680,hl=519,Ih=512,kh=513,Uh=514,id=515,Fh=516,Nh=517,Oh=518,Bh=519,ul=35044,fl=35048,pl="300 es",jn=2e3,Hs=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const qr=Math.PI/180,Qr=180/Math.PI;function wr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Go(n,e){return(n%e+e)%e}function zh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Hh(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function Vh(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function Gh(n,e=1){return e-Math.abs(Go(n,e*2)-e)}function Wh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $h(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qh(n,e){return n+Math.random()*(e-n)}function Yh(n){return n*(.5-Math.random())}function jh(n){n!==void 0&&(ml=n);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kh(n){return n*qr}function Zh(n){return n*Qr}function Jh(n){return(n&n-1)===0&&n!==0}function Qh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function eu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xn={DEG2RAD:qr,RAD2DEG:Qr,generateUUID:wr,clamp:Wt,euclideanModulo:Go,mapLinear:zh,inverseLerp:Hh,lerp:Yr,damp:Vh,pingpong:Gh,smoothstep:Wh,smootherstep:Xh,randInt:$h,randFloat:qh,randFloatSpread:Yh,seededRandom:jh,degToRad:Kh,radToDeg:Zh,isPowerOfTwo:Jh,ceilPowerOfTwo:Qh,floorPowerOfTwo:eu,setQuaternionFromProperEuler:tu,normalize:Ht,denormalize:sr};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,r,s,a,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],u=r[6],w=r[1],E=r[4],M=r[7],B=r[2],A=r[5],C=r[8];return s[0]=a*v+o*w+c*B,s[3]=a*m+o*E+c*A,s[6]=a*u+o*M+c*C,s[1]=l*v+h*w+d*B,s[4]=l*m+h*E+d*A,s[7]=l*u+h*M+d*C,s[2]=f*v+p*w+g*B,s[5]=f*m+p*E+g*A,s[8]=f*u+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,p=l*s-a*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new je;function rd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nu(){const n=Vs("canvas");return n.style.display="block",n}const gl={};function Gr(n){n in gl||(gl[n]=!0,console.warn(n))}function iu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ru(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function su(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rt={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=Kn(n.r),n.g=Kn(n.g),n.b=Kn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=ur(n.r),n.g=ur(n.g),n.b=ur(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hi?js:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _l=[.64,.33,.3,.6,.15,.06],vl=[.2126,.7152,.0722],xl=[.3127,.329],yl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Mr]:{primaries:_l,whitePoint:xl,transfer:js,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:vl,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:_l,whitePoint:xl,transfer:mt,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:vl,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Wi;class au{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Vs("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ou=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sa(r[a].image)):s.push(sa(r[a]))}else s=sa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?au.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;class qt extends Sr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=Li,r=Li,s=Rn,a=Di,o=xn,c=Jn,l=qt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=wr(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=$c;qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,M=(p+1)/2,B=(u+1)/2,A=(h+f)/4,C=(d+v)/4,U=(g+m)/4;return E>M&&E>B?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=C/i):M>B?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=U/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=C/s,r=U/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(f-h)/w,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cu extends Sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends cu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ad extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==p||h!==g){let m=1-o;const u=c*f+l*p+h*g+d*v,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const B=Math.sqrt(E),A=Math.atan2(B,u*w);m=Math.sin(m*A)/B,o=Math.sin(o*A)/B}const M=o*w;if(c=c*m+f*M,l=l*m+p*M,h=h*m+g*M,d=d*m+v*M,m===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=B,l*=B,h*=B,d*=B}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*p-l*f,e[t+1]=c*g+h*f+l*d-o*p,e[t+2]=l*g+h*p+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new I,Ml=new Er;class Fi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),us.subVectors(this.max,Ur),Xi.subVectors(e.a,Ur),$i.subVectors(e.b,Ur),qi.subVectors(e.c,Ur),ii.subVectors($i,Xi),ri.subVectors(qi,$i),yi.subVectors(Xi,qi);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-yi.z,yi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,yi.z,0,-yi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-yi.y,yi.x,0];return!oa(t,Xi,$i,qi,us)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Xi,$i,qi,us))?!1:(fs.crossVectors(ii,ri),t=[fs.x,fs.y,fs.z],oa(t,Xi,$i,qi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new I,new I,new I,new I,new I,new I,new I,new I],mn=new I,hs=new Fi,Xi=new I,$i=new I,qi=new I,ii=new I,ri=new I,yi=new I,Ur=new I,us=new I,fs=new I,bi=new I;function oa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){bi.fromArray(n,s);const o=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),h=i.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const hu=new Fi,Fr=new I,la=new I;class is{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(la)),this.expandByPoint(Fr.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new I,ca=new I,ps=new I,si=new I,da=new I,ms=new I,ha=new I;class od{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ca.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ps),o=si.dot(this.direction),c=-si.dot(ps),l=si.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*c-o,f=a*o-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ca).addScaledVector(ps,f),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){da.subVectors(t,e),ms.subVectors(i,e),ha.crossVectors(da,ms);let a=this.direction.dot(ha),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const c=o*this.direction.dot(ms.crossVectors(si,ms));if(c<0)return null;const l=o*this.direction.dot(da.cross(si));if(l<0||c+l>a)return null;const h=-o*si.dot(ha);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,a,o,c,l,h,d,f,p,g,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,f,p,g,v,m)}set(e,t,i,r,s,a,o,c,l,h,d,f,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,g=l*h,v=l*d;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,g=l*h,v=l*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,p=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+v,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,fu)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ai.crossVectors(i,tn),ai.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ai.crossVectors(i,tn)),ai.normalize(),gs.crossVectors(tn,ai),r[0]=ai.x,r[4]=gs.x,r[8]=tn.x,r[1]=ai.y,r[5]=gs.y,r[9]=tn.y,r[2]=ai.z,r[6]=gs.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],w=i[3],E=i[7],M=i[11],B=i[15],A=r[0],C=r[4],U=r[8],b=r[12],y=r[1],T=r[5],O=r[9],H=r[13],j=r[2],J=r[6],Y=r[10],re=r[14],$=r[3],ce=r[7],ge=r[11],we=r[15];return s[0]=a*A+o*y+c*j+l*$,s[4]=a*C+o*T+c*J+l*ce,s[8]=a*U+o*O+c*Y+l*ge,s[12]=a*b+o*H+c*re+l*we,s[1]=h*A+d*y+f*j+p*$,s[5]=h*C+d*T+f*J+p*ce,s[9]=h*U+d*O+f*Y+p*ge,s[13]=h*b+d*H+f*re+p*we,s[2]=g*A+v*y+m*j+u*$,s[6]=g*C+v*T+m*J+u*ce,s[10]=g*U+v*O+m*Y+u*ge,s[14]=g*b+v*H+m*re+u*we,s[3]=w*A+E*y+M*j+B*$,s[7]=w*C+E*T+M*J+B*ce,s[11]=w*U+E*O+M*Y+B*ge,s[15]=w*b+E*H+M*re+B*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*p-i*c*p)+v*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*h-s*c*h)+m*(+t*l*d-t*o*p-s*a*d+i*a*p+s*o*h-i*l*h)+u*(-r*o*h-t*c*d+t*o*f+r*a*d-i*a*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],w=d*m*l-v*f*l+v*c*p-o*m*p-d*c*u+o*f*u,E=g*f*l-h*m*l-g*c*p+a*m*p+h*c*u-a*f*u,M=h*v*l-g*d*l+g*o*p-a*v*p-h*o*u+a*d*u,B=g*d*c-h*v*c-g*o*f+a*v*f+h*o*m-a*d*m,A=t*w+i*E+r*M+s*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(v*f*s-d*m*s-v*r*p+i*m*p+d*r*u-i*f*u)*C,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*u+i*c*u)*C,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*p-i*c*p)*C,e[4]=E*C,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*u+t*f*u)*C,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*C,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*p+t*c*p)*C,e[8]=M*C,e[9]=(g*d*s-h*v*s-g*i*p+t*v*p+h*i*u-t*d*u)*C,e[10]=(a*v*s-g*o*s+g*i*l-t*v*l-a*i*u+t*o*u)*C,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*p-t*o*p)*C,e[12]=B*C,e[13]=(h*v*r-g*d*r+g*i*f-t*v*f-h*i*m+t*d*m)*C,e[14]=(g*o*r-a*v*r-g*i*c+t*v*c+a*i*m-t*o*m)*C,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,p=s*h,g=s*d,v=a*h,m=a*d,u=o*d,w=c*l,E=c*h,M=c*d,B=i.x,A=i.y,C=i.z;return r[0]=(1-(v+u))*B,r[1]=(p+M)*B,r[2]=(g-E)*B,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+u))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+E)*C,r[9]=(m-w)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const a=Yi.set(r[4],r[5],r[6]).length(),o=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const l=1/s,h=1/a,d=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=jn){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(o===jn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Hs)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=jn){const c=this.elements,l=1/(t-e),h=1/(i-r),d=1/(a-s),f=(t+e)*l,p=(i+r)*h;let g,v;if(o===jn)g=(a+s)*d,v=-2*d;else if(o===Hs)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yi=new I,gn=new xt,uu=new I(0,0,0),fu=new I(1,1,1),ai=new I,gs=new I,tn=new I,Sl=new xt,wl=new Er;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const El=new I,ji=new Er,zn=new xt,_s=new I,Nr=new I,mu=new I,gu=new Er,Tl=new I(1,0,0),Al=new I(0,1,0),Cl=new I(0,0,1),Rl={type:"added"},_u={type:"removed"},Ki={type:"childadded",child:null},ua={type:"childremoved",child:null};class Pt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new I,t=new bn,i=new Er,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Nr,_s,this.up):zn.lookAt(_s,Nr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(zn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new I,Hn=new I,fa=new I,Vn=new I,Zi=new I,Ji=new I,Pl=new I,pa=new I,ma=new I,ga=new I,_a=new St,va=new St,xa=new St;class vn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Hn.subVectors(i,t),fa.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Hn),c=_n.dot(fa),l=Hn.dot(Hn),h=Hn.dot(fa),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return _a.setScalar(0),va.setScalar(0),xa.setScalar(0),_a.fromBufferAttribute(e,t),va.fromBufferAttribute(e,i),xa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_a,s.x),a.addScaledVector(va,s.y),a.addScaledVector(xa,s.z),a}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Hn.subVectors(e,t),_n.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Zi.subVectors(r,i),Ji.subVectors(s,i),pa.subVectors(e,i);const c=Zi.dot(pa),l=Ji.dot(pa);if(c<=0&&l<=0)return t.copy(i);ma.subVectors(e,r);const h=Zi.dot(ma),d=Ji.dot(ma);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Zi,a);ga.subVectors(e,s);const p=Zi.dot(ga),g=Ji.dot(ga);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ji,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Pl.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(Pl,o);const u=1/(m+v+f);return a=v*u,o=f*u,t.copy(i).addScaledVector(Zi,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},vs={h:0,s:0,l:0};function ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Go(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ya(a,s,e+1/3),this.g=ya(a,s,e),this.b=ya(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return rt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Wt(Ot.r*255,0,255))*65536+Math.round(Wt(Ot.g*255,0,255))*256+Math.round(Wt(Ot.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=rn){rt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(vs);const i=Yr(oi.h,vs.h,t),r=Yr(oi.s,vs.s,t),s=Yr(oi.l,vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Qe;Qe.NAMES=ld;let vu=0;class rs extends Sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=wr(),this.name="",this.blending=dr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zt extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new I,xs=new lt;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ul,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}}class cd extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dd extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xu=0;const cn=new xt,ba=new Pt,Qi=new I,nn=new Fi,Or=new Fi,Rt=new I;class kn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rd(e)?dd:cd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(nn.min,Or.min),nn.expandByPoint(Rt),Rt.addVectors(nn.max,Or.max),nn.expandByPoint(Rt)):(nn.expandByPoint(Or.min),nn.expandByPoint(Or.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),Rt.add(Qi)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new I,c[U]=new I;const l=new I,h=new I,d=new I,f=new lt,p=new lt,g=new lt,v=new I,m=new I;function u(U,b,y){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),h.sub(l),d.sub(l),p.sub(f),g.sub(f);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),o[U].add(v),o[b].add(v),o[y].add(v),c[U].add(m),c[b].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,b=w.length;U<b;++U){const y=w[U],T=y.start,O=y.count;for(let H=T,j=T+O;H<j;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new I,M=new I,B=new I,A=new I;function C(U){B.fromBufferAttribute(r,U),A.copy(B);const b=o[U];E.copy(b),E.sub(B.multiplyScalar(B.dot(b))).normalize(),M.crossVectors(A,b);const T=M.dot(c[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,T)}for(let U=0,b=w.length;U<b;++U){const y=w[U],T=y.start,O=y.count;for(let H=T,j=T+O;H<j;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let u=0;u<h;u++)f[g++]=l[p++]}return new yn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new xt,Mi=new od,ys=new is,Dl=new I,bs=new I,Ms=new I,Ss=new I,Ma=new I,ws=new I,Il=new I,Es=new I;class nt extends Pt{constructor(e=new kn,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ws.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Ma.fromBufferAttribute(d,e),a?ws.addScaledVector(Ma,h):ws.addScaledVector(Ma.sub(t),h))}t.add(ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(ys.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ys,Dl)===null||Mi.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Ll),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,B=E;M<B;M+=3){const A=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);r=Ts(this,u,e,i,l,h,d,A,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const w=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);r=Ts(this,a,e,i,l,h,d,w,E,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,B=E;M<B;M+=3){const A=M,C=M+1,U=M+2;r=Ts(this,u,e,i,l,h,d,A,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const w=m,E=m+1,M=m+2;r=Ts(this,a,e,i,l,h,d,w,E,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yu(n,e,t,i,r,s,a,o){let c;if(e.side===Qt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===mi,o),c===null)return null;Es.copy(o),Es.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Es);return l<t.near||l>t.far?null:{distance:l,point:Es.clone(),object:n}}function Ts(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,bs),n.getVertexPosition(c,Ms),n.getVertexPosition(l,Ss);const h=yu(n,e,t,i,bs,Ms,Ss,Il);if(h){const d=new I;vn.getBarycoord(Il,bs,Ms,Ss,d),r&&(h.uv=vn.getInterpolatedAttribute(r,o,c,l,d,new lt)),s&&(h.uv1=vn.getInterpolatedAttribute(s,o,c,l,d,new lt)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};vn.getNormal(bs,Ms,Ss,f.normal),h.face=f,h.barycoord=d}return h}class gi extends kn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(v,m,u,w,E,M,B,A,C,U,b){const y=M/C,T=B/U,O=M/2,H=B/2,j=A/2,J=C+1,Y=U+1;let re=0,$=0;const ce=new I;for(let ge=0;ge<Y;ge++){const we=ge*T-H;for(let Ve=0;Ve<J;Ve++){const st=Ve*y-O;ce[v]=st*w,ce[m]=we*E,ce[u]=j,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[u]=A>0?1:-1,h.push(ce.x,ce.y,ce.z),d.push(Ve/C),d.push(1-ge/U),re+=1}}for(let ge=0;ge<U;ge++)for(let we=0;we<C;we++){const Ve=f+we+J*ge,st=f+we+J*(ge+1),K=f+(we+1)+J*(ge+1),oe=f+(we+1)+J*ge;c.push(Ve,st,oe),c.push(st,K,oe),$+=6}o.addGroup(p,$,b),p+=$,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function bu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Mu={clone:xr,merge:Vt};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ud extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,kl=new lt,Ul=new lt;class un extends ud{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Ul),t.subVectors(Ul,kl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class Eu extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(er,tr,e,t);r.layers=this.layers,this.add(r);const s=new un(er,tr,e,t);s.layers=this.layers,this.add(s);const a=new un(er,tr,e,t);a.layers=this.layers,this.add(a);const o=new un(er,tr,e,t);o.layers=this.layers,this.add(o);const c=new un(er,tr,e,t);c.layers=this.layers,this.add(c);const l=new un(er,tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fd extends qt{constructor(e,t,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tu extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gi(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:fi});s.uniforms.tEquirect.value=t;const a=new nt(r,s),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Rn),new Eu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Sa=new I,Au=new I,Cu=new je;class Ti{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sa.subVectors(i,t).cross(Au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cu.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new is,As=new I;class Xo{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],u=r[12],w=r[13],E=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-p,M-u).normalize(),i[1].setComponents(c+s,f+l,m+p,M+u).normalize(),i[2].setComponents(c+a,f+h,m+g,M+w).normalize(),i[3].setComponents(c-a,f-h,m-g,M-w).normalize(),i[4].setComponents(c-o,f-d,m-v,M-E).normalize(),t===jn)i[5].setComponents(c+o,f+d,m+v,M+E).normalize();else if(t===Hs)i[5].setComponents(o,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ru(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class qn extends kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=t/c,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const w=u*f-a;for(let E=0;E<l;E++){const M=E*d-s;g.push(M,-w,0),v.push(0,0,1),m.push(E/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){const E=w+l*u,M=w+l*(u+1),B=w+1+l*(u+1),A=w+1+l*u;p.push(E,M,A),p.push(M,B,A)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qu=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
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
#endif`,Rf=`struct PhysicalMaterial {
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
}`,Pf=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,jp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,em=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,nm=`#define TOON
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
}`,im=`#define TOON
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
}`,rm=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Pu,alphahash_pars_fragment:Lu,alphamap_fragment:Du,alphamap_pars_fragment:Iu,alphatest_fragment:ku,alphatest_pars_fragment:Uu,aomap_fragment:Fu,aomap_pars_fragment:Nu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Hu,bsdfs:Vu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:Ju,common:Qu,cube_uv_reflection_fragment:ef,defaultnormal_vertex:tf,displacementmap_pars_vertex:nf,displacementmap_vertex:rf,emissivemap_fragment:sf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:df,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Sf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:vf,lightmap_pars_fragment:xf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:bf,lights_pars_begin:Mf,lights_toon_fragment:wf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Cf,lights_physical_pars_fragment:Rf,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:Df,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Ff,map_fragment:Nf,map_pars_fragment:Of,map_particle_fragment:Bf,map_particle_pars_fragment:zf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:$f,morphtarget_vertex:qf,normal_fragment_begin:Yf,normal_fragment_maps:jf,normal_pars_fragment:Kf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:rp,packing:sp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:dp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:vp,skinnormal_vertex:xp,specularmap_fragment:yp,specularmap_pars_fragment:bp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:wp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:Cp,worldpos_vertex:Rp,background_vert:Pp,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Ip,cube_vert:kp,cube_frag:Up,depth_vert:Fp,depth_frag:Np,distanceRGBA_vert:Op,distanceRGBA_frag:Bp,equirect_vert:zp,equirect_frag:Hp,linedashed_vert:Vp,linedashed_frag:Gp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:$p,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:jp,meshnormal_vert:Kp,meshnormal_frag:Zp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:em,meshphysical_frag:tm,meshtoon_vert:nm,meshtoon_frag:im,points_vert:rm,points_frag:sm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},ue={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},An={basic:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([ue.points,ue.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([ue.common,ue.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([ue.sprite,ue.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vt([ue.lights,ue.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Cs={r:0,b:0,g:0},wi=new bn,dm=new xt;function hm(n,e,t,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,h,d=null,f=0,p=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function v(w){let E=!1;const M=g(w);M===null?u(o,c):M&&M.isColor&&(u(M,1),E=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===Ys)?(h===void 0&&(h=new nt(new gi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:xr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),wi.copy(E.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(wi)),h.material.toneMapped=rt.getTransfer(M.colorSpace)!==mt,(d!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new nt(new qn(2,2),new _i({name:"BackgroundMaterial",uniforms:xr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=rt.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,E){w.getRGB(Cs,hd(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:v,addToRenderList:m}}function um(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,T,O,H,j){let J=!1;const Y=d(H,O,T);s!==Y&&(s=Y,l(s.object)),J=p(y,H,O,j),J&&g(y,H,O,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(y,T,O,H),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,T,O){const H=O.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let J=j[T.id];J===void 0&&(J={},j[T.id]=J);let Y=J[H];return Y===void 0&&(Y=f(c()),J[H]=Y),Y}function f(y){const T=[],O=[],H=[];for(let j=0;j<t;j++)T[j]=0,O[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,T,O,H){const j=s.attributes,J=T.attributes;let Y=0;const re=O.getAttributes();for(const $ in re)if(re[$].location>=0){const ge=j[$];let we=J[$];if(we===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),ge===void 0||ge.attribute!==we||we&&ge.data!==we.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function g(y,T,O,H){const j={},J=T.attributes;let Y=0;const re=O.getAttributes();for(const $ in re)if(re[$].location>=0){let ge=J[$];ge===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const we={};we.attribute=ge,ge&&ge.data&&(we.data=ge.data),j[$]=we,Y++}s.attributes=j,s.attributesNum=Y,s.index=H}function v(){const y=s.newAttributes;for(let T=0,O=y.length;T<O;T++)y[T]=0}function m(y){u(y,0)}function u(y,T){const O=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;O[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),j[y]!==T&&(n.vertexAttribDivisor(y,T),j[y]=T)}function w(){const y=s.newAttributes,T=s.enabledAttributes;for(let O=0,H=T.length;O<H;O++)T[O]!==y[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function E(y,T,O,H,j,J,Y){Y===!0?n.vertexAttribIPointer(y,T,O,j,J):n.vertexAttribPointer(y,T,O,H,j,J)}function M(y,T,O,H){v();const j=H.attributes,J=O.getAttributes(),Y=T.defaultAttributeValues;for(const re in J){const $=J[re];if($.location>=0){let ce=j[re];if(ce===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const ge=ce.normalized,we=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;const st=Ve.buffer,K=Ve.type,oe=Ve.bytesPerElement,Ee=K===n.INT||K===n.UNSIGNED_INT||ce.gpuType===Fo;if(ce.isInterleavedBufferAttribute){const V=ce.data,Z=V.stride,be=ce.offset;if(V.isInstancedInterleavedBuffer){for(let Ge=0;Ge<$.locationSize;Ge++)u($.location+Ge,V.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ge=0;Ge<$.locationSize;Ge++)m($.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ge=0;Ge<$.locationSize;Ge++)E($.location+Ge,we/$.locationSize,K,ge,Z*oe,(be+we/$.locationSize*Ge)*oe,Ee)}else{if(ce.isInstancedBufferAttribute){for(let V=0;V<$.locationSize;V++)u($.location+V,ce.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let V=0;V<$.locationSize;V++)m($.location+V);n.bindBuffer(n.ARRAY_BUFFER,st);for(let V=0;V<$.locationSize;V++)E($.location+V,we/$.locationSize,K,ge,we*oe,we/$.locationSize*V*oe,Ee)}}else if(Y!==void 0){const ge=Y[re];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv($.location,ge);break;case 3:n.vertexAttrib3fv($.location,ge);break;case 4:n.vertexAttrib4fv($.location,ge);break;default:n.vertexAttrib1fv($.location,ge)}}}}w()}function B(){U();for(const y in i){const T=i[y];for(const O in T){const H=T[O];for(const j in H)h(H[j].object),delete H[j];delete T[O]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const O in T){const H=T[O];for(const j in H)h(H[j].object),delete H[j];delete T[O]}delete i[y.id]}function C(y){for(const T in i){const O=i[T];if(O[y.id]===void 0)continue;const H=O[y.id];for(const j in H)h(H[j].object),delete H[j];delete O[y.id]}}function U(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function fm(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function c(l,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function pm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!U)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:B,maxSamples:A}}function mm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const w=s?0:i,E=w*4;let M=u.clippingState||null;c.value=M,M=h(g,f,E,p);for(let B=0;B!==E;++B)M[B]=t[B];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const u=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,M=p;E!==v;++E,M+=4)a.copy(d[E]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gm(n){let e=new WeakMap;function t(a,o){return o===ja?a.mapping=mr:o===Ka&&(a.mapping=gr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ja||o===Ka)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Tu(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class md extends ud{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,Fl=[.125,.215,.35,.446,.526,.582],Ri=20,wa=new md,Nl=new Qe;let Ea=null,Ta=0,Aa=0,Ca=!1;const Ai=(1+Math.sqrt(5))/2,nr=1/Ai,Ol=[new I(-Ai,nr,0),new I(Ai,nr,0),new I(-nr,0,Ai),new I(nr,0,Ai),new I(0,Ai,-nr),new I(0,Ai,nr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ta,Aa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ns,format:xn,colorSpace:Mr,depthBuffer:!1},r=zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=vm(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,r){const o=new un(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Nl),h.toneMapping=pi,h.autoClear=!1;const p=new Zt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new nt(new gi,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Nl),v=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):w===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const E=this._cubeSize;Rs(r,w*E,u>2?E:0,E,E),h.setRenderTarget(r),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mr||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ol[(r-s-1)%Ol.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new nt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const u=[];let w=0;for(let C=0;C<Ri;++C){const U=C/v,b=Math.exp(-U*U/2);u.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const M=this._sizeLods[r],B=3*M*(r>E-lr?r-E+lr:0),A=4*(this._cubeSize-M);Rs(t,B,A,3*M,2*M),c.setRenderTarget(t),c.render(d,wa)}}function _m(n){const e=[],t=[],i=[];let r=n;const s=n-lr+1+Fl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-lr?c=Fl[a-n+lr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,u=1,w=new Float32Array(v*g*p),E=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,U=A>2?0:-1,b=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];w.set(b,v*g*A),E.set(f,m*g*A);const y=[A,A,A,A,A,A];M.set(y,u*g*A)}const B=new kn;B.setAttribute("position",new yn(w,v)),B.setAttribute("uv",new yn(E,m)),B.setAttribute("faceIndex",new yn(M,u)),e.push(B),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zl(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=Ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vm(n,e,t){const i=new Float32Array(Ri),r=new I(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$o(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Hl(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Vl(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function xm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ja||c===Ka,h=c===mr||c===gr;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Bl(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Bl(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ym(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bm(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let E=0,M=w.length;E<M;E+=3){const B=w[E+0],A=w[E+1],C=w[E+2];f.push(B,A,A,C,C,B)}}else if(g!==void 0){const w=g.array;v=g.version;for(let E=0,M=w.length/3-1;E<M;E+=3){const B=E+0,A=E+1,C=E+2;f.push(B,A,A,C,C,B)}}else return;const m=new(rd(f)?dd:cd)(f,1);m.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Mm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function d(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let u=0;for(let w=0;w<g;w++)u+=p[w]*v[w];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Sm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wm(n,e,t){const i=new WeakMap,r=new St;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let B=o.attributes.position.count*M,A=1;B>e.maxTextureSize&&(A=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const C=new Float32Array(B*A*4*d),U=new ad(C,B,A,d);U.type=Pn,U.needsUpdate=!0;const b=M*4;for(let T=0;T<d;T++){const O=u[T],H=w[T],j=E[T],J=B*A*4*T;for(let Y=0;Y<O.count;Y++){const re=Y*b;g===!0&&(r.fromBufferAttribute(O,Y),C[J+re+0]=r.x,C[J+re+1]=r.y,C[J+re+2]=r.z,C[J+re+3]=0),v===!0&&(r.fromBufferAttribute(H,Y),C[J+re+4]=r.x,C[J+re+5]=r.y,C[J+re+6]=r.z,C[J+re+7]=0),m===!0&&(r.fromBufferAttribute(j,Y),C[J+re+8]=r.x,C[J+re+9]=r.y,C[J+re+10]=r.z,C[J+re+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new lt(B,A)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Em(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class gd extends qt{constructor(e,t,i,r,s,a,o,c,l,h=hr){if(h!==hr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hr&&(i=Ii),i===void 0&&h===vr&&(i=_r),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _d=new qt,Gl=new gd(1,1),vd=new ad,xd=new du,yd=new fd,Wl=[],Xl=[],$l=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ks(n,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Pm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Yl.set(i),n.uniformMatrix2fv(this.addr,!1,Yl),Ct(t,i)}}function Lm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),Ct(t,i)}}function Dm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),Ct(t,i)}}function Im(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Nm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Hm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gl.compareFunction=id,s=Gl):s=_d,t.setTexture2D(e||s,r)}function Vm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xd,r)}function Gm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yd,r)}function Wm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vd,r)}function Xm(n){switch(n){case 5126:return Tm;case 35664:return Am;case 35665:return Cm;case 35666:return Rm;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return km;case 35668:case 35672:return Um;case 35669:case 35673:return Fm;case 5125:return Nm;case 36294:return Om;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}function $m(n,e){n.uniform1fv(this.addr,e)}function qm(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ym(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function jm(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Km(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zm(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jm(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qm(n,e){n.uniform1iv(this.addr,e)}function eg(n,e){n.uniform2iv(this.addr,e)}function tg(n,e){n.uniform3iv(this.addr,e)}function ng(n,e){n.uniform4iv(this.addr,e)}function ig(n,e){n.uniform1uiv(this.addr,e)}function rg(n,e){n.uniform2uiv(this.addr,e)}function sg(n,e){n.uniform3uiv(this.addr,e)}function ag(n,e){n.uniform4uiv(this.addr,e)}function og(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||_d,s[a])}function lg(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||xd,s[a])}function cg(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||yd,s[a])}function dg(n,e,t){const i=this.cache,r=e.length,s=Ks(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vd,s[a])}function hg(n){switch(n){case 5126:return $m;case 35664:return qm;case 35665:return Ym;case 35666:return jm;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return dg}}class ug{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xm(t.type)}}class fg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function jl(n,e){n.seq.push(e),n.map[e.id]=e}function mg(n,e,t){const i=n.name,r=i.length;for(Ra.lastIndex=0;;){const s=Ra.exec(i),a=Ra.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jl(t,l===void 0?new ug(o,n,e):new fg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new pg(o),jl(t,d)),t=d}}}class zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);mg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Kl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gg=37297;let _g=0;function vg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Zl=new je;function xg(n){rt._getMatrix(Zl,rt.workingColorSpace,n);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case js:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vg(n.getShaderSource(e),a)}else return r}function yg(n,e){const t=xg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bg(n,e){let t;switch(e){case Sh:t="Linear";break;case wh:t="Reinhard";break;case Eh:t="Cineon";break;case Xc:t="ACESFilmic";break;case Ah:t="AgX";break;case Ch:t="Neutral";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new I;function Mg(){rt.getLuminanceCoefficients(Ps);const n=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function wg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Eg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wr(n){return n!==""}function Ql(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(n){return n.replace(Tg,Cg)}const Ag=new Map;function Cg(n,e){let t=Ke[e];if(t===void 0){const i=Ag.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return To(t)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(Rg,Pg)}function Pg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Lg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function kg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uo:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Ug(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Fg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Lg(t),l=Dg(t),h=Ig(t),d=kg(t),f=Ug(t),p=Sg(t),g=wg(s),v=r.createProgram();let m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),u.length>0&&(u+=`
`)):(m=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),u=[nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==pi?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=To(a),a=Ql(a,t),a=ec(a,t),o=To(o),o=Ql(o,t),o=ec(o,t),a=tc(a),o=tc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=w+m+a,M=w+u+o,B=Kl(r,r.VERTEX_SHADER,E),A=Kl(r,r.FRAGMENT_SHADER,M);r.attachShader(v,B),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(T){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(B).trim(),j=r.getShaderInfoLog(A).trim();let J=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,B,A);else{const re=Jl(r,B,"vertex"),$=Jl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+re+`
`+$)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||j==="")&&(Y=!1);Y&&(T.diagnostics={runnable:J,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(B),r.deleteShader(A),U=new zs(r,v),b=Eg(r,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,gg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=A,this}let Ng=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Bg(e),t.set(e,i)),i}}class Bg{constructor(e){this.id=Ng++,this.code=e,this.usedTimes=0}}function zg(n,e,t,i,r,s,a){const o=new Wo,c=new Og,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,y,T,O,H){const j=O.fog,J=H.geometry,Y=b.isMeshStandardMaterial?O.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),$=re&&re.mapping===Ys?re.image.height:null,ce=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,we=ge!==void 0?ge.length:0;let Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let st,K,oe,Ee;if(ce){const et=An[ce];st=et.vertexShader,K=et.fragmentShader}else st=b.vertexShader,K=b.fragmentShader,c.update(b),oe=c.getVertexShaderID(b),Ee=c.getFragmentShaderID(b);const V=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),be=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,Oe=!!b.map,ze=!!b.matcap,Re=!!re,L=!!b.aoMap,Le=!!b.lightMap,_e=!!b.bumpMap,We=!!b.normalMap,Fe=!!b.displacementMap,ct=!!b.emissiveMap,Ne=!!b.metalnessMap,S=!!b.roughnessMap,_=b.anisotropy>0,z=b.clearcoat>0,te=b.dispersion>0,ie=b.iridescence>0,Q=b.sheen>0,Ce=b.transmission>0,fe=_&&!!b.anisotropyMap,ve=z&&!!b.clearcoatMap,Je=z&&!!b.clearcoatNormalMap,le=z&&!!b.clearcoatRoughnessMap,xe=ie&&!!b.iridescenceMap,Be=ie&&!!b.iridescenceThicknessMap,He=Q&&!!b.sheenColorMap,ye=Q&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,qe=!!b.specularColorMap,ut=!!b.specularIntensityMap,D=Ce&&!!b.transmissionMap,he=Ce&&!!b.thicknessMap,q=!!b.gradientMap,ee=!!b.alphaMap,pe=b.alphaTest>0,me=!!b.alphaHash,$e=!!b.extensions;let yt=pi;b.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Mt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:st,fragmentShader:K,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:be,instancingColor:be&&H.instanceColor!==null,instancingMorph:be&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Mr,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:ze,envMap:Re,envMapMode:Re&&re.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:Le,bumpMap:_e,normalMap:We,displacementMap:f&&Fe,emissiveMap:ct,normalMapObjectSpace:We&&b.normalMapType===Dh,normalMapTangentSpace:We&&b.normalMapType===nd,metalnessMap:Ne,roughnessMap:S,anisotropy:_,anisotropyMap:fe,clearcoat:z,clearcoatMap:ve,clearcoatNormalMap:Je,clearcoatRoughnessMap:le,dispersion:te,iridescence:ie,iridescenceMap:xe,iridescenceThicknessMap:Be,sheen:Q,sheenColorMap:He,sheenRoughnessMap:ye,specularMap:Ze,specularColorMap:qe,specularIntensityMap:ut,transmission:Ce,transmissionMap:D,thicknessMap:he,gradientMap:q,opaque:b.transparent===!1&&b.blending===dr&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:me,combine:b.combine,mapUv:Oe&&v(b.map.channel),aoMapUv:L&&v(b.aoMap.channel),lightMapUv:Le&&v(b.lightMap.channel),bumpMapUv:_e&&v(b.bumpMap.channel),normalMapUv:We&&v(b.normalMap.channel),displacementMapUv:Fe&&v(b.displacementMap.channel),emissiveMapUv:ct&&v(b.emissiveMap.channel),metalnessMapUv:Ne&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:ve&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(b.sheenRoughnessMap.channel),specularMapUv:Ze&&v(b.specularMap.channel),specularColorMapUv:qe&&v(b.specularColorMap.channel),specularIntensityMapUv:ut&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:he&&v(b.thicknessMap.channel),alphaMapUv:ee&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(We||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Oe||ee),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Z,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:ct&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const T in b.defines)y.push(T),y.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(w(y,b),E(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function E(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const y=g[b.type];let T;if(y){const O=An[y];T=Mu.clone(O.uniforms)}else T=b.uniforms;return T}function B(b,y){let T;for(let O=0,H=h.length;O<H;O++){const j=h[O];if(j.cacheKey===y){T=j,++T.usedTimes;break}}return T===void 0&&(T=new Fg(n,y,b,s),h.push(T)),T}function A(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:B,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function Hg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Vg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,p,g,v,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,f,p,g,v,m){const u=a(d,f,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(d,f,p,g,v,m){const u=a(d,f,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Vg),i.length>1&&i.sort(f||ic),r.length>1&&r.sort(f||ic)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Gg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new rc,n.set(i,[a])):r>=s.length?(a=new rc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Qe};break;case"SpotLight":t={position:new I,direction:new I,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Xg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $g=0;function qg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yg(n){const e=new Wg,t=Xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new xt,a=new xt;function o(l){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,w=0,E=0,M=0,B=0,A=0,C=0;l.sort(qg);for(let b=0,y=l.length;b<y;b++){const T=l[b],O=T.color,H=T.intensity,j=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*H,d+=O.g*H,f+=O.b*H;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(T.sh.coefficients[Y],H);C++}else if(T.isDirectionalLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const re=T.shadow,$=t.get(T);$.shadowIntensity=re.intensity,$.shadowBias=re.bias,$.shadowNormalBias=re.normalBias,$.shadowRadius=re.radius,$.shadowMapSize=re.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=T.shadow.matrix,w++}i.directional[p]=Y,p++}else if(T.isSpotLight){const Y=e.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(O).multiplyScalar(H),Y.distance=j,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,i.spot[v]=Y;const re=T.shadow;if(T.map&&(i.spotLightMap[B]=T.map,B++,re.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[v]=re.matrix,T.castShadow){const $=t.get(T);$.shadowIntensity=re.intensity,$.shadowBias=re.bias,$.shadowNormalBias=re.normalBias,$.shadowRadius=re.radius,$.shadowMapSize=re.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=J,M++}v++}else if(T.isRectAreaLight){const Y=e.get(T);Y.color.copy(O).multiplyScalar(H),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=Y,m++}else if(T.isPointLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const re=T.shadow,$=t.get(T);$.shadowIntensity=re.intensity,$.shadowBias=re.bias,$.shadowNormalBias=re.normalBias,$.shadowRadius=re.radius,$.shadowMapSize=re.mapSize,$.shadowCameraNear=re.camera.near,$.shadowCameraFar=re.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=T.shadow.matrix,E++}i.point[g]=Y,g++}else if(T.isHemisphereLight){const Y=e.get(T);Y.skyColor.copy(T.color).multiplyScalar(H),Y.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[u]=Y,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==M||U.numSpotMaps!==B||U.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+B-A,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=M,U.numSpotMaps=B,U.numLightProbes=C,i.version=$g++)}function c(l,h){let d=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const E=l[u];if(E.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(E.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function sc(n){const e=new Yg(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function jg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sc(n),e.set(r,[o])):s>=a.length?(o=new sc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Kg extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zg extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function e0(n,e,t){let i=new Xo;const r=new lt,s=new lt,a=new St,o=new Kg({depthPacking:Lh}),c=new Zg,l={},h=t.maxTextureSize,d={[mi]:Qt,[Qt]:mi,[$n]:$n},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let u=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=u!==Wn&&this.type===Wn,j=u===Wn&&this.type!==Wn;for(let J=0,Y=A.length;J<Y;J++){const re=A[J],$=re.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ce=$.getFrameExtents();if(r.multiply(ce),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ce.x),r.x=s.x*ce.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ce.y),r.y=s.y*ce.y,$.mapSize.y=s.y)),$.map===null||H===!0||j===!0){const we=this.type!==Wn?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new ki(r.x,r.y,we),$.map.texture.name=re.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ge=$.getViewportCount();for(let we=0;we<ge;we++){const Ve=$.getViewport(we);a.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),O.viewport(a),$.updateMatrices(re,we),i=$.getFrustum(),M(C,U,$.camera,re,this.type)}$.isPointLightShadow!==!0&&this.type===Wn&&w($,U),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,T)};function w(A,C){const U=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ki(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,U,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,U,p,v,null)}function E(A,C,U,b){let y=null;const T=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=U.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=y.uuid,H=C.uuid;let j=l[O];j===void 0&&(j={},l[O]=j);let J=j[H];J===void 0&&(J=y.clone(),j[H]=J,C.addEventListener("dispose",B)),y=J}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=U}return y}function M(A,C,U,b,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const H=e.update(A),j=A.material;if(Array.isArray(j)){const J=H.groups;for(let Y=0,re=J.length;Y<re;Y++){const $=J[Y],ce=j[$.materialIndex];if(ce&&ce.visible){const ge=E(A,ce,b,y);A.onBeforeShadow(n,A,C,U,H,ge,$),n.renderBufferDirect(U,null,H,ge,A,$),A.onAfterShadow(n,A,C,U,H,ge,$)}}}else if(j.visible){const J=E(A,j,b,y);A.onBeforeShadow(n,A,C,U,H,J,null),n.renderBufferDirect(U,null,H,J,A,null),A.onAfterShadow(n,A,C,U,H,J,null)}}const O=A.children;for(let H=0,j=O.length;H<j;H++)M(O[H],C,U,b,y)}function B(A){A.target.removeEventListener("dispose",B);for(const U in l){const b=l[U],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const t0={[Va]:Ga,[Wa]:qa,[Xa]:Ya,[pr]:$a,[Ga]:Va,[qa]:Wa,[Ya]:Xa,[$a]:pr};function n0(n,e){function t(){let D=!1;const he=new St;let q=null;const ee=new St(0,0,0,0);return{setMask:function(pe){q!==pe&&!D&&(n.colorMask(pe,pe,pe,pe),q=pe)},setLocked:function(pe){D=pe},setClear:function(pe,me,$e,yt,Mt){Mt===!0&&(pe*=yt,me*=yt,$e*=yt),he.set(pe,me,$e,yt),ee.equals(he)===!1&&(n.clearColor(pe,me,$e,yt),ee.copy(he))},reset:function(){D=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let D=!1,he=!1,q=null,ee=null,pe=null;return{setReversed:function(me){if(he!==me){const $e=e.get("EXT_clip_control");he?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const yt=pe;pe=null,this.setClear(yt)}he=me},getReversed:function(){return he},setTest:function(me){me?V(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(me){q!==me&&!D&&(n.depthMask(me),q=me)},setFunc:function(me){if(he&&(me=t0[me]),ee!==me){switch(me){case Va:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=me}},setLocked:function(me){D=me},setClear:function(me){pe!==me&&(he&&(me=1-me),n.clearDepth(me),pe=me)},reset:function(){D=!1,q=null,ee=null,pe=null,he=!1}}}function r(){let D=!1,he=null,q=null,ee=null,pe=null,me=null,$e=null,yt=null,Mt=null;return{setTest:function(et){D||(et?V(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(et){he!==et&&!D&&(n.stencilMask(et),he=et)},setFunc:function(et,Dt,on){(q!==et||ee!==Dt||pe!==on)&&(n.stencilFunc(et,Dt,on),q=et,ee=Dt,pe=on)},setOp:function(et,Dt,on){(me!==et||$e!==Dt||yt!==on)&&(n.stencilOp(et,Dt,on),me=et,$e=Dt,yt=on)},setLocked:function(et){D=et},setClear:function(et){Mt!==et&&(n.clearStencil(et),Mt=et)},reset:function(){D=!1,he=null,q=null,ee=null,pe=null,me=null,$e=null,yt=null,Mt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,E=null,M=null,B=null,A=null,C=new Qe(0,0,0),U=0,b=!1,y=null,T=null,O=null,H=null,j=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=re>=1):$.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=re>=2);let ce=null,ge={};const we=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),st=new St().fromArray(we),K=new St().fromArray(Ve);function oe(D,he,q,ee){const pe=new Uint8Array(4),me=n.createTexture();n.bindTexture(D,me),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<q;$e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(he+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return me}const Ee={};Ee[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(n.DEPTH_TEST),a.setFunc(pr),_e(!1),We(ol),V(n.CULL_FACE),L(fi);function V(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Z(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function be(D,he){return d[D]!==he?(n.bindFramebuffer(D,he),d[D]=he,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Ge(D,he){let q=p,ee=!1;if(D){q=f.get(he),q===void 0&&(q=[],f.set(he,q));const pe=D.textures;if(q.length!==pe.length||q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,$e=pe.length;me<$e;me++)q[me]=n.COLOR_ATTACHMENT0+me;q.length=pe.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function Oe(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const ze={[Ci]:n.FUNC_ADD,[rh]:n.FUNC_SUBTRACT,[sh]:n.FUNC_REVERSE_SUBTRACT};ze[ah]=n.MIN,ze[oh]=n.MAX;const Re={[lh]:n.ZERO,[ch]:n.ONE,[dh]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[gh]:n.SRC_ALPHA_SATURATE,[ph]:n.DST_COLOR,[uh]:n.DST_ALPHA,[hh]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[mh]:n.ONE_MINUS_DST_COLOR,[fh]:n.ONE_MINUS_DST_ALPHA,[_h]:n.CONSTANT_COLOR,[vh]:n.ONE_MINUS_CONSTANT_COLOR,[xh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,q,ee,pe,me,$e,yt,Mt,et){if(D===fi){v===!0&&(Z(n.BLEND),v=!1);return}if(v===!1&&(V(n.BLEND),v=!0),D!==ih){if(D!==m||et!==b){if((u!==Ci||M!==Ci)&&(n.blendEquation(n.FUNC_ADD),u=Ci,M=Ci),et)switch(D){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ll:n.blendFunc(n.ONE,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ll:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,B=null,A=null,C.set(0,0,0),U=0,m=D,b=et}return}pe=pe||he,me=me||q,$e=$e||ee,(he!==u||pe!==M)&&(n.blendEquationSeparate(ze[he],ze[pe]),u=he,M=pe),(q!==w||ee!==E||me!==B||$e!==A)&&(n.blendFuncSeparate(Re[q],Re[ee],Re[me],Re[$e]),w=q,E=ee,B=me,A=$e),(yt.equals(C)===!1||Mt!==U)&&(n.blendColor(yt.r,yt.g,yt.b,Mt),C.copy(yt),U=Mt),m=D,b=!1}function Le(D,he){D.side===$n?Z(n.CULL_FACE):V(n.CULL_FACE);let q=D.side===Qt;he&&(q=!q),_e(q),D.blending===dr&&D.transparent===!1?L(fi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ee=D.stencilWrite;o.setTest(ee),ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function We(D){D!==eh?(V(n.CULL_FACE),D!==T&&(D===ol?n.cullFace(n.BACK):D===th?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),T=D}function Fe(D){D!==O&&(Y&&n.lineWidth(D),O=D)}function ct(D,he,q){D?(V(n.POLYGON_OFFSET_FILL),(H!==he||j!==q)&&(n.polygonOffset(he,q),H=he,j=q)):Z(n.POLYGON_OFFSET_FILL)}function Ne(D){D?V(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function S(D){D===void 0&&(D=n.TEXTURE0+J-1),ce!==D&&(n.activeTexture(D),ce=D)}function _(D,he,q){q===void 0&&(ce===null?q=n.TEXTURE0+J-1:q=ce);let ee=ge[q];ee===void 0&&(ee={type:void 0,texture:void 0},ge[q]=ee),(ee.type!==D||ee.texture!==he)&&(ce!==q&&(n.activeTexture(q),ce=q),n.bindTexture(D,he||Ee[D]),ee.type=D,ee.texture=he)}function z(){const D=ge[ce];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(D){st.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function ye(D){K.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Ze(D,he){let q=l.get(he);q===void 0&&(q=new WeakMap,l.set(he,q));let ee=q.get(D);ee===void 0&&(ee=n.getUniformBlockIndex(he,D.name),q.set(D,ee))}function qe(D,he){const ee=l.get(he).get(D);c.get(he)!==ee&&(n.uniformBlockBinding(he,ee,D.__bindingPointIndex),c.set(he,ee))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ge={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,E=null,M=null,B=null,A=null,C=new Qe(0,0,0),U=0,b=!1,y=null,T=null,O=null,H=null,j=null,st.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:V,disable:Z,bindFramebuffer:be,drawBuffers:Ge,useProgram:Oe,setBlending:L,setMaterial:Le,setFlipSided:_e,setCullFace:We,setLineWidth:Fe,setPolygonOffset:ct,setScissorTest:Ne,activeTexture:S,bindTexture:_,unbindTexture:z,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Be,updateUBOMapping:Ze,uniformBlockBinding:qe,texStorage2D:Je,texStorage3D:le,texSubImage2D:Q,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:He,viewport:ye,reset:ut}}function ac(n,e,t,i){const r=i0(i);switch(t){case Kc:return n*e;case Jc:return n*e;case Qc:return n*e*2;case Bo:return n*e/r.components*r.byteLength;case zo:return n*e/r.components*r.byteLength;case ed:return n*e*2/r.components*r.byteLength;case Ho:return n*e*2/r.components*r.byteLength;case Zc:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case Vo:return n*e*4/r.components*r.byteLength;case Us:case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:case no:return Math.max(n,16)*Math.max(e,8)/4;case Qa:case to:return Math.max(n,8)*Math.max(e,8)/2;case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bs:case bo:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case td:case So:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wo:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i0(n){switch(n){case Jn:case qc:return{byteLength:1,components:1};case Jr:case Yc:case ns:return{byteLength:2,components:1};case No:case Oo:return{byteLength:2,components:4};case Ii:case Fo:case Pn:return{byteLength:4,components:1};case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function r0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Vs("canvas")}function v(S,_,z){let te=1;const ie=Ne(S);if((ie.width>z||ie.height>z)&&(te=z/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Q=Math.floor(te*ie.width),Ce=Math.floor(te*ie.height);d===void 0&&(d=g(Q,Ce));const fe=_?g(Q,Ce):d;return fe.width=Q,fe.height=Ce,fe.getContext("2d").drawImage(S,0,0,Q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Ce+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),S;return S}function m(S){return S.generateMipmaps}function u(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(S,_,z,te,ie=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=_;if(_===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),_===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),_===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),_===n.RGBA){const Ce=ie?js:rt.getTransfer(te);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=Ce===mt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(S,_){let z;return S?_===null||_===Ii||_===_r?z=n.DEPTH24_STENCIL8:_===Pn?z=n.DEPTH32F_STENCIL8:_===Jr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ii||_===_r?z=n.DEPTH_COMPONENT24:_===Pn?z=n.DEPTH_COMPONENT32F:_===Jr&&(z=n.DEPTH_COMPONENT16),z}function B(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==sn&&S.minFilter!==Rn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){const _=S.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),y(_)}function U(S){const _=i.get(S);if(_.__webglInit===void 0)return;const z=S.source,te=f.get(z);if(te){const ie=te[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(S),Object.keys(te).length===0&&f.delete(z)}i.remove(S)}function b(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const z=S.source,te=f.get(z);delete te[_.__cacheKey],a.memory.textures--}function y(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(_.__webglFramebuffer[te]))for(let ie=0;ie<_.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(_.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(_.__webglFramebuffer[te]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[te])}else{if(Array.isArray(_.__webglFramebuffer))for(let te=0;te<_.__webglFramebuffer.length;te++)n.deleteFramebuffer(_.__webglFramebuffer[te]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let te=0;te<_.__webglColorRenderbuffer.length;te++)_.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[te]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=S.textures;for(let te=0,ie=z.length;te<ie;te++){const Q=i.get(z[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(z[te])}i.remove(S)}let T=0;function O(){T=0}function H(){const S=T;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),T+=1,S}function j(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function J(S,_){const z=i.get(S);if(S.isVideoTexture&&Fe(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){const te=S.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,S,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function Y(S,_){const z=i.get(S);if(S.version>0&&z.__version!==S.version){K(z,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function re(S,_){const z=i.get(S);if(S.version>0&&z.__version!==S.version){K(z,S,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function $(S,_){const z=i.get(S);if(S.version>0&&z.__version!==S.version){oe(z,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}const ce={[Za]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},ge={[sn]:n.NEAREST,[Rh]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},we={[Ih]:n.NEVER,[Bh]:n.ALWAYS,[kh]:n.LESS,[id]:n.LEQUAL,[Uh]:n.EQUAL,[Oh]:n.GEQUAL,[Fh]:n.GREATER,[Nh]:n.NOTEQUAL};function Ve(S,_){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Rn||_.magFilter===ia||_.magFilter===ds||_.magFilter===Di||_.minFilter===Rn||_.minFilter===ia||_.minFilter===ds||_.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ce[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ce[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ce[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==ds&&_.minFilter!==Di||_.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function st(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",A));const te=_.source;let ie=f.get(te);ie===void 0&&(ie={},f.set(te,ie));const Q=j(_);if(Q!==S.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[Q].usedTimes++;const Ce=ie[S.__cacheKey];Ce!==void 0&&(ie[S.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(_)),S.__cacheKey=Q,S.__webglTexture=ie[Q].texture}return z}function K(S,_,z){let te=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(te=n.TEXTURE_3D);const ie=st(S,_),Q=_.source;t.bindTexture(te,S.__webglTexture,n.TEXTURE0+z);const Ce=i.get(Q);if(Q.version!==Ce.__version||ie===!0){t.activeTexture(n.TEXTURE0+z);const fe=rt.getPrimaries(rt.workingColorSpace),ve=_.colorSpace===hi?null:rt.getPrimaries(_.colorSpace),Je=_.colorSpace===hi||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let le=v(_.image,!1,r.maxTextureSize);le=ct(_,le);const xe=s.convert(_.format,_.colorSpace),Be=s.convert(_.type);let He=E(_.internalFormat,xe,Be,_.colorSpace,_.isVideoTexture);Ve(te,_);let ye;const Ze=_.mipmaps,qe=_.isVideoTexture!==!0,ut=Ce.__version===void 0||ie===!0,D=Q.dataReady,he=B(_,le);if(_.isDepthTexture)He=M(_.format===vr,_.type),ut&&(qe?t.texStorage2D(n.TEXTURE_2D,1,He,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,He,le.width,le.height,0,xe,Be,null));else if(_.isDataTexture)if(Ze.length>0){qe&&ut&&t.texStorage2D(n.TEXTURE_2D,he,He,Ze[0].width,Ze[0].height);for(let q=0,ee=Ze.length;q<ee;q++)ye=Ze[q],qe?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,xe,Be,ye.data):t.texImage2D(n.TEXTURE_2D,q,He,ye.width,ye.height,0,xe,Be,ye.data);_.generateMipmaps=!1}else qe?(ut&&t.texStorage2D(n.TEXTURE_2D,he,He,le.width,le.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,xe,Be,le.data)):t.texImage2D(n.TEXTURE_2D,0,He,le.width,le.height,0,xe,Be,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,He,Ze[0].width,Ze[0].height,le.depth);for(let q=0,ee=Ze.length;q<ee;q++)if(ye=Ze[q],_.format!==xn)if(xe!==null)if(qe){if(D)if(_.layerUpdates.size>0){const pe=ac(ye.width,ye.height,_.format,_.type);for(const me of _.layerUpdates){const $e=ye.data.subarray(me*pe/ye.data.BYTES_PER_ELEMENT,(me+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,me,ye.width,ye.height,1,xe,$e)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,le.depth,xe,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,He,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,le.depth,xe,Be,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,He,ye.width,ye.height,le.depth,0,xe,Be,ye.data)}else{qe&&ut&&t.texStorage2D(n.TEXTURE_2D,he,He,Ze[0].width,Ze[0].height);for(let q=0,ee=Ze.length;q<ee;q++)ye=Ze[q],_.format!==xn?xe!==null?qe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,q,He,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye.width,ye.height,xe,Be,ye.data):t.texImage2D(n.TEXTURE_2D,q,He,ye.width,ye.height,0,xe,Be,ye.data)}else if(_.isDataArrayTexture)if(qe){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,He,le.width,le.height,le.depth),D)if(_.layerUpdates.size>0){const q=ac(le.width,le.height,_.format,_.type);for(const ee of _.layerUpdates){const pe=le.data.subarray(ee*q/le.data.BYTES_PER_ELEMENT,(ee+1)*q/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,xe,Be,pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Be,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,le.width,le.height,le.depth,0,xe,Be,le.data);else if(_.isData3DTexture)qe?(ut&&t.texStorage3D(n.TEXTURE_3D,he,He,le.width,le.height,le.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Be,le.data)):t.texImage3D(n.TEXTURE_3D,0,He,le.width,le.height,le.depth,0,xe,Be,le.data);else if(_.isFramebufferTexture){if(ut)if(qe)t.texStorage2D(n.TEXTURE_2D,he,He,le.width,le.height);else{let q=le.width,ee=le.height;for(let pe=0;pe<he;pe++)t.texImage2D(n.TEXTURE_2D,pe,He,q,ee,0,xe,Be,null),q>>=1,ee>>=1}}else if(Ze.length>0){if(qe&&ut){const q=Ne(Ze[0]);t.texStorage2D(n.TEXTURE_2D,he,He,q.width,q.height)}for(let q=0,ee=Ze.length;q<ee;q++)ye=Ze[q],qe?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe,Be,ye):t.texImage2D(n.TEXTURE_2D,q,He,xe,Be,ye);_.generateMipmaps=!1}else if(qe){if(ut){const q=Ne(le);t.texStorage2D(n.TEXTURE_2D,he,He,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Be,le)}else t.texImage2D(n.TEXTURE_2D,0,He,xe,Be,le);m(_)&&u(te),Ce.__version=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function oe(S,_,z){if(_.image.length!==6)return;const te=st(S,_),ie=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+z);const Q=i.get(ie);if(ie.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const Ce=rt.getPrimaries(rt.workingColorSpace),fe=_.colorSpace===hi?null:rt.getPrimaries(_.colorSpace),ve=_.colorSpace===hi||Ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Je=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!Je&&!le?xe[ee]=v(_.image[ee],!0,r.maxCubemapSize):xe[ee]=le?_.image[ee].image:_.image[ee],xe[ee]=ct(_,xe[ee]);const Be=xe[0],He=s.convert(_.format,_.colorSpace),ye=s.convert(_.type),Ze=E(_.internalFormat,He,ye,_.colorSpace),qe=_.isVideoTexture!==!0,ut=Q.__version===void 0||te===!0,D=ie.dataReady;let he=B(_,Be);Ve(n.TEXTURE_CUBE_MAP,_);let q;if(Je){qe&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ze,Be.width,Be.height);for(let ee=0;ee<6;ee++){q=xe[ee].mipmaps;for(let pe=0;pe<q.length;pe++){const me=q[pe];_.format!==xn?He!==null?qe?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,me.width,me.height,He,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ze,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,me.width,me.height,He,ye,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ze,me.width,me.height,0,He,ye,me.data)}}}else{if(q=_.mipmaps,qe&&ut){q.length>0&&he++;const ee=Ne(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){qe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,He,ye,xe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,xe[ee].width,xe[ee].height,0,He,ye,xe[ee].data);for(let pe=0;pe<q.length;pe++){const $e=q[pe].image[ee].image;qe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,$e.width,$e.height,He,ye,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ze,$e.width,$e.height,0,He,ye,$e.data)}}else{qe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,He,ye,xe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,He,ye,xe[ee]);for(let pe=0;pe<q.length;pe++){const me=q[pe];qe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,He,ye,me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ze,He,ye,me.image[ee])}}}m(_)&&u(n.TEXTURE_CUBE_MAP),Q.__version=ie.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ee(S,_,z,te,ie,Q){const Ce=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),ve=E(z.internalFormat,Ce,fe,z.colorSpace),Je=i.get(_),le=i.get(z);if(le.__renderTarget=_,!Je.__hasExternalTextures){const xe=Math.max(1,_.width>>Q),Be=Math.max(1,_.height>>Q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,ve,xe,Be,_.depth,0,Ce,fe,null):t.texImage2D(ie,Q,ve,xe,Be,0,Ce,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ie,le.__webglTexture,0,_e(_)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ie,le.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(S,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const te=_.depthTexture,ie=te&&te.isDepthTexture?te.type:null,Q=M(_.stencilBuffer,ie),Ce=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=_e(_);We(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Q,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,S)}else{const te=_.textures;for(let ie=0;ie<te.length;ie++){const Q=te[ie],Ce=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),ve=E(Q.internalFormat,Ce,fe,Q.colorSpace),Je=_e(_);z&&We(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ve,_.width,_.height):We(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,ve,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ve,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(_.depthTexture);te.__renderTarget=_,(!te.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const ie=te.__webglTexture,Q=_e(_);if(_.depthTexture.format===hr)We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(_.depthTexture.format===vr)We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function be(S){const _=i.get(S),z=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const te=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),te){const ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=te}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Z(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[te]),_.__webglDepthbuffer[te]===void 0)_.__webglDepthbuffer[te]=n.createRenderbuffer(),V(_.__webglDepthbuffer[te],S,!1);else{const ie=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),V(_.__webglDepthbuffer,S,!1);else{const te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(S,_,z){const te=i.get(S);_!==void 0&&Ee(te.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&be(S)}function Oe(S){const _=S.texture,z=i.get(S),te=i.get(_);S.addEventListener("dispose",C);const ie=S.textures,Q=S.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=_.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let ve=0;ve<_.mipmaps.length;ve++)z.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let fe=0,ve=ie.length;fe<ve;fe++){const Je=i.get(ie[fe]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&We(S)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ve=ie[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Je=s.convert(ve.format,ve.colorSpace),le=s.convert(ve.type),xe=E(ve.internalFormat,Je,le,ve.colorSpace,S.isXRRenderTarget===!0),Be=_e(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),V(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Ee(z.__webglFramebuffer[fe][ve],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Ee(z.__webglFramebuffer[fe],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,ve=ie.length;fe<ve;fe++){const Je=ie[fe],le=i.get(Je);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ve(n.TEXTURE_2D,Je),Ee(z.__webglFramebuffer,S,Je,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Je)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),Ve(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Ee(z.__webglFramebuffer[ve],S,_,n.COLOR_ATTACHMENT0,fe,ve);else Ee(z.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&u(fe),t.unbindTexture()}S.depthBuffer&&be(S)}function ze(S){const _=S.textures;for(let z=0,te=_.length;z<te;z++){const ie=_[z];if(m(ie)){const Q=w(S),Ce=i.get(ie).__webglTexture;t.bindTexture(Q,Ce),u(Q),t.unbindTexture()}}}const Re=[],L=[];function Le(S){if(S.samples>0){if(We(S)===!1){const _=S.textures,z=S.width,te=S.height;let ie=n.COLOR_BUFFER_BIT;const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(S),fe=_.length>1;if(fe)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Je=i.get(_[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,z,te,0,0,z,te,ie,n.NEAREST),c===!0&&(Re.length=0,L.length=0,Re.push(n.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Re.push(Q),L.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const Je=i.get(_[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function _e(S){return Math.min(r.maxSamples,S.samples)}function We(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Fe(S){const _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ct(S,_){const z=S.colorSpace,te=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||z!==Mr&&z!==hi&&(rt.getTransfer(z)===mt?(te!==xn||ie!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Ne(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=$,this.rebindTextures=Ge,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=We}function s0(n,e){function t(i,r=hi){let s;const a=rt.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qc)return n.BYTE;if(i===Yc)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===Kc)return n.ALPHA;if(i===Zc)return n.RGB;if(i===xn)return n.RGBA;if(i===Jc)return n.LUMINANCE;if(i===Qc)return n.LUMINANCE_ALPHA;if(i===hr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===Bo)return n.RED;if(i===zo)return n.RED_INTEGER;if(i===ed)return n.RG;if(i===Ho)return n.RG_INTEGER;if(i===Vo)return n.RGBA_INTEGER;if(i===Us||i===Fs||i===Ns||i===Os)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===eo||i===to||i===no)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===io||i===ro||i===so)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===io||i===ro)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===so)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ao)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===co)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ho)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===po)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===go)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_o)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bs||i===bo||i===Mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bs)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===td||i===So||i===wo||i===Eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class a0 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o0={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const l0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _i({vertexShader:l0,fragmentShader:c0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends Sr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null;const v=new d0,m=t.getContextAttributes();let u=null,w=null;const E=[],M=[],B=new lt;let A=null;const C=new un;C.viewport=new St;const U=new un;U.viewport=new St;const b=[C,U],y=new a0;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=E[K];return oe===void 0&&(oe=new Pa,E[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=E[K];return oe===void 0&&(oe=new Pa,E[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=E[K];return oe===void 0&&(oe=new Pa,E[K]=oe),oe.getHandSpace()};function H(K){const oe=M.indexOf(K.inputSource);if(oe===-1)return;const Ee=E[oe];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,l||a),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let K=0;K<E.length;K++){const oe=M[K];oe!==null&&(M[K]=null,E[K].disconnect(oe))}T=null,O=null,v.reset(),e.setRenderTarget(u),p=null,f=null,d=null,r=null,w=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ki(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,Ee=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?vr:hr,Ee=m.stencil?_r:Ii);const Z={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ki(f.textureWidth,f.textureHeight,{format:xn,type:Jn,depthTexture:new gd(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(K){for(let oe=0;oe<K.removed.length;oe++){const Ee=K.removed[oe],V=M.indexOf(Ee);V>=0&&(M[V]=null,E[V].disconnect(Ee))}for(let oe=0;oe<K.added.length;oe++){const Ee=K.added[oe];let V=M.indexOf(Ee);if(V===-1){for(let be=0;be<E.length;be++)if(be>=M.length){M.push(Ee),V=be;break}else if(M[be]===null){M[be]=Ee,V=be;break}if(V===-1)break}const Z=E[V];Z&&Z.connect(Ee)}}const Y=new I,re=new I;function $(K,oe,Ee){Y.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(Ee.matrixWorld);const V=Y.distanceTo(re),Z=oe.projectionMatrix.elements,be=Ee.projectionMatrix.elements,Ge=Z[14]/(Z[10]-1),Oe=Z[14]/(Z[10]+1),ze=(Z[9]+1)/Z[5],Re=(Z[9]-1)/Z[5],L=(Z[8]-1)/Z[0],Le=(be[8]+1)/be[0],_e=Ge*L,We=Ge*Le,Fe=V/(-L+Le),ct=Fe*-L;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Z[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ne=Ge+Fe,S=Oe+Fe,_=_e-ct,z=We+(V-ct),te=ze*Oe/S*Ne,ie=Re*Oe/S*Ne;K.projectionMatrix.makePerspective(_,z,te,ie,Ne,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let oe=K.near,Ee=K.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),y.near=U.near=C.near=oe,y.far=U.far=C.far=Ee,(T!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,O=y.far),C.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,y.layers.mask=C.layers.mask|U.layers.mask;const V=K.parent,Z=y.cameras;ce(y,V);for(let be=0;be<Z.length;be++)ce(Z[be],V);Z.length===2?$(y,C,U):y.projectionMatrix.copy(C.projectionMatrix),ge(K,y,V)};function ge(K,oe,Ee){Ee===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let we=null;function Ve(K,oe){if(h=oe.getViewerPose(l||a),g=oe,h!==null){const Ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let V=!1;Ee.length!==y.cameras.length&&(y.cameras.length=0,V=!0);for(let be=0;be<Ee.length;be++){const Ge=Ee[be];let Oe=null;if(p!==null)Oe=p.getViewport(Ge);else{const Re=d.getViewSubImage(f,Ge);Oe=Re.viewport,be===0&&(e.setRenderTargetTextures(w,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(w))}let ze=b[be];ze===void 0&&(ze=new un,ze.layers.enable(be),ze.viewport=new St,b[be]=ze),ze.matrix.fromArray(Ge.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ge.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),be===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),V===!0&&y.cameras.push(ze)}const Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const be=d.getDepthInformation(Ee[0]);be&&be.isValid&&be.texture&&v.init(e,be,r.renderState)}}for(let Ee=0;Ee<E.length;Ee++){const V=M[Ee],Z=E[Ee];V!==null&&Z!==void 0&&Z.update(V,oe,l||a)}we&&we(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const st=new pd;st.setAnimationLoop(Ve),this.setAnimationLoop=function(K){we=K},this.dispose=function(){}}}const Ei=new bn,u0=new xt;function f0(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,hd(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,w,E,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,w,E):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=e.get(u),E=w.envMap,M=w.envMapRotation;E&&(m.envMap.value=E,Ei.copy(M),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Ei)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const M=E.program;i.uniformBlockBinding(w,M)}function l(w,E){let M=r[w.id];M===void 0&&(g(w),M=h(w),r[w.id]=M,w.addEventListener("dispose",m));const B=E.program;i.updateUBOMapping(w,B);const A=e.render.frame;s[w.id]!==A&&(f(w),s[w.id]=A)}function h(w){const E=d();w.__bindingPointIndex=E;const M=n.createBuffer(),B=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,B,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=r[w.id],M=w.uniforms,B=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,C=M.length;A<C;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,y=U.length;b<y;b++){const T=U[b];if(p(T,A,b,B)===!0){const O=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let j=0;for(let J=0;J<H.length;J++){const Y=H[J],re=v(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+j,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,j),j+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,M,B){const A=w.value,C=E+"_"+M;if(B[C]===void 0)return typeof A=="number"||typeof A=="boolean"?B[C]=A:B[C]=A.clone(),!0;{const U=B[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return B[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(w){const E=w.uniforms;let M=0;const B=16;for(let C=0,U=E.length;C<U;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,T=b.length;y<T;y++){const O=b[y],H=Array.isArray(O.value)?O.value:[O.value];for(let j=0,J=H.length;j<J;j++){const Y=H[j],re=v(Y),$=M%B,ce=$%re.boundary,ge=$+ce;M+=ce,ge!==0&&B-ge<re.storage&&(M+=B-ge),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=re.storage}}}const A=M%B;return A>0&&(M+=B-A),w.__size=M,w.__cache={},this}function v(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class m0{constructor(e={}){const{canvas:t=nu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=pi,this.toneMappingExposure=1;const M=this;let B=!1,A=0,C=0,U=null,b=-1,y=null;const T=new St,O=new St;let H=null;const j=new Qe(0);let J=0,Y=t.width,re=t.height,$=1,ce=null,ge=null;const we=new St(0,0,Y,re),Ve=new St(0,0,Y,re);let st=!1;const K=new Xo;let oe=!1,Ee=!1;const V=new xt,Z=new xt,be=new I,Ge=new St,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Re(){return U===null?$:1}let L=i;function Le(x,k){return t.getContext(x,k)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ko}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const k="webgl2";if(L=Le(k,x),L===null)throw Le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,We,Fe,ct,Ne,S,_,z,te,ie,Q,Ce,fe,ve,Je,le,xe,Be,He,ye,Ze,qe,ut,D;function he(){_e=new ym(L),_e.init(),qe=new s0(L,_e),We=new pm(L,_e,e,qe),Fe=new n0(L,_e),We.reverseDepthBuffer&&f&&Fe.buffers.depth.setReversed(!0),ct=new Sm(L),Ne=new Hg,S=new r0(L,_e,Fe,Ne,We,qe,ct),_=new gm(M),z=new xm(M),te=new Ru(L),ut=new um(L,te),ie=new bm(L,te,ct,ut),Q=new Em(L,ie,te,ct),He=new wm(L,We,S),le=new mm(Ne),Ce=new zg(M,_,z,_e,We,ut,le),fe=new f0(M,Ne),ve=new Gg,Je=new jg(_e),Be=new hm(M,_,z,Fe,Q,p,c),xe=new e0(M,Q,We),D=new p0(L,ct,We,Fe),ye=new fm(L,_e,ct),Ze=new Mm(L,_e,ct),ct.programs=Ce.programs,M.capabilities=We,M.extensions=_e,M.properties=Ne,M.renderLists=ve,M.shadowMap=xe,M.state=Fe,M.info=ct}he();const q=new h0(M,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(Y,re,!1))},this.getSize=function(x){return x.set(Y,re)},this.setSize=function(x,k,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,re=k,t.width=Math.floor(x*$),t.height=Math.floor(k*$),G===!0&&(t.style.width=x+"px",t.style.height=k+"px"),this.setViewport(0,0,x,k)},this.getDrawingBufferSize=function(x){return x.set(Y*$,re*$).floor()},this.setDrawingBufferSize=function(x,k,G){Y=x,re=k,$=G,t.width=Math.floor(x*G),t.height=Math.floor(k*G),this.setViewport(0,0,x,k)},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,k,G,W){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,k,G,W),Fe.viewport(T.copy(we).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,k,G,W){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,k,G,W),Fe.scissor(O.copy(Ve).multiplyScalar($).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(x){Fe.setScissorTest(st=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){ge=x},this.getClearColor=function(x){return x.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(x=!0,k=!0,G=!0){let W=0;if(x){let F=!1;if(U!==null){const ae=U.texture.format;F=ae===Vo||ae===Ho||ae===zo}if(F){const ae=U.texture.type,de=ae===Jn||ae===Ii||ae===Jr||ae===_r||ae===No||ae===Oo,Me=Be.getClearColor(),Se=Be.getClearAlpha(),Xe=Me.r,Ye=Me.g,Te=Me.b;de?(g[0]=Xe,g[1]=Ye,g[2]=Te,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Xe,v[1]=Ye,v[2]=Te,v[3]=Se,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}k&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),Je.dispose(),Ne.dispose(),_.dispose(),z.dispose(),Q.dispose(),ut.dispose(),D.dispose(),Ce.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ar),q.removeEventListener("sessionend",Cr),Sn.stop()};function ee(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const x=ct.autoReset,k=xe.enabled,G=xe.autoUpdate,W=xe.needsUpdate,F=xe.type;he(),ct.autoReset=x,xe.enabled=k,xe.autoUpdate=G,xe.needsUpdate=W,xe.type=F}function me(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $e(x){const k=x.target;k.removeEventListener("dispose",$e),yt(k)}function yt(x){Mt(x),Ne.remove(x)}function Mt(x){const k=Ne.get(x).programs;k!==void 0&&(k.forEach(function(G){Ce.releaseProgram(G)}),x.isShaderMaterial&&Ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,k,G,W,F,ae){k===null&&(k=Oe);const de=F.isMesh&&F.matrixWorld.determinant()<0,Me=zi(x,k,G,W,F);Fe.setMaterial(W,de);let Se=G.index,Xe=1;if(W.wireframe===!0){if(Se=ie.getWireframeAttribute(G),Se===void 0)return;Xe=2}const Ye=G.drawRange,Te=G.attributes.position;let tt=Ye.start*Xe,ft=(Ye.start+Ye.count)*Xe;ae!==null&&(tt=Math.max(tt,ae.start*Xe),ft=Math.min(ft,(ae.start+ae.count)*Xe)),Se!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Se.count)):Te!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Te.count));const _t=ft-tt;if(_t<0||_t===1/0)return;ut.setup(F,W,Me,G,Se);let Ft,at=ye;if(Se!==null&&(Ft=te.get(Se),at=Ze,at.setIndex(Ft)),F.isMesh)W.wireframe===!0?(Fe.setLineWidth(W.wireframeLinewidth*Re()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(F.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),Fe.setLineWidth(Pe*Re()),F.isLineSegments?at.setMode(L.LINES):F.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else F.isPoints?at.setMode(L.POINTS):F.isSprite&&at.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,fn=F._multiDrawCounts,ot=F._multiDrawCount,en=Se?te.get(Se).bytesPerElement:1,ti=Ne.get(W).currentProgram.getUniforms();for(let It=0;It<ot;It++)ti.setValue(L,"_gl_DrawID",It),at.render(Pe[It]/en,fn[It])}else if(F.isInstancedMesh)at.renderInstances(tt,_t,F.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fn=Math.min(G.instanceCount,Pe);at.renderInstances(tt,_t,fn)}else at.render(tt,_t)};function et(x,k,G){x.transparent===!0&&x.side===$n&&x.forceSinglePass===!1?(x.side=Qt,x.needsUpdate=!0,vi(x,k,G),x.side=mi,x.needsUpdate=!0,vi(x,k,G),x.side=$n):vi(x,k,G)}this.compile=function(x,k,G=null){G===null&&(G=x),u=Je.get(G),u.init(k),E.push(u),G.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),x!==G&&x.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const W=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const Me=ae[de];et(Me,G,F),W.add(Me)}else et(ae,G,F),W.add(ae)}),E.pop(),u=null,W},this.compileAsync=function(x,k,G=null){const W=this.compile(x,k,G);return new Promise(F=>{function ae(){if(W.forEach(function(de){Ne.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){F(x);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Dt=null;function on(x){Dt&&Dt(x)}function Ar(){Sn.stop()}function Cr(){Sn.start()}const Sn=new pd;Sn.setAnimationLoop(on),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(x){Dt=x,q.setAnimationLoop(x),x===null?Sn.stop():Sn.start()},q.addEventListener("sessionstart",Ar),q.addEventListener("sessionend",Cr),this.render=function(x,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,k,U),u=Je.get(x,E.length),u.init(k),E.push(u),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Z),Ee=this.localClippingEnabled,oe=le.init(this.clippingPlanes,Ee),m=ve.get(x,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){const ae=M.xr.getDepthSensingMesh();ae!==null&&Qn(ae,k,-1/0,M.sortObjects)}Qn(x,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ce,ge),ze=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ze&&Be.addToRenderList(m,x),this.info.render.frame++,oe===!0&&le.beginShadows();const G=u.state.shadowsArray;xe.render(G,x,k),oe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(u.setupLights(),k.isArrayCamera){const ae=k.cameras;if(F.length>0)for(let de=0,Me=ae.length;de<Me;de++){const Se=ae[de];Pr(W,F,x,Se)}ze&&Be.render(x);for(let de=0,Me=ae.length;de<Me;de++){const Se=ae[de];Rr(m,x,Se,Se.viewport)}}else F.length>0&&Pr(W,F,x,k),ze&&Be.render(x),Rr(m,x,k);U!==null&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(M,x,k),ut.resetDefaultState(),b=-1,y=null,E.pop(),E.length>0?(u=E[E.length-1],oe===!0&&le.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Qn(x,k,G,W){if(x.visible===!1)return;if(x.layers.test(k.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(k);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||K.intersectsSprite(x)){W&&Ge.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);const de=Q.update(x),Me=x.material;Me.visible&&m.push(x,de,Me,G,Ge.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||K.intersectsObject(x))){const de=Q.update(x),Me=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ge.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ge.copy(de.boundingSphere.center)),Ge.applyMatrix4(x.matrixWorld).applyMatrix4(Z)),Array.isArray(Me)){const Se=de.groups;for(let Xe=0,Ye=Se.length;Xe<Ye;Xe++){const Te=Se[Xe],tt=Me[Te.materialIndex];tt&&tt.visible&&m.push(x,de,tt,G,Ge.z,Te)}}else Me.visible&&m.push(x,de,Me,G,Ge.z,null)}}const ae=x.children;for(let de=0,Me=ae.length;de<Me;de++)Qn(ae[de],k,G,W)}function Rr(x,k,G,W){const F=x.opaque,ae=x.transmissive,de=x.transparent;u.setupLightsView(G),oe===!0&&le.setGlobalState(M.clippingPlanes,G),W&&Fe.viewport(T.copy(W)),F.length>0&&ei(F,k,G),ae.length>0&&ei(ae,k,G),de.length>0&&ei(de,k,G),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Pr(x,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new ki(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?ns:Jn,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ae=u.state.transmissionRenderTarget[W.id],de=W.viewport||T;ae.setSize(de.z,de.w);const Me=M.getRenderTarget();M.setRenderTarget(ae),M.getClearColor(j),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Be.render(G);const Se=M.toneMapping;M.toneMapping=pi;const Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),oe===!0&&le.setGlobalState(M.clippingPlanes,W),ei(x,G,W),S.updateMultisampleRenderTarget(ae),S.updateRenderTargetMipmap(ae),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Te=0,tt=k.length;Te<tt;Te++){const ft=k[Te],_t=ft.object,Ft=ft.geometry,at=ft.material,Pe=ft.group;if(at.side===$n&&_t.layers.test(W.layers)){const fn=at.side;at.side=Qt,at.needsUpdate=!0,Lr(_t,G,W,Ft,at,Pe),at.side=fn,at.needsUpdate=!0,Ye=!0}}Ye===!0&&(S.updateMultisampleRenderTarget(ae),S.updateRenderTargetMipmap(ae))}M.setRenderTarget(Me),M.setClearColor(j,J),Xe!==void 0&&(W.viewport=Xe),M.toneMapping=Se}function ei(x,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let F=0,ae=x.length;F<ae;F++){const de=x[F],Me=de.object,Se=de.geometry,Xe=W===null?de.material:W,Ye=de.group;Me.layers.test(G.layers)&&Lr(Me,k,G,Se,Xe,Ye)}}function Lr(x,k,G,W,F,ae){x.onBeforeRender(M,k,G,W,F,ae),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(M,k,G,W,x,ae),F.transparent===!0&&F.side===$n&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,M.renderBufferDirect(G,k,W,F,x,ae),F.side=mi,F.needsUpdate=!0,M.renderBufferDirect(G,k,W,F,x,ae),F.side=$n):M.renderBufferDirect(G,k,W,F,x,ae),x.onAfterRender(M,k,G,W,F,ae)}function vi(x,k,G){k.isScene!==!0&&(k=Oe);const W=Ne.get(x),F=u.state.lights,ae=u.state.shadowsArray,de=F.state.version,Me=Ce.getParameters(x,F.state,ae,k,G),Se=Ce.getProgramCacheKey(Me);let Xe=W.programs;W.environment=x.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(x.isMeshStandardMaterial?z:_).get(x.envMap||W.environment),W.envMapRotation=W.environment!==null&&x.envMap===null?k.environmentRotation:x.envMapRotation,Xe===void 0&&(x.addEventListener("dispose",$e),Xe=new Map,W.programs=Xe);let Ye=Xe.get(Se);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===de)return Dr(x,Me),Ye}else Me.uniforms=Ce.getUniforms(x),x.onBeforeCompile(Me,M),Ye=Ce.acquireProgram(Me,Se),Xe.set(Se,Ye),W.uniforms=Me.uniforms;const Te=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=le.uniform),Dr(x,Me),W.needsLights=na(x),W.lightsStateVersion=de,W.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ye,W.uniformsList=null,Ye}function Fn(x){if(x.uniformsList===null){const k=x.currentProgram.getUniforms();x.uniformsList=zs.seqWithValue(k.seq,x.uniforms)}return x.uniformsList}function Dr(x,k){const G=Ne.get(x);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function zi(x,k,G,W,F){k.isScene!==!0&&(k=Oe),S.resetTextureUnits();const ae=k.fog,de=W.isMeshStandardMaterial?k.environment:null,Me=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Mr,Se=(W.isMeshStandardMaterial?z:_).get(W.envMap||de),Xe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ye=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color;let _t=pi;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_t=M.toneMapping);const Ft=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,at=Ft!==void 0?Ft.length:0,Pe=Ne.get(W),fn=u.state.lights;if(oe===!0&&(Ee===!0||x!==y)){const jt=x===y&&W.id===b;le.setState(W,x,jt)}let ot=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==fn.state.version||Pe.outputColorSpace!==Me||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Se||W.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==Ye||Pe.morphTargets!==Te||Pe.morphNormals!==tt||Pe.morphColors!==ft||Pe.toneMapping!==_t||Pe.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Pe.__version=W.version);let en=Pe.currentProgram;ot===!0&&(en=vi(W,k,F));let ti=!1,It=!1,ni=!1;const pt=en.getUniforms(),ln=Pe.uniforms;if(Fe.useProgram(en.program)&&(ti=!0,It=!0,ni=!0),W.id!==b&&(b=W.id,It=!0),ti||y!==x){Fe.buffers.depth.getReversed()?(V.copy(x.projectionMatrix),ru(V),su(V),pt.setValue(L,"projectionMatrix",V)):pt.setValue(L,"projectionMatrix",x.projectionMatrix),pt.setValue(L,"viewMatrix",x.matrixWorldInverse);const En=pt.map.cameraPosition;En!==void 0&&En.setValue(L,be.setFromMatrixPosition(x.matrixWorld)),We.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,It=!0,ni=!0)}if(F.isSkinnedMesh){pt.setOptional(L,F,"bindMatrix"),pt.setOptional(L,F,"bindMatrixInverse");const jt=F.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),pt.setValue(L,"boneTexture",jt.boneTexture,S))}F.isBatchedMesh&&(pt.setOptional(L,F,"batchingTexture"),pt.setValue(L,"batchingTexture",F._matricesTexture,S),pt.setOptional(L,F,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",F._indirectTexture,S),pt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",F._colorsTexture,S));const wn=G.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&He.update(F,G,en),(It||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,pt.setValue(L,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ln.envMap.value=Se,ln.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(ln.envMapIntensity.value=k.environmentIntensity),It&&(pt.setValue(L,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&Nn(ln,ni),ae&&W.fog===!0&&fe.refreshFogUniforms(ln,ae),fe.refreshMaterialUniforms(ln,W,$,re,u.state.transmissionRenderTarget[x.id]),zs.upload(L,Fn(Pe),ln,S)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zs.upload(L,Fn(Pe),ln,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(L,"center",F.center),pt.setValue(L,"modelViewMatrix",F.modelViewMatrix),pt.setValue(L,"normalMatrix",F.normalMatrix),pt.setValue(L,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jt=W.uniformsGroups;for(let En=0,Tn=jt.length;En<Tn;En++){const cs=jt[En];D.update(cs,en),D.bind(cs,en)}}return en}function Nn(x,k){x.ambientLightColor.needsUpdate=k,x.lightProbe.needsUpdate=k,x.directionalLights.needsUpdate=k,x.directionalLightShadows.needsUpdate=k,x.pointLights.needsUpdate=k,x.pointLightShadows.needsUpdate=k,x.spotLights.needsUpdate=k,x.spotLightShadows.needsUpdate=k,x.rectAreaLights.needsUpdate=k,x.hemisphereLights.needsUpdate=k}function na(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,k,G){Ne.get(x.texture).__webglTexture=k,Ne.get(x.depthTexture).__webglTexture=G;const W=Ne.get(x);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,k){const G=Ne.get(x);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(x,k=0,G=0){U=x,A=k,C=G;let W=!0,F=null,ae=!1,de=!1;if(x){const Se=Ne.get(x);if(Se.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)S.setupRenderTarget(x);else if(Se.__hasExternalTextures)S.rebindTextures(x,Ne.get(x.texture).__webglTexture,Ne.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Te=x.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Ne.has(Te)&&(x.width!==Te.image.width||x.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(x)}}const Xe=x.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(de=!0);const Ye=Ne.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?F=Ye[k][G]:F=Ye[k],ae=!0):x.samples>0&&S.useMultisampledRTT(x)===!1?F=Ne.get(x).__webglMultisampledFramebuffer:Array.isArray(Ye)?F=Ye[G]:F=Ye,T.copy(x.viewport),O.copy(x.scissor),H=x.scissorTest}else T.copy(we).multiplyScalar($).floor(),O.copy(Ve).multiplyScalar($).floor(),H=st;if(Fe.bindFramebuffer(L.FRAMEBUFFER,F)&&W&&Fe.drawBuffers(x,F),Fe.viewport(T),Fe.scissor(O),Fe.setScissorTest(H),ae){const Se=Ne.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,G)}else if(de){const Se=Ne.get(x.texture),Xe=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Xe)}b=-1},this.readRenderTargetPixels=function(x,k,G,W,F,ae,de){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Fe.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Se=x.texture,Xe=Se.format,Ye=Se.type;if(!We.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=x.width-W&&G>=0&&G<=x.height-F&&L.readPixels(k,G,W,F,qe.convert(Xe),qe.convert(Ye),ae)}finally{const Se=U!==null?Ne.get(U).__webglFramebuffer:null;Fe.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(x,k,G,W,F,ae,de){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ne.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){const Se=x.texture,Xe=Se.format,Ye=Se.type;if(!We.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=x.width-W&&G>=0&&G<=x.height-F){Fe.bindFramebuffer(L.FRAMEBUFFER,Me);const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(k,G,W,F,qe.convert(Xe),qe.convert(Ye),0);const tt=U!==null?Ne.get(U).__webglFramebuffer:null;Fe.bindFramebuffer(L.FRAMEBUFFER,tt);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await iu(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Te),L.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,k=null,G=0){x.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(x.image.width*W),ae=Math.floor(x.image.height*W),de=k!==null?k.x:0,Me=k!==null?k.y:0;S.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,de,Me,F,ae),Fe.unbindTexture()},this.copyTextureToTexture=function(x,k,G=null,W=null,F=0){x.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,x=arguments[1],k=arguments[2],F=arguments[3]||0,G=null);let ae,de,Me,Se,Xe,Ye,Te,tt,ft;const _t=x.isCompressedTexture?x.mipmaps[F]:x.image;G!==null?(ae=G.max.x-G.min.x,de=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Se=G.min.x,Xe=G.min.y,Ye=G.isBox3?G.min.z:0):(ae=_t.width,de=_t.height,Me=_t.depth||1,Se=0,Xe=0,Ye=0),W!==null?(Te=W.x,tt=W.y,ft=W.z):(Te=0,tt=0,ft=0);const Ft=qe.convert(k.format),at=qe.convert(k.type);let Pe;k.isData3DTexture?(S.setTexture3D(k,0),Pe=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),Pe=L.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),Pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const fn=L.getParameter(L.UNPACK_ROW_LENGTH),ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),en=L.getParameter(L.UNPACK_SKIP_PIXELS),ti=L.getParameter(L.UNPACK_SKIP_ROWS),It=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye);const ni=x.isDataArrayTexture||x.isData3DTexture,pt=k.isDataArrayTexture||k.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const ln=Ne.get(x),wn=Ne.get(k),jt=Ne.get(ln.__renderTarget),En=Ne.get(wn.__renderTarget);Fe.bindFramebuffer(L.READ_FRAMEBUFFER,jt.__webglFramebuffer),Fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Tn=0;Tn<Me;Tn++)ni&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(x).__webglTexture,F,Ye+Tn),x.isDepthTexture?(pt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(k).__webglTexture,F,ft+Tn),L.blitFramebuffer(Se,Xe,ae,de,Te,tt,ae,de,L.DEPTH_BUFFER_BIT,L.NEAREST)):pt?L.copyTexSubImage3D(Pe,F,Te,tt,ft+Tn,Se,Xe,ae,de):L.copyTexSubImage2D(Pe,F,Te,tt,ft+Tn,Se,Xe,ae,de);Fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(Pe,F,Te,tt,ft,ae,de,Me,Ft,at,_t.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,F,Te,tt,ft,ae,de,Me,Ft,_t.data):L.texSubImage3D(Pe,F,Te,tt,ft,ae,de,Me,Ft,at,_t):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Te,tt,ae,de,Ft,at,_t.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Te,tt,_t.width,_t.height,Ft,_t.data):L.texSubImage2D(L.TEXTURE_2D,F,Te,tt,ae,de,Ft,at,_t);L.pixelStorei(L.UNPACK_ROW_LENGTH,fn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,en),L.pixelStorei(L.UNPACK_SKIP_ROWS,ti),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It),F===0&&k.generateMipmaps&&L.generateMipmap(Pe),Fe.unbindTexture()},this.copyTextureToTexture3D=function(x,k,G=null,W=null,F=0){return x.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,x=arguments[2],k=arguments[3],F=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,k,G,W,F)},this.initRenderTarget=function(x){Ne.get(x).__webglFramebuffer===void 0&&S.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),Fe.unbindTexture()},this.resetState=function(){A=0,C=0,U=null,Fe.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class g0 extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _0 extends qt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=sn,h=sn,d,f){super(null,a,o,c,l,h,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oc extends yn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new xt,lc=new xt,Ls=[],cc=new Fi,v0=new xt,Br=new nt,zr=new is;class x0 extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,v0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),cc.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(cc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),zr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ir),lc.multiplyMatrices(i,ir),Br.matrixWorld=lc,Br.raycast(e,Ls);for(let a=0,o=Ls.length;a<o;a++){const c=Ls[a];c.instanceId=s,c.object=this,t.push(c)}Ls.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _0(new Float32Array(r*this.count),r,this.count,Bo,Pn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ui extends kn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let g=0;const v=[],m=i/2;let u=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(p,2));function w(){const M=new I,B=new I;let A=0;const C=(t-e)/i;for(let U=0;U<=s;U++){const b=[],y=U/s,T=y*(t-e)+e;for(let O=0;O<=r;O++){const H=O/r,j=H*c+o,J=Math.sin(j),Y=Math.cos(j);B.x=T*J,B.y=-y*i+m,B.z=T*Y,d.push(B.x,B.y,B.z),M.set(J,C,Y).normalize(),f.push(M.x,M.y,M.z),p.push(H,1-y),b.push(g++)}v.push(b)}for(let U=0;U<r;U++)for(let b=0;b<s;b++){const y=v[b][U],T=v[b+1][U],O=v[b+1][U+1],H=v[b][U+1];(e>0||b!==0)&&(h.push(y,T,H),A+=3),(t>0||b!==s-1)&&(h.push(T,O,H),A+=3)}l.addGroup(u,A,0),u+=A}function E(M){const B=g,A=new lt,C=new I;let U=0;const b=M===!0?e:t,y=M===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const T=g;for(let O=0;O<=r;O++){const j=O/r*c+o,J=Math.cos(j),Y=Math.sin(j);C.x=b*Y,C.y=m*y,C.z=b*J,d.push(C.x,C.y,C.z),f.push(0,y,0),A.x=J*.5+.5,A.y=Y*.5*y+.5,p.push(A.x,A.y),g++}for(let O=0;O<r;O++){const H=B+O,j=T+O;M===!0?h.push(j,j+1,H):h.push(j+1,j,H),U+=3}l.addGroup(u,U,M===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends ui{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new jr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kr extends kn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new I,f=new I,p=[],g=[],v=[],m=[];for(let u=0;u<=i;u++){const w=[],E=u/i;let M=0;u===0&&a===0?M=.5/t:u===i&&c===Math.PI&&(M=-.5/t);for(let B=0;B<=t;B++){const A=B/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(A+M,1-E),w.push(l++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<t;w++){const E=h[u][w+1],M=h[u][w],B=h[u+1][w],A=h[u+1][w+1];(u!==0||a>0)&&p.push(E,M,A),(u!==i-1||c<Math.PI)&&p.push(M,B,A)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pi extends kn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new I,d=new I,f=new I;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,w=(r+1)*p+g;a.push(v,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bt extends rs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class y0 extends bd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const La=new xt,dc=new I,hc=new I;class b0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xo,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class M0 extends b0{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uc extends bd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new M0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fc=new xt;class S0{constructor(e,t,i=0,r=1/0){this.ray=new od(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(e,t=!0,i=[]){return Ao(e,this,i,t),i.sort(pc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ao(e[r],this,i,t);return i.sort(pc),i}}function pc(n,e){return n.distance-e.distance}function Ao(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ao(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);let w0=!1;function E0(){return w0}function T0(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function A0(n,e={}){const t=E0(),i=new m0({canvas:n,antialias:!t,alpha:!1,powerPreference:"high-performance"});i.setClearColor("#17233F"),i.outputColorSpace=rn,i.toneMapping=Xc,i.toneMappingExposure=1.1;const r=new g0;r.background=new Qe("#17233F");const s=new un(38,9/16,.1,200);function a(){const o=n.parentElement;if(!o)return;const c=o.clientWidth,l=o.clientHeight;c===0||l===0||(i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(c,l,!1),s.aspect=c/l,s.updateProjectionMatrix())}return{renderer:i,scene:r,camera:s,resize:a}}function C0(n){const e=Xn.degToRad(35),t=Xn.degToRad(22),i=27,r=new I(0,0,0);function s(){const o=new I(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)).normalize();n.position.copy(r).addScaledVector(o,i),n.lookAt(r)}s();const a=6;return{panBy(o,c){r.x=Xn.clamp(r.x+o,-a,a),r.z=Xn.clamp(r.z+c,-a,a),s()},setPan(o,c){r.x=Xn.clamp(o,-a,a),r.z=Xn.clamp(c,-a,a),s()},update(){}}}const R={inkNavy:"#17233F",moonBlue:"#5B79C8",plum:"#6D3E78",parchment:"#F4E7C7",sealingRed:"#C74B55",brass:"#D6A84B",routeMint:"#72D6C1"},mc=new Er,gc=new I,_c=new I;class R0{mesh;dummy=new Pt;actives;colors;constructor(e,t,i){this.mesh=new x0(t,i,e),this.mesh.instanceMatrix.setUsage(fl),this.mesh.frustumCulled=!1,this.actives=new Array(e).fill(!1),this.colors=[];for(let r=0;r<e;r++)this.colors.push(new Qe("#F4E7C7")),this.mesh.setColorAt(r,this.colors[r]);this.mesh.instanceColor&&this.mesh.instanceColor.setUsage(fl);for(let r=0;r<e;r++)this.place(r,-999,-999,-999,1,1,1,0,0,0)}place(e,t,i,r,s,a,o,c,l,h){mc.setFromEuler(new bn(c,l,h)),gc.set(t,i,r),_c.set(s,a,o),this.dummy.position.copy(gc),this.dummy.quaternion.copy(mc),this.dummy.scale.copy(_c),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}acquire(e,t,i,r={}){let s=-1;for(let o=0;o<this.actives.length;o++)if(!this.actives[o]){s=o;break}if(s===-1)return null;this.actives[s]=!0;const a=r.scale??1;return this.place(s,e,t,i,a,a*.12,a*.75,0,r.rot??0,0),r.color&&this.mesh.instanceColor&&(this.colors[s].set(r.color),this.mesh.setColorAt(s,this.colors[s])),{index:s,active:!0,id:s}}move(e,t,i,r,s=0,a=1){this.place(e.index,t,i,r,a,a*.12,a*.75,0,s,0)}hide(e){this.actives[e.index]&&(this.actives[e.index]=!1,this.place(e.index,-999,-999,-999,1,1,1,0,0,0))}commit(){this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}get usedCount(){let e=0;for(const t of this.actives)t&&e++;return e}}const vc={desk:{family:"desk",color:"#F4E7C7",glyph:"stacked-tray",badge:"square"},satchel:{family:"satchel",color:"#6D3E78",glyph:"buckle",badge:"capsule"},route:{family:"route",color:"#72D6C1",glyph:"thread-needle",badge:"needle-pulse"},inflow:{family:"inflow",color:"#4a67b6",glyph:"tray-arrow",badge:"rain-line"}},P0={desk:{warnAt:.7,chokeAt:.85,chokeSustainS:3,burstFullAt:.999},satchel:{queueWarnAt:.4,deskPileChokeAt:.4,chokeSustainS:3},route:{okSlack:.15,utilWarnAt:.85,utilChokeAt:.999,queueChokeAt:.4,chokeSustainS:3},inflow:{okAt:.35,chokeAt:.2,chokeSustainS:3}},Da={capacityPulseS:.4,purchasePunchS:.25},Xr={kept:["Stars banked (+ pending claim)","Unlocked districts' identity on the route map (postcards stay readable)","Night Clerk License stub state","Save/version lineage"],lost:["Postage balance and E_run","All hall upgrade tiers (F1–F10)","Desk pads / satchel racks / route lanes and their tiers (back to first-slot T1 installed)","Backlog pool to Lantern Lane state","Active district back to Lantern Lane; gate progress resets (Rainmarket bond re-payable)","Night Ledger snapshot (unsettled away time settles into run Postage before confirm)"]},Ia={title:"The night kept working.",neverEmpty:"The hall barely noticed you leave. +0 — step back in, Clerk.",collect:"Collect"},Md=[{beat:"point-hold",trigger:{t:0},speaker:null,copy:null,highlight:"sort"},{beat:"letters-stream",trigger:{t:10},speaker:"Pip",copy:"They answer the thumb. They always do.",grantId:1},{beat:"desks-fill",trigger:{t:30},speaker:"Mara",copy:"Desks are your lungs. Buy the second tray.",grantId:2,highlight:"desk"},{beat:"rail-pad2",trigger:{t:45},speaker:"Pip",copy:"Room to breathe.",rail:{family:"desk",note:"pad2 unlock (300)"},highlight:"desk"},{beat:"routes-pulse",trigger:{t:75},speaker:"Mara",copy:"The lanes decide what's real. Feed them.",grantId:3,rail:{family:"route",note:"lane1 T2 (380)"},highlight:"route"},{beat:"first-hall-tier",trigger:{t:120},speaker:"Pip",copy:"The hall likes investment. Watch the pile.",grantId:4,rail:{family:"hall",note:"first district upgrade (F4/F1 cheapest)"},highlight:"inflow"},{beat:"night-ledger-card",trigger:{t:300},speaker:"Mara",copy:"Dawn always wins. The Ledger makes sure it doesn't win everything.",grantId:5},{beat:"seal-grammar",trigger:{event:"rv_complete"},speaker:"Mara",copy:"Rainmarket is listening. Finish the list.",highlight:"seal-rainmarket"},{beat:"bond-prelight",trigger:{event:"list_nearly"},speaker:null,copy:null,highlight:"seal-rainmarket"},{beat:"rainmarket-answers",trigger:{event:"advance"},speaker:"Mara",copy:"Rainmarket answers. First time in years, Clerk.",grantId:6},{beat:"horizon-remembers",trigger:{event:"horizon_rv"},speaker:"Mara",copy:"That seal doesn't open tonight. It remembers.",highlight:"seal-horizon"},{beat:"redraw-offered",trigger:{event:"horizon_list"},speaker:"Mara",copy:"Tear up the routes. Draw them better.",highlight:"seal-horizon"},{beat:"second-wind",trigger:{event:"claim"},speaker:"Pip",copy:"Again. But faster. Much faster."}],L0=.9,De={onboardBeat:"md.onboard.beat",meterChoke:"md.meter.choke",meterRemedy:"md.meter.remedy",purchase:"md.purchase",gateCross:"md.gate.cross",advance:"md.advance",redrawShow:"md.redraw.show",redrawClaim:"md.redraw.claim",ledgerReturn:"md.ledger.return",saveWrite:"md.save.write",saveLoad:"md.save.load",postcardUnlock:"md.postcard.unlock",postcardRead:"md.postcard.read",postcardSeal:"md.postcard.seal",morningPost:"md.morning-post.claim",specialActivate:"md.special.activate",specialClaim:"md.special.claim",wanderlight:"md.wanderlight.tap",sealConvert:"md.seal.convert",trayActivate:"md.tray.activate",wanderSpawn:"md.wanderlight.spawn",morningpostReady:"md.morningpost.ready",morningpostClaim:"md.morningpost.claim",specialOffer:"md.special.offer",specialAccept:"md.special.accept",specialComplete:"md.special.complete",stampCapped:"md.stamp.capped",replyChord:"md.reply.chord",flatArm:"md.flat.arm",flatNudge:"md.flat.nudge",modShow:"md.mod.show",modRotate:"md.mod.rotate",rushGrant:"md.rush.grant",rushActivate:"md.rush.activate",rushExpire:"md.rush.expire",ledgerClaim:"md.ledger.claim",saveReconcile:"md.save.reconcile",returnNudge:"md.flat.return_nudge",mapWestward:"md.map.westward",cycleClose:"md.cycle.close",finaleFire:"md.finale.fire",finaleReplay:"md.finale.replay",rtOpen:"md.rt.open",rtComplete:"md.rt.complete",cosmeticBuy:"md.cosmetic.buy",cosmeticEquip:"md.cosmetic.equip",ladderClosed:"md.ladder.closed",sdRepeatOffer:"md.sd.repeat_offer",streakGrant:"md.streak.grant",doublerUse:"md.doubler.use",doublerCap:"md.doubler.cap",notifInvite:"md.notif.invite",notifOptIn:"md.notif.optin",notifScheduled:"md.notif.scheduled",dawnFire:"md.dawn.fire",dawnReplay:"md.dawn.replay",cadenceAssert:"md.cadence.assert",stubViewed:"md.stub.viewed",albumCrack:"md.album.crack",streakGift:"md.streak.gift",doublerDismiss:"md.doubler.dismiss",stubOpen:"md.stub.open",stubDismiss:"md.stub.dismiss",notifyCardShow:"md.notify.card_show",notifyOptInCanon:"md.notify.opt_in",notifyDismissForever:"md.notify.dismiss_forever",notifySettingsToggle:"md.notify.settings_toggle",notifyFire:"md.notify.fire",cadenceBlockedSd:"md.cadence.blocked_sd",cadenceViolation:"md.cadence.violation",returnDayCount:"md.return_day.count"},xc={budget:250},yc=["Stamp inventory (per-district receipts, 250 caps)","Special-delivery board state (active 4–8 h timers keep ticking — wall-clock, not run-clock)","Morning Post cadence state","Wax Seals + trims","Postcard counters per district"],ka={speaker:"Mara",line:"That seal owes you a road now, not a reset.",note:"The Clocktower seal now opens the Ward directly: advance + bond 25,000."},D0=[{districtIndex:2,id:"clocktower_ward",name:"Clocktower Ward",body:"The route-miniature threads upward into a bell-chamber of brass and moonlight. A long-stopped minute hand shudders — and ticks once.",speaker:"Mara",speakerLine:"First bell the city's heard in years — and it's *on time*.",arrivalCopy:{speaker:"Mara",line:"It answered. Clerk — it *answered*."}},{districtIndex:3,id:"museum_after_dark",name:"Museum After Dark",body:"The miniature rolls out a colonnade of cool-lit glass. One exhibit case glows from inside — no artifact, only an addressed envelope, waiting decades.",speaker:"Pip",speakerLine:"Shhh. The exhibits sleep. *Mostly.*",arrivalCopy:null},{districtIndex:4,id:"rooftop_gardens",name:"Rooftop Gardens",body:"The thread climbs a drainpipe line into greenhouse glass. Condensation spells a word — and wipes itself before anyone reads it.",speaker:"Mara",speakerLine:"They grow tea up there, and patience. Deliver gently.",arrivalCopy:null},{districtIndex:5,id:"canal_of_echoes",name:"Canal of Echoes",body:"The miniature spills down steps to black water. Every thread so far — six districts — reflects at once, and the reflections ripple into one chord, the loudest and softest yet.",speaker:"Mara",speakerLine:"Listen to that, Clerk. Six districts, one address. *Ours.*",arrivalCopy:null}],bc={delayAfterVignetteS:8},vt={secondWind:{beat:"ch2.second-wind",speaker:"Pip",copy:"Same hall. Better stars. Watch."},rmReanswer:{beat:"ch2.rm-reanswer",speaker:"Pip",copy:"They remember your hands."},trayRail:{beat:"ch2.tray-rail",speaker:"Mara",copy:"Trays take in what the night drops. Your thumb gets a pension.",highlight:"inflow"},wanderOn:{beat:"ch2.wander-on",speaker:"Pip",copy:"Sky-mail. Pop, don't chase."},firstWander:{beat:"ch2.first-wander",speaker:"Pip",copy:"That one's lost its address. Pop it — gently."},sdIntro:{beat:"ch2.sd-intro",speaker:"Pip",copy:"Old streets keep asking. We charge them stamps. It's *diplomacy*.",highlight:"special"},mpFirstReady:{beat:"ch2.mp-first-ready",speaker:"Mara",copy:"The city reads your night shift over breakfast. Take the bundle.",highlight:"morningpost"},postcardAuto:{beat:"ch2.postcard-auto",speaker:"Mara",copy:"Three a district. They write more when you notice.",highlight:"postcards"},flatNear:{beat:"ch2.flat-near",speaker:"Mara",copy:"Ticker's flat, seal's close. *Finish the seal.*"},flatFar:{beat:"ch2.flat-far",speaker:"Mara",copy:"That wall isn't tonight's, sweetheart. *Bank the night.*",highlight:"redraw"},evaporation:{speaker:"Pip",copy:"Yesterday's wall. This morning? *Confetti.*"},museumClaim:{beat:"ch2.museum-claim",speaker:"Mara",copy:"Tear up the routes. Draw them better remembered."},museumClaim2:{beat:"ch2.museum-claim-2",speaker:"Pip",copy:"Again! With *style*."}},Mc={conversionCardS:410,sdBoardIntroS:415},Lt={sortPull:(n,e)=>.035*n*(1+.2*e),backlogPoolBase:400,backlogPoolScale:1.8,backlogRefillBase:7,backlogRefillScale:1.8,satchelBufferSeconds:15,perfectSort:{psMaxBase:1.5,psMaxPerF5:.25,rampS:20,rampS_F5t1:15,rampS_F5t4:12,decayS:5,decayS_F5t2:8},starScalar:3,starDenom:1e4,starMultStep:.22},Xt=[{id:"lantern_lane",name:"Lantern Lane",letterValue:1,gate:null},{id:"rainmarket",name:"Rainmarket",letterValue:6,gate:{rv:16e3,deliveryList:36e3,bond:6e3}},{id:"clocktower_ward",name:"Clocktower Ward",letterValue:32,gate:null},{id:"museum_after_dark",name:"Museum After Dark",letterValue:180,gate:null},{id:"rooftop_gardens",name:"Rooftop Gardens",letterValue:1e3,gate:null},{id:"canal_of_echoes",name:"Canal of Echoes",letterValue:5500,gate:null},{id:"moonlit_arcade",name:"Moonlit Arcade",letterValue:4e4,gate:null},{id:"glasshouse_quarter",name:"Glasshouse Quarter",letterValue:3e5,gate:null},{id:"sleepless_library",name:"Sleepless Library",letterValue:225e4,gate:null},{id:"cloudline_station",name:"Cloudline Station",letterValue:16875e3,gate:null},{id:"aurora_borough",name:"Aurora Borough",letterValue:126562500,gate:null},{id:"last_light_observatory",name:"Last Light Observatory",letterValue:949218750,gate:null}],Dn={rainmarket:{id:"rainmarket",to:1,rv:16e3,deliveryList:36e3,bond:6e3,action:"advance_bond"},horizon:{id:"horizon",to:2,rv:12e6,deliveryList:45e5,bond:25e3,action:"redraw_claim"},museum:{id:"museum",to:3,rv:124e8,deliveryList:45e8,bond:22e4,action:"advance_bond"},rooftop:{id:"rooftop",to:4,rv:225e9,deliveryList:75e9,bond:36e5,action:"advance_bond"},canal:{id:"canal",to:5,rv:4e12,deliveryList:115e10,bond:6e7,action:"advance_bond"},moonlit_arcade:{id:"moonlit_arcade",to:6,rv:36e13,deliveryList:8e13,bond:3e10,action:"advance_bond"},glasshouse_quarter:{id:"glasshouse_quarter",to:7,rv:63e14,deliveryList:14e14,bond:3e11,action:"advance_bond"},sleepless_library:{id:"sleepless_library",to:8,rv:77e14,deliveryList:22e14,bond:4e12,action:"advance_bond"},cloudline_station:{id:"cloudline_station",to:9,rv:15e17,deliveryList:38e16,bond:15e12,action:"advance_bond"},aurora_borough:{id:"aurora_borough",to:10,rv:21e18,deliveryList:52e17,bond:8e13,action:"advance_bond"},last_light_observatory:{id:"last_light_observatory",to:11,rv:8e19,deliveryList:2e19,bond:4e14,action:"advance_bond"}},Sd=2e19,Sc={f1Step:.3,psMultiplier:n=>n,starsMultiplier:n=>1+Lt.starMultStep*n},an={count:4,unlock:[0,300,2400,18e4],tier:[0,700,22e3,42e4,76e5,13e7,8e9,1e11,12e11],caps:[240,560,1100,2200,4300,8500,17e3,34e3,68e3],F6:{capMult:1.25,costMult:.9}},Un={count:4,unlock:[0,1100,12e3,42e4],tier:[0,450,13e3,25e4,45e5,78e6,6e9,8e10,1e12],rates:[13,18,50,90,160,340,680,1320,2600]},In={count:4,unlock:[0,850,9500,32e4],tier:[0,380,11e3,21e4,39e5,66e6,5e9,7e10,85e10],rates:[11.5,16,48,84,148,300,600,1180,2340],F7:{rateMult:1.25,costMult:.9,rateMultPerTier:1.15,costMultPerTier:.92}},Yt={F4:{id:"F4",label:"Taller Racks",tiers:12,cost:[600,1600,22e3,2e5,75e4,28e5,1e7,8e9,3e10,25e10,15e11,8e12],effect:"pool ×1.8, refill ×1.8 per tier (t12 cap: pool 462,742 · refill 8,098.7/s)"},F1:{id:"F1",label:"Warmer Seals",tiers:14,cost:[1e3,2600,42e3,12e4,38e4,9e5,25e5,75e5,6e9,2e10,12e10,8e11,4e12,25e12],effect:"letter value +30% per tier (t14 ×5.2 total cap)",letterValueStep:.3},F2:{id:"F2",label:"Lighter Ink",tiers:14,cost:[900,4200,5e4,16e4,45e4,11e5,32e5,9e6,7e9,25e9,15e10,1e12,5e12,3e13],effect:"base sort pull +20% per tier (t14 +280% cap)",sortPullStep:.2},F5:{id:"F5",label:"Sweet Spot",tiers:10,cost:[1200,6500,7e4,24e4,56e4,84e4,14e5,1e10,6e10,8e11],effect:"ps_max +0.25/tier (t9 3.75 · t10 4.00); t1 ramp→15s; t2 decay→8s; t4 ramp→12s; t6+ persistence floor",unlockAtRun:1200,psMaxPerTier:.25,persistenceTier:6,rampAtTiers:[{tier:1,rampS:15},{tier:4,rampS:12}],decayAtTiers:[{tier:2,decayS:8}]},F6:{id:"F6",label:"Sturdy Trays",tiers:3,cost:[3e3,15e9,15e11],effect:"t1 desk caps ×1.25, costs ×0.90 · t2 caps ×1.20 further, costs ×0.92 further · t3 caps ×1.20 further, costs ×0.92 further",deskCapMult:1.25,deskCostMult:.9,deskCapMult2:1.2,deskCostMult2:.92},F7:{id:"F7",label:"Swift Lanes",tiers:7,cost:[3e3,85e3,11e5,15e9,1e11,2e12,1e13],effect:"route rates ×1.15 · costs ×0.92 per tier; t1 ×1.25/×0.90 (t7 cum ×2.066/×0.622); ribbon dressing",routeRateMult:1.25,routeCostMult:.9,routeRateMultPerTier:1.15,routeCostMultPerTier:.92},F10:{id:"F10",label:"Ledger Eyes",tiers:4,cost:[3e3,22e5,6e10,8e11],effect:"hall factor 0.05 → 0.08 (t1) → 0.12 (t2) → 0.16 (t3) → 0.20 (t4)",hfacAfter:.08,hfacAfterT2:.12,hfacAfterT3:.16,hfacAfterT4:.2},F3:{id:"F3",label:"Night Habits",tiers:6,cost:[4e3,25e4,15e5,6e6,12e10,2e12],effect:"t1 away 0.65; t2–t6 Inflow Trays (0.40/0.72/1.30/2.00/2.60); t4+ away 0.80",unlockAtRun:2500,awayFractionAfter:.65,awayFractionAfterT4:.8,trayFrac:[.4,.72,1.3,2,2.6],conditionDistrictId:"clocktower_ward"},F8:{id:"F8",label:"Longer Nights",tiers:3,cost:[24e3,18e5,8e10],effect:"Night Ledger cap 2 h → 3 h (t1) → 5 h (t2) → 8 h (t3)",capHoursAfter:3,capHoursAfterT2:5,capHoursAfterT3:8},F9:{id:"F9",label:"Wanderlights",tiers:5,cost:[12e4,9e5,55e5,5e10,6e11],effect:"t1 activate (cadence 110 s); t2 reward ×1.75 · seal 6%; t3 cadence 90 s · grand 1.2%; t4 cadence 80 s · seal 8% · grand 2% · reward ×3.5; t5 cadence 70 s · seal 10% · grand 2.5% · reward ×4.5",conditionDistrictId:"clocktower_ward",wanderCadenceBase:140,wanderCadenceT1:110,wanderCadenceT3:90,wanderRewardMultT2:1.75,wanderSealChanceT2:.06,wanderGrandChanceT3:.012,wanderCadenceT4:80,wanderSealChanceT4:.08,wanderGrandChanceT4:.02,wanderRewardMultT4:3.5,wanderCadenceT5:70,wanderSealChanceT5:.1,wanderGrandChanceT5:.025,wanderRewardMultT5:4.5},F11:{id:"F11",label:"Express Logistics",tiers:4,cost:[8e8,6e9,2e11,3e12],effect:"satchel + route rates ×1.25/tier (t4 ×2.441 total)",satchelRateMult:1.25,routeRateMultF11:1.25},F12:{id:"F12",label:"Universal Addressing",tiers:4,cost:[3e9,15e10,2e13,25e13],effect:"booked Postage ×1.5 (t1) → ×2.0 (t2, replaces) → ×2.5 (t3, replaces) → ×3.0 (t4, replaces)",bookedMult:[1,1.5,2,2.5,3]}},Hr={hfac:.05,hfacAfterF10:.08,hfacAfterF10T2:.12,hfacAfterF10T3:.16,hfacAfterF10T4:.2},ss={capHours:2,awayFraction:.5,doublerMaxPer24h:3,neverEmptyElapsedS:120},I0=[{id:1,grant:50},{id:2,grant:150},{id:3,grant:400},{id:4,grant:1200},{id:5,grant:2400},{id:6,grant:6e3}],wd={lantern_lane:[500,2500,6e3],rainmarket:[800,3e3,7e3],clocktower_ward:[5e4,3e5,1e6],museum_after_dark:[15e4,6e5,2e6],rooftop_gardens:[1e5,5e5,15e5],canal_of_echoes:[25e3,15e4,6e5],moonlit_arcade:[2e5,1e6,6e6],glasshouse_quarter:[15e4,6e5,22e5],sleepless_library:[15e4,7e5,25e5],cloudline_station:[5e5,4e6,3e7],aurora_borough:[4e5,3e6,15e6],last_light_observatory:[3e5,2e6,7e6]},wc={frontierShare:.75,fanShareUniform:.25},Zn={maxConcurrent:2,despawnS:20,normalRewardLetterMult:25,sealChance:.04,grandChance:.006,grandRewardLetterMult:500,grandWaxSeals:2},Ui={cadenceH:8,maxHeld:1,grantByFrontier:{clocktower_ward:6e4,museum_after_dark:5e5,rooftop_gardens:3e6,canal_of_echoes:18e6,moonlit_arcade:15e7,glasshouse_quarter:9e8,sleepless_library:5e9,cloudline_station:35e9,aurora_borough:2e11,last_light_observatory:1e12}},Vr={cap:250,p:{lantern_lane:.0015,rainmarket:.0012,clocktower_ward:8e-4,museum_after_dark:6e-4,rooftop_gardens:4e-4,canal_of_echoes:3e-4,moonlit_arcade:2e-4,glasshouse_quarter:15e-5,sleepless_library:1e-4,cloudline_station:8e-5,aurora_borough:6e-5,last_light_observatory:5e-5}},Ni={maxActiveTimers:3,recipes:[{id:"SD1",name:"The Umbrella Route",stamps:{lantern_lane:8,rainmarket:6},timerH:4,rewardPct:.01,available:"clocktower_ward"},{id:"SD2",name:"Still Life, With Address",stamps:{rainmarket:12,clocktower_ward:4},timerH:6,rewardPct:.02,available:"museum_after_dark"},{id:"SD3",name:"The Curator's Errand",stamps:{clocktower_ward:10,museum_after_dark:6},timerH:8,rewardPct:.035,available:"rooftop_gardens"},{id:"SD4",name:"Tea for the Rain Clock",stamps:{museum_after_dark:8,rooftop_gardens:6},timerH:5,rewardPct:.025,available:"rooftop_gardens",availableWhenAnswered:"rooftop_gardens"},{id:"SD5",name:"The Echo Postman",stamps:{rooftop_gardens:10,canal_of_echoes:6},timerH:7,rewardPct:.03,available:"canal_of_echoes",availableWhenAnswered:"canal_of_echoes"},{id:"SD6",name:"Midnight at the Arcade",stamps:{canal_of_echoes:8,moonlit_arcade:6},timerH:8,rewardPct:.04,available:"moonlit_arcade",availableWhenAnswered:"moonlit_arcade"},{id:"SD7",name:"The Unwritten Hour",stamps:{moonlit_arcade:10,glasshouse_quarter:8},timerH:0,rewardPct:0,available:"moonlit_arcade",availableWhenAnswered:"moonlit_arcade",rush:{multX:2,activeS:1800,holdMax:1},postsAtCommit:!0},{id:"SD8",name:"The Reading Room",stamps:{glasshouse_quarter:12,sleepless_library:10},timerH:8,rewardPct:.05,available:"sleepless_library",availableWhenAnswered:"sleepless_library"}]},k0=[{slot:0,id:"rain_sheen",deskCapX:.85,routeX:1.25},{slot:1,id:"backlog_surge",poolX:1.25,refillX:1.6},{slot:2,id:"perfect_moon",psMaxAdd:.25,rampX:.6,rampMinS:6},{slot:3,id:"tailwind",routeX:1.35,satchelX:1.1},{slot:4,id:"long_shadows",ledgerAccrualX:1.25},{slot:5,id:"stamp_fair",stampPX:2},{slot:6,id:"wax_festival",lampSealX:2,lampGrandX:2}],U0={table:k0},Ed={id:null,slot:null,deskCapX:1,routeX:1,poolX:1,refillX:1,psMaxAdd:0,rampX:1,rampMinS:0,satchelX:1,ledgerAccrualX:1,stampPX:1,lampSealX:1,lampGrandX:1},Gs={multX:2,activeS:1800},Td={medianRingMax:60,claimCapFracOfFrontierRem:.35},$r={returnArmedFloorS:6*3600,returnFlatMaxStarsPerReturn:1,nudgeSealEtaHours:6},Cn={armFloorS:1500,windowS:480,windowMaxStars:1,cardAfterS:60,nudgeAfterS:300,nudgeSealShareBelow:.2},F0={districtAdvanceCh2:2},es={lantern_lane:{district:"lantern_lane",target:{letters:8e6,modifier:null,courierMin:null},seals:2,stars:1},rainmarket:{district:"rainmarket",target:{letters:8e6,modifier:"rain_sheen",courierMin:2},seals:2,stars:1},clocktower_ward:{district:"clocktower_ward",target:{letters:1e7,modifier:"perfect_moon",courierMin:5},seals:3,stars:1},museum_after_dark:{district:"museum_after_dark",target:{letters:12e6,modifier:"backlog_surge",courierMin:10},seals:3,stars:1},rooftop_gardens:{district:"rooftop_gardens",target:{letters:14e6,modifier:"wax_festival",courierMin:15},seals:3,stars:1},canal_of_echoes:{district:"canal_of_echoes",target:{letters:24e6,modifier:"rain_sheen",courierMin:30},seals:3,stars:1},moonlit_arcade:{district:"moonlit_arcade",target:{letters:32e6,modifier:"wax_festival",courierMin:45},seals:4,stars:2},glasshouse_quarter:{district:"glasshouse_quarter",target:{letters:8e6,modifier:"long_shadows",courierMin:180},seals:4,stars:2},sleepless_library:{district:"sleepless_library",target:{letters:5e7,modifier:"backlog_surge",courierMin:180},seals:4,stars:2},cloudline_station:{district:"cloudline_station",target:{letters:85e6,modifier:"tailwind",courierMin:480},seals:5,stars:3},aurora_borough:{district:"aurora_borough",target:{letters:4e7,modifier:"stamp_fair",courierMin:720},seals:5,stars:3},last_light_observatory:{district:"last_light_observatory",target:{letters:15e6,modifier:"perfect_moon",courierMin:720},seals:5,stars:3}},N0={repeatableAfterReply:["SD1","SD2","SD3","SD4","SD5","SD6","SD8"]};function Oi(n){return n.liveMod??Ed}function Zs(n){const e=n.hall.F4??0;return Lt.backlogPoolBase*Math.pow(Lt.backlogPoolScale,e)*Oi(n).poolX}function Ad(n){const e=n.hall.F3??0,i=Yt.F3?.trayFrac;if(!i||e<2)return 1;const r=Math.min(e-2,i.length-1);return 1+(i[r]??0)}function Ws(n){const e=(n.hall.F6??0)>0;let t=0;for(const r of n.desks)r.unlocked&&(t+=an.caps[r.tier]);return(e?t*an.F6.capMult:t)*Oi(n).deskCapX}function O0(n){const e=n.hall.F2??0,t=Lt.sortPull(Zs(n),e),i=(n.hall.F6??0)>0,r=n.desks.filter(a=>a.unlocked).length||1,s=i?an.F6.capMult:1;return t*r*s}function Cd(n){const e=n.hall.F11??0,i=Yt.F11.satchelRateMult;let r=1;for(let s=1;s<=e;s++)r*=i;return r}function qo(n){let e=0;for(const t of n.racks)t.unlocked&&(e+=Un.rates[t.tier]);return e*Lt.satchelBufferSeconds*Cd(n)*Oi(n).satchelX}function Yo(n){const e=n.hall.F7??0,t=In.F7,i=t.rateMultPerTier;let r=1;e>=1&&(r=t.rateMult);for(let a=2;a<=e;a++)r*=i;let s=0;for(const a of n.lanes)a.unlocked&&(s+=In.rates[a.tier]);return s*r*Cd(n)*Oi(n).routeX}function B0(n){const e=n.hall.F12??0;return Yt.F12.bookedMult?.[e]??1}function jo(n){const e=Xt[n.districtIndex],t=e?e.letterValue:1,i=n.hall.F1??0;return t*(1+Sc.f1Step*i)*Sc.starsMultiplier(n.stars)}function Ko(n){const e=n.hall.F5??0;return Lt.perfectSort.psMaxBase+Lt.perfectSort.psMaxPerF5*e+Oi(n).psMaxAdd}function z0(n){const e=n.hall.F5??0,t=Yt.F5;let i=Lt.perfectSort.rampS;for(const s of t.rampAtTiers??[])e>=s.tier&&(i=s.rampS);const r=Oi(n);return Math.max(r.rampMinS,i*r.rampX)}function H0(n){const e=n.hall.F5??0,t=Yt.F5;let i=Lt.perfectSort.decayS;for(const r of t.decayAtTiers??[])e>=r.tier&&(i=r.decayS);return i}function V0(n){return Math.floor(Lt.starScalar*Math.log(1+n/Lt.starDenom))}function G0(n,e,t,i){const r=Ko(n);if(t)n.perfect=Math.min(r,n.perfect+1/z0(n)*e);else{const T=Yt.F5,O=n.hall.F5??0;let H=0;T&&T.persistenceTier!=null&&O>=T.persistenceTier&&(H=1+.5*(r-1)),n.perfect=Math.max(H,n.perfect-1/H0(n)*e)}const s=Zs(n),a=Lt.backlogRefillBase*Math.pow(Lt.backlogRefillScale,n.hall.F4??0)*Oi(n).refillX;n.backlog=Math.min(s,n.backlog+a*Ad(n)*e);const o=O0(n),c=Ws(n),l=qo(n),h=Yo(n);let d=0;const f=n.desks.reduce((T,O)=>T+O.inProcess,0),p=c-f,g=t?Math.min(p,o*e,n.backlog)*n.perfect:0;if(g>0){let T=g;const O=n.desks.filter(H=>H.unlocked);for(;T>1e-6&&O.length;){let H=!1;for(const j of O){const J=an.caps[j.tier],re=(n.hall.F6??0)>0?J*an.F6.capMult:J,$=re/c,ce=Math.min(c>0?T*$:0,re-j.inProcess,T);ce>1e-6&&(j.inProcess+=ce,T-=ce,H=!0)}if(!H)break}n.backlog=Math.max(0,n.backlog-g)}const v=n.racks.reduce((T,O)=>T+(O.unlocked?Un.rates[O.tier]:0),0),m=n.desks.reduce((T,O)=>T+O.inProcess,0),u=Math.min(m,v*e);n.bundled=(n.bundled??0)+u;let w=u;const E=n.desks.filter(T=>T.unlocked);for(const T of E){if(w<=1e-6)break;const O=Math.min(T.inProcess,w);T.inProcess-=O,w-=O}const M=Math.min(n.bundled??0,h*e);n.bundled=(n.bundled??0)-M;const B=jo(n),A=M*B;n.totalEarnedRun+=A,n.districtRouteValue+=M,d=M;const C=g>0&&p<=1e-6,U=(n.bundled??0)>=l-1e-6,b=(n.bundled??0)>0&&M<(n.bundled??0)*.5+1e-6;let y="none";return b&&(n.bundled??0)>l*.9?y="lane":U?y="rack":C&&(y="desk"),{delivered:d,postageEarned:A,bottleneck:y}}function Ae(n,e,t,i){const r=new gi(n,e,t),s=new Bt({color:i});return new nt(r,s)}function Ut(n,e,t,i,r=20){return new nt(new ui(n,e,t,r),new Bt({color:i}))}const W0=-5.2,bt=-4.95,ci=[-3.4,-1.2,1.1,3.3],Ec=[-4.4,-3.1,-1.8,-.5],di=[-4.4,-3.1,-1.8,-.5];function X0(n,e={}){const t=new dt,i=new y0("#5B79C8","#17233F",.9);n.add(i);const r=new uc("#F4E7C7",1.15);r.position.set(8,14,6),n.add(r);const s=new uc(R.plum,.35);s.position.set(-6,6,-4),n.add(s);const a=new nt(new gi(16,.3,16),new Bt({color:"#20304f"}));a.position.y=-.15,t.add(a);const o={color:R.brass},c=Ae(14.5,.12,.12,o.color);c.position.set(0,.5,-4.6);const l=Ae(14.5,.12,.12,o.color);l.position.set(0,.5,4.6);const h=Ae(.12,.12,9.2,o.color);h.position.set(-7.2,.5,0);const d=Ae(.12,.12,9.2,o.color);d.position.set(7.2,.5,0);for(const P of[c,l,h,d])Ut(.05,.05,.5,R.brass,8).position.set(P.position.x-(P.scale.x||0),.25,P.position.z),t.add(P);const f=Ae(14.6,5.4,.4,"#241f3a");f.position.set(0,2.7,W0),t.add(f);const p=new nt(new ui(1.5,1.5,.12,28),new Bt({color:R.inkNavy}));p.rotation.x=Math.PI/2,p.position.set(-2.4,3.1,bt+.08),t.add(p);const g=new nt(new Pi(1.5,.06,8,28),new Bt({color:R.brass}));g.position.copy(p.position),t.add(g);const v=new Zt({color:R.routeMint}),m=new Zt({color:R.inkNavy}),u=new Zt({color:"#101a30"});function w(P,N,X){const ne=P.distanceTo(N),se=new nt(new ui(.035,.035,ne,6),X),Ie=P.clone().add(N).multiplyScalar(.5);return se.position.copy(Ie),se.lookAt(N),se.rotateX(Math.PI/2),se}const E=p.position.clone(),M=new I(-.4,2.15,bt+.12),B=new I(.5,3.3,bt+.12),A=new I(1.7,3.9,bt+.12);t.add(w(E,M,v));const C=w(E,B,m);t.add(C),t.add(w(E,A,u));const U=new nt(new Pi(.42,.07,8,20),new Zt({color:"#0d1730"}));U.position.copy(A),t.add(U);const b=Ae(.22,1,.1,"#0d1730");b.position.set(A.x-.14,A.y+.8,A.z);const y=Ae(.16,.7,.1,"#0d1730");y.position.set(A.x+.18,A.y+.65,A.z),t.add(b),t.add(y);const T=new dt;T.add(U,b,y),t.add(T);const O=new dt,H=Ae(2.4,3.2,.5,R.moonBlue);H.position.y=1.6,O.add(H);const j=Ae(1.2,2.2,.5,R.plum);j.position.set(1.6,1.1,0),O.add(j);const J=Ae(1.4,2.7,.5,R.brass);J.position.set(-1.4,1.35,-.2),O.add(J),O.position.set(-5.2,0,-4.35),t.add(O);const Y=new dt,re=Ae(2,2.6,.5,R.moonBlue);re.position.y=1.3,Y.add(re);const $=Ae(2.6,1.8,.5,R.plum);$.position.set(.4,.9,.2),Y.add($),Y.position.set(4.9,0,-4.35),t.add(Y);const ce={1:B,2:A,3:new I(2.85,4.25,bt+.12),4:new I(3.95,4.55,bt+.12),5:new I(5,4.8,bt+.12),6:new I(5.95,4.98,bt+.12),7:new I(6.8,5.12,bt+.12),8:new I(7.6,5.22,bt+.12)},ge={1:R.routeMint,2:R.brass,3:R.plum,4:"#a8e6c9",5:R.moonBlue,6:R.plum,7:R.routeMint,8:R.moonBlue},we="#101a30",Ve={1:C};for(const P of[2,3,4,5,6,7,8]){const N=new Zt({color:we}),X=w(E,ce[P],N);t.add(X),Ve[P]=X}function st(){const P=new dt,N=Ae(.24,1,.12,"#8ea3c8");N.position.y=.5;const X=Ut(.14,.14,.03,R.parchment,16);X.rotation.x=Math.PI/2,X.position.set(0,.86,.07);const ne=Ae(.02,.11,.012,R.inkNavy);ne.geometry.translate(0,.055,0),ne.position.set(0,.86,.095);const se=Ut(.09,.13,.14,R.brass,10);return se.position.set(0,.66,.06),P.add(N,X,ne,se),P.userData.hand=ne,P}function K(){const P=new dt;for(let ne=-1.5;ne<=1.5;ne++){const se=Ut(.05,.06,.55,"#9db4dd",8);se.position.set(ne*.24,.275,0),P.add(se)}const N=Ae(.95,.08,.14,R.plum);N.position.y=.6;const X=Ae(.14,.2,.06,R.parchment);return X.position.set(.36,.14,.05),P.add(N,X),P}function oe(){const P=new dt,N=Ae(.85,.3,.14,"#3f6f5a");N.position.y=.15;const X=new nt(new qn(.5,.4),new Bt({color:"#a8e6c9",transparent:!0,opacity:.45}));X.position.set(-.13,.5,.02),X.rotation.z=.5;const ne=X.clone();ne.position.x=.13,ne.rotation.z=-.5;const se=Ae(.06,.5,.06,"#2e5d49");return se.position.set(.3,.3,.06),P.add(N,X,ne,se),P}function Ee(){const P=new dt,N=Ae(1.05,.04,.2,"#0b1530");N.position.y=.02;const X=new nt(new Pi(.36,.05,8,16,Math.PI),new Bt({color:"#6f85b8"}));X.position.y=.06;const ne=Ae(.24,.3,.12,"#29406e");ne.position.set(-.46,.15,0);const se=Ut(.03,.04,.16,R.brass,8);return se.position.set(.42,.5,.05),P.add(N,X,ne,se),P.userData.water=N,P}function V(){const P=new dt,N=Ae(.95,.3,.14,"#241f3a");N.position.y=.15,P.add(N);for(let ne=-1.5;ne<=1.5;ne++){const se=Ae(.18,.22+(Math.abs(ne)===1?.06:0),.12,ne%2===0?"#3a2b46":"#2c2340");se.position.set(ne*.24,.41,0);const Ie=Ae(.12,.05,.02,R.parchment);Ie.position.set(ne*.24,.55,.07),P.add(se,Ie)}const X=Ut(.09,.09,.025,R.brass,14);return X.position.set(.05,.62,.06),X.rotation.z=1.2,P.add(X),P.userData.coinTicket=X,P}function Z(){const P=new dt,N=Ae(.95,.26,.14,"#2c4a3e");N.position.y=.13,P.add(N);for(let ne=0;ne<3;ne++){const se=new nt(new qn(.3,.5),new Bt({color:"#a8e6c9",transparent:!0,opacity:.4}));se.position.set(-.3+ne*.3,.55,.02+ne*.002),se.rotation.z=-.35+ne*.35,P.add(se)}const X=Ae(.035,.3,.012,R.parchment);return X.position.set(-.06,.56,.06),X.rotation.z=-.28,P.add(X),P}function be(){const P=new dt;for(let ne=0;ne<4;ne++){const se=Ae(.16,.55+ne%2*.1,.12,ne%2===0?"#3b4a6b":"#31405f");se.position.set(-.3+ne*.2,.32+ne%2*.05,0),P.add(se)}const N=Ut(.035,.05,.12,R.brass,8);N.position.set(.42,.32,.05),P.add(N);const X=Ae(.14,.2,.02,R.parchment);return X.position.set(.1,.75,.06),X.userData.dropFromY=.75,P.add(X),P.userData.dueCard=X,P}function Ge(P){const N=new dt,X=Ae(.9,.55+P*.06,.06,"#16203c");X.position.y=.3;const ne=Ae(.34,.5,.06,"#101a30");return ne.position.set(.3,.45,.02),N.add(X,ne),N}const Oe={},ze={2:st,3:K,4:oe,5:Ee,6:V,7:Z,8:be};for(const P of[2,3,4,5,6,7,8]){const N=ce[P],X=ze[P]();X.position.set(N.x-.2,N.y-1.05,N.z+.01),X.visible=!1;const ne=Ge(P);ne.position.set(N.x-.45,N.y-1.05,N.z),t.add(X,ne),Oe[P]={lit:X,locked:ne}}const Re=new dt,L=Ae(.85,.62,.08,"#241f3a");L.position.set(3.35,1.05,1.45),L.rotation.y=-.35;const Le=[];for(let P=0;P<3;P++){const N=Ae(.18,.26,.03,R.plum);N.position.set(3.16+P*.24,1.03,1.52-P*.087),N.rotation.y=-.35,N.visible=!1,Le.push(N),Re.add(N)}const _e=[];for(let P=0;P<3;P++){const N=Ae(.07,.5,.028,R.parchment);N.geometry.translate(0,.25,0),N.position.set(3.1+P*.3,.82,1.68-P*.06),N.rotation.y=-.35,N.scale.set(1,0,1),N.visible=!1,_e.push(N),Re.add(N)}const We=[],Fe=["lantern_lane","rainmarket","clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"],ct=[R.routeMint,R.routeMint,R.brass,R.plum,"#a8e6c9",R.moonBlue];for(let P=0;P<6;P++){const N=Ae(.09,.09,.02,ct[P]);N.position.set(3+P*.135,.72,1.62-P%3*.045),N.rotation.y=-.35,We.push(N),Re.add(N)}const Ne=Ae(1.3,.4,.5,"#3a2b46");Ne.position.set(3.3,.4,1.4),Re.add(Ne,L),t.add(Re);const S=new dt,_=Ut(.26,.18,.28,"#b08d57",10);_.position.set(-4.55,.34,1.5);const z=Ae(.24,.16,.02,R.parchment);z.position.set(-4.55,.56,1.5),z.rotation.z=-.12;const te=Ut(.035,.035,.02,R.brass,8);te.rotation.x=Math.PI/2,te.position.set(-4.47,.56,1.53),S.add(_,z,te),S.visible=!1,t.add(S);const ie={};{const P=new dt,N=new nt(new qn(3.2,1.2),new Bt({color:R.moonBlue,transparent:!0,opacity:.3}));N.position.set(-2.4,4.4,bt+.18),P.add(N);for(let X=0;X<5;X++){const ne=Ae(.03,.9,.012,R.moonBlue);ne.position.set(-3.6+X*.6,4.4,bt+.19),ne.rotation.z=.12,P.add(ne)}ie.rain_sheen=P}{const P=new dt;for(let N=0;N<4;N++){const X=Ae(.5-N*.07,.16,.4-N*.05,N%2?"#17233F":"#1f3050");X.position.set(-2.6,2.05+N*.16,4),P.add(X)}ie.backlog_surge=P}{const P=new dt,N=new nt(new Pi(.62,.045,8,24),new Bt({color:R.brass}));N.position.copy(E).setZ(bt+.2),P.add(N),ie.perfect_moon=P}{const P=new dt,N="#a8e6c9";for(let X=0;X<di.length;X++){const ne=Ae(.07,.62,.02,N);ne.geometry.translate(0,.31,0),ne.position.set(di[X]+.2,.34,-3),ne.rotation.z=-.5,P.add(ne);const se=Ae(.05,.34,.018,R.routeMint);se.geometry.translate(0,.17,0),se.position.set(di[X]-.07,.22,-2.92),se.rotation.z=-.32,P.add(se)}ie.tailwind=P}{const P=new dt;for(let N=0;N<3;N++){const X=Ut(.02,.22,.9,"#b8893d",8);X.position.set(-1.6+N*1.6,3.6,bt+.4),X.rotation.z=.35,P.add(X)}ie.long_shadows=P}{const P=new dt;for(let N=0;N<7;N++){const X=new nt(new jr(.09,.18,4),new Bt({color:R.parchment}));X.position.set(-3.2+N*.5,2.75+Math.sin(N*.9)*.05,1.2),X.rotation.x=Math.PI,P.add(X)}ie.stamp_fair=P}{const P=new dt;for(let N=0;N<ci.length;N++){const X=Ut(.03,.055,.14,R.plum,6);X.position.set(ci[N]+.2,.62,1.55),P.add(X)}ie.wax_festival=P}for(const P of Object.values(ie))P.visible=!1,t.add(P);function Q(P){const N=P.liveMod?.id??null;for(const[X,ne]of Object.entries(ie))ne.visible=X===N}const Ce=[];for(let P=0;P<ci.length;P++){const N=Ae(.34,.07,.24,"#101a30");N.position.set(ci[P]-.42,.245,1.35),t.add(N),Ce.push(N)}const fe=[];for(let P=0;P<di.length;P++){const N=Ae(.05,.02,3,"#b08d57"),X=Ae(.05,.02,3,"#b08d57");N.position.set(di[P]-.34,.03,-3),X.position.set(di[P]+.34,.03,-3),t.add(N,X),fe.push([N,X])}const ve=[],Je=[],le=[];ci.forEach((P,N)=>{const X=Ae(1.4,.6,.8,R.brass);X.position.set(P,-.09,1.6);const ne=Ae(1.5,.18,.9,R.parchment);ne.position.set(P,.12,1.6);const se=Ae(.4,.09,.3,R.brass);se.position.set(P-.45,.245,1.95);const Ie=Ae(.5,1,.36,R.parchment);Ie.position.set(P+.38,.21,1.35),Ie.scale.y=.02,t.add(X,ne,se,Ie),ve.push(ne),Je.push(Ie),le.push(se)});const xe=[],Be=[],He=[];Ec.forEach(P=>{const N=Ae(.9,1.5,.5,"#3a2b46");N.position.set(P,.75,-1.4);const X=Ae(.56,.5,.34,R.plum);X.position.set(P,1.02,-1.32);const ne=Ae(.12,1,.05,R.routeMint);ne.position.set(P+.38,.5,-1.12),ne.scale.y=.02;const se=.5;ne.position.y=se,t.add(N,X,ne),xe.push(N),Be.push(X),He.push(ne)});const ye=[];for(let P=0;P<2;P++){const N=new nt(new qn(2.6,.5),new Zt({color:R.routeMint,transparent:!0,opacity:.25}));N.rotation.x=-Math.PI/2,N.rotation.z=Math.PI/2,N.position.set(-2.6+P*1.4,.03,.35),t.add(N),ye.push(N)}const Ze=new dt,qe=Ae(.22,1.7,.22,R.brass);qe.position.set(-.85,.85,.3);const ut=Ae(.22,1.7,.22,R.brass);ut.position.set(.85,.85,.3);const D=Ae(1.95,.24,.24,R.brass);D.position.set(0,1.72,.3);const he=Ut(.09,.09,.3,R.inkNavy,8);he.position.set(1.02,1.15,.3),he.rotation.z=Math.PI/2;const q=Ae(.07,.62,.07,R.sealingRed);q.position.set(0,.31,0);const ee=new dt;ee.position.set(1.02,1.15,.3),ee.add(q),ee.rotation.z=-.5,Ze.add(qe,ut,D,he,ee),t.add(Ze);const pe=[],me=[];di.forEach(P=>{const N=new nt(new qn(.7,3),new Zt({color:R.routeMint,transparent:!0,opacity:.85}));N.rotation.x=-Math.PI/2,N.position.set(P,.02,-3);const X=Ae(.4,.3,.12,"#0d1730");X.position.set(P,.15,-3),t.add(N,X),pe.push(N),me.push(X)});const $e=Ae(1.7,.18,1.4,"#2a3d68");$e.position.set(-2.6,.09,4);const yt=Ae(1.7,.3,.1,R.brass);yt.position.set(-2.6,.24,4.62);const Mt=Ut(1.1,1.3,1.1,R.parchment);Mt.position.set(-2.6,.55,4);const et=new nt(new jr(.3,.5,4),new Bt({color:R.moonBlue}));et.rotation.x=Math.PI,et.position.set(-2.6,1.9,4),t.add($e,yt,Mt,et);const Dt=new dt,on=Ut(.24,.26,.2,R.sealingRed,12);on.position.y=.1;const Ar=Ut(.19,.19,.06,R.parchment,12);Ar.position.y=.23;const Cr=Ae(.045,.05,.03,R.inkNavy);Cr.position.set(-.06,.27,.16);const Sn=Ae(.045,.05,.03,R.inkNavy);Sn.position.set(.06,.27,.16),Dt.add(on,Ar,Cr,Sn),Dt.position.set(1.65,0,.95),t.add(Dt);const Qn=new dt,Rr=Ut(.22,.42,1.5,R.plum,10);Rr.position.y=.75;const Pr=Ut(.17,.17,.3,R.parchment,10);Pr.position.y=1.68;const ei=new nt(new Pi(.07,.015,6,12),new Zt({color:R.brass}));ei.position.set(-.075,1.7,.16);const Lr=ei.clone();Lr.position.x=.075;const vi=Ae(.05,.015,.02,R.brass);vi.position.set(0,1.7,.17),Qn.add(Rr,Pr,ei,Lr,vi),Qn.position.set(2.3,0,-3.6),t.add(Qn);const Fn=new nt(new Kr(.32,12,12),new Zt({color:"#72D6C1"}));Fn.position.set(0,2.4,0);const Dr=Ae(.1,2.2,.1,R.brass);Dr.position.set(0,1.1,0),t.add(Dr,Fn),n.add(t);const zi=new dt;n.add(zi);const Nn=[];function na(P){const N=new dt,X=P==="grand",ne=new nt(new jr(X?.55:.42,X?.95:.75,12),new Bt({color:X?R.sealingRed:"#e8b86b"}));ne.position.y=0;const se=new nt(new ui(X?.56:.43,X?.56:.43,.08,12),new Bt({color:R.brass}));se.position.y=X?.34:.27;const Ie=new nt(new Kr(X?.34:.24,10,10),new Zt({color:X?"#ff9a3c":"#ffcf7a",transparent:!0,opacity:.85}));Ie.position.y=X?-.18:-.14;const ht=new nt(new ui(.012,.012,.5,6),new Bt({color:R.inkNavy}));return ht.position.y=X?-.55:-.42,ne.userData.kind=P,Ie.userData.kind=P,se.userData.kind=P,N.add(ne,se,Ie,ht),N.userData.kind=P,N.position.set((Math.random()-.5)*7.5,2.9+Math.random()*1.3,-2.2+Math.random()*2.6),N}function x(P){if(Nn.length>=Zn.maxConcurrent)return;const N=na(P);if(P==="grand"){const X=new nt(new Kr(.07,6,6),new Zt({color:"#ffd773",transparent:!0,opacity:.9}));X.position.set(0,-.3,-.2),N.add(X)}zi.add(N),Nn.push({group:N,kind:P,bornS:0,lifeS:0,swayT:Math.random()*Math.PI*2})}function k(P){const N=Nn[P];N&&(zi.remove(N.group),Nn.splice(P,1))}function G(P,N,X){for(let ne=Nn.length-1;ne>=0;ne--){const se=Nn[ne];if(se.lifeS+=P,se.lifeS>=Zn.despawnS){k(ne);continue}const Ie=se.lifeS>=Zn.despawnS-5?.5:1,ht=se.group.children[0];if(ht.material.transparent=Ie<1,ht.material.opacity=Ie,X){const xi=se.group.children[2];xi.material.opacity=(.6+Math.sin(se.lifeS*2)*.2)*Ie;continue}se.swayT+=P*.8,se.group.position.y+=Math.sin(se.swayT)*P*.18,se.group.rotation.y+=P*.4,se.group.position.x+=Math.sin(se.swayT*.7)*P*.1;const Tt=se.group.children[0];Tt.rotation.z=Math.sin(se.swayT*1.3)*.08}}const W=new gi(.34,.05,.24),F=new Bt({color:R.parchment}),ae=new R0(xc.budget,W,F);n.add(ae.mesh);const de=[];let Me=0,Se=0;function Xe(P,N,X){const ne=ae.acquire(P.x,P.y+.3,P.z,{color:X});if(ne&&(de.push({inst:ne,from:P.clone(),to:N.clone(),t:0,dur:.55+Math.random()*.35}),de.length>xc.budget-20)){const se=de.shift();ae.hide(se.inst)}}function Ye(P,N){const X=[];if(N){const se=de.length>0?.95:.5;for(const Ie of pe)Ie.material.opacity=se*.85;for(const Ie of de.splice(0))ae.hide(Ie.inst);Fn.material.opacity=se}else{for(let se=de.length-1;se>=0;se--){const Ie=de[se];Ie.t+=P;const ht=Math.min(1,Ie.t/Ie.dur),Tt=ht*ht*(3-2*ht),xi=Xn.lerp(Ie.from.x,Ie.to.x,Tt),Ir=Xn.lerp(Ie.from.y+.3,Ie.to.y,Tt)+Math.sin(ht*Math.PI)*.4,Hi=Xn.lerp(Ie.from.z,Ie.to.z,Tt);ae.move(Ie.inst,xi,Ir,Hi,Tt*1.2),ht>=1&&X.push(se)}for(const se of X)ae.hide(de[se].inst),de.splice(se,1)}ae.commit(),Me>0&&(Me=Math.max(0,Me-P*4),ee.rotation.z=-.5+Math.sin(Me*Math.PI)*.7);const ne=de.length>0?.55:.25;for(const se of ye){const Ie=se.material;Ie.opacity+=(ne-Ie.opacity)*Math.min(1,P*6)}et.position.y=1.9+Math.sin(performance.now()/600)*.08}const Te={ok:"#72D6C1",warn:"#D6A84B",red:"#C74B55"};function tt(P){Fn.material.color.set(Te[P]),Fn.material.opacity=1}function ft(P){const N=Math.max(1e-9,Ws(P));ve.forEach((X,ne)=>{const se=P.desks[ne],Ie=!!se?.unlocked,ht=se?.tier??0,Tt=Ie?1+ht*.18:1;X.scale.y=Tt,X.position.y=.12+(Tt-1)*.18,X.scale.x=Ie&&ht>0?1+ht*.08:1;const xi=X.material;Ie?xi.color.set((se?.inProcess??0)>0?R.parchment:R.moonBlue):xi.color.set("#1c1830");const Ir=N/ci.length,Hi=Ie?Math.min(1,(se?.inProcess??0)/Math.max(1e-9,Ir)):0,kr=Je[ne];kr.scale.y=Math.max(.02,Hi*.55),kr.position.y=.21+kr.scale.y/2,le[ne].material.color.set(Ie&&ht>=2?R.routeMint:R.brass)})}function _t(P){const N=P.blocking.everDistricts.includes(1)||P.districtIndex>=1;C.material.color.set(N?R.routeMint:R.inkNavy);const X=(ne,se)=>{ne.children.forEach(Ie=>{const ht=Ie.material;if(ht&&!(ht instanceof Zt)){const Tt=new Qe(se?R.brass:R.moonBlue);ht.color.copy(Tt.multiplyScalar(se?1:.3))}})};X(O,P.districtIndex===0),X(Y,N)}function Ft(P){const N=Math.max(1e-9,168),X=Math.min(1,(P.bundled??0)/N);xe.forEach((ne,se)=>{const Ie=!!P.racks[se]?.unlocked;ne.material.color.set(Ie?"#3a2b46":"#1c1830"),Be[se].visible=Ie;const ht=Math.min(1,Math.max(0,X*at(P)-Pe(P,se))),Tt=He[se];Tt.visible=Ie,Tt.scale.y=Math.max(.02,ht),Tt.position.y=.02+ht/2})}function at(P){return P.racks.filter(N=>N.unlocked).length}function Pe(P,N){let X=0;for(let ne=0;ne<=N;ne++)P.racks[ne]?.unlocked&&X++;return X}function fn(P,N){pe.forEach((X,ne)=>{const se=P.lanes[ne],Ie=!!se?.unlocked,ht=X.material;if(Ie){const Tt=[0,.1,.2][se?.tier??0]??.3;ht.opacity=Math.min(1,.35+.5*N+Tt),ht.color.set(R.routeMint)}else ht.opacity=.12,ht.color.set("#101a30");me[ne].visible=!Ie})}function ot(P,N,X){Mt.scale.y=Math.max(.15,N),Mt.position.y=.18+1.1*Mt.scale.y/2,$e.material.color.set(X?"#17233F":"#2a3d68")}function en(P,N){U.material.color.set(N?R.brass:"#0d1730")}const ti=["#b08d57",R.parchment,"#cfd8e8"];let It=!1,ni=!1,pt=!1;function ln(P,N){const X=it=>P.ch2.districtsAnswered.includes(it);for(const it of[2,3,4,5,6,7,8]){const kt=X(it),pn=Ve[it].material;pn.userData.pulse==null&&pn.color.set(kt?ge[it]:we);const Vi=Oe[it];Vi.lit.visible=kt,Vi.locked.visible=!kt}const ne=[6,7,8].filter(it=>X(it)).length;for(const it of[1,2,3,4,5,6,7,8]){const kt=Ve[it];if(!kt)continue;const pn=1+.35*ne;kt.scale.set(pn,1,pn)}if(X(6)&&!ni){ni=!0;const it=Oe[6].lit.userData.coinTicket;it&&(it.rotation.z=Math.PI/2)}if(X(8)&&!pt){pt=!0;const it=Oe[8].lit.userData.dueCard;it&&(it.position.y=.12)}const se=X(2);if(T.visible=!se,se&&!It){It=!0;const it=Oe[2].lit.userData.hand;it&&(it.rotation.z=-Math.PI/30)}se||(It=!1);const ht=(P.hall.F3??0)>=2,Tt=Math.max(1e-9,Ws(P)),Ir=P.desks.reduce((it,kt)=>it+kt.inProcess,0)/Tt>=.99;Ce.forEach(it=>{it.material.color.set(ht?Ir?"#34506f":R.moonBlue:"#101a30")});const Hi=P.hall.F7??0,kr=Hi>=3?2:Hi>=2?1:0;P.lanes.forEach((it,kt)=>{const pn=it.tier>=5?2:it.tier>=3?1:0,Vi=Math.max(pn,kr);for(const Qd of fe[kt]??[])Qd.material.color.set(ti[Vi])}),Le.forEach((it,kt)=>{it.visible=kt<Math.max(0,N.sdActive)}),_e.forEach((it,kt)=>{const pn=N.sdFills?.[kt]??0;it.visible=pn>0,it.scale.y=Math.min(1,Math.max(0,pn))});const Jd=X(2);S.visible=Jd,z.material.color.set(N.mpDue?R.parchment:"#7a6f52"),We.forEach((it,kt)=>{const Vi=(P.ch2.stampInventory[Fe[kt]]??0)>=250;it.scale.setScalar(Vi?1.35:1),N.stampCapsAt})}const wn=[];function jt(P){const N="#ffd773",X=ne=>{const se=Ve[ne],Ie=se.material;Ie.color.set(N),Ie.userData.pulse=!0,wn.push({mesh:se,base:ge[ne]??R.routeMint,t:1.1})};if(P==null)for(const ne of Object.keys(Ve).map(Number).sort((se,Ie)=>se-Ie))X(ne);else X(P);if(P==null){const ne=Oe[5].lit.userData.water;if(ne){const se=ne.material;se.color.set("#22356b"),setTimeout(()=>se.color.set("#0b1530"),1200)}}}function En(P){for(let N=wn.length-1;N>=0;N--){const X=wn[N];if(X.t-=P,X.t<=0){const ne=X.mesh.material;delete ne.userData.pulse,ne.color.set(X.base),wn.splice(N,1)}}}function Tn(P,N,X){const ne=X?.03:.12;Se>0&&(Se=Math.max(0,Se-P*3)),Dt.position.y=Math.abs(Math.sin(N*2.2))*ne+Math.sin(Se*Math.PI)*.25,Dt.rotation.y=Math.sin(N*.8)*.3,Qn.rotation.y=Math.sin(N*.4)*.18}const cs=[...ci.map((P,N)=>({label:`PAD-${N+1}`,pos:new I(P,.9,1.6)})),...Ec.map((P,N)=>({label:`RACK-${N+1}`,pos:new I(P,1.9,-1.4)})),...di.map((P,N)=>({label:`LANE-${N+1}`,pos:new I(P,.4,-3)})),{label:"STAMP GATE",pos:new I(0,2.1,.3)},{label:"BACKLOG TRAY",pos:new I(-2.6,2.1,4)},{label:"ROUTE MAP",pos:new I(-2.4,4.9,bt)},{label:"PIP",pos:new I(1.65,.8,.95)},{label:"MARA",pos:new I(2.3,2.2,-3.6)},{label:"CLOCKTOWER SEAL",pos:new I(1.7,4.6,bt)},{label:"DIST-CW",pos:new I(1.5,4,bt)},{label:"DIST-MU",pos:new I(2.65,4.5,bt)},{label:"DIST-RG",pos:new I(3.75,4.75,bt)},{label:"DIST-CA",pos:new I(4.8,5,bt)},{label:"SD BOARD",pos:new I(3.35,1.8,1.4)},{label:"MP BASKET",pos:new I(-4.55,1,1.5)},...ci.map((P,N)=>({label:`TRAY-${N+1}`,pos:new I(P-.42,.6,1.35)})),{label:"DIST-MA",pos:new I(5.75,5.05,bt)},{label:"DIST-GQ",pos:new I(6.6,5.2,bt)},{label:"DIST-SL",pos:new I(7.4,5.3,bt)},{label:"MOD DRESSING",pos:new I(-2.4,4.4,bt)}];return{scene:t,pool:ae,flyers:de,lamp:Fn,setLampLevel:tt,deskMeshes:ve,updateDesks:ft,updateLanterns:_t,animateFlyers:Ye,spawnFlyer:Xe,leverKick:()=>{Me=1},pipPulse:()=>{Se=1},updateRacks:Ft,updateLanes:fn,updateTray:ot,updateWall:en,tickCharacters:Tn,debugAnchors:cs,wanderGroup:zi,wanderlights:Nn,spawnWanderlight:x,animateWanderlights:G,despawnWanderlight:k,updateDistricts:ln,updateModDressing:Q,pulseThread:jt,tickChords:En}}const ke={sortHold:"HOLD TO SORT",postage:"Postage",stars:"Stars",districtLL:"Lantern Lane",districtRM:"Rainmarket",districtCW:"Clocktower Ward",buy:"Buy",redraw:"Redraw Routes",waxSealsShort:"Seals",postcards:"Postcards",postcardsEmpty:"No postcards yet — the districts will write when they answer.",postcardsLocked:"Keep delivering to hear from this district.",postcardRead:"Read",postcardNew:"New",morningPost:"Morning Post",morningPostPrompt:"A fresh Morning Post has arrived for the frontier districts.",morningPostGranted:"Morning Post delivered",claim:"Claim",specialDeliveries:"Special Deliveries",specialEmpty:"No special requests yet. Keep delivering to receive requests.",specialStamps:"stamps",specialActive:"In transit",specialReady:"Ready to claim",specialStart:"Start",wanderCaught:"Lantern caught",wanderSeal:"+1 Wax Seal",pendingStarsShort:"★",flatRising:"Compass: rising thread",flatSettling:"Compass: settling thread",flatLevel:"Compass: still — routes spreading thin",flatNudge:"Compass: redraw — the wall has gone quiet",morningPostNextIn:"Next bundle in",morningPostHeldNote:"one bundle sleeps on the counter",specialEndsAt:"Route ends",rushOrder:"Rush Order",rushHeld:"The Unwritten Hour — a ready ×2 route boost for 30:00.",rushActiveUntil:"×2 booked until",officePapers:"Office Papers",roadmap:"After Dawn — Roadmap",dawnTitle:"The first morning",cadenceStrip:"Cadence — settled by design"},Tc=["","K","M","B","T","Qa","Qi","Sx","Sp"];function Kt(n){if(!isFinite(n))return"—";const e=Math.abs(n);if(e<1e3)return n<0?`-${Math.floor(e)}`:`${Math.floor(n)}`;const t=Math.floor(Math.log10(e)/3),i=e/Math.pow(10,t*3),r=Tc[Math.min(t,Tc.length-1)];let s=i.toFixed(2);return s=s.replace(/\.?0+$/,""),`${n<0?"-":""}${s}${r}`}function rr(n){return isFinite(n)?`${Math.floor(n)}`:"—"}const gt={thirdWind:{beat:"ch3.open.1",speaker:"Pip",copy:"Nine answers on the map. The rest is weather."},longReturn:{beat:"ch3.open.2",speaker:"Mara",copy:"It answered while you slept. Sign for it."},f11Rail:{beat:"ch3.open.3",speaker:"Mara",copy:"Rail and road under one roof now. Buy the pair, thank me thrice.",highlight:"satchel"},f12Rail:{beat:"ch3.open.4",speaker:"Pip",copy:"Every stamp in the building just got heavier.",highlight:"route"},modIntro:{beat:"ch3.mod.1",speaker:"Mara",copy:"The forecast is for the routes, not the rain. Read it before you sort.",highlight:"modifier"},ledgerBasis:{beat:"ch3.ledger.1",speaker:"Mara",copy:"Long windows pay steady, not spiky. Steady wins routes."},voyageFrame:{beat:"ch3.voyage.1",speaker:"Pip",copy:"Name's on the ledger. Now we fill the sack."},maAnswer:{beat:"ch3.ma.1",speaker:"Mara",copy:"Wistful machines. Load-bearing nostalgia. Keep walking, Clerk."},modTiming:{beat:"ch3.mod.2",speaker:"Mara",copy:"Yesterday's sky paid routes. Today's pays patience. Choose your wall.",highlight:"modifier"},rushPreview:{beat:"ch3.rush.1",speaker:"Pip",copy:"One golden half-hour. Spend it on a wall that earns its keep.",highlight:"special"},rushGrant:{beat:"ch3.rush.2",speaker:"Pip",copy:"Clock's loud when you wake it. Thirty minutes. Wring it.",highlight:"sort"},rushDeploy:{beat:"ch3.rush.3",speaker:"Mara",copy:"Half an hour of downhill. Mind the brakes.",highlight:"sort"},slClose1:{beat:"ch3.sl.1",speaker:"Mara",copy:"Three districts, one silence, finally broken. Well routed."},slClose2:{beat:"ch3.sl.1b",speaker:"Pip",copy:"*West.* I can smell the platforms."}},$0=[{districtIndex:6,id:"moonlit_arcade",name:"Moonlit Arcade",body:"The route-miniature runs out along a midway of shuttered stalls; coin-wells and ticket drums sit dark — then one brass coin-ticket spins itself upright, clatters once, and lies still. Every stall’s paper glows faintly addressed.",speaker:"Mara",speakerLine:"They spent the coins on ink long ago. Thriftier than it sounds.",arrivalCopy:null},{districtIndex:7,id:"glasshouse_quarter",name:"Glasshouse Quarter",body:"Greenhouse panes above a sleeping market row; pressed flowers ride inside every envelope like held breath. Condensation on one pane resumes writing a word it began in an earlier chapter — and finishes.",speaker:"Pip",speakerLine:"Shhh. Everything in here is sleeping *on purpose*.",arrivalCopy:null},{districtIndex:8,id:"sleepless_library",name:"Sleepless Library",body:"Shelf-aisles run past the frame in both directions; the lamps never quite go out. A book drops onto the counter on its own — its due-card pre-stamped TOMORROW. For a moment every thread on the map leans west.",speaker:"Mara",speakerLine:"Three districts, one silence, finally broken. *Well routed.*",arrivalCopy:null}],Ac={rain_sheen:{id:"rain_sheen",name:"Rain Sheen",glyph:"rain-glaze",wash:"#5B79C8",dressingNote:"rain glaze on the hall glass",effectLine:"Slick roofs. Fast lanes."},backlog_surge:{id:"backlog_surge",name:"Backlog Surge",glyph:"pile",wash:"#17233F",dressingNote:"the backlog pile visibly taller",effectLine:"More mail tonight. More everything."},perfect_moon:{id:"perfect_moon",name:"Perfect Moon",glyph:"halo",wash:"#D6A84B",dressingNote:"moon halo over the route map",effectLine:"Clean streaks come easy tonight."},tailwind:{id:"tailwind",name:"Tailwind Night",glyph:"streamers",wash:"#72D6C1",dressingNote:"mint streamers on the lanes",effectLine:"Every lane leans west."},long_shadows:{id:"long_shadows",name:"Long Shadows",glyph:"lamp-dim",wash:"#D6A84B",dressingNote:"lamps dim one step, longer cones",effectLine:"The ledger reads longer into the dark."},stamp_fair:{id:"stamp_fair",name:"Stamp Fair",glyph:"bunting",wash:"#F4E7C7",dressingNote:"paper bunting over the counter",effectLine:"Every pocket rattles twice."},wax_festival:{id:"wax_festival",name:"Wax Festival",glyph:"wax-drips",wash:"#6D3E78",dressingNote:"plum wax drips on desk brass",effectLine:"The seals come off warm."}},Cc={endsPrefix:"ends",forecastDeltaLabel:"tomorrow"},Ds={basis:"settled at your usual pace",trim:"The ledger held what it could hold. — M.Q.",longShadows:"The lamps stayed low all night. The letters didn't mind."},q0={sd7Preview:"Reward: one golden half-hour"},Y0=["Daily-modifier rotation state (deterministic — the forecast keeps its day)","Special-delivery board v2 state (4–8 h wall-clock timers keep ticking)","Rush Order held/active (one golden half-hour, hold ≤1)","Stamp rows: Moonlit Arcade · Glasshouse Quarter · Sleepless Library","Night Ledger median minute-ring (settled-at-your-pace basis)"],Zr=7,Rd="midnight-dispatch.save.v1";function Pd(){return{gates:{rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1},moonlit_arcade:{listValue:0,rvDone:!1,listDone:!1},glasshouse_quarter:{listValue:0,rvDone:!1,listDone:!1},sleepless_library:{listValue:0,rvDone:!1,listDone:!1},cloudline_station:{listValue:0,rvDone:!1,listDone:!1},aurora_borough:{listValue:0,rvDone:!1,listDone:!1},last_light_observatory:{listValue:0,rvDone:!1,listDone:!1}},checklist:[],railsFired:[],everDistricts:[0],eRunRaw:0,snapshotRate:0,nightMs:0,ch2Pending:[],ch2FiredEver:[],evapSpanMax:{},installDayIndex:0,ledgerRing:[],runStartWall:0}}function ar(){return{stampInventory:{},specialDeliveries:{offers:[],active:[],done:[]},morningPost:{lastClaimTs:null,held:0},waxSeals:0,postcardCounters:{},postcards:{read:[],sealAwarded:[],unlockedEmitted:[]},districtsAnswered:[0],horizonSealAction:null,rush:{held:!1,activeEndTs:null}}}function or(){return{replyFired:!1,roundTrip:{open:!1,completed:{}},cosmetics:{owned:[],equipped:{desk:null,rack:null,map_frame:null,pip:null}},sdRepeat:{preReply:[]}}}function dn(){return{streak:{count:0,lastKey:0},doubler:{day:0,used:0},notifications:{optIn:!1,inviteShown:!1,quietHoursFrom:22,quietHoursTo:8},album:{shadowCredits:0,level:1,anchor:0},dawn:{fired:!1,replyAtMs:null},stubs:{seen:{license:!1,priority:!1,pack40:!1,pack100:!1,pack230:!1,album:!1,never_row:!1},trayRailed:!1},a2:{state:"unseen",channels:{return_ready:!0,rotation:!0,mastery:!0},rotationHourLocal:19,cardShown:0,browserDenyLineShown:!1,lastRotationDay:null,lastReturnReadyGapTs:null,masteryFired:[],queue:[]},loopBaseRun:null,dayLog:{day:null,sessions:0,loops:0,emittedDay:null}}}function Ld(){return Array.from({length:an.count},(n,e)=>({unlocked:e===0,tier:0,inProcess:0}))}function Dd(){return Array.from({length:Un.count},(n,e)=>({unlocked:e===0,tier:0}))}function Id(){return Array.from({length:In.count},(n,e)=>({unlocked:e===0,tier:0}))}function yr(){const n=Date.now();return{v:Zr,savedAt:n,run:0,postage:0,totalEarnedRun:0,stars:0,starMultiplier:1,redrawCount:0,backlog:90,bundled:0,desks:Ld(),racks:Dd(),lanes:Id(),hall:{},districtIndex:0,districtRouteValue:0,perfect:1,onboarded:!1,clipsSeen:[],ledgerWindow:2*3600,ledgerAwayRate:0,lastLedgerTs:n,doublersUsed:0,doublerDay:0,doublerTracked:!1,returnCardPending:!1,reducedMotion:!1,blocking:Pd(),ch2:ar(),ch4:or(),ch5:dn(),liveMod:null,rushActive:null}}function j0(n){const e=n.deskTiers??[0,0,0,0],t=n.deskInProcess??[0,0,0,0],i=typeof n.satchelTier=="number"?n.satchelTier:0,r=n.routeTiers??[0,0],s=n.hall??{},a=Array.from({length:an.count},(d,f)=>({unlocked:!0,tier:e[f]??0,inProcess:t[f]??0})),o=Array.from({length:Un.count},(d,f)=>({unlocked:f===0,tier:f===0?i:0})),c=Array.from({length:In.count},(d,f)=>({unlocked:f<r.length,tier:r[f]??0})),l={};s.letterValue&&(l.F1=Math.min(5,s.letterValue)),s.sortRate&&(l.F2=Math.min(5,s.sortRate)),s.backlogPool&&(l.F4=Math.min(4,s.backlogPool)),s.perfectRamp&&(l.F5=Math.min(5,s.perfectRamp));const h={...n};return delete h.deskTiers,delete h.deskInProcess,delete h.satchelTier,delete h.routeTiers,delete h.backlogLevel,h.desks=a,h.racks=o,h.lanes=c,h.hall=l,h}const K0={2:j0};function Z0(n){const e=new Date(n);return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function J0(n){const e=n,t=yr(),i=typeof n.v=="number"?n.v:0,r={...t,...e},s=(e.desks??t.desks).map((p,g)=>({unlocked:p?.unlocked??g===0,tier:p?.tier??0,inProcess:p?.inProcess??0}));for(;s.length<an.count;)s.push({unlocked:s.length===0,tier:0,inProcess:0});const a=(e.racks??t.racks).map((p,g)=>({unlocked:p?.unlocked??g===0,tier:p?.tier??0}));for(;a.length<Un.count;)a.push({unlocked:a.length===0,tier:0});const o=(e.lanes??t.lanes).map((p,g)=>({unlocked:p?.unlocked??g===0,tier:p?.tier??0}));for(;o.length<In.count;)o.push({unlocked:o.length===0,tier:0});r.desks=s,r.racks=a,r.lanes=o,r.hall={...e.hall??{}};const c=e.blocking,l=Pd();r.blocking={...l,...c??{}},r.blocking.installDayIndex=c?.installDayIndex??Z0(typeof e.savedAt=="number"?e.savedAt:Date.now()),r.blocking.ledgerRing=Array.isArray(c?.ledgerRing)?c.ledgerRing:[],r.blocking.runStartWall=typeof c?.runStartWall=="number"?c.runStartWall:Date.now(),r.blocking.gates={rainmarket:{...l.gates.rainmarket,...c?.gates?.rainmarket??{}},horizon:{...l.gates.horizon,...c?.gates?.horizon??{}},museum:{...l.gates.museum,...c?.gates?.museum??{}},rooftop:{...l.gates.rooftop,...c?.gates?.rooftop??{}},canal:{...l.gates.canal,...c?.gates?.canal??{}},moonlit_arcade:{...l.gates.moonlit_arcade,...c?.gates?.moonlit_arcade??{}},glasshouse_quarter:{...l.gates.glasshouse_quarter,...c?.gates?.glasshouse_quarter??{}},sleepless_library:{...l.gates.sleepless_library,...c?.gates?.sleepless_library??{}},cloudline_station:{...l.gates.cloudline_station,...c?.gates?.cloudline_station??{}},aurora_borough:{...l.gates.aurora_borough,...c?.gates?.aurora_borough??{}},last_light_observatory:{...l.gates.last_light_observatory,...c?.gates?.last_light_observatory??{}}};const h=e.ch2;r.ch2={...ar(),...h??{},specialDeliveries:{...ar().specialDeliveries,...h?.specialDeliveries??{}},morningPost:{...ar().morningPost,...h?.morningPost??{}},postcards:{...ar().postcards,...h?.postcards??{}},rush:{...ar().rush,...h?.rush??{}},horizonSealAction:h!=null?h.horizonSealAction??null:e.redrawCount!=null&&e.redrawCount>0?"advance_bond":"redraw_claim"};const d=e.ch4;r.ch4={...or(),...d??{},roundTrip:{...or().roundTrip,...d?.roundTrip??{},completed:{...d?.roundTrip?.completed??{}}},cosmetics:{...or().cosmetics,...d?.cosmetics??{},owned:Array.isArray(d?.cosmetics?.owned)?d.cosmetics.owned:[],equipped:{...or().cosmetics.equipped,...d?.cosmetics?.equipped??{}}},sdRepeat:{...or().sdRepeat,...d?.sdRepeat??{},preReply:Array.isArray(d?.sdRepeat?.preReply)?d.sdRepeat.preReply:[]}};const f=e.ch5;if(r.ch5={...dn(),...f??{},streak:{...dn().streak,...f?.streak??{}},doubler:{...dn().doubler,...f?.doubler??{}},notifications:{...dn().notifications,...f?.notifications??{}},album:{...dn().album,...f?.album??{}},dawn:{...dn().dawn,...f?.dawn??{}},stubs:{...dn().stubs,...f?.stubs??{},seen:{...dn().stubs.seen,...f?.stubs?.seen??{}},trayRailed:f?.stubs?.trayRailed===!0},a2:{...dn().a2,...f?.a2??{},channels:{...dn().a2.channels,...f?.a2?.channels??{}},masteryFired:Array.isArray(f?.a2?.masteryFired)?f.a2.masteryFired:[],queue:Array.isArray(f?.a2?.queue)?f.a2.queue:[]},loopBaseRun:typeof f?.loopBaseRun=="number"?f.loopBaseRun:null,dayLog:{...dn().dayLog,...f?.dayLog??{}}},f==null&&(typeof e.doublerDay=="number"&&e.doublerDay>0&&(r.ch5.doubler.day=e.doublerDay),typeof e.doublersUsed=="number"&&(r.ch5.doubler.used=e.doublersUsed)),h==null)for(const p of["clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"])r.ch2.postcardCounters[p]=r.ch2.postcardCounters[p]??0;if(!h?.districtsAnswered?.length){const p=r.blocking.everDistricts;r.ch2.districtsAnswered=p?.length?[...p].sort((g,v)=>g-v):[0]}if(i<5)for(const p of["moonlit_arcade","glasshouse_quarter","sleepless_library"])r.ch2.postcardCounters[p]=r.ch2.postcardCounters[p]??0;if(i<6)for(const p of["cloudline_station","aurora_borough","last_light_observatory"])r.ch2.postcardCounters[p]=r.ch2.postcardCounters[p]??0;return{...r,v:Zr,liveMod:null,rushActive:null}}function Q0(n){if(n==null||typeof n!="object")return yr();const e=n,t=typeof e.v=="number"?e.v:0;if(t>Zr)throw new Error(`Save version ${t} is newer than supported ${Zr}`);if(t<1)return yr();let i=n;for(let r=t;r<Zr;r++){const s=K0[r];s&&(i=s(i))}return J0(i)}function kd(n){const{savedAt:e,lastLedgerTs:t,liveMod:i,rushActive:r,...s}=n,a=l=>{if(l===null||typeof l!="object")return JSON.stringify(l)??"null";if(Array.isArray(l))return`[${l.map(a).join(",")}]`;const h=l;return`{${Object.keys(h).sort().filter(d=>!(d==="runStartWall"&&h[d]===h[d])).map(d=>`${JSON.stringify(d)}:${a(h[d])}`).join(",")}}`},o=a(s);let c=2166136261;for(let l=0;l<o.length;l++)c^=o.charCodeAt(l),c=Math.imul(c,16777619);return(c>>>0).toString(16).padStart(8,"0")}function e_(n,e){const t=Yt[e];if(!t)return!1;const i=n.hall[e]??0;if(i>=t.tiers)return!1;const r=t.cost[i]??1/0;return n.postage<r?!1:(n.postage-=r,n.hall[e]=i+1,!0)}function Zo(n,e){return an.unlock[e]??1/0}function t_(n,e){const t=n.desks[e];if(!t||t.unlocked)return!1;const i=Zo(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function Jo(n,e){const t=n.desks[e];if(!t||!t.unlocked)return 1/0;const i=(n.hall.F6??0)>0,r=an.tier[t.tier+1]??1/0;return i?Math.ceil(r*an.F6.costMult):r}function n_(n,e){const t=Jo(n,e),i=n.desks[e];return!i||!i.unlocked||i.tier>=an.caps.length-1||n.postage<t?!1:(n.postage-=t,i.tier+=1,!0)}function Qo(n,e){return Un.unlock[e]??1/0}function i_(n,e){const t=n.racks[e];if(!t||t.unlocked)return!1;const i=Qo(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function el(n,e){const t=n.racks[e];return!t||!t.unlocked?1/0:Un.tier[t.tier+1]??1/0}function r_(n,e){const t=n.racks[e];if(!t||!t.unlocked)return!1;const i=el(n,e);return t.tier>=Un.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}function tl(n,e){return In.unlock[e]??1/0}function s_(n,e){const t=n.lanes[e];if(!t||t.unlocked)return!1;const i=tl(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function nl(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return 1/0;const i=n.hall.F7??0,r=In.F7,s=r.costMultPerTier;let a=1;i>=1&&(a=r.costMult);for(let o=2;o<=i;o++)a*=s;return Math.ceil((In.tier[t.tier+1]??1/0)*a)}function a_(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return!1;const i=nl(n,e);return t.tier>=In.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}const o_=2e3,fr=[],l_=[],Xs={};function c_(){fr.length=0;for(const n of Object.keys(Xs))delete Xs[n]}function Ue(n,e,t={},i){if(!Object.values(De).includes(e))throw new Error(`unknown md event: ${e}`);const r={local_day:null,loop_n:null},s={name:e,run_id:n.run,night_ms:Math.round(n.blocking.nightMs),stars_banked:n.stars,district:n.districtIndex,props:t,local_day:r.local_day,loop_n:r.loop_n};fr.push(s),fr.length>o_&&fr.shift(),Xs[e]=(Xs[e]??0)+1;for(const a of[...l_])a(s);return s}function d_(n){return n?fr.filter(n):[...fr]}function as(n){return n.ch4.replyFired}function Js(n){return n.ch4.roundTrip.open}function h_(n){return Xt[n]?.id??null}function il(n,e,t,i){const r=es[e];if(!r)return;const s=r.seals,a=r.stars;n.ch2.waxSeals+=s,n.stars+=a,n.starMultiplier=1+Lt.starMultStep*n.stars,Ue(n,De.rtComplete,{district:e,kind:t,payout_seals:s,payout_stars:a,retro:i})}function Ud(n){if(Js(n))for(const e of Object.keys(es)){const t=n.ch4.roundTrip.completed[e];if(t?.A)continue;const i=es[e];(n.ch2.postcardCounters[e]??0)>=i.target.letters&&(n.ch4.roundTrip.completed[e]={...t??{},A:!0},il(n,e,"A",!0))}}function u_(n,e){if(!Js(n))return;const t=es[e];if(!t||!t.target.modifier)return;const i=n.ch4.roundTrip.completed[e];i?.B||(n.liveMod?.id??null)===t.target.modifier&&(n.ch4.roundTrip.completed[e]={...i??{},B:!0},il(n,e,"B",!1))}function f_(n,e,t){if(!Js(n))return;const i=es[e];if(!i||i.target.courierMin==null)return;const r=n.ch4.roundTrip.completed[e];if(r?.C)return;(t-n.blocking.runStartWall)/1e3<=i.target.courierMin*60&&(n.ch4.roundTrip.completed[e]={...r??{},C:!0},il(n,e,"C",!1))}function p_(n){return n.ch4.replyFired?!1:(n.ch4.replyFired=!0,Ue(n,De.finaleFire,{cumulative_active_s:Math.round(n.blocking.nightMs/1e3),wall_age_s:Math.round(n.blocking.nightMs/1e3)}),n.ch4.roundTrip.open||(n.ch4.roundTrip.open=!0,Ue(n,De.rtOpen,{district:Fd,kind:"open",payout_seals:0,payout_stars:0,retro:!0})),Ud(n),!0)}const Fd="last_light_observatory";function m_(n,e,t){const i=h_(e);if(i){if(i===Fd&&!n.ch4.replyFired){p_(n);return}Js(n)&&(u_(n,i),f_(n,i,t))}}function g_(n){if(!as(n))return 0;const e=n.ch4.sdRepeat.preReply;let t=0;for(const i of e)N0.repeatableAfterReply.includes(i)&&(n.ch2.specialDeliveries.offers.some(r=>r.recipeId===i&&!r.claimed)||n.ch2.specialDeliveries.offers.push({recipeId:i,endTs:0,claimed:!1}),Ue(n,De.sdRepeatOffer,{recipe_id:i,cycle_n:n.run}),t++);return t}function __(n){return Object.values(n.hall).reduce((e,t)=>e+(t??0),0)}function Nd(n){const e=n.hall.F10??0;let t=Hr.hfac;return e>=4?t=Hr.hfacAfterF10T4:e>=3?t=Hr.hfacAfterF10T3:e>=2?t=Hr.hfacAfterF10T2:e>=1&&(t=Hr.hfacAfterF10),n.blocking.eRunRaw*(1+t*__(n))}function Mn(n){return n.districtIndex===0?"rainmarket":n.districtIndex===1?"horizon":n.districtIndex===2?"museum":n.districtIndex===3?"rooftop":n.districtIndex===4?"canal":n.districtIndex===5?"moonlit_arcade":n.districtIndex===6?"glasshouse_quarter":n.districtIndex===7?"sleepless_library":n.districtIndex===8?"cloudline_station":n.districtIndex===9?"aurora_borough":n.districtIndex===10?"last_light_observatory":null}function Bi(n,e){const t=n.rushActive===!0?Gs.multX:1,i=e*B0(n)*t;n.postage+=i,n.blocking.eRunRaw+=i;const r=Mn(n);return r&&(n.blocking.gates[r].listValue+=i),y_(n),i}function v_(n,e,t){Bi(n,e);const i=[...n.blocking.everDistricts].sort((o,c)=>o-c),r=n.districtIndex,s=i.filter(o=>o<r),a=Xt[r]?.id;if(a&&(n.ch2.postcardCounters[a]=(n.ch2.postcardCounters[a]??0)+Math.floor(t*wc.frontierShare)),s.length>0){const o=t*wc.fanShareUniform/s.length;for(const c of s){const l=Xt[c]?.id;l&&(n.ch2.postcardCounters[l]=(n.ch2.postcardCounters[l]??0)+Math.floor(o))}}x_(n),Ud(n)}function x_(n){for(const[e,t]of Object.entries(n.ch2.postcardCounters)){const i=Vr.p[e];if(i==null)continue;const r=n.ch2.stampInventory,s=r[e]??0;if(s>=Vr.cap)continue;const a=Math.ceil(1/i),o=Math.floor(t/a);if(o<=0)continue;const c=Math.min(o,Vr.cap-s);c<=0||(r[e]=s+c,n.ch2.postcardCounters[e]=t-c*a,s<Vr.cap&&r[e]>=Vr.cap&&Ue(n,De.stampCapped,{district:e}))}}function y_(n){const e=Mn(n);if(!e)return;const t=Dn[e],i=n.blocking.gates[e],r=Nd(n);!i.rvDone&&r>=t.rv&&(i.rvDone=!0,Ue(n,De.gateCross,{gate:t.id,req:"rv",t_s:n.blocking.nightMs/1e3})),!i.listDone&&i.listValue>=t.deliveryList&&(i.listDone=!0,Ue(n,De.gateCross,{gate:t.id,req:"list",t_s:n.blocking.nightMs/1e3}))}function b_(n,e){const t=n.blocking.gates[e];return!t.listDone&&t.listValue>=Dn[e].deliveryList*L0}function Od(n){return n.ch2.horizonSealAction??"redraw_claim"}function br(n){return Od(n)==="advance_bond"}function M_(n,e){return e==="horizon"?Od(n):Dn[e].action}function S_(n,e){return M_(n,e)!=="advance_bond"?!1:n.blocking.gates[e].listDone&&n.postage>=Dn[e].bond}function w_(n,e){const t=Dn[e];return n.districtIndex!==t.to-1||!S_(n,e)?!1:(n.postage-=t.bond,Ue(n,De.purchase,{kind:"bond",id:e,cost:t.bond,wallet_after:n.postage}),n.districtIndex=t.to,n.blocking.everDistricts.includes(t.to)||n.blocking.everDistricts.push(t.to),n.ch2.districtsAnswered.includes(t.to)||n.ch2.districtsAnswered.push(t.to),t.to>=2&&(n.ch2.waxSeals+=F0.districtAdvanceCh2),Ue(n,De.advance,{district:Xt[t.to].id,t_s:n.blocking.nightMs/1e3,bond:t.bond}),m_(n,t.to,Date.now()),!0)}function E_(n){const e=Mn(n);return!e||!w_(n,e)?null:n.districtIndex}function Ua(n){return n.blocking.gates.horizon.listDone&&!br(n)}function T_(n){n.blocking.gates={rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1},moonlit_arcade:{listValue:0,rvDone:!1,listDone:!1},glasshouse_quarter:{listValue:0,rvDone:!1,listDone:!1},sleepless_library:{listValue:0,rvDone:!1,listDone:!1},cloudline_station:{listValue:0,rvDone:!1,listDone:!1},aurora_borough:{listValue:0,rvDone:!1,listDone:!1},last_light_observatory:{listValue:0,rvDone:!1,listDone:!1}},n.blocking.eRunRaw=0,n.blocking.nightMs=0,n.blocking.runStartWall=Date.now(),n.blocking.checklist=[],n.blocking.railsFired=[]}function A_(){return{desks:Ld(),racks:Dd(),lanes:Id()}}function os(n){return n<=0?0:V0(n)}function rl(n){return os(n.blocking.eRunRaw)}function C_(n){return 1+Lt.starMultStep*n}function R_(n){const e=rl(n),t=n.blocking.eRunRaw;return Ue(n,De.redrawShow,{stars_pending:e,earned_booked:t}),{starsPending:e,earnedBooked:t}}function P_(n,e,t){const i=n.blocking.eRunRaw,r=os(i);Ue(n,De.redrawClaim,{stars_awarded:r,earned_booked:i,forecast_shown:e,cycle_age_s:t?.cycleAgeS??n.blocking.nightMs/1e3,seal_share_at_claim:t?.sealShareAtClaim??null,voluntary:t?.voluntary??!1}),n.stars+=r,n.starMultiplier=C_(n.stars),n.redrawCount+=1,n.run+=1,n.ch2.horizonSealAction!=="advance_bond"&&(n.ch2.horizonSealAction="advance_bond"),n.postage=0,n.totalEarnedRun=0;for(const a of Object.keys(n.hall))n.hall[a]=0;const s=A_();return n.desks=s.desks,n.racks=s.racks,n.lanes=s.lanes,n.backlog=yr().backlog,n.bundled=0,n.perfect=0,n.districtIndex=0,n.districtRouteValue=0,n.blocking.snapshotRate=0,T_(n),g_(n),{starsAwarded:r,earnedBooked:i,forecastShown:e,multiplierNext:n.starMultiplier}}const Rc=new WeakMap;function Bd(n){let e=Rc.get(n);return e||(e={ring:[],run:n.run,armFired:!1,nudgeFired:!1,cardFired:!1,flatForS:0},Rc.set(n,e)),e}function zd(n,e){e.run!==n.run&&(e.ring=[],e.run=n.run,e.armFired=!1,e.nudgeFired=!1,e.cardFired=!1,e.flatForS=0)}function Qs(n){const e=Mn(n);return e?n.blocking.gates[e].listValue/Dn[e].deliveryList:1}function L_(n){return Qs(n)<Cn.nudgeSealShareBelow}function Co(n,e){const t=n.blocking.nightMs/1e3,i=t-Cn.windowS,r=e.ring.length?e.ring[e.ring.length-1].pending:os(n.blocking.eRunRaw);let s=null;if(e.ring.length&&e.ring[0].t<=i){let f=e.ring[0].pending;for(const p of e.ring)if(p.t<=i)f=p.pending;else break;s=r-f}const a=t>=Cn.armFloorS,o=a&&s!=null&&s<=Cn.windowMaxStars,c=Qs(n),l=e.flatForS>=Cn.cardAfterS,h=e.flatForS>=Cn.nudgeAfterS&&c<Cn.nudgeSealShareBelow,d=l?"level":a?"settling":"rising";return{armed:a,windowFlat:o,card:l,flatForS:e.flatForS,nudge:h,sealShare:c,pending:r,windowDelta:s,glyph:d,cycleAgeS:t}}function D_(n){const e=Bd(n);zd(n,e);const t=n.blocking.nightMs/1e3,i=e.ring.length?e.ring[e.ring.length-1].t:-1/0;if(t-i>=1){e.ring.push({t,pending:os(n.blocking.eRunRaw)});const r=t-(Cn.windowS+60);for(;e.ring.length&&e.ring[0].t<r;)e.ring.shift();const s=Co(n,e);e.flatForS=s.windowFlat?e.flatForS+1:0,s.armed&&!e.armFired&&(e.armFired=!0,Ue(n,De.flatArm,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare})),e.flatForS>=Cn.nudgeAfterS&&s.sealShare<Cn.nudgeSealShareBelow&&!e.nudgeFired&&(e.nudgeFired=!0,Ue(n,De.flatNudge,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare}))}return Co(n,e)}function Ro(n){const e=Bd(n);return zd(n,e),Co(n,e)}const Hd={lantern_lane:[{id:"ll1",districtId:"lantern_lane",slot:1,sender:"Old Naomi, Window 3",subject:"The lamp that remembers",body:'She keeps one envelope from every night she has worked. "Not the post," she insists, "the proof we were here." Tonight her shelf ran out of room, so she mailed the first one onward.',reaction:"Lantern Lane answers: a warm hum, steady as breathing."},{id:"ll2",districtId:"lantern_lane",slot:2,sender:"Clinker, the night cat",subject:"A pawprint on the seal",body:"Clinker has no address and approves of nothing. Still, a packet arrived bearing a single muddy print in the wax — his way of saying the lane is paying attention after all. No return address. Obviously.",reaction:"The lane answers: a soft, rumbling purr through the floor."},{id:"ll3",districtId:"lantern_lane",slot:3,sender:"The Lamplighter",subject:"Twelve wicks, one thread",body:'Every lamp on the lane lit for the first time in a decade. "A clerk who finishes the list," the Lamplighter wrote, "deserves to see the whole street." The wicks burn low and golden, all facing the same direction.',reaction:"Lantern Lane answers: all twelve lamps bow toward the route map."}],rainmarket:[{id:"rm1",districtId:"rainmarket",slot:1,sender:"Marta, awning seller",subject:"Dry seats",body:`Marta roofed the three driest benches under her awning "for the post's sake." The ink on her note bled from the rain, but the message held: the market remembers which trades carried it through its quiet years.`,reaction:"Rainmarket answers: the awnings snap once, in salute."},{id:"rm2",districtId:"rainmarket",slot:2,sender:"The Tally Boys",subject:"Ledger of small mercies",body:'A fold of paper listing every kindness the market owes — the returned scarf, the two saved crates, the lantern loaned after midnight. "Not debt," they wrote. "A standing account." They sign it with a thumbprint in red ink.',reaction:"Rainmarket answers: a bell rings three times over the stalls."},{id:"rm3",districtId:"rainmarket",slot:3,sender:"Mother Kettle",subject:"The first tea in years",body:'She boiled the urn the moment the route reopened and poured for whoever came through the gate. "Post first," she told her kettle, "then the world can wait." The cup left out for the clerk is still warm.',reaction:"Rainmarket answers: steam rises, patient and certain, from a single cup."}],clocktower_ward:[{id:"cw1",districtId:"clocktower_ward",slot:1,sender:"The Keeper of Hours",subject:"Time, postmarked",body:'The great clock had stopped for so long that the ward forgot its own rhythm. When the first route reached it, the Keeper reset all four faces and sent a note: "We were waiting for someone to bring us the news of the world before striking the hour."',reaction:"Clocktower Ward answers: the chimes ring, once, in the dusk."},{id:"cw2",districtId:"clocktower_ward",slot:2,sender:"Wren, the archivist",subject:"A minute in a jar",body:'Wren keeps one saved minute from every clock she has coaxed back to life. "A captured minute," she wrote, "is a town that agreed to move together." She sent the newest jar to the route maps, so the past reaches the present by post.',reaction:"Clocktower Ward answers: the jar ticks softly with the returned route."},{id:"cw3",districtId:"clocktower_ward",slot:3,sender:"The First Night-Watch",subject:"The ward signs on",body:'A single sheet, signed in four different hands, carries the ward into the network. "We will answer," it reads, "as long as the mail keeps moving." Below the signatures, a date was left blank for the clerk to fill.',reaction:"Clocktower Ward answers: all four faces strike, together, for the first time."}],museum_after_dark:[{id:"ma1",districtId:"museum_after_dark",slot:1,sender:"Curator Vale",subject:"The wing lit for one",body:'The museum never opens its eastern wing after dark — except, Vale notes, for the night the mail arrived. She hung a single lamp so a clerk could read the row of brass plates in peace. "History stays," she wrote, "if someone keeps the lights willing to show it."',reaction:"Museum After Dark answers: a door unlatches, quietly, on its own."},{id:"ma2",districtId:"museum_after_dark",slot:2,sender:"A voice from Case 12",subject:"Do not cover us",body:'A note folded inside a velvet case. "We were the ones who talked to the dark," it reads in neat, old-fashioned script. "Now that talk has a route, do not put the cloths back over us." No signature. The case label lists no artist.',reaction:"Museum After Dark answers: a single case light stays lit against the rule."},{id:"ma3",districtId:"museum_after_dark",slot:3,sender:"The Night Guard",subject:"The last name on the wall",body:'The museum keeps a wall of names of those who kept it at night. The guard added one more at the end, with room after it. "A name that arrives by post," he wrote, "counts as having been here." The ink is still wet.',reaction:"Museum After Dark answers: the hall rings like a struck glass, just once."}],rooftop_gardens:[{id:"rg1",districtId:"rooftop_gardens",slot:1,sender:"Sister Fern",subject:"Water, spared",body:'The gardens live on what the rains give them. Sister Fern saved a full jar "for the route," so the couriers would have something standing between the way-stops. "Even the mail," she wrote, trailing a leaf, "needs a drink before it climbs."',reaction:"Rooftop Gardens answers: a vine reaches one leaf toward the lane."},{id:"rg2",districtId:"rooftop_gardens",slot:2,sender:"The Beekeepers of the roof",subject:"A hive in the route",body:'They set the hive beside the highest sorting ledge, where the drift of envelopes passes. "The bees count," their note insists, "and they like the weight of mail riding the same wind." Honey drips over the word "welcome."',reaction:"Rooftop Gardens answers: a low, green hum under the roof tiles."},{id:"rg3",districtId:"rooftop_gardens",slot:3,sender:"The Gardener Who Stays",subject:"Seeds, one per route",body:'He pressed a small seed into every envelope he sent. "Grow one for each road you reopen," he wrote. "By spring this city will be a garden that answers by name." The packet is heavy with humid soil and stubborn hope.',reaction:"Rooftop Gardens answers: green threads curl up along the outermost lane."}],canal_of_echoes:[{id:"ce1",districtId:"canal_of_echoes",slot:1,sender:"The Singing Ferryman",subject:"A fare of silence",body:'The canals carry sound farther than they carry boats, and the ferryman calls across at night. He sent his fare as a single held note, folded into paper, "so the clerk would hear the district before seeing it." The note still vibrates faintly.',reaction:"Canal of Echoes answers: a whisper slides the whole length of the water."},{id:"ce2",districtId:"canal_of_echoes",slot:2,sender:"The Barge Children",subject:"Things the water returns",body:'The children fish lost mail out of the canal and press it flat on the stones to dry. Their packet holds nothing stolen — only what the water gave back. "We are the last stop for the lost," they wrote, "send us the ones you cannot reach."',reaction:"Canal of Echoes answers: ripples map themselves into a route on the surface."},{id:"ce3",districtId:"canal_of_echoes",slot:3,sender:"The Voice Under the Bridge",subject:"An address that travels",body:`A single sheet, one line: "Whatever you build, build a place the far ones can write to." No sender's name, but a worn snail-shell sat in the fold, addressed on its side in faint chalk. The shell is warm to the touch.`,reaction:"Canal of Echoes answers: the whole canal carries the name back in one long chord."}],moonlit_arcade:[{id:"ml1",districtId:"moonlit_arcade",slot:1,sender:"The ticket-taker who counts stubs by lamplight",subject:"A perforated moon ticket",body:'Every night she counts the stubs nobody claimed and tickets the ones still warm. "A stub is a promise somebody made," she wrote, "and this one was yours to carry." Her lamp gutters exactly once, like a nod.',reaction:"Moonlit Arcade answers: she stamps the letter VOID, then frames it behind the glass anyway."},{id:"ml2",districtId:"moonlit_arcade",slot:2,sender:"An initials-only score-card rival, initials worn off",subject:"A spiral of three linked tickets",body:'The score card arrived tallied to the last game but never signed — whoever held the crown wore the letters off their own name first. The margin reads: "Your turn. Initials optional."',reaction:"Moonlit Arcade answers: the top-score line quietly changes one letter: N.C."},{id:"ml3",districtId:"moonlit_arcade",slot:3,sender:"The carousel's last painter, retired twice",subject:"Chipped gold leaf",body:'He retired the brushes twice and the carousel twice refused to notice. Tonight a fleck of gold leaf rode the envelope like it knew the way home. "One horse," he wrote. "That is all a painter owes the dark."',reaction:"Moonlit Arcade answers: he repaints exactly one horse in the envelope's blue, then stops again."}],glasshouse_quarter:[{id:"gq1",districtId:"glasshouse_quarter",slot:1,sender:"A night-blooming botanist with patient gloves",subject:"Pressed violet",body:"She works the beds only after the lamps are low, when the glass cools enough to hold a breath. Between two pages she has kept every petal the post ever carried — a garden that blooms on paper.",reaction:"Glasshouse Quarter answers: she slides the envelope between two glass plates and labels the species *epistola*."},{id:"gq2",districtId:"glasshouse_quarter",slot:2,sender:"Two siblings who argued by bouquet for a decade",subject:"Twin seeds on one stem",body:'Ten years of roses thornier than the last, then tulips sharper than those. The packet holds two seeds fused at the waist: "We agree," it reads, "only that the other should hear about it first."',reaction:"Glasshouse Quarter answers: each plants a thank-you at opposite ends of the same bed; truce by geography."},{id:"gq3",districtId:"glasshouse_quarter",slot:3,sender:"The greenhouse itself, written in humidity",subject:"Fern-shadow blot",body:"No hand wrote this one. The condensation gathered through the night in fern-shadow script and the blot dried in the shape of a name only the panes use. It is addressed to the building, care of you.",reaction:"Glasshouse Quarter answers: one pane blooms frost mid-summer, shaped like a stamp corner."}],sleepless_library:[{id:"sl1",districtId:"sleepless_library",slot:1,sender:"A cataloguer who keeps shelf-space for unwritten books",subject:"A blank spine",body:'Every shelf leaves exactly one gap for the books that have not happened yet. "The catalogue is faith, not record," the note reads. "Keep my gap dusted. Something will want it."',reaction:"Sleepless Library answers: she files the letter under FORTHCOMING and dusts the gap around it."},{id:"sl2",districtId:"sleepless_library",slot:2,sender:"Twin readers who borrow each other's endings",subject:"A mirrored bookplate",body:"They read the same books in mirrored order and have never once agreed on a final page. The bookplate in the envelope is printed twice, flipped — each insists the other side is the front.",reaction:"Sleepless Library answers: both write back the same night, each claiming the other's last page was better."},{id:"sl3",districtId:"sleepless_library",slot:3,sender:"The author, postmarked from inside the stacks' future",subject:"Ink not yet dry",body:'Dated years from now, stamped somewhere the map has not reached. "Finish the collection," it says. "I am nearly done writing it." The ink was still wet — is, perhaps, still not dry.',reaction:"Sleepless Library answers: it returns a library card bearing the Clerk's signature — dated years from now."}],cloudline_station:[{id:"cs1",districtId:"cloudline_station",slot:1,sender:"The rigging-gaffer who ties knots that remember",subject:"The knot that holds",body:'Every knot she ties is one that has held a slipstream aloft longer than anyone trusted. "A good knot," she writes, "earns the weight it is asked to carry." Her stamp is a laced loop-knot.',reaction:'Cloudline Station answers: she hauls the letter up by hand-line rather than trust the winch — "so it arrives earned".'},{id:"cs2",districtId:"cloudline_station",slot:2,sender:"A thermal-chaser who forecasts weather nobody else can feel",subject:"A warm kind of forecast",body:'He reads the updrafts the way others read ink — by feel, a half-second before they settle into proof. Three rising ring-gusts form his stamp. "Ride what I felt first," the note says, "and the mail is always on time."',reaction:"Cloudline Station answers: he releases a stamped slip into the same thermal; it lands back at the office an hour later, warm."},{id:"cs3",districtId:"cloudline_station",slot:3,sender:"The last signal-kite keeper of the old night mail",subject:"A kite tethered to a wax moon",body:'The keepers were said to be gone, and the big brass kites with them. Not all. One still flies the highest line, and on its tail-tag is a kite tethered to a wax moon. "Kept it aloft for you, Clerk."',reaction:"Cloudline Station answers: he ties the letter to the highest kite; at dawn the whole platform reads it against the light."}],aurora_borough:[{id:"ab1",districtId:"aurora_borough",slot:1,sender:"A sign-painter mixing colors with no names yet",subject:"A brushstroke horizon",body:'She grinds pigment for hues the street has no word for yet, and skims the nap of the sky off the top. Her stamp is a single brushstroke horizon. "Name this one," the note challenges, "and the sign is yours."',reaction:"Aurora Borough answers: she re-letters her own shop sign overnight, adding one line: REPLIES RECEIVED."},{id:"ab2",districtId:"aurora_borough",slot:2,sender:"Twin bakers whose feud is conducted entirely in icing",subject:"A split piped rosette",body:'Two ovens, one family, and a rivalry settled only in sugar. The rosette on the envelope is piped in two halves, each to a different recipe. "Send this," one insists, "so we can stop talking."',reaction:"Aurora Borough answers: each pipes the thank-you onto a loaf sent to the other; truce by sugar."},{id:"ab3",districtId:"aurora_borough",slot:3,sender:"The borough lamplighter who works by aurora-glow",subject:"A lantern filled with ribboned light",body:'He tends lamps that need no flame, only the wandering color that hangs over the rooftops on clear nights. His stamp is a lantern filled with ribboned light. "It shines brightest after the letters arrive."',reaction:"Aurora Borough answers: he hangs the letter inside the lamp glass; for one night the whole street glows in answer."}],last_light_observatory:[{id:"llo1",districtId:"last_light_observatory",slot:1,sender:"The keeper of the tide-clock, who notes the sky's appointments",subject:"An inscribed brass dial",body:'The tide-clock keeps appointments no one else schedules — comets, conjunctions, the slow breathing of the far weather. Its dial, inscribed with a single arrow, is the stamp. "Arrivals are the only schedule I trust."',reaction:'Last Light Observatory answers: he logs the letter as "received, on schedule, eleven nights early".'},{id:"llo2",districtId:"last_light_observatory",slot:2,sender:"A retired comet-cartographer with ink-stained gloves",subject:"A long-tailed comet, ink still wet",body:'She mapped orbits until her hands forgot their own borders, then kept mapping for the joy of it. Her comet-stamp is drawn in still-wet ink. "I redrew the sky without you," she teases, "and the office is now at the center."',reaction:"Last Light Observatory answers: she redraws her last map, placing the office at the center."},{id:"llo3",districtId:"last_light_observatory",slot:3,sender:"The observatory dome itself, turning on old bearings",subject:"A lens-iris closed around a stamp",body:'The dome turns on worn bearings older than most street names, and tonight it turns not toward the sky but toward the city. Its stamp is a lens-iris closed around a postmark. "For the clerk who made the city face itself."',reaction:"Last Light Observatory answers: it flashes the reply signal once more, just for the Clerk."}]};function Vd(){const n=["lantern_lane","rainmarket","clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes","moonlit_arcade","glasshouse_quarter","sleepless_library"],e=[];for(const t of n){const i=Hd[t]??[];for(const r of[...i].sort((s,a)=>s.slot-a.slot))e.push(r)}return e}function ts(n,e){if(n.ch2.morningPost.held>0)return!0;if(n.ch2.morningPost.lastClaimTs==null)return!1;const t=Ui.cadenceH*36e5;return e-n.ch2.morningPost.lastClaimTs>=t}function I_(n,e){if(!ts(n,e))return 0;const t=Xt[n.districtIndex]?.id,i=t?Ui.grantByFrontier[t]??0:0;return i<=0?0:(Bi(n,i),n.ch2.morningPost.held=0,n.ch2.morningPost.lastClaimTs=e,i)}function k_(n,e){n.ch2.morningPost.lastClaimTs==null&&n.districtIndex>=2&&(n.ch2.morningPost.lastClaimTs=e-Ui.cadenceH*36e5,n.ch2.morningPost.held=Ui.maxHeld)}function U_(n){const e=n.hall.F9??0,t=Yt.F9;return e>=5?t.wanderCadenceT5:e>=4?t.wanderCadenceT4:e>=3?t.wanderCadenceT3:e>=1?t.wanderCadenceT1:t.wanderCadenceBase}function F_(n){const e=n.hall.F9??0,t=Yt.F9;return e>=5?t.wanderGrandChanceT5:e>=4?t.wanderGrandChanceT4:e>=3?t.wanderGrandChanceT3:Zn.grandChance}function N_(n){const e=n.hall.F9??0,t=Yt.F9;return e>=5?t.wanderSealChanceT5:e>=4?t.wanderSealChanceT4:e>=2?t.wanderSealChanceT2:Zn.sealChance}function O_(n,e){const t=jo(n),i=n.hall.F9??0,r=Yt.F9,s=i>=5?r.wanderRewardMultT5:i>=4?r.wanderRewardMultT4:i>=2?r.wanderRewardMultT2:1,a=Math.floor(e==="grand"?t*Zn.grandRewardLetterMult:t*Zn.normalRewardLetterMult*s);return Bi(n,a),e==="grand"&&(n.ch2.waxSeals+=Zn.grandWaxSeals),a}function B_(n,e,t){if(t>=Zn.maxConcurrent||n.districtIndex<2)return!1;const i=U_(n)*1e3;return e>=i}function Gd(n){return Ni.recipes.find(e=>e.id===n)}function Wd(n,e){const t=Xt.findIndex(i=>i.id===e.available);return t>=0&&n.districtIndex>=t}function Xd(n,e){for(const[t,i]of Object.entries(e.stamps))if((n.ch2.stampInventory[t]??0)<i)return!1;return!0}function z_(n,e,t){const i=Gd(e);if(!i||!Wd(n,i)||!Xd(n,i)||n.ch2.specialDeliveries.active.length>=Ni.maxActiveTimers)return!1;for(const[r,s]of Object.entries(i.stamps))n.ch2.stampInventory[r]=(n.ch2.stampInventory[r]??0)-s;return n.ch2.specialDeliveries.active.push({recipeId:e,endTs:t+Math.round(i.timerH*36e5),claimed:!1}),!0}function H_(n,e,t){const i=n.ch2.specialDeliveries.active.find(r=>r.recipeId===e&&!r.claimed);return!!i&&t>=i.endTs}function V_(n,e,t){const i=n.ch2.specialDeliveries.active.find(c=>c.recipeId===e&&!c.claimed);if(!i||t<i.endTs)return 0;const r=Gd(e);if(!r)return 0;const s=as(n);let a;if(s)a=Sd;else{const c=Mn(n);if(!c)return 0;a=Dn[c].deliveryList}let o=Math.floor(a*r.rewardPct);if(r.rush?(o=0,!n.ch2.rush.held&&n.ch2.rush.activeEndTs==null&&(n.ch2.rush.held=!0,Ue(n,De.rushGrant,{active_s:Gs.activeS}))):Bi(n,o),i.claimed=!0,n.ch2.specialDeliveries.done.push({...i}),n.ch2.specialDeliveries.active=n.ch2.specialDeliveries.active.filter(c=>c!==i),!s){const c=n.ch4.sdRepeat.preReply;c.includes(e)||c.push(e)}return o}function G_(n,e){return!n.ch2.rush.held||n.ch2.rush.activeEndTs!=null&&e<n.ch2.rush.activeEndTs?!1:(n.ch2.rush.held=!1,n.ch2.rush.activeEndTs=e+Gs.activeS*1e3,Ue(n,De.rushActivate,{active_s:Gs.activeS,ends_local_ts:n.ch2.rush.activeEndTs}),!0)}function Po(n,e){const t=n.ch2.rush.activeEndTs,i=t!=null&&e<t,r=n.rushActive;return n.rushActive=i,r===!0&&!i&&Ue(n,De.rushExpire,{end_local_ts:t??null}),i}function W_(n){n.ch2.waxSeals+=1}function $d(n,e){const t=wd[e.districtId];if(!t)return!1;const i=t[e.slot-1];return i==null?!1:(n.ch2.postcardCounters[e.districtId]??0)>=i}function Lo(n){return Vd().map(e=>({story:e,unlocked:$d(n,e),read:n.ch2.postcards.read.includes(e.id)}))}function X_(n){return Lo(n).filter(e=>e.unlocked&&!e.read).length}function $_(n,e){return n.ch2.postcards.sealAwarded.includes(e)}function q_(n,e){const t=Vd().find(i=>i.id===e);return!t||!$d(n,t)?!1:(n.ch2.postcards.read.includes(e)||(n.ch2.postcards.read.push(e),t.slot===3&&!$_(n,t.districtId)&&(n.ch2.postcards.sealAwarded.push(t.districtId),W_(n))),!0)}function Do(n){const e=new Date(n);return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function $s(n,e){const t=U0.table;if(!t.length)return null;const i=(n.blocking.installDayIndex+Do(e)+7*1e4)%t.length;return t[i]??null}function Y_(n,e){const t=$s(n,e);return t?{id:t.id,slot:t.slot,deskCapX:t.deskCapX??1,routeX:t.routeX??1,poolX:t.poolX??1,refillX:t.refillX??1,psMaxAdd:t.psMaxAdd??0,rampX:t.rampX??1,rampMinS:t.rampMinS??0,satchelX:t.satchelX??1,ledgerAccrualX:t.ledgerAccrualX??1,stampPX:t.stampPX??1,lampSealX:t.lampSealX??1,lampGrandX:t.lampGrandX??1}:{...Ed}}function j_(n,e){const t=$s(n,e),i=n.liveMod?.id??null,r=n.liveMod==null,s=Y_(n,e);return n.liveMod=s,r?Ue(n,De.modShow,{mod_id:s.id,day_index:Do(e),ends_local_ts:Io(e)}):t&&i!==null&&i!==t.id&&Ue(n,De.modRotate,{mod_id:t.id,day_index:Do(e),ends_local_ts:Io(e)}),t}function Io(n){const e=new Date(n);return new Date(e.getFullYear(),e.getMonth(),e.getDate()+1).getTime()}function K_(n,e=Date.now()){n.lastLedgerTs=e,n.savedAt=e}function ls(n=Date.now()){const e=new Date(n);return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Z_(n,e,t=Date.now()){const i=ls(t);if(n.ch5?.doubler&&n.ch5.doubler.day!==i&&(n.ch5.doubler.day=i,n.ch5.doubler.used=0),n.doublerDay=i,n.ch5?.doubler){if(n.ch5.doubler.used>=3)return!1;n.ch5.doubler.used+=1,n.doublersUsed=n.ch5.doubler.used}else{if(n.doublersUsed>=3)return!1;n.doublersUsed+=1}return n.postage+=e,n.totalEarnedRun+=e,!0}const J_=60,Pc=new WeakMap;function Q_(n,e){let t=Pc.get(n);const i=Math.floor(n.blocking.nightMs/6e4);if(!t||t.minuteIdx!==i){if(t)for(n.blocking.ledgerRing.push(t.acc);n.blocking.ledgerRing.length>Td.medianRingMax;)n.blocking.ledgerRing.shift();t={minuteIdx:i,acc:0},Pc.set(n,t)}e>0&&(t.acc+=e)}function ev(n){const e=n.blocking.ledgerRing;if(!e.length)return null;const t=[...e].sort((s,a)=>s-a),i=t.length;return(i%2===1?t[(i-1)/2]:(t[i/2-1]+t[i/2])/2)/60}function Lc(n){const e=n.hall.F8??0,t=Yt.F8;return e>=2&&t.capHoursAfterT2!=null?t.capHoursAfterT2:e>=1&&t.capHoursAfter!=null?t.capHoursAfter:ss.capHours}function tv(n){const e=n.hall.F3??0,t=Yt.F3;return e>=4&&t.awayFractionAfterT4!=null?t.awayFractionAfterT4:e>=1&&t.awayFractionAfter!=null?t.awayFractionAfter:ss.awayFraction}function nv(n,e,t){if(e<=0)return;const i=e/Math.max(1e-9,t),r=Math.min(1,t/J_);n.blocking.snapshotRate+=(i-n.blocking.snapshotRate)*r}function Dc(n,e=Date.now()){const t=Math.max(0,(e-n.lastLedgerTs)/1e3),i=n.blocking.snapshotRate,r=ev(n),s=r??i;if(t<ss.neverEmptyElapsedS||s<=0){const p={kind:"never-empty",elapsedS:t,capS:Lc(n)*3600,base:0,doubled:!1,doublerLeftToday:Ic(n),snapshotRate:s,medianRate:r,raw:0,trim:0,capReference:Mn(n)?"frontier":n.ch4.replyFired?"terminal":null};return n.lastLedgerTs>0&&t>=1&&Ue(n,De.ledgerReturn,{elapsed_s:t,credited:0,snapshot_rate:s,doubled:!1}),n.lastLedgerTs=e,n.lastLedgerTs>0?p:null}const a=Lc(n)*3600,c=Math.min(t,a)*tv(n)*s*(n.liveMod?.ledgerAccrualX??1);let l=c,h=0;const d=Mn(n),f=d?"frontier":n.ch4.replyFired?"terminal":null;if(f!=null){const p=d?Math.max(0,Dn[d].deliveryList-n.blocking.gates[d].listValue):Sd,g=Td.claimCapFracOfFrontierRem*p;l>g&&(h=l-g,l=g)}return n.totalEarnedRun+=l,Bi(n,l),Ue(n,De.ledgerClaim,{elapsed_s:t,cap_h:a/3600,median_rate:r,ema_rate:i,raw:c,posted:l,trimmed:h>0,cap_reference:f}),Ue(n,De.ledgerReturn,{elapsed_s:t,credited:l,snapshot_rate:s,doubled:!1}),n.lastLedgerTs=e,{kind:"ledger",elapsedS:t,capS:a,base:l,doubled:!1,doublerLeftToday:Ic(n),snapshotRate:s,medianRate:r,raw:c,trim:h,capReference:f}}function Ic(n,e=Date.now()){const t=ls(e),i=n.ch5?.doubler,r=i?i.day===t?i.used:0:n.doublerDay===t?n.doublersUsed:0;return Math.max(0,ss.doublerMaxPer24h-r)}function iv(n,e){return e.kind!=="ledger"||e.doubled||!Z_(n,e.base)?!1:(Bi(n,e.base),e.doubled=!0,!0)}function sl(n){return n.blocking.ch2FiredEver}function Gt(n,e){return sl(n).includes(e)}function Jt(n,e,t={}){return sl(n).push(e.beat),Ue(n,De.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight,...t}}const kc=new WeakMap;function ea(n){let e=kc.get(n);return e||(e={primed:!1,eraStartRun:null,rushPrev:"empty",maRvPrev:!1,runSeen:n.run,wallAgeS:0,returns:[],nudgeFiredThisRun:!1,pending:[]},kc.set(n,e)),e}function ta(n){return n.ch2.districtsAnswered.includes(5)}function al(n){const e=ea(n);return e.eraStartRun==null?-1:Math.max(0,n.run-e.eraStartRun)}function rv(n){const e=n.hall.F4??0,i=Lt.backlogRefillBase*Math.pow(Lt.backlogRefillScale,e)*(n.liveMod?.refillX??1)*Ad(n),r=qo(n)/Lt.satchelBufferSeconds,s=Yo(n);return{flipped:r<i&&r<s,supplyRate:i,satchelRate:r,routeRate:s}}function qd(n){const e=ea(n),t=Qs(n),i=t>0&&t<1?(1-t)/t*(e.wallAgeS/3600):null,r=e.returns;return{rows:r,deltas:r.map(s=>s.delta),etaH:i,sealShare:t,wallAgeS:e.wallAgeS,nudge:!1,armed:e.wallAgeS>=$r.returnArmedFloorS,flatD1:r.length>=1?r[r.length-1].delta:null,flatD2:r.length>=2?r[r.length-2].delta:null}}function Uc(n,e){const t=ea(n);if(!ta(n))return;t.eraStartRun==null&&(t.eraStartRun=n.run),t.runSeen!==n.run&&(t.runSeen=n.run,t.wallAgeS=0,t.returns=[],t.nudgeFiredThisRun=!1),t.wallAgeS+=e.elapsedS;const i=os(n.blocking.eRunRaw),r=t.returns.length?t.returns[t.returns.length-1].pendingAfter:sv(n,t),s=Qs(n),a=s>0&&s<1?(1-s)/s*(t.wallAgeS/3600):null;t.returns.push({idx:t.returns.length+1,pendingAfter:i,delta:i-r,sealShare:s,etaH:a,elapsedS:e.elapsedS,wallAgeS:t.wallAgeS}),al(n)===0&&(t.returns.length===1&&!Gt(n,gt.longReturn.beat)&&t.pending.push(Jt(n,gt.longReturn)),t.returns.length===2&&!Gt(n,gt.ledgerBasis.beat)&&t.pending.push(Jt(n,gt.ledgerBasis)));const o=Mn(n),c=o?!n.blocking.gates[o].listDone:!1,l=t.returns.length>=2?t.returns[t.returns.length-2].sealShare:null,h=l!=null&&s<l,d=t.returns.length>=1?t.returns[t.returns.length-1].delta:null,f=t.returns.length>=2?t.returns[t.returns.length-2].delta:null,p=d!=null&&f!=null&&d<=$r.returnFlatMaxStarsPerReturn&&f<=$r.returnFlatMaxStarsPerReturn,g=t.wallAgeS>=$r.returnArmedFloorS;!t.nudgeFiredThisRun&&!h&&c&&g&&p&&(a??0)>$r.nudgeSealEtaHours&&(t.nudgeFiredThisRun=!0,Ue(n,De.returnNudge,{cycle_age_s:Math.round(t.wallAgeS),pending_d1:d,pending_d2:f,seal_share:s,seal_eta_h:a}),t.pending.push({beat:"ch3.voyage-nudge",speaker:null,copy:null,voyageNudge:!0}))}function sv(n,e){const t=e.returns[e.returns.length-1];return t?t.pendingAfter-t.delta:0}function av(n,e){const t=[];if(!ta(n))return t;const i=$0.find(r=>r.districtIndex===e);if(i){const r=`ch3.vignette.${i.id}`;Gt(n,r)||(sl(n).push(r),Ue(n,De.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:`${i.body}
— ${i.speakerLine}`,vignette:i})),i.id==="moonlit_arcade"&&!Gt(n,gt.maAnswer.beat)&&t.push(Jt(n,gt.maAnswer)),i.id==="glasshouse_quarter"&&!Gt(n,gt.rushPreview.beat)&&t.push(Jt(n,gt.rushPreview)),i.id==="sleepless_library"&&(Gt(n,gt.slClose1.beat)||t.push(Jt(n,gt.slClose1)),Gt(n,gt.slClose2.beat)||t.push(Jt(n,gt.slClose2)),t.push({beat:"ch3.west-lean",speaker:null,copy:null,chord:{district:null,composite:!0}}))}if(e>=6){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(a=>a.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+8,district:e});const s=[6,7,8].filter(a=>n.ch2.districtsAnswered.includes(a)).length;Ue(n,De.mapWestward,{cycle:al(n),threads_lit:s})}return t}function ov(n,e){ta(n)&&Ue(n,De.cycleClose,{wall_s:Math.round(e.wallS),sessions:e.sessions,claim:e.claimStars,ledger_share:e.ledgerShare,furn_share:e.furnShare,modifier_slots:e.modSlots.join(","),rush_spent:e.rushSpent})}function lv(n,e,t,i){const r=[],s=ea(n);if(Po(n,e),!ta(n))return r;s.eraStartRun==null&&(s.eraStartRun=n.run),s.runSeen!==n.run&&(s.runSeen=n.run,s.wallAgeS=0,s.returns=[],s.nudgeFiredThisRun=!1),s.wallAgeS+=t,Q_(n,i);const a=n.blocking.nightMs/1e3,o=al(n);s.primed||(s.primed=!0,s.rushPrev=Fc(n,e),s.maRvPrev=n.blocking.gates.moonlit_arcade.rvDone),o===0&&(Gt(n,gt.thirdWind.beat)||r.push(Jt(n,gt.thirdWind)),a>=4&&!Gt(n,gt.f11Rail.beat)&&r.push(Jt(n,gt.f11Rail,{pulseFamilies:["satchel","route"]})),a>=7&&!Gt(n,gt.f12Rail.beat)&&r.push(Jt(n,gt.f12Rail)),n.liveMod?.id&&!Gt(n,gt.modIntro.beat)&&r.push(Jt(n,gt.modIntro))),o===1&&!Gt(n,gt.modTiming.beat)&&r.push(Jt(n,gt.modTiming));const c=n.blocking.gates.moonlit_arcade.rvDone;c&&!s.maRvPrev&&!Gt(n,gt.voyageFrame.beat)&&r.push(Jt(n,gt.voyageFrame)),s.maRvPrev=c;const l=Fc(n,e);return l==="held"&&s.rushPrev!=="held"&&!Gt(n,gt.rushGrant.beat)&&r.push(Jt(n,gt.rushGrant)),l==="active"&&s.rushPrev!=="active"&&!Gt(n,gt.rushDeploy.beat)&&r.push(Jt(n,gt.rushDeploy)),s.rushPrev=l,s.pending.length&&(r.push(...s.pending),s.pending=[]),r}function Fc(n,e){const t=n.ch2.rush;return t.held?"held":t.activeEndTs!=null&&e<t.activeEndTs?"active":t.activeEndTs!=null?"spent":"empty"}function cv(n,e){const t=Ni.recipes.find(a=>a.id===e);if(!t)return!1;const i=t.availableWhenAnswered??t.available,r=Xt.findIndex(a=>a.id===i);return!(r<0||!(t.availableWhenAnswered?n.ch2.districtsAnswered.includes(r):n.districtIndex>=r)||t.rush&&(n.ch2.rush.held||n.ch2.rush.activeEndTs!=null&&n.rushActive===!0))}const dv={dawn:{copy:"File your night, Clerk. The city will keep until tomorrow."}},Fa={postRule:"dawn is a memory, not a state",replayLabel:"Remember the first morning"},Nc=[2,2,3,3,4,4,5];function hv(n){return n<=0?0:Nc[Math.min(n,Nc.length)-1]??0}const uv={maxPerDay:3},Yn={modifiersPerLocalDay:1,sdActiveTimersMax:3,morningPostHeldMax:1,morningPostCadenceMinS:28800,doublerPerLocalDay:3,timerSourcesEnumerated:["modifier_window","special_delivery","morning_post","doubler_day_window"],sdBlockedCard:n=>`All satchels are out tonight — the next one returns at ${n}.`,stripSlots:["sky","hourglasses","stamp","pips"]},Oc={banner:"Not enabled in this web build.",footer:"If this ever goes live, its exact contents and price appear here before anyone is charged."},fv=[{id:"license",title:"Night Clerk License",priceLine:"$7.99",frame:"brass",motif:"lamp",body:["Would add, permanently: 2 auto-sort slots — two desk pads keep sorting unattended at base rate","longer offline buffer — Night Ledger cap 8 h → 12 h","a brass desk lamp for the shelf (cosmetic)."],honesty:"None of this is required to finish the ladder. Every district, every star, every shelf item is earnable without it."},{id:"priority",title:"Priority Post",priceLine:"$3.99 / month",frame:"plum-neutral",motif:"stamp-stack",body:["Nothing is listed, because nothing is promised: its disposition is optional, revisited only once a live cadence exists."],honesty:null},{id:"pack40",title:"Wax Seal pack — 40",priceLine:"$1.99",frame:"parchment",motif:"wax-40",seals:40,body:["Would buy 40 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"pack100",title:"Wax Seal pack — 100",priceLine:"$3.99",frame:"parchment",motif:"wax-100",seals:100,body:["Would buy 100 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"pack230",title:"Wax Seal pack — 230",priceLine:"$6.99",frame:"parchment",motif:"wax-230",seals:230,body:["Would buy 230 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"album",title:"Seal Album",priceLine:"$4.99 to crack",frame:"plum",motif:"album-meter",body:["Your earned Wax Seals: {wax} — they are all yours already; nothing is withheld or held.","Album preview: it would hold {album_credits} seal-credits today (shadow meter: +0.5 per Wax Seal you earn · cap {cap}) · cracking it would pay the meter out once, empty it, and raise the cap +50 per album level (level {level})."],honesty:null}],pv={text:"Never built, by design: buying value that play already banked · premium-currency packs · timed-boost currencies · premium access tiers · any paid random reward."},mv="Office Papers",Is={shadowCreditsPerSeal:.5,capCredits:250,capRaisePerLevel:50},qs={quietHoursLocal:{fromH:22,toH:8}},ks={cardTitle:"The office can knock, if you let it.",cardBody:"Off by default. If you turn them on: when the ledger is full (once per gap) · tonight’s sky read (once a day, hour of your choosing) · when a mastery target completes (when it happens — rarely). Quiet from 22:00 to 08:00, always. Every timer in the office shows its exact end time whether or not you ever turn these on.",turnOn:"Turn them on",notNow:"Not now"};function gv(n){const e=Math.floor(n/1e4),t=Math.floor(n%1e4/100),i=n%100,r=new Date(e,t-1,i);return r.setDate(r.getDate()-1),r.getFullYear()*1e4+(r.getMonth()+1)*100+r.getDate()}function _v(n){return hv(n)}function vv(n,e=Date.now()){const t=ls(e),i=n.ch5.streak;if(i.lastKey===t)return 0;let r;i.lastKey===0?r=1:i.lastKey===gv(t)?r=i.count+1:r=1;const s=_v(r);return s<=0?0:(i.count=r,i.lastKey=t,n.ch2.waxSeals+=s,Ue(n,De.streakGrant,{day:r,seals:s}),s)}function Na(n,e=Date.now()){const t=ls(e),i=n.ch5.doubler,r=i.day===t?i.used:0;return Math.max(0,uv.maxPerDay-r)}function xv(n,e=Date.now(),t=0){const i=Yn.sdActiveTimersMax,r=n.ch2.morningPost.held,s=n.ch5.doubler.day===ls(e)?n.ch5.doubler.used:0,a=t>=Yn.modifiersPerLocalDay,o=n.ch2.specialDeliveries.active.length>=i,c=r>=Yn.morningPostHeldMax,l=s>=Yn.doublerPerLocalDay,h=a||o||c||l,d=o?Yn.sdBlockedCard("--:--"):"";return{modifiersToday:t,sdActiveTimers:n.ch2.specialDeliveries.active.length,morningPostHeld:r,doublerUsedToday:s,atCeiling:h,note:d,timerSourcesMatch:!0}}function Yd(n){return!n.ch5.notifications.inviteShown}function Bc(n){n.ch5.notifications.inviteShown||(n.ch5.notifications.inviteShown=!0,Ue(n,De.notifInvite,{}))}function zc(n,e){n.ch5.notifications.optIn=e,e&&Ue(n,De.notifOptIn,{quiet_from:qs.quietHoursLocal.fromH,quiet_to:qs.quietHoursLocal.toH})}function yv(n){return as(n)&&!n.ch5.dawn.fired}function bv(n,e=!1){return!as(n)||!e&&n.ch5.dawn.fired?!1:(e||(n.ch5.dawn.fired=!0),Ue(n,e?De.dawnReplay:De.dawnFire,{replay:e}),!0)}const Oa={lantern_lane:{glyph:"◈",thread:R.routeMint,addr:"Lantern Lane, Window 3 · the night route",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="30" y="4" width="14" height="6" rx="2" fill="#D6A84B"/><path d="M28 13h18l-3 14a6 6 0 0 1-12 0z" fill="#D6A84B"/><rect x="34" y="31" width="6" height="6" rx="1" fill="#F4E7C7"/><path d="M20 38h34v8H20z" fill="#17233F"/></svg>'},rainmarket:{glyph:"☂",thread:R.routeMint,addr:"Rainmarket, Marta’s awnings · the wet stalls",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M12 24h50l-6 8H18z" fill="#C74B55"/><path d="M18 32h4v12h-4zM30 32h4v12h-4zM42 32h4v12h-4zM54 32h4v12h-4z" fill="#6D3E78"/><path d="M8 34a4 3 0 0 0 8 0z" fill="#5B79C8" opacity=".6"/></svg>'},clocktower_ward:{glyph:"◔",thread:R.brass,addr:"Clocktower Ward, the four faces · Keeper of Hours",motif:'<svg viewBox="0 0 74 54" fill="none"><circle cx="37" cy="27" r="14" fill="none" stroke="#D6A84B" stroke-width="2"/><circle cx="37" cy="27" r="3" fill="#17233F"/><path d="M37 27v-8M37 27l6 4" stroke="#17233F" stroke-width="2" stroke-linecap="round"/><path d="M10 45h54" stroke="#17233F" stroke-width="2"/></svg>'},museum_after_dark:{glyph:"🏛",thread:R.plum,addr:"Museum After Dark, eastern wing · Curator Vale",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M14 38h46v5H14z" fill="#6D3E78"/><path d="M14 34h46v4H14z" fill="#3a2b46"/><rect x="8" y="24" width="58" height="10" fill="#6D3E78"/><rect x="18" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="34" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="50" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="8" y="21" width="58" height="3" fill="#6D3E78"/></svg>'},rooftop_gardens:{glyph:"❧",thread:"#a8e6c9",addr:"Rooftop Gardens, the highest ledge · Sister Fern",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M12 44c8-6 12-18 10-30" stroke="#2e5d49" stroke-width="2" fill="none"/><path d="M14 34c6 0 10-3 12-9M16 26c5 1 10-1 14-7M18 40c7-2 10-6 12-12" stroke="#3f6f5a" stroke-width="1.5" fill="none"/><circle cx="40" cy="14" r="5" fill="#a8e6c9" opacity=".9"/></svg>'},canal_of_echoes:{glyph:"⌒",thread:R.moonBlue,addr:"Canal of Echoes, under the bridge · the ferryman",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M8 30a16 16 0 0 1 32 0v0a22 22 0 0 1 26-3" fill="none" stroke="#17233F" stroke-width="3"/><path d="M4 44h66" stroke="#5B79C8" stroke-width="3"/><path d="M10 44c3-2 7-2 10 0M30 44c3-2 7-2 10 0M50 44c3-2 7-2 10 0" stroke="#F4E7C7" stroke-width="1.5"/></svg>'},moonlit_arcade:{glyph:"✦",thread:R.plum,addr:"Moonlit Arcade, the midway · coin-wells and quiet stalls",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="6" y="12" width="15" height="24" rx="2" fill="#1f3050"/><rect x="25" y="12" width="15" height="24" rx="2" fill="#1f3050"/><path d="M6 34h15v4H6zM25 34h15v4H25z" fill="#5B79C8"/><rect x="48" y="18" width="9" height="11" rx="5" fill="#3a2b46"/><circle cx="64" cy="21" r="5" fill="#D6A84B"/><path d="M64 25v-8M60 22h8" stroke="#17233F" stroke-width="1.6"/><path d="M8 44h58" stroke="#17233F" stroke-width="2"/></svg>'},glasshouse_quarter:{glyph:"❀",thread:R.routeMint,addr:"Glasshouse Quarter, the sleeping market row · pressed flowers",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M10 44V28h54v16H10z" fill="#2e5d49" opacity=".9"/><path d="M16 28l6-12 6 12M32 28l5-10 5 10M48 28l6-12 6 12" stroke="#0f3a2e" stroke-width="2"/><rect x="34" y="8" width="6" height="16" rx="2" fill="#17233F"/><circle cx="37" cy="43" r="4" fill="#a8e6c9"/><circle cx="37" cy="43" r="1.5" fill="#17233F"/><path d="M34 48h6" stroke="#17233F" stroke-width="1.6"/></svg>'},sleepless_library:{glyph:"❖",thread:R.moonBlue,addr:"Sleepless Library, the shelf-aisles · lamps that never go out",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="8" y="20" width="58" height="22" rx="2" fill="#3a2b46"/><path d="M14 26h24M14 34h24M46 26h14M46 34h14" stroke="#5B79C8" stroke-width="2"/><path d="M20 46l10-5 8 7 10-8 8 6" stroke="#17233F" stroke-width="2" fill="none"/><rect x="50" y="6" width="16" height="11" rx="1" fill="#F4E7C7" stroke="#17233F"/><path d="M53 10h10M53 13h7" stroke="#17233F" stroke-width="1.5"/></svg>'}};function Mv(n){switch(n){case"clocktower_ward":return"CW";case"museum_after_dark":return"MU";case"rooftop_gardens":return"RG";case"canal_of_echoes":return"CA";case"lantern_lane":return"LL";case"rainmarket":return"RM";case"moonlit_arcade":return"MA";case"glasshouse_quarter":return"GQ";case"sleepless_library":return"SL";default:return n.slice(0,2).toUpperCase()}}const Sv=[{title:"Postal Circles",body:"Asynchronous shared delivery targets and grades — shipped only if D7 retention and economy simulations support them."},{title:"Expeditions & keepsakes",body:"A keepsake layer fueling old-district reuse; light v1 hooks already reachable through special deliveries."},{title:"Standing Orders",body:"A permanent Compass-Star sink for late-game upgrades. Revisited once a live single-currency loop exists."},{title:"Completion modifier",body:"A Prophecy-style chapter-completion multiplier, deferred per the research modify rule."},{title:"Cloud save · Showcase · 28-day track",body:"Account/cloud continuity, a shelf showcase, and a full mastery track — research-gated behind D1/D7 validation."},{title:"Priority Post decision",body:"Revisited only once a live cadence exists; nothing is promised, and nothing ships hidden behind it."}];class wv{root;cb;top;meters;seals;sortBtn;plumeFill;plume;panelLayer;ring;sortHeld=!1;reduceMotion;redrawShown=null;sealsCollapsed=!1;lastCoachSig="";postcardsBtn;morningPostBtn;specialBtn;rushBtn;modCard;ledgerChip;voyageNudge=!1;wanderBadge;_state=null;flatChip;meterSig="";officePapersBtn;cadenceStrip;constructor(e,t,i){this.root=e,this.cb=t,this.reduceMotion=i,this.root.innerHTML="",this.top=this.el("div","hud-top"),this.meters=this.el("div","hud-meters"),this.seals=this.el("div","seal-row"),this.panelLayer=this.el("div","hud-panel-layer"),this.ring=this.el("div","guide-ring"),this.ring.style.display="none";const r=this.el("div","hud-controls");this.plume=this.el("div","plume"),this.plumeFill=this.el("div","plume-fill"),this.plume.appendChild(this.plumeFill);const s=this.el("div","plume-cap");this.plume.appendChild(s),this.sortBtn=this.el("button","sort-btn"),this.sortBtn.textContent=ke.sortHold,this.sortBtn.style.background=R.sealingRed,this.bindSortBtn(),r.appendChild(this.plume),r.appendChild(this.sortBtn),this.root.appendChild(this.top),this.root.appendChild(this.meters),this.root.appendChild(this.seals),this.root.appendChild(this.panelLayer),this.root.appendChild(r),this.root.appendChild(this.ring);const a=this.el("button","seal-toggle");a.textContent="SEALS",a.addEventListener("click",()=>{this.sealsCollapsed=!this.sealsCollapsed,this.seals.classList.toggle("collapsed",this.sealsCollapsed)}),this.root.appendChild(a),this.postcardsBtn=this.el("button","postcards-btn"),this.postcardsBtn.textContent=ke.postcards.toUpperCase(),this.postcardsBtn.addEventListener("click",()=>this.showPostcardsPanel()),this.root.appendChild(this.postcardsBtn),this.officePapersBtn=this.el("button","officepapers-btn"),this.officePapersBtn.textContent=ke.officePapers.toUpperCase(),this.officePapersBtn.addEventListener("click",()=>{this._state&&this.showMonetizationStubs(this._state)}),this.root.appendChild(this.officePapersBtn),this.morningPostBtn=this.el("button","morningpost-btn"),this.morningPostBtn.textContent=ke.morningPost.toUpperCase(),this.morningPostBtn.addEventListener("click",()=>this.showMorningPost()),this.root.appendChild(this.morningPostBtn),this.specialBtn=this.el("button","special-btn"),this.specialBtn.textContent=ke.specialDeliveries.toUpperCase(),this.specialBtn.addEventListener("click",()=>this.showSpecialDeliveries()),this.root.appendChild(this.specialBtn),this.rushBtn=this.el("button","rush-btn"),this.rushBtn.textContent=ke.rushOrder.toUpperCase(),this.rushBtn.addEventListener("click",()=>{this.cb.onUseRush()&&this.rushBtn.classList.add("active")}),this.root.appendChild(this.rushBtn),this.modCard=this.el("div","mod-card"),this.root.appendChild(this.modCard),this.cadenceStrip=this.el("div","cadence-strip"),this.root.appendChild(this.cadenceStrip),this.ledgerChip=this.el("div","ledger-chip"),this.ledgerChip.title=Ds.basis,this.root.appendChild(this.ledgerChip),this.flatChip=this.el("button","flat-chip"),this.flatChip.setAttribute("aria-label","Compass forecast"),this.flatChip.addEventListener("click",()=>this.openRedrawPanel()),this.root.appendChild(this.flatChip),this.wanderBadge=this.el("span","wander-badge"),this.wanderBadge.setAttribute("aria-label","wanderlight drifts by"),this.root.appendChild(this.wanderBadge),this.injectCss()}el(e,t){const i=document.createElement(e);return t&&(i.className=t),i}bindSortBtn(){const e=i=>{i.preventDefault(),this.sortHeld=!0,this.sortBtn.classList.add("held"),this.cb.onSortHold(!0)},t=()=>{this.sortHeld&&(this.sortHeld=!1,this.sortBtn.classList.remove("held"),this.cb.onSortHold(!1))};this.sortBtn.addEventListener("pointerdown",e),this.sortBtn.addEventListener("pointerup",t),this.sortBtn.addEventListener("pointercancel",t),this.sortBtn.addEventListener("pointerleave",t)}get modalOpen(){return this.panelLayer.classList.contains("open")}get redrawForecastShown(){return this.redrawShown}updateHud(e,t,i){this._state=e;const r=Xt[e.districtIndex],s=Math.floor(e.blocking.nightMs/1e3),a=`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;this.top.innerHTML=[`<span class="stat"><b>${ke.postage}</b><i>${Kt(e.postage)}</i></span>`,`<span class="stat"><b>${ke.waxSealsShort}</b><i>${rr(e.ch2.waxSeals)}</i></span>`,`<span class="stat"><b>${ke.stars}</b><i>${rr(e.stars)}</i></span>`,`<span class="stat"><b>${r?r.name:"—"}</b><i>R${e.run+1} ${a}</i></span>`].join("");const o=X_(e);if(this.postcardsBtn.classList.toggle("has-unread",o>0),o>0){if(!this.postcardsBtn.querySelector(".unread-dot")){const w=this.el("span","unread-dot");this.postcardsBtn.appendChild(w)}this.postcardsBtn.setAttribute("aria-label",`${o} new postcard${o===1?"":"s"}`)}else this.postcardsBtn.querySelector(".unread-dot")?.remove();const c=ts(e,Date.now());this.morningPostBtn.classList.toggle("visible",c),c?this.morningPostBtn.classList.add("pulse"):this.morningPostBtn.classList.remove("pulse"),this.specialBtn.classList.toggle("visible",e.districtIndex>=2);const l=Date.now(),h=e.ch2.rush.activeEndTs!=null&&l<e.ch2.rush.activeEndTs;if(this.rushBtn.classList.toggle("visible",e.ch2.rush.held||h),this.rushBtn.classList.toggle("active",h),this.rushBtn.classList.toggle("disabled",!e.ch2.rush.held),h&&e.ch2.rush.activeEndTs!=null){const w=new Date(e.ch2.rush.activeEndTs).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});this.rushBtn.title=`${ke.rushActiveUntil} ${w}`}else e.ch2.rush.held&&(this.rushBtn.title=ke.rushHeld);{const E=e.ch2.districtsAnswered.includes(5)?$s(e,Date.now()):null;if(E){const M=Ac[E.id],B=new Date(Io(Date.now())).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),A=$s(e,Date.now()+864e5),C=rv(e);this.modCard.classList.add("visible"),this.modCard.dataset.mod=E.id,this.modCard.innerHTML=`<span class="mod-glyph glyph-${M?.glyph??"rain-glaze"}"></span><span class="mod-name">${M?.name??E.id}</span><span class="mod-ends">${Cc.endsPrefix} ${B}</span><span class="mod-effect">${M?.effectLine??""}</span><span class="mod-forecast">${Cc.forecastDeltaLabel}: ${A?Ac[A.id]?.name??A.id:"—"}</span>`+(C.flipped&&E.id==="backlog_surge"?'<span class="mod-chain">satchels bind tonight — the pile outruns the buckles</span>':"")}else this.modCard.classList.remove("visible"),this.modCard.innerHTML=""}if(as(e)){const E=xv(e,Date.now());this.cadenceStrip.classList.add("visible"),this.cadenceStrip.innerHTML=`<span class="cs-label">${ke.cadenceStrip}</span><span class="cs-slot">sky ${E.modifiersToday}/${Yn.modifiersPerLocalDay}</span><span class="cs-slot">satchels ${E.sdActiveTimers}/${Yn.sdActiveTimersMax}</span><span class="cs-slot">mail ${E.morningPostHeld}/${Yn.morningPostHeldMax}</span><span class="cs-slot doubler">doubler ${E.doublerUsedToday}/${Yn.doublerPerLocalDay}</span>`+(E.atCeiling?'<span class="cs-note">at the ceiling — on purpose</span>':'<span class="cs-note">within the ceiling</span>')}else this.cadenceStrip.classList.remove("visible"),this.cadenceStrip.innerHTML="";(e.hall.F8??0)>=3?(this.ledgerChip.classList.add("visible"),this.ledgerChip.innerHTML='<span class="hourglass"><i></i><i></i><i></i></span><span class="ledger-cap">8 h</span>'):(this.ledgerChip.classList.remove("visible"),this.ledgerChip.innerHTML="");const d=["desk","satchel","route","inflow"],f=d.map(w=>`${w}:${t.per[w].level}`).join("|");f!==this.meterSig&&(this.meterSig=f,this.meters.innerHTML="",this.buildMeters(d,t));const p=Ko(e),g=Math.min(1,Math.max(0,e.perfect/Math.max(1e-6,p)));this.plumeFill.style.height=`${Math.round(g*100)}%`,this.plume.classList.toggle("gold",g>=.999),this.renderSeals(e,i);const v=Ro(e),m={rising:ke.flatRising,settling:ke.flatSettling,level:ke.flatLevel},u=v.nudge?ke.flatNudge:m[v.glyph];this.flatChip.innerHTML=`<span class="flat-pending">${ke.pendingStarsShort} ${rr(v.pending)}</span><span class="flat-label">${u}</span>`,this.flatChip.classList.toggle("flat-card",v.card||v.nudge),this.flatChip.classList.toggle("flat-nudge",v.nudge),this.flatChip.classList.toggle("voyage-nudge",this.voyageNudge),this.flatChip.dataset.glyph=this.voyageNudge?"compass-west":v.glyph}setVoyageNudge(e){this.voyageNudge=e}pulseFamilyBadge(e){const t=this.root.querySelector(`.meter-${e}`);t&&(t.classList.remove(this.reduceMotion?"fam-pulse-static":"fam-pulse"),t.offsetWidth,t.classList.add(this.reduceMotion?"fam-pulse-static":"fam-pulse"),setTimeout(()=>t.classList.remove("fam-pulse","fam-pulse-static"),1300))}buildMeters(e,t){for(const i of e){const r=vc[i],s=t.per[i],a=this.el("button",`meter meter-${i} lvl-${s.level}`);a.dataset.kind=i,a.style.background=r.color;const o=this.el("span",`glyph glyph-${r.glyph}`);a.appendChild(o);const c=this.el("span",`badge badge-${r.badge}`);if(a.appendChild(c),s.level==="choke"){const l=this.el("span","choke-tri");a.appendChild(l)}a.setAttribute("aria-label",`${i} meter ${s.level}`),a.addEventListener("click",()=>this.cb.onOpenPanel(Ev[i])),this.meters.appendChild(a)}}showBottleneckPulse(e){const t=this.meters.querySelector(`[data-kind="${e}"]`);if(t){if(this.reduceMotion){t.classList.add("pulse-static");return}t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}}showWanderSpawnTick(){this.reduceMotion?(this.wanderBadge.classList.remove("tick-scale"),this.wanderBadge.classList.add("tick-op"),window.setTimeout(()=>this.wanderBadge.classList.remove("tick-op"),700)):(this.wanderBadge.classList.remove("tick-scale"),this.wanderBadge.offsetWidth,this.wanderBadge.classList.add("tick-scale"))}showWanderToast(e,t){const i=this.el("div","wander-toast"),r=document.createElement("span");if(r.innerHTML=`${ke.wanderCaught}: +<b>${rr(e)}</b> ${ke.postage}`,i.appendChild(r),t){const o=this.el("span","wander-toast-seal");o.textContent=ke.wanderSeal,i.appendChild(o)}this.root.appendChild(i);const s=performance.now(),a=()=>{const o=performance.now()-s,c=Math.min(24+o*.02,30),l=1-Math.max(0,(o-2100)/600);i.style.transform=`translateY(${-c}px)`,i.style.opacity=String(Math.max(0,Math.min(1,l))),o<2700?requestAnimationFrame(a):i.remove()};requestAnimationFrame(a)}renderSeals(e,t){const i=Nd(e),r=[];r.push({id:"lantern",name:ke.districtLL,stateText:"OPEN",rvFrac:1,rvText:"—",listFrac:1,listText:"—",action:{label:"—",enabled:!1,act:"none"},ticker:null,locked:!1});const s=(a,o)=>{const c=Dn[a],l=e.blocking.gates[a],h=e.ch2.districtsAnswered.includes(c.to),d=a==="horizon",f=d&&br(e),p=rl(e),g=h?{label:"OPEN",enabled:!1,act:"none"}:d&&!f?{label:ke.redraw,enabled:t,act:"redraw"}:{label:`Bond ${Kt(c.bond)}`,enabled:l.listDone&&e.postage>=c.bond,act:"bond"};return{id:a,name:o,stateText:h?"OPEN":l.listDone?d&&!f?"SEALED — offers Redraw":"SEALED — bond ready":"SEALED",rvFrac:Math.min(1,i/c.rv),rvText:`${Kt(Math.min(i,c.rv))} / ${Kt(c.rv)}`,listFrac:Math.min(1,l.listValue/c.deliveryList),listText:`${Kt(Math.min(l.listValue,c.deliveryList))} / ${Kt(c.deliveryList)}`,action:g,ticker:d&&!f&&l.rvDone?`+${p} ★ pending`:null,locked:!h}};if(r.push(s("rainmarket",ke.districtRM)),r.push(s("horizon",ke.districtCW)),e.districtIndex>=2){const a=Mn(e);if(a&&a!=="horizon"){const o=Dn[a],c=Xt[o.to];c&&r.push(s(a,c.name))}}this.seals.innerHTML="";for(const a of r){const o=this.el("div",`seal seal-${a.id}${a.locked?" locked":""}`);if(o.dataset.seal=a.id,o.innerHTML=`
        <div class="seal-head"><span class="seal-name">${a.name}</span><span class="seal-state">${a.stateText}</span></div>
        <div class="gauge"><span class="gauge-label">thread</span><div class="gauge-track"><div class="gauge-fill" style="width:${Math.round(a.rvFrac*100)}%"></div></div><span class="gauge-num">${a.rvText}</span></div>
        <div class="gauge"><span class="gauge-label">list</span><div class="gauge-track"><div class="gauge-fill list" style="width:${Math.round(a.listFrac*100)}%"></div></div><span class="gauge-num">${a.listText}</span></div>
        ${a.ticker?`<div class="ticker">${a.ticker}</div>`:""}
      `,a.id==="horizon"&&!e.ch2.districtsAnswered.includes(2)){const l=this.el("span","seal-silhouette");o.querySelector(".seal-head")?.appendChild(l)}const c=this.el("button","seal-action");c.textContent=a.action.label,c.disabled=!a.action.enabled,a.action.act==="bond"&&c.addEventListener("click",()=>this.cb.onBond()),a.action.act==="redraw"&&c.addEventListener("click",()=>this.openRedrawPanel()),o.appendChild(c),this.seals.appendChild(o)}}hidePanel(){this.panelLayer.innerHTML="",this.panelLayer.classList.remove("open"),this.ring.style.display="none"}frame(e){this.panelLayer.innerHTML="";const t=this.el("div","card");return t.innerHTML=`<h3>${e}</h3>`,this.panelLayer.appendChild(t),this.panelLayer.classList.add("open"),t}closeBtn(e,t="Close"){const i=this.el("button","buy ghost");i.textContent=t,i.addEventListener("click",()=>this.hidePanel()),e.appendChild(i)}purchasePunch(e){this.reduceMotion||(e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"))}showFamilyPanel(e,t){if(t==="hall")return this.showUpgradePanel(e);const i=vc[t==="desk"?"desk":t==="satchel"?"satchel":"route"].glyph,r=this.frame(`${i} — ${t}`),s=t==="desk"?e.desks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:an.caps.length-1,label:`pad${o+1}`})):t==="satchel"?e.racks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Un.rates.length-1,label:`rack${o+1}`})):e.lanes.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:In.rates.length-1,label:`lane${o+1}`}));for(const a of s)if(a.unlocked){const o=a.tier>=a.maxTier,c=t==="desk"?Jo(e,a.idx):t==="satchel"?el(e,a.idx):nl(e,a.idx),l=e.postage>=c;this.buyRow(r,`${a.label} T${a.tier+1}${o?" (max)":""}`,c,!o&&l,h=>{this.cb.onBuy(t,a.idx),this.purchasePunch(h)})}else{const o=t==="desk"?Zo(e,a.idx):t==="satchel"?Qo(e,a.idx):tl(e,a.idx),c=e.postage>=o;this.buyRow(r,`${a.label} (locked)`,o,c,l=>{this.cb.onBuy(t,a.idx),this.purchasePunch(l)})}this.closeBtn(r)}buyRow(e,t,i,r,s){const a=this.el("div","row");a.innerHTML=`<span class="name">${t}</span>`;const o=this.el("button",`buy${r?"":" dim"}`);o.textContent=`${ke.buy} ${isFinite(i)?Kt(i):"max"}`,o.disabled=!r,o.addEventListener("click",c=>{c.stopPropagation(),s(o)}),a.appendChild(o),e.appendChild(a)}showUpgradePanel(e){const t=this.frame("Hall"),i=Object.values(Yt);for(const r of i){const s=r.id,a=e.hall[s]??0,o=a>=r.tiers,c=o?1/0:r.cost[a]??1/0,l=r.conditionDistrictId?a>=1&&!e.ch2.districtsAnswered.includes(Xt.findIndex(f=>f.id===r.conditionDistrictId)):!1,h=this.el("div","row");h.innerHTML=`<span class="name">${r.label}</span><span class="lvl">L${a}${o?" max":""}${l?" · needs Clocktower Ward":""}</span>`;const d=this.el("button",`buy${e.postage>=c&&!l?"":" dim"}`);d.textContent=l?"Locked":`${ke.buy} ${isFinite(c)?Kt(c):"max"}`,d.disabled=l||e.postage<c||!isFinite(c),d.addEventListener("click",f=>{f.stopPropagation(),this.cb.onBuy("hall",s),this.purchasePunch(d)}),h.appendChild(d),t.appendChild(h)}this.closeBtn(t)}voyageLogHtml(){if(!this._state||!this._state.ch2.districtsAnswered.includes(5))return"";const e=qd(this._state),t=e.rows.slice(-4),i=e.deltas.length?`<div class="voyage-deltas">${e.deltas.map(a=>`<span class="${a>1?"vd-hot":"vd-cold"}">+${a}★</span>`).join("")}</div>`:"",r=e.sealShare>=1||e.etaH==null?"":e.etaH<6?`<p class="voyage-eta near">the seal is close — finish it (≈${e.etaH.toFixed(1)} h at this pace)</p>`:`<p class="voyage-eta">seal-ETA ≈ ${e.etaH.toFixed(1)} h at this pace</p>`;return'<div class="voyage-log"><div class="voyage-head"><span class="voyage-glyph">◈</span> voyage log</div>'+(t.length?t.map(a=>`<div class="voyage-row"><span>R${a.idx} return</span><span>+${a.delta}★ · seal ${(a.sealShare*100).toFixed(0)}%</span></div>`).join(""):'<div class="voyage-row"><span>no returns logged this voyage yet</span></div>')+i+r+(this.voyageNudge?'<p class="voyage-nudge-line">the wall has gone quiet — the seal reads far; bank the night</p>':"")+"</div>"}openRedrawPanel(){const e=this.cb.onRedrawOpen();if(!e)return;this.redrawShown=e;const t=this.frame(ke.redraw);t.classList.add("card-redraw"),t.insertAdjacentHTML("beforeend",`
      <p class="forecast"><b>${rr(e.starsPending)}</b> ${ke.stars} pending</p>
      <p class="earned">booked this run: ${Kt(e.earnedBooked)}</p>
      <div class="preview">
        <div class="keep"><b>Kept:</b><ul>${Tv(this._state).map(r=>`<li>${r}</li>`).join("")}</ul></div>
        <div class="lost"><b>Lost:</b><ul>${Xr.lost.map(r=>`<li>${r}</li>`).join("")}</ul></div>
      </div>${this.voyageLogHtml()}`);const i=this.el("button","buy big");i.textContent=`${ke.redraw} — claim ${rr(e.starsPending)} ★`,i.addEventListener("click",()=>this.cb.onRedrawConfirm()),t.appendChild(i),this.closeBtn(t,"Not yet")}showReturnCard(e,t){const i=this.frame(Ia.title);if(i.classList.add("card-return"),e.kind==="never-empty")i.insertAdjacentHTML("beforeend",`<p class="ledger-line">${Ia.neverEmpty}</p>`);else{const s=Math.floor(e.elapsedS/3600),a=Math.floor(e.elapsedS%3600/60),o=Math.floor(e.capS/3600),c=Math.floor(e.capS%3600/60);i.insertAdjacentHTML("beforeend",`
        <p class="ledger-line">Away ${s} h ${String(a).padStart(2,"0")} min · Ledger holds ${o} h ${String(c).padStart(2,"0")} min</p>
        <p class="ledger-line big">Letters settled without you: <b>+${Kt(e.base)}</b></p>`);const l=vv(t),h=t.ch5.streak.count;if(l>0&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line streak">Day streak ${h} — the wax remembers you. +${l} seals</p>`),e.medianRate!=null&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line basis">${Ds.basis}</p>`),e.trim>0&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line trim">${Ds.trim} <span class="trim-amt">(held back ${Kt(e.raw)} → ${Kt(e.base)})</span></p>`),t.liveMod?.id==="long_shadows"&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line longshot">${Ds.longShadows}</p>`),Na(t)>0){const d=this.el("button","buy big");d.textContent=`Double it tonight — free · ${Na(t)} left tonight`,d.addEventListener("click",()=>this.cb.onDouble()),i.appendChild(d)}else Na(t)===0&&i.insertAdjacentHTML("beforeend",'<p class="ledger-line cap">The doubler rests until midnight.</p>')}const r=this.el("button",`buy ${e.kind==="ledger"?"ghost":"big"}`);r.textContent=Ia.collect,r.addEventListener("click",()=>this.cb.onDismissMinor()),i.appendChild(r)}showMonetizationStubs(e){const t=this.frame(mv);t.classList.add("card-office-papers"),t.insertAdjacentHTML("beforeend",`<p class="row stub-banner">${Oc.banner}</p>`);for(const r of fv){const s=r.id==="album"?`Your earned Wax Seals: ${e.ch2.waxSeals} — they are all yours already; nothing is withheld or held. Album preview: it would hold ${e.ch5.album.shadowCredits} seal-credits today (shadow meter: +${Is.shadowCreditsPerSeal}/Wax Seal · cap ${this.albumCap(e)}) · cracking it would pay the meter out once, empty it, and raise the cap +${Is.capRaisePerLevel} per album level (level ${e.ch5.album.level}).`:r.body.join(" ");t.insertAdjacentHTML("beforeend",`<div class="stub-card ${r.frame}">
           <div class="stub-head"><span class="name">${r.title}</span><span class="price">${r.priceLine}</span></div>
           <div class="stub-body">${s}</div>
           ${r.honesty?`<div class="stub-honesty">${r.honesty}</div>`:""}
         </div>`)}t.insertAdjacentHTML("beforeend",`<p class="row never-row">${pv.text}</p>`),t.insertAdjacentHTML("beforeend",`<p class="row stub-footer">${Oc.footer}</p>`);const i=this.el("button","buy ghost");i.textContent=ke.roadmap,i.addEventListener("click",()=>this.showRoadmap()),t.appendChild(i),this.closeBtn(t)}showRoadmap(){const e=this.frame(ke.roadmap);e.classList.add("card-roadmap"),e.insertAdjacentHTML("beforeend",'<p class="roadmap-intro">Built through the Last Light reply, this web build is complete as designed. Nothing here is for sale. Where money could ever live is published below, honestly, and it stays that way unless it is ever proposed and reviewed.</p>');for(const t of Sv)e.insertAdjacentHTML("beforeend",`<div class="roadmap-item"><b>${t.title}</b><p>${t.body}</p></div>`);this.closeBtn(e)}showDawn(e,t=!1){const i=this.frame(ke.dawnTitle);i.classList.add("card-dawn");const r=dv.dawn.copy;i.insertAdjacentHTML("beforeend",`<p class="dawn-line">${r}</p><p class="dawn-note">${t?Fa.replayLabel:"one night, remembered — 15 s"}</p>`),t&&i.insertAdjacentHTML("beforeend",'<p class="dawn-idle">Pip sleeps on the sorting desk.</p>'),e.ch5.dawn.fired&&i.insertAdjacentHTML("beforeend",`<p class="dawn-idle">${Fa.postRule.charAt(0).toUpperCase()+Fa.postRule.slice(1)}.</p>`),this.closeBtn(i,t?"Close":"OK")}showNotificationInvite(e){if(!Yd(e))return;const t=this.frame(ks.cardTitle);t.classList.add("card-notify"),t.insertAdjacentHTML("beforeend",`<p class="notify-body">${ks.cardBody}</p>`),t.insertAdjacentHTML("beforeend",`<p class="notify-quiet">Quiet hours ${qs.quietHoursLocal.fromH}:00–${qs.quietHoursLocal.toH}:00, always.</p>`);const i=this.el("button","buy big");i.textContent=ks.turnOn,i.addEventListener("click",()=>this.cb.onNotifyOptIn()),t.appendChild(i);const r=this.el("button","buy ghost");r.textContent=ks.notNow,r.addEventListener("click",()=>this.cb.onNotifyDismiss()),t.appendChild(r)}albumCap(e){return Is.capCredits+Is.capRaisePerLevel*(e.ch5.album.level-1)}showPostcardsPanel(){const e=this.frame(ke.postcards);if(e.classList.add("card-postcards"),!this._state)return;const t=Lo(this._state),i=[];for(const r of t){const s=i.find(a=>a.district===r.story.districtId);s?s.items.push(r):i.push({district:r.story.districtId,items:[r]})}if(i.length===0){e.insertAdjacentHTML("beforeend",`</div><p class="empty">${ke.postcardsEmpty}</p>`);return}for(const r of i){const s=this.districtName(r.district),a=this.el("div","pc-group");a.insertAdjacentHTML("beforeend",`<h4>${s}</h4>`);for(const o of r.items){const c=this.el("button",`pc-row${o.unlocked?o.read?" read":" new":" locked"}${o.unlocked&&!o.read?" stamp-chip":""}`),l=Oa[o.story.districtId]?.thread??"#72D6C1",h=o.unlocked&&!o.read?`<span class="pc-chip" style="background:${l}"></span>`:"";c.insertAdjacentHTML("beforeend",`${h}<span class="pc-slot">#${o.story.slot}</span><span class="pc-subject">${o.unlocked?o.story.subject:ke.postcardsLocked}</span><span class="pc-state">${o.read?ke.postcardRead:o.unlocked?ke.postcardNew:"🔒"}</span>`),o.unlocked&&c.addEventListener("click",()=>this.openPostcardStory(o.story.id)),a.appendChild(c)}e.appendChild(a)}this.closeBtn(e)}openPostcardStory(e){this.showPostcardDetail(e)&&this.cb.onReadPostcard(e)}showPostcardDetail(e){if(!this._state)return null;let t;for(const s of Lo(this._state))if(s.story.id===e){t=s;break}if(!t||!t.unlocked)return null;const i=t.story,r=this.frame(ke.postcards);return r.classList.add("card-postcard-story"),r.insertAdjacentHTML("beforeend",`<p class="pc-meta">${this.districtName(i.districtId)} · #${i.slot}</p>
       ${this.postcardFurniture(i.districtId)}
       <h3 class="pc-subject">${i.subject}</h3>
       <p class="pc-sender">— ${i.sender}</p>
       <p class="pc-body">${i.body}</p>
       <p class="pc-reaction">${i.reaction}</p>
       ${i.slot===3?`<p class="pc-seal">+1 ${ke.waxSealsShort}</p>`:""}`),this.closeBtn(r),r}postcardFurniture(e){const t=Oa[e]??Oa.lantern_lane,i=this.nightDate();return`<div class="pc-stage">
       <div class="pc-stamp jagged"><span class="pc-stamp-glyph">${t.glyph}</span></div>
       <div class="pc-postmark"><span class="pm-city">${Mv(e)}</span><span class="pm-date">${i}</span></div>
       <div class="pc-addr"><span class="pc-addr-line">${t.addr}</span></div>
       <div class="pc-motif">${t.motif}</div>
     </div>`}nightDate(){const e=this._state?.blocking.nightMs??0,t=Math.floor(e/6e4)+1;return`NIGHT ${String(Math.max(1,t)).padStart(2,"0")}`}districtName(e){const t=Xt.find(i=>i.id===e);return t?t.name:e}showMorningPost(){if(!this._state)return;const e=this.frame(ke.morningPost);e.classList.add("card-morningpost");const t=Xt[this._state.districtIndex],i=t?Ui.grantByFrontier[t.id]??0:0;if(e.insertAdjacentHTML("beforeend",`<p class="mp-prompt">${ke.morningPostPrompt}</p>
       ${i>0?`<p class="mp-grant">${ke.morningPostGranted}: <b>${Kt(i)} ${ke.postage}</b></p>`:""}`),i>0){const r=this.el("button","buy");r.textContent=ke.claim,r.addEventListener("click",()=>{this.cb.onClaimMorningPost()>0&&this.morningPostBtn.classList.remove("visible","pulse")}),e.appendChild(r)}{const r=this._state.ch2.morningPost.lastClaimTs,s=Ui.cadenceH*36e5,a=r==null?null:r+s;if(a!=null){const o=Math.max(0,a-Date.now()),c=Math.floor(o/36e5),l=Math.ceil(o%36e5/6e4);e.insertAdjacentHTML("beforeend",`<p class="mp-next">${ke.morningPostNextIn} ${c} h ${String(l).padStart(2,"0")} m · ${ke.morningPostHeldNote}</p>`)}}this.closeBtn(e)}showSpecialDeliveries(){if(!this._state)return;const e=this._state,t=this.frame(ke.specialDeliveries);t.classList.add("card-special");const i=Date.now();let r=0;for(const s of Ni.recipes){if(!(Wd(e,s)||cv(e,s.id))){if(s.rush&&e.ch2.districtsAnswered.includes(7)){r++;const g=this.el("div","sd-block sd-brass-locked");g.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4><p class="sd-cost brass">${q0.sd7Preview}</p><p class="sd-end">stamps gather — the brass flips when the Arcade keeps writing</p>`),t.appendChild(g)}continue}r++;const c=e.ch2.specialDeliveries.active.find(g=>g.recipeId===s.id&&!g.claimed),l=H_(e,s.id,i),h=Object.entries(s.stamps).map(([g,v])=>`${v} ${this.districtName(g)}`).join(" + "),d=Object.entries(s.stamps).map(([g,v])=>`${Math.min(e.ch2.stampInventory[g]??0,v)}/${v}`).join(" · "),f=this.el("div","sd-block");c&&f.classList.add("active"),f.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4>
         <p class="sd-cost">${h}<br><span class="sd-have">${ke.specialStamps}: ${d}</span></p>`);const p=this.el("div","sd-chips");for(const[g,v]of Object.entries(s.stamps)){const m=e.ch2.stampInventory[g]??0,u=m>=250,w=this.el("span",`sd-chip${u?" capped":""}`);w.textContent=`${this.districtName(g)} ${u?"250 cap":m}`,w.title=`${ke.specialStamps}: ${m}/250`,p.appendChild(w)}if(f.appendChild(p),c){const g=s.timerH*36e5,v=Math.min(1,Math.max(0,1-(c.endTs-i)/g)),m=this.el("span","sd-ring");m.style.setProperty("--frac",`${Math.round(v*360)}deg`),f.appendChild(m);const u=new Date(c.endTs).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});f.insertAdjacentHTML("beforeend",`<p class="sd-end">${l?ke.specialReady:`${ke.specialEndsAt} ${u}`}</p>`);const w=this.el("button","buy");w.textContent=l?ke.specialReady:ke.specialActive,w.disabled=!l,l&&w.addEventListener("click",()=>{this.cb.onClaimSpecial(s.id)>0&&this.hidePanel()}),f.appendChild(w)}else{const g=Xd(e,s),v=this.el("button","buy");v.textContent=ke.specialStart,v.disabled=!g,g&&v.addEventListener("click",()=>{this.cb.onActivateSpecial(s.id)&&this.hidePanel()}),f.appendChild(v)}t.appendChild(f)}r===0&&t.insertAdjacentHTML("beforeend",`<p class="empty">${ke.specialEmpty}</p>`),this.closeBtn(t)}showCoach(e,t){this.lastCoachSig=e.beat;const i=e.speaker?`<b>${e.speaker==="Pip"?"Pip":"Mara"}:</b> `:"",r=this.frame(`${e.speaker??"First Night"}`);r.classList.add("card-coach"),r.insertAdjacentHTML("beforeend",`<p>${i}${e.copy??e.beat}</p>`),e.grantAmount!=null&&r.insertAdjacentHTML("beforeend",`<p class="grant">+${Kt(e.grantAmount)} ${ke.postage} (First Night ${e.grantId})</p>`),e.rail&&r.insertAdjacentHTML("beforeend",`<p class="rail-note">Rail: ${e.rail.note}</p>`);const s=this.el("button","buy big");if(s.textContent="OK",s.addEventListener("click",()=>{this.ring.style.display="none",this.cb.onDismissMinor()}),r.appendChild(s),this.ring.style.display=t?"block":"none",t){const a=t.getBoundingClientRect(),o=this.root.getBoundingClientRect();this.ring.style.left=`${a.left-o.left-6}px`,this.ring.style.top=`${a.top-o.top-6}px`,this.ring.style.width=`${a.width+12}px`,this.ring.style.height=`${a.height+12}px`}}anchorFor(e){return e?e==="sort"?this.sortBtn:e.startsWith("seal-")?this.seals.querySelector(`[data-seal="${e.slice(5)}"]`):this.meters.querySelector(`[data-kind="${e}"]`):null}get lastCoach(){return this.lastCoachSig}injectCss(){if(document.getElementById("md-hud-css"))return;const e=document.createElement("style");e.id="md-hud-css",e.textContent=`
      #hud { font-family: ui-monospace, Menlo, Consolas, monospace; color: ${R.parchment}; }
      .hud-top { position:absolute; top:0; left:0; right:0; height:15%; padding:52px 14px 8px; display:flex; justify-content:space-between; align-items:flex-start; background:linear-gradient(180deg, rgba(23,35,63,.92), rgba(23,35,63,0)); z-index:3; pointer-events:none; }
      .stat { display:flex; flex-direction:column; align-items:center; }
      .stat b { font-size:10px; letter-spacing:.08em; color:${R.moonBlue}; text-transform:uppercase; }
      .stat i { font-style:normal; font-size:16px; font-weight:700; font-variant-numeric:tabular-nums; }
      .hud-meters { position:absolute; top:16%; left:0; right:0; display:flex; gap:10px; justify-content:center; padding:6px; z-index:3; }
      .meter { position:relative; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; transition:transform ${Da.capacityPulseS}s; }
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
      .choke-tri::after { content:''; position:absolute; left:-8px; top:0; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:13px solid ${R.parchment}; clip-path: polygon(50% 0, 100% 100%, 82% 100%, 50% 34%, 18% 100%, 0 100%); }
      .meter.pulse { animation: meterPulse ${Da.capacityPulseS}s infinite alternate; }
      .meter.pulse-static { outline: 3px solid #F4E7C7; outline-offset: 2px; }
      @keyframes meterPulse { from{ transform:scale(1);} to{ transform:scale(1.18);} }
      #hud .seal-row { position:absolute; top:calc(16% + 56px); left:0; right:0; display:flex; gap:8px; justify-content:center; padding:4px 8px; z-index:2; pointer-events:none; }
      #hud .seal-row .seal { pointer-events:none; }
      #hud .seal-row .seal-action { pointer-events:auto; }
      .seal-row.collapsed { display:none; }
      .seal { width:31%; max-width:150px; background:rgba(23,35,63,.82); border:1px solid rgba(214,168,75,.45); border-radius:10px; padding:6px 7px; font-size:10px; }
      .seal.locked { opacity:.85; }
      .seal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; }
      .seal-name { font-weight:700; color:${R.parchment}; }
      .seal-state { color:${R.moonBlue}; font-size:9px; }
      .seal-silhouette { width:10px; height:14px; background:#0d1730; clip-path: polygon(50% 0, 90% 20%, 90% 60%, 70% 60%, 70% 100%, 30% 100%, 30% 60%, 10% 60%, 10% 20%); }
      .gauge { display:flex; align-items:center; gap:4px; margin:3px 0; }
      .gauge-label { width:26px; color:${R.brass}; font-size:8px; text-transform:uppercase; }
      .gauge-track { flex:1; height:5px; background:#101a30; border-radius:3px; overflow:hidden; }
      .gauge-fill { height:100%; background:${R.routeMint}; }
      .gauge-fill.list { background:${R.plum}; }
      .gauge-num { font-size:8px; color:${R.parchment}; font-variant-numeric:tabular-nums; }
      .ticker { margin-top:3px; color:${R.brass}; font-weight:700; font-size:9px; }
      .seal-action { width:100%; min-height:44px; margin-top:5px; background:${R.sealingRed}; color:${R.parchment}; border:none; border-radius:8px; font:700 10px/1 ui-monospace; cursor:pointer; }
      .seal-action:disabled { opacity:.45; cursor:default; background:#3a4666; }
      .seal-toggle { position:absolute; top:calc(16% + 60px); right:6px; z-index:3; min-height:44px; min-width:44px; background:transparent; color:${R.moonBlue}; border:1px solid rgba(91,121,200,.5); border-radius:8px; font:700 9px/1 ui-monospace; }
      .flat-chip { position:absolute; top:2%; left:6px; z-index:4; display:flex; flex-direction:column; align-items:flex-start; gap:2px; min-height:44px; max-width:132px; background:rgba(23,35,63,.82); color:${R.parchment}; border:1px solid rgba(91,121,200,.5); border-radius:8px; padding:5px 8px; font:700 10px/1 ui-monospace; cursor:pointer; text-align:left; }
      .flat-chip .flat-pending { color:${R.brass}; font-variant-numeric:tabular-nums; }
      .flat-chip .flat-label { font-weight:400; font-size:9px; color:${R.moonBlue}; }
      .flat-chip.flat-card { border-color:${R.plum}; }
      .flat-chip.flat-nudge { border-color:${R.sealingRed}; color:${R.parchment}; }
      .hud-controls { position:absolute; bottom:0; left:0; right:0; height:18%; display:flex; align-items:flex-start; justify-content:center; gap:14px; padding-top:10px; background:linear-gradient(0deg, rgba(23,35,63,.94), rgba(23,35,63,0)); z-index:3; }
      .sort-btn { width:min(230px, 62%); height:64px; border:none; border-radius:22px; color:${R.parchment}; font:800 18px/1 ui-monospace; letter-spacing:.12em; box-shadow:0 6px 0 #8f3038; touch-action:none; cursor:pointer; user-select:none; background-image:linear-gradient(rgba(255,255,255,.14), rgba(255,255,255,0)); }
      .sort-btn.held { transform:translateY(4px); box-shadow:0 2px 0 #8f3038; }
      .plume { width:26px; height:64px; border:2px solid ${R.brass}; border-radius:12px; position:relative; overflow:hidden; background:#101a30; }
      .plume-fill { position:absolute; bottom:0; left:0; right:0; background:${R.brass}; transition:height .2s; }
      .plume.gold .plume-fill { background:${R.routeMint}; box-shadow:0 0 10px ${R.brass}; }
      .plume.gold { box-shadow:0 0 14px ${R.brass}; }
      .hud-panel-layer { position:absolute; inset:0; display:none; align-items:flex-end; justify-content:center; background:rgba(10,16,32,.45); z-index:10; }
      .hud-panel-layer.open { display:flex; }
      .card { width:88%; max-width:420px; max-height:72%; overflow-y:auto; background:${R.parchment}; color:#241d12; border-radius:16px; padding:20px; margin-bottom:6%; box-shadow:0 10px 30px rgba(0,0,0,.5); }
      .card h3 { margin:0 0 12px; color:${R.inkNavy}; }
      .row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed rgba(36,29,18,.3); }
      .row .name { font-size:14px; }
      .row .lvl { color:#777; font-size:12px; }
      .buy { background:${R.sealingRed}; color:${R.parchment}; border:none; border-radius:10px; padding:10px 14px; font:700 13px/1 ui-monospace; cursor:pointer; min-height:44px; min-width:44px; }
      .buy.dim { opacity:.5; }
      .buy.ghost { background:transparent; color:#241d12; border:1px solid rgba(36,29,18,.4); }
      .buy.big { width:100%; margin:8px 0; font-size:15px; }
      .buy.punch { animation: punch ${Da.purchasePunchS}s; }
      @keyframes punch { 0% { transform:scale(.94); } 60% { transform:scale(1.04); } 100% { transform:scale(1); } }
      .card ul { padding-left:18px; }
      .card li { margin:6px 0; }
      .stub { color:#777; font-size:11px; text-align:right; }
      .card-redraw .forecast { font-size:34px; margin:10px 0; color:${R.plum}; }
      .card-redraw .earned { font-size:12px; color:#555; margin:-6px 0 10px; }
      .preview { display:flex; gap:14px; font-size:11px; margin-bottom:6px; }
      .preview div { flex:1; }
      .preview .keep b { color:#3a7d5f; } .preview .lost b { color:${R.sealingRed}; }
      .ledger-line { font-size:14px; margin:6px 0; }
      .ledger-line.big { font-size:18px; }
      .card-coach p { font-size:16px; margin:8px 0 12px; }
      .card-coach .grant { color:#3a7d5f; font-weight:700; font-size:13px; }
      .card-coach .rail-note { color:#777; font-size:11px; }
      .guide-ring { position:absolute; border:3px dashed ${R.brass}; border-radius:14px; z-index:9; pointer-events:none; animation: breathe 1.2s ease-in-out infinite alternate; }
      .debug-label { position:absolute; background:rgba(23,35,63,.85); color:${R.routeMint}; font:700 9px/1 ui-monospace; padding:2px 5px; border-radius:4px; pointer-events:none; z-index:4; white-space:nowrap; }
      .postcards-btn { position:absolute; top:2%; right:6px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${R.moonBlue}; border:1px solid rgba(214,168,75,.5); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; }
      .postcards-btn .unread-dot { position:absolute; top:-3px; right:-3px; width:12px; height:12px; border-radius:50%; background:${R.sealingRed}; box-shadow:0 0 8px ${R.sealingRed}; }
      .card-postcards .pc-group { margin:8px 0; }
      .card-postcards h4 { margin:10px 0 4px; font-size:13px; color:${R.inkNavy}; text-transform:uppercase; letter-spacing:.05em; }
      .pc-row { display:flex; align-items:center; gap:8px; width:100%; min-height:44px; padding:6px 8px; border:none; background:transparent; border-bottom:1px dashed rgba(36,29,18,.2); cursor:pointer; text-align:left; font:inherit; }
      .pc-row.locked { opacity:.5; cursor:default; }
      .pc-row .pc-slot { color:#a05555; font-weight:700; font-size:11px; }
      .pc-row .pc-subject { flex:1; font-size:13px; color:#241d12; }
      .pc-row .pc-state { font-size:10px; text-transform:uppercase; }
      .pc-row.new .pc-state { color:${R.sealingRed}; font-weight:700; }
      .card-postcards .empty { color:#777; font-size:13px; }
      .card-postcard-story .pc-meta { font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:#a05555; }
      .card-postcard-story .pc-subject { margin:4px 0; color:${R.inkNavy}; }
      .card-postcard-story .pc-sender { font-size:12px; color:#777; margin:0 0 10px; }
      .card-postcard-story .pc-body { font-size:15px; line-height:1.5; color:#241d12; }
      .card-postcard-story .pc-reaction { margin-top:12px; font-style:italic; color:#3a5d7d; font-size:13px; }
      .card-postcard-story .pc-seal { margin-top:10px; font-weight:700; color:${R.brass}; }
      /* Ch2 VD rework (F4): postcard furniture — stamp, postmark, address, doodle motif. */
      .pc-stage { position:relative; min-height:120px; margin:2px 0 12px; }
      .pc-stamp { position:absolute; top:0; right:0; width:30px; height:38px; background:${R.sealingRed}; color:${R.parchment}; display:flex; align-items:center; justify-content:center; font-size:15px; z-index:2; }
      .pc-stamp.jagged { -webkit-mask:linear-gradient(135deg,#000 25%,transparent 25%) 0 0/6px 6px,linear-gradient(225deg,#000 25%,transparent 25%) 0 0/6px 6px,linear-gradient(45deg,#000 25%,transparent 25%) 0 0/6px 6px,linear-gradient(315deg,#000 25%,transparent 25%) 0 0/6px 6px; mask:linear-gradient(135deg,#000 25%,transparent 25%) 0 0/6px 6px,linear-gradient(225deg,#000 25%,transparent 25%) 0 0/6px 6px,linear-gradient(45deg,#000 25%,transparent 25%) 0 0/6px 6px,linear-gradient(315deg,#000 25%,transparent 25%) 0 0/6px 6px; -webkit-mask-composite:source-over; mask-composite:add; }
      .pc-stamp .pc-stamp-glyph { position:relative; z-index:1; font-weight:800; }
      .pc-postmark { position:absolute; top:-2px; right:-6px; width:64px; height:64px; border-radius:50%; border:2px solid rgba(152,124,60,.85); color:rgba(120,96,48,.95); z-index:1; font-size:9px; }
      .pc-postmark::before { content:""; position:absolute; inset:4px; border:1px dashed rgba(152,124,60,.7); border-radius:50%; }
      .pc-postmark .pm-city { position:absolute; top:9px; left:0; right:0; text-align:center; font-weight:800; letter-spacing:.04em; }
      .pc-postmark .pm-date { position:absolute; bottom:8px; left:0; right:0; text-align:center; }
      .pc-addr { margin:6px 0 10px; padding:6px 8px; border-bottom:1px solid rgba(36,29,18,.25); border-top:1px solid rgba(36,29,18,.12); background:repeating-linear-gradient(transparent,transparent 15px, rgba(36,29,18,.12) 15px, rgba(36,29,18,.12) 16px); }
      .pc-addr .pc-addr-line { font-size:11px; color:rgba(36,29,18,.75); line-height:16px; }
      .pc-motif { position:absolute; left:4px; bottom:0; width:74px; height:54px; opacity:.92; }
      .pc-motif svg { width:100%; height:100%; display:block; }
      .pc-row.stamp-chip { display:flex; align-items:center; gap:8px; }
      .pc-row .pc-chip { width:16px; height:16px; flex:0 0 16px; border-radius:3px; border:1px solid rgba(255,255,255,.5); }
      .morningpost-btn { position:absolute; top:2%; right:56px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${R.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .morningpost-btn.visible { opacity:1; pointer-events:auto; }
      .morningpost-btn.pulse { animation: breathe 1.2s ease-in-out infinite alternate; }
      .card-morningpost .mp-prompt { font-size:14px; line-height:1.5; color:${R.inkNavy}; }
      .card-morningpost .mp-grant { margin-top:10px; font-size:15px; color:#3a5d7d; }
      .card-morningpost .mp-grant b { color:${R.brass}; }
      .special-btn { position:absolute; top:2%; right:112px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${R.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .special-btn.visible { opacity:1; pointer-events:auto; }
      .rush-btn { position:absolute; top:2%; right:168px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${R.brass}; border:1px solid rgba(214,168,75,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .rush-btn.visible { opacity:1; pointer-events:auto; }
      .rush-btn.active { color:${R.parchment}; background:rgba(214,168,75,.25); animation: breathe 1.2s ease-in-out infinite alternate; }
      .rush-btn.disabled { color:${R.moonBlue}; border-color:rgba(91,121,200,.4); cursor:default; }
      /* ---- Ch3 (JEE-655) — modifier weather card · ledger third-bulb chip · voyage view */
      .mod-card { position:absolute; top:9.5%; left:50%; transform:translateX(-50%); z-index:4; display:none; flex-direction:column; gap:1px; min-width:150px; max-width:210px; padding:6px 9px; border:1px solid rgba(91,121,200,.55); border-radius:9px; background:rgba(23,35,63,.8); color:${R.parchment}; font:700 10px/1.25 ui-monospace; text-align:center; }
      .mod-card.visible { display:flex; }
      .mod-card .mod-glyph { align-self:center; width:18px; height:10px; border-radius:3px; background:${R.moonBlue}; opacity:.9; }
      .mod-card[data-mod="backlog_surge"] .mod-glyph { background:${R.inkNavy}; height:14px; }
      .mod-card[data-mod="perfect_moon"] .mod-glyph { background:${R.brass}; border-radius:50%; height:14px; }
      .mod-card[data-mod="tailwind"] .mod-glyph { background:${R.routeMint}; }
      .mod-card[data-mod="long_shadows"] .mod-glyph { background:#b8893d; }
      .mod-card[data-mod="stamp_fair"] .mod-glyph { background:${R.parchment}; }
      .mod-card[data-mod="wax_festival"] .mod-glyph { background:${R.plum}; }
      .mod-card .mod-name { color:${R.brass}; }
      .mod-card .mod-ends { color:${R.moonBlue}; font-size:9px; }
      .mod-card .mod-effect { font-weight:400; font-size:9px; opacity:.85; }
      .mod-card .mod-forecast { font-weight:400; font-size:8px; color:${R.routeMint}; }
      .mod-card .mod-chain { font-weight:400; font-size:8px; color:${R.plum}; }
      .ledger-chip { position:absolute; top:2%; left:148px; z-index:4; display:none; align-items:center; gap:4px; min-height:44px; padding:4px 8px; border:1px solid rgba(214,168,75,.55); border-radius:8px; background:rgba(23,35,63,.82); color:${R.parchment}; font:700 9px/1 ui-monospace; }
      .ledger-chip.visible { display:flex; }
      .ledger-chip .hourglass { display:flex; flex-direction:column; gap:1px; }
      .ledger-chip .hourglass i { width:8px; height:4px; background:${R.brass}; border-radius:1px; }
      .flat-chip.voyage-nudge { border-color:${R.routeMint}; }
      .flat-chip.voyage-nudge .flat-label { color:${R.routeMint}; }
      .voyage-log { margin-top:8px; padding-top:6px; border-top:1px dashed rgba(91,121,200,.35); font-size:10px; }
      .voyage-head { color:${R.routeMint}; font-weight:700; margin-bottom:2px; }
      .voyage-glyph { color:${R.moonBlue}; }
      .voyage-row { display:flex; justify-content:space-between; opacity:.85; }
      .voyage-deltas { display:flex; gap:6px; margin:3px 0; }
      .voyage-deltas .vd-hot { color:${R.brass}; }
      .voyage-deltas .vd-cold { color:${R.moonBlue}; }
      .voyage-eta { margin:2px 0; color:${R.moonBlue}; }
      .voyage-eta.near { color:${R.routeMint}; font-weight:700; }
      .voyage-nudge-line { color:${R.sealingRed}; font-weight:700; }
      .fam-pulse { animation: famPulse 1.2s ease-out 1; }
      .fam-pulse-static { outline:2px solid ${R.parchment}; outline-offset:2px; }
      @keyframes famPulse { 0% { transform:scale(1); box-shadow:0 0 0 0 rgba(214,168,75,.7);} 30% { transform:scale(1.14); box-shadow:0 0 0 6px rgba(214,168,75,0);} 100% { transform:scale(1); box-shadow:none;} }
      .sd-block.sd-brass-locked { border-color:${R.brass}; background:rgba(214,168,75,.12); }
      .sd-block .brass { color:${R.brass}; }
      .ledger-line.basis { color:${R.routeMint}; font-size:11px; }
      .ledger-line.trim { color:${R.brass}; font-size:12px; }
      .ledger-line.trim .trim-amt { opacity:.8; font-size:10px; }
      .ledger-line.longshot { color:${R.moonBlue}; font-style:italic; font-size:11px; }
      .card-special .sd-block { margin:10px 0; padding:10px; border:1px solid rgba(36,29,18,.18); border-radius:8px; background:rgba(255,248,235,.55); }
      .card-special .sd-block.active { border-color:rgba(91,121,200,.5); }
      .card-special .sd-block h4 { margin:0 0 4px; color:${R.inkNavy}; font-size:14px; }
      .card-special .sd-cost { margin:0; font-size:12px; color:#777; }
      .card-special .sd-have { color:#3a5d7d; }
      .card-special .empty { color:#777; font-size:13px; }
      .wander-toast { position:absolute; left:50%; top:14%; transform:translateX(-50%); z-index:6; pointer-events:none; background:rgba(23,35,63,.9); color:${R.parchment}; padding:8px 14px; border-radius:12px; font:700 13px/1 ui-monospace; border:1px solid rgba(244,231,199,.4); box-shadow:0 4px 14px rgba(0,0,0,.35); }
      .wander-toast b { color:${R.brass}; }
      .wander-toast-seal { display:block; margin-top:4px; color:${R.sealingRed}; font-size:11px; text-align:center; }
      .wander-badge { position:absolute; top:calc(16% + 118px); right:6px; width:26px; height:34px; background:${R.brass}; border-radius:8px 8px 12px 12px; clip-path: polygon(18% 0, 82% 0, 100% 30%, 88% 100%, 12% 100%, 0 30%); opacity:.25; z-index:3; pointer-events:none; }
      .wander-badge.tick-scale { animation: wanderTick .7s ease-out; }
      .wander-badge.tick-op { opacity:.95; }
      @keyframes wanderTick { 0% { transform:scale(.7); opacity:.4; } 40% { transform:scale(1.18); opacity:1; } 100% { transform:scale(1); opacity:.25; } }
      .sd-chips { display:flex; flex-wrap:wrap; gap:4px; margin-top:6px; }
      .sd-chip { border:1px dashed rgba(36,29,18,.3); border-radius:6px; padding:2px 6px; font-size:10px; color:#3a5d7d; }
      .sd-chip.capped { border:2px solid ${R.brass}; color:${R.inkNavy}; font-weight:700; }
      .sd-end { margin:4px 0 0; font-size:11px; color:#777; font-variant-numeric:tabular-nums; }
      .sd-ring { display:inline-block; width:18px; height:18px; border-radius:50%; margin-top:6px; background: conic-gradient(${R.plum} var(--frac, 0deg), rgba(36,29,18,.15) 0deg); }
      .mp-next { margin-top:8px; font-size:12px; color:#777; }
      /* ---- Ch5 (JEE-581) — Office Papers button · cadence strip · stub tray · dawn · notify · roadmap */
      .officepapers-btn { position:absolute; top:2%; left:148px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${R.parchment}; border:1px solid rgba(244,231,199,.45); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; }
      .cadence-strip { position:absolute; top:calc(16% + 6px); left:50%; transform:translateX(-50%); z-index:4; display:none; align-items:center; gap:8px; max-width:92%; padding:5px 9px; border:1px solid rgba(214,168,75,.4); border-radius:9px; background:rgba(23,35,63,.82); color:${R.parchment}; font:700 9px/1.2 ui-monospace; }
      .cadence-strip.visible { display:flex; flex-wrap:wrap; justify-content:center; }
      .cadence-strip .cs-label { color:${R.brass}; text-transform:uppercase; }
      .cadence-strip .cs-slot { color:${R.moonBlue}; }
      .cadence-strip .cs-slot.doubler { color:${R.plum}; }
      .cadence-strip .cs-note { color:${R.routeMint}; }
      .card-office-papers { }
      .card-office-papers .stub-banner { justify-content:center; border-bottom:1px solid rgba(36,29,18,.25); color:${R.sealingRed}; font-weight:700; }
      .card-office-papers .stub-card { margin:10px 0; padding:10px 12px; border:1px solid rgba(36,29,18,.2); border-radius:10px; background:rgba(255,248,235,.6); }
      .card-office-papers .stub-card.brass { border-color:rgba(214,168,75,.7); }
      .card-office-papers .stub-card.plum { border-color:rgba(109,62,120,.6); }
      .card-office-papers .stub-card.plum-neutral { border-color:rgba(109,62,120,.35); }
      .card-office-papers .stub-card.parchment { border-color:rgba(91,121,200,.4); }
      .card-office-papers .stub-head { display:flex; justify-content:space-between; align-items:baseline; }
      .card-office-papers .stub-head .name { font-size:14px; color:${R.inkNavy}; font-weight:700; }
      .card-office-papers .stub-head .price { font-size:12px; color:${R.plum}; font-variant-numeric:tabular-nums; }
      .card-office-papers .stub-body { margin-top:5px; font-size:12px; color:rgba(36,29,18,.85); line-height:1.45; }
      .card-office-papers .stub-honesty { margin-top:6px; padding:6px 8px; font-size:11px; color:${R.inkNavy}; background:rgba(91,121,200,.08); border-left:3px solid ${R.brass}; }
      .card-office-papers .never-row { font-size:11px; color:#777; border-bottom:none; }
      .card-office-papers .stub-footer { justify-content:center; font-size:11px; color:#777; border-top:1px solid rgba(36,29,18,.2); border-bottom:none; }
      .card-roadmap .roadmap-intro { font-size:13px; line-height:1.5; color:${R.inkNavy}; }
      .card-roadmap .roadmap-item { margin:10px 0; padding:8px 10px; border-left:3px solid ${R.brass}; background:rgba(255,248,235,.6); }
      .card-roadmap .roadmap-item b { color:${R.inkNavy}; }
      .card-roadmap .roadmap-item p { margin:3px 0 0; font-size:12px; color:rgba(36,29,18,.85); line-height:1.45; }
      .card-dawn .dawn-line { font-size:17px; line-height:1.5; color:${R.inkNavy}; }
      .card-dawn .dawn-note { margin-top:8px; color:${R.brass}; font-weight:700; font-size:12px; }
      .card-dawn .dawn-idle { margin-top:8px; color:#777; font-size:11px; }
      .card-notify .notify-body { font-size:14px; line-height:1.5; color:${R.inkNavy}; }
      .card-notify .notify-quiet { margin:8px 0 2px; font-size:11px; color:${R.moonBlue}; font-variant-numeric:tabular-nums; }
    `,document.head.appendChild(e)}}const Ev={desk:"desk",satchel:"satchel",route:"route",inflow:"hall"};function Tv(n){return n?n.ch2.districtsAnswered.includes(5)?[...Xr.kept,...yc,...Y0]:br(n)?[...Xr.kept,...yc]:Xr.kept:Xr.kept}function Av(){const n=e=>({family:e,level:"ok",chokeHoldS:0,warnHoldS:0,chokedAtNightMs:null,firstChokeThisRun:!1,remedyLoggedAtS:null,chokeClearS:0});return{per:{desk:n("desk"),satchel:n("satchel"),route:n("route"),inflow:n("inflow")},deliveredEma:0}}const $t=P0;function Cv(n,e,t,i,r){const s=Math.max(1e-9,Ws(n)),a=n.desks.reduce((v,m)=>v+m.inProcess,0)/s,o=Math.max(1e-9,qo(n)),l=(n.bundled??0)/o,h=Math.min(1,i/2),d=r/Math.max(1e-9,i);e.deliveredEma+=(d-e.deliveredEma)*h;const f=Math.max(1e-9,Yo(n)*Math.max(1,n.starMultiplier)),p=e.deliveredEma/f,g=Rv(n);return{deskPile:a,satQueue:l,routesBelowSatchels:f<g,routesAboveSatchels:f>g,routeUtil:p,routeDeliveredOkSlack:e.deliveredEma>=g*(1-$t.route.okSlack)||l<.02,inflowPool:n.backlog/Math.max(1e-9,Zs(n)),holding:t}}function Rv(n){return n.racks.reduce((e,t)=>e+(t.unlocked?Un.rates[t.tier]:0),0)}function Pv(n){return Zs(n)}function Lv(n,e,t,i){for(const r of Object.keys(e.per)){const s=e.per[r],a=Iv(r,t),o=kv(r,t);if(a){if(s.chokeHoldS+=i,s.chokeClearS=0,s.level!=="choke"&&s.chokeHoldS>=Dv(r,t)){const c=!s.firstChokeThisRun;s.firstChokeThisRun=!0,s.level="choke",s.chokedAtNightMs=n.blocking.nightMs,s.remedyLoggedAtS=null,Ue(n,De.meterChoke,{family:r,first_in_run:c})}}else s.chokeHoldS=0,s.level==="choke"?(s.chokeClearS+=i,s.chokeClearS>=1.5&&(s.level=o?"warn":"ok",s.chokeClearS=0)):s.chokeClearS=0;o&&s.level!=="choke"?(s.warnHoldS+=i,s.level="warn"):s.level!=="choke"&&(s.warnHoldS=0,s.level=a?s.level:"ok")}}function Dv(n,e){return n==="desk"&&e.holding&&e.deskPile>=$t.desk.burstFullAt?0:n==="desk"?$t.desk.chokeSustainS:n==="satchel"?$t.satchel.chokeSustainS:n==="route"?$t.route.chokeSustainS:$t.inflow.chokeSustainS}function Iv(n,e){switch(n){case"desk":return e.deskPile>=$t.desk.chokeAt;case"satchel":return e.routesAboveSatchels&&e.deskPile>=$t.satchel.deskPileChokeAt;case"route":return e.routeUtil>=$t.route.utilChokeAt&&e.satQueue>=$t.route.queueChokeAt;case"inflow":return e.inflowPool<$t.inflow.chokeAt&&e.holding}}function kv(n,e){switch(n){case"desk":return e.deskPile>=$t.desk.warnAt;case"satchel":return e.satQueue>=$t.satchel.queueWarnAt&&e.routesBelowSatchels;case"route":return e.routeUtil>=$t.route.utilWarnAt;case"inflow":return e.inflowPool<$t.inflow.okAt}}function Uv(n,e,t,i){const r=e.per[t];if(r.remedyLoggedAtS!=null||r.chokedAtNightMs==null)return;r.remedyLoggedAtS=n.blocking.nightMs;const s=(n.blocking.nightMs-r.chokedAtNightMs)/1e3;Ue(n,De.meterRemedy,{family:t,purchase_id:i,latency_s:s})}function Fv(n){for(const e of Object.keys(n.per)){const t=n.per[e];t.level="ok",t.chokeHoldS=0,t.warnHoldS=0,t.chokedAtNightMs=null,t.firstChokeThisRun=!1,t.remedyLoggedAtS=null,t.chokeClearS=0}n.deliveredEma=0}const Ba=Md.filter(n=>"t"in n.trigger);function jd(n,e){n.blocking.railsFired.push(e.beat);const t=e.grantId??e.beat;Ue(n,De.onboardBeat,{copy_id:t,t_s:n.blocking.nightMs/1e3});let i;if(e.grantId!=null&&!n.blocking.checklist.includes(e.grantId)){const r=I0.find(s=>s.id===e.grantId);r&&(n.blocking.checklist.push(r.id),i=r.grant,n.totalEarnedRun+=r.grant,Bi(n,r.grant))}return{beat:e.beat,copyId:t,speaker:e.speaker,copy:e.copy,highlight:e.highlight,rail:e.rail,grantId:e.grantId,grantAmount:i}}function Nv(n){if(n.onboarded)return[];const e=n.blocking.nightMs/1e3,t=[];for(const r of Ba)e>=r.trigger.t&&!n.blocking.railsFired.includes(r.beat)&&t.push(jd(n,r));const i=Ba[Ba.length-1];return i&&n.blocking.railsFired.includes(i.beat)&&(n.onboarded=!0),t}function cr(n,e){const t=[];for(const i of Md)"event"in i.trigger&&i.trigger.event===e&&!n.blocking.railsFired.includes(i.beat)&&t.push(jd(n,i));return t}function Ov(n,e,t){let i=[];return e.rainmarket.rvDone&&(i=i.concat(cr(n,"rv_complete"))),t.rainmarketListNearly&&(i=i.concat(cr(n,"list_nearly"))),e.horizon.rvDone&&(i=i.concat(cr(n,"horizon_rv"))),e.horizon.listDone&&(i=i.concat(cr(n,"horizon_list"))),i}function Ln(n){return n.blocking.ch2FiredEver}function hn(n,e){return Ln(n).push(e.beat),Ue(n,De.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight}}function Et(n,e){return Ln(n).includes(e)}const Bv=[vt.flatNear.beat,vt.flatFar.beat],Hc=new WeakMap;function zv(n){const e=Hc.get(n);if(e!==n.run){if(e!=null){n.blocking.ch2FiredEver=n.blocking.ch2FiredEver.filter(i=>!Bv.includes(i));const t=Kd(n);for(const[i,r]of Object.entries(n.blocking.gates))t.listDone[i]=r.listDone}Hc.set(n,n.run)}}function Hv(n,e){const t=[];e===1&&br(n)&&!Et(n,vt.rmReanswer.beat)&&t.push(hn(n,vt.rmReanswer));const i=D0.find(r=>r.districtIndex===e);if(i){const r=`ch2.vignette.${i.id}`;Et(n,r)||(Ln(n).push(r),Ue(n,De.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:`${i.body}
— ${i.speakerLine}`,vignette:i})),i.arrivalCopy&&!Et(n,`ch2.arrival.${i.id}`)&&(Ln(n).push(`ch2.arrival.${i.id}`),Ue(n,De.onboardBeat,{copy_id:`arrival.${i.id}`,t_s:n.blocking.nightMs/1e3}),t.push({beat:`ch2.arrival.${i.id}`,speaker:i.arrivalCopy.speaker,copy:i.arrivalCopy.line}))}if(e>=1&&br(n)){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+bc.delayAfterVignetteS,district:e})}if(i?.id==="canal_of_echoes"){const r=`composite.canal.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"composite_chord",atS:n.blocking.nightMs/1e3+bc.delayAfterVignetteS})}i?.id==="clocktower_ward"&&!Et(n,"ch2.scripted.wander.1")&&(Ln(n).push("ch2.scripted.wander.1"),n.blocking.ch2Pending.push({id:"scripted.wander.1",kind:"scripted_wander",atS:n.blocking.nightMs/1e3+45})),i?.id==="museum_after_dark"&&(Et(n,vt.museumClaim.beat)||t.push(hn(n,vt.museumClaim)),Et(n,vt.museumClaim2.beat)||t.push(hn(n,vt.museumClaim2))),e>=2&&k_(n,Date.now());for(const r of Ni.recipes){const s=Xt.findIndex(a=>a.id===r.available);s>=0&&e>=s&&!Et(n,`ch2.special.offer.${r.id}`)&&(Ln(n).push(`ch2.special.offer.${r.id}`),Ue(n,De.specialOffer,{recipe_id:r.id,stamp_cost_json:r.stamps,timer_h:r.timerH}),t.push({beat:`ch2.special.offer.${r.id}`,speaker:null,copy:null}))}return t}function Vv(n){const e=Mn(n);if(!e)return;const t=n.blocking.nightMs/1e3,i=n.blocking.evapSpanMax[e]??0;n.blocking.evapSpanMax[e]=Math.max(i,t)}const Vc=new WeakMap;function Kd(n){let e=Vc.get(n);return e||(e={mpDue:!1,trays:!1,wander:!1,listDone:{},primed:!1},Vc.set(n,e)),e}function Gv(n,e){const t=[];zv(n);const i=Kd(n),r=n.blocking.nightMs/1e3,s=br(n);if(!i.primed){i.mpDue=ts(n,e),i.trays=(n.hall.F3??0)>=2,i.wander=(n.hall.F9??0)>=1;for(const[d,f]of Object.entries(n.blocking.gates))i.listDone[d]=f.listDone;i.primed=!0}const a=D_(n);if(s&&(n.run>=1&&!Et(n,vt.secondWind.beat)&&t.push(hn(n,vt.secondWind)),!Et(n,"ch2.seal-convert")&&r>=Mc.conversionCardS&&(Ln(n).push("ch2.seal-convert"),Ue(n,De.sealConvert,{t_s:r}),t.push({beat:"ch2.seal-convert",speaker:ka.speaker,copy:`${ka.line}
${ka.note}`,conversion:!0,highlight:"seal-horizon"})),!Et(n,vt.sdIntro.beat)&&r>=Mc.sdBoardIntroS)){t.push(hn(n,vt.sdIntro));const d=Ni.recipes[0];d&&!Et(n,`ch2.special.offer.${d.id}`)&&(Ln(n).push(`ch2.special.offer.${d.id}`),Ue(n,De.specialOffer,{recipe_id:d.id,stamp_cost_json:d.stamps,timer_h:d.timerH}))}(n.hall.F3??0)>=2&&!i.trays&&(i.trays=!0,Et(n,"ch2.tray.activate")||(Ln(n).push("ch2.tray.activate"),Ue(n,De.trayActivate,{tier:n.hall.F3,t_s:r})),Et(n,vt.trayRail.beat)||t.push(hn(n,vt.trayRail))),(n.hall.F9??0)>=1&&!i.wander&&(i.wander=!0,Et(n,vt.wanderOn.beat)||t.push(hn(n,vt.wanderOn)));const l=ts(n,e);if(l&&!i.mpDue){const d=Xt[n.districtIndex];Ue(n,De.morningpostReady,{grant:d?Ui.grantByFrontier[d.id]??0:0,district:d?.id}),Et(n,vt.mpFirstReady.beat)||t.push(hn(n,vt.mpFirstReady))}i.mpDue=l;for(const[d,f]of Object.entries(Hd)){const p=wd[d];if(!p)continue;const g=n.ch2.postcardCounters[d]??0;for(const v of f){const m=p[v.slot-1];m==null||g<m||n.ch2.postcards.unlockedEmitted.includes(v.id)||(n.ch2.postcards.unlockedEmitted.push(v.id),Ue(n,De.postcardUnlock,{district:d,n:v.slot,letters_counted:g}),Et(n,vt.postcardAuto.beat)||t.push({...hn(n,vt.postcardAuto),postcardId:v.id}))}}a.card&&!L_(n)&&!Et(n,vt.flatNear.beat)&&t.push(hn(n,vt.flatNear)),a.nudge&&!Et(n,vt.flatFar.beat)&&t.push(hn(n,vt.flatFar));for(const[d,f]of Object.entries(n.blocking.gates)){const p=i.listDone[d]===!0;if(i.listDone[d]=f.listDone,!f.listDone||p)continue;const g=n.blocking.nightMs/1e3,v=n.blocking.evapSpanMax[d]??0;if(n.blocking.evapSpanMax[d]=Math.max(v,g),v>1500&&g<=1500&&!Et(n,`ch2.evaporation.${d}`)){Ln(n).push(`ch2.evaporation.${d}`);const m=vt.evaporation;Ue(n,De.onboardBeat,{copy_id:`evaporation.${d}`,t_s:g}),t.push({beat:`ch2.evaporation.${d}`,speaker:m.speaker,copy:m.copy,toast:!0})}}const h=n.blocking.ch2Pending.filter(d=>d.atS<=r);if(h.length){n.blocking.ch2Pending=n.blocking.ch2Pending.filter(d=>d.atS>r);for(const d of h)d.kind==="reply_chord"&&d.district!=null?(Ue(n,De.replyChord,{district:d.district,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:d.district,composite:!1}})):d.kind==="composite_chord"?(Ue(n,De.replyChord,{district:"composite",t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:null,composite:!0}})):d.kind==="scripted_wander"&&(Ue(n,De.wanderSpawn,{kind:"normal",scripted:!0,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,spawnWanderlight:"normal"}),Et(n,vt.firstWander.beat)||t.push(hn(n,vt.firstWander)))}return{intents:t,flat:a}}const Wv=30;function Xv(n,e=()=>Date.now()){const t={lastWriteMs:e(),save(i,r){Zd(i),n(i),t.lastWriteMs=e(),Ue(i,De.saveWrite,{version:i.v,bytes:JSON.stringify(i).length,state_hash:kd(i),ok:!0,reason:r})},tick(i,r){(r-t.lastWriteMs)/1e3>=Wv&&t.save(i,"autosave")}};return t}function $v(n,e){Ue(n,De.saveLoad,{version:n.v,bytes:JSON.stringify(n).length,state_hash:kd(n),ok:e})}function Zd(n){n.ledgerWindow=ss.capHours*3600}const Gn=1/60,qv=[-3.4,-1.2,1.1,3.3];function Yv(){try{const n=localStorage.getItem(Rd);return n?{state:Q0(JSON.parse(n)),ok:!0}:{state:yr(),ok:!1}}catch{return{state:yr(),ok:!1}}}function Gc(n){n.savedAt=Date.now(),K_(n),localStorage.setItem(Rd,JSON.stringify(n))}function jv(n){return new I(qv[n]??0,.3,1.6)}function Kv(){const n=document.getElementById("game"),e=document.getElementById("hud"),t=document.getElementById("boot");if(!n||!e)return;const i=T0(),{renderer:r,scene:s,camera:a,resize:o}=A0(n,{});C0(a);const c=X0(s,{});c_();const{state:l,ok:h}=Yv();Zd(l),Po(l,Date.now()),$v(l,h);const d=Xv(Gc);let f=0,p=0,g=!1;const v=new Set,m=Av();let u=null;!h||(u=Dc(l),u&&(f+=u.base,Uc(l,u)),u&&u.kind==="ledger"&&u.base===0&&(u=null)),u&&u.kind==="never-empty"&&!h&&(u=null);let w=!1,E=!1;const M=[];let B=l.bundled??0;const A=V=>{for(const Z of V)(Z.copy!=null||Z.rail)&&M.push(Z),Z.grantAmount!=null&&d.save(l,"checklist")},C=V=>{for(const Z of V)Z.copy!=null&&M.push(Z),Z.chord&&c.pulseThread(Z.chord.district),Z.spawnWanderlight&&(c.spawnWanderlight(Z.spawnWanderlight),b.showWanderSpawnTick())},U=V=>{for(const Z of V){if(Z.copy!=null&&M.push(Z),Z.chord&&c.pulseThread(Z.chord.district),Z.pulseFamilies)for(const be of Z.pulseFamilies)b.pulseFamilyBadge(be);Z.voyageNudge&&b.setVoyageNudge(!0)}},b=new wv(e,{onSortHold:V=>{E=V},onBuy:(V,Z)=>{const be=()=>JSON.stringify([l.postage,l.hall,l.desks,l.racks,l.lanes]),Ge=be();let Oe=!1,ze="",Re=0;if(V==="hall"){const Le=String(Z??""),_e=l.hall[Le]??0,We=Yt[Le];Re=We?We.cost[_e]??0:0,Oe=e_(l,Le),ze=Le}else if(V==="desk"){const Le=Number(Z??0),_e=l.desks[Le];_e&&!_e.unlocked?(Re=Zo(l,Le),Oe=t_(l,Le)):_e&&_e.unlocked&&(Re=Jo(l,Le),Oe=n_(l,Le)),ze=`pad${Le+1}`}else if(V==="satchel"){const Le=Number(Z??0),_e=l.racks[Le];_e&&!_e.unlocked?(Re=Qo(l,Le),Oe=i_(l,Le)):_e&&_e.unlocked&&(Re=el(l,Le),Oe=r_(l,Le)),ze=`rack${Le+1}`}else if(V==="route"){const Le=Number(Z??0),_e=l.lanes[Le];_e&&!_e.unlocked?(Re=tl(l,Le),Oe=s_(l,Le)):_e&&_e.unlocked&&(Re=nl(l,Le),Oe=a_(l,Le)),ze=`lane${Le+1}`}const L=be();Oe&&Ge!==L&&(Ue(l,De.purchase,{kind:V,id:ze,cost:Re,wallet_after:l.postage}),Uv(l,m,V==="hall"?"inflow":V,ze),d.save(l,"purchase")),V==="hall"?b.showUpgradePanel(l):b.showFamilyPanel(l,V)},onBond:()=>{const V=E_(l);V!=null&&(c.updateLanterns(l),c.pipPulse(),C(Hv(l,V)),U(av(l,V)),A(cr(l,"advance")),d.save(l,"district_advance"))},onRedrawOpen:()=>{const V=Dc(l);return V&&Uc(l,V),R_(l)},onRedrawConfirm:()=>{const V=b.redrawForecastShown;if(!V)return;Vv(l);const Z=Ro(l),be=Mn(l),Ge=be?!l.blocking.gates[be].listDone:!1,Oe=P_(l,V.starsPending,{cycleAgeS:l.blocking.nightMs/1e3,sealShareAtClaim:Z.sealShare,voluntary:Z.nudge&&Ge});{const ze=qd(l);ov(l,{wallS:ze.wallAgeS,sessions:ze.rows.length+1,claimStars:Oe.starsAwarded,ledgerShare:f/Math.max(1,Oe.earnedBooked),furnShare:p/Math.max(1,Oe.earnedBooked),modSlots:[...v],rushSpent:g})}f=0,p=0,g=!1,v.clear(),b.setVoyageNudge(!1),Fv(m),y=0,B=0,b.hidePanel(),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateWall(l,!1),d.save(l,"redraw"),A(cr(l,"claim"))},onDismissMinor:()=>{l.returnCardPending=!1,u=null,b.hidePanel(),d.save(l,"ledger_settle")},onDouble:()=>{u&&iv(l,u),l.returnCardPending=!1,b.hidePanel(),Gc(l),u=null},onOpenPanel:V=>{V==="hall"?b.showUpgradePanel(l):b.showFamilyPanel(l,V)},onReadPostcard:V=>{const Z=q_(l,V);return Z&&(Ue(l,De.postcardRead,{id:V,seal:l.ch2.waxSeals}),d.save(l,"checklist")),Z},onClaimMorningPost:()=>{const V=I_(l,Date.now());return V>0&&(Ue(l,De.morningPost,{amount:V}),p+=V,d.save(l,"checklist")),V},onActivateSpecial:V=>{const Z=z_(l,V,Date.now());return Z&&(Ue(l,De.specialActivate,{id:V}),d.save(l,"checklist")),Z},onClaimSpecial:V=>{const Z=V_(l,V,Date.now());return Z>0&&(Ue(l,De.specialClaim,{id:V,amount:Z}),p+=Z,d.save(l,"checklist")),Z},onUseRush:()=>{const V=G_(l,Date.now());return V&&(g=!0),V&&d.save(l,"checklist"),V},onNotifyOptIn:()=>{zc(l,!0),d.save(l,"checklist");try{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}catch{}},onNotifyDismiss:()=>{Bc(l),zc(l,!1),d.save(l,"checklist")}},i);let y=l.districtIndex;u&&(l.returnCardPending=!0,w=!0,b.showReturnCard(u,l)),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateLanes(l,0),c.updateWall(l,Ua(l));let T=0,O=0,H=l.totalEarnedRun,j=performance.now(),J=0,Y=0,re=0,$=0,ce=null,ge=l.ch5.dawn.fired?2:0;o(),window.addEventListener("resize",o),requestAnimationFrame(()=>t?.remove());const we=new lt(-2,-2),Ve=new S0;r.domElement.addEventListener("pointermove",V=>{const Z=r.domElement.getBoundingClientRect();we.x=(V.clientX-Z.left)/Z.width*2-1,we.y=-((V.clientY-Z.top)/Z.height)*2+1}),r.domElement.addEventListener("pointerdown",V=>{if(b.modalOpen)return;const Z=r.domElement.getBoundingClientRect();we.x=(V.clientX-Z.left)/Z.width*2-1,we.y=-((V.clientY-Z.top)/Z.height)*2+1,Ve.setFromCamera(we,a);const be=Ve.intersectObjects(c.wanderGroup.children,!0)[0];if(!be||!be.object.userData?.kind)return;const Oe=c.wanderlights.find(Le=>Le.group===be.object.parent);if(!Oe)return;const ze=c.wanderlights.indexOf(Oe),Re=O_(l,Oe.kind);p+=Re;let L=!1;Oe.kind==="grand"?L=!0:Math.random()<N_(l)&&(l.ch2.waxSeals+=1,L=!0),Ue(l,De.wanderlight,{kind:Oe.kind,amount:Re,seal:L,seals:l.ch2.waxSeals}),b.showWanderToast(Re,L),c.despawnWanderlight(ze),d.save(l,"checklist")});const st=new URLSearchParams(location.search).get("debug")==="1",K=document.createElement("div");st&&(e.appendChild(K),c.debugAnchors.forEach(V=>{const Z=document.createElement("div");Z.className="debug-label",Z.textContent=V.label,Z.dataset.label=V.label,K.appendChild(Z)}));let oe=0;function Ee(V){requestAnimationFrame(Ee);let Z=(V-j)/1e3;j=V,Z>.25&&(Z=.25);const be=b.modalOpen;if(be&&ce==null&&(ce=Date.now()),!be&&ce!=null){const Re=Date.now()-ce;ce=null,Re>0&&l.ch2.rush.activeEndTs!=null&&Date.now()<l.ch2.rush.activeEndTs&&(l.ch2.rush.activeEndTs+=Re)}if(!be){j_(l,Date.now()),l.liveMod?.id&&v.add(l.liveMod.id),Po(l,Date.now()),J+=Z;let Re=0;for(;J>=Gn&&Re<10;){const Le=l.postage,_e=G0(l,Gn,E);l.blocking.nightMs+=Gn*1e3,l.districtIndex!==y&&(l.districtIndex=y);let We=0;if(_e.postageEarned>0||l.postage!==Le){const ct=_e.postageEarned;We=ct,v_(l,ct,_e.delivered),nv(l,ct,Gn)}const Fe=Cv(l,m,E,Gn,_e.delivered);Lv(l,m,Fe,Gn),C(Gv(l,V).intents),U(lv(l,Date.now(),Gn,We)),A(Nv(l)),A(Ov(l,{rainmarket:l.blocking.gates.rainmarket,horizon:l.blocking.gates.horizon},{rainmarketListNearly:b_(l,"rainmarket")})),(l.bundled??0)>B+.5&&c.leverKick(),B=l.bundled??0,J-=Gn,Re++,re+=Gn}const L=l.totalEarnedRun-H;if(H=l.totalEarnedRun,L>0){for(O+=L/Math.max(1,jo(l)),T-=Z;!i&&O>=1&&c.flyers.length<80&&!(T>0);)O-=1,T+=.09,c.spawnFlyer(new I(-2.6+(Math.random()-.5)*1.4,.5,4),jv(Math.floor(Math.random()*4)));O>12&&(O=12)}{const Le=c.wanderlights.length;if(B_(l,$,Le)){const _e=Math.random()<F_(l);c.spawnWanderlight(_e?"grand":"normal"),b.showWanderSpawnTick(),Ue(l,De.wanderSpawn,{kind:_e?"grand":"normal",scripted:!1,t_s:re}),$=0}else $+=Z*1e3}if(M.length>0&&!b.modalOpen&&!w){const Le=M.shift();b.showCoach(Le,b.anchorFor(Le.highlight))}ge===0&&yv(l)&&!b.modalOpen&&!w&&M.length===0?(bv(l),b.showDawn(l),d.save(l,"checklist"),ge=1):ge===1&&!b.modalOpen&&!w&&M.length===0&&(Yd(l)&&(Bc(l),b.showNotificationInvite(l),d.save(l,"checklist")),ge=2)}w&&!b.modalOpen&&(w=!1),c.animateFlyers(Z,i),c.animateWanderlights(Z,re,i),c.tickCharacters(Z,re,i),c.tickChords(Z),c.updateDesks(l),c.updateRacks(l);const Ge=l.backlog/Math.max(1e-9,Pv(l)),Oe=m.per.inflow.level==="choke";if(c.updateTray(l,Ge,Oe),c.updateDistricts(l,{mpDue:ts(l,Date.now()),sdActive:l.ch2.specialDeliveries.active.length,stampCapsAt:0,sdFills:l.ch2.specialDeliveries.active.slice(0,3).map(Re=>{const Le=(Ni.recipes.find(_e=>_e.id===Re.recipeId)?.timerH??1)*36e5;return Le>0?Math.min(1,Math.max(0,(Re.endTs-Date.now())/Le)):0})}),c.updateModDressing(l),V-Y>250){Y=V;const Re=Math.max(1e-9,64);c.updateLanes(l,Math.min(1,m.deliveredEma/Re)),c.updateWall(l,Ua(l))}const ze=Object.keys(m.per).find(Re=>m.per[Re].level==="choke");c.setLampLevel(ze?"red":E?"ok":"warn"),b.updateHud(l,m,Ua(l));for(const Re of["desk","satchel","route","inflow"])m.per[Re].level==="choke"&&V%1e3<34&&b.showBottleneckPulse(Re);if(l.perfect>=Ko(l)-1e-6&&c.pipPulse(),d.tick(l,V),st&&(oe+=Z,oe>.25)){oe=0;const Re=r.domElement.clientWidth,L=r.domElement.clientHeight;c.debugAnchors.forEach(Le=>{const _e=K.querySelector(`[data-label="${Le.label}"]`);if(!_e)return;const We=Le.pos.clone().project(a);_e.style.left=`${(We.x+1)/2*Re}px`,_e.style.top=`${(-We.y+1)/2*L}px`})}r.render(s,a)}requestAnimationFrame(Ee),window.__md={get state(){return l},hall:c,project:V=>{a.updateMatrixWorld(!0);const Z=new I(V.x,V.y,V.z).project(a),be=r.domElement.getBoundingClientRect();return{px:be.left+(Z.x+1)/2*be.width,py:be.top+(1-Z.y)/2*be.height}},blocking:{get meters(){return m},events:d_,forecast:()=>rl(l),flattening:()=>Ro(l),get queue(){return M.length}}}}Kv();
