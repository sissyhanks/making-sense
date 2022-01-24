'use strict';
// console.log(document.querySelector('.message').textContent);

// select the text of the element with class of message and set it equal to new string to change text
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = '55';

// document.querySelector('.score').textContent = '45';

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 44;

// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

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
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `too high. guess again`;
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `Too Low. Guess again.`;
  }
});
