var zombrex=function(){"use strict";function n(){}function t(n,t){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if("function"!=typeof t)throw new Error("fn "+t+" should be a function")}function o(n,o){t(n,o),b[n]=o}function r(n,t){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if(void 0===t)throw new Error("obj "+t+" should not be undefined");Object.keys(h).forEach(function(t){if(t===n)throw new Error("Name "+n+" is already defined")})}function e(n,t){r(n,t),h[n]=t}function f(n){return E.before(h),Object.keys(b).forEach(function(n){h[n]=b[n](h)}),w.forEach(function(n){var t=document.querySelector(n.id);return n.fn(t,h)}),E.after(h)}function i(n){E.before=n}function u(n){E.after=n}function a(){window.addEventListener("DOMContentLoaded",function(){return f()},!0)}function c(n){var t=0;if(0===n.length)return f();n.forEach(function(o){h.zAjax(o).then(function(r){if(e(o.name,r.data),t++,n.length===t)return a()})})}function d(n,t){w.forEach(function(t){if(t.id===n)throw new Error("Id "+n+" already defined")}),w.push({id:n,fn:t})}function s(n){var t=n.url,o=n.data;return(o?axios.post:axios.get)(t,o)}var h={zSHARE:{}},w=[],E={after:n,before:n},b={};return function(){h.zAjax=s}(),{component:o,constant:e,preload:c,before:i,after:u,view:d}}();
