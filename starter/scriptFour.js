//---WORKING WITH STRINGS SLICE & INDEX OF---
const arline = 'TAP Air USA';
const plane = 'A320';

//can return characters in a string based on position // also . length
console.log(plane[0]);
//amd directly on a string
console.log('B737'[1]);

//string methods
//index of returns first occurrence of character .. also lastIndexOf returns last .. also combos of characters
console.log(arline.indexOf('A'));
// slice ... needs index as reference // will return everything from the position referenced on
console.log(arline.slice(4));
//slice only returns info, does not change the string BECAUSE strings are primitives and can't be mutated
//can add end point of return as well
console.log(arline.slice(4, 7));
//will return the item at the first index and the item before the last index >> the length of t he extracted string will be the end minus the beginning index numbers
// return only 1st word by combining slice and index of
console.log(arline.slice(0, arline.indexOf(' ')));
// when returning based on index of in first position, if you don't want it included need to add +1 to move start index over
//negative index counts backwards from end >> end index begins at 1
console.log(arline.slice(-2));
console.log(arline.slice(2));

//checkMiddleSeat is a function that takes in a string, the last character of which indicates the seat position (middle, isle window) slices the string at -1 so only the last character remains and then compares it to middle seat key
const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  s = seat.slice(-1);
  //ok look .. can't just put the desired outcome after the logical operator, need all the logic
  s === 'B' || s === 'E'
    ? console.log('you are in the middle!')
    : console.log('you are the heel');
};

checkMiddleSeat('11B');
checkMiddleSeat('23A');
checkMiddleSeat('4E');
