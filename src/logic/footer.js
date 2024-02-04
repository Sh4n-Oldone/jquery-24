const $ = require("jquery");
window.jQuery = $;
window.$ = $;

$(".footer__nav_link").on("click", (e) => {
  alert(`You will be redirected to -> ${e.target.textContent} <- page`);
});

export * from "./footer.js";