const paletteColors = document.querySelectorAll('.color');
//get the palette color

const currentColor = document.querySelector('#current-color');
// get the current color

const cells = document.querySelectorAll('.cell');
//get the canvas cells

paletteColors.forEach(color =>{
    color.addEventListener('click', () => {
        currentColor.style.backgroundColor = color.style.backgroundColor;
    });
});

//add click event listeners to palette color

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = currentColor.style.backgroundColor
    });
});

//add click event listeners to canvas cells