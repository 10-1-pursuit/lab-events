const ticTacToe = document.querySelector(".tic-tac-toe");
const resetButton = document.querySelector("button");

// create the board
function makeBoard() {
  for (let x = 0; x < 9; x++) {
    const square = document.createElement("div"); // create up to 9 <div> elements
    square.classList.add("square", "empty"); // The created squares are given classes square and empty
    ticTacToe.appendChild(square); // then appended to the ticTacToe container
  }
}

// Checks if all squares are full
function checkBoardFull() {
  const squares = document.querySelectorAll(".square");
  for (const square of squares) {
    if (square.classList.contains("empty")) {
      // if it finds any square with empy class it returns false
      return false; // board is not full return false
    }
  }
  return true; // if board is full return true
}

function checkWin() {
  // winningCombinations are all the winning cominbations on the board
  const winningCombinations = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  const squares = document.querySelectorAll(".square"); // squares is a collection of all square elements on the game board
  for (const combination of winningCombinations) {
    // iterate through winningCombinations array
    const [a, b, c] = combination; // use array destructuring to assign values of the elements in the combination array to variables a, b, and c. They represent different squares on the game board that need to be checked for a win. i.e (winning combination [0, 1, 2] a = 0, b = 1, c = 2)
    if (
      // This checks if a,b and c have the same textContent and if they do, then return the winning player which is either X or O
      squares[a].textContent &&
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent
    ) {
      return squares[a].textContent; // return the winning player
    }
  }

  return null; // no winning condition found
}

// Even listeners for making moves
function makeMove(event) {
  const square = event.target;
  if (!square.classList.contains("empty")) {
    return; // if square is already filled, return and do nothing.
  }

  // The toggle() method toggles the class in the classlist, in this case it toggles "player1", it returns a boolean value indicating whether the class was added or removed.
  const currentPlayer = ticTacToe.classList.toggle("player1") ? "X" : "O"; // If player1 class was added it means the current player is player 1 and their symbol is "X". If player1 class was removed, it means the current player is player 2 and their symbol is "O".
  square.textContent = currentPlayer; // Current players symbole is then set as textContent of the clicked square, this updates the text inside the square to display the symbol.
  square.classList.remove("empty"); // After setting the symbol, the function removes the empty class from the clicked square to ensure that the square is considered filled and cant be clicked again.
  if (checkWin()) {
    // call checkWin function
    const winner = checkWin(); // make winner = X or O, whoever won
    alert(`Player ${winner} won!`); // make string intermpolation to make it either X or O who won.
    reset();
  } else if (checkBoardFull()) {
    alert("Game Over"); // If theres no winner and the board is full, display a game over
    reset();
  }
}

// Event listener for reset button
function reset() {
  ticTacToe.innerHTML = ""; // clear the board
  makeBoard(); // Generate a new board
}

//Add event listeners
ticTacToe.addEventListener("click", makeMove);
resetButton.addEventListener("click", reset);

// call makeBoard when page loads
makeBoard();
