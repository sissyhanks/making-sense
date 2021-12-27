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
  // starting at the second item in temps array, loop through logic through to the end of array
  for (let i = 0; i < temps.length; i++) {
    //compare number in array to number held in max, if array item greater update that number to value held in max
    if (temps[i] > max) {
      max = temps[i];
    }
  }
    // value of min temp set to first temp in temps array
  let min = temps[0];
  // starting at the second item in temps array, loop through logic through to the end of array
  for (let i = 0; i < temps.length; i++) {
    //compare number in array to number held in max, if array item less, update that number to value held in max
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  const amp = (max - min);
  console.log(amp);
}

tempAmp(temps);