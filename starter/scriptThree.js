//---SETS---
//mostly used to remove duplicate values from arrays
//sets are a collection of unique values // can not have duplicates

//new Set() creates a new set and an iterable (most commonly an array) needs to be passed in
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
//the set will only return unique items and the return will look like an array return and is iterable
//but unlike array all of the elements of a set are unique and the order of elements is irrelevant
console.log(orderSet);

//strings are also iterables and a new set based on a st4ring will return each unique character in the string
console.log(new Set('bernie'));

// to get the size of a set use .size >> wil return number of elements in set
console.log(orderSet.size);

//check to see if sn element is present in a set by using .has() and passing in the item you are checking for >> will return a boolean ((arrays method is .includes))
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

//.add() will add element passed in to the set it is called on
orderSet.add('Pop');
console.log(orderSet);

//.delete() will remove whatever is passed in from the set
orderSet.delete('Pizza');
console.log(orderSet);

//sets do not have indexes and values can not be retrieved from a set >> they are used only when you need to know if something is present
//clear a set with .clear()

//loop over set
for (order of orderSet) console.log(order);

//create unique array
const staff = [
  'waiter',
  'manager',
  'busser',
  'manager',
  'busser',
  'waiter',
  'manager',
  'waiter',
];

//whats going on, set is creates and then the spread operator is used to unpack set and place it in array
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const staffList = [...staffUnique];
// console.log(staffList);

// but new Set can immediately be deconstructed
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//can find size add & has, but can't deleet dirtectly (will return boolean)
console.log(new Set('bernadettelouiseschweitzermcknight').size);
console.log(new Set('bernadettelouiseschweitzermcknight').delete('t'));
