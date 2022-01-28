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
const win = document.querySelector('.win');

//variables
// number rolled
let dice;
let currentScore = 0;
//context for which player is active
let activePlayer = 0;
let playing = true;

scoreElOne.textContent = 0;
scoreElZero.textContent = 0;
diceEl.classList.add('hidden');

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
  if (playing) {
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
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(scores);
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .getElementById(`win--${activePlayer}`)
        .classList.remove('hidden');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', function () {
  win.classList.add('hidden');
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  //context for which player is active
  activePlayer = 0;
  playerZeroEl.classList.add('player--active');
  playerOneEl.classList.remove('player--active');
  playing = true;
  scoreElOne.textContent = 0;
  scoreElZero.textContent = 0;
  diceEl.classList.add('hidden');
});
