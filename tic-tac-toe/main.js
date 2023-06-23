const squares = document.querySelectorAll(".square");
for (i = 0; i <= 9; i++) {


}

// - [ ] Write a function called `makeBoard()` that will generate 9 `div` with the class `empty` and another class `square`.

function makeBoard() {
    let nineSquares = 9;
    let mainSelected = document.querySelector("main")
    let makeNineDivs = document.createElement("div", ".empty", ".square")
    for (let i = 0; i < nineSquares; i++) {
        wrapper.createElement("makeNineDivs");
        mainSelected.appendChild("makeNineDivs");
    }
    console.log(makeNineDivs)

}

// create an eventListeneder that when you click the 'Reset' button it will show the tic tac toe board
let resetButton = document.querySelector("button");
resetButton.addEventListener("click", (event) => {




})

// -[] Call `makeBoard()` on page load so that 9 squares appear and the board is 3 x 3 squares.

// - [] Write a function called `makeMove()` that is an event handler for the`div`s with the class of `square` that

const player1 = "X";
const player2 = "O";

let currentPlayer = player1;
let game = ["", "", "", "", "", "", "", "", ""];
squares.forEach((square, index) => {
    square.addEventListener("click", (event) => {

        //Add an X or an O
        if (event.target.textContent === "")
            event.target.textContent = currentPlayer;
        game[index] = currentPlayer;
        //Switch between players after each turn
        if (currentPlayer === player1) {
            currentPlayer = player2;

        } else {
            currentPlayer = player1;
        }
    });

});