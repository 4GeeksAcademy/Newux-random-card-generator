/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  function cardCreator() {
    //array for card values
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    //array for card suits
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    //empty array for cards to be pushed into as they get randomly created
    //nested for loop loops through value and suits arrays and
    //pushes new element into the end of the new cards array
    const cards = [];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        const value = values[v];
        const suit = suits[s];
        cards.push({ value, suit });
      }
    }
    return cards;
  }
  //we declare a new function with the name cards and set it equal to the cardCreator function
  //this new function randomizes the generation of each new card and renders into the innerHTML for us to see
  const cards = cardCreator();
  randomCard(cards);

  function randomCard(cards) {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    let entity;
    cardSuit === "Diamonds"
      ? (entity = "&diams;")
      : (entity = "&" + cardSuit.toLowerCase() + ";");
    const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.innerHTML =
      '<span class="card-value-suit top">' +
      cardValue +
      entity +
      "</span>" +
      '<span class="card-suit">' +
      entity +
      "</span>" +
      '<span class="card-value-suit bot">' +
      cardValue +
      entity +
      "</span>";
    document.body.appendChild(card);
  }
};

// function myClickHandler() {
//   alert("hello");
// }
// myClickHandler();
