const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", (event) => {
    document.querySelector("#current-color").style.backgroundColor =
      event.target.style.backgroundColor;
  });
});

document.querySelectorAll(".cell").forEach((cell) => {
  color.addEventListener("click", (event) => {
    event.target.style.backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;
  });
});

cells = document.querySelectorAll(".cell"); 
canvasGrid.addEventListener("click", (event) => {
    console.log("cell clicked")
}

if (event.target.classList.contains("cell")) {
    // if a cell is clicked, it checks if the clicked element has the class "cell"
    const color = currentColor.style.backgroundColor; // if it does, it grabs the current background color
    event.target.style.backgroundColor = color; // and sets it as the background color of the clicked cell
    console.log("Painted cell with color:", color);
});
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