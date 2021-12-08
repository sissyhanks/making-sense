// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Create a 'calcTip' function to calculate tips and total values (bill + tip) for every bill value in the bills array. Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. Use a for loop to perform the 10 calculations!
// 4. Bonus:Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//calcTip function takes in a number and returns a percentage of that number
// returns 20% (number times .2) if number is greater than or equal to 50 and number is less than or equal to 300
// returns 15% (number times .15) if number is less than  50 or number is greater than 300

const calcTip = function(number) {
  return (number >= 50 && number <= 300 ? number * .2 : number * .15);
}




console.log(calcTip(200));