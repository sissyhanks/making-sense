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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//Computing Usernames
//user names are an account owner's initials
const user = 'Steven Thomas Williams';
//begin by splitting owner names at spaces and sending full name to lowercase
//the split creates an array of each element broken up at split parameter
//because split returns an array map can be called immediately after split
//to get the first initial of each name have map return the item (character in this case) of each item in the array returned by split
//the items in the array created by map can then be joined with no spaces in order to create a string of each first initial to create user name
const userName = user
  .toLowerCase()
  .split(' ')
  .map(i => i[0])
  .join('');
console.log(userName);

//make user name creation a functional component that transforms user objects to hold a user name property
//take in an array (the accounts array) (and preforms username logic above to each name in the array)
//create user name takes in an array of objects and for each object in the array adds a new 'username' property which is set to the first initials from the account  owner property
const createUserName = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(i => i[0])
      .join('');
  });
};

createUserName(accounts);
console.log(accounts);

// calc print balance is a function that takes in the array of all account movements and calls the reduce method on the array and calculates the total balance and then prints that number to the balance__value dom element
const calcPrintBal = function (movements) {
  //arrow notation
  // take the accumulator and individual index items and put those into a situation where the accumulator is added to with the amount at each index item, start the acc at 0
  const bal = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${bal}€`;
};
calcPrintBal(account1.movements);

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

/////////////////////////////////////////////////MAP

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

//FILTER
// the filter method usually only needs to work with the currents array element, though it does gain access to the index and full array as well

const dep = movements.filter(function (mov) {
  //trying to create an array of deposits >> we wan't only positive numbers, so want to filter out the negative numbers

  // so we return only array items that are greater than zero

  return mov > 0;
});

console.log(dep);

//filter better than for of because no push to new array AND filter has hte ability to be chained with other methods

// to filter for withdraws bind a constant to a function that chains the filter method to the movements array and returns array items that are less than zero
// const draw = movements.filter(function (mov) {
//   return mov < 0;
// });
//arrow
const draw = movements.filter(mov => mov < 0);

console.log(draw);

const tot = movements.reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(tot);

//reduce can also get other items... accumulator holds the value & other items in the array can be manipulate or compared
// reduce for max item in array:
const max = movements.reduce((acc, mov) => (acc < mov ? mov : acc), 0);
// if acc is less than mov return the movement & set as acc if not return the value held in acc

console.log(max);
