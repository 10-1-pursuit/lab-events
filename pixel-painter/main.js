const palette = document.getElementById('palette');
const currentColor = document.getElementById('current-color');
let canvas = document.querySelector('#canvas');

const resetDiv = document.createElement('div');

const colors = document.querySelectorAll('.color');

const cells = document.querySelectorAll('.cell');

for (let color of colors) {
	color.addEventListener('click', (event) => {
		currentColor.style.background = event.target.style.background;
	});
}
for (let cell of cells) {
	cell.addEventListener('click', () => {
		cell.style.background = currentColor.style.background;
	});
}

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetDiv.append(resetButton);
palette.append(resetDiv);

resetButton.addEventListener('click', () => {
	for (let cell of cells) {
		cell.style.background = 'white';
	}
	currentColor.style.background = 'white';
});
