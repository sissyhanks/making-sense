'use strict';

//selecting elements
const scoreElZero = document.querySelector('#score--0');
const scoreElOne = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

scoreElOne.textContent = 0;
scoreElZero.textContent = 0;
diceEl.classList.add('hidden');

function rollNumber() {
  let number = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${number}.png`;
  diceEl.classList.remove('hidden');
}
