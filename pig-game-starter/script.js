'use strict';

//selecting elements
const scoreElZero = document.querySelector('#score--0');
const scoreElOne = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

scoreElOne.textContent = 0;
scoreElZero.textContent = 0;
diceEl.classList.add('hidden');
