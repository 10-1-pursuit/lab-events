document.addEventListener("DOMContentLoaded", () => {
  makeBoard();
});

function makeBoard() {
  const ticTacToeGrid = document.querySelector(".tic-tac-toe");
  console.log(ticTacToeGrid);
  //make it a loop 100x
  for (let i = 1; i < 10; i++) {
    const ticTacToeBox = document.createElement("div");
    ticTacToeBox.classList.add("empty", "square");
   

    ticTacToeGrid.append(ticTacToeBox);
  } //implement this change

  ticTacToeGrid.addEventListener("click", (event) => {
    console.log("cell clicked");
  });
}

function makeMove() {
    const oneSquare = document.querySelectorAll('.square')
    oneSquare.addEventHandler()
}