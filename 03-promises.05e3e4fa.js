!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON"),u={form:document.querySelector(".form"),delay:document.getElementsByName("delay"),step:document.getElementsByName("step"),amount:document.getElementsByName("amount"),btn:document.querySelector("button")};u.form.addEventListener("submit",(function(t){t.preventDefault(),u.btn.setAttribute("disabled","true");var n=Number(u.amount[0].value),o=Number(u.step[0].value),r=Number(u.delay[0].value),l=r,c=1;setTimeout((function(){var t=setInterval((function(){a(c,l).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),l+=o,(c+=1)==n+1&&clearInterval(t)}),o)}),r),setTimeout((function(){u.btn.removeAttribute("disabled")}),l+o*n)}));var a=function(e,t){return new Promise((function(n,o){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))}}();
//# sourceMappingURL=03-promises.05e3e4fa.js.map
