var ColorMap=function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=r,t.c=n,t.i=function(r){return r},t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:e})},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.p="",t(t.s=4)}([function(r,t,n){"use strict";function e(r,t,n,e){var o=[],u=r.slice(),a=[t[0]-r[0],t[1]-r[1],t[2]-r[2]];e&&(u.push(e[0]),a.push(e[1]-e[0]));for(var i=0;i<n;i++){var c=1/Math.max(n-1,1),s=[Math.round(u[0]+i*a[0]*c),Math.round(u[1]+i*a[1]*c),Math.round(u[2]+i*a[2]*c),e?u[3]+i*a[3]*c:1];o.push(s)}return o}t.createColors=e},function(r,t,n){"use strict";function e(r,t,n){if(t<r.length)throw new Error("Requires at least "+r.length+" shades.");for(var e=[],u=[],a=0;a<r.length;a++)u.push(Math.round(r[a].index*t));for(var a=0;a<r.length-1;a++){var i=u[a+1]-u[a],c=r[a].rgb,s=r[a+1].rgb;e.push.apply(e,o.createColors(c,s,i,n))}return e}var o=n(0);t.createColorsFromMap=e},function(r,t,n){"use strict";function e(r){for(var t="#",n=0;n<3;n++)t+=o(r[n]);return t}function o(r){var t=(+r).toString(16);return t.length<2?"0"+t:t}t.rgbHex=e},function(r,t,n){"use strict";function e(r){return"rgba("+r.join(",")+")"}t.rgbaString=e},function(r,t,n){"use strict";function e(r){for(var n in r)t.hasOwnProperty(n)||(t[n]=r[n])}e(n(0)),e(n(1)),e(n(2)),e(n(3))}]);
//# sourceMappingURL=color-map.es5.js.map