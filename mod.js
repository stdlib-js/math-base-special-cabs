// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function u(r){return r===n||r===t}var e=Math.sqrt;function I(t){return I=function(r){return r.re}(t),N=function(r){return r.im}(t),r(I)||r(N)?NaN:u(I)||u(N)?n:(I<0&&(I=-I),N<0&&(N=-N),I<N&&(a=N,N=I,I=a),0===I?0:I*e(1+(N/=I)*N));var I,N,a}export{I as default};
//# sourceMappingURL=mod.js.map
