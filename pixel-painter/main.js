// cell creation 
const createCell = () => {
    const cell = document.createElement("div");
    cell.className = "cell";
    return cell;
  }
  // and canvas fill of cells
  const fillCanvas = () => {
    const canvas = document.getElementById("canvas");
    const cellWidth = canvas.offsetWidth / 10;
    const cellHeight = canvas.offsetHeight / 10;
  
    for (let i = 0; i < 100; i++) {
      const cell = createCell();
      cell.style.width = cellWidth;
      cell.style.height = cellHeight;
      canvas.appendChild(cell);
    }
  }
  document.addEventListener("DOMContentLoaded", fillCanvas);