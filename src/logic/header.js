const $ = require("jquery");
window.jQuery = $;
window.$ = $;

const headerLogo = 'feather';

const headerLogoContainer = $(".header__logo-container");
headerLogo.split("").map((char) => {
  const span = $("<span>").addClass("header__title_char").text(char);
  headerLogoContainer.append(span);
});

$(".header__button").on("click", (e) => {
  alert(`You clicked on ${e.target.textContent} button!`);
});

$(".header__button").on("mouseover", (e) => {
  $(".header__title_char").eq($(".header__button").index(e.target)).addClass("header__title_char--hovered");
});
$(".header__button").on("mouseout", (e) => {
  $(".header__title_char").eq($(".header__button").index(e.target)).removeClass("header__title_char--hovered");
});

export * from "./header.js";