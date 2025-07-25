'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  let displayMessage = message =>
    (document.querySelector('.message').textContent = message);

  let displayNumber = number =>
    (document.querySelector('.number').textContent = number);

  let displayScore = score =>
    (document.querySelector('.score').textContent = score);

  //When no guess
  if (!guess) {
    displayMessage('⛔️ No number!');
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('⛔️ You lost the game!');
      displayScore(0);
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');

    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
