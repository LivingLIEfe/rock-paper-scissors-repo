let randomNumber = Number(Math.trunc(Math.random() * 6) + 1);

const getComputerChoice = function () {
  randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
  if (randomNumber === 1 || randomNumber === 6) {
    return `rock`;
  } else if (randomNumber === 2 || randomNumber === 3) {
    return `paper`;
  } else {
    return `scissor`;
  }
};

let computerChoice = getComputerChoice();

let playerChoice = prompt(`Pick rock paper scissors`).toLowerCase();

const gameRound = function (playerChoice, computerChoice) {
  if (playerChoice === `rock` && computerChoice === `paper`) {
    return `lose`;
  } else if (playerChoice === `rock` && computerChoice === `scissor`) {
    return `win`;
  } else if (playerChoice === `paper` && computerChoice === `scissor`) {
    return `lose`;
  } else if (playerChoice === `paper` && computerChoice === `rock`) {
    return `win`;
  } else if (playerChoice === `scissor` && computerChoice === `rock`) {
    return `lose`;
  } else if (playerChoice === `scissor` && computerChoice === `paper`) {
    return `win`;
  } else {
    return `tie`;
  }
};

getComputerChoice();

let gameRoundValue = gameRound(playerChoice, computerChoice);

const gamePlay = function () {
  for (i = 0; i < 5; i++) {
    console.log(
      (playerChoice = prompt(`Pick rock paper scissors`).toLowerCase())
    );
    randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
    getComputerChoice();
    computerChoice = getComputerChoice();
    gameRoundValue = gameRound(playerChoice, computerChoice);
    console.log(computerChoice);
    console.log(gameRoundValue);
  }
};

gamePlay();
