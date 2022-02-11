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

  //-------destructuring arrays returned form a function-------
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
  // passing an object into a function as an argument and function destructuring object
  //order delivery is a function that takes in an object
  //the object is immediately destructured by writing the properties of the object that is being passed in in currly braces in the ()
  // returns the items in the object & uses this to grab info from indexes in the functions' parent object
  //default values can also be set for the properties witrh equal sifgn
  orderDelivery({ starterIndex = 0, mainIndex = 2, address, time }) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      address,
      time
    );
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: '123 Neat Rd',
  starterIndex: 0,
});

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

//  ------- DESTRUCTURING OBJECTS ------
//use curly braces to destructure objects // use property names you want to grab from object (order does not matter) and set equal to object variable name
const { name, openingHours, categories } = restaurant;

//to change name of variables list property name, use colon and than write the variable name you want to hold info
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//default values set by using = after the variable name ... in example below because the property menu does not exist empty array will be returned else would receive undefined

const { menu = [], starterMenu: starters = [] } = restaurant;

//mutating variables
let aa = 111;
let bb = 999;
const obj = { aa: 23, bb: 7, cc: 14 };
//wrap destructuring assignment in parentheses because can't start with curly braces
({ aa, bb } = obj);

//nested objects
//balance the nested object name wrapped in curly braces & it's properties you are reaching for wrapped in curly braces WITH name of nested object's parent object --- will not return the nested object... call for names of properties or updates variable names -- can also return object as a whole
const {
  fri,
  fri: { open: oo, close: cc },
} = openingHours;

console.log(oo, cc, fri);
