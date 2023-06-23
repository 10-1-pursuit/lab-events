const palette = document.querySelector("#palette");
const currentColor = document.querySelector("#current-color");
let cells = document.querySelectorAll(".cell");
const canvasGrid = document.querySelector("#canvas"); // Create the grid
const resetButton = document.createElement("button");

// Event listener for pallete color
palette.addEventListener("click", (event) => {
  console.log("Palette clicked");

  if (event.target.classList.contains("color")) {
    // when user clicks, if theres a classlist that contains color
    const color = event.target.style.backgroundColor; // have the currentColor variable's backgroundColor to equal const color
    currentColor.style.backgroundColor = color;
    console.log("Selected color", color);
  }
});
// console.log(canvasGrid);

// Loop it 100x
for (let x = 0; x < 100; x++) {
  const newGridBox = document.createElement("div"); // creates new cell elements 100 times.
  newGridBox.classList.add("cell"); // give each time it looped a cell "class"
  // Implement this change
  canvasGrid.append(newGridBox); // append newGridBox to canvasGrid
}

cells = document.querySelectorAll(".cell"); // this will update the cells variable to include all the cells.
canvasGrid.addEventListener("click", (event) => {
  console.log("Cell clicked");

  if (event.target.classList.contains("cell")) {
    // if a cell is clicked, it checks if the clicked element has the class "cell"
    const color = currentColor.style.backgroundColor; // if it does, it grabs the current background color
    event.target.style.backgroundColor = color; // and sets it as the background color of the clicked cell
    console.log("Painted cell with color:", color);
  }
});

resetButton.setAttribute("id", "reset-button"); // set ID and text content of resetButton
resetButton.textContent = "Reset";

const wrapper = document.querySelector("#wrapper");
wrapper.appendChild(resetButton);

resetButton.addEventListener("click", () => {
  console.log("Reset button clicked");

  cells.forEach((cell) => {
    cell.style.backgroundColor = "white"; // when reset button is clicked, it iterates over each cell and sets their background color to white.
  });
});
