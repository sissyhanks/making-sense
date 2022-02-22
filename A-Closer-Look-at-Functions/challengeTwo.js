'use strict';

// this function is immediately called and removed from the stack
(function () {
  // header is set as the h1 element
  const header = document.querySelector('h1');
  //when function runs header will change to red >> and then function is done & is removed from stack
  header.style.color = 'red';
  //this event listener function is also declared when the og function runs
  document.body,
    addEventListener('click', function () {
      //everything inside of the main function is connected to what is inside the event listener function, it can still reach the header var because of closure connecting the environment at creation to the created function
      header.style.color = 'blue';
    });
})();
