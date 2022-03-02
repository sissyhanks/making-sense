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

- for each is a higher order function that exicutes a callback on each itteration of the loop passing the array's current element at each position
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

### Creating DOM Elements

### Data Transformations: map, filter, reduce

### The map Method

### Computing Usernames

### The filter Method

### The reduce Method

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
