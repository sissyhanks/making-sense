## Data Structures and Modern Operators

### Destructuring Arrays

- destructuring is unpacking values into separate variables
- with array destructuring all variables can be declared at the same time
- When square brackets are used on the left hand side of the assignment operator it is the destructuring operator
- The values inside of the array destructuring operator are the variable names for each of the items in the array being destructured and corporate to the array items by index
- If an item in an array is not to be declared as an individual variable, place a space and a comma and then declare then name for the next item in the array
- destructuring can be used to switch the names of variables by assign new variables names inside of the destructuring operator and assigning them to an array of current variable names on left and the variable bindings you want in an array on the right
- calling a function that returns a number of values will result in an array. The call can be declared with destructured variable names so individual returned values are immediately accessible
- for netted arrays, a variable name in the destructuring object at the same index as the nested array will hold the nested array.
- the destructuring operator can contain nested destructuring objects to declaim variable names for items in a nested array
- destructured variable declarations that have no corelative array index item will return undefined
- variables in the destructuring operator can be given a default value by using the assignment operator to set their value to what ever default is desired

### Destructuring Objects

- curly braces on the left hand side of the assignment operator is the object deconstruction operator
- objects are deconstructed by listing an object’s property names inside of the object deconstruction operator
- any or all property’s can be plucked from an object
- the order that properties are listed does not matter
- the names of deconstructed properties will become variables
- to change the variable name type the property name, a colon, and then the desired variable name
- to set a default value for a deconstructed property us we Ethel assignment operator after the variable name and set to desired default value
- mutate pre declared variables by wrapping parenthesis around variables encased in the object deconstruction operator (because the deceleration can’t begin with curly braces)
- when deconstructing nested object, use the object deconstruction operator, and inside snake the parameter name of the nested object followed by a colon and then the property names of the nested object to be plucked out, and assign the whole declaration to the parent object

### The Spread Operator (...)

- used on the right hand side of the assignment operator
- the spread operator is three dots and precedes the name of a variable that holds an array
- use to build arrays or pass multiple values into a function by expanding array into individual elements
- if a variable is declared and assigned to an array with the name of another variable that holds an array it will result in an array with another array inside
- when the spread operator precedes the name of a variable that holds an array that is inside of square brackets each item from the original array will be returned in a list and the variable assigned to that will hold a shallow copy of the original array
- to build up new arrays assign variables to arrays containing multiple spread variable already assigned to arrays and or individual primitive (or variables assigned to primitives) values separated by commas
- use to build arrays or pass multiple values into a function by expanding array into individual elements
- when passing information into a function, the values must first be constructed into an array (for example, if grabbing information from a form, assign a variable to an array of form entries in an order that correlates to the order of the function’s parameters. When calling pass in the spread variable name as the call parameter.
- to make a shallow copy of an an object use the spread parameter on the name of the object to be copped and place it inside of curly brackets on the right side on the assignment operator
- The spread operator can be used on strings, and will return individual strings of each character of the original string

### Rest Pattern and Parameters

- The rest operator is used along with destructuring when declaring variables.
- To use the rest operator declare variable type and then three dots before the variable name. The variable name will hold an array of the information the variable is assigned to
- The rest operator can be used along with destructured, if destructuring an array individual variables can be declared in order of return, then a variable can be declared that will hold ether rest of the values in an array
- The rest operator must come at the end of destructured assignment
- Can also pluck out information based on properties in an object
- The rest operator can also be used when passing in parameters to denote when a list of items will be passed into a function the data will enter the function as an array and fed can be worked with as such

### Short Circuiting (&& and ||)

- Logical operators are used in short circuit evaluation
- With the or operator :: short circuiting is when a value before the end of the list of comparisons is truthy & the remaining balances are not evaluated
- Can be used in setting default values for properties that may exist or may not (the first condition would ‘look’ for the property, and if it is non existent the second condition would set the default for the non existent property
- With the and operator once a condition is found falsie none of the conditions will be executed
  use case: to search to see if a property exists and if it does then run a function related to it (instead of using an if then statement)

### The Nullish Coalescing Operator (??)

- Nullish is used in situations when a value might be falsie (like zero) but not bullish (null & undefined)
- Use case, check to see if a property has been assigned a value and assign default if not… if the value is zero the OR operator would automatically mopped to the default setting condition, but with nullish the value will be set at zero

### Logical Assignment Operators

- Just as += changes the value of the variable on the left side of the operator to the value of the variable fox the left side of the operator plus’s the value of the variable on the right side of the operator logical short circuiting can be written in short hand
- Or equals will evaluate for truthiness / existence of a property on the left and if it is found falsie the value of the property will be set to the value on the right
- Nullish equals evaluates a property for a non nullish value associated with it. If the value returns nullish the property will be set to the value on the right of the operator
- And equals will reset a a property value that exists to the value on the right side of the operator

### Looping Arrays: The for-of Loop

### Enhanced Object Literals

### Looping Objects: Object Keys, Values, and Entries

### Sets

### Maps: Fundamentals

### Maps: Iteration

### Which Data Structure to Use?

### Working With Strings
