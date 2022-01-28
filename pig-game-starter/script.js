'use strict';

//selecting elements
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');
const scoreElZero = document.querySelector('#score--0');
const scoreElOne = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const currentScoreZero = document.querySelector('#current--0');
const currentScoreOne = document.querySelector('#current--1');

//variables
// number rolled
let dice;

scoreElOne.textContent = 0;
scoreElZero.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//context for which player is active
let activePlayer = 0;

const scores = [0, 0];
let score0 = 0;
let score1 = 0;

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  playerZeroEl.classList.toggle('player--active');
  playerOneEl.classList.toggle('player--active');
}

rollBtn.addEventListener('click', function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores);
  if (scores[activePlayer] >= 100) {
    document.getElementById(`win--${activePlayer}`).classList.remove('hidden');
  } else {
    switchPlayer();
  }
});
