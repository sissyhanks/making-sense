'use strict';

//selecting elements
const scoreElZero = document.querySelector('#score--0');
const scoreElOne = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
// const scoreZero = document.querySelector('#score--0');
// const scoreOne = document.querySelector('#score--1');
// const currentScoreZero = document.querySelector('#current--0');
// const currentScoreOne = document.querySelector('#current--0');

//variables
// number rolled
let numberRolled;
//context for which player is active
let currentPlayer = true;

scoreElOne.textContent = 0;
scoreElZero.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

function rollNumber() {}

rollBtn.addEventListener('click', function () {
  numberRolled = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${numberRolled}.png`;
  diceEl.classList.remove('hidden');
  if (numberRolled !== 1) {
    currentScore += numberRolled;
    console.log(currentScore);
  }
});
