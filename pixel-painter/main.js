const cell = document.querySelector('.cell');
function cellCanvasFiller() {
    for (let i = 0; i < 99; i++) {
        const newCell = cell.cloneNode(true);
        cell.after(newCell);
    }
}
cellCanvasFiller();

const currentColor = document.querySelector("#current-color");
const colorPalette = document.querySelectorAll(".color");

function colorPicker() {
    for (let color of colorPalette) {
        color.addEventListener('click', (event) => {
            currentColor.setAttribute("style", `background-color: ${event.target.style.backgroundColor}`);
        });
    }
}

colorPicker();


const cells = document.querySelectorAll('.cell');
function colorCells() {
    for (let cell of cells) {
        cell.addEventListener('click', (event) => {
            event.target.setAttribute("style", `background-color: ${currentColor.style.backgroundColor}`);
        });
    }
}
colorCells();

