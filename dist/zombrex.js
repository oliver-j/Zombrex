var zombrex=function(){"use strict";function n(){}function e(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if("function"!=typeof e)throw new Error("fn "+e+" should be a function")}function o(n,o){e(n,o),l[n]=o}function r(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if(void 0===e)throw new Error("obj "+e+" should not be undefined");Object.keys(s).forEach(function(e){if(e===n)throw new Error("Name "+n+" is already defined")})}function t(n,e){r(n,e),s[n]=e}function i(n){return h.before(s),Object.keys(l).forEach(function(n){s[n]=l[n](s)}),renders.forEach(function(n){var e=document.querySelector(n.id),o=n.fn(s);if("string"!=typeof o)throw new Error("Render Id "+n.id+" does not produce any html");e.innerHTML=o}),w.forEach(function(n){var e=document.querySelector(n.id);return n.fn(e,s)}),h.after(s)}function a(n){h.before=n}function f(n){h.after=n}function u(n){var e=0;if(0===n.length||void 0===n)return i();n.forEach(function(o){s.zAjax(o).then(function(r){if(t(o.name,r.data),e++,n.length===e)return i()})})}function c(n){window.addEventListener("DOMContentLoaded",function(){return u(n)},!0)}function d(n,e){w.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined")}),w.push({id:n,fn:e})}function g(n){var e=n.url,o=n.data;return(o?axios.post:axios.get)(e,o)}var s={zSHARE:{}},w=[],h={after:n,before:n},l={},v={languageLong:window.navigator.userLanguage||window.navigator.language,language:(window.navigator.userLanguage||window.navigator.language).substring(0,2),agent:navigator.userAgent,online:navigator.onLine,timeFormat:(new Date).getTimezoneOffset()};return function(){t("zBROWSER",v),s.zAjax=g}(),{component:o,constant:t,preload:c,before:a,after:f,view:d}}();
