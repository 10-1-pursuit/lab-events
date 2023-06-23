//  Constants
//---------------
const see = console.log;
const main = document.querySelector("main");
const cells = document.querySelectorAll(".cell");
const fillBtn = document.getElementById("fill-btn");
const drawBtn = document.getElementById("draw-btn");
const pickerBtn = document.getElementById("picker-btn");
const resetBtn = document.getElementById("reset-btn");
const currentColor = document.getElementById("current-color");
const paletteColors = document.querySelectorAll("#palette .color");

// Function to create cells with event listeners
function createCell() {
  const div = document.createElement("div");
  div.classList.add("cell");

  // Event listener to change cell color on mouseover
  div.addEventListener("click", (event) => {
    event.target.style.backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;
  });

  main.append(div);
}

// Create initial cells
for (let i = 0; i < 750; i++) {
  createCell();
}

// Event listener for palette color selection
paletteColors.forEach((color) => {
  color.addEventListener("click", (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
});

// Increase number of cells without changing #canvas width or height
const cellWidth = 20;
const availableWidth = main.clientWidth;
const desiredNumberOfCells = Math.floor(availableWidth / cellWidth);

main.style.gridTemplateColumns = `repeat(2fr, 1fr, 50px)`;

//  BUTTONS ( 5 Buttons Total )
//================================
/*    
   Create a button that, when clicked, resets all cells so that they all have a background of white.
   Reset button event listener
*/ clearBtn.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    event.target.style.backgroundColor = "white";
  });
});
/*
   When a color is clicked in the #palette, the #draw-btn should be able to toggle on and off
  */
//  DrawBtn
drawBtn.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = currentColor.style.backgroundColor;
    });
  });
});
/*
    Create a color picker tool function thats can hover over any color and capture on select.
    Attach an eventlistner. This tool should show a preview while in hover mode and button for tool selection 
    // Picker button event listener
*/
pickerBtn.addEventListener("click", (event) => {
  paletteColors.forEach((color) => {
    color.addEventListener("mouseover", (event) => {
      currentColor.style.backgroundColor = event.target.style.backgroundColor;
    });
  });
});
/*
    Create an eraser button that, when clicked, functions like the draw button but permanent color is white
*/ // Eraser button event listener
eraserBtn.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "white";
    });
  });
});

/*    
   Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background.
   color fill button event listener
*/ fillBtn.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  });
});

cells.forEach((cell) => {
  cell.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;
  });
});
