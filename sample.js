const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
/*==============================================================*/
// You may write your code here!
const curColor = document.querySelector("#current-color");
const colorSelector = document.querySelectorAll(".color");

for (let color of colorSelector) {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("style");
    // console.log(`This button clicked! ${selectedColor}`);
    curColor.setAttribute("style", `${selectedColor}`);
    // console.log(curColor);
  });
}

const cellCollection = document.querySelectorAll(".cell");

for (let indivCell of cellCollection) {
  // console.log(indivCell);
  indivCell.addEventListener("click", () => {
    //const selectCell = document.querySelector(".cell");
    const colorInk = curColor.getAttribute("style");
    indivCell.setAttribute("style", `${colorInk}`);
  });
}
/*==============================================================*/
// You may write your code here!
const currentColor = document.querySelector("#current-color");

const pcolor = document.querySelectorAll(".color");
for(let i=0; i<pcolor.length;i++)
{
  pcolor[i].addEventListener("click", () => {
   currentColor.setAttribute("style","background: "+pcolor[i].style.background);
  });
}

const cells = document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++)
{
  cells[i].addEventListener("click", () => {
   cells[i].setAttribute("style",`background: ${currentColor.style.background}`);
  });
} 