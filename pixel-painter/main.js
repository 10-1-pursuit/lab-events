const test = console.log
const colorPalette = document.querySelectorAll(".color")
const blank = colorPalette[7]
const mainSq = document.querySelector("#canvas")
const currentColor = document.querySelector("#current-color")
const grid = document.querySelectorAll(".cell")

for (let color of colorPalette) {
    color.addEventListener("mousedown", (event) => {
        currentColor.style.background = event.target.style.background
    })
}

for (i = 0; i < 99; i++) {
    const newGridBox = document.createElement("div");
    newGridBox.classList.add('cell')
    mainSq.append(newGridBox)
}



const pixels = document.getElementsByClassName("cell")


for (let pixie of pixels) {

    pixie.addEventListener("click", (event) => {
        pixie.style.background = currentColor.style.background
    })
}

const navBar = document.querySelector("nav")
const button = document.createElement("img")

navBar.append(button)


//button.classList.add('button')
 test(blank)


 button.addEventListener("click", (event) => {
    for (let pixie of pixels){
        pixie.style.background = blank.style.background
    } })