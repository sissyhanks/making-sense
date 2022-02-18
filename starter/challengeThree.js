// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
//_---HOW TO--- need to create a set of values, so first need to deconstruct the key value pairs and then setify the values
const events = new Set([...gameEvents.values()]);
console.log(events);
//oh no... need to destructure set and put that inside array instead of just the game events

const eventss = [...new Set(gameEvents.values())];
console.log(eventss);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
//--HOW TO-- use deleet method to remove event with key 64
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
//--HOW TO--- find number of events in map by using .size ... go 90 / number >> put logic inside template literal with string message info
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
//--HOW TO-- use for loop with deconstructed key & values for game events /// logic to create half string based on when event occured judged by key number /// print vlaues in template literal
for (const [key, value] of gameEvents) {
  let half;
  if (key < 46) {
    half = '[FIRST HALF]';
  } else {
    half = '[SECOND HALF]';
  }
  console.log(`${half} ${key}: ${value}`);
}
// get ternary with it
for (const [key, value] of gameEvents) {
  half = key < 46 ? '[FIRST HALF]' : '[SECOND HALF]';

  console.log(`${half} ${key}: ${value}`);
}
