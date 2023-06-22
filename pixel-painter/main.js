const palette = document.querySelectorAll(".color");
let currentColors = document.querySelector("#current-color");

for(let colors of palette){
   
    colors.addEventListener("click", (event)=>{
      currentColors.style.background = event.target.style.background
    })
}

let cell = document.querySelectorAll(".cell")
console.log("hi", cell)