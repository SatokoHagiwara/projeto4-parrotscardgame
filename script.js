let cardNumber;

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