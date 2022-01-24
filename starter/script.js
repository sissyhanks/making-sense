'use strict';
// console.log(document.querySelector('.message').textContent);

// select the text of the element with class of message and set it equal to new string to change text
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = '55';

// document.querySelector('.score').textContent = '45';

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 44;

// console.log(document.querySelector('.guess').value);

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

function newScore() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  }
}

function loss() {
  document.querySelector('.message').textContent = `you are a loser. you lose`;
}

//event listeners need type of event and function to tell what to do 'event handler' is expected and the function value gets passed in >> the function passed in is only called on teh event happening

//so in the function passed into the event listener create a constant that holds the value entered in element with class of guess >> value will return as string so convert to number for later comparison
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //error handling if no guess
  if (!guess || guess > 20) {
    document.querySelector('.message').textContent =
      'Please enter a number between 1 and 20!';
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Yes! The secret number is ${secretNumber}. You win!`;
  } else if (guess > secretNumber) {
    newScore();
    if (score > 0) {
      document.querySelector('.message').textContent = `Too high. Guess again.`;
    } else {
      loss();
    }
  } else if (guess < secretNumber) {
    newScore();
    if (score > 0) {
      document.querySelector('.message').textContent = `Too Low. Guess again.`;
    } else {
      loss();
    }
  }
});
