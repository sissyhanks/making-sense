'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //order is a function that takes in the index position of desired items on starterMenu & mainMenu
  //it returns an array
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //destructuring arrays returned form a funciton
};

//destructuring is unpacking values into separate variables
const arr = [3, 4, 5];
//retrieve elements from array and store into variables >> without destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// with destructuring all variables can be declared at the same time
// the syntax on the left looks like an array, but it is the destructuring assignment
const [a, b, c] = arr;

//leave a space for elements you don't want to return
let [first, , second] = restaurant.categories;

console.log(first, second);

//without destructuring to switch variable values, make a holder for one variable, reassign th variable who's value is being held to other variable, then reassign other variable to the value of the held variable
// const temp = first;
// first = second;
// second = temp;

// with destructuring assign variables on left and the variable bindings you want in an array on the right
[first, second] = [second, first];

//destructuring to receive two return values from a function  .. otherwise will get an array of values
const [starter, main] = restaurant.order(1, 0);

//nested arrays
const nestArr = [1, 2, [3, 4]];
//the following will return a number and an array
const [i, , j] = nestArr;
//the following will return three numbers
const [k, , [l, m]] = nestArr;

//default values >> if just [p, q, r] r will return undefined, but setting default values will return default value if nothing in array position
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
