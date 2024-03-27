`use strict`;
//Script for console

// let randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
// let score = 0;
// let highScore = 0;

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

// const gameRound = function (playerChoice, computerChoice) {
//   if (playerChoice === `rock` && computerChoice === `paper`) {
//     return `lose`;
//   } else if (playerChoice === `rock` && computerChoice === `scissor`) {
//     score++;
//     if (score > highScore) {
//       highScore = score;
//     }
//     return `win`;
//   } else if (playerChoice === `paper` && computerChoice === `scissor`) {
//     return `lose`;
//   } else if (playerChoice === `paper` && computerChoice === `rock`) {
//     score++;
//     if (score > highScore) {
//       highScore = score;
//     }
//     return `win`;
//   } else if (playerChoice === `scissor` && computerChoice === `rock`) {
//     return `lose`;
//   } else if (playerChoice === `scissor` && computerChoice === `paper`) {
//     score++;
//     if (score > highScore) {
//       highScore = score;
//     }
//     return `win`;
//   } else {
//     return `tie`;
//   }
// };

// const gamePlay = function () {
//   for (i = 0; i < 20; i++) {
//     const playerChoice = prompt(`rock paper or scissors`);
//     const computerChoice = getComputerChoice();
//     const result = gameRound(playerChoice, computerChoice);
//     console.log(playerChoice);
//     console.log(computerChoice);
//     console.log(result);
//     console.log(`your score is ${score}`);
//     console.log(`your highscore is ${highScore}`);
//   }
// };

// gamePlay();

//Document script
let randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
let score = 0;
let highScore = 0;
let tries = 3;

document.querySelector(`.play`).addEventListener(`click`, function () {
  const playerChoice = document.querySelector(`.input`).textContent;
  const computerChoice = getComputerChoice();
  docunent.querySelector(`.computerchoice`).textContent = computerChoice;
  document.querySelector(`.yourchoice`).textContent = playerChoice;

  if (playerChoice === `rock` && computerChoice === `paper`) {
    document.querySelector(`.result`).textContent = `lose`;
    tries--;
    document.querySelector(`.numtries`).textContent = tries;
  } else if (playerChoice === `rock` && computerChoice === `scissor`) {
    document.querySelector(`.result`).textContent = `win`;
    score++;
    tries--;
    document.querySelector(`.dispscore`).textContent = score;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(`.disphighscore`).textContent = highScore;
    document.querySelector(`.numtries`).textContent = tries;
  } else if (playerChoice === `paper` && computerChoice === `scissor`) {
    document.querySelector(`.result`).textContent = `lose`; //look here
    tries--;
    document.querySelector(`.numtries`).textContent = tries;
  } else if (playerChoice === `paper` && computerChoice === `rock`) {
    document.querySelector(`.result`).textContent = `win`;
    score++;
    if (score > highScore) {
      highScore = score;
    }
    tries--;
    document.querySelector(`.numtries`).textContent = tries;
    document.querySelector(`.dispscore`).textContent = score;
  } else if (playerChoice === `scissor` && computerChoice === `rock`) {
    document.querySelector(`.result`).textContent = `lose`;
    tries--;
    document.querySelector(`.numtries`).textContent = tries;
  } else if (playerChoice === `scissor` && computerChoice === `paper`) {
    document.querySelector(`.result`).textContent = `win`;
    score++;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(`.dispscore`).textContent = score;
  } else {
    document.querySelector(`.result`).textContent = `tie`;
  }
});
