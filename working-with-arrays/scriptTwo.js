'use strict';

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//movements in euros
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//if one euro - 1.1 dollar
const euroToUsd = 1.1;

//to convert movements to dollars , multiply by 1.1

//because the map method returns a new array, save the function to a variable

//the map method takes in a callback function which takes in the current array element in as an argument
const movementsUsd = movements.map(function (mov) {
  //return the value we want the new array to have in the current position
  return mov * euroToUsd;
});

//in e6
const movementsUsdArr = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUsd);
console.log(movementsUsdArr);

//for of loop does the same thing * declare empty array to push the outcome of each iteration to * for each mov in movement array multiply by euro conversion rate and push to new array

const movUSD = [];
for (const mov of movements) movUSD.push(mov * euroToUsd);

console.log(movUSD);

//map also gives access to individual item, iteration number and full array ... by naming the function it becomes a new array of transformed information returned by logic ... the map method grabs all of teh items becasue it is what is calling the function inside of it

const movDes = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `map ${i + 1} deposit $${mov}`;
  } else {
    return `map ${i + 1} withdrawal $${Math.abs(mov)}`;
  }
});

console.log(movDes);

// for each does work in each iteration, map creates no side effects >> it just builds a new array
