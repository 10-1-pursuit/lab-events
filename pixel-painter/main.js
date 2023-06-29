// cell creation 
const createCell = () => {
    const cell = document.createElement("div");
    cell.className = "cell";
    return cell;
}
// and canvas fill of cells
const fillCanvas = () => {
    const canvas = document.getElementById("canvas");
    const cellWidth = canvas.offsetWidth / 10;
    const cellHeight = canvas.offsetHeight / 10;

    for (let i = 0; i < 100; i++) {
        const cell = createCell();
        cell.style.width = cellWidth;
        cell.style.height = cellHeight;
        canvas.appendChild(cell);
    }
}
document.addEventListener("DOMContentLoaded", fillCanvas);

// `handleColorClick` is used to handle the click event for the color palette.
const handleColorClick = (event) => {
    // Get the background color of the clicked color.
    const backgroundColor = event.target.style.backgroundColor;
    // Set the background color of the current color element to the clicked color.
    currentColor.style.backgroundColor = backgroundColor;
};

// `handleCellClick` is used to handle the click event for the cells.
const handleCellClick = (event) => {
    // Check if the clicked element is a cell.
    if (event.target.classList.contains("cell")) {
        // Set the background color of the clicked element to the background color of the current color element.
        event.target.style.backgroundColor = currentColor.style.backgroundColor;
    }
};

// Get a list of all the color elements in the palette.
const colors = document.querySelectorAll("#palette .color");

// Get the current color element.
const currentColor = document.querySelector("#current-color");

// Bind an event listener to each color element in the palette.
colors.forEach(color => color.addEventListener("click", handleColorClick));

// Bind an event listener to the cells.
canvas.addEventListener("click", handleCellClick);

// Create a reset button element.
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.textContent = "↪ Reset ↩";
resetButton.style.padding = "1px";
resetButton.style.display = "block";
resetButton.style.margin = "auto";
resetButton.style.boxShadow = "0 5px 10px #000000";

// Add an event listener to the reset button element.
resetButton.addEventListener("click", () => {
  // Reload the page.
  window.location.reload();
});

const footer = document.querySelector("footer");

// Append the reset button element to the footer element.
footer.append(resetButton);

// Create a fill all button element.
const fillAllButton = document.createElement("button");
fillAllButton.setAttribute("id", "fill-all-button");
fillAllButton.textContent = "Fill All";
fillAllButton.style.padding = "1px";
fillAllButton.style.display = "block";
fillAllButton.style.margin = "auto";
fillAllButton.style.boxShadow = "0 5px 10px #000000";

// Add an event listener to the fill all button element.
fillAllButton.addEventListener("click", () => {
  // Get the current color element.
  const currentColor = document.querySelector("#current-color");
  // Get all the cells in the canvas.
  const cells = document.querySelectorAll("#canvas .cell");
  // Set the background color of all the cells to the current color.
  cells.forEach(cell => cell.style.backgroundColor = currentColor.style.backgroundColor);
});

// Append the fill all button element to the same parent element as the current color element.
currentColor.parentElement.appendChild(fillAllButton);

