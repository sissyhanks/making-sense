// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//each part of info is separated by +... split op info and loop over it to access each item individually
getCode = str => str.slice(0, 3).toUpperCase();
//get code is a function that takes in a string and slices the first 3 characters and puts them to upper case

for (const flight of flights.split('+')) {
  // split each element at the ; because thats where each part of that data is separated
  const [message, from, to, time] = flight.split(';');
  const output = `${
    message.startsWith('_Delayed') ? '🔴' : ''
  }${message.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
  )} ${time.replace(':', 'h')}`.padStart(45);
  console.log(output);
}
