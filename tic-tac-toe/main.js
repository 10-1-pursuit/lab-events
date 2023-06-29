// Create a `board` element to hold the squares.
const board = document.querySelector(".tic-tac-toe");

// Create a function to create a square.
const makeSquare = () => {
    // Create a `div` element.
    const square = document.createElement("div");
    // Add the `empty` and `square` classes to the square.
    square.classList.add("empty", "square");
    // Return the square.
    return square;
}

// Create the squares.
const squares = [];
for (let i = 0; i < 9; i++) {
    // Create a square.
    const square = makeSquare();

    // Append the square to the board.
    board.appendChild(square);

    // Add the square to the squares array.
    squares.push(square);
}

// Create a function to handle clicks on the squares.
function handleClick(event) {
    // Get the square that was clicked.
    const square = event.target;

    // Check if the square is empty.
    if (square.classList.contains("empty")) {
        // Set the text of the square to the current player's symbol.
        square.textContent = currentPlayer;

        // Remove the `empty` class from the square.
        square.classList.remove("empty");

        // Switch the current player.
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Attach the click handler to the squares.
squares.forEach(square => square.addEventListener("click", handleClick));

// Variables to track the current player and the winner.
let currentPlayer = "X";

// Get the reset button.
const resetButton = document.querySelector("button");

// Add an event listener to the reset button element.
resetButton.addEventListener("click", () => {
    // Reload the page.
    window.location.reload();
});