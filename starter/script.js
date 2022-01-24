'use strict';
// console.log(document.querySelector('.message').textContent);

// select the text of the element with class of message and set it equal to new string to change text
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = '55';

// document.querySelector('.score').textContent = '45';

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 44;

// console.log(document.querySelector('.guess').value);

//event listeners need type of event and function to tell what to do 'event handler' is expected and the function value gets passed in
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
