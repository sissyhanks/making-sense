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
  //the object is immediately destructured by writing the properties of the object that is being passed in in curly braces in the ()
  // returns the items in the object & uses this to grab info from indexes in the functions' parent object
  //default values can also be set for the properties with equal sign
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

//---FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// the following code will log each menu item individually to the console
//lops ofer the array & gives access to each element of the array
for (const item of menu) console.log(item);

// the entries method will show the index number of the item in array .. returns an array for each item with item and index number from original array
for (const item of menu.entries()) {
  console.log(item);
}

//the index number is the first item in the array created by the entries method SO the following will iterate over the menu array and at each item will print index #+1 and then the item at that index
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//use destructuring the destructure the array created by the entries method
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//rest operator to put new arrays into array
console.log(...menu.entries());

console.log(menu);