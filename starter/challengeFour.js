// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀 */
//work out notes
// const text = '      berNie_mcKNIght  ';
// arr holds the parts of text after split in an array
// const arr = text.toLowerCase().trim().split('_');
//camArr holds the elements of the string that needs to have first letter capitalized in order to create camelCase in an array
// const camArr = arr[1].split('');
// const cam = camArr[0].toUpperCase();
//camelCase concatenates teh 0 index from arr, cam and arr index one sliced at index one to cerate camel case siring
// const camelCase = arr[0] + camArr[0].toUpperCase() + arr[1].slice(1);

// console.log(camelCase);
// console.log(one, two);

// ---HOW TO--- first i want to make sure the info i receive is uniform so i will trim to remove any spaces and set the entry to lower case /// then i use split to divide the entries at the underscore

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// make a query selector on button element and add click event listener
document.querySelector('button').addEventListener('click', function () {
  //outPut will hold camelCase conversions
  const outPut = [];
  // text is the full string of what is entered into text area element
  const text = document.querySelector('textarea').value;
  //lines is an array of each line of text (separated by return) from text
  const lines = text.split('\n');
  //for of loop camel cases each element of lines
  for (const line of lines) {
    // arr holds the parts of each line after uniform to lowercase, trimmed of any white space and split at underscore in an array
    const arr = line.toLowerCase().trim().split('_');
    //camArr holds the elements of the string that needs to have first letter capitalized in order to create camelCase in an array
    const camArr = arr[1].split('');
    const cam = camArr[0].toUpperCase();
    //camelCase concatenates teh 0 index from arr, cam and arr index one sliced at index one to cerate camel case siring
    const camelCase = arr[0] + camArr[0].toUpperCase() + arr[1].slice(1);
    outPut.push(camelCase);
  }
  // for every element in the outPut array/// print string at that position + pad with spaces to 20 characters , then add the number of check marks as the position the element is in the array
  for (i = 0; i < outPut.length; i++) {
    console.log(`${outPut[i]} `.padEnd(20, ' ').padEnd(21 + i, '✅'));
  }
  // clear input; set textarea to empty string
  document.querySelector('textarea').value = '';
});
