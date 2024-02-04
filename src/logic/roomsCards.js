const $ = require("jquery");
window.jQuery = $;
window.$ = $;

// test loading spinner for mock fetching data
// ajax req is okaay, but fetch-api still prefered

const cardsSection = $(".rooms-cards__container");
const cardsSpinner = $(".rooms-cards__spinner");

setTimeout(() => {
  const cards = [
    {
      image: "./images/room_1.jpeg",
      title: "Living Room",
      borderColor: "#E9672B",
      shadowColor: "#CBC6F4",
      link: "#"
    },
    {
      image: "./images/room_2.jpeg",
      title: "Bedroom",
      borderColor: "#225DCA",
      shadowColor: "#E7CB43",
      link: "#"
    },
    {
      image: "./images/room_3.jpeg",
      title: "Home Office",
      borderColor: "#242947",
      shadowColor: "#A2D4C5",
      link: "#"
    },
    {
      image: "./images/room_4.jpeg",
      title: "Dining Room",
      borderColor: "#DE4333",
      shadowColor: "#AF4920",
      link: "#"
    }
  ]

  for (const card of cards) {
    const cardDiv = $("<div>")
      .addClass("rooms-cards__card")
      .css({
        border: `2px solid ${card.borderColor}`,
        "box-shadow": `10px 10px 0px 4px ${card.shadowColor}`
      });
    const image = $("<img>")
      .addClass("rooms-cards__image")
      .attr("src", card.image)
      .attr("alt", card.title);
    const titleDiv = $("<div>")
      .addClass("rooms-cards__title");
    const link = $("<a>")
      .attr("href", card.link)
      .append(titleDiv)
      .text(card.title)
      .addClass("rooms-cards__link");

    titleDiv.append(link);
    cardDiv.append(image, titleDiv);
    cardsSection.append(cardDiv);
  }

  $(cardsSpinner).addClass("spinner-hidden");
}, 1500);

export * from "./roomsCards.js";