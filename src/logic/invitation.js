const $ = require("jquery");
window.jQuery = $;
window.$ = $;

$(".invitation__button").on("click", (e) => {
  alert(`You clicked on ${e.target.textContent} button!`);
}
);

export * from "./invitation.js";