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

console.log(`the amplitude from problem one is ${amp}`);

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const arr = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  //instead of pushing small chunks of strings to an array and concatenating those i can add the string generated in the template literal directly to the end of the forecast strung & update the value each iteration.
  // let messageArr = [];
  let forecast = "... ";

  for (let i = 0; i < arr.length; i++) {
    
    //instead of binding values to variable i can insert the array items them into the template literal
    // temp = arr[i];
    // day = i + 1;
    forecast = forecast += `${arr[i]}ºC in ${i + 1} days ... `
    // messageArr.push(forecast);
  }
  // for (let i = 0; i < messageArr.length; i++){
  //   message = message += messageArr[i];
  // }
  console.log(forecast);
}

printForecast(arr);