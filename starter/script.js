'use strict';

//set opening score value
let score = 20;

// create secret number to be guessed
const secretNumber = Math.trunc(Math.random() * 20) + 1;

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

  if (!guess || guess > 20) {
    //error handling if no guess
    document.querySelector('.message').textContent =
      'Please enter a number between 1 and 20!';
  } else if (guess === secretNumber) {
    //winning guess
    // change body background to green
    // display secretNumber in and widen .number box
    // send winning message to .textContent
    document.querySelector(
      '.message'
    ).textContent = `Yes! The secret number is ${secretNumber}. You win!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    //too high
    newScore();
    if (score > 0) {
      document.querySelector('.message').textContent = `Too high. Guess again.`;
    } else {
      loss();
    }
  } else if (guess < secretNumber) {
    //too low
    newScore();
    if (score > 0) {
      document.querySelector('.message').textContent = `Too Low. Guess again.`;
    } else {
      loss();
    }
  }
});
