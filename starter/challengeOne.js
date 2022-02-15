/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:


TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
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

// 1. Create one player array for each team (variables 'players1' and 'players2')
//--HOW TO-- use the spread operator to create a shallow copy of each of the arrays in the game object's player property array based on their position in the player array
const play1 = [...game.players[0]];
const play2 = [...game.players[1]];
//do it with destructuring.. use destructuring assignment on the left to establish the names of the new arrays to be created and the array of arrays to be assigned on the right.
const [players1, players2] = game.players;

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
//--HOW TO-- use the destructuring assignment on the left to declare the gk variable and the rest operator with the name of the variable that will hold the array of field players and assign to the players1 array. this will pull our players1[0] and set it to gk variable and then put the rest of the items in the players1 array into a new array named fieldPlayers
const [gk, ...fieldPlayers] = players1;

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
//--HOW TO-- assign the variable all players to an array containing the spread operated players 1 & 2 arrays
const allPlayers = [...players1, ...players2];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus v
//--HOW TO-- set varaible to an array with spread operated players 1 and strings of the players names to be added to the array
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//--HOW TO-- use the object destructuring operator on the left with variable names inside & set equal to the odds Property of hte game object .. change the name of property x to draw with colon
const { team1, x: draw, team2 } = game.odds;

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// --HOW TO-- print goals is a function that takes in a list of strings, the rest operator is used to to take in as many as are listed and turn them into an array and evaluates the length of the array to determine the number of goals scored.
const printGoals = function (...names) {
  console.log(`there were ${names.length} goals`);
};
//to call the array that is the value of the scored property of the game object use the spread operator
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
//--HOW TO-- use the && logical operator to short circute an evaluation of each team's ods, wheather they are greater opf less than their opponents && print to console message. because of short circuiting the message afgter && will only pront of statuement on left is true
team1 < team2 && console.log('team one most likely to win');
team1 > team2 && console.log('team two most likely to win');
