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