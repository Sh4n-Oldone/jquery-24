import "./styles.css";
import "./logic/index.js";

const $ = require("jquery");
window.jQuery = $;
window.$ = $;

$(window).on('hashchange', () => {
  const pageId = window.location.hash.substring(1);
  loadPage(pageId);
});

function loadPage(pageId) {
  switch (pageId) {
    case '/explore':
      $(".main-body__container").hide();
      $(".explore-body__container").show();
      break;
  
    default:
      $(".explore-body__container").hide();
      $(".main-body__container").show();
  }
}

// Load the page when the app starts

loadPage(window.location.hash.substring(1));