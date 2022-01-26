'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
//to select all elements of a class name use querySelectorAll
//the elements can then be looped through like an array using the variable name for the elements selected by class as the 'array' name
const showBtns = document.querySelectorAll('.show-modal');

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

console.log(showBtns);

for (let i = 0; i < showBtns.length; i++)
  showBtns[i].addEventListener('click', openModal);

//when inserting a named function as an argument in click event don't 'call' it with () or it will exicute immediatly
closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
