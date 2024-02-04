const $ = require("jquery");
window.jQuery = $;
window.$ = $;

// on click on the button with class explore__content_button, show alert

$(".explore__content_button").on("click", () => {
  window.location.hash = '/explore';
}
);

$(".return-to-main_button").on("click", () => {
  window.location.hash = '';
}
);

export * from "./explore.js";