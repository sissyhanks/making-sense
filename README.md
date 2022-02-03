# DOM and Event Fundamentals

## Guess My Number

A player can enter a number between 1 and 20 and their guess will be compared against a random number chosen and kept secret by the game. Player will be informed if their guess is high or low and their score (which starts at 20) will be deducted one point each time an incorrect number is guessed. Page display changes when the player's guess matches the secret number. The first time the player wins the game their score will be recorded as the high score. PLayer can reset the game and play again with the high score remaining the same. If they use less guessed to reach the secret number the high score will update. High score does not persist on page reload.

A number is generated at random on page load.

DOM elements are selected based on class name and HTML tag type so that their text or appearance may be changed.

Event listeners are active on elements with the class of `check` and `again`.

- The `check` event listener

  - compares the number entered to the secret number
    - (if number is our of range player will be prompted to enter a valid number)
    - if guess is incorrect
      - a message is displayed to tell player if their guess is too high or low
      - a point off of their score and the current score display is updated
      - if current score becomes zero the game is over
        - play functionality is disabled
        - a loss message is displayed
    - if the player guesses correctly
      - page color changes
      - secret number is revealed
      - the high score is updated if the player's score is higher than the number held in that value

- the `again` even listener
  - creates a new secret number
  - sets current score to 20
  - resets all display messages and style settings to original state
  - clears any entry in guess entry box

<em>Flexbox was used to create a sticky footer via instructions from [CSS-tricks](https://css-tricks.com/couple-takes-sticky-footer/#aa-there-is-flexbox).</em>

## Modal Window

## Pig Game

## Navigation

In order to create a cohesive project to deploy, a centralized homepage featuring each individual project was created using bootstrap, and navigation was added to each page. The initial plan was to add a navigation bar to the header of each HTML page, but that was abandoned because of the unique style and structure of each index.
