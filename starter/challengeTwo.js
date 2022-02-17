///////////////////////////////////////
// Coding Challenge #2
// Let's continue with our football betting app!

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//---HOW TO--- the scoringPLayers array holds the game.scored array // run the entries method on scoringPlayers to draw our the index position & value pair at each position of the array // deconstruct the entries method return into line and player and print line + 1 (because line is index position) and player in TL
const scoringPlayers = game.scored;
for (const [line, player] of scoringPlayers.entries()) {
  console.log(`Goal ${line + 1}: ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
//---HOW TO--- gameOdds variable holds odds object // oddList holds values found in game odds object by calling Object.values method on gameOdds // total will hold the odds total and final answer // for of loop rolls over the odd list and adds each odd to the total total is divided by the length of the oddList array and total then logged ot console
const gameOdds = game.odds;
const oddList = Object.values(gameOdds);
let total = 0;
for (const odd of oddList) total += odd;
total /= oddList.length;
console.log(total);
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
//---HOW TO--- tOdds holds an array of the key value pairs from game.odds object // messages hold an array of the messages generated // for of loop returns an array of the key value pares of the info from odds object // push os called on the messages array to add a message to the array // short circuiting is used to return a message a) if the key is a ;property ofg the game object a message using the game property will be pushed to the messages array, if not then draw message will be pushed // in order to get the messaged to print one on top of the other for of loop on the messages array pluck9ing out & logging individual messages
const tOdds = Object.entries(game.odds);
// const messages = [];
for (const [key, odd] of tOdds)
  console.log(
    (game[key] && `Odd of victory ${game[key]}: ${odd}`) ||
      `Odd of draw: ${odd}`
  );
//CODE REVIEW ----- I don't need to hold values in the array , each loop will print message on its own line
//   (game[key] && messages.push(`Odd of victory ${game[key]}: ${odd}`)) ||
//     messages.push(`Odd of draw: ${odd}`);
// for (const message of messages.entries()) console.log(message[1]);

// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// ---HOW TO--- create an empty object named scorers //  for of loop creating variable goals and plucking entries of the scored property of the game object // the name of the player is in the index position of 1 of the goals variable // use bracket notation to insert goals[1] value into the scorers object // set goals[1] value to 1 // use ternary operator to  add one to the value of goals[1] property if it already exists
const scorers = {};
for (const goals of game.scored.entries()) {
  scorers[goals[1]] ? scorers[goals[1]]++ : (scorers[goals[1]] = 1);
}
console.log(scorers);

// GOOD LUCK 😀
