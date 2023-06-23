const main = document.querySelector("main");
for (let i = 0; i < 160; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
const see = console.log;
/*
   When a color is clicked in the #palette, the #current-color element should have its background changed to that color. For example, if you click the green circle in the #palette, the #current-color element's background should change to be green.
*/

const currentColor = document.getElementById("current-color");
const paletteColors = document.querySelectorAll("#palette .color");
const cells = document.querySelectorAll(".cell");

// for (let color of paletteColors) {
//     color.addEventListener("click", () => {
//         const selectedColor = color.getAttribute("style");
//         currentColor.setAttribute("style", `${selectedColor}`);
//     });
// }
// for (let color of paletteColors) {
//   color.addEventListener("click", () => {
//      currentColor.style.background = color.style.background;
//   });
// }
document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", (event) => {
    see(event.target);
    console.log(event.target);
    document.querySelector("#current-color").style.backgroundColor =
      event.target.style.backgroundColor = event.target.style.backgroundColor;
  });
});
/*
 When you click on a .cell, its background should change to match the background of #current-color.
    // */
// for (let cell of cells) {
// cell.addEventListener("click", () => {
//     cell.setAttribute("style, background: + ${currentColor.style.background}");
//     see(event.target.style);
// });
// }
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;
  });
});
/* 
   Increase the number of cells without increasing the width or height of the #canvas element.
*/
    const cellWidth = 10;
    const withAvailable = canvas.clientWidth;
    const desiredNumberOfCells = Math.floor(availableWidth / cellWidth);

    canvas.style.gridTemplateColumns = `repeat(${20}, 1fr)`;
/*    
   Change the event listener so that instead of clicking to fill a color, you hold down your mouse.
*/
/*    
   Create a button that, when clicked, resets all cells so that they all have a background of white.
*/
/*    
   Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background.
*/
/* 
   Feel free to add other fun features to build out your pixel painter!
*/
