'use strict';
//--DEFAULT PARAMETERS--
//have some parameters set by default so do not have to pass in manually incase default should not change

//booking is an array that will hold the flight info passed into creatBooking function
const bookingArr = [];
//createBooking is a function that takes THREE parameters in a string & two numbers (flight number, number of passengers, & price) and uses a template literal to create an object of the information passed in
//to set defaults in ES6 can just set paramater to the defauilt & it will be over written if something else is passed in
const createBooking = function (flightNum, numPassengers = 1, price = 195) {
  // in es5 use short circuiting to check for falsie (undefined) of parameters sop if nothing is passed in then the value will go to default *** default can hold expression incluting values based on previously declared function parameters
  // numPassengers = numPassengers || 1;
  // price = price || 195;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArr.push(booking);
};

createBooking('LH454');
createBooking('LH666', 14, 66);
//if you need to skip a parameter set it to undefined to leave at default
createBooking('HT789', undefined, 55);

//--PASSING ARGUMENTS INTO FUNCTIONS--
//---VALUES vs REFERENCES---
const flight = 'LH123';
const bernie = {
  name: 'Bernie McKnight',
  passport: 123234456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH676';
  passenger.name = 'Mrs. ' + passenger.name;

  // if (passenger.passport === 123234456) {
  //   alert('check in');
  // } else {
  //   alert('wrong passport');
  // }
};

//here the flight variable stays the same... and the bernie object is updated
//flight number is a copy of the flight variable, not the og string
console.log(flight);
//the object reference type is what is passed into function and is pointing the the same bject and will manipulate the thing pointed to.
console.log(bernie);

//pass a primitive to a function,,, it is like a copy... pass an object to a function alters object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

//the function is manipulating the person object and updating the info
newPassport(bernie);
//and then messing up the passport check in part of this function
checkIn(flight, bernie);
console.log(bernie);

//passing by value && passing by reference
//JS only passes by value

//---FIRST CLASS AND HIGHER ORDER FUNCTIONS---
//first class function : functions treated as values

//functions can be variable's in other functions & passed into functions

//functions can be returned from other functions

//functions are objects and objects have methods, so functions have methods that can be called on other functions

//first class functions allow higher order function:
//functions that receive other functions

//add event listener is a higher order function because it is a functions that takes in a function (what to do on event) as an input --CALL BACK FUNCTION-- is the one passed in, because it is called by the event function

//FIRST CLASS means the functions are values
//HIGHER ORDER FUNCTIONS are the use of first lass functions in functions

//---FUNCTIONS ACCEPTING CALLBACK FUNCTIONS---

// oneWord is a function that takes in a string, replaces all spaces with no space and converts to lowercase
const oneWord = function (string) {
  return string.replace(/ /g, '').toLowerCase();
};

// upperFIrstWord is a function that takes in a string, separates it by spaces, destructors split return to grab first word and returns an array that as the first word in all caps and the rest of the items from teh original string joined with spaces between
const upperFirstWord = function (string) {
  const [first, ...rest] = string.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

//transformer is a HIGHER ORDER function that takes in a string and a function and prints a string that uses the callback function to preform an operation on the passed in string & a string that returns the name property of the functions passed in
const transformer = function (str, fn) {
  console.log(`transformed string: ${fn(str)}`);
  //because functions are objects they have properties ... like name
  console.log(`transformed by: ${fn.name}`);
};
transformer('js is the best', oneWord);
transformer('js is the best', upperFirstWord);

const highFive = function () {
  console.log(55555);
};
//because even listener takes in a string to signify event and a function the highFive function logs to console when the pae is clicked >> in the add event listener function the callback function is called the event handler & is called when the event occurs
document.body.addEventListener('click', highFive);
const myArr = ['mom', 'dad', 'daughter'];
// for each is also a callback function the function high five is called d& 55555 is logged at each index of the array
myArr.forEach(highFive);

//callbacks allow code to be small & split up
//callback function allow us to create abstractions >> hide detail of code implementation because we don't care about the detail, so we can solve problems at a higher lever
//like in transformer above, it just wants to transform a string, not what is happening or how it works >> thats what the call back function is for
//HIGHER ORDER FUNCTION >>> HIGHER LEVEL OF ABSTRACTION

//---FUNCTIONS RETURNING FUNCTIONS---

//greet is a function that returns a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//as an arrow fuinction >> aGreet is a function that takes in a string and within that function is another function that takes in a string and then both strings are logged to the cosole.
const aGreet = greeting => person => console.log(`${greeting} ${person}`);
// greeter hey is now the function inside of the greet function >> the greeting being hey
const greeterHey = greet('hey');
const greeterHello = greet('hello');
// when greeter hey is called  the string passed into it is the name that will appear in the string and the greeting of the string is defined by the greeter hey function
greeterHey('bernie');
greeterHey('bobb');

greeterHello('bernie');

// once the greet function is called the interior function can get called immediately
greet('nice to see you')('dork');

// yo returns the function that takes in a string and logs message to console, & holds value based into aGreet to use within , adding value passed into yo when it is called
const yo = aGreet('yo');
yo('dog');

//---THE CALL AND APPLY METHODS---
const lufthansa = {
  airline: 'Lufthanse',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight number ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'bernie');
lufthansa.book(554, 'bill');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//use the function from LH object & book becomes a regular function NOT a method ... but `this` now points to undefined
const book = lufthansa.book;

//this won't work... this is pointing to undefined
// book(33, 'tom');

//call is a function method
//with call method the first argument is what we want the this keyword to point to
book.call(eurowings, 23, 'bill ned');
//with call ... call is what is being called and the call method calls the book function
book.call(lufthansa, 666, 'the devil');

//apply method
//APPLY does not receive a list of arguments, but an array
const fData = [667, 'a man'];
book.apply(lufthansa, fData);

// but actually just use the spread operator to spread out the arguments from an array
book.call(eurowings, ...fData);

//---THE BIND METHOD---
//bind allows us to set the this key word for a function ... does not call the function rut returns a new function where the this keyword is bound
//bookEw is a new book functions with this kw bound ot eurowings
const bookEw = book.bind(eurowings);
bookEw(678, 'a boy');

// you can bind any argument
const lh224 = book.bind(lufthansa, 224);

lh224('tom jones');

// bind >> objects & event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//in event listener this points to element handling event
// so when passing ijn the function to the event listener use the bind to tell where to point this
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partiualk application meant se can preset paramaters
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

//bund another value
//since the function does not have a this can pass null in first... then the const parameter for the function
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(500));
//different from setting default because is a whole new function

const taxIt = rate => value => console.log(value + value * rate);
// taxIt takes in rate and holds it so when aVAT is called on the value that is being taxed it will return VAT added amount
const aVAT = taxIt(0.23);
aVAT(1000);
