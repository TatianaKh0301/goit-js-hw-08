!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function x(e){return c=e,f=setTimeout(O,t),s?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=p();if(S(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,d&&o?b(e):(o=i=void 0,u)}function h(){var e=p(),n=S(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return x(l);if(m)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var x="feedback-form-state",S={},O={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};!function(){var e=localStorage.getItem(x);if(e){var t=JSON.parse(e);void 0===(S=t).message?O.message.value="":O.message.value=S.message,void 0===S.email?O.email.value="":O.email.value=S.email}}(),O.form.addEventListener("submit",(function(e){if(e.preventDefault(),console.log("refs.email.textContent",O.email.textContent),console.log("refs.message.textContent",O.message.textContent),console.log("refs.email.value",O.email.value),console.log("refs.message.value",O.message.value),""===O.email.value||""===O.message.value)return void alert("ВСІ ПОЛЯ ПОВИННІ БУТИ ЗАПОВНЕНІ!!!!");e.currentTarget.reset(),localStorage.removeItem(x),S={}})),O.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value;var t=JSON.stringify(S);localStorage.setItem(x,t)}),500))}();
//# sourceMappingURL=03-feedback.335775f5.js.map
