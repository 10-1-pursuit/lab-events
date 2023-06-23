const game = document.querySelector(".tic-tac-toe");

function makeBoard() {
  for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.classList.add("empty");
    div.classList.add("square");
    game.append(div);
  }
}
makeBoard();

function makeMove() {
  let squares = document.querySelectorAll(".square");
  const voidant = document.querySelectorAll(".empty");
  let count = 0;

  for (let box of squares) {
    for (let empty of voidant) {
      box.addEventListener(
        "click",
        () => {
          count++;
          if (count % 2 === 0) {
            box.textContent = "X";
          } else {
            box.textContent = "O";
          }

          if (box.classList.contains("empty")) {
            box.classList.remove("empty");
          }
        },
        { once: true }
      );
    }
  }
}
makeMove();

const button = document.querySelector("button");

function reset() {
  let squares = document.querySelectorAll(".square");

  for (let box of squares) {
    box.remove();
  }
  makeBoard();
}

button.addEventListener("click", () => {
  reset();
  makeMove();
});
