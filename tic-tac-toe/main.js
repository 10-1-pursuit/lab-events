const board = document.querySelector(".tic-tac-toe");

function makeBoard() {
    for (let i = 0; i < 9; i++){
        const square = document.createElement("div");
        square.classList.add("empty", "square");
        board.appendChild(square);
    }
    attachListeners();
}
makeBoard();


let currentPlayer = "X"
function makeMove(event) {
    const square = event.target;
    if (square.classList.contains("empty")) {
        square.textContent = currentPlayer;
        square.classList.remove("empty");
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function attachListeners() {
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("click", makeMove));
}

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);

function reset() {
    board.innerHTML = "";
    makeBoard();
    attachListeners();
}