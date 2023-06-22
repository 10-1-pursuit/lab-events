const palette = document.getElementById('palette');
const currentColor = document.getElementById('current-color');

const colors = document.querySelectorAll('.color');

for (let color of colors) {
	color.addEventListener('click', (event) => {
		currentColor.style.background = event.target.style.background;
	});
}
