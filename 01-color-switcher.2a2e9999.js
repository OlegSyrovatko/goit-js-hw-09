!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};t.start.addEventListener("click",(function(){e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.setAttribute("disabled","true")})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled")}));var e=null}();
//# sourceMappingURL=01-color-switcher.2a2e9999.js.map
