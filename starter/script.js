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
  numGuests: 0,

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`this pasta is made with ${ing1}, ${ing2}, and ${ing3}`);
  },

  // orderPizza if a function that takes in a list of strings. it returns the first string as a variable named mainIng and uses the spread operator to return the remaining strings in an array named otherIng
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
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

// --- THE SPREAD OPERATOR ___
// used on the right hand side of the assignment operator
// use to build arrays or pass multiple values into a function ny expanding array into individual elements
const sArr = [7, 8, 9];
///the ... is the spread operator and in essence picks out sArr[0], sArr[1], sArr[3]
const sArrNew = [1, 2, ...sArr];

//the following creates a new array just taking all the elements from og array & adding new element
const newMenu = [...restaurant.mainMenu, 'gnocchi'];

//shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const wholeMenu = [...newMenu, ...restaurant.starterMenu];

//use spread operator on string
const bernie = 'bernie';
const letters = [...bernie, '', 's.'];

// const ing = [
//   prompt("Let's make Pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ing);

// copying an object... make shallow copies & add items too
const newRestaurant = { foundedIn: 1998, ...restaurant, owner: 'Bernie' };

// --- REST PATTErNS AND PARAMETERS __
// used on the left hand side of assignment operator with destructuring
// use ... to collect multiple elements and condense them into an array

//the following assigns first two elements to aaa & bbb and puts the REST into a new array called others
const [aaa, bbb, ...others] = [1, 2, 3, 4, 5];

// one rest operater can be used in any destructuring assignment & must be at the end of assignments
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

const { sat, ...weekdays } = restaurant.openingHours;

//rest parameters

// add is a function that takes in a list of numbers and uses the rest operator to condense them into an array named numbers. the varable total is declared with the value zero within the fuinction and the numbers array is looped over, the value at each position added to total and once the end of the array is reached the final value of total is logged to the console

const add = function (...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) total += numbers[i];
  console.log(total);
};

// add(5, 6, 7);
// add(1, 2, 3, 4, 5);
// add(2, 3, 4, 5, 6, 7, 8, 9);

// to put the values from an array into a function's parameter spread the array in the function call parameter... and in this example the units will then get repacked into an array
const x = [4, 5, 6];
add(...x);

restaurant.orderPizza('cheese', 'sauce');

//-----SHORT CIRCUITING ____
//logical operators can use and return any datatype AND they do short circuit evaluation
//SC if the first value is truthy then it will be returned and the other opperant won't even be evaluated

// empty string 0 and undefined are falsie will be short circuited
console.log('---OR ||---');
console.log('' || 'Bernie');
console.log(0 || true);
//null and undefined are both falsie and will return last value
console.log(null || undefined);
//short circuiting is when a value before the end of the list of comparisons is tru & the remaining balances are not evaluated

// guests1 is a variable set to the number of guests in the numGuests property of the restaurant object
// a ternary operator is used to set the default value to 10 if the property numGuests does not exist the value is
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// guests2 is a variable that will evaluate the restaurant object for a numGuests property and return the value set, if the property does not exist OR if the value of the property is zero it will come back as falsie and the default value of 33 will be returned.
const guests2 = restaurant.numGuests || 33;

console.log(guests1);
console.log(guests2);

// with and operator the evaluation short circuses when an operant is falsie does not look at any operants after first falsie
console.log('---AND &&---');
console.log(3 && 'true');
//following example stops at & returns undefined
console.log('house' && true && undefined && 16);

//using if statement to check if a certain property or value exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'eggs');
}
// using && short circuiting to check
//if the first property exists the code in the second will be evaluated and executed.
restaurant.orderPizza && restaurant.orderPizza('sauce', 'mushrooms');

//nullish coalescing operator
console.log('---nullish ??---');
// nullish values are null and undefined ... zero and false are falsie but not nullish
//if the restaurant property numGuests is zero the nullish operator will return zero instead of the default value when the nullish operator is used
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
