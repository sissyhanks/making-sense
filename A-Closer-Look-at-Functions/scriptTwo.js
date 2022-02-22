'use strict';
//--IMMEDIATELY INVOKED FUNCTION EXPRESSIONS--
//when you need a function once & then want it to disappear (will help with async / await)
const runOnce = function () {
  console.log('this will run again');
};
runOnce();
//write function... not assigning it io a variable ... wrap in parenthasies to change statement into expression... and then call it immediatly after wrap
(function () {
  console.log('this will never run again');
})();

// as an arrow >> call to arrow to run, wrap in parentheses and cal immediately
(() => console.log('one time arrow'))();

//need this because of function scope, when we don't want variables to be overridden, IIFE used to ';hide' varaibles, keep them private

//--CLOSURES--
//not a feature that's explicitly used (not create manually)
// happen automatically in certain situations

const secureBooking = function () {
  //pC var can't be manipoulated from outside
  let passengerCount = 0;
  // sB function will return new function that updates pC var
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//booker is a var that now becomes a function when set = to sB function >> it becomes the function sB returns
const booker = secureBooking();

//when secure booking is called it goes on top of the stace, creates the booker funciton in the global scope and then leaves the stack

//each time booker is called passenger ++ and logs to console
//even though passenger count var is outside of the function that is returned by secureBooking and even though secureBooking is off of stack before the function returned held by booker is called
booker();
booker();
booker();

//this is where the closure happens... a closure makes a function remember all of the variables present at a functions birth place ... since the function has access to the var in teh environment that returns it... the returned function remembers the var
//the fact that the function always has access ot the variable environment in which it was created is closure>>the connection a function has to the execution context where it was created>> teh returned function closes over the variable environment it was created in

//access the closure "look inside" the closure with console.dir(the var holding returned function)

console.dir(booker);
//will show scope and where it came from  >> [[cant ACCESS the info]]... but see it

//--CLOSURES EXAMPLES--
//when a variable is declared outside of a funciton, but then is used to declare a function inside of a function it will still carry the conext of the place where the function was declared
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//f becomes a different function after being reassigned by h
h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // teh function in setTimeout will run 3 seconds (or whatever time is set in the second parameter of set timeout) it is a call back function and has access ot all of the variables from teh home it was created in because of callbacks
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are three groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};
//if a variable that the function needs is in the global scope it will only use it if the variable isn't defined in the scope it was created in

boardPassengers(180, 3);
