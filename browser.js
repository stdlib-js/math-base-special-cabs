// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return e!=e}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function r(e){return e===n||e===t}var u=Math.sqrt;return function(t){return o=function(e){return e.re}(t),f=function(e){return e.im}(t),e(o)||e(f)?NaN:r(o)||r(f)?n:(o<0&&(o=-o),f<0&&(f=-f),o<f&&(i=f,f=o,o=i),0===o?0:o*u(1+(f/=o)*f));var o,f,i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).cabs=n();
//# sourceMappingURL=browser.js.map
