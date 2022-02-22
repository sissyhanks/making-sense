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
