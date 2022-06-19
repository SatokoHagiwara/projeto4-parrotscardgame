let cardNumber;
let cardName = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];
let cardGame = [];
function askCardNumber() {
  cardNumber = parseInt(prompt("Com quantas cartas você quer jogar?"));
  while (
    isNaN(cardNumber) ||
    cardNumber < 4 ||
    cardNumber > 14 ||
    cardNumber % 2 === 1
  ) {
    cardNumber = parseInt(prompt("Com quantas cartas você quer jogar?"));
  }
}
function generateCardGame() {
  for (let i = 0; i < cardNumber / 2; i++) {
    const card = cardName[i];
    cardGame.push(card);
    cardGame.push(card);
  }
  cardGame.sort(comparador);
  renderCards();
}
function renderCards() {
  const cardsContainer = document.querySelector(".cards-container");

  for (let i = 0; i < cardGame.length; i++) {
    let cardTemplate = `
            <li class="card" onClick="turnCards(this)">
                <div class='front-face face'>
                    <img src='images/front.png'>
                </div>
                <div class='back-face face'>
                    <img src='images/${cardGame[i]}.gif'>
                </div>
            </li>
        `;
    cardsContainer.innerHTML += cardTemplate;
  }
}
askCardNumber();
generateCardGame();
