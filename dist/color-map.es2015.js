!function(r){"use strict";function n(r,n,t,o){const u=[],e=[...r],h=[n[0]-r[0],n[1]-r[1],n[2]-r[2]];o&&(e.push(o[0]),h.push(o[1]-o[0]));for(let s=0;s<t;s++){const r=1/Math.max(t-1,1),n=[Math.round(e[0]+s*h[0]*r),Math.round(e[1]+s*h[1]*r),Math.round(e[2]+s*h[2]*r),o?e[3]+s*h[3]*r:1];u.push(n)}return u}function t(r,t,o){if(t<r.length)throw new Error(`Requires at least ${r.length} shades.`);const u=[],e=[];for(let h=0;h<r.length;h++)e.push(Math.round(r[h].index*t));for(let h=0;h<r.length-1;h++){const t=e[h+1]-e[h],s=r[h].rgb,i=r[h+1].rgb;u.push(...n(s,i,t,o))}return u}function o(r){let n="#";for(let t=0;t<3;t++)n+=u(r[t]);return n}function u(r){let n=(+r).toString(16);return n.length<2?"0"+n:n}function e(r){return"rgba("+r.join(",")+")"}r.createColors=n,r.createColorsFromMap=t,r.rgbHex=o,r.rgbaString=e}(this.ColorMap=this.ColorMap||{});
//# sourceMappingURL=color-map.es2015.js.map
