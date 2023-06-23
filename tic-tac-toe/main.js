// Tic Tac Toe

// You will need to complete the following tasks. If you're unclear about any of the instructions below, reach out to your instructor.

// - [ ] Write a function called `makeBoard()` that will generate 9 `div` with the class `empty` and another class `square`.
// - [ ] Call `makeBoard()` on page load so that 9 squares appear and the board is 3 x 3 squares.
const see = console.log;

const makeBoard = () => {
  function createSquares() {
    const main = document.querySelector("#wrapper");
    const div = document.createElement("div");
    div.classList.add(".empty .square");
    main.append(div);
  }

  con;
};

// - [ ] Write a function called `makeMove()` that is an event handler for the `div`s with the class of `square` that

//   - Checks if the clicked square has the class `empty`.
//   - If the square has the class empty add either an `X` or an `O` inside the square, remove the class `empty` and write some logic so that the next time this function is called the other player has a play (first play an X then an O, then an X...).
//   - Players should NOT be able to change a full square.

// - [ ] Add a listener to the reset button and write an event handler function called `reset`, that removes the squares and then calls `makeBoard()` to reset the board.

// Tic Tac Toe Demo

//  Additional Features

// Write a function that checks if all the squares are full. If they are, make a pop up that says "Game Over"

// Create some game logic that checks if X or O won and create a message displaying who won.
for (let i = 0; i < 9; i++) {
  makeBoard;
}

/*
function makeBoard() {
let mainDiv = document .querySelector ("div")
for (let i = 0; i < 9; i++) {
let div = document. createElement ("div")
div.classList.add("«empty/.square")
mainDiv. append (div)
return mainDiv;
console. log (makeBoard ())
/ -[ Call 'makeBoard() on page load so that 9 squares appear and the board is 3 x 3 squares.
// - [I write a function called makeMove()' that is an event handler for the div's with the class of 'square' that
const player1 = "X";
const player2 = "O";
Let currentPlayer = player1;
Let game = ('"', "", "", ""
squares. forEach( (square, index) => {
square. addEventListener("click", (event) => {
//Add an X or an O
1f (event.target. textContent ass "")
event.target. textContent = currentPlayer:
game (index] = currentPlayer;
//Switch between players after each turn if (currentPlayer
player1) {
currentPlayer = player2;
} else {
currentPlayer = player1;

*/
