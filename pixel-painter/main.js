console.log("why are you tripping")

///create the grid
const canvasGrid = document.querySelector("#canvas")
console.log(canvasGrid)
//make it a loop 100x
for (let i =1; i<100; i++) {
const newGridBox = document.createElement("div")
newGridBox.classList.add("cell")

canvasGrid.append(newGridBox)} //implement this change 

canvasGrid.addEventListener("click", (event) => {
    console.log("event object", event) //interact w keys in the event type
    console.log("targeted event object", event.target)
  
    event.target.style.color = "red";
  });