// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// problem
// smart home thermomotor company wants a way to calculate daily temp amplitude
// some reading will be an error

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// array of only numbers
let temps = [];
for (let i = 0; i < temperatures.length; ++i) {
  if (typeof temperatures[i] === 'number') {
    temps.push(temperatures[i]);
  }
}

console.log(temps);

//a function that takes in the array of temperature data and returns difference between highest and lowest temps
const tempAmp = function (temps) {

}