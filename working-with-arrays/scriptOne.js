'use strict';
//methods are functions we can call on objects... they are attached to objects
// since arrays have methods that means they are objects & have methods attached
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
//--SLICE-- returns a new array with only extracted parts takes two parameters, the index of teh first item you want returned & the index after the last item you want returned :: or leave second parameter blank to return to the end of the array :: the length of output wil be end parameter minus beginning parameter :: enter a negative parameter to start return from end of array, wil return as many items as number of parameter (-1 is always last number of array) >> can also put negative parameter as second parameter to count back from last item in array :: to make array copy of array, can use slice with no parameter >> can chain functions after slice copy (as apposed to spread copy)

console.log(arr.slice(2));

//--SPLICE-- splice will mutate original array ... taking out any
const arrrr = arr.splice(1, 2);
console.log(arr);
console.log(arrrr);

//--REVERSE-- reverses array >> mutates original so original holds reversed !
const arr2 = ['q', 'p', 'o', 'n', 'm'];
arr2.reverse();
console.log(arr2);

//--CONCAT-- makes new array of 2 arrays ... could also do [spread, spread] and get new array of 2 arrays
const letters = arr.concat(arr2);
console.log(letters);

//--JOIN-- will join elements of an array into a string separated with characters specified inside parameter call
console.log(letters.join(' '));

//-----THE NEW AT METHOD---------
const arrAt = [23, 11, 64];

// the at method replaces traditional bracket notation for isolating items in an array
console.log(arrAt[0]);
console.log(arrAt.at(0));

//allows for the use of negitive indexes, instead of finding for length minus to get at values at the en of an array
console.log(arrAt.at(-1));

//at method will also allow for method chaining

//-------FOR EACH LOOP-------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for of loop to log if a transaction is deposit or withdrawal
// for (const movement of movements) {
//to gain access to each iteration count of the loop the .entries of movements are called (listing the key value pair of index, array item) which is then destructured into i, movement in the loop variable
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} deposit $${movement}`);
  } else {
    console.log(`Movement ${i + 1} withdrawal $${Math.abs(movement)}`);
  }
}

// forEach is a higher order function that requires a call back function
//loops over array & executes call back function on each iteration... passing in current element of array as argument >> here movement is
//access the current index in a for each loop
//a the for each method calls the callback function in each loop and passes in the current element of the array each time the function is called along with index and the entire array we are looping
//each part can be called in parameter list, the order is item, index, full array
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`forEach ${index + 1} deposit $${movement} of ${array}`);
  } else {
    console.log(
      `forEach ${index + 1} withdrawal $${Math.abs(movement)} of  ${array}`
    );
  }
});
//the result of for each is the same as for of loop, but works in that the call back function is called at each item of the array

// grabbing index is easier in for of, it is the second parameter to be passed in after value *(and the full array is accessible as the third parameter if desired)
//when using entries method to access the index in a for of loop the index will be the first variable deconstructed followed fby the value held fin that position

//for each loops can not be broken out of >> do not accept continue and break statements

//---forEach With Maps and Sets----

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, totalMap) {
  console.log(value, key, totalMap);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  console.log(value, key, set);
});
