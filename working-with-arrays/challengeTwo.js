'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogYears = [1, 2, 3, 4];
// const dogYears = [5, 2, 4, 1, 15, 8, 3];
const dogYears = [16, 6, 10, 5, 6, 1, 4];

//calcAverageHumanAge is a function that takes in an array of dog ages, maps a new array of ages adjusted to human years, filters out ages that are under 18 human years and reduces remaining ages to a cumulative total and divides by two and ultimately returns the average age of all human year adult dog

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );

  const adultDog = humanAges.filter(humanAge => humanAge >= 18);

  const averageAdultAge =
    adultDog.reduce((acc, cur) => acc + cur, 0) / adultDog.length;

  console.log(humanAges);
  console.log(adultDog);
  console.log(averageAdultAge);
};

calcAverageHumanAge(dogYears);
