var zombrex=function(){"use strict";function n(){}function e(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if("function"!=typeof e)throw new Error("fn "+e+" should be a function")}function o(n,o){e(n,o),m[n]=o}function r(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if(void 0===e)throw new Error("obj "+e+" should not be undefined");Object.keys(h).forEach(function(e){if(e===n)throw new Error("Name "+n+" is already defined")})}function t(n,e){r(n,e),h[n]=e}function i(n){return E.before(h),Object.keys(m).forEach(function(n){return h[n]=m[n](h)}),p.forEach(function(n){var e=document.querySelector(n.id),o=n.fn(h);if("string"!=typeof o)throw new Error("Render Id "+n.id+" does not produce any html");e.innerHTML=o}),l.forEach(function(n){var e=document.querySelector(n.id);return n.fn(e,h)}),v.forEach(function(n){return n(h)}),E.after(h)}function f(n){E.before=n}function a(n){E.after=n}function u(n){var e=0;if(0===n.length||void 0===n)return i();n.forEach(function(o){h.zAjax(o).then(function(r){if(t(o.name,r.data),e++,n.length===e)return i()})})}function c(n){window.addEventListener("DOMContentLoaded",function(){return u(n)},!0)}function d(n,e){l.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined")}),l.push({id:n,fn:e})}function s(n,e){p.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined in renders")}),p.push({id:n,fn:e})}function g(n){if("function"!=typeof n)throw new Error("lambda "+n+" is not typeof function");v.push(n)}function w(n){var e=n.url,o=n.data;return(o?axios.post:axios.get)(e,o)}var h={zSHARE:{}},l=[],p=[],v=[],E={after:n,before:n},m={},y={languageLong:window.navigator.userLanguage||window.navigator.language,language:(window.navigator.userLanguage||window.navigator.language).substring(0,2),agent:navigator.userAgent,online:navigator.onLine,timeFormat:(new Date).getTimezoneOffset()},b=function(){for(var n={},e=window.location.search.substring(1),o=e.split("&"),r=0;r<o.length;r++){var t=o[r].split("=");if(void 0===n[t[0]])n[t[0]]=decodeURIComponent(t[1]);else if("string"==typeof n[t[0]]){var i=[n[t[0]],decodeURIComponent(t[1])];n[t[0]]=i}else n[t[0]].push(decodeURIComponent(t[1]))}return Object.freeze(n)}();return function(){t("zURLPARAM",b),t("zBROWSER",y),h.zAjax=w}(),{component:o,constant:t,preload:c,before:f,render:s,lambda:g,after:a,view:d}}();
