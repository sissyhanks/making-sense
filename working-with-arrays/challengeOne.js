'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
//use slice to retrun the items in the array that aer after the first index and before the second to last index

const djOne = [3, 5, 2, 12, 7];
const dkOne = [4, 1, 15, 8, 3];

const djTwo = [9, 16, 6, 8, 3];
const dkTwo = [10, 5, 6, 1, 4];

// 2. Create an array with both Julia's (corrected) and Kate's data
//concat the sliced copy of julia's dogs and all of kate's dogs

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
//run for each loop, using the entries method to access the index number and build up the corect string based on age logic
const checkDogs = function (dogsJulia, dogsKate) {
  const dogs = dogsJulia.slice(1, -2).concat(dogsKate);

  for (const [i, dog] of dogs.entries()) {
    const lab = `Dog number ${i + 1} is `;
    if (dog < 5) {
      console.log(lab + `still a puppy 🐶`);
    } else {
      console.log(lab + `an adult, and is ${dog} years old`);
    }
  }
};
checkDogs(djOne, dkOne);
checkDogs(djTwo, dkTwo);
