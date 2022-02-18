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

//---MAPS---
console.log('---MAPS---');
//maps are used to map values to pairs ... and keys can have any types (string, number, objects, other maps) (object needs to have string)

//new Map() creates map
//.set() fills up Map with what ever is passed in
const rest = new Map();
rest.set('keyName', 'key Value');
console.log(rest);
//set updates map and returns entire new map
rest.set(1, 'town name');
console.log(rest.set(2, 'second town name'));
//.set can get chained
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('rating', '****')
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest);

// use .get() method to read data from a map >> pass in key to get the data >> fyi data type of key matters
console.log(rest.get('rating'));

//can use get() inside of get() to drill into map values
const time = 29;
console.log(rest.get(time >= rest.get('open') && time < rest.get('closed')));
//because the && logic will return true or false and the key in the map is true & false >> dont need to ternary logic our the open & close message

//check to see if map contains a certain key has method will return a boolean
console.log(rest.has('closed'));
// delete will take out a key value pair
rest.delete('rating');
console.log(rest);
//.size shows number of elements and teh clear method clears the map rest.clear()
console.log(rest.size);

// make an array the key of a map >> create array and set the variable name as the key
const arrTest = [1, 4];
rest.set(arrTest, 'test');
console.log(rest.get(arrTest));

//can add dom elements (which wilbe set as objects) as keys
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

//--MAPS ITERATION__
//create new map from scrach directly in the code by creating an array of arrays within map  & set method to add new items
const questions = new Map([
  ['question', 'what is the best pgl'],
  [1, 'c'],
  [2, 'java'],
  [3, 'Js'],
  ['correct', 3],
  [true, 'YESSS :)'],
  [false, 'try again'],
]);

console.log(questions);

//convert object to map
const openingHours = {
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
};

console.log(Object.entries(openingHours));
// because Object.entries returns an array of arrays you can use it to cerate new map of the returned arrays
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iterate over map // deconstruct the item into key and value // can look for data type etc of key and only log values of those that are consistent
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(value);
  }
}
// const answer = Number(prompt('what is your answer'));
// console.log(answer);

// console.log(questions.get(answer === 3));
//but since we want to use the key... ned to set the key that will equal the value that will make true
// console.log(questions.get(answer === questions.get('correct')));

//convert map to array >> use spread operator on map to create array >> cal also get only keys or values in array
console.log([...questions]);
console.log([...questions.keys()]);
