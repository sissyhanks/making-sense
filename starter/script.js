//code review: 
//you can put many operations inside of one if statement
//create a var and set it equal to the function call and that which is returned will be held in the variable and han be accessed through the variable.

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// problem
// smart home thermomotor company wants a way to calculate daily temp amplitude
// some reading will be an error

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// array of only numbers
let temps = [];
for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] === 'number') {
    temps.push(temperatures[i]);
  }
}

console.log(temps);

//a function that takes in the array of temperature data and returns difference between highest and lowest temps
const tempAmp = function (temps) {
  // value of max temp set to first temp in temps array
  let max = temps[0];
  let min = temps[0];
  // loop through logic through to the end of array
  for (let i = 0; i < temps.length; i++) {
    //compare number in array to number held in max / min, if array item greater / lower update that number to value held in max /min
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  return max - min;
}

const amp = tempAmp(temps);

console.log(amp);