'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const home = document.querySelector('.back-home');
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

function goHome() {
  location.href = '../index.html';
}

console.log(showBtns);

for (let i = 0; i < showBtns.length; i++)
  showBtns[i].addEventListener('click', openModal);

//when inserting a named function as an argument in click event don't 'call' it with () or it will execute immediately
closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//no matter where in page action happens event will occur when document is listened to
//the function is taking in the event object ... info about what is happening... key down will have the key that was keyed
//so draw out the info desired and fire close on Escape down
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //adding extra special condition to only execute if the modal isn't hidden
    closeModal();
  }
});

//new nav button added --- script to return to home page on click
home.addEventListener('click', goHome);
