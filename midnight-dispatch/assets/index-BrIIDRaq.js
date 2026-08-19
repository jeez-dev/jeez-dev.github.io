(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="170",nu=0,Pl=1,iu=2,_d=1,ru=2,Zn=3,Si=0,sn=1,ei=2,yi=0,kr=1,Dl=2,kl=3,Il=4,su=5,Hi=100,au=101,ou=102,lu=103,cu=104,du=200,hu=201,uu=202,pu=203,ao=204,oo=205,fu=206,mu=207,gu=208,_u=209,vu=210,xu=211,bu=212,yu=213,Mu=214,lo=0,co=1,ho=2,Br=3,uo=4,po=5,fo=6,mo=7,tl=0,Su=1,wu=2,Mi=0,Eu=1,Tu=2,Au=3,vd=4,Cu=5,Ru=6,Lu=7,xd=300,zr=301,Hr=302,go=303,_o=304,va=306,vo=1e3,Wi=1001,xo=1002,pn=1003,Pu=1004,Is=1005,Nn=1006,Ta=1007,$i=1008,ai=1009,bd=1010,yd=1011,ys=1012,nl=1013,qi=1014,On=1015,Es=1016,il=1017,rl=1018,Gr=1020,Md=35902,Sd=1021,wd=1022,Ln=1023,Ed=1024,Td=1025,Ir=1026,Vr=1027,sl=1028,al=1029,Ad=1030,ol=1031,ll=1033,ia=33776,ra=33777,sa=33778,aa=33779,bo=35840,yo=35841,Mo=35842,So=35843,wo=36196,Eo=37492,To=37496,Ao=37808,Co=37809,Ro=37810,Lo=37811,Po=37812,Do=37813,ko=37814,Io=37815,Fo=37816,Uo=37817,No=37818,Oo=37819,Bo=37820,zo=37821,oa=36492,Ho=36494,Go=36495,Cd=36283,Vo=36284,Wo=36285,$o=36286,Du=3200,ku=3201,Rd=0,Iu=1,vi="",un="srgb",qr="srgb-linear",xa="linear",mt="srgb",sr=7680,Fl=519,Fu=512,Uu=513,Nu=514,Ld=515,Ou=516,Bu=517,zu=518,Hu=519,Ul=35044,Nl=35048,Ol="300 es",ii=2e3,ua=2001;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const _s=Math.PI/180,Ms=180/Math.PI;function Yr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function cl(n,e){return(n%e+e)%e}function Gu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Vu(n,e,t){return n!==e?(t-n)/(e-n):0}function vs(n,e,t){return(1-t)*n+t*e}function Wu(n,e,t,i){return vs(n,e,1-Math.exp(-t*i))}function $u(n,e=1){return e-Math.abs(cl(n,e*2)-e)}function Xu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ju(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yu(n,e){return n+Math.random()*(e-n)}function Ku(n){return n*(.5-Math.random())}function Zu(n){n!==void 0&&(Bl=n);let e=Bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ju(n){return n*_s}function Qu(n){return n*Ms}function ep(n){return(n&n-1)===0&&n!==0}function tp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function np(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ip(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),p=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*p,o*l);break;case"YZY":n.set(c*p,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*p,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jn={DEG2RAD:_s,RAD2DEG:Ms,generateUUID:Yr,clamp:Zt,euclideanModulo:cl,mapLinear:Gu,inverseLerp:Vu,lerp:vs,damp:Wu,pingpong:$u,smoothstep:Xu,smootherstep:qu,randInt:ju,randFloat:Yu,randFloatSpread:Ku,seededRandom:Zu,degToRad:Ju,radToDeg:Qu,isPowerOfTwo:ep,ceilPowerOfTwo:tp,floorPowerOfTwo:np,setQuaternionFromProperEuler:ip,normalize:qt,denormalize:Mr};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],f=i[5],g=i[8],x=r[0],m=r[3],u=r[6],w=r[1],T=r[4],y=r[7],B=r[2],R=r[5],L=r[8];return s[0]=a*x+o*w+c*B,s[3]=a*m+o*T+c*R,s[6]=a*u+o*y+c*L,s[1]=l*x+h*w+d*B,s[4]=l*m+h*T+d*R,s[7]=l*u+h*y+d*L,s[2]=p*x+f*w+g*B,s[5]=p*m+f*T+g*R,s[8]=p*u+f*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,f=l*s-a*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Ye;function Pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rp(){const n=pa("canvas");return n.style.display="block",n}const zl={};function fs(n){n in zl||(zl[n]=!0,console.warn(n))}function sp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ap(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function op(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=ri(n.r),n.g=ri(n.g),n.b=ri(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=Fr(n.r),n.g=Fr(n.g),n.b=Fr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vi?xa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Vl=[.3127,.329],Wl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[qr]:{primaries:Hl,whitePoint:Vl,transfer:xa,toXYZ:Wl,fromXYZ:$l,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Hl,whitePoint:Vl,transfer:mt,toXYZ:Wl,fromXYZ:$l,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let ar;class lp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=pa("canvas")),ar.width=e.width,ar.height=e.height;const i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class Dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ca(r[a].image)):s.push(Ca(r[a]))}else s=Ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class Qt extends jr{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=Wi,r=Wi,s=Nn,a=$i,o=Ln,c=ai,l=Qt.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Yr(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=xd;Qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(f+1)/2,B=(u+1)/2,R=(h+p)/4,L=(d+x)/4,k=(g+m)/4;return T>y&&T>B?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=L/i):y>B?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=k/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=L/s,r=k/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(p-h)/w,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends jr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends hp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kd extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const p=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||h!==g){let m=1-o;const u=c*p+l*f+h*g+d*x,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const B=Math.sqrt(T),R=Math.atan2(B,u*w);m=Math.sin(m*R)/B,o=Math.sin(o*R)/B}const y=o*w;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+x*y,m===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=B,l*=B,h*=B,d*=B}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*p,e[t+1]=c*g+h*p+l*d-o*f,e[t+2]=l*g+h*f+o*p-c*d,e[t+3]=h*g-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=i+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new P,Xl=new Kr;class Ji{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Us.subVectors(this.max,ss),or.subVectors(e.a,ss),lr.subVectors(e.b,ss),cr.subVectors(e.c,ss),di.subVectors(lr,or),hi.subVectors(cr,lr),Di.subVectors(or,cr);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Di.z,Di.y,di.z,0,-di.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-di.y,di.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!La(t,or,lr,cr,Us)||(t=[1,0,0,0,1,0,0,0,1],!La(t,or,lr,cr,Us))?!1:(Ns.crossVectors(di,hi),t=[Ns.x,Ns.y,Ns.z],La(t,or,lr,cr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,Fs=new Ji,or=new P,lr=new P,cr=new P,di=new P,hi=new P,Di=new P,ss=new P,Us=new P,Ns=new P,ki=new P;function La(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ki.fromArray(n,s);const o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const pp=new Ji,as=new P,Pa=new P;class Ts{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Pa)),this.expandByPoint(as.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new P,Da=new P,Os=new P,ui=new P,ka=new P,Bs=new P,Ia=new P;class Id{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Da.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Da);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=ui.dot(this.direction),c=-ui.dot(Os),l=ui.lengthSq(),h=Math.abs(1-a*a);let d,p,f,g;if(h>0)if(d=a*c-o,p=a*o-c,g=s*h,d>=0)if(p>=-g)if(p<=g){const x=1/h;d*=x,p*=x,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Da).addScaledVector(Os,p),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){ka.subVectors(t,e),Bs.subVectors(i,e),Ia.crossVectors(ka,Bs);let a=this.direction.dot(Ia),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(Bs.crossVectors(ui,Bs));if(c<0)return null;const l=o*this.direction.dot(ka.cross(ui));if(l<0||c+l>a)return null;const h=-o*ui.dot(Ia);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m)}set(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){const p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,mp)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),pi.crossVectors(i,cn),pi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),pi.crossVectors(i,cn)),pi.normalize(),zs.crossVectors(cn,pi),r[0]=pi.x,r[4]=zs.x,r[8]=cn.x,r[1]=pi.y,r[5]=zs.y,r[9]=cn.y,r[2]=pi.z,r[6]=zs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],f=i[13],g=i[2],x=i[6],m=i[10],u=i[14],w=i[3],T=i[7],y=i[11],B=i[15],R=r[0],L=r[4],k=r[8],S=r[12],_=r[1],A=r[5],G=r[9],z=r[13],K=r[2],te=r[6],Y=r[10],re=r[14],X=r[3],he=r[7],ye=r[11],Fe=r[15];return s[0]=a*R+o*_+c*K+l*X,s[4]=a*L+o*A+c*te+l*he,s[8]=a*k+o*G+c*Y+l*ye,s[12]=a*S+o*z+c*re+l*Fe,s[1]=h*R+d*_+p*K+f*X,s[5]=h*L+d*A+p*te+f*he,s[9]=h*k+d*G+p*Y+f*ye,s[13]=h*S+d*z+p*re+f*Fe,s[2]=g*R+x*_+m*K+u*X,s[6]=g*L+x*A+m*te+u*he,s[10]=g*k+x*G+m*Y+u*ye,s[14]=g*S+x*z+m*re+u*Fe,s[3]=w*R+T*_+y*K+B*X,s[7]=w*L+T*A+y*te+B*he,s[11]=w*k+T*G+y*Y+B*ye,s[15]=w*S+T*z+y*re+B*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*p+i*l*p+r*o*f-i*c*f)+x*(+t*c*f-t*l*p+s*a*p-r*a*f+r*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*a*d+i*a*f+s*o*h-i*l*h)+u*(-r*o*h-t*c*d+t*o*p+r*a*d-i*a*p+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],m=e[14],u=e[15],w=d*m*l-x*p*l+x*c*f-o*m*f-d*c*u+o*p*u,T=g*p*l-h*m*l-g*c*f+a*m*f+h*c*u-a*p*u,y=h*x*l-g*d*l+g*o*f-a*x*f-h*o*u+a*d*u,B=g*d*c-h*x*c-g*o*p+a*x*p+h*o*m-a*d*m,R=t*w+i*T+r*y+s*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=w*L,e[1]=(x*p*s-d*m*s-x*r*f+i*m*f+d*r*u-i*p*u)*L,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*u+i*c*u)*L,e[3]=(d*c*s-o*p*s-d*r*l+i*p*l+o*r*f-i*c*f)*L,e[4]=T*L,e[5]=(h*m*s-g*p*s+g*r*f-t*m*f-h*r*u+t*p*u)*L,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*L,e[7]=(a*p*s-h*c*s+h*r*l-t*p*l-a*r*f+t*c*f)*L,e[8]=y*L,e[9]=(g*d*s-h*x*s-g*i*f+t*x*f+h*i*u-t*d*u)*L,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*u+t*o*u)*L,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*f-t*o*f)*L,e[12]=B*L,e[13]=(h*x*r-g*d*r+g*i*p-t*x*p-h*i*m+t*d*m)*L,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*L,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*p+t*o*p)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,f=s*h,g=s*d,x=a*h,m=a*d,u=o*d,w=c*l,T=c*h,y=c*d,B=i.x,R=i.y,L=i.z;return r[0]=(1-(x+u))*B,r[1]=(f+y)*B,r[2]=(g-T)*B,r[3]=0,r[4]=(f-y)*R,r[5]=(1-(p+u))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+T)*L,r[9]=(m-w)*L,r[10]=(1-(p+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=dr.set(r[0],r[1],r[2]).length();const a=dr.set(r[4],r[5],r[6]).length(),o=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const l=1/s,h=1/a,d=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ii){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let f,g;if(o===ii)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ua)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ii){const c=this.elements,l=1/(t-e),h=1/(i-r),d=1/(a-s),p=(t+e)*l,f=(i+r)*h;let g,x;if(o===ii)g=(a+s)*d,x=-2*d;else if(o===ua)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dr=new P,An=new yt,fp=new P(0,0,0),mp=new P(1,1,1),pi=new P,zs=new P,cn=new P,ql=new yt,jl=new Kr;class Dn{constructor(e=0,t=0,i=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const Yl=new P,hr=new Kr,Xn=new yt,Hs=new P,os=new P,_p=new P,vp=new Kr,Kl=new P(1,0,0),Zl=new P(0,1,0),Jl=new P(0,0,1),Ql={type:"added"},xp={type:"removed"},ur={type:"childadded",child:null},Fa={type:"childremoved",child:null};class kt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new P,t=new Dn,i=new Kr,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ye}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(os,Hs,this.up):Xn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(Xn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new P(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new P,qn=new P,Ua=new P,jn=new P,pr=new P,fr=new P,ec=new P,Na=new P,Oa=new P,Ba=new P,za=new St,Ha=new St,Ga=new St;class Rn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),qn.subVectors(i,t),Ua.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(qn),c=Cn.dot(Ua),l=qn.dot(qn),h=qn.dot(Ua),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return za.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),za.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(za,s.x),a.addScaledVector(Ha,s.y),a.addScaledVector(Ga,s.z),a}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),qn.subVectors(e,t),Cn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Cn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;pr.subVectors(r,i),fr.subVectors(s,i),Na.subVectors(e,i);const c=pr.dot(Na),l=fr.dot(Na);if(c<=0&&l<=0)return t.copy(i);Oa.subVectors(e,r);const h=pr.dot(Oa),d=fr.dot(Oa);if(h>=0&&d<=h)return t.copy(r);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(pr,a);Ba.subVectors(e,s);const f=pr.dot(Ba),g=fr.dot(Ba);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(fr,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ec.subVectors(s,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(ec,o);const u=1/(m+x+p);return a=x*u,o=p*u,t.copy(i).addScaledVector(pr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=cl(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Va(a,s,e+1/3),this.g=Va(a,s,e),this.b=Va(a,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ot.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Zt(Gt.r*255,0,255))*65536+Math.round(Zt(Gt.g*255,0,255))*256+Math.round(Zt(Gt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=un){ot.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Gs);const i=vs(fi.h,Gs.h,t),r=vs(fi.s,Gs.s,t),s=vs(fi.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Je;Je.NAMES=Fd;let bp=0;class As extends jr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Yr(),this.name="",this.blending=kr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ao&&(i.blendSrc=this.blendSrc),this.blendDst!==oo&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jt extends As{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new P,Vs=new dt;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}}class Ud extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nd extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yp=0;const gn=new yt,Wa=new kt,mr=new P,dn=new Ji,ls=new Ji,Dt=new P;class Hn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Nd:Ud)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(dn.min,ls.min),dn.expandByPoint(Dt),Dt.addVectors(dn.max,ls.max),dn.expandByPoint(Dt)):(dn.expandByPoint(ls.min),dn.expandByPoint(ls.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(mr.fromBufferAttribute(e,l),Dt.add(mr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<i.count;k++)o[k]=new P,c[k]=new P;const l=new P,h=new P,d=new P,p=new dt,f=new dt,g=new dt,x=new P,m=new P;function u(k,S,_){l.fromBufferAttribute(i,k),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),p.fromBufferAttribute(s,k),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,_),h.sub(l),d.sub(l),f.sub(p),g.sub(p);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),o[k].add(x),o[S].add(x),o[_].add(x),c[k].add(m),c[S].add(m),c[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let k=0,S=w.length;k<S;++k){const _=w[k],A=_.start,G=_.count;for(let z=A,K=A+G;z<K;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new P,y=new P,B=new P,R=new P;function L(k){B.fromBufferAttribute(r,k),R.copy(B);const S=o[k];T.copy(S),T.sub(B.multiplyScalar(B.dot(S))).normalize(),y.crossVectors(R,S);const A=y.dot(c[k])<0?-1:1;a.setXYZW(k,T.x,T.y,T.z,A)}for(let k=0,S=w.length;k<S;++k){const _=w[k],A=_.start,G=_.count;for(let z=A,K=A+G;z<K;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Pn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=e(p,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new yt,Ii=new Id,Ws=new Ts,nc=new P,$s=new P,Xs=new P,qs=new P,$a=new P,js=new P,ic=new P,Ys=new P;class tt extends kt{constructor(e=new Hn,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&($a.fromBufferAttribute(d,e),a?js.addScaledVector($a,h):js.addScaledVector($a.sub(t),h))}t.add(js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Ws.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ws,nc)===null||Ii.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(tc),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const m=p[g],u=a[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,B=T;y<B;y+=3){const R=o.getX(y),L=o.getX(y+1),k=o.getX(y+2);r=Ks(this,u,e,i,l,h,d,R,L,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){const w=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=Ks(this,a,e,i,l,h,d,w,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const m=p[g],u=a[m.materialIndex],w=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,B=T;y<B;y+=3){const R=y,L=y+1,k=y+2;r=Ks(this,u,e,i,l,h,d,R,L,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){const w=m,T=m+1,y=m+2;r=Ks(this,a,e,i,l,h,d,w,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Mp(n,e,t,i,r,s,a,o){let c;if(e.side===sn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Si,o),c===null)return null;Ys.copy(o),Ys.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ys);return l<t.near||l>t.far?null:{distance:l,point:Ys.clone(),object:n}}function Ks(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,$s),n.getVertexPosition(c,Xs),n.getVertexPosition(l,qs);const h=Mp(n,e,t,i,$s,Xs,qs,ic);if(h){const d=new P;Rn.getBarycoord(ic,$s,Xs,qs,d),r&&(h.uv=Rn.getInterpolatedAttribute(r,o,c,l,d,new dt)),s&&(h.uv1=Rn.getInterpolatedAttribute(s,o,c,l,d,new dt)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new P,materialIndex:0};Rn.getNormal($s,Xs,qs,p.normal),h.face=p,h.barycoord=d}return h}class wi extends Hn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(d,2));function g(x,m,u,w,T,y,B,R,L,k,S){const _=y/L,A=B/k,G=y/2,z=B/2,K=R/2,te=L+1,Y=k+1;let re=0,X=0;const he=new P;for(let ye=0;ye<Y;ye++){const Fe=ye*A-z;for(let Ge=0;Ge<te;Ge++){const st=Ge*_-G;he[x]=st*w,he[m]=Fe*T,he[u]=K,l.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[u]=R>0?1:-1,h.push(he.x,he.y,he.z),d.push(Ge/L),d.push(1-ye/k),re+=1}}for(let ye=0;ye<k;ye++)for(let Fe=0;Fe<L;Fe++){const Ge=p+Fe+te*ye,st=p+Fe+te*(ye+1),J=p+(Fe+1)+te*(ye+1),ae=p+(Fe+1)+te*ye;c.push(Ge,st,ae),c.push(st,J,ae),X+=6}o.addGroup(f,X,S),f+=X,p+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Wr(n[t]);for(const r in i)e[r]=i[r]}return e}function Sp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const wp={clone:Wr,merge:Yt};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends As{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new P,rc=new dt,sc=new dt;class bn extends Bd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,rc,sc),t.subVectors(sc,rc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,_r=1;class Ap extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(gr,_r,e,t);r.layers=this.layers,this.add(r);const s=new bn(gr,_r,e,t);s.layers=this.layers,this.add(s);const a=new bn(gr,_r,e,t);a.layers=this.layers,this.add(a);const o=new bn(gr,_r,e,t);o.layers=this.layers,this.add(o);const c=new bn(gr,_r,e,t);c.layers=this.layers,this.add(c);const l=new bn(gr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zd extends Qt{constructor(e,t,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cp extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wi(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:yi});s.uniforms.tEquirect.value=t;const a=new tt(r,s),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=Nn),new Ap(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Xa=new P,Rp=new P,Lp=new Ye;class Oi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xa.subVectors(i,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Ts,Zs=new P;class hl{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],p=r[7],f=r[8],g=r[9],x=r[10],m=r[11],u=r[12],w=r[13],T=r[14],y=r[15];if(i[0].setComponents(c-s,p-l,m-f,y-u).normalize(),i[1].setComponents(c+s,p+l,m+f,y+u).normalize(),i[2].setComponents(c+a,p+h,m+g,y+w).normalize(),i[3].setComponents(c-a,p-h,m-g,y-w).normalize(),i[4].setComponents(c-o,p-d,m-x,y-T).normalize(),t===ii)i[5].setComponents(c+o,p+d,m+x,y+T).normalize();else if(t===ua)i[5].setComponents(o,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pp(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class ti extends Hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,p=t/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){const w=u*p-a;for(let T=0;T<l;T++){const y=T*d-s;g.push(y,-w,0),x.push(0,0,1),m.push(T/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){const T=w+l*u,y=w+l*(u+1),B=w+1+l*(u+1),R=w+1+l*u;f.push(T,y,R),f.push(y,B,R)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$p=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Df=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
}`,zm=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,sg=`#define TOON
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
}`,ag=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Dp,alphahash_pars_fragment:kp,alphamap_fragment:Ip,alphamap_pars_fragment:Fp,alphatest_fragment:Up,alphatest_pars_fragment:Np,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:Hp,begin_vertex:Gp,beginnormal_vertex:Vp,bsdfs:Wp,iridescence_fragment:$p,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Kp,color_fragment:Zp,color_pars_fragment:Jp,color_pars_vertex:Qp,color_vertex:ef,common:tf,cube_uv_reflection_fragment:nf,defaultnormal_vertex:rf,displacementmap_pars_vertex:sf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:df,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:pf,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:_f,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:yf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Sf,lights_pars_begin:wf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Cf,lights_phong_pars_fragment:Rf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Df,lights_fragment_maps:kf,lights_fragment_end:If,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:$f,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:jf,morphtarget_vertex:Yf,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:em,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:rm,iridescence_pars_fragment:sm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:dm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:bm,skinnormal_vertex:ym,specularmap_fragment:Mm,specularmap_pars_fragment:Sm,tonemapping_fragment:wm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Lm,worldpos_vertex:Pm,background_vert:Dm,background_frag:km,backgroundCube_vert:Im,backgroundCube_frag:Fm,cube_vert:Um,cube_frag:Nm,depth_vert:Om,depth_frag:Bm,distanceRGBA_vert:zm,distanceRGBA_frag:Hm,equirect_vert:Gm,equirect_frag:Vm,linedashed_vert:Wm,linedashed_frag:$m,meshbasic_vert:Xm,meshbasic_frag:qm,meshlambert_vert:jm,meshlambert_frag:Ym,meshmatcap_vert:Km,meshmatcap_frag:Zm,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:dg,sprite_frag:hg},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fn={basic:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Fn.physical={uniforms:Yt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Js={r:0,b:0,g:0},Ui=new Dn,ug=new yt;function pg(n,e,t,i,r,s,a){const o=new Je(0);let c=s===!0?0:1,l,h,d=null,p=0,f=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function x(w){let T=!1;const y=g(w);y===null?u(o,c):y&&y.isColor&&(u(y,1),T=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,T){const y=g(T);y&&(y.isCubeTexture||y.mapping===va)?(h===void 0&&(h=new tt(new wi(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Wr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ui.copy(T.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Ui)),h.material.toneMapped=ot.getTransfer(y.colorSpace)!==mt,(d!==y||p!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new tt(new ti(2,2),new Ei({name:"BackgroundMaterial",uniforms:Wr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,T){w.getRGB(Js,Od(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),c=T,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:m}}function fg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(_,A,G,z,K){let te=!1;const Y=d(z,G,A);s!==Y&&(s=Y,l(s.object)),te=f(_,z,G,K),te&&g(_,z,G,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(_,A,G,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,A,G){const z=G.wireframe===!0;let K=i[_.id];K===void 0&&(K={},i[_.id]=K);let te=K[A.id];te===void 0&&(te={},K[A.id]=te);let Y=te[z];return Y===void 0&&(Y=p(c()),te[z]=Y),Y}function p(_){const A=[],G=[],z=[];for(let K=0;K<t;K++)A[K]=0,G[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:z,object:_,attributes:{},index:null}}function f(_,A,G,z){const K=s.attributes,te=A.attributes;let Y=0;const re=G.getAttributes();for(const X in re)if(re[X].location>=0){const ye=K[X];let Fe=te[X];if(Fe===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(Fe=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(Fe=_.instanceColor)),ye===void 0||ye.attribute!==Fe||Fe&&ye.data!==Fe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function g(_,A,G,z){const K={},te=A.attributes;let Y=0;const re=G.getAttributes();for(const X in re)if(re[X].location>=0){let ye=te[X];ye===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ye=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ye=_.instanceColor));const Fe={};Fe.attribute=ye,ye&&ye.data&&(Fe.data=ye.data),K[X]=Fe,Y++}s.attributes=K,s.attributesNum=Y,s.index=z}function x(){const _=s.newAttributes;for(let A=0,G=_.length;A<G;A++)_[A]=0}function m(_){u(_,0)}function u(_,A){const G=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;G[_]=1,z[_]===0&&(n.enableVertexAttribArray(_),z[_]=1),K[_]!==A&&(n.vertexAttribDivisor(_,A),K[_]=A)}function w(){const _=s.newAttributes,A=s.enabledAttributes;for(let G=0,z=A.length;G<z;G++)A[G]!==_[G]&&(n.disableVertexAttribArray(G),A[G]=0)}function T(_,A,G,z,K,te,Y){Y===!0?n.vertexAttribIPointer(_,A,G,K,te):n.vertexAttribPointer(_,A,G,z,K,te)}function y(_,A,G,z){x();const K=z.attributes,te=G.getAttributes(),Y=A.defaultAttributeValues;for(const re in te){const X=te[re];if(X.location>=0){let he=K[re];if(he===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(he=_.instanceColor)),he!==void 0){const ye=he.normalized,Fe=he.itemSize,Ge=e.get(he);if(Ge===void 0)continue;const st=Ge.buffer,J=Ge.type,ae=Ge.bytesPerElement,De=J===n.INT||J===n.UNSIGNED_INT||he.gpuType===nl;if(he.isInterleavedBufferAttribute){const me=he.data,Be=me.stride,Ve=he.offset;if(me.isInstancedInterleavedBuffer){for(let je=0;je<X.locationSize;je++)u(X.location+je,me.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let je=0;je<X.locationSize;je++)m(X.location+je);n.bindBuffer(n.ARRAY_BUFFER,st);for(let je=0;je<X.locationSize;je++)T(X.location+je,Fe/X.locationSize,J,ye,Be*ae,(Ve+Fe/X.locationSize*je)*ae,De)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)u(X.location+me,he.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);n.bindBuffer(n.ARRAY_BUFFER,st);for(let me=0;me<X.locationSize;me++)T(X.location+me,Fe/X.locationSize,J,ye,Fe*ae,Fe/X.locationSize*me*ae,De)}}else if(Y!==void 0){const ye=Y[re];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(X.location,ye);break;case 3:n.vertexAttrib3fv(X.location,ye);break;case 4:n.vertexAttrib4fv(X.location,ye);break;default:n.vertexAttrib1fv(X.location,ye)}}}}w()}function B(){k();for(const _ in i){const A=i[_];for(const G in A){const z=A[G];for(const K in z)h(z[K].object),delete z[K];delete A[G]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const A=i[_.id];for(const G in A){const z=A[G];for(const K in z)h(z[K].object),delete z[K];delete A[G]}delete i[_.id]}function L(_){for(const A in i){const G=i[A];if(G[_.id]===void 0)continue;const z=G[_.id];for(const K in z)h(z[K].object),delete z[K];delete G[_.id]}}function k(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function mg(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function c(l,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*p[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function gg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Ln&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const k=L===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ai&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==On&&!k)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:B,maxSamples:R}}function _g(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Oi,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const w=s?0:i,T=w*4;let y=u.clippingState||null;c.value=y,y=h(g,p,T,f);for(let B=0;B!==T;++B)y[B]=t[B];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const u=f+x*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,y=f;T!==x;++T,y+=4)a.copy(d[T]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vg(n){let e=new WeakMap;function t(a,o){return o===go?a.mapping=zr:o===_o&&(a.mapping=Hr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===go||o===_o)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cp(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gd extends Bd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,ac=[.125,.215,.35,.446,.526,.582],Gi=20,qa=new Gd,oc=new Je;let ja=null,Ya=0,Ka=0,Za=!1;const Bi=(1+Math.sqrt(5))/2,vr=1/Bi,lc=[new P(-Bi,vr,0),new P(Bi,vr,0),new P(-vr,0,Bi),new P(vr,0,Bi),new P(0,Bi,-vr),new P(0,Bi,vr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Ya,Ka),this._renderer.xr.enabled=Za,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Es,format:Ln,colorSpace:qr,depthBuffer:!1},r=dc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=bg(s,e,t)}return r}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,i,r){const o=new bn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(oc),h.toneMapping=Mi,h.autoClear=!1;const f=new jt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new tt(new wi,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(oc),x=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):w===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const T=this._cubeSize;Qs(r,w*T,u>2?T:0,T,T),h.setRenderTarget(r),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Qs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lc[(r-s-1)%lc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new tt(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const u=[];let w=0;for(let L=0;L<Gi;++L){const k=L/x,S=Math.exp(-k*k/2);u.push(S),L===0?w+=S:L<m&&(w+=2*S)}for(let L=0;L<u.length;L++)u[L]=u[L]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-i;const y=this._sizeLods[r],B=3*y*(r>T-Rr?r-T+Rr:0),R=4*(this._cubeSize-y);Qs(t,B,R,3*y,2*y),c.setRenderTarget(t),c.render(d,qa)}}function xg(n){const e=[],t=[],i=[];let r=n;const s=n-Rr+1+ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Rr?c=ac[a-n+Rr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,u=1,w=new Float32Array(x*g*f),T=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let R=0;R<f;R++){const L=R%3*2/3-1,k=R>2?0:-1,S=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];w.set(S,x*g*R),T.set(p,m*g*R);const _=[R,R,R,R,R,R];y.set(_,u*g*R)}const B=new Hn;B.setAttribute("position",new Pn(w,x)),B.setAttribute("uv",new Pn(T,m)),B.setAttribute("faceIndex",new Pn(y,u)),e.push(B),r>Rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dc(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bg(n,e,t){const i=new Float32Array(Gi),r=new P(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function hc(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function uc(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function yg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===go||c===_o,h=c===zr||c===Hr;if(l||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new cc(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new cc(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Mg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sg(n,e,t,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)e.update(p[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],n.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let T=0,y=w.length;T<y;T+=3){const B=w[T+0],R=w[T+1],L=w[T+2];p.push(B,R,R,L,L,B)}}else if(g!==void 0){const w=g.array;x=g.version;for(let T=0,y=w.length/3-1;T<y;T+=3){const B=T+0,R=T+1,L=T+2;p.push(B,R,R,L,L,B)}}else return;const m=new(Pd(p)?Nd:Ud)(p,1);m.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function wg(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*a),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*a,g),t.update(f,i,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,i,1)}function d(p,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,x,0,g);let u=0;for(let w=0;w<g;w++)u+=f[w]*x[w];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Eg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tg(n,e,t){const i=new WeakMap,r=new St;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let _=function(){k.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var f=_;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let B=o.attributes.position.count*y,R=1;B>e.maxTextureSize&&(R=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const L=new Float32Array(B*R*4*d),k=new kd(L,B,R,d);k.type=On,k.needsUpdate=!0;const S=y*4;for(let A=0;A<d;A++){const G=u[A],z=w[A],K=T[A],te=B*R*4*A;for(let Y=0;Y<G.count;Y++){const re=Y*S;g===!0&&(r.fromBufferAttribute(G,Y),L[te+re+0]=r.x,L[te+re+1]=r.y,L[te+re+2]=r.z,L[te+re+3]=0),x===!0&&(r.fromBufferAttribute(z,Y),L[te+re+4]=r.x,L[te+re+5]=r.y,L[te+re+6]=r.z,L[te+re+7]=0),m===!0&&(r.fromBufferAttribute(K,Y),L[te+re+8]=r.x,L[te+re+9]=r.y,L[te+re+10]=r.z,L[te+re+11]=K.itemSize===4?r.w:1)}}p={count:d,texture:k,size:new dt(B,R)},i.set(o,p),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Ag(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Vd extends Qt{constructor(e,t,i,r,s,a,o,c,l,h=Ir){if(h!==Ir&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ir&&(i=qi),i===void 0&&h===Vr&&(i=Gr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wd=new Qt,pc=new Vd(1,1),$d=new kd,Xd=new up,qd=new zd,fc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function Zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fc[r];if(s===void 0&&(s=new Float32Array(r),fc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;vc.set(i),n.uniformMatrix2fv(this.addr,!1,vc),Pt(t,i)}}function kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;_c.set(i),n.uniformMatrix3fv(this.addr,!1,_c),Pt(t,i)}}function Ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;gc.set(i),n.uniformMatrix4fv(this.addr,!1,gc),Pt(t,i)}}function Fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=Ld,s=pc):s=Wd,t.setTexture2D(e||s,r)}function Wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xd,r)}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qd,r)}function Xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$d,r)}function qg(n){switch(n){case 5126:return Cg;case 35664:return Rg;case 35665:return Lg;case 35666:return Pg;case 35674:return Dg;case 35675:return kg;case 35676:return Ig;case 5124:case 35670:return Fg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Xg}}function jg(n,e){n.uniform1fv(this.addr,e)}function Yg(n,e){const t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function Kg(n,e){const t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function Zg(n,e){const t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jg(n,e){const t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qg(n,e){const t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e0(n,e){const t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t0(n,e){n.uniform1iv(this.addr,e)}function n0(n,e){n.uniform2iv(this.addr,e)}function i0(n,e){n.uniform3iv(this.addr,e)}function r0(n,e){n.uniform4iv(this.addr,e)}function s0(n,e){n.uniform1uiv(this.addr,e)}function a0(n,e){n.uniform2uiv(this.addr,e)}function o0(n,e){n.uniform3uiv(this.addr,e)}function l0(n,e){n.uniform4uiv(this.addr,e)}function c0(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Wd,s[a])}function d0(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xd,s[a])}function h0(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||qd,s[a])}function u0(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$d,s[a])}function p0(n){switch(n){case 5126:return jg;case 35664:return Yg;case 35665:return Kg;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}class f0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qg(t.type)}}class m0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p0(t.type)}}class g0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function xc(n,e){n.seq.push(e),n.map[e.id]=e}function _0(n,e,t){const i=n.name,r=i.length;for(Ja.lastIndex=0;;){const s=Ja.exec(i),a=Ja.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){xc(t,l===void 0?new f0(o,n,e):new m0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new g0(o),xc(t,d)),t=d}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function bc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const v0=37297;let x0=0;function b0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const yc=new Ye;function y0(n){ot._getMatrix(yc,ot.workingColorSpace,n);const e=`mat3( ${yc.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+b0(n.getShaderSource(e),a)}else return r}function M0(n,e){const t=y0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function S0(n,e){let t;switch(e){case Eu:t="Linear";break;case Tu:t="Reinhard";break;case Au:t="Cineon";break;case vd:t="ACESFilmic";break;case Ru:t="AgX";break;case Lu:t="Neutral";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new P;function w0(){ot.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function T0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ms(n){return n!==""}function Sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(n){return n.replace(C0,L0)}const R0=new Map;function L0(n,e){let t=Ke[e];if(t===void 0){const i=R0.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(n){return n.replace(P0,D0)}function D0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function k0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function I0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function U0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Su:e="ENVMAP_BLENDING_MIX";break;case wu:e="ENVMAP_BLENDING_ADD";break}return e}function N0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function O0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=k0(t),l=I0(t),h=F0(t),d=U0(t),p=N0(t),f=E0(t),g=T0(s),x=r.createProgram();let m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),u.length>0&&(u+=`
`)):(m=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),u=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Mi?S0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,M0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=Xo(a),a=Sc(a,t),a=wc(a,t),o=Xo(o),o=Sc(o,t),o=wc(o,t),a=Ec(a),o=Ec(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=w+m+a,y=w+u+o,B=bc(r,r.VERTEX_SHADER,T),R=bc(r,r.FRAGMENT_SHADER,y);r.attachShader(x,B),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(A){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(B).trim(),K=r.getShaderInfoLog(R).trim();let te=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,B,R);else{const re=Mc(r,B,"vertex"),X=Mc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+re+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||K==="")&&(Y=!1);Y&&(A.diagnostics={runnable:te,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:u}})}r.deleteShader(B),r.deleteShader(R),k=new la(r,x),S=A0(r,x)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,v0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=R,this}let B0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new H0(e),t.set(e,i)),i}}class H0{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}}function G0(n,e,t,i,r,s,a){const o=new dl,c=new z0,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,_,A,G,z){const K=G.fog,te=z.geometry,Y=S.isMeshStandardMaterial?G.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),X=re&&re.mapping===va?re.image.height:null,he=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ye=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Fe=ye!==void 0?ye.length:0;let Ge=0;te.morphAttributes.position!==void 0&&(Ge=1),te.morphAttributes.normal!==void 0&&(Ge=2),te.morphAttributes.color!==void 0&&(Ge=3);let st,J,ae,De;if(he){const at=Fn[he];st=at.vertexShader,J=at.fragmentShader}else st=S.vertexShader,J=S.fragmentShader,c.update(S),ae=c.getVertexShaderID(S),De=c.getFragmentShaderID(S);const me=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Ve=z.isInstancedMesh===!0,je=z.isBatchedMesh===!0,Z=!!S.map,j=!!S.matcap,ze=!!re,D=!!S.aoMap,nt=!!S.lightMap,Oe=!!S.bumpMap,Me=!!S.normalMap,Re=!!S.displacementMap,pe=!!S.emissiveMap,oe=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,H=S.clearcoat>0,ne=S.dispersion>0,se=S.iridescence>0,ee=S.sheen>0,ke=S.transmission>0,ue=v&&!!S.anisotropyMap,Ae=H&&!!S.clearcoatMap,Qe=H&&!!S.clearcoatNormalMap,le=H&&!!S.clearcoatRoughnessMap,Se=se&&!!S.iridescenceMap,He=se&&!!S.iridescenceThicknessMap,We=ee&&!!S.sheenColorMap,we=ee&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,qe=!!S.specularColorMap,pt=!!S.specularIntensityMap,I=ke&&!!S.transmissionMap,ge=ke&&!!S.thicknessMap,q=!!S.gradientMap,ie=!!S.alphaMap,ve=S.alphaTest>0,xe=!!S.alphaHash,$e=!!S.extensions;let bt=Mi;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Ct={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:J,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:je,batchingColor:je&&z._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&z.instanceColor!==null,instancingMorph:Ve&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:qr,alphaToCoverage:!!S.alphaToCoverage,map:Z,matcap:j,envMap:ze,envMapMode:ze&&re.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:nt,bumpMap:Oe,normalMap:Me,displacementMap:p&&Re,emissiveMap:pe,normalMapObjectSpace:Me&&S.normalMapType===Iu,normalMapTangentSpace:Me&&S.normalMapType===Rd,metalnessMap:oe,roughnessMap:E,anisotropy:v,anisotropyMap:ue,clearcoat:H,clearcoatMap:Ae,clearcoatNormalMap:Qe,clearcoatRoughnessMap:le,dispersion:ne,iridescence:se,iridescenceMap:Se,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:We,sheenRoughnessMap:we,specularMap:Ze,specularColorMap:qe,specularIntensityMap:pt,transmission:ke,transmissionMap:I,thicknessMap:ge,gradientMap:q,opaque:S.transparent===!1&&S.blending===kr&&S.alphaToCoverage===!1,alphaMap:ie,alphaTest:ve,alphaHash:xe,combine:S.combine,mapUv:Z&&x(S.map.channel),aoMapUv:D&&x(S.aoMap.channel),lightMapUv:nt&&x(S.lightMap.channel),bumpMapUv:Oe&&x(S.bumpMap.channel),normalMapUv:Me&&x(S.normalMap.channel),displacementMapUv:Re&&x(S.displacementMap.channel),emissiveMapUv:pe&&x(S.emissiveMap.channel),metalnessMapUv:oe&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:ue&&x(S.anisotropyMap.channel),clearcoatMapUv:Ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(S.sheenRoughnessMap.channel),specularMapUv:Ze&&x(S.specularMap.channel),specularColorMapUv:qe&&x(S.specularColorMap.channel),specularIntensityMapUv:pt&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:ge&&x(S.thicknessMap.channel),alphaMapUv:ie&&x(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Me||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(Z||ie),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ge,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Z&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function u(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)_.push(A),_.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(w(_,S),T(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function w(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function T(S,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const _=g[S.type];let A;if(_){const G=Fn[_];A=wp.clone(G.uniforms)}else A=S.uniforms;return A}function B(S,_){let A;for(let G=0,z=h.length;G<z;G++){const K=h[G];if(K.cacheKey===_){A=K,++A.usedTimes;break}}return A===void 0&&(A=new O0(n,_,S,s),h.push(A)),A}function R(S){if(--S.usedTimes===0){const _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function L(S){c.remove(S)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:B,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:k}}function V0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function W0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ac(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,f,g,x,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,p,f,g,x,m){const u=a(d,p,f,g,x,m);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):t.push(u)}function c(d,p,f,g,x,m){const u=a(d,p,f,g,x,m);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||W0),i.length>1&&i.sort(p||Ac),r.length>1&&r.sort(p||Ac)}function h(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function $0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Cc,n.set(i,[a])):r>=s.length?(a=new Cc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function X0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Je};break;case"SpotLight":t={position:new P,direction:new P,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function q0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let j0=0;function Y0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K0(n){const e=new X0,t=q0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const r=new P,s=new yt,a=new yt;function o(l){let h=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,w=0,T=0,y=0,B=0,R=0,L=0;l.sort(Y0);for(let S=0,_=l.length;S<_;S++){const A=l[S],G=A.color,z=A.intensity,K=A.distance,te=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=G.r*z,d+=G.g*z,p+=G.b*z;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(A.sh.coefficients[Y],z);L++}else if(A.isDirectionalLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const re=A.shadow,X=t.get(A);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=te,i.directionalShadowMatrix[f]=A.shadow.matrix,w++}i.directional[f]=Y,f++}else if(A.isSpotLight){const Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(G).multiplyScalar(z),Y.distance=K,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,i.spot[x]=Y;const re=A.shadow;if(A.map&&(i.spotLightMap[B]=A.map,B++,re.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[x]=re.matrix,A.castShadow){const X=t.get(A);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=te,y++}x++}else if(A.isRectAreaLight){const Y=e.get(A);Y.color.copy(G).multiplyScalar(z),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=Y,m++}else if(A.isPointLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const re=A.shadow,X=t.get(A);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=A.shadow.matrix,T++}i.point[g]=Y,g++}else if(A.isHemisphereLight){const Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(z),Y.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[u]=Y,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const k=i.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==x||k.rectAreaLength!==m||k.hemiLength!==u||k.numDirectionalShadows!==w||k.numPointShadows!==T||k.numSpotShadows!==y||k.numSpotMaps!==B||k.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+B-R,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,k.directionalLength=f,k.pointLength=g,k.spotLength=x,k.rectAreaLength=m,k.hemiLength=u,k.numDirectionalShadows=w,k.numPointShadows=T,k.numSpotShadows=y,k.numSpotMaps=B,k.numLightProbes=L,i.version=j0++)}function c(l,h){let d=0,p=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const T=l[u];if(T.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(T.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Rc(n){const e=new K0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Z0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rc(n),e.set(r,[o])):s>=a.length?(o=new Rc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class J0 extends As{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q0 extends As{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`;function n_(n,e,t){let i=new hl;const r=new dt,s=new dt,a=new St,o=new J0({depthPacking:ku}),c=new Q0,l={},h=t.maxTextureSize,d={[Si]:sn,[sn]:Si,[ei]:ei},p=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let u=this.type;this.render=function(R,L,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==Zn&&this.type===Zn,K=u===Zn&&this.type!==Zn;for(let te=0,Y=R.length;te<Y;te++){const re=R[te],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const he=X.getFrameExtents();if(r.multiply(he),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/he.x),r.x=s.x*he.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/he.y),r.y=s.y*he.y,X.mapSize.y=s.y)),X.map===null||z===!0||K===!0){const Fe=this.type!==Zn?{minFilter:pn,magFilter:pn}:{};X.map!==null&&X.map.dispose(),X.map=new ji(r.x,r.y,Fe),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ye=X.getViewportCount();for(let Fe=0;Fe<ye;Fe++){const Ge=X.getViewport(Fe);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),G.viewport(a),X.updateMatrices(re,Fe),i=X.getFrustum(),y(L,k,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===Zn&&w(X,k),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,A)};function w(R,L){const k=e.update(x);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ji(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,k,p,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,k,f,x,null)}function T(R,L,k,S){let _=null;const A=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)_=A;else if(_=k.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const G=_.uuid,z=L.uuid;let K=l[G];K===void 0&&(K={},l[G]=K);let te=K[z];te===void 0&&(te=_.clone(),K[z]=te,L.addEventListener("dispose",B)),_=te}if(_.visible=L.visible,_.wireframe=L.wireframe,S===Zn?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:d[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,k.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=n.properties.get(_);G.light=k}return _}function y(R,L,k,S,_){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Zn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const z=e.update(R),K=R.material;if(Array.isArray(K)){const te=z.groups;for(let Y=0,re=te.length;Y<re;Y++){const X=te[Y],he=K[X.materialIndex];if(he&&he.visible){const ye=T(R,he,S,_);R.onBeforeShadow(n,R,L,k,z,ye,X),n.renderBufferDirect(k,null,z,ye,R,X),R.onAfterShadow(n,R,L,k,z,ye,X)}}}else if(K.visible){const te=T(R,K,S,_);R.onBeforeShadow(n,R,L,k,z,te,null),n.renderBufferDirect(k,null,z,te,R,null),R.onAfterShadow(n,R,L,k,z,te,null)}}const G=R.children;for(let z=0,K=G.length;z<K;z++)y(G[z],L,k,S,_)}function B(R){R.target.removeEventListener("dispose",B);for(const k in l){const S=l[k],_=R.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const i_={[lo]:co,[ho]:fo,[uo]:mo,[Br]:po,[co]:lo,[fo]:ho,[mo]:uo,[po]:Br};function r_(n,e){function t(){let I=!1;const ge=new St;let q=null;const ie=new St(0,0,0,0);return{setMask:function(ve){q!==ve&&!I&&(n.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){I=ve},setClear:function(ve,xe,$e,bt,Ct){Ct===!0&&(ve*=bt,xe*=bt,$e*=bt),ge.set(ve,xe,$e,bt),ie.equals(ge)===!1&&(n.clearColor(ve,xe,$e,bt),ie.copy(ge))},reset:function(){I=!1,q=null,ie.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,q=null,ie=null,ve=null;return{setReversed:function(xe){if(ge!==xe){const $e=e.get("EXT_clip_control");ge?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const bt=ve;ve=null,this.setClear(bt)}ge=xe},getReversed:function(){return ge},setTest:function(xe){xe?me(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(xe){q!==xe&&!I&&(n.depthMask(xe),q=xe)},setFunc:function(xe){if(ge&&(xe=i_[xe]),ie!==xe){switch(xe){case lo:n.depthFunc(n.NEVER);break;case co:n.depthFunc(n.ALWAYS);break;case ho:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case fo:n.depthFunc(n.GREATER);break;case mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=xe}},setLocked:function(xe){I=xe},setClear:function(xe){ve!==xe&&(ge&&(xe=1-xe),n.clearDepth(xe),ve=xe)},reset:function(){I=!1,q=null,ie=null,ve=null,ge=!1}}}function r(){let I=!1,ge=null,q=null,ie=null,ve=null,xe=null,$e=null,bt=null,Ct=null;return{setTest:function(at){I||(at?me(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(at){ge!==at&&!I&&(n.stencilMask(at),ge=at)},setFunc:function(at,tn,Wt){(q!==at||ie!==tn||ve!==Wt)&&(n.stencilFunc(at,tn,Wt),q=at,ie=tn,ve=Wt)},setOp:function(at,tn,Wt){(xe!==at||$e!==tn||bt!==Wt)&&(n.stencilOp(at,tn,Wt),xe=at,$e=tn,bt=Wt)},setLocked:function(at){I=at},setClear:function(at){Ct!==at&&(n.clearStencil(at),Ct=at)},reset:function(){I=!1,ge=null,q=null,ie=null,ve=null,xe=null,$e=null,bt=null,Ct=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,w=null,T=null,y=null,B=null,R=null,L=new Je(0,0,0),k=0,S=!1,_=null,A=null,G=null,z=null,K=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=re>=2);let he=null,ye={};const Fe=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),st=new St().fromArray(Fe),J=new St().fromArray(Ge);function ae(I,ge,q,ie){const ve=new Uint8Array(4),xe=n.createTexture();n.bindTexture(I,xe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<q;$e++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ge+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return xe}const De={};De[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(n.DEPTH_TEST),a.setFunc(Br),Oe(!1),Me(Pl),me(n.CULL_FACE),D(yi);function me(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Be(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ve(I,ge){return d[I]!==ge?(n.bindFramebuffer(I,ge),d[I]=ge,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function je(I,ge){let q=f,ie=!1;if(I){q=p.get(ge),q===void 0&&(q=[],p.set(ge,q));const ve=I.textures;if(q.length!==ve.length||q[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,$e=ve.length;xe<$e;xe++)q[xe]=n.COLOR_ATTACHMENT0+xe;q.length=ve.length,ie=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ie=!0);ie&&n.drawBuffers(q)}function Z(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const j={[Hi]:n.FUNC_ADD,[au]:n.FUNC_SUBTRACT,[ou]:n.FUNC_REVERSE_SUBTRACT};j[lu]=n.MIN,j[cu]=n.MAX;const ze={[du]:n.ZERO,[hu]:n.ONE,[uu]:n.SRC_COLOR,[ao]:n.SRC_ALPHA,[vu]:n.SRC_ALPHA_SATURATE,[gu]:n.DST_COLOR,[fu]:n.DST_ALPHA,[pu]:n.ONE_MINUS_SRC_COLOR,[oo]:n.ONE_MINUS_SRC_ALPHA,[_u]:n.ONE_MINUS_DST_COLOR,[mu]:n.ONE_MINUS_DST_ALPHA,[xu]:n.CONSTANT_COLOR,[bu]:n.ONE_MINUS_CONSTANT_COLOR,[yu]:n.CONSTANT_ALPHA,[Mu]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,ge,q,ie,ve,xe,$e,bt,Ct,at){if(I===yi){x===!0&&(Be(n.BLEND),x=!1);return}if(x===!1&&(me(n.BLEND),x=!0),I!==su){if(I!==m||at!==S){if((u!==Hi||y!==Hi)&&(n.blendEquation(n.FUNC_ADD),u=Hi,y=Hi),at)switch(I){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,T=null,B=null,R=null,L.set(0,0,0),k=0,m=I,S=at}return}ve=ve||ge,xe=xe||q,$e=$e||ie,(ge!==u||ve!==y)&&(n.blendEquationSeparate(j[ge],j[ve]),u=ge,y=ve),(q!==w||ie!==T||xe!==B||$e!==R)&&(n.blendFuncSeparate(ze[q],ze[ie],ze[xe],ze[$e]),w=q,T=ie,B=xe,R=$e),(bt.equals(L)===!1||Ct!==k)&&(n.blendColor(bt.r,bt.g,bt.b,Ct),L.copy(bt),k=Ct),m=I,S=!1}function nt(I,ge){I.side===ei?Be(n.CULL_FACE):me(n.CULL_FACE);let q=I.side===sn;ge&&(q=!q),Oe(q),I.blending===kr&&I.transparent===!1?D(yi):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ie=I.stencilWrite;o.setTest(ie),ie&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){_!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),_=I)}function Me(I){I!==nu?(me(n.CULL_FACE),I!==A&&(I===Pl?n.cullFace(n.BACK):I===iu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),A=I}function Re(I){I!==G&&(Y&&n.lineWidth(I),G=I)}function pe(I,ge,q){I?(me(n.POLYGON_OFFSET_FILL),(z!==ge||K!==q)&&(n.polygonOffset(ge,q),z=ge,K=q)):Be(n.POLYGON_OFFSET_FILL)}function oe(I){I?me(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+te-1),he!==I&&(n.activeTexture(I),he=I)}function v(I,ge,q){q===void 0&&(he===null?q=n.TEXTURE0+te-1:q=he);let ie=ye[q];ie===void 0&&(ie={type:void 0,texture:void 0},ye[q]=ie),(ie.type!==I||ie.texture!==ge)&&(he!==q&&(n.activeTexture(q),he=q),n.bindTexture(I,ge||De[I]),ie.type=I,ie.texture=ge)}function H(){const I=ye[he];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(I){st.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function we(I){J.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function Ze(I,ge){let q=l.get(ge);q===void 0&&(q=new WeakMap,l.set(ge,q));let ie=q.get(I);ie===void 0&&(ie=n.getUniformBlockIndex(ge,I.name),q.set(I,ie))}function qe(I,ge){const ie=l.get(ge).get(I);c.get(ge)!==ie&&(n.uniformBlockBinding(ge,ie,I.__bindingPointIndex),c.set(ge,ie))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,ye={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,w=null,T=null,y=null,B=null,R=null,L=new Je(0,0,0),k=0,S=!1,_=null,A=null,G=null,z=null,K=null,st.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Be,bindFramebuffer:Ve,drawBuffers:je,useProgram:Z,setBlending:D,setMaterial:nt,setFlipSided:Oe,setCullFace:Me,setLineWidth:Re,setPolygonOffset:pe,setScissorTest:oe,activeTexture:E,bindTexture:v,unbindTexture:H,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Se,texImage3D:He,updateUBOMapping:Ze,uniformBlockBinding:qe,texStorage2D:Qe,texStorage3D:le,texSubImage2D:ee,texSubImage3D:ke,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ae,scissor:We,viewport:we,reset:pt}}function Lc(n,e,t,i){const r=s_(i);switch(t){case Sd:return n*e;case Ed:return n*e;case Td:return n*e*2;case sl:return n*e/r.components*r.byteLength;case al:return n*e/r.components*r.byteLength;case Ad:return n*e*2/r.components*r.byteLength;case ol:return n*e*2/r.components*r.byteLength;case wd:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case ll:return n*e*4/r.components*r.byteLength;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:case So:return Math.max(n,16)*Math.max(e,8)/4;case bo:case Mo:return Math.max(n,8)*Math.max(e,8)/2;case wo:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case oa:case Ho:case Go:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cd:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wo:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s_(n){switch(n){case ai:case bd:return{byteLength:1,components:1};case ys:case yd:case Es:return{byteLength:2,components:1};case il:case rl:return{byteLength:2,components:4};case qi:case nl:case On:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function a_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):pa("canvas")}function x(E,v,H){let ne=1;const se=oe(E);if((se.width>H||se.height>H)&&(ne=H/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ee=Math.floor(ne*se.width),ke=Math.floor(ne*se.height);d===void 0&&(d=g(ee,ke));const ue=v?g(ee,ke):d;return ue.width=ee,ue.height=ke,ue.getContext("2d").drawImage(E,0,0,ee,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+ke+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,v,H,ne,se=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=v;if(v===n.RED&&(H===n.FLOAT&&(ee=n.R32F),H===n.HALF_FLOAT&&(ee=n.R16F),H===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.R8UI),H===n.UNSIGNED_SHORT&&(ee=n.R16UI),H===n.UNSIGNED_INT&&(ee=n.R32UI),H===n.BYTE&&(ee=n.R8I),H===n.SHORT&&(ee=n.R16I),H===n.INT&&(ee=n.R32I)),v===n.RG&&(H===n.FLOAT&&(ee=n.RG32F),H===n.HALF_FLOAT&&(ee=n.RG16F),H===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.RG8UI),H===n.UNSIGNED_SHORT&&(ee=n.RG16UI),H===n.UNSIGNED_INT&&(ee=n.RG32UI),H===n.BYTE&&(ee=n.RG8I),H===n.SHORT&&(ee=n.RG16I),H===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),H===n.UNSIGNED_INT&&(ee=n.RGB32UI),H===n.BYTE&&(ee=n.RGB8I),H===n.SHORT&&(ee=n.RGB16I),H===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),H===n.UNSIGNED_INT&&(ee=n.RGBA32UI),H===n.BYTE&&(ee=n.RGBA8I),H===n.SHORT&&(ee=n.RGBA16I),H===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),v===n.RGBA){const ke=se?xa:ot.getTransfer(ne);H===n.FLOAT&&(ee=n.RGBA32F),H===n.HALF_FLOAT&&(ee=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ee=ke===mt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(E,v){let H;return E?v===null||v===qi||v===Gr?H=n.DEPTH24_STENCIL8:v===On?H=n.DEPTH32F_STENCIL8:v===ys&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qi||v===Gr?H=n.DEPTH_COMPONENT24:v===On?H=n.DEPTH_COMPONENT32F:v===ys&&(H=n.DEPTH_COMPONENT16),H}function B(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==pn&&E.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),k(v),v.isVideoTexture&&h.delete(v)}function L(E){const v=E.target;v.removeEventListener("dispose",L),_(v)}function k(E){const v=i.get(E);if(v.__webglInit===void 0)return;const H=E.source,ne=p.get(H);if(ne){const se=ne[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(E),Object.keys(ne).length===0&&p.delete(H)}i.remove(E)}function S(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const H=E.source,ne=p.get(H);delete ne[v.__cacheKey],a.memory.textures--}function _(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let se=0;se<v.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(v.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[ne]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=E.textures;for(let ne=0,se=H.length;ne<se;ne++){const ee=i.get(H[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(H[ne])}i.remove(E)}let A=0;function G(){A=0}function z(){const E=A;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),A+=1,E}function K(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function te(E,v){const H=i.get(E);if(E.isVideoTexture&&Re(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,E,v);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function Y(E,v){const H=i.get(E);if(E.version>0&&H.__version!==E.version){J(H,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function re(E,v){const H=i.get(E);if(E.version>0&&H.__version!==E.version){J(H,E,v);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function X(E,v){const H=i.get(E);if(E.version>0&&H.__version!==E.version){ae(H,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}const he={[vo]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},ye={[pn]:n.NEAREST,[Pu]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Fe={[Fu]:n.NEVER,[Hu]:n.ALWAYS,[Uu]:n.LESS,[Ld]:n.LEQUAL,[Nu]:n.EQUAL,[zu]:n.GEQUAL,[Ou]:n.GREATER,[Bu]:n.NOTEQUAL};function Ge(E,v){if(v.type===On&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===Ta||v.magFilter===Is||v.magFilter===$i||v.minFilter===Nn||v.minFilter===Ta||v.minFilter===Is||v.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,he[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,he[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,he[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ye[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==Is&&v.minFilter!==$i||v.type===On&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function st(E,v){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const ne=v.source;let se=p.get(ne);se===void 0&&(se={},p.set(ne,se));const ee=K(v);if(ee!==E.__cacheKey){se[ee]===void 0&&(se[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[ee].usedTimes++;const ke=se[E.__cacheKey];ke!==void 0&&(se[E.__cacheKey].usedTimes--,ke.usedTimes===0&&S(v)),E.__cacheKey=ee,E.__webglTexture=se[ee].texture}return H}function J(E,v,H){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const se=st(E,v),ee=v.source;t.bindTexture(ne,E.__webglTexture,n.TEXTURE0+H);const ke=i.get(ee);if(ee.version!==ke.__version||se===!0){t.activeTexture(n.TEXTURE0+H);const ue=ot.getPrimaries(ot.workingColorSpace),Ae=v.colorSpace===vi?null:ot.getPrimaries(v.colorSpace),Qe=v.colorSpace===vi||ue===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let le=x(v.image,!1,r.maxTextureSize);le=pe(v,le);const Se=s.convert(v.format,v.colorSpace),He=s.convert(v.type);let We=T(v.internalFormat,Se,He,v.colorSpace,v.isVideoTexture);Ge(ne,v);let we;const Ze=v.mipmaps,qe=v.isVideoTexture!==!0,pt=ke.__version===void 0||se===!0,I=ee.dataReady,ge=B(v,le);if(v.isDepthTexture)We=y(v.format===Vr,v.type),pt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,We,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,We,le.width,le.height,0,Se,He,null));else if(v.isDataTexture)if(Ze.length>0){qe&&pt&&t.texStorage2D(n.TEXTURE_2D,ge,We,Ze[0].width,Ze[0].height);for(let q=0,ie=Ze.length;q<ie;q++)we=Ze[q],qe?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,Se,He,we.data):t.texImage2D(n.TEXTURE_2D,q,We,we.width,we.height,0,Se,He,we.data);v.generateMipmaps=!1}else qe?(pt&&t.texStorage2D(n.TEXTURE_2D,ge,We,le.width,le.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Se,He,le.data)):t.texImage2D(n.TEXTURE_2D,0,We,le.width,le.height,0,Se,He,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,We,Ze[0].width,Ze[0].height,le.depth);for(let q=0,ie=Ze.length;q<ie;q++)if(we=Ze[q],v.format!==Ln)if(Se!==null)if(qe){if(I)if(v.layerUpdates.size>0){const ve=Lc(we.width,we.height,v.format,v.type);for(const xe of v.layerUpdates){const $e=we.data.subarray(xe*ve/we.data.BYTES_PER_ELEMENT,(xe+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,xe,we.width,we.height,1,Se,$e)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,le.depth,Se,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,We,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,le.depth,Se,He,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,We,we.width,we.height,le.depth,0,Se,He,we.data)}else{qe&&pt&&t.texStorage2D(n.TEXTURE_2D,ge,We,Ze[0].width,Ze[0].height);for(let q=0,ie=Ze.length;q<ie;q++)we=Ze[q],v.format!==Ln?Se!==null?qe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(n.TEXTURE_2D,q,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,Se,He,we.data):t.texImage2D(n.TEXTURE_2D,q,We,we.width,we.height,0,Se,He,we.data)}else if(v.isDataArrayTexture)if(qe){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,We,le.width,le.height,le.depth),I)if(v.layerUpdates.size>0){const q=Lc(le.width,le.height,v.format,v.type);for(const ie of v.layerUpdates){const ve=le.data.subarray(ie*q/le.data.BYTES_PER_ELEMENT,(ie+1)*q/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,Se,He,ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,He,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,le.width,le.height,le.depth,0,Se,He,le.data);else if(v.isData3DTexture)qe?(pt&&t.texStorage3D(n.TEXTURE_3D,ge,We,le.width,le.height,le.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,He,le.data)):t.texImage3D(n.TEXTURE_3D,0,We,le.width,le.height,le.depth,0,Se,He,le.data);else if(v.isFramebufferTexture){if(pt)if(qe)t.texStorage2D(n.TEXTURE_2D,ge,We,le.width,le.height);else{let q=le.width,ie=le.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,We,q,ie,0,Se,He,null),q>>=1,ie>>=1}}else if(Ze.length>0){if(qe&&pt){const q=oe(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ge,We,q.width,q.height)}for(let q=0,ie=Ze.length;q<ie;q++)we=Ze[q],qe?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se,He,we):t.texImage2D(n.TEXTURE_2D,q,We,Se,He,we);v.generateMipmaps=!1}else if(qe){if(pt){const q=oe(le);t.texStorage2D(n.TEXTURE_2D,ge,We,q.width,q.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,He,le)}else t.texImage2D(n.TEXTURE_2D,0,We,Se,He,le);m(v)&&u(ne),ke.__version=ee.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ae(E,v,H){if(v.image.length!==6)return;const ne=st(E,v),se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+H);const ee=i.get(se);if(se.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const ke=ot.getPrimaries(ot.workingColorSpace),ue=v.colorSpace===vi?null:ot.getPrimaries(v.colorSpace),Ae=v.colorSpace===vi||ke===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let ie=0;ie<6;ie++)!Qe&&!le?Se[ie]=x(v.image[ie],!0,r.maxCubemapSize):Se[ie]=le?v.image[ie].image:v.image[ie],Se[ie]=pe(v,Se[ie]);const He=Se[0],We=s.convert(v.format,v.colorSpace),we=s.convert(v.type),Ze=T(v.internalFormat,We,we,v.colorSpace),qe=v.isVideoTexture!==!0,pt=ee.__version===void 0||ne===!0,I=se.dataReady;let ge=B(v,He);Ge(n.TEXTURE_CUBE_MAP,v);let q;if(Qe){qe&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ze,He.width,He.height);for(let ie=0;ie<6;ie++){q=Se[ie].mipmaps;for(let ve=0;ve<q.length;ve++){const xe=q[ve];v.format!==Ln?We!==null?qe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,xe.width,xe.height,We,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,Ze,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,xe.width,xe.height,We,we,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,Ze,xe.width,xe.height,0,We,we,xe.data)}}}else{if(q=v.mipmaps,qe&&pt){q.length>0&&ge++;const ie=oe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Se[ie].width,Se[ie].height,We,we,Se[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,Se[ie].width,Se[ie].height,0,We,we,Se[ie].data);for(let ve=0;ve<q.length;ve++){const $e=q[ve].image[ie].image;qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,$e.width,$e.height,We,we,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,Ze,$e.width,$e.height,0,We,we,$e.data)}}else{qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,We,we,Se[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,We,we,Se[ie]);for(let ve=0;ve<q.length;ve++){const xe=q[ve];qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,We,we,xe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,Ze,We,we,xe.image[ie])}}}m(v)&&u(n.TEXTURE_CUBE_MAP),ee.__version=se.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function De(E,v,H,ne,se,ee){const ke=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),Ae=T(H.internalFormat,ke,ue,H.colorSpace),Qe=i.get(v),le=i.get(H);if(le.__renderTarget=v,!Qe.__hasExternalTextures){const Se=Math.max(1,v.width>>ee),He=Math.max(1,v.height>>ee);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,Ae,Se,He,v.depth,0,ke,ue,null):t.texImage2D(se,ee,Ae,Se,He,0,ke,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,se,le.__webglTexture,0,Oe(v)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,se,le.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(E,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const ne=v.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,ee=y(v.stencilBuffer,se),ke=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Oe(v);Me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ee,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,E)}else{const ne=v.textures;for(let se=0;se<ne.length;se++){const ee=ne[se],ke=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),Ae=T(ee.internalFormat,ke,ue,ee.colorSpace),Qe=Oe(v);H&&Me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ae,v.width,v.height):Me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,Ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(v.depthTexture);ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const se=ne.__webglTexture,ee=Oe(v);if(v.depthTexture.format===Ir)Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===Vr)Me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(E){const v=i.get(E),H=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const ne=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=ne}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Be(v.__webglFramebuffer,E)}else if(H){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),me(v.__webglDepthbuffer[ne],E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),me(v.__webglDepthbuffer,E,!1);else{const ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(E,v,H){const ne=i.get(E);v!==void 0&&De(ne.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ve(E)}function Z(E){const v=E.texture,H=i.get(E),ne=i.get(v);E.addEventListener("dispose",L);const se=E.textures,ee=E.isWebGLCubeRenderTarget===!0,ke=se.length>1;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),ee){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)H.__webglFramebuffer[ue][Ae]=n.createFramebuffer()}else H.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)H.__webglFramebuffer[ue]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ke)for(let ue=0,Ae=se.length;ue<Ae;ue++){const Qe=i.get(se[ue]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Me(E)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const Ae=se[ue];H.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const Qe=s.convert(Ae.format,Ae.colorSpace),le=s.convert(Ae.type),Se=T(Ae.internalFormat,Qe,le,Ae.colorSpace,E.isXRRenderTarget===!0),He=Oe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),me(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)De(H.__webglFramebuffer[ue][Ae],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else De(H.__webglFramebuffer[ue],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ue=0,Ae=se.length;ue<Ae;ue++){const Qe=se[ue],le=i.get(Qe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ge(n.TEXTURE_2D,Qe),De(H.__webglFramebuffer,E,Qe,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Qe)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),Ge(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)De(H.__webglFramebuffer[Ae],E,v,n.COLOR_ATTACHMENT0,ue,Ae);else De(H.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,ue,0);m(v)&&u(ue),t.unbindTexture()}E.depthBuffer&&Ve(E)}function j(E){const v=E.textures;for(let H=0,ne=v.length;H<ne;H++){const se=v[H];if(m(se)){const ee=w(E),ke=i.get(se).__webglTexture;t.bindTexture(ee,ke),u(ee),t.unbindTexture()}}}const ze=[],D=[];function nt(E){if(E.samples>0){if(Me(E)===!1){const v=E.textures,H=E.width,ne=E.height;let se=n.COLOR_BUFFER_BIT;const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(E),ue=v.length>1;if(ue)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ae]);const Qe=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,se,n.NEAREST),c===!0&&(ze.length=0,D.length=0,ze.push(n.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ze.push(ee),D.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ae]);const Qe=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Oe(E){return Math.min(r.maxSamples,E.samples)}function Me(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Re(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function pe(E,v){const H=E.colorSpace,ne=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==qr&&H!==vi&&(ot.getTransfer(H)===mt?(ne!==Ln||se!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=je,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Me}function o_(n,e){function t(i,r=vi){let s;const a=ot.getTransfer(r);if(i===ai)return n.UNSIGNED_BYTE;if(i===il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.BYTE;if(i===yd)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===nl)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===Es)return n.HALF_FLOAT;if(i===Sd)return n.ALPHA;if(i===wd)return n.RGB;if(i===Ln)return n.RGBA;if(i===Ed)return n.LUMINANCE;if(i===Td)return n.LUMINANCE_ALPHA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===Vr)return n.DEPTH_STENCIL;if(i===sl)return n.RED;if(i===al)return n.RED_INTEGER;if(i===Ad)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===ia||i===ra||i===sa||i===aa)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===yo||i===Mo||i===So)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wo||i===Eo||i===To)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wo||i===Eo)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===To)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ao||i===Co||i===Ro||i===Lo||i===Po||i===Do||i===ko||i===Io||i===Fo||i===Uo||i===No||i===Oo||i===Bo||i===zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ao)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Io)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oa||i===Ho||i===Go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oa)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===Vo||i===Wo||i===$o)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$o)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class l_ extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c_={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
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

}`;class u_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:d_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p_ extends jr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null;const x=new u_,m=t.getContextAttributes();let u=null,w=null;const T=[],y=[],B=new dt;let R=null;const L=new bn;L.viewport=new St;const k=new bn;k.viewport=new St;const S=[L,k],_=new l_;let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=T[J];return ae===void 0&&(ae=new Qa,T[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=T[J];return ae===void 0&&(ae=new Qa,T[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=T[J];return ae===void 0&&(ae=new Qa,T[J]=ae),ae.getHandSpace()};function z(J){const ae=y.indexOf(J.inputSource);if(ae===-1)return;const De=T[ae];De!==void 0&&(De.update(J.inputSource,J.frame,l||a),De.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",te);for(let J=0;J<T.length;J++){const ae=y[J];ae!==null&&(y[J]=null,T[J].disconnect(ae))}A=null,G=null,x.reset(),e.setRenderTarget(u),f=null,p=null,d=null,r=null,w=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ji(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,De=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Vr:Ir,De=m.stencil?Gr:qi);const Be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(Be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new ji(p.textureWidth,p.textureHeight,{format:Ln,type:ai,depthTexture:new Vd(p.textureWidth,p.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(J){for(let ae=0;ae<J.removed.length;ae++){const De=J.removed[ae],me=y.indexOf(De);me>=0&&(y[me]=null,T[me].disconnect(De))}for(let ae=0;ae<J.added.length;ae++){const De=J.added[ae];let me=y.indexOf(De);if(me===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=y.length){y.push(De),me=Ve;break}else if(y[Ve]===null){y[Ve]=De,me=Ve;break}if(me===-1)break}const Be=T[me];Be&&Be.connect(De)}}const Y=new P,re=new P;function X(J,ae,De){Y.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(De.matrixWorld);const me=Y.distanceTo(re),Be=ae.projectionMatrix.elements,Ve=De.projectionMatrix.elements,je=Be[14]/(Be[10]-1),Z=Be[14]/(Be[10]+1),j=(Be[9]+1)/Be[5],ze=(Be[9]-1)/Be[5],D=(Be[8]-1)/Be[0],nt=(Ve[8]+1)/Ve[0],Oe=je*D,Me=je*nt,Re=me/(-D+nt),pe=Re*-D;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(pe),J.translateZ(Re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const oe=je+Re,E=Z+Re,v=Oe-pe,H=Me+(me-pe),ne=j*Z/E*oe,se=ze*Z/E*oe;J.projectionMatrix.makePerspective(v,H,ne,se,oe,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function he(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ae=J.near,De=J.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(De=x.depthFar)),_.near=k.near=L.near=ae,_.far=k.far=L.far=De,(A!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,G=_.far),L.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,_.layers.mask=L.layers.mask|k.layers.mask;const me=J.parent,Be=_.cameras;he(_,me);for(let Ve=0;Ve<Be.length;Ve++)he(Be[Ve],me);Be.length===2?X(_,L,k):_.projectionMatrix.copy(L.projectionMatrix),ye(J,_,me)};function ye(J,ae,De){De===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(De.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Fe=null;function Ge(J,ae){if(h=ae.getViewerPose(l||a),g=ae,h!==null){const De=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let me=!1;De.length!==_.cameras.length&&(_.cameras.length=0,me=!0);for(let Ve=0;Ve<De.length;Ve++){const je=De[Ve];let Z=null;if(f!==null)Z=f.getViewport(je);else{const ze=d.getViewSubImage(p,je);Z=ze.viewport,Ve===0&&(e.setRenderTargetTextures(w,ze.colorTexture,p.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(w))}let j=S[Ve];j===void 0&&(j=new bn,j.layers.enable(Ve),j.viewport=new St,S[Ve]=j),j.matrix.fromArray(je.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(je.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Z.x,Z.y,Z.width,Z.height),Ve===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),me===!0&&_.cameras.push(j)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ve=d.getDepthInformation(De[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,r.renderState)}}for(let De=0;De<T.length;De++){const me=y[De],Be=T[De];me!==null&&Be!==void 0&&Be.update(me,ae,l||a)}Fe&&Fe(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const st=new Hd;st.setAnimationLoop(Ge),this.setAnimationLoop=function(J){Fe=J},this.dispose=function(){}}}const Ni=new Dn,f_=new yt;function m_(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Od(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,w,T,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,w,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=e.get(u),T=w.envMap,y=w.envMapRotation;T&&(m.envMap.value=T,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Ni)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function g_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,T){const y=T.program;i.uniformBlockBinding(w,y)}function l(w,T){let y=r[w.id];y===void 0&&(g(w),y=h(w),r[w.id]=y,w.addEventListener("dispose",m));const B=T.program;i.updateUBOMapping(w,B);const R=e.render.frame;s[w.id]!==R&&(p(w),s[w.id]=R)}function h(w){const T=d();w.__bindingPointIndex=T;const y=n.createBuffer(),B=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,B,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const T=r[w.id],y=w.uniforms,B=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,L=y.length;R<L;R++){const k=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,_=k.length;S<_;S++){const A=k[S];if(f(A,R,S,B)===!0){const G=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let K=0;for(let te=0;te<z.length;te++){const Y=z[te],re=x(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,G+K,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,K),K+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,T,y,B){const R=w.value,L=T+"_"+y;if(B[L]===void 0)return typeof R=="number"||typeof R=="boolean"?B[L]=R:B[L]=R.clone(),!0;{const k=B[L];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return B[L]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function g(w){const T=w.uniforms;let y=0;const B=16;for(let L=0,k=T.length;L<k;L++){const S=Array.isArray(T[L])?T[L]:[T[L]];for(let _=0,A=S.length;_<A;_++){const G=S[_],z=Array.isArray(G.value)?G.value:[G.value];for(let K=0,te=z.length;K<te;K++){const Y=z[K],re=x(Y),X=y%B,he=X%re.boundary,ye=X+he;y+=he,ye!==0&&B-ye<re.storage&&(y+=B-ye),G.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=re.storage}}}const R=y%B;return R>0&&(y+=B-R),w.__size=y,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class __{constructor(e={}){const{canvas:t=rp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Mi,this.toneMappingExposure=1;const y=this;let B=!1,R=0,L=0,k=null,S=-1,_=null;const A=new St,G=new St;let z=null;const K=new Je(0);let te=0,Y=t.width,re=t.height,X=1,he=null,ye=null;const Fe=new St(0,0,Y,re),Ge=new St(0,0,Y,re);let st=!1;const J=new hl;let ae=!1,De=!1;const me=new yt,Be=new yt,Ve=new P,je=new St,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function ze(){return k===null?X:1}let D=i;function nt(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){const F="webgl2";if(D=nt(F,b),D===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Oe,Me,Re,pe,oe,E,v,H,ne,se,ee,ke,ue,Ae,Qe,le,Se,He,We,we,Ze,qe,pt,I;function ge(){Oe=new Mg(D),Oe.init(),qe=new o_(D,Oe),Me=new gg(D,Oe,e,qe),Re=new r_(D,Oe),Me.reverseDepthBuffer&&p&&Re.buffers.depth.setReversed(!0),pe=new Eg(D),oe=new V0,E=new a_(D,Oe,Re,oe,Me,qe,pe),v=new vg(y),H=new yg(y),ne=new Pp(D),pt=new fg(D,ne),se=new Sg(D,ne,pe,pt),ee=new Ag(D,se,ne,pe),We=new Tg(D,Me,E),le=new _g(oe),ke=new G0(y,v,H,Oe,Me,pt,le),ue=new m_(y,oe),Ae=new $0,Qe=new Z0(Oe),He=new pg(y,v,H,Re,ee,f,c),Se=new n_(y,ee,Me),I=new g_(D,pe,Me,Re),we=new mg(D,Oe,pe),Ze=new wg(D,Oe,pe),pe.programs=ke.programs,y.capabilities=Me,y.extensions=Oe,y.properties=oe,y.renderLists=Ae,y.shadowMap=Se,y.state=Re,y.info=pe}ge();const q=new p_(y,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(Y,re,!1))},this.getSize=function(b){return b.set(Y,re)},this.setSize=function(b,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,re=F,t.width=Math.floor(b*X),t.height=Math.floor(F*X),V===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Y*X,re*X).floor()},this.setDrawingBufferSize=function(b,F,V){Y=b,re=F,X=V,t.width=Math.floor(b*V),t.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(Fe)},this.setViewport=function(b,F,V,W){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,F,V,W),Re.viewport(A.copy(Fe).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,F,V,W){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,F,V,W),Re.scissor(G.copy(Ge).multiplyScalar(X).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){Re.setScissorTest(st=b)},this.setOpaqueSort=function(b){he=b},this.setTransparentSort=function(b){ye=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(b=!0,F=!0,V=!0){let W=0;if(b){let N=!1;if(k!==null){const ce=k.texture.format;N=ce===ll||ce===ol||ce===al}if(N){const ce=k.texture.type,be=ce===ai||ce===qi||ce===ys||ce===Gr||ce===il||ce===rl,Ie=He.getClearColor(),Ee=He.getClearAlpha(),Ne=Ie.r,Xe=Ie.g,Le=Ie.b;be?(g[0]=Ne,g[1]=Xe,g[2]=Le,g[3]=Ee,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ne,x[1]=Xe,x[2]=Le,x[3]=Ee,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ae.dispose(),Qe.dispose(),oe.dispose(),v.dispose(),H.dispose(),ee.dispose(),pt.dispose(),I.dispose(),ke.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ci),q.removeEventListener("sessionend",Bt),Sn.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const b=pe.autoReset,F=Se.enabled,V=Se.autoUpdate,W=Se.needsUpdate,N=Se.type;ge(),pe.autoReset=b,Se.enabled=F,Se.autoUpdate=V,Se.needsUpdate=W,Se.type=N}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){const F=b.target;F.removeEventListener("dispose",$e),bt(F)}function bt(b){Ct(b),oe.remove(b)}function Ct(b){const F=oe.get(b).programs;F!==void 0&&(F.forEach(function(V){ke.releaseProgram(V)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,W,N,ce){F===null&&(F=Z);const be=N.isMesh&&N.matrixWorld.determinant()<0,Ie=Ps(b,F,V,W,N);Re.setMaterial(W,be);let Ee=V.index,Ne=1;if(W.wireframe===!0){if(Ee=se.getWireframeAttribute(V),Ee===void 0)return;Ne=2}const Xe=V.drawRange,Le=V.attributes.position;let it=Xe.start*Ne,ft=(Xe.start+Xe.count)*Ne;ce!==null&&(it=Math.max(it,ce.start*Ne),ft=Math.min(ft,(ce.start+ce.count)*Ne)),Ee!==null?(it=Math.max(it,0),ft=Math.min(ft,Ee.count)):Le!=null&&(it=Math.max(it,0),ft=Math.min(ft,Le.count));const _t=ft-it;if(_t<0||_t===1/0)return;pt.setup(N,W,Ie,V,Ee);let zt,lt=we;if(Ee!==null&&(zt=ne.get(Ee),lt=Ze,lt.setIndex(zt)),N.isMesh)W.wireframe===!0?(Re.setLineWidth(W.wireframeLinewidth*ze()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(N.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),Re.setLineWidth(Ue*ze()),N.isLineSegments?lt.setMode(D.LINES):N.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else N.isPoints?lt.setMode(D.POINTS):N.isSprite&&lt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)lt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))lt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ue=N._multiDrawStarts,wn=N._multiDrawCounts,ct=N._multiDrawCount,on=Ee?ne.get(Ee).bytesPerElement:1,li=oe.get(W).currentProgram.getUniforms();for(let $t=0;$t<ct;$t++)li.setValue(D,"_gl_DrawID",$t),lt.render(Ue[$t]/on,wn[$t])}else if(N.isInstancedMesh)lt.renderInstances(it,_t,N.count);else if(V.isInstancedBufferGeometry){const Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wn=Math.min(V.instanceCount,Ue);lt.renderInstances(it,_t,wn)}else lt.render(it,_t)};function at(b,F,V){b.transparent===!0&&b.side===ei&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,Ri(b,F,V),b.side=Si,b.needsUpdate=!0,Ri(b,F,V),b.side=ei):Ri(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),u=Qe.get(V),u.init(F),T.push(u),V.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),b!==V&&b.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const W=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ce=N.material;if(ce)if(Array.isArray(ce))for(let be=0;be<ce.length;be++){const Ie=ce[be];at(Ie,V,N),W.add(Ie)}else at(ce,V,N),W.add(ce)}),T.pop(),u=null,W},this.compileAsync=function(b,F,V=null){const W=this.compile(b,F,V);return new Promise(N=>{function ce(){if(W.forEach(function(be){oe.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){N(b);return}setTimeout(ce,10)}Oe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tn=null;function Wt(b){tn&&tn(b)}function Ci(){Sn.stop()}function Bt(){Sn.start()}const Sn=new Hd;Sn.setAnimationLoop(Wt),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(b){tn=b,q.setAnimationLoop(b),b===null?Sn.stop():Sn.start()},q.addEventListener("sessionstart",Ci),q.addEventListener("sessionend",Bt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,k),u=Qe.get(b,T.length),u.init(F),T.push(u),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Be),De=this.localClippingEnabled,ae=le.init(this.clippingPlanes,De),m=Ae.get(b,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&tr(ce,F,-1/0,y.sortObjects)}tr(b,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(he,ye),j=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,j&&He.addToRenderList(m,b),this.info.render.frame++,ae===!0&&le.beginShadows();const V=u.state.shadowsArray;Se.render(V,b,F),ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(u.setupLights(),F.isArrayCamera){const ce=F.cameras;if(N.length>0)for(let be=0,Ie=ce.length;be<Ie;be++){const Ee=ce[be];es(W,N,b,Ee)}j&&He.render(b);for(let be=0,Ie=ce.length;be<Ie;be++){const Ee=ce[be];Qr(m,b,Ee,Ee.viewport)}}else N.length>0&&es(W,N,b,F),j&&He.render(b),Qr(m,b,F);k!==null&&(E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(y,b,F),pt.resetDefaultState(),S=-1,_=null,T.pop(),T.length>0?(u=T[T.length-1],ae===!0&&le.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function tr(b,F,V,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);const be=ee.update(b),Ie=b.material;Ie.visible&&m.push(b,be,Ie,V,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const be=ee.update(b),Ie=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),je.copy(be.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(Ie)){const Ee=be.groups;for(let Ne=0,Xe=Ee.length;Ne<Xe;Ne++){const Le=Ee[Ne],it=Ie[Le.materialIndex];it&&it.visible&&m.push(b,be,it,V,je.z,Le)}}else Ie.visible&&m.push(b,be,Ie,V,je.z,null)}}const ce=b.children;for(let be=0,Ie=ce.length;be<Ie;be++)tr(ce[be],F,V,W)}function Qr(b,F,V,W){const N=b.opaque,ce=b.transmissive,be=b.transparent;u.setupLightsView(V),ae===!0&&le.setGlobalState(y.clippingPlanes,V),W&&Re.viewport(A.copy(W)),N.length>0&&an(N,F,V),ce.length>0&&an(ce,F,V),be.length>0&&an(be,F,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function es(b,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new ji(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Es:ai,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ce=u.state.transmissionRenderTarget[W.id],be=W.viewport||A;ce.setSize(be.z,be.w);const Ie=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(K),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),j&&He.render(V);const Ee=y.toneMapping;y.toneMapping=Mi;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ae===!0&&le.setGlobalState(y.clippingPlanes,W),an(b,V,W),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Le=0,it=F.length;Le<it;Le++){const ft=F[Le],_t=ft.object,zt=ft.geometry,lt=ft.material,Ue=ft.group;if(lt.side===ei&&_t.layers.test(W.layers)){const wn=lt.side;lt.side=sn,lt.needsUpdate=!0,ts(_t,V,W,zt,lt,Ue),lt.side=wn,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}y.setRenderTarget(Ie),y.setClearColor(K,te),Ne!==void 0&&(W.viewport=Ne),y.toneMapping=Ee}function an(b,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ce=b.length;N<ce;N++){const be=b[N],Ie=be.object,Ee=be.geometry,Ne=W===null?be.material:W,Xe=be.group;Ie.layers.test(V.layers)&&ts(Ie,F,V,Ee,Ne,Xe)}}function ts(b,F,V,W,N,ce){b.onBeforeRender(y,F,V,W,N,ce),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,F,V,W,b,ce),N.transparent===!0&&N.side===ei&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,y.renderBufferDirect(V,F,W,N,b,ce),N.side=Si,N.needsUpdate=!0,y.renderBufferDirect(V,F,W,N,b,ce),N.side=ei):y.renderBufferDirect(V,F,W,N,b,ce),b.onAfterRender(y,F,V,W,N,ce)}function Ri(b,F,V){F.isScene!==!0&&(F=Z);const W=oe.get(b),N=u.state.lights,ce=u.state.shadowsArray,be=N.state.version,Ie=ke.getParameters(b,N.state,ce,F,V),Ee=ke.getProgramCacheKey(Ie);let Ne=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?H:v).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",$e),Ne=new Map,W.programs=Ne);let Xe=Ne.get(Ee);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===be)return ns(b,Ie),Xe}else Ie.uniforms=ke.getUniforms(b),b.onBeforeCompile(Ie,y),Xe=ke.acquireProgram(Ie,Ee),Ne.set(Ee,Xe),W.uniforms=Ie.uniforms;const Le=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=le.uniform),ns(b,Ie),W.needsLights=Ds(b),W.lightsStateVersion=be,W.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function nr(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=la.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ns(b,F){const V=oe.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Ps(b,F,V,W,N){F.isScene!==!0&&(F=Z),E.resetTextureUnits();const ce=F.fog,be=W.isMeshStandardMaterial?F.environment:null,Ie=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qr,Ee=(W.isMeshStandardMaterial?H:v).get(W.envMap||be),Ne=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color;let _t=Mi;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_t=y.toneMapping);const zt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=zt!==void 0?zt.length:0,Ue=oe.get(W),wn=u.state.lights;if(ae===!0&&(De===!0||b!==_)){const Xt=b===_&&W.id===S;le.setState(W,b,Xt)}let ct=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==wn.state.version||Ue.outputColorSpace!==Ie||N.isBatchedMesh&&Ue.batching===!1||!N.isBatchedMesh&&Ue.batching===!0||N.isBatchedMesh&&Ue.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ue.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ue.instancing===!1||!N.isInstancedMesh&&Ue.instancing===!0||N.isSkinnedMesh&&Ue.skinning===!1||!N.isSkinnedMesh&&Ue.skinning===!0||N.isInstancedMesh&&Ue.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ue.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ue.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ue.instancingMorph===!1&&N.morphTexture!==null||Ue.envMap!==Ee||W.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Ne||Ue.vertexTangents!==Xe||Ue.morphTargets!==Le||Ue.morphNormals!==it||Ue.morphColors!==ft||Ue.toneMapping!==_t||Ue.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Ue.__version=W.version);let on=Ue.currentProgram;ct===!0&&(on=Ri(W,F,N));let li=!1,$t=!1,Li=!1;const vt=on.getUniforms(),nn=Ue.uniforms;if(Re.useProgram(on.program)&&(li=!0,$t=!0,Li=!0),W.id!==S&&(S=W.id,$t=!0),li||_!==b){Re.buffers.depth.getReversed()?(me.copy(b.projectionMatrix),ap(me),op(me),vt.setValue(D,"projectionMatrix",me)):vt.setValue(D,"projectionMatrix",b.projectionMatrix),vt.setValue(D,"viewMatrix",b.matrixWorldInverse);const In=vt.map.cameraPosition;In!==void 0&&In.setValue(D,Ve.setFromMatrixPosition(b.matrixWorld)),Me.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,$t=!0,Li=!0)}if(N.isSkinnedMesh){vt.setOptional(D,N,"bindMatrix"),vt.setOptional(D,N,"bindMatrixInverse");const Xt=N.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),vt.setValue(D,"boneTexture",Xt.boneTexture,E))}N.isBatchedMesh&&(vt.setOptional(D,N,"batchingTexture"),vt.setValue(D,"batchingTexture",N._matricesTexture,E),vt.setOptional(D,N,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",N._indirectTexture,E),vt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",N._colorsTexture,E));const ci=V.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&We.update(N,V,on),($t||Ue.receiveShadow!==N.receiveShadow)&&(Ue.receiveShadow=N.receiveShadow,vt.setValue(D,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(nn.envMap.value=Ee,nn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),$t&&(vt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&Vn(nn,Li),ce&&W.fog===!0&&ue.refreshFogUniforms(nn,ce),ue.refreshMaterialUniforms(nn,W,X,re,u.state.transmissionRenderTarget[b.id]),la.upload(D,nr(Ue),nn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(la.upload(D,nr(Ue),nn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(D,"center",N.center),vt.setValue(D,"modelViewMatrix",N.modelViewMatrix),vt.setValue(D,"normalMatrix",N.normalMatrix),vt.setValue(D,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xt=W.uniformsGroups;for(let In=0,ln=Xt.length;In<ln;In++){const ks=Xt[In];I.update(ks,on),I.bind(ks,on)}}return on}function Vn(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ds(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,F,V){oe.get(b.texture).__webglTexture=F,oe.get(b.depthTexture).__webglTexture=V;const W=oe.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const V=oe.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){k=b,R=F,L=V;let W=!0,N=null,ce=!1,be=!1;if(b){const Ee=oe.get(b);if(Ee.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Ee.__hasExternalTextures)E.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Le=b.depthTexture;if(Ee.__boundDepthTexture!==Le){if(Le!==null&&oe.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(be=!0);const Xe=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?N=Xe[F][V]:N=Xe[F],ce=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?N=Xe[V]:N=Xe,A.copy(b.viewport),G.copy(b.scissor),z=b.scissorTest}else A.copy(Fe).multiplyScalar(X).floor(),G.copy(Ge).multiplyScalar(X).floor(),z=st;if(Re.bindFramebuffer(D.FRAMEBUFFER,N)&&W&&Re.drawBuffers(b,N),Re.viewport(A),Re.scissor(G),Re.setScissorTest(z),ce){const Ee=oe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,V)}else if(be){const Ee=oe.get(b.texture),Ne=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ne)}S=-1},this.readRenderTargetPixels=function(b,F,V,W,N,ce,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){Re.bindFramebuffer(D.FRAMEBUFFER,Ie);try{const Ee=b.texture,Ne=Ee.format,Xe=Ee.type;if(!Me.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&V>=0&&V<=b.height-N&&D.readPixels(F,V,W,N,qe.convert(Ne),qe.convert(Xe),ce)}finally{const Ee=k!==null?oe.get(k).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,F,V,W,N,ce,be){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const Ee=b.texture,Ne=Ee.format,Xe=Ee.type;if(!Me.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-W&&V>=0&&V<=b.height-N){Re.bindFramebuffer(D.FRAMEBUFFER,Ie);const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(F,V,W,N,qe.convert(Ne),qe.convert(Xe),0);const it=k!==null?oe.get(k).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,it);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sp(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(Le),D.deleteSync(ft),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,V=0){b.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-V),N=Math.floor(b.image.width*W),ce=Math.floor(b.image.height*W),be=F!==null?F.x:0,Ie=F!==null?F.y:0;E.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,be,Ie,N,ce),Re.unbindTexture()},this.copyTextureToTexture=function(b,F,V=null,W=null,N=0){b.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],F=arguments[2],N=arguments[3]||0,V=null);let ce,be,Ie,Ee,Ne,Xe,Le,it,ft;const _t=b.isCompressedTexture?b.mipmaps[N]:b.image;V!==null?(ce=V.max.x-V.min.x,be=V.max.y-V.min.y,Ie=V.isBox3?V.max.z-V.min.z:1,Ee=V.min.x,Ne=V.min.y,Xe=V.isBox3?V.min.z:0):(ce=_t.width,be=_t.height,Ie=_t.depth||1,Ee=0,Ne=0,Xe=0),W!==null?(Le=W.x,it=W.y,ft=W.z):(Le=0,it=0,ft=0);const zt=qe.convert(F.format),lt=qe.convert(F.type);let Ue;F.isData3DTexture?(E.setTexture3D(F,0),Ue=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),Ue=D.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),Ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const wn=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),li=D.getParameter(D.UNPACK_SKIP_ROWS),$t=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);const Li=b.isDataArrayTexture||b.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const nn=oe.get(b),ci=oe.get(F),Xt=oe.get(nn.__renderTarget),In=oe.get(ci.__renderTarget);Re.bindFramebuffer(D.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let ln=0;ln<Ie;ln++)Li&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(b).__webglTexture,N,Xe+ln),b.isDepthTexture?(vt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,N,ft+ln),D.blitFramebuffer(Ee,Ne,ce,be,Le,it,ce,be,D.DEPTH_BUFFER_BIT,D.NEAREST)):vt?D.copyTexSubImage3D(Ue,N,Le,it,ft+ln,Ee,Ne,ce,be):D.copyTexSubImage2D(Ue,N,Le,it,ft+ln,Ee,Ne,ce,be);Re.bindFramebuffer(D.READ_FRAMEBUFFER,null),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ue,N,Le,it,ft,ce,be,Ie,zt,lt,_t.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ue,N,Le,it,ft,ce,be,Ie,zt,_t.data):D.texSubImage3D(Ue,N,Le,it,ft,ce,be,Ie,zt,lt,_t):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Le,it,ce,be,zt,lt,_t.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Le,it,_t.width,_t.height,zt,_t.data):D.texSubImage2D(D.TEXTURE_2D,N,Le,it,ce,be,zt,lt,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,wn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,li),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$t),N===0&&F.generateMipmaps&&D.generateMipmap(Ue),Re.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V=null,W=null,N=0){return b.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],F=arguments[3],N=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,V,W,N)},this.initRenderTarget=function(b){oe.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Re.unbindTexture()},this.resetState=function(){R=0,L=0,k=null,Re.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class v_ extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class x_ extends Qt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=pn,h=pn,d,p){super(null,a,o,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends Pn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new yt,Dc=new yt,ta=[],kc=new Ji,b_=new yt,cs=new tt,ds=new Ts;class y_ extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,b_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),kc.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(kc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),ds.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xr),Dc.multiplyMatrices(i,xr),cs.matrixWorld=Dc,cs.raycast(e,ta);for(let a=0,o=ta.length;a<o;a++){const c=ta[a];c.instanceId=s,c.object=this,t.push(c)}ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new x_(new Float32Array(r*this.count),r,this.count,sl,On));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xi extends Hn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],f=[];let g=0;const x=[],m=i/2;let u=0;w(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Vt(d,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(f,2));function w(){const y=new P,B=new P;let R=0;const L=(t-e)/i;for(let k=0;k<=s;k++){const S=[],_=k/s,A=_*(t-e)+e;for(let G=0;G<=r;G++){const z=G/r,K=z*c+o,te=Math.sin(K),Y=Math.cos(K);B.x=A*te,B.y=-_*i+m,B.z=A*Y,d.push(B.x,B.y,B.z),y.set(te,L,Y).normalize(),p.push(y.x,y.y,y.z),f.push(z,1-_),S.push(g++)}x.push(S)}for(let k=0;k<r;k++)for(let S=0;S<s;S++){const _=x[S][k],A=x[S+1][k],G=x[S+1][k+1],z=x[S][k+1];(e>0||S!==0)&&(h.push(_,A,z),R+=3),(t>0||S!==s-1)&&(h.push(A,G,z),R+=3)}l.addGroup(u,R,0),u+=R}function T(y){const B=g,R=new dt,L=new P;let k=0;const S=y===!0?e:t,_=y===!0?1:-1;for(let G=1;G<=r;G++)d.push(0,m*_,0),p.push(0,_,0),f.push(.5,.5),g++;const A=g;for(let G=0;G<=r;G++){const K=G/r*c+o,te=Math.cos(K),Y=Math.sin(K);L.x=S*Y,L.y=m*_,L.z=S*te,d.push(L.x,L.y,L.z),p.push(0,_,0),R.x=te*.5+.5,R.y=Y*.5*_+.5,f.push(R.x,R.y),g++}for(let G=0;G<r;G++){const z=B+G,K=A+G;y===!0?h.push(K,K+1,z):h.push(K+1,K,z),k+=3}l.addGroup(u,k,y===!0?1:2),u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends xi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends Hn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new P,p=new P,f=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const w=[],T=u/i;let y=0;u===0&&a===0?y=.5/t:u===i&&c===Math.PI&&(y=-.5/t);for(let B=0;B<=t;B++){const R=B/t;d.x=-e*Math.cos(r+R*s)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+T*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(R+y,1-T),w.push(l++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<t;w++){const T=h[u][w+1],y=h[u][w],B=h[u+1][w],R=h[u+1][w+1];(u!==0||a>0)&&f.push(T,y,R),(u!==i-1||c<Math.PI)&&f.push(y,B,R)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends Hn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new P,d=new P,p=new P;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const x=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,w=(r+1)*f+g;a.push(x,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nt extends As{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jd extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class M_ extends jd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const eo=new yt,Ic=new P,Fc=new P;class S_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class w_ extends S_{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uc extends jd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new w_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nc=new yt;class E_{constructor(e,t,i=0,r=1/0){this.ray=new Id(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(e,t=!0,i=[]){return qo(e,this,i,t),i.sort(Oc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qo(e[r],this,i,t);return i.sort(Oc),i}}function Oc(n,e){return n.distance-e.distance}function qo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)qo(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);let T_=!1;function A_(){return T_}function C_(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function R_(n,e={}){const t=A_(),i=new __({canvas:n,antialias:!t,alpha:!1,powerPreference:"high-performance"});i.setClearColor("#17233F"),i.outputColorSpace=un,i.toneMapping=vd,i.toneMappingExposure=1.1;const r=new v_;r.background=new Je("#17233F");const s=new bn(38,9/16,.1,200);function a(){const o=n.parentElement;if(!o)return;const c=o.clientWidth,l=o.clientHeight;c===0||l===0||(i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(c,l,!1),s.aspect=c/l,s.updateProjectionMatrix())}return{renderer:i,scene:r,camera:s,resize:a}}function L_(n){const e=Jn.degToRad(35),t=Jn.degToRad(22),i=27,r=new P(0,0,0);function s(){const o=new P(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)).normalize();n.position.copy(r).addScaledVector(o,i),n.lookAt(r)}s();const a=6;return{panBy(o,c){r.x=Jn.clamp(r.x+o,-a,a),r.z=Jn.clamp(r.z+c,-a,a),s()},setPan(o,c){r.x=Jn.clamp(o,-a,a),r.z=Jn.clamp(c,-a,a),s()},update(){}}}const M={inkNavy:"#17233F",moonBlue:"#5B79C8",plum:"#6D3E78",parchment:"#F4E7C7",sealingRed:"#C74B55",brass:"#D6A84B",routeMint:"#72D6C1"},Bc=new Kr,zc=new P,Hc=new P;class P_{mesh;dummy=new kt;actives;colors;constructor(e,t,i){this.mesh=new y_(t,i,e),this.mesh.instanceMatrix.setUsage(Nl),this.mesh.frustumCulled=!1,this.actives=new Array(e).fill(!1),this.colors=[];for(let r=0;r<e;r++)this.colors.push(new Je("#F4E7C7")),this.mesh.setColorAt(r,this.colors[r]);this.mesh.instanceColor&&this.mesh.instanceColor.setUsage(Nl);for(let r=0;r<e;r++)this.place(r,-999,-999,-999,1,1,1,0,0,0)}place(e,t,i,r,s,a,o,c,l,h){Bc.setFromEuler(new Dn(c,l,h)),zc.set(t,i,r),Hc.set(s,a,o),this.dummy.position.copy(zc),this.dummy.quaternion.copy(Bc),this.dummy.scale.copy(Hc),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}acquire(e,t,i,r={}){let s=-1;for(let o=0;o<this.actives.length;o++)if(!this.actives[o]){s=o;break}if(s===-1)return null;this.actives[s]=!0;const a=r.scale??1;return this.place(s,e,t,i,a,a*.12,a*.75,0,r.rot??0,0),r.color&&this.mesh.instanceColor&&(this.colors[s].set(r.color),this.mesh.setColorAt(s,this.colors[s])),{index:s,active:!0,id:s}}move(e,t,i,r,s=0,a=1){this.place(e.index,t,i,r,a,a*.12,a*.75,0,s,0)}hide(e){this.actives[e.index]&&(this.actives[e.index]=!1,this.place(e.index,-999,-999,-999,1,1,1,0,0,0))}commit(){this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}get usedCount(){let e=0;for(const t of this.actives)t&&e++;return e}}const Gc={desk:{family:"desk",color:"#F4E7C7",glyph:"stacked-tray",badge:"square"},satchel:{family:"satchel",color:"#6D3E78",glyph:"buckle",badge:"capsule"},route:{family:"route",color:"#72D6C1",glyph:"thread-needle",badge:"needle-pulse"},inflow:{family:"inflow",color:"#4a67b6",glyph:"tray-arrow",badge:"rain-line"}},D_={desk:{warnAt:.7,chokeAt:.85,chokeSustainS:3,burstFullAt:.999},satchel:{queueWarnAt:.4,deskPileChokeAt:.4,chokeSustainS:3},route:{okSlack:.15,utilWarnAt:.85,utilChokeAt:.999,queueChokeAt:.4,chokeSustainS:3},inflow:{okAt:.35,chokeAt:.2,chokeSustainS:3}},to={capacityPulseS:.4,purchasePunchS:.25},Sr={kept:["Stars banked (+ pending claim)","Unlocked districts' identity on the route map (postcards stay readable)","Night Clerk License stub state","Save/version lineage"],lost:["Postage balance and E_run","All hall upgrade tiers (F1–F10)","Desk pads / satchel racks / route lanes and their tiers (back to first-slot T1 installed)","Backlog pool to Lantern Lane state","Active district back to Lantern Lane; gate progress resets (Rainmarket bond re-payable)","Night Ledger snapshot (unsettled away time settles into run Postage before confirm)"]},hs={title:"The night kept working.",neverEmpty:"The hall barely noticed you leave. +0 — step back in, Clerk.",collect:"Collect",doubler:"Double it — free"},Yd=[{beat:"point-hold",trigger:{t:0},speaker:null,copy:null,highlight:"sort"},{beat:"letters-stream",trigger:{t:10},speaker:"Pip",copy:"They answer the thumb. They always do.",grantId:1},{beat:"desks-fill",trigger:{t:30},speaker:"Mara",copy:"Desks are your lungs. Buy the second tray.",grantId:2,highlight:"desk"},{beat:"rail-pad2",trigger:{t:45},speaker:"Pip",copy:"Room to breathe.",rail:{family:"desk",note:"pad2 unlock (300)"},highlight:"desk"},{beat:"routes-pulse",trigger:{t:75},speaker:"Mara",copy:"The lanes decide what's real. Feed them.",grantId:3,rail:{family:"route",note:"lane1 T2 (380)"},highlight:"route"},{beat:"first-hall-tier",trigger:{t:120},speaker:"Pip",copy:"The hall likes investment. Watch the pile.",grantId:4,rail:{family:"hall",note:"first district upgrade (F4/F1 cheapest)"},highlight:"inflow"},{beat:"night-ledger-card",trigger:{t:300},speaker:"Mara",copy:"Dawn always wins. The Ledger makes sure it doesn't win everything.",grantId:5},{beat:"seal-grammar",trigger:{event:"rv_complete"},speaker:"Mara",copy:"Rainmarket is listening. Finish the list.",highlight:"seal-rainmarket"},{beat:"bond-prelight",trigger:{event:"list_nearly"},speaker:null,copy:null,highlight:"seal-rainmarket"},{beat:"rainmarket-answers",trigger:{event:"advance"},speaker:"Mara",copy:"Rainmarket answers. First time in years, Clerk.",grantId:6},{beat:"horizon-remembers",trigger:{event:"horizon_rv"},speaker:"Mara",copy:"That seal doesn't open tonight. It remembers.",highlight:"seal-horizon"},{beat:"redraw-offered",trigger:{event:"horizon_list"},speaker:"Mara",copy:"Tear up the routes. Draw them better.",highlight:"seal-horizon"},{beat:"second-wind",trigger:{event:"claim"},speaker:"Pip",copy:"Again. But faster. Much faster."}],k_=.9,de={onboardBeat:"md.onboard.beat",meterChoke:"md.meter.choke",meterRemedy:"md.meter.remedy",purchase:"md.purchase",gateCross:"md.gate.cross",advance:"md.advance",redrawShow:"md.redraw.show",redrawClaim:"md.redraw.claim",ledgerReturn:"md.ledger.return",saveWrite:"md.save.write",saveLoad:"md.save.load",postcardUnlock:"md.postcard.unlock",postcardRead:"md.postcard.read",postcardSeal:"md.postcard.seal",morningPost:"md.morning-post.claim",specialActivate:"md.special.activate",specialClaim:"md.special.claim",wanderlight:"md.wanderlight.tap",sealConvert:"md.seal.convert",trayActivate:"md.tray.activate",wanderSpawn:"md.wanderlight.spawn",morningpostReady:"md.morningpost.ready",morningpostClaim:"md.morningpost.claim",specialOffer:"md.special.offer",specialAccept:"md.special.accept",specialComplete:"md.special.complete",stampCapped:"md.stamp.capped",replyChord:"md.reply.chord",flatArm:"md.flat.arm",flatNudge:"md.flat.nudge",modShow:"md.mod.show",modRotate:"md.mod.rotate",rushGrant:"md.rush.grant",rushActivate:"md.rush.activate",rushExpire:"md.rush.expire",ledgerClaim:"md.ledger.claim",saveReconcile:"md.save.reconcile",returnNudge:"md.flat.return_nudge",mapWestward:"md.map.westward",cycleClose:"md.cycle.close",finaleFire:"md.finale.fire",finaleReplay:"md.finale.replay",rtOpen:"md.rt.open",rtComplete:"md.rt.complete",cosmeticBuy:"md.cosmetic.buy",cosmeticEquip:"md.cosmetic.equip",ladderClosed:"md.ladder.closed",sdRepeatOffer:"md.sd.repeat_offer",streakGrant:"md.streak.grant",doublerUse:"md.doubler.use",doublerCap:"md.doubler.cap",notifInvite:"md.notif.invite",notifOptIn:"md.notif.optin",notifScheduled:"md.notif.scheduled",dawnFire:"md.dawn.fire",dawnReplay:"md.dawn.replay",cadenceAssert:"md.cadence.assert",stubViewed:"md.stub.viewed",albumCrack:"md.album.crack",streakGift:"md.streak.gift",doublerDismiss:"md.doubler.dismiss",stubOpen:"md.stub.open",stubDismiss:"md.stub.dismiss",notifyCardShow:"md.notify.card_show",notifyOptInCanon:"md.notify.opt_in",notifyDismissForever:"md.notify.dismiss_forever",notifySettingsToggle:"md.notify.settings_toggle",notifyFire:"md.notify.fire",cadenceBlockedSd:"md.cadence.blocked_sd",cadenceViolation:"md.cadence.violation",returnDayCount:"md.return_day.count"},Vc={budget:250},no=["Stamp inventory (per-district receipts, 250 caps)","Special-delivery board state (active 4–8 h timers keep ticking — wall-clock, not run-clock)","Morning Post cadence state","Wax Seals + trims","Postcard counters per district"],io={speaker:"Mara",line:"That seal owes you a road now, not a reset.",note:"The Clocktower seal now opens the Ward directly: advance + bond 25,000."},I_=[{districtIndex:2,id:"clocktower_ward",name:"Clocktower Ward",body:"The route-miniature threads upward into a bell-chamber of brass and moonlight. A long-stopped minute hand shudders — and ticks once.",speaker:"Mara",speakerLine:"First bell the city's heard in years — and it's *on time*.",arrivalCopy:{speaker:"Mara",line:"It answered. Clerk — it *answered*."}},{districtIndex:3,id:"museum_after_dark",name:"Museum After Dark",body:"The miniature rolls out a colonnade of cool-lit glass. One exhibit case glows from inside — no artifact, only an addressed envelope, waiting decades.",speaker:"Pip",speakerLine:"Shhh. The exhibits sleep. *Mostly.*",arrivalCopy:null},{districtIndex:4,id:"rooftop_gardens",name:"Rooftop Gardens",body:"The thread climbs a drainpipe line into greenhouse glass. Condensation spells a word — and wipes itself before anyone reads it.",speaker:"Mara",speakerLine:"They grow tea up there, and patience. Deliver gently.",arrivalCopy:null},{districtIndex:5,id:"canal_of_echoes",name:"Canal of Echoes",body:"The miniature spills down steps to black water. Every thread so far — six districts — reflects at once, and the reflections ripple into one chord, the loudest and softest yet.",speaker:"Mara",speakerLine:"Listen to that, Clerk. Six districts, one address. *Ours.*",arrivalCopy:null}],Wc={delayAfterVignetteS:8},xt={secondWind:{beat:"ch2.second-wind",speaker:"Pip",copy:"Same hall. Better stars. Watch."},rmReanswer:{beat:"ch2.rm-reanswer",speaker:"Pip",copy:"They remember your hands."},trayRail:{beat:"ch2.tray-rail",speaker:"Mara",copy:"Trays take in what the night drops. Your thumb gets a pension.",highlight:"inflow"},wanderOn:{beat:"ch2.wander-on",speaker:"Pip",copy:"Sky-mail. Pop, don't chase."},firstWander:{beat:"ch2.first-wander",speaker:"Pip",copy:"That one's lost its address. Pop it — gently."},sdIntro:{beat:"ch2.sd-intro",speaker:"Pip",copy:"Old streets keep asking. We charge them stamps. It's *diplomacy*.",highlight:"special"},mpFirstReady:{beat:"ch2.mp-first-ready",speaker:"Mara",copy:"The city reads your night shift over breakfast. Take the bundle.",highlight:"morningpost"},postcardAuto:{beat:"ch2.postcard-auto",speaker:"Mara",copy:"Three a district. They write more when you notice.",highlight:"postcards"},flatNear:{beat:"ch2.flat-near",speaker:"Mara",copy:"Ticker's flat, seal's close. *Finish the seal.*"},flatFar:{beat:"ch2.flat-far",speaker:"Mara",copy:"That wall isn't tonight's, sweetheart. *Bank the night.*",highlight:"redraw"},evaporation:{speaker:"Pip",copy:"Yesterday's wall. This morning? *Confetti.*"},museumClaim:{beat:"ch2.museum-claim",speaker:"Mara",copy:"Tear up the routes. Draw them better remembered."},museumClaim2:{beat:"ch2.museum-claim-2",speaker:"Pip",copy:"Again! With *style*."}},$c={conversionCardS:410,sdBoardIntroS:415},It={sortPull:(n,e)=>.035*n*(1+.2*e),backlogPoolBase:400,backlogPoolScale:1.8,backlogRefillBase:7,backlogRefillScale:1.8,satchelBufferSeconds:15,perfectSort:{psMaxBase:1.5,psMaxPerF5:.25,rampS:20,rampS_F5t1:15,rampS_F5t4:12,decayS:5,decayS_F5t2:8},starScalar:3,starDenom:1e4,starMultStep:.22},Ot=[{id:"lantern_lane",name:"Lantern Lane",letterValue:1,gate:null},{id:"rainmarket",name:"Rainmarket",letterValue:6,gate:{rv:16e3,deliveryList:36e3,bond:6e3}},{id:"clocktower_ward",name:"Clocktower Ward",letterValue:32,gate:null},{id:"museum_after_dark",name:"Museum After Dark",letterValue:180,gate:null},{id:"rooftop_gardens",name:"Rooftop Gardens",letterValue:1e3,gate:null},{id:"canal_of_echoes",name:"Canal of Echoes",letterValue:5500,gate:null},{id:"moonlit_arcade",name:"Moonlit Arcade",letterValue:4e4,gate:null},{id:"glasshouse_quarter",name:"Glasshouse Quarter",letterValue:3e5,gate:null},{id:"sleepless_library",name:"Sleepless Library",letterValue:225e4,gate:null},{id:"cloudline_station",name:"Cloudline Station",letterValue:16875e3,gate:null},{id:"aurora_borough",name:"Aurora Borough",letterValue:126562500,gate:null},{id:"last_light_observatory",name:"Last Light Observatory",letterValue:949218750,gate:null}],yn={rainmarket:{id:"rainmarket",to:1,rv:16e3,deliveryList:36e3,bond:6e3,action:"advance_bond"},horizon:{id:"horizon",to:2,rv:12e6,deliveryList:45e5,bond:25e3,action:"redraw_claim"},museum:{id:"museum",to:3,rv:124e8,deliveryList:45e8,bond:22e4,action:"advance_bond"},rooftop:{id:"rooftop",to:4,rv:225e9,deliveryList:75e9,bond:36e5,action:"advance_bond"},canal:{id:"canal",to:5,rv:4e12,deliveryList:115e10,bond:6e7,action:"advance_bond"},moonlit_arcade:{id:"moonlit_arcade",to:6,rv:36e13,deliveryList:8e13,bond:3e10,action:"advance_bond"},glasshouse_quarter:{id:"glasshouse_quarter",to:7,rv:63e14,deliveryList:14e14,bond:3e11,action:"advance_bond"},sleepless_library:{id:"sleepless_library",to:8,rv:77e14,deliveryList:22e14,bond:4e12,action:"advance_bond"},cloudline_station:{id:"cloudline_station",to:9,rv:15e17,deliveryList:38e16,bond:15e12,action:"advance_bond"},aurora_borough:{id:"aurora_borough",to:10,rv:21e18,deliveryList:52e17,bond:8e13,action:"advance_bond"},last_light_observatory:{id:"last_light_observatory",to:11,rv:8e19,deliveryList:2e19,bond:4e14,action:"advance_bond"}},Kd=2e19,Xc={f1Step:.3,psMultiplier:n=>n,starsMultiplier:n=>1+It.starMultStep*n},mn={count:4,unlock:[0,300,2400,18e4],tier:[0,700,22e3,42e4,76e5,13e7,8e9,1e11,12e11],caps:[240,560,1100,2200,4300,8500,17e3,34e3,68e3],F6:{capMult:1.25,costMult:.9}},Gn={count:4,unlock:[0,1100,12e3,42e4],tier:[0,450,13e3,25e4,45e5,78e6,6e9,8e10,1e12],rates:[13,18,50,90,160,340,680,1320,2600]},zn={count:4,unlock:[0,850,9500,32e4],tier:[0,380,11e3,21e4,39e5,66e6,5e9,7e10,85e10],rates:[11.5,16,48,84,148,300,600,1180,2340],F7:{rateMult:1.25,costMult:.9,rateMultPerTier:1.15,costMultPerTier:.92}},en={F4:{id:"F4",label:"Taller Racks",tiers:12,cost:[600,1600,22e3,2e5,75e4,28e5,1e7,8e9,3e10,25e10,15e11,8e12],effect:"pool ×1.8, refill ×1.8 per tier (t12 cap: pool 462,742 · refill 8,098.7/s)"},F1:{id:"F1",label:"Warmer Seals",tiers:14,cost:[1e3,2600,42e3,12e4,38e4,9e5,25e5,75e5,6e9,2e10,12e10,8e11,4e12,25e12],effect:"letter value +30% per tier (t14 ×5.2 total cap)",letterValueStep:.3},F2:{id:"F2",label:"Lighter Ink",tiers:14,cost:[900,4200,5e4,16e4,45e4,11e5,32e5,9e6,7e9,25e9,15e10,1e12,5e12,3e13],effect:"base sort pull +20% per tier (t14 +280% cap)",sortPullStep:.2},F5:{id:"F5",label:"Sweet Spot",tiers:10,cost:[1200,6500,7e4,24e4,56e4,84e4,14e5,1e10,6e10,8e11],effect:"ps_max +0.25/tier (t9 3.75 · t10 4.00); t1 ramp→15s; t2 decay→8s; t4 ramp→12s; t6+ persistence floor",unlockAtRun:1200,psMaxPerTier:.25,persistenceTier:6,rampAtTiers:[{tier:1,rampS:15},{tier:4,rampS:12}],decayAtTiers:[{tier:2,decayS:8}]},F6:{id:"F6",label:"Sturdy Trays",tiers:3,cost:[3e3,15e9,15e11],effect:"t1 desk caps ×1.25, costs ×0.90 · t2 caps ×1.20 further, costs ×0.92 further · t3 caps ×1.20 further, costs ×0.92 further",deskCapMult:1.25,deskCostMult:.9,deskCapMult2:1.2,deskCostMult2:.92},F7:{id:"F7",label:"Swift Lanes",tiers:7,cost:[3e3,85e3,11e5,15e9,1e11,2e12,1e13],effect:"route rates ×1.15 · costs ×0.92 per tier; t1 ×1.25/×0.90 (t7 cum ×2.066/×0.622); ribbon dressing",routeRateMult:1.25,routeCostMult:.9,routeRateMultPerTier:1.15,routeCostMultPerTier:.92},F10:{id:"F10",label:"Ledger Eyes",tiers:4,cost:[3e3,22e5,6e10,8e11],effect:"hall factor 0.05 → 0.08 (t1) → 0.12 (t2) → 0.16 (t3) → 0.20 (t4)",hfacAfter:.08,hfacAfterT2:.12,hfacAfterT3:.16,hfacAfterT4:.2},F3:{id:"F3",label:"Night Habits",tiers:6,cost:[4e3,25e4,15e5,6e6,12e10,2e12],effect:"t1 away 0.65; t2–t6 Inflow Trays (0.40/0.72/1.30/2.00/2.60); t4+ away 0.80",unlockAtRun:2500,awayFractionAfter:.65,awayFractionAfterT4:.8,trayFrac:[.4,.72,1.3,2,2.6],conditionDistrictId:"clocktower_ward"},F8:{id:"F8",label:"Longer Nights",tiers:3,cost:[24e3,18e5,8e10],effect:"Night Ledger cap 2 h → 3 h (t1) → 5 h (t2) → 8 h (t3)",capHoursAfter:3,capHoursAfterT2:5,capHoursAfterT3:8},F9:{id:"F9",label:"Wanderlights",tiers:5,cost:[12e4,9e5,55e5,5e10,6e11],effect:"t1 activate (cadence 110 s); t2 reward ×1.75 · seal 6%; t3 cadence 90 s · grand 1.2%; t4 cadence 80 s · seal 8% · grand 2% · reward ×3.5; t5 cadence 70 s · seal 10% · grand 2.5% · reward ×4.5",conditionDistrictId:"clocktower_ward",wanderCadenceBase:140,wanderCadenceT1:110,wanderCadenceT3:90,wanderRewardMultT2:1.75,wanderSealChanceT2:.06,wanderGrandChanceT3:.012,wanderCadenceT4:80,wanderSealChanceT4:.08,wanderGrandChanceT4:.02,wanderRewardMultT4:3.5,wanderCadenceT5:70,wanderSealChanceT5:.1,wanderGrandChanceT5:.025,wanderRewardMultT5:4.5},F11:{id:"F11",label:"Express Logistics",tiers:4,cost:[8e8,6e9,2e11,3e12],effect:"satchel + route rates ×1.25/tier (t4 ×2.441 total)",satchelRateMult:1.25,routeRateMultF11:1.25},F12:{id:"F12",label:"Universal Addressing",tiers:4,cost:[3e9,15e10,2e13,25e13],effect:"booked Postage ×1.5 (t1) → ×2.0 (t2, replaces) → ×2.5 (t3, replaces) → ×3.0 (t4, replaces)",bookedMult:[1,1.5,2,2.5,3]}},us={hfac:.05,hfacAfterF10:.08,hfacAfterF10T2:.12,hfacAfterF10T3:.16,hfacAfterF10T4:.2},Cs={capHours:2,awayFraction:.5,doublerMaxPer24h:3,neverEmptyElapsedS:120},F_=[{id:1,grant:50},{id:2,grant:150},{id:3,grant:400},{id:4,grant:1200},{id:5,grant:2400},{id:6,grant:6e3}],Zd={lantern_lane:[500,2500,6e3],rainmarket:[800,3e3,7e3],clocktower_ward:[5e4,3e5,1e6],museum_after_dark:[15e4,6e5,2e6],rooftop_gardens:[1e5,5e5,15e5],canal_of_echoes:[25e3,15e4,6e5],moonlit_arcade:[2e5,1e6,6e6],glasshouse_quarter:[15e4,6e5,22e5],sleepless_library:[15e4,7e5,25e5],cloudline_station:[5e5,4e6,3e7],aurora_borough:[4e5,3e6,15e6],last_light_observatory:[3e5,2e6,7e6]},qc={frontierShare:.75,fanShareUniform:.25},si={maxConcurrent:2,despawnS:20,normalRewardLetterMult:25,sealChance:.04,grandChance:.006,grandRewardLetterMult:500,grandWaxSeals:2},oi={cadenceH:8,maxHeld:1,grantByFrontier:{clocktower_ward:6e4,museum_after_dark:5e5,rooftop_gardens:3e6,canal_of_echoes:18e6,moonlit_arcade:15e7,glasshouse_quarter:9e8,sleepless_library:5e9,cloudline_station:35e9,aurora_borough:2e11,last_light_observatory:1e12}},wr={cap:250,p:{lantern_lane:.0015,rainmarket:.0012,clocktower_ward:8e-4,museum_after_dark:6e-4,rooftop_gardens:4e-4,canal_of_echoes:3e-4,moonlit_arcade:2e-4,glasshouse_quarter:15e-5,sleepless_library:1e-4,cloudline_station:8e-5,aurora_borough:6e-5,last_light_observatory:5e-5}},kn={maxActiveTimers:3,recipes:[{id:"SD1",name:"The Umbrella Route",stamps:{lantern_lane:8,rainmarket:6},timerH:4,rewardPct:.01,available:"clocktower_ward"},{id:"SD2",name:"Still Life, With Address",stamps:{rainmarket:12,clocktower_ward:4},timerH:6,rewardPct:.02,available:"museum_after_dark"},{id:"SD3",name:"The Curator's Errand",stamps:{clocktower_ward:10,museum_after_dark:6},timerH:8,rewardPct:.035,available:"rooftop_gardens"},{id:"SD4",name:"Tea for the Rain Clock",stamps:{museum_after_dark:8,rooftop_gardens:6},timerH:5,rewardPct:.025,available:"rooftop_gardens",availableWhenAnswered:"rooftop_gardens"},{id:"SD5",name:"The Echo Postman",stamps:{rooftop_gardens:10,canal_of_echoes:6},timerH:7,rewardPct:.03,available:"canal_of_echoes",availableWhenAnswered:"canal_of_echoes"},{id:"SD6",name:"Midnight at the Arcade",stamps:{canal_of_echoes:8,moonlit_arcade:6},timerH:8,rewardPct:.04,available:"moonlit_arcade",availableWhenAnswered:"moonlit_arcade"},{id:"SD7",name:"The Unwritten Hour",stamps:{moonlit_arcade:10,glasshouse_quarter:8},timerH:0,rewardPct:0,available:"moonlit_arcade",availableWhenAnswered:"moonlit_arcade",rush:{multX:2,activeS:1800,holdMax:1},postsAtCommit:!0},{id:"SD8",name:"The Reading Room",stamps:{glasshouse_quarter:12,sleepless_library:10},timerH:8,rewardPct:.05,available:"sleepless_library",availableWhenAnswered:"sleepless_library"}]},U_=[{slot:0,id:"rain_sheen",deskCapX:.85,routeX:1.25},{slot:1,id:"backlog_surge",poolX:1.25,refillX:1.6},{slot:2,id:"perfect_moon",psMaxAdd:.25,rampX:.6,rampMinS:6},{slot:3,id:"tailwind",routeX:1.35,satchelX:1.1},{slot:4,id:"long_shadows",ledgerAccrualX:1.25},{slot:5,id:"stamp_fair",stampPX:2},{slot:6,id:"wax_festival",lampSealX:2,lampGrandX:2}],N_={table:U_},Jd={id:null,slot:null,deskCapX:1,routeX:1,poolX:1,refillX:1,psMaxAdd:0,rampX:1,rampMinS:0,satchelX:1,ledgerAccrualX:1,stampPX:1,lampSealX:1,lampGrandX:1},fa={multX:2,activeS:1800},Qd={medianRingMax:60,claimCapFracOfFrontierRem:.35},gs={returnArmedFloorS:6*3600,returnFlatMaxStarsPerReturn:1,nudgeSealEtaHours:6},Un={armFloorS:1500,windowS:480,windowMaxStars:1,cardAfterS:60,nudgeAfterS:300,nudgeSealShareBelow:.2},O_={districtAdvanceCh2:2},Yi={lantern_lane:{district:"lantern_lane",target:{letters:8e6,modifier:null,courierMin:null},seals:2,stars:1},rainmarket:{district:"rainmarket",target:{letters:8e6,modifier:"rain_sheen",courierMin:2},seals:2,stars:1},clocktower_ward:{district:"clocktower_ward",target:{letters:1e7,modifier:"perfect_moon",courierMin:5},seals:3,stars:1},museum_after_dark:{district:"museum_after_dark",target:{letters:12e6,modifier:"backlog_surge",courierMin:10},seals:3,stars:1},rooftop_gardens:{district:"rooftop_gardens",target:{letters:14e6,modifier:"wax_festival",courierMin:15},seals:3,stars:1},canal_of_echoes:{district:"canal_of_echoes",target:{letters:24e6,modifier:"rain_sheen",courierMin:30},seals:3,stars:1},moonlit_arcade:{district:"moonlit_arcade",target:{letters:32e6,modifier:"wax_festival",courierMin:45},seals:4,stars:2},glasshouse_quarter:{district:"glasshouse_quarter",target:{letters:8e6,modifier:"long_shadows",courierMin:180},seals:4,stars:2},sleepless_library:{district:"sleepless_library",target:{letters:5e7,modifier:"backlog_surge",courierMin:180},seals:4,stars:2},cloudline_station:{district:"cloudline_station",target:{letters:85e6,modifier:"tailwind",courierMin:480},seals:5,stars:3},aurora_borough:{district:"aurora_borough",target:{letters:4e7,modifier:"stamp_fair",courierMin:720},seals:5,stars:3},last_light_observatory:{district:"last_light_observatory",target:{letters:15e6,modifier:"perfect_moon",courierMin:720},seals:5,stars:3}},ma={desk:[{slot:"desk",id:"desk_dusk_mahogany",name:"Dusk Mahogany",cost:12},{slot:"desk",id:"desk_porcelain_night",name:"Porcelain Night",cost:22},{slot:"desk",id:"desk_brass_band",name:"Brass Band",cost:38}],rack:[{slot:"rack",id:"rack_inkwood",name:"Inkwood",cost:14},{slot:"rack",id:"rack_fog_velvet",name:"Fog Velvet",cost:24},{slot:"rack",id:"rack_plum_felt",name:"Plum Felt",cost:40}],map_frame:[{slot:"map_frame",id:"map_moon_oak",name:"Moon Oak",cost:16},{slot:"map_frame",id:"map_cartographers_ink",name:"Cartographer's Ink",cost:26},{slot:"map_frame",id:"map_minted_edge",name:"Minted Edge",cost:42}],pip:[{slot:"pip",id:"pip_postmasters_ribbon",name:"Postmaster's Ribbon",cost:15},{slot:"pip",id:"pip_nightcap_tassel",name:"Nightcap & Tassel",cost:18},{slot:"pip",id:"pip_aurora_foil",name:"Aurora Foil",cost:26},{slot:"pip",id:"pip_star_chart_apron",name:"Star-Chart Apron",cost:34},{slot:"pip",id:"pip_lantern_gala",name:"Lantern Gala",cost:44},{slot:"pip",id:"pip_observatory_ink",name:"Observatory Ink",cost:60}]},B_={fullSet:431},z_={repeatableAfterReply:["SD1","SD2","SD3","SD4","SD5","SD6","SD8"]};function Qi(n){return n.liveMod??Jd}function ya(n){const e=n.hall.F4??0;return It.backlogPoolBase*Math.pow(It.backlogPoolScale,e)*Qi(n).poolX}function eh(n){const e=n.hall.F3??0,i=en.F3?.trayFrac;if(!i||e<2)return 1;const r=Math.min(e-2,i.length-1);return 1+(i[r]??0)}function ga(n){const e=(n.hall.F6??0)>0;let t=0;for(const r of n.desks)r.unlocked&&(t+=mn.caps[r.tier]);return(e?t*mn.F6.capMult:t)*Qi(n).deskCapX}function H_(n){const e=n.hall.F2??0,t=It.sortPull(ya(n),e),i=(n.hall.F6??0)>0,r=n.desks.filter(a=>a.unlocked).length||1,s=i?mn.F6.capMult:1;return t*r*s}function th(n){const e=n.hall.F11??0,i=en.F11.satchelRateMult;let r=1;for(let s=1;s<=e;s++)r*=i;return r}function pl(n){let e=0;for(const t of n.racks)t.unlocked&&(e+=Gn.rates[t.tier]);return e*It.satchelBufferSeconds*th(n)*Qi(n).satchelX}function fl(n){const e=n.hall.F7??0,t=zn.F7,i=t.rateMultPerTier;let r=1;e>=1&&(r=t.rateMult);for(let a=2;a<=e;a++)r*=i;let s=0;for(const a of n.lanes)a.unlocked&&(s+=zn.rates[a.tier]);return s*r*th(n)*Qi(n).routeX}function G_(n){const e=n.hall.F12??0;return en.F12.bookedMult?.[e]??1}function ml(n){const e=Ot[n.districtIndex],t=e?e.letterValue:1,i=n.hall.F1??0;return t*(1+Xc.f1Step*i)*Xc.starsMultiplier(n.stars)}function gl(n){const e=n.hall.F5??0;return It.perfectSort.psMaxBase+It.perfectSort.psMaxPerF5*e+Qi(n).psMaxAdd}function V_(n){const e=n.hall.F5??0,t=en.F5;let i=It.perfectSort.rampS;for(const s of t.rampAtTiers??[])e>=s.tier&&(i=s.rampS);const r=Qi(n);return Math.max(r.rampMinS,i*r.rampX)}function W_(n){const e=n.hall.F5??0,t=en.F5;let i=It.perfectSort.decayS;for(const r of t.decayAtTiers??[])e>=r.tier&&(i=r.decayS);return i}function $_(n){return Math.floor(It.starScalar*Math.log(1+n/It.starDenom))}function X_(n,e,t,i){const r=gl(n);if(t)n.perfect=Math.min(r,n.perfect+1/V_(n)*e);else{const A=en.F5,G=n.hall.F5??0;let z=0;A&&A.persistenceTier!=null&&G>=A.persistenceTier&&(z=1+.5*(r-1)),n.perfect=Math.max(z,n.perfect-1/W_(n)*e)}const s=ya(n),a=It.backlogRefillBase*Math.pow(It.backlogRefillScale,n.hall.F4??0)*Qi(n).refillX;n.backlog=Math.min(s,n.backlog+a*eh(n)*e);const o=H_(n),c=ga(n),l=pl(n),h=fl(n);let d=0;const p=n.desks.reduce((A,G)=>A+G.inProcess,0),f=c-p,g=t?Math.min(f,o*e,n.backlog)*n.perfect:0;if(g>0){let A=g;const G=n.desks.filter(z=>z.unlocked);for(;A>1e-6&&G.length;){let z=!1;for(const K of G){const te=mn.caps[K.tier],re=(n.hall.F6??0)>0?te*mn.F6.capMult:te,X=re/c,he=Math.min(c>0?A*X:0,re-K.inProcess,A);he>1e-6&&(K.inProcess+=he,A-=he,z=!0)}if(!z)break}n.backlog=Math.max(0,n.backlog-g)}const x=n.racks.reduce((A,G)=>A+(G.unlocked?Gn.rates[G.tier]:0),0),m=n.desks.reduce((A,G)=>A+G.inProcess,0),u=Math.min(m,x*e);n.bundled=(n.bundled??0)+u;let w=u;const T=n.desks.filter(A=>A.unlocked);for(const A of T){if(w<=1e-6)break;const G=Math.min(A.inProcess,w);A.inProcess-=G,w-=G}const y=Math.min(n.bundled??0,h*e);n.bundled=(n.bundled??0)-y;const B=ml(n),R=y*B;n.totalEarnedRun+=R,n.districtRouteValue+=y,d=y;const L=g>0&&f<=1e-6,k=(n.bundled??0)>=l-1e-6,S=(n.bundled??0)>0&&y<(n.bundled??0)*.5+1e-6;let _="none";return S&&(n.bundled??0)>l*.9?_="lane":k?_="rack":L&&(_="desk"),{delivered:d,postageEarned:R,bottleneck:_}}function Ce(n,e,t,i){const r=new wi(n,e,t),s=new Nt({color:i});return new tt(r,s)}function Et(n,e,t,i,r=20){return new tt(new xi(n,e,t,r),new Nt({color:i}))}const q_=-5.2,ut=-4.95,gi=[-3.4,-1.2,1.1,3.3],jc=[-4.4,-3.1,-1.8,-.5],_i=[-4.4,-3.1,-1.8,-.5];function j_(n,e={}){const t=new rt,i=new M_("#5B79C8","#17233F",.9);n.add(i);const r=new Uc("#F4E7C7",1.15);r.position.set(8,14,6),n.add(r);const s=new Uc(M.plum,.35);s.position.set(-6,6,-4),n.add(s);const a=new tt(new wi(16,.3,16),new Nt({color:"#20304f"}));a.position.y=-.15,t.add(a);const o={color:M.brass},c=Ce(14.5,.12,.12,o.color);c.position.set(0,.5,-4.6);const l=Ce(14.5,.12,.12,o.color);l.position.set(0,.5,4.6);const h=Ce(.12,.12,9.2,o.color);h.position.set(-7.2,.5,0);const d=Ce(.12,.12,9.2,o.color);d.position.set(7.2,.5,0);for(const C of[c,l,h,d])Et(.05,.05,.5,M.brass,8).position.set(C.position.x-(C.scale.x||0),.25,C.position.z),t.add(C);const p=Ce(14.6,5.4,.4,"#241f3a");p.position.set(0,2.7,q_),t.add(p);const f=new tt(new xi(1.5,1.5,.12,28),new Nt({color:M.inkNavy}));f.rotation.x=Math.PI/2,f.position.set(-2.4,3.1,ut+.08),t.add(f);const g=new tt(new Vi(1.5,.06,8,28),new Nt({color:M.brass}));g.position.copy(f.position),t.add(g);const x=new jt({color:M.routeMint}),m=new jt({color:M.inkNavy}),u=new jt({color:"#101a30"});function w(C,U,O){const $=C.distanceTo(U),Q=new tt(new xi(.035,.035,$,6),O),Te=C.clone().add(U).multiplyScalar(.5);return Q.position.copy(Te),Q.lookAt(U),Q.rotateX(Math.PI/2),Q}const T=f.position.clone(),y=new P(-.4,2.15,ut+.12),B=new P(.5,3.3,ut+.12),R=new P(1.7,3.9,ut+.12);t.add(w(T,y,x));const L=w(T,B,m);t.add(L),t.add(w(T,R,u));const k=new tt(new Vi(.42,.07,8,20),new jt({color:"#0d1730"}));k.position.copy(R),t.add(k);const S=Ce(.22,1,.1,"#0d1730");S.position.set(R.x-.14,R.y+.8,R.z);const _=Ce(.16,.7,.1,"#0d1730");_.position.set(R.x+.18,R.y+.65,R.z),t.add(S),t.add(_);const A=new rt;A.add(k,S,_),t.add(A);const G=new rt,z=Ce(2.4,3.2,.5,M.moonBlue);z.position.y=1.6,G.add(z);const K=Ce(1.2,2.2,.5,M.plum);K.position.set(1.6,1.1,0),G.add(K);const te=Ce(1.4,2.7,.5,M.brass);te.position.set(-1.4,1.35,-.2),G.add(te),G.position.set(-5.2,0,-4.35),t.add(G);const Y=new rt,re=Ce(2,2.6,.5,M.moonBlue);re.position.y=1.3,Y.add(re);const X=Ce(2.6,1.8,.5,M.plum);X.position.set(.4,.9,.2),Y.add(X),Y.position.set(4.9,0,-4.35),t.add(Y);const he={1:B,2:R,3:new P(2.85,4.25,ut+.12),4:new P(3.95,4.55,ut+.12),5:new P(5,4.8,ut+.12),6:new P(5.95,4.98,ut+.12),7:new P(6.8,5.12,ut+.12),8:new P(7.6,5.22,ut+.12),9:new P(8.45,5.32,ut+.12),10:new P(9.25,5.4,ut+.12),11:new P(10,5.46,ut+.12)},ye={1:M.routeMint,2:M.brass,3:M.plum,4:"#a8e6c9",5:M.moonBlue,6:M.plum,7:M.routeMint,8:M.moonBlue,9:M.routeMint,10:M.plum,11:M.moonBlue},Fe="#101a30",Ge={1:L};for(const C of[2,3,4,5,6,7,8,9,10,11]){const U=new jt({color:Fe}),O=w(T,he[C],U);t.add(O),Ge[C]=O}function st(){const C=new rt,U=Ce(.24,1,.12,"#8ea3c8");U.position.y=.5;const O=Et(.14,.14,.03,M.parchment,16);O.rotation.x=Math.PI/2,O.position.set(0,.86,.07);const $=Ce(.02,.11,.012,M.inkNavy);$.geometry.translate(0,.055,0),$.position.set(0,.86,.095);const Q=Et(.09,.13,.14,M.brass,10);return Q.position.set(0,.66,.06),C.add(U,O,$,Q),C.userData.hand=$,C}function J(){const C=new rt;for(let $=-1.5;$<=1.5;$++){const Q=Et(.05,.06,.55,"#9db4dd",8);Q.position.set($*.24,.275,0),C.add(Q)}const U=Ce(.95,.08,.14,M.plum);U.position.y=.6;const O=Ce(.14,.2,.06,M.parchment);return O.position.set(.36,.14,.05),C.add(U,O),C}function ae(){const C=new rt,U=Ce(.85,.3,.14,"#3f6f5a");U.position.y=.15;const O=new tt(new ti(.5,.4),new Nt({color:"#a8e6c9",transparent:!0,opacity:.45}));O.position.set(-.13,.5,.02),O.rotation.z=.5;const $=O.clone();$.position.x=.13,$.rotation.z=-.5;const Q=Ce(.06,.5,.06,"#2e5d49");return Q.position.set(.3,.3,.06),C.add(U,O,$,Q),C}function De(){const C=new rt,U=Ce(1.05,.04,.2,"#0b1530");U.position.y=.02;const O=new tt(new Vi(.36,.05,8,16,Math.PI),new Nt({color:"#6f85b8"}));O.position.y=.06;const $=Ce(.24,.3,.12,"#29406e");$.position.set(-.46,.15,0);const Q=Et(.03,.04,.16,M.brass,8);return Q.position.set(.42,.5,.05),C.add(U,O,$,Q),C.userData.water=U,C}function me(){const C=new rt,U=Ce(.95,.3,.14,"#241f3a");U.position.y=.15,C.add(U);for(let $=-1.5;$<=1.5;$++){const Q=Ce(.18,.22+(Math.abs($)===1?.06:0),.12,$%2===0?"#3a2b46":"#2c2340");Q.position.set($*.24,.41,0);const Te=Ce(.12,.05,.02,M.parchment);Te.position.set($*.24,.55,.07),C.add(Q,Te)}const O=Et(.09,.09,.025,M.brass,14);return O.position.set(.05,.62,.06),O.rotation.z=1.2,C.add(O),C.userData.coinTicket=O,C}function Be(){const C=new rt,U=Ce(.95,.26,.14,"#2c4a3e");U.position.y=.13,C.add(U);for(let $=0;$<3;$++){const Q=new tt(new ti(.3,.5),new Nt({color:"#a8e6c9",transparent:!0,opacity:.4}));Q.position.set(-.3+$*.3,.55,.02+$*.002),Q.rotation.z=-.35+$*.35,C.add(Q)}const O=Ce(.035,.3,.012,M.parchment);return O.position.set(-.06,.56,.06),O.rotation.z=-.28,C.add(O),C}function Ve(){const C=new rt;for(let $=0;$<4;$++){const Q=Ce(.16,.55+$%2*.1,.12,$%2===0?"#3b4a6b":"#31405f");Q.position.set(-.3+$*.2,.32+$%2*.05,0),C.add(Q)}const U=Et(.035,.05,.12,M.brass,8);U.position.set(.42,.32,.05),C.add(U);const O=Ce(.14,.2,.02,M.parchment);return O.position.set(.1,.75,.06),O.userData.dropFromY=.75,C.add(O),C.userData.dueCard=O,C}function je(){const C=new rt,U=Ce(.95,.1,.16,"#2f4a3e");U.position.y=.32,C.add(U);for(let O=-1.5;O<=1.5;O++){const $=Et(.03,.045,.34,M.brass,8);$.position.set(O*.26,.17,0),C.add($)}for(let O=0;O<2;O++){const $=new tt(new Lr(.14,.18,4),new Nt({color:O===0?M.brass:M.routeMint}));$.rotation.y=Math.PI/4,$.position.set(-.32+O*.6,.62,.04);const Q=Ce(.012,.16,.012,"#1c2a22");Q.position.set($.position.x,.45,.05),C.add($,Q)}for(let O=0;O<3;O++){const $=Et(.012,.012,.12,M.brass,6);$.position.set(-.38+O*.38,.5,.06),C.add($)}return C}function Z(){const C=new rt;for(let O=0;O<3;O++){const $=Ce(.28,.06,.14,O===1?M.plum:"#3a2b46");$.position.set(-.3+O*.3,.6,0),$.rotation.z=-.08+O*.08,C.add($);const Q=Et(.02,.025,.4,M.brass,8);Q.position.set(-.3+O*.3,.28,0),C.add(Q)}const U=Et(.035,.05,.14,M.brass,8);return U.position.set(.34,.52,.05),C.add(U),C}function j(){const C=new rt;for(let Q=0;Q<5;Q++){const Te=Ce(.16,.5+Q%2*.12,.12,Q%2===0?"#33415f":"#2a3752");Te.position.set(-.34+Q*.17,.3+Q%2*.05,0),Te.rotation.z=-.05+Q*.018,C.add(Te)}const U=Ce(.02,.24,.02,M.brass);U.position.set(.3,.62,.05);const O=Ce(.28,.02,.02,M.brass);O.position.set(.44,.74,.05);const $=new tt(new Pr(.07,12,8),new jt({color:M.moonBlue}));return $.position.set(.58,.72,.05),C.add(U,O,$),C.userData.lens=$,C}function ze(C){const U=new rt,O=Ce(.9,.55+C*.06,.06,"#16203c");O.position.y=.3;const $=Ce(.34,.5,.06,"#101a30");return $.position.set(.3,.45,.02),U.add(O,$),U}const D={},nt={2:st,3:J,4:ae,5:De,6:me,7:Be,8:Ve,9:je,10:Z,11:j};for(const C of[2,3,4,5,6,7,8,9,10,11]){const U=he[C],O=nt[C]();O.position.set(U.x-.2,U.y-1.05,U.z+.01),O.visible=!1;const $=ze(C);$.position.set(U.x-.45,U.y-1.05,U.z),t.add(O,$),D[C]={lit:O,locked:$}}const Oe=new rt,Me=Ce(.85,.62,.08,"#241f3a");Me.position.set(3.35,1.05,1.45),Me.rotation.y=-.35;const Re=[];for(let C=0;C<3;C++){const U=Ce(.18,.26,.03,M.plum);U.position.set(3.16+C*.24,1.03,1.52-C*.087),U.rotation.y=-.35,U.visible=!1,Re.push(U),Oe.add(U)}const pe=[];for(let C=0;C<3;C++){const U=Ce(.07,.5,.028,M.parchment);U.geometry.translate(0,.25,0),U.position.set(3.1+C*.3,.82,1.68-C*.06),U.rotation.y=-.35,U.scale.set(1,0,1),U.visible=!1,pe.push(U),Oe.add(U)}const oe=[],E=["lantern_lane","rainmarket","clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"],v=[M.routeMint,M.routeMint,M.brass,M.plum,"#a8e6c9",M.moonBlue];for(let C=0;C<6;C++){const U=Ce(.09,.09,.02,v[C]);U.position.set(3+C*.135,.72,1.62-C%3*.045),U.rotation.y=-.35,oe.push(U),Oe.add(U)}const H=Ce(1.3,.4,.5,"#3a2b46");H.position.set(3.3,.4,1.4),Oe.add(H,Me),t.add(Oe);const ne=new rt,se=Et(.26,.18,.28,"#b08d57",10);se.position.set(-4.55,.34,1.5);const ee=Ce(.24,.16,.02,M.parchment);ee.position.set(-4.55,.56,1.5),ee.rotation.z=-.12;const ke=Et(.035,.035,.02,M.brass,8);ke.rotation.x=Math.PI/2,ke.position.set(-4.47,.56,1.53),ne.add(se,ee,ke),ne.visible=!1,t.add(ne);const ue={};{const C=new rt,U=new tt(new ti(3.2,1.2),new Nt({color:M.moonBlue,transparent:!0,opacity:.3}));U.position.set(-2.4,4.4,ut+.18),C.add(U);for(let O=0;O<5;O++){const $=Ce(.03,.9,.012,M.moonBlue);$.position.set(-3.6+O*.6,4.4,ut+.19),$.rotation.z=.12,C.add($)}ue.rain_sheen=C}{const C=new rt;for(let U=0;U<4;U++){const O=Ce(.5-U*.07,.16,.4-U*.05,U%2?"#17233F":"#1f3050");O.position.set(-2.6,2.05+U*.16,4),C.add(O)}ue.backlog_surge=C}{const C=new rt,U=new tt(new Vi(.62,.045,8,24),new Nt({color:M.brass}));U.position.copy(T).setZ(ut+.2),C.add(U),ue.perfect_moon=C}{const C=new rt,U="#a8e6c9";for(let O=0;O<_i.length;O++){const $=Ce(.07,.62,.02,U);$.geometry.translate(0,.31,0),$.position.set(_i[O]+.2,.34,-3),$.rotation.z=-.5,C.add($);const Q=Ce(.05,.34,.018,M.routeMint);Q.geometry.translate(0,.17,0),Q.position.set(_i[O]-.07,.22,-2.92),Q.rotation.z=-.32,C.add(Q)}ue.tailwind=C}{const C=new rt;for(let U=0;U<3;U++){const O=Et(.02,.22,.9,"#b8893d",8);O.position.set(-1.6+U*1.6,3.6,ut+.4),O.rotation.z=.35,C.add(O)}ue.long_shadows=C}{const C=new rt;for(let U=0;U<7;U++){const O=new tt(new Lr(.09,.18,4),new Nt({color:M.parchment}));O.position.set(-3.2+U*.5,2.75+Math.sin(U*.9)*.05,1.2),O.rotation.x=Math.PI,C.add(O)}ue.stamp_fair=C}{const C=new rt;for(let U=0;U<gi.length;U++){const O=Et(.03,.055,.14,M.plum,6);O.position.set(gi[U]+.2,.62,1.55),C.add(O)}ue.wax_festival=C}for(const C of Object.values(ue))C.visible=!1,t.add(C);function Ae(C){const U=C.liveMod?.id??null;for(const[O,$]of Object.entries(ue))$.visible=O===U}const Qe=[];for(let C=0;C<gi.length;C++){const U=Ce(.34,.07,.24,"#101a30");U.position.set(gi[C]-.42,.245,1.35),t.add(U),Qe.push(U)}const le=[];for(let C=0;C<_i.length;C++){const U=Ce(.05,.02,3,"#b08d57"),O=Ce(.05,.02,3,"#b08d57");U.position.set(_i[C]-.34,.03,-3),O.position.set(_i[C]+.34,.03,-3),t.add(U,O),le.push([U,O])}const Se=[],He=[],We=[];gi.forEach((C,U)=>{const O=Ce(1.4,.6,.8,M.brass);O.position.set(C,-.09,1.6);const $=Ce(1.5,.18,.9,M.parchment);$.position.set(C,.12,1.6);const Q=Ce(.4,.09,.3,M.brass);Q.position.set(C-.45,.245,1.95);const Te=Ce(.5,1,.36,M.parchment);Te.position.set(C+.38,.21,1.35),Te.scale.y=.02,t.add(O,$,Q,Te),Se.push($),He.push(Te),We.push(Q)});const we=[],Ze=[],qe=[];jc.forEach(C=>{const U=Ce(.9,1.5,.5,"#3a2b46");U.position.set(C,.75,-1.4);const O=Ce(.56,.5,.34,M.plum);O.position.set(C,1.02,-1.32);const $=Ce(.12,1,.05,M.routeMint);$.position.set(C+.38,.5,-1.12),$.scale.y=.02;const Q=.5;$.position.y=Q,t.add(U,O,$),we.push(U),Ze.push(O),qe.push($)});const pt=[];for(let C=0;C<2;C++){const U=new tt(new ti(2.6,.5),new jt({color:M.routeMint,transparent:!0,opacity:.25}));U.rotation.x=-Math.PI/2,U.rotation.z=Math.PI/2,U.position.set(-2.6+C*1.4,.03,.35),t.add(U),pt.push(U)}const I=new rt,ge=Ce(.22,1.7,.22,M.brass);ge.position.set(-.85,.85,.3);const q=Ce(.22,1.7,.22,M.brass);q.position.set(.85,.85,.3);const ie=Ce(1.95,.24,.24,M.brass);ie.position.set(0,1.72,.3);const ve=Et(.09,.09,.3,M.inkNavy,8);ve.position.set(1.02,1.15,.3),ve.rotation.z=Math.PI/2;const xe=Ce(.07,.62,.07,M.sealingRed);xe.position.set(0,.31,0);const $e=new rt;$e.position.set(1.02,1.15,.3),$e.add(xe),$e.rotation.z=-.5,I.add(ge,q,ie,ve,$e),t.add(I);const bt=[],Ct=[];_i.forEach(C=>{const U=new tt(new ti(.7,3),new jt({color:M.routeMint,transparent:!0,opacity:.85}));U.rotation.x=-Math.PI/2,U.position.set(C,.02,-3);const O=Ce(.4,.3,.12,"#0d1730");O.position.set(C,.15,-3),t.add(U,O),bt.push(U),Ct.push(O)});const at=Ce(1.7,.18,1.4,"#2a3d68");at.position.set(-2.6,.09,4);const tn=Ce(1.7,.3,.1,M.brass);tn.position.set(-2.6,.24,4.62);const Wt=Et(1.1,1.3,1.1,M.parchment);Wt.position.set(-2.6,.55,4);const Ci=new tt(new Lr(.3,.5,4),new Nt({color:M.moonBlue}));Ci.rotation.x=Math.PI,Ci.position.set(-2.6,1.9,4),t.add(at,tn,Wt,Ci);const Bt=new rt,Sn=Et(.24,.26,.2,M.sealingRed,12);Sn.position.y=.1;const tr=Et(.19,.19,.06,M.parchment,12);tr.position.y=.23;const Qr=Ce(.045,.05,.03,M.inkNavy);Qr.position.set(-.06,.27,.16);const es=Ce(.045,.05,.03,M.inkNavy);es.position.set(.06,.27,.16),Bt.add(Sn,tr,Qr,es),Bt.position.set(1.65,0,.95),t.add(Bt);const an=new rt,ts=Et(.22,.42,1.5,M.plum,10);ts.position.y=.75;const Ri=Et(.17,.17,.3,M.parchment,10);Ri.position.y=1.68;const nr=new tt(new Vi(.07,.015,6,12),new jt({color:M.brass}));nr.position.set(-.075,1.7,.16);const ns=nr.clone();ns.position.x=.075;const Ps=Ce(.05,.015,.02,M.brass);Ps.position.set(0,1.7,.17),an.add(ts,Ri,nr,ns,Ps),an.position.set(2.3,0,-3.6),t.add(an);const Vn=new tt(new Pr(.32,12,12),new jt({color:"#72D6C1"}));Vn.position.set(0,2.4,0);const Ds=Ce(.1,2.2,.1,M.brass);Ds.position.set(0,1.1,0),t.add(Ds,Vn),n.add(t);const b=new rt;n.add(b);const F=[];function V(C){const U=new rt,O=C==="grand",$=new tt(new Lr(O?.55:.42,O?.95:.75,12),new Nt({color:O?M.sealingRed:"#e8b86b"}));$.position.y=0;const Q=new tt(new xi(O?.56:.43,O?.56:.43,.08,12),new Nt({color:M.brass}));Q.position.y=O?.34:.27;const Te=new tt(new Pr(O?.34:.24,10,10),new jt({color:O?"#ff9a3c":"#ffcf7a",transparent:!0,opacity:.85}));Te.position.y=O?-.18:-.14;const ht=new tt(new xi(.012,.012,.5,6),new Nt({color:M.inkNavy}));return ht.position.y=O?-.55:-.42,$.userData.kind=C,Te.userData.kind=C,Q.userData.kind=C,U.add($,Q,Te,ht),U.userData.kind=C,U.position.set((Math.random()-.5)*7.5,2.9+Math.random()*1.3,-2.2+Math.random()*2.6),U}function W(C){if(F.length>=si.maxConcurrent)return;const U=V(C);if(C==="grand"){const O=new tt(new Pr(.07,6,6),new jt({color:"#ffd773",transparent:!0,opacity:.9}));O.position.set(0,-.3,-.2),U.add(O)}b.add(U),F.push({group:U,kind:C,bornS:0,lifeS:0,swayT:Math.random()*Math.PI*2})}function N(C){const U=F[C];U&&(b.remove(U.group),F.splice(C,1))}function ce(C,U,O){for(let $=F.length-1;$>=0;$--){const Q=F[$];if(Q.lifeS+=C,Q.lifeS>=si.despawnS){N($);continue}const Te=Q.lifeS>=si.despawnS-5?.5:1,ht=Q.group.children[0];if(ht.material.transparent=Te<1,ht.material.opacity=Te,O){const Pi=Q.group.children[2];Pi.material.opacity=(.6+Math.sin(Q.lifeS*2)*.2)*Te;continue}Q.swayT+=C*.8,Q.group.position.y+=Math.sin(Q.swayT)*C*.18,Q.group.rotation.y+=C*.4,Q.group.position.x+=Math.sin(Q.swayT*.7)*C*.1;const Rt=Q.group.children[0];Rt.rotation.z=Math.sin(Q.swayT*1.3)*.08}}const be=new wi(.34,.05,.24),Ie=new Nt({color:M.parchment}),Ee=new P_(Vc.budget,be,Ie);n.add(Ee.mesh);const Ne=[];let Xe=0,Le=0;function it(C,U,O){const $=Ee.acquire(C.x,C.y+.3,C.z,{color:O});if($&&(Ne.push({inst:$,from:C.clone(),to:U.clone(),t:0,dur:.55+Math.random()*.35}),Ne.length>Vc.budget-20)){const Q=Ne.shift();Ee.hide(Q.inst)}}function ft(C,U){const O=[];if(U){const Q=Ne.length>0?.95:.5;for(const Te of bt)Te.material.opacity=Q*.85;for(const Te of Ne.splice(0))Ee.hide(Te.inst);Vn.material.opacity=Q}else{for(let Q=Ne.length-1;Q>=0;Q--){const Te=Ne[Q];Te.t+=C;const ht=Math.min(1,Te.t/Te.dur),Rt=ht*ht*(3-2*ht),Pi=Jn.lerp(Te.from.x,Te.to.x,Rt),is=Jn.lerp(Te.from.y+.3,Te.to.y,Rt)+Math.sin(ht*Math.PI)*.4,ir=Jn.lerp(Te.from.z,Te.to.z,Rt);Ee.move(Te.inst,Pi,is,ir,Rt*1.2),ht>=1&&O.push(Q)}for(const Q of O)Ee.hide(Ne[Q].inst),Ne.splice(Q,1)}Ee.commit(),Xe>0&&(Xe=Math.max(0,Xe-C*4),$e.rotation.z=-.5+Math.sin(Xe*Math.PI)*.7);const $=Ne.length>0?.55:.25;for(const Q of pt){const Te=Q.material;Te.opacity+=($-Te.opacity)*Math.min(1,C*6)}Ci.position.y=1.9+Math.sin(performance.now()/600)*.08}const _t={ok:"#72D6C1",warn:"#D6A84B",red:"#C74B55"};function zt(C){Vn.material.color.set(_t[C]),Vn.material.opacity=1}function lt(C){const U=Math.max(1e-9,ga(C));Se.forEach((O,$)=>{const Q=C.desks[$],Te=!!Q?.unlocked,ht=Q?.tier??0,Rt=Te?1+ht*.18:1;O.scale.y=Rt,O.position.y=.12+(Rt-1)*.18,O.scale.x=Te&&ht>0?1+ht*.08:1;const Pi=O.material;Te?Pi.color.set((Q?.inProcess??0)>0?M.parchment:M.moonBlue):Pi.color.set("#1c1830");const is=U/gi.length,ir=Te?Math.min(1,(Q?.inProcess??0)/Math.max(1e-9,is)):0,rs=He[$];rs.scale.y=Math.max(.02,ir*.55),rs.position.y=.21+rs.scale.y/2,We[$].material.color.set(Te&&ht>=2?M.routeMint:M.brass)})}function Ue(C){const U=C.blocking.everDistricts.includes(1)||C.districtIndex>=1;L.material.color.set(U?M.routeMint:M.inkNavy);const O=($,Q)=>{$.children.forEach(Te=>{const ht=Te.material;if(ht&&!(ht instanceof jt)){const Rt=new Je(Q?M.brass:M.moonBlue);ht.color.copy(Rt.multiplyScalar(Q?1:.3))}})};O(G,C.districtIndex===0),O(Y,U)}function wn(C){const U=Math.max(1e-9,168),O=Math.min(1,(C.bundled??0)/U);we.forEach(($,Q)=>{const Te=!!C.racks[Q]?.unlocked;$.material.color.set(Te?"#3a2b46":"#1c1830"),Ze[Q].visible=Te;const ht=Math.min(1,Math.max(0,O*ct(C)-on(C,Q))),Rt=qe[Q];Rt.visible=Te,Rt.scale.y=Math.max(.02,ht),Rt.position.y=.02+ht/2})}function ct(C){return C.racks.filter(U=>U.unlocked).length}function on(C,U){let O=0;for(let $=0;$<=U;$++)C.racks[$]?.unlocked&&O++;return O}function li(C,U){bt.forEach((O,$)=>{const Q=C.lanes[$],Te=!!Q?.unlocked,ht=O.material;if(Te){const Rt=[0,.1,.2][Q?.tier??0]??.3;ht.opacity=Math.min(1,.35+.5*U+Rt),ht.color.set(M.routeMint)}else ht.opacity=.12,ht.color.set("#101a30");Ct[$].visible=!Te})}function $t(C,U,O){Wt.scale.y=Math.max(.15,U),Wt.position.y=.18+1.1*Wt.scale.y/2,at.material.color.set(O?"#17233F":"#2a3d68")}function Li(C,U){k.material.color.set(U?M.brass:"#0d1730")}const vt=["#b08d57",M.parchment,"#cfd8e8"];let nn=!1,ci=!1,Xt=!1;function In(C,U){const O=et=>C.ch2.districtsAnswered.includes(et);for(const et of[2,3,4,5,6,7,8,9,10,11]){const wt=O(et),En=Ge[et].material;En.userData.pulse==null&&En.color.set(wt?ye[et]:Fe);const rr=D[et];rr.lit.visible=wt,rr.locked.visible=!wt}{const et=D[11].lit.userData.lens;if(et){const wt=et.material;O(11)?wt.color.set(M.moonBlue):O(8)?wt.color.set(M.brass):wt.color.set("#9db4dd")}}const $=[6,7,8].filter(et=>O(et)).length;for(const et of[1,2,3,4,5,6,7,8]){const wt=Ge[et];if(!wt)continue;const En=1+.35*$;wt.scale.set(En,1,En)}if(O(6)&&!ci){ci=!0;const et=D[6].lit.userData.coinTicket;et&&(et.rotation.z=Math.PI/2)}if(O(8)&&!Xt){Xt=!0;const et=D[8].lit.userData.dueCard;et&&(et.position.y=.12)}const Q=O(2);if(A.visible=!Q,Q&&!nn){nn=!0;const et=D[2].lit.userData.hand;et&&(et.rotation.z=-Math.PI/30)}Q||(nn=!1);const ht=(C.hall.F3??0)>=2,Rt=Math.max(1e-9,ga(C)),is=C.desks.reduce((et,wt)=>et+wt.inProcess,0)/Rt>=.99;Qe.forEach(et=>{et.material.color.set(ht?is?"#34506f":M.moonBlue:"#101a30")});const ir=C.hall.F7??0,rs=ir>=3?2:ir>=2?1:0;C.lanes.forEach((et,wt)=>{const En=et.tier>=5?2:et.tier>=3?1:0,rr=Math.max(En,rs);for(const tu of le[wt]??[])tu.material.color.set(vt[rr])}),Re.forEach((et,wt)=>{et.visible=wt<Math.max(0,U.sdActive)}),pe.forEach((et,wt)=>{const En=U.sdFills?.[wt]??0;et.visible=En>0,et.scale.y=Math.min(1,Math.max(0,En))});const eu=O(2);ne.visible=eu,ee.material.color.set(U.mpDue?M.parchment:"#7a6f52"),oe.forEach((et,wt)=>{const rr=(C.ch2.stampInventory[E[wt]]??0)>=250;et.scale.setScalar(rr?1.35:1),U.stampCapsAt})}const ln=[];function ks(C){const U="#ffd773",O=$=>{const Q=Ge[$];if(!Q)return;const Te=Q.material;Te.color.set(U),Te.userData.pulse=!0,ln.push({mesh:Q,base:ye[$]??M.routeMint,t:1.1})};if(C==null)for(const $ of Object.keys(Ge).map(Number).sort((Q,Te)=>Q-Te))O($);else O(C);if(C==null){const $=D[5].lit.userData.water;if($){const Q=$.material;Q.color.set("#22356b"),setTimeout(()=>Q.color.set("#0b1530"),1200)}}}function Gh(C){for(let U=ln.length-1;U>=0;U--){const O=ln[U];if(O.t-=C,O.t<=0){const $=O.mesh.material;delete $.userData.pulse,$.color.set(O.base),ln.splice(U,1)}}}function Vh(C,U,O){if(Ea.pipSleep){Bt.rotation.y=.4,Bt.rotation.z=-1.15;const $=O?0:Math.sin(U*Math.PI*2/2.4)*.035;Bt.scale.set(1,1+$,1),Bt.position.set(-2.35,.5+$*.4,2.75)}else{const $=O?.03:.12;Le>0&&(Le=Math.max(0,Le-C*3)),Bt.position.y=Math.abs(Math.sin(U*2.2))*$+Math.sin(Le*Math.PI)*.25,Bt.rotation.y=Math.sin(U*.8)*.3,Bt.rotation.z!==0&&(Bt.rotation.z=0,Bt.scale.set(1,1,1),Bt.position.set(1.65,0,.95))}if(Ea.maraFiling){const $=U%90,Q=Math.min(1,$/30),Te=O?Q<.5?2.6:-2.6:2.6+(-2.6-2.6)*Q;an.position.x=Te,an.position.z=-3.2,an.rotation.y=Te>0?-.4:.4}else an.position.set(2.3,0,-3.6),an.rotation.y=Math.sin(U*.4)*.18}const Wh=new Je("#2a3b65"),$h=new Je("#17233F");let Ea={pipSleep:!1,maraFiling:!1};function Xh(C){n.background=C?Wh:$h}function qh(C){Ea=C,C.lampWarm&&Vn.material.color.set(M.parchment)}const jh={desk_dusk_mahogany:"#5a3f2b",desk_porcelain_night:"#e8e4da",desk_brass_band:M.brass},Yh={rack_inkwood:"#2c2233",rack_fog_velvet:"#7b8aa8",rack_plum_felt:"#6d3e78"},Kh={map_moon_oak:"#8a9ec0",map_cartographers_ink:"#2a2f45",map_minted_edge:M.routeMint},Zh={pip_postmasters_ribbon:"#c74b55",pip_nightcap_tassel:"#bfa06a",pip_aurora_foil:"#7f9ad6",pip_star_chart_apron:"#e6e2d8",pip_lantern_gala:"#d6a84b",pip_observatory_ink:"#17233f"};function Jh(C){const U=jh[C.desk??""];for(const Te of Se)Te.material.color.set(U??M.parchment);const O=Yh[C.rack??""];for(const Te of we)Te.material.color.set(O??"#3a2b46");const $=Kh[C.map_frame??""];g.material.color.set($??M.brass);const Q=Zh[C.pip??""];Sn.material.color.set(Q??M.sealingRed)}const Qh=[...gi.map((C,U)=>({label:`PAD-${U+1}`,pos:new P(C,.9,1.6)})),...jc.map((C,U)=>({label:`RACK-${U+1}`,pos:new P(C,1.9,-1.4)})),..._i.map((C,U)=>({label:`LANE-${U+1}`,pos:new P(C,.4,-3)})),{label:"STAMP GATE",pos:new P(0,2.1,.3)},{label:"BACKLOG TRAY",pos:new P(-2.6,2.1,4)},{label:"ROUTE MAP",pos:new P(-2.4,4.9,ut)},{label:"PIP",pos:new P(1.65,.8,.95)},{label:"MARA",pos:new P(2.3,2.2,-3.6)},{label:"CLOCKTOWER SEAL",pos:new P(1.7,4.6,ut)},{label:"DIST-CW",pos:new P(1.5,4,ut)},{label:"DIST-MU",pos:new P(2.65,4.5,ut)},{label:"DIST-RG",pos:new P(3.75,4.75,ut)},{label:"DIST-CA",pos:new P(4.8,5,ut)},{label:"SD BOARD",pos:new P(3.35,1.8,1.4)},{label:"MP BASKET",pos:new P(-4.55,1,1.5)},...gi.map((C,U)=>({label:`TRAY-${U+1}`,pos:new P(C-.42,.6,1.35)})),{label:"DIST-MA",pos:new P(5.75,5.05,ut)},{label:"DIST-GQ",pos:new P(6.6,5.2,ut)},{label:"DIST-SL",pos:new P(7.4,5.3,ut)},{label:"DIST-CL",pos:new P(8.45,5.32,ut)},{label:"DIST-AB",pos:new P(9.25,5.4,ut)},{label:"DIST-LL",pos:new P(10,5.46,ut)},{label:"MOD DRESSING",pos:new P(-2.4,4.4,ut)}];return{scene:t,pool:Ee,flyers:Ne,lamp:Vn,setLampLevel:zt,deskMeshes:Se,updateDesks:lt,updateLanterns:Ue,animateFlyers:ft,spawnFlyer:it,leverKick:()=>{Xe=1},pipPulse:()=>{Le=1},updateRacks:wn,updateLanes:li,updateTray:$t,updateWall:Li,tickCharacters:Vh,debugAnchors:Qh,wanderGroup:b,wanderlights:F,spawnWanderlight:W,animateWanderlights:ce,despawnWanderlight:N,updateDistricts:In,updateModDressing:Ae,pulseThread:ks,tickChords:Gh,setDawnGrade:Xh,setDawnIdleFlags:qh,applyCosmetics:Jh}}const Pe={sortHold:"HOLD TO SORT",postage:"Postage",stars:"Stars",districtLL:"Lantern Lane",districtRM:"Rainmarket",districtCW:"Clocktower Ward",buy:"Buy",redraw:"Redraw Routes",waxSealsShort:"Seals",postcards:"Postcards",postcardsEmpty:"No postcards yet — the districts will write when they answer.",postcardsLocked:"Keep delivering to hear from this district.",postcardRead:"Read",postcardNew:"New",morningPost:"Morning Post",morningPostPrompt:"A fresh Morning Post has arrived for the frontier districts.",morningPostGranted:"Morning Post delivered",claim:"Claim",specialDeliveries:"Special Deliveries",specialEmpty:"No special requests yet. Keep delivering to receive requests.",specialStamps:"stamps",specialActive:"In transit",specialReady:"Ready to claim",specialStart:"Start",wanderCaught:"Lantern caught",wanderSeal:"+1 Wax Seal",pendingStarsShort:"★",flatRising:"Compass: rising thread",flatSettling:"Compass: settling thread",flatLevel:"Compass: still — routes spreading thin",flatNudge:"Compass: redraw — the wall has gone quiet",morningPostNextIn:"Next bundle in",morningPostHeldNote:"one bundle sleeps on the counter",specialEndsAt:"Route ends",rushOrder:"Rush Order",rushHeld:"The Unwritten Hour — a ready ×2 route boost for 30:00.",rushActiveUntil:"×2 booked until",officePapers:"Office Papers",roadmap:"After Dawn — Roadmap",dawnTitle:"The first morning",settingsBtn:"Settings",roundTripBtn:"Round Trip"},Yc=["","K","M","B","T","Qa","Qi","Sx","Sp"];function Ut(n){if(!isFinite(n))return"—";const e=Math.abs(n);if(e<1e3)return n<0?`-${Math.floor(e)}`:`${Math.floor(n)}`;const t=Math.floor(Math.log10(e)/3),i=e/Math.pow(10,t*3),r=Yc[Math.min(t,Yc.length-1)];let s=i.toFixed(2);return s=s.replace(/\.?0+$/,""),`${n<0?"-":""}${s}${r}`}function br(n){return isFinite(n)?`${Math.floor(n)}`:"—"}const gt={thirdWind:{beat:"ch3.open.1",speaker:"Pip",copy:"Nine answers on the map. The rest is weather."},longReturn:{beat:"ch3.open.2",speaker:"Mara",copy:"It answered while you slept. Sign for it."},f11Rail:{beat:"ch3.open.3",speaker:"Mara",copy:"Rail and road under one roof now. Buy the pair, thank me thrice.",highlight:"satchel"},f12Rail:{beat:"ch3.open.4",speaker:"Pip",copy:"Every stamp in the building just got heavier.",highlight:"route"},modIntro:{beat:"ch3.mod.1",speaker:"Mara",copy:"The forecast is for the routes, not the rain. Read it before you sort.",highlight:"modifier"},ledgerBasis:{beat:"ch3.ledger.1",speaker:"Mara",copy:"Long windows pay steady, not spiky. Steady wins routes."},voyageFrame:{beat:"ch3.voyage.1",speaker:"Pip",copy:"Name's on the ledger. Now we fill the sack."},maAnswer:{beat:"ch3.ma.1",speaker:"Mara",copy:"Wistful machines. Load-bearing nostalgia. Keep walking, Clerk."},modTiming:{beat:"ch3.mod.2",speaker:"Mara",copy:"Yesterday's sky paid routes. Today's pays patience. Choose your wall.",highlight:"modifier"},rushPreview:{beat:"ch3.rush.1",speaker:"Pip",copy:"One golden half-hour. Spend it on a wall that earns its keep.",highlight:"special"},rushGrant:{beat:"ch3.rush.2",speaker:"Pip",copy:"Clock's loud when you wake it. Thirty minutes. Wring it.",highlight:"sort"},rushDeploy:{beat:"ch3.rush.3",speaker:"Mara",copy:"Half an hour of downhill. Mind the brakes.",highlight:"sort"},slClose1:{beat:"ch3.sl.1",speaker:"Mara",copy:"Three districts, one silence, finally broken. Well routed."},slClose2:{beat:"ch3.sl.1b",speaker:"Pip",copy:"*West.* I can smell the platforms."}},Y_=[{districtIndex:6,id:"moonlit_arcade",name:"Moonlit Arcade",body:"The route-miniature runs out along a midway of shuttered stalls; coin-wells and ticket drums sit dark — then one brass coin-ticket spins itself upright, clatters once, and lies still. Every stall’s paper glows faintly addressed.",speaker:"Mara",speakerLine:"They spent the coins on ink long ago. Thriftier than it sounds.",arrivalCopy:null},{districtIndex:7,id:"glasshouse_quarter",name:"Glasshouse Quarter",body:"Greenhouse panes above a sleeping market row; pressed flowers ride inside every envelope like held breath. Condensation on one pane resumes writing a word it began in an earlier chapter — and finishes.",speaker:"Pip",speakerLine:"Shhh. Everything in here is sleeping *on purpose*.",arrivalCopy:null},{districtIndex:8,id:"sleepless_library",name:"Sleepless Library",body:"Shelf-aisles run past the frame in both directions; the lamps never quite go out. A book drops onto the counter on its own — its due-card pre-stamped TOMORROW. For a moment every thread on the map leans west.",speaker:"Mara",speakerLine:"Three districts, one silence, finally broken. *Well routed.*",arrivalCopy:null}],ps={rain_sheen:{id:"rain_sheen",name:"Rain Sheen",glyph:"rain-glaze",wash:"#5B79C8",dressingNote:"rain glaze on the hall glass",effectLine:"Slick roofs. Fast lanes."},backlog_surge:{id:"backlog_surge",name:"Backlog Surge",glyph:"pile",wash:"#17233F",dressingNote:"the backlog pile visibly taller",effectLine:"More mail tonight. More everything."},perfect_moon:{id:"perfect_moon",name:"Perfect Moon",glyph:"halo",wash:"#D6A84B",dressingNote:"moon halo over the route map",effectLine:"Clean streaks come easy tonight."},tailwind:{id:"tailwind",name:"Tailwind Night",glyph:"streamers",wash:"#72D6C1",dressingNote:"mint streamers on the lanes",effectLine:"Every lane leans west."},long_shadows:{id:"long_shadows",name:"Long Shadows",glyph:"lamp-dim",wash:"#D6A84B",dressingNote:"lamps dim one step, longer cones",effectLine:"The ledger reads longer into the dark."},stamp_fair:{id:"stamp_fair",name:"Stamp Fair",glyph:"bunting",wash:"#F4E7C7",dressingNote:"paper bunting over the counter",effectLine:"Every pocket rattles twice."},wax_festival:{id:"wax_festival",name:"Wax Festival",glyph:"wax-drips",wash:"#6D3E78",dressingNote:"plum wax drips on desk brass",effectLine:"The seals come off warm."}},na={endsPrefix:"ends",forecastDeltaLabel:"tomorrow"},yr={basis:"settled at your usual pace",trim:"The ledger held what it could hold. — M.Q.",longShadows:"The lamps stayed low all night. The letters didn't mind."},K_={sd7Preview:"Reward: one golden half-hour"},Kc=["Daily-modifier rotation state (deterministic — the forecast keeps its day)","Special-delivery board v2 state (4–8 h wall-clock timers keep ticking)","Rush Order held/active (one golden half-hour, hold ≤1)","Stamp rows: Moonlit Arcade · Glasshouse Quarter · Sleepless Library","Night Ledger median minute-ring (settled-at-your-pace basis)"],Mt={fourthWind:{beat:"ch4.open.1",speaker:"Mara",copy:"Eleven districts writing again. The last one has been listening the whole time."},deepAddressing:{beat:"ch4.open.2",speaker:"Pip",copy:"Same trick, deeper pockets."},kitT9:{beat:"ch4.kit.1",speaker:"Mara",copy:"Bigger sacks. The sky got ambitious; so do we.",highlight:"satchel"},finalRunJump:{beat:"ch4.jump.1",speaker:"Mara",copy:"Buy the deep address book. Every stamp in the building gets heavier — twice."},cloudlineAnswer:{beat:"ch4.cs.1",speaker:"Mara",copy:"Altitude is just patience with better rigging. Check the knots, Clerk."},weatherReRead:{beat:"ch4.mod.1",speaker:"Pip",copy:"Same sky, new mood. Read it, then choose the wall.",highlight:"modifier"},auroraAnswer:{beat:"ch4.ab.1",speaker:"Pip",copy:"They started replying before we finished asking. Rude. I love it."},midCycleSwap:{beat:"ch4.mod.2",speaker:"Mara",copy:"The sky changed its mind mid-route. Yours stays.",highlight:"modifier"},voyageBeat:{beat:"ch4.voyage.1",speaker:"Pip",copy:"Name's on the ledger. Now we fetch the sky."},lastLightAnswer:{beat:"ch4.llo.1",speaker:"Mara",copy:"Point the glass at the ground, love. That’s where the stars went."},rtOpen:{beat:"ch4.rt.1",speaker:"Pip",copy:"It wrote back. Everyone wrote back. And they left you a tip.",highlight:"roundTrip"},firstTrim:{beat:"ch4.shop.1",speaker:"Mara",copy:"Dress the desk. It earned the night out.",highlight:"cosmetics"}},Z_=[{districtIndex:9,id:"cloudline_station",name:"Cloudline Station",body:"The route-miniature runs up past the roofline into a platform deck strung with brass signal kites; mailbags sway under balloon hooks; counterweight letters lift off the desk one by one on the dawn thermals; the district’s thread answers in mint-and-brass.",speaker:"Mara",speakerLine:"Altitude is just patience with better rigging. Check the knots, Clerk.",arrivalCopy:null},{districtIndex:10,id:"aurora_borough",name:"Aurora Borough",body:"Map threads bend over a market street whose awnings are lit from inside; color comes down like weather — mint, plum, parchment washes; every envelope on the desks reflects a different sky; someone in every house is already writing back.",speaker:"Pip",speakerLine:"They started replying before we finished asking. Rude. I love it.",arrivalCopy:null},{districtIndex:11,id:"last_light_observatory",name:"Last Light Observatory",body:"The miniature climbs a cliff of stacked catalogues to a brass lens-house; the lens does not turn skyward — it comes slowly around toward the city below; through it, eleven lit threads braid into one; the observatory was never watching the sky — it was waiting to see if the city would ever speak again. The lens flashes once, a moon-blue signal that crosses the entire map.",speaker:"Mara",speakerLine:"Point the glass at the ground, love. That’s where the stars went.",arrivalCopy:null}],ni={durationS:35,pullbackS:4,threadStepS:1.2,threadCount:12,allGlowS:4,shelfS:4,cardS:5,controlReturnS:4,boundaries:[0,4,18,22,26,31,35],cardTitle:"The First Citywide Reply",pipQuietLine:"Oh. It was all of us, all along.",maraSignLine:"Beautifully routed. Now — sign the logbook, Night Clerk. The city is expecting your shift again tomorrow.",replayLabel:"Replay the reply"},zi={lockedLine:"Unlocks when the city answers.",suffixDone:" — done",kindGlyphs:{letters:"A",modified:"B",courier:"C"}},nh={shelfLocked:"Unlocks when the city answers.",equipFree:"Equip free"},J_=["reply_fired (finale one-shot flag)","Round Trip open state + per-district progress","cosmetics owned/equipped (trims ×3 slots, Pip costumes ×6)","Wax Seal balance (unchanged rule; sink now live)","stamp rows: Cloudline Station · Aurora Borough · Last Light Observatory","SD board post-reply repeatability state"],fn={dawn:{beat:"ch5.dawn.1",copy:"File your night, Clerk. The city will keep until tomorrow."},strip:{beat:"ch5.strip.1",copy:"…one sky, three satchels, that’s all. We’re at the ceiling on purpose…"},papers:{beat:"ch5.papers.1",copy:"The desk runs on stamps and patience, not receipts. That stays true. Read them, then put them away."}},Ur={durationS:15,boundaries:[0,4,9,13,15],replayLabel:"Remember the first morning"},Zc={maraFilingPeriodS:90,lampTrimWarm:!0},Jc=[2,2,3,3,4,4,5];function ih(n){return n<=0?0:Jc[Math.min(n,Jc.length)-1]??0}const xs={window:"local_calendar_day",maxPerDay:3,rolloverUnused:!1,multiplier:2,scope:"night_ledger_return_card_claim_only",preselected:"none",tapOutsideEquals:"collect",labelLine:n=>`Double it tonight — free · ${n} left tonight`,collectLabel:"Collect",capReachedLine:"The doubler rests until midnight.",noCountdownNearDoubler:!0},Er={title:"The city kept its share of the night. So did you.",awayJoiner:" · Ledger holds ",postedLine:n=>`Letters settled without you: +${n}`,streakRow:(n,e)=>`Day streak ${n} — the wax remembers you. +${e} seals`,trimmedLine:"The ledger held what it could hold. — M.Q."},Tr={modifiersPerLocalDay:1,sdActiveTimersMax:3,morningPostHeldMax:1,morningPostCadenceMinS:28800,doublerPerLocalDay:3,timerSourcesEnumerated:["modifier_window","special_delivery","morning_post","doubler_day_window"],sdBlockedCard:n=>`All satchels are out tonight — the next one returns at ${n}.`,stripSlots:["sky","hourglasses","stamp","pips"]},Xi={banner:"Not enabled in this web build.",footer:"If this ever goes live, its exact contents and price appear here before anyone is charged."},rh=[{id:"license",title:"Night Clerk License",priceLine:"$7.99",frame:"brass",motif:"lamp",body:["Would add, permanently: 2 auto-sort slots — two desk pads keep sorting unattended at base rate","longer offline buffer — Night Ledger cap 8 h → 12 h","a brass desk lamp for the shelf (cosmetic)."],honesty:"None of this is required to finish the ladder. Every district, every star, every shelf item is earnable without it."},{id:"priority",title:"Priority Post",priceLine:"$3.99 / month",frame:"plum-neutral",motif:"stamp-stack",body:["Nothing is listed, because nothing is promised: its disposition is optional, revisited only once a live cadence exists."],honesty:null},{id:"pack40",title:"Wax Seal pack — 40",priceLine:"$1.99",frame:"parchment",motif:"wax-40",seals:40,body:["Would buy 40 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"pack100",title:"Wax Seal pack — 100",priceLine:"$3.99",frame:"parchment",motif:"wax-100",seals:100,body:["Would buy 100 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"pack230",title:"Wax Seal pack — 230",priceLine:"$6.99",frame:"parchment",motif:"wax-230",seals:230,body:["Would buy 230 Wax Seals (cosmetic currency) for the shelf."],honesty:"Every shelf item is buyable with earned Wax Seals — wanderlights, postcards, mastery and return streaks all pay them."},{id:"album",title:"Seal Album",priceLine:"$4.99 to crack",frame:"plum",motif:"album-meter",body:["Your earned Wax Seals: {wax} — they are all yours already; nothing is withheld or held.","Album preview: it would hold {album_credits} seal-credits today (shadow meter: +0.5 per Wax Seal you earn · cap {cap}) · cracking it would pay the meter out once, empty it, and raise the cap +50 per album level (level {level})."],honesty:null}],sh={text:"Never built, by design: buying value that play already banked · premium-currency packs · timed-boost currencies · premium access tiers · any paid random reward."},Q_="Office Papers",jo={inviteCardMaxPerSave:1,quietHoursLocal:{fromH:22,toH:8}},Qn={cardTitle:"The office can knock, if you let it.",cardBody:"Off by default. If you turn them on: when the ledger is full (once per gap) · tonight’s sky read (once a day, hour of your choosing) · when a mastery target completes (when it happens — rarely). Quiet from 22:00 to 08:00, always. Every timer in the office shows its exact end time whether or not you ever turn these on.",turnOn:"Turn them on",notNow:"Not now",settingsRow:n=>n==="on"?"Notifications — on · three quiet channels · quiet hours 22:00–08:00":"Notifications — off · three quiet channels · quiet hours 22:00–08:00",blockedByBrowser:"Your browser said no — flip it in your browser settings whenever you like. We’ll never ask again in here.",fire:{return_ready:(n,e)=>`The Night Ledger is full — ${n} h held of your ${e} away. Collect whenever you like.`,rotation:(n,e)=>`Tonight’s sky: ${n} — ends ${e}.`,mastery:(n,e,t,i)=>`${n} — ${e} complete. +${t} seals, +${i} ★.`}},ev=["Return-streak state (streak count + last claim day)","Return doubler day-window state (resets at local midnight, never carries unused)","Seal Album display state (shadow credits + level — never enabled)","Notification prefs (A2 state + channels + rotation hour)","Dawn one-shot flag (dawn is a memory, never re-fires)","Stub-card seen flags (presentation only)"];let Yo=null,tv=()=>Date.now();function nv(n){Yo=n}const iv=2e3,Nr=[],ca=[],_a={};function rv(){Nr.length=0;for(const n of Object.keys(_a))delete _a[n]}function sv(n){return ca.push(n),()=>{const e=ca.indexOf(n);e>=0&&ca.splice(e,1)}}function fe(n,e,t={},i){if(!Object.values(de).includes(e))throw new Error(`unknown md event: ${e}`);const r=Yo?Yo(n,i??tv()):{local_day:null,loop_n:null},s={name:e,run_id:n.run,night_ms:Math.round(n.blocking.nightMs),stars_banked:n.stars,district:n.districtIndex,props:t,local_day:r.local_day,loop_n:r.loop_n};Nr.push(s),Nr.length>iv&&Nr.shift(),_a[e]=(_a[e]??0)+1;for(const a of[...ca])a(s);return s}function ah(n){return n?Nr.filter(n):[...Nr]}function av(n,e=Date.now()){n.lastLedgerTs=e,n.savedAt=e}function Ti(n=Date.now()){const e=new Date(n);return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Ft(n){return n.ch4.replyFired}function er(n){return n.ch4.roundTrip.open}function ov(n){return Ot[n]?.id??null}function _l(n,e,t,i){const r=Yi[e];if(!r)return;const s=r.seals,a=r.stars;n.ch2.waxSeals+=s,n.stars+=a,n.starMultiplier=1+It.starMultStep*n.stars,fe(n,de.rtComplete,{district:e,kind:t,payout_seals:s,payout_stars:a,retro:i})}function oh(n,e){const t=n.ch2.postcardCounters[e]??0,i=wr.p[e];if(i==null)return t;const r=Math.ceil(1/i),s=n.ch2.stampInventory[e]??0;return t+s*r}function lh(n){if(er(n))for(const e of Object.keys(Yi)){const t=n.ch4.roundTrip.completed[e];if(t?.A)continue;const i=Yi[e];oh(n,e)>=i.target.letters&&(n.ch4.roundTrip.completed[e]={...t??{},A:!0},_l(n,e,"A",!0))}}function lv(n,e){if(!er(n))return;const t=Yi[e];if(!t||!t.target.modifier)return;const i=n.ch4.roundTrip.completed[e];i?.B||(n.liveMod?.id??null)===t.target.modifier&&(n.ch4.roundTrip.completed[e]={...i??{},B:!0},_l(n,e,"B",!1))}function cv(n,e,t){if(!er(n))return;const i=Yi[e];if(!i||i.target.courierMin==null)return;const r=n.ch4.roundTrip.completed[e];if(r?.C)return;(t-n.blocking.runStartWall)/1e3<=i.target.courierMin*60&&(n.ch4.roundTrip.completed[e]={...r??{},C:!0},_l(n,e,"C",!1))}function dv(n){return n.ch4.replyFired?!1:(n.ch4.replyFired=!0,fe(n,de.finaleFire,{cumulative_active_s:Math.round(n.blocking.nightMs/1e3),wall_age_s:Math.round(n.blocking.nightMs/1e3)}),n.ch4.roundTrip.open||(n.ch4.roundTrip.open=!0,fe(n,de.rtOpen,{district:ch,kind:"open",payout_seals:0,payout_stars:0,retro:!0})),lh(n),!0)}function hv(n,e){fe(n,de.finaleReplay,{replay_n:e})}const ch="last_light_observatory";function uv(n,e,t){const i=ov(e);if(i){if(i===ch&&!n.ch4.replyFired){dv(n);return}er(n)&&(lv(n,i),cv(n,i,t))}}function pv(n,e){const t=dh(e);return!t||n.ch2.waxSeals<t.cost||n.ch4.cosmetics.owned.includes(e)?!1:(n.ch2.waxSeals-=t.cost,n.ch4.cosmetics.owned.push(e),t.slot==="pip"?n.ch4.cosmetics.equipped.pip=e:n.ch4.cosmetics.equipped[t.slot]=e,fe(n,de.cosmeticBuy,{slot:t.slot,variant_id:e,cost:t.cost,jar_after:n.ch2.waxSeals}),!0)}function fv(n,e,t){if(t==null)return n.ch4.cosmetics.equipped[e]=null,fe(n,de.cosmeticEquip,{slot:e,variant_id:null,cost:0,jar_after:n.ch2.waxSeals}),!0;const i=dh(t);return!i||!n.ch4.cosmetics.owned.includes(t)?!1:(n.ch4.cosmetics.equipped[i.slot]=t,fe(n,de.cosmeticEquip,{slot:i.slot,variant_id:t,cost:0,jar_after:n.ch2.waxSeals}),!0)}function dh(n){for(const e of Object.keys(ma)){const t=ma[e].find(i=>i.id===n);if(t)return{slot:t.slot,id:t.id,cost:t.cost}}return null}function mv(n){if(!Ft(n))return 0;const e=n.ch4.sdRepeat.preReply;let t=0;for(const i of e)z_.repeatableAfterReply.includes(i)&&(n.ch2.specialDeliveries.offers.some(r=>r.recipeId===i&&!r.claimed)||n.ch2.specialDeliveries.offers.push({recipeId:i,endTs:0,claimed:!1}),fe(n,de.sdRepeatOffer,{recipe_id:i,cycle_n:n.run}),t++);return t}function gv(n,e=Date.now()){const t=Ti(e),i=n.ch5.streak;return i.lastKey===0?0:i.lastKey===t||i.lastKey===hh(t)?i.count:0}function hh(n){const e=Math.floor(n/1e4),t=Math.floor(n%1e4/100),i=n%100,r=new Date(e,t-1,i);return r.setDate(r.getDate()-1),r.getFullYear()*1e4+(r.getMonth()+1)*100+r.getDate()}function _v(n){return ih(n)}function vv(n,e=Date.now()){const t=Ti(e),i=n.ch5.streak;if(i.lastKey===t)return 0;let r;i.lastKey===0?r=1:i.lastKey===hh(t)?r=i.count+1:r=1;const s=_v(r);return s<=0?0:(i.count=r,i.lastKey=t,n.ch2.waxSeals+=s,fe(n,de.streakGrant,{day:r,seals:s}),s)}function vl(n,e=Date.now()){const t=Ti(e),i=n.ch5.doubler,r=i.day===t?i.used:0;return Math.max(0,xs.maxPerDay-r)}function xv(n,e=Date.now()){return vl(n,e)>0}function bv(n,e,t=Date.now()){if(e<=0)return!1;if(!xv(n,t))return fe(n,de.doublerCap,{used:n.ch5.doubler.used}),!1;const i=Ti(t);return n.ch5.doubler.day!==i&&(n.ch5.doubler.day=i,n.ch5.doubler.used=0),n.ch5.doubler.used+=1,n.postage+=e,n.totalEarnedRun+=e,fe(n,de.doublerUse,{used:n.ch5.doubler.used,left:xs.maxPerDay-n.ch5.doubler.used}),!0}function yv(n,e=Date.now(),t=0){const i=Tr.sdActiveTimersMax,r=n.ch2.morningPost.held,s=n.ch5.doubler.day===Ti(e)?n.ch5.doubler.used:0,a=t>=Tr.modifiersPerLocalDay,o=n.ch2.specialDeliveries.active.length>=i,c=r>=Tr.morningPostHeldMax,l=s>=Tr.doublerPerLocalDay,h=a||o||c||l,d=o?Tr.sdBlockedCard("--:--"):"";return{modifiersToday:t,sdActiveTimers:n.ch2.specialDeliveries.active.length,morningPostHeld:r,doublerUsedToday:s,atCeiling:h,note:d,timerSourcesMatch:!0}}function uh(n,e=Date.now()){const i=new Date(e).getHours(),r=n.ch5.notifications.quietHoursFrom,s=n.ch5.notifications.quietHoursTo;return r<=s?i>=r&&i<s:i>=r||i<s}function Mv(n){return Ft(n)&&!n.ch5.dawn.fired}function ph(n,e=!1){return!Ft(n)||!e&&n.ch5.dawn.fired?!1:(e||(n.ch5.dawn.fired=!0),fe(n,e?de.dawnReplay:de.dawnFire,{replay:e}),!0)}function Sv(n){return Object.values(n.hall).reduce((e,t)=>e+(t??0),0)}function fh(n){const e=n.hall.F10??0;let t=us.hfac;return e>=4?t=us.hfacAfterF10T4:e>=3?t=us.hfacAfterF10T3:e>=2?t=us.hfacAfterF10T2:e>=1&&(t=us.hfacAfterF10),n.blocking.eRunRaw*(1+t*Sv(n))}function Mn(n){return n.districtIndex===0?"rainmarket":n.districtIndex===1?"horizon":n.districtIndex===2?"museum":n.districtIndex===3?"rooftop":n.districtIndex===4?"canal":n.districtIndex===5?"moonlit_arcade":n.districtIndex===6?"glasshouse_quarter":n.districtIndex===7?"sleepless_library":n.districtIndex===8?"cloudline_station":n.districtIndex===9?"aurora_borough":n.districtIndex===10?"last_light_observatory":null}function Jr(n,e){const t=n.rushActive===!0?fa.multX:1,i=e*G_(n)*t;n.postage+=i,n.blocking.eRunRaw+=i;const r=Mn(n);return r&&(n.blocking.gates[r].listValue+=i),Tv(n),i}function wv(n,e,t){Jr(n,e);const i=[...n.blocking.everDistricts].sort((o,c)=>o-c),r=n.districtIndex,s=i.filter(o=>o<r),a=Ot[r]?.id;if(a&&(n.ch2.postcardCounters[a]=(n.ch2.postcardCounters[a]??0)+Math.floor(t*qc.frontierShare)),s.length>0){const o=t*qc.fanShareUniform/s.length;for(const c of s){const l=Ot[c]?.id;l&&(n.ch2.postcardCounters[l]=(n.ch2.postcardCounters[l]??0)+Math.floor(o))}}Ev(n),lh(n)}function Ev(n){for(const[e,t]of Object.entries(n.ch2.postcardCounters)){const i=wr.p[e];if(i==null)continue;const r=n.ch2.stampInventory,s=r[e]??0;if(s>=wr.cap)continue;const a=Math.ceil(1/i),o=Math.floor(t/a);if(o<=0)continue;const c=Math.min(o,wr.cap-s);c<=0||(r[e]=s+c,n.ch2.postcardCounters[e]=t-c*a,s<wr.cap&&r[e]>=wr.cap&&fe(n,de.stampCapped,{district:e}))}}function Tv(n){const e=Mn(n);if(!e)return;const t=yn[e],i=n.blocking.gates[e],r=fh(n);!i.rvDone&&r>=t.rv&&(i.rvDone=!0,fe(n,de.gateCross,{gate:t.id,req:"rv",t_s:n.blocking.nightMs/1e3})),!i.listDone&&i.listValue>=t.deliveryList&&(i.listDone=!0,fe(n,de.gateCross,{gate:t.id,req:"list",t_s:n.blocking.nightMs/1e3}))}function Av(n,e){const t=n.blocking.gates[e];return!t.listDone&&t.listValue>=yn[e].deliveryList*k_}function mh(n){return n.ch2.horizonSealAction??"redraw_claim"}function $r(n){return mh(n)==="advance_bond"}function Cv(n,e){return e==="horizon"?mh(n):yn[e].action}function Rv(n,e){return Cv(n,e)!=="advance_bond"?!1:n.blocking.gates[e].listDone&&n.postage>=yn[e].bond}function Lv(n,e){const t=yn[e];return n.districtIndex!==t.to-1||!Rv(n,e)?!1:(n.postage-=t.bond,fe(n,de.purchase,{kind:"bond",id:e,cost:t.bond,wallet_after:n.postage}),n.districtIndex=t.to,n.blocking.everDistricts.includes(t.to)||n.blocking.everDistricts.push(t.to),n.ch2.districtsAnswered.includes(t.to)||n.ch2.districtsAnswered.push(t.to),t.to>=2&&(n.ch2.waxSeals+=O_.districtAdvanceCh2),fe(n,de.advance,{district:Ot[t.to].id,t_s:n.blocking.nightMs/1e3,bond:t.bond}),uv(n,t.to,Date.now()),!0)}function Pv(n){const e=Mn(n);return!e||!Lv(n,e)?null:n.districtIndex}function ro(n){return n.blocking.gates.horizon.listDone&&!$r(n)}function Dv(n){n.blocking.gates={rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1},moonlit_arcade:{listValue:0,rvDone:!1,listDone:!1},glasshouse_quarter:{listValue:0,rvDone:!1,listDone:!1},sleepless_library:{listValue:0,rvDone:!1,listDone:!1},cloudline_station:{listValue:0,rvDone:!1,listDone:!1},aurora_borough:{listValue:0,rvDone:!1,listDone:!1},last_light_observatory:{listValue:0,rvDone:!1,listDone:!1}},n.blocking.eRunRaw=0,n.blocking.nightMs=0,n.blocking.runStartWall=Date.now(),n.blocking.checklist=[],n.blocking.railsFired=[]}function Ss(n,e){if(n.ch2.morningPost.held>0)return!0;if(n.ch2.morningPost.lastClaimTs==null)return!1;const t=oi.cadenceH*36e5;return e-n.ch2.morningPost.lastClaimTs>=t}function kv(n,e){if(!Ss(n,e))return 0;const t=Ot[n.districtIndex]?.id,i=t?oi.grantByFrontier[t]??0:0;return i<=0?0:(Jr(n,i),n.ch2.morningPost.held=0,n.ch2.morningPost.lastClaimTs=e,i)}function Iv(n,e){n.ch2.morningPost.lastClaimTs==null&&n.districtIndex>=2&&(n.ch2.morningPost.lastClaimTs=e-oi.cadenceH*36e5,n.ch2.morningPost.held=oi.maxHeld)}function Fv(n){const e=n.hall.F9??0,t=en.F9;return e>=5?t.wanderCadenceT5:e>=4?t.wanderCadenceT4:e>=3?t.wanderCadenceT3:e>=1?t.wanderCadenceT1:t.wanderCadenceBase}function Uv(n){const e=n.hall.F9??0,t=en.F9;return e>=5?t.wanderGrandChanceT5:e>=4?t.wanderGrandChanceT4:e>=3?t.wanderGrandChanceT3:si.grandChance}function Nv(n){const e=n.hall.F9??0,t=en.F9;return e>=5?t.wanderSealChanceT5:e>=4?t.wanderSealChanceT4:e>=2?t.wanderSealChanceT2:si.sealChance}function Ov(n,e){const t=ml(n),i=n.hall.F9??0,r=en.F9,s=i>=5?r.wanderRewardMultT5:i>=4?r.wanderRewardMultT4:i>=2?r.wanderRewardMultT2:1,a=Math.floor(e==="grand"?t*si.grandRewardLetterMult:t*si.normalRewardLetterMult*s);return Jr(n,a),e==="grand"&&(n.ch2.waxSeals+=si.grandWaxSeals),a}function Bv(n,e,t){if(t>=si.maxConcurrent||n.districtIndex<2)return!1;const i=Fv(n)*1e3;return e>=i}function gh(n){return kn.recipes.find(e=>e.id===n)}function _h(n,e){const t=Ot.findIndex(i=>i.id===e.available);return t>=0&&n.districtIndex>=t}function vh(n,e){for(const[t,i]of Object.entries(e.stamps))if((n.ch2.stampInventory[t]??0)<i)return!1;return!0}function zv(n,e,t){const i=gh(e);if(!i||!_h(n,i)||!vh(n,i)||n.ch2.specialDeliveries.active.length>=kn.maxActiveTimers)return!1;for(const[r,s]of Object.entries(i.stamps))n.ch2.stampInventory[r]=(n.ch2.stampInventory[r]??0)-s;return n.ch2.specialDeliveries.active.push({recipeId:e,endTs:t+Math.round(i.timerH*36e5),claimed:!1}),!0}function Hv(n,e,t){const i=n.ch2.specialDeliveries.active.find(r=>r.recipeId===e&&!r.claimed);return!!i&&t>=i.endTs}function Gv(n,e,t){const i=n.ch2.specialDeliveries.active.find(c=>c.recipeId===e&&!c.claimed);if(!i||t<i.endTs)return 0;const r=gh(e);if(!r)return 0;const s=Ft(n);let a;if(s)a=Kd;else{const c=Mn(n);if(!c)return 0;a=yn[c].deliveryList}let o=Math.floor(a*r.rewardPct);if(r.rush?(o=0,!n.ch2.rush.held&&n.ch2.rush.activeEndTs==null&&(n.ch2.rush.held=!0,fe(n,de.rushGrant,{active_s:fa.activeS}))):Jr(n,o),i.claimed=!0,n.ch2.specialDeliveries.done.push({...i}),n.ch2.specialDeliveries.active=n.ch2.specialDeliveries.active.filter(c=>c!==i),!s){const c=n.ch4.sdRepeat.preReply;c.includes(e)||c.push(e)}return o}function Vv(n,e){return!n.ch2.rush.held||n.ch2.rush.activeEndTs!=null&&e<n.ch2.rush.activeEndTs?!1:(n.ch2.rush.held=!1,n.ch2.rush.activeEndTs=e+fa.activeS*1e3,fe(n,de.rushActivate,{active_s:fa.activeS,ends_local_ts:n.ch2.rush.activeEndTs}),!0)}function Ko(n,e){const t=n.ch2.rush.activeEndTs,i=t!=null&&e<t,r=n.rushActive;return n.rushActive=i,r===!0&&!i&&fe(n,de.rushExpire,{end_local_ts:t??null}),i}function Wv(n){n.ch2.waxSeals+=1}function ws(n){const e=new Date(n);return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function bi(n,e){const t=N_.table;if(!t.length)return null;const i=(n.blocking.installDayIndex+ws(e)+7*1e4)%t.length;return t[i]??null}function $v(n,e){const t=bi(n,e);return t?{id:t.id,slot:t.slot,deskCapX:t.deskCapX??1,routeX:t.routeX??1,poolX:t.poolX??1,refillX:t.refillX??1,psMaxAdd:t.psMaxAdd??0,rampX:t.rampX??1,rampMinS:t.rampMinS??0,satchelX:t.satchelX??1,ledgerAccrualX:t.ledgerAccrualX??1,stampPX:t.stampPX??1,lampSealX:t.lampSealX??1,lampGrandX:t.lampGrandX??1}:{...Jd}}function Xv(n,e){const t=bi(n,e),i=n.liveMod?.id??null,r=n.liveMod==null,s=$v(n,e);return n.liveMod=s,r?fe(n,de.modShow,{mod_id:s.id,day_index:ws(e),ends_local_ts:Ki(e)}):t&&i!==null&&i!==t.id&&fe(n,de.modRotate,{mod_id:t.id,day_index:ws(e),ends_local_ts:Ki(e)}),t}function Ki(n){const e=new Date(n);return new Date(e.getFullYear(),e.getMonth(),e.getDate()+1).getTime()}function Or(n){return new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}function xh(n){const e=new Date(n),t=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${t}-${i}`}function bh(n){return!Ft(n)||n.ch5.loopBaseRun==null?null:Math.max(0,n.run-n.ch5.loopBaseRun)}const Qc=new WeakMap;function Rs(n){let e=Qc.get(n);return e||(e={collectsInLoop:{loop:-1,count:0},stubOpenedAt:{},auditFired:new Set,auditClock:0,dawnReplayN:0},Qc.set(n,e)),e}let ed=!1;function qv(){ed||(ed=!0,nv((n,e)=>({local_day:Math.max(0,ws(e)-n.blocking.installDayIndex),loop_n:bh(n)})),sv(n=>{}))}function jv(n){Ft(n)&&n.ch5.loopBaseRun==null&&(n.ch5.loopBaseRun=n.run),n.ch5.album.anchor===0&&n.ch2.waxSeals>0&&(n.ch5.album.anchor=n.ch2.waxSeals)}function yh(){const n=Ur.boundaries;return[{phase:"grade-quiet",fromS:n[0],toS:n[1]},{phase:"desk-hold",fromS:n[1],toS:n[2]},{phase:"map-idle",fromS:n[2],toS:n[3]},{phase:"control-return",fromS:n[3],toS:n[4]}]}function Yv(n){return Ft(n)&&!n.ch5.dawn.fired}function Kv(n,e,t){return!Yv(n)||!ph(n)?null:(Zi(n,fn.dawn.beat),xl(de.dawnFire,{wall_s_since_reply:n.ch5.dawn.replyAtMs!=null?Math.max(0,Math.round((e-n.ch5.dawn.replyAtMs)/1e3)):null,replay_n:0}),{phases:yh(),durationS:Ur.durationS,reducedMotion:t,maraLine:fn.dawn.copy,stripLine:fn.strip.copy,wallSSinceReply:n.ch5.dawn.replyAtMs!=null?Math.round((e-n.ch5.dawn.replyAtMs)/1e3):null})}function Zv(n,e){const t=[];return Zi(n,fn.strip.beat)&&t.push(fn.strip.beat),Mh(n,e),{beats:t}}function Jv(n){if(!Ft(n)||!n.ch5.dawn.fired)return null;const e=Rs(n);return e.dawnReplayN+=1,ph(n,!0),xl(de.dawnReplay,{replay_n:e.dawnReplayN}),{phases:yh(),durationS:Ur.durationS,reducedMotion:!1,maraLine:fn.dawn.copy,stripLine:fn.strip.copy,wallSSinceReply:null}}function Qv(n){return Ft(n)&&n.ch5.dawn.fired}function ex(n,e){const t=Qv(n),i=t&&e%300<30,r=t&&e%Zc.maraFilingPeriodS<30,s=t&&Zc.lampTrimWarm&&n.ch4.cosmetics.owned.some(a=>a.startsWith("desk_"));return{pipSleep:i,maraFiling:r,lampWarm:s}}function xl(n,e){const t=ah();for(let i=t.length-1;i>=0;i--)if(t[i].name===n){t[i].props={...t[i].props,...e};return}}function tx(n,e){const t=Ti(e),i=n.ch5.streak;if(!(i.lastKey!==t))return{postingDay:!1,streak:i.count,gift:0};const s=gv(n,e),a=i.lastKey===0?1:s>0?s+1:1;return{postingDay:!0,streak:a,gift:ih(a)}}function td(n,e){const t=vl(n,e),i=t<=0;return{leftTonight:t,capped:i,doubleLabel:xs.labelLine(t),collectLabel:xs.collectLabel,capQuietLine:i?xs.capReachedLine:null,pipsLit:Math.max(0,Math.min(3,t))}}function nx(n,e,t){const i={postReply:!1,title:null,awayLine:null,postedLine:null,trimLine:null,neverEmpty:e.kind==="never-empty",streakRibbon:{postingDay:!1,streak:0,gift:0,rowText:null},doubler:td(n,t)};if(!Ft(n)||e.kind!=="ledger")return i;const r=Math.floor(e.elapsedS/3600),s=Math.floor(e.elapsedS%3600/60),a=e.capS/3600,o=tx(n,t);return{postReply:!0,title:Er.title,awayLine:`Away ${r} h ${String(s).padStart(2,"0")} min${Er.awayJoiner}${a} h 00 min`,postedLine:Er.postedLine(String(e.base)),trimLine:e.trim>0?Er.trimmedLine:null,neverEmpty:!1,streakRibbon:e.base>0?{...o,rowText:o.postingDay?Er.streakRow(o.streak,o.gift):null}:{postingDay:!1,streak:0,gift:0,rowText:null},doubler:td(n,t)}}function nd(n,e,t){const i=[];let r=0;if(t.base>0){const o=n.ch5.streak.lastKey!==Ti(e),c=vv(n,e);c>0&&o&&(r=c,fe(n,de.streakGift,{local_day:Ai(n,e),streak:n.ch5.streak.count,seals:c,jar_after:n.ch2.waxSeals},e),Zi(n,"ch5.streak.1")&&i.push("ch5.streak.1"))}const s=Rs(n),a=bh(n);return a!=null&&(s.collectsInLoop.loop!==a&&(s.collectsInLoop={loop:a,count:0}),s.collectsInLoop.count+=1,a===1&&s.collectsInLoop.count===2&&Zi(n,"ch5.rt.1")&&i.push("ch5.rt.1")),Mh(n,e),{streakGiftPosted:r,beats:i}}function Mh(n,e){if(!n.ch5.dawn.fired)return!1;const t=n.ch5.a2;return t.state!=="unseen"||t.cardShown>=jo.inviteCardMaxPerSave?!1:(t.state="card_pending",t.cardShown+=1,fe(n,de.notifyCardShow,{local_day:Ai(n,e),channel_defaults:JSON.stringify(t.channels)},e),!0)}function Ai(n,e){return Math.max(0,ws(e)-n.blocking.installDayIndex)}function Zi(n,e){return n.blocking.ch2FiredEver.includes(e)?!1:(n.blocking.ch2FiredEver.push(e),fe(n,de.onboardBeat,{copy_id:e,t_s:n.blocking.nightMs/1e3}),!0)}function ix(n,e,t){const i=bv(n,e,t);return i&&xl(de.doublerUse,{used_after:n.ch5.doubler.used,posted:e,doubled_amount:e*2}),i}function rx(n,e){fe(n,de.doublerDismiss,{used_after:n.ch5.doubler.used,posted:0,doubled_amount:0},e)}function sx(n,e){if(!Ft(n))return null;const t=bi(n,e),i=t?{modId:t.id,endsMs:Ki(e),endsText:`ends ${Or(Ki(e))}`}:null,r=kn.maxActiveTimers,s=n.ch2.specialDeliveries.active.slice(0,r),a=[];for(let h=0;h<r;h++){const d=s[h];if(!d){a.push({kind:"sd",active:!1,emptyMs:null,emptyText:null,fillFrac:null});continue}const f=(kn.recipes.find(x=>x.id===d.recipeId)?.timerH??0)*36e5,g=f>0?Math.min(1,Math.max(0,1-(d.endTs-e)/f)):1;a.push({kind:"sd",active:!0,emptyMs:d.endTs,emptyText:`empty ${Or(d.endTs)}`,fillFrac:g})}const o=n.ch2.morningPost.held>0||n.ch2.morningPost.lastClaimTs!=null&&e-n.ch2.morningPost.lastClaimTs>=oi.cadenceH*36e5,c=n.ch2.morningPost.lastClaimTs==null?null:n.ch2.morningPost.lastClaimTs+oi.cadenceH*36e5,l=vl(n,e);return{sky:i,hourglasses:a,stamp:{ready:o,nextMs:o?null:c,nextText:o?"ready":c!=null?`next ${Or(c)}`:null},pips:{lit:l,used:3-l,left:l},taps:{sky:"modifier",hourglass:"specials",stamp:"morning_post",pips:"return_card"}}}function ax(n,e,t){if(n.ch2.specialDeliveries.active.length<kn.maxActiveTimers)return zv(n,e,t)?{ok:!0}:{ok:!1,earliestEmptyMs:0,cardText:""};const i=Math.min(...n.ch2.specialDeliveries.active.map(r=>r.endTs));return fe(n,de.cadenceBlockedSd,{active_n:n.ch2.specialDeliveries.active.length,earliest_empty_ms:i},t),{ok:!1,earliestEmptyMs:i,cardText:Tr.sdBlockedCard(Or(i))}}function ox(n){const e=[],t=[{path:/^savedAt$/,family:"save_anchor"},{path:/^lastLedgerTs$/,family:"save_anchor"},{path:/^doublerDay$/,family:"doubler_day_window"},{path:/^doublersUsed$/,family:"doubler_day_window"},{path:/^blocking\.installDayIndex$/,family:"modifier_window"},{path:/^blocking\.runStartWall$/,family:"rt_fresh_night_anchor"},{path:/^ch2\.morningPost\.lastClaimTs$/,family:"morning_post"},{path:/^ch2\.specialDeliveries\.(offers|active|done)\.\d+\.endTs$/,family:"special_delivery"},{path:/^ch2\.rush\.activeEndTs$/,family:"rush_consumable_window"},{path:/^ch5\.doubler\.day$/,family:"doubler_day_window"},{path:/^ch5\.streak\.lastKey$/,family:"streak_day_window"},{path:/^ch5\.dawn\.replyAtMs$/,family:"dawn_anchor"},{path:/^ch5\.a2\.lastReturnReadyGapTs$/,family:"notify_budget"},{path:/^ch5\.a2\.queue\.\d+\.queuedAtMs$/,family:"notify_quiet_hours_queue"}],i=new Set,r=(c,l)=>{if(!(c==null||typeof c!="object")){if(Array.isArray(c)){c.forEach((h,d)=>r(h,`${l}.${d}`));return}for(const[h,d]of Object.entries(c)){const p=l?`${l}.${h}`:h;if(typeof d=="number"&&Number.isFinite(d)){const f=d>=1e11&&d<1e13,g=/(^|\.)(day|lastKey)$/.test(p)&&d>19e6&&d<3e7;(f||g)&&!t.some(x=>x.path.test(p))&&(i.has(p)||(i.add(p),e.push(p)))}else r(d,p)}}},{liveMod:s,rushActive:a,...o}=n;return r(o,""),{violations:e}}function lx(n,e){const t=Rs(n);if(t.auditClock+=1,t.auditClock<60)return;t.auditClock=0;const{violations:i}=ox(n),r=yv(n,e,cx());r.sdActiveTimers>kn.maxActiveTimers&&i.push("special_delivery.active>3"),r.morningPostHeld>1&&i.push("morning_post.held>1"),r.doublerUsedToday>3&&i.push("doubler.used>3");for(const s of i)t.auditFired.has(s)||(t.auditFired.add(s),fe(n,de.cadenceViolation,{kind:s,detail:`unsanctioned/over-ceiling epoch or window field: ${s}`},e))}function cx(n){return 1}function dx(n){const e=rh.map(t=>Sh(n,t.id));return{label:Q_,banner:Xi.banner,footer:Xi.footer,cards:e,neverRow:{text:sh.text,seen:n.ch5.stubs.seen.never_row}}}function Sh(n,e){const t=rh.find(s=>s.id===e);if(!t)return{id:e,title:e,priceLine:"",frame:"parchment",motif:"wax-40",body:[sh.text],honesty:null,banner:Xi.banner,footer:Xi.footer,seen:n.ch5.stubs.seen[e]??!1,album:null};let i=t.body,r=null;if(e==="album"){const s=n.ch2.waxSeals,a=n.ch5.album.shadowCredits,o=wh(n);r={wax:s,credits:a,cap:o,level:n.ch5.album.level,fillFrac:Math.min(1,a/Math.max(1e-9,o))},i=t.body.map(c=>c.replace("{wax}",String(s)).replace("{album_credits}",hx(a)).replace("{cap}",String(o)).replace("{level}",String(n.ch5.album.level)))}return{id:e,title:t.title,priceLine:t.priceLine,frame:t.frame,motif:t.motif,body:i,honesty:t.honesty,banner:Xi.banner,footer:Xi.footer,seen:n.ch5.stubs.seen[e]??!1,album:r}}function hx(n){return Number.isInteger(n)?String(n):n.toFixed(1)}function wh(n){return 250+50*(n.ch5.album.level-1)}function ux(n){return Ft(n)&&!n.ch5.stubs.trayRailed}function px(n){return n.ch5.stubs.trayRailed=!0,Zi(n,fn.papers.beat)?[fn.papers.beat]:[]}function fx(n,e,t){const i=Rs(n);return i.stubOpenedAt[e]=t,n.ch5.stubs.seen[e]=!0,fe(n,de.stubOpen,{card:e},t),e==="album"&&Zi(n,"ch5.album.1"),Sh(n,e)}function mx(n,e,t){const i=Rs(n),r=i.stubOpenedAt[e],s=r!=null?Math.max(0,t-r):0;delete i.stubOpenedAt[e],fe(n,de.stubDismiss,{card:e,dwell_ms:s},t)}function gx(n,e,t){return fe(n,de.stubOpen,{card:e,price_tap:!0},t),{banner:Xi.banner,paymentPath:!1}}function _x(n,e){const t=n.ch5.a2;t.state==="card_pending"&&(t.state="dismissed_forever",fe(n,de.notifyDismissForever,{local_day:Ai(n,e)},e))}function id(n,e,t){const i=n.ch5.a2;i.state!=="card_pending"&&i.state!=="unseen"&&i.state!=="disabled"&&i.state!=="enabled_partial"||(i.state="prompting",t?(i.state="enabled",i.channels={return_ready:!0,rotation:!0,mastery:!0},fe(n,de.notifyOptInCanon,{local_day:Ai(n,e),channel_defaults:JSON.stringify(i.channels)},e)):(i.state="blocked_by_browser",i.browserDenyLineShown=!0))}function vx(n,e,t,i){const r=n.ch5.a2;if(fe(n,de.notifySettingsToggle,{local_day:Ai(n,e),target:t?"on":"off"},e),!t){(r.state==="enabled"||r.state==="enabled_partial")&&(r.state="disabled");return}if(r.state==="blocked_by_browser"||r.state==="enabled"||r.state==="enabled_partial")return;if(i===!1){r.state="blocked_by_browser",r.browserDenyLineShown=!0;return}const s=Object.values(r.channels).filter(Boolean).length;r.state=s===3?"enabled":s===0?"disabled":"enabled_partial"}function xx(n,e,t,i){const r=n.ch5.a2;if(r.channels[t]=i,fe(n,de.notifySettingsToggle,{local_day:Ai(n,e),channel:t,on:i},e),r.state==="enabled"||r.state==="enabled_partial"||r.state==="disabled"){const s=Object.values(r.channels).filter(Boolean).length;r.state=s===3?"enabled":s===0?"disabled":"enabled_partial"}}function bx(n,e){n.ch5.a2.rotationHourLocal=Math.max(0,Math.min(23,Math.floor(e)))}function bl(n){const e=n.ch5.a2;return e.state==="enabled"||e.state==="enabled_partial"}function yx(n,e,t){const i=n.ch5.a2,r=xh(e),s=n.ch5.dayLog;s.day!==r&&(s.day=r,s.sessions=0,s.loops=0,s.emittedDay=null),s.sessions+=1,s.emittedDay!==r&&(s.emittedDay=r,fe(n,de.returnDayCount,{local_day:Ai(n,e),sessions:s.sessions,loops_closed:s.loops},e)),!(!bl(n)||!i.channels.return_ready)&&i.lastReturnReadyGapTs!==t.gapStartTs&&(t.elapsedS<t.capS||(i.lastReturnReadyGapTs=t.gapStartTs,Eh(n,e,{channel:"return_ready",queuedAtMs:e,seed:{gapStartTs:t.gapStartTs,capH:t.capS/3600}})))}function Mx(n,e){const t=n.ch5.a2;if(!bl(n)||!t.channels.rotation)return;const i=xh(e);if(t.lastRotationDay===i)return;const r=new Date(e),s=new Date(r.getFullYear(),r.getMonth(),r.getDate(),t.rotationHourLocal,0,0,0).getTime();e<s||(t.lastRotationDay=i,Eh(n,e,{channel:"rotation",queuedAtMs:e,seed:{}}))}function Eh(n,e,t){const i=n.ch5.a2.queue,r=i.findIndex(s=>s.channel===t.channel);r>=0&&i.splice(r,1),i.push({...t,queuedByQuiet:uh(n,e)})}function Sx(n,e,t){const i=[];if(Mx(n,e),!bl(n)||uh(n,e))return i;const r=n.ch5.a2.queue;for(let s=r.length-1;s>=0;s--){const a=r[s];if(!n.ch5.a2.channels[a.channel]){r.splice(s,1);continue}const o=wx(n,e,a,t);if(!o){r.splice(s,1);continue}i.push(o),r.splice(s,1),fe(n,de.notifyFire,{channel:a.channel,payload_kind:o.as,queued_by_quiet_hours:a.queuedByQuiet},e)}return i}function wx(n,e,t,i){const r=i.pushAvailable?"os":"banner";if(t.channel==="return_ready"){const s=t.seed.capH??0,a=t.seed.gapStartTs!=null?Math.max(0,(e-t.seed.gapStartTs)/1e3):0,o=Math.floor(a/3600),c=Math.floor(a%3600/60);return{channel:"return_ready",title:"Midnight Dispatch",body:Qn.fire.return_ready(s,`${o} h ${String(c).padStart(2,"0")} min`),as:r,queuedByQuietHours:t.queuedByQuiet}}if(t.channel==="rotation"){const s=bi(n,e);return s?{channel:"rotation",title:"Midnight Dispatch",body:Qn.fire.rotation(s.id,Or(Ki(e))),as:r,queuedByQuietHours:t.queuedByQuiet}:null}return t.channel==="mastery"?{channel:"mastery",title:"Midnight Dispatch",body:Qn.fire.mastery(t.seed.districtId??"",t.seed.kind??"",t.seed.seals??0,t.seed.stars??0),as:r,queuedByQuietHours:t.queuedByQuiet}:null}function Ex(n,e,t){const i=Sx(n,e,t);lx(n,e);const r=n.ch2.waxSeals,s=n.ch5.album;if(r>s.anchor){const a=r-s.anchor;s.shadowCredits=Math.min(wh(n),s.shadowCredits+a*.5),s.anchor=r}else r<s.anchor&&(s.anchor=r);return Ai(n,e)>=8&&Zi(n,"ch5.steady.1"),{notifyPayloads:i}}const bs=7,Th="midnight-dispatch.save.v1";function Ah(){return{gates:{rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1},moonlit_arcade:{listValue:0,rvDone:!1,listDone:!1},glasshouse_quarter:{listValue:0,rvDone:!1,listDone:!1},sleepless_library:{listValue:0,rvDone:!1,listDone:!1},cloudline_station:{listValue:0,rvDone:!1,listDone:!1},aurora_borough:{listValue:0,rvDone:!1,listDone:!1},last_light_observatory:{listValue:0,rvDone:!1,listDone:!1}},checklist:[],railsFired:[],everDistricts:[0],eRunRaw:0,snapshotRate:0,nightMs:0,ch2Pending:[],ch2FiredEver:[],evapSpanMax:{},installDayIndex:0,ledgerRing:[],runStartWall:0}}function Ar(){return{stampInventory:{},specialDeliveries:{offers:[],active:[],done:[]},morningPost:{lastClaimTs:null,held:0},waxSeals:0,postcardCounters:{},postcards:{read:[],sealAwarded:[],unlockedEmitted:[]},districtsAnswered:[0],horizonSealAction:null,rush:{held:!1,activeEndTs:null}}}function Cr(){return{replyFired:!1,roundTrip:{open:!1,completed:{}},cosmetics:{owned:[],equipped:{desk:null,rack:null,map_frame:null,pip:null}},sdRepeat:{preReply:[]}}}function _n(){return{streak:{count:0,lastKey:0},doubler:{day:0,used:0},notifications:{optIn:!1,inviteShown:!1,quietHoursFrom:22,quietHoursTo:8},album:{shadowCredits:0,level:1,anchor:0},dawn:{fired:!1,replyAtMs:null},stubs:{seen:{license:!1,priority:!1,pack40:!1,pack100:!1,pack230:!1,album:!1,never_row:!1},trayRailed:!1},a2:{state:"unseen",channels:{return_ready:!0,rotation:!0,mastery:!0},rotationHourLocal:19,cardShown:0,browserDenyLineShown:!1,lastRotationDay:null,lastReturnReadyGapTs:null,masteryFired:[],queue:[]},loopBaseRun:null,dayLog:{day:null,sessions:0,loops:0,emittedDay:null}}}function Ch(){return Array.from({length:mn.count},(n,e)=>({unlocked:e===0,tier:0,inProcess:0}))}function Rh(){return Array.from({length:Gn.count},(n,e)=>({unlocked:e===0,tier:0}))}function Lh(){return Array.from({length:zn.count},(n,e)=>({unlocked:e===0,tier:0}))}function Xr(){const n=Date.now();return{v:bs,savedAt:n,run:0,postage:0,totalEarnedRun:0,stars:0,starMultiplier:1,redrawCount:0,backlog:90,bundled:0,desks:Ch(),racks:Rh(),lanes:Lh(),hall:{},districtIndex:0,districtRouteValue:0,perfect:1,onboarded:!1,clipsSeen:[],ledgerWindow:2*3600,ledgerAwayRate:0,lastLedgerTs:n,doublersUsed:0,doublerDay:0,doublerTracked:!1,returnCardPending:!1,reducedMotion:!1,blocking:Ah(),ch2:Ar(),ch4:Cr(),ch5:_n(),liveMod:null,rushActive:null}}function Tx(n){const e=n.deskTiers??[0,0,0,0],t=n.deskInProcess??[0,0,0,0],i=typeof n.satchelTier=="number"?n.satchelTier:0,r=n.routeTiers??[0,0],s=n.hall??{},a=Array.from({length:mn.count},(d,p)=>({unlocked:!0,tier:e[p]??0,inProcess:t[p]??0})),o=Array.from({length:Gn.count},(d,p)=>({unlocked:p===0,tier:p===0?i:0})),c=Array.from({length:zn.count},(d,p)=>({unlocked:p<r.length,tier:r[p]??0})),l={};s.letterValue&&(l.F1=Math.min(5,s.letterValue)),s.sortRate&&(l.F2=Math.min(5,s.sortRate)),s.backlogPool&&(l.F4=Math.min(4,s.backlogPool)),s.perfectRamp&&(l.F5=Math.min(5,s.perfectRamp));const h={...n};return delete h.deskTiers,delete h.deskInProcess,delete h.satchelTier,delete h.routeTiers,delete h.backlogLevel,h.desks=a,h.racks=o,h.lanes=c,h.hall=l,h}const Ax={2:Tx};function Cx(n){const e=new Date(n);return Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5)}function Rx(n){const e=n,t=Xr(),i=typeof n.v=="number"?n.v:0,r={...t,...e},s=(e.desks??t.desks).map((f,g)=>({unlocked:f?.unlocked??g===0,tier:f?.tier??0,inProcess:f?.inProcess??0}));for(;s.length<mn.count;)s.push({unlocked:s.length===0,tier:0,inProcess:0});const a=(e.racks??t.racks).map((f,g)=>({unlocked:f?.unlocked??g===0,tier:f?.tier??0}));for(;a.length<Gn.count;)a.push({unlocked:a.length===0,tier:0});const o=(e.lanes??t.lanes).map((f,g)=>({unlocked:f?.unlocked??g===0,tier:f?.tier??0}));for(;o.length<zn.count;)o.push({unlocked:o.length===0,tier:0});r.desks=s,r.racks=a,r.lanes=o,r.hall={...e.hall??{}};const c=e.blocking,l=Ah();r.blocking={...l,...c??{}},r.blocking.installDayIndex=c?.installDayIndex??Cx(typeof e.savedAt=="number"?e.savedAt:Date.now()),r.blocking.ledgerRing=Array.isArray(c?.ledgerRing)?c.ledgerRing:[],r.blocking.runStartWall=typeof c?.runStartWall=="number"?c.runStartWall:Date.now(),r.blocking.gates={rainmarket:{...l.gates.rainmarket,...c?.gates?.rainmarket??{}},horizon:{...l.gates.horizon,...c?.gates?.horizon??{}},museum:{...l.gates.museum,...c?.gates?.museum??{}},rooftop:{...l.gates.rooftop,...c?.gates?.rooftop??{}},canal:{...l.gates.canal,...c?.gates?.canal??{}},moonlit_arcade:{...l.gates.moonlit_arcade,...c?.gates?.moonlit_arcade??{}},glasshouse_quarter:{...l.gates.glasshouse_quarter,...c?.gates?.glasshouse_quarter??{}},sleepless_library:{...l.gates.sleepless_library,...c?.gates?.sleepless_library??{}},cloudline_station:{...l.gates.cloudline_station,...c?.gates?.cloudline_station??{}},aurora_borough:{...l.gates.aurora_borough,...c?.gates?.aurora_borough??{}},last_light_observatory:{...l.gates.last_light_observatory,...c?.gates?.last_light_observatory??{}}};const h=e.ch2;r.ch2={...Ar(),...h??{},specialDeliveries:{...Ar().specialDeliveries,...h?.specialDeliveries??{}},morningPost:{...Ar().morningPost,...h?.morningPost??{}},postcards:{...Ar().postcards,...h?.postcards??{}},rush:{...Ar().rush,...h?.rush??{}},horizonSealAction:h!=null?h.horizonSealAction??null:e.redrawCount!=null&&e.redrawCount>0?"advance_bond":"redraw_claim"};const d=e.ch4;r.ch4={...Cr(),...d??{},roundTrip:{...Cr().roundTrip,...d?.roundTrip??{},completed:{...d?.roundTrip?.completed??{}}},cosmetics:{...Cr().cosmetics,...d?.cosmetics??{},owned:Array.isArray(d?.cosmetics?.owned)?d.cosmetics.owned:[],equipped:{...Cr().cosmetics.equipped,...d?.cosmetics?.equipped??{}}},sdRepeat:{...Cr().sdRepeat,...d?.sdRepeat??{},preReply:Array.isArray(d?.sdRepeat?.preReply)?d.sdRepeat.preReply:[]}};const p=e.ch5;if(r.ch5={..._n(),...p??{},streak:{..._n().streak,...p?.streak??{}},doubler:{..._n().doubler,...p?.doubler??{}},notifications:{..._n().notifications,...p?.notifications??{}},album:{..._n().album,...p?.album??{}},dawn:{..._n().dawn,...p?.dawn??{}},stubs:{..._n().stubs,...p?.stubs??{},seen:{..._n().stubs.seen,...p?.stubs?.seen??{}},trayRailed:p?.stubs?.trayRailed===!0},a2:{..._n().a2,...p?.a2??{},channels:{..._n().a2.channels,...p?.a2?.channels??{}},masteryFired:Array.isArray(p?.a2?.masteryFired)?p.a2.masteryFired:[],queue:Array.isArray(p?.a2?.queue)?p.a2.queue:[]},loopBaseRun:typeof p?.loopBaseRun=="number"?p.loopBaseRun:null,dayLog:{..._n().dayLog,...p?.dayLog??{}}},p==null&&(typeof e.doublerDay=="number"&&e.doublerDay>0&&(r.ch5.doubler.day=e.doublerDay),typeof e.doublersUsed=="number"&&(r.ch5.doubler.used=e.doublersUsed)),h==null)for(const f of["clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"])r.ch2.postcardCounters[f]=r.ch2.postcardCounters[f]??0;if(!h?.districtsAnswered?.length){const f=r.blocking.everDistricts;r.ch2.districtsAnswered=f?.length?[...f].sort((g,x)=>g-x):[0]}if(i<5)for(const f of["moonlit_arcade","glasshouse_quarter","sleepless_library"])r.ch2.postcardCounters[f]=r.ch2.postcardCounters[f]??0;if(i<6)for(const f of["cloudline_station","aurora_borough","last_light_observatory"])r.ch2.postcardCounters[f]=r.ch2.postcardCounters[f]??0;return{...r,v:bs,liveMod:null,rushActive:null}}function Lx(n){if(n==null||typeof n!="object")return Xr();const e=n,t=typeof e.v=="number"?e.v:0;if(t>bs)throw new Error(`Save version ${t} is newer than supported ${bs}`);if(t<1)return Xr();let i=n;for(let r=t;r<bs;r++){const s=Ax[r];s&&(i=s(i))}return Rx(i)}function Ph(n){const{savedAt:e,lastLedgerTs:t,liveMod:i,rushActive:r,...s}=n,a=l=>{if(l===null||typeof l!="object")return JSON.stringify(l)??"null";if(Array.isArray(l))return`[${l.map(a).join(",")}]`;const h=l;return`{${Object.keys(h).sort().filter(d=>!(d==="runStartWall"&&h[d]===h[d])).map(d=>`${JSON.stringify(d)}:${a(h[d])}`).join(",")}}`},o=a(s);let c=2166136261;for(let l=0;l<o.length;l++)c^=o.charCodeAt(l),c=Math.imul(c,16777619);return(c>>>0).toString(16).padStart(8,"0")}function Px(n,e){const t=en[e];if(!t)return!1;const i=n.hall[e]??0;if(i>=t.tiers)return!1;const r=t.cost[i]??1/0;return n.postage<r?!1:(n.postage-=r,n.hall[e]=i+1,!0)}function yl(n,e){return mn.unlock[e]??1/0}function Dx(n,e){const t=n.desks[e];if(!t||t.unlocked)return!1;const i=yl(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function Ml(n,e){const t=n.desks[e];if(!t||!t.unlocked)return 1/0;const i=(n.hall.F6??0)>0,r=mn.tier[t.tier+1]??1/0;return i?Math.ceil(r*mn.F6.costMult):r}function kx(n,e){const t=Ml(n,e),i=n.desks[e];return!i||!i.unlocked||i.tier>=mn.caps.length-1||n.postage<t?!1:(n.postage-=t,i.tier+=1,!0)}function Sl(n,e){return Gn.unlock[e]??1/0}function Ix(n,e){const t=n.racks[e];if(!t||t.unlocked)return!1;const i=Sl(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function wl(n,e){const t=n.racks[e];return!t||!t.unlocked?1/0:Gn.tier[t.tier+1]??1/0}function Fx(n,e){const t=n.racks[e];if(!t||!t.unlocked)return!1;const i=wl(n,e);return t.tier>=Gn.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}function El(n,e){return zn.unlock[e]??1/0}function Ux(n,e){const t=n.lanes[e];if(!t||t.unlocked)return!1;const i=El(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function Tl(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return 1/0;const i=n.hall.F7??0,r=zn.F7,s=r.costMultPerTier;let a=1;i>=1&&(a=r.costMult);for(let o=2;o<=i;o++)a*=s;return Math.ceil((zn.tier[t.tier+1]??1/0)*a)}function Nx(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return!1;const i=Tl(n,e);return t.tier>=zn.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}function Ox(){return{desks:Ch(),racks:Rh(),lanes:Lh()}}function Ls(n){return n<=0?0:$_(n)}function Al(n){return Ls(n.blocking.eRunRaw)}function Bx(n){return 1+It.starMultStep*n}function zx(n){const e=Al(n),t=n.blocking.eRunRaw;return fe(n,de.redrawShow,{stars_pending:e,earned_booked:t}),{starsPending:e,earnedBooked:t}}function Hx(n,e,t){const i=n.blocking.eRunRaw,r=Ls(i);fe(n,de.redrawClaim,{stars_awarded:r,earned_booked:i,forecast_shown:e,cycle_age_s:t?.cycleAgeS??n.blocking.nightMs/1e3,seal_share_at_claim:t?.sealShareAtClaim??null,voluntary:t?.voluntary??!1}),n.stars+=r,n.starMultiplier=Bx(n.stars),n.redrawCount+=1,n.run+=1,n.ch2.horizonSealAction!=="advance_bond"&&(n.ch2.horizonSealAction="advance_bond"),n.postage=0,n.totalEarnedRun=0;for(const a of Object.keys(n.hall))n.hall[a]=0;const s=Ox();return n.desks=s.desks,n.racks=s.racks,n.lanes=s.lanes,n.backlog=Xr().backlog,n.bundled=0,n.perfect=0,n.districtIndex=0,n.districtRouteValue=0,n.blocking.snapshotRate=0,Dv(n),mv(n),{starsAwarded:r,earnedBooked:i,forecastShown:e,multiplierNext:n.starMultiplier}}const rd=new WeakMap;function Dh(n){let e=rd.get(n);return e||(e={ring:[],run:n.run,armFired:!1,nudgeFired:!1,cardFired:!1,flatForS:0},rd.set(n,e)),e}function kh(n,e){e.run!==n.run&&(e.ring=[],e.run=n.run,e.armFired=!1,e.nudgeFired=!1,e.cardFired=!1,e.flatForS=0)}function Ma(n){const e=Mn(n);return e?n.blocking.gates[e].listValue/yn[e].deliveryList:1}function Gx(n){return Ma(n)<Un.nudgeSealShareBelow}function Zo(n,e){const t=n.blocking.nightMs/1e3,i=t-Un.windowS,r=e.ring.length?e.ring[e.ring.length-1].pending:Ls(n.blocking.eRunRaw);let s=null;if(e.ring.length&&e.ring[0].t<=i){let p=e.ring[0].pending;for(const f of e.ring)if(f.t<=i)p=f.pending;else break;s=r-p}const a=t>=Un.armFloorS,o=a&&s!=null&&s<=Un.windowMaxStars,c=Ma(n),l=e.flatForS>=Un.cardAfterS,h=e.flatForS>=Un.nudgeAfterS&&c<Un.nudgeSealShareBelow,d=l?"level":a?"settling":"rising";return{armed:a,windowFlat:o,card:l,flatForS:e.flatForS,nudge:h,sealShare:c,pending:r,windowDelta:s,glyph:d,cycleAgeS:t}}function Vx(n){const e=Dh(n);kh(n,e);const t=n.blocking.nightMs/1e3,i=e.ring.length?e.ring[e.ring.length-1].t:-1/0;if(t-i>=1){e.ring.push({t,pending:Ls(n.blocking.eRunRaw)});const r=t-(Un.windowS+60);for(;e.ring.length&&e.ring[0].t<r;)e.ring.shift();const s=Zo(n,e);e.flatForS=s.windowFlat?e.flatForS+1:0,s.armed&&!e.armFired&&(e.armFired=!0,fe(n,de.flatArm,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare})),e.flatForS>=Un.nudgeAfterS&&s.sealShare<Un.nudgeSealShareBelow&&!e.nudgeFired&&(e.nudgeFired=!0,fe(n,de.flatNudge,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare}))}return Zo(n,e)}function Jo(n){const e=Dh(n);return kh(n,e),Zo(n,e)}const da={lantern_lane:[{id:"ll1",districtId:"lantern_lane",slot:1,sender:"Old Naomi, Window 3",subject:"The lamp that remembers",body:'She keeps one envelope from every night she has worked. "Not the post," she insists, "the proof we were here." Tonight her shelf ran out of room, so she mailed the first one onward.',reaction:"Lantern Lane answers: a warm hum, steady as breathing."},{id:"ll2",districtId:"lantern_lane",slot:2,sender:"Clinker, the night cat",subject:"A pawprint on the seal",body:"Clinker has no address and approves of nothing. Still, a packet arrived bearing a single muddy print in the wax — his way of saying the lane is paying attention after all. No return address. Obviously.",reaction:"The lane answers: a soft, rumbling purr through the floor."},{id:"ll3",districtId:"lantern_lane",slot:3,sender:"The Lamplighter",subject:"Twelve wicks, one thread",body:'Every lamp on the lane lit for the first time in a decade. "A clerk who finishes the list," the Lamplighter wrote, "deserves to see the whole street." The wicks burn low and golden, all facing the same direction.',reaction:"Lantern Lane answers: all twelve lamps bow toward the route map."}],rainmarket:[{id:"rm1",districtId:"rainmarket",slot:1,sender:"Marta, awning seller",subject:"Dry seats",body:`Marta roofed the three driest benches under her awning "for the post's sake." The ink on her note bled from the rain, but the message held: the market remembers which trades carried it through its quiet years.`,reaction:"Rainmarket answers: the awnings snap once, in salute."},{id:"rm2",districtId:"rainmarket",slot:2,sender:"The Tally Boys",subject:"Ledger of small mercies",body:'A fold of paper listing every kindness the market owes — the returned scarf, the two saved crates, the lantern loaned after midnight. "Not debt," they wrote. "A standing account." They sign it with a thumbprint in red ink.',reaction:"Rainmarket answers: a bell rings three times over the stalls."},{id:"rm3",districtId:"rainmarket",slot:3,sender:"Mother Kettle",subject:"The first tea in years",body:'She boiled the urn the moment the route reopened and poured for whoever came through the gate. "Post first," she told her kettle, "then the world can wait." The cup left out for the clerk is still warm.',reaction:"Rainmarket answers: steam rises, patient and certain, from a single cup."}],clocktower_ward:[{id:"cw1",districtId:"clocktower_ward",slot:1,sender:"The Keeper of Hours",subject:"Time, postmarked",body:'The great clock had stopped for so long that the ward forgot its own rhythm. When the first route reached it, the Keeper reset all four faces and sent a note: "We were waiting for someone to bring us the news of the world before striking the hour."',reaction:"Clocktower Ward answers: the chimes ring, once, in the dusk."},{id:"cw2",districtId:"clocktower_ward",slot:2,sender:"Wren, the archivist",subject:"A minute in a jar",body:'Wren keeps one saved minute from every clock she has coaxed back to life. "A captured minute," she wrote, "is a town that agreed to move together." She sent the newest jar to the route maps, so the past reaches the present by post.',reaction:"Clocktower Ward answers: the jar ticks softly with the returned route."},{id:"cw3",districtId:"clocktower_ward",slot:3,sender:"The First Night-Watch",subject:"The ward signs on",body:'A single sheet, signed in four different hands, carries the ward into the network. "We will answer," it reads, "as long as the mail keeps moving." Below the signatures, a date was left blank for the clerk to fill.',reaction:"Clocktower Ward answers: all four faces strike, together, for the first time."}],museum_after_dark:[{id:"ma1",districtId:"museum_after_dark",slot:1,sender:"Curator Vale",subject:"The wing lit for one",body:'The museum never opens its eastern wing after dark — except, Vale notes, for the night the mail arrived. She hung a single lamp so a clerk could read the row of brass plates in peace. "History stays," she wrote, "if someone keeps the lights willing to show it."',reaction:"Museum After Dark answers: a door unlatches, quietly, on its own."},{id:"ma2",districtId:"museum_after_dark",slot:2,sender:"A voice from Case 12",subject:"Do not cover us",body:'A note folded inside a velvet case. "We were the ones who talked to the dark," it reads in neat, old-fashioned script. "Now that talk has a route, do not put the cloths back over us." No signature. The case label lists no artist.',reaction:"Museum After Dark answers: a single case light stays lit against the rule."},{id:"ma3",districtId:"museum_after_dark",slot:3,sender:"The Night Guard",subject:"The last name on the wall",body:'The museum keeps a wall of names of those who kept it at night. The guard added one more at the end, with room after it. "A name that arrives by post," he wrote, "counts as having been here." The ink is still wet.',reaction:"Museum After Dark answers: the hall rings like a struck glass, just once."}],rooftop_gardens:[{id:"rg1",districtId:"rooftop_gardens",slot:1,sender:"Sister Fern",subject:"Water, spared",body:'The gardens live on what the rains give them. Sister Fern saved a full jar "for the route," so the couriers would have something standing between the way-stops. "Even the mail," she wrote, trailing a leaf, "needs a drink before it climbs."',reaction:"Rooftop Gardens answers: a vine reaches one leaf toward the lane."},{id:"rg2",districtId:"rooftop_gardens",slot:2,sender:"The Beekeepers of the roof",subject:"A hive in the route",body:'They set the hive beside the highest sorting ledge, where the drift of envelopes passes. "The bees count," their note insists, "and they like the weight of mail riding the same wind." Honey drips over the word "welcome."',reaction:"Rooftop Gardens answers: a low, green hum under the roof tiles."},{id:"rg3",districtId:"rooftop_gardens",slot:3,sender:"The Gardener Who Stays",subject:"Seeds, one per route",body:'He pressed a small seed into every envelope he sent. "Grow one for each road you reopen," he wrote. "By spring this city will be a garden that answers by name." The packet is heavy with humid soil and stubborn hope.',reaction:"Rooftop Gardens answers: green threads curl up along the outermost lane."}],canal_of_echoes:[{id:"ce1",districtId:"canal_of_echoes",slot:1,sender:"The Singing Ferryman",subject:"A fare of silence",body:'The canals carry sound farther than they carry boats, and the ferryman calls across at night. He sent his fare as a single held note, folded into paper, "so the clerk would hear the district before seeing it." The note still vibrates faintly.',reaction:"Canal of Echoes answers: a whisper slides the whole length of the water."},{id:"ce2",districtId:"canal_of_echoes",slot:2,sender:"The Barge Children",subject:"Things the water returns",body:'The children fish lost mail out of the canal and press it flat on the stones to dry. Their packet holds nothing stolen — only what the water gave back. "We are the last stop for the lost," they wrote, "send us the ones you cannot reach."',reaction:"Canal of Echoes answers: ripples map themselves into a route on the surface."},{id:"ce3",districtId:"canal_of_echoes",slot:3,sender:"The Voice Under the Bridge",subject:"An address that travels",body:`A single sheet, one line: "Whatever you build, build a place the far ones can write to." No sender's name, but a worn snail-shell sat in the fold, addressed on its side in faint chalk. The shell is warm to the touch.`,reaction:"Canal of Echoes answers: the whole canal carries the name back in one long chord."}],moonlit_arcade:[{id:"ml1",districtId:"moonlit_arcade",slot:1,sender:"The ticket-taker who counts stubs by lamplight",subject:"A perforated moon ticket",body:'Every night she counts the stubs nobody claimed and tickets the ones still warm. "A stub is a promise somebody made," she wrote, "and this one was yours to carry." Her lamp gutters exactly once, like a nod.',reaction:"Moonlit Arcade answers: she stamps the letter VOID, then frames it behind the glass anyway."},{id:"ml2",districtId:"moonlit_arcade",slot:2,sender:"An initials-only score-card rival, initials worn off",subject:"A spiral of three linked tickets",body:'The score card arrived tallied to the last game but never signed — whoever held the crown wore the letters off their own name first. The margin reads: "Your turn. Initials optional."',reaction:"Moonlit Arcade answers: the top-score line quietly changes one letter: N.C."},{id:"ml3",districtId:"moonlit_arcade",slot:3,sender:"The carousel's last painter, retired twice",subject:"Chipped gold leaf",body:'He retired the brushes twice and the carousel twice refused to notice. Tonight a fleck of gold leaf rode the envelope like it knew the way home. "One horse," he wrote. "That is all a painter owes the dark."',reaction:"Moonlit Arcade answers: he repaints exactly one horse in the envelope's blue, then stops again."}],glasshouse_quarter:[{id:"gq1",districtId:"glasshouse_quarter",slot:1,sender:"A night-blooming botanist with patient gloves",subject:"Pressed violet",body:"She works the beds only after the lamps are low, when the glass cools enough to hold a breath. Between two pages she has kept every petal the post ever carried — a garden that blooms on paper.",reaction:"Glasshouse Quarter answers: she slides the envelope between two glass plates and labels the species *epistola*."},{id:"gq2",districtId:"glasshouse_quarter",slot:2,sender:"Two siblings who argued by bouquet for a decade",subject:"Twin seeds on one stem",body:'Ten years of roses thornier than the last, then tulips sharper than those. The packet holds two seeds fused at the waist: "We agree," it reads, "only that the other should hear about it first."',reaction:"Glasshouse Quarter answers: each plants a thank-you at opposite ends of the same bed; truce by geography."},{id:"gq3",districtId:"glasshouse_quarter",slot:3,sender:"The greenhouse itself, written in humidity",subject:"Fern-shadow blot",body:"No hand wrote this one. The condensation gathered through the night in fern-shadow script and the blot dried in the shape of a name only the panes use. It is addressed to the building, care of you.",reaction:"Glasshouse Quarter answers: one pane blooms frost mid-summer, shaped like a stamp corner."}],sleepless_library:[{id:"sl1",districtId:"sleepless_library",slot:1,sender:"A cataloguer who keeps shelf-space for unwritten books",subject:"A blank spine",body:'Every shelf leaves exactly one gap for the books that have not happened yet. "The catalogue is faith, not record," the note reads. "Keep my gap dusted. Something will want it."',reaction:"Sleepless Library answers: she files the letter under FORTHCOMING and dusts the gap around it."},{id:"sl2",districtId:"sleepless_library",slot:2,sender:"Twin readers who borrow each other's endings",subject:"A mirrored bookplate",body:"They read the same books in mirrored order and have never once agreed on a final page. The bookplate in the envelope is printed twice, flipped — each insists the other side is the front.",reaction:"Sleepless Library answers: both write back the same night, each claiming the other's last page was better."},{id:"sl3",districtId:"sleepless_library",slot:3,sender:"The author, postmarked from inside the stacks' future",subject:"Ink not yet dry",body:'Dated years from now, stamped somewhere the map has not reached. "Finish the collection," it says. "I am nearly done writing it." The ink was still wet — is, perhaps, still not dry.',reaction:"Sleepless Library answers: it returns a library card bearing the Clerk's signature — dated years from now."}],cloudline_station:[{id:"cs1",districtId:"cloudline_station",slot:1,sender:"The rigging-gaffer who ties knots that remember",subject:"The knot that holds",body:'Every knot she ties is one that has held a slipstream aloft longer than anyone trusted. "A good knot," she writes, "earns the weight it is asked to carry." Her stamp is a laced loop-knot.',reaction:'Cloudline Station answers: she hauls the letter up by hand-line rather than trust the winch — "so it arrives earned".'},{id:"cs2",districtId:"cloudline_station",slot:2,sender:"A thermal-chaser who forecasts weather nobody else can feel",subject:"A warm kind of forecast",body:'He reads the updrafts the way others read ink — by feel, a half-second before they settle into proof. Three rising ring-gusts form his stamp. "Ride what I felt first," the note says, "and the mail is always on time."',reaction:"Cloudline Station answers: he releases a stamped slip into the same thermal; it lands back at the office an hour later, warm."},{id:"cs3",districtId:"cloudline_station",slot:3,sender:"The last signal-kite keeper of the old night mail",subject:"A kite tethered to a wax moon",body:'The keepers were said to be gone, and the big brass kites with them. Not all. One still flies the highest line, and on its tail-tag is a kite tethered to a wax moon. "Kept it aloft for you, Clerk."',reaction:"Cloudline Station answers: he ties the letter to the highest kite; at dawn the whole platform reads it against the light."}],aurora_borough:[{id:"ab1",districtId:"aurora_borough",slot:1,sender:"A sign-painter mixing colors with no names yet",subject:"A brushstroke horizon",body:'She grinds pigment for hues the street has no word for yet, and skims the nap of the sky off the top. Her stamp is a single brushstroke horizon. "Name this one," the note challenges, "and the sign is yours."',reaction:"Aurora Borough answers: she re-letters her own shop sign overnight, adding one line: REPLIES RECEIVED."},{id:"ab2",districtId:"aurora_borough",slot:2,sender:"Twin bakers whose feud is conducted entirely in icing",subject:"A split piped rosette",body:'Two ovens, one family, and a rivalry settled only in sugar. The rosette on the envelope is piped in two halves, each to a different recipe. "Send this," one insists, "so we can stop talking."',reaction:"Aurora Borough answers: each pipes the thank-you onto a loaf sent to the other; truce by sugar."},{id:"ab3",districtId:"aurora_borough",slot:3,sender:"The borough lamplighter who works by aurora-glow",subject:"A lantern filled with ribboned light",body:'He tends lamps that need no flame, only the wandering color that hangs over the rooftops on clear nights. His stamp is a lantern filled with ribboned light. "It shines brightest after the letters arrive."',reaction:"Aurora Borough answers: he hangs the letter inside the lamp glass; for one night the whole street glows in answer."}],last_light_observatory:[{id:"llo1",districtId:"last_light_observatory",slot:1,sender:"The keeper of the tide-clock, who notes the sky's appointments",subject:"An inscribed brass dial",body:'The tide-clock keeps appointments no one else schedules — comets, conjunctions, the slow breathing of the far weather. Its dial, inscribed with a single arrow, is the stamp. "Arrivals are the only schedule I trust."',reaction:'Last Light Observatory answers: he logs the letter as "received, on schedule, eleven nights early".'},{id:"llo2",districtId:"last_light_observatory",slot:2,sender:"A retired comet-cartographer with ink-stained gloves",subject:"A long-tailed comet, ink still wet",body:'She mapped orbits until her hands forgot their own borders, then kept mapping for the joy of it. Her comet-stamp is drawn in still-wet ink. "I redrew the sky without you," she teases, "and the office is now at the center."',reaction:"Last Light Observatory answers: she redraws her last map, placing the office at the center."},{id:"llo3",districtId:"last_light_observatory",slot:3,sender:"The observatory dome itself, turning on old bearings",subject:"A lens-iris closed around a stamp",body:'The dome turns on worn bearings older than most street names, and tonight it turns not toward the sky but toward the city. Its stamp is a lens-iris closed around a postmark. "For the clerk who made the city face itself."',reaction:"Last Light Observatory answers: it flashes the reply signal once more, just for the Clerk."}]};function Ih(){const n=Ot.map(i=>i.id),e=[...n.filter(i=>da[i]),...Object.keys(da).filter(i=>n.indexOf(i)<0)],t=[];for(const i of e){const r=da[i]??[];for(const s of[...r].sort((a,o)=>a.slot-o.slot))t.push(s)}return t}function Fh(n,e){const t=Zd[e.districtId];if(!t)return!1;const i=t[e.slot-1];return i==null?!1:(n.ch2.postcardCounters[e.districtId]??0)>=i}function ha(n){return Ih().map(e=>({story:e,unlocked:Fh(n,e),read:n.ch2.postcards.read.includes(e.id)}))}function Wx(n){return ha(n).filter(e=>e.unlocked&&!e.read).length}function $x(n,e){return n.ch2.postcards.sealAwarded.includes(e)}function Xx(n,e){const t=Ih().find(i=>i.id===e);return!t||!Fh(n,t)?!1:(n.ch2.postcards.read.includes(e)||(n.ch2.postcards.read.push(e),t.slot===3&&!$x(n,t.districtId)&&(n.ch2.postcards.sealAwarded.push(t.districtId),Wv(n))),!0)}const qx=60,sd=new WeakMap;function jx(n,e){let t=sd.get(n);const i=Math.floor(n.blocking.nightMs/6e4);if(!t||t.minuteIdx!==i){if(t)for(n.blocking.ledgerRing.push(t.acc);n.blocking.ledgerRing.length>Qd.medianRingMax;)n.blocking.ledgerRing.shift();t={minuteIdx:i,acc:0},sd.set(n,t)}e>0&&(t.acc+=e)}function Yx(n){const e=n.blocking.ledgerRing;if(!e.length)return null;const t=[...e].sort((s,a)=>s-a),i=t.length;return(i%2===1?t[(i-1)/2]:(t[i/2-1]+t[i/2])/2)/60}function ad(n){const e=n.hall.F8??0,t=en.F8;return e>=3&&t.capHoursAfterT3!=null?t.capHoursAfterT3:e>=2&&t.capHoursAfterT2!=null?t.capHoursAfterT2:e>=1&&t.capHoursAfter!=null?t.capHoursAfter:Cs.capHours}function Kx(n){const e=n.hall.F3??0,t=en.F3;return e>=4&&t.awayFractionAfterT4!=null?t.awayFractionAfterT4:e>=1&&t.awayFractionAfter!=null?t.awayFractionAfter:Cs.awayFraction}function Zx(n,e,t){if(e<=0)return;const i=e/Math.max(1e-9,t),r=Math.min(1,t/qx);n.blocking.snapshotRate+=(i-n.blocking.snapshotRate)*r}function od(n,e=Date.now()){const t=Math.max(0,(e-n.lastLedgerTs)/1e3),i=n.blocking.snapshotRate,r=Yx(n),s=r??i;if(t<Cs.neverEmptyElapsedS||s<=0){const f={kind:"never-empty",elapsedS:t,capS:ad(n)*3600,base:0,doubled:!1,doublerLeftToday:ld(n),snapshotRate:s,medianRate:r,raw:0,trim:0,capReference:Mn(n)?"frontier":n.ch4.replyFired?"terminal":null};return n.lastLedgerTs>0&&t>=1&&fe(n,de.ledgerReturn,{elapsed_s:t,credited:0,snapshot_rate:s,doubled:!1}),n.lastLedgerTs=e,n.lastLedgerTs>0?f:null}const a=ad(n)*3600,c=Math.min(t,a)*Kx(n)*s*(n.liveMod?.ledgerAccrualX??1);let l=c,h=0;const d=Mn(n),p=n.ch4.replyFired?"terminal":d?"frontier":null;if(p!=null){const f=p==="terminal"?Kd:Math.max(0,yn[d].deliveryList-n.blocking.gates[d].listValue),g=Qd.claimCapFracOfFrontierRem*f;l>g&&(h=l-g,l=g)}return n.totalEarnedRun+=l,Jr(n,l),fe(n,de.ledgerClaim,{elapsed_s:t,cap_h:a/3600,median_rate:r,ema_rate:i,raw:c,posted:l,trimmed:h>0,cap_reference:p}),fe(n,de.ledgerReturn,{elapsed_s:t,credited:l,snapshot_rate:s,doubled:!1}),n.lastLedgerTs=e,{kind:"ledger",elapsedS:t,capS:a,base:l,doubled:!1,doublerLeftToday:ld(n),snapshotRate:s,medianRate:r,raw:c,trim:h,capReference:p}}function ld(n,e=Date.now()){const t=Ti(e),i=n.ch5?.doubler,r=i?i.day===t?i.used:0:n.doublerDay===t?n.doublersUsed:0;return Math.max(0,Cs.doublerMaxPer24h-r)}function Cl(n){return n.blocking.ch2FiredEver}function Kt(n,e){return Cl(n).includes(e)}function rn(n,e,t={}){return Cl(n).push(e.beat),fe(n,de.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight,...t}}const cd=new WeakMap;function Sa(n){let e=cd.get(n);return e||(e={primed:!1,eraStartRun:null,rushPrev:"empty",maRvPrev:!1,runSeen:n.run,wallAgeS:0,returns:[],nudgeFiredThisRun:!1,pending:[]},cd.set(n,e)),e}function wa(n){return n.ch2.districtsAnswered.includes(5)}function Rl(n){const e=Sa(n);return e.eraStartRun==null?-1:Math.max(0,n.run-e.eraStartRun)}function Jx(n){const e=n.hall.F4??0,i=It.backlogRefillBase*Math.pow(It.backlogRefillScale,e)*(n.liveMod?.refillX??1)*eh(n),r=pl(n)/It.satchelBufferSeconds,s=fl(n);return{flipped:r<i&&r<s,supplyRate:i,satchelRate:r,routeRate:s}}function Uh(n){const e=Sa(n),t=Ma(n),i=t>0&&t<1?(1-t)/t*(e.wallAgeS/3600):null,r=e.returns;return{rows:r,deltas:r.map(s=>s.delta),etaH:i,sealShare:t,wallAgeS:e.wallAgeS,nudge:!1,armed:e.wallAgeS>=gs.returnArmedFloorS,flatD1:r.length>=1?r[r.length-1].delta:null,flatD2:r.length>=2?r[r.length-2].delta:null}}function dd(n,e){const t=Sa(n);if(!wa(n))return;t.eraStartRun==null&&(t.eraStartRun=n.run),t.runSeen!==n.run&&(t.runSeen=n.run,t.wallAgeS=0,t.returns=[],t.nudgeFiredThisRun=!1),t.wallAgeS+=e.elapsedS;const i=Ls(n.blocking.eRunRaw),r=t.returns.length?t.returns[t.returns.length-1].pendingAfter:Qx(n,t),s=Ma(n),a=s>0&&s<1?(1-s)/s*(t.wallAgeS/3600):null;t.returns.push({idx:t.returns.length+1,pendingAfter:i,delta:i-r,sealShare:s,etaH:a,elapsedS:e.elapsedS,wallAgeS:t.wallAgeS}),Rl(n)===0&&(t.returns.length===1&&!Kt(n,gt.longReturn.beat)&&t.pending.push(rn(n,gt.longReturn)),t.returns.length===2&&!Kt(n,gt.ledgerBasis.beat)&&t.pending.push(rn(n,gt.ledgerBasis)));const o=Mn(n),c=o?!n.blocking.gates[o].listDone:!1,l=t.returns.length>=2?t.returns[t.returns.length-2].sealShare:null,h=l!=null&&s<l,d=t.returns.length>=1?t.returns[t.returns.length-1].delta:null,p=t.returns.length>=2?t.returns[t.returns.length-2].delta:null,f=d!=null&&p!=null&&d<=gs.returnFlatMaxStarsPerReturn&&p<=gs.returnFlatMaxStarsPerReturn,g=t.wallAgeS>=gs.returnArmedFloorS;!t.nudgeFiredThisRun&&!h&&c&&g&&f&&(a??0)>gs.nudgeSealEtaHours&&(t.nudgeFiredThisRun=!0,fe(n,de.returnNudge,{cycle_age_s:Math.round(t.wallAgeS),pending_d1:d,pending_d2:p,seal_share:s,seal_eta_h:a}),t.pending.push({beat:"ch3.voyage-nudge",speaker:null,copy:null,voyageNudge:!0}))}function Qx(n,e){const t=e.returns[e.returns.length-1];return t?t.pendingAfter-t.delta:0}function eb(n,e){const t=[];if(!wa(n))return t;const i=Y_.find(r=>r.districtIndex===e);if(i){const r=`ch3.vignette.${i.id}`;Kt(n,r)||(Cl(n).push(r),fe(n,de.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:`${i.body}
— ${i.speakerLine}`,vignette:i})),i.id==="moonlit_arcade"&&!Kt(n,gt.maAnswer.beat)&&t.push(rn(n,gt.maAnswer)),i.id==="glasshouse_quarter"&&!Kt(n,gt.rushPreview.beat)&&t.push(rn(n,gt.rushPreview)),i.id==="sleepless_library"&&(Kt(n,gt.slClose1.beat)||t.push(rn(n,gt.slClose1)),Kt(n,gt.slClose2.beat)||t.push(rn(n,gt.slClose2)),t.push({beat:"ch3.west-lean",speaker:null,copy:null,chord:{district:null,composite:!0}}))}if(e>=6){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(a=>a.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+8,district:e});const s=[6,7,8].filter(a=>n.ch2.districtsAnswered.includes(a)).length;fe(n,de.mapWestward,{cycle:Rl(n),threads_lit:s})}return t}function tb(n,e){wa(n)&&fe(n,de.cycleClose,{wall_s:Math.round(e.wallS),sessions:e.sessions,claim:e.claimStars,ledger_share:e.ledgerShare,furn_share:e.furnShare,modifier_slots:e.modSlots.join(","),rush_spent:e.rushSpent})}function nb(n,e,t,i){const r=[],s=Sa(n);if(Ko(n,e),!wa(n))return r;s.eraStartRun==null&&(s.eraStartRun=n.run),s.runSeen!==n.run&&(s.runSeen=n.run,s.wallAgeS=0,s.returns=[],s.nudgeFiredThisRun=!1),s.wallAgeS+=t,jx(n,i);const a=n.blocking.nightMs/1e3,o=Rl(n);s.primed||(s.primed=!0,s.rushPrev=hd(n,e),s.maRvPrev=n.blocking.gates.moonlit_arcade.rvDone),o===0&&(Kt(n,gt.thirdWind.beat)||r.push(rn(n,gt.thirdWind)),a>=4&&!Kt(n,gt.f11Rail.beat)&&r.push(rn(n,gt.f11Rail,{pulseFamilies:["satchel","route"]})),a>=7&&!Kt(n,gt.f12Rail.beat)&&r.push(rn(n,gt.f12Rail)),n.liveMod?.id&&!Kt(n,gt.modIntro.beat)&&r.push(rn(n,gt.modIntro))),o===1&&!Kt(n,gt.modTiming.beat)&&r.push(rn(n,gt.modTiming));const c=n.blocking.gates.moonlit_arcade.rvDone;c&&!s.maRvPrev&&!Kt(n,gt.voyageFrame.beat)&&r.push(rn(n,gt.voyageFrame)),s.maRvPrev=c;const l=hd(n,e);return l==="held"&&s.rushPrev!=="held"&&!Kt(n,gt.rushGrant.beat)&&r.push(rn(n,gt.rushGrant)),l==="active"&&s.rushPrev!=="active"&&!Kt(n,gt.rushDeploy.beat)&&r.push(rn(n,gt.rushDeploy)),s.rushPrev=l,s.pending.length&&(r.push(...s.pending),s.pending=[]),r}function hd(n,e){const t=n.ch2.rush;return t.held?"held":t.activeEndTs!=null&&e<t.activeEndTs?"active":t.activeEndTs!=null?"spent":"empty"}function ib(n,e){const t=kn.recipes.find(a=>a.id===e);if(!t)return!1;const i=t.availableWhenAnswered??t.available,r=Ot.findIndex(a=>a.id===i);return!(r<0||!(t.availableWhenAnswered?n.ch2.districtsAnswered.includes(r):n.districtIndex>=r)||t.rush&&(n.ch2.rush.held||n.ch2.rush.activeEndTs!=null&&n.rushActive===!0))}function Ll(n){return n.blocking.ch2FiredEver}function hn(n,e){return Ll(n).includes(e)}function vn(n,e,t={}){return Ll(n).push(e.beat),fe(n,de.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight,...t}}function Nh(n){return n.ch2.districtsAnswered.includes(8)}const ud=new WeakMap;function Qo(n){let e=ud.get(n);return e||(e={primed:!1,eraStartRun:null,cycle:-1,prevF12:n.hall.F12??0,prevLloRv:!1,prevModId:null,prevRtOpen:er(n),prevReplyFired:Ft(n),hTopThisRun:0,lastBuyRelS:0},ud.set(n,e)),e}function Oh(n){return Object.keys(Yi).map(e=>{const t=n.ch4.roundTrip.completed[e]??{},i=oh(n,e),r=Yi[e].target.letters,s=t.A===!0,a=t.B===!0,o=t.C===!0,c=h=>h>=1e6?`${(h/1e6).toFixed(1)} M`:`${(h/1e3).toFixed(1)} k`,l=`${zi.kindGlyphs.letters} ${c(Math.min(i,r))} / ${c(r)}${s?zi.suffixDone:""} · ${zi.kindGlyphs.modified} ${a?zi.suffixDone.trimStart():"—"} · ${zi.kindGlyphs.courier} ${o?zi.suffixDone.trimStart():"—"}`;return{district:e,segments:(s?1:0)+(a?1:0)+(o?1:0),done:{A:s,B:a,C:o},tooltip:l,counters:{letters:i,targetLetters:r}}})}function rb(n){const e=er(n);return{open:e,lockedLine:e?null:zi.lockedLine,rings:Oh(n)}}function sb(n){return{open:Ft(n),lockedLine:Ft(n)?null:nh.shelfLocked,jar:n.ch2.waxSeals,owned:[...n.ch4.cosmetics.owned],equipped:{...n.ch4.cosmetics.equipped}}}function ab(n,e,t,i=!1){const r=[];if(!Nh(n))return r;const s=Z_.find(o=>o.districtIndex===e);if(s&&!hn(n,`ch4.vignette.${s.id}`)&&(Ll(n).push(`ch4.vignette.${s.id}`),fe(n,de.onboardBeat,{copy_id:`ch4.vignette.${s.id}`,t_s:n.blocking.nightMs/1e3}),r.push({beat:`ch4.vignette.${s.id}`,speaker:s.speaker,copy:`${s.body}
— ${s.speakerLine}`,vignette:s})),e===9&&!hn(n,Mt.cloudlineAnswer.beat)&&r.push(vn(n,Mt.cloudlineAnswer)),e===10&&!hn(n,Mt.auroraAnswer.beat)&&r.push(vn(n,Mt.auroraAnswer)),e===11&&!hn(n,Mt.lastLightAnswer.beat)&&r.push(vn(n,Mt.lastLightAnswer)),e>=9){const o=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(c=>c.id===o)||n.blocking.ch2Pending.push({id:o,kind:"reply_chord",atS:n.blocking.nightMs/1e3+8,district:e})}const a=Ft(n);return!Qo(n).prevReplyFired&&a&&r.push({beat:"ch4.finale.sequence",speaker:null,copy:`${ni.cardTitle} · ${ni.pipQuietLine} · ${ni.maraSignLine}`,finale:{timeline:ni,reducedMotion:i,boundaries:ni.boundaries}}),Qo(n).prevReplyFired=a,r}function ob(n,e){const t=[];if(!Nh(n))return t;const i=Qo(n);i.eraStartRun==null&&(i.eraStartRun=n.run),i.primed||(i.primed=!0,i.prevF12=n.hall.F12??0,i.prevLloRv=n.blocking.gates.last_light_observatory.rvDone,i.prevModId=n.liveMod?.id??null);const r=i.cycle!==n.run-i.eraStartRun;if(i.cycle=n.run-i.eraStartRun,i.cycle===0){hn(n,Mt.fourthWind.beat)||t.push(vn(n,Mt.fourthWind,{pulseFamilies:["satchel","route"]}));const c=n.hall.F12??0;c>i.prevF12&&(hn(n,Mt.deepAddressing.beat)||t.push(vn(n,Mt.deepAddressing)),c>=3&&i.prevF12<3&&!hn(n,Mt.finalRunJump.beat)&&t.push(vn(n,Mt.finalRunJump))),i.prevF12=c,!hn(n,Mt.kitT9.beat)&&n.racks.some(l=>l.unlocked&&l.tier>=8)&&t.push(vn(n,Mt.kitT9,{pulseFamilies:["satchel"]}))}i.cycle===1&&r&&!hn(n,Mt.weatherReRead.beat)&&t.push(vn(n,Mt.weatherReRead,{highlight:"modifier"}));const s=n.liveMod?.id??null;if(s!==i.prevModId){const c=Mn(n),l=c?!n.blocking.gates[c].listDone:!1;i.prevModId!=null&&l&&i.cycle>=1&&!hn(n,Mt.midCycleSwap.beat)&&t.push(vn(n,Mt.midCycleSwap,{highlight:"modifier"})),i.prevModId=s}const a=n.blocking.gates.last_light_observatory.rvDone;if(a&&!i.prevLloRv&&!hn(n,Mt.voyageBeat.beat)){const c=n.blocking.gates.last_light_observatory;t.push(vn(n,Mt.voyageBeat)),fe(n,de.onboardBeat,{copy_id:"ch4.voyage.listread",list_share_at_rv_done:yn.last_light_observatory.deliveryList>0?c.listValue/yn.last_light_observatory.deliveryList:null})}i.prevLloRv=a;const o=er(n);return o&&!i.prevRtOpen&&(hn(n,Mt.rtOpen.beat)||t.push(vn(n,Mt.rtOpen,{highlight:"roundTrip"})),n.ch2.waxSeals>=12&&!hn(n,Mt.firstTrim.beat)&&t.push(vn(n,Mt.firstTrim,{highlight:"cosmetics"}))),i.prevRtOpen=o,t}const Yn={lantern_lane:{glyph:"◈",thread:M.routeMint,addr:"Lantern Lane, Window 3 · the night route",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="30" y="4" width="14" height="6" rx="2" fill="#D6A84B"/><path d="M28 13h18l-3 14a6 6 0 0 1-12 0z" fill="#D6A84B"/><rect x="34" y="31" width="6" height="6" rx="1" fill="#F4E7C7"/><path d="M20 38h34v8H20z" fill="#17233F"/></svg>'},rainmarket:{glyph:"☂",thread:M.routeMint,addr:"Rainmarket, Marta’s awnings · the wet stalls",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M12 24h50l-6 8H18z" fill="#C74B55"/><path d="M18 32h4v12h-4zM30 32h4v12h-4zM42 32h4v12h-4zM54 32h4v12h-4z" fill="#6D3E78"/><path d="M8 34a4 3 0 0 0 8 0z" fill="#5B79C8" opacity=".6"/></svg>'},clocktower_ward:{glyph:"◔",thread:M.brass,addr:"Clocktower Ward, the four faces · Keeper of Hours",motif:'<svg viewBox="0 0 74 54" fill="none"><circle cx="37" cy="27" r="14" fill="none" stroke="#D6A84B" stroke-width="2"/><circle cx="37" cy="27" r="3" fill="#17233F"/><path d="M37 27v-8M37 27l6 4" stroke="#17233F" stroke-width="2" stroke-linecap="round"/><path d="M10 45h54" stroke="#17233F" stroke-width="2"/></svg>'},museum_after_dark:{glyph:"🏛",thread:M.plum,addr:"Museum After Dark, eastern wing · Curator Vale",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M14 38h46v5H14z" fill="#6D3E78"/><path d="M14 34h46v4H14z" fill="#3a2b46"/><rect x="8" y="24" width="58" height="10" fill="#6D3E78"/><rect x="18" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="34" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="50" y="28" width="6" height="18" fill="#F4E7C7"/><rect x="8" y="21" width="58" height="3" fill="#6D3E78"/></svg>'},rooftop_gardens:{glyph:"❧",thread:"#a8e6c9",addr:"Rooftop Gardens, the highest ledge · Sister Fern",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M12 44c8-6 12-18 10-30" stroke="#2e5d49" stroke-width="2" fill="none"/><path d="M14 34c6 0 10-3 12-9M16 26c5 1 10-1 14-7M18 40c7-2 10-6 12-12" stroke="#3f6f5a" stroke-width="1.5" fill="none"/><circle cx="40" cy="14" r="5" fill="#a8e6c9" opacity=".9"/></svg>'},canal_of_echoes:{glyph:"⌒",thread:M.moonBlue,addr:"Canal of Echoes, under the bridge · the ferryman",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M8 30a16 16 0 0 1 32 0v0a22 22 0 0 1 26-3" fill="none" stroke="#17233F" stroke-width="3"/><path d="M4 44h66" stroke="#5B79C8" stroke-width="3"/><path d="M10 44c3-2 7-2 10 0M30 44c3-2 7-2 10 0M50 44c3-2 7-2 10 0" stroke="#F4E7C7" stroke-width="1.5"/></svg>'},moonlit_arcade:{glyph:"✦",thread:M.plum,addr:"Moonlit Arcade, the midway · coin-wells and quiet stalls",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="6" y="12" width="15" height="24" rx="2" fill="#1f3050"/><rect x="25" y="12" width="15" height="24" rx="2" fill="#1f3050"/><path d="M6 34h15v4H6zM25 34h15v4H25z" fill="#5B79C8"/><rect x="48" y="18" width="9" height="11" rx="5" fill="#3a2b46"/><circle cx="64" cy="21" r="5" fill="#D6A84B"/><path d="M64 25v-8M60 22h8" stroke="#17233F" stroke-width="1.6"/><path d="M8 44h58" stroke="#17233F" stroke-width="2"/></svg>'},glasshouse_quarter:{glyph:"❀",thread:M.routeMint,addr:"Glasshouse Quarter, the sleeping market row · pressed flowers",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M10 44V28h54v16H10z" fill="#2e5d49" opacity=".9"/><path d="M16 28l6-12 6 12M32 28l5-10 5 10M48 28l6-12 6 12" stroke="#0f3a2e" stroke-width="2"/><rect x="34" y="8" width="6" height="16" rx="2" fill="#17233F"/><circle cx="37" cy="43" r="4" fill="#a8e6c9"/><circle cx="37" cy="43" r="1.5" fill="#17233F"/><path d="M34 48h6" stroke="#17233F" stroke-width="1.6"/></svg>'},sleepless_library:{glyph:"❖",thread:M.moonBlue,addr:"Sleepless Library, the shelf-aisles · lamps that never go out",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="8" y="20" width="58" height="22" rx="2" fill="#3a2b46"/><path d="M14 26h24M14 34h24M46 26h14M46 34h14" stroke="#5B79C8" stroke-width="2"/><path d="M20 46l10-5 8 7 10-8 8 6" stroke="#17233F" stroke-width="2" fill="none"/><rect x="50" y="6" width="16" height="11" rx="1" fill="#F4E7C7" stroke="#17233F"/><path d="M53 10h10M53 13h7" stroke="#17233F" stroke-width="1.5"/></svg>'},cloudline_station:{glyph:"Cl",thread:M.routeMint,addr:"Cloudline Station, the cable-yard platforms · mailbag grooms’ hooks",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M8 34h58" stroke="#D6A84B" stroke-width="2"/><path d="M12 34l7-12h10l-4 12M32 34l7-12h10l-4 12M52 34l7-12h10l-4 12" stroke="#17233F" stroke-width="2"/><path d="M10 30c6-4 12-2 14 4M30 30c6-4 12-2 14 4M50 30c6-4 12-2 14 4" stroke="#72D6C1" stroke-width="2" fill="none"/><path d="M20 14a5 5 0 0 1 10 0l-1 4h-8z" fill="#C74B55"/><path d="M48 14a5 5 0 0 1 10 0l-1 4h-8z" fill="#C74B55"/><path d="M6 46h62" stroke="#17233F" stroke-width="2"/></svg>'},aurora_borough:{glyph:"Au",thread:M.plum,addr:"Aurora Quarter, the roaming stalls-and-colonnades · lit awnings",motif:'<svg viewBox="0 0 74 54" fill="none"><rect x="6" y="10" width="18" height="26" rx="2" fill="#230f38"/><rect x="28" y="10" width="18" height="26" rx="2" fill="#230f38"/><rect x="50" y="10" width="18" height="26" rx="2" fill="#230f38"/><path d="M4 12h22M26 12h22M48 12h22" stroke="#6D3E78" stroke-width="4" opacity=".85"/><path d="M6 0l18 10v4L6 4zM28 0l18 10v4L28 4zM50 0l18 10v4L50 4z" fill="#5B79C8"/><rect x="28" y="24" width="18" height="12" fill="#F4E7C7"/><path d="M6 44h62" stroke="#17233F" stroke-width="2"/></svg>'},last_light_observatory:{glyph:"Ll",thread:M.moonBlue,addr:"Last Light, the catalogue cliff · the brass lens-house on the stair-tower",motif:'<svg viewBox="0 0 74 54" fill="none"><path d="M4 46L40 6l18 40z" fill="#17233F"/><path d="M46 20a9 9 0 0 1 0 16 9 9 0 0 1 0-16z" fill="#5B79C8" opacity=".9"/><circle cx="46" cy="28" r="3" fill="#F4E7C7"/><path d="M40 46l6-14 6 14z" fill="#D6A84B"/><path d="M6 42h6M18 42h6M30 42h6M50 42h6M62 42h6" stroke="#D6A84B" stroke-width="2"/></svg>'}};function pd(n){switch(n){case"clocktower_ward":return"CW";case"museum_after_dark":return"MU";case"rooftop_gardens":return"RG";case"canal_of_echoes":return"CA";case"lantern_lane":return"LL";case"rainmarket":return"RM";case"moonlit_arcade":return"MA";case"glasshouse_quarter":return"GQ";case"sleepless_library":return"SL";case"cloudline_station":return"CL";case"aurora_borough":return"AU";case"last_light_observatory":return"LL";default:return n.slice(0,2).toUpperCase()}}const lb=[{title:"Postal Circles",body:"Asynchronous shared delivery targets and grades — shipped only if D7 retention and economy simulations support them."},{title:"Expeditions & keepsakes",body:"A keepsake layer fueling old-district reuse; light v1 hooks already reachable through special deliveries."},{title:"Standing Orders",body:"A permanent Compass-Star sink for late-game upgrades. Revisited once a live single-currency loop exists."},{title:"Completion modifier",body:"A Prophecy-style chapter-completion multiplier, deferred per the research modify rule."},{title:"Cloud save · Showcase · 28-day track",body:"Account/cloud continuity, a shelf showcase, and a full mastery track — research-gated behind D1/D7 validation."},{title:"Priority Post decision",body:"Revisited only once a live cadence exists; nothing is promised, and nothing ships hidden behind it."}];class cb{root;cb;top;meters;seals;sortBtn;plumeFill;plume;panelLayer;ring;sortHeld=!1;reduceMotion;redrawShown=null;sealsCollapsed=!1;lastCoachSig="";postcardsBtn;morningPostBtn;specialBtn;rushBtn;modCard;ledgerChip;voyageNudge=!1;wanderBadge;_state=null;flatChip;meterSig="";officePapersBtn;cadenceStrip;settingsBtn;roundTripBtn;cosmeticsBtn;dawnVeil=null;dawnTimers=[];shelf;masteryRing=null;_lastFinale=null;_finaleActive=!1;constructor(e,t,i){this.root=e,this.cb=t,this.reduceMotion=i,this.root.innerHTML="",this.top=this.el("div","hud-top"),this.meters=this.el("div","hud-meters"),this.seals=this.el("div","seal-row"),this.panelLayer=this.el("div","hud-panel-layer"),this.ring=this.el("div","guide-ring"),this.ring.style.display="none";const r=this.el("div","hud-controls");this.plume=this.el("div","plume"),this.plumeFill=this.el("div","plume-fill"),this.plume.appendChild(this.plumeFill);const s=this.el("div","plume-cap");this.plume.appendChild(s),this.sortBtn=this.el("button","sort-btn"),this.sortBtn.textContent=Pe.sortHold,this.sortBtn.style.background=M.sealingRed,this.bindSortBtn(),r.appendChild(this.plume),r.appendChild(this.sortBtn),this.root.appendChild(this.top),this.root.appendChild(this.meters),this.root.appendChild(this.seals),this.root.appendChild(this.panelLayer),this.root.appendChild(r),this.root.appendChild(this.ring);const a=this.el("button","seal-toggle");a.textContent="SEALS",a.addEventListener("click",()=>{this.sealsCollapsed=!this.sealsCollapsed,this.seals.classList.toggle("collapsed",this.sealsCollapsed)}),this.root.appendChild(a),this.postcardsBtn=this.el("button","postcards-btn"),this.postcardsBtn.textContent=Pe.postcards.toUpperCase(),this.postcardsBtn.addEventListener("click",()=>this.showPostcardsPanel()),this.root.appendChild(this.postcardsBtn),this.officePapersBtn=this.el("button","officepapers-btn"),this.officePapersBtn.textContent=Pe.officePapers.toUpperCase(),this.officePapersBtn.addEventListener("click",()=>{this._state&&this.showMonetizationStubs(this._state)}),this.root.appendChild(this.officePapersBtn),this.settingsBtn=this.el("button","settings-btn"),this.settingsBtn.textContent=Pe.settingsBtn.toUpperCase(),this.settingsBtn.addEventListener("click",()=>this.showSettings()),this.root.appendChild(this.settingsBtn),this.roundTripBtn=this.el("button","roundtrip-btn"),this.roundTripBtn.textContent=Pe.roundTripBtn.toUpperCase(),this.roundTripBtn.addEventListener("click",()=>this.showRoundTrip()),this.root.appendChild(this.roundTripBtn),this.cosmeticsBtn=this.el("button","cosmetics-btn"),this.cosmeticsBtn.textContent="COSMETICS",this.cosmeticsBtn.addEventListener("click",()=>this.showCosmeticsPanel()),this.root.appendChild(this.cosmeticsBtn),this.morningPostBtn=this.el("button","morningpost-btn"),this.morningPostBtn.textContent=Pe.morningPost.toUpperCase(),this.morningPostBtn.addEventListener("click",()=>this.showMorningPost()),this.root.appendChild(this.morningPostBtn),this.specialBtn=this.el("button","special-btn"),this.specialBtn.textContent=Pe.specialDeliveries.toUpperCase(),this.specialBtn.addEventListener("click",()=>this.showSpecialDeliveries()),this.root.appendChild(this.specialBtn),this.rushBtn=this.el("button","rush-btn"),this.rushBtn.textContent=Pe.rushOrder.toUpperCase(),this.rushBtn.addEventListener("click",()=>{this.cb.onUseRush()&&this.rushBtn.classList.add("active")}),this.root.appendChild(this.rushBtn),this.modCard=this.el("div","mod-card"),this.root.appendChild(this.modCard),this.cadenceStrip=this.el("div","cadence-strip"),this.root.appendChild(this.cadenceStrip),this.ledgerChip=this.el("div","ledger-chip"),this.ledgerChip.title=yr.basis,this.root.appendChild(this.ledgerChip),this.flatChip=this.el("button","flat-chip"),this.flatChip.setAttribute("aria-label","Compass forecast"),this.flatChip.addEventListener("click",()=>this.openRedrawPanel()),this.root.appendChild(this.flatChip),this.wanderBadge=this.el("span","wander-badge"),this.wanderBadge.setAttribute("aria-label","wanderlight drifts by"),this.root.appendChild(this.wanderBadge),this.shelf=this.el("div","pc-shelf"),this.root.appendChild(this.shelf),this.panelLayer.addEventListener("pointerdown",o=>{o.target===this.panelLayer&&this.panelLayer.querySelector(".card-return")&&this.cb.onDismissMinor()}),this.injectCss()}el(e,t){const i=document.createElement(e);return t&&(i.className=t),i}bindSortBtn(){const e=i=>{i.preventDefault(),this.sortHeld=!0,this.sortBtn.classList.add("held"),this.cb.onSortHold(!0)},t=()=>{this.sortHeld&&(this.sortHeld=!1,this.sortBtn.classList.remove("held"),this.cb.onSortHold(!1))};this.sortBtn.addEventListener("pointerdown",e),this.sortBtn.addEventListener("pointerup",t),this.sortBtn.addEventListener("pointercancel",t),this.sortBtn.addEventListener("pointerleave",t)}get modalOpen(){return this.panelLayer.classList.contains("open")}get dawnActive(){return this.dawnVeil!=null}get redrawForecastShown(){return this.redrawShown}updateHud(e,t,i){this._state=e;const r=Ot[e.districtIndex],s=Math.floor(e.blocking.nightMs/1e3),a=`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;this.top.innerHTML=[`<span class="stat"><b>${Pe.postage}</b><i>${Ut(e.postage)}</i></span>`,`<span class="stat"><b>${Pe.waxSealsShort}</b><i>${br(e.ch2.waxSeals)}</i></span>`,`<span class="stat"><b>${Pe.stars}</b><i>${br(e.stars)}</i></span>`,`<span class="stat"><b>${r?r.name:"—"}</b><i>R${e.run+1} ${a}</i></span>`].join("");const o=Wx(e);if(this.postcardsBtn.classList.toggle("has-unread",o>0),o>0){if(!this.postcardsBtn.querySelector(".unread-dot")){const w=this.el("span","unread-dot");this.postcardsBtn.appendChild(w)}this.postcardsBtn.setAttribute("aria-label",`${o} new postcard${o===1?"":"s"}`)}else this.postcardsBtn.querySelector(".unread-dot")?.remove();const c=Ss(e,Date.now());this.morningPostBtn.classList.toggle("visible",c),c?this.morningPostBtn.classList.add("pulse"):this.morningPostBtn.classList.remove("pulse"),this.specialBtn.classList.toggle("visible",e.districtIndex>=2);const l=Date.now(),h=e.ch2.rush.activeEndTs!=null&&l<e.ch2.rush.activeEndTs;if(this.rushBtn.classList.toggle("visible",e.ch2.rush.held||h),this.rushBtn.classList.toggle("active",h),this.rushBtn.classList.toggle("disabled",!e.ch2.rush.held),h&&e.ch2.rush.activeEndTs!=null){const w=new Date(e.ch2.rush.activeEndTs).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});this.rushBtn.title=`${Pe.rushActiveUntil} ${w}`}else e.ch2.rush.held&&(this.rushBtn.title=Pe.rushHeld);{const T=e.ch2.districtsAnswered.includes(5)?bi(e,Date.now()):null;if(T){const y=ps[T.id],B=new Date(Ki(Date.now())).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),R=bi(e,Date.now()+864e5),L=Jx(e);this.modCard.classList.add("visible"),this.modCard.dataset.mod=T.id,this.modCard.innerHTML=`<span class="mod-glyph glyph-${y?.glyph??"rain-glaze"}"></span><span class="mod-name">${y?.name??T.id}</span><span class="mod-ends">${na.endsPrefix} ${B}</span><span class="mod-effect">${y?.effectLine??""}</span><span class="mod-forecast">${na.forecastDeltaLabel}: ${R?ps[R.id]?.name??R.id:"—"}</span>`+(L.flipped&&T.id==="backlog_surge"?'<span class="mod-chain">satchels bind tonight — the pile outruns the buckles</span>':"")}else this.modCard.classList.remove("visible"),this.modCard.innerHTML=""}{const w=sx(e,Date.now());if(w){const T=w.sky?ps[w.sky.modId]:null,y=w.sky?`<button class="cs-slot cs-sky" data-slot="sky" title="${T?.name??w.sky.modId}"><span class="mod-glyph glyph-${T?.glyph??"rain-glaze"}"></span><span class="cs-time">${w.sky.endsText}</span></button>`:"",B=w.hourglasses.map(k=>k.active?`<button class="cs-slot cs-hg" data-slot="hourglass" title="special delivery"><span class="cs-hg-fig"><span class="cs-hg-fill" style="height:${Math.round((k.fillFrac??0)*100)}%"></span></span><span class="cs-time">${k.emptyText}</span></button>`:'<span class="cs-slot cs-hg free" aria-label="free satchel"><span class="cs-hg-fig outline"></span></span>').join(""),R=`<button class="cs-slot cs-stamp${w.stamp.ready?" ready":""}" data-slot="stamp" title="Morning Post"><span class="cs-stamp-fig"></span><span class="cs-time">${w.stamp.ready?"ready":w.stamp.nextText??""}</span></button>`,L=`<button class="cs-slot cs-pips" data-slot="pips" title="doubler">${[0,1,2].map(k=>`<span class="cs-pip${k<w.pips.lit?"":" dim"}"></span>`).join("")}<span class="cs-time">${w.pips.lit}/3</span></button>`;this.cadenceStrip.innerHTML=y+B+R+L,this.cadenceStrip.classList.add("visible"),this.cadenceStrip.dataset.wired||(this.cadenceStrip.dataset.wired="1",this.cadenceStrip.addEventListener("click",k=>{const S=k.target.closest("[data-slot]");if(!S)return;const _=S.dataset.slot;_==="sky"?this.showModifierCard():_==="hourglass"?this.showSpecialDeliveries():_==="stamp"?this.showMorningPost():_==="pips"&&this.cb.onOpenReturnCard?.()}))}else this.cadenceStrip.classList.remove("visible"),this.cadenceStrip.innerHTML="";this.roundTripBtn.classList.toggle("visible",Ft(e)),this.cosmeticsBtn.classList.toggle("visible",Ft(e))}(e.hall.F8??0)>=3?(this.ledgerChip.classList.add("visible"),this.ledgerChip.innerHTML='<span class="hourglass"><i></i><i></i><i></i></span><span class="ledger-cap">8 h</span>'):(this.ledgerChip.classList.remove("visible"),this.ledgerChip.innerHTML="");const d=["desk","satchel","route","inflow"],p=d.map(w=>`${w}:${t.per[w].level}`).join("|");p!==this.meterSig&&(this.meterSig=p,this.meters.innerHTML="",this.buildMeters(d,t));const f=gl(e),g=Math.min(1,Math.max(0,e.perfect/Math.max(1e-6,f)));this.plumeFill.style.height=`${Math.round(g*100)}%`,this.plume.classList.toggle("gold",g>=.999),this.renderSeals(e,i);const x=Jo(e),m={rising:Pe.flatRising,settling:Pe.flatSettling,level:Pe.flatLevel},u=x.nudge?Pe.flatNudge:m[x.glyph];this.flatChip.innerHTML=`<span class="flat-pending">${Pe.pendingStarsShort} ${br(x.pending)}</span><span class="flat-label">${u}</span>`,this.flatChip.classList.toggle("flat-card",x.card||x.nudge),this.flatChip.classList.toggle("flat-nudge",x.nudge),this.flatChip.classList.toggle("voyage-nudge",this.voyageNudge),this.flatChip.dataset.glyph=this.voyageNudge?"compass-west":x.glyph}setVoyageNudge(e){this.voyageNudge=e}pulseFamilyBadge(e){const t=this.root.querySelector(`.meter-${e}`);t&&(t.classList.remove(this.reduceMotion?"fam-pulse-static":"fam-pulse"),t.offsetWidth,t.classList.add(this.reduceMotion?"fam-pulse-static":"fam-pulse"),setTimeout(()=>t.classList.remove("fam-pulse","fam-pulse-static"),1300))}buildMeters(e,t){for(const i of e){const r=Gc[i],s=t.per[i],a=this.el("button",`meter meter-${i} lvl-${s.level}`);a.dataset.kind=i,a.style.background=r.color;const o=this.el("span",`glyph glyph-${r.glyph}`);a.appendChild(o);const c=this.el("span",`badge badge-${r.badge}`);if(a.appendChild(c),s.level==="choke"){const l=this.el("span","choke-tri");a.appendChild(l)}a.setAttribute("aria-label",`${i} meter ${s.level}`),a.addEventListener("click",()=>this.cb.onOpenPanel(db[i])),this.meters.appendChild(a)}}showBottleneckPulse(e){const t=this.meters.querySelector(`[data-kind="${e}"]`);if(t){if(this.reduceMotion){t.classList.add("pulse-static");return}t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}}showWanderSpawnTick(){this.reduceMotion?(this.wanderBadge.classList.remove("tick-scale"),this.wanderBadge.classList.add("tick-op"),window.setTimeout(()=>this.wanderBadge.classList.remove("tick-op"),700)):(this.wanderBadge.classList.remove("tick-scale"),this.wanderBadge.offsetWidth,this.wanderBadge.classList.add("tick-scale"))}showWanderToast(e,t){const i=this.el("div","wander-toast"),r=document.createElement("span");if(r.innerHTML=`${Pe.wanderCaught}: +<b>${br(e)}</b> ${Pe.postage}`,i.appendChild(r),t){const o=this.el("span","wander-toast-seal");o.textContent=Pe.wanderSeal,i.appendChild(o)}this.root.appendChild(i);const s=performance.now(),a=()=>{const o=performance.now()-s,c=Math.min(24+o*.02,30),l=1-Math.max(0,(o-2100)/600);i.style.transform=`translateY(${-c}px)`,i.style.opacity=String(Math.max(0,Math.min(1,l))),o<2700?requestAnimationFrame(a):i.remove()};requestAnimationFrame(a)}renderSeals(e,t){const i=fh(e),r=[];r.push({id:"lantern",name:Pe.districtLL,stateText:"OPEN",rvFrac:1,rvText:"—",listFrac:1,listText:"—",action:{label:"—",enabled:!1,act:"none"},ticker:null,locked:!1});const s=(a,o)=>{const c=yn[a],l=e.blocking.gates[a],h=e.ch2.districtsAnswered.includes(c.to),d=a==="horizon",p=d&&$r(e),f=Al(e),g=h?{label:"OPEN",enabled:!1,act:"none"}:d&&!p?{label:Pe.redraw,enabled:t,act:"redraw"}:{label:`Bond ${Ut(c.bond)}`,enabled:l.listDone&&e.postage>=c.bond,act:"bond"};return{id:a,name:o,stateText:h?"OPEN":l.listDone?d&&!p?"SEALED — offers Redraw":"SEALED — bond ready":"SEALED",rvFrac:Math.min(1,i/c.rv),rvText:`${Ut(Math.min(i,c.rv))} / ${Ut(c.rv)}`,listFrac:Math.min(1,l.listValue/c.deliveryList),listText:`${Ut(Math.min(l.listValue,c.deliveryList))} / ${Ut(c.deliveryList)}`,action:g,ticker:d&&!p&&l.rvDone?`+${f} ★ pending`:null,locked:!h}};if(r.push(s("rainmarket",Pe.districtRM)),r.push(s("horizon",Pe.districtCW)),e.districtIndex>=2){const a=Mn(e);if(a&&a!=="horizon"){const o=yn[a],c=Ot[o.to];c&&r.push(s(a,c.name))}}this.seals.innerHTML="";for(const a of r){const o=this.el("div",`seal seal-${a.id}${a.locked?" locked":""}`);if(o.dataset.seal=a.id,o.innerHTML=`
        <div class="seal-head"><span class="seal-name">${a.name}</span><span class="seal-state">${a.stateText}</span></div>
        <div class="gauge"><span class="gauge-label">thread</span><div class="gauge-track"><div class="gauge-fill" style="width:${Math.round(a.rvFrac*100)}%"></div></div><span class="gauge-num">${a.rvText}</span></div>
        <div class="gauge"><span class="gauge-label">list</span><div class="gauge-track"><div class="gauge-fill list" style="width:${Math.round(a.listFrac*100)}%"></div></div><span class="gauge-num">${a.listText}</span></div>
        ${a.ticker?`<div class="ticker">${a.ticker}</div>`:""}
      `,a.id==="horizon"&&!e.ch2.districtsAnswered.includes(2)){const l=this.el("span","seal-silhouette");o.querySelector(".seal-head")?.appendChild(l)}const c=this.el("button","seal-action");c.textContent=a.action.label,c.disabled=!a.action.enabled,a.action.act==="bond"&&c.addEventListener("click",()=>this.cb.onBond()),a.action.act==="redraw"&&c.addEventListener("click",()=>this.openRedrawPanel()),o.appendChild(c),this.seals.appendChild(o)}}hidePanel(){this.panelLayer.innerHTML="",this.panelLayer.classList.remove("open"),this.ring.style.display="none"}frame(e){this.panelLayer.innerHTML="";const t=this.el("div","card");return t.innerHTML=`<h3>${e}</h3>`,this.panelLayer.appendChild(t),this.panelLayer.classList.add("open"),t}closeBtn(e,t="Close"){const i=this.el("button","buy ghost");i.textContent=t,i.addEventListener("click",()=>this.hidePanel()),e.appendChild(i)}purchasePunch(e){this.reduceMotion||(e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"))}showFamilyPanel(e,t){if(t==="hall")return this.showUpgradePanel(e);const i=Gc[t==="desk"?"desk":t==="satchel"?"satchel":"route"].glyph,r=this.frame(`${i} — ${t}`),s=t==="desk"?e.desks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:mn.caps.length-1,label:`pad${o+1}`})):t==="satchel"?e.racks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Gn.rates.length-1,label:`rack${o+1}`})):e.lanes.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:zn.rates.length-1,label:`lane${o+1}`}));for(const a of s)if(a.unlocked){const o=a.tier>=a.maxTier,c=t==="desk"?Ml(e,a.idx):t==="satchel"?wl(e,a.idx):Tl(e,a.idx),l=e.postage>=c;this.buyRow(r,`${a.label} T${a.tier+1}${o?" (max)":""}`,c,!o&&l,h=>{this.cb.onBuy(t,a.idx),this.purchasePunch(h)})}else{const o=t==="desk"?yl(e,a.idx):t==="satchel"?Sl(e,a.idx):El(e,a.idx),c=e.postage>=o;this.buyRow(r,`${a.label} (locked)`,o,c,l=>{this.cb.onBuy(t,a.idx),this.purchasePunch(l)})}this.closeBtn(r)}buyRow(e,t,i,r,s){const a=this.el("div","row");a.innerHTML=`<span class="name">${t}</span>`;const o=this.el("button",`buy${r?"":" dim"}`);o.textContent=`${Pe.buy} ${isFinite(i)?Ut(i):"max"}`,o.disabled=!r,o.addEventListener("click",c=>{c.stopPropagation(),s(o)}),a.appendChild(o),e.appendChild(a)}showUpgradePanel(e){const t=this.frame("Hall"),i=Object.values(en);for(const r of i){const s=r.id,a=e.hall[s]??0,o=a>=r.tiers,c=o?1/0:r.cost[a]??1/0,l=r.conditionDistrictId?a>=1&&!e.ch2.districtsAnswered.includes(Ot.findIndex(p=>p.id===r.conditionDistrictId)):!1,h=this.el("div","row");h.innerHTML=`<span class="name">${r.label}</span><span class="lvl">L${a}${o?" max":""}${l?" · needs Clocktower Ward":""}</span>`;const d=this.el("button",`buy${e.postage>=c&&!l?"":" dim"}`);d.textContent=l?"Locked":`${Pe.buy} ${isFinite(c)?Ut(c):"max"}`,d.disabled=l||e.postage<c||!isFinite(c),d.addEventListener("click",p=>{p.stopPropagation(),this.cb.onBuy("hall",s),this.purchasePunch(d)}),h.appendChild(d),t.appendChild(h)}this.closeBtn(t)}voyageLogHtml(){if(!this._state||!this._state.ch2.districtsAnswered.includes(5))return"";const e=Uh(this._state),t=e.rows.slice(-4),i=e.deltas.length?`<div class="voyage-deltas">${e.deltas.map(a=>`<span class="${a>1?"vd-hot":"vd-cold"}">+${a}★</span>`).join("")}</div>`:"",r=e.sealShare>=1||e.etaH==null?"":e.etaH<6?`<p class="voyage-eta near">the seal is close — finish it (≈${e.etaH.toFixed(1)} h at this pace)</p>`:`<p class="voyage-eta">seal-ETA ≈ ${e.etaH.toFixed(1)} h at this pace</p>`;return'<div class="voyage-log"><div class="voyage-head"><span class="voyage-glyph">◈</span> voyage log</div>'+(t.length?t.map(a=>`<div class="voyage-row"><span>R${a.idx} return</span><span>+${a.delta}★ · seal ${(a.sealShare*100).toFixed(0)}%</span></div>`).join(""):'<div class="voyage-row"><span>no returns logged this voyage yet</span></div>')+i+r+(this.voyageNudge?'<p class="voyage-nudge-line">the wall has gone quiet — the seal reads far; bank the night</p>':"")+"</div>"}openRedrawPanel(){const e=this.cb.onRedrawOpen();if(!e)return;this.redrawShown=e;const t=this.frame(Pe.redraw);t.classList.add("card-redraw"),t.insertAdjacentHTML("beforeend",`
      <p class="forecast"><b>${br(e.starsPending)}</b> ${Pe.stars} pending</p>
      <p class="earned">booked this run: ${Ut(e.earnedBooked)}</p>
      <div class="preview">
        <div class="keep"><b>Kept:</b><ul>${hb(this._state).map(r=>`<li>${r}</li>`).join("")}</ul></div>
        <div class="lost"><b>Lost:</b><ul>${Sr.lost.map(r=>`<li>${r}</li>`).join("")}</ul></div>
      </div>${this.voyageLogHtml()}`);const i=this.el("button","buy big");i.textContent=`${Pe.redraw} — claim ${br(e.starsPending)} ★`,i.addEventListener("click",()=>this.cb.onRedrawConfirm()),t.appendChild(i),this.closeBtn(t,"Not yet")}showReturnCard(e,t){const i=nx(t,e,Date.now()),r=this.frame(i.postReply?i.title??hs.title:hs.title);if(r.classList.add("card-return"),e.kind==="never-empty")r.insertAdjacentHTML("beforeend",`<p class="ledger-line">${hs.neverEmpty}</p>`);else if(i.postReply){r.insertAdjacentHTML("beforeend",`<p class="ledger-line">${i.awayLine}</p>
         <p class="ledger-line big">Letters settled without you: <b>+${Ut(e.base)}</b></p>`),i.streakRibbon.rowText&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line streak">${i.streakRibbon.rowText}</p>`),e.medianRate!=null&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line basis">${yr.basis}</p>`),e.trim>0&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line trim">${Er.trimmedLine} <span class="trim-amt">(held back ${Ut(e.raw)} → ${Ut(e.base)})</span></p>`),t.liveMod?.id==="long_shadows"&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line longshot">${yr.longShadows}</p>`);const a=this.el("p","doubler-pips");if(a.innerHTML=[0,1,2].map(o=>`<span class="dbl-pip${o<i.doubler.pipsLit?"":" dim"}"></span>`).join(""),r.appendChild(a),!i.doubler.capped){const o=this.el("div","dbl-choice"),c=this.el("button","buy big");c.textContent=i.doubler.doubleLabel,c.addEventListener("click",()=>this.cb.onDouble());const l=this.el("button","buy big");l.textContent=i.doubler.collectLabel,l.addEventListener("click",()=>this.cb.onDismissMinor()),o.appendChild(c),o.appendChild(l),r.appendChild(o);return}r.insertAdjacentHTML("beforeend",`<p class="ledger-line cap">${i.doubler.capQuietLine}</p>`)}else{const a=Math.floor(e.elapsedS/3600),o=Math.floor(e.elapsedS%3600/60),c=Math.floor(e.capS/3600),l=Math.floor(e.capS%3600/60);if(r.insertAdjacentHTML("beforeend",`
        <p class="ledger-line">Away ${a} h ${String(o).padStart(2,"0")} min · Ledger holds ${c} h ${String(l).padStart(2,"0")} min</p>
        <p class="ledger-line big">Letters settled without you: <b>+${Ut(e.base)}</b></p>`),e.medianRate!=null&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line basis">${yr.basis}</p>`),e.trim>0&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line trim">${yr.trim} <span class="trim-amt">(held back ${Ut(e.raw)} → ${Ut(e.base)})</span></p>`),t.liveMod?.id==="long_shadows"&&r.insertAdjacentHTML("beforeend",`<p class="ledger-line longshot">${yr.longShadows}</p>`),e.doublerLeftToday>0){const h=this.el("button","buy big");h.textContent=`${hs.doubler} · ${e.doublerLeftToday} left today`,h.addEventListener("click",()=>this.cb.onDouble()),r.appendChild(h)}}const s=this.el("button",`buy ${e.kind==="ledger"?i.postReply&&i.doubler.capped?"big":"ghost":"big"}`);s.textContent=hs.collect,s.addEventListener("click",()=>this.cb.onDismissMinor()),r.appendChild(s)}showMonetizationStubs(e){this.showOfficePapers(e)}showOfficePapers(e,t){const i=dx(e);e.ch5.stubs.seen.never_row=!0;const r=this.frame(i.label);r.classList.add("card-office-papers"),r.insertAdjacentHTML("beforeend",`<p class="row stub-banner">${i.banner}</p>`),t?.railLine&&r.insertAdjacentHTML("beforeend",`<p class="tray-rail-line"><b>Mara:</b> ${t.railLine}</p>`);for(const a of i.cards){const o=this.el("button",`tray-row ${a.frame}${a.seen?" seen":""}`);o.innerHTML=`<span class="tray-motif motif-${a.motif}"></span><span class="name">${a.title}</span><span class="price">${a.priceLine}</span>`,o.addEventListener("click",()=>this.showStubCardDetail(a.id)),r.appendChild(o)}r.insertAdjacentHTML("beforeend",`<p class="row never-row">${i.neverRow.text}</p>`),r.insertAdjacentHTML("beforeend",`<p class="row stub-footer">${i.footer}</p>`);const s=this.el("button","buy ghost");s.textContent=Pe.roadmap,s.addEventListener("click",()=>this.showRoadmap()),r.appendChild(s),this.closeBtn(r)}showStubCardDetail(e){if(!this._state)return;const t=fx(this._state,e,Date.now()),i=this.frame(t.title);if(i.classList.add("card-stub-detail",`frame-${t.frame}`),i.insertAdjacentHTML("beforeend",`<p class="stub-banner inframe">${t.banner}</p>`),i.insertAdjacentHTML("beforeend",`<div class="stub-motif-large motif-${t.motif}"></div>`+t.body.map(a=>`<p class="stub-line">${a}</p>`).join("")+(t.honesty?`<p class="stub-honesty">${t.honesty}</p>`:"")),t.album){const a=t.album;i.insertAdjacentHTML("beforeend",`<div class="album-meter"><div class="album-meter-fill" style="height:${Math.round(a.fillFrac*100)}%"></div><span class="album-meter-read">${a.credits}/${a.cap} · level ${a.level}</span></div>`)}const r=this.el("button","buy ghost stub-price");r.textContent=t.priceLine,r.addEventListener("click",()=>{this._state&&(gx(this._state,e,Date.now()),i.classList.remove("banner-flash"),i.offsetWidth,i.classList.add("banner-flash"))}),i.appendChild(r);const s=this.el("button","buy big");s.textContent="Put it away",s.addEventListener("click",()=>{this._state&&mx(this._state,e,Date.now()),this._state&&this.showOfficePapers(this._state)}),i.appendChild(s)}showRoadmap(){const e=this.frame(Pe.roadmap);e.classList.add("card-roadmap"),e.insertAdjacentHTML("beforeend",'<p class="roadmap-intro">Built through the Last Light reply, this web build is complete as designed. Nothing here is for sale. Where money could ever live is published below, honestly, and it stays that way unless it is ever proposed and reviewed.</p>');for(const t of lb)e.insertAdjacentHTML("beforeend",`<div class="roadmap-item"><b>${t.title}</b><p>${t.body}</p></div>`);this.closeBtn(e)}startDawnOverlay(e,t={}){if(e.reducedMotion||this.reduceMotion){this.showDawnStatic(e,t.replay===!0);return}this.clearDawnOverlay();const i=this.el("div","dawn-veil");i.innerHTML=`<div class="dawn-caption"><b>${Pe.dawnTitle}</b><span class="dawn-mara">${e.maraLine}</span><span class="dawn-phase-note">the backlog is handled — the hall idles</span><span class="dawn-pip-note">Pip is asleep on a mailbag (placeholder pose) · Mara is filing</span></div><div class="dawn-hairline"><i></i></div>`,this.root.appendChild(i),this.dawnVeil=i;const r=()=>{this.dawnVeil&&(this.clearDawnOverlay(),this.cb.onDawnComplete?.())};i.addEventListener("pointerdown",r);const s=[],a=(o,c)=>s.push(window.setTimeout(c,o*1e3));this.dawnTimers=s,a(0,()=>i.classList.add("ph-grade-quiet")),a(e.phases[1].fromS,()=>i.classList.add("ph-desk-hold")),a(e.phases[2].fromS,()=>i.classList.add("ph-map-idle")),a(e.phases[3].fromS,()=>{i.classList.add("ph-control-return"),this.cadenceStrip.classList.add("strip-slide-in"),window.setTimeout(()=>this.cadenceStrip.classList.remove("strip-slide-in"),1200);const o=i.querySelector(".dawn-phase-note");o&&(o.textContent=e.stripLine)}),a(e.durationS,r)}showDawnStatic(e,t=!1){const i=this.frame(Pe.dawnTitle);i.classList.add("card-dawn"),i.insertAdjacentHTML("beforeend",`<p class="dawn-line">${e.maraLine}</p><p class="dawn-note">${t?Ur.replayLabel:"one night, remembered"}</p><p class="dawn-idle">Pip is asleep on a mailbag. Mara files the night's logbook.</p>`);const r=this.el("button","buy big");r.textContent=t?"Close":"OK",r.addEventListener("click",()=>{this.hidePanel(),t||this.cb.onDawnComplete?.()}),i.appendChild(r)}showDawn(e,t=!1){const i={phases:[{phase:"grade-quiet",fromS:0,toS:4},{phase:"desk-hold",fromS:4,toS:9},{phase:"map-idle",fromS:9,toS:13},{phase:"control-return",fromS:13,toS:15}],durationS:Ur.durationS,reducedMotion:!0,maraLine:fn.dawn.copy,stripLine:fn.strip.copy,wallSSinceReply:null};this.showDawnStatic(i,t)}clearDawnOverlay(){for(const e of this.dawnTimers)window.clearTimeout(e);this.dawnTimers=[],this.dawnVeil&&(this.dawnVeil.remove(),this.dawnVeil=null)}showNotificationInvite(e){if(e.ch5.a2.state!=="card_pending")return;const t=this.frame(Qn.cardTitle);t.classList.add("card-notify"),t.insertAdjacentHTML("beforeend",`<p class="notify-body">${Qn.cardBody}</p>`),t.insertAdjacentHTML("beforeend",`<p class="notify-quiet">Quiet hours ${jo.quietHoursLocal.fromH}:00–${String(jo.quietHoursLocal.toH).padStart(2,"0")}:00, always.</p>`);const i=this.el("button","buy big");i.textContent=Qn.turnOn,i.addEventListener("click",()=>this.cb.onNotifyTurnOn?.()),t.appendChild(i);const r=this.el("button","buy ghost");r.textContent=Qn.notNow,r.addEventListener("click",()=>this.cb.onNotifyDismiss()),t.appendChild(r)}showNotifyBanner(e){const t=this.el("div","notify-banner");t.innerHTML=`<b>${e.title}</b><span>${e.body}</span>`,this.root.appendChild(t),window.setTimeout(()=>t.classList.add("out"),4200),window.setTimeout(()=>t.remove(),5e3)}showFinaleReplayNote(){const e=this.frame(ni.cardTitle);e.classList.add("card-finale"),e.insertAdjacentHTML("beforeend",`<p class="finale-line">${ni.pipQuietLine}</p><p class="finale-line">${ni.maraSignLine}</p>`),this.closeBtn(e,"Close")}showSettings(){if(!this._state)return;const t=this._state.ch5.a2,i=this.frame(Pe.settingsBtn);i.classList.add("card-settings");const r=t.state==="enabled"||t.state==="enabled_partial"?"on":"off",s=t.state==="blocked_by_browser";if(i.insertAdjacentHTML("beforeend",`<p class="set-row"><span class="set-bell${r==="on"?" notch":""}"></span>${s?Qn.blockedByBrowser:Qn.settingsRow(r)}</p>`),!s){const a=this.el("button","buy ghost");a.textContent=r==="on"?"Turn notifications off":"Turn notifications on",a.addEventListener("click",()=>this.cb.onNotifySettingsToggle?.(r!=="on")),i.appendChild(a)}if(r==="on"){const a=[{id:"return_ready",label:"Ledger full — once per gap"},{id:"rotation",label:"Tonight's sky — once a day"},{id:"mastery",label:"A record falls — rarely"}];for(const l of a){const h=this.el("label","set-channel"),d=document.createElement("input");d.type="checkbox",d.checked=t.channels[l.id],d.addEventListener("change",()=>this.cb.onNotifySetChannel?.(l.id,d.checked)),h.appendChild(d),h.insertAdjacentHTML("beforeend",`<span>${l.label}</span>`),i.appendChild(h)}const o=this.el("label","set-channel"),c=document.createElement("input");c.type="number",c.min="0",c.max="23",c.value=String(t.rotationHourLocal),c.addEventListener("change",()=>this.cb.onNotifyRotationHour?.(Number(c.value))),o.appendChild(c),o.insertAdjacentHTML("beforeend","<span>daily sky read at (local hour)</span>"),i.appendChild(o)}i.insertAdjacentHTML("beforeend",`<p class="set-row">Reduced motion — ${this.reduceMotion?"on (from your device)":"off (from your device)"}</p>`),this.closeBtn(i)}showModifierCard(){if(!this._state)return;const e=this._state,t=bi(e,Date.now());if(!t)return;const i=ps[t.id],r=this.frame(i?.name??t.id);r.classList.add("card-modifier");const s=Or(Ki(Date.now())),a=bi(e,Date.now()+864e5);r.insertAdjacentHTML("beforeend",`<p class="mod-detail-line"><span class="mod-glyph glyph-${i?.glyph??"rain-glaze"}"></span> ${i?.effectLine??t.id}</p>
       <p class="mod-detail-line">${na.endsPrefix} ${s}</p>
       <p class="mod-detail-line forecast">${na.forecastDeltaLabel}: ${a?ps[a.id]?.name??a.id:"—"}</p>`),this.closeBtn(r)}showSdRefusal(e){const t=this.frame(Pe.specialDeliveries);t.classList.add("card-sd-refusal"),t.insertAdjacentHTML("beforeend",`<p class="sd-refusal-line">${e}</p>`);const i=this.el("button","buy big");i.textContent="Back to the board",i.addEventListener("click",()=>this.showSpecialDeliveries()),t.appendChild(i)}showRoundTrip(){if(!this._state)return;const e=this._state,t=rb(e),i=this.frame(Pe.roundTripBtn);if(i.classList.add("card-roundtrip"),!t.open){i.insertAdjacentHTML("beforeend",`<p class="empty">${t.lockedLine}</p>`),this.closeBtn(i);return}for(const r of Oh(e)){const s=this.el("div","rt-row");s.title=r.tooltip;const a=this.districtName(r.district);if(s.innerHTML=`<span class="rt-name">${a}</span><span class="rt-ring">${[r.done.A,r.done.B,r.done.C].map(o=>`<i class="${o?"filled":""}"></i>`).join("")}</span><span class="rt-count">${r.tooltip}</span>`,r.district==="last_light_observatory"){const o=this.el("div","rt-replays"),c=this.el("button","buy ghost replay-chip");c.textContent=ni.replayLabel,c.addEventListener("click",()=>this.cb.onReplayFinale?.());const l=this.el("button","buy ghost replay-chip");l.textContent=Ur.replayLabel,l.addEventListener("click",()=>this.cb.onReplayDawn?.()),o.appendChild(c),o.appendChild(l),s.appendChild(o)}i.appendChild(s)}this.closeBtn(i)}showCosmeticsPanel(){if(!this._state)return;const e=sb(this._state),t=this.frame("Wardroom");if(t.classList.add("card-cosmetics"),!e.open){t.insertAdjacentHTML("beforeend",`<p class="empty">${e.lockedLine}</p>`),this.closeBtn(t);return}t.insertAdjacentHTML("beforeend",`<p class="cs-jar">${e.jar} ${Pe.waxSealsShort} · ${e.owned.length}/${B_.fullSet} owned</p>`);const i={desk:"Desk",rack:"Satchel Rack",map_frame:"Map Frame",pip:"Pip Costumes"};for(const r of Object.keys(ma)){const s=this.el("div","cs-slot");s.insertAdjacentHTML("beforeend",`<h4>${i[r]}</h4>`);for(const a of ma[r]){const o=e.owned.includes(a.id),c=e.equipped[r]===a.id,l=this.el("div",`cs-row${c?" equipped":""}${o?" owned":""}`);if(l.insertAdjacentHTML("beforeend",`<span class="cs-name">${a.name}</span>`),o)if(c)l.insertAdjacentHTML("beforeend",'<span class="cs-state">Equipped</span>');else{const h=this.el("button","buy ghost small");h.textContent=nh.equipFree,h.addEventListener("click",()=>{this.cb.onEquipCosmetic?.(r,a.id),this.showCosmeticsPanel()}),l.appendChild(h)}else{const h=e.jar>=a.cost,d=this.el("button",`buy small${h?"":" disabled"}`);d.textContent=`${a.cost} ${Pe.waxSealsShort}`,d.disabled=!h,d.addEventListener("click",()=>{this.cb.onBuyCosmetic?.(r,a.id)===!0&&this.showCosmeticsPanel()}),l.appendChild(d)}s.appendChild(l)}t.appendChild(s)}this.closeBtn(t)}showPostcardsPanel(){const e=this.frame(Pe.postcards);if(e.classList.add("card-postcards"),!this._state)return;const t=ha(this._state),i=[];for(const r of t){const s=i.find(a=>a.district===r.story.districtId);s?s.items.push(r):i.push({district:r.story.districtId,items:[r]})}if(i.length===0){e.insertAdjacentHTML("beforeend",`</div><p class="empty">${Pe.postcardsEmpty}</p>`);return}for(const r of i){const s=this.districtName(r.district),a=this.el("div","pc-group");a.insertAdjacentHTML("beforeend",`<h4>${s}</h4>`);for(const o of r.items){const c=this.el("button",`pc-row${o.unlocked?o.read?" read":" new":" locked"}${o.unlocked&&!o.read?" stamp-chip":""}`),l=Yn[o.story.districtId]?.thread??"#72D6C1",h=o.unlocked&&!o.read?`<span class="pc-chip" style="background:${l}"></span>`:"";c.insertAdjacentHTML("beforeend",`${h}<span class="pc-slot">#${o.story.slot}</span><span class="pc-subject">${o.unlocked?o.story.subject:Pe.postcardsLocked}</span><span class="pc-state">${o.read?Pe.postcardRead:o.unlocked?Pe.postcardNew:"🔒"}</span>`),o.unlocked&&c.addEventListener("click",()=>this.openPostcardStory(o.story.id)),a.appendChild(c)}e.appendChild(a)}this.closeBtn(e)}openPostcardStory(e){this.showPostcardDetail(e)&&this.cb.onReadPostcard(e)}showPostcardDetail(e){if(!this._state)return null;let t;for(const a of ha(this._state))if(a.story.id===e){t=a;break}if(!t||!t.unlocked)return null;const i=t.story,r=this.frame(Pe.postcards);r.classList.add("card-postcard-story");const s=t.read?"":this.postcardRings(i.districtId);return r.insertAdjacentHTML("beforeend",`<p class="pc-meta">${this.districtName(i.districtId)} · #${i.slot}</p>
       ${this.postcardFurniture(i.districtId)}
       ${s}
       <h3 class="pc-subject">${i.subject}</h3>
       <p class="pc-sender">— ${i.sender}</p>
       <p class="pc-body">${i.body}</p>
       <p class="pc-reaction">${i.reaction}</p>
       ${i.slot===3?`<p class="pc-seal">+1 ${Pe.waxSealsShort}</p>`:""}`),this.closeBtn(r),r}postcardRings(e){const t=Yn[e]??Yn.lantern_lane,i=Ot.findIndex(o=>o.id===e),r=Math.max(1,i+1)%12||12,s=r/12,a=`${Math.round(s*360)}deg`;return`<div class="pc-rings">
       <div class="pc-ring" style="--ring:${t.thread};--sweep:${a}">
         <span class="pc-ring-glyph">${t.glyph}</span>
         <span class="pc-ring-pos">#${r}</span>
       </div>
       <div class="pc-ring pc-ring-expiry">
         <span class="pc-ring-pos">match the day</span>
       </div>
     </div>`}postcardFurniture(e){const t=Yn[e]??Yn.lantern_lane,i=this.nightDate();return`<div class="pc-stage">
       <div class="pc-stamp jagged"><span class="pc-stamp-glyph">${t.glyph}</span></div>
       <div class="pc-postmark"><span class="pm-city">${pd(e)}</span><span class="pm-date">${i}</span></div>
       <div class="pc-addr"><span class="pc-addr-line">${t.addr}</span></div>
       <div class="pc-motif">${t.motif}</div>
     </div>`}nightDate(){const e=this._state?.blocking.nightMs??0,t=Math.floor(e/6e4)+1;return`NIGHT ${String(Math.max(1,t)).padStart(2,"0")}`}districtName(e){const t=Ot.find(i=>i.id===e);return t?t.name:e}showMorningPost(){if(!this._state)return;const e=this.frame(Pe.morningPost);e.classList.add("card-morningpost");const t=Ot[this._state.districtIndex],i=t?oi.grantByFrontier[t.id]??0:0;if(e.insertAdjacentHTML("beforeend",`<p class="mp-prompt">${Pe.morningPostPrompt}</p>
       ${i>0?`<p class="mp-grant">${Pe.morningPostGranted}: <b>${Ut(i)} ${Pe.postage}</b></p>`:""}`),i>0){const r=this.el("button","buy");r.textContent=Pe.claim,r.addEventListener("click",()=>{this.cb.onClaimMorningPost()>0&&this.morningPostBtn.classList.remove("visible","pulse")}),e.appendChild(r)}{const r=this._state.ch2.morningPost.lastClaimTs,s=oi.cadenceH*36e5,a=r==null?null:r+s;if(a!=null){const o=Math.max(0,a-Date.now()),c=Math.floor(o/36e5),l=Math.ceil(o%36e5/6e4);e.insertAdjacentHTML("beforeend",`<p class="mp-next">${Pe.morningPostNextIn} ${c} h ${String(l).padStart(2,"0")} m · ${Pe.morningPostHeldNote}</p>`)}}this.closeBtn(e)}showSpecialDeliveries(){if(!this._state)return;const e=this._state,t=this.frame(Pe.specialDeliveries);t.classList.add("card-special");const i=Date.now();let r=0;for(const s of kn.recipes){if(!(_h(e,s)||ib(e,s.id))){if(s.rush&&e.ch2.districtsAnswered.includes(7)){r++;const g=this.el("div","sd-block sd-brass-locked");g.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4><p class="sd-cost brass">${K_.sd7Preview}</p><p class="sd-end">stamps gather — the brass flips when the Arcade keeps writing</p>`),t.appendChild(g)}continue}r++;const c=e.ch2.specialDeliveries.active.find(g=>g.recipeId===s.id&&!g.claimed),l=Hv(e,s.id,i),h=Object.entries(s.stamps).map(([g,x])=>`${x} ${this.districtName(g)}`).join(" + "),d=Object.entries(s.stamps).map(([g,x])=>`${Math.min(e.ch2.stampInventory[g]??0,x)}/${x}`).join(" · "),p=this.el("div","sd-block");c&&p.classList.add("active"),p.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4>
         <p class="sd-cost">${h}<br><span class="sd-have">${Pe.specialStamps}: ${d}</span></p>`);const f=this.el("div","sd-chips");for(const[g,x]of Object.entries(s.stamps)){const m=e.ch2.stampInventory[g]??0,u=m>=250,w=this.el("span",`sd-chip${u?" capped":""}`);w.textContent=`${this.districtName(g)} ${u?"250 cap":m}`,w.title=`${Pe.specialStamps}: ${m}/250`,f.appendChild(w)}if(p.appendChild(f),c){const g=s.timerH*36e5,x=Math.min(1,Math.max(0,1-(c.endTs-i)/g)),m=this.el("span","sd-ring");m.style.setProperty("--frac",`${Math.round(x*360)}deg`),p.appendChild(m);const u=new Date(c.endTs).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});p.insertAdjacentHTML("beforeend",`<p class="sd-end">${l?Pe.specialReady:`${Pe.specialEndsAt} ${u}`}</p>`);const w=this.el("button","buy");w.textContent=l?Pe.specialReady:Pe.specialActive,w.disabled=!l,l&&w.addEventListener("click",()=>{this.cb.onClaimSpecial(s.id)>0&&this.hidePanel()}),p.appendChild(w)}else{const g=vh(e,s),x=this.el("button","buy");x.textContent=Pe.specialStart,x.disabled=!g,g&&x.addEventListener("click",()=>{this.cb.onActivateSpecial(s.id)&&this.hidePanel()}),p.appendChild(x)}t.appendChild(p)}r===0&&t.insertAdjacentHTML("beforeend",`<p class="empty">${Pe.specialEmpty}</p>`),this.closeBtn(t)}showCoach(e,t){this.lastCoachSig=e.beat;const i=e.speaker?`<b>${e.speaker==="Pip"?"Pip":"Mara"}:</b> `:"",r=this.frame(`${e.speaker??"First Night"}`);r.classList.add("card-coach"),r.insertAdjacentHTML("beforeend",`<p>${i}${e.copy??e.beat}</p>`),e.grantAmount!=null&&r.insertAdjacentHTML("beforeend",`<p class="grant">+${Ut(e.grantAmount)} ${Pe.postage} (First Night ${e.grantId})</p>`),e.rail&&r.insertAdjacentHTML("beforeend",`<p class="rail-note">Rail: ${e.rail.note}</p>`);const s=this.el("button","buy big");if(s.textContent="OK",s.addEventListener("click",()=>{this.ring.style.display="none",this.cb.onDismissMinor()}),r.appendChild(s),this.ring.style.display=t?"block":"none",t){const a=t.getBoundingClientRect(),o=this.root.getBoundingClientRect();this.ring.style.left=`${a.left-o.left-6}px`,this.ring.style.top=`${a.top-o.top-6}px`,this.ring.style.width=`${a.width+12}px`,this.ring.style.height=`${a.height+12}px`}}anchorFor(e){return e?e==="sort"?this.sortBtn:e.startsWith("seal-")?this.seals.querySelector(`[data-seal="${e.slice(5)}"]`):this.meters.querySelector(`[data-kind="${e}"]`):null}get lastCoach(){return this.lastCoachSig}fillMasteryRing(e){if(this.masteryRing)return;const t=this.el("div","ring-mastery");t.dataset.district=e.district;const i=Math.max(0,Math.min(12,e.segments)),r=`${Math.round(i/12*360)}deg`;t.style.setProperty("--segments",String(i)),t.style.setProperty("--sweep",r);const s=Yn[e.district]?.glyph??pd(e.district);t.setAttribute("aria-label",`${s} mastery ${i}/12`),this.reduceMotion?t.classList.add("static"):(t.classList.add("fill"),t.offsetWidth),this.root.appendChild(t),this.masteryRing=t}updatePostcardShelf(e){const t=ha(e).filter(i=>i.unlocked&&!i.read);if(this.shelf.innerHTML="",t.length===0){this.shelf.classList.remove("has");return}this.shelf.classList.add("has");for(const i of t){const r=Yn[i.story.districtId]??Yn.lantern_lane,s=this.el("button","pc-shelf-chip");s.style.setProperty("--chip-thread",r.thread),s.textContent=r.glyph,s.title=`${this.districtName(i.story.districtId)} · #${i.story.slot}`,s.setAttribute("aria-label",`unread postcard: ${this.districtName(i.story.districtId)}`),s.addEventListener("click",()=>this.openPostcardStory(i.story.id)),this.shelf.appendChild(s)}}showReplayControl(e){const t=e.ch2.districtsAnswered.includes(11)||!!this._lastFinale,i=this.root.querySelector(".replay-reply-btn");if(!this._lastFinale){i?.remove();return}if(!t){i?.remove();return}if(i)return;const r=this.el("button","replay-reply-btn");r.textContent=this._lastFinale?.timeline.replayLabel??"Replay the reply",r.addEventListener("click",()=>{this._state&&this._lastFinale&&this.playFinale(this._lastFinale,this._state)}),this.root.appendChild(r)}playFinale(e,t){this._state=t??this._state,this._lastFinale=e,this._finaleActive&&(this.panelLayer.querySelector(".card-finale")?.remove(),this._finaleActive=!1);const i=this.el("div","card card-finale");this.panelLayer.innerHTML="",this.panelLayer.appendChild(i),this.panelLayer.classList.add("open");const r=e.timeline;if(e.reducedMotion){const m=Yn.last_light_observatory.glyph;i.innerHTML=`<div class="finale-glyph-swap">${m}</div><h3>${r.cardTitle}</h3><p class="finale-line">${r.pipQuietLine}</p><p class="finale-line">${r.maraSignLine}</p>`,i.appendChild(this.finaleControls(r)),this.showReplayControl(t);return}i.innerHTML='<div class="finale-beats"><div class="finale-stage"></div></div>';const s=i.querySelector(".finale-stage"),a=this.el("div","finale-overlay"),o=performance.now(),c=[],l=r.pullbackS,h=r.threadStepS*r.threadCount;for(let m=0;m<r.threadCount;m++)c.push(l+m/r.threadCount*h);const d=r.pullbackS+r.threadStepS*r.threadCount,p=d+r.allGlowS,f=p+r.shelfS;let g=!1;i.appendChild(a);const x=m=>{const u=(m-o)/1e3,w=Math.min(1,u/r.pullbackS);if(a.style.opacity=String(1-w*.4),a.style.transform=`scale(${1-w*.06})`,c.findIndex(y=>u>=y&&u<y+r.threadStepS)>=0?(s.classList.remove("pulse-lit"),s.offsetWidth,s.classList.add("pulse-lit")):u>=d&&u<p&&s.classList.add("glow"),u>=p&&!this.shelf.classList.contains("has")&&this.updatePostcardShelf(this._state??t),u>=f&&!g&&(g=!0,s.classList.remove("pulse-lit","glow"),s.innerHTML=`<h3>${r.cardTitle}</h3><p class="finale-line">${r.pipQuietLine}</p><p class="finale-line">${r.maraSignLine}</p>`,i.appendChild(this.finaleControls(r))),u>=f+r.controlReturnS+1){this._finaleActive=!1,i.remove(),this.panelLayer.classList.remove("open"),this.showReplayControl(this._state??t);return}requestAnimationFrame(x)};this._finaleActive=!0,requestAnimationFrame(x)}finaleControls(e){const t=this.el("div","finale-controls"),i=this.el("button","buy ghost");i.textContent=e.replayLabel??"Replay the reply",i.addEventListener("click",()=>{this._state&&this._lastFinale&&this.playFinale(this._lastFinale,this._state)});const r=this.el("button","buy big");return r.textContent="Close",r.addEventListener("click",()=>{this._finaleActive=!1,this.panelLayer.classList.remove("open"),this.root.querySelector(".card-finale")?.remove()}),t.appendChild(i),t.appendChild(r),t}injectCss(){if(document.getElementById("md-hud-css"))return;const e=document.createElement("style");e.id="md-hud-css",e.textContent=`
      #hud { font-family: ui-monospace, Menlo, Consolas, monospace; color: ${M.parchment}; }
      .hud-top { position:absolute; top:0; left:0; right:0; height:15%; padding:52px 14px 8px; display:flex; justify-content:space-between; align-items:flex-start; background:linear-gradient(180deg, rgba(23,35,63,.92), rgba(23,35,63,0)); z-index:3; pointer-events:none; }
      .stat { display:flex; flex-direction:column; align-items:center; }
      .stat b { font-size:10px; letter-spacing:.08em; color:${M.moonBlue}; text-transform:uppercase; }
      .stat i { font-style:normal; font-size:16px; font-weight:700; font-variant-numeric:tabular-nums; }
      .hud-meters { position:absolute; top:16%; left:0; right:0; display:flex; gap:10px; justify-content:center; padding:6px; z-index:3; }
      .meter { position:relative; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; transition:transform ${to.capacityPulseS}s; }
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
      .choke-tri::after { content:''; position:absolute; left:-8px; top:0; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:13px solid ${M.parchment}; clip-path: polygon(50% 0, 100% 100%, 82% 100%, 50% 34%, 18% 100%, 0 100%); }
      .meter.pulse { animation: meterPulse ${to.capacityPulseS}s infinite alternate; }
      .meter.pulse-static { outline: 3px solid #F4E7C7; outline-offset: 2px; }
      @keyframes meterPulse { from{ transform:scale(1);} to{ transform:scale(1.18);} }
      #hud .seal-row { position:absolute; top:calc(16% + 56px); left:0; right:0; display:flex; gap:8px; justify-content:center; padding:4px 8px; z-index:2; pointer-events:none; }
      #hud .seal-row .seal { pointer-events:none; }
      #hud .seal-row .seal-action { pointer-events:auto; }
      .seal-row.collapsed { display:none; }
      .seal { width:31%; max-width:150px; background:rgba(23,35,63,.82); border:1px solid rgba(214,168,75,.45); border-radius:10px; padding:6px 7px; font-size:10px; }
      .seal.locked { opacity:.85; }
      .seal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; }
      .seal-name { font-weight:700; color:${M.parchment}; }
      .seal-state { color:${M.moonBlue}; font-size:9px; }
      .seal-silhouette { width:10px; height:14px; background:#0d1730; clip-path: polygon(50% 0, 90% 20%, 90% 60%, 70% 60%, 70% 100%, 30% 100%, 30% 60%, 10% 60%, 10% 20%); }
      .gauge { display:flex; align-items:center; gap:4px; margin:3px 0; }
      .gauge-label { width:26px; color:${M.brass}; font-size:8px; text-transform:uppercase; }
      .gauge-track { flex:1; height:5px; background:#101a30; border-radius:3px; overflow:hidden; }
      .gauge-fill { height:100%; background:${M.routeMint}; }
      .gauge-fill.list { background:${M.plum}; }
      .gauge-num { font-size:8px; color:${M.parchment}; font-variant-numeric:tabular-nums; }
      .ticker { margin-top:3px; color:${M.brass}; font-weight:700; font-size:9px; }
      .seal-action { width:100%; min-height:44px; margin-top:5px; background:${M.sealingRed}; color:${M.parchment}; border:none; border-radius:8px; font:700 10px/1 ui-monospace; cursor:pointer; }
      .seal-action:disabled { opacity:.45; cursor:default; background:#3a4666; }
      .seal-toggle { position:absolute; top:calc(16% + 60px); right:6px; z-index:3; min-height:44px; min-width:44px; background:transparent; color:${M.moonBlue}; border:1px solid rgba(91,121,200,.5); border-radius:8px; font:700 9px/1 ui-monospace; }
      .flat-chip { position:absolute; top:2%; left:6px; z-index:4; display:flex; flex-direction:column; align-items:flex-start; gap:2px; min-height:44px; max-width:132px; background:rgba(23,35,63,.82); color:${M.parchment}; border:1px solid rgba(91,121,200,.5); border-radius:8px; padding:5px 8px; font:700 10px/1 ui-monospace; cursor:pointer; text-align:left; }
      .flat-chip .flat-pending { color:${M.brass}; font-variant-numeric:tabular-nums; }
      .flat-chip .flat-label { font-weight:400; font-size:9px; color:${M.moonBlue}; }
      .flat-chip.flat-card { border-color:${M.plum}; }
      .flat-chip.flat-nudge { border-color:${M.sealingRed}; color:${M.parchment}; }
      .hud-controls { position:absolute; bottom:0; left:0; right:0; height:18%; display:flex; align-items:flex-start; justify-content:center; gap:14px; padding-top:10px; background:linear-gradient(0deg, rgba(23,35,63,.94), rgba(23,35,63,0)); z-index:3; }
      .sort-btn { width:min(230px, 62%); height:64px; border:none; border-radius:22px; color:${M.parchment}; font:800 18px/1 ui-monospace; letter-spacing:.12em; box-shadow:0 6px 0 #8f3038; touch-action:none; cursor:pointer; user-select:none; background-image:linear-gradient(rgba(255,255,255,.14), rgba(255,255,255,0)); }
      .sort-btn.held { transform:translateY(4px); box-shadow:0 2px 0 #8f3038; }
      .plume { width:26px; height:64px; border:2px solid ${M.brass}; border-radius:12px; position:relative; overflow:hidden; background:#101a30; }
      .plume-fill { position:absolute; bottom:0; left:0; right:0; background:${M.brass}; transition:height .2s; }
      .plume.gold .plume-fill { background:${M.routeMint}; box-shadow:0 0 10px ${M.brass}; }
      .plume.gold { box-shadow:0 0 14px ${M.brass}; }
      .hud-panel-layer { position:absolute; inset:0; display:none; align-items:flex-end; justify-content:center; background:rgba(10,16,32,.45); z-index:10; }
      .hud-panel-layer.open { display:flex; }
      .card { width:88%; max-width:420px; max-height:72%; overflow-y:auto; background:${M.parchment}; color:#241d12; border-radius:16px; padding:20px; margin-bottom:6%; box-shadow:0 10px 30px rgba(0,0,0,.5); }
      .card h3 { margin:0 0 12px; color:${M.inkNavy}; }
      .row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed rgba(36,29,18,.3); }
      .row .name { font-size:14px; }
      .row .lvl { color:#777; font-size:12px; }
      .buy { background:${M.sealingRed}; color:${M.parchment}; border:none; border-radius:10px; padding:10px 14px; font:700 13px/1 ui-monospace; cursor:pointer; min-height:44px; min-width:44px; }
      .buy.dim { opacity:.5; }
      .buy.ghost { background:transparent; color:#241d12; border:1px solid rgba(36,29,18,.4); }
      .buy.big { width:100%; margin:8px 0; font-size:15px; }
      .buy.punch { animation: punch ${to.purchasePunchS}s; }
      @keyframes punch { 0% { transform:scale(.94); } 60% { transform:scale(1.04); } 100% { transform:scale(1); } }
      .card ul { padding-left:18px; }
      .card li { margin:6px 0; }
      .stub { color:#777; font-size:11px; text-align:right; }
      .card-redraw .forecast { font-size:34px; margin:10px 0; color:${M.plum}; }
      .card-redraw .earned { font-size:12px; color:#555; margin:-6px 0 10px; }
      .preview { display:flex; gap:14px; font-size:11px; margin-bottom:6px; }
      .preview div { flex:1; }
      .preview .keep b { color:#3a7d5f; } .preview .lost b { color:${M.sealingRed}; }
      .ledger-line { font-size:14px; margin:6px 0; }
      .ledger-line.big { font-size:18px; }
      .card-coach p { font-size:16px; margin:8px 0 12px; }
      .card-coach .grant { color:#3a7d5f; font-weight:700; font-size:13px; }
      .card-coach .rail-note { color:#777; font-size:11px; }
      .guide-ring { position:absolute; border:3px dashed ${M.brass}; border-radius:14px; z-index:9; pointer-events:none; animation: breathe 1.2s ease-in-out infinite alternate; }
      .debug-label { position:absolute; background:rgba(23,35,63,.85); color:${M.routeMint}; font:700 9px/1 ui-monospace; padding:2px 5px; border-radius:4px; pointer-events:none; z-index:4; white-space:nowrap; }
      .postcards-btn { position:absolute; top:2%; right:6px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${M.moonBlue}; border:1px solid rgba(214,168,75,.5); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; }
      .postcards-btn .unread-dot { position:absolute; top:-3px; right:-3px; width:12px; height:12px; border-radius:50%; background:${M.sealingRed}; box-shadow:0 0 8px ${M.sealingRed}; }
      .card-postcards .pc-group { margin:8px 0; }
      .card-postcards h4 { margin:10px 0 4px; font-size:13px; color:${M.inkNavy}; text-transform:uppercase; letter-spacing:.05em; }
      .pc-row { display:flex; align-items:center; gap:8px; width:100%; min-height:44px; padding:6px 8px; border:none; background:transparent; border-bottom:1px dashed rgba(36,29,18,.2); cursor:pointer; text-align:left; font:inherit; }
      .pc-row.locked { opacity:.5; cursor:default; }
      .pc-row .pc-slot { color:#a05555; font-weight:700; font-size:11px; }
      .pc-row .pc-subject { flex:1; font-size:13px; color:#241d12; }
      .pc-row .pc-state { font-size:10px; text-transform:uppercase; }
      .pc-row.new .pc-state { color:${M.sealingRed}; font-weight:700; }
      .card-postcards .empty { color:#777; font-size:13px; }
      .card-postcard-story .pc-meta { font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:#a05555; }
      .card-postcard-story .pc-subject { margin:4px 0; color:${M.inkNavy}; }
      .card-postcard-story .pc-sender { font-size:12px; color:#777; margin:0 0 10px; }
      .card-postcard-story .pc-body { font-size:15px; line-height:1.5; color:#241d12; }
      .card-postcard-story .pc-reaction { margin-top:12px; font-style:italic; color:#3a5d7d; font-size:13px; }
      .card-postcard-story .pc-seal { margin-top:10px; font-weight:700; color:${M.brass}; }
      /* Ch2 VD rework (F4): postcard furniture — stamp, postmark, address, doodle motif. */
      .pc-stage { position:relative; min-height:120px; margin:2px 0 12px; }
      .pc-stamp { position:absolute; top:0; right:0; width:30px; height:38px; background:${M.sealingRed}; color:${M.parchment}; display:flex; align-items:center; justify-content:center; font-size:15px; z-index:2; }
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
      .morningpost-btn { position:absolute; top:2%; right:56px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${M.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .morningpost-btn.visible { opacity:1; pointer-events:auto; }
      .morningpost-btn.pulse { animation: breathe 1.2s ease-in-out infinite alternate; }
      .card-morningpost .mp-prompt { font-size:14px; line-height:1.5; color:${M.inkNavy}; }
      .card-morningpost .mp-grant { margin-top:10px; font-size:15px; color:#3a5d7d; }
      .card-morningpost .mp-grant b { color:${M.brass}; }
      .special-btn { position:absolute; top:2%; right:112px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${M.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .special-btn.visible { opacity:1; pointer-events:auto; }
      .rush-btn { position:absolute; top:2%; right:168px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${M.brass}; border:1px solid rgba(214,168,75,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .rush-btn.visible { opacity:1; pointer-events:auto; }
      .rush-btn.active { color:${M.parchment}; background:rgba(214,168,75,.25); animation: breathe 1.2s ease-in-out infinite alternate; }
      .rush-btn.disabled { color:${M.moonBlue}; border-color:rgba(91,121,200,.4); cursor:default; }
      /* ---- Ch3 (JEE-655) — modifier weather card · ledger third-bulb chip · voyage view */
      .mod-card { position:absolute; top:9.5%; left:50%; transform:translateX(-50%); z-index:4; display:none; flex-direction:column; gap:1px; min-width:150px; max-width:210px; padding:6px 9px; border:1px solid rgba(91,121,200,.55); border-radius:9px; background:rgba(23,35,63,.8); color:${M.parchment}; font:700 10px/1.25 ui-monospace; text-align:center; }
      .mod-card.visible { display:flex; }
      .mod-card .mod-glyph { align-self:center; width:18px; height:10px; border-radius:3px; background:${M.moonBlue}; opacity:.9; }
      .mod-card[data-mod="backlog_surge"] .mod-glyph { background:${M.inkNavy}; height:14px; }
      .mod-card[data-mod="perfect_moon"] .mod-glyph { background:${M.brass}; border-radius:50%; height:14px; }
      .mod-card[data-mod="tailwind"] .mod-glyph { background:${M.routeMint}; }
      .mod-card[data-mod="long_shadows"] .mod-glyph { background:#b8893d; }
      .mod-card[data-mod="stamp_fair"] .mod-glyph { background:${M.parchment}; }
      .mod-card[data-mod="wax_festival"] .mod-glyph { background:${M.plum}; }
      .mod-card .mod-name { color:${M.brass}; }
      .mod-card .mod-ends { color:${M.moonBlue}; font-size:9px; }
      .mod-card .mod-effect { font-weight:400; font-size:9px; opacity:.85; }
      .mod-card .mod-forecast { font-weight:400; font-size:8px; color:${M.routeMint}; }
      .mod-card .mod-chain { font-weight:400; font-size:8px; color:${M.plum}; }
      .ledger-chip { position:absolute; top:2%; left:148px; z-index:4; display:none; align-items:center; gap:4px; min-height:44px; padding:4px 8px; border:1px solid rgba(214,168,75,.55); border-radius:8px; background:rgba(23,35,63,.82); color:${M.parchment}; font:700 9px/1 ui-monospace; }
      .ledger-chip.visible { display:flex; }
      .ledger-chip .hourglass { display:flex; flex-direction:column; gap:1px; }
      .ledger-chip .hourglass i { width:8px; height:4px; background:${M.brass}; border-radius:1px; }
      .flat-chip.voyage-nudge { border-color:${M.routeMint}; }
      .flat-chip.voyage-nudge .flat-label { color:${M.routeMint}; }
      .voyage-log { margin-top:8px; padding-top:6px; border-top:1px dashed rgba(91,121,200,.35); font-size:10px; }
      .voyage-head { color:${M.routeMint}; font-weight:700; margin-bottom:2px; }
      .voyage-glyph { color:${M.moonBlue}; }
      .voyage-row { display:flex; justify-content:space-between; opacity:.85; }
      .voyage-deltas { display:flex; gap:6px; margin:3px 0; }
      .voyage-deltas .vd-hot { color:${M.brass}; }
      .voyage-deltas .vd-cold { color:${M.moonBlue}; }
      .voyage-eta { margin:2px 0; color:${M.moonBlue}; }
      .voyage-eta.near { color:${M.routeMint}; font-weight:700; }
      .voyage-nudge-line { color:${M.sealingRed}; font-weight:700; }
      .fam-pulse { animation: famPulse 1.2s ease-out 1; }
      .fam-pulse-static { outline:2px solid ${M.parchment}; outline-offset:2px; }
      @keyframes famPulse { 0% { transform:scale(1); box-shadow:0 0 0 0 rgba(214,168,75,.7);} 30% { transform:scale(1.14); box-shadow:0 0 0 6px rgba(214,168,75,0);} 100% { transform:scale(1); box-shadow:none;} }
      .sd-block.sd-brass-locked { border-color:${M.brass}; background:rgba(214,168,75,.12); }
      .sd-block .brass { color:${M.brass}; }
      .ledger-line.basis { color:${M.routeMint}; font-size:11px; }
      .ledger-line.trim { color:${M.brass}; font-size:12px; }
      .ledger-line.trim .trim-amt { opacity:.8; font-size:10px; }
      .ledger-line.longshot { color:${M.moonBlue}; font-style:italic; font-size:11px; }
      .card-special .sd-block { margin:10px 0; padding:10px; border:1px solid rgba(36,29,18,.18); border-radius:8px; background:rgba(255,248,235,.55); }
      .card-special .sd-block.active { border-color:rgba(91,121,200,.5); }
      .card-special .sd-block h4 { margin:0 0 4px; color:${M.inkNavy}; font-size:14px; }
      .card-special .sd-cost { margin:0; font-size:12px; color:#777; }
      .card-special .sd-have { color:#3a5d7d; }
      .card-special .empty { color:#777; font-size:13px; }
      .wander-toast { position:absolute; left:50%; top:14%; transform:translateX(-50%); z-index:6; pointer-events:none; background:rgba(23,35,63,.9); color:${M.parchment}; padding:8px 14px; border-radius:12px; font:700 13px/1 ui-monospace; border:1px solid rgba(244,231,199,.4); box-shadow:0 4px 14px rgba(0,0,0,.35); }
      .wander-toast b { color:${M.brass}; }
      .wander-toast-seal { display:block; margin-top:4px; color:${M.sealingRed}; font-size:11px; text-align:center; }
      .wander-badge { position:absolute; top:calc(16% + 118px); right:6px; width:26px; height:34px; background:${M.brass}; border-radius:8px 8px 12px 12px; clip-path: polygon(18% 0, 82% 0, 100% 30%, 88% 100%, 12% 100%, 0 30%); opacity:.25; z-index:3; pointer-events:none; }
      .wander-badge.tick-scale { animation: wanderTick .7s ease-out; }
      .wander-badge.tick-op { opacity:.95; }
      @keyframes wanderTick { 0% { transform:scale(.7); opacity:.4; } 40% { transform:scale(1.18); opacity:1; } 100% { transform:scale(1); opacity:.25; } }
      .sd-chips { display:flex; flex-wrap:wrap; gap:4px; margin-top:6px; }
      .sd-chip { border:1px dashed rgba(36,29,18,.3); border-radius:6px; padding:2px 6px; font-size:10px; color:#3a5d7d; }
      .sd-chip.capped { border:2px solid ${M.brass}; color:${M.inkNavy}; font-weight:700; }
      .sd-end { margin:4px 0 0; font-size:11px; color:#777; font-variant-numeric:tabular-nums; }
      .sd-ring { display:inline-block; width:18px; height:18px; border-radius:50%; margin-top:6px; background: conic-gradient(${M.plum} var(--frac, 0deg), rgba(36,29,18,.15) 0deg); }
      .mp-next { margin-top:8px; font-size:12px; color:#777; }
      /* ---- Ch5 (JEE-581) — Office Papers button · cadence strip · stub tray · dawn · notify · roadmap */
      .officepapers-btn { position:absolute; top:2%; left:148px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${M.parchment}; border:1px solid rgba(244,231,199,.45); border-radius:10px; font:700 9px/1 ui-monospace; z-index:4; cursor:pointer; }
      .cadence-strip { position:absolute; top:calc(16% + 6px); left:50%; transform:translateX(-50%); z-index:4; display:none; align-items:center; gap:8px; max-width:92%; padding:5px 9px; border:1px solid rgba(214,168,75,.4); border-radius:9px; background:rgba(23,35,63,.82); color:${M.parchment}; font:700 9px/1.2 ui-monospace; }
      .cadence-strip.visible { display:flex; flex-wrap:wrap; justify-content:center; }
      .cadence-strip .cs-label { color:${M.brass}; text-transform:uppercase; }
      .cadence-strip .cs-slot { color:${M.moonBlue}; }
      .cadence-strip .cs-slot.doubler { color:${M.plum}; }
      .cadence-strip .cs-note { color:${M.routeMint}; }
      .card-office-papers { }
      .card-office-papers .stub-banner { justify-content:center; border-bottom:1px solid rgba(36,29,18,.25); color:${M.sealingRed}; font-weight:700; }
      .card-office-papers .stub-card { margin:10px 0; padding:10px 12px; border:1px solid rgba(36,29,18,.2); border-radius:10px; background:rgba(255,248,235,.6); }
      .card-office-papers .stub-card.brass { border-color:rgba(214,168,75,.7); }
      .card-office-papers .stub-card.plum { border-color:rgba(109,62,120,.6); }
      .card-office-papers .stub-card.plum-neutral { border-color:rgba(109,62,120,.35); }
      .card-office-papers .stub-card.parchment { border-color:rgba(91,121,200,.4); }
      .card-office-papers .stub-head { display:flex; justify-content:space-between; align-items:baseline; }
      .card-office-papers .stub-head .name { font-size:14px; color:${M.inkNavy}; font-weight:700; }
      .card-office-papers .stub-head .price { font-size:12px; color:${M.plum}; font-variant-numeric:tabular-nums; }
      .card-office-papers .stub-body { margin-top:5px; font-size:12px; color:rgba(36,29,18,.85); line-height:1.45; }
      .card-office-papers .stub-honesty { margin-top:6px; padding:6px 8px; font-size:11px; color:${M.inkNavy}; background:rgba(91,121,200,.08); border-left:3px solid ${M.brass}; }
      .card-office-papers .never-row { font-size:11px; color:#777; border-bottom:none; }
      .card-office-papers .stub-footer { justify-content:center; font-size:11px; color:#777; border-top:1px solid rgba(36,29,18,.2); border-bottom:none; }
      .card-roadmap .roadmap-intro { font-size:13px; line-height:1.5; color:${M.inkNavy}; }
      .card-roadmap .roadmap-item { margin:10px 0; padding:8px 10px; border-left:3px solid ${M.brass}; background:rgba(255,248,235,.6); }
      .card-roadmap .roadmap-item b { color:${M.inkNavy}; }
      .card-roadmap .roadmap-item p { margin:3px 0 0; font-size:12px; color:rgba(36,29,18,.85); line-height:1.45; }
      .card-dawn .dawn-line { font-size:17px; line-height:1.5; color:${M.inkNavy}; }
      .card-dawn .dawn-note { margin-top:8px; color:${M.brass}; font-weight:700; font-size:12px; }
      .card-dawn .dawn-idle { margin-top:8px; color:#777; font-size:11px; }
      .card-notify .notify-body { font-size:14px; line-height:1.5; color:${M.inkNavy}; }
      .card-notify .notify-quiet { margin:8px 0 2px; font-size:11px; color:${M.moonBlue}; font-variant-numeric:tabular-nums; }
      /* ---- Ch4 (JEE-666/F5) — postcard rings · sealed shelf · mastery ring · finale */
      .card-postcard-story .pc-rings { display:flex; gap:16px; margin:4px 0 12px; align-items:center; }
      .pc-ring { position:relative; width:56px; height:56px; border-radius:50%; border:3px solid var(--ring, ${M.brass}); background:
        conic-gradient(var(--ring, ${M.brass}) var(--sweep, 0deg), rgba(36,29,18,.12) 0deg); display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:inset 0 0 0 4px ${M.parchment}; }
      .pc-ring .pc-ring-glyph { font-size:15px; font-weight:800; color:${M.inkNavy}; }
      .pc-ring .pc-ring-pos { font-size:8px; color:${M.inkNavy}; letter-spacing:.04em; }
      .pc-ring-expiry { border-color:${M.moonBlue}; background:conic-gradient(${M.moonBlue} 180deg, rgba(36,29,18,.12) 180deg); }
      .pc-ring-expiry .pc-ring-pos { font-size:7px; text-transform:uppercase; }
      .pc-shelf { position:absolute; bottom:calc(18% + 8px); left:50%; transform:translateX(-50%); z-index:4; display:none; align-items:center; gap:6px; max-width:92%; padding:6px 8px; border-radius:10px; background:rgba(23,35,63,.8); border:1px solid rgba(91,121,200,.4); }
      .pc-shelf.has { display:flex; flex-wrap:wrap; justify-content:center; }
      .pc-shelf-chip { width:34px; height:34px; min-width:34px; border-radius:6px; border:1px solid rgba(244,231,199,.35); background:var(--chip-thread, ${M.brass}); color:${M.inkNavy}; font:800 14px/1 ui-monospace; cursor:pointer; display:flex; align-items:center; justify-content:center; }
      .ring-mastery { position:absolute; top:calc(16% + 104px); right:6px; z-index:4; width:44px; height:44px; border-radius:50%; border:3px solid ${M.plum}; background:conic-gradient(${M.plum} var(--sweep, 0deg), rgba(36,29,18,.2) 0deg); color:${M.parchment}; font:800 10px/1 ui-monospace; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px rgba(109,62,120,.6); }
      .ring-mastery.fill { transition:background .6s ease; }
      .ring-mastery.static { opacity:.9; }
      .card-finale { text-align:center; }
      .card-finale .finale-beats { min-height:140px; }
      .finale-stage { display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:130px; border-radius:14px; background:rgba(23,35,63,.06); }
      .finale-stage.pulse-lit { box-shadow:0 0 30px ${M.routeMint}; }
      .finale-stage.glow { box-shadow:0 0 44px ${M.brass}; }
      .finale-overlay { position:absolute; inset:0; pointer-events:none; border-radius:16px; mix-blend-mode:multiply; }
      .finale-glyph-swap { font-size:54px; color:${M.moonBlue}; line-height:1; margin:8px; }
      .card-finale h3 { font-size:19px; color:${M.inkNavy}; }
      .finale-line { font-size:15px; line-height:1.5; color:${M.inkNavy}; margin:10px 0; }
      .finale-controls { display:flex; gap:10px; margin-top:12px; }
      .replay-reply-btn { position:absolute; bottom:calc(18% + 60px); right:6px; z-index:4; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${M.brass}; border:1px solid rgba(214,168,75,.55); border-radius:10px; font:700 9px/1 ui-monospace; cursor:pointer; }
      /* ---- Ch5 LBD (JEE-662) — cadence strip grammar · return-card v5 · dawn veil · honest-stub tray · settings · RT panel */
      .cadence-strip .cs-slot { display:inline-flex; align-items:center; gap:4px; background:transparent; border:none; border-radius:8px; padding:3px 5px; color:${M.parchment}; font:700 9px/1.2 ui-monospace; cursor:pointer; }
      .cadence-strip .cs-sky { border:1px solid rgba(91,121,200,.55); background:rgba(91,121,200,.14); }
      .cadence-strip .cs-time { color:${M.parchment}; opacity:.9; letter-spacing:.02em; }
      .cadence-strip .cs-hg-fig { position:relative; width:10px; height:16px; border:1.5px solid ${M.plum}; border-radius:5px/8px; overflow:hidden; display:inline-block; }
      .cadence-strip .cs-hg-fill { position:absolute; bottom:0; left:0; right:0; background:${M.plum}; display:block; }
      .cadence-strip .cs-hg-fig.outline { opacity:.55; }
      .cadence-strip .cs-stamp-fig { width:13px; height:11px; background:${M.parchment}; border-radius:2px; display:inline-block; box-shadow:inset 0 0 0 1.5px rgba(23,35,63,.55); }
      .cadence-strip .cs-stamp.ready .cs-stamp-fig { background:${M.brass}; }
      .cadence-strip .cs-stamp.ready .cs-time { color:${M.brass}; }
      .cadence-strip .cs-pip { width:9px; height:9px; border-radius:50%; background:${M.brass}; display:inline-block; }
      .cadence-strip .cs-pip.dim { background:transparent; box-shadow:inset 0 0 0 1.5px rgba(214,168,75,.5); }
      .cadence-strip.strip-slide-in { animation: stripSlide 0.9s ease-out; }
      @keyframes stripSlide { from { transform:translate(-50%,-16px); opacity:0; } to { transform:translate(-50%,0); opacity:1; } }
      .card-return h3 { color:${M.inkNavy}; }
      .ledger-line.streak { background:rgba(244,231,199,.65); border-left:3px solid ${M.brass}; padding-left:6px; }
      .ledger-line.cap { color:${M.moonBlue}; font-style:italic; }
      .doubler-pips { display:flex; gap:6px; margin:4px 0 8px; }
      .doubler-pips .dbl-pip { width:11px; height:11px; border-radius:50%; background:${M.brass}; }
      .doubler-pips .dbl-pip.dim { background:transparent; box-shadow:inset 0 0 0 2px rgba(214,168,75,.45); transition:background .25s ease; }
      .dbl-choice { display:flex; gap:10px; }
      .dbl-choice .buy { flex:1; }
      .settings-btn { position:absolute; top:calc(15% + 148px); left:6px; z-index:4; min-height:44px; min-width:44px; padding:0 10px; background:transparent; color:${M.parchment}; border:1px solid rgba(244,231,199,.4); border-radius:10px; font:700 9px/1 ui-monospace; cursor:pointer; }
      .roundtrip-btn { position:absolute; top:calc(15% + 148px); left:96px; z-index:4; min-height:44px; padding:0 10px; background:transparent; color:${M.plum}; border:1px solid rgba(109,62,120,.6); border-radius:10px; font:700 9px/1 ui-monospace; cursor:pointer; display:none; }
      .roundtrip-btn.visible { display:block; }
      .cosmetics-btn { position:absolute; top:calc(15% + 148px); left:186px; z-index:4; min-height:44px; padding:0 10px; background:transparent; color:${M.brass}; border:1px solid rgba(214,168,75,.55); border-radius:10px; font:700 9px/1 ui-monospace; cursor:pointer; display:none; white-space:nowrap; }
      .cosmetics-btn.visible { display:block; }
      .card-cosmetics .cs-jar { color:${M.plum}; font-size:11px; margin:2px 0 8px; }
      .card-cosmetics .cs-slot { margin:6px 0; }
      .card-cosmetics .cs-slot h4 { color:${M.inkNavy}; font-size:11px; letter-spacing:.04em; margin:10px 0 4px; border-bottom:1px dashed rgba(36,29,18,.18); }
      .card-cosmetics .cs-row { display:flex; align-items:center; gap:8px; min-height:40px; padding:4px 2px; color:${M.inkNavy}; font-size:11px; }
      .card-cosmetics .cs-name { flex:1; }
      .card-cosmetics .cs-row.equipped { opacity:.85; }
      .card-cosmetics .cs-state { color:${M.brass}; font-weight:700; font-size:10px; }
      .card-cosmetics .cs-row.owned .cs-name::after { content:' ✓'; color:${M.brass}; }
      .card-cosmetics .buy.small { font-size:10px; min-height:34px; padding:0 8px; }
      .card-cosmetics .buy.small.disabled { opacity:.5; }
      .card-settings .set-row { display:flex; align-items:center; gap:8px; color:${M.inkNavy}; font-size:12px; margin:8px 0; }
      .set-bell { width:13px; height:13px; border-radius:50% 50% 4px 4px; border:2px solid ${M.parchment}; border-bottom:none; position:relative; display:inline-block; }
      .set-bell.notch::after { content:''; position:absolute; bottom:-4px; left:50%; transform:translateX(-50%); width:5px; height:5px; border-radius:50%; background:${M.brass}; }
      .set-channel { display:flex; align-items:center; gap:8px; color:${M.inkNavy}; font-size:12px; margin:6px 0; }
      .set-channel input[type=number] { width:56px; font:inherit; }
      .card-roundtrip .rt-row { display:flex; align-items:center; gap:8px; padding:5px 2px; border-bottom:1px dashed rgba(36,29,18,.18); color:${M.inkNavy}; font-size:11px; }
      .card-roundtrip .rt-name { flex:0 0 6.2em; font-weight:700; }
      .card-roundtrip .rt-ring { display:inline-flex; gap:3px; }
      .card-roundtrip .rt-ring i { width:10px; height:10px; border-radius:50%; border:1.5px solid ${M.plum}; }
      .card-roundtrip .rt-ring i.filled { background:${M.plum}; }
      .card-roundtrip .rt-count { flex:1; text-align:right; font-size:9.5px; opacity:.85; }
      .card-roundtrip .rt-replays { flex-basis:100%; display:flex; gap:8px; margin-top:4px; }
      .replay-chip { font-size:10px; }
      .tray-row { display:flex; align-items:center; gap:8px; width:100%; min-height:44px; background:rgba(255,248,235,.7); border:1px solid rgba(36,29,18,.16); border-radius:10px; padding:8px 10px; margin:6px 0; cursor:pointer; font:700 11px/1.25 ui-monospace; color:${M.inkNavy}; text-align:left; }
      .tray-row .name { flex:1; }
      .tray-row .price { color:${M.plum}; }
      .tray-row.seen { opacity:.75; }
      .tray-row.brass { border-color:rgba(214,168,75,.7); }
      .tray-row.plum { border-color:rgba(109,62,120,.6); }
      .tray-row.plum-neutral { border-color:rgba(109,62,120,.35); }
      .tray-row.parchment { border-color:rgba(244,231,199,.9); }
      .tray-motif { width:14px; height:14px; border-radius:3px; display:inline-block; background:${M.parchment}; box-shadow:inset 0 0 0 2px rgba(23,35,63,.4); }
      .tray-motif.motif-lamp { background:${M.brass}; border-radius:50% 50% 3px 3px; }
      .tray-motif.motif-stamp-stack { background:${M.plum}; }
      .tray-motif.motif-album-meter { background:${M.plum}; box-shadow:inset 4px 0 0 ${M.brass}; }
      .tray-motif.motif-wax-100 { background:${M.parchment}; box-shadow:inset 0 0 0 2px rgba(23,35,63,.4), inset 4px 4px 0 rgba(214,168,75,.8); }
      .tray-motif.motif-wax-230 { background:${M.parchment}; box-shadow:inset 0 0 0 2px rgba(23,35,63,.4), inset 4px 4px 0 rgba(214,168,75,.9), inset -4px -4px 0 rgba(214,168,75,.9); }
      .card-stub-detail .stub-banner.inframe { justify-content:center; border-bottom:1px solid rgba(36,29,18,.25); color:${M.sealingRed}; font-weight:700; margin:-4px 0 8px; }
      .card-stub-detail.banner-flash .stub-banner.inframe { animation: bannerFlash 0.9s ease; }
      @keyframes bannerFlash { 0%,100% { background:transparent; } 30% { background:rgba(199,75,85,.18); } }
      .stub-motif-large { width:34px; height:26px; border-radius:4px; margin:4px auto 10px; background:${M.parchment}; box-shadow:inset 0 0 0 2px rgba(23,35,63,.4); }
      .stub-motif-large.motif-lamp { background:${M.brass}; }
      .stub-motif-large.motif-stamp-stack { background:${M.plum}; }
      .stub-motif-large.motif-album-meter { background:${M.plum}; box-shadow:inset 10px 0 0 ${M.brass}; }
      .stub-line { color:${M.inkNavy}; font-size:12px; line-height:1.45; }
      .stub-honesty { color:${M.moonBlue}; font-size:11px; font-style:italic; margin-top:8px; }
      .album-meter { position:relative; width:34px; min-height:90px; border:1.5px solid ${M.plum}; border-radius:6px; margin:10px auto; overflow:hidden; }
      .album-meter-fill { position:absolute; bottom:0; left:0; right:0; background:${M.plum}; display:block; }
      .album-meter-read { position:absolute; bottom:2px; left:0; right:0; text-align:center; font-size:8px; color:${M.parchment}; }
      .dawn-veil { position:absolute; inset:0; z-index:6; background:linear-gradient(180deg, rgba(91,121,200,.34), rgba(244,231,199,.16) 55%, rgba(23,35,63,.2)); display:flex; flex-direction:column; align-items:center; justify-content:flex-end; padding-bottom:26%; cursor:pointer; }
      .dawn-veil .dawn-caption { text-align:center; color:${M.inkNavy}; background:rgba(244,231,199,.88); border-radius:12px; padding:12px 16px; max-width:78%; box-shadow:0 2px 18px rgba(23,35,63,.35); }
      .dawn-caption b { display:block; font-size:15px; margin-bottom:6px; }
      .dawn-mara { display:block; font-size:12px; font-style:italic; }
      .dawn-phase-note, .dawn-pip-note { display:block; font-size:10px; margin-top:6px; opacity:.8; }
      .dawn-veil.ph-desk-hold .dawn-caption { background:rgba(244,231,199,.96); }
      .dawn-veil.ph-map-idle { background:linear-gradient(180deg, rgba(91,121,200,.42), rgba(214,168,75,.16) 60%, rgba(23,35,63,.22)); }
      .dawn-veil.ph-control-return { background:linear-gradient(180deg, rgba(91,121,200,.16), rgba(23,35,63,.28)); }
      .dawn-hairline { position:absolute; left:12%; right:12%; bottom:12%; height:3px; border-radius:2px; background:rgba(244,231,199,.3); overflow:hidden; }
      .dawn-hairline i { display:block; height:100%; width:0; background:${M.brass}; animation: dawnFill 15s linear forwards; }
      @keyframes dawnFill { to { width:100%; } }
      .card-dawn .dawn-line { color:${M.inkNavy}; font-size:14px; font-style:italic; }
      .card-dawn .dawn-note, .card-dawn .dawn-idle { color:${M.moonBlue}; font-size:11px; }
      .card-sd-refusal .sd-refusal-line { color:${M.inkNavy}; font-size:13px; font-style:italic; }
      .card-notify .notify-body { color:${M.inkNavy}; font-size:12.5px; line-height:1.5; }
      .card-notify .notify-quiet { color:${M.moonBlue}; font-size:11px; }
      .notify-banner { position:absolute; top:calc(15% + 200px); left:50%; transform:translateX(-50%); z-index:5; background:rgba(244,231,199,.96); color:${M.inkNavy}; border-radius:10px; padding:8px 14px; max-width:86%; box-shadow:0 2px 16px rgba(23,35,63,.4); display:flex; flex-direction:column; gap:2px; transition:opacity .8s ease; }
      .notify-banner b { font-size:11px; }
      .notify-banner span { font-size:11px; }
      .notify-banner.out { opacity:0; }
      .tray-rail-line { font-size:11.5px; color:${M.plum}; font-style:italic; margin:6px 0 4px; }
      .mod-detail-line { color:${M.inkNavy}; font-size:12px; margin:6px 0; }
    `,document.head.appendChild(e)}}const db={desk:"desk",satchel:"satchel",route:"route",inflow:"hall"};function hb(n){return n?n.ch4.replyFired?[...Sr.kept,...no,...Kc,...J_,...ev]:n.ch2.districtsAnswered.includes(5)?[...Sr.kept,...no,...Kc]:$r(n)?[...Sr.kept,...no]:Sr.kept:Sr.kept}function ub(){const n=e=>({family:e,level:"ok",chokeHoldS:0,warnHoldS:0,chokedAtNightMs:null,firstChokeThisRun:!1,remedyLoggedAtS:null,chokeClearS:0});return{per:{desk:n("desk"),satchel:n("satchel"),route:n("route"),inflow:n("inflow")},deliveredEma:0}}const Jt=D_;function pb(n,e,t,i,r){const s=Math.max(1e-9,ga(n)),a=n.desks.reduce((x,m)=>x+m.inProcess,0)/s,o=Math.max(1e-9,pl(n)),l=(n.bundled??0)/o,h=Math.min(1,i/2),d=r/Math.max(1e-9,i);e.deliveredEma+=(d-e.deliveredEma)*h;const p=Math.max(1e-9,fl(n)*Math.max(1,n.starMultiplier)),f=e.deliveredEma/p,g=fb(n);return{deskPile:a,satQueue:l,routesBelowSatchels:p<g,routesAboveSatchels:p>g,routeUtil:f,routeDeliveredOkSlack:e.deliveredEma>=g*(1-Jt.route.okSlack)||l<.02,inflowPool:n.backlog/Math.max(1e-9,ya(n)),holding:t}}function fb(n){return n.racks.reduce((e,t)=>e+(t.unlocked?Gn.rates[t.tier]:0),0)}function mb(n){return ya(n)}function gb(n,e,t,i){for(const r of Object.keys(e.per)){const s=e.per[r],a=vb(r,t),o=xb(r,t);if(a){if(s.chokeHoldS+=i,s.chokeClearS=0,s.level!=="choke"&&s.chokeHoldS>=_b(r,t)){const c=!s.firstChokeThisRun;s.firstChokeThisRun=!0,s.level="choke",s.chokedAtNightMs=n.blocking.nightMs,s.remedyLoggedAtS=null,fe(n,de.meterChoke,{family:r,first_in_run:c})}}else s.chokeHoldS=0,s.level==="choke"?(s.chokeClearS+=i,s.chokeClearS>=1.5&&(s.level=o?"warn":"ok",s.chokeClearS=0)):s.chokeClearS=0;o&&s.level!=="choke"?(s.warnHoldS+=i,s.level="warn"):s.level!=="choke"&&(s.warnHoldS=0,s.level=a?s.level:"ok")}}function _b(n,e){return n==="desk"&&e.holding&&e.deskPile>=Jt.desk.burstFullAt?0:n==="desk"?Jt.desk.chokeSustainS:n==="satchel"?Jt.satchel.chokeSustainS:n==="route"?Jt.route.chokeSustainS:Jt.inflow.chokeSustainS}function vb(n,e){switch(n){case"desk":return e.deskPile>=Jt.desk.chokeAt;case"satchel":return e.routesAboveSatchels&&e.deskPile>=Jt.satchel.deskPileChokeAt;case"route":return e.routeUtil>=Jt.route.utilChokeAt&&e.satQueue>=Jt.route.queueChokeAt;case"inflow":return e.inflowPool<Jt.inflow.chokeAt&&e.holding}}function xb(n,e){switch(n){case"desk":return e.deskPile>=Jt.desk.warnAt;case"satchel":return e.satQueue>=Jt.satchel.queueWarnAt&&e.routesBelowSatchels;case"route":return e.routeUtil>=Jt.route.utilWarnAt;case"inflow":return e.inflowPool<Jt.inflow.okAt}}function bb(n,e,t,i){const r=e.per[t];if(r.remedyLoggedAtS!=null||r.chokedAtNightMs==null)return;r.remedyLoggedAtS=n.blocking.nightMs;const s=(n.blocking.nightMs-r.chokedAtNightMs)/1e3;fe(n,de.meterRemedy,{family:t,purchase_id:i,latency_s:s})}function yb(n){for(const e of Object.keys(n.per)){const t=n.per[e];t.level="ok",t.chokeHoldS=0,t.warnHoldS=0,t.chokedAtNightMs=null,t.firstChokeThisRun=!1,t.remedyLoggedAtS=null,t.chokeClearS=0}n.deliveredEma=0}const so=Yd.filter(n=>"t"in n.trigger);function Bh(n,e){n.blocking.railsFired.push(e.beat);const t=e.grantId??e.beat;fe(n,de.onboardBeat,{copy_id:t,t_s:n.blocking.nightMs/1e3});let i;if(e.grantId!=null&&!n.blocking.checklist.includes(e.grantId)){const r=F_.find(s=>s.id===e.grantId);r&&(n.blocking.checklist.push(r.id),i=r.grant,n.totalEarnedRun+=r.grant,Jr(n,r.grant))}return{beat:e.beat,copyId:t,speaker:e.speaker,copy:e.copy,highlight:e.highlight,rail:e.rail,grantId:e.grantId,grantAmount:i}}function Mb(n){if(n.onboarded)return[];const e=n.blocking.nightMs/1e3,t=[];for(const r of so)e>=r.trigger.t&&!n.blocking.railsFired.includes(r.beat)&&t.push(Bh(n,r));const i=so[so.length-1];return i&&n.blocking.railsFired.includes(i.beat)&&(n.onboarded=!0),t}function Dr(n,e){const t=[];for(const i of Yd)"event"in i.trigger&&i.trigger.event===e&&!n.blocking.railsFired.includes(i.beat)&&t.push(Bh(n,i));return t}function Sb(n,e,t){let i=[];return e.rainmarket.rvDone&&(i=i.concat(Dr(n,"rv_complete"))),t.rainmarketListNearly&&(i=i.concat(Dr(n,"list_nearly"))),e.horizon.rvDone&&(i=i.concat(Dr(n,"horizon_rv"))),e.horizon.listDone&&(i=i.concat(Dr(n,"horizon_list"))),i}function Bn(n){return n.blocking.ch2FiredEver}function xn(n,e){return Bn(n).push(e.beat),fe(n,de.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight}}function At(n,e){return Bn(n).includes(e)}const wb=[xt.flatNear.beat,xt.flatFar.beat],fd=new WeakMap;function Eb(n){const e=fd.get(n);if(e!==n.run){if(e!=null){n.blocking.ch2FiredEver=n.blocking.ch2FiredEver.filter(i=>!wb.includes(i));const t=zh(n);for(const[i,r]of Object.entries(n.blocking.gates))t.listDone[i]=r.listDone}fd.set(n,n.run)}}function Tb(n,e){const t=[];e===1&&$r(n)&&!At(n,xt.rmReanswer.beat)&&t.push(xn(n,xt.rmReanswer));const i=I_.find(r=>r.districtIndex===e);if(i){const r=`ch2.vignette.${i.id}`;At(n,r)||(Bn(n).push(r),fe(n,de.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:`${i.body}
— ${i.speakerLine}`,vignette:i})),i.arrivalCopy&&!At(n,`ch2.arrival.${i.id}`)&&(Bn(n).push(`ch2.arrival.${i.id}`),fe(n,de.onboardBeat,{copy_id:`arrival.${i.id}`,t_s:n.blocking.nightMs/1e3}),t.push({beat:`ch2.arrival.${i.id}`,speaker:i.arrivalCopy.speaker,copy:i.arrivalCopy.line}))}if(e>=1&&$r(n)){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+Wc.delayAfterVignetteS,district:e})}if(i?.id==="canal_of_echoes"){const r=`composite.canal.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"composite_chord",atS:n.blocking.nightMs/1e3+Wc.delayAfterVignetteS})}i?.id==="clocktower_ward"&&!At(n,"ch2.scripted.wander.1")&&(Bn(n).push("ch2.scripted.wander.1"),n.blocking.ch2Pending.push({id:"scripted.wander.1",kind:"scripted_wander",atS:n.blocking.nightMs/1e3+45})),i?.id==="museum_after_dark"&&(At(n,xt.museumClaim.beat)||t.push(xn(n,xt.museumClaim)),At(n,xt.museumClaim2.beat)||t.push(xn(n,xt.museumClaim2))),e>=2&&Iv(n,Date.now());for(const r of kn.recipes){const s=Ot.findIndex(a=>a.id===r.available);s>=0&&e>=s&&!At(n,`ch2.special.offer.${r.id}`)&&(Bn(n).push(`ch2.special.offer.${r.id}`),fe(n,de.specialOffer,{recipe_id:r.id,stamp_cost_json:r.stamps,timer_h:r.timerH}),t.push({beat:`ch2.special.offer.${r.id}`,speaker:null,copy:null}))}return t}function Ab(n){const e=Mn(n);if(!e)return;const t=n.blocking.nightMs/1e3,i=n.blocking.evapSpanMax[e]??0;n.blocking.evapSpanMax[e]=Math.max(i,t)}const md=new WeakMap;function zh(n){let e=md.get(n);return e||(e={mpDue:!1,trays:!1,wander:!1,listDone:{},primed:!1},md.set(n,e)),e}function Cb(n,e){const t=[];Eb(n);const i=zh(n),r=n.blocking.nightMs/1e3,s=$r(n);if(!i.primed){i.mpDue=Ss(n,e),i.trays=(n.hall.F3??0)>=2,i.wander=(n.hall.F9??0)>=1;for(const[d,p]of Object.entries(n.blocking.gates))i.listDone[d]=p.listDone;i.primed=!0}const a=Vx(n);if(s&&(n.run>=1&&!At(n,xt.secondWind.beat)&&t.push(xn(n,xt.secondWind)),!At(n,"ch2.seal-convert")&&r>=$c.conversionCardS&&(Bn(n).push("ch2.seal-convert"),fe(n,de.sealConvert,{t_s:r}),t.push({beat:"ch2.seal-convert",speaker:io.speaker,copy:`${io.line}
${io.note}`,conversion:!0,highlight:"seal-horizon"})),!At(n,xt.sdIntro.beat)&&r>=$c.sdBoardIntroS)){t.push(xn(n,xt.sdIntro));const d=kn.recipes[0];d&&!At(n,`ch2.special.offer.${d.id}`)&&(Bn(n).push(`ch2.special.offer.${d.id}`),fe(n,de.specialOffer,{recipe_id:d.id,stamp_cost_json:d.stamps,timer_h:d.timerH}))}(n.hall.F3??0)>=2&&!i.trays&&(i.trays=!0,At(n,"ch2.tray.activate")||(Bn(n).push("ch2.tray.activate"),fe(n,de.trayActivate,{tier:n.hall.F3,t_s:r})),At(n,xt.trayRail.beat)||t.push(xn(n,xt.trayRail))),(n.hall.F9??0)>=1&&!i.wander&&(i.wander=!0,At(n,xt.wanderOn.beat)||t.push(xn(n,xt.wanderOn)));const l=Ss(n,e);if(l&&!i.mpDue){const d=Ot[n.districtIndex];fe(n,de.morningpostReady,{grant:d?oi.grantByFrontier[d.id]??0:0,district:d?.id}),At(n,xt.mpFirstReady.beat)||t.push(xn(n,xt.mpFirstReady))}i.mpDue=l;for(const[d,p]of Object.entries(da)){const f=Zd[d];if(!f)continue;const g=n.ch2.postcardCounters[d]??0;for(const x of p){const m=f[x.slot-1];m==null||g<m||n.ch2.postcards.unlockedEmitted.includes(x.id)||(n.ch2.postcards.unlockedEmitted.push(x.id),fe(n,de.postcardUnlock,{district:d,n:x.slot,letters_counted:g}),At(n,xt.postcardAuto.beat)||t.push({...xn(n,xt.postcardAuto),postcardId:x.id}))}}a.card&&!Gx(n)&&!At(n,xt.flatNear.beat)&&t.push(xn(n,xt.flatNear)),a.nudge&&!At(n,xt.flatFar.beat)&&t.push(xn(n,xt.flatFar));for(const[d,p]of Object.entries(n.blocking.gates)){const f=i.listDone[d]===!0;if(i.listDone[d]=p.listDone,!p.listDone||f)continue;const g=n.blocking.nightMs/1e3,x=n.blocking.evapSpanMax[d]??0;if(n.blocking.evapSpanMax[d]=Math.max(x,g),x>1500&&g<=1500&&!At(n,`ch2.evaporation.${d}`)){Bn(n).push(`ch2.evaporation.${d}`);const m=xt.evaporation;fe(n,de.onboardBeat,{copy_id:`evaporation.${d}`,t_s:g}),t.push({beat:`ch2.evaporation.${d}`,speaker:m.speaker,copy:m.copy,toast:!0})}}const h=n.blocking.ch2Pending.filter(d=>d.atS<=r);if(h.length){n.blocking.ch2Pending=n.blocking.ch2Pending.filter(d=>d.atS>r);for(const d of h)d.kind==="reply_chord"&&d.district!=null?(fe(n,de.replyChord,{district:d.district,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:d.district,composite:!1}})):d.kind==="composite_chord"?(fe(n,de.replyChord,{district:"composite",t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:null,composite:!0}})):d.kind==="scripted_wander"&&(fe(n,de.wanderSpawn,{kind:"normal",scripted:!0,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,spawnWanderlight:"normal"}),At(n,xt.firstWander.beat)||t.push(xn(n,xt.firstWander)))}return{intents:t,flat:a}}const Rb=30;function Lb(n,e=()=>Date.now()){const t={lastWriteMs:e(),save(i,r){Hh(i),n(i),t.lastWriteMs=e(),fe(i,de.saveWrite,{version:i.v,bytes:JSON.stringify(i).length,state_hash:Ph(i),ok:!0,reason:r})},tick(i,r){(r-t.lastWriteMs)/1e3>=Rb&&t.save(i,"autosave")}};return t}function Pb(n,e){fe(n,de.saveLoad,{version:n.v,bytes:JSON.stringify(n).length,state_hash:Ph(n),ok:e})}function Hh(n){n.ledgerWindow=Cs.capHours*3600}const Kn=1/60,Db=[-3.4,-1.2,1.1,3.3];function kb(){try{const n=localStorage.getItem(Th);return n?{state:Lx(JSON.parse(n)),ok:!0}:{state:Xr(),ok:!1}}catch{return{state:Xr(),ok:!1}}}function gd(n){n.savedAt=Date.now(),av(n),localStorage.setItem(Th,JSON.stringify(n))}function Ib(n){return new P(Db[n]??0,.3,1.6)}function Fb(){const n=document.getElementById("game"),e=document.getElementById("hud"),t=document.getElementById("boot");if(!n||!e)return;const i=C_(),{renderer:r,scene:s,camera:a,resize:o}=R_(n,{});L_(a);const c=j_(s,{});rv();const{state:l,ok:h}=kb();Hh(l),Ko(l,Date.now()),Pb(l,h),qv(),jv(l),c.applyCosmetics(l.ch4.cosmetics.equipped);const d=Lb(gd);let p=0,f=0,g=!1;const x=new Set,m=ub();let u=null;{if(!!h){const j=l.lastLedgerTs;u=od(l),u&&(p+=u.base,dd(l,u),yx(l,Date.now(),{gapStartTs:j,elapsedS:u.elapsedS,capS:u.capS})),u&&u.kind==="ledger"&&u.base===0&&(u=null)}u&&u.kind==="never-empty"&&!h&&(u=null)}let w=!1,T=!1;const y=[];let B=l.bundled??0;const R=Z=>{for(const j of Z)(j.copy!=null||j.rail)&&y.push(j),j.grantAmount!=null&&d.save(l,"checklist")},L=Z=>{for(const j of Z)j.copy!=null&&y.push(j),j.chord&&c.pulseThread(j.chord.district),j.spawnWanderlight&&(c.spawnWanderlight(j.spawnWanderlight),_.showWanderSpawnTick())},k=Z=>{for(const j of Z){if(j.copy!=null&&y.push(j),j.chord&&c.pulseThread(j.chord.district),j.pulseFamilies)for(const ze of j.pulseFamilies)_.pulseFamilyBadge(ze);j.voyageNudge&&_.setVoyageNudge(!0)}},S=Z=>{for(const j of Z){if(j.copy!=null&&y.push(j),j.chord&&(j.chord.composite?c.pulseThread(null):c.pulseThread(j.chord.district)),j.pulseFamilies)for(const ze of j.pulseFamilies)_.pulseFamilyBadge(ze);j.ringFill&&_.fillMasteryRing(j.ringFill),j.finale&&(_.playFinale(j.finale,l),_.updatePostcardShelf(l))}},_=new cb(e,{onSortHold:Z=>{T=Z},onBuy:(Z,j)=>{const ze=()=>JSON.stringify([l.postage,l.hall,l.desks,l.racks,l.lanes]),D=ze();let nt=!1,Oe="",Me=0;if(Z==="hall"){const pe=String(j??""),oe=l.hall[pe]??0,E=en[pe];Me=E?E.cost[oe]??0:0,nt=Px(l,pe),Oe=pe}else if(Z==="desk"){const pe=Number(j??0),oe=l.desks[pe];oe&&!oe.unlocked?(Me=yl(l,pe),nt=Dx(l,pe)):oe&&oe.unlocked&&(Me=Ml(l,pe),nt=kx(l,pe)),Oe=`pad${pe+1}`}else if(Z==="satchel"){const pe=Number(j??0),oe=l.racks[pe];oe&&!oe.unlocked?(Me=Sl(l,pe),nt=Ix(l,pe)):oe&&oe.unlocked&&(Me=wl(l,pe),nt=Fx(l,pe)),Oe=`rack${pe+1}`}else if(Z==="route"){const pe=Number(j??0),oe=l.lanes[pe];oe&&!oe.unlocked?(Me=El(l,pe),nt=Ux(l,pe)):oe&&oe.unlocked&&(Me=Tl(l,pe),nt=Nx(l,pe)),Oe=`lane${pe+1}`}const Re=ze();nt&&D!==Re&&(fe(l,de.purchase,{kind:Z,id:Oe,cost:Me,wallet_after:l.postage}),bb(l,m,Z==="hall"?"inflow":Z,Oe),d.save(l,"purchase")),Z==="hall"?_.showUpgradePanel(l):_.showFamilyPanel(l,Z)},onBond:()=>{const Z=Pv(l);Z!=null&&(c.updateLanterns(l),c.pipPulse(),L(Tb(l,Z)),k(eb(l,Z)),S(ab(l,Z,Date.now(),i)),R(Dr(l,"advance")),d.save(l,"district_advance"))},onRedrawOpen:()=>{const Z=od(l);return Z&&dd(l,Z),zx(l)},onRedrawConfirm:()=>{const Z=_.redrawForecastShown;if(!Z)return;Ab(l);const j=Jo(l),ze=Mn(l),D=ze?!l.blocking.gates[ze].listDone:!1,nt=Hx(l,Z.starsPending,{cycleAgeS:l.blocking.nightMs/1e3,sealShareAtClaim:j.sealShare,voluntary:j.nudge&&D});{const Oe=Uh(l);tb(l,{wallS:Oe.wallAgeS,sessions:Oe.rows.length+1,claimStars:nt.starsAwarded,ledgerShare:p/Math.max(1,nt.earnedBooked),furnShare:f/Math.max(1,nt.earnedBooked),modSlots:[...x],rushSpent:g})}p=0,f=0,g=!1,x.clear(),_.setVoyageNudge(!1),yb(m),A=0,B=0,_.hidePanel(),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateWall(l,!1),d.save(l,"redraw"),R(Dr(l,"claim"))},onDismissMinor:()=>{l.returnCardPending&&u&&u.kind==="ledger"&&u.base>0&&(nd(l,Date.now(),{base:u.base}),rx(l,Date.now()),K()),l.returnCardPending=!1,u=null,_.hidePanel(),d.save(l,"ledger_settle")},onDouble:()=>{u&&(ix(l,u.base,Date.now()),nd(l,Date.now(),{base:u.base}),K()),l.returnCardPending=!1,_.hidePanel(),gd(l),u=null},onOpenPanel:Z=>{Z==="hall"?_.showUpgradePanel(l):_.showFamilyPanel(l,Z)},onReadPostcard:Z=>{const j=Xx(l,Z);return j&&(fe(l,de.postcardRead,{id:Z,seal:l.ch2.waxSeals}),d.save(l,"checklist")),j},onClaimMorningPost:()=>{const Z=kv(l,Date.now());return Z>0&&(fe(l,de.morningPost,{amount:Z}),f+=Z,d.save(l,"checklist")),Z},onActivateSpecial:Z=>{const j=ax(l,Z,Date.now());return j.ok?(fe(l,de.specialActivate,{id:Z}),d.save(l,"checklist"),!0):(j.earliestEmptyMs>0&&_.showSdRefusal(j.cardText),!1)},onClaimSpecial:Z=>{const j=Gv(l,Z,Date.now());return j>0&&(fe(l,de.specialClaim,{id:Z,amount:j}),f+=j,d.save(l,"checklist")),j},onUseRush:()=>{const Z=Vv(l,Date.now());return Z&&(g=!0),Z&&d.save(l,"checklist"),Z},onNotifyOptIn:()=>{(async()=>{let Z=!1;try{"Notification"in window&&(Notification.permission==="granted"?Z=!0:Notification.permission==="default"&&(Z=await Notification.requestPermission()==="granted"))}catch{}id(l,Date.now(),Z),_.hidePanel(),d.save(l,"checklist")})()},onNotifyTurnOn:()=>{(async()=>{let Z=!1;try{"Notification"in window&&(Notification.permission==="granted"?Z=!0:Notification.permission==="default"&&(Z=await Notification.requestPermission()==="granted"))}catch{}id(l,Date.now(),Z),_.hidePanel(),d.save(l,"checklist")})()},onNotifyDismiss:()=>{_x(l,Date.now()),_.hidePanel(),d.save(l,"checklist")},onNotifySettingsToggle:Z=>{let j=null;try{"Notification"in window&&(j=Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:null)}catch{j=null}vx(l,Date.now(),Z,j),_.hidePanel(),d.save(l,"checklist")},onNotifySetChannel:(Z,j)=>{xx(l,Date.now(),Z,j),d.save(l,"checklist"),_.showSettings()},onNotifyRotationHour:Z=>{bx(l,Z),d.save(l,"checklist")},onOpenReturnCard:()=>{l.returnCardPending&&u&&_.showReturnCard(u,l)},onDawnComplete:()=>{c.setDawnGrade(!1),Zv(l,Date.now()),u&&l.returnCardPending&&_.showReturnCard(u,l),d.save(l,"checklist")},onReplayFinale:()=>{hv(l,++G),_.showFinaleReplayNote()},onReplayDawn:()=>{const Z=Jv(l);Z&&(c.setDawnGrade(!0),_.startDawnOverlay(Z,{replay:!0}))},onBuyCosmetic:(Z,j)=>{const ze=pv(l,j);return ze&&(d.save(l,"checklist"),c.applyCosmetics(l.ch4.cosmetics.equipped)),ze},onEquipCosmetic:(Z,j)=>{const ze=fv(l,Z,j);return ze&&(d.save(l,"checklist"),c.applyCosmetics(l.ch4.cosmetics.equipped)),ze}},i);let A=l.districtIndex,G=0,z=null;function K(){z==null&&ux(l)&&(z=Date.now()+15e3)}let te=!1;if(u&&(l.returnCardPending=!0),Mv(l)){const Z=Kv(l,Date.now(),i);Z&&(c.setDawnGrade(!0),_.startDawnOverlay(Z),d.save(l,"ledger_settle"))}else u&&(w=!0,_.showReturnCard(u,l));c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateLanes(l,0),c.updateWall(l,ro(l));let Y=0,re=0,X=l.totalEarnedRun,he=performance.now(),ye=0,Fe=0,Ge=0,st=0,J=null;o(),window.addEventListener("resize",o),requestAnimationFrame(()=>t?.remove());const ae=new dt(-2,-2),De=new E_;r.domElement.addEventListener("pointermove",Z=>{const j=r.domElement.getBoundingClientRect();ae.x=(Z.clientX-j.left)/j.width*2-1,ae.y=-((Z.clientY-j.top)/j.height)*2+1}),r.domElement.addEventListener("pointerdown",Z=>{if(_.modalOpen)return;const j=r.domElement.getBoundingClientRect();ae.x=(Z.clientX-j.left)/j.width*2-1,ae.y=-((Z.clientY-j.top)/j.height)*2+1,De.setFromCamera(ae,a);const ze=De.intersectObjects(c.wanderGroup.children,!0)[0];if(!ze||!ze.object.userData?.kind)return;const nt=c.wanderlights.find(pe=>pe.group===ze.object.parent);if(!nt)return;const Oe=c.wanderlights.indexOf(nt),Me=Ov(l,nt.kind);f+=Me;let Re=!1;nt.kind==="grand"?Re=!0:Math.random()<Nv(l)&&(l.ch2.waxSeals+=1,Re=!0),fe(l,de.wanderlight,{kind:nt.kind,amount:Me,seal:Re,seals:l.ch2.waxSeals}),_.showWanderToast(Me,Re),c.despawnWanderlight(Oe),d.save(l,"checklist")});const me=new URLSearchParams(location.search).get("debug")==="1",Be=document.createElement("div");me&&(e.appendChild(Be),c.debugAnchors.forEach(Z=>{const j=document.createElement("div");j.className="debug-label",j.textContent=Z.label,j.dataset.label=Z.label,Be.appendChild(j)}));let Ve=0;function je(Z){requestAnimationFrame(je);let j=(Z-he)/1e3;he=Z,j>.25&&(j=.25);const ze=_.modalOpen;if(ze&&J==null&&(J=Date.now()),!ze&&J!=null){const Me=Date.now()-J;J=null,Me>0&&l.ch2.rush.activeEndTs!=null&&Date.now()<l.ch2.rush.activeEndTs&&(l.ch2.rush.activeEndTs+=Me)}if(!ze){Xv(l,Date.now()),l.liveMod?.id&&x.add(l.liveMod.id),Ko(l,Date.now()),ye+=j;let Me=0;for(;ye>=Kn&&Me<10;){const pe=l.postage,oe=X_(l,Kn,T);l.blocking.nightMs+=Kn*1e3,l.districtIndex>A?A=l.districtIndex:l.districtIndex<A&&(l.districtIndex=A);let E=0;if(oe.postageEarned>0||l.postage!==pe){const H=oe.postageEarned;E=H,wv(l,H,oe.delivered),Zx(l,H,Kn)}const v=pb(l,m,T,Kn,oe.delivered);gb(l,m,v,Kn),L(Cb(l,Z).intents),k(nb(l,Date.now(),Kn,E)),S(ob(l)),R(Mb(l)),R(Sb(l,{rainmarket:l.blocking.gates.rainmarket,horizon:l.blocking.gates.horizon},{rainmarketListNearly:Av(l,"rainmarket")})),(l.bundled??0)>B+.5&&c.leverKick(),B=l.bundled??0,ye-=Kn,Me++,Ge+=Kn}const Re=l.totalEarnedRun-X;if(X=l.totalEarnedRun,Re>0&&!_.dawnActive){for(re+=Re/Math.max(1,ml(l)),Y-=j;!i&&re>=1&&c.flyers.length<80&&!(Y>0);)re-=1,Y+=.09,c.spawnFlyer(new P(-2.6+(Math.random()-.5)*1.4,.5,4),Ib(Math.floor(Math.random()*4)));re>12&&(re=12)}{const pe=c.wanderlights.length;if(Bv(l,st,pe)){const oe=Math.random()<Uv(l);c.spawnWanderlight(oe?"grand":"normal"),_.showWanderSpawnTick(),fe(l,de.wanderSpawn,{kind:oe?"grand":"normal",scripted:!1,t_s:Ge}),st=0}else st+=j*1e3}if(y.length>0&&!_.modalOpen&&!w){const pe=y.shift();_.showCoach(pe,_.anchorFor(pe.highlight))}if(l.ch5.a2.state==="card_pending"&&!_.modalOpen&&!w&&y.length===0&&!_.dawnActive&&(_.showNotificationInvite(l),d.save(l,"checklist")),z!=null&&Date.now()>=z&&!_.modalOpen&&!w&&!_.dawnActive){z=null;const pe=px(l);_.showOfficePapers(l,pe.includes(fn.papers.beat)?{railLine:fn.papers.copy}:void 0),d.save(l,"checklist")}{const pe=ex(l,Ge);c.setDawnIdleFlags(pe),te=pe.lampWarm}{const pe=Ex(l,Date.now(),{pushAvailable:typeof Notification<"u"&&Notification.permission==="granted"});for(const oe of pe.notifyPayloads){if(oe.as==="os")try{typeof Notification<"u"&&Notification.permission==="granted"&&new Notification(oe.title,{body:oe.body})}catch{}_.showNotifyBanner(oe)}}}w&&!_.modalOpen&&(w=!1),c.animateFlyers(j,i),c.animateWanderlights(j,Ge,i),c.tickCharacters(j,Ge,i),c.tickChords(j),c.updateDesks(l),c.updateRacks(l);const D=l.backlog/Math.max(1e-9,mb(l)),nt=m.per.inflow.level==="choke";if(c.updateTray(l,D,nt),c.updateDistricts(l,{mpDue:Ss(l,Date.now()),sdActive:l.ch2.specialDeliveries.active.length,stampCapsAt:0,sdFills:l.ch2.specialDeliveries.active.slice(0,3).map(Me=>{const pe=(kn.recipes.find(oe=>oe.id===Me.recipeId)?.timerH??1)*36e5;return pe>0?Math.min(1,Math.max(0,(Me.endTs-Date.now())/pe)):0})}),c.updateModDressing(l),Z-Fe>250){Fe=Z;const Me=Math.max(1e-9,64);c.updateLanes(l,Math.min(1,m.deliveredEma/Me)),c.updateWall(l,ro(l))}const Oe=Object.keys(m.per).find(Me=>m.per[Me].level==="choke");te||c.setLampLevel(Oe?"red":T?"ok":"warn"),_.updateHud(l,m,ro(l));for(const Me of["desk","satchel","route","inflow"])m.per[Me].level==="choke"&&Z%1e3<34&&_.showBottleneckPulse(Me);if(l.perfect>=gl(l)-1e-6&&c.pipPulse(),d.tick(l,Z),me&&(Ve+=j,Ve>.25)){Ve=0;const Me=r.domElement.clientWidth,Re=r.domElement.clientHeight;c.debugAnchors.forEach(pe=>{const oe=Be.querySelector(`[data-label="${pe.label}"]`);if(!oe)return;const E=pe.pos.clone().project(a);oe.style.left=`${(E.x+1)/2*Me}px`,oe.style.top=`${(-E.y+1)/2*Re}px`})}r.render(s,a)}requestAnimationFrame(je),window.__md={get state(){return l},hall:c,project:Z=>{a.updateMatrixWorld(!0);const j=new P(Z.x,Z.y,Z.z).project(a),ze=r.domElement.getBoundingClientRect();return{px:ze.left+(j.x+1)/2*ze.width,py:ze.top+(1-j.y)/2*ze.height}},blocking:{get meters(){return m},events:ah,forecast:()=>Al(l),flattening:()=>Jo(l),get queue(){return y.length}}}}Fb();
