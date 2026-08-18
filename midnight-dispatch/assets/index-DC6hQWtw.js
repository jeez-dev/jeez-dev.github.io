(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="170",Kc=0,Mo=1,Zc=2,ql=1,Jc=2,In=3,Jn=0,Gt=1,Fn=2,Kn=0,Xi=1,So=2,yo=3,bo=4,Qc=5,ui=100,ed=101,td=102,nd=103,id=104,rd=200,sd=201,ad=202,od=203,la=204,ca=205,ld=206,cd=207,dd=208,ud=209,hd=210,fd=211,pd=212,md=213,gd=214,da=0,ua=1,ha=2,ji=3,fa=4,pa=5,ma=6,ga=7,Ja=0,_d=1,vd=2,Zn=0,xd=1,Md=2,Sd=3,Yl=4,yd=5,bd=6,Ed=7,jl=300,Ki=301,Zi=302,_a=303,va=304,Ss=306,xa=1e3,fi=1001,Ma=1002,Zt=1003,Td=1004,zr=1005,yn=1006,Cs=1007,pi=1008,On=1009,Kl=1010,Zl=1011,Rr=1012,Qa=1013,gi=1014,bn=1015,Dr=1016,eo=1017,to=1018,Ji=1020,Jl=35902,Ql=1021,ec=1022,un=1023,tc=1024,nc=1025,$i=1026,Qi=1027,no=1028,io=1029,ic=1030,ro=1031,so=1033,cs=33776,ds=33777,us=33778,hs=33779,Sa=35840,ya=35841,ba=35842,Ea=35843,Ta=36196,wa=37492,Aa=37496,Ca=37808,Ra=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Fa=37815,Na=37816,ka=37817,Oa=37818,Ba=37819,za=37820,Ha=37821,fs=36492,Va=36494,Ga=36495,rc=36283,Wa=36284,Xa=36285,$a=36286,wd=3200,Ad=3201,sc=0,Cd=1,Yn="",Kt="srgb",ir="srgb-linear",ys="linear",dt="srgb",Ei=7680,Eo=519,Rd=512,Pd=513,Ld=514,ac=515,Dd=516,Id=517,Ud=518,Fd=519,To=35044,wo=35048,Ao="300 es",Nn=2e3,ms=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Co=1234567;const Tr=Math.PI/180,Pr=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function ao(n,e){return(n%e+e)%e}function Nd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kd(n,e,t){return n!==e?(t-n)/(e-n):0}function wr(n,e,t){return(1-t)*n+t*e}function Od(n,e,t,i){return wr(n,e,1-Math.exp(-t*i))}function Bd(n,e=1){return e-Math.abs(ao(n,e*2)-e)}function zd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gd(n,e){return n+Math.random()*(e-n)}function Wd(n){return n*(.5-Math.random())}function Xd(n){n!==void 0&&(Co=n);let e=Co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $d(n){return n*Tr}function qd(n){return n*Pr}function Yd(n){return(n&n-1)===0&&n!==0}function jd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zd(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Un={DEG2RAD:Tr,RAD2DEG:Pr,generateUUID:sr,clamp:Nt,euclideanModulo:ao,mapLinear:Nd,inverseLerp:kd,lerp:wr,damp:Od,pingpong:Bd,smoothstep:zd,smootherstep:Hd,randInt:Vd,randFloat:Gd,randFloatSpread:Wd,seededRandom:Xd,degToRad:$d,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:jd,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Zd,normalize:Ut,denormalize:Hi};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],x=r[0],p=r[3],h=r[6],E=r[1],T=r[4],S=r[7],F=r[2],C=r[5],A=r[8];return s[0]=a*x+o*E+c*F,s[3]=a*p+o*T+c*C,s[6]=a*h+o*S+c*A,s[1]=l*x+u*E+d*F,s[4]=l*p+u*T+d*C,s[7]=l*h+u*S+d*A,s[2]=f*x+m*E+g*F,s[5]=f*p+m*T+g*C,s[8]=f*h+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,m=l*s-a*c,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rs.makeScale(e,t)),this}rotate(e){return this.premultiply(Rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new He;function oc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){const n=gs("canvas");return n.style.display="block",n}const Ro={};function yr(n){n in Ro||(Ro[n]=!0,console.warn(n))}function Qd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function eu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(n.r=kn(n.r),n.g=kn(n.g),n.b=kn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yn?ys:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Po=[.64,.33,.3,.6,.15,.06],Lo=[.2126,.7152,.0722],Do=[.3127,.329],Io=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[ir]:{primaries:Po,whitePoint:Do,transfer:ys,toXYZ:Io,fromXYZ:Uo,luminanceCoefficients:Lo,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:Po,whitePoint:Do,transfer:dt,toXYZ:Io,fromXYZ:Uo,luminanceCoefficients:Lo,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let Ti;class nu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=gs("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iu=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ps(r[a].image)):s.push(Ps(r[a]))}else s=Ps(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;class Ot extends rr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=fi,r=fi,s=yn,a=pi,o=un,c=On,l=Ot.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=sr(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=jl;Ot.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(m+1)/2,F=(h+1)/2,C=(u+f)/4,A=(d+x)/4,L=(g+p)/4;return T>S&&T>F?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=A/i):S>F?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=L/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=A/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-x)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class su extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends su{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cc extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class au extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==f||l!==m||u!==g){let p=1-o;const h=c*f+l*m+u*g+d*x,E=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const F=Math.sqrt(T),C=Math.atan2(F,h*E);p=Math.sin(p*C)/F,o=Math.sin(o*C)/F}const S=o*E;if(c=c*p+f*S,l=l*p+m*S,u=u*p+g*S,d=d*p+x*S,p===1-o){const F=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=F,l*=F,u*=F,d*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-o*m,e[t+2]=l*g+u*m+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ls.copy(this).projectOnVector(e),this.sub(Ls)}reflect(e){return this.sub(Ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new I,Fo=new ar;class vi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Vr.subVectors(this.max,pr),wi.subVectors(e.a,pr),Ai.subVectors(e.b,pr),Ci.subVectors(e.c,pr),Hn.subVectors(Ai,wi),Vn.subVectors(Ci,Ai),ni.subVectors(wi,Ci);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ni.z,ni.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ni.z,0,-ni.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ni.y,ni.x,0];return!Ds(t,wi,Ai,Ci,Vr)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,wi,Ai,Ci,Vr))?!1:(Gr.crossVectors(Hn,Vn),t=[Gr.x,Gr.y,Gr.z],Ds(t,wi,Ai,Ci,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,Hr=new vi,wi=new I,Ai=new I,Ci=new I,Hn=new I,Vn=new I,ni=new I,pr=new I,Vr=new I,Gr=new I,ii=new I;function Ds(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ii.fromArray(n,s);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ou=new vi,mr=new I,Is=new I;class Ir{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ou.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Is)),this.expandByPoint(mr.copy(e.center).sub(Is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new I,Us=new I,Wr=new I,Gn=new I,Fs=new I,Xr=new I,Ns=new I;class dc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Us.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Us);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Gn.dot(this.direction),c=-Gn.dot(Wr),l=Gn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*c-o,f=a*o-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Us).addScaledVector(Wr,f),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,r,s){Fs.subVectors(t,e),Xr.subVectors(i,e),Ns.crossVectors(Fs,Xr);let a=this.direction.dot(Ns),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const c=o*this.direction.dot(Xr.crossVectors(Gn,Xr));if(c<0)return null;const l=o*this.direction.dot(Fs.cross(Gn));if(l<0||c+l>a)return null;const u=-o*Gn.dot(Ns);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,a,o,c,l,u,d,f,m,g,x,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,f,m,g,x,p)}set(e,t,i,r,s,a,o,c,l,u,d,f,m,g,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,x=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,x=l*d;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,x=l*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,x=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lu,e,cu)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Wn.crossVectors(i,$t),Wn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Wn.crossVectors(i,$t)),Wn.normalize(),$r.crossVectors($t,Wn),r[0]=Wn.x,r[4]=$r.x,r[8]=$t.x,r[1]=Wn.y,r[5]=$r.y,r[9]=$t.y,r[2]=Wn.z,r[6]=$r.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],h=i[14],E=i[3],T=i[7],S=i[11],F=i[15],C=r[0],A=r[4],L=r[8],y=r[12],M=r[1],w=r[5],N=r[9],k=r[13],$=r[2],Z=r[6],q=r[10],te=r[14],G=r[3],he=r[7],Y=r[11],Q=r[15];return s[0]=a*C+o*M+c*$+l*G,s[4]=a*A+o*w+c*Z+l*he,s[8]=a*L+o*N+c*q+l*Y,s[12]=a*y+o*k+c*te+l*Q,s[1]=u*C+d*M+f*$+m*G,s[5]=u*A+d*w+f*Z+m*he,s[9]=u*L+d*N+f*q+m*Y,s[13]=u*y+d*k+f*te+m*Q,s[2]=g*C+x*M+p*$+h*G,s[6]=g*A+x*w+p*Z+h*he,s[10]=g*L+x*N+p*q+h*Y,s[14]=g*y+x*k+p*te+h*Q,s[3]=E*C+T*M+S*$+F*G,s[7]=E*A+T*w+S*Z+F*he,s[11]=E*L+T*N+S*q+F*Y,s[15]=E*y+T*k+S*te+F*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*m-i*c*m)+x*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+t*l*d-t*o*m-s*a*d+i*a*m+s*o*u-i*l*u)+h*(-r*o*u-t*c*d+t*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],h=e[15],E=d*p*l-x*f*l+x*c*m-o*p*m-d*c*h+o*f*h,T=g*f*l-u*p*l-g*c*m+a*p*m+u*c*h-a*f*h,S=u*x*l-g*d*l+g*o*m-a*x*m-u*o*h+a*d*h,F=g*d*c-u*x*c-g*o*f+a*x*f+u*o*p-a*d*p,C=t*E+i*T+r*S+s*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=E*A,e[1]=(x*f*s-d*p*s-x*r*m+i*p*m+d*r*h-i*f*h)*A,e[2]=(o*p*s-x*c*s+x*r*l-i*p*l-o*r*h+i*c*h)*A,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*m-i*c*m)*A,e[4]=T*A,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*A,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*h-t*c*h)*A,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*A,e[8]=S*A,e[9]=(g*d*s-u*x*s-g*i*m+t*x*m+u*i*h-t*d*h)*A,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*h+t*o*h)*A,e[11]=(u*o*s-a*d*s-u*i*l+t*d*l+a*i*m-t*o*m)*A,e[12]=F*A,e[13]=(u*x*r-g*d*r+g*i*f-t*x*f-u*i*p+t*d*p)*A,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*p-t*o*p)*A,e[15]=(a*d*r-u*o*r+u*i*c-t*d*c-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,f=s*l,m=s*u,g=s*d,x=a*u,p=a*d,h=o*d,E=c*l,T=c*u,S=c*d,F=i.x,C=i.y,A=i.z;return r[0]=(1-(x+h))*F,r[1]=(m+S)*F,r[2]=(g-T)*F,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(f+h))*C,r[6]=(p+E)*C,r[7]=0,r[8]=(g+T)*A,r[9]=(p-E)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const l=1/s,u=1/a,d=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Nn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===Nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ms)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Nn){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(a-s),f=(t+e)*l,m=(i+r)*u;let g,x;if(o===Nn)g=(a+s)*d,x=-2*d;else if(o===ms)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ri=new I,ln=new ft,lu=new I(0,0,0),cu=new I(1,1,1),Wn=new I,$r=new I,$t=new I,No=new ft,ko=new ar;class mn{constructor(e=0,t=0,i=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ko.setFromEuler(this),this.setFromQuaternion(ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let du=0;const Oo=new I,Pi=new ar,Pn=new ft,qr=new I,gr=new I,uu=new I,hu=new ar,Bo=new I(1,0,0),zo=new I(0,1,0),Ho=new I(0,0,1),Vo={type:"added"},fu={type:"removed"},Li={type:"childadded",child:null},ks={type:"childremoved",child:null};class At extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new I,t=new mn,i=new ar,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Bo,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(Ho,e)}translateOnAxis(e,t){return Oo.copy(e).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bo,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(Ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(gr,qr,this.up):Pn.lookAt(qr,gr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vo),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fu),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vo),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,Ln=new I,Os=new I,Dn=new I,Di=new I,Ii=new I,Go=new I,Bs=new I,zs=new I,Hs=new I,Vs=new gt,Gs=new gt,Ws=new gt;class dn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),Ln.subVectors(i,t),Os.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Ln),c=cn.dot(Os),l=Ln.dot(Ln),u=Ln.dot(Os),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Vs.setScalar(0),Gs.setScalar(0),Ws.setScalar(0),Vs.fromBufferAttribute(e,t),Gs.fromBufferAttribute(e,i),Ws.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vs,s.x),a.addScaledVector(Gs,s.y),a.addScaledVector(Ws,s.z),a}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),Ln.subVectors(e,t),cn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Ii.subVectors(s,i),Bs.subVectors(e,i);const c=Di.dot(Bs),l=Ii.dot(Bs);if(c<=0&&l<=0)return t.copy(i);zs.subVectors(e,r);const u=Di.dot(zs),d=Ii.dot(zs);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Di,a);Hs.subVectors(e,s);const m=Di.dot(Hs),g=Ii.dot(Hs);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ii,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Go.subVectors(s,r),o=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Go,o);const h=1/(p+x+f);return a=x*h,o=f*h,t.copy(i).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ao(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Xs(a,s,e+1/3),this.g=Xs(a,s,e),this.b=Xs(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=uc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return nt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Nt(Pt.r*255,0,255))*65536+Math.round(Nt(Pt.g*255,0,255))*256+Math.round(Nt(Pt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Kt){nt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Yr);const i=wr(Xn.h,Yr.h,t),r=wr(Xn.s,Yr.s,t),s=wr(Xn.l,Yr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ze;Ze.NAMES=uc;let pu=0;class Ur extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=sr(),this.name="",this.blending=Xi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Ur{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new I,jr=new rt;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=To,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),e}}class hc extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fc extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mu=0;const nn=new ft,$s=new At,Ui=new I,qt=new vi,_r=new vi,wt=new I;class wn extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?fc:hc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(qt.min,_r.min),qt.expandByPoint(wt),wt.addVectors(qt.max,_r.max),qt.expandByPoint(wt)):(qt.expandByPoint(_r.min),qt.expandByPoint(_r.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)wt.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),wt.add(Ui)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new I,c[L]=new I;const l=new I,u=new I,d=new I,f=new rt,m=new rt,g=new rt,x=new I,p=new I;function h(L,y,M){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),o[L].add(x),o[y].add(x),o[M].add(x),c[L].add(p),c[y].add(p),c[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const M=E[L],w=M.start,N=M.count;for(let k=w,$=w+N;k<$;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new I,S=new I,F=new I,C=new I;function A(L){F.fromBufferAttribute(r,L),C.copy(F);const y=o[L];T.copy(y),T.sub(F.multiplyScalar(F.dot(y))).normalize(),S.crossVectors(C,y);const w=S.dot(c[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,w)}for(let L=0,y=E.length;L<y;++L){const M=E[L],w=M.start,N=M.count;for(let k=w,$=w+N;k<$;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new hn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new ft,ri=new dc,Kr=new Ir,Xo=new I,Zr=new I,Jr=new I,Qr=new I,qs=new I,es=new I,$o=new I,ts=new I;class ot extends At{constructor(e=new wn,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(qs.fromBufferAttribute(d,e),a?es.addScaledVector(qs,u):es.addScaledVector(qs.sub(t),u))}t.add(es)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(Kr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Kr,Xo)===null||ri.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Wo),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=a[p.materialIndex],E=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,F=T;S<F;S+=3){const C=o.getX(S),A=o.getX(S+1),L=o.getX(S+2);r=ns(this,h,e,i,l,u,d,C,A,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const E=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=ns(this,a,e,i,l,u,d,E,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=a[p.materialIndex],E=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,F=T;S<F;S+=3){const C=S,A=S+1,L=S+2;r=ns(this,h,e,i,l,u,d,C,A,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const E=p,T=p+1,S=p+2;r=ns(this,a,e,i,l,u,d,E,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function gu(n,e,t,i,r,s,a,o){let c;if(e.side===Gt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Jn,o),c===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ts);return l<t.near||l>t.far?null:{distance:l,point:ts.clone(),object:n}}function ns(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Zr),n.getVertexPosition(c,Jr),n.getVertexPosition(l,Qr);const u=gu(n,e,t,i,Zr,Jr,Qr,$o);if(u){const d=new I;dn.getBarycoord($o,Zr,Jr,Qr,d),r&&(u.uv=dn.getInterpolatedAttribute(r,o,c,l,d,new rt)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,c,l,d,new rt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};dn.getNormal(Zr,Jr,Qr,f.normal),u.face=f,u.barycoord=d}return u}class Qn extends wn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(d,2));function g(x,p,h,E,T,S,F,C,A,L,y){const M=S/A,w=F/L,N=S/2,k=F/2,$=C/2,Z=A+1,q=L+1;let te=0,G=0;const he=new I;for(let Y=0;Y<q;Y++){const Q=Y*w-k;for(let Ie=0;Ie<Z;Ie++){const Je=Ie*M-N;he[x]=Je*E,he[p]=Q*T,he[h]=$,l.push(he.x,he.y,he.z),he[x]=0,he[p]=0,he[h]=C>0?1:-1,u.push(he.x,he.y,he.z),d.push(Ie/A),d.push(1-Y/L),te+=1}}for(let Y=0;Y<L;Y++)for(let Q=0;Q<A;Q++){const Ie=f+Q+Z*Y,Je=f+Q+Z*(Y+1),X=f+(Q+1)+Z*(Y+1),re=f+(Q+1)+Z*Y;c.push(Ie,Je,re),c.push(Je,X,re),G+=6}o.addGroup(m,G,y),m+=G,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}function _u(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const vu={clone:er,merge:Ft};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Ur{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=_u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new I,qo=new rt,Yo=new rt;class an extends mc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,qo,Yo),t.subVectors(Yo,qo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Ni=1;class Su extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Fi,Ni,e,t);r.layers=this.layers,this.add(r);const s=new an(Fi,Ni,e,t);s.layers=this.layers,this.add(s);const a=new an(Fi,Ni,e,t);a.layers=this.layers,this.add(a);const o=new an(Fi,Ni,e,t);o.layers=this.layers,this.add(o);const c=new an(Fi,Ni,e,t);c.layers=this.layers,this.add(c);const l=new an(Fi,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gc extends Ot{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qn(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Kn});s.uniforms.tEquirect.value=t;const a=new ot(r,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=yn),new Su(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ys=new I,bu=new I,Eu=new He;class li{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ys.subVectors(i,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Eu.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Ir,is=new I;class lo{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],h=r[12],E=r[13],T=r[14],S=r[15];if(i[0].setComponents(c-s,f-l,p-m,S-h).normalize(),i[1].setComponents(c+s,f+l,p+m,S+h).normalize(),i[2].setComponents(c+a,f+u,p+g,S+E).normalize(),i[3].setComponents(c-a,f-u,p-g,S-E).normalize(),i[4].setComponents(c-o,f-d,p-x,S-T).normalize(),t===Nn)i[5].setComponents(c+o,f+d,p+x,S+T).normalize();else if(t===ms)i[5].setComponents(o,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tu(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class mi extends wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=t/c,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const E=h*f-a;for(let T=0;T<l;T++){const S=T*d-s;g.push(S,-E,0),x.push(0,0,1),p.push(T/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){const T=E+l*h,S=E+l*(h+1),F=E+1+l*(h+1),C=E+1+l*h;m.push(T,S,C),m.push(S,F,C)}this.setIndex(m),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
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
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,zu=`#ifdef USE_BUMPMAP
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fh=`#ifdef USE_GRADIENTMAP
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
}`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_h=`uniform bool receiveShadow;
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
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bh=`PhysicalMaterial material;
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
#endif`,Eh=`struct PhysicalMaterial {
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
}`,Th=`
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
#endif`,wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fh=`#if defined( USE_POINTS_UV )
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
#endif`,Nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yh=`#ifdef USE_NORMALMAP
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
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
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
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
}`,Uf=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`uniform float scale;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#define LAMBERT
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
}`,Gf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,$f=`#define NORMAL
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
}`,qf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Kf=`#define STANDARD
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
}`,Zf=`#define STANDARD
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
}`,Jf=`#define TOON
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
}`,Qf=`#define TOON
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
}`,ep=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 color;
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
}`,rp=`uniform float rotation;
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
}`,sp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:wu,alphahash_pars_fragment:Au,alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:Pu,alphatest_pars_fragment:Lu,aomap_fragment:Du,aomap_pars_fragment:Iu,batching_pars_vertex:Uu,batching_vertex:Fu,begin_vertex:Nu,beginnormal_vertex:ku,bsdfs:Ou,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:$u,color_pars_vertex:qu,color_vertex:Yu,common:ju,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:eh,emissivemap_pars_fragment:th,colorspace_fragment:nh,colorspace_pars_fragment:ih,envmap_fragment:rh,envmap_common_pars_fragment:sh,envmap_pars_fragment:ah,envmap_pars_vertex:oh,envmap_physical_pars_fragment:vh,envmap_vertex:lh,fog_vertex:ch,fog_pars_vertex:dh,fog_fragment:uh,fog_pars_fragment:hh,gradientmap_pars_fragment:fh,lightmap_pars_fragment:ph,lights_lambert_fragment:mh,lights_lambert_pars_fragment:gh,lights_pars_begin:_h,lights_toon_fragment:xh,lights_toon_pars_fragment:Mh,lights_phong_fragment:Sh,lights_phong_pars_fragment:yh,lights_physical_fragment:bh,lights_physical_pars_fragment:Eh,lights_fragment_begin:Th,lights_fragment_maps:wh,lights_fragment_end:Ah,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Rh,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Lh,map_fragment:Dh,map_pars_fragment:Ih,map_particle_fragment:Uh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Nh,metalnessmap_pars_fragment:kh,morphinstance_vertex:Oh,morphcolor_vertex:Bh,morphnormal_vertex:zh,morphtarget_pars_vertex:Hh,morphtarget_vertex:Vh,normal_fragment_begin:Gh,normal_fragment_maps:Wh,normal_pars_fragment:Xh,normal_pars_vertex:$h,normal_vertex:qh,normalmap_pars_fragment:Yh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:Zh,iridescence_pars_fragment:Jh,opaque_fragment:Qh,packing:ef,premultiplied_alpha_fragment:tf,project_vertex:nf,dithering_fragment:rf,dithering_pars_fragment:sf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:df,shadowmask_pars_fragment:uf,skinbase_vertex:hf,skinning_pars_vertex:ff,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:vf,tonemapping_pars_fragment:xf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:yf,uv_pars_vertex:bf,uv_vertex:Ef,worldpos_vertex:Tf,background_vert:wf,background_frag:Af,backgroundCube_vert:Cf,backgroundCube_frag:Rf,cube_vert:Pf,cube_frag:Lf,depth_vert:Df,depth_frag:If,distanceRGBA_vert:Uf,distanceRGBA_frag:Ff,equirect_vert:Nf,equirect_frag:kf,linedashed_vert:Of,linedashed_frag:Bf,meshbasic_vert:zf,meshbasic_frag:Hf,meshlambert_vert:Vf,meshlambert_frag:Gf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:$f,meshnormal_frag:qf,meshphong_vert:Yf,meshphong_frag:jf,meshphysical_vert:Kf,meshphysical_frag:Zf,meshtoon_vert:Jf,meshtoon_frag:Qf,points_vert:ep,points_frag:tp,shadow_vert:np,shadow_frag:ip,sprite_vert:rp,sprite_frag:sp},me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mn.physical={uniforms:Ft([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const rs={r:0,b:0,g:0},ai=new mn,ap=new ft;function op(n,e,t,i,r,s,a){const o=new Ze(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function x(E){let T=!1;const S=g(E);S===null?h(o,c):S&&S.isColor&&(h(S,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===Ss)?(u===void 0&&(u=new ot(new Qn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:er(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ai.copy(T.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(ai)),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==dt,(d!==S||f!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ot(new mi(2,2),new ei({name:"BackgroundMaterial",uniforms:er(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,T){E.getRGB(rs,pc(n)),i.buffers.color.setClear(rs.r,rs.g,rs.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),c=T,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(o,c)},render:x,addToRenderList:p}}function lp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,w,N,k,$){let Z=!1;const q=d(k,N,w);s!==q&&(s=q,l(s.object)),Z=m(M,k,N,$),Z&&g(M,k,N,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(M,w,N,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,w,N){const k=N.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let Z=$[w.id];Z===void 0&&(Z={},$[w.id]=Z);let q=Z[k];return q===void 0&&(q=f(c()),Z[k]=q),q}function f(M){const w=[],N=[],k=[];for(let $=0;$<t;$++)w[$]=0,N[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,w,N,k){const $=s.attributes,Z=w.attributes;let q=0;const te=N.getAttributes();for(const G in te)if(te[G].location>=0){const Y=$[G];let Q=Z[G];if(Q===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Y===void 0||Y.attribute!==Q||Q&&Y.data!==Q.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function g(M,w,N,k){const $={},Z=w.attributes;let q=0;const te=N.getAttributes();for(const G in te)if(te[G].location>=0){let Y=Z[G];Y===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const Q={};Q.attribute=Y,Y&&Y.data&&(Q.data=Y.data),$[G]=Q,q++}s.attributes=$,s.attributesNum=q,s.index=k}function x(){const M=s.newAttributes;for(let w=0,N=M.length;w<N;w++)M[w]=0}function p(M){h(M,0)}function h(M,w){const N=s.newAttributes,k=s.enabledAttributes,$=s.attributeDivisors;N[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),$[M]!==w&&(n.vertexAttribDivisor(M,w),$[M]=w)}function E(){const M=s.newAttributes,w=s.enabledAttributes;for(let N=0,k=w.length;N<k;N++)w[N]!==M[N]&&(n.disableVertexAttribArray(N),w[N]=0)}function T(M,w,N,k,$,Z,q){q===!0?n.vertexAttribIPointer(M,w,N,$,Z):n.vertexAttribPointer(M,w,N,k,$,Z)}function S(M,w,N,k){x();const $=k.attributes,Z=N.getAttributes(),q=w.defaultAttributeValues;for(const te in Z){const G=Z[te];if(G.location>=0){let he=$[te];if(he===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const Y=he.normalized,Q=he.itemSize,Ie=e.get(he);if(Ie===void 0)continue;const Je=Ie.buffer,X=Ie.type,re=Ie.bytesPerElement,ue=X===n.INT||X===n.UNSIGNED_INT||he.gpuType===Qa;if(he.isInterleavedBufferAttribute){const de=he.data,ae=de.stride,ve=he.offset;if(de.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)h(G.location+De,de.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let De=0;De<G.locationSize;De++)p(G.location+De);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let De=0;De<G.locationSize;De++)T(G.location+De,Q/G.locationSize,X,Y,ae*re,(ve+Q/G.locationSize*De)*re,ue)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)h(G.location+de,he.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<G.locationSize;de++)p(G.location+de);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let de=0;de<G.locationSize;de++)T(G.location+de,Q/G.locationSize,X,Y,Q*re,Q/G.locationSize*de*re,ue)}}else if(q!==void 0){const Y=q[te];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(G.location,Y);break;case 3:n.vertexAttrib3fv(G.location,Y);break;case 4:n.vertexAttrib4fv(G.location,Y);break;default:n.vertexAttrib1fv(G.location,Y)}}}}E()}function F(){L();for(const M in i){const w=i[M];for(const N in w){const k=w[N];for(const $ in k)u(k[$].object),delete k[$];delete w[N]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const N in w){const k=w[N];for(const $ in k)u(k[$].object),delete k[$];delete w[N]}delete i[M.id]}function A(M){for(const w in i){const N=i[w];if(N[M.id]===void 0)continue;const k=N[M.id];for(const $ in k)u(k[$].object),delete k[$];delete N[M.id]}}function L(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function cp(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function dp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==un&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==On&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bn&&!L)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:F,maxSamples:C}}function up(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const E=s?0:i,T=E*4;let S=h.clippingState||null;c.value=S,S=u(g,f,T,m);for(let F=0;F!==T;++F)S[F]=t[F];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const h=m+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==x;++T,S+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function hp(n){let e=new WeakMap;function t(a,o){return o===_a?a.mapping=Ki:o===va&&(a.mapping=Zi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_a||o===va)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yu(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vc extends mc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,jo=[.125,.215,.35,.446,.526,.582],hi=20,js=new vc,Ko=new Ze;let Ks=null,Zs=0,Js=0,Qs=!1;const ci=(1+Math.sqrt(5))/2,ki=1/ci,Zo=[new I(-ci,ki,0),new I(ci,ki,0),new I(-ki,0,ci),new I(ki,0,ci),new I(0,ci,-ki),new I(0,ci,ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,Zs,Js),this._renderer.xr.enabled=Qs,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Dr,format:un,colorSpace:ir,depthBuffer:!1},r=Qo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(s)),this._blurMaterial=pp(s,e,t)}return r}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,i,r){const o=new an(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ko),u.toneMapping=Zn,u.autoClear=!1;const m=new Vt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new ot(new Qn,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ko),x=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):E===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const T=this._cubeSize;ss(r,E*T,h>2?T:0,T,T),u.setRenderTarget(r),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zo[(r-s-1)%Zo.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ot(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hi-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):hi;p>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const h=[];let E=0;for(let A=0;A<hi;++A){const L=A/x,y=Math.exp(-L*L/2);h.push(y),A===0?E+=y:A<p&&(E+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const S=this._sizeLods[r],F=3*S*(r>T-Vi?r-T+Vi:0),C=4*(this._cubeSize-S);ss(t,F,C,3*S,2*S),c.setRenderTarget(t),c.render(d,js)}}function fp(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Vi?c=jo[a-n+Vi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,x=3,p=2,h=1,E=new Float32Array(x*g*m),T=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,L=C>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(y,x*g*C),T.set(f,p*g*C);const M=[C,C,C,C,C,C];S.set(M,h*g*C)}const F=new wn;F.setAttribute("position",new hn(E,x)),F.setAttribute("uv",new hn(T,p)),F.setAttribute("faceIndex",new hn(S,h)),e.push(F),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qo(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Ss,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pp(n,e,t){const i=new Float32Array(hi),r=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:co(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function el(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function tl(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function mp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===_a||c===va,u=c===Ki||c===Zi;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Jo(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Jo(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _p(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let p=0,h=x.length;p<h;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let T=0,S=E.length;T<S;T+=3){const F=E[T+0],C=E[T+1],A=E[T+2];f.push(F,C,C,A,A,F)}}else if(g!==void 0){const E=g.array;x=g.version;for(let T=0,S=E.length/3-1;T<S;T+=3){const F=T+0,C=T+1,A=T+2;f.push(F,C,C,A,A,F)}}else return;const p=new(oc(f)?fc:hc)(f,1);p.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function vp(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function d(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/a,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,g);let h=0;for(let E=0;E<g;E++)h+=m[E]*x[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mp(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let F=o.attributes.position.count*S,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const A=new Float32Array(F*C*4*d),L=new cc(A,F,C,d);L.type=bn,L.needsUpdate=!0;const y=S*4;for(let w=0;w<d;w++){const N=h[w],k=E[w],$=T[w],Z=F*C*4*w;for(let q=0;q<N.count;q++){const te=q*y;g===!0&&(r.fromBufferAttribute(N,q),A[Z+te+0]=r.x,A[Z+te+1]=r.y,A[Z+te+2]=r.z,A[Z+te+3]=0),x===!0&&(r.fromBufferAttribute(k,q),A[Z+te+4]=r.x,A[Z+te+5]=r.y,A[Z+te+6]=r.z,A[Z+te+7]=0),p===!0&&(r.fromBufferAttribute($,q),A[Z+te+8]=r.x,A[Z+te+9]=r.y,A[Z+te+10]=r.z,A[Z+te+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new rt(F,C)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Sp(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class xc extends Ot{constructor(e,t,i,r,s,a,o,c,l,u=$i){if(u!==$i&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=gi),i===void 0&&u===Qi&&(i=Ji),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mc=new Ot,nl=new xc(1,1),Sc=new cc,yc=new au,bc=new gc,il=[],rl=[],sl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=il[r];if(s===void 0&&(s=new Float32Array(r),il[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bs(n,e){let t=rl[e];t===void 0&&(t=new Int32Array(e),rl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;ol.set(i),n.uniformMatrix2fv(this.addr,!1,ol),Tt(t,i)}}function Ap(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;al.set(i),n.uniformMatrix3fv(this.addr,!1,al),Tt(t,i)}}function Cp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;sl.set(i),n.uniformMatrix4fv(this.addr,!1,sl),Tt(t,i)}}function Rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function Ip(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function kp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nl.compareFunction=ac,s=nl):s=Mc,t.setTexture2D(e||s,r)}function Op(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yc,r)}function Bp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bc,r)}function zp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sc,r)}function Hp(n){switch(n){case 5126:return yp;case 35664:return bp;case 35665:return Ep;case 35666:return Tp;case 35674:return wp;case 35675:return Ap;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Dp;case 5125:return Ip;case 36294:return Up;case 36295:return Fp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function Vp(n,e){n.uniform1fv(this.addr,e)}function Gp(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function Wp(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function Xp(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function $p(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qp(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yp(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jp(n,e){n.uniform1iv(this.addr,e)}function Kp(n,e){n.uniform2iv(this.addr,e)}function Zp(n,e){n.uniform3iv(this.addr,e)}function Jp(n,e){n.uniform4iv(this.addr,e)}function Qp(n,e){n.uniform1uiv(this.addr,e)}function em(n,e){n.uniform2uiv(this.addr,e)}function tm(n,e){n.uniform3uiv(this.addr,e)}function nm(n,e){n.uniform4uiv(this.addr,e)}function im(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Mc,s[a])}function rm(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yc,s[a])}function sm(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bc,s[a])}function am(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sc,s[a])}function om(n){switch(n){case 5126:return Vp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return $p;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return jp;case 35667:case 35671:return Kp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return em;case 36295:return tm;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return am}}class lm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hp(t.type)}}class cm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=om(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function ll(n,e){n.seq.push(e),n.map[e.id]=e}function um(n,e,t){const i=n.name,r=i.length;for(ea.lastIndex=0;;){const s=ea.exec(i),a=ea.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ll(t,l===void 0?new lm(o,n,e):new cm(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new dm(o),ll(t,d)),t=d}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);um(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hm=37297;let fm=0;function pm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const dl=new He;function mm(n){nt._getMatrix(dl,nt.workingColorSpace,n);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case ys:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ul(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+pm(n.getShaderSource(e),a)}else return r}function gm(n,e){const t=mm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _m(n,e){let t;switch(e){case xd:t="Linear";break;case Md:t="Reinhard";break;case Sd:t="Cineon";break;case Yl:t="ACESFilmic";break;case bd:t="AgX";break;case Ed:t="Neutral";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const as=new I;function vm(){nt.getLuminanceCoefficients(as);const n=as.x.toFixed(4),e=as.y.toFixed(4),t=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Mm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function br(n){return n!==""}function hl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(n){return n.replace(ym,Em)}const bm=new Map;function Em(n,e){let t=Ge[e];if(t===void 0){const i=bm.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qa(t)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(n){return n.replace(Tm,wm)}function wm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ml(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Am(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Cm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Zi:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case vd:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Dm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Am(t),l=Cm(t),u=Rm(t),d=Pm(t),f=Lm(t),m=xm(t),g=Mm(s),x=r.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),h.length>0&&(h+=`
`)):(p=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),h=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Zn?_m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,gm("linearToOutputTexel",t.outputColorSpace),vm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=qa(a),a=hl(a,t),a=fl(a,t),o=qa(o),o=hl(o,t),o=fl(o,t),a=pl(a),o=pl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=E+p+a,S=E+h+o,F=cl(r,r.VERTEX_SHADER,T),C=cl(r,r.FRAGMENT_SHADER,S);r.attachShader(x,F),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(w){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(F).trim(),$=r.getShaderInfoLog(C).trim();let Z=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,F,C);else{const te=ul(r,F,"vertex"),G=ul(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+te+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||$==="")&&(q=!1);q&&(w.diagnostics={runnable:Z,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:$,prefix:h}})}r.deleteShader(F),r.deleteShader(C),L=new ps(r,x),y=Sm(r,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,hm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}let Im=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fm(e),t.set(e,i)),i}}class Fm{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}}function Nm(n,e,t,i,r,s,a){const o=new oo,c=new Um,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,M,w,N,k){const $=N.fog,Z=k.geometry,q=y.isMeshStandardMaterial?N.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),G=te&&te.mapping===Ss?te.image.height:null,he=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Y=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=Y!==void 0?Y.length:0;let Ie=0;Z.morphAttributes.position!==void 0&&(Ie=1),Z.morphAttributes.normal!==void 0&&(Ie=2),Z.morphAttributes.color!==void 0&&(Ie=3);let Je,X,re,ue;if(he){const Qe=Mn[he];Je=Qe.vertexShader,X=Qe.fragmentShader}else Je=y.vertexShader,X=y.fragmentShader,c.update(y),re=c.getVertexShaderID(y),ue=c.getFragmentShaderID(y);const de=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),ve=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,st=!!y.map,qe=!!y.matcap,mt=!!te,U=!!y.aoMap,Bt=!!y.lightMap,$e=!!y.bumpMap,We=!!y.normalMap,Pe=!!y.displacementMap,at=!!y.emissiveMap,Re=!!y.metalnessMap,b=!!y.roughnessMap,_=y.anisotropy>0,O=y.clearcoat>0,ee=y.dispersion>0,ie=y.iridescence>0,K=y.sheen>0,Ae=y.transmission>0,ge=_&&!!y.anisotropyMap,Me=O&&!!y.clearcoatMap,Ye=O&&!!y.clearcoatNormalMap,oe=O&&!!y.clearcoatRoughnessMap,Se=ie&&!!y.iridescenceMap,Le=ie&&!!y.iridescenceThicknessMap,Ue=K&&!!y.sheenColorMap,ye=K&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Oe=!!y.specularColorMap,lt=!!y.specularIntensityMap,R=Ae&&!!y.transmissionMap,fe=Ae&&!!y.thicknessMap,W=!!y.gradientMap,J=!!y.alphaMap,pe=y.alphaTest>0,_e=!!y.alphaHash,Be=!!y.extensions;let pt=Zn;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(pt=n.toneMapping);const bt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:X,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ir,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:qe,envMap:mt,envMapMode:mt&&te.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Bt,bumpMap:$e,normalMap:We,displacementMap:f&&Pe,emissiveMap:at,normalMapObjectSpace:We&&y.normalMapType===Cd,normalMapTangentSpace:We&&y.normalMapType===sc,metalnessMap:Re,roughnessMap:b,anisotropy:_,anisotropyMap:ge,clearcoat:O,clearcoatMap:Me,clearcoatNormalMap:Ye,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ie,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:lt,transmission:Ae,transmissionMap:R,thicknessMap:fe,gradientMap:W,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:_e,combine:y.combine,mapUv:st&&x(y.map.channel),aoMapUv:U&&x(y.aoMap.channel),lightMapUv:Bt&&x(y.lightMap.channel),bumpMapUv:$e&&x(y.bumpMap.channel),normalMapUv:We&&x(y.normalMap.channel),displacementMapUv:Pe&&x(y.displacementMap.channel),emissiveMapUv:at&&x(y.emissiveMap.channel),metalnessMapUv:Re&&x(y.metalnessMap.channel),roughnessMapUv:b&&x(y.roughnessMap.channel),anisotropyMapUv:ge&&x(y.anisotropyMap.channel),clearcoatMapUv:Me&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(y.sheenRoughnessMap.channel),specularMapUv:Ve&&x(y.specularMap.channel),specularColorMapUv:Oe&&x(y.specularColorMap.channel),specularIntensityMapUv:lt&&x(y.specularIntensityMap.channel),transmissionMapUv:R&&x(y.transmissionMap.channel),thicknessMapUv:fe&&x(y.thicknessMap.channel),alphaMapUv:J&&x(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(We||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(st||J),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ae,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:at&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fn,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)M.push(w),M.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(E(M,y),T(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let w;if(M){const N=Mn[M];w=vu.clone(N.uniforms)}else w=y.uniforms;return w}function F(y,M){let w;for(let N=0,k=u.length;N<k;N++){const $=u[N];if($.cacheKey===M){w=$,++w.usedTimes;break}}return w===void 0&&(w=new Dm(n,M,y,s),u.push(w)),w}function C(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function A(y){c.remove(y)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:F,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:L}}function km(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Om(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _l(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,g,x,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=p),e++,h}function o(d,f,m,g,x,p){const h=a(d,f,m,g,x,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,g,x,p){const h=a(d,f,m,g,x,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||Om),i.length>1&&i.sort(f||gl),r.length>1&&r.sort(f||gl)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Bm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new _l,n.set(i,[a])):r>=s.length?(a=new _l,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Hm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Vm=0;function Gm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wm(n){const e=new zm,t=Hm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new ft,a=new ft;function o(l){let u=0,d=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,E=0,T=0,S=0,F=0,C=0,A=0;l.sort(Gm);for(let y=0,M=l.length;y<M;y++){const w=l[y],N=w.color,k=w.intensity,$=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=N.r*k,d+=N.g*k,f+=N.b*k;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],k);A++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const te=w.shadow,G=t.get(w);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=w.shadow.matrix,E++}i.directional[m]=q,m++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(N).multiplyScalar(k),q.distance=$,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[x]=q;const te=w.shadow;if(w.map&&(i.spotLightMap[F]=w.map,F++,te.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[x]=te.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=Z,S++}x++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=q,p++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const te=w.shadow,G=t.get(w);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=w.shadow.matrix,T++}i.point[g]=q,g++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(k),q.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==h||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==F||L.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+F-C,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,L.directionalLength=m,L.pointLength=g,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=h,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=F,L.numLightProbes=A,i.version=Vm++)}function c(l,u){let d=0,f=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const T=l[h];if(T.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function vl(n){const e=new Wm(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Xm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vl(n),e.set(r,[o])):s>=a.length?(o=new vl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class $m extends Ur{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qm extends Ur{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function Km(n,e,t){let i=new lo;const r=new rt,s=new rt,a=new gt,o=new $m({depthPacking:Ad}),c=new qm,l={},u=t.maxTextureSize,d={[Jn]:Gt,[Gt]:Jn,[Fn]:Fn},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Ym,fragmentShader:jm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ot(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let h=this.type;this.render=function(C,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Kn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=h!==In&&this.type===In,$=h===In&&this.type!==In;for(let Z=0,q=C.length;Z<q;Z++){const te=C[Z],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const he=G.getFrameExtents();if(r.multiply(he),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,G.mapSize.y=s.y)),G.map===null||k===!0||$===!0){const Q=this.type!==In?{minFilter:Zt,magFilter:Zt}:{};G.map!==null&&G.map.dispose(),G.map=new _i(r.x,r.y,Q),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Y=G.getViewportCount();for(let Q=0;Q<Y;Q++){const Ie=G.getViewport(Q);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),N.viewport(a),G.updateMatrices(te,Q),i=G.getFrustum(),S(A,L,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===In&&E(G,L),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(y,M,w)};function E(C,A){const L=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,L,m,x,null)}function T(C,A,L,y){let M=null;const w=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)M=w;else if(M=L.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,k=A.uuid;let $=l[N];$===void 0&&($={},l[N]=$);let Z=$[k];Z===void 0&&(Z=M.clone(),$[k]=Z,A.addEventListener("dispose",F)),M=Z}if(M.visible=A.visible,M.wireframe=A.wireframe,y===In?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=L}return M}function S(C,A,L,y,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===In)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const k=e.update(C),$=C.material;if(Array.isArray($)){const Z=k.groups;for(let q=0,te=Z.length;q<te;q++){const G=Z[q],he=$[G.materialIndex];if(he&&he.visible){const Y=T(C,he,y,M);C.onBeforeShadow(n,C,A,L,k,Y,G),n.renderBufferDirect(L,null,k,Y,C,G),C.onAfterShadow(n,C,A,L,k,Y,G)}}}else if($.visible){const Z=T(C,$,y,M);C.onBeforeShadow(n,C,A,L,k,Z,null),n.renderBufferDirect(L,null,k,Z,C,null),C.onAfterShadow(n,C,A,L,k,Z,null)}}const N=C.children;for(let k=0,$=N.length;k<$;k++)S(N[k],A,L,y,M)}function F(C){C.target.removeEventListener("dispose",F);for(const L in l){const y=l[L],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Zm={[da]:ua,[ha]:ma,[fa]:ga,[ji]:pa,[ua]:da,[ma]:ha,[ga]:fa,[pa]:ji};function Jm(n,e){function t(){let R=!1;const fe=new gt;let W=null;const J=new gt(0,0,0,0);return{setMask:function(pe){W!==pe&&!R&&(n.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){R=pe},setClear:function(pe,_e,Be,pt,bt){bt===!0&&(pe*=pt,_e*=pt,Be*=pt),fe.set(pe,_e,Be,pt),J.equals(fe)===!1&&(n.clearColor(pe,_e,Be,pt),J.copy(fe))},reset:function(){R=!1,W=null,J.set(-1,0,0,0)}}}function i(){let R=!1,fe=!1,W=null,J=null,pe=null;return{setReversed:function(_e){if(fe!==_e){const Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const pt=pe;pe=null,this.setClear(pt)}fe=_e},getReversed:function(){return fe},setTest:function(_e){_e?de(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(_e){W!==_e&&!R&&(n.depthMask(_e),W=_e)},setFunc:function(_e){if(fe&&(_e=Zm[_e]),J!==_e){switch(_e){case da:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case ha:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case fa:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=_e}},setLocked:function(_e){R=_e},setClear:function(_e){pe!==_e&&(fe&&(_e=1-_e),n.clearDepth(_e),pe=_e)},reset:function(){R=!1,W=null,J=null,pe=null,fe=!1}}}function r(){let R=!1,fe=null,W=null,J=null,pe=null,_e=null,Be=null,pt=null,bt=null;return{setTest:function(Qe){R||(Qe?de(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Qe){fe!==Qe&&!R&&(n.stencilMask(Qe),fe=Qe)},setFunc:function(Qe,zt,Qt){(W!==Qe||J!==zt||pe!==Qt)&&(n.stencilFunc(Qe,zt,Qt),W=Qe,J=zt,pe=Qt)},setOp:function(Qe,zt,Qt){(_e!==Qe||Be!==zt||pt!==Qt)&&(n.stencilOp(Qe,zt,Qt),_e=Qe,Be=zt,pt=Qt)},setLocked:function(Qe){R=Qe},setClear:function(Qe){bt!==Qe&&(n.clearStencil(Qe),bt=Qe)},reset:function(){R=!1,fe=null,W=null,J=null,pe=null,_e=null,Be=null,pt=null,bt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,h=null,E=null,T=null,S=null,F=null,C=null,A=new Ze(0,0,0),L=0,y=!1,M=null,w=null,N=null,k=null,$=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=te>=2);let he=null,Y={};const Q=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Je=new gt().fromArray(Q),X=new gt().fromArray(Ie);function re(R,fe,W,J){const pe=new Uint8Array(4),_e=n.createTexture();n.bindTexture(R,_e),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<W;Be++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(fe+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return _e}const ue={};ue[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(n.DEPTH_TEST),a.setFunc(ji),$e(!1),We(Mo),de(n.CULL_FACE),U(Kn);function de(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function ae(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function ve(R,fe){return d[R]!==fe?(n.bindFramebuffer(R,fe),d[R]=fe,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function De(R,fe){let W=m,J=!1;if(R){W=f.get(fe),W===void 0&&(W=[],f.set(fe,W));const pe=R.textures;if(W.length!==pe.length||W[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Be=pe.length;_e<Be;_e++)W[_e]=n.COLOR_ATTACHMENT0+_e;W.length=pe.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function st(R){return g!==R?(n.useProgram(R),g=R,!0):!1}const qe={[ui]:n.FUNC_ADD,[ed]:n.FUNC_SUBTRACT,[td]:n.FUNC_REVERSE_SUBTRACT};qe[nd]=n.MIN,qe[id]=n.MAX;const mt={[rd]:n.ZERO,[sd]:n.ONE,[ad]:n.SRC_COLOR,[la]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[dd]:n.DST_COLOR,[ld]:n.DST_ALPHA,[od]:n.ONE_MINUS_SRC_COLOR,[ca]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[cd]:n.ONE_MINUS_DST_ALPHA,[fd]:n.CONSTANT_COLOR,[pd]:n.ONE_MINUS_CONSTANT_COLOR,[md]:n.CONSTANT_ALPHA,[gd]:n.ONE_MINUS_CONSTANT_ALPHA};function U(R,fe,W,J,pe,_e,Be,pt,bt,Qe){if(R===Kn){x===!0&&(ae(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),R!==Qc){if(R!==p||Qe!==y){if((h!==ui||S!==ui)&&(n.blendEquation(n.FUNC_ADD),h=ui,S=ui),Qe)switch(R){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.ONE,n.ONE);break;case yo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,T=null,F=null,C=null,A.set(0,0,0),L=0,p=R,y=Qe}return}pe=pe||fe,_e=_e||W,Be=Be||J,(fe!==h||pe!==S)&&(n.blendEquationSeparate(qe[fe],qe[pe]),h=fe,S=pe),(W!==E||J!==T||_e!==F||Be!==C)&&(n.blendFuncSeparate(mt[W],mt[J],mt[_e],mt[Be]),E=W,T=J,F=_e,C=Be),(pt.equals(A)===!1||bt!==L)&&(n.blendColor(pt.r,pt.g,pt.b,bt),A.copy(pt),L=bt),p=R,y=!1}function Bt(R,fe){R.side===Fn?ae(n.CULL_FACE):de(n.CULL_FACE);let W=R.side===Gt;fe&&(W=!W),$e(W),R.blending===Xi&&R.transparent===!1?U(Kn):U(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const J=R.stencilWrite;o.setTest(J),J&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),at(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(R){M!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),M=R)}function We(R){R!==Kc?(de(n.CULL_FACE),R!==w&&(R===Mo?n.cullFace(n.BACK):R===Zc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),w=R}function Pe(R){R!==N&&(q&&n.lineWidth(R),N=R)}function at(R,fe,W){R?(de(n.POLYGON_OFFSET_FILL),(k!==fe||$!==W)&&(n.polygonOffset(fe,W),k=fe,$=W)):ae(n.POLYGON_OFFSET_FILL)}function Re(R){R?de(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function b(R){R===void 0&&(R=n.TEXTURE0+Z-1),he!==R&&(n.activeTexture(R),he=R)}function _(R,fe,W){W===void 0&&(he===null?W=n.TEXTURE0+Z-1:W=he);let J=Y[W];J===void 0&&(J={type:void 0,texture:void 0},Y[W]=J),(J.type!==R||J.texture!==fe)&&(he!==W&&(n.activeTexture(W),he=W),n.bindTexture(R,fe||ue[R]),J.type=R,J.texture=fe)}function O(){const R=Y[he];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(R){Je.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Je.copy(R))}function ye(R){X.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function Ve(R,fe){let W=l.get(fe);W===void 0&&(W=new WeakMap,l.set(fe,W));let J=W.get(R);J===void 0&&(J=n.getUniformBlockIndex(fe,R.name),W.set(R,J))}function Oe(R,fe){const J=l.get(fe).get(R);c.get(fe)!==J&&(n.uniformBlockBinding(fe,J,R.__bindingPointIndex),c.set(fe,J))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,Y={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,h=null,E=null,T=null,S=null,F=null,C=null,A=new Ze(0,0,0),L=0,y=!1,M=null,w=null,N=null,k=null,$=null,Je.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:ae,bindFramebuffer:ve,drawBuffers:De,useProgram:st,setBlending:U,setMaterial:Bt,setFlipSided:$e,setCullFace:We,setLineWidth:Pe,setPolygonOffset:at,setScissorTest:Re,activeTexture:b,bindTexture:_,unbindTexture:O,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:Se,texImage3D:Le,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:oe,texSubImage2D:K,texSubImage3D:Ae,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:Ue,viewport:ye,reset:lt}}function xl(n,e,t,i){const r=Qm(i);switch(t){case Ql:return n*e;case tc:return n*e;case nc:return n*e*2;case no:return n*e/r.components*r.byteLength;case io:return n*e/r.components*r.byteLength;case ic:return n*e*2/r.components*r.byteLength;case ro:return n*e*2/r.components*r.byteLength;case ec:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case so:return n*e*4/r.components*r.byteLength;case cs:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:case Ea:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case ba:return Math.max(n,8)*Math.max(e,8)/2;case Ta:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fs:case Va:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rc:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xa:case $a:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qm(n){switch(n){case On:case Kl:return{byteLength:1,components:1};case Rr:case Zl:case Dr:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case gi:case Qa:case bn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function eg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):gs("canvas")}function x(b,_,O){let ee=1;const ie=Re(b);if((ie.width>O||ie.height>O)&&(ee=O/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(ee*ie.width),Ae=Math.floor(ee*ie.height);d===void 0&&(d=g(K,Ae));const ge=_?g(K,Ae):d;return ge.width=K,ge.height=Ae,ge.getContext("2d").drawImage(b,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+Ae+")."),ge}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function p(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,_,O,ee,ie=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=_;if(_===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),_===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),_===n.RGBA){const Ae=ie?ys:nt.getTransfer(ee);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=Ae===dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(b,_){let O;return b?_===null||_===gi||_===Ji?O=n.DEPTH24_STENCIL8:_===bn?O=n.DEPTH32F_STENCIL8:_===Rr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===Ji?O=n.DEPTH_COMPONENT24:_===bn?O=n.DEPTH_COMPONENT32F:_===Rr&&(O=n.DEPTH_COMPONENT16),O}function F(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Zt&&b.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function C(b){const _=b.target;_.removeEventListener("dispose",C),L(_),_.isVideoTexture&&u.delete(_)}function A(b){const _=b.target;_.removeEventListener("dispose",A),M(_)}function L(b){const _=i.get(b);if(_.__webglInit===void 0)return;const O=b.source,ee=f.get(O);if(ee){const ie=ee[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(b),Object.keys(ee).length===0&&f.delete(O)}i.remove(b)}function y(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const O=b.source,ee=f.get(O);delete ee[_.__cacheKey],a.memory.textures--}function M(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let ie=0;ie<_.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(_.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[ee]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=b.textures;for(let ee=0,ie=O.length;ee<ie;ee++){const K=i.get(O[ee]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(O[ee])}i.remove(b)}let w=0;function N(){w=0}function k(){const b=w;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function $(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Z(b,_){const O=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,b,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function q(b,_){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function te(b,_){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function G(b,_){const O=i.get(b);if(b.version>0&&O.__version!==b.version){re(O,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const he={[xa]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},Y={[Zt]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Cs]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Q={[Rd]:n.NEVER,[Fd]:n.ALWAYS,[Pd]:n.LESS,[ac]:n.LEQUAL,[Ld]:n.EQUAL,[Ud]:n.GEQUAL,[Dd]:n.GREATER,[Id]:n.NOTEQUAL};function Ie(b,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===Cs||_.magFilter===zr||_.magFilter===pi||_.minFilter===yn||_.minFilter===Cs||_.minFilter===zr||_.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,he[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Y[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Y[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==zr&&_.minFilter!==pi||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",C));const ee=_.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const K=$(_);if(K!==b.__cacheKey){ie[K]===void 0&&(ie[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ie[K].usedTimes++;const Ae=ie[b.__cacheKey];Ae!==void 0&&(ie[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&y(_)),b.__cacheKey=K,b.__webglTexture=ie[K].texture}return O}function X(b,_,O){let ee=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=n.TEXTURE_3D);const ie=Je(b,_),K=_.source;t.bindTexture(ee,b.__webglTexture,n.TEXTURE0+O);const Ae=i.get(K);if(K.version!==Ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+O);const ge=nt.getPrimaries(nt.workingColorSpace),Me=_.colorSpace===Yn?null:nt.getPrimaries(_.colorSpace),Ye=_.colorSpace===Yn||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let oe=x(_.image,!1,r.maxTextureSize);oe=at(_,oe);const Se=s.convert(_.format,_.colorSpace),Le=s.convert(_.type);let Ue=T(_.internalFormat,Se,Le,_.colorSpace,_.isVideoTexture);Ie(ee,_);let ye;const Ve=_.mipmaps,Oe=_.isVideoTexture!==!0,lt=Ae.__version===void 0||ie===!0,R=K.dataReady,fe=F(_,oe);if(_.isDepthTexture)Ue=S(_.format===Qi,_.type),lt&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Ue,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Se,Le,null));else if(_.isDataTexture)if(Ve.length>0){Oe&&lt&&t.texStorage2D(n.TEXTURE_2D,fe,Ue,Ve[0].width,Ve[0].height);for(let W=0,J=Ve.length;W<J;W++)ye=Ve[W],Oe?R&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,Se,Le,ye.data):t.texImage2D(n.TEXTURE_2D,W,Ue,ye.width,ye.height,0,Se,Le,ye.data);_.generateMipmaps=!1}else Oe?(lt&&t.texStorage2D(n.TEXTURE_2D,fe,Ue,oe.width,oe.height),R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,Le,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Se,Le,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ue,Ve[0].width,Ve[0].height,oe.depth);for(let W=0,J=Ve.length;W<J;W++)if(ye=Ve[W],_.format!==un)if(Se!==null)if(Oe){if(R)if(_.layerUpdates.size>0){const pe=xl(ye.width,ye.height,_.format,_.type);for(const _e of _.layerUpdates){const Be=ye.data.subarray(_e*pe/ye.data.BYTES_PER_ELEMENT,(_e+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,_e,ye.width,ye.height,1,Se,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,oe.depth,Se,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,oe.depth,Se,Le,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,oe.depth,0,Se,Le,ye.data)}else{Oe&&lt&&t.texStorage2D(n.TEXTURE_2D,fe,Ue,Ve[0].width,Ve[0].height);for(let W=0,J=Ve.length;W<J;W++)ye=Ve[W],_.format!==un?Se!==null?Oe?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?R&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,Se,Le,ye.data):t.texImage2D(n.TEXTURE_2D,W,Ue,ye.width,ye.height,0,Se,Le,ye.data)}else if(_.isDataArrayTexture)if(Oe){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ue,oe.width,oe.height,oe.depth),R)if(_.layerUpdates.size>0){const W=xl(oe.width,oe.height,_.format,_.type);for(const J of _.layerUpdates){const pe=oe.data.subarray(J*W/oe.data.BYTES_PER_ELEMENT,(J+1)*W/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,Se,Le,pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Le,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,Se,Le,oe.data);else if(_.isData3DTexture)Oe?(lt&&t.texStorage3D(n.TEXTURE_3D,fe,Ue,oe.width,oe.height,oe.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Le,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,Se,Le,oe.data);else if(_.isFramebufferTexture){if(lt)if(Oe)t.texStorage2D(n.TEXTURE_2D,fe,Ue,oe.width,oe.height);else{let W=oe.width,J=oe.height;for(let pe=0;pe<fe;pe++)t.texImage2D(n.TEXTURE_2D,pe,Ue,W,J,0,Se,Le,null),W>>=1,J>>=1}}else if(Ve.length>0){if(Oe&&lt){const W=Re(Ve[0]);t.texStorage2D(n.TEXTURE_2D,fe,Ue,W.width,W.height)}for(let W=0,J=Ve.length;W<J;W++)ye=Ve[W],Oe?R&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Se,Le,ye):t.texImage2D(n.TEXTURE_2D,W,Ue,Se,Le,ye);_.generateMipmaps=!1}else if(Oe){if(lt){const W=Re(oe);t.texStorage2D(n.TEXTURE_2D,fe,Ue,W.width,W.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Le,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Se,Le,oe);p(_)&&h(ee),Ae.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function re(b,_,O){if(_.image.length!==6)return;const ee=Je(b,_),ie=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const K=i.get(ie);if(ie.version!==K.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const Ae=nt.getPrimaries(nt.workingColorSpace),ge=_.colorSpace===Yn?null:nt.getPrimaries(_.colorSpace),Me=_.colorSpace===Yn||Ae===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ye=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Ye&&!oe?Se[J]=x(_.image[J],!0,r.maxCubemapSize):Se[J]=oe?_.image[J].image:_.image[J],Se[J]=at(_,Se[J]);const Le=Se[0],Ue=s.convert(_.format,_.colorSpace),ye=s.convert(_.type),Ve=T(_.internalFormat,Ue,ye,_.colorSpace),Oe=_.isVideoTexture!==!0,lt=K.__version===void 0||ee===!0,R=ie.dataReady;let fe=F(_,Le);Ie(n.TEXTURE_CUBE_MAP,_);let W;if(Ye){Oe&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ve,Le.width,Le.height);for(let J=0;J<6;J++){W=Se[J].mipmaps;for(let pe=0;pe<W.length;pe++){const _e=W[pe];_.format!==un?Ue!==null?Oe?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,_e.width,_e.height,Ue,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,_e.width,_e.height,Ue,ye,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ve,_e.width,_e.height,0,Ue,ye,_e.data)}}}else{if(W=_.mipmaps,Oe&&lt){W.length>0&&fe++;const J=Re(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(oe){Oe?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Ue,ye,Se[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Se[J].width,Se[J].height,0,Ue,ye,Se[J].data);for(let pe=0;pe<W.length;pe++){const Be=W[pe].image[J].image;Oe?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Be.width,Be.height,Ue,ye,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ve,Be.width,Be.height,0,Ue,ye,Be.data)}}else{Oe?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ye,Se[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Ue,ye,Se[J]);for(let pe=0;pe<W.length;pe++){const _e=W[pe];Oe?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ue,ye,_e.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ve,Ue,ye,_e.image[J])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),K.__version=ie.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ue(b,_,O,ee,ie,K){const Ae=s.convert(O.format,O.colorSpace),ge=s.convert(O.type),Me=T(O.internalFormat,Ae,ge,O.colorSpace),Ye=i.get(_),oe=i.get(O);if(oe.__renderTarget=_,!Ye.__hasExternalTextures){const Se=Math.max(1,_.width>>K),Le=Math.max(1,_.height>>K);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,K,Me,Se,Le,_.depth,0,Ae,ge,null):t.texImage2D(ie,K,Me,Se,Le,0,Ae,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,oe.__webglTexture,0,$e(_)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,oe.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(b,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const ee=_.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,K=S(_.stencilBuffer,ie),Ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=$e(_);We(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,K,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,b)}else{const ee=_.textures;for(let ie=0;ie<ee.length;ie++){const K=ee[ie],Ae=s.convert(K.format,K.colorSpace),ge=s.convert(K.type),Me=T(K.internalFormat,Ae,ge,K.colorSpace),Ye=$e(_);O&&We(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Me,_.width,_.height):We(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(_.depthTexture);ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const ie=ee.__webglTexture,K=$e(_);if(_.depthTexture.format===$i)We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(_.depthTexture.format===Qi)We(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ve(b){const _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const ee=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){const ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=ee}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ae(_.__webglFramebuffer,b)}else if(O){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=n.createRenderbuffer(),de(_.__webglDepthbuffer[ee],b,!1);else{const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),de(_.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,_,O){const ee=i.get(b);_!==void 0&&ue(ee.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ve(b)}function st(b){const _=b.texture,O=i.get(b),ee=i.get(_);b.addEventListener("dispose",A);const ie=b.textures,K=b.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=_.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let Me=0;Me<_.mipmaps.length;Me++)O.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else O.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)O.__webglFramebuffer[ge]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ge=0,Me=ie.length;ge<Me;ge++){const Ye=i.get(ie[ge]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&We(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const Me=ie[ge];O.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const Ye=s.convert(Me.format,Me.colorSpace),oe=s.convert(Me.type),Se=T(Me.internalFormat,Ye,oe,Me.colorSpace,b.isXRRenderTarget===!0),Le=$e(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),de(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)ue(O.__webglFramebuffer[ge][Me],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else ue(O.__webglFramebuffer[ge],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ge=0,Me=ie.length;ge<Me;ge++){const Ye=ie[ge],oe=i.get(Ye);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Ie(n.TEXTURE_2D,Ye),ue(O.__webglFramebuffer,b,Ye,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),p(Ye)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ee.__webglTexture),Ie(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)ue(O.__webglFramebuffer[Me],b,_,n.COLOR_ATTACHMENT0,ge,Me);else ue(O.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,ge,0);p(_)&&h(ge),t.unbindTexture()}b.depthBuffer&&ve(b)}function qe(b){const _=b.textures;for(let O=0,ee=_.length;O<ee;O++){const ie=_[O];if(p(ie)){const K=E(b),Ae=i.get(ie).__webglTexture;t.bindTexture(K,Ae),h(K),t.unbindTexture()}}}const mt=[],U=[];function Bt(b){if(b.samples>0){if(We(b)===!1){const _=b.textures,O=b.width,ee=b.height;let ie=n.COLOR_BUFFER_BIT;const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(b),ge=_.length>1;if(ge)for(let Me=0;Me<_.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const Ye=i.get(_[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,O,ee,0,0,O,ee,ie,n.NEAREST),c===!0&&(mt.length=0,U.length=0,mt.push(n.COLOR_ATTACHMENT0+Me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(K),U.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<_.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const Ye=i.get(_[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $e(b){return Math.min(r.maxSamples,b.samples)}function We(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pe(b){const _=a.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function at(b,_){const O=b.colorSpace,ee=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ir&&O!==Yn&&(nt.getTransfer(O)===dt?(ee!==un||ie!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=st,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=We}function tg(n,e){function t(i,r=Yn){let s;const a=nt.getTransfer(r);if(i===On)return n.UNSIGNED_BYTE;if(i===eo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===to)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kl)return n.BYTE;if(i===Zl)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Qa)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Dr)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===ec)return n.RGB;if(i===un)return n.RGBA;if(i===tc)return n.LUMINANCE;if(i===nc)return n.LUMINANCE_ALPHA;if(i===$i)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===no)return n.RED;if(i===io)return n.RED_INTEGER;if(i===ic)return n.RG;if(i===ro)return n.RG_INTEGER;if(i===so)return n.RGBA_INTEGER;if(i===cs||i===ds||i===us||i===hs)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===ya||i===ba||i===Ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===wa||i===Aa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ta||i===wa)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Aa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ca||i===Ra||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Fa||i===Na||i===ka||i===Oa||i===Ba||i===za||i===Ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ca)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ra)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===La)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Da)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ia)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Na)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ka)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ba)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fs||i===Va||i===Ga)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fs)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===Wa||i===Xa||i===$a)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ng extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:rg,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends rr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const x=new ag,p=t.getContextAttributes();let h=null,E=null;const T=[],S=[],F=new rt;let C=null;const A=new an;A.viewport=new gt;const L=new an;L.viewport=new gt;const y=[A,L],M=new ng;let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=T[X];return re===void 0&&(re=new ta,T[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=T[X];return re===void 0&&(re=new ta,T[X]=re),re.getGripSpace()},this.getHand=function(X){let re=T[X];return re===void 0&&(re=new ta,T[X]=re),re.getHandSpace()};function k(X){const re=S.indexOf(X.inputSource);if(re===-1)return;const ue=T[re];ue!==void 0&&(ue.update(X.inputSource,X.frame,l||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<T.length;X++){const re=S[X];re!==null&&(S[X]=null,T[X].disconnect(re))}w=null,N=null,x.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,E=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new _i(m.framebufferWidth,m.framebufferHeight,{format:un,type:On,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,ue=null,de=null;p.depth&&(de=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?Qi:$i,ue=p.stencil?Ji:gi);const ae={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new _i(f.textureWidth,f.textureHeight,{format:un,type:On,depthTexture:new xc(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let re=0;re<X.removed.length;re++){const ue=X.removed[re],de=S.indexOf(ue);de>=0&&(S[de]=null,T[de].disconnect(ue))}for(let re=0;re<X.added.length;re++){const ue=X.added[re];let de=S.indexOf(ue);if(de===-1){for(let ve=0;ve<T.length;ve++)if(ve>=S.length){S.push(ue),de=ve;break}else if(S[ve]===null){S[ve]=ue,de=ve;break}if(de===-1)break}const ae=T[de];ae&&ae.connect(ue)}}const q=new I,te=new I;function G(X,re,ue){q.setFromMatrixPosition(re.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);const de=q.distanceTo(te),ae=re.projectionMatrix.elements,ve=ue.projectionMatrix.elements,De=ae[14]/(ae[10]-1),st=ae[14]/(ae[10]+1),qe=(ae[9]+1)/ae[5],mt=(ae[9]-1)/ae[5],U=(ae[8]-1)/ae[0],Bt=(ve[8]+1)/ve[0],$e=De*U,We=De*Bt,Pe=de/(-U+Bt),at=Pe*-U;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(at),X.translateZ(Pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ae[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Re=De+Pe,b=st+Pe,_=$e-at,O=We+(de-at),ee=qe*st/b*Re,ie=mt*st/b*Re;X.projectionMatrix.makePerspective(_,O,ee,ie,Re,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function he(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let re=X.near,ue=X.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),M.near=L.near=A.near=re,M.far=L.far=A.far=ue,(w!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far),A.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const de=X.parent,ae=M.cameras;he(M,de);for(let ve=0;ve<ae.length;ve++)he(ae[ve],de);ae.length===2?G(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),Y(X,M,de)};function Y(X,re,ue){ue===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Pr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Q=null;function Ie(X,re){if(u=re.getViewerPose(l||a),g=re,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let de=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let ve=0;ve<ue.length;ve++){const De=ue[ve];let st=null;if(m!==null)st=m.getViewport(De);else{const mt=d.getViewSubImage(f,De);st=mt.viewport,ve===0&&(e.setRenderTargetTextures(E,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(E))}let qe=y[ve];qe===void 0&&(qe=new an,qe.layers.enable(ve),qe.viewport=new gt,y[ve]=qe),qe.matrix.fromArray(De.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(De.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(st.x,st.y,st.width,st.height),ve===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(qe)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ve=d.getDepthInformation(ue[0]);ve&&ve.isValid&&ve.texture&&x.init(e,ve,r.renderState)}}for(let ue=0;ue<T.length;ue++){const de=S[ue],ae=T[ue];de!==null&&ae!==void 0&&ae.update(de,re,l||a)}Q&&Q(X,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Je=new _c;Je.setAnimationLoop(Ie),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}const oi=new mn,lg=new ft;function cg(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,pc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,E,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Gt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Gt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h),T=E.envMap,S=E.envMapRotation;T&&(p.envMap.value=T,oi.copy(S),oi.x*=-1,oi.y*=-1,oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),p.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(oi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,E,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Gt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const S=T.program;i.uniformBlockBinding(E,S)}function l(E,T){let S=r[E.id];S===void 0&&(g(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",p));const F=T.program;i.updateUBOMapping(E,F);const C=e.render.frame;s[E.id]!==C&&(f(E),s[E.id]=C)}function u(E){const T=d();E.__bindingPointIndex=T;const S=n.createBuffer(),F=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,F,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],S=E.uniforms,F=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,A=S.length;C<A;C++){const L=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,M=L.length;y<M;y++){const w=L[y];if(m(w,C,y,F)===!0){const N=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let Z=0;Z<k.length;Z++){const q=k[Z],te=x(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+$,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,T,S,F){const C=E.value,A=T+"_"+S;if(F[A]===void 0)return typeof C=="number"||typeof C=="boolean"?F[A]=C:F[A]=C.clone(),!0;{const L=F[A];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return F[A]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(E){const T=E.uniforms;let S=0;const F=16;for(let A=0,L=T.length;A<L;A++){const y=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,w=y.length;M<w;M++){const N=y[M],k=Array.isArray(N.value)?N.value:[N.value];for(let $=0,Z=k.length;$<Z;$++){const q=k[$],te=x(q),G=S%F,he=G%te.boundary,Y=G+he;S+=he,Y!==0&&F-Y<te.storage&&(S+=F-Y),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=te.storage}}}const C=S%F;return C>0&&(S+=F-C),E.__size=S,E.__cache={},this}function x(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){const T=E.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class ug{constructor(e={}){const{canvas:t=Jd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,h=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Zn,this.toneMappingExposure=1;const S=this;let F=!1,C=0,A=0,L=null,y=-1,M=null;const w=new gt,N=new gt;let k=null;const $=new Ze(0);let Z=0,q=t.width,te=t.height,G=1,he=null,Y=null;const Q=new gt(0,0,q,te),Ie=new gt(0,0,q,te);let Je=!1;const X=new lo;let re=!1,ue=!1;const de=new ft,ae=new ft,ve=new I,De=new gt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function mt(){return L===null?G:1}let U=i;function Bt(v,P){return t.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),U===null){const P="webgl2";if(U=Bt(P,v),U===null)throw Bt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let $e,We,Pe,at,Re,b,_,O,ee,ie,K,Ae,ge,Me,Ye,oe,Se,Le,Ue,ye,Ve,Oe,lt,R;function fe(){$e=new gp(U),$e.init(),Oe=new tg(U,$e),We=new dp(U,$e,e,Oe),Pe=new Jm(U,$e),We.reverseDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),at=new xp(U),Re=new km,b=new eg(U,$e,Pe,Re,We,Oe,at),_=new hp(S),O=new mp(S),ee=new Tu(U),lt=new lp(U,ee),ie=new _p(U,ee,at,lt),K=new Sp(U,ie,ee,at),Ue=new Mp(U,We,b),oe=new up(Re),Ae=new Nm(S,_,O,$e,We,lt,oe),ge=new cg(S,Re),Me=new Bm,Ye=new Xm($e),Le=new op(S,_,O,Pe,K,m,c),Se=new Km(S,K,We),R=new dg(U,at,We,Pe),ye=new cp(U,$e,at),Ve=new vp(U,$e,at),at.programs=Ae.programs,S.capabilities=We,S.extensions=$e,S.properties=Re,S.renderLists=Me,S.shadowMap=Se,S.state=Pe,S.info=at}fe();const W=new og(S,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(q,te,!1))},this.getSize=function(v){return v.set(q,te)},this.setSize=function(v,P,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,te=P,t.width=Math.floor(v*G),t.height=Math.floor(P*G),B===!0&&(t.style.width=v+"px",t.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(q*G,te*G).floor()},this.setDrawingBufferSize=function(v,P,B){q=v,te=P,G=B,t.width=Math.floor(v*B),t.height=Math.floor(P*B),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(Q)},this.setViewport=function(v,P,B,V){v.isVector4?Q.set(v.x,v.y,v.z,v.w):Q.set(v,P,B,V),Pe.viewport(w.copy(Q).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Ie)},this.setScissor=function(v,P,B,V){v.isVector4?Ie.set(v.x,v.y,v.z,v.w):Ie.set(v,P,B,V),Pe.scissor(N.copy(Ie).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(v){Pe.setScissorTest(Je=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){Y=v},this.getClearColor=function(v){return v.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(v=!0,P=!0,B=!0){let V=0;if(v){let D=!1;if(L!==null){const le=L.texture.format;D=le===so||le===ro||le===io}if(D){const le=L.texture.type,xe=le===On||le===gi||le===Rr||le===Ji||le===eo||le===to,Ee=Le.getClearColor(),Te=Le.getClearAlpha(),ke=Ee.r,ze=Ee.g,we=Ee.b;xe?(g[0]=ke,g[1]=ze,g[2]=we,g[3]=Te,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=ke,x[1]=ze,x[2]=we,x[3]=Te,U.clearBufferiv(U.COLOR,0,x))}else V|=U.COLOR_BUFFER_BIT}P&&(V|=U.DEPTH_BUFFER_BIT),B&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Me.dispose(),Ye.dispose(),Re.dispose(),_.dispose(),O.dispose(),K.dispose(),lt.dispose(),R.dispose(),Ae.dispose(),W.dispose(),W.removeEventListener("sessionstart",Mi),W.removeEventListener("sessionend",lr),_n.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const v=at.autoReset,P=Se.enabled,B=Se.autoUpdate,V=Se.needsUpdate,D=Se.type;fe(),at.autoReset=v,Se.enabled=P,Se.autoUpdate=B,Se.needsUpdate=V,Se.type=D}function _e(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Be(v){const P=v.target;P.removeEventListener("dispose",Be),pt(P)}function pt(v){bt(v),Re.remove(v)}function bt(v){const P=Re.get(v).programs;P!==void 0&&(P.forEach(function(B){Ae.releaseProgram(B)}),v.isShaderMaterial&&Ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,B,V,D,le){P===null&&(P=st);const xe=D.isMesh&&D.matrixWorld.determinant()<0,Ee=ws(v,P,B,V,D);Pe.setMaterial(V,xe);let Te=B.index,ke=1;if(V.wireframe===!0){if(Te=ie.getWireframeAttribute(B),Te===void 0)return;ke=2}const ze=B.drawRange,we=B.attributes.position;let et=ze.start*ke,ct=(ze.start+ze.count)*ke;le!==null&&(et=Math.max(et,le.start*ke),ct=Math.min(ct,(le.start+le.count)*ke)),Te!==null?(et=Math.max(et,0),ct=Math.min(ct,Te.count)):we!=null&&(et=Math.max(et,0),ct=Math.min(ct,we.count));const ut=ct-et;if(ut<0||ut===1/0)return;lt.setup(D,V,Ee,B,Te);let Ct,tt=ye;if(Te!==null&&(Ct=ee.get(Te),tt=Ve,tt.setIndex(Ct)),D.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*mt()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(D.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),Pe.setLineWidth(Ce*mt()),D.isLineSegments?tt.setMode(U.LINES):D.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else D.isPoints?tt.setMode(U.POINTS):D.isSprite&&tt.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)tt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))tt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ce=D._multiDrawStarts,Ht=D._multiDrawCounts,it=D._multiDrawCount,Xt=Te?ee.get(Te).bytesPerElement:1,Bn=Re.get(V).currentProgram.getUniforms();for(let It=0;It<it;It++)Bn.setValue(U,"_gl_DrawID",It),tt.render(Ce[It]/Xt,Ht[It])}else if(D.isInstancedMesh)tt.renderInstances(et,ut,D.count);else if(B.isInstancedBufferGeometry){const Ce=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ht=Math.min(B.instanceCount,Ce);tt.renderInstances(et,ut,Ht)}else tt.render(et,ut)};function Qe(v,P,B){v.transparent===!0&&v.side===Fn&&v.forceSinglePass===!1?(v.side=Gt,v.needsUpdate=!0,Si(v,P,B),v.side=Jn,v.needsUpdate=!0,Si(v,P,B),v.side=Fn):Si(v,P,B)}this.compile=function(v,P,B=null){B===null&&(B=v),h=Ye.get(B),h.init(P),T.push(h),B.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),v!==B&&v.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const V=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const le=D.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Ee=le[xe];Qe(Ee,B,D),V.add(Ee)}else Qe(le,B,D),V.add(le)}),T.pop(),h=null,V},this.compileAsync=function(v,P,B=null){const V=this.compile(v,P,B);return new Promise(D=>{function le(){if(V.forEach(function(xe){Re.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){D(v);return}setTimeout(le,10)}$e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let zt=null;function Qt(v){zt&&zt(v)}function Mi(){_n.stop()}function lr(){_n.start()}const _n=new _c;_n.setAnimationLoop(Qt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(v){zt=v,W.setAnimationLoop(v),v===null?_n.stop():_n.start()},W.addEventListener("sessionstart",Mi),W.addEventListener("sessionend",lr),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(P),P=W.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,P,L),h=Ye.get(v,T.length),h.init(P),T.push(h),ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(ae),ue=this.localClippingEnabled,re=oe.init(this.clippingPlanes,ue),p=Me.get(v,E.length),p.init(),E.push(p),W.enabled===!0&&W.isPresenting===!0){const le=S.xr.getDepthSensingMesh();le!==null&&vn(le,P,-1/0,S.sortObjects)}vn(v,P,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(he,Y),qe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,qe&&Le.addToRenderList(p,v),this.info.render.frame++,re===!0&&oe.beginShadows();const B=h.state.shadowsArray;Se.render(B,v,P),re===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,D=p.transmissive;if(h.setupLights(),P.isArrayCamera){const le=P.cameras;if(D.length>0)for(let xe=0,Ee=le.length;xe<Ee;xe++){const Te=le[xe];ti(V,D,v,Te)}qe&&Le.render(v);for(let xe=0,Ee=le.length;xe<Ee;xe++){const Te=le[xe];cr(p,v,Te,Te.viewport)}}else D.length>0&&ti(V,D,v,P),qe&&Le.render(v),cr(p,v,P);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(S,v,P),lt.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],re===!0&&oe.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function vn(v,P,B,V){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){V&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ae);const xe=K.update(v),Ee=v.material;Ee.visible&&p.push(v,xe,Ee,B,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const xe=K.update(v),Ee=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(ae)),Array.isArray(Ee)){const Te=xe.groups;for(let ke=0,ze=Te.length;ke<ze;ke++){const we=Te[ke],et=Ee[we.materialIndex];et&&et.visible&&p.push(v,xe,et,B,De.z,we)}}else Ee.visible&&p.push(v,xe,Ee,B,De.z,null)}}const le=v.children;for(let xe=0,Ee=le.length;xe<Ee;xe++)vn(le[xe],P,B,V)}function cr(v,P,B,V){const D=v.opaque,le=v.transmissive,xe=v.transparent;h.setupLightsView(B),re===!0&&oe.setGlobalState(S.clippingPlanes,B),V&&Pe.viewport(w.copy(V)),D.length>0&&en(D,P,B),le.length>0&&en(le,P,B),xe.length>0&&en(xe,P,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ti(v,P,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new _i(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Dr:On,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const le=h.state.transmissionRenderTarget[V.id],xe=V.viewport||w;le.setSize(xe.z,xe.w);const Ee=S.getRenderTarget();S.setRenderTarget(le),S.getClearColor($),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Le.render(B);const Te=S.toneMapping;S.toneMapping=Zn;const ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),re===!0&&oe.setGlobalState(S.clippingPlanes,V),en(v,B,V),b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let we=0,et=P.length;we<et;we++){const ct=P[we],ut=ct.object,Ct=ct.geometry,tt=ct.material,Ce=ct.group;if(tt.side===Fn&&ut.layers.test(V.layers)){const Ht=tt.side;tt.side=Gt,tt.needsUpdate=!0,Or(ut,B,V,Ct,tt,Ce),tt.side=Ht,tt.needsUpdate=!0,ze=!0}}ze===!0&&(b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le))}S.setRenderTarget(Ee),S.setClearColor($,Z),ke!==void 0&&(V.viewport=ke),S.toneMapping=Te}function en(v,P,B){const V=P.isScene===!0?P.overrideMaterial:null;for(let D=0,le=v.length;D<le;D++){const xe=v[D],Ee=xe.object,Te=xe.geometry,ke=V===null?xe.material:V,ze=xe.group;Ee.layers.test(B.layers)&&Or(Ee,P,B,Te,ke,ze)}}function Or(v,P,B,V,D,le){v.onBeforeRender(S,P,B,V,D,le),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(S,P,B,V,v,le),D.transparent===!0&&D.side===Fn&&D.forceSinglePass===!1?(D.side=Gt,D.needsUpdate=!0,S.renderBufferDirect(B,P,V,D,v,le),D.side=Jn,D.needsUpdate=!0,S.renderBufferDirect(B,P,V,D,v,le),D.side=Fn):S.renderBufferDirect(B,P,V,D,v,le),v.onAfterRender(S,P,B,V,D,le)}function Si(v,P,B){P.isScene!==!0&&(P=st);const V=Re.get(v),D=h.state.lights,le=h.state.shadowsArray,xe=D.state.version,Ee=Ae.getParameters(v,D.state,le,P,B),Te=Ae.getProgramCacheKey(Ee);let ke=V.programs;V.environment=v.isMeshStandardMaterial?P.environment:null,V.fog=P.fog,V.envMap=(v.isMeshStandardMaterial?O:_).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,ke===void 0&&(v.addEventListener("dispose",Be),ke=new Map,V.programs=ke);let ze=ke.get(Te);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===xe)return Br(v,Ee),ze}else Ee.uniforms=Ae.getUniforms(v),v.onBeforeCompile(Ee,S),ze=Ae.acquireProgram(Ee,Te),ke.set(Te,ze),V.uniforms=Ee.uniforms;const we=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=oe.uniform),Br(v,Ee),V.needsLights=xn(v),V.lightsStateVersion=xe,V.needsLights&&(we.ambientLightColor.value=D.state.ambient,we.lightProbe.value=D.state.probe,we.directionalLights.value=D.state.directional,we.directionalLightShadows.value=D.state.directionalShadow,we.spotLights.value=D.state.spot,we.spotLightShadows.value=D.state.spotShadow,we.rectAreaLights.value=D.state.rectArea,we.ltc_1.value=D.state.rectAreaLTC1,we.ltc_2.value=D.state.rectAreaLTC2,we.pointLights.value=D.state.point,we.pointLightShadows.value=D.state.pointShadow,we.hemisphereLights.value=D.state.hemi,we.directionalShadowMap.value=D.state.directionalShadowMap,we.directionalShadowMatrix.value=D.state.directionalShadowMatrix,we.spotShadowMap.value=D.state.spotShadowMap,we.spotLightMatrix.value=D.state.spotLightMatrix,we.spotLightMap.value=D.state.spotLightMap,we.pointShadowMap.value=D.state.pointShadowMap,we.pointShadowMatrix.value=D.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function dr(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=ps.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Br(v,P){const B=Re.get(v);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function ws(v,P,B,V,D){P.isScene!==!0&&(P=st),b.resetTextureUnits();const le=P.fog,xe=V.isMeshStandardMaterial?P.environment:null,Ee=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ir,Te=(V.isMeshStandardMaterial?O:_).get(V.envMap||xe),ke=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,ct=!!B.morphAttributes.color;let ut=Zn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ut=S.toneMapping);const Ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=Ct!==void 0?Ct.length:0,Ce=Re.get(V),Ht=h.state.lights;if(re===!0&&(ue===!0||v!==M)){const se=v===M&&V.id===y;oe.setState(V,v,se)}let it=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ht.state.version||Ce.outputColorSpace!==Ee||D.isBatchedMesh&&Ce.batching===!1||!D.isBatchedMesh&&Ce.batching===!0||D.isBatchedMesh&&Ce.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ce.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ce.instancing===!1||!D.isInstancedMesh&&Ce.instancing===!0||D.isSkinnedMesh&&Ce.skinning===!1||!D.isSkinnedMesh&&Ce.skinning===!0||D.isInstancedMesh&&Ce.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ce.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ce.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ce.instancingMorph===!1&&D.morphTexture!==null||Ce.envMap!==Te||V.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==ze||Ce.morphTargets!==we||Ce.morphNormals!==et||Ce.morphColors!==ct||Ce.toneMapping!==ut||Ce.morphTargetsCount!==tt)&&(it=!0):(it=!0,Ce.__version=V.version);let Xt=Ce.currentProgram;it===!0&&(Xt=Si(V,P,D));let Bn=!1,It=!1,z=!1;const H=Xt.getUniforms(),ne=Ce.uniforms;if(Pe.useProgram(Xt.program)&&(Bn=!0,It=!0,z=!0),V.id!==y&&(y=V.id,It=!0),Bn||M!==v){Pe.buffers.depth.getReversed()?(de.copy(v.projectionMatrix),eu(de),tu(de),H.setValue(U,"projectionMatrix",de)):H.setValue(U,"projectionMatrix",v.projectionMatrix),H.setValue(U,"viewMatrix",v.matrixWorldInverse);const be=H.map.cameraPosition;be!==void 0&&be.setValue(U,ve.setFromMatrixPosition(v.matrixWorld)),We.logarithmicDepthBuffer&&H.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&H.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,It=!0,z=!0)}if(D.isSkinnedMesh){H.setOptional(U,D,"bindMatrix"),H.setOptional(U,D,"bindMatrixInverse");const se=D.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),H.setValue(U,"boneTexture",se.boneTexture,b))}D.isBatchedMesh&&(H.setOptional(U,D,"batchingTexture"),H.setValue(U,"batchingTexture",D._matricesTexture,b),H.setOptional(U,D,"batchingIdTexture"),H.setValue(U,"batchingIdTexture",D._indirectTexture,b),H.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&H.setValue(U,"batchingColorTexture",D._colorsTexture,b));const ce=B.morphAttributes;if((ce.position!==void 0||ce.normal!==void 0||ce.color!==void 0)&&Ue.update(D,B,Xt),(It||Ce.receiveShadow!==D.receiveShadow)&&(Ce.receiveShadow=D.receiveShadow,H.setValue(U,"receiveShadow",D.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ne.envMap.value=Te,ne.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&P.environment!==null&&(ne.envMapIntensity.value=P.environmentIntensity),It&&(H.setValue(U,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&As(ne,z),le&&V.fog===!0&&ge.refreshFogUniforms(ne,le),ge.refreshMaterialUniforms(ne,V,G,te,h.state.transmissionRenderTarget[v.id]),ps.upload(U,dr(Ce),ne,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ps.upload(U,dr(Ce),ne,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&H.setValue(U,"center",D.center),H.setValue(U,"modelViewMatrix",D.modelViewMatrix),H.setValue(U,"normalMatrix",D.normalMatrix),H.setValue(U,"modelMatrix",D.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const se=V.uniformsGroups;for(let be=0,Xe=se.length;be<Xe;be++){const _t=se[be];R.update(_t,Xt),R.bind(_t,Xt)}}return Xt}function As(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function xn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,P,B){Re.get(v.texture).__webglTexture=P,Re.get(v.depthTexture).__webglTexture=B;const V=Re.get(v);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const B=Re.get(v);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,B=0){L=v,C=P,A=B;let V=!0,D=null,le=!1,xe=!1;if(v){const Te=Re.get(v);if(Te.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Te.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(Te.__hasExternalTextures)b.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const we=v.depthTexture;if(Te.__boundDepthTexture!==we){if(we!==null&&Re.has(we)&&(v.width!==we.image.width||v.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}const ke=v.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const ze=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ze[P])?D=ze[P][B]:D=ze[P],le=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?D=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(ze)?D=ze[B]:D=ze,w.copy(v.viewport),N.copy(v.scissor),k=v.scissorTest}else w.copy(Q).multiplyScalar(G).floor(),N.copy(Ie).multiplyScalar(G).floor(),k=Je;if(Pe.bindFramebuffer(U.FRAMEBUFFER,D)&&V&&Pe.drawBuffers(v,D),Pe.viewport(w),Pe.scissor(N),Pe.setScissorTest(k),le){const Te=Re.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,Te.__webglTexture,B)}else if(xe){const Te=Re.get(v.texture),ke=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,B||0,ke)}y=-1},this.readRenderTargetPixels=function(v,P,B,V,D,le,xe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){Pe.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Te=v.texture,ke=Te.format,ze=Te.type;if(!We.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-V&&B>=0&&B<=v.height-D&&U.readPixels(P,B,V,D,Oe.convert(ke),Oe.convert(ze),le)}finally{const Te=L!==null?Re.get(L).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,P,B,V,D,le,xe){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){const Te=v.texture,ke=Te.format,ze=Te.type;if(!We.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-V&&B>=0&&B<=v.height-D){Pe.bindFramebuffer(U.FRAMEBUFFER,Ee);const we=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),U.readPixels(P,B,V,D,Oe.convert(ke),Oe.convert(ze),0);const et=L!==null?Re.get(L).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,et);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qd(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le),U.deleteBuffer(we),U.deleteSync(ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,B=0){v.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const V=Math.pow(2,-B),D=Math.floor(v.image.width*V),le=Math.floor(v.image.height*V),xe=P!==null?P.x:0,Ee=P!==null?P.y:0;b.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,xe,Ee,D,le),Pe.unbindTexture()},this.copyTextureToTexture=function(v,P,B=null,V=null,D=0){v.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,v=arguments[1],P=arguments[2],D=arguments[3]||0,B=null);let le,xe,Ee,Te,ke,ze,we,et,ct;const ut=v.isCompressedTexture?v.mipmaps[D]:v.image;B!==null?(le=B.max.x-B.min.x,xe=B.max.y-B.min.y,Ee=B.isBox3?B.max.z-B.min.z:1,Te=B.min.x,ke=B.min.y,ze=B.isBox3?B.min.z:0):(le=ut.width,xe=ut.height,Ee=ut.depth||1,Te=0,ke=0,ze=0),V!==null?(we=V.x,et=V.y,ct=V.z):(we=0,et=0,ct=0);const Ct=Oe.convert(P.format),tt=Oe.convert(P.type);let Ce;P.isData3DTexture?(b.setTexture3D(P,0),Ce=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),Ce=U.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),Ce=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const Ht=U.getParameter(U.UNPACK_ROW_LENGTH),it=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xt=U.getParameter(U.UNPACK_SKIP_PIXELS),Bn=U.getParameter(U.UNPACK_SKIP_ROWS),It=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze);const z=v.isDataArrayTexture||v.isData3DTexture,H=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const ne=Re.get(v),ce=Re.get(P),se=Re.get(ne.__renderTarget),be=Re.get(ce.__renderTarget);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,se.__webglFramebuffer),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Xe=0;Xe<Ee;Xe++)z&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,D,ze+Xe),v.isDepthTexture?(H&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(P).__webglTexture,D,ct+Xe),U.blitFramebuffer(Te,ke,le,xe,we,et,le,xe,U.DEPTH_BUFFER_BIT,U.NEAREST)):H?U.copyTexSubImage3D(Ce,D,we,et,ct+Xe,Te,ke,le,xe):U.copyTexSubImage2D(Ce,D,we,et,ct+Xe,Te,ke,le,xe);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else H?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(Ce,D,we,et,ct,le,xe,Ee,Ct,tt,ut.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,D,we,et,ct,le,xe,Ee,Ct,ut.data):U.texSubImage3D(Ce,D,we,et,ct,le,xe,Ee,Ct,tt,ut):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,we,et,le,xe,Ct,tt,ut.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,we,et,ut.width,ut.height,Ct,ut.data):U.texSubImage2D(U.TEXTURE_2D,D,we,et,le,xe,Ct,tt,ut);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It),D===0&&P.generateMipmaps&&U.generateMipmap(Ce),Pe.unbindTexture()},this.copyTextureToTexture3D=function(v,P,B=null,V=null,D=0){return v.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,v=arguments[2],P=arguments[3],D=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,B,V,D)},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),Pe.unbindTexture()},this.resetState=function(){C=0,A=0,L=null,Pe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class hg extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fg extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Zt,u=Zt,d,f){super(null,a,o,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends hn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new ft,Sl=new ft,os=[],yl=new vi,pg=new ft,vr=new ot,xr=new Ir;class mg extends ot{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,pg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Oi),yl.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Oi),xr.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),e.ray.intersectsSphere(xr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Oi),Sl.multiplyMatrices(i,Oi),vr.matrixWorld=Sl,vr.raycast(e,os);for(let a=0,o=os.length;a<o;a++){const c=os[a];c.instanceId=s,c.object=this,t.push(c)}os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fg(new Float32Array(r*this.count),r,this.count,no,bn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jn extends wn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],m=[];let g=0;const x=[],p=i/2;let h=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(m,2));function E(){const S=new I,F=new I;let C=0;const A=(t-e)/i;for(let L=0;L<=s;L++){const y=[],M=L/s,w=M*(t-e)+e;for(let N=0;N<=r;N++){const k=N/r,$=k*c+o,Z=Math.sin($),q=Math.cos($);F.x=w*Z,F.y=-M*i+p,F.z=w*q,d.push(F.x,F.y,F.z),S.set(Z,A,q).normalize(),f.push(S.x,S.y,S.z),m.push(k,1-M),y.push(g++)}x.push(y)}for(let L=0;L<r;L++)for(let y=0;y<s;y++){const M=x[y][L],w=x[y+1][L],N=x[y+1][L+1],k=x[y][L+1];(e>0||y!==0)&&(u.push(M,w,k),C+=3),(t>0||y!==s-1)&&(u.push(w,N,k),C+=3)}l.addGroup(h,C,0),h+=C}function T(S){const F=g,C=new rt,A=new I;let L=0;const y=S===!0?e:t,M=S===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),g++;const w=g;for(let N=0;N<=r;N++){const $=N/r*c+o,Z=Math.cos($),q=Math.sin($);A.x=y*q,A.y=p*M,A.z=y*Z,d.push(A.x,A.y,A.z),f.push(0,M,0),C.x=Z*.5+.5,C.y=q*.5*M+.5,m.push(C.x,C.y),g++}for(let N=0;N<r;N++){const k=F+N,$=w+N;S===!0?u.push($,$+1,k):u.push($+1,$,k),L+=3}l.addGroup(h,L,S===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _s extends jn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends wn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new I,f=new I,m=[],g=[],x=[],p=[];for(let h=0;h<=i;h++){const E=[],T=h/i;let S=0;h===0&&a===0?S=.5/t:h===i&&c===Math.PI&&(S=-.5/t);for(let F=0;F<=t;F++){const C=F/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+T*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(C+S,1-T),E.push(l++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const T=u[h][E+1],S=u[h][E],F=u[h+1][E],C=u[h+1][E+1];(h!==0||a>0)&&m.push(T,S,C),(h!==i-1||c<Math.PI)&&m.push(S,F,C)}this.setIndex(m),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gi extends wn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const x=g/r*s,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const x=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,E=(r+1)*m+g;a.push(x,p,E),a.push(p,h,E)}this.setIndex(a),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rn extends Ur{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ec extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gg extends Ec{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const na=new ft,bl=new I,El=new I;class _g{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),El.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(El),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends _g{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends Ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new vg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wl=new ft;class xg{constructor(e,t,i=0,r=1/0){this.ray=new dc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(e,t=!0,i=[]){return Ya(e,this,i,t),i.sort(Al),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ya(e[r],this,i,t);return i.sort(Al),i}}function Al(n,e){return n.distance-e.distance}function Ya(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ya(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);let Mg=!1;function Sg(){return Mg}function yg(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function bg(n,e={}){const t=Sg(),i=new ug({canvas:n,antialias:!t,alpha:!1,powerPreference:"high-performance"});i.setClearColor("#17233F"),i.outputColorSpace=Kt,i.toneMapping=Yl,i.toneMappingExposure=1.1;const r=new hg;r.background=new Ze("#17233F");const s=new an(38,9/16,.1,200);function a(){const o=n.parentElement;if(!o)return;const c=o.clientWidth,l=o.clientHeight;c===0||l===0||(i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(c,l,!1),s.aspect=c/l,s.updateProjectionMatrix())}return{renderer:i,scene:r,camera:s,resize:a}}function Eg(n){const e=Un.degToRad(35),t=Un.degToRad(22),i=27,r=new I(0,0,0);function s(){const o=new I(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)).normalize();n.position.copy(r).addScaledVector(o,i),n.lookAt(r)}s();const a=6;return{panBy(o,c){r.x=Un.clamp(r.x+o,-a,a),r.z=Un.clamp(r.z+c,-a,a),s()},setPan(o,c){r.x=Un.clamp(o,-a,a),r.z=Un.clamp(c,-a,a),s()},update(){}}}const j={inkNavy:"#17233F",moonBlue:"#5B79C8",plum:"#6D3E78",parchment:"#F4E7C7",sealingRed:"#C74B55",brass:"#D6A84B",routeMint:"#72D6C1"},Cl=new ar,Rl=new I,Pl=new I;class Tg{mesh;dummy=new At;actives;colors;constructor(e,t,i){this.mesh=new mg(t,i,e),this.mesh.instanceMatrix.setUsage(wo),this.mesh.frustumCulled=!1,this.actives=new Array(e).fill(!1),this.colors=[];for(let r=0;r<e;r++)this.colors.push(new Ze("#F4E7C7")),this.mesh.setColorAt(r,this.colors[r]);this.mesh.instanceColor&&this.mesh.instanceColor.setUsage(wo);for(let r=0;r<e;r++)this.place(r,-999,-999,-999,1,1,1,0,0,0)}place(e,t,i,r,s,a,o,c,l,u){Cl.setFromEuler(new mn(c,l,u)),Rl.set(t,i,r),Pl.set(s,a,o),this.dummy.position.copy(Rl),this.dummy.quaternion.copy(Cl),this.dummy.scale.copy(Pl),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}acquire(e,t,i,r={}){let s=-1;for(let o=0;o<this.actives.length;o++)if(!this.actives[o]){s=o;break}if(s===-1)return null;this.actives[s]=!0;const a=r.scale??1;return this.place(s,e,t,i,a,a*.12,a*.75,0,r.rot??0,0),r.color&&this.mesh.instanceColor&&(this.colors[s].set(r.color),this.mesh.setColorAt(s,this.colors[s])),{index:s,active:!0,id:s}}move(e,t,i,r,s=0,a=1){this.place(e.index,t,i,r,a,a*.12,a*.75,0,s,0)}hide(e){this.actives[e.index]&&(this.actives[e.index]=!1,this.place(e.index,-999,-999,-999,1,1,1,0,0,0))}commit(){this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}get usedCount(){let e=0;for(const t of this.actives)t&&e++;return e}}const Ll={desk:{family:"desk",color:"#F4E7C7",glyph:"stacked-tray",badge:"square"},satchel:{family:"satchel",color:"#6D3E78",glyph:"buckle",badge:"capsule"},route:{family:"route",color:"#72D6C1",glyph:"thread-needle",badge:"needle-pulse"},inflow:{family:"inflow",color:"#5B79C8",glyph:"tray-arrow",badge:"rain-line"}},wg={desk:{warnAt:.7,chokeAt:.85,chokeSustainS:3,burstFullAt:.999},satchel:{queueWarnAt:.4,deskPileChokeAt:.4,chokeSustainS:3},route:{okSlack:.15,utilWarnAt:.85,utilChokeAt:.999,queueChokeAt:.4,chokeSustainS:3},inflow:{okAt:.35,chokeAt:.2,chokeSustainS:3}},ia={capacityPulseS:.4,purchasePunchS:.25},Dl={kept:["Stars banked (+ pending claim)","Unlocked districts' identity on the route map (postcards stay readable)","Night Clerk License stub state","Save/version lineage"],lost:["Postage balance and E_run","All hall upgrade tiers (F1–F10)","Desk pads / satchel racks / route lanes and their tiers (back to first-slot T1 installed)","Backlog pool to Lantern Lane state","Active district back to Lantern Lane; gate progress resets (Rainmarket bond re-payable)","Night Ledger snapshot (unsettled away time settles into run Postage before confirm)"]},ls={title:"The night kept working.",neverEmpty:"The hall barely noticed you leave. +0 — step back in, Clerk.",collect:"Collect",doubler:"Double it — free"},Tc=[{beat:"point-hold",trigger:{t:0},speaker:null,copy:null,highlight:"sort"},{beat:"letters-stream",trigger:{t:10},speaker:"Pip",copy:"They answer the thumb. They always do.",grantId:1},{beat:"desks-fill",trigger:{t:30},speaker:"Mara",copy:"Desks are your lungs. Buy the second tray.",grantId:2,highlight:"desk"},{beat:"rail-pad2",trigger:{t:45},speaker:"Pip",copy:"Room to breathe.",rail:{family:"desk",note:"pad2 unlock (300)"},highlight:"desk"},{beat:"routes-pulse",trigger:{t:75},speaker:"Mara",copy:"The lanes decide what's real. Feed them.",grantId:3,rail:{family:"route",note:"lane1 T2 (380)"},highlight:"route"},{beat:"first-hall-tier",trigger:{t:120},speaker:"Pip",copy:"The hall likes investment. Watch the pile.",grantId:4,rail:{family:"hall",note:"first district upgrade (F4/F1 cheapest)"},highlight:"inflow"},{beat:"night-ledger-card",trigger:{t:300},speaker:"Mara",copy:"Dawn always wins. The Ledger makes sure it doesn't win everything.",grantId:5},{beat:"seal-grammar",trigger:{event:"rv_complete"},speaker:"Mara",copy:"Rainmarket is listening. Finish the list.",highlight:"seal-rainmarket"},{beat:"bond-prelight",trigger:{event:"list_nearly"},speaker:null,copy:null,highlight:"seal-rainmarket"},{beat:"rainmarket-answers",trigger:{event:"advance"},speaker:"Mara",copy:"Rainmarket answers. First time in years, Clerk.",grantId:6},{beat:"horizon-remembers",trigger:{event:"horizon_rv"},speaker:"Mara",copy:"That seal doesn't open tonight. It remembers.",highlight:"seal-horizon"},{beat:"redraw-offered",trigger:{event:"horizon_list"},speaker:"Mara",copy:"Tear up the routes. Draw them better.",highlight:"seal-horizon"},{beat:"second-wind",trigger:{event:"claim"},speaker:"Pip",copy:"Again. But faster. Much faster."}],Ag=.9,je={onboardBeat:"md.onboard.beat",meterChoke:"md.meter.choke",meterRemedy:"md.meter.remedy",purchase:"md.purchase",gateCross:"md.gate.cross",advance:"md.advance",redrawShow:"md.redraw.show",redrawClaim:"md.redraw.claim",ledgerReturn:"md.ledger.return",saveWrite:"md.save.write",saveLoad:"md.save.load",postcardUnlock:"md.postcard.unlock",postcardRead:"md.postcard.read",postcardSeal:"md.postcard.seal",morningPost:"md.morning-post.claim",specialActivate:"md.special.activate",specialClaim:"md.special.claim",wanderlight:"md.wanderlight.tap",sealConvert:"md.seal.convert",trayActivate:"md.tray.activate",wanderSpawn:"md.wanderlight.spawn",morningpostReady:"md.morningpost.ready",morningpostClaim:"md.morningpost.claim",specialOffer:"md.special.offer",specialAccept:"md.special.accept",specialComplete:"md.special.complete",stampCapped:"md.stamp.capped",replyChord:"md.reply.chord",flatArm:"md.flat.arm",flatNudge:"md.flat.nudge"},Il={budget:250},ra={speaker:"Mara",line:"That seal owes you a road now, not a reset.",note:"The Clocktower seal now opens the Ward directly: advance + bond 25,000."},Cg=[{districtIndex:2,id:"clocktower_ward",name:"Clocktower Ward",body:"The route-miniature threads upward into a bell-chamber of brass and moonlight. A long-stopped minute hand shudders — and ticks once.",speaker:"Mara",speakerLine:"First bell the city's heard in years — and it's *on time*.",arrivalCopy:{speaker:"Mara",line:"It answered. Clerk — it *answered*."}},{districtIndex:3,id:"museum_after_dark",name:"Museum After Dark",body:"The miniature rolls out a colonnade of cool-lit glass. One exhibit case glows from inside — no artifact, only an addressed envelope, waiting decades.",speaker:"Pip",speakerLine:"Shhh. The exhibits sleep. *Mostly.*",arrivalCopy:null},{districtIndex:4,id:"rooftop_gardens",name:"Rooftop Gardens",body:"The thread climbs a drainpipe line into greenhouse glass. Condensation spells a word — and wipes itself before anyone reads it.",speaker:"Mara",speakerLine:"They grow tea up there, and patience. Deliver gently.",arrivalCopy:null},{districtIndex:5,id:"canal_of_echoes",name:"Canal of Echoes",body:"The miniature spills down steps to black water. Every thread so far — six districts — reflects at once, and the reflections ripple into one chord, the loudest and softest yet.",speaker:"Mara",speakerLine:"Listen to that, Clerk. Six districts, one address. *Ours.*",arrivalCopy:null}],Ul={delayAfterVignetteS:8},ht={secondWind:{beat:"ch2.second-wind",speaker:"Pip",copy:"Same hall. Better stars. Watch."},rmReanswer:{beat:"ch2.rm-reanswer",speaker:"Pip",copy:"They remember your hands."},trayRail:{beat:"ch2.tray-rail",speaker:"Mara",copy:"Trays take in what the night drops. Your thumb gets a pension.",highlight:"inflow"},wanderOn:{beat:"ch2.wander-on",speaker:"Pip",copy:"Sky-mail. Pop, don't chase."},firstWander:{beat:"ch2.first-wander",speaker:"Pip",copy:"That one's lost its address. Pop it — gently."},sdIntro:{beat:"ch2.sd-intro",speaker:"Pip",copy:"Old streets keep asking. We charge them stamps. It's *diplomacy*.",highlight:"special"},mpFirstReady:{beat:"ch2.mp-first-ready",speaker:"Mara",copy:"The city reads your night shift over breakfast. Take the bundle.",highlight:"morningpost"},postcardAuto:{beat:"ch2.postcard-auto",speaker:"Mara",copy:"Three a district. They write more when you notice.",highlight:"postcards"},flatNear:{beat:"ch2.flat-near",speaker:"Mara",copy:"Ticker's flat, seal's close. *Finish the seal.*"},flatFar:{beat:"ch2.flat-far",speaker:"Mara",copy:"That wall isn't tonight's, sweetheart. *Bank the night.*",highlight:"redraw"},evaporation:{speaker:"Pip",copy:"Yesterday's wall. This morning? *Confetti.*"},museumClaim:{beat:"ch2.museum-claim",speaker:"Mara",copy:"Tear up the routes. Draw them better remembered."},museumClaim2:{beat:"ch2.museum-claim-2",speaker:"Pip",copy:"Again! With *style*."}},Fl={conversionCardS:410,sdBoardIntroS:415},Wt={sortPull:(n,e)=>.035*n*(1+.2*e),backlogPoolBase:400,backlogPoolScale:1.8,backlogRefillBase:7,backlogRefillScale:1.8,satchelBufferSeconds:15,perfectSort:{psMaxBase:1.5,psMaxPerF5:.25,rampS:20,rampS_F5t1:15,rampS_F5t4:12,decayS:5,decayS_F5t2:8},starScalar:3,starDenom:1e4,starMultStep:.22},fn=[{id:"lantern_lane",name:"Lantern Lane",letterValue:1,gate:null},{id:"rainmarket",name:"Rainmarket",letterValue:6,gate:{rv:16e3,deliveryList:36e3,bond:6e3}},{id:"clocktower_ward",name:"Clocktower Ward",letterValue:32,gate:null},{id:"museum_after_dark",name:"Museum After Dark",letterValue:180,gate:null},{id:"rooftop_gardens",name:"Rooftop Gardens",letterValue:1e3,gate:null},{id:"canal_of_echoes",name:"Canal of Echoes",letterValue:5500,gate:null}],St={rainmarket:{id:"rainmarket",to:1,rv:16e3,deliveryList:36e3,bond:6e3,action:"advance_bond"},horizon:{id:"horizon",to:2,rv:12e6,deliveryList:45e5,bond:25e3,action:"redraw_claim"},museum:{id:"museum",to:3,rv:124e8,deliveryList:45e8,bond:22e4,action:"advance_bond"},rooftop:{id:"rooftop",to:4,rv:225e9,deliveryList:75e9,bond:36e5,action:"advance_bond"},canal:{id:"canal",to:5,rv:4e12,deliveryList:115e10,bond:6e7,action:"advance_bond"}},Nl={f1Step:.3,psMultiplier:n=>n,starsMultiplier:n=>1+Wt.starMultStep*n},Jt={count:4,unlock:[0,300,2400,18e4],tier:[0,700,22e3,42e4,76e5,13e7],caps:[240,560,1100,2200,4300,8500],F6:{capMult:1.25,costMult:.9}},An={count:4,unlock:[0,1100,12e3,42e4],tier:[0,450,13e3,25e4,45e5,78e6],rates:[13,18,50,90,160,340]},Tn={count:4,unlock:[0,850,9500,32e4],tier:[0,380,11e3,21e4,39e5,66e6],rates:[11.5,16,48,84,148,300],F7:{rateMult:1.25,costMult:.9,rateMultPerTier:1.15,costMultPerTier:.92}},gn={F4:{id:"F4",label:"Taller Racks",tiers:7,cost:[600,1600,22e3,2e5,75e4,28e5,1e7],effect:"pool ×1.8, refill ×1.8 per tier (t7 cap: pool 24,489 · refill 428.6/s)"},F1:{id:"F1",label:"Warmer Seals",tiers:8,cost:[1e3,2600,42e3,12e4,38e4,9e5,25e5,75e5],effect:"letter value +30% per tier (t8 ×3.4 total cap)",letterValueStep:.3},F2:{id:"F2",label:"Lighter Ink",tiers:8,cost:[900,4200,5e4,16e4,45e4,11e5,32e5,9e6],effect:"base sort pull +20% per tier (t8 +160% total)",sortPullStep:.2},F5:{id:"F5",label:"Sweet Spot",tiers:7,cost:[1200,6500,7e4,24e4,56e4,84e4,14e5],effect:"ps_max +0.25/tier (t7 3.25); t1 ramp→15s; t2 decay→8s; t4 ramp→12s; t6+ persistence floor",unlockAtRun:1200,psMaxPerTier:.25,persistenceTier:6,rampAtTiers:[{tier:1,rampS:15},{tier:4,rampS:12}],decayAtTiers:[{tier:2,decayS:8}]},F6:{id:"F6",label:"Sturdy Trays",tiers:1,cost:[3e3],effect:"desk caps ×1.25, desk costs ×0.90",deskCapMult:1.25,deskCostMult:.9},F7:{id:"F7",label:"Swift Lanes",tiers:3,cost:[3e3,85e3,11e5],effect:"route rates ×1.15 · costs ×0.92 per tier; t1 ×1.25/×0.90 (t3 cum ×1.3225/×0.8464); ribbon dressing",routeRateMult:1.25,routeCostMult:.9,routeRateMultPerTier:1.15,routeCostMultPerTier:.92},F10:{id:"F10",label:"Ledger Eyes",tiers:2,cost:[3e3,22e5],effect:"hall factor 0.05 → 0.08 (t1) → 0.12 (t2)",hfacAfter:.08,hfacAfterT2:.12},F3:{id:"F3",label:"Night Habits",tiers:4,cost:[4e3,25e4,15e5,6e6],effect:"t1 away 0.65; t2–t4 Inflow Trays (0.40/0.72/1.30); t4 away 0.80",unlockAtRun:2500,awayFractionAfter:.65,awayFractionAfterT4:.8,trayFrac:[.4,.72,1.3],conditionDistrictId:"clocktower_ward"},F8:{id:"F8",label:"Longer Nights",tiers:2,cost:[24e3,18e5],effect:"Night Ledger cap 2 h → 3 h (t1) → 5 h (t2)",capHoursAfter:3,capHoursAfterT2:5},F9:{id:"F9",label:"Wanderlights",tiers:3,cost:[12e4,9e5,55e5],effect:"t1 activate (cadence 110 s); t2 reward ×1.75 · seal 6%; t3 cadence 90 s · grand 1.2%",conditionDistrictId:"clocktower_ward",wanderCadenceBase:140,wanderCadenceT1:110,wanderCadenceT3:90,wanderRewardMultT2:1.75,wanderSealChanceT2:.06,wanderGrandChanceT3:.012}},sa={hfac:.05,hfacAfterF10:.08,hfacAfterF10T2:.12},Fr={capHours:2,awayFraction:.5,doublerMaxPer24h:3,neverEmptyElapsedS:120},Rg=[{id:1,grant:50},{id:2,grant:150},{id:3,grant:400},{id:4,grant:1200},{id:5,grant:2400},{id:6,grant:6e3}],wc={lantern_lane:[500,2500,6e3],rainmarket:[800,3e3,7e3],clocktower_ward:[5e4,3e5,1e6],museum_after_dark:[15e4,6e5,2e6],rooftop_gardens:[1e5,5e5,15e5],canal_of_echoes:[25e3,15e4,6e5]},kl={frontierShare:.75,fanShareUniform:.25},pn={maxConcurrent:2,despawnS:20,normalRewardLetterMult:25,sealChance:.04,sealChanceF9T2:.06,grandChance:.006,grandChanceF9T3:.012,grandRewardLetterMult:500,grandWaxSeals:2},tr={cadenceH:8,maxHeld:1,grantByFrontier:{clocktower_ward:6e4,museum_after_dark:5e5,rooftop_gardens:3e6,canal_of_echoes:18e6}},Mr={cap:250,p:{lantern_lane:.0015,rainmarket:.0012,clocktower_ward:8e-4,museum_after_dark:6e-4,rooftop_gardens:4e-4,canal_of_echoes:3e-4}},Nr={maxActiveTimers:3,recipes:[{id:"SD1",name:"The Umbrella Route",stamps:{lantern_lane:8,rainmarket:6},timerH:4,rewardPct:.01,available:"clocktower_ward"},{id:"SD2",name:"Still Life, With Address",stamps:{rainmarket:12,clocktower_ward:4},timerH:6,rewardPct:.02,available:"museum_after_dark"},{id:"SD3",name:"The Curator's Errand",stamps:{clocktower_ward:10,museum_after_dark:6},timerH:8,rewardPct:.035,available:"rooftop_gardens"}]},Sn={armFloorS:1500,windowS:480,windowMaxStars:1,cardAfterS:60,nudgeAfterS:300,nudgeSealShareBelow:.2},Pg={districtAdvanceCh2:2};function Es(n){const e=n.hall.F4??0;return Wt.backlogPoolBase*Math.pow(Wt.backlogPoolScale,e)}function Lg(n){const e=n.hall.F3??0,i=gn.F3?.trayFrac;if(!i||e<2)return 1;const r=Math.min(e-2,i.length-1);return 1+(i[r]??0)}function vs(n){const e=(n.hall.F6??0)>0;let t=0;for(const i of n.desks)i.unlocked&&(t+=Jt.caps[i.tier]);return e?t*Jt.F6.capMult:t}function Dg(n){const e=n.hall.F2??0,t=Wt.sortPull(Es(n),e),i=(n.hall.F6??0)>0,r=n.desks.filter(a=>a.unlocked).length||1,s=i?Jt.F6.capMult:1;return t*r*s}function Ac(n){let e=0;for(const t of n.racks)t.unlocked&&(e+=An.rates[t.tier]);return e*Wt.satchelBufferSeconds}function Cc(n){const e=n.hall.F7??0,t=Tn.F7,i=t.rateMultPerTier;let r=1;e>=1&&(r=t.rateMult);for(let a=2;a<=e;a++)r*=i;let s=0;for(const a of n.lanes)a.unlocked&&(s+=Tn.rates[a.tier]);return s*r}function uo(n){const e=fn[n.districtIndex],t=e?e.letterValue:1,i=n.hall.F1??0;return t*(1+Nl.f1Step*i)*Nl.starsMultiplier(n.stars)}function ho(n){const e=n.hall.F5??0;return Wt.perfectSort.psMaxBase+Wt.perfectSort.psMaxPerF5*e}function Ig(n){const e=n.hall.F5??0,t=gn.F5;let i=Wt.perfectSort.rampS;for(const r of t.rampAtTiers??[])e>=r.tier&&(i=r.rampS);return i}function Ug(n){const e=n.hall.F5??0,t=gn.F5;let i=Wt.perfectSort.decayS;for(const r of t.decayAtTiers??[])e>=r.tier&&(i=r.decayS);return i}function Fg(n){return Math.floor(Wt.starScalar*Math.log(1+n/Wt.starDenom))}function Ng(n,e,t,i){const r=ho(n);if(t)n.perfect=Math.min(r,n.perfect+1/Ig(n)*e);else{const w=gn.F5,N=n.hall.F5??0;let k=0;w&&w.persistenceTier!=null&&N>=w.persistenceTier&&(k=1+.5*(r-1)),n.perfect=Math.max(k,n.perfect-1/Ug(n)*e)}const s=Es(n),a=Wt.backlogRefillBase*Math.pow(Wt.backlogRefillScale,n.hall.F4??0);n.backlog=Math.min(s,n.backlog+a*Lg(n)*e);const o=Dg(n),c=vs(n),l=Ac(n),u=Cc(n);let d=0;const f=n.desks.reduce((w,N)=>w+N.inProcess,0),m=c-f,g=t?Math.min(m,o*e,n.backlog)*n.perfect:0;if(g>0){let w=g;const N=n.desks.filter(k=>k.unlocked);for(;w>1e-6&&N.length;){let k=!1;for(const $ of N){const Z=Jt.caps[$.tier],te=(n.hall.F6??0)>0?Z*Jt.F6.capMult:Z,G=te/c,he=Math.min(c>0?w*G:0,te-$.inProcess,w);he>1e-6&&($.inProcess+=he,w-=he,k=!0)}if(!k)break}n.backlog=Math.max(0,n.backlog-g)}const x=n.racks.reduce((w,N)=>w+(N.unlocked?An.rates[N.tier]:0),0),p=n.desks.reduce((w,N)=>w+N.inProcess,0),h=Math.min(p,x*e);n.bundled=(n.bundled??0)+h;let E=h;const T=n.desks.filter(w=>w.unlocked);for(const w of T){if(E<=1e-6)break;const N=Math.min(w.inProcess,E);w.inProcess-=N,E-=N}const S=Math.min(n.bundled??0,u*e);n.bundled=(n.bundled??0)-S;const F=uo(n),C=S*F;n.postage+=C,n.totalEarnedRun+=C,n.districtRouteValue+=S,d=S;const A=g>0&&m<=1e-6,L=(n.bundled??0)>=l-1e-6,y=(n.bundled??0)>0&&S<(n.bundled??0)*.5+1e-6;let M="none";return y&&(n.bundled??0)>l*.9?M="lane":L?M="rack":A&&(M="desk"),{delivered:d,postageEarned:C,bottleneck:M}}function Fe(n,e,t,i){const r=new Qn(n,e,t),s=new rn({color:i});return new ot(r,s)}function Yt(n,e,t,i,r=20){return new ot(new jn(n,e,t,r),new rn({color:i}))}const kg=-5.2,jt=-4.95,Bi=[-3.4,-1.2,1.1,3.3],Ol=[-4.4,-3.1,-1.8,-.5],Sr=[-4.4,-3.1,-1.8,-.5];function Og(n,e={}){const t=new vt,i=new gg("#5B79C8","#17233F",.9);n.add(i);const r=new Tl("#F4E7C7",1.15);r.position.set(8,14,6),n.add(r);const s=new Tl(j.plum,.35);s.position.set(-6,6,-4),n.add(s);const a=new ot(new Qn(16,.3,16),new rn({color:"#20304f"}));a.position.y=-.15,t.add(a);const o={color:j.brass},c=Fe(14.5,.12,.12,o.color);c.position.set(0,.5,-4.6);const l=Fe(14.5,.12,.12,o.color);l.position.set(0,.5,4.6);const u=Fe(.12,.12,9.2,o.color);u.position.set(-7.2,.5,0);const d=Fe(.12,.12,9.2,o.color);d.position.set(7.2,.5,0);for(const z of[c,l,u,d])Yt(.05,.05,.5,j.brass,8).position.set(z.position.x-(z.scale.x||0),.25,z.position.z),t.add(z);const f=Fe(14.6,5.4,.4,"#241f3a");f.position.set(0,2.7,kg),t.add(f);const m=new ot(new jn(1.5,1.5,.12,28),new rn({color:j.inkNavy}));m.rotation.x=Math.PI/2,m.position.set(-2.4,3.1,jt+.08),t.add(m);const g=new ot(new Gi(1.5,.06,8,28),new rn({color:j.brass}));g.position.copy(m.position),t.add(g);const x=new Vt({color:j.routeMint}),p=new Vt({color:j.inkNavy}),h=new Vt({color:"#101a30"});function E(z,H,ne){const ce=z.distanceTo(H),se=new ot(new jn(.035,.035,ce,6),ne),be=z.clone().add(H).multiplyScalar(.5);return se.position.copy(be),se.lookAt(H),se.rotateX(Math.PI/2),se}const T=m.position.clone(),S=new I(-.4,2.15,jt+.12),F=new I(.5,3.3,jt+.12),C=new I(1.7,3.9,jt+.12);t.add(E(T,S,x));const A=E(T,F,p);t.add(A),t.add(E(T,C,h));const L=new ot(new Gi(.42,.07,8,20),new Vt({color:"#0d1730"}));L.position.copy(C),t.add(L);const y=Fe(.22,1,.1,"#0d1730");y.position.set(C.x-.14,C.y+.8,C.z);const M=Fe(.16,.7,.1,"#0d1730");M.position.set(C.x+.18,C.y+.65,C.z),t.add(y),t.add(M);const w=new vt;w.add(L,y,M),t.add(w);const N=new vt,k=Fe(2.4,3.2,.5,j.moonBlue);k.position.y=1.6,N.add(k);const $=Fe(1.2,2.2,.5,j.plum);$.position.set(1.6,1.1,0),N.add($);const Z=Fe(1.4,2.7,.5,j.brass);Z.position.set(-1.4,1.35,-.2),N.add(Z),N.position.set(-5.2,0,-4.35),t.add(N);const q=new vt,te=Fe(2,2.6,.5,j.moonBlue);te.position.y=1.3,q.add(te);const G=Fe(2.6,1.8,.5,j.plum);G.position.set(.4,.9,.2),q.add(G),q.position.set(4.9,0,-4.35),t.add(q);const he={1:F,2:C,3:new I(2.85,4.25,jt+.12),4:new I(3.95,4.55,jt+.12),5:new I(5,4.8,jt+.12)},Y={1:j.routeMint,2:j.brass,3:j.plum,4:"#a8e6c9",5:j.moonBlue},Q="#101a30",Ie={1:A};for(const z of[2,3,4,5]){const H=new Vt({color:Q}),ne=E(T,he[z],H);t.add(ne),Ie[z]=ne}function Je(){const z=new vt,H=Fe(.24,1,.12,"#8ea3c8");H.position.y=.5;const ne=Yt(.14,.14,.03,j.parchment,16);ne.rotation.x=Math.PI/2,ne.position.set(0,.86,.07);const ce=Fe(.02,.11,.012,j.inkNavy);ce.geometry.translate(0,.055,0),ce.position.set(0,.86,.095);const se=Yt(.09,.13,.14,j.brass,10);return se.position.set(0,.66,.06),z.add(H,ne,ce,se),z.userData.hand=ce,z}function X(){const z=new vt;for(let ce=-1.5;ce<=1.5;ce++){const se=Yt(.05,.06,.55,"#9db4dd",8);se.position.set(ce*.24,.275,0),z.add(se)}const H=Fe(.95,.08,.14,j.plum);H.position.y=.6;const ne=Fe(.14,.2,.06,j.parchment);return ne.position.set(.36,.14,.05),z.add(H,ne),z}function re(){const z=new vt,H=Fe(.85,.3,.14,"#3f6f5a");H.position.y=.15;const ne=new ot(new mi(.5,.4),new rn({color:"#a8e6c9",transparent:!0,opacity:.45}));ne.position.set(-.13,.5,.02),ne.rotation.z=.5;const ce=ne.clone();ce.position.x=.13,ce.rotation.z=-.5;const se=Fe(.06,.5,.06,"#2e5d49");return se.position.set(.3,.3,.06),z.add(H,ne,ce,se),z}function ue(){const z=new vt,H=Fe(1.05,.04,.2,"#0b1530");H.position.y=.02;const ne=new ot(new Gi(.36,.05,8,16,Math.PI),new rn({color:"#6f85b8"}));ne.position.y=.06;const ce=Fe(.24,.3,.12,"#29406e");ce.position.set(-.46,.15,0);const se=Yt(.03,.04,.16,j.brass,8);return se.position.set(.42,.5,.05),z.add(H,ne,ce,se),z.userData.water=H,z}function de(z){const H=new vt,ne=Fe(.9,.55+z*.06,.06,"#16203c");ne.position.y=.3;const ce=Fe(.34,.5,.06,"#101a30");return ce.position.set(.3,.45,.02),H.add(ne,ce),H}const ae={},ve={2:Je,3:X,4:re,5:ue};for(const z of[2,3,4,5]){const H=he[z],ne=ve[z]();ne.position.set(H.x-.2,H.y-1.05,H.z+.01),ne.visible=!1;const ce=de(z);ce.position.set(H.x-.45,H.y-1.05,H.z),t.add(ne,ce),ae[z]={lit:ne,locked:ce}}const De=new vt,st=Fe(.85,.62,.08,"#241f3a");st.position.set(3.35,1.05,1.45),st.rotation.y=-.35;const qe=[];for(let z=0;z<3;z++){const H=Fe(.18,.26,.03,j.plum);H.position.set(3.16+z*.24,1.03,1.52-z*.087),H.rotation.y=-.35,H.visible=!1,qe.push(H),De.add(H)}const mt=[],U=["lantern_lane","rainmarket","clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"],Bt=[j.routeMint,j.routeMint,j.brass,j.plum,"#a8e6c9",j.moonBlue];for(let z=0;z<6;z++){const H=Fe(.09,.09,.02,Bt[z]);H.position.set(3+z*.135,.72,1.62-z%3*.045),H.rotation.y=-.35,mt.push(H),De.add(H)}const $e=Fe(1.3,.4,.5,"#3a2b46");$e.position.set(3.3,.4,1.4),De.add($e,st),t.add(De);const We=new vt,Pe=Yt(.26,.18,.28,"#b08d57",10);Pe.position.set(-4.55,.34,1.5);const at=Fe(.24,.16,.02,j.parchment);at.position.set(-4.55,.56,1.5),at.rotation.z=-.12;const Re=Yt(.035,.035,.02,j.brass,8);Re.rotation.x=Math.PI/2,Re.position.set(-4.47,.56,1.53),We.add(Pe,at,Re),We.visible=!1,t.add(We);const b=[];for(let z=0;z<Bi.length;z++){const H=Fe(.34,.07,.24,"#101a30");H.position.set(Bi[z]-.42,.245,1.35),t.add(H),b.push(H)}const _=[];for(let z=0;z<Sr.length;z++){const H=Fe(.05,.02,3,"#b08d57"),ne=Fe(.05,.02,3,"#b08d57");H.position.set(Sr[z]-.34,.03,-3),ne.position.set(Sr[z]+.34,.03,-3),t.add(H,ne),_.push([H,ne])}const O=[],ee=[],ie=[];Bi.forEach((z,H)=>{const ne=Fe(1.4,.6,.8,j.brass);ne.position.set(z,-.09,1.6);const ce=Fe(1.5,.18,.9,j.parchment);ce.position.set(z,.12,1.6);const se=Fe(.4,.09,.3,j.brass);se.position.set(z-.45,.245,1.95);const be=Fe(.5,1,.36,j.parchment);be.position.set(z+.38,.21,1.35),be.scale.y=.02,t.add(ne,ce,se,be),O.push(ce),ee.push(be),ie.push(se)});const K=[],Ae=[],ge=[];Ol.forEach(z=>{const H=Fe(.9,1.5,.5,"#3a2b46");H.position.set(z,.75,-1.4);const ne=Fe(.56,.5,.34,j.plum);ne.position.set(z,1.02,-1.32);const ce=Fe(.12,1,.05,j.routeMint);ce.position.set(z+.38,.5,-1.12),ce.scale.y=.02;const se=.5;ce.position.y=se,t.add(H,ne,ce),K.push(H),Ae.push(ne),ge.push(ce)});const Me=[];for(let z=0;z<2;z++){const H=new ot(new mi(2.6,.5),new Vt({color:j.routeMint,transparent:!0,opacity:.25}));H.rotation.x=-Math.PI/2,H.rotation.z=Math.PI/2,H.position.set(-2.6+z*1.4,.03,.35),t.add(H),Me.push(H)}const Ye=new vt,oe=Fe(.22,1.7,.22,j.brass);oe.position.set(-.85,.85,.3);const Se=Fe(.22,1.7,.22,j.brass);Se.position.set(.85,.85,.3);const Le=Fe(1.95,.24,.24,j.brass);Le.position.set(0,1.72,.3);const Ue=Yt(.09,.09,.3,j.inkNavy,8);Ue.position.set(1.02,1.15,.3),Ue.rotation.z=Math.PI/2;const ye=Fe(.07,.62,.07,j.sealingRed);ye.position.set(0,.31,0);const Ve=new vt;Ve.position.set(1.02,1.15,.3),Ve.add(ye),Ve.rotation.z=-.5,Ye.add(oe,Se,Le,Ue,Ve),t.add(Ye);const Oe=[],lt=[];Sr.forEach(z=>{const H=new ot(new mi(.7,3),new Vt({color:j.routeMint,transparent:!0,opacity:.85}));H.rotation.x=-Math.PI/2,H.position.set(z,.02,-3);const ne=Fe(.4,.3,.12,"#0d1730");ne.position.set(z,.15,-3),t.add(H,ne),Oe.push(H),lt.push(ne)});const R=Fe(1.7,.18,1.4,"#2a3d68");R.position.set(-2.6,.09,4);const fe=Fe(1.7,.3,.1,j.brass);fe.position.set(-2.6,.24,4.62);const W=Yt(1.1,1.3,1.1,j.parchment);W.position.set(-2.6,.55,4);const J=new ot(new _s(.3,.5,4),new rn({color:j.moonBlue}));J.rotation.x=Math.PI,J.position.set(-2.6,1.9,4),t.add(R,fe,W,J);const pe=new vt,_e=Yt(.24,.26,.2,j.sealingRed,12);_e.position.y=.1;const Be=Yt(.19,.19,.06,j.parchment,12);Be.position.y=.23;const pt=Fe(.045,.05,.03,j.inkNavy);pt.position.set(-.06,.27,.16);const bt=Fe(.045,.05,.03,j.inkNavy);bt.position.set(.06,.27,.16),pe.add(_e,Be,pt,bt),pe.position.set(1.65,0,.95),t.add(pe);const Qe=new vt,zt=Yt(.22,.42,1.5,j.plum,10);zt.position.y=.75;const Qt=Yt(.17,.17,.3,j.parchment,10);Qt.position.y=1.68;const Mi=new ot(new Gi(.07,.015,6,12),new Vt({color:j.brass}));Mi.position.set(-.075,1.7,.16);const lr=Mi.clone();lr.position.x=.075;const _n=Fe(.05,.015,.02,j.brass);_n.position.set(0,1.7,.17),Qe.add(zt,Qt,Mi,lr,_n),Qe.position.set(2.3,0,-3.6),t.add(Qe);const vn=new ot(new Ar(.32,12,12),new Vt({color:"#72D6C1"}));vn.position.set(0,2.4,0);const cr=Fe(.1,2.2,.1,j.brass);cr.position.set(0,1.1,0),t.add(cr,vn),n.add(t);const ti=new vt;n.add(ti);const en=[];function Or(z){const H=new vt,ne=z==="grand",ce=new ot(new _s(ne?.55:.42,ne?.95:.75,12),new rn({color:ne?j.sealingRed:"#e8b86b"}));ce.position.y=0;const se=new ot(new jn(ne?.56:.43,ne?.56:.43,.08,12),new rn({color:j.brass}));se.position.y=ne?.34:.27;const be=new ot(new Ar(ne?.34:.24,10,10),new Vt({color:ne?"#ff9a3c":"#ffcf7a",transparent:!0,opacity:.85}));be.position.y=ne?-.18:-.14;const Xe=new ot(new jn(.012,.012,.5,6),new rn({color:j.inkNavy}));return Xe.position.y=ne?-.55:-.42,ce.userData.kind=z,be.userData.kind=z,se.userData.kind=z,H.add(ce,se,be,Xe),H.userData.kind=z,H.position.set((Math.random()-.5)*7.5,2.4+Math.random()*1.4,-2.2+Math.random()*2.6),H}function Si(z){if(en.length>=pn.maxConcurrent)return;const H=Or(z);if(z==="grand"){const ne=new ot(new Ar(.07,6,6),new Vt({color:"#ffd773",transparent:!0,opacity:.9}));ne.position.set(0,-.3,-.2),H.add(ne)}ti.add(H),en.push({group:H,kind:z,bornS:0,lifeS:0,swayT:Math.random()*Math.PI*2})}function dr(z){const H=en[z];H&&(ti.remove(H.group),en.splice(z,1))}function Br(z,H,ne){for(let ce=en.length-1;ce>=0;ce--){const se=en[ce];if(se.lifeS+=z,se.lifeS>=pn.despawnS){dr(ce);continue}const be=se.lifeS>=pn.despawnS-5?.5:1,Xe=se.group.children[0];if(Xe.material.transparent=be<1,Xe.material.opacity=be,ne){const zn=se.group.children[2];zn.material.opacity=(.6+Math.sin(se.lifeS*2)*.2)*be;continue}se.swayT+=z*.8,se.group.position.y+=Math.sin(se.swayT)*z*.18,se.group.rotation.y+=z*.4,se.group.position.x+=Math.sin(se.swayT*.7)*z*.1;const _t=se.group.children[0];_t.rotation.z=Math.sin(se.swayT*1.3)*.08}}const ws=new Qn(.34,.05,.24),As=new rn({color:j.parchment}),xn=new Tg(Il.budget,ws,As);n.add(xn.mesh);const v=[];let P=0,B=0;function V(z,H,ne){const ce=xn.acquire(z.x,z.y+.3,z.z,{color:ne});if(ce&&(v.push({inst:ce,from:z.clone(),to:H.clone(),t:0,dur:.55+Math.random()*.35}),v.length>Il.budget-20)){const se=v.shift();xn.hide(se.inst)}}function D(z,H){const ne=[];if(H){const se=v.length>0?.95:.5;for(const be of Oe)be.material.opacity=se*.85;for(const be of v.splice(0))xn.hide(be.inst);vn.material.opacity=se}else{for(let se=v.length-1;se>=0;se--){const be=v[se];be.t+=z;const Xe=Math.min(1,be.t/be.dur),_t=Xe*Xe*(3-2*Xe),zn=Un.lerp(be.from.x,be.to.x,_t),yi=Un.lerp(be.from.y+.3,be.to.y,_t)+Math.sin(Xe*Math.PI)*.4,ur=Un.lerp(be.from.z,be.to.z,_t);xn.move(be.inst,zn,yi,ur,_t*1.2),Xe>=1&&ne.push(se)}for(const se of ne)xn.hide(v[se].inst),v.splice(se,1)}xn.commit(),P>0&&(P=Math.max(0,P-z*4),Ve.rotation.z=-.5+Math.sin(P*Math.PI)*.7);const ce=v.length>0?.55:.25;for(const se of Me){const be=se.material;be.opacity+=(ce-be.opacity)*Math.min(1,z*6)}J.position.y=1.9+Math.sin(performance.now()/600)*.08}const le={ok:"#72D6C1",warn:"#D6A84B",red:"#C74B55"};function xe(z){vn.material.color.set(le[z]),vn.material.opacity=1}function Ee(z){const H=Math.max(1e-9,vs(z));O.forEach((ne,ce)=>{const se=z.desks[ce],be=!!se?.unlocked,Xe=se?.tier??0,_t=be?1+Xe*.18:1;ne.scale.y=_t,ne.position.y=.12+(_t-1)*.18,ne.scale.x=be&&Xe>0?1+Xe*.08:1;const zn=ne.material;be?zn.color.set((se?.inProcess??0)>0?j.parchment:j.moonBlue):zn.color.set("#1c1830");const yi=H/Bi.length,ur=be?Math.min(1,(se?.inProcess??0)/Math.max(1e-9,yi)):0,hr=ee[ce];hr.scale.y=Math.max(.02,ur*.55),hr.position.y=.21+hr.scale.y/2,ie[ce].material.color.set(be&&Xe>=2?j.routeMint:j.brass)})}function Te(z){const H=z.blocking.everDistricts.includes(1)||z.districtIndex>=1;A.material.color.set(H?j.routeMint:j.inkNavy);const ne=(ce,se)=>{ce.children.forEach(be=>{const Xe=be.material;if(Xe&&!(Xe instanceof Vt)){const _t=new Ze(se?j.brass:j.moonBlue);Xe.color.copy(_t.multiplyScalar(se?1:.3))}})};ne(N,z.districtIndex===0),ne(q,H)}function ke(z){const H=Math.max(1e-9,168),ne=Math.min(1,(z.bundled??0)/H);K.forEach((ce,se)=>{const be=!!z.racks[se]?.unlocked;ce.material.color.set(be?"#3a2b46":"#1c1830"),Ae[se].visible=be;const Xe=Math.min(1,Math.max(0,ne*ze(z)-we(z,se))),_t=ge[se];_t.visible=be,_t.scale.y=Math.max(.02,Xe),_t.position.y=.02+Xe/2})}function ze(z){return z.racks.filter(H=>H.unlocked).length}function we(z,H){let ne=0;for(let ce=0;ce<=H;ce++)z.racks[ce]?.unlocked&&ne++;return ne}function et(z,H){Oe.forEach((ne,ce)=>{const se=z.lanes[ce],be=!!se?.unlocked,Xe=ne.material;if(be){const _t=[0,.1,.2][se?.tier??0]??.3;Xe.opacity=Math.min(1,.35+.5*H+_t),Xe.color.set(j.routeMint)}else Xe.opacity=.12,Xe.color.set("#101a30");lt[ce].visible=!be})}function ct(z,H,ne){W.scale.y=Math.max(.15,H),W.position.y=.18+1.1*W.scale.y/2,R.material.color.set(ne?"#17233F":"#2a3d68")}function ut(z,H){L.material.color.set(H?j.brass:"#0d1730")}const Ct=["#b08d57",j.parchment,"#cfd8e8"];let tt=!1;function Ce(z,H){const ne=xt=>z.ch2.districtsAnswered.includes(xt);for(const xt of[2,3,4,5]){const tn=ne(xt),fr=Ie[xt].material;fr.userData.pulse==null&&fr.color.set(tn?Y[xt]:Q);const bi=ae[xt];bi.lit.visible=tn,bi.locked.visible=!tn}const ce=ne(2);if(w.visible=!ce,ce&&!tt){tt=!0;const xt=ae[2].lit.userData.hand;xt&&(xt.rotation.z=-Math.PI/30)}ce||(tt=!1);const be=(z.hall.F3??0)>=2,Xe=Math.max(1e-9,vs(z)),zn=z.desks.reduce((xt,tn)=>xt+tn.inProcess,0)/Xe>=.99;b.forEach(xt=>{xt.material.color.set(be?zn?"#34506f":j.moonBlue:"#101a30")});const yi=z.hall.F7??0,ur=yi>=3?2:yi>=2?1:0;z.lanes.forEach((xt,tn)=>{const fr=xt.tier>=5?2:xt.tier>=3?1:0,bi=Math.max(fr,ur);for(const jc of _[tn]??[])jc.material.color.set(Ct[bi])}),qe.forEach((xt,tn)=>{xt.visible=tn<Math.max(0,H.sdActive)});const hr=ne(2);We.visible=hr,at.material.color.set(H.mpDue?j.parchment:"#7a6f52"),mt.forEach((xt,tn)=>{const bi=(z.ch2.stampInventory[U[tn]]??0)>=250;xt.scale.setScalar(bi?1.35:1),H.stampCapsAt})}const Ht=[];function it(z){const H="#ffd773",ne=ce=>{const se=Ie[ce],be=se.material;be.color.set(H),be.userData.pulse=!0,Ht.push({mesh:se,base:Y[ce]??j.routeMint,t:1.1})};if(z==null)for(const ce of[1,2,3,4,5])ne(ce);else ne(z);if(z==null){const ce=ae[5].lit.userData.water;if(ce){const se=ce.material;se.color.set("#22356b"),setTimeout(()=>se.color.set("#0b1530"),1200)}}}function Xt(z){for(let H=Ht.length-1;H>=0;H--){const ne=Ht[H];if(ne.t-=z,ne.t<=0){const ce=ne.mesh.material;delete ce.userData.pulse,ce.color.set(ne.base),Ht.splice(H,1)}}}function Bn(z,H,ne){const ce=ne?.03:.12;B>0&&(B=Math.max(0,B-z*3)),pe.position.y=Math.abs(Math.sin(H*2.2))*ce+Math.sin(B*Math.PI)*.25,pe.rotation.y=Math.sin(H*.8)*.3,Qe.rotation.y=Math.sin(H*.4)*.18}const It=[...Bi.map((z,H)=>({label:`PAD-${H+1}`,pos:new I(z,.9,1.6)})),...Ol.map((z,H)=>({label:`RACK-${H+1}`,pos:new I(z,1.9,-1.4)})),...Sr.map((z,H)=>({label:`LANE-${H+1}`,pos:new I(z,.4,-3)})),{label:"STAMP GATE",pos:new I(0,2.1,.3)},{label:"BACKLOG TRAY",pos:new I(-2.6,2.1,4)},{label:"ROUTE MAP",pos:new I(-2.4,4.9,jt)},{label:"PIP",pos:new I(1.65,.8,.95)},{label:"MARA",pos:new I(2.3,2.2,-3.6)},{label:"CLOCKTOWER SEAL",pos:new I(1.7,4.6,jt)},{label:"DIST-CW",pos:new I(1.5,4,jt)},{label:"DIST-MU",pos:new I(2.65,4.5,jt)},{label:"DIST-RG",pos:new I(3.75,4.75,jt)},{label:"DIST-CA",pos:new I(4.8,5,jt)},{label:"SD BOARD",pos:new I(3.35,1.8,1.4)},{label:"MP BASKET",pos:new I(-4.55,1,1.5)},...Bi.map((z,H)=>({label:`TRAY-${H+1}`,pos:new I(z-.42,.6,1.35)}))];return{scene:t,pool:xn,flyers:v,lamp:vn,setLampLevel:xe,deskMeshes:O,updateDesks:Ee,updateLanterns:Te,animateFlyers:D,spawnFlyer:V,leverKick:()=>{P=1},pipPulse:()=>{B=1},updateRacks:ke,updateLanes:et,updateTray:ct,updateWall:ut,tickCharacters:Bn,debugAnchors:It,wanderGroup:ti,wanderlights:en,spawnWanderlight:Si,animateWanderlights:Br,despawnWanderlight:dr,updateDistricts:Ce,pulseThread:it,tickChords:Xt}}const Ne={sortHold:"HOLD TO SORT",postage:"Postage",stars:"Stars",districtLL:"Lantern Lane",districtRM:"Rainmarket",districtCW:"Clocktower Ward",buy:"Buy",redraw:"Redraw Routes",notEnabled:"Not enabled in this web build",license:"Night Clerk License",priorityPost:"Priority Post",waxPacks:"Wax Seal packs",waxSealsShort:"Seals",postcards:"Postcards",postcardsEmpty:"No postcards yet — the districts will write when they answer.",postcardsLocked:"Keep delivering to hear from this district.",postcardRead:"Read",postcardNew:"New",morningPost:"Morning Post",morningPostPrompt:"A fresh Morning Post has arrived for the frontier districts.",morningPostGranted:"Morning Post delivered",claim:"Claim",specialDeliveries:"Special Deliveries",specialEmpty:"No special requests yet. Keep delivering to receive requests.",specialStamps:"stamps",specialActive:"In transit",specialReady:"Ready to claim",specialStart:"Start",wanderCaught:"Lantern caught",wanderSeal:"+1 Wax Seal",pendingStarsShort:"★",flatRising:"Compass: rising thread",flatSettling:"Compass: settling thread",flatLevel:"Compass: still — routes spreading thin",flatNudge:"Compass: redraw — the wall has gone quiet"},Bl=["","K","M","B","T","Qa","Qi","Sx","Sp"];function Lt(n){if(!isFinite(n))return"—";const e=Math.abs(n);if(e<1e3)return n<0?`-${Math.floor(e)}`:`${Math.floor(n)}`;const t=Math.floor(Math.log10(e)/3),i=e/Math.pow(10,t*3),r=Bl[Math.min(t,Bl.length-1)];let s=i.toFixed(2);return s=s.replace(/\.?0+$/,""),`${n<0?"-":""}${s}${r}`}function zi(n){return isFinite(n)?`${Math.floor(n)}`:"—"}const Cr=4,Rc="midnight-dispatch.save.v1";function di(){return{gates:{rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1}},checklist:[],railsFired:[],everDistricts:[0],eRunRaw:0,snapshotRate:0,nightMs:0,ch2Pending:[],ch2FiredEver:[],evapSpanMax:{}}}function Er(){return{stampInventory:{},specialDeliveries:{offers:[],active:[],done:[]},morningPost:{lastClaimTs:null,held:0},waxSeals:0,postcardCounters:{},postcards:{read:[],sealAwarded:[],unlockedEmitted:[]},districtsAnswered:[0],horizonSealAction:null}}function Pc(){return Array.from({length:Jt.count},(n,e)=>({unlocked:e===0,tier:0,inProcess:0}))}function Lc(){return Array.from({length:An.count},(n,e)=>({unlocked:e===0,tier:0}))}function Dc(){return Array.from({length:Tn.count},(n,e)=>({unlocked:e===0,tier:0}))}function nr(){const n=Date.now();return{v:Cr,savedAt:n,run:0,postage:0,totalEarnedRun:0,stars:0,starMultiplier:1,redrawCount:0,backlog:90,bundled:0,desks:Pc(),racks:Lc(),lanes:Dc(),hall:{},districtIndex:0,districtRouteValue:0,perfect:1,onboarded:!1,clipsSeen:[],ledgerWindow:2*3600,ledgerAwayRate:0,lastLedgerTs:n,doublersUsed:0,doublerDay:0,doublerTracked:!1,returnCardPending:!1,reducedMotion:!1,blocking:di(),ch2:Er()}}function Bg(n){const e=n.deskTiers??[0,0,0,0],t=n.deskInProcess??[0,0,0,0],i=typeof n.satchelTier=="number"?n.satchelTier:0,r=n.routeTiers??[0,0],s=n.hall??{},a=Array.from({length:Jt.count},(d,f)=>({unlocked:!0,tier:e[f]??0,inProcess:t[f]??0})),o=Array.from({length:An.count},(d,f)=>({unlocked:f===0,tier:f===0?i:0})),c=Array.from({length:Tn.count},(d,f)=>({unlocked:f<r.length,tier:r[f]??0})),l={};s.letterValue&&(l.F1=Math.min(5,s.letterValue)),s.sortRate&&(l.F2=Math.min(5,s.sortRate)),s.backlogPool&&(l.F4=Math.min(4,s.backlogPool)),s.perfectRamp&&(l.F5=Math.min(5,s.perfectRamp));const u={...n};return delete u.deskTiers,delete u.deskInProcess,delete u.satchelTier,delete u.routeTiers,delete u.backlogLevel,u.desks=a,u.racks=o,u.lanes=c,u.hall=l,u}const zg={2:Bg};function Hg(n){const e=n,t=nr(),i={...t,...e},r=(e.desks??t.desks).map((l,u)=>({unlocked:l?.unlocked??u===0,tier:l?.tier??0,inProcess:l?.inProcess??0}));for(;r.length<Jt.count;)r.push({unlocked:r.length===0,tier:0,inProcess:0});const s=(e.racks??t.racks).map((l,u)=>({unlocked:l?.unlocked??u===0,tier:l?.tier??0}));for(;s.length<An.count;)s.push({unlocked:s.length===0,tier:0});const a=(e.lanes??t.lanes).map((l,u)=>({unlocked:l?.unlocked??u===0,tier:l?.tier??0}));for(;a.length<Tn.count;)a.push({unlocked:a.length===0,tier:0});i.desks=r,i.racks=s,i.lanes=a,i.hall={...e.hall??{}};const o=e.blocking;i.blocking={...di(),...o??{}},i.blocking.gates={rainmarket:{...di().gates.rainmarket,...o?.gates?.rainmarket??{}},horizon:{...di().gates.horizon,...o?.gates?.horizon??{}},museum:{...di().gates.museum,...o?.gates?.museum??{}},rooftop:{...di().gates.rooftop,...o?.gates?.rooftop??{}},canal:{...di().gates.canal,...o?.gates?.canal??{}}};const c=e.ch2;if(i.ch2={...Er(),...c??{},specialDeliveries:{...Er().specialDeliveries,...c?.specialDeliveries??{}},morningPost:{...Er().morningPost,...c?.morningPost??{}},postcards:{...Er().postcards,...c?.postcards??{}},horizonSealAction:c!=null?c.horizonSealAction??null:e.redrawCount!=null&&e.redrawCount>0?"advance_bond":"redraw_claim"},c==null)for(const l of["clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"])i.ch2.postcardCounters[l]=i.ch2.postcardCounters[l]??0;if(!c?.districtsAnswered?.length){const l=i.blocking.everDistricts;i.ch2.districtsAnswered=l?.length?[...l].sort((u,d)=>u-d):[0]}return{...i,v:Cr}}function Vg(n){if(n==null||typeof n!="object")return nr();const e=n,t=typeof e.v=="number"?e.v:0;if(t>Cr)throw new Error(`Save version ${t} is newer than supported ${Cr}`);if(t<1)return nr();let i=n;for(let r=t;r<Cr;r++){const s=zg[r];s&&(i=s(i))}return Hg(i)}function Ic(n){const{savedAt:e,lastLedgerTs:t,...i}=n,r=o=>{if(o===null||typeof o!="object")return JSON.stringify(o)??"null";if(Array.isArray(o))return`[${o.map(r).join(",")}]`;const c=o;return`{${Object.keys(c).sort().map(l=>`${JSON.stringify(l)}:${r(c[l])}`).join(",")}}`},s=r(i);let a=2166136261;for(let o=0;o<s.length;o++)a^=s.charCodeAt(o),a=Math.imul(a,16777619);return(a>>>0).toString(16).padStart(8,"0")}function Gg(n,e){const t=gn[e];if(!t)return!1;const i=n.hall[e]??0;if(i>=t.tiers)return!1;const r=t.cost[i]??1/0;return n.postage<r?!1:(n.postage-=r,n.hall[e]=i+1,!0)}function fo(n,e){return Jt.unlock[e]??1/0}function Wg(n,e){const t=n.desks[e];if(!t||t.unlocked)return!1;const i=fo(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function po(n,e){const t=n.desks[e];if(!t||!t.unlocked)return 1/0;const i=(n.hall.F6??0)>0,r=Jt.tier[t.tier+1]??1/0;return i?Math.ceil(r*Jt.F6.costMult):r}function Xg(n,e){const t=po(n,e),i=n.desks[e];return!i||!i.unlocked||i.tier>=Jt.caps.length-1||n.postage<t?!1:(n.postage-=t,i.tier+=1,!0)}function mo(n,e){return An.unlock[e]??1/0}function $g(n,e){const t=n.racks[e];if(!t||t.unlocked)return!1;const i=mo(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function go(n,e){const t=n.racks[e];return!t||!t.unlocked?1/0:An.tier[t.tier+1]??1/0}function qg(n,e){const t=n.racks[e];if(!t||!t.unlocked)return!1;const i=go(n,e);return t.tier>=An.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}function _o(n,e){return Tn.unlock[e]??1/0}function Yg(n,e){const t=n.lanes[e];if(!t||t.unlocked)return!1;const i=_o(n,e);return n.postage<i?!1:(n.postage-=i,t.unlocked=!0,!0)}function vo(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return 1/0;const i=n.hall.F7??0,r=Tn.F7,s=r.costMultPerTier;let a=1;i>=1&&(a=r.costMult);for(let o=2;o<=i;o++)a*=s;return Math.ceil((Tn.tier[t.tier+1]??1/0)*a)}function jg(n,e){const t=n.lanes[e];if(!t||!t.unlocked)return!1;const i=vo(n,e);return t.tier>=Tn.rates.length-1||n.postage<i?!1:(n.postage-=i,t.tier+=1,!0)}const Kg=2e3,Yi=[],Zg=[],xs={};function Jg(){Yi.length=0;for(const n of Object.keys(xs))delete xs[n]}function Ke(n,e,t={}){if(!Object.values(je).includes(e))throw new Error(`unknown md event: ${e}`);const i={name:e,run_id:n.run,night_ms:Math.round(n.blocking.nightMs),stars_banked:n.stars,district:n.districtIndex,props:t};Yi.push(i),Yi.length>Kg&&Yi.shift(),xs[e]=(xs[e]??0)+1;for(const r of[...Zg])r(i);return i}function Qg(n){return n?Yi.filter(n):[...Yi]}function e0(n){return Object.values(n.hall).reduce((e,t)=>e+(t??0),0)}function Uc(n){const e=n.hall.F10??0;let t=sa.hfac;return e>=2?t=sa.hfacAfterF10T2:e>=1&&(t=sa.hfacAfterF10),n.blocking.eRunRaw*(1+t*e0(n))}function kr(n){return n.districtIndex===0?"rainmarket":n.districtIndex===1?"horizon":n.districtIndex===2?"museum":n.districtIndex===3?"rooftop":n.districtIndex===4?"canal":null}function xi(n,e){n.blocking.eRunRaw+=e;const t=kr(n);t&&(n.blocking.gates[t].listValue+=e),i0(n)}function t0(n,e,t){xi(n,e);const i=[...n.blocking.everDistricts].sort((o,c)=>o-c),r=n.districtIndex,s=i.filter(o=>o<r),a=fn[r]?.id;if(a&&(n.ch2.postcardCounters[a]=(n.ch2.postcardCounters[a]??0)+Math.floor(t*kl.frontierShare)),s.length>0){const o=t*kl.fanShareUniform/s.length;for(const c of s){const l=fn[c]?.id;l&&(n.ch2.postcardCounters[l]=(n.ch2.postcardCounters[l]??0)+Math.floor(o))}}n0(n)}function n0(n){for(const[e,t]of Object.entries(n.ch2.postcardCounters)){const i=Mr.p[e];if(i==null)continue;const r=n.ch2.stampInventory,s=r[e]??0;if(s>=Mr.cap)continue;const a=Math.ceil(1/i),o=Math.floor(t/a);if(o<=0)continue;const c=Math.min(o,Mr.cap-s);c<=0||(r[e]=s+c,n.ch2.postcardCounters[e]=t-c*a,s<Mr.cap&&r[e]>=Mr.cap&&Ke(n,je.stampCapped,{district:e}))}}function i0(n){const e=kr(n);if(!e)return;const t=St[e],i=n.blocking.gates[e],r=Uc(n);!i.rvDone&&r>=t.rv&&(i.rvDone=!0,Ke(n,je.gateCross,{gate:t.id,req:"rv",t_s:n.blocking.nightMs/1e3})),!i.listDone&&i.listValue>=t.deliveryList&&(i.listDone=!0,Ke(n,je.gateCross,{gate:t.id,req:"list",t_s:n.blocking.nightMs/1e3}))}function r0(n,e){const t=n.blocking.gates[e];return!t.listDone&&t.listValue>=St[e].deliveryList*Ag}function Fc(n){return n.ch2.horizonSealAction??"redraw_claim"}function Ms(n){return Fc(n)==="advance_bond"}function s0(n,e){return e==="horizon"?Fc(n):St[e].action}function a0(n,e){return s0(n,e)!=="advance_bond"?!1:n.blocking.gates[e].listDone&&n.postage>=St[e].bond}function o0(n,e){const t=St[e];return n.districtIndex!==t.to-1||!a0(n,e)?!1:(n.postage-=t.bond,Ke(n,je.purchase,{kind:"bond",id:e,cost:t.bond,wallet_after:n.postage}),n.districtIndex=t.to,n.blocking.everDistricts.includes(t.to)||n.blocking.everDistricts.push(t.to),n.ch2.districtsAnswered.includes(t.to)||n.ch2.districtsAnswered.push(t.to),t.to>=2&&(n.ch2.waxSeals+=Pg.districtAdvanceCh2),Ke(n,je.advance,{district:fn[t.to].id,t_s:n.blocking.nightMs/1e3,bond:t.bond}),!0)}function l0(n){const e=kr(n);return!e||!o0(n,e)?null:n.districtIndex}function aa(n){return n.blocking.gates.horizon.listDone&&!Ms(n)}function c0(n){n.blocking.gates={rainmarket:{listValue:0,rvDone:!1,listDone:!1},horizon:{listValue:0,rvDone:!1,listDone:!1},museum:{listValue:0,rvDone:!1,listDone:!1},rooftop:{listValue:0,rvDone:!1,listDone:!1},canal:{listValue:0,rvDone:!1,listDone:!1}},n.blocking.eRunRaw=0,n.blocking.nightMs=0,n.blocking.checklist=[],n.blocking.railsFired=[]}function d0(){return{desks:Pc(),racks:Lc(),lanes:Dc()}}function Ts(n){return n<=0?0:Fg(n)}function xo(n){return Ts(n.blocking.eRunRaw)}function u0(n){return 1+Wt.starMultStep*n}function h0(n){const e=xo(n),t=n.blocking.eRunRaw;return Ke(n,je.redrawShow,{stars_pending:e,earned_booked:t}),{starsPending:e,earnedBooked:t}}function f0(n,e,t){const i=n.blocking.eRunRaw,r=Ts(i);Ke(n,je.redrawClaim,{stars_awarded:r,earned_booked:i,forecast_shown:e,cycle_age_s:n.blocking.nightMs/1e3,seal_share_at_claim:null,voluntary:!1}),n.stars+=r,n.starMultiplier=u0(n.stars),n.redrawCount+=1,n.run+=1,n.ch2.horizonSealAction!=="advance_bond"&&(n.ch2.horizonSealAction="advance_bond"),n.postage=0,n.totalEarnedRun=0;for(const a of Object.keys(n.hall))n.hall[a]=0;const s=d0();return n.desks=s.desks,n.racks=s.racks,n.lanes=s.lanes,n.backlog=nr().backlog,n.bundled=0,n.perfect=0,n.districtIndex=0,n.districtRouteValue=0,n.blocking.snapshotRate=0,c0(n),{starsAwarded:r,earnedBooked:i,forecastShown:e,multiplierNext:n.starMultiplier}}const zl=new WeakMap;function Nc(n){let e=zl.get(n);return e||(e={ring:[],run:n.run,armFired:!1,nudgeFired:!1,cardFired:!1,flatForS:0},zl.set(n,e)),e}function kc(n,e){e.run!==n.run&&(e.ring=[],e.run=n.run,e.armFired=!1,e.nudgeFired=!1,e.cardFired=!1,e.flatForS=0)}function Oc(n){const e=kr(n);return e?n.blocking.gates[e].listValue/St[e].deliveryList:1}function p0(n){return Oc(n)<Sn.nudgeSealShareBelow}function ja(n,e){const t=n.blocking.nightMs/1e3,i=t-Sn.windowS,r=e.ring.length?e.ring[e.ring.length-1].pending:Ts(n.blocking.eRunRaw);let s=null;if(e.ring.length&&e.ring[0].t<=i){let f=e.ring[0].pending;for(const m of e.ring)if(m.t<=i)f=m.pending;else break;s=r-f}const a=t>=Sn.armFloorS,o=a&&s!=null&&s<=Sn.windowMaxStars,c=Oc(n),l=e.flatForS>=Sn.cardAfterS,u=e.flatForS>=Sn.nudgeAfterS&&c<Sn.nudgeSealShareBelow,d=l?"level":a?"settling":"rising";return{armed:a,windowFlat:o,card:l,flatForS:e.flatForS,nudge:u,sealShare:c,pending:r,windowDelta:s,glyph:d,cycleAgeS:t}}function m0(n){const e=Nc(n);kc(n,e);const t=n.blocking.nightMs/1e3,i=e.ring.length?e.ring[e.ring.length-1].t:-1/0;if(t-i>=1){e.ring.push({t,pending:Ts(n.blocking.eRunRaw)});const r=t-(Sn.windowS+60);for(;e.ring.length&&e.ring[0].t<r;)e.ring.shift();const s=ja(n,e);e.flatForS=s.windowFlat?e.flatForS+1:0,s.armed&&!e.armFired&&(e.armFired=!0,Ke(n,je.flatArm,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare})),e.flatForS>=Sn.nudgeAfterS&&s.sealShare<Sn.nudgeSealShareBelow&&!e.nudgeFired&&(e.nudgeFired=!0,Ke(n,je.flatNudge,{cycle_age_s:Math.round(t),pending:s.pending,window_delta:s.windowDelta,seal_share:s.sealShare}))}return ja(n,e)}function Bc(n){const e=Nc(n);return kc(n,e),ja(n,e)}const zc={lantern_lane:[{id:"ll1",districtId:"lantern_lane",slot:1,sender:"Old Naomi, Window 3",subject:"The lamp that remembers",body:'She keeps one envelope from every night she has worked. "Not the post," she insists, "the proof we were here." Tonight her shelf ran out of room, so she mailed the first one onward.',reaction:"Lantern Lane answers: a warm hum, steady as breathing."},{id:"ll2",districtId:"lantern_lane",slot:2,sender:"Clinker, the night cat",subject:"A pawprint on the seal",body:"Clinker has no address and approves of nothing. Still, a packet arrived bearing a single muddy print in the wax — his way of saying the lane is paying attention after all. No return address. Obviously.",reaction:"The lane answers: a soft, rumbling purr through the floor."},{id:"ll3",districtId:"lantern_lane",slot:3,sender:"The Lamplighter",subject:"Twelve wicks, one thread",body:'Every lamp on the lane lit for the first time in a decade. "A clerk who finishes the list," the Lamplighter wrote, "deserves to see the whole street." The wicks burn low and golden, all facing the same direction.',reaction:"Lantern Lane answers: all twelve lamps bow toward the route map."}],rainmarket:[{id:"rm1",districtId:"rainmarket",slot:1,sender:"Marta, awning seller",subject:"Dry seats",body:`Marta roofed the three driest benches under her awning "for the post's sake." The ink on her note bled from the rain, but the message held: the market remembers which trades carried it through its quiet years.`,reaction:"Rainmarket answers: the awnings snap once, in salute."},{id:"rm2",districtId:"rainmarket",slot:2,sender:"The Tally Boys",subject:"Ledger of small mercies",body:'A fold of paper listing every kindness the market owes — the returned scarf, the two saved crates, the lantern loaned after midnight. "Not debt," they wrote. "A standing account." They sign it with a thumbprint in red ink.',reaction:"Rainmarket answers: a bell rings three times over the stalls."},{id:"rm3",districtId:"rainmarket",slot:3,sender:"Mother Kettle",subject:"The first tea in years",body:'She boiled the urn the moment the route reopened and poured for whoever came through the gate. "Post first," she told her kettle, "then the world can wait." The cup left out for the clerk is still warm.',reaction:"Rainmarket answers: steam rises, patient and certain, from a single cup."}],clocktower_ward:[{id:"cw1",districtId:"clocktower_ward",slot:1,sender:"The Keeper of Hours",subject:"Time, postmarked",body:'The great clock had stopped for so long that the ward forgot its own rhythm. When the first route reached it, the Keeper reset all four faces and sent a note: "We were waiting for someone to bring us the news of the world before striking the hour."',reaction:"Clocktower Ward answers: the chimes ring, once, in the dusk."},{id:"cw2",districtId:"clocktower_ward",slot:2,sender:"Wren, the archivist",subject:"A minute in a jar",body:'Wren keeps one saved minute from every clock she has coaxed back to life. "A captured minute," she wrote, "is a town that agreed to move together." She sent the newest jar to the route maps, so the past reaches the present by post.',reaction:"Clocktower Ward answers: the jar ticks softly with the returned route."},{id:"cw3",districtId:"clocktower_ward",slot:3,sender:"The First Night-Watch",subject:"The ward signs on",body:'A single sheet, signed in four different hands, carries the ward into the network. "We will answer," it reads, "as long as the mail keeps moving." Below the signatures, a date was left blank for the clerk to fill.',reaction:"Clocktower Ward answers: all four faces strike, together, for the first time."}],museum_after_dark:[{id:"ma1",districtId:"museum_after_dark",slot:1,sender:"Curator Vale",subject:"The wing lit for one",body:'The museum never opens its eastern wing after dark — except, Vale notes, for the night the mail arrived. She hung a single lamp so a clerk could read the row of brass plates in peace. "History stays," she wrote, "if someone keeps the lights willing to show it."',reaction:"Museum After Dark answers: a door unlatches, quietly, on its own."},{id:"ma2",districtId:"museum_after_dark",slot:2,sender:"A voice from Case 12",subject:"Do not cover us",body:'A note folded inside a velvet case. "We were the ones who talked to the dark," it reads in neat, old-fashioned script. "Now that talk has a route, do not put the cloths back over us." No signature. The case label lists no artist.',reaction:"Museum After Dark answers: a single case light stays lit against the rule."},{id:"ma3",districtId:"museum_after_dark",slot:3,sender:"The Night Guard",subject:"The last name on the wall",body:'The museum keeps a wall of names of those who kept it at night. The guard added one more at the end, with room after it. "A name that arrives by post," he wrote, "counts as having been here." The ink is still wet.',reaction:"Museum After Dark answers: the hall rings like a struck glass, just once."}],rooftop_gardens:[{id:"rg1",districtId:"rooftop_gardens",slot:1,sender:"Sister Fern",subject:"Water, spared",body:'The gardens live on what the rains give them. Sister Fern saved a full jar "for the route," so the couriers would have something standing between the way-stops. "Even the mail," she wrote, trailing a leaf, "needs a drink before it climbs."',reaction:"Rooftop Gardens answers: a vine reaches one leaf toward the lane."},{id:"rg2",districtId:"rooftop_gardens",slot:2,sender:"The Beekeepers of the roof",subject:"A hive in the route",body:'They set the hive beside the highest sorting ledge, where the drift of envelopes passes. "The bees count," their note insists, "and they like the weight of mail riding the same wind." Honey drips over the word "welcome."',reaction:"Rooftop Gardens answers: a low, green hum under the roof tiles."},{id:"rg3",districtId:"rooftop_gardens",slot:3,sender:"The Gardener Who Stays",subject:"Seeds, one per route",body:'He pressed a small seed into every envelope he sent. "Grow one for each road you reopen," he wrote. "By spring this city will be a garden that answers by name." The packet is heavy with humid soil and stubborn hope.',reaction:"Rooftop Gardens answers: green threads curl up along the outermost lane."}],canal_of_echoes:[{id:"ce1",districtId:"canal_of_echoes",slot:1,sender:"The Singing Ferryman",subject:"A fare of silence",body:'The canals carry sound farther than they carry boats, and the ferryman calls across at night. He sent his fare as a single held note, folded into paper, "so the clerk would hear the district before seeing it." The note still vibrates faintly.',reaction:"Canal of Echoes answers: a whisper slides the whole length of the water."},{id:"ce2",districtId:"canal_of_echoes",slot:2,sender:"The Barge Children",subject:"Things the water returns",body:'The children fish lost mail out of the canal and press it flat on the stones to dry. Their packet holds nothing stolen — only what the water gave back. "We are the last stop for the lost," they wrote, "send us the ones you cannot reach."',reaction:"Canal of Echoes answers: ripples map themselves into a route on the surface."},{id:"ce3",districtId:"canal_of_echoes",slot:3,sender:"The Voice Under the Bridge",subject:"An address that travels",body:`A single sheet, one line: "Whatever you build, build a place the far ones can write to." No sender's name, but a worn snail-shell sat in the fold, addressed on its side in faint chalk. The shell is warm to the touch.`,reaction:"Canal of Echoes answers: the whole canal carries the name back in one long chord."}]};function Hc(){const n=["lantern_lane","rainmarket","clocktower_ward","museum_after_dark","rooftop_gardens","canal_of_echoes"],e=[];for(const t of n){const i=zc[t]??[];for(const r of[...i].sort((s,a)=>s.slot-a.slot))e.push(r)}return e}function Lr(n,e){if(n.ch2.morningPost.held>0)return!0;if(n.ch2.morningPost.lastClaimTs==null)return!1;const t=tr.cadenceH*36e5;return e-n.ch2.morningPost.lastClaimTs>=t}function g0(n,e){if(!Lr(n,e))return 0;const t=fn[n.districtIndex]?.id,i=t?tr.grantByFrontier[t]??0:0;return i<=0?0:(n.postage+=i,xi(n,i),n.ch2.morningPost.held=0,n.ch2.morningPost.lastClaimTs=e,i)}function _0(n,e){n.ch2.morningPost.lastClaimTs==null&&n.districtIndex>=2&&(n.ch2.morningPost.lastClaimTs=e-tr.cadenceH*36e5,n.ch2.morningPost.held=tr.maxHeld)}function v0(n){const e=n.hall.F9??0,t=gn.F9;return e>=3?t.wanderCadenceT3:e>=1?t.wanderCadenceT1:t.wanderCadenceBase}function x0(n){return(n.hall.F9??0)>=3?pn.grandChanceF9T3:pn.grandChance}function M0(n){return(n.hall.F9??0)>=2?pn.sealChanceF9T2:pn.sealChance}function S0(n,e){const t=uo(n),r=(n.hall.F9??0)>=2?gn.F9.wanderRewardMultT2:1,s=Math.floor(e==="grand"?t*pn.grandRewardLetterMult:t*pn.normalRewardLetterMult*r);return n.postage+=s,xi(n,s),e==="grand"&&(n.ch2.waxSeals+=pn.grandWaxSeals),s}function y0(n,e,t){if(t>=pn.maxConcurrent||n.districtIndex<2)return!1;const i=v0(n)*1e3;return e>=i}function Vc(n){return Nr.recipes.find(e=>e.id===n)}function Gc(n,e){const t=fn.findIndex(i=>i.id===e.available);return t>=0&&n.districtIndex>=t}function Wc(n,e){for(const[t,i]of Object.entries(e.stamps))if((n.ch2.stampInventory[t]??0)<i)return!1;return!0}function b0(n,e,t){const i=Vc(e);if(!i||!Gc(n,i)||!Wc(n,i)||n.ch2.specialDeliveries.active.length>=Nr.maxActiveTimers)return!1;for(const[r,s]of Object.entries(i.stamps))n.ch2.stampInventory[r]=(n.ch2.stampInventory[r]??0)-s;return n.ch2.specialDeliveries.active.push({recipeId:e,endTs:t+Math.round(i.timerH*36e5),claimed:!1}),!0}function E0(n,e,t){const i=n.ch2.specialDeliveries.active.find(r=>r.recipeId===e&&!r.claimed);return!!i&&t>=i.endTs}function T0(n,e,t){const i=n.ch2.specialDeliveries.active.find(c=>c.recipeId===e&&!c.claimed);if(!i||t<i.endTs)return 0;const r=Vc(e);if(!r)return 0;const s=kr(n);if(!s)return 0;const a=St[s].deliveryList,o=Math.floor(a*r.rewardPct);return n.postage+=o,xi(n,o),i.claimed=!0,n.ch2.specialDeliveries.done.push({...i}),n.ch2.specialDeliveries.active=n.ch2.specialDeliveries.active.filter(c=>c!==i),o}function w0(n){n.ch2.waxSeals+=1}function Xc(n,e){const t=wc[e.districtId];if(!t)return!1;const i=t[e.slot-1];return i==null?!1:(n.ch2.postcardCounters[e.districtId]??0)>=i}function Ka(n){return Hc().map(e=>({story:e,unlocked:Xc(n,e),read:n.ch2.postcards.read.includes(e.id)}))}function A0(n){return Ka(n).filter(e=>e.unlocked&&!e.read).length}function C0(n,e){return n.ch2.postcards.sealAwarded.includes(e)}function R0(n,e){const t=Hc().find(i=>i.id===e);return!t||!Xc(n,t)?!1:(n.ch2.postcards.read.includes(e)||(n.ch2.postcards.read.push(e),t.slot===3&&!C0(n,t.districtId)&&(n.ch2.postcards.sealAwarded.push(t.districtId),w0(n))),!0)}class P0{root;cb;top;meters;seals;sortBtn;plumeFill;plume;panelLayer;ring;sortHeld=!1;reduceMotion;redrawShown=null;sealsCollapsed=!1;lastCoachSig="";postcardsBtn;morningPostBtn;specialBtn;_state=null;flatChip;constructor(e,t,i){this.root=e,this.cb=t,this.reduceMotion=i,this.root.innerHTML="",this.top=this.el("div","hud-top"),this.meters=this.el("div","hud-meters"),this.seals=this.el("div","seal-row"),this.panelLayer=this.el("div","hud-panel-layer"),this.ring=this.el("div","guide-ring"),this.ring.style.display="none";const r=this.el("div","hud-controls");this.plume=this.el("div","plume"),this.plumeFill=this.el("div","plume-fill"),this.plume.appendChild(this.plumeFill);const s=this.el("div","plume-cap");this.plume.appendChild(s),this.sortBtn=this.el("button","sort-btn"),this.sortBtn.textContent=Ne.sortHold,this.sortBtn.style.background=j.sealingRed,this.bindSortBtn(),r.appendChild(this.plume),r.appendChild(this.sortBtn),this.root.appendChild(this.top),this.root.appendChild(this.meters),this.root.appendChild(this.seals),this.root.appendChild(this.panelLayer),this.root.appendChild(r),this.root.appendChild(this.ring);const a=this.el("button","seal-toggle");a.textContent="SEALS",a.addEventListener("click",()=>{this.sealsCollapsed=!this.sealsCollapsed,this.seals.classList.toggle("collapsed",this.sealsCollapsed)}),this.root.appendChild(a),this.postcardsBtn=this.el("button","postcards-btn"),this.postcardsBtn.textContent=Ne.postcards.toUpperCase(),this.postcardsBtn.addEventListener("click",()=>this.showPostcardsPanel()),this.root.appendChild(this.postcardsBtn),this.morningPostBtn=this.el("button","morningpost-btn"),this.morningPostBtn.textContent=Ne.morningPost.toUpperCase(),this.morningPostBtn.addEventListener("click",()=>this.showMorningPost()),this.root.appendChild(this.morningPostBtn),this.specialBtn=this.el("button","special-btn"),this.specialBtn.textContent=Ne.specialDeliveries.toUpperCase(),this.specialBtn.addEventListener("click",()=>this.showSpecialDeliveries()),this.root.appendChild(this.specialBtn),this.flatChip=this.el("button","flat-chip"),this.flatChip.setAttribute("aria-label","Compass forecast"),this.flatChip.addEventListener("click",()=>this.openRedrawPanel()),this.root.appendChild(this.flatChip),this.injectCss()}el(e,t){const i=document.createElement(e);return t&&(i.className=t),i}bindSortBtn(){const e=i=>{i.preventDefault(),this.sortHeld=!0,this.sortBtn.classList.add("held"),this.cb.onSortHold(!0)},t=()=>{this.sortHeld&&(this.sortHeld=!1,this.sortBtn.classList.remove("held"),this.cb.onSortHold(!1))};this.sortBtn.addEventListener("pointerdown",e),this.sortBtn.addEventListener("pointerup",t),this.sortBtn.addEventListener("pointercancel",t),this.sortBtn.addEventListener("pointerleave",t)}get modalOpen(){return this.panelLayer.classList.contains("open")}get redrawForecastShown(){return this.redrawShown}updateHud(e,t,i){this._state=e;const r=fn[e.districtIndex],s=Math.floor(e.blocking.nightMs/1e3),a=`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;this.top.innerHTML=[`<span class="stat"><b>${Ne.postage}</b><i>${Lt(e.postage)}</i></span>`,`<span class="stat"><b>${Ne.waxSealsShort}</b><i>${zi(e.ch2.waxSeals)}</i></span>`,`<span class="stat"><b>${Ne.stars}</b><i>${zi(e.stars)}</i></span>`,`<span class="stat"><b>${r?r.name:"—"}</b><i>R${e.run+1} ${a}</i></span>`].join("");const o=A0(e);if(this.postcardsBtn.classList.toggle("has-unread",o>0),o>0){if(!this.postcardsBtn.querySelector(".unread-dot")){const x=this.el("span","unread-dot");this.postcardsBtn.appendChild(x)}this.postcardsBtn.setAttribute("aria-label",`${o} new postcard${o===1?"":"s"}`)}else this.postcardsBtn.querySelector(".unread-dot")?.remove();const c=Lr(e,Date.now());this.morningPostBtn.classList.toggle("visible",c),c?this.morningPostBtn.classList.add("pulse"):this.morningPostBtn.classList.remove("pulse"),this.specialBtn.classList.toggle("visible",e.districtIndex>=2);const l=["desk","satchel","route","inflow"];this.meters.innerHTML="";for(const x of l){const p=Ll[x],h=t.per[x],E=this.el("button",`meter meter-${x} lvl-${h.level}`);E.dataset.kind=x,E.style.background=p.color;const T=this.el("span",`glyph glyph-${p.glyph}`);E.appendChild(T);const S=this.el("span",`badge badge-${p.badge}`);if(E.appendChild(S),h.level==="choke"){const F=this.el("span","choke-tri");E.appendChild(F)}E.setAttribute("aria-label",`${x} meter ${h.level}`),E.addEventListener("click",()=>this.cb.onOpenPanel(L0[x])),this.meters.appendChild(E)}const u=ho(e),d=Math.min(1,Math.max(0,e.perfect/Math.max(1e-6,u)));this.plumeFill.style.height=`${Math.round(d*100)}%`,this.plume.classList.toggle("gold",d>=.999),this.renderSeals(e,i);const f=Bc(e),m={rising:Ne.flatRising,settling:Ne.flatSettling,level:Ne.flatLevel},g=f.nudge?Ne.flatNudge:m[f.glyph];this.flatChip.innerHTML=`<span class="flat-pending">${Ne.pendingStarsShort} ${zi(f.pending)}</span><span class="flat-label">${g}</span>`,this.flatChip.classList.toggle("flat-card",f.card||f.nudge),this.flatChip.classList.toggle("flat-nudge",f.nudge),this.flatChip.dataset.glyph=f.glyph}showBottleneckPulse(e){const t=this.meters.querySelector(`[data-kind="${e}"]`);if(t){if(this.reduceMotion){t.classList.add("pulse-static");return}t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse")}}showWanderToast(e,t){const i=this.el("div","wander-toast"),r=document.createElement("span");if(r.innerHTML=`${Ne.wanderCaught}: +<b>${zi(e)}</b> ${Ne.postage}`,i.appendChild(r),t){const o=this.el("span","wander-toast-seal");o.textContent=Ne.wanderSeal,i.appendChild(o)}this.root.appendChild(i);const s=performance.now(),a=()=>{const o=performance.now()-s,c=Math.min(24+o*.02,30),l=1-Math.max(0,(o-2100)/600);i.style.transform=`translateY(${-c}px)`,i.style.opacity=String(Math.max(0,Math.min(1,l))),o<2700?requestAnimationFrame(a):i.remove()};requestAnimationFrame(a)}renderSeals(e,t){const i=Uc(e),r=[];r.push({id:"lantern",name:Ne.districtLL,stateText:"OPEN",rvFrac:1,rvText:"—",listFrac:1,listText:"—",action:{label:"—",enabled:!1,act:"none"},ticker:null,locked:!1});const s=e.blocking.gates.rainmarket,a=e.districtIndex>=1||e.blocking.everDistricts.includes(1),o=St.rainmarket.bond;r.push({id:"rainmarket",name:Ne.districtRM,stateText:a?"OPEN":`${s.rvDone?"✓":"…"}`,rvFrac:Math.min(1,i/St.rainmarket.rv),rvText:`${Lt(Math.min(i,St.rainmarket.rv))} / ${Lt(St.rainmarket.rv)}`,listFrac:Math.min(1,s.listValue/St.rainmarket.deliveryList),listText:`${Lt(Math.min(s.listValue,St.rainmarket.deliveryList))} / ${Lt(St.rainmarket.deliveryList)}`,action:a?{label:"OPEN",enabled:!1,act:"none"}:{label:`Bond ${Lt(o)}`,enabled:s.listDone&&e.postage>=o,act:"bond"},ticker:null,locked:!a});const c=e.blocking.gates.horizon,l=xo(e);r.push({id:"horizon",name:Ne.districtCW,stateText:c.listDone?"SEALED — offers Redraw":"SEALED",rvFrac:Math.min(1,i/St.horizon.rv),rvText:`${Lt(Math.min(i,St.horizon.rv))} / ${Lt(St.horizon.rv)}`,listFrac:Math.min(1,c.listValue/St.horizon.deliveryList),listText:`${Lt(Math.min(c.listValue,St.horizon.deliveryList))} / ${Lt(St.horizon.deliveryList)}`,action:{label:Ne.redraw,enabled:t,act:"redraw"},ticker:c.rvDone?`+${l} ★ pending`:null,locked:!0}),this.seals.innerHTML="";for(const u of r){const d=this.el("div",`seal seal-${u.id}${u.locked?" locked":""}`);if(d.dataset.seal=u.id,d.innerHTML=`
        <div class="seal-head"><span class="seal-name">${u.name}</span><span class="seal-state">${u.stateText}</span></div>
        <div class="gauge"><span class="gauge-label">thread</span><div class="gauge-track"><div class="gauge-fill" style="width:${Math.round(u.rvFrac*100)}%"></div></div><span class="gauge-num">${u.rvText}</span></div>
        <div class="gauge"><span class="gauge-label">list</span><div class="gauge-track"><div class="gauge-fill list" style="width:${Math.round(u.listFrac*100)}%"></div></div><span class="gauge-num">${u.listText}</span></div>
        ${u.ticker?`<div class="ticker">${u.ticker}</div>`:""}
      `,u.id==="horizon"){const m=this.el("span","seal-silhouette");d.querySelector(".seal-head")?.appendChild(m)}const f=this.el("button","seal-action");f.textContent=u.action.label,f.disabled=!u.action.enabled,u.action.act==="bond"&&f.addEventListener("click",()=>this.cb.onBond()),u.action.act==="redraw"&&f.addEventListener("click",()=>this.openRedrawPanel()),d.appendChild(f),this.seals.appendChild(d)}}hidePanel(){this.panelLayer.innerHTML="",this.panelLayer.classList.remove("open"),this.ring.style.display="none"}frame(e){this.panelLayer.innerHTML="";const t=this.el("div","card");return t.innerHTML=`<h3>${e}</h3>`,this.panelLayer.appendChild(t),this.panelLayer.classList.add("open"),t}closeBtn(e,t="Close"){const i=this.el("button","buy ghost");i.textContent=t,i.addEventListener("click",()=>this.hidePanel()),e.appendChild(i)}purchasePunch(e){this.reduceMotion||(e.classList.remove("punch"),e.offsetWidth,e.classList.add("punch"))}showFamilyPanel(e,t){if(t==="hall")return this.showUpgradePanel(e);const i=Ll[t==="desk"?"desk":t==="satchel"?"satchel":"route"].glyph,r=this.frame(`${i} — ${t}`),s=t==="desk"?e.desks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Jt.caps.length-1,label:`pad${o+1}`})):t==="satchel"?e.racks.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:An.rates.length-1,label:`rack${o+1}`})):e.lanes.map((a,o)=>({idx:o,unlocked:a.unlocked,tier:a.tier,maxTier:Tn.rates.length-1,label:`lane${o+1}`}));for(const a of s)if(a.unlocked){const o=a.tier>=a.maxTier,c=t==="desk"?po(e,a.idx):t==="satchel"?go(e,a.idx):vo(e,a.idx),l=e.postage>=c;this.buyRow(r,`${a.label} T${a.tier+1}${o?" (max)":""}`,c,!o&&l,u=>{this.cb.onBuy(t,a.idx),this.purchasePunch(u)})}else{const o=t==="desk"?fo(e,a.idx):t==="satchel"?mo(e,a.idx):_o(e,a.idx),c=e.postage>=o;this.buyRow(r,`${a.label} (locked)`,o,c,l=>{this.cb.onBuy(t,a.idx),this.purchasePunch(l)})}this.closeBtn(r)}buyRow(e,t,i,r,s){const a=this.el("div","row");a.innerHTML=`<span class="name">${t}</span>`;const o=this.el("button",`buy${r?"":" dim"}`);o.textContent=`${Ne.buy} ${isFinite(i)?Lt(i):"max"}`,o.disabled=!r,o.addEventListener("click",c=>{c.stopPropagation(),s(o)}),a.appendChild(o),e.appendChild(a)}showUpgradePanel(e){const t=this.frame("Hall"),i=Object.values(gn);for(const r of i){const s=r.id,a=e.hall[s]??0,o=a>=r.tiers,c=o?1/0:r.cost[a]??1/0,l=this.el("div","row");l.innerHTML=`<span class="name">${r.label}</span><span class="lvl">L${a}${o?" max":""}</span>`;const u=this.el("button",`buy${e.postage>=c?"":" dim"}`);u.textContent=`${Ne.buy} ${isFinite(c)?Lt(c):"max"}`,u.disabled=e.postage<c||!isFinite(c),u.addEventListener("click",d=>{d.stopPropagation(),this.cb.onBuy("hall",s),this.purchasePunch(u)}),l.appendChild(u),t.appendChild(l)}this.closeBtn(t)}openRedrawPanel(){const e=this.cb.onRedrawOpen();if(!e)return;this.redrawShown=e;const t=this.frame(Ne.redraw);t.classList.add("card-redraw"),t.insertAdjacentHTML("beforeend",`
      <p class="forecast"><b>${zi(e.starsPending)}</b> ${Ne.stars} pending</p>
      <p class="earned">booked this run: ${Lt(e.earnedBooked)}</p>
      <div class="preview">
        <div class="keep"><b>Kept:</b><ul>${Dl.kept.map(r=>`<li>${r}</li>`).join("")}</ul></div>
        <div class="lost"><b>Lost:</b><ul>${Dl.lost.map(r=>`<li>${r}</li>`).join("")}</ul></div>
      </div>`);const i=this.el("button","buy big");i.textContent=`${Ne.redraw} — claim ${zi(e.starsPending)} ★`,i.addEventListener("click",()=>this.cb.onRedrawConfirm()),t.appendChild(i),this.closeBtn(t,"Not yet")}showReturnCard(e,t){const i=this.frame(ls.title);if(i.classList.add("card-return"),e.kind==="never-empty")i.insertAdjacentHTML("beforeend",`<p class="ledger-line">${ls.neverEmpty}</p>`);else{const s=Math.floor(e.elapsedS/3600),a=Math.floor(e.elapsedS%3600/60),o=Math.floor(e.capS/3600),c=Math.floor(e.capS%3600/60);if(i.insertAdjacentHTML("beforeend",`
        <p class="ledger-line">Away ${s} h ${String(a).padStart(2,"0")} min · Ledger holds ${o} h ${String(c).padStart(2,"0")} min</p>
        <p class="ledger-line big">Letters settled without you: <b>+${Lt(e.base)}</b></p>`),e.doublerLeftToday>0){const l=this.el("button","buy big");l.textContent=`${ls.doubler} · ${e.doublerLeftToday} left today`,l.addEventListener("click",()=>this.cb.onDouble()),i.appendChild(l)}}const r=this.el("button",`buy ${e.kind==="ledger"?"ghost":"big"}`);r.textContent=ls.collect,r.addEventListener("click",()=>this.cb.onDismissMinor()),i.appendChild(r)}showMonetizationStubs(){const e=this.frame("Store");e.insertAdjacentHTML("beforeend",[Ne.license,Ne.priorityPost,Ne.waxPacks].map(t=>`<div class="row"><span class="name">${t}</span><span class="stub">${Ne.notEnabled}</span></div>`).join("")),this.closeBtn(e)}showPostcardsPanel(){const e=this.frame(Ne.postcards);if(e.classList.add("card-postcards"),!this._state)return;const t=Ka(this._state),i=[];for(const r of t){const s=i.find(a=>a.district===r.story.districtId);s?s.items.push(r):i.push({district:r.story.districtId,items:[r]})}if(i.length===0){e.insertAdjacentHTML("beforeend",`</div><p class="empty">${Ne.postcardsEmpty}</p>`);return}for(const r of i){const s=this.districtName(r.district),a=this.el("div","pc-group");a.insertAdjacentHTML("beforeend",`<h4>${s}</h4>`);for(const o of r.items){const c=this.el("button",`pc-row${o.unlocked?o.read?" read":" new":" locked"}`);c.insertAdjacentHTML("beforeend",`<span class="pc-slot">#${o.story.slot}</span><span class="pc-subject">${o.unlocked?o.story.subject:Ne.postcardsLocked}</span><span class="pc-state">${o.read?Ne.postcardRead:o.unlocked?Ne.postcardNew:"🔒"}</span>`),o.unlocked&&c.addEventListener("click",()=>this.openPostcardStory(o.story.id)),a.appendChild(c)}e.appendChild(a)}this.closeBtn(e)}openPostcardStory(e){this.showPostcardDetail(e)&&this.cb.onReadPostcard(e)}showPostcardDetail(e){if(!this._state)return null;let t;for(const s of Ka(this._state))if(s.story.id===e){t=s;break}if(!t||!t.unlocked)return null;const i=t.story,r=this.frame(Ne.postcards);return r.classList.add("card-postcard-story"),r.insertAdjacentHTML("beforeend",`<p class="pc-meta">${this.districtName(i.districtId)} · #${i.slot}</p>
       <h3 class="pc-subject">${i.subject}</h3>
       <p class="pc-sender">— ${i.sender}</p>
       <p class="pc-body">${i.body}</p>
       <p class="pc-reaction">${i.reaction}</p>
       ${i.slot===3?`<p class="pc-seal">+1 ${Ne.waxSealsShort}</p>`:""}`),this.closeBtn(r),r}districtName(e){const t=fn.find(i=>i.id===e);return t?t.name:e}showMorningPost(){if(!this._state)return;const e=this.frame(Ne.morningPost);e.classList.add("card-morningpost");const t=fn[this._state.districtIndex],i=t?tr.grantByFrontier[t.id]??0:0;if(e.insertAdjacentHTML("beforeend",`<p class="mp-prompt">${Ne.morningPostPrompt}</p>
       ${i>0?`<p class="mp-grant">${Ne.morningPostGranted}: <b>${Lt(i)} ${Ne.postage}</b></p>`:""}`),i>0){const r=this.el("button","buy");r.textContent=Ne.claim,r.addEventListener("click",()=>{this.cb.onClaimMorningPost()>0&&this.morningPostBtn.classList.remove("visible","pulse")}),e.appendChild(r)}this.closeBtn(e)}showSpecialDeliveries(){if(!this._state)return;const e=this._state,t=this.frame(Ne.specialDeliveries);t.classList.add("card-special");const i=Date.now();let r=0;for(const s of Nr.recipes){if(!Gc(e,s))continue;r++;const a=e.ch2.specialDeliveries.active.find(d=>d.recipeId===s.id&&!d.claimed),o=E0(e,s.id,i),c=Object.entries(s.stamps).map(([d,f])=>`${f} ${this.districtName(d)}`).join(" + "),l=Object.entries(s.stamps).map(([d,f])=>`${Math.min(e.ch2.stampInventory[d]??0,f)}/${f}`).join(" · "),u=this.el("div","sd-block");if(a&&u.classList.add("active"),u.insertAdjacentHTML("beforeend",`<h4>${s.name}</h4>
         <p class="sd-cost">${c}<br><span class="sd-have">${Ne.specialStamps}: ${l}</span></p>`),a){const d=this.el("button","buy");d.textContent=o?Ne.specialReady:Ne.specialActive,d.disabled=!o,o&&d.addEventListener("click",()=>{this.cb.onClaimSpecial(s.id)>0&&this.hidePanel()}),u.appendChild(d)}else{const d=Wc(e,s),f=this.el("button","buy");f.textContent=Ne.specialStart,f.disabled=!d,d&&f.addEventListener("click",()=>{this.cb.onActivateSpecial(s.id)&&this.hidePanel()}),u.appendChild(f)}t.appendChild(u)}r===0&&t.insertAdjacentHTML("beforeend",`<p class="empty">${Ne.specialEmpty}</p>`),this.closeBtn(t)}showCoach(e,t){this.lastCoachSig=e.beat;const i=e.speaker?`<b>${e.speaker==="Pip"?"Pip":"Mara"}:</b> `:"",r=this.frame(`${e.speaker??"First Night"}`);r.classList.add("card-coach"),r.insertAdjacentHTML("beforeend",`<p>${i}${e.copy??e.beat}</p>`),e.grantAmount!=null&&r.insertAdjacentHTML("beforeend",`<p class="grant">+${Lt(e.grantAmount)} ${Ne.postage} (First Night ${e.grantId})</p>`),e.rail&&r.insertAdjacentHTML("beforeend",`<p class="rail-note">Rail: ${e.rail.note}</p>`);const s=this.el("button","buy big");if(s.textContent="OK",s.addEventListener("click",()=>{this.ring.style.display="none",this.cb.onDismissMinor()}),r.appendChild(s),this.ring.style.display=t?"block":"none",t){const a=t.getBoundingClientRect(),o=this.root.getBoundingClientRect();this.ring.style.left=`${a.left-o.left-6}px`,this.ring.style.top=`${a.top-o.top-6}px`,this.ring.style.width=`${a.width+12}px`,this.ring.style.height=`${a.height+12}px`}}anchorFor(e){return e?e==="sort"?this.sortBtn:e.startsWith("seal-")?this.seals.querySelector(`[data-seal="${e.slice(5)}"]`):this.meters.querySelector(`[data-kind="${e}"]`):null}get lastCoach(){return this.lastCoachSig}injectCss(){if(document.getElementById("md-hud-css"))return;const e=document.createElement("style");e.id="md-hud-css",e.textContent=`
      #hud { font-family: ui-monospace, Menlo, Consolas, monospace; color: ${j.parchment}; }
      .hud-top { position:absolute; top:0; left:0; right:0; height:15%; padding:10px 14px; display:flex; justify-content:space-between; align-items:flex-start; background:linear-gradient(180deg, rgba(23,35,63,.92), rgba(23,35,63,0)); z-index:3; pointer-events:none; }
      .stat { display:flex; flex-direction:column; align-items:center; }
      .stat b { font-size:10px; letter-spacing:.08em; color:${j.moonBlue}; text-transform:uppercase; }
      .stat i { font-style:normal; font-size:16px; font-weight:700; font-variant-numeric:tabular-nums; }
      .hud-meters { position:absolute; top:16%; left:0; right:0; display:flex; gap:10px; justify-content:center; padding:6px; z-index:3; }
      .meter { position:relative; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; border:none; transition:transform ${ia.capacityPulseS}s; }
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
      .choke-tri::after { content:''; position:absolute; left:-8px; top:0; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:13px solid ${j.parchment}; clip-path: polygon(50% 0, 100% 100%, 82% 100%, 50% 34%, 18% 100%, 0 100%); }
      .meter.pulse { animation: meterPulse ${ia.capacityPulseS}s infinite alternate; }
      .meter.pulse-static { outline: 3px solid #F4E7C7; outline-offset: 2px; }
      @keyframes meterPulse { from{ transform:scale(1);} to{ transform:scale(1.18);} }
      .seal-row { position:absolute; top:calc(16% + 56px); left:0; right:0; display:flex; gap:8px; justify-content:center; padding:4px 8px; z-index:2; }
      .seal-row.collapsed { display:none; }
      .seal { width:31%; max-width:150px; background:rgba(23,35,63,.82); border:1px solid rgba(214,168,75,.45); border-radius:10px; padding:6px 7px; font-size:10px; }
      .seal.locked { opacity:.85; }
      .seal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; }
      .seal-name { font-weight:700; color:${j.parchment}; }
      .seal-state { color:${j.moonBlue}; font-size:9px; }
      .seal-silhouette { width:10px; height:14px; background:#0d1730; clip-path: polygon(50% 0, 90% 20%, 90% 60%, 70% 60%, 70% 100%, 30% 100%, 30% 60%, 10% 60%, 10% 20%); }
      .gauge { display:flex; align-items:center; gap:4px; margin:3px 0; }
      .gauge-label { width:26px; color:${j.brass}; font-size:8px; text-transform:uppercase; }
      .gauge-track { flex:1; height:5px; background:#101a30; border-radius:3px; overflow:hidden; }
      .gauge-fill { height:100%; background:${j.routeMint}; }
      .gauge-fill.list { background:${j.plum}; }
      .gauge-num { font-size:8px; color:${j.parchment}; font-variant-numeric:tabular-nums; }
      .ticker { margin-top:3px; color:${j.brass}; font-weight:700; font-size:9px; }
      .seal-action { width:100%; min-height:44px; margin-top:5px; background:${j.sealingRed}; color:${j.parchment}; border:none; border-radius:8px; font:700 10px/1 ui-monospace; cursor:pointer; }
      .seal-action:disabled { opacity:.45; cursor:default; background:#3a4666; }
      .seal-toggle { position:absolute; top:calc(16% + 4px); right:6px; z-index:3; min-height:44px; min-width:44px; background:transparent; color:${j.moonBlue}; border:1px solid rgba(91,121,200,.5); border-radius:8px; font:700 9px/1 ui-monospace; }
      .flat-chip { position:absolute; top:calc(16% + 4px); left:6px; z-index:3; display:flex; flex-direction:column; align-items:flex-start; gap:2px; min-height:44px; max-width:150px; background:rgba(23,35,63,.82); color:${j.parchment}; border:1px solid rgba(91,121,200,.5); border-radius:8px; padding:5px 8px; font:700 10px/1 ui-monospace; cursor:pointer; text-align:left; }
      .flat-chip .flat-pending { color:${j.brass}; font-variant-numeric:tabular-nums; }
      .flat-chip .flat-label { font-weight:400; font-size:9px; color:${j.moonBlue}; }
      .flat-chip.flat-card { border-color:${j.plum}; }
      .flat-chip.flat-nudge { border-color:${j.sealingRed}; color:${j.parchment}; }
      .hud-controls { position:absolute; bottom:0; left:0; right:0; height:18%; display:flex; align-items:flex-start; justify-content:center; gap:14px; padding-top:10px; background:linear-gradient(0deg, rgba(23,35,63,.94), rgba(23,35,63,0)); z-index:3; }
      .sort-btn { width:min(230px, 62%); height:64px; border:none; border-radius:22px; color:${j.parchment}; font:800 18px/1 ui-monospace; letter-spacing:.12em; box-shadow:0 6px 0 #8f3038; touch-action:none; cursor:pointer; user-select:none; background-image:linear-gradient(rgba(255,255,255,.14), rgba(255,255,255,0)); }
      .sort-btn.held { transform:translateY(4px); box-shadow:0 2px 0 #8f3038; }
      .plume { width:26px; height:64px; border:2px solid ${j.brass}; border-radius:12px; position:relative; overflow:hidden; background:#101a30; }
      .plume-fill { position:absolute; bottom:0; left:0; right:0; background:${j.brass}; transition:height .2s; }
      .plume.gold .plume-fill { background:${j.routeMint}; box-shadow:0 0 10px ${j.brass}; }
      .plume.gold { box-shadow:0 0 14px ${j.brass}; }
      .hud-panel-layer { position:absolute; inset:0; display:none; align-items:flex-end; justify-content:center; background:rgba(10,16,32,.45); z-index:10; }
      .hud-panel-layer.open { display:flex; }
      .card { width:88%; max-width:420px; max-height:72%; overflow-y:auto; background:${j.parchment}; color:#241d12; border-radius:16px; padding:20px; margin-bottom:6%; box-shadow:0 10px 30px rgba(0,0,0,.5); }
      .card h3 { margin:0 0 12px; color:${j.inkNavy}; }
      .row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed rgba(36,29,18,.3); }
      .row .name { font-size:14px; }
      .row .lvl { color:#777; font-size:12px; }
      .buy { background:${j.sealingRed}; color:${j.parchment}; border:none; border-radius:10px; padding:10px 14px; font:700 13px/1 ui-monospace; cursor:pointer; min-height:44px; min-width:44px; }
      .buy.dim { opacity:.5; }
      .buy.ghost { background:transparent; color:#241d12; border:1px solid rgba(36,29,18,.4); }
      .buy.big { width:100%; margin:8px 0; font-size:15px; }
      .buy.punch { animation: punch ${ia.purchasePunchS}s; }
      @keyframes punch { 0% { transform:scale(.94); } 60% { transform:scale(1.04); } 100% { transform:scale(1); } }
      .card ul { padding-left:18px; }
      .card li { margin:6px 0; }
      .stub { color:#777; font-size:11px; text-align:right; }
      .card-redraw .forecast { font-size:34px; margin:10px 0; color:${j.plum}; }
      .card-redraw .earned { font-size:12px; color:#555; margin:-6px 0 10px; }
      .preview { display:flex; gap:14px; font-size:11px; margin-bottom:6px; }
      .preview div { flex:1; }
      .preview .keep b { color:#3a7d5f; } .preview .lost b { color:${j.sealingRed}; }
      .ledger-line { font-size:14px; margin:6px 0; }
      .ledger-line.big { font-size:18px; }
      .card-coach p { font-size:16px; margin:8px 0 12px; }
      .card-coach .grant { color:#3a7d5f; font-weight:700; font-size:13px; }
      .card-coach .rail-note { color:#777; font-size:11px; }
      .guide-ring { position:absolute; border:3px dashed ${j.brass}; border-radius:14px; z-index:9; pointer-events:none; animation: breathe 1.2s ease-in-out infinite alternate; }
      .debug-label { position:absolute; background:rgba(23,35,63,.85); color:${j.routeMint}; font:700 9px/1 ui-monospace; padding:2px 5px; border-radius:4px; pointer-events:none; z-index:4; white-space:nowrap; }
      .postcards-btn { position:absolute; top:16%; left:50%; transform:translateX(-50%); min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${j.moonBlue}; border:1px solid rgba(214,168,75,.5); border-radius:10px; font:700 9px/1 ui-monospace; z-index:3; cursor:pointer; position:relative; }
      .postcards-btn .unread-dot { position:absolute; top:-3px; right:-3px; width:12px; height:12px; border-radius:50%; background:${j.sealingRed}; box-shadow:0 0 8px ${j.sealingRed}; }
      .card-postcards .pc-group { margin:8px 0; }
      .card-postcards h4 { margin:10px 0 4px; font-size:13px; color:${j.inkNavy}; text-transform:uppercase; letter-spacing:.05em; }
      .pc-row { display:flex; align-items:center; gap:8px; width:100%; min-height:44px; padding:6px 8px; border:none; background:transparent; border-bottom:1px dashed rgba(36,29,18,.2); cursor:pointer; text-align:left; font:inherit; }
      .pc-row.locked { opacity:.5; cursor:default; }
      .pc-row .pc-slot { color:#a05555; font-weight:700; font-size:11px; }
      .pc-row .pc-subject { flex:1; font-size:13px; color:#241d12; }
      .pc-row .pc-state { font-size:10px; text-transform:uppercase; }
      .pc-row.new .pc-state { color:${j.sealingRed}; font-weight:700; }
      .card-postcards .empty { color:#777; font-size:13px; }
      .card-postcard-story .pc-meta { font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:#a05555; }
      .card-postcard-story .pc-subject { margin:4px 0; color:${j.inkNavy}; }
      .card-postcard-story .pc-sender { font-size:12px; color:#777; margin:0 0 10px; }
      .card-postcard-story .pc-body { font-size:15px; line-height:1.5; color:#241d12; }
      .card-postcard-story .pc-reaction { margin-top:12px; font-style:italic; color:#3a5d7d; font-size:13px; }
      .card-postcard-story .pc-seal { margin-top:10px; font-weight:700; color:${j.brass}; }
      .morningpost-btn { position:absolute; top:16%; right:6px; transform:translateY(-50%); min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${j.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:3; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .morningpost-btn.visible { opacity:1; pointer-events:auto; }
      .morningpost-btn.pulse { animation: breathe 1.2s ease-in-out infinite alternate; }
      .card-morningpost .mp-prompt { font-size:14px; line-height:1.5; color:${j.inkNavy}; }
      .card-morningpost .mp-grant { margin-top:10px; font-size:15px; color:#3a5d7d; }
      .card-morningpost .mp-grant b { color:${j.brass}; }
      .special-btn { position:absolute; top:calc(16% + 52px); right:6px; min-height:44px; min-width:44px; padding:0 12px; background:transparent; color:${j.moonBlue}; border:1px solid rgba(91,121,200,.6); border-radius:10px; font:700 9px/1 ui-monospace; z-index:3; cursor:pointer; opacity:0; pointer-events:none; transition:opacity .2s; }
      .special-btn.visible { opacity:1; pointer-events:auto; }
      .card-special .sd-block { margin:10px 0; padding:10px; border:1px solid rgba(36,29,18,.18); border-radius:8px; background:rgba(255,248,235,.55); }
      .card-special .sd-block.active { border-color:rgba(91,121,200,.5); }
      .card-special .sd-block h4 { margin:0 0 4px; color:${j.inkNavy}; font-size:14px; }
      .card-special .sd-cost { margin:0; font-size:12px; color:#777; }
      .card-special .sd-have { color:#3a5d7d; }
      .card-special .empty { color:#777; font-size:13px; }
      .wander-toast { position:absolute; left:50%; top:14%; transform:translateX(-50%); z-index:6; pointer-events:none; background:rgba(23,35,63,.9); color:${j.parchment}; padding:8px 14px; border-radius:12px; font:700 13px/1 ui-monospace; border:1px solid rgba(244,231,199,.4); box-shadow:0 4px 14px rgba(0,0,0,.35); }
      .wander-toast b { color:${j.brass}; }
      .wander-toast-seal { display:block; margin-top:4px; color:${j.sealingRed}; font-size:11px; text-align:center; }
    `,document.head.appendChild(e)}}const L0={desk:"desk",satchel:"satchel",route:"route",inflow:"hall"};function D0(n,e=Date.now()){n.lastLedgerTs=e,n.savedAt=e}function $c(n=Date.now()){const e=new Date(n);return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function I0(n,e){const t=$c();return n.doublerDay!==t&&(n.doublerDay=t,n.doublersUsed=0),n.doublersUsed>=3?!1:(n.doublersUsed+=1,n.postage+=e,n.totalEarnedRun+=e,!0)}function U0(){const n=e=>({family:e,level:"ok",chokeHoldS:0,warnHoldS:0,chokedAtNightMs:null,firstChokeThisRun:!1,remedyLoggedAtS:null,chokeClearS:0});return{per:{desk:n("desk"),satchel:n("satchel"),route:n("route"),inflow:n("inflow")},deliveredEma:0}}const kt=wg;function F0(n,e,t,i,r){const s=Math.max(1e-9,vs(n)),a=n.desks.reduce((x,p)=>x+p.inProcess,0)/s,o=Math.max(1e-9,Ac(n)),l=(n.bundled??0)/o,u=Math.min(1,i/2),d=r/Math.max(1e-9,i);e.deliveredEma+=(d-e.deliveredEma)*u;const f=Math.max(1e-9,Cc(n)*Math.max(1,n.starMultiplier)),m=e.deliveredEma/f,g=N0(n);return{deskPile:a,satQueue:l,routesBelowSatchels:f<g,routesAboveSatchels:f>g,routeUtil:m,routeDeliveredOkSlack:e.deliveredEma>=g*(1-kt.route.okSlack)||l<.02,inflowPool:n.backlog/Math.max(1e-9,Es(n)),holding:t}}function N0(n){return n.racks.reduce((e,t)=>e+(t.unlocked?An.rates[t.tier]:0),0)}function k0(n){return Es(n)}function O0(n,e,t,i){for(const r of Object.keys(e.per)){const s=e.per[r],a=z0(r,t),o=H0(r,t);if(a){if(s.chokeHoldS+=i,s.chokeClearS=0,s.level!=="choke"&&s.chokeHoldS>=B0(r,t)){const c=!s.firstChokeThisRun;s.firstChokeThisRun=!0,s.level="choke",s.chokedAtNightMs=n.blocking.nightMs,s.remedyLoggedAtS=null,Ke(n,je.meterChoke,{family:r,first_in_run:c})}}else s.chokeHoldS=0,s.level==="choke"?(s.chokeClearS+=i,s.chokeClearS>=1.5&&(s.level=o?"warn":"ok",s.chokeClearS=0)):s.chokeClearS=0;o&&s.level!=="choke"?(s.warnHoldS+=i,s.level="warn"):s.level!=="choke"&&(s.warnHoldS=0,s.level=a?s.level:"ok")}}function B0(n,e){return n==="desk"&&e.holding&&e.deskPile>=kt.desk.burstFullAt?0:n==="desk"?kt.desk.chokeSustainS:n==="satchel"?kt.satchel.chokeSustainS:n==="route"?kt.route.chokeSustainS:kt.inflow.chokeSustainS}function z0(n,e){switch(n){case"desk":return e.deskPile>=kt.desk.chokeAt;case"satchel":return e.routesAboveSatchels&&e.deskPile>=kt.satchel.deskPileChokeAt;case"route":return e.routeUtil>=kt.route.utilChokeAt&&e.satQueue>=kt.route.queueChokeAt;case"inflow":return e.inflowPool<kt.inflow.chokeAt&&e.holding}}function H0(n,e){switch(n){case"desk":return e.deskPile>=kt.desk.warnAt;case"satchel":return e.satQueue>=kt.satchel.queueWarnAt&&e.routesBelowSatchels;case"route":return e.routeUtil>=kt.route.utilWarnAt;case"inflow":return e.inflowPool<kt.inflow.okAt}}function V0(n,e,t,i){const r=e.per[t];if(r.remedyLoggedAtS!=null||r.chokedAtNightMs==null)return;r.remedyLoggedAtS=n.blocking.nightMs;const s=(n.blocking.nightMs-r.chokedAtNightMs)/1e3;Ke(n,je.meterRemedy,{family:t,purchase_id:i,latency_s:s})}function G0(n){for(const e of Object.keys(n.per)){const t=n.per[e];t.level="ok",t.chokeHoldS=0,t.warnHoldS=0,t.chokedAtNightMs=null,t.firstChokeThisRun=!1,t.remedyLoggedAtS=null,t.chokeClearS=0}n.deliveredEma=0}const W0=60;function Hl(n){const e=n.hall.F8??0,t=gn.F8;return e>=2&&t.capHoursAfterT2!=null?t.capHoursAfterT2:e>=1&&t.capHoursAfter!=null?t.capHoursAfter:Fr.capHours}function X0(n){const e=n.hall.F3??0,t=gn.F3;return e>=4&&t.awayFractionAfterT4!=null?t.awayFractionAfterT4:e>=1&&t.awayFractionAfter!=null?t.awayFractionAfter:Fr.awayFraction}function $0(n,e,t){if(e<=0)return;const i=e/Math.max(1e-9,t),r=Math.min(1,t/W0);n.blocking.snapshotRate+=(i-n.blocking.snapshotRate)*r}function Vl(n,e=Date.now()){const t=Math.max(0,(e-n.lastLedgerTs)/1e3),i=n.blocking.snapshotRate;if(t<Fr.neverEmptyElapsedS||i<=0){const o={kind:"never-empty",elapsedS:t,capS:Hl(n)*3600,base:0,doubled:!1,doublerLeftToday:Gl(n),snapshotRate:i};return n.lastLedgerTs>0&&t>=1&&Ke(n,je.ledgerReturn,{elapsed_s:t,credited:0,snapshot_rate:i,doubled:!1}),n.lastLedgerTs=e,n.lastLedgerTs>0?o:null}const r=Hl(n)*3600,a=Math.min(t,r)*X0(n)*i;return n.postage+=a,n.totalEarnedRun+=a,xi(n,a),Ke(n,je.ledgerReturn,{elapsed_s:t,credited:a,snapshot_rate:i,doubled:!1}),n.lastLedgerTs=e,{kind:"ledger",elapsedS:t,capS:r,base:a,doubled:!1,doublerLeftToday:Gl(n),snapshotRate:i}}function Gl(n,e=Date.now()){const t=$c(e),i=n.doublerDay===t?n.doublersUsed:0;return Math.max(0,Fr.doublerMaxPer24h-i)}function q0(n,e){return e.kind!=="ledger"||e.doubled||!I0(n,e.base)?!1:(xi(n,e.base),e.doubled=!0,!0)}const oa=Tc.filter(n=>"t"in n.trigger);function qc(n,e){n.blocking.railsFired.push(e.beat);const t=e.grantId??e.beat;Ke(n,je.onboardBeat,{copy_id:t,t_s:n.blocking.nightMs/1e3});let i;if(e.grantId!=null&&!n.blocking.checklist.includes(e.grantId)){const r=Rg.find(s=>s.id===e.grantId);r&&(n.blocking.checklist.push(r.id),i=r.grant,n.postage+=r.grant,n.totalEarnedRun+=r.grant,xi(n,r.grant))}return{beat:e.beat,copyId:t,speaker:e.speaker,copy:e.copy,highlight:e.highlight,rail:e.rail,grantId:e.grantId,grantAmount:i}}function Y0(n){if(n.onboarded)return[];const e=n.blocking.nightMs/1e3,t=[];for(const r of oa)e>=r.trigger.t&&!n.blocking.railsFired.includes(r.beat)&&t.push(qc(n,r));const i=oa[oa.length-1];return i&&n.blocking.railsFired.includes(i.beat)&&(n.onboarded=!0),t}function Wi(n,e){const t=[];for(const i of Tc)"event"in i.trigger&&i.trigger.event===e&&!n.blocking.railsFired.includes(i.beat)&&t.push(qc(n,i));return t}function j0(n,e,t){let i=[];return e.rainmarket.rvDone&&(i=i.concat(Wi(n,"rv_complete"))),t.rainmarketListNearly&&(i=i.concat(Wi(n,"list_nearly"))),e.horizon.rvDone&&(i=i.concat(Wi(n,"horizon_rv"))),e.horizon.listDone&&(i=i.concat(Wi(n,"horizon_list"))),i}function En(n){return n.blocking.ch2FiredEver}function sn(n,e){return En(n).push(e.beat),Ke(n,je.onboardBeat,{copy_id:e.beat,t_s:n.blocking.nightMs/1e3}),{beat:e.beat,speaker:e.speaker,copy:e.copy,highlight:e.highlight}}function yt(n,e){return En(n).includes(e)}const K0=[ht.flatNear.beat,ht.flatFar.beat],Wl=new WeakMap;function Z0(n){const e=Wl.get(n);e!==n.run&&(e!=null&&(n.blocking.ch2FiredEver=n.blocking.ch2FiredEver.filter(t=>!K0.includes(t))),Wl.set(n,n.run))}function J0(n,e){const t=[];e===1&&Ms(n)&&!yt(n,ht.rmReanswer.beat)&&t.push(sn(n,ht.rmReanswer));const i=Cg.find(r=>r.districtIndex===e);if(i){const r=`ch2.vignette.${i.id}`;yt(n,r)||(En(n).push(r),Ke(n,je.onboardBeat,{copy_id:r,t_s:n.blocking.nightMs/1e3}),t.push({beat:r,speaker:i.speaker,copy:i.body,vignette:i})),i.arrivalCopy&&!yt(n,`ch2.arrival.${i.id}`)&&(En(n).push(`ch2.arrival.${i.id}`),Ke(n,je.onboardBeat,{copy_id:`arrival.${i.id}`,t_s:n.blocking.nightMs/1e3}),t.push({beat:`ch2.arrival.${i.id}`,speaker:i.arrivalCopy.speaker,copy:i.arrivalCopy.line}))}if(e>=1&&Ms(n)){const r=`replychord.${e}.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"reply_chord",atS:n.blocking.nightMs/1e3+Ul.delayAfterVignetteS,district:e})}if(i?.id==="canal_of_echoes"){const r=`composite.canal.run${n.run}`;n.blocking.ch2Pending.some(s=>s.id===r)||n.blocking.ch2Pending.push({id:r,kind:"composite_chord",atS:n.blocking.nightMs/1e3+Ul.delayAfterVignetteS})}i?.id==="clocktower_ward"&&!yt(n,"ch2.scripted.wander.1")&&(En(n).push("ch2.scripted.wander.1"),n.blocking.ch2Pending.push({id:"scripted.wander.1",kind:"scripted_wander",atS:n.blocking.nightMs/1e3+45})),i?.id==="museum_after_dark"&&(yt(n,ht.museumClaim.beat)||t.push(sn(n,ht.museumClaim)),yt(n,ht.museumClaim2.beat)||t.push(sn(n,ht.museumClaim2))),e>=2&&_0(n,Date.now());for(const r of Nr.recipes){const s=fn.findIndex(a=>a.id===r.available);s>=0&&e>=s&&!yt(n,`ch2.special.offer.${r.id}`)&&(En(n).push(`ch2.special.offer.${r.id}`),Ke(n,je.specialOffer,{recipe_id:r.id,stamp_cost_json:r.stamps,timer_h:r.timerH}),t.push({beat:`ch2.special.offer.${r.id}`,speaker:null,copy:null}))}return t}const Xl=new WeakMap;function Q0(n){let e=Xl.get(n);return e||(e={mpDue:!1,trays:!1,wander:!1,listDone:{},primed:!1},Xl.set(n,e)),e}function e_(n,e){const t=[];Z0(n);const i=Q0(n),r=n.blocking.nightMs/1e3,s=Ms(n);if(!i.primed){i.mpDue=Lr(n,e),i.trays=(n.hall.F3??0)>=2,i.wander=(n.hall.F9??0)>=1;for(const[d,f]of Object.entries(n.blocking.gates))i.listDone[d]=f.listDone;i.primed=!0}const a=m0(n);if(s&&(n.run>=1&&!yt(n,ht.secondWind.beat)&&t.push(sn(n,ht.secondWind)),!yt(n,"ch2.seal-convert")&&r>=Fl.conversionCardS&&(En(n).push("ch2.seal-convert"),Ke(n,je.sealConvert,{t_s:r}),t.push({beat:"ch2.seal-convert",speaker:ra.speaker,copy:`${ra.line}
${ra.note}`,conversion:!0,highlight:"seal-horizon"})),!yt(n,ht.sdIntro.beat)&&r>=Fl.sdBoardIntroS)){t.push(sn(n,ht.sdIntro));const d=Nr.recipes[0];d&&!yt(n,`ch2.special.offer.${d.id}`)&&(En(n).push(`ch2.special.offer.${d.id}`),Ke(n,je.specialOffer,{recipe_id:d.id,stamp_cost_json:d.stamps,timer_h:d.timerH}))}(n.hall.F3??0)>=2&&!i.trays&&(i.trays=!0,yt(n,"ch2.tray.activate")||(En(n).push("ch2.tray.activate"),Ke(n,je.trayActivate,{tier:n.hall.F3,t_s:r})),yt(n,ht.trayRail.beat)||t.push(sn(n,ht.trayRail))),(n.hall.F9??0)>=1&&!i.wander&&(i.wander=!0,yt(n,ht.wanderOn.beat)||t.push(sn(n,ht.wanderOn)));const l=Lr(n,e);if(l&&!i.mpDue){const d=fn[n.districtIndex];Ke(n,je.morningpostReady,{grant:d?tr.grantByFrontier[d.id]??0:0,district:d?.id}),yt(n,ht.mpFirstReady.beat)||t.push(sn(n,ht.mpFirstReady))}i.mpDue=l;for(const[d,f]of Object.entries(zc)){const m=wc[d];if(!m)continue;const g=n.ch2.postcardCounters[d]??0;for(const x of f){const p=m[x.slot-1];p==null||g<p||n.ch2.postcards.unlockedEmitted.includes(x.id)||(n.ch2.postcards.unlockedEmitted.push(x.id),Ke(n,je.postcardUnlock,{district:d,n:x.slot,letters_counted:g}),yt(n,ht.postcardAuto.beat)||t.push({...sn(n,ht.postcardAuto),postcardId:x.id}))}}a.card&&!p0(n)&&!yt(n,ht.flatNear.beat)&&t.push(sn(n,ht.flatNear)),a.nudge&&!yt(n,ht.flatFar.beat)&&t.push(sn(n,ht.flatFar));for(const[d,f]of Object.entries(n.blocking.gates)){const m=i.listDone[d]===!0;if(i.listDone[d]=f.listDone,!f.listDone||m)continue;const g=n.blocking.evapSpanMax[d]??0,x=n.blocking.nightMs/1e3;if(g>1500&&x<=1500&&!yt(n,`ch2.evaporation.${d}`)){En(n).push(`ch2.evaporation.${d}`);const p=ht.evaporation;Ke(n,je.onboardBeat,{copy_id:`evaporation.${d}`,t_s:x}),t.push({beat:`ch2.evaporation.${d}`,speaker:p.speaker,copy:p.copy,toast:!0})}}const u=n.blocking.ch2Pending.filter(d=>d.atS<=r);if(u.length){n.blocking.ch2Pending=n.blocking.ch2Pending.filter(d=>d.atS>r);for(const d of u)d.kind==="reply_chord"&&d.district!=null?(Ke(n,je.replyChord,{district:d.district,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:d.district,composite:!1}})):d.kind==="composite_chord"?(Ke(n,je.replyChord,{district:"composite",t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,chord:{district:null,composite:!0}})):d.kind==="scripted_wander"&&(Ke(n,je.wanderSpawn,{kind:"normal",scripted:!0,t_s:d.atS}),t.push({beat:d.id,speaker:null,copy:null,spawnWanderlight:"normal"}),yt(n,ht.firstWander.beat)||t.push(sn(n,ht.firstWander)))}return{intents:t,flat:a}}const t_=30;function n_(n,e=()=>Date.now()){const t={lastWriteMs:e(),save(i,r){Yc(i),n(i),t.lastWriteMs=e(),Ke(i,je.saveWrite,{version:i.v,bytes:JSON.stringify(i).length,state_hash:Ic(i),ok:!0,reason:r})},tick(i,r){(r-t.lastWriteMs)/1e3>=t_&&t.save(i,"autosave")}};return t}function i_(n,e){Ke(n,je.saveLoad,{version:n.v,bytes:JSON.stringify(n).length,state_hash:Ic(n),ok:e})}function Yc(n){n.ledgerWindow=Fr.capHours*3600}const qn=1/60,r_=[-3.4,-1.2,1.1,3.3];function s_(){try{const n=localStorage.getItem(Rc);return n?{state:Vg(JSON.parse(n)),ok:!0}:{state:nr(),ok:!1}}catch{return{state:nr(),ok:!1}}}function $l(n){n.savedAt=Date.now(),D0(n),localStorage.setItem(Rc,JSON.stringify(n))}function a_(n){return new I(r_[n]??0,.3,1.6)}function o_(){const n=document.getElementById("game"),e=document.getElementById("hud"),t=document.getElementById("boot");if(!n||!e)return;const i=yg(),{renderer:r,scene:s,camera:a,resize:o}=bg(n,{});Eg(a);const c=Og(s,{});Jg();const{state:l,ok:u}=s_();Yc(l),i_(l,u);const d=n_($l),f=U0();let m=null;!u||(m=Vl(l),m&&m.kind==="ledger"&&m.base===0&&(m=null)),m&&m.kind==="never-empty"&&!u&&(m=null);let g=!1,x=!1;const p=[];let h=l.bundled??0;const E=Y=>{for(const Q of Y)(Q.copy!=null||Q.rail)&&p.push(Q),Q.grantAmount!=null&&d.save(l,"checklist")},T=Y=>{for(const Q of Y)Q.copy!=null&&p.push(Q),Q.chord&&c.pulseThread(Q.chord.district),Q.spawnWanderlight&&c.spawnWanderlight(Q.spawnWanderlight)},S=new P0(e,{onSortHold:Y=>{x=Y},onBuy:(Y,Q)=>{const Ie=()=>JSON.stringify([l.postage,l.hall,l.desks,l.racks,l.lanes]),Je=Ie();let X=!1,re="",ue=0;if(Y==="hall"){const ae=String(Q??""),ve=l.hall[ae]??0,De=gn[ae];ue=De?De.cost[ve]??0:0,X=Gg(l,ae),re=ae}else if(Y==="desk"){const ae=Number(Q??0),ve=l.desks[ae];ve&&!ve.unlocked?(ue=fo(l,ae),X=Wg(l,ae)):ve&&ve.unlocked&&(ue=po(l,ae),X=Xg(l,ae)),re=`pad${ae+1}`}else if(Y==="satchel"){const ae=Number(Q??0),ve=l.racks[ae];ve&&!ve.unlocked?(ue=mo(l,ae),X=$g(l,ae)):ve&&ve.unlocked&&(ue=go(l,ae),X=qg(l,ae)),re=`rack${ae+1}`}else if(Y==="route"){const ae=Number(Q??0),ve=l.lanes[ae];ve&&!ve.unlocked?(ue=_o(l,ae),X=Yg(l,ae)):ve&&ve.unlocked&&(ue=vo(l,ae),X=jg(l,ae)),re=`lane${ae+1}`}const de=Ie();X&&Je!==de&&(Ke(l,je.purchase,{kind:Y,id:re,cost:ue,wallet_after:l.postage}),V0(l,f,Y==="hall"?"inflow":Y,re),d.save(l,"purchase")),Y==="hall"?S.showUpgradePanel(l):S.showFamilyPanel(l,Y)},onBond:()=>{const Y=l0(l);Y!=null&&(c.updateLanterns(l),c.pipPulse(),T(J0(l,Y)),E(Wi(l,"advance")),d.save(l,"district_advance"))},onRedrawOpen:()=>(Vl(l),h0(l)),onRedrawConfirm:()=>{const Y=S.redrawForecastShown;Y&&(f0(l,Y.starsPending),G0(f),F=0,h=0,S.hidePanel(),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateWall(l,!1),d.save(l,"redraw"),E(Wi(l,"claim")))},onDismissMinor:()=>{l.returnCardPending=!1,m=null,S.hidePanel(),d.save(l,"ledger_settle")},onDouble:()=>{m&&q0(l,m),l.returnCardPending=!1,S.hidePanel(),$l(l),m=null},onOpenPanel:Y=>{Y==="hall"?S.showUpgradePanel(l):S.showFamilyPanel(l,Y)},onReadPostcard:Y=>{const Q=R0(l,Y);return Q&&(Ke(l,je.postcardRead,{id:Y,seal:l.ch2.waxSeals}),d.save(l,"checklist")),Q},onClaimMorningPost:()=>{const Y=g0(l,Date.now());return Y>0&&(Ke(l,je.morningPost,{amount:Y}),d.save(l,"checklist")),Y},onActivateSpecial:Y=>{const Q=b0(l,Y,Date.now());return Q&&(Ke(l,je.specialActivate,{id:Y}),d.save(l,"checklist")),Q},onClaimSpecial:Y=>{const Q=T0(l,Y,Date.now());return Q>0&&(Ke(l,je.specialClaim,{id:Y,amount:Q}),d.save(l,"checklist")),Q}},i);let F=l.districtIndex;m&&(l.returnCardPending=!0,g=!0,S.showReturnCard(m,l)),c.updateDesks(l),c.updateLanterns(l),c.updateRacks(l),c.updateLanes(l,0),c.updateWall(l,aa(l));let C=0,A=0,L=l.totalEarnedRun,y=performance.now(),M=0,w=0,N=0,k=0;o(),window.addEventListener("resize",o),requestAnimationFrame(()=>t?.remove());const $=new rt(-2,-2),Z=new xg;r.domElement.addEventListener("pointermove",Y=>{const Q=r.domElement.getBoundingClientRect();$.x=(Y.clientX-Q.left)/Q.width*2-1,$.y=-((Y.clientY-Q.top)/Q.height)*2+1}),r.domElement.addEventListener("pointerdown",Y=>{if(S.modalOpen)return;const Q=r.domElement.getBoundingClientRect();$.x=(Y.clientX-Q.left)/Q.width*2-1,$.y=-((Y.clientY-Q.top)/Q.height)*2+1,Z.setFromCamera($,a);const Ie=Z.intersectObjects(c.wanderGroup.children,!0)[0];if(!Ie||!Ie.object.userData?.kind)return;const X=c.wanderlights.find(ae=>ae.group===Ie.object.parent);if(!X)return;const re=c.wanderlights.indexOf(X),ue=S0(l,X.kind);let de=!1;X.kind==="grand"?de=!0:Math.random()<M0(l)&&(l.ch2.waxSeals+=1,de=!0),Ke(l,je.wanderlight,{kind:X.kind,amount:ue,seal:de,seals:l.ch2.waxSeals}),S.showWanderToast(ue,de),c.despawnWanderlight(re),d.save(l,"checklist")});const q=new URLSearchParams(location.search).get("debug")==="1",te=document.createElement("div");q&&(e.appendChild(te),c.debugAnchors.forEach(Y=>{const Q=document.createElement("div");Q.className="debug-label",Q.textContent=Y.label,Q.dataset.label=Y.label,te.appendChild(Q)}));let G=0;function he(Y){requestAnimationFrame(he);let Q=(Y-y)/1e3;if(y=Y,Q>.25&&(Q=.25),!S.modalOpen){M+=Q;let ue=0;for(;M>=qn&&ue<10;){const ae=l.postage,ve=Ng(l,qn,x);if(l.blocking.nightMs+=qn*1e3,l.districtIndex!==F&&(l.districtIndex=F),ve.postageEarned>0||l.postage!==ae){const st=ve.postageEarned;t0(l,st,ve.delivered),$0(l,st,qn)}const De=F0(l,f,x,qn,ve.delivered);O0(l,f,De,qn),T(e_(l,Y).intents),E(Y0(l)),E(j0(l,{rainmarket:l.blocking.gates.rainmarket,horizon:l.blocking.gates.horizon},{rainmarketListNearly:r0(l,"rainmarket")})),(l.bundled??0)>h+.5&&c.leverKick(),h=l.bundled??0,M-=qn,ue++,N+=qn}const de=l.totalEarnedRun-L;if(L=l.totalEarnedRun,de>0){for(A+=de/Math.max(1,uo(l)),C-=Q;!i&&A>=1&&c.flyers.length<80&&!(C>0);)A-=1,C+=.09,c.spawnFlyer(new I(-2.6+(Math.random()-.5)*1.4,.5,4),a_(Math.floor(Math.random()*4)));A>12&&(A=12)}{const ae=c.wanderlights.length;if(y0(l,k,ae)){const ve=Math.random()<x0(l);c.spawnWanderlight(ve?"grand":"normal"),k=0}else k+=Q*1e3}if(p.length>0&&!S.modalOpen&&!g){const ae=p.shift();S.showCoach(ae,S.anchorFor(ae.highlight))}}g&&!S.modalOpen&&(g=!1),c.animateFlyers(Q,i),c.animateWanderlights(Q,N,i),c.tickCharacters(Q,N,i),c.tickChords(Q),c.updateDesks(l),c.updateRacks(l);const Je=l.backlog/Math.max(1e-9,k0(l)),X=f.per.inflow.level==="choke";if(c.updateTray(l,Je,X),c.updateDistricts(l,{mpDue:Lr(l,Date.now()),sdActive:l.ch2.specialDeliveries.active.length,stampCapsAt:0}),Y-w>250){w=Y;const ue=Math.max(1e-9,64);c.updateLanes(l,Math.min(1,f.deliveredEma/ue)),c.updateWall(l,aa(l))}const re=Object.keys(f.per).find(ue=>f.per[ue].level==="choke");c.setLampLevel(re?"red":x?"ok":"warn"),S.updateHud(l,f,aa(l));for(const ue of["desk","satchel","route","inflow"])f.per[ue].level==="choke"&&Y%1e3<34&&S.showBottleneckPulse(ue);if(l.perfect>=ho(l)-1e-6&&c.pipPulse(),d.tick(l,Y),q&&(G+=Q,G>.25)){G=0;const ue=r.domElement.clientWidth,de=r.domElement.clientHeight;c.debugAnchors.forEach(ae=>{const ve=te.querySelector(`[data-label="${ae.label}"]`);if(!ve)return;const De=ae.pos.clone().project(a);ve.style.left=`${(De.x+1)/2*ue}px`,ve.style.top=`${(-De.y+1)/2*de}px`})}r.render(s,a)}requestAnimationFrame(he),window.__md={get state(){return l},hall:c,blocking:{get meters(){return f},events:Qg,forecast:()=>xo(l),flattening:()=>Bc(l),get queue(){return p.length}}}}o_();
