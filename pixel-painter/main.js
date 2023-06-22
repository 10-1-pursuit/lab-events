const palette = document.querySelectorAll(".color");
let currentColors = document.querySelector("#current-color");

for(let colors of palette){
    colors.addEventListener("click", (event)=>{
      currentColors.style.background = event.target.style.background
    })
};




for(let i = 0; i < 99; i++){

const canvas = document.querySelector("#canvas")

const newGridBox = document.createElement("div")

newGridBox.classList.add("cell")

canvas.append(newGridBox);
}



const canvases = document.querySelectorAll("#canvas")

for(let cell of canvases){
    cell.addEventListener("click", (event)=>{
     event.target.style.background = currentColors.style.background
    })
}




