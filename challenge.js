// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Create a 'calcTip' function to calculate tips and total values (bill + tip) for every bill value in the bills array. Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. Use a for loop to perform the 10 calculations!
// 4. Bonus:Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52


// declare variables, all arrays that hold numbers
//tips and totals hold values generated by & pushed from calcTip function


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//calcTip function takes in a number and holds a percentage of that number in a variable named percent
// returns 20% (number times .2) if number is greater than or equal to 50 and number is less than or equal to 300
// returns 15% (number times .15) if number is less than  50 or number is greater than 300
// also calculates total bill by adding percentage to number and holds bill total in variable named total
//adds percent to the end of the tips array & adds total to end of totals array

const calcTip = function(number) {
  let percent = (number >= 50 && number <= 300 ? number * .2 : number * .15);
  let total = percent + number;
  // console.log(percent, total);
  tips.push(percent);
  totals.push(total);
}

// for loop iterates over the numbers in bills array and runs each through the calcTip function
// loop starts at the value at the first position of the array [0] and runs function on the value at each position until it has run the length of the array 

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

console.log(tips);
console.log(totals);

//function 'calcAverage' takes in array 'arr', declares 'total' variable at value 0 and sets up average variable
// runs for loop that adds all number values from 'arr' to the 'total' value, 
// when loop is finished 'total' value is divided by the number of number values in 'arr'

const calcAverage = function(arr) {
  let total = 0;
  let average;
  
  for (let i = 0; i < arr.length; i++) {
    total = arr[i] + total;
  }

  average = total / arr.length;

  console.log(average);
}

//test array with average equaling six to test 'clacAverage' function
const six = [6, 4, 8];

calcAverage(six);
calcAverage(bills);
calcAverage(tips);
calcAverage(totals);
