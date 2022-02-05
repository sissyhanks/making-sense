# DOM and Event Fundamentals

- [Guess My Number](#guess-my-number)
- [Modal](#modal)
- [Pig Game](#pig-game)
- [Navigation](#navigation)

![DOM and Event Fundamentals](https://res.cloudinary.com/dvbtfmqmv/image/upload/v1644085256/DOM%20and%20Event%20Fundamentals/Screen_Shot_2022-02-05_at_1.20.36_PM_xpky7s.png)

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

- the `again` event listener
  - creates a new secret number
  - sets current score to 20
  - resets all display messages and style settings to original state
  - clears any entry in guess entry box

<em>Flexbox was used to create a sticky footer via instructions from [CSS-tricks](https://css-tricks.com/couple-takes-sticky-footer/#aa-there-is-flexbox).</em>

## Modal Window

When a user clicks one of the buttons labels 'show modal' a modal will pop up and any the visible portion of the website that is not a part of the modal will be blurred. modal can be closed by clicking on x in the modal is self or by pressing the escape key on the user's keyboard.

buttons that will open a modal are all of the class `show-modal`. all elements of the class `show-modal` are selected and a for loop is used to let the program know to run the logic for the listener even on `show-modal` elements no matter which button of that class is clicked.

event listeners are also present on teh x element in the modal itself as well as the entire document listening for the key down of the escape button.

the class `hidden` is added to elements to show modal and removed when modal is closed.

## Pig Game

Play begins with the user 'rolling a die'.

- At the start of play game setting are

  - activePlayer = 0
  - playing = true
  - dice = hidden

- Clicking the Roll button generates a random number.
- The number is used in a template literal to display a picture of a die face denoting that number based ont the name of the image desired.
- The number that is generated is also added to rolling player's current score as long as the randomly generated number isn't a one.
  User may roll times as many times as they like until they chose to Hold or a one is rolled.
- On hold the roll total is added ot the player's score.
- On roll of 1 the roll total is zeroed out.
- Either event will transfer play action to the other player by toggling the class `player--active` between the two player section elements.

The first player to reach a score of 100 or higher wins.

- game context is switched to `!playing` and game action listener events become non responsive.
- game display changes to denote win.

Clicking the New Game button will reset the game.

## Navigation

In order to create a cohesive project to deploy, a centralized homepage featuring each individual project was created using bootstrap, and navigation was added to each page. The initial plan was to add a navigation bar to the header of each HTML page, but that was abandoned because of the unique style and structure of each index.
