function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequire7bc7;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=l);var r=l("7Y9D8");const i={form:document.querySelector(".form"),delay:document.getElementsByName("delay"),step:document.getElementsByName("step"),amount:document.getElementsByName("amount")};i.form.addEventListener("submit",(function(e){e.preventDefault();const t=i.step[0].value,o=i.delay[0].value;let n=Number(o);setTimeout((()=>{for(let e=1;e<=i.amount[0].value;e++)setTimeout((()=>{n+=Number(t),console.log(t),u(e,n).then((({position:e,delay:t})=>{})).catch((({position:e,delay:t})=>{}))}),t)}),o)}));const u=(t,o)=>new Promise(((n,l)=>{Math.random()>.3?e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`):e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}));
//# sourceMappingURL=03-promises.651f373a.js.map
