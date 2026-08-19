(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="170",uh=0,fl=1,fh=2,Jc=1,ph=2,Xn=3,_i=0,nn=1,Yn=2,mi=0,xr=1,pl=2,ml=3,gl=4,mh=5,Di=100,gh=101,_h=102,vh=103,xh=104,yh=200,bh=201,Mh=202,Sh=203,Xa=204,qa=205,wh=206,Eh=207,Th=208,Ah=209,Ch=210,Rh=211,Lh=212,Ph=213,Dh=214,Ya=0,ja=1,Ka=2,Sr=3,Za=4,Ja=5,Qa=6,eo=7,zo=0,kh=1,Ih=2,gi=0,Fh=1,Uh=2,Nh=3,Qc=4,Oh=5,Bh=6,zh=7,ed=300,wr=301,Er=302,to=303,no=304,ia=306,io=1e3,Fi=1001,ro=1002,dn=1003,Hh=1004,_s=1005,Dn=1006,da=1007,Ui=1008,ei=1009,td=1010,nd=1011,rs=1012,Ho=1013,Ni=1014,kn=1015,ls=1016,Vo=1017,Go=1018,Tr=1020,id=35902,rd=1021,sd=1022,En=1023,ad=1024,od=1025,yr=1026,Ar=1027,Wo=1028,$o=1029,ld=1030,Xo=1031,qo=1033,Vs=33776,Gs=33777,Ws=33778,$s=33779,so=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,_o=37812,vo=37813,xo=37814,yo=37815,bo=37816,Mo=37817,So=37818,wo=37819,Eo=37820,To=37821,Xs=36492,Ao=36494,Co=36495,cd=36283,Ro=36284,Lo=36285,Po=36286,Vh=3200,Gh=3201,dd=0,Wh=1,fi="",cn="srgb",Pr="srgb-linear",ra="linear",ft="srgb",ji=7680,_l=519,$h=512,Xh=513,qh=514,hd=515,Yh=516,jh=517,Kh=518,Zh=519,vl=35044,xl=35048,yl="300 es",Zn=2e3,Ks=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const ts=Math.PI/180,ss=180/Math.PI;function kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function Yo(n,e){return(n%e+e)%e}function Jh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Qh(n,e,t){return n!==e?(t-n)/(e-n):0}function ns(n,e,t){return(1-t)*n+t*e}function eu(n,e,t,i){return ns(n,e,1-Math.exp(-t*i))}function tu(n,e=1){return e-Math.abs(Yo(n,e*2)-e)}function nu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function iu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ru(n,e){return n+Math.floor(Math.random()*(e-n+1))}function su(n,e){return n+Math.random()*(e-n)}function au(n){return n*(.5-Math.random())}function ou(n){n!==void 0&&(bl=n);let e=bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(n){return n*ts}function cu(n){return n*ss}function du(n){return(n&n-1)===0&&n!==0}function hu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function uu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:ts,RAD2DEG:ss,generateUUID:kr,clamp:Yt,euclideanModulo:Yo,mapLinear:Jh,inverseLerp:Qh,lerp:ns,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:ru,randFloat:su,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:du,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:fu,normalize:Wt,denormalize:hr};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],x=r[0],p=r[3],u=r[6],w=r[1],E=r[4],b=r[7],B=r[2],C=r[5],L=r[8];return s[0]=a*x+o*w+c*B,s[3]=a*p+o*E+c*C,s[6]=a*u+o*b+c*L,s[1]=l*x+h*w+d*B,s[4]=l*p+h*E+d*C,s[7]=l*u+h*b+d*L,s[2]=f*x+m*w+g*B,s[5]=f*p+m*E+g*C,s[8]=f*u+m*b+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,m=l*s-a*c,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Xe;function ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pu(){const n=Zs("canvas");return n.style.display="block",n}const Ml={};function Zr(n){n in Ml||(Ml[n]=!0,console.warn(n))}function mu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _u(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(n.r=Jn(n.r),n.g=Jn(n.g),n.b=Jn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(n.r=br(n.r),n.g=br(n.g),n.b=br(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fi?ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Sl=[.64,.33,.3,.6,.15,.06],wl=[.2126,.7152,.0722],El=[.3127,.329],Tl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[Pr]:{primaries:Sl,whitePoint:El,transfer:ra,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:wl,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:Sl,whitePoint:El,transfer:ft,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:wl,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let Ki;class vu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=Zs("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xu=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ua(r[a].image)):s.push(ua(r[a]))}else s=ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class Kt extends Dr{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Fi,r=Fi,s=Dn,a=Ui,o=En,c=ei,l=Kt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=kr(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=ed;Kt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,b=(m+1)/2,B=(u+1)/2,C=(h+f)/4,L=(d+x)/4,F=(g+p)/4;return E>b&&E>B?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=L/i):b>B?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=F/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=L/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-x)/w,this.z=(f-h)/w,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bu extends Dr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends bu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==f||l!==m||h!==g){let p=1-o;const u=c*f+l*m+h*g+d*x,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const B=Math.sqrt(E),C=Math.atan2(B,u*w);p=Math.sin(p*C)/B,o=Math.sin(o*C)/B}const b=o*w;if(c=c*p+f*b,l=l*p+m*b,h=h*p+g*b,d=d*p+x*b,p===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=B,l*=B,h*=B,d*=B}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*m-l*f,e[t+1]=c*g+h*f+l*d-o*m,e[t+2]=l*g+h*m+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new D,Cl=new Ir;class Hi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),xs.subVectors(this.max,Gr),Zi.subVectors(e.a,Gr),Ji.subVectors(e.b,Gr),Qi.subVectors(e.c,Gr),si.subVectors(Ji,Zi),ai.subVectors(Qi,Ji),wi.subVectors(Zi,Qi);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-wi.z,wi.y,si.z,0,-si.x,ai.z,0,-ai.x,wi.z,0,-wi.x,-si.y,si.x,0,-ai.y,ai.x,0,-wi.y,wi.x,0];return!pa(t,Zi,Ji,Qi,xs)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Zi,Ji,Qi,xs))?!1:(ys.crossVectors(si,ai),t=[ys.x,ys.y,ys.z],pa(t,Zi,Ji,Qi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],bn=new D,vs=new Hi,Zi=new D,Ji=new D,Qi=new D,si=new D,ai=new D,wi=new D,Gr=new D,xs=new D,ys=new D,Ei=new D;function pa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ei.fromArray(n,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Su=new Hi,Wr=new D,ma=new D;class cs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Su.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(ma)),this.expandByPoint(Wr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,ga=new D,bs=new D,oi=new D,_a=new D,Ms=new D,va=new D;class md{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ga.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ga);const s=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=oi.dot(this.direction),c=-oi.dot(bs),l=oi.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ga).addScaledVector(bs,f),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){_a.subVectors(t,e),Ms.subVectors(i,e),va.crossVectors(_a,Ms);let a=this.direction.dot(va),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const c=o*this.direction.dot(Ms.crossVectors(oi,Ms));if(c<0)return null;const l=o*this.direction.dot(_a.cross(oi));if(l<0||c+l>a)return null;const h=-o*oi.dot(va);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,a,o,c,l,h,d,f,m,g,x,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,f,m,g,x,p)}set(e,t,i,r,s,a,o,c,l,h,d,f,m,g,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,g=l*h,x=l*d;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,g=l*h,x=l*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+x,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wu,e,Eu)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),li.crossVectors(i,an),li.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),li.crossVectors(i,an)),li.normalize(),Ss.crossVectors(an,li),r[0]=li.x,r[4]=Ss.x,r[8]=an.x,r[1]=li.y,r[5]=Ss.y,r[9]=an.y,r[2]=li.z,r[6]=Ss.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],u=i[14],w=i[3],E=i[7],b=i[11],B=i[15],C=r[0],L=r[4],F=r[8],M=r[12],_=r[1],A=r[5],H=r[9],z=r[13],Z=r[2],ee=r[6],Y=r[10],re=r[14],$=r[3],ce=r[7],me=r[11],Ce=r[15];return s[0]=a*C+o*_+c*Z+l*$,s[4]=a*L+o*A+c*ee+l*ce,s[8]=a*F+o*H+c*Y+l*me,s[12]=a*M+o*z+c*re+l*Ce,s[1]=h*C+d*_+f*Z+m*$,s[5]=h*L+d*A+f*ee+m*ce,s[9]=h*F+d*H+f*Y+m*me,s[13]=h*M+d*z+f*re+m*Ce,s[2]=g*C+x*_+p*Z+u*$,s[6]=g*L+x*A+p*ee+u*ce,s[10]=g*F+x*H+p*Y+u*me,s[14]=g*M+x*z+p*re+u*Ce,s[3]=w*C+E*_+b*Z+B*$,s[7]=w*L+E*A+b*ee+B*ce,s[11]=w*F+E*H+b*Y+B*me,s[15]=w*M+E*z+b*re+B*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*m-i*c*m)+x*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*h-s*c*h)+p*(+t*l*d-t*o*m-s*a*d+i*a*m+s*o*h-i*l*h)+u*(-r*o*h-t*c*d+t*o*f+r*a*d-i*a*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],u=e[15],w=d*p*l-x*f*l+x*c*m-o*p*m-d*c*u+o*f*u,E=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,b=h*x*l-g*d*l+g*o*m-a*x*m-h*o*u+a*d*u,B=g*d*c-h*x*c-g*o*f+a*x*f+h*o*p-a*d*p,C=t*w+i*E+r*b+s*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=w*L,e[1]=(x*f*s-d*p*s-x*r*m+i*p*m+d*r*u-i*f*u)*L,e[2]=(o*p*s-x*c*s+x*r*l-i*p*l-o*r*u+i*c*u)*L,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*m-i*c*m)*L,e[4]=E*L,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*L,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*u-t*c*u)*L,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*m+t*c*m)*L,e[8]=b*L,e[9]=(g*d*s-h*x*s-g*i*m+t*x*m+h*i*u-t*d*u)*L,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*u+t*o*u)*L,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*m-t*o*m)*L,e[12]=B*L,e[13]=(h*x*r-g*d*r+g*i*f-t*x*f-h*i*p+t*d*p)*L,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*p-t*o*p)*L,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,m=s*h,g=s*d,x=a*h,p=a*d,u=o*d,w=c*l,E=c*h,b=c*d,B=i.x,C=i.y,L=i.z;return r[0]=(1-(x+u))*B,r[1]=(m+b)*B,r[2]=(g-E)*B,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(f+u))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(g+E)*L,r[9]=(p-w)*L,r[10]=(1-(f+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const a=er.set(r[4],r[5],r[6]).length(),o=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const l=1/s,h=1/a,d=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Zn){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===Zn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ks)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Zn){const c=this.elements,l=1/(t-e),h=1/(i-r),d=1/(a-s),f=(t+e)*l,m=(i+r)*h;let g,x;if(o===Zn)g=(a+s)*d,x=-2*d;else if(o===Ks)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const er=new D,Mn=new bt,wu=new D(0,0,0),Eu=new D(1,1,1),li=new D,Ss=new D,an=new D,Rl=new bt,Ll=new Ir;class An{constructor(e=0,t=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tu=0;const Pl=new D,tr=new Ir,Hn=new bt,ws=new D,$r=new D,Au=new D,Cu=new Ir,Dl=new D(1,0,0),kl=new D(0,1,0),Il=new D(0,0,1),Fl={type:"added"},Ru={type:"removed"},nr={type:"childadded",child:null},xa={type:"childremoved",child:null};class kt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new D,t=new An,i=new Ir,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Xe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt($r,ws,this.up):Hn.lookAt(ws,$r,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Hn),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fl),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fl),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new D(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new D,Vn=new D,ya=new D,Gn=new D,ir=new D,rr=new D,Ul=new D,ba=new D,Ma=new D,Sa=new D,wa=new St,Ea=new St,Ta=new St;class wn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),Vn.subVectors(i,t),ya.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Vn),c=Sn.dot(ya),l=Vn.dot(Vn),h=Vn.dot(ya),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return wa.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),wa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wa,s.x),a.addScaledVector(Ea,s.y),a.addScaledVector(Ta,s.z),a}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Vn.subVectors(e,t),Sn.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ir.subVectors(r,i),rr.subVectors(s,i),ba.subVectors(e,i);const c=ir.dot(ba),l=rr.dot(ba);if(c<=0&&l<=0)return t.copy(i);Ma.subVectors(e,r);const h=ir.dot(Ma),d=rr.dot(Ma);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(ir,a);Sa.subVectors(e,s);const m=ir.dot(Sa),g=rr.dot(Sa);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(rr,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ul.subVectors(s,r),o=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(Ul,o);const u=1/(p+x+f);return a=x*u,o=f*u,t.copy(i).addScaledVector(ir,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Yo(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Aa(a,s,e+1/3),this.g=Aa(a,s,e),this.b=Aa(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return it.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Yt(Bt.r*255,0,255))*65536+Math.round(Yt(Bt.g*255,0,255))*256+Math.round(Yt(Bt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=cn){it.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Es);const i=ns(ci.h,Es.h,t),r=ns(ci.s,Es.s,t),s=ns(ci.l,Es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Qe;Qe.NAMES=gd;let Lu=0;class ds extends Dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=kr(),this.name="",this.blending=xr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends ds{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new D,Ts=new lt;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class _d extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Pu=0;const un=new bt,Ca=new kt,sr=new D,on=new Hi,Xr=new Hi,Dt=new D;class Un extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?vd:_d)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(on.min,Xr.min),on.expandByPoint(Dt),Dt.addVectors(on.max,Xr.max),on.expandByPoint(Dt)):(on.expandByPoint(Xr.min),on.expandByPoint(Xr.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(sr.fromBufferAttribute(e,l),Dt.add(sr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new D,c[F]=new D;const l=new D,h=new D,d=new D,f=new lt,m=new lt,g=new lt,x=new D,p=new D;function u(F,M,_){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,F),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,_),h.sub(l),d.sub(l),m.sub(f),g.sub(f);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(A),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),o[F].add(x),o[M].add(x),o[_].add(x),c[F].add(p),c[M].add(p),c[_].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,M=w.length;F<M;++F){const _=w[F],A=_.start,H=_.count;for(let z=A,Z=A+H;z<Z;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new D,b=new D,B=new D,C=new D;function L(F){B.fromBufferAttribute(r,F),C.copy(B);const M=o[F];E.copy(M),E.sub(B.multiplyScalar(B.dot(M))).normalize(),b.crossVectors(C,M);const A=b.dot(c[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,A)}for(let F=0,M=w.length;F<M;++F){const _=w[F],A=_.start,H=_.count;for(let z=A,Z=A+H;z<Z;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Tn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new bt,Ti=new md,As=new cs,Ol=new D,Cs=new D,Rs=new D,Ls=new D,Ra=new D,Ps=new D,Bl=new D,Ds=new D;class Je extends kt{constructor(e=new Un,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Ra.fromBufferAttribute(d,e),a?Ps.addScaledVector(Ra,h):Ps.addScaledVector(Ra.sub(t),h))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(As.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(As,Ol)===null||Ti.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Nl.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=a[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,B=E;b<B;b+=3){const C=o.getX(b),L=o.getX(b+1),F=o.getX(b+2);r=ks(this,u,e,i,l,h,d,C,L,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const w=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);r=ks(this,a,e,i,l,h,d,w,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=a[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,B=E;b<B;b+=3){const C=b,L=b+1,F=b+2;r=ks(this,u,e,i,l,h,d,C,L,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const w=p,E=p+1,b=p+2;r=ks(this,a,e,i,l,h,d,w,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Du(n,e,t,i,r,s,a,o){let c;if(e.side===nn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===_i,o),c===null)return null;Ds.copy(o),Ds.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ds);return l<t.near||l>t.far?null:{distance:l,point:Ds.clone(),object:n}}function ks(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Cs),n.getVertexPosition(c,Rs),n.getVertexPosition(l,Ls);const h=Du(n,e,t,i,Cs,Rs,Ls,Bl);if(h){const d=new D;wn.getBarycoord(Bl,Cs,Rs,Ls,d),r&&(h.uv=wn.getInterpolatedAttribute(r,o,c,l,d,new lt)),s&&(h.uv1=wn.getInterpolatedAttribute(s,o,c,l,d,new lt)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};wn.getNormal(Cs,Rs,Ls,f.normal),h.face=f,h.barycoord=d}return h}class vi extends Un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(x,p,u,w,E,b,B,C,L,F,M){const _=b/L,A=B/F,H=b/2,z=B/2,Z=C/2,ee=L+1,Y=F+1;let re=0,$=0;const ce=new D;for(let me=0;me<Y;me++){const Ce=me*A-z;for(let He=0;He<ee;He++){const rt=He*_-H;ce[x]=rt*w,ce[p]=Ce*E,ce[u]=Z,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[p]=0,ce[u]=C>0?1:-1,h.push(ce.x,ce.y,ce.z),d.push(He/L),d.push(1-me/F),re+=1}}for(let me=0;me<F;me++)for(let Ce=0;Ce<L;Ce++){const He=f+Ce+ee*me,rt=f+Ce+ee*(me+1),Q=f+(Ce+1)+ee*(me+1),ae=f+(Ce+1)+ee*me;c.push(He,rt,ae),c.push(rt,Q,ae),$+=6}o.addGroup(m,$,M),m+=$,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const r in i)e[r]=i[r]}return e}function ku(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Iu={clone:Cr,merge:Xt};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends ds{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=ku(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,zl=new lt,Hl=new lt;class gn extends yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,zl,Hl),t.subVectors(Hl,zl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,or=1;class Nu extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(ar,or,e,t);r.layers=this.layers,this.add(r);const s=new gn(ar,or,e,t);s.layers=this.layers,this.add(s);const a=new gn(ar,or,e,t);a.layers=this.layers,this.add(a);const o=new gn(ar,or,e,t);o.layers=this.layers,this.add(o);const c=new gn(ar,or,e,t);c.layers=this.layers,this.add(c);const l=new gn(ar,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bd extends Kt{constructor(e,t,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ou extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:mi});s.uniforms.tEquirect.value=t;const a=new Je(r,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Dn),new Nu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const La=new D,Bu=new D,zu=new Xe;class Li{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=La.subVectors(i,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(La),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zu.getNormalMatrix(e),r=this.coplanarPoint(La).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new cs,Is=new D;class Ko{constructor(e=new Li,t=new Li,i=new Li,r=new Li,s=new Li,a=new Li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],u=r[12],w=r[13],E=r[14],b=r[15];if(i[0].setComponents(c-s,f-l,p-m,b-u).normalize(),i[1].setComponents(c+s,f+l,p+m,b+u).normalize(),i[2].setComponents(c+a,f+h,p+g,b+w).normalize(),i[3].setComponents(c-a,f-h,p-g,b-w).normalize(),i[4].setComponents(c-o,f-d,p-x,b-E).normalize(),t===Zn)i[5].setComponents(c+o,f+d,p+x,b+E).normalize();else if(t===Ks)i[5].setComponents(o,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Is.x=r.normal.x>0?e.max.x:e.min.x,Is.y=r.normal.y>0?e.max.y:e.min.y,Is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hu(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class jn extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=t/c,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){const w=u*f-a;for(let E=0;E<l;E++){const b=E*d-s;g.push(b,-w,0),x.push(0,0,1),p.push(E/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){const E=w+l*u,b=w+l*(u+1),B=w+1+l*(u+1),C=w+1+l*u;m.push(E,b,C),m.push(b,B,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
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
#endif`,Wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
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
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
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
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,Vf=`
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ap=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,am=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,hm=`#define PHONG
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
}`,um=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,pm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Vu,alphahash_pars_fragment:Gu,alphamap_fragment:Wu,alphamap_pars_fragment:$u,alphatest_fragment:Xu,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:ju,batching_pars_vertex:Ku,batching_vertex:Zu,begin_vertex:Ju,beginnormal_vertex:Qu,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:df,color_vertex:hf,common:uf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:_f,emissivemap_pars_fragment:vf,colorspace_fragment:xf,colorspace_pars_fragment:yf,envmap_fragment:bf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:Sf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Ff,envmap_vertex:Ef,fog_vertex:Tf,fog_pars_vertex:Af,fog_fragment:Cf,fog_pars_fragment:Rf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:kf,lights_pars_begin:If,lights_toon_fragment:Uf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Vf,lights_fragment_maps:Gf,lights_fragment_end:Wf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:jf,map_pars_fragment:Kf,map_particle_fragment:Zf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:dp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:bp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ap,skinbase_vertex:Cp,skinning_pars_vertex:Rp,skinning_vertex:Lp,skinnormal_vertex:Pp,specularmap_fragment:Dp,specularmap_pars_fragment:kp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Fp,transmission_fragment:Up,transmission_pars_fragment:Np,uv_pars_fragment:Op,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:Vp,background_frag:Gp,backgroundCube_vert:Wp,backgroundCube_frag:$p,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:jp,distanceRGBA_vert:Kp,distanceRGBA_frag:Zp,equirect_vert:Jp,equirect_frag:Qp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:dm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:vm,shadow_frag:xm,sprite_vert:ym,sprite_frag:bm},pe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ln={basic:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Xt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Xt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Xt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Xt([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Xt([pe.lights,pe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ln.physical={uniforms:Xt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Fs={r:0,b:0,g:0},Ci=new An,Mm=new bt;function Sm(n,e,t,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,h,d=null,f=0,m=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const b=g(w);b===null?u(o,c):b&&b.isColor&&(u(b,1),E=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,E){const b=g(E);b&&(b.isCubeTexture||b.mapping===ia)?(h===void 0&&(h=new Je(new vi(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Cr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ci.copy(E.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Ci)),h.material.toneMapped=it.getTransfer(b.colorSpace)!==ft,(d!==b||f!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,m=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Je(new jn(2,2),new xi({name:"BackgroundMaterial",uniforms:Cr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,E){w.getRGB(Fs,xd(n)),i.buffers.color.setClear(Fs.r,Fs.g,Fs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:p}}function wm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(_,A,H,z,Z){let ee=!1;const Y=d(z,H,A);s!==Y&&(s=Y,l(s.object)),ee=m(_,z,H,Z),ee&&g(_,z,H,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,b(_,A,H,z),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,A,H){const z=H.wireframe===!0;let Z=i[_.id];Z===void 0&&(Z={},i[_.id]=Z);let ee=Z[A.id];ee===void 0&&(ee={},Z[A.id]=ee);let Y=ee[z];return Y===void 0&&(Y=f(c()),ee[z]=Y),Y}function f(_){const A=[],H=[],z=[];for(let Z=0;Z<t;Z++)A[Z]=0,H[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:H,attributeDivisors:z,object:_,attributes:{},index:null}}function m(_,A,H,z){const Z=s.attributes,ee=A.attributes;let Y=0;const re=H.getAttributes();for(const $ in re)if(re[$].location>=0){const me=Z[$];let Ce=ee[$];if(Ce===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(Ce=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(Ce=_.instanceColor)),me===void 0||me.attribute!==Ce||Ce&&me.data!==Ce.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function g(_,A,H,z){const Z={},ee=A.attributes;let Y=0;const re=H.getAttributes();for(const $ in re)if(re[$].location>=0){let me=ee[$];me===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));const Ce={};Ce.attribute=me,me&&me.data&&(Ce.data=me.data),Z[$]=Ce,Y++}s.attributes=Z,s.attributesNum=Y,s.index=z}function x(){const _=s.newAttributes;for(let A=0,H=_.length;A<H;A++)_[A]=0}function p(_){u(_,0)}function u(_,A){const H=s.newAttributes,z=s.enabledAttributes,Z=s.attributeDivisors;H[_]=1,z[_]===0&&(n.enableVertexAttribArray(_),z[_]=1),Z[_]!==A&&(n.vertexAttribDivisor(_,A),Z[_]=A)}function w(){const _=s.newAttributes,A=s.enabledAttributes;for(let H=0,z=A.length;H<z;H++)A[H]!==_[H]&&(n.disableVertexAttribArray(H),A[H]=0)}function E(_,A,H,z,Z,ee,Y){Y===!0?n.vertexAttribIPointer(_,A,H,Z,ee):n.vertexAttribPointer(_,A,H,z,Z,ee)}function b(_,A,H,z){x();const Z=z.attributes,ee=H.getAttributes(),Y=A.defaultAttributeValues;for(const re in ee){const $=ee[re];if($.location>=0){let ce=Z[re];if(ce===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){const me=ce.normalized,Ce=ce.itemSize,He=e.get(ce);if(He===void 0)continue;const rt=He.buffer,Q=He.type,ae=He.bytesPerElement,Te=Q===n.INT||Q===n.UNSIGNED_INT||ce.gpuType===Ho;if(ce.isInterleavedBufferAttribute){const ue=ce.data,K=ue.stride,j=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let Ae=0;Ae<$.locationSize;Ae++)u($.location+Ae,ue.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<$.locationSize;Ae++)p($.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Ae=0;Ae<$.locationSize;Ae++)E($.location+Ae,Ce/$.locationSize,Q,me,K*ae,(j+Ce/$.locationSize*Ae)*ae,Te)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)u($.location+ue,ce.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<$.locationSize;ue++)p($.location+ue);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ue=0;ue<$.locationSize;ue++)E($.location+ue,Ce/$.locationSize,Q,me,Ce*ae,Ce/$.locationSize*ue*ae,Te)}}else if(Y!==void 0){const me=Y[re];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv($.location,me);break;case 3:n.vertexAttrib3fv($.location,me);break;case 4:n.vertexAttrib4fv($.location,me);break;default:n.vertexAttrib1fv($.location,me)}}}}w()}function B(){F();for(const _ in i){const A=i[_];for(const H in A){const z=A[H];for(const Z in z)h(z[Z].object),delete z[Z];delete A[H]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;const A=i[_.id];for(const H in A){const z=A[H];for(const Z in z)h(z[Z].object),delete z[Z];delete A[H]}delete i[_.id]}function L(_){for(const A in i){const H=i[A];if(H[_.id]===void 0)continue;const z=H[_.id];for(const Z in z)h(z[Z].object),delete z[Z];delete H[_.id]}}function F(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function Em(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,i,1)}function c(l,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Tm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==En&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const F=L===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ei&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==kn&&!F)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:B,maxSamples:C}}function Am(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Li,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const w=s?0:i,E=w*4;let b=u.clippingState||null;c.value=b,b=h(g,f,E,m);for(let B=0;B!==E;++B)b[B]=t[B];u.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const u=m+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,b=m;E!==x;++E,b+=4)a.copy(d[E]).applyMatrix4(w,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Cm(n){let e=new WeakMap;function t(a,o){return o===to?a.mapping=wr:o===no&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===to||o===no)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ou(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sd extends yd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,Vl=[.125,.215,.35,.446,.526,.582],ki=20,Pa=new Sd,Gl=new Qe;let Da=null,ka=0,Ia=0,Fa=!1;const Pi=(1+Math.sqrt(5))/2,lr=1/Pi,Wl=[new D(-Pi,lr,0),new D(Pi,lr,0),new D(-lr,0,Pi),new D(lr,0,Pi),new D(0,Pi,-lr),new D(0,Pi,lr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Da=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,ka,Ia),this._renderer.xr.enabled=Fa,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ls,format:En,colorSpace:Pr,depthBuffer:!1},r=Xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rm(s)),this._blurMaterial=Lm(s,e,t)}return r}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,r){const o=new gn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Gl),h.toneMapping=gi,h.autoClear=!1;const m=new $t({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Je(new vi,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Gl),x=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):w===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const E=this._cubeSize;Us(r,w*E,u>2?E:0,E,E),h.setRenderTarget(r),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Us(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wl[(r-s-1)%Wl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Je(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):ki;p>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const u=[];let w=0;for(let L=0;L<ki;++L){const F=L/x,M=Math.exp(-F*F/2);u.push(M),L===0?w+=M:L<p&&(w+=2*M)}for(let L=0;L<u.length;L++)u[L]=u[L]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const b=this._sizeLods[r],B=3*b*(r>E-mr?r-E+mr:0),C=4*(this._cubeSize-b);Us(t,B,C,3*b,2*b),c.setRenderTarget(t),c.render(d,Pa)}}function Rm(n){const e=[],t=[],i=[];let r=n;const s=n-mr+1+Vl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-mr?c=Vl[a-n+mr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,p=2,u=1,w=new Float32Array(x*g*m),E=new Float32Array(p*g*m),b=new Float32Array(u*g*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,F=C>2?0:-1,M=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];w.set(M,x*g*C),E.set(f,p*g*C);const _=[C,C,C,C,C,C];b.set(_,u*g*C)}const B=new Un;B.setAttribute("position",new Tn(w,x)),B.setAttribute("uv",new Tn(E,p)),B.setAttribute("faceIndex",new Tn(b,u)),e.push(B),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xl(n,e,t){const i=new Oi(n,e,t);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lm(n,e,t){const i=new Float32Array(ki),r=new D(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ql(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Yl(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function Pm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===to||c===no,h=c===wr||c===Er;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new $l(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new $l(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Dm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function km(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let p=0,u=x.length;p<u;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const w=m.array;x=m.version;for(let E=0,b=w.length;E<b;E+=3){const B=w[E+0],C=w[E+1],L=w[E+2];f.push(B,C,C,L,L,B)}}else if(g!==void 0){const w=g.array;x=g.version;for(let E=0,b=w.length/3-1;E<b;E+=3){const B=E+0,C=E+1,L=E+2;f.push(B,C,C,L,L,B)}}else return;const p=new(ud(f)?vd:_d)(f,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Im(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,i,1)}function d(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,g);let u=0;for(let w=0;w<g;w++)u+=m[w]*x[w];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Fm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Um(n,e,t){const i=new WeakMap,r=new St;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let _=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),p===!0&&(b=3);let B=o.attributes.position.count*b,C=1;B>e.maxTextureSize&&(C=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const L=new Float32Array(B*C*4*d),F=new pd(L,B,C,d);F.type=kn,F.needsUpdate=!0;const M=b*4;for(let A=0;A<d;A++){const H=u[A],z=w[A],Z=E[A],ee=B*C*4*A;for(let Y=0;Y<H.count;Y++){const re=Y*M;g===!0&&(r.fromBufferAttribute(H,Y),L[ee+re+0]=r.x,L[ee+re+1]=r.y,L[ee+re+2]=r.z,L[ee+re+3]=0),x===!0&&(r.fromBufferAttribute(z,Y),L[ee+re+4]=r.x,L[ee+re+5]=r.y,L[ee+re+6]=r.z,L[ee+re+7]=0),p===!0&&(r.fromBufferAttribute(Z,Y),L[ee+re+8]=r.x,L[ee+re+9]=r.y,L[ee+re+10]=r.z,L[ee+re+11]=Z.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new lt(B,C)},i.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Nm(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class wd extends Kt{constructor(e,t,i,r,s,a,o,c,l,h=yr){if(h!==yr&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yr&&(i=Ni),i===void 0&&h===Ar&&(i=Tr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ed=new Kt,jl=new wd(1,1),Td=new pd,Ad=new Mu,Cd=new bd,Kl=[],Zl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),ec=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kl[r];if(s===void 0&&(s=new Float32Array(r),Kl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sa(n,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;ec.set(i),n.uniformMatrix2fv(this.addr,!1,ec),Pt(t,i)}}function Gm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Ql.set(i),n.uniformMatrix3fv(this.addr,!1,Ql),Pt(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Jl.set(i),n.uniformMatrix4fv(this.addr,!1,Jl),Pt(t,i)}}function $m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Qm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jl.compareFunction=hd,s=jl):s=Ed,t.setTexture2D(e||s,r)}function eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ad,r)}function tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cd,r)}function ng(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Td,r)}function ig(n){switch(n){case 5126:return Om;case 35664:return Bm;case 35665:return zm;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return $m;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return Km;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function rg(n,e){n.uniform1fv(this.addr,e)}function sg(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function ag(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function og(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function lg(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cg(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dg(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hg(n,e){n.uniform1iv(this.addr,e)}function ug(n,e){n.uniform2iv(this.addr,e)}function fg(n,e){n.uniform3iv(this.addr,e)}function pg(n,e){n.uniform4iv(this.addr,e)}function mg(n,e){n.uniform1uiv(this.addr,e)}function gg(n,e){n.uniform2uiv(this.addr,e)}function _g(n,e){n.uniform3uiv(this.addr,e)}function vg(n,e){n.uniform4uiv(this.addr,e)}function xg(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ed,s[a])}function yg(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ad,s[a])}function bg(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cd,s[a])}function Mg(n,e,t){const i=this.cache,r=e.length,s=sa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Td,s[a])}function Sg(n){switch(n){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}class wg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}}class Eg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function tc(n,e){n.seq.push(e),n.map[e.id]=e}function Ag(n,e,t){const i=n.name,r=i.length;for(Ua.lastIndex=0;;){const s=Ua.exec(i),a=Ua.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){tc(t,l===void 0?new wg(o,n,e):new Eg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Tg(o),tc(t,d)),t=d}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ag(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function nc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cg=37297;let Rg=0;function Lg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ic=new Xe;function Pg(n){it._getMatrix(ic,it.workingColorSpace,n);const e=`mat3( ${ic.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case ra:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Lg(n.getShaderSource(e),a)}else return r}function Dg(n,e){const t=Pg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kg(n,e){let t;switch(e){case Fh:t="Linear";break;case Uh:t="Reinhard";break;case Nh:t="Cineon";break;case Qc:t="ACESFilmic";break;case Bh:t="AgX";break;case zh:t="Neutral";break;case Oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new D;function Ig(){it.getLuminanceCoefficients(Ns);const n=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function Ug(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ng(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Jr(n){return n!==""}function sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(Og,zg)}const Bg=new Map;function zg(n,e){let t=qe[e];if(t===void 0){const i=Bg.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(n){return n.replace(Hg,Vg)}function Vg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Gg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wr:case Er:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $g(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function Xg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case kh:e="ENVMAP_BLENDING_MIX";break;case Ih:e="ENVMAP_BLENDING_ADD";break}return e}function qg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Yg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Gg(t),l=Wg(t),h=$g(t),d=Xg(t),f=qg(t),m=Fg(t),g=Ug(s),x=r.createProgram();let p,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),u.length>0&&(u+=`
`)):(p=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),u=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?qe.tonemapping_pars_fragment:"",t.toneMapping!==gi?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),a=Do(a),a=sc(a,t),a=ac(a,t),o=Do(o),o=sc(o,t),o=ac(o,t),a=oc(a),o=oc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=w+p+a,b=w+u+o,B=nc(r,r.VERTEX_SHADER,E),C=nc(r,r.FRAGMENT_SHADER,b);r.attachShader(x,B),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(A){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(B).trim(),Z=r.getShaderInfoLog(C).trim();let ee=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,B,C);else{const re=rc(r,B,"vertex"),$=rc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+H+`
`+re+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||Z==="")&&(Y=!1);Y&&(A.diagnostics={runnable:ee,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(B),r.deleteShader(C),F=new qs(r,x),M=Ng(r,x)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Cg)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=C,this}let jg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Zg(e),t.set(e,i)),i}}class Zg{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}}function Jg(n,e,t,i,r,s,a){const o=new jo,c=new Kg,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,_,A,H,z){const Z=H.fog,ee=z.geometry,Y=M.isMeshStandardMaterial?H.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),$=re&&re.mapping===ia?re.image.height:null,ce=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ce=me!==void 0?me.length:0;let He=0;ee.morphAttributes.position!==void 0&&(He=1),ee.morphAttributes.normal!==void 0&&(He=2),ee.morphAttributes.color!==void 0&&(He=3);let rt,Q,ae,Te;if(ce){const nt=Ln[ce];rt=nt.vertexShader,Q=nt.fragmentShader}else rt=M.vertexShader,Q=M.fragmentShader,c.update(M),ae=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const ue=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),j=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,st=!!M.map,Ne=!!M.matcap,Ye=!!re,R=!!M.aoMap,mt=!!M.lightMap,de=!!M.bumpMap,xe=!!M.normalMap,Re=!!M.displacementMap,ct=!!M.emissiveMap,Ue=!!M.metalnessMap,S=!!M.roughnessMap,v=M.anisotropy>0,V=M.clearcoat>0,ne=M.dispersion>0,se=M.iridescence>0,J=M.sheen>0,Le=M.transmission>0,he=v&&!!M.anisotropyMap,Me=V&&!!M.clearcoatMap,Ke=V&&!!M.clearcoatNormalMap,oe=V&&!!M.clearcoatRoughnessMap,ye=se&&!!M.iridescenceMap,ze=se&&!!M.iridescenceThicknessMap,Ve=J&&!!M.sheenColorMap,Se=J&&!!M.sheenRoughnessMap,je=!!M.specularMap,$e=!!M.specularColorMap,ht=!!M.specularIntensityMap,k=Le&&!!M.transmissionMap,fe=Le&&!!M.thicknessMap,X=!!M.gradientMap,ie=!!M.alphaMap,ge=M.alphaTest>0,_e=!!M.alphaHash,Ge=!!M.extensions;let yt=gi;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Ct={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:Q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:j,instancingColor:j&&z.instanceColor!==null,instancingMorph:j&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Pr,alphaToCoverage:!!M.alphaToCoverage,map:st,matcap:Ne,envMap:Ye,envMapMode:Ye&&re.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:mt,bumpMap:de,normalMap:xe,displacementMap:f&&Re,emissiveMap:ct,normalMapObjectSpace:xe&&M.normalMapType===Wh,normalMapTangentSpace:xe&&M.normalMapType===dd,metalnessMap:Ue,roughnessMap:S,anisotropy:v,anisotropyMap:he,clearcoat:V,clearcoatMap:Me,clearcoatNormalMap:Ke,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:se,iridescenceMap:ye,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:Ve,sheenRoughnessMap:Se,specularMap:je,specularColorMap:$e,specularIntensityMap:ht,transmission:Le,transmissionMap:k,thicknessMap:fe,gradientMap:X,opaque:M.transparent===!1&&M.blending===xr&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:_e,combine:M.combine,mapUv:st&&x(M.map.channel),aoMapUv:R&&x(M.aoMap.channel),lightMapUv:mt&&x(M.lightMap.channel),bumpMapUv:de&&x(M.bumpMap.channel),normalMapUv:xe&&x(M.normalMap.channel),displacementMapUv:Re&&x(M.displacementMap.channel),emissiveMapUv:ct&&x(M.emissiveMap.channel),metalnessMapUv:Ue&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:he&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(M.sheenRoughnessMap.channel),specularMapUv:je&&x(M.specularMap.channel),specularColorMapUv:$e&&x(M.specularColorMap.channel),specularIntensityMapUv:ht&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:fe&&x(M.thicknessMap.channel),alphaMapUv:ie&&x(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(xe||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(st||ie),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:K,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:He,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:st&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:ct&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function u(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)_.push(A),_.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(w(_,M),E(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function w(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function E(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const _=g[M.type];let A;if(_){const H=Ln[_];A=Iu.clone(H.uniforms)}else A=M.uniforms;return A}function B(M,_){let A;for(let H=0,z=h.length;H<z;H++){const Z=h[H];if(Z.cacheKey===_){A=Z,++A.usedTimes;break}}return A===void 0&&(A=new Yg(n,_,M,s),h.push(A)),A}function C(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function L(M){c.remove(M)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:B,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:F}}function Qg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,x,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function o(d,f,m,g,x,p){const u=a(d,f,m,g,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(d,f,m,g,x,p){const u=a(d,f,m,g,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||e0),i.length>1&&i.sort(f||cc),r.length>1&&r.sort(f||cc)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function t0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new dc,n.set(i,[a])):r>=s.length?(a=new dc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function n0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Qe};break;case"SpotLight":t={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function i0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r0=0;function s0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a0(n){const e=new n0,t=i0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new bt,a=new bt;function o(l){let h=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,w=0,E=0,b=0,B=0,C=0,L=0;l.sort(s0);for(let M=0,_=l.length;M<_;M++){const A=l[M],H=A.color,z=A.intensity,Z=A.distance,ee=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=H.r*z,d+=H.g*z,f+=H.b*z;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(A.sh.coefficients[Y],z);L++}else if(A.isDirectionalLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const re=A.shadow,$=t.get(A);$.shadowIntensity=re.intensity,$.shadowBias=re.bias,$.shadowNormalBias=re.normalBias,$.shadowRadius=re.radius,$.shadowMapSize=re.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=A.shadow.matrix,w++}i.directional[m]=Y,m++}else if(A.isSpotLight){const Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(H).multiplyScalar(z),Y.distance=Z,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,i.spot[x]=Y;const re=A.shadow;if(A.map&&(i.spotLightMap[B]=A.map,B++,re.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[x]=re.matrix,A.castShadow){const $=t.get(A);$.shadowIntensity=re.intensity,$.shadowBias=re.bias,$.shadowNormalBias=re.normalBias,$.shadowRadius=re.radius,$.shadowMapSize=re.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=ee,b++}x++}else if(A.isRectAreaLight){const Y=e.get(A);Y.color.copy(H).multiplyScalar(z),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=Y,p++}else if(A.isPointLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const re=A.shadow,$=t.get(A);$.shadowIntensity=re.intensity,$.shadowBias=re.bias,$.shadowNormalBias=re.normalBias,$.shadowRadius=re.radius,$.shadowMapSize=re.mapSize,$.shadowCameraNear=re.camera.near,$.shadowCameraFar=re.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=A.shadow.matrix,E++}i.point[g]=Y,g++}else if(A.isHemisphereLight){const Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(z),Y.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[u]=Y,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==w||F.numPointShadows!==E||F.numSpotShadows!==b||F.numSpotMaps!==B||F.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+B-C,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,F.directionalLength=m,F.pointLength=g,F.spotLength=x,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=w,F.numPointShadows=E,F.numSpotShadows=b,F.numSpotMaps=B,F.numLightProbes=L,i.version=r0++)}function c(l,h){let d=0,f=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const E=l[u];if(E.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(E.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function hc(n){const e=new a0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function o0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hc(n),e.set(r,[o])):s>=a.length?(o=new hc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class l0 extends ds{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c0 extends ds{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function u0(n,e,t){let i=new Ko;const r=new lt,s=new lt,a=new St,o=new l0({depthPacking:Gh}),c=new c0,l={},h=t.maxTextureSize,d={[_i]:nn,[nn]:_i,[Yn]:Yn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:d0,fragmentShader:h0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Je(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let u=this.type;this.render=function(C,L,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),H=n.state;H.setBlending(mi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=u!==Xn&&this.type===Xn,Z=u===Xn&&this.type!==Xn;for(let ee=0,Y=C.length;ee<Y;ee++){const re=C[ee],$=re.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ce=$.getFrameExtents();if(r.multiply(ce),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ce.x),r.x=s.x*ce.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ce.y),r.y=s.y*ce.y,$.mapSize.y=s.y)),$.map===null||z===!0||Z===!0){const Ce=this.type!==Xn?{minFilter:dn,magFilter:dn}:{};$.map!==null&&$.map.dispose(),$.map=new Oi(r.x,r.y,Ce),$.map.texture.name=re.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const me=$.getViewportCount();for(let Ce=0;Ce<me;Ce++){const He=$.getViewport(Ce);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),H.viewport(a),$.updateMatrices(re,Ce),i=$.getFrustum(),b(L,F,$.camera,re,this.type)}$.isPointLightShadow!==!0&&this.type===Xn&&w($,F),$.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(M,_,A)};function w(C,L){const F=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Oi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,F,f,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,F,m,x,null)}function E(C,L,F,M){let _=null;const A=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)_=A;else if(_=F.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const H=_.uuid,z=L.uuid;let Z=l[H];Z===void 0&&(Z={},l[H]=Z);let ee=Z[z];ee===void 0&&(ee=_.clone(),Z[z]=ee,L.addEventListener("dispose",B)),_=ee}if(_.visible=L.visible,_.wireframe=L.wireframe,M===Xn?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:d[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=n.properties.get(_);H.light=F}return _}function b(C,L,F,M,_){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Xn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Z=C.material;if(Array.isArray(Z)){const ee=z.groups;for(let Y=0,re=ee.length;Y<re;Y++){const $=ee[Y],ce=Z[$.materialIndex];if(ce&&ce.visible){const me=E(C,ce,M,_);C.onBeforeShadow(n,C,L,F,z,me,$),n.renderBufferDirect(F,null,z,me,C,$),C.onAfterShadow(n,C,L,F,z,me,$)}}}else if(Z.visible){const ee=E(C,Z,M,_);C.onBeforeShadow(n,C,L,F,z,ee,null),n.renderBufferDirect(F,null,z,ee,C,null),C.onAfterShadow(n,C,L,F,z,ee,null)}}const H=C.children;for(let z=0,Z=H.length;z<Z;z++)b(H[z],L,F,M,_)}function B(C){C.target.removeEventListener("dispose",B);for(const F in l){const M=l[F],_=C.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const f0={[Ya]:ja,[Ka]:Qa,[Za]:eo,[Sr]:Ja,[ja]:Ya,[Qa]:Ka,[eo]:Za,[Ja]:Sr};function p0(n,e){function t(){let k=!1;const fe=new St;let X=null;const ie=new St(0,0,0,0);return{setMask:function(ge){X!==ge&&!k&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){k=ge},setClear:function(ge,_e,Ge,yt,Ct){Ct===!0&&(ge*=yt,_e*=yt,Ge*=yt),fe.set(ge,_e,Ge,yt),ie.equals(fe)===!1&&(n.clearColor(ge,_e,Ge,yt),ie.copy(fe))},reset:function(){k=!1,X=null,ie.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,X=null,ie=null,ge=null;return{setReversed:function(_e){if(fe!==_e){const Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const yt=ge;ge=null,this.setClear(yt)}fe=_e},getReversed:function(){return fe},setTest:function(_e){_e?ue(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(_e){X!==_e&&!k&&(n.depthMask(_e),X=_e)},setFunc:function(_e){if(fe&&(_e=f0[_e]),ie!==_e){switch(_e){case Ya:n.depthFunc(n.NEVER);break;case ja:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=_e}},setLocked:function(_e){k=_e},setClear:function(_e){ge!==_e&&(fe&&(_e=1-_e),n.clearDepth(_e),ge=_e)},reset:function(){k=!1,X=null,ie=null,ge=null,fe=!1}}}function r(){let k=!1,fe=null,X=null,ie=null,ge=null,_e=null,Ge=null,yt=null,Ct=null;return{setTest:function(nt){k||(nt?ue(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!k&&(n.stencilMask(nt),fe=nt)},setFunc:function(nt,Jt,Ht){(X!==nt||ie!==Jt||ge!==Ht)&&(n.stencilFunc(nt,Jt,Ht),X=nt,ie=Jt,ge=Ht)},setOp:function(nt,Jt,Ht){(_e!==nt||Ge!==Jt||yt!==Ht)&&(n.stencilOp(nt,Jt,Ht),_e=nt,Ge=Jt,yt=Ht)},setLocked:function(nt){k=nt},setClear:function(nt){Ct!==nt&&(n.clearStencil(nt),Ct=nt)},reset:function(){k=!1,fe=null,X=null,ie=null,ge=null,_e=null,Ge=null,yt=null,Ct=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,w=null,E=null,b=null,B=null,C=null,L=new Qe(0,0,0),F=0,M=!1,_=null,A=null,H=null,z=null,Z=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=re>=1):$.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=re>=2);let ce=null,me={};const Ce=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),rt=new St().fromArray(Ce),Q=new St().fromArray(He);function ae(k,fe,X,ie){const ge=new Uint8Array(4),_e=n.createTexture();n.bindTexture(k,_e),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<X;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(fe+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return _e}const Te={};Te[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(Sr),de(!1),xe(fl),ue(n.CULL_FACE),R(mi);function ue(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function K(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function j(k,fe){return d[k]!==fe?(n.bindFramebuffer(k,fe),d[k]=fe,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ae(k,fe){let X=m,ie=!1;if(k){X=f.get(fe),X===void 0&&(X=[],f.set(fe,X));const ge=k.textures;if(X.length!==ge.length||X[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ge=ge.length;_e<Ge;_e++)X[_e]=n.COLOR_ATTACHMENT0+_e;X.length=ge.length,ie=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ie=!0);ie&&n.drawBuffers(X)}function st(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Ne={[Di]:n.FUNC_ADD,[gh]:n.FUNC_SUBTRACT,[_h]:n.FUNC_REVERSE_SUBTRACT};Ne[vh]=n.MIN,Ne[xh]=n.MAX;const Ye={[yh]:n.ZERO,[bh]:n.ONE,[Mh]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Ch]:n.SRC_ALPHA_SATURATE,[Th]:n.DST_COLOR,[wh]:n.DST_ALPHA,[Sh]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[Ah]:n.ONE_MINUS_DST_COLOR,[Eh]:n.ONE_MINUS_DST_ALPHA,[Rh]:n.CONSTANT_COLOR,[Lh]:n.ONE_MINUS_CONSTANT_COLOR,[Ph]:n.CONSTANT_ALPHA,[Dh]:n.ONE_MINUS_CONSTANT_ALPHA};function R(k,fe,X,ie,ge,_e,Ge,yt,Ct,nt){if(k===mi){x===!0&&(K(n.BLEND),x=!1);return}if(x===!1&&(ue(n.BLEND),x=!0),k!==mh){if(k!==p||nt!==M){if((u!==Di||b!==Di)&&(n.blendEquation(n.FUNC_ADD),u=Di,b=Di),nt)switch(k){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pl:n.blendFunc(n.ONE,n.ONE);break;case ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,E=null,B=null,C=null,L.set(0,0,0),F=0,p=k,M=nt}return}ge=ge||fe,_e=_e||X,Ge=Ge||ie,(fe!==u||ge!==b)&&(n.blendEquationSeparate(Ne[fe],Ne[ge]),u=fe,b=ge),(X!==w||ie!==E||_e!==B||Ge!==C)&&(n.blendFuncSeparate(Ye[X],Ye[ie],Ye[_e],Ye[Ge]),w=X,E=ie,B=_e,C=Ge),(yt.equals(L)===!1||Ct!==F)&&(n.blendColor(yt.r,yt.g,yt.b,Ct),L.copy(yt),F=Ct),p=k,M=!1}function mt(k,fe){k.side===Yn?K(n.CULL_FACE):ue(n.CULL_FACE);let X=k.side===nn;fe&&(X=!X),de(X),k.blending===xr&&k.transparent===!1?R(mi):R(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ie=k.stencilWrite;o.setTest(ie),ie&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function xe(k){k!==uh?(ue(n.CULL_FACE),k!==A&&(k===fl?n.cullFace(n.BACK):k===fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),A=k}function Re(k){k!==H&&(Y&&n.lineWidth(k),H=k)}function ct(k,fe,X){k?(ue(n.POLYGON_OFFSET_FILL),(z!==fe||Z!==X)&&(n.polygonOffset(fe,X),z=fe,Z=X)):K(n.POLYGON_OFFSET_FILL)}function Ue(k){k?ue(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function S(k){k===void 0&&(k=n.TEXTURE0+ee-1),ce!==k&&(n.activeTexture(k),ce=k)}function v(k,fe,X){X===void 0&&(ce===null?X=n.TEXTURE0+ee-1:X=ce);let ie=me[X];ie===void 0&&(ie={type:void 0,texture:void 0},me[X]=ie),(ie.type!==k||ie.texture!==fe)&&(ce!==X&&(n.activeTexture(X),ce=X),n.bindTexture(k,fe||Te[k]),ie.type=k,ie.texture=fe)}function V(){const k=me[ce];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(k){rt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),rt.copy(k))}function Se(k){Q.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function je(k,fe){let X=l.get(fe);X===void 0&&(X=new WeakMap,l.set(fe,X));let ie=X.get(k);ie===void 0&&(ie=n.getUniformBlockIndex(fe,k.name),X.set(k,ie))}function $e(k,fe){const ie=l.get(fe).get(k);c.get(fe)!==ie&&(n.uniformBlockBinding(fe,ie,k.__bindingPointIndex),c.set(fe,ie))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,me={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,w=null,E=null,b=null,B=null,C=null,L=new Qe(0,0,0),F=0,M=!1,_=null,A=null,H=null,z=null,Z=null,rt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:K,bindFramebuffer:j,drawBuffers:Ae,useProgram:st,setBlending:R,setMaterial:mt,setFlipSided:de,setCullFace:xe,setLineWidth:Re,setPolygonOffset:ct,setScissorTest:Ue,activeTexture:S,bindTexture:v,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:ye,texImage3D:ze,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Le,compressedTexSubImage2D:he,compressedTexSubImage3D:Me,scissor:Ve,viewport:Se,reset:ht}}function uc(n,e,t,i){const r=m0(i);switch(t){case rd:return n*e;case ad:return n*e;case od:return n*e*2;case Wo:return n*e/r.components*r.byteLength;case $o:return n*e/r.components*r.byteLength;case ld:return n*e*2/r.components*r.byteLength;case Xo:return n*e*2/r.components*r.byteLength;case sd:return n*e*3/r.components*r.byteLength;case En:return n*e*4/r.components*r.byteLength;case qo:return n*e*4/r.components*r.byteLength;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:case lo:return Math.max(n,16)*Math.max(e,8)/4;case so:case oo:return Math.max(n,8)*Math.max(e,8)/2;case co:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xs:case Ao:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cd:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m0(n){switch(n){case ei:case td:return{byteLength:1,components:1};case rs:case nd:case ls:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case Ni:case Ho:case kn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return m?new OffscreenCanvas(S,v):Zs("canvas")}function x(S,v,V){let ne=1;const se=Ue(S);if((se.width>V||se.height>V)&&(ne=V/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const J=Math.floor(ne*se.width),Le=Math.floor(ne*se.height);d===void 0&&(d=g(J,Le));const he=v?g(J,Le):d;return he.width=J,he.height=Le,he.getContext("2d").drawImage(S,0,0,J,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+Le+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),S;return S}function p(S){return S.generateMipmaps}function u(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(S,v,V,ne,se=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=v;if(v===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),v===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),v===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),v===n.RGBA){const Le=se?ra:it.getTransfer(ne);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Le===ft?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(S,v){let V;return S?v===null||v===Ni||v===Tr?V=n.DEPTH24_STENCIL8:v===kn?V=n.DEPTH32F_STENCIL8:v===rs&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===Tr?V=n.DEPTH_COMPONENT24:v===kn?V=n.DEPTH_COMPONENT32F:v===rs&&(V=n.DEPTH_COMPONENT16),V}function B(S,v){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==dn&&S.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){const v=S.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&h.delete(v)}function L(S){const v=S.target;v.removeEventListener("dispose",L),_(v)}function F(S){const v=i.get(S);if(v.__webglInit===void 0)return;const V=S.source,ne=f.get(V);if(ne){const se=ne[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(S),Object.keys(ne).length===0&&f.delete(V)}i.remove(S)}function M(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const V=S.source,ne=f.get(V);delete ne[v.__cacheKey],a.memory.textures--}function _(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let se=0;se<v.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(v.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[ne]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=S.textures;for(let ne=0,se=V.length;ne<se;ne++){const J=i.get(V[ne]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(V[ne])}i.remove(S)}let A=0;function H(){A=0}function z(){const S=A;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),A+=1,S}function Z(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function ee(S,v){const V=i.get(S);if(S.isVideoTexture&&Re(S),S.isRenderTargetTexture===!1&&S.version>0&&V.__version!==S.version){const ne=S.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,S,v);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function Y(S,v){const V=i.get(S);if(S.version>0&&V.__version!==S.version){Q(V,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function re(S,v){const V=i.get(S);if(S.version>0&&V.__version!==S.version){Q(V,S,v);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function $(S,v){const V=i.get(S);if(S.version>0&&V.__version!==S.version){ae(V,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}const ce={[io]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[ro]:n.MIRRORED_REPEAT},me={[dn]:n.NEAREST,[Hh]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Ce={[$h]:n.NEVER,[Zh]:n.ALWAYS,[Xh]:n.LESS,[hd]:n.LEQUAL,[qh]:n.EQUAL,[Kh]:n.GEQUAL,[Yh]:n.GREATER,[jh]:n.NOTEQUAL};function He(S,v){if(v.type===kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===da||v.magFilter===_s||v.magFilter===Ui||v.minFilter===Dn||v.minFilter===da||v.minFilter===_s||v.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ce[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ce[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ce[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==_s&&v.minFilter!==Ui||v.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function rt(S,v){let V=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",C));const ne=v.source;let se=f.get(ne);se===void 0&&(se={},f.set(ne,se));const J=Z(v);if(J!==S.__cacheKey){se[J]===void 0&&(se[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[J].usedTimes++;const Le=se[S.__cacheKey];Le!==void 0&&(se[S.__cacheKey].usedTimes--,Le.usedTimes===0&&M(v)),S.__cacheKey=J,S.__webglTexture=se[J].texture}return V}function Q(S,v,V){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const se=rt(S,v),J=v.source;t.bindTexture(ne,S.__webglTexture,n.TEXTURE0+V);const Le=i.get(J);if(J.version!==Le.__version||se===!0){t.activeTexture(n.TEXTURE0+V);const he=it.getPrimaries(it.workingColorSpace),Me=v.colorSpace===fi?null:it.getPrimaries(v.colorSpace),Ke=v.colorSpace===fi||he===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=x(v.image,!1,r.maxTextureSize);oe=ct(v,oe);const ye=s.convert(v.format,v.colorSpace),ze=s.convert(v.type);let Ve=E(v.internalFormat,ye,ze,v.colorSpace,v.isVideoTexture);He(ne,v);let Se;const je=v.mipmaps,$e=v.isVideoTexture!==!0,ht=Le.__version===void 0||se===!0,k=J.dataReady,fe=B(v,oe);if(v.isDepthTexture)Ve=b(v.format===Ar,v.type),ht&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ve,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,oe.width,oe.height,0,ye,ze,null));else if(v.isDataTexture)if(je.length>0){$e&&ht&&t.texStorage2D(n.TEXTURE_2D,fe,Ve,je[0].width,je[0].height);for(let X=0,ie=je.length;X<ie;X++)Se=je[X],$e?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,ze,Se.data):t.texImage2D(n.TEXTURE_2D,X,Ve,Se.width,Se.height,0,ye,ze,Se.data);v.generateMipmaps=!1}else $e?(ht&&t.texStorage2D(n.TEXTURE_2D,fe,Ve,oe.width,oe.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ye,ze,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,oe.width,oe.height,0,ye,ze,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ve,je[0].width,je[0].height,oe.depth);for(let X=0,ie=je.length;X<ie;X++)if(Se=je[X],v.format!==En)if(ye!==null)if($e){if(k)if(v.layerUpdates.size>0){const ge=uc(Se.width,Se.height,v.format,v.type);for(const _e of v.layerUpdates){const Ge=Se.data.subarray(_e*ge/Se.data.BYTES_PER_ELEMENT,(_e+1)*ge/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,_e,Se.width,Se.height,1,ye,Ge)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,oe.depth,ye,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ve,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,oe.depth,ye,ze,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ve,Se.width,Se.height,oe.depth,0,ye,ze,Se.data)}else{$e&&ht&&t.texStorage2D(n.TEXTURE_2D,fe,Ve,je[0].width,je[0].height);for(let X=0,ie=je.length;X<ie;X++)Se=je[X],v.format!==En?ye!==null?$e?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,ze,Se.data):t.texImage2D(n.TEXTURE_2D,X,Ve,Se.width,Se.height,0,ye,ze,Se.data)}else if(v.isDataArrayTexture)if($e){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ve,oe.width,oe.height,oe.depth),k)if(v.layerUpdates.size>0){const X=uc(oe.width,oe.height,v.format,v.type);for(const ie of v.layerUpdates){const ge=oe.data.subarray(ie*X/oe.data.BYTES_PER_ELEMENT,(ie+1)*X/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,ye,ze,ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,ze,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,oe.width,oe.height,oe.depth,0,ye,ze,oe.data);else if(v.isData3DTexture)$e?(ht&&t.texStorage3D(n.TEXTURE_3D,fe,Ve,oe.width,oe.height,oe.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,ze,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,oe.width,oe.height,oe.depth,0,ye,ze,oe.data);else if(v.isFramebufferTexture){if(ht)if($e)t.texStorage2D(n.TEXTURE_2D,fe,Ve,oe.width,oe.height);else{let X=oe.width,ie=oe.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ve,X,ie,0,ye,ze,null),X>>=1,ie>>=1}}else if(je.length>0){if($e&&ht){const X=Ue(je[0]);t.texStorage2D(n.TEXTURE_2D,fe,Ve,X.width,X.height)}for(let X=0,ie=je.length;X<ie;X++)Se=je[X],$e?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ye,ze,Se):t.texImage2D(n.TEXTURE_2D,X,Ve,ye,ze,Se);v.generateMipmaps=!1}else if($e){if(ht){const X=Ue(oe);t.texStorage2D(n.TEXTURE_2D,fe,Ve,X.width,X.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,ze,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,ye,ze,oe);p(v)&&u(ne),Le.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ae(S,v,V){if(v.image.length!==6)return;const ne=rt(S,v),se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+V);const J=i.get(se);if(se.version!==J.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const Le=it.getPrimaries(it.workingColorSpace),he=v.colorSpace===fi?null:it.getPrimaries(v.colorSpace),Me=v.colorSpace===fi||Le===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ke=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let ie=0;ie<6;ie++)!Ke&&!oe?ye[ie]=x(v.image[ie],!0,r.maxCubemapSize):ye[ie]=oe?v.image[ie].image:v.image[ie],ye[ie]=ct(v,ye[ie]);const ze=ye[0],Ve=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),je=E(v.internalFormat,Ve,Se,v.colorSpace),$e=v.isVideoTexture!==!0,ht=J.__version===void 0||ne===!0,k=se.dataReady;let fe=B(v,ze);He(n.TEXTURE_CUBE_MAP,v);let X;if(Ke){$e&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,je,ze.width,ze.height);for(let ie=0;ie<6;ie++){X=ye[ie].mipmaps;for(let ge=0;ge<X.length;ge++){const _e=X[ge];v.format!==En?Ve!==null?$e?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,_e.width,_e.height,Ve,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,je,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,_e.width,_e.height,Ve,Se,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,je,_e.width,_e.height,0,Ve,Se,_e.data)}}}else{if(X=v.mipmaps,$e&&ht){X.length>0&&fe++;const ie=Ue(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ye[ie].width,ye[ie].height,Ve,Se,ye[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,ye[ie].width,ye[ie].height,0,Ve,Se,ye[ie].data);for(let ge=0;ge<X.length;ge++){const Ge=X[ge].image[ie].image;$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ge.width,Ge.height,Ve,Se,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,je,Ge.width,Ge.height,0,Ve,Se,Ge.data)}}else{$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,Se,ye[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,Ve,Se,ye[ie]);for(let ge=0;ge<X.length;ge++){const _e=X[ge];$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ve,Se,_e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,je,Ve,Se,_e.image[ie])}}}p(v)&&u(n.TEXTURE_CUBE_MAP),J.__version=se.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Te(S,v,V,ne,se,J){const Le=s.convert(V.format,V.colorSpace),he=s.convert(V.type),Me=E(V.internalFormat,Le,he,V.colorSpace),Ke=i.get(v),oe=i.get(V);if(oe.__renderTarget=v,!Ke.__hasExternalTextures){const ye=Math.max(1,v.width>>J),ze=Math.max(1,v.height>>J);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Me,ye,ze,v.depth,0,Le,he,null):t.texImage2D(se,J,Me,ye,ze,0,Le,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,se,oe.__webglTexture,0,de(v)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,se,oe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(S,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const ne=v.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,J=b(v.stencilBuffer,se),Le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=de(v);xe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,J,v.width,v.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,S)}else{const ne=v.textures;for(let se=0;se<ne.length;se++){const J=ne[se],Le=s.convert(J.format,J.colorSpace),he=s.convert(J.type),Me=E(J.internalFormat,Le,he,J.colorSpace),Ke=de(v);V&&xe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Me,v.width,v.height):xe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,Me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(v.depthTexture);ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const se=ne.__webglTexture,J=de(v);if(v.depthTexture.format===yr)xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===Ar)xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function j(S){const v=i.get(S),V=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const ne=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=ne}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");K(v.__webglFramebuffer,S)}else if(V){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),ue(v.__webglDepthbuffer[ne],S,!1);else{const se=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ue(v.__webglDepthbuffer,S,!1);else{const ne=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(S,v,V){const ne=i.get(S);v!==void 0&&Te(ne.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&j(S)}function st(S){const v=S.texture,V=i.get(S),ne=i.get(v);S.addEventListener("dispose",L);const se=S.textures,J=S.isWebGLCubeRenderTarget===!0,Le=se.length>1;if(Le||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let Me=0;Me<v.mipmaps.length;Me++)V.__webglFramebuffer[he][Me]=n.createFramebuffer()}else V.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)V.__webglFramebuffer[he]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Le)for(let he=0,Me=se.length;he<Me;he++){const Ke=i.get(se[he]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&xe(S)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Me=se[he];V.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Ke=s.convert(Me.format,Me.colorSpace),oe=s.convert(Me.type),ye=E(Me.internalFormat,Ke,oe,Me.colorSpace,S.isXRRenderTarget===!0),ze=de(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ye,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,V.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),He(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Te(V.__webglFramebuffer[he][Me],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else Te(V.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let he=0,Me=se.length;he<Me;he++){const Ke=se[he],oe=i.get(Ke);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),He(n.TEXTURE_2D,Ke),Te(V.__webglFramebuffer,S,Ke,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),p(Ke)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),He(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Te(V.__webglFramebuffer[Me],S,v,n.COLOR_ATTACHMENT0,he,Me);else Te(V.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,he,0);p(v)&&u(he),t.unbindTexture()}S.depthBuffer&&j(S)}function Ne(S){const v=S.textures;for(let V=0,ne=v.length;V<ne;V++){const se=v[V];if(p(se)){const J=w(S),Le=i.get(se).__webglTexture;t.bindTexture(J,Le),u(J),t.unbindTexture()}}}const Ye=[],R=[];function mt(S){if(S.samples>0){if(xe(S)===!1){const v=S.textures,V=S.width,ne=S.height;let se=n.COLOR_BUFFER_BIT;const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(S),he=v.length>1;if(he)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const Ke=i.get(v[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,se,n.NEAREST),c===!0&&(Ye.length=0,R.length=0,Ye.push(n.COLOR_ATTACHMENT0+Me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ye.push(J),R.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const Ke=i.get(v[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function de(S){return Math.min(r.maxSamples,S.samples)}function xe(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Re(S){const v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function ct(S,v){const V=S.colorSpace,ne=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||V!==Pr&&V!==fi&&(it.getTransfer(V)===ft?(ne!==En||se!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function Ue(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=$,this.rebindTextures=Ae,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=xe}function _0(n,e){function t(i,r=fi){let s;const a=it.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===Vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===Ho)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===rd)return n.ALPHA;if(i===sd)return n.RGB;if(i===En)return n.RGBA;if(i===ad)return n.LUMINANCE;if(i===od)return n.LUMINANCE_ALPHA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===Wo)return n.RED;if(i===$o)return n.RED_INTEGER;if(i===ld)return n.RG;if(i===Xo)return n.RG_INTEGER;if(i===qo)return n.RGBA_INTEGER;if(i===Vs||i===Gs||i===Ws||i===$s)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===so||i===ao||i===oo||i===lo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===co||i===ho||i===uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===co||i===ho)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===bo||i===Mo||i===So||i===wo||i===Eo||i===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===So)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xs||i===Ao||i===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xs)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===Ro||i===Lo||i===Po)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class v0 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
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

}`;class M0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xi({vertexShader:y0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends Dr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const x=new M0,p=t.getContextAttributes();let u=null,w=null;const E=[],b=[],B=new lt;let C=null;const L=new gn;L.viewport=new St;const F=new gn;F.viewport=new St;const M=[L,F],_=new v0;let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Na,E[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Na,E[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Na,E[Q]=ae),ae.getHandSpace()};function z(Q){const ae=b.indexOf(Q.inputSource);if(ae===-1)return;const Te=E[ae];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,l||a),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<E.length;Q++){const ae=b[Q];ae!==null&&(b[Q]=null,E[Q].disconnect(ae))}A=null,H=null,x.reset(),e.setRenderTarget(u),m=null,f=null,d=null,r=null,w=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Oi(m.framebufferWidth,m.framebufferHeight,{format:En,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Te=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?Ar:yr,Te=p.stencil?Tr:Ni);const K={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(K),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Oi(f.textureWidth,f.textureHeight,{format:En,type:ei,depthTexture:new wd(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(Q){for(let ae=0;ae<Q.removed.length;ae++){const Te=Q.removed[ae],ue=b.indexOf(Te);ue>=0&&(b[ue]=null,E[ue].disconnect(Te))}for(let ae=0;ae<Q.added.length;ae++){const Te=Q.added[ae];let ue=b.indexOf(Te);if(ue===-1){for(let j=0;j<E.length;j++)if(j>=b.length){b.push(Te),ue=j;break}else if(b[j]===null){b[j]=Te,ue=j;break}if(ue===-1)break}const K=E[ue];K&&K.connect(Te)}}const Y=new D,re=new D;function $(Q,ae,Te){Y.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(Te.matrixWorld);const ue=Y.distanceTo(re),K=ae.projectionMatrix.elements,j=Te.projectionMatrix.elements,Ae=K[14]/(K[10]-1),st=K[14]/(K[10]+1),Ne=(K[9]+1)/K[5],Ye=(K[9]-1)/K[5],R=(K[8]-1)/K[0],mt=(j[8]+1)/j[0],de=Ae*R,xe=Ae*mt,Re=ue/(-R+mt),ct=Re*-R;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ct),Q.translateZ(Re),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),K[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ue=Ae+Re,S=st+Re,v=de-ct,V=xe+(ue-ct),ne=Ne*st/S*Ue,se=Ye*st/S*Ue;Q.projectionMatrix.makePerspective(v,V,ne,se,Ue,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,Te=Q.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),_.near=F.near=L.near=ae,_.far=F.far=L.far=Te,(A!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,H=_.far),L.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,_.layers.mask=L.layers.mask|F.layers.mask;const ue=Q.parent,K=_.cameras;ce(_,ue);for(let j=0;j<K.length;j++)ce(K[j],ue);K.length===2?$(_,L,F):_.projectionMatrix.copy(L.projectionMatrix),me(Q,_,ue)};function me(Q,ae,Te){Te===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Ce=null;function He(Q,ae){if(h=ae.getViewerPose(l||a),g=ae,h!==null){const Te=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ue=!1;Te.length!==_.cameras.length&&(_.cameras.length=0,ue=!0);for(let j=0;j<Te.length;j++){const Ae=Te[j];let st=null;if(m!==null)st=m.getViewport(Ae);else{const Ye=d.getViewSubImage(f,Ae);st=Ye.viewport,j===0&&(e.setRenderTargetTextures(w,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(w))}let Ne=M[j];Ne===void 0&&(Ne=new gn,Ne.layers.enable(j),Ne.viewport=new St,M[j]=Ne),Ne.matrix.fromArray(Ae.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ae.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(st.x,st.y,st.width,st.height),j===0&&(_.matrix.copy(Ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ue===!0&&_.cameras.push(Ne)}const K=r.enabledFeatures;if(K&&K.includes("depth-sensing")){const j=d.getDepthInformation(Te[0]);j&&j.isValid&&j.texture&&x.init(e,j,r.renderState)}}for(let Te=0;Te<E.length;Te++){const ue=b[Te],K=E[Te];ue!==null&&K!==void 0&&K.update(ue,ae,l||a)}Ce&&Ce(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const rt=new Md;rt.setAnimationLoop(He),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}}const Ri=new An,w0=new bt;function E0(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,xd(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,w,E,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,w,E):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const w=e.get(u),E=w.envMap,b=w.envMapRotation;E&&(p.envMap.value=E,Ri.copy(b),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(Ri)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,w,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=E*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const w=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function T0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const b=E.program;i.uniformBlockBinding(w,b)}function l(w,E){let b=r[w.id];b===void 0&&(g(w),b=h(w),r[w.id]=b,w.addEventListener("dispose",p));const B=E.program;i.updateUBOMapping(w,B);const C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function h(w){const E=d();w.__bindingPointIndex=E;const b=n.createBuffer(),B=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,B,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=r[w.id],b=w.uniforms,B=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,L=b.length;C<L;C++){const F=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,_=F.length;M<_;M++){const A=F[M];if(m(A,C,M,B)===!0){const H=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let Z=0;for(let ee=0;ee<z.length;ee++){const Y=z[ee],re=x(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,H+Z,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,Z),Z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,E,b,B){const C=w.value,L=E+"_"+b;if(B[L]===void 0)return typeof C=="number"||typeof C=="boolean"?B[L]=C:B[L]=C.clone(),!0;{const F=B[L];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return B[L]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(w){const E=w.uniforms;let b=0;const B=16;for(let L=0,F=E.length;L<F;L++){const M=Array.isArray(E[L])?E[L]:[E[L]];for(let _=0,A=M.length;_<A;_++){const H=M[_],z=Array.isArray(H.value)?H.value:[H.value];for(let Z=0,ee=z.length;Z<ee;Z++){const Y=z[Z],re=x(Y),$=b%B,ce=$%re.boundary,me=$+ce;b+=ce,me!==0&&B-me<re.storage&&(b+=B-me),H.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=re.storage}}}const C=b%B;return C>0&&(b+=B-C),w.__size=b,w.__cache={},this}function x(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){const E=w.target;E.removeEventListener("dispose",p);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class A0{constructor(e={}){const{canvas:t=pu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=gi,this.toneMappingExposure=1;const b=this;let B=!1,C=0,L=0,F=null,M=-1,_=null;const A=new St,H=new St;let z=null;const Z=new Qe(0);let ee=0,Y=t.width,re=t.height,$=1,ce=null,me=null;const Ce=new St(0,0,Y,re),He=new St(0,0,Y,re);let rt=!1;const Q=new Ko;let ae=!1,Te=!1;const ue=new bt,K=new bt,j=new D,Ae=new St,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Ye(){return F===null?$:1}let R=i;function mt(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",_e,!1),R===null){const I="webgl2";if(R=mt(I,y),R===null)throw mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let de,xe,Re,ct,Ue,S,v,V,ne,se,J,Le,he,Me,Ke,oe,ye,ze,Ve,Se,je,$e,ht,k;function fe(){de=new Dm(R),de.init(),$e=new _0(R,de),xe=new Tm(R,de,e,$e),Re=new p0(R,de),xe.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),ct=new Fm(R),Ue=new Qg,S=new g0(R,de,Re,Ue,xe,$e,ct),v=new Cm(b),V=new Pm(b),ne=new Hu(R),ht=new wm(R,ne),se=new km(R,ne,ct,ht),J=new Nm(R,se,ne,ct),Ve=new Um(R,xe,S),oe=new Am(Ue),Le=new Jg(b,v,V,de,xe,ht,oe),he=new E0(b,Ue),Me=new t0,Ke=new o0(de),ze=new Sm(b,v,V,Re,J,m,c),ye=new u0(b,J,xe),k=new T0(R,ct,xe,Re),Se=new Em(R,de,ct),je=new Im(R,de,ct),ct.programs=Le.programs,b.capabilities=xe,b.extensions=de,b.properties=Ue,b.renderLists=Me,b.shadowMap=ye,b.state=Re,b.info=ct}fe();const X=new S0(b,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=de.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=de.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(Y,re,!1))},this.getSize=function(y){return y.set(Y,re)},this.setSize=function(y,I,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,re=I,t.width=Math.floor(y*$),t.height=Math.floor(I*$),G===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Y*$,re*$).floor()},this.setDrawingBufferSize=function(y,I,G){Y=y,re=I,$=G,t.width=Math.floor(y*G),t.height=Math.floor(I*G),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,I,G,W){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,I,G,W),Re.viewport(A.copy(Ce).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,I,G,W){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,I,G,W),Re.scissor(H.copy(He).multiplyScalar($).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(y){Re.setScissorTest(rt=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(y=!0,I=!0,G=!0){let W=0;if(y){let U=!1;if(F!==null){const le=F.texture.format;U=le===qo||le===Xo||le===$o}if(U){const le=F.texture.type,ve=le===ei||le===Ni||le===rs||le===Tr||le===Vo||le===Go,Pe=ze.getClearColor(),be=ze.getClearAlpha(),Oe=Pe.r,We=Pe.g,Ee=Pe.b;ve?(g[0]=Oe,g[1]=We,g[2]=Ee,g[3]=be,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Oe,x[1]=We,x[2]=Ee,x[3]=be,R.clearBufferiv(R.COLOR,0,x))}else W|=R.COLOR_BUFFER_BIT}I&&(W|=R.DEPTH_BUFFER_BIT),G&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Me.dispose(),Ke.dispose(),Ue.dispose(),v.dispose(),V.dispose(),J.dispose(),ht.dispose(),k.dispose(),Le.dispose(),X.dispose(),X.removeEventListener("sessionstart",yi),X.removeEventListener("sessionend",ti),Cn.stop()};function ie(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const y=ct.autoReset,I=ye.enabled,G=ye.autoUpdate,W=ye.needsUpdate,U=ye.type;fe(),ct.autoReset=y,ye.enabled=I,ye.autoUpdate=G,ye.needsUpdate=W,ye.type=U}function _e(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ge(y){const I=y.target;I.removeEventListener("dispose",Ge),yt(I)}function yt(y){Ct(y),Ue.remove(y)}function Ct(y){const I=Ue.get(y).programs;I!==void 0&&(I.forEach(function(G){Le.releaseProgram(G)}),y.isShaderMaterial&&Le.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,G,W,U,le){I===null&&(I=st);const ve=U.isMesh&&U.matrixWorld.determinant()<0,Pe=ps(y,I,G,W,U);Re.setMaterial(W,ve);let be=G.index,Oe=1;if(W.wireframe===!0){if(be=se.getWireframeAttribute(G),be===void 0)return;Oe=2}const We=G.drawRange,Ee=G.attributes.position;let et=We.start*Oe,ut=(We.start+We.count)*Oe;le!==null&&(et=Math.max(et,le.start*Oe),ut=Math.min(ut,(le.start+le.count)*Oe)),be!==null?(et=Math.max(et,0),ut=Math.min(ut,be.count)):Ee!=null&&(et=Math.max(et,0),ut=Math.min(ut,Ee.count));const gt=ut-et;if(gt<0||gt===1/0)return;ht.setup(U,W,Pe,G,be);let Nt,at=Se;if(be!==null&&(Nt=ne.get(be),at=je,at.setIndex(Nt)),U.isMesh)W.wireframe===!0?(Re.setLineWidth(W.wireframeLinewidth*Ye()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(U.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),Re.setLineWidth(Ie*Ye()),U.isLineSegments?at.setMode(R.LINES):U.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else U.isPoints?at.setMode(R.POINTS):U.isSprite&&at.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)at.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))at.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ie=U._multiDrawStarts,xn=U._multiDrawCounts,ot=U._multiDrawCount,rn=be?ne.get(be).bytesPerElement:1,ii=Ue.get(W).currentProgram.getUniforms();for(let Vt=0;Vt<ot;Vt++)ii.setValue(R,"_gl_DrawID",Vt),at.render(Ie[Vt]/rn,xn[Vt])}else if(U.isInstancedMesh)at.renderInstances(et,gt,U.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xn=Math.min(G.instanceCount,Ie);at.renderInstances(et,gt,xn)}else at.render(et,gt)};function nt(y,I,G){y.transparent===!0&&y.side===Yn&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,bi(y,I,G),y.side=_i,y.needsUpdate=!0,bi(y,I,G),y.side=Yn):bi(y,I,G)}this.compile=function(y,I,G=null){G===null&&(G=y),u=Ke.get(G),u.init(I),E.push(u),G.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==G&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const W=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const le=U.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Pe=le[ve];nt(Pe,G,U),W.add(Pe)}else nt(le,G,U),W.add(le)}),E.pop(),u=null,W},this.compileAsync=function(y,I,G=null){const W=this.compile(y,I,G);return new Promise(U=>{function le(){if(W.forEach(function(ve){Ue.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){U(y);return}setTimeout(le,10)}de.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Jt=null;function Ht(y){Jt&&Jt(y)}function yi(){Cn.stop()}function ti(){Cn.start()}const Cn=new Md;Cn.setAnimationLoop(Ht),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(y){Jt=y,X.setAnimationLoop(y),y===null?Cn.stop():Cn.start()},X.addEventListener("sessionstart",yi),X.addEventListener("sessionend",ti),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,I,F),u=Ke.get(y,E.length),u.init(I),E.push(u),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Q.setFromProjectionMatrix(K),Te=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,Te),p=Me.get(y,w.length),p.init(),w.push(p),X.enabled===!0&&X.isPresenting===!0){const le=b.xr.getDepthSensingMesh();le!==null&&$i(le,I,-1/0,b.sortObjects)}$i(y,I,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(ce,me),Ne=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ne&&ze.addToRenderList(p,y),this.info.render.frame++,ae===!0&&oe.beginShadows();const G=u.state.shadowsArray;ye.render(G,y,I),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,U=p.transmissive;if(u.setupLights(),I.isArrayCamera){const le=I.cameras;if(U.length>0)for(let ve=0,Pe=le.length;ve<Pe;ve++){const be=le[ve];Or(W,U,y,be)}Ne&&ze.render(y);for(let ve=0,Pe=le.length;ve<Pe;ve++){const be=le[ve];Nr(p,y,be,be.viewport)}}else U.length>0&&Or(W,U,y,I),Ne&&ze.render(y),Nr(p,y,I);F!==null&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(b,y,I),ht.resetDefaultState(),M=-1,_=null,E.pop(),E.length>0?(u=E[E.length-1],ae===!0&&oe.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function $i(y,I,G,W){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){W&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(K);const ve=J.update(y),Pe=y.material;Pe.visible&&p.push(y,ve,Pe,G,Ae.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const ve=J.update(y),Pe=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ae.copy(ve.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(K)),Array.isArray(Pe)){const be=ve.groups;for(let Oe=0,We=be.length;Oe<We;Oe++){const Ee=be[Oe],et=Pe[Ee.materialIndex];et&&et.visible&&p.push(y,ve,et,G,Ae.z,Ee)}}else Pe.visible&&p.push(y,ve,Pe,G,Ae.z,null)}}const le=y.children;for(let ve=0,Pe=le.length;ve<Pe;ve++)$i(le[ve],I,G,W)}function Nr(y,I,G,W){const U=y.opaque,le=y.transmissive,ve=y.transparent;u.setupLightsView(G),ae===!0&&oe.setGlobalState(b.clippingPlanes,G),W&&Re.viewport(A.copy(W)),U.length>0&&On(U,I,G),le.length>0&&On(le,I,G),ve.length>0&&On(ve,I,G),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Or(y,I,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Oi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?ls:ei,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const le=u.state.transmissionRenderTarget[W.id],ve=W.viewport||A;le.setSize(ve.z,ve.w);const Pe=b.getRenderTarget();b.setRenderTarget(le),b.getClearColor(Z),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),Ne&&ze.render(G);const be=b.toneMapping;b.toneMapping=gi;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ae===!0&&oe.setGlobalState(b.clippingPlanes,W),On(y,G,W),S.updateMultisampleRenderTarget(le),S.updateRenderTargetMipmap(le),de.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ee=0,et=I.length;Ee<et;Ee++){const ut=I[Ee],gt=ut.object,Nt=ut.geometry,at=ut.material,Ie=ut.group;if(at.side===Yn&&gt.layers.test(W.layers)){const xn=at.side;at.side=nn,at.needsUpdate=!0,Br(gt,G,W,Nt,at,Ie),at.side=xn,at.needsUpdate=!0,We=!0}}We===!0&&(S.updateMultisampleRenderTarget(le),S.updateRenderTargetMipmap(le))}b.setRenderTarget(Pe),b.setClearColor(Z,ee),Oe!==void 0&&(W.viewport=Oe),b.toneMapping=be}function On(y,I,G){const W=I.isScene===!0?I.overrideMaterial:null;for(let U=0,le=y.length;U<le;U++){const ve=y[U],Pe=ve.object,be=ve.geometry,Oe=W===null?ve.material:W,We=ve.group;Pe.layers.test(G.layers)&&Br(Pe,I,G,be,Oe,We)}}function Br(y,I,G,W,U,le){y.onBeforeRender(b,I,G,W,U,le),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(b,I,G,W,y,le),U.transparent===!0&&U.side===Yn&&U.forceSinglePass===!1?(U.side=nn,U.needsUpdate=!0,b.renderBufferDirect(G,I,W,U,y,le),U.side=_i,U.needsUpdate=!0,b.renderBufferDirect(G,I,W,U,y,le),U.side=Yn):b.renderBufferDirect(G,I,W,U,y,le),y.onAfterRender(b,I,G,W,U,le)}function bi(y,I,G){I.isScene!==!0&&(I=st);const W=Ue.get(y),U=u.state.lights,le=u.state.shadowsArray,ve=U.state.version,Pe=Le.getParameters(y,U.state,le,I,G),be=Le.getProgramCacheKey(Pe);let Oe=W.programs;W.environment=y.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(y.isMeshStandardMaterial?V:v).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",Ge),Oe=new Map,W.programs=Oe);let We=Oe.get(be);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===ve)return zr(y,Pe),We}else Pe.uniforms=Le.getUniforms(y),y.onBeforeCompile(Pe,b),We=Le.acquireProgram(Pe,be),Oe.set(be,We),W.uniforms=Pe.uniforms;const Ee=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),zr(y,Pe),W.needsLights=ms(y),W.lightsStateVersion=ve,W.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=We,W.uniformsList=null,We}function Xi(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=qs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function zr(y,I){const G=Ue.get(y);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function ps(y,I,G,W,U){I.isScene!==!0&&(I=st),S.resetTextureUnits();const le=I.fog,ve=W.isMeshStandardMaterial?I.environment:null,Pe=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Pr,be=(W.isMeshStandardMaterial?V:v).get(W.envMap||ve),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let gt=gi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=b.toneMapping);const Nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,at=Nt!==void 0?Nt.length:0,Ie=Ue.get(W),xn=u.state.lights;if(ae===!0&&(Te===!0||y!==_)){const Gt=y===_&&W.id===M;oe.setState(W,y,Gt)}let ot=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==xn.state.version||Ie.outputColorSpace!==Pe||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==be||W.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==We||Ie.morphTargets!==Ee||Ie.morphNormals!==et||Ie.morphColors!==ut||Ie.toneMapping!==gt||Ie.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Ie.__version=W.version);let rn=Ie.currentProgram;ot===!0&&(rn=bi(W,I,U));let ii=!1,Vt=!1,Mi=!1;const _t=rn.getUniforms(),Qt=Ie.uniforms;if(Re.useProgram(rn.program)&&(ii=!0,Vt=!0,Mi=!0),W.id!==M&&(M=W.id,Vt=!0),ii||_!==y){Re.buffers.depth.getReversed()?(ue.copy(y.projectionMatrix),gu(ue),_u(ue),_t.setValue(R,"projectionMatrix",ue)):_t.setValue(R,"projectionMatrix",y.projectionMatrix),_t.setValue(R,"viewMatrix",y.matrixWorldInverse);const Rn=_t.map.cameraPosition;Rn!==void 0&&Rn.setValue(R,j.setFromMatrixPosition(y.matrixWorld)),xe.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,Vt=!0,Mi=!0)}if(U.isSkinnedMesh){_t.setOptional(R,U,"bindMatrix"),_t.setOptional(R,U,"bindMatrixInverse");const Gt=U.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(R,"boneTexture",Gt.boneTexture,S))}U.isBatchedMesh&&(_t.setOptional(R,U,"batchingTexture"),_t.setValue(R,"batchingTexture",U._matricesTexture,S),_t.setOptional(R,U,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",U._indirectTexture,S),_t.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",U._colorsTexture,S));const ri=G.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Ve.update(U,G,rn),(Vt||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,_t.setValue(R,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=be,Qt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(Qt.envMapIntensity.value=I.environmentIntensity),Vt&&(_t.setValue(R,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&ni(Qt,Mi),le&&W.fog===!0&&he.refreshFogUniforms(Qt,le),he.refreshMaterialUniforms(Qt,W,$,re,u.state.transmissionRenderTarget[y.id]),qs.upload(R,Xi(Ie),Qt,S)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qs.upload(R,Xi(Ie),Qt,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(R,"center",U.center),_t.setValue(R,"modelViewMatrix",U.modelViewMatrix),_t.setValue(R,"normalMatrix",U.normalMatrix),_t.setValue(R,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Gt=W.uniformsGroups;for(let Rn=0,sn=Gt.length;Rn<sn;Rn++){const gs=Gt[Rn];k.update(gs,rn),k.bind(gs,rn)}}return rn}function ni(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ms(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,I,G){Ue.get(y.texture).__webglTexture=I,Ue.get(y.depthTexture).__webglTexture=G;const W=Ue.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const G=Ue.get(y);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,G=0){F=y,C=I,L=G;let W=!0,U=null,le=!1,ve=!1;if(y){const be=Ue.get(y);if(be.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(be.__hasExternalTextures)S.rebindTextures(y,Ue.get(y.texture).__webglTexture,Ue.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ee=y.depthTexture;if(be.__boundDepthTexture!==Ee){if(Ee!==null&&Ue.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const We=Ue.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(We[I])?U=We[I][G]:U=We[I],le=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?U=Ue.get(y).__webglMultisampledFramebuffer:Array.isArray(We)?U=We[G]:U=We,A.copy(y.viewport),H.copy(y.scissor),z=y.scissorTest}else A.copy(Ce).multiplyScalar($).floor(),H.copy(He).multiplyScalar($).floor(),z=rt;if(Re.bindFramebuffer(R.FRAMEBUFFER,U)&&W&&Re.drawBuffers(y,U),Re.viewport(A),Re.scissor(H),Re.setScissorTest(z),le){const be=Ue.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,G)}else if(ve){const be=Ue.get(y.texture),Oe=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Oe)}M=-1},this.readRenderTargetPixels=function(y,I,G,W,U,le,ve){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){Re.bindFramebuffer(R.FRAMEBUFFER,Pe);try{const be=y.texture,Oe=be.format,We=be.type;if(!xe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-W&&G>=0&&G<=y.height-U&&R.readPixels(I,G,W,U,$e.convert(Oe),$e.convert(We),le)}finally{const be=F!==null?Ue.get(F).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,I,G,W,U,le,ve){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){const be=y.texture,Oe=be.format,We=be.type;if(!xe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-W&&G>=0&&G<=y.height-U){Re.bindFramebuffer(R.FRAMEBUFFER,Pe);const Ee=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ee),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),R.readPixels(I,G,W,U,$e.convert(Oe),$e.convert(We),0);const et=F!==null?Ue.get(F).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,et);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await mu(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ee),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Ee),R.deleteSync(ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,G=0){y.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const W=Math.pow(2,-G),U=Math.floor(y.image.width*W),le=Math.floor(y.image.height*W),ve=I!==null?I.x:0,Pe=I!==null?I.y:0;S.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,ve,Pe,U,le),Re.unbindTexture()},this.copyTextureToTexture=function(y,I,G=null,W=null,U=0){y.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,G=null);let le,ve,Pe,be,Oe,We,Ee,et,ut;const gt=y.isCompressedTexture?y.mipmaps[U]:y.image;G!==null?(le=G.max.x-G.min.x,ve=G.max.y-G.min.y,Pe=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Oe=G.min.y,We=G.isBox3?G.min.z:0):(le=gt.width,ve=gt.height,Pe=gt.depth||1,be=0,Oe=0,We=0),W!==null?(Ee=W.x,et=W.y,ut=W.z):(Ee=0,et=0,ut=0);const Nt=$e.convert(I.format),at=$e.convert(I.type);let Ie;I.isData3DTexture?(S.setTexture3D(I,0),Ie=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),Ie=R.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),Ie=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const xn=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),rn=R.getParameter(R.UNPACK_SKIP_PIXELS),ii=R.getParameter(R.UNPACK_SKIP_ROWS),Vt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,gt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,We);const Mi=y.isDataArrayTexture||y.isData3DTexture,_t=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Qt=Ue.get(y),ri=Ue.get(I),Gt=Ue.get(Qt.__renderTarget),Rn=Ue.get(ri.__renderTarget);Re.bindFramebuffer(R.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Re.bindFramebuffer(R.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let sn=0;sn<Pe;sn++)Mi&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.get(y).__webglTexture,U,We+sn),y.isDepthTexture?(_t&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.get(I).__webglTexture,U,ut+sn),R.blitFramebuffer(be,Oe,le,ve,Ee,et,le,ve,R.DEPTH_BUFFER_BIT,R.NEAREST)):_t?R.copyTexSubImage3D(Ie,U,Ee,et,ut+sn,be,Oe,le,ve):R.copyTexSubImage2D(Ie,U,Ee,et,ut+sn,be,Oe,le,ve);Re.bindFramebuffer(R.READ_FRAMEBUFFER,null),Re.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else _t?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Ie,U,Ee,et,ut,le,ve,Pe,Nt,at,gt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ie,U,Ee,et,ut,le,ve,Pe,Nt,gt.data):R.texSubImage3D(Ie,U,Ee,et,ut,le,ve,Pe,Nt,at,gt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Ee,et,le,ve,Nt,at,gt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Ee,et,gt.width,gt.height,Nt,gt.data):R.texSubImage2D(R.TEXTURE_2D,U,Ee,et,le,ve,Nt,at,gt);R.pixelStorei(R.UNPACK_ROW_LENGTH,xn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,rn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ii),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vt),U===0&&I.generateMipmaps&&R.generateMipmap(Ie),Re.unbindTexture()},this.copyTextureToTexture3D=function(y,I,G=null,W=null,U=0){return y.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,G,W,U)},this.initRenderTarget=function(y){Ue.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),Re.unbindTexture()},this.resetState=function(){C=0,L=0,F=null,Re.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class C0 extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R0 extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=dn,h=dn,d,f){super(null,a,o,c,l,h,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends Tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cr=new bt,pc=new bt,Os=[],mc=new Hi,L0=new bt,qr=new Je,Yr=new cs;class P0 extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,L0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cr),mc.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(mc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cr),Yr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cr),pc.multiplyMatrices(i,cr),qr.matrixWorld=pc,qr.raycast(e,Os);for(let a=0,o=Os.length;a<o;a++){const c=Os[a];c.instanceId=s,c.object=this,t.push(c)}Os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new R0(new Float32Array(r*this.count),r,this.count,Wo,kn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pi extends Un{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let g=0;const x=[],p=i/2;let u=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(m,2));function w(){const b=new D,B=new D;let C=0;const L=(t-e)/i;for(let F=0;F<=s;F++){const M=[],_=F/s,A=_*(t-e)+e;for(let H=0;H<=r;H++){const z=H/r,Z=z*c+o,ee=Math.sin(Z),Y=Math.cos(Z);B.x=A*ee,B.y=-_*i+p,B.z=A*Y,d.push(B.x,B.y,B.z),b.set(ee,L,Y).normalize(),f.push(b.x,b.y,b.z),m.push(z,1-_),M.push(g++)}x.push(M)}for(let F=0;F<r;F++)for(let M=0;M<s;M++){const _=x[M][F],A=x[M+1][F],H=x[M+1][F+1],z=x[M][F+1];(e>0||M!==0)&&(h.push(_,A,z),C+=3),(t>0||M!==s-1)&&(h.push(A,H,z),C+=3)}l.addGroup(u,C,0),u+=C}function E(b){const B=g,C=new lt,L=new D;let F=0;const M=b===!0?e:t,_=b===!0?1:-1;for(let H=1;H<=r;H++)d.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),g++;const A=g;for(let H=0;H<=r;H++){const Z=H/r*c+o,ee=Math.cos(Z),Y=Math.sin(Z);L.x=M*Y,L.y=p*_,L.z=M*ee,d.push(L.x,L.y,L.z),f.push(0,_,0),C.x=ee*.5+.5,C.y=Y*.5*_+.5,m.push(C.x,C.y),g++}for(let H=0;H<r;H++){const z=B+H,Z=A+H;b===!0?h.push(Z,Z+1,z):h.push(Z+1,Z,z),F+=3}l.addGroup(u,F,b===!0?1:2),u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gr extends pi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new gr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r extends Un{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,f=new D,m=[],g=[],x=[],p=[];for(let u=0;u<=i;u++){const w=[],E=u/i;let b=0;u===0&&a===0?b=.5/t:u===i&&c===Math.PI&&(b=-.5/t);for(let B=0;B<=t;B++){const C=B/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(C+b,1-E),w.push(l++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<t;w++){const E=h[u][w+1],b=h[u][w],B=h[u+1][w],C=h[u+1][w+1];(u!==0||a>0)&&m.push(E,b,C),(u!==i-1||c<Math.PI)&&m.push(b,B,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ii extends Un{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new D,d=new D,f=new D;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const x=g/r*s,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const x=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,w=(r+1)*m+g;a.push(x,p,w),a.push(p,u,w)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ft extends ds{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rd extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class D0 extends Rd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new bt,gc=new D,_c=new D;class k0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I0 extends k0{constructor(){super(new Sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vc extends Rd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xc=new bt;class F0{constructor(e,t,i=0,r=1/0){this.ray=new md(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(e,t=!0,i=[]){return ko(e,this,i,t),i.sort(yc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ko(e[r],this,i,t);return i.sort(yc),i}}function yc(n,e){return n.distance-e.distance}function ko(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ko(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);let U0=!1;function N0(){return U0}function O0(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function B0(n,e={}){const t=N0(),i=new A0({canvas:n,antialias:!t,alpha:!1,powerPreference:"high-performance"});i.setClearColor("#17233F"),i.outputColorSpace=cn,i.toneMapping=Qc,i.toneMappingExposure=1.1;const r=new C0;r.background=new Qe("#17233F");const s=new gn(38,9/16,.1,200);function a(){const o=n.parentElement;if(!o)return;const c=o.clientWidth,l=o.clientHeight;c===0||l===0||(i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(c,l,!1),s.aspect=c/l,s.updateProjectionMatrix())}return{renderer:i,scene:r,camera:s,resize:a}}function z0(n){const e=qn.degToRad(35),t=qn.degToRad(22),i=27,r=new D(0,0,0);function s(){const o=new D(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)).normalize();n.position.copy(r).addScaledVector(o,i),n.lookAt(r)}s();const a=6;return{panBy(o,c){r.x=qn.clamp(r.x+o,-a,a),r.z=qn.clamp(r.z+c,-a,a),s()},setPan(o,c){r.x=qn.clamp(o,-a,a),r.z=qn.clamp(c,-a,a),s()},update(){}}}const T={inkNavy:"#17233F",moonBlue:"#5B79C8",plum:"#6D3E78",parchment:"#F4E7C7",sealingRed:"#C74B55",brass:"#D6A84B",routeMint:"#72D6C1"},bc=new Ir,Mc=new D,Sc=new D;class H0{mesh;dummy=new kt;actives;colors;constructor(e,t,i){this.mesh=new P0(t,i,e),this.mesh.instanceMatrix.setUsage(xl),this.mesh.frustumCulled=!1,this.actives=new Array(e).fill(!1),this.colors=[];for(let r=0;r<e;r++)this.colors.push(new Qe("#F4E7C7")),this.mesh.setColorAt(r,this.colors[r]);this.mesh.instanceColor&&this.mesh.instanceColor.setUsage(xl);for(let r=0;r<e;r++)this.place(r,-999,-999,-999,1,1,1,0,0,0)}place(e,t,i,r,s,a,o,c,l,h){bc.setFromEuler(new An(c,l,h)),Mc.set(t,i,r),Sc.set(s,a,o),this.dummy.position.copy(Mc),this.dummy.quaternion.copy(bc),this.dummy.scale.copy(Sc),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}acquire(e,t,i,r={}){let s=-1;for(let o=0;o<this.actives.length;o++)if(!this.actives[o]){s=o;break}if(s===-1)return null;this.actives[s]=!0;const a=r.scale??1;return this.place(s,e,t,i,a,a*.12,a*.75,0,r.rot??0,0),r.color&&this.mesh.instanceColor&&(this.colors[s].set(r.color),this.mesh.setColorAt(s,this.colors[s])),{index:s,active:!0,id:s}}move(e,t,i,r,s=0,a=1){this.place(e.index,t,i,r,a,a*.12,a*.75,0,s,0)}hide(e){this.actives[e.index]&&(this.actives[e.index]=!1,this.place(e.index,-999,-999,-999,1,1,1,0,0,0))}commit(){this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}get usedCount(){let e=0;for(const t of this.actives)t&&e++;return e}}const wc={desk:{family:"desk",color:"#F4E7C7",glyph:"stacked-tray",badge:"square"},satchel:{family:"satchel",color:"#6D3E78",glyph:"buckle",badge:"capsule"},route:{family:"route",color:"#72D6C1",glyph:"thread-needle",badge:"needle-pulse"},inflow:{family:"inflow",color:"#4a67b6",glyph:"tray-arrow",badge:"rain-line"}},V0={desk:{warnAt:.7,chokeAt:.85,chokeSustainS:3,burstFullAt:.999},satchel:{queueWarnAt:.4,deskPileChokeAt:.4,chokeSustainS:3},route:{okSlack:.15,utilWarnAt:.85,utilChokeAt:.999,queueChokeAt:.4,chokeSustainS:3},inflow:{okAt:.35,chokeAt:.2,chokeSustainS:3}},Ba={capacityPulseS:.4,purchasePunchS:.25},Qr={kept:["Stars banked (+ pending claim)","Unlocked districts' identity on the route map (postcards stay readable)","Night Clerk License stub state","Save/version lineage"],lost:["Postage balance and E_run","All hall upgrade tiers (F1–F10)","Desk pads / satchel racks / route lanes and their tiers (back to first-slot T1 installed)","Backlog pool to Lantern Lane state","Active district back to Lantern Lane; gate progress resets (Rainmarket bond re-payable)","Night Ledger snapshot (unsettled away time settles into run Postage before confirm)"]},za={title:"The night kept working.",neverEmpty:"The hall barely noticed you leave. +0 — step back in, Clerk.",collect:"Collect"},Ld=[{beat:"point-hold",trigger:{t:0},speaker:null,copy:null,highlight:"sort"},{beat:"letters-stream",trigger:{t:10},speaker:"Pip",copy:"They answer the thumb. They always do.",grantId:1},{beat:"desks-fill",trigger:{t:30},speaker:"Mara",copy:"Desks are your lungs. Buy the second tray.",grantId:2,highlight:"desk"},{beat:"rail-pad2",trigger:{t:45},speaker:"Pip",copy:"Room to breathe.",rail:{family:"desk",note:"pad2 unlock (300)"},highlight:"desk"},{beat:"routes-pulse",trigger:{t:75},speaker:"Mara",copy:"The lanes decide what's real. Feed them.",grantId:3,rail:{family:"route",note:"lane1 T2 (380)"},highlight:"route"},{beat:"first-hall-tier",trigger:{t:120},speaker:"Pip",copy:"The hall likes investment. Watch the pile.",grantId:4,rail:{family:"hall",note:"first district upgrade (F4/F1 cheapest)"},highlight:"inflow"},{beat:"night-ledger-card",trigger:{t:300},speaker:"Mara",copy:"Dawn always wins. The Ledger makes sure it doesn't win everything.",grantId:5},{beat:"seal-grammar",trigger:{event:"rv_complete"},speaker:"Mara",copy:"Rainmarket is listening. Finish the list.",highlight:"seal-rainmarket"},{beat:"bond-prelight",trigger:{event:"list_nearly"},speaker:null,copy:null,highlight:"seal-rainmarket"},{beat:"rainmarket-answers",trigger:{event:"advance"},speaker:"Mara",copy:"Rainmarket answers. First time in years, Clerk.",grantId:6},{beat:"horizon-remembers",trigger:{event:"horizon_rv"},speaker:"Mara",copy:"That seal doesn't open tonight. It remembers.",highlight:"seal-horizon"},{beat:"redraw-offered",trigger:{event:"horizon_list"},speaker:"Mara",copy:"Tear up the routes. Draw them better.",highlight:"seal-horizon"},{beat:"second-wind",trigger:{event:"claim"},speaker:"Pip",copy:"Again. But faster. Much faster."}],G0=.9,ke={onboardBeat:"md.onboard.beat",meterChoke:"md.meter.choke",meterRemedy:"md.meter.remedy",purchase:"md.purchase",gateCross:"md.gate.cross",advance:"md.advance",redrawShow:"md.redraw.show",redrawClaim:"md.redraw.claim",ledgerReturn:"md.ledger.return",saveWrite:"md.save.write",saveLoad:"md.save.load",postcardUnlock:"md.postcard.unlock",postcardRead:"md.postcard.read",postcardSeal:"md.postcard.seal",morningPost:"md.morning-post.claim",specialActivate:"md.special.activate",specialClaim:"md.special.claim",wanderlight:"md.wanderlight.tap",sealConvert:"md.seal.convert",trayActivate:"md.tray.activate",wanderSpawn:"md.wanderlight.spawn",morningpostReady:"md.morningpost.ready",morningpostClaim:"md.morningpost.claim",specialOffer:"md.special.offer",specialAccept:"md.special.accept",specialComplete:"md.special.complete",stampCapped:"md.stamp.capped",replyChord:"md.reply.chord",flatArm:"md.flat.arm",flatNudge:"md.flat.nudge",modShow:"md.mod.show",modRotate:"md.mod.rotate",rushGrant:"md.rush.grant",rushActivate:"md.rush.activate",rushExpire:"md.rush.expire",ledgerClaim:"md.ledger.claim",saveReconcile:"md.save.reconcile",returnNudge:"md.flat.return_nudge",mapWestward:"md.map.westward",cycleClose:"md.cycle.close",finaleFire:"md.finale.fire",finaleReplay:"md.finale.replay",rtOpen:"md.rt.open",rtComplete:"md.rt.complete",cosmeticBuy:"md.cosmetic.buy",cosmeticEquip:"md.cosmetic.equip",ladderClosed:"md.ladder.closed",sdRepeatOffer:"md.sd.repeat_offer",streakGrant:"md.streak.grant",doublerUse:"md.doubler.use",doublerCap:"md.doubler.cap",notifInvite:"md.notif.invite",notifOptIn:"md.notif.optin",notifScheduled:"md.notif.scheduled",dawnFire:"md.dawn.fire",dawnReplay:"md.dawn.replay",cadenceAssert:"md.cadence.assert",stubViewed:"md.stub.viewed",albumCrack:"md.album.crack",streakGift:"md.streak.gift",doublerDismiss:"md.doubler.dismiss",stubOpen:"md.stub.open",stubDismiss:"md.stub.dismiss",notifyCardShow:"md.notify.card_show",notifyOptInCanon:"md.notify.opt_in",notifyDismissForever:"md.notify.dismiss_forever",notifySettingsToggle:"md.notify.settings_toggle",notifyFire:"md.notify.fire",cadenceBlockedSd:"md.cadence.blocked_sd",cadenceViolation:"md.cadence.violation",returnDayCount:"md.return_day.count"},Ec={budget:250},Tc=["Stamp inventory (per-district receipts, 250 caps)","Special-delivery board state (active 4–8 h timers keep ticking — wall-clock, not run-clock)","Morning Post cadence state","Wax Seals + trims","Postcard counters per district"],Ha={speaker:"Mara",line:"That seal owes you a road now, not a reset.",note:"The Clocktower seal now opens the Ward directly: advance + bond 25,000."},W0=[{districtIndex:2,id:"clocktower_ward",name:"Clocktower Ward",body:"The route-miniature threads upward into a bell-chamber of brass and moonlight. A long-stopped minute hand shudders — and ticks once.",speaker:"Mara",speakerLine:"First bell the city's heard in years — and it's *on time*.",arrivalCopy:{speaker:"Mara",line:"It answered. Clerk — it *answered*."}},{districtIndex:3,id:"museum_after_dark",name:"Museum After Dark",body:"The miniature rolls out a colonnade of cool-lit glass. One exhibit case glows from inside — no artifact, only an addressed envelope, waiting decades.",speaker:"Pip",speakerLine:"Shhh. The exhibits sleep. *Mostly.*",arrivalCopy:null},{districtIndex:4,id:"rooftop_gardens",name:"Rooftop Gardens",body:"The thread climbs a drainpipe line into greenhouse glass. Condensation spells a word — and wipes itself before anyone reads it.",speaker:"Mara",speakerLine:"They grow tea up there, and patience. Deliver gently.",arrivalCopy:null},{districtIndex:5,id:"canal_of_echoes",name:"Canal of Echoes",body:"The miniature spills down steps to black water. Every thread so far — six districts — reflects at once, and the reflections ripple into one chord, the loudest and softest yet.",speaker:"Mara",speakerLine:"Listen to that, Clerk. Six districts, one address. *Ours.*",arrivalCopy:null}],Ac={delayAfterVignetteS:8},xt={secondWind:{beat:"ch2.second-wind",speaker:"Pip",copy:"Same hall. Better stars. Watch."},rmReanswer:{beat:"ch2.rm-reanswer",speaker:"Pip",copy:"They remember your hands."},trayRail:{beat:"ch2.tray-rail",speaker:"Mara",copy:"Trays take in what the night drops. Your thumb gets a pension.",highlight:"inflow"},wanderOn:{beat:"ch2.wander-on",speaker:"Pip",copy:"Sky-mail. Pop, don't chase."},firstWander:{beat:"ch2.first-wander",speaker:"Pip",copy:"That one's lost its address. Pop it — gently."},sdIntro:{beat:"ch2.sd-intro",speaker:"Pip",copy:"Old streets keep asking. We charge them stamps. It's *diplomacy*.",highlight:"special"},mpFirstReady:{beat:"ch2.mp-first-ready",speaker:"Mara",copy:"The city reads your night shift over breakfast. Take the bundle.",highlight:"morningpost"},postcardAuto:{beat:"ch2.postcard-auto",speaker:"Mara",copy:"Three a district. They write more when you notice.",highlight:"postcards"},flatNear:{beat:"ch2.flat-near",speaker:"Mara",copy:"Ticker's flat, seal's close. *Finish the seal.*"},flatFar:{beat:"ch2.flat-far",speaker:"Mara",copy:"That wall isn't tonight's, sweetheart. *Bank the night.*",highlight:"redraw"},evaporation:{speaker:"Pip",copy:"Yesterday's wall. This morning? *Confetti.*"},museumClaim:{beat:"ch2.museum-claim",speaker:"Mara",copy:"Tear up the routes. Draw them better remembered."},museumClaim2:{beat:"ch2.museum-claim-2",speaker:"Pip",copy:"Again! With *style*."}},Cc={conversionCardS:410,sdBoardIntroS:415},It={sortPull:(n,e)=>.035*n*(1+.2*e),backlogPoolBase:400,backlogPoolScale:1.8,backlogRefillBase:7,backlogRefillScale:1.8,satchelBufferSeconds:15,perfectSort:{psMaxBase:1.5,psMaxPerF5:.25,rampS:20,rampS_F5t1:15,rampS_F5t4:12,decayS:5,decayS_F5t2:8},starScalar:3,starDenom:1e4,starMultStep:.22},Ut=[{id:"lantern_lane",name:"Lantern Lane",letterValue:1,gate:null},{id:"rainmarket",name:"Rainmarket",letterValue:6,gate:{rv:16e3,deliveryList:36e3,bond:6e3}},{id:"clocktower_ward",name:"Clocktower Ward",letterValue:32,gate:null},{id:"museum_after_dark",name:"Museum After Dark",letterValue:180,gate:null},{id:"rooftop_gardens",name:"Rooftop Gardens",letterValue:1e3,gate:null},{id:"canal_of_echoes",name:"Canal of Echoes",letterValue:5500,gate:null},{id:"moonlit_arcade",name:"Moonlit Arcade",letterValue:4e4,gate:null},{id:"glasshouse_quarter",name:"Glasshouse Quarter",letterValue:3e5,gate:null},{id:"sleepless_library",name:"Sleepless Library",letterValue:225e4,gate:null},{id:"cloudline_station",name:"Cloudline Station",letterValue:16875e3,gate:null},{id:"aurora_borough",name:"Aurora Borough",letterValue:126562500,gate:null},{id:"last_light_observatory",name:"Last Light Observatory",letterValue:949218750,gate:null}],_n={rainmarket:{id:"rainmarket",to:1,rv:16e3,deliveryList:36e3,bond:6e3,action:"advance_bond"},horizon:{id:"horizon",to:2,rv:12e6,deliveryList:45e5,bond:25e3,action:"redraw_claim"},museum:{id:"museum",to:3,rv:124e8,deliveryList:45e8,bond:22e4,action:"advance_bond"},rooftop:{id:"rooftop",to:4,rv:225e9,deliveryList:75e9,bond:36e5,action:"advance_bond"},canal:{id:"canal",to:5,rv:4e12,deliveryList:115e10,bond:6e7,action:"advance_bond"},moonlit_arcade:{id:"moonlit_arcade",to:6,rv:36e13,deliveryList:8e13,bond:3e10,action:"advance_bond"},glasshouse_quarter:{id:"glasshouse_quarter",to:7,rv:63e14,deliveryList:14e14,bond:3e11,action:"advance_bond"},sleepless_library:{id:"sleepless_library",to:8,rv:77e14,deliveryList:22e14,bond:4e12,action:"advance_bond"},cloudline_station:{id:"cloudline_station",to:9,rv:15e17,deliveryList:38e16,bond:15e12,action:"advance_bond"},aurora_borough:{id:"aurora_borough",to:10,rv:21e18,deliveryList:52e17,bond:8e13,action:"advance_bond"},last_light_observatory:{id:"last_light_observatory",to:11,rv:8e19,deliveryList:2e19,bond:4e14,action:"advance_bond"}},Pd=2e19,Rc={f1Step:.3,psMultiplier:n=>n,starsMultiplier:n=>1+It.starMultStep*n},hn={count:4,unlock:[0,300,2400,18e4],tier:[0,700,22e3,42e4,76e5,13e7,8e9,1e11,12e11],caps:[240,560,1100,2200,4300,8500,17e3,34e3,68e3],F6:{capMult:1.25,costMult:.9}},Nn={count:4,unlock:[0,1100,12e3,42e4],tier:[0,450,13e3,25e4,45e5,78e6,6e9,8e10,1e12],rates:[13,18,50,90,160,340,680,1320,2600]},Fn={count:4,unlock:[0,850,9500,32e4],tier:[0,380,11e3,21e4,39e5,66e6,5e9,7e10,85e10],rates:[11.5,16,48,84,148,300,600,1180,2340],F7:{rateMult:1.25,costMult:.9,rateMultPerTier:1.15,costMultPerTier:.92}},Zt={F4:{id:"F4",label:"Taller Racks",tiers:12,cost:[600,1600,22e3,2e5,75e4,28e5,1e7,8e9,3e10,25e10,15e11,8e12],effect:"pool ×1.8, refill ×1.8 per tier (t12 cap: pool 462,742 · refill 8,098.7/s)"},F1:{id:"F1",label:"Warmer Seals",tiers:14,cost:[1e3,2600,42e3,12e4,38e4,9e5,25e5,75e5,6e9,2e10,12e10,8e11,4e12,25e12],effect:"letter value +30% per tier (t14 ×5.2 total cap)",letterValueStep:.3},F2:{id:"F2",label:"Lighter Ink",tiers:14,cost:[900,4200,5e4,16e4,45e4,11e5,32e5,9e6,7e9,25e9,15e10,1e12,5e12,3e13],effect:"base sort pull +20% per tier (t14 +280% cap)",sortPullStep:.2},F5:{id:"F5",label:"Sweet Spot",tiers:10,cost:[1200,6500,7e4,24e4,56e4,84e4,14e5,1e10,6e10,8e11],effect:"ps_max +0.25/tier (t9 3.75 · t10 4.00); t1 ramp→15s; t2 decay→8s; t4 ramp→12s; t6+ persistence floor",unlockAtRun:1200,psMaxPerTier:.25,persistenceTier:6,rampAtTiers:[{tier:1,rampS:15},{tier:4,rampS:12}],decayAtTiers:[{tier:2,decayS:8}]},F6:{id:"F6",label:"Sturdy Trays",tiers:3,cost:[3e3,15e9,15e11],effect:"t1 desk caps ×1.25, costs ×0.90 · t2 caps ×1.20 further, costs ×0.92 further · t3 caps ×1.20 further, costs ×0.92 further",deskCapMult:1.25,deskCostMult:.9,deskCapMult2:1.2,deskCostMult2:.92},F7:{id:"F7",label:"Swift Lanes",tiers:7,cost:[3e3,85e3,11e5,15e9,1e11,2e12,1e13],effect:"route rates ×1.15 · costs ×0.92 per tier; t1 ×1.25/×0.90 (t7 cum ×2.066/×0.622); ribbon dressing",routeRateMult:1.25,routeCostMult:.9,routeRateMultPerTier:1.15,routeCostMultPerTier:.92},F10:{id:"F10",label:"Ledger Eyes",tiers:4,cost:[3e3,22e5,6e10,8e11],effect:"hall factor 0.05 → 0.08 (t1) → 0.12 (t2) → 0.16 (t3) → 0.20 (t4)",hfacAfter:.08,hfacAfterT2:.12,hfacAfterT3:.16,hfacAfterT4:.2},F3:{id:"F3",label:"Night Habits",tiers:6,cost:[4e3,25e4,15e5,6e6,12e10,2e12],effect:"t1 away 0.65; t2–t6 Inflow Trays (0.40/0.72/1.30/2.00/2.60); t4+ away 0.80",unlockAtRun:2500,awayFractionAfter:.65,awayFractionAfterT4:.8,trayFrac:[.4,.72,1.3,2,2.6],conditionDistrictId:"clocktower_ward"},F8:{id:"F8",label:"Longer Nights",tiers:3,cost:[24e3,18e5,8e10],effect:"Night Ledger cap 2 h → 3 h (t1) → 5 h (t2) → 8 h (t3)",capHoursAfter:3,capHoursAfterT2:5,capHoursAfterT3:8},F9:{id:"F9",label:"Wanderlights",tiers:5,cost:[12e4,9e5,55e5,5e10,6e11],effect:"t1 activate (cadence 110 s); t2 reward ×1.75 · seal 6%; t3 cadence 90 s · grand 1.2%; t4 cadence 80 s · seal 8% · grand 2% · reward ×3.5; t5 cadence 70 s · seal 10% · grand 2.5% · reward ×4.5",conditionDistrictId:"clocktower_ward",wanderCadenceBase:140,wanderCadenceT1:110,wanderCadenceT3:90,wanderRewardMultT2:1.75,wanderSealChanceT2:.06,wanderGrandChanceT3:.012,wanderCadenceT4:80,wanderSealChanceT4:.08,wanderGrandChanceT4:.02,wanderRewardMultT4:3.5,wanderCadenceT5:70,wanderSealChanceT5:.1,wanderGrandChanceT5:.025,wanderRewardMultT5:4.5},F11:{id:"F11",label:"Express Logistics",tiers:4,cost:[8e8,6e9,2e11,3e12],effect:"satchel + route rates ×1.25/tier (t4 ×2.441 total)",satchelRateMult:1.25,routeRateMultF11:1.25},F12:{id:"F12",label:"Universal Addressing",tiers:4,cost:[3e9,15e10,2e13,25e13],effect:"booked Postage ×1.5 (t1) → ×2.0 (t2, replaces) → ×2.5 (t3, replaces) → ×3.0 (t4, replaces)",bookedMult:[1,1.5,2,2.5,3]}},jr={hfac:.05,hfacAfterF10:.08,hfacAfterF10T2:.12,hfacAfterF10T3:.16,hfacAfterF10T4:.2},hs={capHours:2,awayFraction:.5,doublerMaxPer24h:3,neverEmptyElapsedS:120},$0=[{id:1,grant:50},{id:2,grant:150},{id:3,grant:400},{id:4,grant:1200},{id:5,grant:2400},{id:6,grant:6e3}],Dd={lantern_lane:[500,2500,6e3],rainmarket:[800,3e3,7e3],clocktower_ward:[5e4,3e5,1e6],museum_after_dark:[15e4,6e5,2e6],rooftop_gardens:[1e5,5e5,15e5],canal_of_echoes:[25e3,15e4,6e5],moonlit_arcade:[2e5,1e6,6e6],glasshouse_quarter:[15e4,6e5,22e5],sleepless_library:[15e4,7e5,25e5],cloudline_station:[5e5,4e6,3e7],aurora_borough:[4e5,3e6,15e6],last_light_observatory:[3e5,2e6,7e6]},Lc={frontierShare:.75,fanShareUniform:.25},Qn={maxConcurrent:2,despawnS:20,normalRewardLetterMult:25,sealChance:.04,grandChance:.006,grandRewardLetterMult:500,grandWaxSeals:2},Bi={cadenceH:8,maxHeld:1,grantByFrontier:{clocktower_ward:6e4,museum_after_dark:5e5,rooftop_gardens:3e6,canal_of_echoes:18e6,moonlit_arcade:15e7,glasshouse_quarter:9e8,sleepless_library:5e9,cloudline_station:35e9,aurora_borough:2e11,last_light_observatory:1e12}},ur={cap:250,p:{lantern_lane:.0015,rainmarket:.0012,clocktower_ward:8e-4,museum_after_dark:6e-4,rooftop_gardens:4e-4,canal_of_echoes:3e-4,moonlit_arcade:2e-4,glasshouse_quarter:15e-5,sleepless_library:1e-4,cloudline_station:8e-5,aurora_borough:6e-5,last_light_observatory:5e-5}},Vi={maxActiveTimers:3,recipes:[{id:"SD1",name:"The Umbrella Route",stamps:{lantern_lane:8,rainmarket:6},timerH:4,rewardPct:.01,available:"clocktower_ward"},{id:"SD2",name:"Still Life, With Address",stamps:{rainmarket:12,clocktower_ward:4},timerH:6,rewardPct:.02,available:"museum_after_dark"},{id:"SD3",name:"The Curator's Errand",stamps:{clocktower_ward:10,museum_after_dark:6},timerH:8,rewardPct:.035,available:"rooftop_gardens"},{id:"SD4",name:"Tea for the Rain Clock",stamps:{museum_after_dark:8,rooftop_gardens:6},timerH:5,rewardPct:.025,available:"rooftop_gardens",availableWhenAnswered:"rooftop_gardens"},{id:"SD5",name:"The Echo Postman",stamps:{rooftop_gardens:10,canal_of_echoes:6},timerH:7,rewardPct:.03,available:"canal_of_echoes",availableWhenAnswered:"canal_of_echoes"},{id:"SD6",name:"Midnight at the Arcade",stamps:{canal_of_echoes:8,moonlit_arcade:6},timerH:8,rewardPct:.04,available:"moonlit_arcade",availableWhenAnswered:"moonlit_arcade"},{id:"SD7",name:"The Unwritten Hour",stamps:{moonlit_arcade:10,glasshouse_quarter:8},timerH:0,rewardPct:0,available:"moonlit_arcade",availableWhenAnswered:"moonlit_arcade",rush:{multX:2,activeS:1800,holdMax:1},postsAtCommit:!0},{id:"SD8",name:"The Reading Room",stamps:{glasshouse_quarter:12,sleepless_library:10},timerH:8,rewardPct:.05,available:"sleepless_library",availableWhenAnswered:"sleepless_library"}]},X0=[{slot:0,id:"rain_sheen",deskCapX:.85,routeX:1.25},{slot:1,id:"backlog_surge",poolX:1.25,refillX:1.6},{slot:2,id:"perfect_moon",psMaxAdd:.25,rampX:.6,rampMinS:6},{slot:3,id:"tailwind",routeX:1.35,satchelX:1.1},{slot:4,id:"long_shadows",ledgerAccrualX:1.25},{slot:5,id:"stamp_fair",stampPX:2},{slot:6,id:"wax_festival",lampSealX:2,lampGrandX:2}],q0={table:X0},kd={id:null,slot:null,deskCapX:1,routeX:1,poolX:1,refillX:1,psMaxAdd:0,rampX:1,rampMinS:0,satchelX:1,ledgerAccrualX:1,stampPX:1,lampSealX:1,lampGrandX:1},Js={multX:2,activeS:1800},Id={medianRingMax:60,claimCapFracOfFrontierRem:.35},es={returnArmedFloorS:6*3600,returnFlatMaxStarsPerReturn:1,nudgeSealEtaHours:6},Pn={armFloorS:1500,windowS:480,windowMaxStars:1,cardAfterS:60,nudgeAfterS:300,nudgeSealShareBelow:.2},Y0={districtAdvanceCh2:2},as={lantern_lane:{district:"lantern_lane",target:{letters:8e6,modifier:null,courierMin:null},seals:2,stars:1},rainmarket:{district:"rainmarket",target:{letters:8e6,modifier:"rain_sheen",courierMin:2},seals:2,stars:1},clocktower_ward:{district:"clocktower_ward",target:{letters:1e7,modifier:"perfect_moon",courierMin:5},seals:3,stars:1},museum_after_dark:{district:"museum_after_dark",target:{letters:12e6,modifier:"backlog_surge",courierMin:10},seals:3,stars:1},rooftop_gardens:{district:"rooftop_gardens",target:{letters:14e6,modifier:"wax_festival",courierMin:15},seals:3,stars:1},canal_of_echoes:{district:"canal_of_echoes",target:{letters:24e6,modifier:"rain_sheen",courierMin:30},seals:3,stars:1},moonlit_arcade:{district:"moonlit_arcade",target:{letters:32e6,modifier:"wax_festival",courierMin:45},seals:4,stars:2},glasshouse_quarter:{district:"glasshouse_quarter",target:{letters:8e6,modifier:"long_shadows",courierMin:180},seals:4,stars:2},sleepless_library:{district:"sleepless_library",target:{letters:5e7,modifier:"backlog_surge",courierMin:180},seals:4,stars:2},cloudline_station:{district:"cloudline_station",target:{letters:85e6,modifier:"tailwind",courierMin:480},seals:5,stars:3},aurora_borough:{district:"aurora_borough",target:{letters:4e7,modifier:"stamp_fair",courierMin:720},seals:5,stars:3},last_light_observatory:{district:"last_light_observatory",target:{letters:15e6,modifier:"perfect_moon",courierMin:720},seals:5,stars:3}},j0={repeatableAfterReply:["SD1","SD2","SD3","SD4","SD5","SD6","SD8"]};function Gi(n){return n.liveMod??kd}function aa(n){const e=n.hall.F4??0;return It.backlogPoolBase*Math.pow(It.backlogPoolScale,e)*Gi(n).poolX}function Fd(n){const e=n.hall.F3??0,i=Zt.F3?.trayFrac;if(!i||e<2)return 1;const r=Math.min(e-2,i.length-1);return 1+(i[r]??0)}function Qs(n){const e=(n.hall.F6??0)>0;let t=0;for(const r of n.desks)r.unlocked&&(t+=hn.caps[r.tier]);return(e?t*hn.F6.capMult:t)*Gi(n).deskCapX}function K0(n){const e=n.hall.F2??0,t=It.sortPull(aa(n),e),i=(n.hall.F6??0)>0,r=n.desks.filter(a=>a.unlocked).length||1,s=i?hn.F6.capMult:1;return t*r*s}function Ud(n){const e=n.hall.F11??0,i=Zt.F11.satchelRateMult;let r=1;for(let s=1;s<=e;s++)r*=i;return r}function Jo(n){let e=0;for(const t of n.racks)t.unlocked&&(e+=Nn.rates[t.tier]);return e*It.satchelBufferSeconds*Ud(n)*Gi(n).satchelX}function Qo(n){const e=n.hall.F7??0,t=Fn.F7,i=t.rateMultPerTier;let r=1;e>=1&&(r=t.rateMult);for(let a=2;a<=e;a++)r*=i;let s=0;for(const a of n.lanes)a.unlocked&&(s+=Fn.rates[a.tier]);return s*r*Ud(n)*Gi(n).routeX}function Z0(n){const e=n.hall.F12??0;return Zt.F12.bookedMult?.[e]??1}function el(n){const e=Ut[n.districtIndex],t=e?e.letterValue:1,i=n.hall.F1??0;return t*(1+Rc.f1Step*i)*Rc.starsMultiplier(n.stars)}function tl(n){const e=n.hall.F5??0;return It.perfectSort.psMaxBase+It.perfectSort.psMaxPerF5*e+Gi(n).psMaxAdd}function J0(n){const e=n.hall.F5??0,t=Zt.F5;let i=It.perfectSort.rampS;for(const s of t.rampAtTiers??[])e>=s.tier&&(i=s.rampS);const r=Gi(n);return Math.max(r.rampMinS,i*r.rampX)}function Q0(n){const e=n.hall.F5??0,t=Zt.F5;let i=It.perfectSort.decayS;for(const r of t.decayAtTiers??[])e>=r.tier&&(i=r.decayS);return i}function e_(n){return Math.floor(It.starScalar*Math.log(1+n/It.starDenom))}function t_(n,e,t,i){const r=tl(n);if(t)n.perfect=Math.min(r,n.perfect+1/J0(n)*e);else{const A=Zt.F5,H=n.hall.F5??0;let z=0;A&&A.persistenceTier!=null&&H>=A.persistenceTier&&(z=1+.5*(r-1)),n.perfect=Math.max(z,n.perfect-1/Q0(n)*e)}const s=aa(n),a=It.backlogRefillBase*Math.pow(It.backlogRefillScale,n.hall.F4??0)*Gi(n).refillX;n.backlog=Math.min(s,n.backlog+a*Fd(n)*e);const o=K0(n),c=Qs(n),l=Jo(n),h=Qo(n);let d=0;const f=n.desks.reduce((A,H)=>A+H.inProcess,0),m=c-f,g=t?Math.min(m,o*e,n.backlog)*n.perfect:0;if(g>0){let A=g;const H=n.desks.filter(z=>z.unlocked);for(;A>1e-6&&H.length;){let z=!1;for(const Z of H){const ee=hn.caps[Z.tier],re=(n.hall.F6??0)>0?ee*hn.F6.capMult:ee,$=re/c,ce=Math.min(c>0?A*$:0,re-Z.inProcess,A);ce>1e-6&&(Z.inProcess+=ce,A-=ce,z=!0)}if(!z)break}n.backlog=Math.max(0,n.backlog-g)}const x=n.racks.reduce((A,H)=>A+(H.unlocked?Nn.rates[H.tier]:0),0),p=n.desks.reduce((A,H)=>A+H.inProcess,0),u=Math.min(p,x*e);n.bundled=(n.bundled??0)+u;let w=u;const E=n.desks.filter(A=>A.unlocked);for(const A of E){if(w<=1e-6)break;const H=Math.min(A.inProcess,w);A.inProcess-=H,w-=H}const b=Math.min(n.bundled??0,h*e);n.bundled=(n.bundled??0)-b;const B=el(n),C=b*B;n.totalEarnedRun+=C,n.districtRouteValue+=b,d=b;const L=g>0&&m<=1e-6,F=(n.bundled??0)>=l-1e-6,M=(n.bundled??0)>0&&b<(n.bundled??0)*.5+1e-6;let _="none";return M&&(n.bundled??0)>l*.9?_="lane":F?_="rack":L&&(_="desk"),{delivered:d,postageEarned:C,bottleneck:_}}function we(n,e,t,i){const r=new vi(n,e,t),s=new Ft({color:i});return new Je(r,s)}function Et(n,e,t,i,r=20){return new Je(new pi(n,e,t,r),new Ft({color:i}))}const n_=-5.2,vt=-4.95,hi=[-3.4,-1.2,1.1,3.3],Pc=[-4.4,-3.1,-1.8,-.5],ui=[-4.4,-3.1,-1.8,-.5];function i_(n,e={}){const t=new tt,i=new D0("#5B79C8","#17233F",.9);n.add(i);const r=new vc("#F4E7C7",1.15);r.position.set(8,14,6),n.add(r);const s=new vc(T.plum,.35);s.position.set(-6,6,-4),n.add(s);const a=new Je(new vi(16,.3,16),new Ft({color:"#20304f"}));a.position.y=-.15,t.add(a);const o={color:T.brass},c=we(14.5,.12,.12,o.color);c.position.set(0,.5,-4.6);const l=we(14.5,.12,.12,o.color);l.position.set(0,.5,4.6);const h=we(.12,.12,9.2,o.color);h.position.set(-7.2,.5,0);const d=we(.12,.12,9.2,o.color);d.position.set(7.2,.5,0);for(const P of[c,l,h,d])Et(.05,.05,.5,T.brass,8).position.set(P.position.x-(P.scale.x||0),.25,P.position.z),t.add(P);const f=we(14.6,5.4,.4,"#241f3a");f.position.set(0,2.7,n_),t.add(f);const m=new Je(new pi(1.5,1.5,.12,28),new Ft({color:T.inkNavy}));m.rotation.x=Math.PI/2,m.position.set(-2.4,3.1,vt+.08),t.add(m);const g=new Je(new Ii(1.5,.06,8,28),new Ft({color:T.brass}));g.position.copy(m.position),t.add(g);const x=new $t({color:T.routeMint}),p=new $t({color:T.inkNavy}),u=new $t({color:"#101a30"});function w(P,N,O){const q=P.distanceTo(N),te=new Je(new pi(.035,.035,q,6),O),De=P.clone().add(N).multiplyScalar(.5);return te.position.copy(De),te.lookAt(N),te.rotateX(Math.PI/2),te}const E=m.position.clone(),b=new D(-.4,2.15,vt+.12),B=new D(.5,3.3,vt+.12),C=new D(1.7,3.9,vt+.12);t.add(w(E,b,x));const L=w(E,B,p);t.add(L),t.add(w(E,C,u));const F=new Je(new Ii(.42,.07,8,20),new $t({color:"#0d1730"}));F.position.copy(C),t.add(F);const M=we(.22,1,.1,"#0d1730");M.position.set(C.x-.14,C.y+.8,C.z);const _=we(.16,.7,.1,"#0d1730");_.position.set(C.x+.18,C.y+.65,C.z),t.add(M),t.add(_);const A=new tt;A.add(F,M,_),t.add(A);const H=new tt,z=we(2.4,3.2,.5,T.moonBlue);z.position.y=1.6,H.add(z);const Z=we(1.2,2.2,.5,T.plum);Z.position.set(1.6,1.1,0),H.add(Z);const ee=we(1.4,2.7,.5,T.brass);ee.position.set(-1.4,1.35,-.2),H.add(ee),H.position.set(-5.2,0,-4.35),t.add(H);const Y=new tt,re=we(2,2.6,.5,T.moonBlue);re.position.y=1.3,Y.add(re);const $=we(2.6,1.8,.5,T.plum);$.position.set(.4,.9,.2),Y.add($),Y.position.set(4.9,0,-4.35),t.add(Y);const ce={1:B,2:C,3:new D(2.85,4.25,vt+.12),4:new D(3.95,4.55,vt+.12),5:new D(5,4.8,vt+.12),6:new D(5.95,4.98,vt+.12),7:new D(6.8,5.12,vt+.12),8:new D(7.6,5.22,vt+.12),9:new D(8.45,5.32,vt+.12),10:new D(9.25,5.4,vt+.12),11:new D(10,5.46,vt+.12)},me={1:T.routeMint,2:T.brass,3:T.plum,4:"#a8e6c9",5:T.moonBlue,6:T.plum,7:T.routeMint,8:T.moonBlue,9:T.routeMint,10:T.plum,11:T.moonBlue},Ce="#101a30",He={1:L};for(const P of[2,3,4,5,6,7,8,9,10,11]){const N=new $t({color:Ce}),O=w(E,ce[P],N);t.add(O),He[P]=O}function rt(){const P=new tt,N=we(.24,1,.12,"#8ea3c8");N.position.y=.5;const O=Et(.14,.14,.03,T.parchment,16);O.rotation.x=Math.PI/2,O.position.set(0,.86,.07);const q=we(.02,.11,.012,T.inkNavy);q.geometry.translate(0,.055,0),q.position.set(0,.86,.095);const te=Et(.09,.13,.14,T.brass,10);return te.position.set(0,.66,.06),P.add(N,O,q,te),P.userData.hand=q,P}function Q(){const P=new tt;for(let q=-1.5;q<=1.5;q++){const te=Et(.05,.06,.55,"#9db4dd",8);te.position.set(q*.24,.275,0),P.add(te)}const N=we(.95,.08,.14,T.plum);N.position.y=.6;const O=we(.14,.2,.06,T.parchment);return O.position.set(.36,.14,.05),P.add(N,O),P}function ae(){const P=new tt,N=we(.85,.3,.14,"#3f6f5a");N.position.y=.15;const O=new Je(new jn(.5,.4),new Ft({color:"#a8e6c9",transparent:!0,opacity:.45}));O.position.set(-.13,.5,.02),O.rotation.z=.5;const q=O.clone();q.position.x=.13,q.rotation.z=-.5;const te=we(.06,.5,.06,"#2e5d49");return te.position.set(.3,.3,.06),P.add(N,O,q,te),P}function Te(){const P=new tt,N=we(1.05,.04,.2,"#0b1530");N.position.y=.02;const O=new Je(new Ii(.36,.05,8,16,Math.PI),new Ft({color:"#6f85b8"}));O.position.y=.06;const q=we(.24,.3,.12,"#29406e");q.position.set(-.46,.15,0);const te=Et(.03,.04,.16,T.brass,8);return te.position.set(.42,.5,.05),P.add(N,O,q,te),P.userData.water=N,P}function ue(){const P=new tt,N=we(.95,.3,.14,"#241f3a");N.position.y=.15,P.add(N);for(let q=-1.5;q<=1.5;q++){const te=we(.18,.22+(Math.abs(q)===1?.06:0),.12,q%2===0?"#3a2b46":"#2c2340");te.position.set(q*.24,.41,0);const De=we(.12,.05,.02,T.parchment);De.position.set(q*.24,.55,.07),P.add(te,De)}const O=Et(.09,.09,.025,T.brass,14);return O.position.set(.05,.62,.06),O.rotation.z=1.2,P.add(O),P.userData.coinTicket=O,P}function K(){const P=new tt,N=we(.95,.26,.14,"#2c4a3e");N.position.y=.13,P.add(N);for(let q=0;q<3;q++){const te=new Je(new jn(.3,.5),new Ft({color:"#a8e6c9",transparent:!0,opacity:.4}));te.position.set(-.3+q*.3,.55,.02+q*.002),te.rotation.z=-.35+q*.35,P.add(te)}const O=we(.035,.3,.012,T.parchment);return O.position.set(-.06,.56,.06),O.rotation.z=-.28,P.add(O),P}function j(){const P=new tt;for(let q=0;q<4;q++){const te=we(.16,.55+q%2*.1,.12,q%2===0?"#3b4a6b":"#31405f");te.position.set(-.3+q*.2,.32+q%2*.05,0),P.add(te)}const N=Et(.035,.05,.12,T.brass,8);N.position.set(.42,.32,.05),P.add(N);const O=we(.14,.2,.02,T.parchment);return O.position.set(.1,.75,.06),O.userData.dropFromY=.75,P.add(O),P.userData.dueCard=O,P}function Ae(){const P=new tt,N=we(.95,.1,.16,"#2f4a3e");N.position.y=.32,P.add(N);for(let O=-1.5;O<=1.5;O++){const q=Et(.03,.045,.34,T.brass,8);q.position.set(O*.26,.17,0),P.add(q)}for(let O=0;O<2;O++){const q=new Je(new gr(.14,.18,4),new Ft({color:O===0?T.brass:T.routeMint}));q.rotation.y=Math.PI/4,q.position.set(-.32+O*.6,.62,.04);const te=we(.012,.16,.012,"#1c2a22");te.position.set(q.position.x,.45,.05),P.add(q,te)}for(let O=0;O<3;O++){const q=Et(.012,.012,.12,T.brass,6);q.position.set(-.38+O*.38,.5,.06),P.add(q)}return P}function st(){const P=new tt;for(let O=0;O<3;O++){const q=we(.28,.06,.14,O===1?T.plum:"#3a2b46");q.position.set(-.3+O*.3,.6,0),q.rotation.z=-.08+O*.08,P.add(q);const te=Et(.02,.025,.4,T.brass,8);te.position.set(-.3+O*.3,.28,0),P.add(te)}const N=Et(.035,.05,.14,T.brass,8);return N.position.set(.34,.52,.05),P.add(N),P}function Ne(){const P=new tt;for(let te=0;te<5;te++){const De=we(.16,.5+te%2*.12,.12,te%2===0?"#33415f":"#2a3752");De.position.set(-.34+te*.17,.3+te%2*.05,0),De.rotation.z=-.05+te*.018,P.add(De)}const N=we(.02,.24,.02,T.brass);N.position.set(.3,.62,.05);const O=we(.28,.02,.02,T.brass);O.position.set(.44,.74,.05);const q=new Je(new _r(.07,12,8),new $t({color:T.moonBlue}));return q.position.set(.58,.72,.05),P.add(N,O,q),P.userData.lens=q,P}function Ye(P){const N=new tt,O=we(.9,.55+P*.06,.06,"#16203c");O.position.y=.3;const q=we(.34,.5,.06,"#101a30");return q.position.set(.3,.45,.02),N.add(O,q),N}const R={},mt={2:rt,3:Q,4:ae,5:Te,6:ue,7:K,8:j,9:Ae,10:st,11:Ne};for(const P of[2,3,4,5,6,7,8,9,10,11]){const N=ce[P],O=mt[P]();O.position.set(N.x-.2,N.y-1.05,N.z+.01),O.visible=!1;const q=Ye(P);q.position.set(N.x-.45,N.y-1.05,N.z),t.add(O,q),R[P]={lit:O,locked:q}}const de=new tt,xe=we(.85,.62,.08,"#241f3a");xe.position.set(3.35,1.05,1.45),xe.rotation.y=-.35;const Re=[];for(let P=0;P<3;P++){const N=we(.18,.26,.03,T.plum);N.position.set(3.16+P*.24,1.03,1.52-P*.087),N.rotation.y=-.35,N.visible=!1,Re.push(N),de.add(N)}const ct=[];for(let P=0;P<3;P++){const N=we(.07,.5,.028,T.parchment);N.geometry.translate(0,.25,0),N.position.set(3.1+P*.3,.82,1.68-P*.06),N.rotation.y=-.35,N.scale.set(1,0,1),N.visible=!1,ct.push(N),de.add(N)}const Ue=[],S=["lantern_lane","rainmarket","clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"],v=[T.routeMint,T.routeMint,T.brass,T.plum,"#a8e6c9",T.moonBlue];for(let P=0;P<6;P++){const N=we(.09,.09,.02,v[P]);N.position.set(3+P*.135,.72,1.62-P%3*.045),N.rotation.y=-.35,Ue.push(N),de.add(N)}const V=we(1.3,.4,.5,"#3a2b46");V.position.set(3.3,.4,1.4),de.add(V,xe),t.add(de);const ne=new tt,se=Et(.26,.18,.28,"#b08d57",10);se.position.set(-4.55,.34,1.5);const J=we(.24,.16,.02,T.parchment);J.position.set(-4.55,.56,1.5),J.rotation.z=-.12;const Le=Et(.035,.035,.02,T.brass,8);Le.rotation.x=Math.PI/2,Le.position.set(-4.47,.56,1.53),ne.add(se,J,Le),ne.visible=!1,t.add(ne);const he={};{const P=new tt,N=new Je(new jn(3.2,1.2),new Ft({color:T.moonBlue,transparent:!0,opacity:.3}));N.position.set(-2.4,4.4,vt+.18),P.add(N);for(let O=0;O<5;O++){const q=we(.03,.9,.012,T.moonBlue);q.position.set(-3.6+O*.6,4.4,vt+.19),q.rotation.z=.12,P.add(q)}he.rain_sheen=P}{const P=new tt;for(let N=0;N<4;N++){const O=we(.5-N*.07,.16,.4-N*.05,N%2?"#17233F":"#1f3050");O.position.set(-2.6,2.05+N*.16,4),P.add(O)}he.backlog_surge=P}{const P=new tt,N=new Je(new Ii(.62,.045,8,24),new Ft({color:T.brass}));N.position.copy(E).setZ(vt+.2),P.add(N),he.perfect_moon=P}{const P=new tt,N="#a8e6c9";for(let O=0;O<ui.length;O++){const q=we(.07,.62,.02,N);q.geometry.translate(0,.31,0),q.position.set(ui[O]+.2,.34,-3),q.rotation.z=-.5,P.add(q);const te=we(.05,.34,.018,T.routeMint);te.geometry.translate(0,.17,0),te.position.set(ui[O]-.07,.22,-2.92),te.rotation.z=-.32,P.add(te)}he.tailwind=P}{const P=new tt;for(let N=0;N<3;N++){const O=Et(.02,.22,.9,"#b8893d",8);O.position.set(-1.6+N*1.6,3.6,vt+.4),O.rotation.z=.35,P.add(O)}he.long_shadows=P}{const P=new tt;for(let N=0;N<7;N++){const O=new Je(new gr(.09,.18,4),new Ft({color:T.parchment}));O.position.set(-3.2+N*.5,2.75+Math.sin(N*.9)*.05,1.2),O.rotation.x=Math.PI,P.add(O)}he.stamp_fair=P}{const P=new tt;for(let N=0;N<hi.length;N++){const O=Et(.03,.055,.14,T.plum,6);O.position.set(hi[N]+.2,.62,1.55),P.add(O)}he.wax_festival=P}for(const P of Object.values(he))P.visible=!1,t.add(P);function Me(P){const N=P.liveMod?.id??null;for(const[O,q]of Object.entries(he))q.visible=O===N}const Ke=[];for(let P=0;P<hi.length;P++){const N=we(.34,.07,.24,"#101a30");N.position.set(hi[P]-.42,.245,1.35),t.add(N),Ke.push(N)}const oe=[];for(let P=0;P<ui.length;P++){const N=we(.05,.02,3,"#b08d57"),O=we(.05,.02,3,"#b08d57");N.position.set(ui[P]-.34,.03,-3),O.position.set(ui[P]+.34,.03,-3),t.add(N,O),oe.push([N,O])}const ye=[],ze=[],Ve=[];hi.forEach((P,N)=>{const O=we(1.4,.6,.8,T.brass);O.position.set(P,-.09,1.6);const q=we(1.5,.18,.9,T.parchment);q.position.set(P,.12,1.6);const te=we(.4,.09,.3,T.brass);te.position.set(P-.45,.245,1.95);const De=we(.5,1,.36,T.parchment);De.position.set(P+.38,.21,1.35),De.scale.y=.02,t.add(O,q,te,De),ye.push(q),ze.push(De),Ve.push(te)});const Se=[],je=[],$e=[];Pc.forEach(P=>{const N=we(.9,1.5,.5,"#3a2b46");N.position.set(P,.75,-1.4);const O=we(.56,.5,.34,T.plum);O.position.set(P,1.02,-1.32);const q=we(.12,1,.05,T.routeMint);q.position.set(P+.38,.5,-1.12),q.scale.y=.02;const te=.5;q.position.y=te,t.add(N,O,q),Se.push(N),je.push(O),$e.push(q)});const ht=[];for(let P=0;P<2;P++){const N=new Je(new jn(2.6,.5),new $t({color:T.routeMint,transparent:!0,opacity:.25}));N.rotation.x=-Math.PI/2,N.rotation.z=Math.PI/2,N.position.set(-2.6+P*1.4,.03,.35),t.add(N),ht.push(N)}const k=new tt,fe=we(.22,1.7,.22,T.brass);fe.position.set(-.85,.85,.3);const X=we(.22,1.7,.22,T.brass);X.position.set(.85,.85,.3);const ie=we(1.95,.24,.24,T.brass);ie.position.set(0,1.72,.3);const ge=Et(.09,.09,.3,T.inkNavy,8);ge.position.set(1.02,1.15,.3),ge.rotation.z=Math.PI/2;const _e=we(.07,.62,.07,T.sealingRed);_e.position.set(0,.31,0);const Ge=new tt;Ge.position.set(1.02,1.15,.3),Ge.add(_e),Ge.rotation.z=-.5,k.add(fe,X,ie,ge,Ge),t.add(k);const yt=[],Ct=[];ui.forEach(P=>{const N=new Je(new jn(.7,3),new $t({color:T.routeMint,transparent:!0,opacity:.85}));N.rotation.x=-Math.PI/2,N.position.set(P,.02,-3);const O=we(.4,.3,.12,"#0d1730");O.position.set(P,.15,-3),t.add(N,O),yt.push(N),Ct.push(O)});const nt=we(1.7,.18,1.4,"#2a3d68");nt.position.set(-2.6,.09,4);const Jt=we(1.7,.3,.1,T.brass);Jt.position.set(-2.6,.24,4.62);const Ht=Et(1.1,1.3,1.1,T.parchment);Ht.position.set(-2.6,.55,4);const yi=new Je(new gr(.3,.5,4),new Ft({color:T.moonBlue}));yi.rotation.x=Math.PI,yi.position.set(-2.6,1.9,4),t.add(nt,Jt,Ht,yi);const ti=new tt,Cn=Et(.24,.26,.2,T.sealingRed,12);Cn.position.y=.1;const $i=Et(.19,.19,.06,T.parchment,12);$i.position.y=.23;const Nr=we(.045,.05,.03,T.inkNavy);Nr.position.set(-.06,.27,.16);const Or=we(.045,.05,.03,T.inkNavy);Or.position.set(.06,.27,.16),ti.add(Cn,$i,Nr,Or),ti.position.set(1.65,0,.95),t.add(ti);const On=new tt,Br=Et(.22,.42,1.5,T.plum,10);Br.position.y=.75;const bi=Et(.17,.17,.3,T.parchment,10);bi.position.y=1.68;const Xi=new Je(new Ii(.07,.015,6,12),new $t({color:T.brass}));Xi.position.set(-.075,1.7,.16);const zr=Xi.clone();zr.position.x=.075;const ps=we(.05,.015,.02,T.brass);ps.position.set(0,1.7,.17),On.add(Br,bi,Xi,zr,ps),On.position.set(2.3,0,-3.6),t.add(On);const ni=new Je(new _r(.32,12,12),new $t({color:"#72D6C1"}));ni.position.set(0,2.4,0);const ms=we(.1,2.2,.1,T.brass);ms.position.set(0,1.1,0),t.add(ms,ni),n.add(t);const y=new tt;n.add(y);const I=[];function G(P){const N=new tt,O=P==="grand",q=new Je(new gr(O?.55:.42,O?.95:.75,12),new Ft({color:O?T.sealingRed:"#e8b86b"}));q.position.y=0;const te=new Je(new pi(O?.56:.43,O?.56:.43,.08,12),new Ft({color:T.brass}));te.position.y=O?.34:.27;const De=new Je(new _r(O?.34:.24,10,10),new $t({color:O?"#ff9a3c":"#ffcf7a",transparent:!0,opacity:.85}));De.position.y=O?-.18:-.14;const dt=new Je(new pi(.012,.012,.5,6),new Ft({color:T.inkNavy}));return dt.position.y=O?-.55:-.42,q.userData.kind=P,De.userData.kind=P,te.userData.kind=P,N.add(q,te,De,dt),N.userData.kind=P,N.position.set((Math.random()-.5)*7.5,2.9+Math.random()*1.3,-2.2+Math.random()*2.6),N}function W(P){if(I.length>=Qn.maxConcurrent)return;const N=G(P);if(P==="grand"){const O=new Je(new _r(.07,6,6),new $t({color:"#ffd773",transparent:!0,opacity:.9}));O.position.set(0,-.3,-.2),N.add(O)}y.add(N),I.push({group:N,kind:P,bornS:0,lifeS:0,swayT:Math.random()*Math.PI*2})}function U(P){const N=I[P];N&&(y.remove(N.group),I.splice(P,1))}function le(P,N,O){for(let q=I.length-1;q>=0;q--){const te=I[q];if(te.lifeS+=P,te.lifeS>=Qn.despawnS){U(q);continue}const De=te.lifeS>=Qn.despawnS-5?.5:1,dt=te.group.children[0];if(dt.material.transparent=De<1,dt.material.opacity=De,O){const Si=te.group.children[2];Si.material.opacity=(.6+Math.sin(te.lifeS*2)*.2)*De;continue}te.swayT+=P*.8,te.group.position.y+=Math.sin(te.swayT)*P*.18,te.group.rotation.y+=P*.4,te.group.position.x+=Math.sin(te.swayT*.7)*P*.1;const Rt=te.group.children[0];Rt.rotation.z=Math.sin(te.swayT*1.3)*.08}}const ve=new vi(.34,.05,.24),Pe=new Ft({color:T.parchment}),be=new H0(Ec.budget,ve,Pe);n.add(be.mesh);const Oe=[];let We=0,Ee=0;function et(P,N,O){const q=be.acquire(P.x,P.y+.3,P.z,{color:O});if(q&&(Oe.push({inst:q,from:P.clone(),to:N.clone(),t:0,dur:.55+Math.random()*.35}),Oe.length>Ec.budget-20)){const te=Oe.shift();be.hide(te.inst)}}function ut(P,N){const O=[];if(N){const te=Oe.length>0?.95:.5;for(const De of yt)De.material.opacity=te*.85;for(const De of Oe.splice(0))be.hide(De.inst);ni.material.opacity=te}else{for(let te=Oe.length-1;te>=0;te--){const De=Oe[te];De.t+=P;const dt=Math.min(1,De.t/De.dur),Rt=dt*dt*(3-2*dt),Si=qn.lerp(De.from.x,De.to.x,Rt),Hr=qn.lerp(De.from.y+.3,De.to.y,Rt)+Math.sin(dt*Math.PI)*.4,qi=qn.lerp(De.from.z,De.to.z,Rt);be.move(De.inst,Si,Hr,qi,Rt*1.2),dt>=1&&O.push(te)}for(const te of O)be.hide(Oe[te].inst),Oe.splice(te,1)}be.commit(),We>0&&(We=Math.max(0,We-P*4),Ge.rotation.z=-.5+Math.sin(We*Math.PI)*.7);const q=Oe.length>0?.55:.25;for(const te of ht){const De=te.material;De.opacity+=(q-De.opacity)*Math.min(1,P*6)}yi.position.y=1.9+Math.sin(performance.now()/600)*.08}const gt={ok:"#72D6C1",warn:"#D6A84B",red:"#C74B55"};function Nt(P){ni.material.color.set(gt[P]),ni.material.opacity=1}function at(P){const N=Math.max(1e-9,Qs(P));ye.forEach((O,q)=>{const te=P.desks[q],De=!!te?.unlocked,dt=te?.tier??0,Rt=De?1+dt*.18:1;O.scale.y=Rt,O.position.y=.12+(Rt-1)*.18,O.scale.x=De&&dt>0?1+dt*.08:1;const Si=O.material;De?Si.color.set((te?.inProcess??0)>0?T.parchment:T.moonBlue):Si.color.set("#1c1830");const Hr=N/hi.length,qi=De?Math.min(1,(te?.inProcess??0)/Math.max(1e-9,Hr)):0,Vr=ze[q];Vr.scale.y=Math.max(.02,qi*.55),Vr.position.y=.21+Vr.scale.y/2,Ve[q].material.color.set(De&&dt>=2?T.routeMint:T.brass)})}function Ie(P){const N=P.blocking.everDistricts.includes(1)||P.districtIndex>=1;L.material.color.set(N?T.routeMint:T.inkNavy);const O=(q,te)=>{q.children.forEach(De=>{const dt=De.material;if(dt&&!(dt instanceof $t)){const Rt=new Qe(te?T.brass:T.moonBlue);dt.color.copy(Rt.multiplyScalar(te?1:.3))}})};O(H,P.districtIndex===0),O(Y,N)}function xn(P){const N=Math.max(1e-9,168),O=Math.min(1,(P.bundled??0)/N);Se.forEach((q,te)=>{const De=!!P.racks[te]?.unlocked;q.material.color.set(De?"#3a2b46":"#1c1830"),je[te].visible=De;const dt=Math.min(1,Math.max(0,O*ot(P)-rn(P,te))),Rt=$e[te];Rt.visible=De,Rt.scale.y=Math.max(.02,dt),Rt.position.y=.02+dt/2})}function ot(P){return P.racks.filter(N=>N.unlocked).length}function rn(P,N){let O=0;for(let q=0;q<=N;q++)P.racks[q]?.unlocked&&O++;return O}function ii(P,N){yt.forEach((O,q)=>{const te=P.lanes[q],De=!!te?.unlocked,dt=O.material;if(De){const Rt=[0,.1,.2][te?.tier??0]??.3;dt.opacity=Math.min(1,.35+.5*N+Rt),dt.color.set(T.routeMint)}else dt.opacity=.12,dt.color.set("#101a30");Ct[q].visible=!De})}function Vt(P,N,O){Ht.scale.y=Math.max(.15,N),Ht.position.y=.18+1.1*Ht.scale.y/2,nt.material.color.set(O?"#17233F":"#2a3d68")}function Mi(P,N){F.material.color.set(N?T.brass:"#0d1730")}const _t=["#b08d57",T.parchment,"#cfd8e8"];let Qt=!1,ri=!1,Gt=!1;function Rn(P,N){const O=Ze=>P.ch2.districtsAnswered.includes(Ze);for(const Ze of[2,3,4,5,6,7,8,9,10,11]){const wt=O(Ze),yn=He[Ze].material;yn.userData.pulse==null&&yn.color.set(wt?me[Ze]:Ce);const Yi=R[Ze];Yi.lit.visible=wt,Yi.locked.visible=!wt}{const Ze=R[11].lit.userData.lens;if(Ze){const wt=Ze.material;O(11)?wt.color.set(T.moonBlue):O(8)?wt.color.set(T.brass):wt.color.set("#9db4dd")}}const q=[6,7,8].filter(Ze=>O(Ze)).length;for(const Ze of[1,2,3,4,5,6,7,8]){const wt=He[Ze];if(!wt)continue;const yn=1+.35*q;wt.scale.set(yn,1,yn)}if(O(6)&&!ri){ri=!0;const Ze=R[6].lit.userData.coinTicket;Ze&&(Ze.rotation.z=Math.PI/2)}if(O(8)&&!Gt){Gt=!0;const Ze=R[8].lit.userData.dueCard;Ze&&(Ze.position.y=.12)}const te=O(2);if(A.visible=!te,te&&!Qt){Qt=!0;const Ze=R[2].lit.userData.hand;Ze&&(Ze.rotation.z=-Math.PI/30)}te||(Qt=!1);const dt=(P.hall.F3??0)>=2,Rt=Math.max(1e-9,Qs(P)),Hr=P.desks.reduce((Ze,wt)=>Ze+wt.inProcess,0)/Rt>=.99;Ke.forEach(Ze=>{Ze.material.color.set(dt?Hr?"#34506f":T.moonBlue:"#101a30")});const qi=P.hall.F7??0,Vr=qi>=3?2:qi>=2?1:0;P.lanes.forEach((Ze,wt)=>{const yn=Ze.tier>=5?2:Ze.tier>=3?1:0,Yi=Math.max(yn,Vr);for(const hh of oe[wt]??[])hh.material.color.set(_t[Yi])}),Re.forEach((Ze,wt)=>{Ze.visible=wt<Math.max(0,N.sdActive)}),ct.forEach((Ze,wt)=>{const yn=N.sdFills?.[wt]??0;Ze.visible=yn>0,Ze.scale.y=Math.min(1,Math.max(0,yn))});const dh=O(2);ne.visible=dh,J.material.color.set(N.mpDue?T.parchment:"#7a6f52"),Ue.forEach((Ze,wt)=>{const Yi=(P.ch2.stampInventory[S[wt]]??0)>=250;Ze.scale.setScalar(Yi?1.35:1),N.stampCapsAt})}const sn=[];function gs(P){const N="#ffd773",O=q=>{const te=He[q],De=te.material;De.color.set(N),De.userData.pulse=!0,sn.push({mesh:te,base:me[q]??T.routeMint,t:1.1})};if(P==null)for(const q of Object.keys(He).map(Number).sort((te,De)=>te-De))O(q);else O(P);if(P==null){const q=R[5].lit.userData.water;if(q){const te=q.material;te.color.set("#22356b"),setTimeout(()=>te.color.set("#0b1530"),1200)}}}function oh(P){for(let N=sn.length-1;N>=0;N--){const O=sn[N];if(O.t-=P,O.t<=0){const q=O.mesh.material;delete q.userData.pulse,q.color.set(O.base),sn.splice(N,1)}}}function lh(P,N,O){const q=O?.03:.12;Ee>0&&(Ee=Math.max(0,Ee-P*3)),ti.position.y=Math.abs(Math.sin(N*2.2))*q+Math.sin(Ee*Math.PI)*.25,ti.rotation.y=Math.sin(N*.8)*.3,On.rotation.y=Math.sin(N*.4)*.18}const ch=[...hi.map((P,N)=>({label:`PAD-${N+1}`,pos:new D(P,.9,1.6)})),...Pc.map((P,N)=>({label:`RACK-${N+1}`,pos:new D(P,1.9,-1.4)})),...ui.map((P,N)=>({label:`LANE-${N+1}`,pos:new D(P,.4,-3)})),{label:"STAMP GATE",pos:new D(0,2.1,.3)},{label:"BACKLOG TRAY",pos:new D(-2.6,2.1,4)},{label:"ROUTE MAP",pos:new D(-2.4,4.9,vt)},{label:"PIP",pos:new D(1.65,.8,.95)},{label:"MARA",pos:new D(2.3,2.2,-3.6)},{label:"CLOCKTOWER SEAL",pos:new D(1.7,4.6,vt)},{label:"DIST-CW",pos:new D(1.5,4,vt)},{label:"DIST-MU",pos:new D(2.65,4.5,vt)},{label:"DIST-RG",pos:new D(3.75,4.75,vt)},{label:"DIST-CA",pos:new D(4.8,5,vt)},{label:"SD BOARD",pos:new D(3.35,1.8,1.4)},{label:"MP BASKET",pos:new D(-4.55,1,1.5)},...hi.map((P,N)=>({label:`TRAY-${N+1}`,pos:new D(P-.42,.6,1.35)})),{label:"DIST-MA",pos:new D(5.75,5.05,vt)},{label:"DIST-GQ",pos:new D(6.6,5.2,vt)},{label:"DIST-SL",pos:new D(7.4,5.3,vt)},{label:"MOD DRESSING",pos:new D(-2.4,4.4,vt)}];return{scene:t,pool:be,flyers:Oe,lamp:ni,setLampLevel:Nt,deskMeshes:ye,updateDesks:at,updateLanterns:Ie,animateFlyers:ut,spawnFlyer:et,leverKick:()=>{We=1},pipPulse:()=>{Ee=1},updateRacks:xn,updateLanes:ii,updateTray:Vt,updateWall:Mi,tickCharacters:lh,debugAnchors:ch,wanderGroup:y,wanderlights:I,spawnWanderlight:W,animateWanderlights:le,despawnWanderlight:U,updateDistricts:Rn,updateModDressing:Me,pulseThread:gs,tickChords:oh}}const Be={sortHold:"HOLD TO SORT",postage:"Postage",stars:"Stars",districtLL:"Lantern Lane",districtRM:"Rainmarket",districtCW:"Clocktower Ward",buy:"Buy",redraw:"Redraw Routes",waxSealsShort:"Seals",postcards:"Postcards",postcardsEmpty:"No postcards yet — the districts will write when they answer.",postcardsLocked:"Keep delivering to hear from this district.",postcardRead:"Read",postcardNew:"New",morningPost:"Morning Post",morningPostPrompt:"A fresh Morning Post has arrived for the frontier districts.",morningPostGranted:"Morning Post delivered",claim:"Claim",specialDeliveries:"Special Deliveries",specialEmpty:"No special requests yet. Keep delivering to receive requests.",specialStamps:"stamps",specialActive:"In transit",specialReady:"Ready to claim",specialStart:"Start",wanderCaught:"Lantern caught",wanderSeal:"+1 Wax Seal",pendingStarsShort:"★",flatRising:"Compass: rising thread",flatSettling:"Compass: settling thread",flatLevel:"Compass: still — routes spreading thin",flatNudge:"Compass: redraw — the wall has gone quiet",morningPostNextIn:"Next bundle in",morningPostHeldNote:"one bundle sleeps on the counter",specialEndsAt:"Route ends",rushOrder:"Rush Order",rushHeld:"The Unwritten Hour — a ready ×2 route boost for 30:00.",rushActiveUntil:"×2 booked until",officePapers:"Office Papers",roadmap:"After Dawn — Roadmap",dawnTitle:"The first morning",cadenceStrip:"Cadence — settled by design"},Dc=["","K","M","B","T","Qa","Qi","Sx","Sp"];function en(n){if(!isFinite(n))return"—";const e=Math.abs(n);if(e<1e3)return n<0?`-${Math.floor(e)}`:`${Math.floor(n)}`;const t=Math.floor(Math.log10(e)/3),i=e/Math.pow(10,t*3),r=Dc[Math.min(t,Dc.length-1)];let s=i.toFixed(2);return s=s.replace(/\.?0+$/,""),`${n<0?"-":""}${s}${r}`}function dr(n){return isFinite(n)?`${Math.floor(n)}`:"—"}const pt={thirdWind:{beat:"ch3.open.1",speaker:"Pip",copy:"Nine answers on the map. The rest is weather."},longReturn:{beat:"ch3.open.2",speaker:"Mara",copy:"It answered while you slept. Sign for it."},f11Rail:{beat:"ch3.open.3",speaker:"Mara",copy:"Rail and road under one roof now. Buy the pair, thank me thrice.",highlight:"satchel"},f12Rail:{beat:"ch3.open.4",speaker:"Pip",copy:"Every stamp in the building just got heavier.",highlight:"route"},modIntro:{beat:"ch3.mod.1",speaker:"Mara",copy:"The forecast is for the routes, not the rain. Read it before you sort.",highlight:"modifier"},ledgerBasis:{beat:"ch3.ledger.1",speaker:"Mara",copy:"Long windows pay steady, not spiky. Steady wins routes."},voyageFrame:{beat:"ch3.voyage.1",speaker:"Pip",copy:"Name's on the ledger. Now we fill the sack."},maAnswer:{beat:"ch3.ma.1",speaker:"Mara",copy:"Wistful machines. Load-bearing nostalgia. Keep walking, Clerk."},modTiming:{beat:"ch3.mod.2",speaker:"Mara",copy:"Yesterday's sky paid routes. Today's pays patience. Choose your wall.",highlight:"modifier"},rushPreview:{beat:"ch3.rush.1",speaker:"Pip",copy:"One golden half-hour. Spend it on a wall that earns its keep.",highlight:"special"},rushGrant:{beat:"ch3.rush.2",speaker:"Pip",copy:"Clock's loud when you wake it. Thirty minutes. Wring it.",highlight:"sort"},rushDeploy:{beat:"ch3.rush.3",speaker:"Mara",copy:"Half an hour of downhill. Mind the brakes.",highlight:"sort"},slClose1:{beat:"ch3.sl.1",speaker:"Mara",copy:"Three districts, one silence, finally broken. Well routed."},slClose2:{beat:"ch3.sl.1b",speaker:"Pip",copy:"*West.* I can smell the platforms."}},r_=[{districtIndex:6,id:"moonlit_arcade",name:"Moonlit Arcade",body:"The route-miniature runs out along a midway of shuttered stalls; coin-wells and ticket drums sit dark — then one brass coin-ticket spins itself upright, clatters once, and lies still. Every stall’s paper glows faintly addressed.",speaker:"Mara",speakerLine:"They spent the coins on ink long ago. Thriftier than it sounds.",arrivalCopy:null},{districtIndex:7,id:"glasshouse_quarter",name:"Glasshouse Quarter",body:"Greenhouse panes above a sleeping market row; pressed flowers ride inside every envelope like held breath. Condensation on one pane resumes writing a word it began in an earlier chapter — and finishes.",speaker:"Pip",speakerLine:"Shhh. Everything in here is sleeping *on purpose*.",arrivalCopy:null},{districtIndex:8,id:"sleepless_library",name:"Sleepless Library",body:"Shelf-aisles run past the frame in both directions; the lamps never quite go out. A book drops onto the counter on its own — its due-card pre-stamped TOMORROW. For a moment every thread on the map leans west.",speaker:"Mara",speakerLine:"Three districts, one silence, finally broken. *Well routed.*",arrivalCopy:null}],kc={rain_sheen:{id:"rain_sheen",name:"Rain Sheen",glyph:"rain-glaze",wash:"#5B79C8",dressingNote:"rain glaze on the hall glass",effectLine:"Slick roofs. Fast lanes."},backlog_surge:{id:"backlog_surge",name:"Backlog Surge",glyph:"pile",wash:"#17233F",dressingNote:"the backlog pile visibly taller",effectLine:"More mail tonight. More everything."},perfect_moon:{id:"perfect_moon",name:"Perfect Moon",glyph:"halo",wash:"#D6A84B",dressingNote:"moon halo over the route map",effectLine:"Clean streaks come easy tonight."},tailwind:{id:"tailwind",name:"Tailwind Night",glyph:"streamers",wash:"#72D6C1",dressingNote:"mint streamers on the lanes",effectLine:"Every lane leans west."},long_shadows:{id:"long_shadows",name:"Long Shadows",glyph:"lamp-dim",wash:"#D6A84B",dressingNote:"lamps dim one step, longer cones",effectLine:"The ledger reads longer into the dark."},stamp_fair:{id:"stamp_fair",name:"Stamp Fair",glyph:"bunting",wash:"#F4E7C7",dressingNote:"paper bunting over the counter",effectLine:"Every pocket rattles twice."},wax_festival:{id:"wax_festival",name:"Wax Festival",glyph:"wax-drips",wash:"#6D3E78",dressingNote:"plum wax drips on desk brass",effectLine:"The seals come off warm."}},Ic={endsPrefix:"ends",forecastDeltaLabel:"tomorrow"},Bs={basis:"settled at your usual pace",trim:"The ledger held what it could hold. — M.Q.",longShadows:"The lamps stayed low all night. The letters didn't mind."},s_={sd7Preview:"Reward: one golden half-hour"},a_=["Daily-modifier rotation state (deterministic — the forecast keeps its day)","Special-delivery board v2 state (4–8 h wall-clock timers keep ticking)","Rush Order held/active (one golden half-hour, hold ≤1)","Stamp rows: Moonlit Arcade · Glasshouse Quarter · Sleepless Library","Night Ledger median minute-ring (settled-at-your-pace basis)"],is=7,Nd="midnight-dispatch.save.v1";function Od(){return{gates:{rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1},moonlit_arcade:{listValue:0,rvDone:!1,listDone:!1},glasshouse_quarter:{listValue:0,rvDone:!1,listDone:!1},sleepless_library:{listValue:0,rvDone:!1,listDone:!1},cloudline_station:{listValue:0,rvDone:!1,listDone:!1},aurora_borough:{listValue:0,rvDone:!1,listDone:!1},last_light_observatory:{listValue:0,rvDone:!1,listDone:!1}},checklist:[],railsFired:[],everDistricts:[0],eRunRaw:0,snapshotRate:0,nightMs:0,ch2Pending:[],ch2FiredEver:[],evapSpanMax:{},installDayIndex:0,ledgerRing:[],runStartWall:0}}function fr(){return{stampInventory:{},specialDeliveries:{offers:[],active:[],done:[]},morningPost:{lastClaimTs:null,held:0},waxSeals:0,postcardCounters:{},postcards:{read:[],sealAwarded:[],unlockedEmitted:[]},districtsAnswered:[0],horizonSealAction:null,rush:{held:!1,activeEndTs:null}}}function pr(){return{replyFired:!1,roundTrip:{open:!1,completed:{}},cosmetics:{owned:[],equipped:{desk:null,rack:null,map_frame:null,pip:null}},sdRepeat:{preReply:[]}}}function fn(){return{streak:{count:0,lastKey:0},doubler:{day:0,used:0},notifications:{optIn:!1,inviteShown:!1,quietHoursFrom:22,quietHoursTo:8},album:{shadowCredits:0,level:1,anchor:0},dawn:{fired:!1,replyAtMs:null},stubs:{seen:{license:!1,priority:!1,pack40:!1,pack100:!1,pack230:!1,album:!1,never_row:!1},trayRailed:!1},a2:{state:"unseen",channels:{return_ready:!0,rotation:!0,mastery:!0},rotationHourLocal:19,cardShown:0,browserDenyLineShown:!1,lastRotationDay:null,lastReturnReadyGapTs:null,masteryFired:[],queue:[]},loopBaseRun:null,dayLog:{day:null,sessions:0,loops:0,emittedDay:null}}}function Bd(){return Array.from({length:hn.count},(n,e)=>({unlocked:e===0,tier:0,inProcess:0}))}function zd(){return Array.from({length:Nn.count},(n,e)=>({unlocked:e===0,tier:0}))}function Hd(){return Array.from({length:Fn.count},(n,e)=>({unlocked:e===0,tier:0}))}function Rr(){const n=Date.now();return{v:is,savedAt:n,run:0,postage:0,totalEarnedRun:0,stars:0,starMultiplier:1,redrawCount:0,backlog:90,bundled:0,desks:Bd(),racks:zd(),lanes:Hd(),hall:{},districtIndex:0,districtRouteValue:0,perfect:1,onboarded:!1,clipsSeen:[],ledgerWindow:2*3600,ledgerAwayRate:0,lastLedgerTs:n,doublersUsed:0,doublerDay:0,doublerTracked:!1,returnCardPending:!1,reducedMotion:!1,blocking:Od(),ch2:fr(),ch4:pr(),ch5:fn(),liveMod:null,rushActive:null}}function o_(n){const e=n.deskTiers??[0,0,0,0],t=n.deskInProcess??[0,0,0,0],i=typeof n.satchelTier=="number"?n.satchelTier:0,r=n.routeTiers??[0,0],s=n.hall??{},a=Array.from({length:hn.count},(d,f)=>({unlocked:!0,tier:e[f]??0,inProcess:t[f]??0})),o=Array.from({length:Nn.count},(d,f)=>({unlocked:f===0,tier:f===0?i:0})),c=Array.from({length:Fn.count},(d,f)=>({unlocked:f<r.length,tier:r[f]??0})),l={};s.letterValue&&(l.F1=Math.min(5,s.letterValue)),s.sortRate&&(l.F2=Math.min(5,s.sortRate)),s.backlogPool&&(l.F4=Math.min(4,s.backlogPool)),s.perfectRamp&&(l.F5=Math.min(5,s.perfectRamp));const h={...n};return delete h.deskTiers,delete h.deskInProcess,delete h.satchelTier,delete h.routeTiers,delete h.backlogLevel,h.desks=a,h.racks=o,h.lanes=c,h.hall=l,h}const l_={2:o_};function c_(n){const e=new Date(n);return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function d_(n){const e=n,t=Rr(),i=typeof n.v=="number"?n.v:0,r={...t,...e},s=(e.desks??t.desks).map((m,g)=>({unlocked:m?.unlocked??g===0,tier:m?.tier??0,inProcess:m?.inProcess??0}));for(;s.length<hn.count;)s.push({unlocked:s.length===0,tier:0,inProcess:0});const a=(e.racks??t.racks).map((m,g)=>({unlocked:m?.unlocked??g===0,tier:m?.tier??0}));for(;a.length<Nn.count;)a.push({unlocked:a.length===0,tier:0});const o=(e.lanes??t.lanes).map((m,g)=>({unlocked:m?.unlocked??g===0,tier:m?.tier??0}));for(;o.length<Fn.count;)o.push({unlocked:o.length===0,tier:0});r.desks=s,r.racks=a,r.lanes=o,r.hall={...e.hall??{}};const c=e.blocking,l=Od();r.blocking={...l,...c??{}},r.blocking.installDayIndex=c?.installDayIndex??c_(typeof e.savedAt=="number"?e.savedAt:Date.now()),r.blocking.ledgerRing=Array.isArray(c?.ledgerRing)?c.ledgerRing:[],r.blocking.runStartWall=typeof c?.runStartWall=="number"?c.runStartWall:Date.now(),r.blocking.gates={rainmarket:{...l.gates.rainmarket,...c?.gates?.rainmarket??{}},horizon:{...l.gates.horizon,...c?.gates?.horizon??{}},museum:{...l.gates.museum,...c?.gates?.museum??{}},rooftop:{...l.gates.rooftop,...c?.gates?.rooftop??{}},canal:{...l.gates.canal,...c?.gates?.canal??{}},moonlit_arcade:{...l.gates.moonlit_arcade,...c?.gates?.moonlit_arcade??{}},glasshouse_quarter:{...l.gates.glasshouse_quarter,...c?.gates?.glasshouse_quarter??{}},sleepless_library:{...l.gates.sleepless_library,...c?.gates?.sleepless_library??{}},cloudline_station:{...l.gates.cloudline_station,...c?.gates?.cloudline_station??{}},aurora_borough:{...l.gates.aurora_borough,...c?.gates?.aurora_borough??{}},last_light_observatory:{...l.gates.last_light_observatory,...c?.gates?.last_light_observatory??{}}};const h=e.ch2;r.ch2={...fr(),...h??{},specialDeliveries:{...fr().specialDeliveries,...h?.specialDeliveries??{}},morningPost:{...fr().morningPost,...h?.morningPost??{}},postcards:{...fr().postcards,...h?.postcards??{}},rush:{...fr().rush,...h?.rush??{}},horizonSealAction:h!=null?h.horizonSealAction??null:e.redrawCount!=null&&e.redrawCount>0?"advance_bond":"redraw_claim"};const d=e.ch4;r.ch4={...pr(),...d??{},roundTrip:{...pr().roundTrip,...d?.roundTrip??{},completed:{...d?.roundTrip?.completed??{}}},cosmetics:{...pr().cosmetics,...d?.cosmetics??{},owned:Array.isArray(d?.cosmetics?.owned)?d.cosmetics.owned:[],equipped:{...pr().cosmetics.equipped,...d?.cosmetics?.equipped??{}}},sdRepeat:{...pr().sdRepeat,...d?.sdRepeat??{},preReply:Array.isArray(d?.sdRepeat?.preReply)?d.sdRepeat.preReply:[]}};const f=e.ch5;if(r.ch5={...fn(),...f??{},streak:{...fn().streak,...f?.streak??{}},doubler:{...fn().doubler,...f?.doubler??{}},notifications:{...fn().notifications,...f?.notifications??{}},album:{...fn().album,...f?.album??{}},dawn:{...fn().dawn,...f?.dawn??{}},stubs:{...fn().stubs,...f?.stubs??{},seen:{...fn().stubs.seen,...f?.stubs?.seen??{}},trayRailed:f?.stubs?.trayRailed===!0},a2:{...fn().a2,...f?.a2??{},channels:{...fn().a2.channels,...f?.a2?.channels??{}},masteryFired:Array.isArray(f?.a2?.masteryFired)?f.a2.masteryFired:[],queue:Array.isArray(f?.a2?.queue)?f.a2.queue:[]},loopBaseRun:typeof f?.loopBaseRun=="number"?f.loopBaseRun:null,dayLog:{...fn().dayLog,...f?.dayLog??{}}},f==null&&(typeof e.doublerDay=="number"&&e.doublerDay>0&&(r.ch5.doubler.day=e.doublerDay),typeof e.doublersUsed=="number"&&(r.ch5.doubler.used=e.doublersUsed)),h==null)for(const m of["clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"])r.ch2.postcardCounters[m]=r.ch2.postcardCounters[m]??0;if(!h?.districtsAnswered?.length){const m=r.blocking.everDistricts;r.ch2.districtsAnswered=m?.length?[...m].sort((g,x)=>g-x):[0]}if(i<5)for(const m of["moonlit_arcade","glasshouse_quarter","sleepless_library"])r.ch2.postcardCounters[m]=r.ch2.postcardCounters[m]??0;if(i<6)for(const m of["cloudline_station","aurora_borough","last_light_observatory"])r.ch2.postcardCounters[m]=r.ch2.postcardCounters[m]??0;return{...r,v:is,liveMod:null,rushActive:null}}function h_(n){if(n==null||typeof n!="object")return Rr();const e=n,t=typeof e.v=="number"?e.v:0;if(t>is)throw new Error(`Save version ${t} is newer than supported ${is}`);if(t<1)return Rr();let i=n;for(let r=t;r<is;r++){const s=l_[r];s&&(i=s(i))}return d_(i)}function Vd(n){const{savedAt:e,lastLedgerTs:t,liveMod:i,rushActive:r,...s}=n,a=l=>{if(l===null||typeof l!="object")return JSON.stringify(l)??"null";if(Array.isArray(l))return`[${l.map(a).join(",")}]`;const h=l;return`{${Object.keys(h).sort().filter(d=>!(d==="runStartWall"&&h[d]===h[d])).map(d=>`${JSON.stringify(d)}:${a(h[d])}`).join(",")}}`},o=a(s);let c=2166136261;for(let l=0;l<o.length;l++)c^=o.charCodeAt(l),c=Math.imul(c,16777619);return(c>>>0).toString(16).padStart(8,"0")}function u_(n,e){const t=Zt[e];if(!t)return!1;const i=n.hall[e]??0;if(i>=t.tiers)return!1;const r=t.cost[i]??1/0;return n.postage<r?!1:(n.postage-=r,n.hall[e]=i+1,!0)}function nl(n,e){return hn.unlock[e]??1/0}function f_(n,e){const t=n.desks[e];if(!t||t.unlocked)return!1;const i=nl(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function il(n,e){const t=n.desks[e];if(!t||!t.unlocked)return 1/0;const i=(n.hall.F6??0)>0,r=hn.tier[t.tier+1]??1/0;return i?Math.ceil(r*hn.F6.costMult):r}function p_(n,e){const t=il(n,e),i=n.desks[e];return!i||!i.unlocked||i.tier>=hn.caps.length-1||n.postage<t?!1:(n.postage-=t,i.tier+=1,!0)}function rl(n,e){return Nn.unlock[e]??1/0}function m_(n,e){const t=n.racks[e];if(!t||t.unlocked)return!1;const i=rl(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function sl(n,e){const t=n.racks[e];return!t||!t.unlocked?1/0:Nn.tier[t.tier+1]??1/0}function g_(n,e){const t=n.racks[e];if(!t||!t.unlocked)return!1;const i=sl(n,e);return t.tier>=Nn.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}function al(n,e){return Fn.unlock[e]??1/0}function __(n,e){const t=n.lanes[e];if(!t||t.unlocked)return!1;const i=al(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function ol(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return 1/0;const i=n.hall.F7??0,r=Fn.F7,s=r.costMultPerTier;let a=1;i>=1&&(a=r.costMult);for(let o=2;o<=i;o++)a*=s;return Math.ceil((Fn.tier[t.tier+1]??1/0)*a)}function v_(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return!1;const i=ol(n,e);return t.tier>=Fn.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}const x_=2e3,Mr=[],y_=[],ea={};function b_(){Mr.length=0;for(const n of Object.keys(ea))delete ea[n]}function Fe(n,e,t={},i){if(!Object.values(ke).includes(e))throw new Error(`unknown md event: ${e}`);const r={local_day:null,loop_n:null},s={name:e,run_id:n.run,night_ms:Math.round(n.blocking.nightMs),stars_banked:n.stars,district:n.districtIndex,props:t,local_day:r.local_day,loop_n:r.loop_n};Mr.push(s),Mr.length>x_&&Mr.shift(),ea[e]=(ea[e]??0)+1;for(const a of[...y_])a(s);return s}function M_(n){return n?Mr.filter(n):[...Mr]}const Mt={fourthWind:{beat:"ch4.open.1",speaker:"Mara",copy:"Eleven districts writing again. The last one has been listening the whole time."},deepAddressing:{beat:"ch4.open.2",speaker:"Pip",copy:"Same trick, deeper pockets."},kitT9:{beat:"ch4.kit.1",speaker:"Mara",copy:"Bigger sacks. The sky got ambitious; so do we.",highlight:"satchel"},finalRunJump:{beat:"ch4.jump.1",speaker:"Mara",copy:"Buy the deep address book. Every stamp in the building gets heavier — twice."},cloudlineAnswer:{beat:"ch4.cs.1",speaker:"Mara",copy:"Altitude is just patience with better rigging. Check the knots, Clerk."},weatherReRead:{beat:"ch4.mod.1",speaker:"Pip",copy:"Same sky, new mood. Read it, then choose the wall.",highlight:"modifier"},auroraAnswer:{beat:"ch4.ab.1",speaker:"Pip",copy:"They started replying before we finished asking. Rude. I love it."},midCycleSwap:{beat:"ch4.mod.2",speaker:"Mara",copy:"The sky changed its mind mid-route. Yours stays.",highlight:"modifier"},voyageBeat:{beat:"ch4.voyage.1",speaker:"Pip",copy:"Name's on the ledger. Now we fetch the sky."},lastLightAnswer:{beat:"ch4.llo.1",speaker:"Mara",copy:"Point the glass at the ground, love. That’s where the stars went."},rtOpen:{beat:"ch4.rt.1",speaker:"Pip",copy:"It wrote back. Everyone wrote back. And they left you a tip.",highlight:"roundTrip"},firstTrim:{beat:"ch4.shop.1",speaker:"Mara",copy:"Dress the desk. It earned the night out.",highlight:"cosmetics"}},S_=[{districtIndex:9,id:"cloudline_station",name:"Cloudline Station",body:"The route-miniature runs up past the roofline into a platform deck strung with brass signal kites; mailbags sway under balloon hooks; counterweight letters lift off the desk one by one on the dawn thermals; the district’s thread answers in mint-and-brass.",speaker:"Mara",speakerLine:"Altitude is just patience with better rigging. Check the knots, Clerk.",arrivalCopy:null},{districtIndex:10,id:"aurora_borough",name:"Aurora Borough",body:"Map threads bend over a market street whose awnings are lit from inside; color comes down like weather — mint, plum, parchment washes; every envelope on the desks reflects a different sky; someone in every house is already writing back.",speaker:"Pip",speakerLine:"They started replying before we finished asking. Rude. I love it.",arrivalCopy:null},{districtIndex:11,id:"last_light_observatory",name:"Last Light Observatory",body:"The miniature climbs a cliff of stacked catalogues to a brass lens-house; the lens does not turn skyward — it comes slowly around toward the city below; through it, eleven lit threads braid into one; the observatory was never watching the sky — it was waiting to see if the city would ever speak again. The lens flashes once, a moon-blue signal that crosses the entire map.",speaker:"Mara",speakerLine:"Point the glass at the ground, love. That’s where the stars went.",arrivalCopy:null}],Kr={durationS:35,pullbackS:4,threadStepS:1.2,threadCount:12,allGlowS:4,shelfS:4,cardS:5,controlReturnS:4,boundaries:[0,4,18,22,26,31,35],cardTitle:"The First Citywide Reply",pipQuietLine:"Oh. It was all of us, all along.",maraSignLine:"Beautifully routed. Now — sign the logbook, Night Clerk. The city is expecting your shift again tomorrow.",replayLabel:"Replay the reply"};function zi(n){return n.ch4.replyFired}function Ur(n){return n.ch4.roundTrip.open}function w_(n){return Ut[n]?.id??null}function ll(n,e,t,i){const r=as[e];if(!r)return;const s=r.seals,a=r.stars;n.ch2.waxSeals+=s,n.stars+=a,n.starMultiplier=1+It.starMultStep*n.stars,Fe(n,ke.rtComplete,{district:e,kind:t,payout_seals:s,payout_stars:a,retro:i})}function E_(n,e){const t=n.ch2.postcardCounters[e]??0,i=ur.p[e];if(i==null)return t;const r=Math.ceil(1/i),s=n.ch2.stampInventory[e]??0;return t+s*r}function Gd(n){if(Ur(n))for(const e of Object.keys(as)){const t=n.ch4.roundTrip.completed[e];if(t?.A)continue;const i=as[e];E_(n,e)>=i.target.letters&&(n.ch4.roundTrip.completed[e]={...t??{},A:!0},ll(n,e,"A",!0))}}function T_(n,e){if(!Ur(n))return;const t=as[e];if(!t||!t.target.modifier)return;const i=n.ch4.roundTrip.completed[e];i?.B||(n.liveMod?.id??null)===t.target.modifier&&(n.ch4.roundTrip.completed[e]={...i??{},B:!0},ll(n,e,"B",!1))}function A_(n,e,t){if(!Ur(n))return;const i=as[e];if(!i||i.target.courierMin==null)return;const r=n.ch4.roundTrip.completed[e];if(r?.C)return;(t-n.blocking.runStartWall)/1e3<=i.target.courierMin*60&&(n.ch4.roundTrip.completed[e]={...r??{},C:!0},ll(n,e,"C",!1))}function C_(n){return n.ch4.replyFired?!1:(n.ch4.replyFired=!0,Fe(n,ke.finaleFire,{cumulative_active_s:Math.round(n.blocking.nightMs/1e3),wall_age_s:Math.round(n.blocking.nightMs/1e3)}),n.ch4.roundTrip.open||(n.ch4.roundTrip.open=!0,Fe(n,ke.rtOpen,{district:Wd,kind:"open",payout_seals:0,payout_stars:0,retro:!0})),Gd(n),!0)}const Wd="last_light_observatory";function $d(n,e,t){const i=w_(e);if(i){if(i===Wd&&!n.ch4.replyFired){C_(n);return}Ur(n)&&(T_(n,i),A_(n,i,t))}}function R_(n){if(!zi(n))return 0;const e=n.ch4.sdRepeat.preReply;let t=0;for(const i of e)j0.repeatableAfterReply.includes(i)&&(n.ch2.specialDeliveries.offers.some(r=>r.recipeId===i&&!r.claimed)||n.ch2.specialDeliveries.offers.push({recipeId:i,endTs:0,claimed:!1}),Fe(n,ke.sdRepeatOffer,{recipe_id:i,cycle_n:n.run}),t++);return t}function L_(n){return Object.values(n.hall).reduce((e,t)=>e+(t??0),0)}function Xd(n){const e=n.hall.F10??0;let t=jr.hfac;return e>=4?t=jr.hfacAfterF10T4:e>=3?t=jr.hfacAfterF10T3:e>=2?t=jr.hfacAfterF10T2:e>=1&&(t=jr.hfacAfterF10),n.blocking.eRunRaw*(1+t*L_(n))}function vn(n){return n.districtIndex===0?"rainmarket":n.districtIndex===1?"horizon":n.districtIndex===2?"museum":n.districtIndex===3?"rooftop":n.districtIndex===4?"canal":n.districtIndex===5?"moonlit_arcade":n.districtIndex===6?"glasshouse_quarter":n.districtIndex===7?"sleepless_library":n.districtIndex===8?"cloudline_station":n.districtIndex===9?"aurora_borough":n.districtIndex===10?"last_light_observatory":null}function Wi(n,e){const t=n.rushActive===!0?Js.multX:1,i=e*Z0(n)*t;n.postage+=i,n.blocking.eRunRaw+=i;const r=vn(n);return r&&(n.blocking.gates[r].listValue+=i),k_(n),i}function P_(n,e,t){Wi(n,e);const i=[...n.blocking.everDistricts].sort((o,c)=>o-c),r=n.districtIndex,s=i.filter(o=>o<r),a=Ut[r]?.id;if(a&&(n.ch2.postcardCounters[a]=(n.ch2.postcardCounters[a]??0)+Math.floor(t*Lc.frontierShare)),s.length>0){const o=t*Lc.fanShareUniform/s.length;for(const c of s){const l=Ut[c]?.id;l&&(n.ch2.postcardCounters[l]=(n.ch2.postcardCounters[l]??0)+Math.floor(o))}}D_(n),Gd(n)}function D_(n){for(const[e,t]of Object.entries(n.ch2.postcardCounters)){const i=ur.p[e];if(i==null)continue;const r=n.ch2.stampInventory,s=r[e]??0;if(s>=ur.cap)continue;const a=Math.ceil(1/i),o=Math.floor(t/a);if(o<=0)continue;const c=Math.min(o,ur.cap-s);c<=0||(r[e]=s+c,n.ch2.postcardCounters[e]=t-c*a,s<ur.cap&&r[e]>=ur.cap&&Fe(n,ke.stampCapped,{district:e}))}}function k_(n){const e=vn(n);if(!e)return;const t=_n[e],i=n.blocking.gates[e],r=Xd(n);!i.rvDone&&r>=t.rv&&(i.rvDone=!0,Fe(n,ke.gateCross,{gate:t.id,req:"rv",t_s:n.blocking.nightMs/1e3})),!i.listDone&&i.listValue>=t.deliveryList&&(i.listDone=!0,Fe(n,ke.gateCross,{gate:t.id,req:"list",t_s:n.blocking.nightMs/1e3}))}function I_(n,e){const t=n.blocking.gates[e];return!t.listDone&&t.listValue>=_n[e].deliveryList*G0}function qd(n){return n.ch2.horizonSealAction??"redraw_claim"}function Lr(n){return qd(n)==="advance_bond"}function F_(n,e){return e==="horizon"?qd(n):_n[e].action}function U_(n,e){return F_(n,e)!=="advance_bond"?!1:n.blocking.gates[e].listDone&&n.postage>=_n[e].bond}function N_(n,e){const t=_n[e];return n.districtIndex!==t.to-1||!U_(n,e)?!1:(n.postage-=t.bond,Fe(n,ke.purchase,{kind:"bond",id:e,cost:t.bond,wallet_after:n.postage}),n.districtIndex=t.to,n.blocking.everDistricts.includes(t.to)||n.blocking.everDistricts.push(t.to),n.ch2.districtsAnswered.includes(t.to)||n.ch2.districtsAnswered.push(t.to),t.to>=2&&(n.ch2.waxSeals+=Y0.districtAdvanceCh2),Fe(n,ke.advance,{district:Ut[t.to].id,t_s:n.blocking.nightMs/1e3,bond:t.bond}),$d(n,t.to,Date.now()),!0)}function O_(n){const e=vn(n);return!e||!N_(n,e)?null:n.districtIndex}function Va(n){return n.blocking.gates.horizon.listDone&&!Lr(n)}function B_(n){n.blocking.gates={rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1},moonlit_arcade:{listValue:0,rvDone:!1,listDone:!1},glasshouse_quarter:{listValue:0,rvDone:!1,listDone:!1},sleepless_library:{listValue:0,rvDone:!1,listDone:!1},cloudline_station:{listValue:0,rvDone:!1,listDone:!1},aurora_borough:{listValue:0,rvDone:!1,listDone:!1},last_light_observatory:{listValue:0,rvDone:!1,listDone:!1}},n.blocking.eRunRaw=0,n.blocking.nightMs=0,n.blocking.runStartWall=Date.now(),n.blocking.checklist=[],n.blocking.railsFired=[]}function z_(){return{desks:Bd(),racks:zd(),lanes:Hd()}}function us(n){return n<=0?0:e_(n)}function cl(n){return us(n.blocking.eRunRaw)}function H_(n){return 1+It.starMultStep*n}function V_(n){const e=cl(n),t=n.blocking.eRunRaw;return Fe(n,ke.redrawShow,{stars_pending:e,earned_booked:t}),{starsPending:e,earnedBooked:t}}function G_(n,e,t){const i=n.blocking.eRunRaw,r=us(i);Fe(n,ke.redrawClaim,{stars_awarded:r,earned_booked:i,forecast_shown:e,cycle_age_s:t?.cycleAgeS??n.blocking.nightMs/1e3,seal_share_at_claim:t?.sealShareAtClaim??null,voluntary:t?.voluntary??!1}),n.stars+=r,n.starMultiplier=H_(n.stars),n.redrawCount+=1,n.run+=1,n.ch2.horizonSealAction!=="advance_bond"&&(n.ch2.horizonSealAction="advance_bond"),n.postage=0,n.totalEarnedRun=0;for(const a of Object.keys(n.hall))n.hall[a]=0;const s=z_();return n.desks=s.desks,n.racks=s.racks,n.lanes=s.lanes,n.backlog=Rr().backlog,n.bundled=0,n.perfect=0,n.districtIndex=0,n.districtRouteValue=0,n.blocking.snapshotRate=0,B_(n),R_(n),{starsAwarded:r,earnedBooked:i,forecastShown:e,multiplierNext:n.starMultiplier}}const Fc=new WeakMap;function Yd(n){let e=Fc.get(n);return e||(e={ring:[],run:n.run,armFired:!1,nudgeFired:!1,cardFired:!1,flatForS:0},Fc.set(n,e)),e}function jd(n,e){e.run!==n.run&&(e.ring=[],e.run=n.run,e.armFired=!1,e.nudgeFired=!1,e.cardFired=!1,e.flatForS=0)}function oa(n){const e=vn(n);return e?n.blocking.gates[e].listValue/_n[e].deliveryList:1}function W_(n){return oa(n)<Pn.nudgeSealShareBelow}function Io(n,e){const t=n.blocking.nightMs/1e3,i=t-Pn.windowS,r=e.ring.length?e.ring[e.ring.length-1].pending:us(n.blocking.eRunRaw);let s=null;if(e.ring.length&&e.ring[0].t<=i){let f=e.ring[0].pending;for(const m of e.ring)if(m.t<=i)f=m.pending;else break;s=r-f}const a=t>=Pn.armFloorS,o=a&&s!=null&&s<=Pn.windowMaxStars,c=oa(n),l=e.flatForS>=Pn.cardAfterS,h=e.flatForS>=Pn.nudgeAfterS&&c<Pn.nudgeSealShareBelow,d=l?"level":a?"settling":"rising";return{armed:a,windowFlat:o,card:l,flatForS:e.flatForS,nudge:h,sealShare:c,pending:r,windowDelta:s,glyph:d,cycleAgeS:t}}function $_(n){const e=Yd(n);jd(n,e);const t=n.blocking.nightMs/1e3,i=e.ring.length?e.ring[e.ring.length-1].t:-1/0;if(t-i>=1){e.ring.push({t,pending:us(n.blocking.eRunRaw)});const r=t-(Pn.windowS+60);for(;e.ring.length&&e.ring[0].t<r;)e.ring.shift();const s=Io(n,e);e.flatForS=s.windowFlat?e.flatForS+1:0,s.armed&&!e.armFired&&(e.armFired=!0,Fe(n,ke.flatArm,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare})),e.flatForS>=Pn.nudgeAfterS&&s.sealShare<Pn.nudgeSealShareBelow&&!e.nudgeFired&&(e.nudgeFired=!0,Fe(n,ke.flatNudge,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare}))}return Io(n,e)}function Fo(n){const e=Yd(n);return jd(n,e),Io(n,e)}const Ys={lantern_lane:[{id:"ll1",districtId:"lantern_lane",slot:1,sender:"Old Naomi, Window 3",subject:"The lamp that remembers",body:'She keeps one envelope from every night she has worked. "Not the post," she insists, "the proof we were here." Tonight her shelf ran out of room, so she mailed the first one onward.',reaction:"Lantern Lane answers: a warm hum, steady as breathing."},{id:"ll2",districtId:"lantern_lane",slot:2,sender:"Clinker, the night cat",subject:"A pawprint on the seal",body:"Clinker has no address and approves of nothing. Still, a packet arrived bearing a single muddy print in the wax — his way of saying the lane is paying attention after all. No return address. Obviously.",reaction:"The lane answers: a soft, rumbling purr through the floor."},{id:"ll3",districtId:"lantern_lane",slot:3,sender:"The Lamplighter",subject:"Twelve wicks, one thread",body:'Every lamp on the lane lit for the first time in a decade. "A clerk who finishes the list," the Lamplighter wrote, "deserves to see the whole street." The wicks burn low and golden, all facing the same direction.',reaction:"Lantern Lane answers: all twelve lamps bow toward the route map."}],rainmarket:[{id:"rm1",districtId:"rainmarket",slot:1,sender:"Marta, awning seller",subject:"Dry seats",body:`Marta roofed the three driest benches under her awning "for the post's sake." The ink on her note bled from the rain, but the message held: the market remembers which trades carried it through its quiet years.`,reaction:"Rainmarket answers: the awnings snap once, in salute."},{id:"rm2",districtId:"rainmarket",slot:2,sender:"The Tally Boys",subject:"Ledger of small mercies",body:'A fold of paper listing every kindness the market owes — the returned scarf, the two saved crates, the lantern loaned after midnight. "Not debt," they wrote. "A standing account." They sign it with a thumbprint in red ink.',reaction:"Rainmarket answers: a bell rings three times over the stalls."},{id:"rm3",districtId:"rainmarket",slot:3,sender:"Mother Kettle",subject:"The first tea in years",body:'She boiled the urn the moment the route reopened and poured for whoever came through the gate. "Post first," she told her kettle, "then the world can wait." The cup left out for the clerk is still warm.',reaction:"Rainmarket answers: steam rises, patient and certain, from a single cup."}],clocktower_ward:[{id:"cw1",districtId:"clocktower_ward",slot:1,sender:"The Keeper of Hours",subject:"Time, postmarked",body:'The great clock had stopped for so long that the ward forgot its own rhythm. When the first route reached it, the Keeper reset all four faces and sent a note: "We were waiting for someone to bring us the news of the world before striking the hour."',reaction:"Clocktower Ward answers: the chimes ring, once, in the dusk."},{id:"cw2",districtId:"clocktower_ward",slot:2,sender:"Wren, the archivist",subject:"A minute in a jar",body:'Wren keeps one saved minute from every clock she has coaxed back to life. "A captured minute," she wrote, "is a town that agreed to move together." She sent the newest jar to the route maps, so the past reaches the present by post.',reaction:"Clocktower Ward answers: the jar ticks softly with the returned route."},{id:"cw3",districtId:"clocktower_ward",slot:3,sender:"The First Night-Watch",subject:"The ward signs on",body:'A single sheet, signed in four different hands, carries the ward into the network. "We will answer," it reads, "as long as the mail keeps moving." Below the signatures, a date was left blank for the clerk to fill.',reaction:"Clocktower Ward answers: all four faces strike, together, for the first time."}],museum_after_dark:[{id:"ma1",districtId:"museum_after_dark",slot:1,sender:"Curator Vale",subject:"The wing lit for one",body:'The museum never opens its eastern wing after dark — except, Vale notes, for the night the mail arrived. She hung a single lamp so a clerk could read the row of brass plates in peace. "History stays," she wrote, "if someone keeps the lights willing to show it."',reaction:"Museum After Dark answers: a door unlatches, quietly, on its own."},{id:"ma2",districtId:"museum_after_dark",slot:2,sender:"A voice from Case 12",subject:"Do not cover us",body:'A note folded inside a velvet case. "We were the ones who talked to the dark," it reads in neat, old-fashioned script. "Now that talk has a route, do not put the cloths back over us." No signature. The case label lists no artist.',reaction:"Museum After Dark answers: a single case light stays lit against the rule."},{id:"ma3",districtId:"museum_after_dark",slot:3,sender:"The Night Guard",subject:"The last name on the wall",body:'The museum keeps a wall of names of those who kept it at night. The guard added one more at the end, with room after it. "A name that arrives by post," he wrote, "counts as having been here." The ink is still wet.',reaction:"Museum After Dark answers: the hall rings like a struck glass, just once."}],rooftop_gardens:[{id:"rg1",districtId:"rooftop_gardens",slot:1,sender:"Sister Fern",subject:"Water, spared",body:'The gardens live on what the rains give them. Sister Fern saved a full jar "for the route," so the couriers would have something standing between the way-stops. "Even the mail," she wrote, trailing a leaf, "needs a drink before it climbs."',reaction:"Rooftop Gardens answers: a vine reaches one leaf toward the lane."},{id:"rg2",districtId:"rooftop_gardens",slot:2,sender:"The Beekeepers of the roof",subject:"A hive in the route",body:'They set the hive beside the highest sorting ledge, where the drift of envelopes passes. "The bees count," their note insists, "and they like the weight of mail riding the same wind." Honey drips over the word "welcome."',reaction:"Rooftop Gardens answers: a low, green hum under the roof tiles."},{id:"rg3",districtId:"rooftop_gardens",slot:3,sender:"The Gardener Who Stays",subject:"Seeds, one per route",body:'He pressed a small seed into every envelope he sent. "Grow one for each road you reopen," he wrote. "By spring this city will be a garden that answers by name." The packet is heavy with humid soil and stubborn hope.',reaction:"Rooftop Gardens answers: green threads curl up along the outermost lane."}],canal_of_echoes:[{id:"ce1",districtId:"canal_of_echoes",slot:1,sender:"The Singing Ferryman",subject:"A fare of silence",body:'The canals carry sound farther than they carry boats, and the ferryman calls across at night. He sent his fare as a single held note, folded into paper, "so the clerk would hear the district before seeing it." The note still vibrates faintly.',reaction:"Canal of Echoes answers: a whisper slides the whole length of the water."},{id:"ce2",districtId:"canal_of_echoes",slot:2,sender:"The Barge Children",subject:"Things the water returns",body:'The children fish lost mail out of the canal and press it flat on the stones to dry. Their packet holds nothing stolen — only what the water gave back. "We are the last stop for the lost," they wrote, "send us the ones you cannot reach."',reaction:"Canal of Echoes answers: ripples map themselves into a route on the surface."},{id:"ce3",districtId:"canal_of_echoes",slot:3,sender:"The Voice Under the Bridge",subject:"An address that travels",body:`A single sheet, one line: "Whatever you build, build a place the far ones can write to." No sender's name, but a worn snail-shell sat in the fold, addressed on its side in faint chalk. The shell is warm to the touch.`,reaction:"Canal of Echoes answers: the whole canal carries the name back in one long chord."}],moonlit_arcade:[{id:"ml1",districtId:"moonlit_arcade",slot:1,sender:"The ticket-taker who counts stubs by lamplight",subject:"A perforated moon ticket",body:'Every night she counts the stubs nobody claimed and tickets the ones still warm. "A stub is a promise somebody made," she wrote, "and this one was yours to carry." Her lamp gutters exactly once, like a nod.',reaction:"Moonlit Arcade answers: she stamps the letter VOID, then frames it behind the glass anyway."},{id:"ml2",districtId:"moonlit_arcade",slot:2,sender:"An initials-only score-card rival, initials worn off",subject:"A spiral of three linked tickets",body:'The score card arrived tallied to the last game but never signed — whoever held the crown wore the letters off their own name first. The margin reads: "Your turn. Initials optional."',reaction:"Moonlit Arcade answers: the top-score line quietly changes one letter: N.C."},{id:"ml3",districtId:"moonlit_arcade",slot:3,sender:"The carousel's last painter, retired twice",subject:"Chipped gold leaf",body:'He retired the brushes twice and the carousel twice refused to notice. Tonight a fleck of gold leaf rode the envelope like it knew the way home. "One horse," he wrote. "That is all a painter owes the dark."',reaction:"Moonlit Arcade answers: he repaints exactly one horse in the envelope's blue, then stops again."}],glasshouse_quarter:[{id:"gq1",districtId:"glasshouse_quarter",slot:1,sender:"A night-blooming botanist with patient gloves",subject:"Pressed violet",body:"She works the beds only after the lamps are low, when the glass cools enough to hold a breath. Between two pages she has kept every petal the post ever carried — a garden that blooms on paper.",reaction:"Glasshouse Quarter answers: she slides the envelope between two glass plates and labels the species *epistola*."},{id:"gq2",districtId:"glasshouse_quarter",slot:2,sender:"Two siblings who argued by bouquet for a decade",subject:"Twin seeds on one stem",body:'Ten years of roses thornier than the last, then tulips sharper than those. The packet holds two seeds fused at the waist: "We agree," it reads, "only that the other should hear about it first."',reaction:"Glasshouse Quarter answers: each plants a thank-you at opposite ends of the same bed; truce by geography."},{id:"gq3",districtId:"glasshouse_quarter",slot:3,sender:"The greenhouse itself, written in humidity",subject:"Fern-shadow blot",body:"No hand wrote this one. The condensation gathered through the night in fern-shadow script and the blot dried in the shape of a name only the panes use. It is addressed to the building, care of you.",reaction:"Glasshouse Quarter answers: one pane blooms frost mid-summer, shaped like a stamp corner."}],sleepless_library:[{id:"sl1",districtId:"sleepless_library",slot:1,sender:"A cataloguer who keeps shelf-space for unwritten books",subject:"A blank spine",body:'Every shelf leaves exactly one gap for the books that have not happened yet. "The catalogue is faith, not record," the note reads. "Keep my gap dusted. Something will want it."',reaction:"Sleepless Library answers: she files the letter under FORTHCOMING and dusts the gap around it."},{id:"sl2",districtId:"sleepless_library",slot:2,sender:"Twin readers who borrow each other's endings",subject:"A mirrored bookplate",body:"They read the same books in mirrored order and have never once agreed on a final page. The bookplate in the envelope is printed twice, flipped — each insists the other side is the front.",reaction:"Sleepless Library answers: both write back the same night, each claiming the other's last page was better."},{id:"sl3",districtId:"sleepless_library",slot:3,sender:"The author, postmarked from inside the stacks' future",subject:"Ink not yet dry",body:'Dated years from now, stamped somewhere the map has not reached. "Finish the collection," it says. "I am nearly done writing it." The ink was still wet — is, perhaps, still not dry.',reaction:"Sleepless Library answers: it returns a library card bearing the Clerk's signature — dated years from now."}],cloudline_station:[{id:"cs1",districtId:"cloudline_station",slot:1,sender:"The rigging-gaffer who ties knots that remember",subject:"The knot that holds",body:'Every knot she ties is one that has held a slipstream aloft longer than anyone trusted. "A good knot," she writes, "earns the weight it is asked to carry." Her stamp is a laced loop-knot.',reaction:'Cloudline Station answers: she hauls the letter up by hand-line rather than trust the winch — "so it arrives earned".'},{id:"cs2",districtId:"cloudline_station",slot:2,sender:"A thermal-chaser who forecasts weather nobody else can feel",subject:"A warm kind of forecast",body:'He reads the updrafts the way others read ink — by feel, a half-second before they settle into proof. Three rising ring-gusts form his stamp. "Ride what I felt first," the note says, "and the mail is always on time."',reaction:"Cloudline Station answers: he releases a stamped slip into the same thermal; it lands back at the office an hour later, warm."},{id:"cs3",districtId:"cloudline_station",slot:3,sender:"The last signal-kite keeper of the old night mail",subject:"A kite tethered to a wax moon",body:'The keepers were said to be gone, and the big brass kites with them. Not all. One still flies the highest line, and on its tail-tag is a kite tethered to a wax moon. "Kept it aloft for you, Clerk."',reaction:"Cloudline Station answers: he ties the letter to the highest kite; at dawn the whole platform reads it against the light."}],aurora_borough:[{id:"ab1",districtId:"aurora_borough",slot:1,sender:"A sign-painter mixing colors with no names yet",subject:"A brushstroke horizon",body:'She grinds pigment for hues the street has no word for yet, and skims the nap of the sky off the top. Her stamp is a single brushstroke horizon. "Name this one," the note challenges, "and the sign is yours."',reaction:"Aurora Borough answers: she re-letters her own shop sign overnight, adding one line: REPLIES RECEIVED."},{id:"ab2",districtId:"aurora_borough",slot:2,sender:"Twin bakers whose feud is conducted entirely in icing",subject:"A split piped rosette",body:'Two ovens, one family, and a rivalry settled only in sugar. The rosette on the envelope is piped in two halves, each to a different recipe. "Send this," one insists, "so we can stop talking."',reaction:"Aurora Borough answers: each pipes the thank-you onto a loaf sent to the other; truce by sugar."},{id:"ab3",districtId:"aurora_borough",slot:3,sender:"The borough lamplighter who works by aurora-glow",subject:"A lantern filled with ribboned light",body:'He tends lamps that need no flame, only the wandering color that hangs over the rooftops on clear nights. His stamp is a lantern filled with ribboned light. "It shines brightest after the letters arrive."',reaction:"Aurora Borough answers: he hangs the letter inside the lamp glass; for one night the whole street glows in answer."}],last_light_observatory:[{id:"llo1",districtId:"last_light_observatory",slot:1,sender:"The keeper of the tide-clock, who notes the sky's appointments",subject:"An inscribed brass dial",body:'The tide-clock keeps appointments no one else schedules — comets, conjunctions, the slow breathing of the far weather. Its dial, inscribed with a single arrow, is the stamp. "Arrivals are the only schedule I trust."',reaction:'Last Light Observatory answers: he logs the letter as "received, on schedule, eleven nights early".'},{id:"llo2",districtId:"last_light_observatory",slot:2,sender:"A retired comet-cartographer with ink-stained gloves",subject:"A long-tailed comet, ink still wet",body:'She mapped orbits until her hands forgot their own borders, then kept mapping for the joy of it. Her comet-stamp is drawn in still-wet ink. "I redrew the sky without you," she teases, "and the office is now at the center."',reaction:"Last Light Observatory answers: she redraws her last map, placing the office at the center."},{id:"llo3",districtId:"last_light_observatory",slot:3,sender:"The observatory dome itself, turning on old bearings",subject:"A lens-iris closed around a stamp",body:'The dome turns on worn bearings older than most street names, and tonight it turns not toward the sky but toward the city. Its stamp is a lens-iris closed around a postmark. "For the clerk who made the city face itself."',reaction:"Last Light Observatory answers: it flashes the reply signal once more, just for the Clerk."}]};function Kd(){const n=Ut.map(i=>i.id),e=[...n.filter(i=>Ys[i]),...Object.keys(Ys).filter(i=>n.indexOf(i)<0)],t=[];for(const i of e){const r=Ys[i]??[];for(const s of[...r].sort((a,o)=>a.slot-o.slot))t.push(s)}return t}function os(n,e){if(n.ch2.morningPost.held>0)return!0;if(n.ch2.morningPost.lastClaimTs==null)return!1;const t=Bi.cadenceH*36e5;return e-n.ch2.morningPost.lastClaimTs>=t}function X_(n,e){if(!os(n,e))return 0;const t=Ut[n.districtIndex]?.id,i=t?Bi.grantByFrontier[t]??0:0;return i<=0?0:(Wi(n,i),n.ch2.morningPost.held=0,n.ch2.morningPost.lastClaimTs=e,i)}function q_(n,e){n.ch2.morningPost.lastClaimTs==null&&n.districtIndex>=2&&(n.ch2.morningPost.lastClaimTs=e-Bi.cadenceH*36e5,n.ch2.morningPost.held=Bi.maxHeld)}function Y_(n){const e=n.hall.F9??0,t=Zt.F9;return e>=5?t.wanderCadenceT5:e>=4?t.wanderCadenceT4:e>=3?t.wanderCadenceT3:e>=1?t.wanderCadenceT1:t.wanderCadenceBase}function j_(n){const e=n.hall.F9??0,t=Zt.F9;return e>=5?t.wanderGrandChanceT5:e>=4?t.wanderGrandChanceT4:e>=3?t.wanderGrandChanceT3:Qn.grandChance}function K_(n){const e=n.hall.F9??0,t=Zt.F9;return e>=5?t.wanderSealChanceT5:e>=4?t.wanderSealChanceT4:e>=2?t.wanderSealChanceT2:Qn.sealChance}function Z_(n,e){const t=el(n),i=n.hall.F9??0,r=Zt.F9,s=i>=5?r.wanderRewardMultT5:i>=4?r.wanderRewardMultT4:i>=2?r.wanderRewardMultT2:1,a=Math.floor(e==="grand"?t*Qn.grandRewardLetterMult:t*Qn.normalRewardLetterMult*s);return Wi(n,a),e==="grand"&&(n.ch2.waxSeals+=Qn.grandWaxSeals),a}function J_(n,e,t){if(t>=Qn.maxConcurrent||n.districtIndex<2)return!1;const i=Y_(n)*1e3;return e>=i}function Zd(n){return Vi.recipes.find(e=>e.id===n)}function Jd(n,e){const t=Ut.findIndex(i=>i.id===e.available);return t>=0&&n.districtIndex>=t}function Qd(n,e){for(const[t,i]of Object.entries(e.stamps))if((n.ch2.stampInventory[t]??0)<i)return!1;return!0}function Q_(n,e,t){const i=Zd(e);if(!i||!Jd(n,i)||!Qd(n,i)||n.ch2.specialDeliveries.active.length>=Vi.maxActiveTimers)return!1;for(const[r,s]of Object.entries(i.stamps))n.ch2.stampInventory[r]=(n.ch2.stampInventory[r]??0)-s;return n.ch2.specialDeliveries.active.push({recipeId:e,endTs:t+Math.round(i.timerH*36e5),claimed:!1}),!0}function ev(n,e,t){const i=n.ch2.specialDeliveries.active.find(r=>r.recipeId===e&&!r.claimed);return!!i&&t>=i.endTs}function tv(n,e,t){const i=n.ch2.specialDeliveries.active.find(c=>c.recipeId===e&&!c.claimed);if(!i||t<i.endTs)return 0;const r=Zd(e);if(!r)return 0;const s=zi(n);let a;if(s)a=Pd;else{const c=vn(n);if(!c)return 0;a=_n[c].deliveryList}let o=Math.floor(a*r.rewardPct);if(r.rush?(o=0,!n.ch2.rush.held&&n.ch2.rush.activeEndTs==null&&(n.ch2.rush.held=!0,Fe(n,ke.rushGrant,{active_s:Js.activeS}))):Wi(n,o),i.claimed=!0,n.ch2.specialDeliveries.done.push({...i}),n.ch2.specialDeliveries.active=n.ch2.specialDeliveries.active.filter(c=>c!==i),!s){const c=n.ch4.sdRepeat.preReply;c.includes(e)||c.push(e)}return o}function nv(n,e){return!n.ch2.rush.held||n.ch2.rush.activeEndTs!=null&&e<n.ch2.rush.activeEndTs?!1:(n.ch2.rush.held=!1,n.ch2.rush.activeEndTs=e+Js.activeS*1e3,Fe(n,ke.rushActivate,{active_s:Js.activeS,ends_local_ts:n.ch2.rush.activeEndTs}),!0)}function Uo(n,e){const t=n.ch2.rush.activeEndTs,i=t!=null&&e<t,r=n.rushActive;return n.rushActive=i,r===!0&&!i&&Fe(n,ke.rushExpire,{end_local_ts:t??null}),i}function iv(n){n.ch2.waxSeals+=1}function eh(n,e){const t=Dd[e.districtId];if(!t)return!1;const i=t[e.slot-1];return i==null?!1:(n.ch2.postcardCounters[e.districtId]??0)>=i}function js(n){return Kd().map(e=>({story:e,unlocked:eh(n,e),read:n.ch2.postcards.read.includes(e.id)}))}function rv(n){return js(n).filter(e=>e.unlocked&&!e.read).length}function sv(n,e){return n.ch2.postcards.sealAwarded.includes(e)}function av(n,e){const t=Kd().find(i=>i.id===e);return!t||!eh(n,t)?!1:(n.ch2.postcards.read.includes(e)||(n.ch2.postcards.read.push(e),t.slot===3&&!sv(n,t.districtId)&&(n.ch2.postcards.sealAwarded.push(t.districtId),iv(n))),!0)}function No(n){const e=new Date(n);return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function ta(n,e){const t=q0.table;if(!t.length)return null;const i=(n.blocking.installDayIndex+No(e)+7*1e4)%t.length;return t[i]??null}function ov(n,e){const t=ta(n,e);return t?{id:t.id,slot:t.slot,deskCapX:t.deskCapX??1,routeX:t.routeX??1,poolX:t.poolX??1,refillX:t.refillX??1,psMaxAdd:t.psMaxAdd??0,rampX:t.rampX??1,rampMinS:t.rampMinS??0,satchelX:t.satchelX??1,ledgerAccrualX:t.ledgerAccrualX??1,stampPX:t.stampPX??1,lampSealX:t.lampSealX??1,lampGrandX:t.lampGrandX??1}:{...kd}}function lv(n,e){const t=ta(n,e),i=n.liveMod?.id??null,r=n.liveMod==null,s=ov(n,e);return n.liveMod=s,r?Fe(n,ke.modShow,{mod_id:s.id,day_index:No(e),ends_local_ts:Oo(e)}):t&&i!==null&&i!==t.id&&Fe(n,ke.modRotate,{mod_id:t.id,day_index:No(e),ends_local_ts:Oo(e)}),t}function Oo(n){const e=new Date(n);return new Date(e.getFullYear(),e.getMonth(),e.getDate()+1).getTime()}function cv(n,e=Date.now()){n.lastLedgerTs=e,n.savedAt=e}function fs(n=Date.now()){const e=new Date(n);return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function dv(n,e,t=Date.now()){const i=fs(t);if(n.ch5?.doubler&&n.ch5.doubler.day!==i&&(n.ch5.doubler.day=i,n.ch5.doubler.used=0),n.doublerDay=i,n.ch5?.doubler){if(n.ch5.doubler.used>=3)return!1;n.ch5.doubler.used+=1,n.doublersUsed=n.ch5.doubler.used}else{if(n.doublersUsed>=3)return!1;n.doublersUsed+=1}return n.postage+=e,n.totalEarnedRun+=e,!0}const hv=60,Uc=new WeakMap;function uv(n,e){let t=Uc.get(n);const i=Math.floor(n.blocking.nightMs/6e4);if(!t||t.minuteIdx!==i){if(t)for(n.blocking.ledgerRing.push(t.acc);n.blocking.ledgerRing.length>Id.medianRingMax;)n.blocking.ledgerRing.shift();t={minuteIdx:i,acc:0},Uc.set(n,t)}e>0&&(t.acc+=e)}function fv(n){const e=n.blocking.ledgerRing;if(!e.length)return null;const t=[...e].sort((s,a)=>s-a),i=t.length;return(i%2===1?t[(i-1)/2]:(t[i/2-1]+t[i/2])/2)/60}function Nc(n){const e=n.hall.F8??0,t=Zt.F8;return e>=3&&t.capHoursAfterT3!=null?t.capHoursAfterT3:e>=2&&t.capHoursAfterT2!=null?t.capHoursAfterT2:e>=1&&t.capHoursAfter!=null?t.capHoursAfter:hs.capHours}function pv(n){const e=n.hall.F3??0,t=Zt.F3;return e>=4&&t.awayFractionAfterT4!=null?t.awayFractionAfterT4:e>=1&&t.awayFractionAfter!=null?t.awayFractionAfter:hs.awayFraction}function mv(n,e,t){if(e<=0)return;const i=e/Math.max(1e-9,t),r=Math.min(1,t/hv);n.blocking.snapshotRate+=(i-n.blocking.snapshotRate)*r}function Oc(n,e=Date.now()){const t=Math.max(0,(e-n.lastLedgerTs)/1e3),i=n.blocking.snapshotRate,r=fv(n),s=r??i;if(t<hs.neverEmptyElapsedS||s<=0){const m={kind:"never-empty",elapsedS:t,capS:Nc(n)*3600,base:0,doubled:!1,doublerLeftToday:Bc(n),snapshotRate:s,medianRate:r,raw:0,trim:0,capReference:vn(n)?"frontier":n.ch4.replyFired?"terminal":null};return n.lastLedgerTs>0&&t>=1&&Fe(n,ke.ledgerReturn,{elapsed_s:t,credited:0,snapshot_rate:s,doubled:!1}),n.lastLedgerTs=e,n.lastLedgerTs>0?m:null}const a=Nc(n)*3600,c=Math.min(t,a)*pv(n)*s*(n.liveMod?.ledgerAccrualX??1);let l=c,h=0;const d=vn(n),f=n.ch4.replyFired?"terminal":d?"frontier":null;if(f!=null){const m=f==="terminal"?Pd:Math.max(0,_n[d].deliveryList-n.blocking.gates[d].listValue),g=Id.claimCapFracOfFrontierRem*m;l>g&&(h=l-g,l=g)}return n.totalEarnedRun+=l,Wi(n,l),Fe(n,ke.ledgerClaim,{elapsed_s:t,cap_h:a/3600,median_rate:r,ema_rate:i,raw:c,posted:l,trimmed:h>0,cap_reference:f}),Fe(n,ke.ledgerReturn,{elapsed_s:t,credited:l,snapshot_rate:s,doubled:!1}),n.lastLedgerTs=e,{kind:"ledger",elapsedS:t,capS:a,base:l,doubled:!1,doublerLeftToday:Bc(n),snapshotRate:s,medianRate:r,raw:c,trim:h,capReference:f}}function Bc(n,e=Date.now()){const t=fs(e),i=n.ch5?.doubler,r=i?i.day===t?i.used:0:n.doublerDay===t?n.doublersUsed:0;return Math.max(0,hs.doublerMaxPer24h-r)}function gv(n,e){return e.kind!=="ledger"||e.doubled||!dv(n,e.base)?!1:(Wi(n,e.base),e.doubled=!0,!0)}function dl(n){return n.blocking.ch2FiredEver}function qt(n,e){return dl(n).includes(e)}function tn(n,e,t={}){return dl(n).push(e.beat),Fe(n,ke.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight,...t}}const zc=new WeakMap;function la(n){let e=zc.get(n);return e||(e={primed:!1,eraStartRun:null,rushPrev:"empty",maRvPrev:!1,runSeen:n.run,wallAgeS:0,returns:[],nudgeFiredThisRun:!1,pending:[]},zc.set(n,e)),e}function ca(n){return n.ch2.districtsAnswered.includes(5)}function hl(n){const e=la(n);return e.eraStartRun==null?-1:Math.max(0,n.run-e.eraStartRun)}function _v(n){const e=n.hall.F4??0,i=It.backlogRefillBase*Math.pow(It.backlogRefillScale,e)*(n.liveMod?.refillX??1)*Fd(n),r=Jo(n)/It.satchelBufferSeconds,s=Qo(n);return{flipped:r<i&&r<s,supplyRate:i,satchelRate:r,routeRate:s}}function th(n){const e=la(n),t=oa(n),i=t>0&&t<1?(1-t)/t*(e.wallAgeS/3600):null,r=e.returns;return{rows:r,deltas:r.map(s=>s.delta),etaH:i,sealShare:t,wallAgeS:e.wallAgeS,nudge:!1,armed:e.wallAgeS>=es.returnArmedFloorS,flatD1:r.length>=1?r[r.length-1].delta:null,flatD2:r.length>=2?r[r.length-2].delta:null}}function Hc(n,e){const t=la(n);if(!ca(n))return;t.eraStartRun==null&&(t.eraStartRun=n.run),t.runSeen!==n.run&&(t.runSeen=n.run,t.wallAgeS=0,t.returns=[],t.nudgeFiredThisRun=!1),t.wallAgeS+=e.elapsedS;const i=us(n.blocking.eRunRaw),r=t.returns.length?t.returns[t.returns.length-1].pendingAfter:vv(n,t),s=oa(n),a=s>0&&s<1?(1-s)/s*(t.wallAgeS/3600):null;t.returns.push({idx:t.returns.length+1,pendingAfter:i,delta:i-r,sealShare:s,etaH:a,elapsedS:e.elapsedS,wallAgeS:t.wallAgeS}),hl(n)===0&&(t.returns.length===1&&!qt(n,pt.longReturn.beat)&&t.pending.push(tn(n,pt.longReturn)),t.returns.length===2&&!qt(n,pt.ledgerBasis.beat)&&t.pending.push(tn(n,pt.ledgerBasis)));const o=vn(n),c=o?!n.blocking.gates[o].listDone:!1,l=t.returns.length>=2?t.returns[t.returns.length-2].sealShare:null,h=l!=null&&s<l,d=t.returns.length>=1?t.returns[t.returns.length-1].delta:null,f=t.returns.length>=2?t.returns[t.returns.length-2].delta:null,m=d!=null&&f!=null&&d<=es.returnFlatMaxStarsPerReturn&&f<=es.returnFlatMaxStarsPerReturn,g=t.wallAgeS>=es.returnArmedFloorS;!t.nudgeFiredThisRun&&!h&&c&&g&&m&&(a??0)>es.nudgeSealEtaHours&&(t.nudgeFiredThisRun=!0,Fe(n,ke.returnNudge,{cycle_age_s:Math.round(t.wallAgeS),pending_d1:d,pending_d2:f,seal_share:s,seal_eta_h:a}),t.pending.push({beat:"ch3.voyage-nudge",speaker:null,copy:null,voyageNudge:!0}))}function vv(n,e){const t=e.returns[e.returns.length-1];return t?t.pendingAfter-t.delta:0}function xv(n,e){const t=[];if(!ca(n))return t;const i=r_.find(r=>r.districtIndex===e);if(i){const r=`ch3.vignette.${i.id}`;qt(n,r)||(dl(n).push(r),Fe(n,ke.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:`${i.body}
— ${i.speakerLine}`,vignette:i})),i.id==="moonlit_arcade"&&!qt(n,pt.maAnswer.beat)&&t.push(tn(n,pt.maAnswer)),i.id==="glasshouse_quarter"&&!qt(n,pt.rushPreview.beat)&&t.push(tn(n,pt.rushPreview)),i.id==="sleepless_library"&&(qt(n,pt.slClose1.beat)||t.push(tn(n,pt.slClose1)),qt(n,pt.slClose2.beat)||t.push(tn(n,pt.slClose2)),t.push({beat:"ch3.west-lean",speaker:null,copy:null,chord:{district:null,composite:!0}}))}if(e>=6){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(a=>a.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+8,district:e});const s=[6,7,8].filter(a=>n.ch2.districtsAnswered.includes(a)).length;Fe(n,ke.mapWestward,{cycle:hl(n),threads_lit:s})}return t}function yv(n,e){ca(n)&&Fe(n,ke.cycleClose,{wall_s:Math.round(e.wallS),sessions:e.sessions,claim:e.claimStars,ledger_share:e.ledgerShare,furn_share:e.furnShare,modifier_slots:e.modSlots.join(","),rush_spent:e.rushSpent})}function bv(n,e,t,i){const r=[],s=la(n);if(Uo(n,e),!ca(n))return r;s.eraStartRun==null&&(s.eraStartRun=n.run),s.runSeen!==n.run&&(s.runSeen=n.run,s.wallAgeS=0,s.returns=[],s.nudgeFiredThisRun=!1),s.wallAgeS+=t,uv(n,i);const a=n.blocking.nightMs/1e3,o=hl(n);s.primed||(s.primed=!0,s.rushPrev=Vc(n,e),s.maRvPrev=n.blocking.gates.moonlit_arcade.rvDone),o===0&&(qt(n,pt.thirdWind.beat)||r.push(tn(n,pt.thirdWind)),a>=4&&!qt(n,pt.f11Rail.beat)&&r.push(tn(n,pt.f11Rail,{pulseFamilies:["satchel","route"]})),a>=7&&!qt(n,pt.f12Rail.beat)&&r.push(tn(n,pt.f12Rail)),n.liveMod?.id&&!qt(n,pt.modIntro.beat)&&r.push(tn(n,pt.modIntro))),o===1&&!qt(n,pt.modTiming.beat)&&r.push(tn(n,pt.modTiming));const c=n.blocking.gates.moonlit_arcade.rvDone;c&&!s.maRvPrev&&!qt(n,pt.voyageFrame.beat)&&r.push(tn(n,pt.voyageFrame)),s.maRvPrev=c;const l=Vc(n,e);return l==="held"&&s.rushPrev!=="held"&&!qt(n,pt.rushGrant.beat)&&r.push(tn(n,pt.rushGrant)),l==="active"&&s.rushPrev!=="active"&&!qt(n,pt.rushDeploy.beat)&&r.push(tn(n,pt.rushDeploy)),s.rushPrev=l,s.pending.length&&(r.push(...s.pending),s.pending=[]),r}function Vc(n,e){const t=n.ch2.rush;return t.held?"held":t.activeEndTs!=null&&e<t.activeEndTs?"active":t.activeEndTs!=null?"spent":"empty"}function Mv(n,e){const t=Vi.recipes.find(a=>a.id===e);if(!t)return!1;const i=t.availableWhenAnswered??t.available,r=Ut.findIndex(a=>a.id===i);return!(r<0||!(t.availableWhenAnswered?n.ch2.districtsAnswered.includes(r):n.districtIndex>=r)||t.rush&&(n.ch2.rush.held||n.ch2.rush.activeEndTs!=null&&n.rushActive===!0))}const Sv={dawn:{copy:"File your night, Clerk. The city will keep until tomorrow."}},Ga={postRule:"dawn is a memory, not a state",replayLabel:"Remember the first morning"},Gc=[2,2,3,3,4,4,5];function wv(n){return n<=0?0:Gc[Math.min(n,Gc.length)-1]??0}const Ev={maxPerDay:3},Kn={modifiersPerLocalDay:1,sdActiveTimersMax:3,morningPostHeldMax:1,morningPostCadenceMinS:28800,doublerPerLocalDay:3,timerSourcesEnumerated:["modifier_window","special_delivery","morning_post","doubler_day_window"],sdBlockedCard:n=>`All satchels are out tonight — the next one returns at ${n}.`,stripSlots:["sky","hourglasses","stamp","pips"]},Wc={banner:"Not enabled in this web build.",footer:"If this ever goes live, its exact contents and price appear here before anyone is charged."},Tv=[{id:"license",title:"Night Clerk License",priceLine:"$7.99",frame:"brass",motif:"lamp",body:["Would add, permanently: 2 auto-sort slots — two desk pads keep sorting unattended at base rate","longer offline buffer — Night Ledger cap 8 h → 12 h","a brass desk lamp for the shelf (cosmetic)."],honesty:"None of this is required to finish the ladder. Every district, every star, every shelf item is earnable without it."},{id:"priority",title:"Priority Post",priceLine:"$3.99 / month",frame:"plum-neutral",motif:"stamp-stack",body:["Nothing is listed, because nothing is promised: its disposition is optional, revisited only once a live cadence exists."],honesty:null},{id:"pack40",title:"Wax Seal pack — 40",priceLine:"$1.99",frame:"parchment",motif:"wax-40",seals:40,body:["Would buy 40 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"pack100",title:"Wax Seal pack — 100",priceLine:"$3.99",frame:"parchment",motif:"wax-100",seals:100,body:["Would buy 100 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"pack230",title:"Wax Seal pack — 230",priceLine:"$6.99",frame:"parchment",motif:"wax-230",seals:230,body:["Would buy 230 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"album",title:"Seal Album",priceLine:"$4.99 to crack",frame:"plum",motif:"album-meter",body:["Your earned Wax Seals: {wax} — they are all yours already; nothing is withheld or held.","Album preview: it would hold {album_credits} seal-credits today (shadow meter: +0.5 per Wax Seal you earn · cap {cap}) · cracking it would pay the meter out once, empty it, and raise the cap +50 per album level (level {level})."],honesty:null}],Av={text:"Never built, by design: buying value that play already banked · premium-currency packs · timed-boost currencies · premium access tiers · any paid random reward."},Cv="Office Papers",zs={shadowCreditsPerSeal:.5,capCredits:250,capRaisePerLevel:50},na={quietHoursLocal:{fromH:22,toH:8}},Hs={cardTitle:"The office can knock, if you let it.",cardBody:"Off by default. If you turn them on: when the ledger is full (once per gap) · tonight’s sky read (once a day, hour of your choosing) · when a mastery target completes (when it happens — rarely). Quiet from 22:00 to 08:00, always. Every timer in the office shows its exact end time whether or not you ever turn these on.",turnOn:"Turn them on",notNow:"Not now"};function Rv(n){const e=Math.floor(n/1e4),t=Math.floor(n%1e4/100),i=n%100,r=new Date(e,t-1,i);return r.setDate(r.getDate()-1),r.getFullYear()*1e4+(r.getMonth()+1)*100+r.getDate()}function Lv(n){return wv(n)}function Pv(n,e=Date.now()){const t=fs(e),i=n.ch5.streak;if(i.lastKey===t)return 0;let r;i.lastKey===0?r=1:i.lastKey===Rv(t)?r=i.count+1:r=1;const s=Lv(r);return s<=0?0:(i.count=r,i.lastKey=t,n.ch2.waxSeals+=s,Fe(n,ke.streakGrant,{day:r,seals:s}),s)}function Wa(n,e=Date.now()){const t=fs(e),i=n.ch5.doubler,r=i.day===t?i.used:0;return Math.max(0,Ev.maxPerDay-r)}function Dv(n,e=Date.now(),t=0){const i=Kn.sdActiveTimersMax,r=n.ch2.morningPost.held,s=n.ch5.doubler.day===fs(e)?n.ch5.doubler.used:0,a=t>=Kn.modifiersPerLocalDay,o=n.ch2.specialDeliveries.active.length>=i,c=r>=Kn.morningPostHeldMax,l=s>=Kn.doublerPerLocalDay,h=a||o||c||l,d=o?Kn.sdBlockedCard("--:--"):"";return{modifiersToday:t,sdActiveTimers:n.ch2.specialDeliveries.active.length,morningPostHeld:r,doublerUsedToday:s,atCeiling:h,note:d,timerSourcesMatch:!0}}function nh(n){return!n.ch5.notifications.inviteShown}function $c(n){n.ch5.notifications.inviteShown||(n.ch5.notifications.inviteShown=!0,Fe(n,ke.notifInvite,{}))}function Xc(n,e){n.ch5.notifications.optIn=e,e&&Fe(n,ke.notifOptIn,{quiet_from:na.quietHoursLocal.fromH,quiet_to:na.quietHoursLocal.toH})}function kv(n){return zi(n)&&!n.ch5.dawn.fired}function Iv(n,e=!1){return!zi(n)||!e&&n.ch5.dawn.fired?!1:(e||(n.ch5.dawn.fired=!0),Fe(n,e?ke.dawnReplay:ke.dawnFire,{replay:e}),!0)}const Wn={lantern_lane:{glyph:"◈",thread:T.routeMint,addr:"Lantern Lane, Window 3 · the night route",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="30" y="4" width="14" height="6" rx="2" fill="#D6A84B"/><path d="M28 13h18l-3 14a6 6 0 0 1-12 0z" fill="#D6A84B"/><rect x="34" y="31" width="6" height="6" rx="1" fill="#F4E7C7"/><path d="M20 38h34v8H20z" fill="#17233F"/></svg>'},rainmarket:{glyph:"☂",thread:T.routeMint,addr:"Rainmarket, Marta’s awnings · the wet stalls",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M12 24h50l-6 8H18z" fill="#C74B55"/><path d="M18 32h4v12h-4zM30 32h4v12h-4zM42 32h4v12h-4zM54 32h4v12h-4z" fill="#6D3E78"/><path d="M8 34a4 3 0 0 0 8 0z" fill="#5B79C8" opacity=".6"/></svg>'},clocktower_ward:{glyph:"◔",thread:T.brass,addr:"Clocktower Ward, the four faces · Keeper of Hours",motif:'<svg viewBox="0 0 74 54" fill="none"><circle cx="37" cy="27" r="14" fill="none" stroke="#D6A84B" stroke-width="2"/><circle cx="37" cy="27" r="3" fill="#17233F"/><path d="M37 27v-8M37 27l6 4" stroke="#17233F" stroke-width="2" stroke-linecap="round"/><path d="M10 45h54" stroke="#17233F" stroke-width="2"/></svg>'},museum_after_dark:{glyph:"🏛",thread:T.plum,addr:"Museum After Dark, eastern wing · Curator Vale",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M14 38h46v5H14z" fill="#6D3E78"/><path d="M14 34h46v4H14z" fill="#3a2b46"/><rect x="8" y="24" width="58" height="10" fill="#6D3E78"/><rect x="18" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="34" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="50" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="8" y="21" width="58" height="3" fill="#6D3E78"/></svg>'},rooftop_gardens:{glyph:"❧",thread:"#a8e6c9",addr:"Rooftop Gardens, the highest ledge · Sister Fern",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M12 44c8-6 12-18 10-30" stroke="#2e5d49" stroke-width="2" fill="none"/><path d="M14 34c6 0 10-3 12-9M16 26c5 1 10-1 14-7M18 40c7-2 10-6 12-12" stroke="#3f6f5a" stroke-width="1.5" fill="none"/><circle cx="40" cy="14" r="5" fill="#a8e6c9" opacity=".9"/></svg>'},canal_of_echoes:{glyph:"⌒",thread:T.moonBlue,addr:"Canal of Echoes, under the bridge · the ferryman",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M8 30a16 16 0 0 1 32 0v0a22 22 0 0 1 26-3" fill="none" stroke="#17233F" stroke-width="3"/><path d="M4 44h66" stroke="#5B79C8" stroke-width="3"/><path d="M10 44c3-2 7-2 10 0M30 44c3-2 7-2 10 0M50 44c3-2 7-2 10 0" stroke="#F4E7C7" stroke-width="1.5"/></svg>'},moonlit_arcade:{glyph:"✦",thread:T.plum,addr:"Moonlit Arcade, the midway · coin-wells and quiet stalls",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="6" y="12" width="15" height="24" rx="2" fill="#1f3050"/><rect x="25" y="12" width="15" height="24" rx="2" fill="#1f3050"/><path d="M6 34h15v4H6zM25 34h15v4H25z" fill="#5B79C8"/><rect x="48" y="18" width="9" height="11" rx="5" fill="#3a2b46"/><circle cx="64" cy="21" r="5" fill="#D6A84B"/><path d="M64 25v-8M60 22h8" stroke="#17233F" stroke-width="1.6"/><path d="M8 44h58" stroke="#17233F" stroke-width="2"/></svg>'},glasshouse_quarter:{glyph:"❀",thread:T.routeMint,addr:"Glasshouse Quarter, the sleeping market row · pressed flowers",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M10 44V28h54v16H10z" fill="#2e5d49" opacity=".9"/><path d="M16 28l6-12 6 12M32 28l5-10 5 10M48 28l6-12 6 12" stroke="#0f3a2e" stroke-width="2"/><rect x="34" y="8" width="6" height="16" rx="2" fill="#17233F"/><circle cx="37" cy="43" r="4" fill="#a8e6c9"/><circle cx="37" cy="43" r="1.5" fill="#17233F"/><path d="M34 48h6" stroke="#17233F" stroke-width="1.6"/></svg>'},sleepless_library:{glyph:"❖",thread:T.moonBlue,addr:"Sleepless Library, the shelf-aisles · lamps that never go out",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="8" y="20" width="58" height="22" rx="2" fill="#3a2b46"/><path d="M14 26h24M14 34h24M46 26h14M46 34h14" stroke="#5B79C8" stroke-width="2"/><path d="M20 46l10-5 8 7 10-8 8 6" stroke="#17233F" stroke-width="2" fill="none"/><rect x="50" y="6" width="16" height="11" rx="1" fill="#F4E7C7" stroke="#17233F"/><path d="M53 10h10M53 13h7" stroke="#17233F" stroke-width="1.5"/></svg>'},cloudline_station:{glyph:"Cl",thread:T.routeMint,addr:"Cloudline Station, the cable-yard platforms · mailbag grooms’ hooks",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M8 34h58" stroke="#D6A84B" stroke-width="2"/><path d="M12 34l7-12h10l-4 12M32 34l7-12h10l-4 12M52 34l7-12h10l-4 12" stroke="#17233F" stroke-width="2"/><path d="M10 30c6-4 12-2 14 4M30 30c6-4 12-2 14 4M50 30c6-4 12-2 14 4" stroke="#72D6C1" stroke-width="2" fill="none"/><path d="M20 14a5 5 0 0 1 10 0l-1 4h-8z" fill="#C74B55"/><path d="M48 14a5 5 0 0 1 10 0l-1 4h-8z" fill="#C74B55"/><path d="M6 46h62" stroke="#17233F" stroke-width="2"/></svg>'},aurora_borough:{glyph:"Au",thread:T.plum,addr:"Aurora Quarter, the roaming stalls-and-colonnades · lit awnings",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="6" y="10" width="18" height="26" rx="2" fill="#230f38"/><rect x="28" y="10" width="18" height="26" rx="2" fill="#230f38"/><rect x="50" y="10" width="18" height="26" rx="2" fill="#230f38"/><path d="M4 12h22M26 12h22M48 12h22" stroke="#6D3E78" stroke-width="4" opacity=".85"/><path d="M6 0l18 10v4L6 4zM28 0l18 10v4L28 4zM50 0l18 10v4L50 4z" fill="#5B79C8"/><rect x="28" y="24" width="18" height="12" fill="#F4E7C7"/><path d="M6 44h62" stroke="#17233F" stroke-width="2"/></svg>'},last_light_observatory:{glyph:"Ll",thread:T.moonBlue,addr:"Last Light, the catalogue cliff · the brass lens-house on the stair-tower",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M4 46L40 6l18 40z" fill="#17233F"/><path d="M46 20a9 9 0 0 1 0 16 9 9 0 0 1 0-16z" fill="#5B79C8" opacity=".9"/><circle cx="46" cy="28" r="3" fill="#F4E7C7"/><path d="M40 46l6-14 6 14z" fill="#D6A84B"/><path d="M6 42h6M18 42h6M30 42h6M50 42h6M62 42h6" stroke="#D6A84B" stroke-width="2"/></svg>'}};function qc(n){switch(n){case"clocktower_ward":return"CW";case"museum_after_dark":return"MU";case"rooftop_gardens":return"RG";case"canal_of_echoes":return"CA";case"lantern_lane":return"LL";case"rainmarket":return"RM";case"moonlit_arcade":return"MA";case"glasshouse_quarter":return"GQ";case"sleepless_library":return"SL";case"cloudline_station":return"CL";case"aurora_borough":return"AU";case"last_light_observatory":return"LL";default:return n.slice(0,2).toUpperCase()}}const Fv=[{title:"Postal Circles",body:"Asynchronous shared delivery targets and grades — shipped only if D7 retention and economy simulations support them."},{title:"Expeditions & keepsakes",body:"A keepsake layer fueling old-district reuse; light v1 hooks already reachable through special deliveries."},{title:"Standing Orders",body:"A permanent Compass-Star sink for late-game upgrades. Revisited once a live single-currency loop exists."},{title:"Completion modifier",body:"A Prophecy-style chapter-completion multiplier, deferred per the research modify rule."},{title:"Cloud save · Showcase · 28-day track",body:"Account/cloud continuity, a shelf showcase, and a full mastery track — research-gated behind D1/D7 validation."},{title:"Priority Post decision",body:"Revisited only once a live cadence exists; nothing is promised, and nothing ships hidden behind it."}];class Uv{root;cb;top;meters;seals;sortBtn;plumeFill;plume;panelLayer;ring;sortHeld=!1;reduceMotion;redrawShown=null;sealsCollapsed=!1;lastCoachSig="";postcardsBtn;morningPostBtn;specialBtn;rushBtn;modCard;ledgerChip;voyageNudge=!1;wanderBadge;_state=null;flatChip;meterSig="";officePapersBtn;cadenceStrip;shelf;masteryRing=null;_lastFinale=null;_finaleActive=!1;constructor(e,t,i){this.root=e,this.cb=t,this.reduceMotion=i,this.root.innerHTML="",this.top=this.el("div","hud-top"),this.meters=this.el("div","hud-meters"),this.seals=this.el("div","seal-row"),this.panelLayer=this.el("div","hud-panel-layer"),this.ring=this.el("div","guide-ring"),this.ring.style.display="none";const r=this.el("div","hud-controls");this.plume=this.el("div","plume"),this.plumeFill=this.el("div","plume-fill"),this.plume.appendChild(this.plumeFill);const s=this.el("div","plume-cap");this.plume.appendChild(s),this.sortBtn=this.el("button","sort-btn"),this.sortBtn.textContent=Be.sortHold,this.sortBtn.style.background=T.sealingRed,this.bindSortBtn(),r.appendChild(this.plume),r.appendChild(this.sortBtn),this.root.appendChild(this.top),this.root.appendChild(this.meters),this.root.appendChild(this.seals),this.root.appendChild(this.panelLayer),this.root.appendChild(r),this.root.appendChild(this.ring);const a=this.el("button","seal-toggle");a.textContent="SEALS",a.addEventListener("click",()=>{this.sealsCollapsed=!this.sealsCollapsed,this.seals.classList.toggle("collapsed",this.sealsCollapsed)}),this.root.appendChild(a),this.postcardsBtn=this.el("button","postcards-btn"),this.postcardsBtn.textContent=Be.postcards.toUpperCase(),this.postcardsBtn.addEventListener("click",()=>this.showPostcardsPanel()),this.root.appendChild(this.postcardsBtn),this.officePapersBtn=this.el("button","officepapers-btn"),this.officePapersBtn.textContent=Be.officePapers.toUpperCase(),this.officePapersBtn.addEventListener("click",()=>{this._state&&this.showMonetizationStubs(this._state)}),this.root.appendChild(this.officePapersBtn),this.morningPostBtn=this.el("button","morningpost-btn"),this.morningPostBtn.textContent=Be.morningPost.toUpperCase(),this.morningPostBtn.addEventListener("click",()=>this.showMorningPost()),this.root.appendChild(this.morningPostBtn),this.specialBtn=this.el("button","special-btn"),this.specialBtn.textContent=Be.specialDeliveries.toUpperCase(),this.specialBtn.addEventListener("click",()=>this.showSpecialDeliveries()),this.root.appendChild(this.specialBtn),this.rushBtn=this.el("button","rush-btn"),this.rushBtn.textContent=Be.rushOrder.toUpperCase(),this.rushBtn.addEventListener("click",()=>{this.cb.onUseRush()&&this.rushBtn.classList.add("active")}),this.root.appendChild(this.rushBtn),this.modCard=this.el("div","mod-card"),this.root.appendChild(this.modCard),this.cadenceStrip=this.el("div","cadence-strip"),this.root.appendChild(this.cadenceStrip),this.ledgerChip=this.el("div","ledger-chip"),this.ledgerChip.title=Bs.basis,this.root.appendChild(this.ledgerChip),this.flatChip=this.el("button","flat-chip"),this.flatChip.setAttribute("aria-label","Compass forecast"),this.flatChip.addEventListener("click",()=>this.openRedrawPanel()),this.root.appendChild(this.flatChip),this.wanderBadge=this.el("span","wander-badge"),this.wanderBadge.setAttribute("aria-label","wanderlight drifts by"),this.root.appendChild(this.wanderBadge),this.shelf=this.el("div","pc-shelf"),this.root.appendChild(this.shelf),this.injectCss()}el(e,t){const i=document.createElement(e);return t&&(i.className=t),i}bindSortBtn(){const e=i=>{i.preventDefault(),this.sortHeld=!0,this.sortBtn.classList.add("held"),this.cb.onSortHold(!0)},t=()=>{this.sortHeld&&(this.sortHeld=!1,this.sortBtn.classList.remove("held"),this.cb.onSortHold(!1))};this.sortBtn.addEventListener("pointerdown",e),this.sortBtn.addEventListener("pointerup",t),this.sortBtn.addEventListener("pointercancel",t),this.sortBtn.addEventListener("pointerleave",t)}get modalOpen(){return this.panelLayer.classList.contains("open")}get redrawForecastShown(){return this.redrawShown}updateHud(e,t,i){this._state=e;const r=Ut[e.districtIndex],s=Math.floor(e.blocking.nightMs/1e3),a=`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;this.top.innerHTML=[`<span class="stat"><b>${Be.postage}</b><i>${en(e.postage)}</i></span>`,`<span class="stat"><b>${Be.waxSealsShort}</b><i>${dr(e.ch2.waxSeals)}</i></span>`,`<span class="stat"><b>${Be.stars}</b><i>${dr(e.stars)}</i></span>`,`<span class="stat"><b>${r?r.name:"—"}</b><i>R${e.run+1} ${a}</i></span>`].join("");const o=rv(e);if(this.postcardsBtn.classList.toggle("has-unread",o>0),o>0){if(!this.postcardsBtn.querySelector(".unread-dot")){const w=this.el("span","unread-dot");this.postcardsBtn.appendChild(w)}this.postcardsBtn.setAttribute("aria-label",`${o} new postcard${o===1?"":"s"}`)}else this.postcardsBtn.querySelector(".unread-dot")?.remove();const c=os(e,Date.now());this.morningPostBtn.classList.toggle("visible",c),c?this.morningPostBtn.classList.add("pulse"):this.morningPostBtn.classList.remove("pulse"),this.specialBtn.classList.toggle("visible",e.districtIndex>=2);const l=Date.now(),h=e.ch2.rush.activeEndTs!=null&&l<e.ch2.rush.activeEndTs;if(this.rushBtn.classList.toggle("visible",e.ch2.rush.held||h),this.rushBtn.classList.toggle("active",h),this.rushBtn.classList.toggle("disabled",!e.ch2.rush.held),h&&e.ch2.rush.activeEndTs!=null){const w=new Date(e.ch2.rush.activeEndTs).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});this.rushBtn.title=`${Be.rushActiveUntil} ${w}`}else e.ch2.rush.held&&(this.rushBtn.title=Be.rushHeld);{const E=e.ch2.districtsAnswered.includes(5)?ta(e,Date.now()):null;if(E){const b=kc[E.id],B=new Date(Oo(Date.now())).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),C=ta(e,Date.now()+864e5),L=_v(e);this.modCard.classList.add("visible"),this.modCard.dataset.mod=E.id,this.modCard.innerHTML=`<span class="mod-glyph glyph-${b?.glyph??"rain-glaze"}"></span><span class="mod-name">${b?.name??E.id}</span><span class="mod-ends">${Ic.endsPrefix} ${B}</span><span class="mod-effect">${b?.effectLine??""}</span><span class="mod-forecast">${Ic.forecastDeltaLabel}: ${C?kc[C.id]?.name??C.id:"—"}</span>`+(L.flipped&&E.id==="backlog_surge"?'<span class="mod-chain">satchels bind tonight — the pile outruns the buckles</span>':"")}else this.modCard.classList.remove("visible"),this.modCard.innerHTML=""}if(zi(e)){const E=Dv(e,Date.now());this.cadenceStrip.classList.add("visible"),this.cadenceStrip.innerHTML=`<span class="cs-label">${Be.cadenceStrip}</span><span class="cs-slot">sky ${E.modifiersToday}/${Kn.modifiersPerLocalDay}</span><span class="cs-slot">satchels ${E.sdActiveTimers}/${Kn.sdActiveTimersMax}</span><span class="cs-slot">mail ${E.morningPostHeld}/${Kn.morningPostHeldMax}</span><span class="cs-slot doubler">doubler ${E.doublerUsedToday}/${Kn.doublerPerLocalDay}</span>`+(E.atCeiling?'<span class="cs-note">at the ceiling — on purpose</span>':'<span class="cs-note">within the ceiling</span>')}else this.cadenceStrip.classList.remove("visible"),this.cadenceStrip.innerHTML="";(e.hall.F8??0)>=3?(this.ledgerChip.classList.add("visible"),this.ledgerChip.innerHTML='<span class="hourglass"><i></i><i></i><i></i></span><span class="ledger-cap">8 h</span>'):(this.ledgerChip.classList.remove("visible"),this.ledgerChip.innerHTML="");const d=["desk","satchel","route","inflow"],f=d.map(w=>`${w}:${t.per[w].level}`).join("|");f!==this.meterSig&&(this.meterSig=f,this.meters.innerHTML="",this.buildMeters(d,t));const m=tl(e),g=Math.min(1,Math.max(0,e.perfect/Math.max(1e-6,m)));this.plumeFill.style.height=`${Math.round(g*100)}%`,this.plume.classList.toggle("gold",g>=.999),this.renderSeals(e,i);const x=Fo(e),p={rising:Be.flatRising,settling:Be.flatSettling,level:Be.flatLevel},u=x.nudge?Be.flatNudge:p[x.glyph];this.flatChip.innerHTML=`<span class="flat-pending">${Be.pendingStarsShort} ${dr(x.pending)}</span><span class="flat-label">${u}</span>`,this.flatChip.classList.toggle("flat-card",x.card||x.nudge),this.flatChip.classList.toggle("flat-nudge",x.nudge),this.flatChip.classList.toggle("voyage-nudge",this.voyageNudge),this.flatChip.dataset.glyph=this.voyageNudge?"compass-west":x.glyph}setVoyageNudge(e){this.voyageNudge=e}pulseFamilyBadge(e){const t=this.root.querySelector(`.meter-${e}`);t&&(t.classList.remove(this.reduceMotion?"fam-pulse-static":"fam-pulse"),t.offsetWidth,t.classList.add(this.reduceMotion?"fam-pulse-static":"fam-pulse"),setTimeout(()=>t.classList.remove("fam-pulse","fam-pulse-static"),1300))}buildMeters(e,t){for(const i of e){const r=wc[i],s=t.per[i],a=this.el("button",`meter meter-${i} lvl-${s.level}`);a.dataset.kind=i,a.style.background=r.color;const o=this.el("span",`glyph glyph-${r.glyph}`);a.appendChild(o);const c=this.el("span",`badge badge-${r.badge}`);if(a.appendChild(c),s.level==="choke"){const l=this.el("span","choke-tri");a.appendChild(l)}a.setAttribute("aria-label",`${i} meter ${s.level}`),a.addEventListener("click",()=>this.cb.onOpenPanel(Nv[i])),this.meters.appendChild(a)}}showBottleneckPulse(e){const t=this.meters.querySelector(`[data-kind="${e}"]`);if(t){if(this.reduceMotion){t.classList.add("pulse-static");return}t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}}showWanderSpawnTick(){this.reduceMotion?(this.wanderBadge.classList.remove("tick-scale"),this.wanderBadge.classList.add("tick-op"),window.setTimeout(()=>this.wanderBadge.classList.remove("tick-op"),700)):(this.wanderBadge.classList.remove("tick-scale"),this.wanderBadge.offsetWidth,this.wanderBadge.classList.add("tick-scale"))}showWanderToast(e,t){const i=this.el("div","wander-toast"),r=document.createElement("span");if(r.innerHTML=`${Be.wanderCaught}: +<b>${dr(e)}</b> ${Be.postage}`,i.appendChild(r),t){const o=this.el("span","wander-toast-seal");o.textContent=Be.wanderSeal,i.appendChild(o)}this.root.appendChild(i);const s=performance.now(),a=()=>{const o=performance.now()-s,c=Math.min(24+o*.02,30),l=1-Math.max(0,(o-2100)/600);i.style.transform=`translateY(${-c}px)`,i.style.opacity=String(Math.max(0,Math.min(1,l))),o<2700?requestAnimationFrame(a):i.remove()};requestAnimationFrame(a)}renderSeals(e,t){const i=Xd(e),r=[];r.push({id:"lantern",name:Be.districtLL,stateText:"OPEN",rvFrac:1,rvText:"—",listFrac:1,listText:"—",action:{label:"—",enabled:!1,act:"none"},ticker:null,locked:!1});const s=(a,o)=>{const c=_n[a],l=e.blocking.gates[a],h=e.ch2.districtsAnswered.includes(c.to),d=a==="horizon",f=d&&Lr(e),m=cl(e),g=h?{label:"OPEN",enabled:!1,act:"none"}:d&&!f?{label:Be.redraw,enabled:t,act:"redraw"}:{label:`Bond ${en(c.bond)}`,enabled:l.listDone&&e.postage>=c.bond,act:"bond"};return{id:a,name:o,stateText:h?"OPEN":l.listDone?d&&!f?"SEALED — offers Redraw":"SEALED — bond ready":"SEALED",rvFrac:Math.min(1,i/c.rv),rvText:`${en(Math.min(i,c.rv))} / ${en(c.rv)}`,listFrac:Math.min(1,l.listValue/c.deliveryList),listText:`${en(Math.min(l.listValue,c.deliveryList))} / ${en(c.deliveryList)}`,action:g,ticker:d&&!f&&l.rvDone?`+${m} ★ pending`:null,locked:!h}};if(r.push(s("rainmarket",Be.districtRM)),r.push(s("horizon",Be.districtCW)),e.districtIndex>=2){const a=vn(e);if(a&&a!=="horizon"){const o=_n[a],c=Ut[o.to];c&&r.push(s(a,c.name))}}this.seals.innerHTML="";for(const a of r){const o=this.el("div",`seal seal-${a.id}${a.locked?" locked":""}`);if(o.dataset.seal=a.id,o.innerHTML=`
        <div class="seal-head"><span class="seal-name">${a.name}</span><span class="seal-state">${a.stateText}</span></div>
        <div class="gauge"><span class="gauge-label">thread</span><div class="gauge-track"><div class="gauge-fill" style="width:${Math.round(a.rvFrac*100)}%"></div></div><span class="gauge-num">${a.rvText}</span></div>
        <div class="gauge"><span class="gauge-label">list</span><div class="gauge-track"><div class="gauge-fill list" style="width:${Math.round(a.listFrac*100)}%"></div></div><span class="gauge-num">${a.listText}</span></div>
        ${a.ticker?`<div class="ticker">${a.ticker}</div>`:""}
      `,a.id==="horizon"&&!e.ch2.districtsAnswered.includes(2)){const l=this.el("span","seal-silhouette");o.querySelector(".seal-head")?.appendChild(l)}const c=this.el("button","seal-action");c.textContent=a.action.label,c.disabled=!a.action.enabled,a.action.act==="bond"&&c.addEventListener("click",()=>this.cb.onBond()),a.action.act==="redraw"&&c.addEventListener("click",()=>this.openRedrawPanel()),o.appendChild(c),this.seals.appendChild(o)}}hidePanel(){this.panelLayer.innerHTML="",this.panelLayer.classList.remove("open"),this.ring.style.display="none"}frame(e){this.panelLayer.innerHTML="";const t=this.el("div","card");return t.innerHTML=`<h3>${e}</h3>`,this.panelLayer.appendChild(t),this.panelLayer.classList.add("open"),t}closeBtn(e,t="Close"){const i=this.el("button","buy ghost");i.textContent=t,i.addEventListener("click",()=>this.hidePanel()),e.appendChild(i)}purchasePunch(e){this.reduceMotion||(e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"))}showFamilyPanel(e,t){if(t==="hall")return this.showUpgradePanel(e);const i=wc[t==="desk"?"desk":t==="satchel"?"satchel":"route"].glyph,r=this.frame(`${i} — ${t}`),s=t==="desk"?e.desks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:hn.caps.length-1,label:`pad${o+1}`})):t==="satchel"?e.racks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Nn.rates.length-1,label:`rack${o+1}`})):e.lanes.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Fn.rates.length-1,label:`lane${o+1}`}));for(const a of s)if(a.unlocked){const o=a.tier>=a.maxTier,c=t==="desk"?il(e,a.idx):t==="satchel"?sl(e,a.idx):ol(e,a.idx),l=e.postage>=c;this.buyRow(r,`${a.label} T${a.tier+1}${o?" (max)":""}`,c,!o&&l,h=>{this.cb.onBuy(t,a.idx),this.purchasePunch(h)})}else{const o=t==="desk"?nl(e,a.idx):t==="satchel"?rl(e,a.idx):al(e,a.idx),c=e.postage>=o;this.buyRow(r,`${a.label} (locked)`,o,c,l=>{this.cb.onBuy(t,a.idx),this.purchasePunch(l)})}this.closeBtn(r)}buyRow(e,t,i,r,s){const a=this.el("div","row");a.innerHTML=`<span class="name">${t}</span>`;const o=this.el("button",`buy${r?"":" dim"}`);o.textContent=`${Be.buy} ${isFinite(i)?en(i):"max"}`,o.disabled=!r,o.addEventListener("click",c=>{c.stopPropagation(),s(o)}),a.appendChild(o),e.appendChild(a)}showUpgradePanel(e){const t=this.frame("Hall"),i=Object.values(Zt);for(const r of i){const s=r.id,a=e.hall[s]??0,o=a>=r.tiers,c=o?1/0:r.cost[a]??1/0,l=r.conditionDistrictId?a>=1&&!e.ch2.districtsAnswered.includes(Ut.findIndex(f=>f.id===r.conditionDistrictId)):!1,h=this.el("div","row");h.innerHTML=`<span class="name">${r.label}</span><span class="lvl">L${a}${o?" max":""}${l?" · needs Clocktower Ward":""}</span>`;const d=this.el("button",`buy${e.postage>=c&&!l?"":" dim"}`);d.textContent=l?"Locked":`${Be.buy} ${isFinite(c)?en(c):"max"}`,d.disabled=l||e.postage<c||!isFinite(c),d.addEventListener("click",f=>{f.stopPropagation(),this.cb.onBuy("hall",s),this.purchasePunch(d)}),h.appendChild(d),t.appendChild(h)}this.closeBtn(t)}voyageLogHtml(){if(!this._state||!this._state.ch2.districtsAnswered.includes(5))return"";const e=th(this._state),t=e.rows.slice(-4),i=e.deltas.length?`<div class="voyage-deltas">${e.deltas.map(a=>`<span class="${a>1?"vd-hot":"vd-cold"}">+${a}★</span>`).join("")}</div>`:"",r=e.sealShare>=1||e.etaH==null?"":e.etaH<6?`<p class="voyage-eta near">the seal is close — finish it (≈${e.etaH.toFixed(1)} h at this pace)</p>`:`<p class="voyage-eta">seal-ETA ≈ ${e.etaH.toFixed(1)} h at this pace</p>`;return'<div class="voyage-log"><div class="voyage-head"><span class="voyage-glyph">◈</span> voyage log</div>'+(t.length?t.map(a=>`<div class="voyage-row"><span>R${a.idx} return</span><span>+${a.delta}★ · seal ${(a.sealShare*100).toFixed(0)}%</span></div>`).join(""):'<div class="voyage-row"><span>no returns logged this voyage yet</span></div>')+i+r+(this.voyageNudge?'<p class="voyage-nudge-line">the wall has gone quiet — the seal reads far; bank the night</p>':"")+"</div>"}openRedrawPanel(){const e=this.cb.onRedrawOpen();if(!e)return;this.redrawShown=e;const t=this.frame(Be.redraw);t.classList.add("card-redraw"),t.insertAdjacentHTML("beforeend",`
      <p class="forecast"><b>${dr(e.starsPending)}</b> ${Be.stars} pending</p>
      <p class="earned">booked this run: ${en(e.earnedBooked)}</p>
      <div class="preview">
        <div class="keep"><b>Kept:</b><ul>${Ov(this._state).map(r=>`<li>${r}</li>`).join("")}</ul></div>
        <div class="lost"><b>Lost:</b><ul>${Qr.lost.map(r=>`<li>${r}</li>`).join("")}</ul></div>
      </div>${this.voyageLogHtml()}`);const i=this.el("button","buy big");i.textContent=`${Be.redraw} — claim ${dr(e.starsPending)} ★`,i.addEventListener("click",()=>this.cb.onRedrawConfirm()),t.appendChild(i),this.closeBtn(t,"Not yet")}showReturnCard(e,t){const i=this.frame(za.title);if(i.classList.add("card-return"),e.kind==="never-empty")i.insertAdjacentHTML("beforeend",`<p class="ledger-line">${za.neverEmpty}</p>`);else{const s=Math.floor(e.elapsedS/3600),a=Math.floor(e.elapsedS%3600/60),o=Math.floor(e.capS/3600),c=Math.floor(e.capS%3600/60);i.insertAdjacentHTML("beforeend",`
        <p class="ledger-line">Away ${s} h ${String(a).padStart(2,"0")} min · Ledger holds ${o} h ${String(c).padStart(2,"0")} min</p>
        <p class="ledger-line big">Letters settled without you: <b>+${en(e.base)}</b></p>`);const l=Pv(t),h=t.ch5.streak.count;if(l>0&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line streak">Day streak ${h} — the wax remembers you. +${l} seals</p>`),e.medianRate!=null&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line basis">${Bs.basis}</p>`),e.trim>0&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line trim">${Bs.trim} <span class="trim-amt">(held back ${en(e.raw)} → ${en(e.base)})</span></p>`),t.liveMod?.id==="long_shadows"&&i.insertAdjacentHTML("beforeend",`<p class="ledger-line longshot">${Bs.longShadows}</p>`),Wa(t)>0){const d=this.el("button","buy big");d.textContent=`Double it tonight — free · ${Wa(t)} left tonight`,d.addEventListener("click",()=>this.cb.onDouble()),i.appendChild(d)}else Wa(t)===0&&i.insertAdjacentHTML("beforeend",'<p class="ledger-line cap">The doubler rests until midnight.</p>')}const r=this.el("button",`buy ${e.kind==="ledger"?"ghost":"big"}`);r.textContent=za.collect,r.addEventListener("click",()=>this.cb.onDismissMinor()),i.appendChild(r)}showMonetizationStubs(e){const t=this.frame(Cv);t.classList.add("card-office-papers"),t.insertAdjacentHTML("beforeend",`<p class="row stub-banner">${Wc.banner}</p>`);for(const r of Tv){const s=r.id==="album"?`Your earned Wax Seals: ${e.ch2.waxSeals} — they are all yours already; nothing is withheld or held. Album preview: it would hold ${e.ch5.album.shadowCredits} seal-credits today (shadow meter: +${zs.shadowCreditsPerSeal}/Wax Seal · cap ${this.albumCap(e)}) · cracking it would pay the meter out once, empty it, and raise the cap +${zs.capRaisePerLevel} per album level (level ${e.ch5.album.level}).`:r.body.join(" ");t.insertAdjacentHTML("beforeend",`<div class="stub-card ${r.frame}">
           <div class="stub-head"><span class="name">${r.title}</span><span class="price">${r.priceLine}</span></div>
           <div class="stub-body">${s}</div>
           ${r.honesty?`<div class="stub-honesty">${r.honesty}</div>`:""}
         </div>`)}t.insertAdjacentHTML("beforeend",`<p class="row never-row">${Av.text}</p>`),t.insertAdjacentHTML("beforeend",`<p class="row stub-footer">${Wc.footer}</p>`);const i=this.el("button","buy ghost");i.textContent=Be.roadmap,i.addEventListener("click",()=>this.showRoadmap()),t.appendChild(i),this.closeBtn(t)}showRoadmap(){const e=this.frame(Be.roadmap);e.classList.add("card-roadmap"),e.insertAdjacentHTML("beforeend",'<p class="roadmap-intro">Built through the Last Light reply, this web build is complete as designed. Nothing here is for sale. Where money could ever live is published below, honestly, and it stays that way unless it is ever proposed and reviewed.</p>');for(const t of Fv)e.insertAdjacentHTML("beforeend",`<div class="roadmap-item"><b>${t.title}</b><p>${t.body}</p></div>`);this.closeBtn(e)}showDawn(e,t=!1){const i=this.frame(Be.dawnTitle);i.classList.add("card-dawn");const r=Sv.dawn.copy;i.insertAdjacentHTML("beforeend",`<p class="dawn-line">${r}</p><p class="dawn-note">${t?Ga.replayLabel:"one night, remembered — 15 s"}</p>`),t&&i.insertAdjacentHTML("beforeend",'<p class="dawn-idle">Pip sleeps on the sorting desk.</p>'),e.ch5.dawn.fired&&i.insertAdjacentHTML("beforeend",`<p class="dawn-idle">${Ga.postRule.charAt(0).toUpperCase()+Ga.postRule.slice(1)}.</p>`),this.closeBtn(i,t?"Close":"OK")}showNotificationInvite(e){if(!nh(e))return;const t=this.frame(Hs.cardTitle);t.classList.add("card-notify"),t.insertAdjacentHTML("beforeend",`<p class="notify-body">${Hs.cardBody}</p>`),t.insertAdjacentHTML("beforeend",`<p class="notify-quiet">Quiet hours ${na.quietHoursLocal.fromH}:00–${na.quietHoursLocal.toH}:00, always.</p>`);const i=this.el("button","buy big");i.textContent=Hs.turnOn,i.addEventListener("click",()=>this.cb.onNotifyOptIn()),t.appendChild(i);const r=this.el("button","buy ghost");r.textContent=Hs.notNow,r.addEventListener("click",()=>this.cb.onNotifyDismiss()),t.appendChild(r)}albumCap(e){return zs.capCredits+zs.capRaisePerLevel*(e.ch5.album.level-1)}showPostcardsPanel(){const e=this.frame(Be.postcards);if(e.classList.add("card-postcards"),!this._state)return;const t=js(this._state),i=[];for(const r of t){const s=i.find(a=>a.district===r.story.districtId);s?s.items.push(r):i.push({district:r.story.districtId,items:[r]})}if(i.length===0){e.insertAdjacentHTML("beforeend",`</div><p class="empty">${Be.postcardsEmpty}</p>`);return}for(const r of i){const s=this.districtName(r.district),a=this.el("div","pc-group");a.insertAdjacentHTML("beforeend",`<h4>${s}</h4>`);for(const o of r.items){const c=this.el("button",`pc-row${o.unlocked?o.read?" read":" new":" locked"}${o.unlocked&&!o.read?" stamp-chip":""}`),l=Wn[o.story.districtId]?.thread??"#72D6C1",h=o.unlocked&&!o.read?`<span class="pc-chip" style="background:${l}"></span>`:"";c.insertAdjacentHTML("beforeend",`${h}<span class="pc-slot">#${o.story.slot}</span><span class="pc-subject">${o.unlocked?o.story.subject:Be.postcardsLocked}</span><span class="pc-state">${o.read?Be.postcardRead:o.unlocked?Be.postcardNew:"🔒"}</span>`),o.unlocked&&c.addEventListener("click",()=>this.openPostcardStory(o.story.id)),a.appendChild(c)}e.appendChild(a)}this.closeBtn(e)}openPostcardStory(e){this.showPostcardDetail(e)&&this.cb.onReadPostcard(e)}showPostcardDetail(e){if(!this._state)return null;let t;for(const a of js(this._state))if(a.story.id===e){t=a;break}if(!t||!t.unlocked)return null;const i=t.story,r=this.frame(Be.postcards);r.classList.add("card-postcard-story");const s=t.read?"":this.postcardRings(i.districtId);return r.insertAdjacentHTML("beforeend",`<p class="pc-meta">${this.districtName(i.districtId)} · #${i.slot}</p>
       ${this.postcardFurniture(i.districtId)}
       ${s}
       <h3 class="pc-subject">${i.subject}</h3>
       <p class="pc-sender">— ${i.sender}</p>
       <p class="pc-body">${i.body}</p>
       <p class="pc-reaction">${i.reaction}</p>
       ${i.slot===3?`<p class="pc-seal">+1 ${Be.waxSealsShort}</p>`:""}`),this.closeBtn(r),r}postcardRings(e){const t=Wn[e]??Wn.lantern_lane,i=Ut.findIndex(o=>o.id===e),r=Math.max(1,i+1)%12||12,s=r/12,a=`${Math.round(s*360)}deg`;return`<div class="pc-rings">
       <div class="pc-ring" style="--ring:${t.thread};--sweep:${a}">
         <span class="pc-ring-glyph">${t.glyph}</span>
         <span class="pc-ring-pos">#${r}</span>
       </div>
       <div class="pc-ring pc-ring-expiry">
         <span class="pc-ring-pos">match the day</span>
       </div>
     </div>`}postcardFurniture(e){const t=Wn[e]??Wn.lantern_lane,i=this.nightDate();return`<div class="pc-stage">
       <div class="pc-stamp jagged"><span class="pc-stamp-glyph">${t.glyph}</span></div>
       <div class="pc-postmark"><span class="pm-city">${qc(e)}</span><span class="pm-date">${i}</span></div>
       <div class="pc-addr"><span class="pc-addr-line">${t.addr}</span></div>
       <div class="pc-motif">${t.motif}</div>
     </div>`}nightDate(){const e=this._state?.blocking.nightMs??0,t=Math.floor(e/6e4)+1;return`NIGHT ${String(Math.max(1,t)).padStart(2,"0")}`}districtName(e){const t=Ut.find(i=>i.id===e);return t?t.name:e}showMorningPost(){if(!this._state)return;const e=this.frame(Be.morningPost);e.classList.add("card-morningpost");const t=Ut[this._state.districtIndex],i=t?Bi.grantByFrontier[t.id]??0:0;if(e.insertAdjacentHTML("beforeend",`<p class="mp-prompt">${Be.morningPostPrompt}</p>
       ${i>0?`<p class="mp-grant">${Be.morningPostGranted}: <b>${en(i)} ${Be.postage}</b></p>`:""}`),i>0){const r=this.el("button","buy");r.textContent=Be.claim,r.addEventListener("click",()=>{this.cb.onClaimMorningPost()>0&&this.morningPostBtn.classList.remove("visible","pulse")}),e.appendChild(r)}{const r=this._state.ch2.morningPost.lastClaimTs,s=Bi.cadenceH*36e5,a=r==null?null:r+s;if(a!=null){const o=Math.max(0,a-Date.now()),c=Math.floor(o/36e5),l=Math.ceil(o%36e5/6e4);e.insertAdjacentHTML("beforeend",`<p class="mp-next">${Be.morningPostNextIn} ${c} h ${String(l).padStart(2,"0")} m · ${Be.morningPostHeldNote}</p>`)}}this.closeBtn(e)}showSpecialDeliveries(){if(!this._state)return;const e=this._state,t=this.frame(Be.specialDeliveries);t.classList.add("card-special");const i=Date.now();let r=0;for(const s of Vi.recipes){if(!(Jd(e,s)||Mv(e,s.id))){if(s.rush&&e.ch2.districtsAnswered.includes(7)){r++;const g=this.el("div","sd-block sd-brass-locked");g.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4><p class="sd-cost brass">${s_.sd7Preview}</p><p class="sd-end">stamps gather — the brass flips when the Arcade keeps writing</p>`),t.appendChild(g)}continue}r++;const c=e.ch2.specialDeliveries.active.find(g=>g.recipeId===s.id&&!g.claimed),l=ev(e,s.id,i),h=Object.entries(s.stamps).map(([g,x])=>`${x} ${this.districtName(g)}`).join(" + "),d=Object.entries(s.stamps).map(([g,x])=>`${Math.min(e.ch2.stampInventory[g]??0,x)}/${x}`).join(" · "),f=this.el("div","sd-block");c&&f.classList.add("active"),f.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4>
         <p class="sd-cost">${h}<br><span class="sd-have">${Be.specialStamps}: ${d}</span></p>`);const m=this.el("div","sd-chips");for(const[g,x]of Object.entries(s.stamps)){const p=e.ch2.stampInventory[g]??0,u=p>=250,w=this.el("span",`sd-chip${u?" capped":""}`);w.textContent=`${this.districtName(g)} ${u?"250 cap":p}`,w.title=`${Be.specialStamps}: ${p}/250`,m.appendChild(w)}if(f.appendChild(m),c){const g=s.timerH*36e5,x=Math.min(1,Math.max(0,1-(c.endTs-i)/g)),p=this.el("span","sd-ring");p.style.setProperty("--frac",`${Math.round(x*360)}deg`),f.appendChild(p);const u=new Date(c.endTs).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});f.insertAdjacentHTML("beforeend",`<p class="sd-end">${l?Be.specialReady:`${Be.specialEndsAt} ${u}`}</p>`);const w=this.el("button","buy");w.textContent=l?Be.specialReady:Be.specialActive,w.disabled=!l,l&&w.addEventListener("click",()=>{this.cb.onClaimSpecial(s.id)>0&&this.hidePanel()}),f.appendChild(w)}else{const g=Qd(e,s),x=this.el("button","buy");x.textContent=Be.specialStart,x.disabled=!g,g&&x.addEventListener("click",()=>{this.cb.onActivateSpecial(s.id)&&this.hidePanel()}),f.appendChild(x)}t.appendChild(f)}r===0&&t.insertAdjacentHTML("beforeend",`<p class="empty">${Be.specialEmpty}</p>`),this.closeBtn(t)}showCoach(e,t){this.lastCoachSig=e.beat;const i=e.speaker?`<b>${e.speaker==="Pip"?"Pip":"Mara"}:</b> `:"",r=this.frame(`${e.speaker??"First Night"}`);r.classList.add("card-coach"),r.insertAdjacentHTML("beforeend",`<p>${i}${e.copy??e.beat}</p>`),e.grantAmount!=null&&r.insertAdjacentHTML("beforeend",`<p class="grant">+${en(e.grantAmount)} ${Be.postage} (First Night ${e.grantId})</p>`),e.rail&&r.insertAdjacentHTML("beforeend",`<p class="rail-note">Rail: ${e.rail.note}</p>`);const s=this.el("button","buy big");if(s.textContent="OK",s.addEventListener("click",()=>{this.ring.style.display="none",this.cb.onDismissMinor()}),r.appendChild(s),this.ring.style.display=t?"block":"none",t){const a=t.getBoundingClientRect(),o=this.root.getBoundingClientRect();this.ring.style.left=`${a.left-o.left-6}px`,this.ring.style.top=`${a.top-o.top-6}px`,this.ring.style.width=`${a.width+12}px`,this.ring.style.height=`${a.height+12}px`}}anchorFor(e){return e?e==="sort"?this.sortBtn:e.startsWith("seal-")?this.seals.querySelector(`[data-seal="${e.slice(5)}"]`):this.meters.querySelector(`[data-kind="${e}"]`):null}get lastCoach(){return this.lastCoachSig}fillMasteryRing(e){if(this.masteryRing)return;const t=this.el("div","ring-mastery");t.dataset.district=e.district;const i=Math.max(0,Math.min(12,e.segments)),r=`${Math.round(i/12*360)}deg`;t.style.setProperty("--segments",String(i)),t.style.setProperty("--sweep",r);const s=Wn[e.district]?.glyph??qc(e.district);t.setAttribute("aria-label",`${s} mastery ${i}/12`),this.reduceMotion?t.classList.add("static"):(t.classList.add("fill"),t.offsetWidth),this.root.appendChild(t),this.masteryRing=t}updatePostcardShelf(e){const t=js(e).filter(i=>i.unlocked&&!i.read);if(this.shelf.innerHTML="",t.length===0){this.shelf.classList.remove("has");return}this.shelf.classList.add("has");for(const i of t){const r=Wn[i.story.districtId]??Wn.lantern_lane,s=this.el("button","pc-shelf-chip");s.style.setProperty("--chip-thread",r.thread),s.textContent=r.glyph,s.title=`${this.districtName(i.story.districtId)} · #${i.story.slot}`,s.setAttribute("aria-label",`unread postcard: ${this.districtName(i.story.districtId)}`),s.addEventListener("click",()=>this.openPostcardStory(i.story.id)),this.shelf.appendChild(s)}}showReplayControl(e){const t=e.ch2.districtsAnswered.includes(11)||!!this._lastFinale,i=this.root.querySelector(".replay-reply-btn");if(!this._lastFinale){i?.remove();return}if(!t){i?.remove();return}if(i)return;const r=this.el("button","replay-reply-btn");r.textContent=this._lastFinale?.timeline.replayLabel??"Replay the reply",r.addEventListener("click",()=>{this._state&&this._lastFinale&&this.playFinale(this._lastFinale,this._state)}),this.root.appendChild(r)}playFinale(e,t){this._state=t??this._state,this._lastFinale=e,this._finaleActive&&(this.panelLayer.querySelector(".card-finale")?.remove(),this._finaleActive=!1);const i=this.el("div","card card-finale");this.panelLayer.innerHTML="",this.panelLayer.appendChild(i),this.panelLayer.classList.add("open");const r=e.timeline;if(e.reducedMotion){const p=Wn.last_light_observatory.glyph;i.innerHTML=`<div class="finale-glyph-swap">${p}</div><h3>${r.cardTitle}</h3><p class="finale-line">${r.pipQuietLine}</p><p class="finale-line">${r.maraSignLine}</p>`,i.appendChild(this.finaleControls(r)),this.showReplayControl(t);return}i.innerHTML='<div class="finale-beats"><div class="finale-stage"></div></div>';const s=i.querySelector(".finale-stage"),a=this.el("div","finale-overlay"),o=performance.now(),c=[],l=r.pullbackS,h=r.threadStepS*r.threadCount;for(let p=0;p<r.threadCount;p++)c.push(l+p/r.threadCount*h);const d=r.pullbackS+r.threadStepS*r.threadCount,f=d+r.allGlowS,m=f+r.shelfS;let g=!1;i.appendChild(a);const x=p=>{const u=(p-o)/1e3,w=Math.min(1,u/r.pullbackS);if(a.style.opacity=String(1-w*.4),a.style.transform=`scale(${1-w*.06})`,c.findIndex(b=>u>=b&&u<b+r.threadStepS)>=0?(s.classList.remove("pulse-lit"),s.offsetWidth,s.classList.add("pulse-lit")):u>=d&&u<f&&s.classList.add("glow"),u>=f&&!this.shelf.classList.contains("has")&&this.updatePostcardShelf(this._state??t),u>=m&&!g&&(g=!0,s.classList.remove("pulse-lit","glow"),s.innerHTML=`<h3>${r.cardTitle}</h3><p class="finale-line">${r.pipQuietLine}</p><p class="finale-line">${r.maraSignLine}</p>`,i.appendChild(this.finaleControls(r))),u>=m+r.controlReturnS+1){this._finaleActive=!1,i.remove(),this.panelLayer.classList.remove("open"),this.showReplayControl(this._state??t);return}requestAnimationFrame(x)};this._finaleActive=!0,requestAnimationFrame(x)}finaleControls(e){const t=this.el("div","finale-controls"),i=this.el("button","buy ghost");i.textContent=e.replayLabel??"Replay the reply",i.addEventListener("click",()=>{this._state&&this._lastFinale&&this.playFinale(this._lastFinale,this._state)});const r=this.el("button","buy big");return r.textContent="Close",r.addEventListener("click",()=>{this._finaleActive=!1,this.panelLayer.classList.remove("open"),this.root.querySelector(".card-finale")?.remove()}),t.appendChild(i),t.appendChild(r),t}injectCss(){if(document.getElementById("md-hud-css"))return;const e=document.createElement("style");e.id="md-hud-css",e.textContent=`
      #hud { font-family: ui-monospace, Menlo, Consolas, monospace; color: ${T.parchment}; }
      .hud-top { position:absolute; top:0; left:0; right:0; height:15%; padding:52px 14px 8px; display:flex; justify-content:space-between; align-items:flex-start; background:linear-gradient(180deg, rgba(23,35,63,.92), rgba(23,35,63,0)); z-index:3; pointer-events:none; }
      .stat { display:flex; flex-direction:column; align-items:center; }
      .stat b { font-size:10px; letter-spacing:.08em; color:${T.moonBlue}; text-transform:uppercase; }
      .stat i { font-style:normal; font-size:16px; font-weight:700; font-variant-numeric:tabular-nums; }
      .hud-meters { position:absolute; top:16%; left:0; right:0; display:flex; gap:10px; justify-content:center; padding:6px; z-index:3; }
      .meter { position:relative; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; transition:transform ${Ba.capacityPulseS}s; }
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
      .choke-tri::after { content:''; position:absolute; left:-8px; top:0; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:13px solid ${T.parchment}; clip-path: polygon(50% 0, 100% 100%, 82% 100%, 50% 34%, 18% 100%, 0 100%); }
      .meter.pulse { animation: meterPulse ${Ba.capacityPulseS}s infinite alternate; }
      .meter.pulse-static { outline: 3px solid #F4E7C7; outline-offset: 2px; }
      @keyframes meterPulse { from{ transform:scale(1);} to{ transform:scale(1.18);} }
      #hud .seal-row { position:absolute; top:calc(16% + 56px); left:0; right:0; display:flex; gap:8px; justify-content:center; padding:4px 8px; z-index:2; pointer-events:none; }
      #hud .seal-row .seal { pointer-events:none; }
      #hud .seal-row .seal-action { pointer-events:auto; }
      .seal-row.collapsed { display:none; }
      .seal { width:31%; max-width:150px; background:rgba(23,35,63,.82); border:1px solid rgba(214,168,75,.45); border-radius:10px; padding:6px 7px; font-size:10px; }
      .seal.locked { opacity:.85; }
      .seal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; }
      .seal-name { font-weight:700; color:${T.parchment}; }
      .seal-state { color:${T.moonBlue}; font-size:9px; }
      .seal-silhouette { width:10px; height:14px; background:#0d1730; clip-path: polygon(50% 0, 90% 20%, 90% 60%, 70% 60%, 70% 100%, 30% 100%, 30% 60%, 10% 60%, 10% 20%); }
      .gauge { display:flex; align-items:center; gap:4px; margin:3px 0; }
      .gauge-label { width:26px; color:${T.brass}; font-size:8px; text-transform:uppercase; }
      .gauge-track { flex:1; height:5px; background:#101a30; border-radius:3px; overflow:hidden; }
      .gauge-fill { height:100%; background:${T.routeMint}; }
      .gauge-fill.list { background:${T.plum}; }
      .gauge-num { font-size:8px; color:${T.parchment}; font-variant-numeric:tabular-nums; }
      .ticker { margin-top:3px; color:${T.brass}; font-weight:700; font-size:9px; }
      .seal-action { width:100%; min-height:44px; margin-top:5px; background:${T.sealingRed}; color:${T.parchment}; border:none; border-radius:8px; font:700 10px/1 ui-monospace; cursor:pointer; }
      .seal-action:disabled { opacity:.45; cursor:default; background:#3a4666; }
      .seal-toggle { position:absolute; top:calc(16% + 60px); right:6px; z-index:3; min-height:44px; min-width:44px; background:transparent; color:${T.moonBlue}; border:1px solid rgba(91,121,200,.5); border-radius:8px; font:700 9px/1 ui-monospace; }
      .flat-chip { position:absolute; top:2%; left:6px; z-index:4; display:flex; flex-direction:column; align-items:flex-start; gap:2px; min-height:44px; max-width:132px; background:rgba(23,35,63,.82); color:${T.parchment}; border:1px solid rgba(91,121,200,.5); border-radius:8px; padding:5px 8px; font:700 10px/1 ui-monospace; cursor:pointer; text-align:left; }
      .flat-chip .flat-pending { color:${T.brass}; font-variant-numeric:tabular-nums; }
      .flat-chip .flat-label { font-weight:400; font-size:9px; color:${T.moonBlue}; }
      .flat-chip.flat-card { border-color:${T.plum}; }
      .flat-chip.flat-nudge { border-color:${T.sealingRed}; color:${T.parchment}; }
      .hud-controls { position:absolute; bottom:0; left:0; right:0; height:18%; display:flex; align-items:flex-start; justify-content:center; gap:14px; padding-top:10px; background:linear-gradient(0deg, rgba(23,35,63,.94), rgba(23,35,63,0)); z-index:3; }
      .sort-btn { width:min(230px, 62%); height:64px; border:none; border-radius:22px; color:${T.parchment}; font:800 18px/1 ui-monospace; letter-spacing:.12em; box-shadow:0 6px 0 #8f3038; touch-action:none; cursor:pointer; user-select:none; background-image:linear-gradient(rgba(255,255,255,.14), rgba(255,255,255,0)); }
      .sort-btn.held { transform:translateY(4px); box-shadow:0 2px 0 #8f3038; }
      .plume { width:26px; height:64px; border:2px solid ${T.brass}; border-radius:12px; position:relative; overflow:hidden; background:#101a30; }
      .plume-fill { position:absolute; bottom:0; left:0; right:0; background:${T.brass}; transition:height .2s; }
      .plume.gold .plume-fill { background:${T.routeMint}; box-shadow:0 0 10px ${T.brass}; }
      .plume.gold { box-shadow:0 0 14px ${T.brass}; }
      .hud-panel-layer { position:absolute; inset:0; display:none; align-items:flex-end; justify-content:center; background:rgba(10,16,32,.45); z-index:10; }
      .hud-panel-layer.open { display:flex; }
      .card { width:88%; max-width:420px; max-height:72%; overflow-y:auto; background:${T.parchment}; color:#241d12; border-radius:16px; padding:20px; margin-bottom:6%; box-shadow:0 10px 30px rgba(0,0,0,.5); }
      .card h3 { margin:0 0 12px; color:${T.inkNavy}; }
      .row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed rgba(36,29,18,.3); }
      .row .name { font-size:14px; }
      .row .lvl { color:#777; font-size:12px; }
      .buy { background:${T.sealingRed}; color:${T.parchment}; border:none; border-radius:10px; padding:10px 14px; font:700 13px/1 ui-monospace; cursor:pointer; min-height:44px; min-width:44px; }
      .buy.dim { opacity:.5; }
      .buy.ghost { background:transparent; color:#241d12; border:1px solid rgba(36,29,18,.4); }
      .buy.big { width:100%; margin:8px 0; font-size:15px; }
      .buy.punch { animation: punch ${Ba.purchasePunchS}s; }
      @keyframes punch { 0% { transform:scale(.94); } 60% { transform:scale(1.04); } 100% { transform:scale(1); } }
      .card ul { padding-left:18px; }
      .card li { margin:6px 0; }
      .stub { color:#777; font-size:11px; text-align:right; }
      .card-redraw .forecast { font-size:34px; margin:10px 0; color:${T.plum}; }
      .card-redraw .earned { font-size:12px; color:#555; margin:-6px 0 10px; }
      .preview { display:flex; gap:14px; font-size:11px; margin-bottom:6px; }
      .preview div { flex:1; }
      .preview .keep b { color:#3a7d5f; } .preview .lost b { color:${T.sealingRed}; }
      .ledger-line { font-size:14px; margin:6px 0; }
      .ledger-line.big { font-size:18px; }
      .card-coach p { font-size:16px; margin:8px 0 12px; }
      .card-coach .grant { color:#3a7d5f; font-weight:700; font-size:13px; }
      .card-coach .rail-note { color:#777; font-size:11px; }
      .guide-ring { position:absolute; border:3px dashed ${T.brass}; border-radius:14px; z-index:9; pointer-events:none; animation: breathe 1.2s ease-in-out infinite alternate; }
      .debug-label { position:absolute; background:rgba(23,35,63,.85); color:${T.routeMint}; font:700 9px/1 ui-monospace; padding:2px 5px; border-radius:4px; pointer-events:none; z-index:4; white-space:nowrap; }
      .postcards-btn { position:absolute; top:2%; right:6px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${T.moonBlue}; border:1px solid rgba(214,168,75,.5); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; }
      .postcards-btn .unread-dot { position:absolute; top:-3px; right:-3px; width:12px; height:12px; border-radius:50%; background:${T.sealingRed}; box-shadow:0 0 8px ${T.sealingRed}; }
      .card-postcards .pc-group { margin:8px 0; }
      .card-postcards h4 { margin:10px 0 4px; font-size:13px; color:${T.inkNavy}; text-transform:uppercase; letter-spacing:.05em; }
      .pc-row { display:flex; align-items:center; gap:8px; width:100%; min-height:44px; padding:6px 8px; border:none; background:transparent; border-bottom:1px dashed rgba(36,29,18,.2); cursor:pointer; text-align:left; font:inherit; }
      .pc-row.locked { opacity:.5; cursor:default; }
      .pc-row .pc-slot { color:#a05555; font-weight:700; font-size:11px; }
      .pc-row .pc-subject { flex:1; font-size:13px; color:#241d12; }
      .pc-row .pc-state { font-size:10px; text-transform:uppercase; }
      .pc-row.new .pc-state { color:${T.sealingRed}; font-weight:700; }
      .card-postcards .empty { color:#777; font-size:13px; }
      .card-postcard-story .pc-meta { font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:#a05555; }
      .card-postcard-story .pc-subject { margin:4px 0; color:${T.inkNavy}; }
      .card-postcard-story .pc-sender { font-size:12px; color:#777; margin:0 0 10px; }
      .card-postcard-story .pc-body { font-size:15px; line-height:1.5; color:#241d12; }
      .card-postcard-story .pc-reaction { margin-top:12px; font-style:italic; color:#3a5d7d; font-size:13px; }
      .card-postcard-story .pc-seal { margin-top:10px; font-weight:700; color:${T.brass}; }
      /* Ch2 VD rework (F4): postcard furniture — stamp, postmark, address, doodle motif. */
      .pc-stage { position:relative; min-height:120px; margin:2px 0 12px; }
      .pc-stamp { position:absolute; top:0; right:0; width:30px; height:38px; background:${T.sealingRed}; color:${T.parchment}; display:flex; align-items:center; justify-content:center; font-size:15px; z-index:2; }
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
      .morningpost-btn { position:absolute; top:2%; right:56px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${T.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .morningpost-btn.visible { opacity:1; pointer-events:auto; }
      .morningpost-btn.pulse { animation: breathe 1.2s ease-in-out infinite alternate; }
      .card-morningpost .mp-prompt { font-size:14px; line-height:1.5; color:${T.inkNavy}; }
      .card-morningpost .mp-grant { margin-top:10px; font-size:15px; color:#3a5d7d; }
      .card-morningpost .mp-grant b { color:${T.brass}; }
      .special-btn { position:absolute; top:2%; right:112px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${T.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .special-btn.visible { opacity:1; pointer-events:auto; }
      .rush-btn { position:absolute; top:2%; right:168px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${T.brass}; border:1px solid rgba(214,168,75,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .rush-btn.visible { opacity:1; pointer-events:auto; }
      .rush-btn.active { color:${T.parchment}; background:rgba(214,168,75,.25); animation: breathe 1.2s ease-in-out infinite alternate; }
      .rush-btn.disabled { color:${T.moonBlue}; border-color:rgba(91,121,200,.4); cursor:default; }
      /* ---- Ch3 (JEE-655) — modifier weather card · ledger third-bulb chip · voyage view */
      .mod-card { position:absolute; top:9.5%; left:50%; transform:translateX(-50%); z-index:4; display:none; flex-direction:column; gap:1px; min-width:150px; max-width:210px; padding:6px 9px; border:1px solid rgba(91,121,200,.55); border-radius:9px; background:rgba(23,35,63,.8); color:${T.parchment}; font:700 10px/1.25 ui-monospace; text-align:center; }
      .mod-card.visible { display:flex; }
      .mod-card .mod-glyph { align-self:center; width:18px; height:10px; border-radius:3px; background:${T.moonBlue}; opacity:.9; }
      .mod-card[data-mod="backlog_surge"] .mod-glyph { background:${T.inkNavy}; height:14px; }
      .mod-card[data-mod="perfect_moon"] .mod-glyph { background:${T.brass}; border-radius:50%; height:14px; }
      .mod-card[data-mod="tailwind"] .mod-glyph { background:${T.routeMint}; }
      .mod-card[data-mod="long_shadows"] .mod-glyph { background:#b8893d; }
      .mod-card[data-mod="stamp_fair"] .mod-glyph { background:${T.parchment}; }
      .mod-card[data-mod="wax_festival"] .mod-glyph { background:${T.plum}; }
      .mod-card .mod-name { color:${T.brass}; }
      .mod-card .mod-ends { color:${T.moonBlue}; font-size:9px; }
      .mod-card .mod-effect { font-weight:400; font-size:9px; opacity:.85; }
      .mod-card .mod-forecast { font-weight:400; font-size:8px; color:${T.routeMint}; }
      .mod-card .mod-chain { font-weight:400; font-size:8px; color:${T.plum}; }
      .ledger-chip { position:absolute; top:2%; left:148px; z-index:4; display:none; align-items:center; gap:4px; min-height:44px; padding:4px 8px; border:1px solid rgba(214,168,75,.55); border-radius:8px; background:rgba(23,35,63,.82); color:${T.parchment}; font:700 9px/1 ui-monospace; }
      .ledger-chip.visible { display:flex; }
      .ledger-chip .hourglass { display:flex; flex-direction:column; gap:1px; }
      .ledger-chip .hourglass i { width:8px; height:4px; background:${T.brass}; border-radius:1px; }
      .flat-chip.voyage-nudge { border-color:${T.routeMint}; }
      .flat-chip.voyage-nudge .flat-label { color:${T.routeMint}; }
      .voyage-log { margin-top:8px; padding-top:6px; border-top:1px dashed rgba(91,121,200,.35); font-size:10px; }
      .voyage-head { color:${T.routeMint}; font-weight:700; margin-bottom:2px; }
      .voyage-glyph { color:${T.moonBlue}; }
      .voyage-row { display:flex; justify-content:space-between; opacity:.85; }
      .voyage-deltas { display:flex; gap:6px; margin:3px 0; }
      .voyage-deltas .vd-hot { color:${T.brass}; }
      .voyage-deltas .vd-cold { color:${T.moonBlue}; }
      .voyage-eta { margin:2px 0; color:${T.moonBlue}; }
      .voyage-eta.near { color:${T.routeMint}; font-weight:700; }
      .voyage-nudge-line { color:${T.sealingRed}; font-weight:700; }
      .fam-pulse { animation: famPulse 1.2s ease-out 1; }
      .fam-pulse-static { outline:2px solid ${T.parchment}; outline-offset:2px; }
      @keyframes famPulse { 0% { transform:scale(1); box-shadow:0 0 0 0 rgba(214,168,75,.7);} 30% { transform:scale(1.14); box-shadow:0 0 0 6px rgba(214,168,75,0);} 100% { transform:scale(1); box-shadow:none;} }
      .sd-block.sd-brass-locked { border-color:${T.brass}; background:rgba(214,168,75,.12); }
      .sd-block .brass { color:${T.brass}; }
      .ledger-line.basis { color:${T.routeMint}; font-size:11px; }
      .ledger-line.trim { color:${T.brass}; font-size:12px; }
      .ledger-line.trim .trim-amt { opacity:.8; font-size:10px; }
      .ledger-line.longshot { color:${T.moonBlue}; font-style:italic; font-size:11px; }
      .card-special .sd-block { margin:10px 0; padding:10px; border:1px solid rgba(36,29,18,.18); border-radius:8px; background:rgba(255,248,235,.55); }
      .card-special .sd-block.active { border-color:rgba(91,121,200,.5); }
      .card-special .sd-block h4 { margin:0 0 4px; color:${T.inkNavy}; font-size:14px; }
      .card-special .sd-cost { margin:0; font-size:12px; color:#777; }
      .card-special .sd-have { color:#3a5d7d; }
      .card-special .empty { color:#777; font-size:13px; }
      .wander-toast { position:absolute; left:50%; top:14%; transform:translateX(-50%); z-index:6; pointer-events:none; background:rgba(23,35,63,.9); color:${T.parchment}; padding:8px 14px; border-radius:12px; font:700 13px/1 ui-monospace; border:1px solid rgba(244,231,199,.4); box-shadow:0 4px 14px rgba(0,0,0,.35); }
      .wander-toast b { color:${T.brass}; }
      .wander-toast-seal { display:block; margin-top:4px; color:${T.sealingRed}; font-size:11px; text-align:center; }
      .wander-badge { position:absolute; top:calc(16% + 118px); right:6px; width:26px; height:34px; background:${T.brass}; border-radius:8px 8px 12px 12px; clip-path: polygon(18% 0, 82% 0, 100% 30%, 88% 100%, 12% 100%, 0 30%); opacity:.25; z-index:3; pointer-events:none; }
      .wander-badge.tick-scale { animation: wanderTick .7s ease-out; }
      .wander-badge.tick-op { opacity:.95; }
      @keyframes wanderTick { 0% { transform:scale(.7); opacity:.4; } 40% { transform:scale(1.18); opacity:1; } 100% { transform:scale(1); opacity:.25; } }
      .sd-chips { display:flex; flex-wrap:wrap; gap:4px; margin-top:6px; }
      .sd-chip { border:1px dashed rgba(36,29,18,.3); border-radius:6px; padding:2px 6px; font-size:10px; color:#3a5d7d; }
      .sd-chip.capped { border:2px solid ${T.brass}; color:${T.inkNavy}; font-weight:700; }
      .sd-end { margin:4px 0 0; font-size:11px; color:#777; font-variant-numeric:tabular-nums; }
      .sd-ring { display:inline-block; width:18px; height:18px; border-radius:50%; margin-top:6px; background: conic-gradient(${T.plum} var(--frac, 0deg), rgba(36,29,18,.15) 0deg); }
      .mp-next { margin-top:8px; font-size:12px; color:#777; }
      /* ---- Ch5 (JEE-581) — Office Papers button · cadence strip · stub tray · dawn · notify · roadmap */
      .officepapers-btn { position:absolute; top:2%; left:148px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${T.parchment}; border:1px solid rgba(244,231,199,.45); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; }
      .cadence-strip { position:absolute; top:calc(16% + 6px); left:50%; transform:translateX(-50%); z-index:4; display:none; align-items:center; gap:8px; max-width:92%; padding:5px 9px; border:1px solid rgba(214,168,75,.4); border-radius:9px; background:rgba(23,35,63,.82); color:${T.parchment}; font:700 9px/1.2 ui-monospace; }
      .cadence-strip.visible { display:flex; flex-wrap:wrap; justify-content:center; }
      .cadence-strip .cs-label { color:${T.brass}; text-transform:uppercase; }
      .cadence-strip .cs-slot { color:${T.moonBlue}; }
      .cadence-strip .cs-slot.doubler { color:${T.plum}; }
      .cadence-strip .cs-note { color:${T.routeMint}; }
      .card-office-papers { }
      .card-office-papers .stub-banner { justify-content:center; border-bottom:1px solid rgba(36,29,18,.25); color:${T.sealingRed}; font-weight:700; }
      .card-office-papers .stub-card { margin:10px 0; padding:10px 12px; border:1px solid rgba(36,29,18,.2); border-radius:10px; background:rgba(255,248,235,.6); }
      .card-office-papers .stub-card.brass { border-color:rgba(214,168,75,.7); }
      .card-office-papers .stub-card.plum { border-color:rgba(109,62,120,.6); }
      .card-office-papers .stub-card.plum-neutral { border-color:rgba(109,62,120,.35); }
      .card-office-papers .stub-card.parchment { border-color:rgba(91,121,200,.4); }
      .card-office-papers .stub-head { display:flex; justify-content:space-between; align-items:baseline; }
      .card-office-papers .stub-head .name { font-size:14px; color:${T.inkNavy}; font-weight:700; }
      .card-office-papers .stub-head .price { font-size:12px; color:${T.plum}; font-variant-numeric:tabular-nums; }
      .card-office-papers .stub-body { margin-top:5px; font-size:12px; color:rgba(36,29,18,.85); line-height:1.45; }
      .card-office-papers .stub-honesty { margin-top:6px; padding:6px 8px; font-size:11px; color:${T.inkNavy}; background:rgba(91,121,200,.08); border-left:3px solid ${T.brass}; }
      .card-office-papers .never-row { font-size:11px; color:#777; border-bottom:none; }
      .card-office-papers .stub-footer { justify-content:center; font-size:11px; color:#777; border-top:1px solid rgba(36,29,18,.2); border-bottom:none; }
      .card-roadmap .roadmap-intro { font-size:13px; line-height:1.5; color:${T.inkNavy}; }
      .card-roadmap .roadmap-item { margin:10px 0; padding:8px 10px; border-left:3px solid ${T.brass}; background:rgba(255,248,235,.6); }
      .card-roadmap .roadmap-item b { color:${T.inkNavy}; }
      .card-roadmap .roadmap-item p { margin:3px 0 0; font-size:12px; color:rgba(36,29,18,.85); line-height:1.45; }
      .card-dawn .dawn-line { font-size:17px; line-height:1.5; color:${T.inkNavy}; }
      .card-dawn .dawn-note { margin-top:8px; color:${T.brass}; font-weight:700; font-size:12px; }
      .card-dawn .dawn-idle { margin-top:8px; color:#777; font-size:11px; }
      .card-notify .notify-body { font-size:14px; line-height:1.5; color:${T.inkNavy}; }
      .card-notify .notify-quiet { margin:8px 0 2px; font-size:11px; color:${T.moonBlue}; font-variant-numeric:tabular-nums; }
      /* ---- Ch4 (JEE-666/F5) — postcard rings · sealed shelf · mastery ring · finale */
      .card-postcard-story .pc-rings { display:flex; gap:16px; margin:4px 0 12px; align-items:center; }
      .pc-ring { position:relative; width:56px; height:56px; border-radius:50%; border:3px solid var(--ring, ${T.brass}); background:
        conic-gradient(var(--ring, ${T.brass}) var(--sweep, 0deg), rgba(36,29,18,.12) 0deg); display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:inset 0 0 0 4px ${T.parchment}; }
      .pc-ring .pc-ring-glyph { font-size:15px; font-weight:800; color:${T.inkNavy}; }
      .pc-ring .pc-ring-pos { font-size:8px; color:${T.inkNavy}; letter-spacing:.04em; }
      .pc-ring-expiry { border-color:${T.moonBlue}; background:conic-gradient(${T.moonBlue} 180deg, rgba(36,29,18,.12) 180deg); }
      .pc-ring-expiry .pc-ring-pos { font-size:7px; text-transform:uppercase; }
      .pc-shelf { position:absolute; bottom:calc(18% + 8px); left:50%; transform:translateX(-50%); z-index:4; display:none; align-items:center; gap:6px; max-width:92%; padding:6px 8px; border-radius:10px; background:rgba(23,35,63,.8); border:1px solid rgba(91,121,200,.4); }
      .pc-shelf.has { display:flex; flex-wrap:wrap; justify-content:center; }
      .pc-shelf-chip { width:34px; height:34px; min-width:34px; border-radius:6px; border:1px solid rgba(244,231,199,.35); background:var(--chip-thread, ${T.brass}); color:${T.inkNavy}; font:800 14px/1 ui-monospace; cursor:pointer; display:flex; align-items:center; justify-content:center; }
      .ring-mastery { position:absolute; top:calc(16% + 104px); right:6px; z-index:4; width:44px; height:44px; border-radius:50%; border:3px solid ${T.plum}; background:conic-gradient(${T.plum} var(--sweep, 0deg), rgba(36,29,18,.2) 0deg); color:${T.parchment}; font:800 10px/1 ui-monospace; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px rgba(109,62,120,.6); }
      .ring-mastery.fill { transition:background .6s ease; }
      .ring-mastery.static { opacity:.9; }
      .card-finale { text-align:center; }
      .card-finale .finale-beats { min-height:140px; }
      .finale-stage { display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:130px; border-radius:14px; background:rgba(23,35,63,.06); }
      .finale-stage.pulse-lit { box-shadow:0 0 30px ${T.routeMint}; }
      .finale-stage.glow { box-shadow:0 0 44px ${T.brass}; }
      .finale-overlay { position:absolute; inset:0; pointer-events:none; border-radius:16px; mix-blend-mode:multiply; }
      .finale-glyph-swap { font-size:54px; color:${T.moonBlue}; line-height:1; margin:8px; }
      .card-finale h3 { font-size:19px; color:${T.inkNavy}; }
      .finale-line { font-size:15px; line-height:1.5; color:${T.inkNavy}; margin:10px 0; }
      .finale-controls { display:flex; gap:10px; margin-top:12px; }
      .replay-reply-btn { position:absolute; bottom:calc(18% + 60px); right:6px; z-index:4; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${T.brass}; border:1px solid rgba(214,168,75,.55); border-radius:10px; font:700 9px/1 ui-monospace; cursor:pointer; }
    `,document.head.appendChild(e)}}const Nv={desk:"desk",satchel:"satchel",route:"route",inflow:"hall"};function Ov(n){return n?n.ch2.districtsAnswered.includes(5)?[...Qr.kept,...Tc,...a_]:Lr(n)?[...Qr.kept,...Tc]:Qr.kept:Qr.kept}function Bv(){const n=e=>({family:e,level:"ok",chokeHoldS:0,warnHoldS:0,chokedAtNightMs:null,firstChokeThisRun:!1,remedyLoggedAtS:null,chokeClearS:0});return{per:{desk:n("desk"),satchel:n("satchel"),route:n("route"),inflow:n("inflow")},deliveredEma:0}}const jt=V0;function zv(n,e,t,i,r){const s=Math.max(1e-9,Qs(n)),a=n.desks.reduce((x,p)=>x+p.inProcess,0)/s,o=Math.max(1e-9,Jo(n)),l=(n.bundled??0)/o,h=Math.min(1,i/2),d=r/Math.max(1e-9,i);e.deliveredEma+=(d-e.deliveredEma)*h;const f=Math.max(1e-9,Qo(n)*Math.max(1,n.starMultiplier)),m=e.deliveredEma/f,g=Hv(n);return{deskPile:a,satQueue:l,routesBelowSatchels:f<g,routesAboveSatchels:f>g,routeUtil:m,routeDeliveredOkSlack:e.deliveredEma>=g*(1-jt.route.okSlack)||l<.02,inflowPool:n.backlog/Math.max(1e-9,aa(n)),holding:t}}function Hv(n){return n.racks.reduce((e,t)=>e+(t.unlocked?Nn.rates[t.tier]:0),0)}function Vv(n){return aa(n)}function Gv(n,e,t,i){for(const r of Object.keys(e.per)){const s=e.per[r],a=$v(r,t),o=Xv(r,t);if(a){if(s.chokeHoldS+=i,s.chokeClearS=0,s.level!=="choke"&&s.chokeHoldS>=Wv(r,t)){const c=!s.firstChokeThisRun;s.firstChokeThisRun=!0,s.level="choke",s.chokedAtNightMs=n.blocking.nightMs,s.remedyLoggedAtS=null,Fe(n,ke.meterChoke,{family:r,first_in_run:c})}}else s.chokeHoldS=0,s.level==="choke"?(s.chokeClearS+=i,s.chokeClearS>=1.5&&(s.level=o?"warn":"ok",s.chokeClearS=0)):s.chokeClearS=0;o&&s.level!=="choke"?(s.warnHoldS+=i,s.level="warn"):s.level!=="choke"&&(s.warnHoldS=0,s.level=a?s.level:"ok")}}function Wv(n,e){return n==="desk"&&e.holding&&e.deskPile>=jt.desk.burstFullAt?0:n==="desk"?jt.desk.chokeSustainS:n==="satchel"?jt.satchel.chokeSustainS:n==="route"?jt.route.chokeSustainS:jt.inflow.chokeSustainS}function $v(n,e){switch(n){case"desk":return e.deskPile>=jt.desk.chokeAt;case"satchel":return e.routesAboveSatchels&&e.deskPile>=jt.satchel.deskPileChokeAt;case"route":return e.routeUtil>=jt.route.utilChokeAt&&e.satQueue>=jt.route.queueChokeAt;case"inflow":return e.inflowPool<jt.inflow.chokeAt&&e.holding}}function Xv(n,e){switch(n){case"desk":return e.deskPile>=jt.desk.warnAt;case"satchel":return e.satQueue>=jt.satchel.queueWarnAt&&e.routesBelowSatchels;case"route":return e.routeUtil>=jt.route.utilWarnAt;case"inflow":return e.inflowPool<jt.inflow.okAt}}function qv(n,e,t,i){const r=e.per[t];if(r.remedyLoggedAtS!=null||r.chokedAtNightMs==null)return;r.remedyLoggedAtS=n.blocking.nightMs;const s=(n.blocking.nightMs-r.chokedAtNightMs)/1e3;Fe(n,ke.meterRemedy,{family:t,purchase_id:i,latency_s:s})}function Yv(n){for(const e of Object.keys(n.per)){const t=n.per[e];t.level="ok",t.chokeHoldS=0,t.warnHoldS=0,t.chokedAtNightMs=null,t.firstChokeThisRun=!1,t.remedyLoggedAtS=null,t.chokeClearS=0}n.deliveredEma=0}const $a=Ld.filter(n=>"t"in n.trigger);function ih(n,e){n.blocking.railsFired.push(e.beat);const t=e.grantId??e.beat;Fe(n,ke.onboardBeat,{copy_id:t,t_s:n.blocking.nightMs/1e3});let i;if(e.grantId!=null&&!n.blocking.checklist.includes(e.grantId)){const r=$0.find(s=>s.id===e.grantId);r&&(n.blocking.checklist.push(r.id),i=r.grant,n.totalEarnedRun+=r.grant,Wi(n,r.grant))}return{beat:e.beat,copyId:t,speaker:e.speaker,copy:e.copy,highlight:e.highlight,rail:e.rail,grantId:e.grantId,grantAmount:i}}function jv(n){if(n.onboarded)return[];const e=n.blocking.nightMs/1e3,t=[];for(const r of $a)e>=r.trigger.t&&!n.blocking.railsFired.includes(r.beat)&&t.push(ih(n,r));const i=$a[$a.length-1];return i&&n.blocking.railsFired.includes(i.beat)&&(n.onboarded=!0),t}function vr(n,e){const t=[];for(const i of Ld)"event"in i.trigger&&i.trigger.event===e&&!n.blocking.railsFired.includes(i.beat)&&t.push(ih(n,i));return t}function Kv(n,e,t){let i=[];return e.rainmarket.rvDone&&(i=i.concat(vr(n,"rv_complete"))),t.rainmarketListNearly&&(i=i.concat(vr(n,"list_nearly"))),e.horizon.rvDone&&(i=i.concat(vr(n,"horizon_rv"))),e.horizon.listDone&&(i=i.concat(vr(n,"horizon_list"))),i}function In(n){return n.blocking.ch2FiredEver}function pn(n,e){return In(n).push(e.beat),Fe(n,ke.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight}}function At(n,e){return In(n).includes(e)}const Zv=[xt.flatNear.beat,xt.flatFar.beat],Yc=new WeakMap;function Jv(n){const e=Yc.get(n);if(e!==n.run){if(e!=null){n.blocking.ch2FiredEver=n.blocking.ch2FiredEver.filter(i=>!Zv.includes(i));const t=rh(n);for(const[i,r]of Object.entries(n.blocking.gates))t.listDone[i]=r.listDone}Yc.set(n,n.run)}}function Qv(n,e){const t=[];e===1&&Lr(n)&&!At(n,xt.rmReanswer.beat)&&t.push(pn(n,xt.rmReanswer));const i=W0.find(r=>r.districtIndex===e);if(i){const r=`ch2.vignette.${i.id}`;At(n,r)||(In(n).push(r),Fe(n,ke.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:`${i.body}
— ${i.speakerLine}`,vignette:i})),i.arrivalCopy&&!At(n,`ch2.arrival.${i.id}`)&&(In(n).push(`ch2.arrival.${i.id}`),Fe(n,ke.onboardBeat,{copy_id:`arrival.${i.id}`,t_s:n.blocking.nightMs/1e3}),t.push({beat:`ch2.arrival.${i.id}`,speaker:i.arrivalCopy.speaker,copy:i.arrivalCopy.line}))}if(e>=1&&Lr(n)){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+Ac.delayAfterVignetteS,district:e})}if(i?.id==="canal_of_echoes"){const r=`composite.canal.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"composite_chord",atS:n.blocking.nightMs/1e3+Ac.delayAfterVignetteS})}i?.id==="clocktower_ward"&&!At(n,"ch2.scripted.wander.1")&&(In(n).push("ch2.scripted.wander.1"),n.blocking.ch2Pending.push({id:"scripted.wander.1",kind:"scripted_wander",atS:n.blocking.nightMs/1e3+45})),i?.id==="museum_after_dark"&&(At(n,xt.museumClaim.beat)||t.push(pn(n,xt.museumClaim)),At(n,xt.museumClaim2.beat)||t.push(pn(n,xt.museumClaim2))),e>=2&&q_(n,Date.now());for(const r of Vi.recipes){const s=Ut.findIndex(a=>a.id===r.available);s>=0&&e>=s&&!At(n,`ch2.special.offer.${r.id}`)&&(In(n).push(`ch2.special.offer.${r.id}`),Fe(n,ke.specialOffer,{recipe_id:r.id,stamp_cost_json:r.stamps,timer_h:r.timerH}),t.push({beat:`ch2.special.offer.${r.id}`,speaker:null,copy:null}))}return t}function ex(n){const e=vn(n);if(!e)return;const t=n.blocking.nightMs/1e3,i=n.blocking.evapSpanMax[e]??0;n.blocking.evapSpanMax[e]=Math.max(i,t)}const jc=new WeakMap;function rh(n){let e=jc.get(n);return e||(e={mpDue:!1,trays:!1,wander:!1,listDone:{},primed:!1},jc.set(n,e)),e}function tx(n,e){const t=[];Jv(n);const i=rh(n),r=n.blocking.nightMs/1e3,s=Lr(n);if(!i.primed){i.mpDue=os(n,e),i.trays=(n.hall.F3??0)>=2,i.wander=(n.hall.F9??0)>=1;for(const[d,f]of Object.entries(n.blocking.gates))i.listDone[d]=f.listDone;i.primed=!0}const a=$_(n);if(s&&(n.run>=1&&!At(n,xt.secondWind.beat)&&t.push(pn(n,xt.secondWind)),!At(n,"ch2.seal-convert")&&r>=Cc.conversionCardS&&(In(n).push("ch2.seal-convert"),Fe(n,ke.sealConvert,{t_s:r}),t.push({beat:"ch2.seal-convert",speaker:Ha.speaker,copy:`${Ha.line}
${Ha.note}`,conversion:!0,highlight:"seal-horizon"})),!At(n,xt.sdIntro.beat)&&r>=Cc.sdBoardIntroS)){t.push(pn(n,xt.sdIntro));const d=Vi.recipes[0];d&&!At(n,`ch2.special.offer.${d.id}`)&&(In(n).push(`ch2.special.offer.${d.id}`),Fe(n,ke.specialOffer,{recipe_id:d.id,stamp_cost_json:d.stamps,timer_h:d.timerH}))}(n.hall.F3??0)>=2&&!i.trays&&(i.trays=!0,At(n,"ch2.tray.activate")||(In(n).push("ch2.tray.activate"),Fe(n,ke.trayActivate,{tier:n.hall.F3,t_s:r})),At(n,xt.trayRail.beat)||t.push(pn(n,xt.trayRail))),(n.hall.F9??0)>=1&&!i.wander&&(i.wander=!0,At(n,xt.wanderOn.beat)||t.push(pn(n,xt.wanderOn)));const l=os(n,e);if(l&&!i.mpDue){const d=Ut[n.districtIndex];Fe(n,ke.morningpostReady,{grant:d?Bi.grantByFrontier[d.id]??0:0,district:d?.id}),At(n,xt.mpFirstReady.beat)||t.push(pn(n,xt.mpFirstReady))}i.mpDue=l;for(const[d,f]of Object.entries(Ys)){const m=Dd[d];if(!m)continue;const g=n.ch2.postcardCounters[d]??0;for(const x of f){const p=m[x.slot-1];p==null||g<p||n.ch2.postcards.unlockedEmitted.includes(x.id)||(n.ch2.postcards.unlockedEmitted.push(x.id),Fe(n,ke.postcardUnlock,{district:d,n:x.slot,letters_counted:g}),At(n,xt.postcardAuto.beat)||t.push({...pn(n,xt.postcardAuto),postcardId:x.id}))}}a.card&&!W_(n)&&!At(n,xt.flatNear.beat)&&t.push(pn(n,xt.flatNear)),a.nudge&&!At(n,xt.flatFar.beat)&&t.push(pn(n,xt.flatFar));for(const[d,f]of Object.entries(n.blocking.gates)){const m=i.listDone[d]===!0;if(i.listDone[d]=f.listDone,!f.listDone||m)continue;const g=n.blocking.nightMs/1e3,x=n.blocking.evapSpanMax[d]??0;if(n.blocking.evapSpanMax[d]=Math.max(x,g),x>1500&&g<=1500&&!At(n,`ch2.evaporation.${d}`)){In(n).push(`ch2.evaporation.${d}`);const p=xt.evaporation;Fe(n,ke.onboardBeat,{copy_id:`evaporation.${d}`,t_s:g}),t.push({beat:`ch2.evaporation.${d}`,speaker:p.speaker,copy:p.copy,toast:!0})}}const h=n.blocking.ch2Pending.filter(d=>d.atS<=r);if(h.length){n.blocking.ch2Pending=n.blocking.ch2Pending.filter(d=>d.atS>r);for(const d of h)d.kind==="reply_chord"&&d.district!=null?(Fe(n,ke.replyChord,{district:d.district,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:d.district,composite:!1}})):d.kind==="composite_chord"?(Fe(n,ke.replyChord,{district:"composite",t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:null,composite:!0}})):d.kind==="scripted_wander"&&(Fe(n,ke.wanderSpawn,{kind:"normal",scripted:!0,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,spawnWanderlight:"normal"}),At(n,xt.firstWander.beat)||t.push(pn(n,xt.firstWander)))}return{intents:t,flat:a}}function ul(n){return n.blocking.ch2FiredEver}function ln(n,e){return ul(n).includes(e)}function mn(n,e,t={}){return ul(n).push(e.beat),Fe(n,ke.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight,...t}}function sh(n){return n.ch2.districtsAnswered.includes(8)}const Kc=new WeakMap;function nx(n){let e=Kc.get(n);return e||(e={primed:!1,eraStartRun:null,cycle:-1,prevF12:n.hall.F12??0,prevLloRv:!1,prevModId:null,prevRtOpen:Ur(n),hTopThisRun:0,lastBuyRelS:0},Kc.set(n,e)),e}function ix(n,e,t,i=!1){const r=[];if(!sh(n))return r;const s=S_.find(o=>o.districtIndex===e);if(s&&!ln(n,`ch4.vignette.${s.id}`)&&(ul(n).push(`ch4.vignette.${s.id}`),Fe(n,ke.onboardBeat,{copy_id:`ch4.vignette.${s.id}`,t_s:n.blocking.nightMs/1e3}),r.push({beat:`ch4.vignette.${s.id}`,speaker:s.speaker,copy:`${s.body}
— ${s.speakerLine}`,vignette:s})),e===9&&!ln(n,Mt.cloudlineAnswer.beat)&&r.push(mn(n,Mt.cloudlineAnswer)),e===10&&!ln(n,Mt.auroraAnswer.beat)&&r.push(mn(n,Mt.auroraAnswer)),e===11&&!ln(n,Mt.lastLightAnswer.beat)&&r.push(mn(n,Mt.lastLightAnswer)),e>=9){const o=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(c=>c.id===o)||n.blocking.ch2Pending.push({id:o,kind:"reply_chord",atS:n.blocking.nightMs/1e3+8,district:e})}const a=zi(n);return $d(n,e,t),!a&&zi(n)&&r.push({beat:"ch4.finale.sequence",speaker:null,copy:`${Kr.cardTitle} · ${Kr.pipQuietLine} · ${Kr.maraSignLine}`,finale:{timeline:Kr,reducedMotion:i,boundaries:Kr.boundaries}}),r}function rx(n,e){const t=[];if(!sh(n))return t;const i=nx(n);i.eraStartRun==null&&(i.eraStartRun=n.run),i.primed||(i.primed=!0,i.prevF12=n.hall.F12??0,i.prevLloRv=n.blocking.gates.last_light_observatory.rvDone,i.prevModId=n.liveMod?.id??null);const r=i.cycle!==n.run-i.eraStartRun;if(i.cycle=n.run-i.eraStartRun,i.cycle===0){ln(n,Mt.fourthWind.beat)||t.push(mn(n,Mt.fourthWind,{pulseFamilies:["satchel","route"]}));const c=n.hall.F12??0;c>i.prevF12&&(ln(n,Mt.deepAddressing.beat)||t.push(mn(n,Mt.deepAddressing)),c>=3&&i.prevF12<3&&!ln(n,Mt.finalRunJump.beat)&&t.push(mn(n,Mt.finalRunJump))),i.prevF12=c,!ln(n,Mt.kitT9.beat)&&n.racks.some(l=>l.unlocked&&l.tier>=8)&&t.push(mn(n,Mt.kitT9,{pulseFamilies:["satchel"]}))}i.cycle===1&&r&&!ln(n,Mt.weatherReRead.beat)&&t.push(mn(n,Mt.weatherReRead,{highlight:"modifier"}));const s=n.liveMod?.id??null;if(s!==i.prevModId){const c=vn(n),l=c?!n.blocking.gates[c].listDone:!1;i.prevModId!=null&&l&&i.cycle>=1&&!ln(n,Mt.midCycleSwap.beat)&&t.push(mn(n,Mt.midCycleSwap,{highlight:"modifier"})),i.prevModId=s}const a=n.blocking.gates.last_light_observatory.rvDone;if(a&&!i.prevLloRv&&!ln(n,Mt.voyageBeat.beat)){const c=n.blocking.gates.last_light_observatory;t.push(mn(n,Mt.voyageBeat)),Fe(n,ke.onboardBeat,{copy_id:"ch4.voyage.listread",list_share_at_rv_done:_n.last_light_observatory.deliveryList>0?c.listValue/_n.last_light_observatory.deliveryList:null})}i.prevLloRv=a;const o=Ur(n);return o&&!i.prevRtOpen&&(ln(n,Mt.rtOpen.beat)||t.push(mn(n,Mt.rtOpen,{highlight:"roundTrip"})),n.ch2.waxSeals>=12&&!ln(n,Mt.firstTrim.beat)&&t.push(mn(n,Mt.firstTrim,{highlight:"cosmetics"}))),i.prevRtOpen=o,t}const sx=30;function ax(n,e=()=>Date.now()){const t={lastWriteMs:e(),save(i,r){ah(i),n(i),t.lastWriteMs=e(),Fe(i,ke.saveWrite,{version:i.v,bytes:JSON.stringify(i).length,state_hash:Vd(i),ok:!0,reason:r})},tick(i,r){(r-t.lastWriteMs)/1e3>=sx&&t.save(i,"autosave")}};return t}function ox(n,e){Fe(n,ke.saveLoad,{version:n.v,bytes:JSON.stringify(n).length,state_hash:Vd(n),ok:e})}function ah(n){n.ledgerWindow=hs.capHours*3600}const $n=1/60,lx=[-3.4,-1.2,1.1,3.3];function cx(){try{const n=localStorage.getItem(Nd);return n?{state:h_(JSON.parse(n)),ok:!0}:{state:Rr(),ok:!1}}catch{return{state:Rr(),ok:!1}}}function Zc(n){n.savedAt=Date.now(),cv(n),localStorage.setItem(Nd,JSON.stringify(n))}function dx(n){return new D(lx[n]??0,.3,1.6)}function hx(){const n=document.getElementById("game"),e=document.getElementById("hud"),t=document.getElementById("boot");if(!n||!e)return;const i=O0(),{renderer:r,scene:s,camera:a,resize:o}=B0(n,{});z0(a);const c=i_(s,{});b_();const{state:l,ok:h}=cx();ah(l),Uo(l,Date.now()),ox(l,h);const d=ax(Zc);let f=0,m=0,g=!1;const x=new Set,p=Bv();let u=null;!h||(u=Oc(l),u&&(f+=u.base,Hc(l,u)),u&&u.kind==="ledger"&&u.base===0&&(u=null)),u&&u.kind==="never-empty"&&!h&&(u=null);let w=!1,E=!1;const b=[];let B=l.bundled??0;const C=K=>{for(const j of K)(j.copy!=null||j.rail)&&b.push(j),j.grantAmount!=null&&d.save(l,"checklist")},L=K=>{for(const j of K)j.copy!=null&&b.push(j),j.chord&&c.pulseThread(j.chord.district),j.spawnWanderlight&&(c.spawnWanderlight(j.spawnWanderlight),_.showWanderSpawnTick())},F=K=>{for(const j of K){if(j.copy!=null&&b.push(j),j.chord&&c.pulseThread(j.chord.district),j.pulseFamilies)for(const Ae of j.pulseFamilies)_.pulseFamilyBadge(Ae);j.voyageNudge&&_.setVoyageNudge(!0)}},M=K=>{for(const j of K){if(j.copy!=null&&b.push(j),j.chord&&(j.chord.composite?c.pulseThread(null):c.pulseThread(j.chord.district)),j.pulseFamilies)for(const Ae of j.pulseFamilies)_.pulseFamilyBadge(Ae);j.ringFill&&_.fillMasteryRing(j.ringFill),j.finale&&(_.playFinale(j.finale,l),_.updatePostcardShelf(l))}},_=new Uv(e,{onSortHold:K=>{E=K},onBuy:(K,j)=>{const Ae=()=>JSON.stringify([l.postage,l.hall,l.desks,l.racks,l.lanes]),st=Ae();let Ne=!1,Ye="",R=0;if(K==="hall"){const de=String(j??""),xe=l.hall[de]??0,Re=Zt[de];R=Re?Re.cost[xe]??0:0,Ne=u_(l,de),Ye=de}else if(K==="desk"){const de=Number(j??0),xe=l.desks[de];xe&&!xe.unlocked?(R=nl(l,de),Ne=f_(l,de)):xe&&xe.unlocked&&(R=il(l,de),Ne=p_(l,de)),Ye=`pad${de+1}`}else if(K==="satchel"){const de=Number(j??0),xe=l.racks[de];xe&&!xe.unlocked?(R=rl(l,de),Ne=m_(l,de)):xe&&xe.unlocked&&(R=sl(l,de),Ne=g_(l,de)),Ye=`rack${de+1}`}else if(K==="route"){const de=Number(j??0),xe=l.lanes[de];xe&&!xe.unlocked?(R=al(l,de),Ne=__(l,de)):xe&&xe.unlocked&&(R=ol(l,de),Ne=v_(l,de)),Ye=`lane${de+1}`}const mt=Ae();Ne&&st!==mt&&(Fe(l,ke.purchase,{kind:K,id:Ye,cost:R,wallet_after:l.postage}),qv(l,p,K==="hall"?"inflow":K,Ye),d.save(l,"purchase")),K==="hall"?_.showUpgradePanel(l):_.showFamilyPanel(l,K)},onBond:()=>{const K=O_(l);K!=null&&(c.updateLanterns(l),c.pipPulse(),L(Qv(l,K)),F(xv(l,K)),M(ix(l,K,Date.now(),i)),C(vr(l,"advance")),d.save(l,"district_advance"))},onRedrawOpen:()=>{const K=Oc(l);return K&&Hc(l,K),V_(l)},onRedrawConfirm:()=>{const K=_.redrawForecastShown;if(!K)return;ex(l);const j=Fo(l),Ae=vn(l),st=Ae?!l.blocking.gates[Ae].listDone:!1,Ne=G_(l,K.starsPending,{cycleAgeS:l.blocking.nightMs/1e3,sealShareAtClaim:j.sealShare,voluntary:j.nudge&&st});{const Ye=th(l);yv(l,{wallS:Ye.wallAgeS,sessions:Ye.rows.length+1,claimStars:Ne.starsAwarded,ledgerShare:f/Math.max(1,Ne.earnedBooked),furnShare:m/Math.max(1,Ne.earnedBooked),modSlots:[...x],rushSpent:g})}f=0,m=0,g=!1,x.clear(),_.setVoyageNudge(!1),Yv(p),A=0,B=0,_.hidePanel(),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateWall(l,!1),d.save(l,"redraw"),C(vr(l,"claim"))},onDismissMinor:()=>{l.returnCardPending=!1,u=null,_.hidePanel(),d.save(l,"ledger_settle")},onDouble:()=>{u&&gv(l,u),l.returnCardPending=!1,_.hidePanel(),Zc(l),u=null},onOpenPanel:K=>{K==="hall"?_.showUpgradePanel(l):_.showFamilyPanel(l,K)},onReadPostcard:K=>{const j=av(l,K);return j&&(Fe(l,ke.postcardRead,{id:K,seal:l.ch2.waxSeals}),d.save(l,"checklist")),j},onClaimMorningPost:()=>{const K=X_(l,Date.now());return K>0&&(Fe(l,ke.morningPost,{amount:K}),m+=K,d.save(l,"checklist")),K},onActivateSpecial:K=>{const j=Q_(l,K,Date.now());return j&&(Fe(l,ke.specialActivate,{id:K}),d.save(l,"checklist")),j},onClaimSpecial:K=>{const j=tv(l,K,Date.now());return j>0&&(Fe(l,ke.specialClaim,{id:K,amount:j}),m+=j,d.save(l,"checklist")),j},onUseRush:()=>{const K=nv(l,Date.now());return K&&(g=!0),K&&d.save(l,"checklist"),K},onNotifyOptIn:()=>{Xc(l,!0),d.save(l,"checklist");try{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}catch{}},onNotifyDismiss:()=>{$c(l),Xc(l,!1),d.save(l,"checklist")}},i);let A=l.districtIndex;u&&(l.returnCardPending=!0,w=!0,_.showReturnCard(u,l)),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateLanes(l,0),c.updateWall(l,Va(l));let H=0,z=0,Z=l.totalEarnedRun,ee=performance.now(),Y=0,re=0,$=0,ce=0,me=null,Ce=l.ch5.dawn.fired?2:0;o(),window.addEventListener("resize",o),requestAnimationFrame(()=>t?.remove());const He=new lt(-2,-2),rt=new F0;r.domElement.addEventListener("pointermove",K=>{const j=r.domElement.getBoundingClientRect();He.x=(K.clientX-j.left)/j.width*2-1,He.y=-((K.clientY-j.top)/j.height)*2+1}),r.domElement.addEventListener("pointerdown",K=>{if(_.modalOpen)return;const j=r.domElement.getBoundingClientRect();He.x=(K.clientX-j.left)/j.width*2-1,He.y=-((K.clientY-j.top)/j.height)*2+1,rt.setFromCamera(He,a);const Ae=rt.intersectObjects(c.wanderGroup.children,!0)[0];if(!Ae||!Ae.object.userData?.kind)return;const Ne=c.wanderlights.find(de=>de.group===Ae.object.parent);if(!Ne)return;const Ye=c.wanderlights.indexOf(Ne),R=Z_(l,Ne.kind);m+=R;let mt=!1;Ne.kind==="grand"?mt=!0:Math.random()<K_(l)&&(l.ch2.waxSeals+=1,mt=!0),Fe(l,ke.wanderlight,{kind:Ne.kind,amount:R,seal:mt,seals:l.ch2.waxSeals}),_.showWanderToast(R,mt),c.despawnWanderlight(Ye),d.save(l,"checklist")});const Q=new URLSearchParams(location.search).get("debug")==="1",ae=document.createElement("div");Q&&(e.appendChild(ae),c.debugAnchors.forEach(K=>{const j=document.createElement("div");j.className="debug-label",j.textContent=K.label,j.dataset.label=K.label,ae.appendChild(j)}));let Te=0;function ue(K){requestAnimationFrame(ue);let j=(K-ee)/1e3;ee=K,j>.25&&(j=.25);const Ae=_.modalOpen;if(Ae&&me==null&&(me=Date.now()),!Ae&&me!=null){const R=Date.now()-me;me=null,R>0&&l.ch2.rush.activeEndTs!=null&&Date.now()<l.ch2.rush.activeEndTs&&(l.ch2.rush.activeEndTs+=R)}if(!Ae){lv(l,Date.now()),l.liveMod?.id&&x.add(l.liveMod.id),Uo(l,Date.now()),Y+=j;let R=0;for(;Y>=$n&&R<10;){const de=l.postage,xe=t_(l,$n,E);l.blocking.nightMs+=$n*1e3,l.districtIndex>A?A=l.districtIndex:l.districtIndex<A&&(l.districtIndex=A);let Re=0;if(xe.postageEarned>0||l.postage!==de){const Ue=xe.postageEarned;Re=Ue,P_(l,Ue,xe.delivered),mv(l,Ue,$n)}const ct=zv(l,p,E,$n,xe.delivered);Gv(l,p,ct,$n),L(tx(l,K).intents),F(bv(l,Date.now(),$n,Re)),M(rx(l)),C(jv(l)),C(Kv(l,{rainmarket:l.blocking.gates.rainmarket,horizon:l.blocking.gates.horizon},{rainmarketListNearly:I_(l,"rainmarket")})),(l.bundled??0)>B+.5&&c.leverKick(),B=l.bundled??0,Y-=$n,R++,$+=$n}const mt=l.totalEarnedRun-Z;if(Z=l.totalEarnedRun,mt>0){for(z+=mt/Math.max(1,el(l)),H-=j;!i&&z>=1&&c.flyers.length<80&&!(H>0);)z-=1,H+=.09,c.spawnFlyer(new D(-2.6+(Math.random()-.5)*1.4,.5,4),dx(Math.floor(Math.random()*4)));z>12&&(z=12)}{const de=c.wanderlights.length;if(J_(l,ce,de)){const xe=Math.random()<j_(l);c.spawnWanderlight(xe?"grand":"normal"),_.showWanderSpawnTick(),Fe(l,ke.wanderSpawn,{kind:xe?"grand":"normal",scripted:!1,t_s:$}),ce=0}else ce+=j*1e3}if(b.length>0&&!_.modalOpen&&!w){const de=b.shift();_.showCoach(de,_.anchorFor(de.highlight))}Ce===0&&kv(l)&&!_.modalOpen&&!w&&b.length===0?(Iv(l),_.showDawn(l),d.save(l,"checklist"),Ce=1):Ce===1&&!_.modalOpen&&!w&&b.length===0&&(nh(l)&&($c(l),_.showNotificationInvite(l),d.save(l,"checklist")),Ce=2)}w&&!_.modalOpen&&(w=!1),c.animateFlyers(j,i),c.animateWanderlights(j,$,i),c.tickCharacters(j,$,i),c.tickChords(j),c.updateDesks(l),c.updateRacks(l);const st=l.backlog/Math.max(1e-9,Vv(l)),Ne=p.per.inflow.level==="choke";if(c.updateTray(l,st,Ne),c.updateDistricts(l,{mpDue:os(l,Date.now()),sdActive:l.ch2.specialDeliveries.active.length,stampCapsAt:0,sdFills:l.ch2.specialDeliveries.active.slice(0,3).map(R=>{const de=(Vi.recipes.find(xe=>xe.id===R.recipeId)?.timerH??1)*36e5;return de>0?Math.min(1,Math.max(0,(R.endTs-Date.now())/de)):0})}),c.updateModDressing(l),K-re>250){re=K;const R=Math.max(1e-9,64);c.updateLanes(l,Math.min(1,p.deliveredEma/R)),c.updateWall(l,Va(l))}const Ye=Object.keys(p.per).find(R=>p.per[R].level==="choke");c.setLampLevel(Ye?"red":E?"ok":"warn"),_.updateHud(l,p,Va(l));for(const R of["desk","satchel","route","inflow"])p.per[R].level==="choke"&&K%1e3<34&&_.showBottleneckPulse(R);if(l.perfect>=tl(l)-1e-6&&c.pipPulse(),d.tick(l,K),Q&&(Te+=j,Te>.25)){Te=0;const R=r.domElement.clientWidth,mt=r.domElement.clientHeight;c.debugAnchors.forEach(de=>{const xe=ae.querySelector(`[data-label="${de.label}"]`);if(!xe)return;const Re=de.pos.clone().project(a);xe.style.left=`${(Re.x+1)/2*R}px`,xe.style.top=`${(-Re.y+1)/2*mt}px`})}r.render(s,a)}requestAnimationFrame(ue),window.__md={get state(){return l},hall:c,project:K=>{a.updateMatrixWorld(!0);const j=new D(K.x,K.y,K.z).project(a),Ae=r.domElement.getBoundingClientRect();return{px:Ae.left+(j.x+1)/2*Ae.width,py:Ae.top+(1-j.y)/2*Ae.height}},blocking:{get meters(){return p},events:M_,forecast:()=>cl(l),flattening:()=>Fo(l),get queue(){return b.length}}}}hx();
