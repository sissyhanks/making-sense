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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
