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
