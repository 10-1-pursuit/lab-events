const colors = document.querySelectorAll("#palette .color");
const currentColor = document.querySelector("#current-color");
colors.forEach(color => {
    color.addEventListener("click", (event) => {
        const backgroundColor = event.target.style.backgroundColor;
        currentColor.style.backgroundColor = backgroundColor;
    })
})


const canvas = document.querySelector("#canvas");

const gridSize = 10;
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        canvas.appendChild(cell);
    }
}

canvas.addEventListener("click", function (event) {
    if (event.target.classList.contains("cell")) {
        const backgroundColor = currentColor.style.backgroundColor;
        event.target.style.backgroundColor = backgroundColor;
    }
});


const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button")
resetButton.textContent = "Reset"
resetButton.style.padding = "1em"
resetButton.style.display = "block"
resetButton.style.margin = "auto"
resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "white");
});

const footer = document.querySelector("footer");
footer.appendChild(resetButton)


const anchors = document.querySelectorAll("a");
anchors.forEach(anchor => anchor.style.margin = "50px");