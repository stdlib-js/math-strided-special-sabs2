// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,a=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__,i=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,i){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((c="value"in i)&&(l.call(t,e)||u.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=i.value,t.__proto__=f):t[e]=i.value),y="get"in i,p="set"in i,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,i.get),p&&a&&a.call(t,e,i.set),t};function f(t,e,r){i(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t,e,r,n,o,a){var l,u,i;if(t<=0)return n;for(l=r<0?(1-t)*r:0,u=o<0?(1-t)*o:0,i=0;i<t;i++)n[u]=a(e[l]),l+=r,u+=o;return n}function y(t,e,r,n,o,a,l,u){var i,f,c;if(t<=0)return o;for(i=n,f=l,c=0;c<t;c++)o[f]=u(e[i]),i+=r,f+=a;return o}f(c,"ndarray",y);var p="function"==typeof Math.fround?Math.fround:null,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",m=b&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,a;if(null==t)return d.call(t);r=t[s],a=s,e=null!=(o=t)&&_.call(o,a);try{t[s]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[s]=r:delete t[s],n}:function(t){return d.call(t)},v="function"==typeof Float32Array,g=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,j="function"==typeof Float32Array?Float32Array:void 0,w=new(function(){var t,e,r;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,5e40]),r=e,t=(v&&r instanceof Float32Array||"[object Float32Array]"===m(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===g}catch(e){t=!1}return t}()?j:function(){throw new Error("not implemented")})(1),S="function"==typeof p?p:function(t){return w[0]=t,w[0]};function A(t){return S(S(t)*S(t))}function F(t,e,r,n,o){return c(t,e,r,n,o,A)}return f(F,"ndarray",(function(t,e,r,n,o,a,l){return y(t,e,r,n,o,a,l,A)})),F},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).sabs2=e();
//# sourceMappingURL=index.js.map
