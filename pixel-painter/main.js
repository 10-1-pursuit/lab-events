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