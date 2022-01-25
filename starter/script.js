'use strict';

//set opening score value
let score = 20;
let highScore = 0;

// create secret number to be guessed
let secretNumber;

// function that will reduce score count and update .score display with score total
function makeSecret() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

function newScore() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  }
}

// function that will update .message with loss notification; to be called if contestant uses last guess and guesses wrong
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
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    //not winning guess
    // calculate score
    // ternary operator to set message string if guess too high or low
    //run loss if score is at zero
    newScore();
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? `Too high. Guess again.`
          : `Too Low. Guess again.`;
    } else {
      loss();
    }
  }
});

//////////CODING CHALLENGE 1/////////////
// allow game to be reset

//selecting .again button to add event listener
document.querySelector('.again').addEventListener('click', function () {
  //set a new secret number and reset score count
  makeSecret();
  score = 20;
  //reset initial body, message number and score values
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = ' ';
});

// call initial secret number function to start game
makeSecret();
