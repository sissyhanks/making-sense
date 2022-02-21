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
