var zombrex=function(){"use strict";function n(){}function e(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if("function"!=typeof e)throw new Error("fn "+e+" should be a function")}function r(n,r){e(n,r),v[n]=r}function o(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if(void 0===e)throw new Error("obj "+e+" should not be undefined");Object.keys(w).forEach(function(e){if(e===n)throw new Error("Name "+n+" is already defined")})}function t(n,e){o(n,e),w[n]=e}function i(n){return l.before(w),Object.keys(v).forEach(function(n){w[n]=v[n](w)}),renders.forEach(function(n){var e=document.querySelector(n.id),r=n.fn(w);if("string"!=typeof r)throw new Error("Render Id "+n.id+" does not produce any html");e.innerHTML=r}),h.forEach(function(n){var e=document.querySelector(n.id);return n.fn(e,w)}),l.after(w)}function a(n){l.before=n}function f(n){l.after=n}function u(n){var e=0;if(0===n.length||void 0===n)return i();n.forEach(function(r){w.zAjax(r).then(function(o){if(t(r.name,o.data),e++,n.length===e)return i()})})}function d(n){window.addEventListener("DOMContentLoaded",function(){return u(n)},!0)}function c(n,e){h.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined")}),h.push({id:n,fn:e})}function g(n,e){E.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined in renders")}),E.push({id:n,fn:e})}function s(n){var e=n.url,r=n.data;return(r?axios.post:axios.get)(e,r)}var w={zSHARE:{}},h=[],E=[],l={after:n,before:n},v={},y={languageLong:window.navigator.userLanguage||window.navigator.language,language:(window.navigator.userLanguage||window.navigator.language).substring(0,2),agent:navigator.userAgent,online:navigator.onLine,timeFormat:(new Date).getTimezoneOffset()};return function(){t("zBROWSER",y),w.zAjax=s}(),{component:r,constant:t,preload:d,before:a,render:g,after:f,view:c}}();
