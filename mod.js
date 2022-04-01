// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,u=n,e=t;var a=function(r){return r===u||r===e},I=Math.sqrt,N=r,f=a,i=n,o=I;var c=function(r,n){var t;return N(r)||N(n)?NaN:f(r)||f(n)?i:(r<0&&(r=-r),n<0&&(n=-n),r<n&&(t=n,n=r,r=t),0===r?0:r*o(1+(n/=r)*n))},v=function(r){return r.re},T=function(r){return r.im};var m=function(r){return c(v(r),T(r))};export{m as default};
//# sourceMappingURL=mod.js.map
