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

// ---WORKING WITH STRINGS 2---
//transform sdchrachters toi upper or lowecase
console.log(arline.toLowerCase());
console.log(arline.toUpperCase());

const passenger = 'bErNiE';
//to make 1st upper only first convert all to lower case in new varaible
const passengerLower = passenger.toLowerCase();
console.log(passengerLower.slice(1));
// next take first character and upper it (dont forget to call ()) & add the rest of the lower name sliced at 1 index
const passengerFix = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerFix);

//use case, compare email
const email = 'bernie@email.com';
const loginEmail = '  BerNie@emAIL.cOm \n';
//first step convert entry to lower case
lowerEmail = loginEmail.toLowerCase();
//remove whitespace
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//becuse method returns a string can chain methods can do both in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing >> replace works on first occurrence
const priceGB = '540,77£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'Al passengers come to boarding door 23. Boarding door 23.';
//replaceAll is a thing!!
console.log(announcement.replaceAll('door', 'gate'));
//or use regular expression >> write thing to be replaced between slashes with g following to indicate global
console.log(announcement.replace(/door/g, 'gate'));
//string methods that return booleans
const aPlane = 'A320neo';
console.log(aPlane.includes('A320'));
console.log(aPlane.startsWith('Air'));
console.log(aPlane.endsWith('eo'));

//practice exercise
const checkBaggage = function (items) {
  //set to lower case
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you may not check your bag');
  } else {
    console.log('you are ready to go!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('i have socks and Shoes');
checkBaggage('Got some chips and a gun for protections');
