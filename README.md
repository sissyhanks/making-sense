# making sense

> _When you reach the end of what you should know, you will be at the beginning of what you should sense._
>
> ~Kahlil Gibran

This repo contains my notes on the coding exercises from [Jonas Schmedtmann](https://codingheroes.io/)'s [Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/).

In addition to sharpening my JavaScript skills, I am approaching this course with the intention of developing my pseudo coding practice and creating excellent documentation.

## Sections

[JavaScript Fundamentals](https://github.com/sissyhanks/making-sense/tree/JavaScripFundamentals)

[Developer Skills](https://github.com/sissyhanks/making-sense/tree/DeveloperSkills)

[DOM and Events Fundamentals](https://github.com/sissyhanks/making-sense/tree/DOM-and-Events-Fundamentals)

[Data Structures and Modern Operators](https://github.com/sissyhanks/making-sense/tree/Data-Structures-and-Modern-Operators)

[A Closer Look At Functions](https://github.com/sissyhanks/making-sense/tree/A-Closer-Look-at-Functions)

## Working With Arrays

INDEX NOTES
Array indexes begin at 0 (the first item in an array is indexed zero)

### Simple Array Methods

- #### SLICE

  Slice is an array method that takes in up to two parameters that represent array item indexes and returns a new array made up of the items including the item at the first index parameter up until (not including) the end parameter.

  The new array is a shallow copy of the specified parameters, slice does not mutate the original array.

### The new at Method

- The at method works similarly to bracket notation in that it will return an array item based on the index number passed into the method.
- The at method allows for negative indexing, to count back from the end of an array, the last item indexing at -1
- The at method allows for method chaining
- The at method can also be used on strings

### Looping Arrays: forEach

- for each is a higher order function that executes a callback on each iteration of the loop passing the array's current element at each position
- at each position in the loop for each can pass in
  - the value held at the position
  - the index of the position
  - the entire array
    any or all can be put in the parameter list, they are accessed in the order listed above
- for each loops cannot be broken out of and do not accept break or continue statements

### forEach With Maps and Sets

- When working with a map the callback function the forEach method takes in can receive the parameters relating to the map's

  - value
  - key
  - total map

- When working with a set the callback function the forEach method takes in can receive the parameters relating to the set's
  - value
  - key
  - total set
- because sets have neither keys nor indexes there is no 'KEY', but the call back on for each access three values so value is repeated for key

- UNDERSCORE `_` is used as a variable naming convention when there is a throw away variable ... using it in the second parameter position when defining a the call back function in a forOf method on a set would be a use case example

### PROJECT: "Bankist" App

#### **Problem One: display customer transactions**

_in this app the action fields and account display are present, but invisible as opacity is set to 0_  
_when a customer logs in the information saved in their account object is used to calculate balance and generate account information divs and all fields are rendered fully opaque_

- remove divs with hardcoded values
- insert new divs for each transaction in descending order
- display the amount of each transaction
- display the number (position in order) of each transaction
- label the type of transaction
- style transaction label based on transaction type

### Creating DOM Elements

- instead of working with global variables, pass in data for a function to use as a parameter

- [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) is a method for inserting HTML into the DOM by referencing a dom element  
  this method accepts two strings:
  - the first string represents the position, relieve to the dom element it is called on, that the HTML string will be inserted
  - the second argument is the string of HTML to insert

displayMovements is a function that takes in an array of numbers that represent banking transactions. Deposits are represented as positive numbers and withdrawals are represented with negative numbers

- the HTML that displays transactions is set to the class `movements`
- the variable `containerMovements` selects all elements classed as `movement`
- hard coded placeholder data is removed from the code hy setting the inner HTML of `containerMovements` elements to an empty string

- a `forEach` loop is called on each element of the array of transactions passed into the `displayMovements` function
- within the `forEach` callback function the value is denoted as `mov` and the index is denoted as `i`
- the `type` variable uses a ternary operator to evaluate weather `mov` is a positive or negative number and is set to the value `deposit` if positive or `withdrawal` if negative
- `html` is a variable set to a template literal pulled from the hard coded default `movement_rows` elements. Default values are replaces with `mov` and `i` where appropriate the display the transaction amount and number. `type` is inserted as text on the transaction type label as well as within the class tag to match corresponding css styling tag

- the js method `insertAdjacentHTML` is called on `containerMovements` with `afterbegin` positioning for descending order, and `html` passed in as the updated html string to be inserted into the page.

### Data Transformations: map, filter, reduce

these methods are used to preform data transformation
these methods create new arrays, transforming data from other arrays

- the map method is used to loop over array, applies a callback function to each element in the array and pushes the transformed data to a new array. It 'maps' the values of the original array to a new array.

- the filter method is used to filter for elements in the original array that satisfy a given condition and pushes those elements into a new, filtered array

- the reduce method reduces all array elements into one single value; an accumulator variable which gets all element to be counted added to it

### The map Method

- map is a more functional approach than using a for each loop

- declare a variable and set it equal to an instance of the map method and the variable will be set to an array (the new array transformed by the parameters in the function)

- the map method gives access to (a, b, c)
- - a) the value of an item in an array's index
- - b) the item's index position number
- - c) the entire array

### Computing Usernames

createUserName is a function that takes in an array of objects and adds to each a property named username paired with a string created by separating the string value associated with the object's owner property at at the empty strings within the value and joining the first characters of each separated string

### The filter Method

- the filter method gives access to (a, b, c)
- - a) the value of an item in an array's index
- - b) the item's index position number
- - c) the entire array

the filter method is used on arrays and will return items in teh array the meet the condition the function calls for

### The reduce Method

- the reduce gives access to (a, b, c, d)
- - a) the accumulator
- - b) the value of an item in an array's index
- - c) the item's index position number
- - d) the entire array

reduce boils down all elements in an array to one single value

the accumulator is where the values from the array will be added to

the reduce method takes in a call back function (which iterates though the array adding the value of each item to the accumulator) as well as the start value for the accumulator

### The Magic of Chaining Methods

### The find Method

### Implementing Login

### Implementing Transfers

### The findIndex Method

### some and every

### flat and flatMap

### Sorting Arrays

### More Ways of Creating and Filling Arrays

### Which Array Method to Use?
