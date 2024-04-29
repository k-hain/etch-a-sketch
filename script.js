const gridContainer = document.getElementById("gridContainer");

let gridSize = 16;
let gridPixelSize = 1024;
let squareSize = gridPixelSize / gridSize;

function drawGrid(gridSize) {

  for (let i = 0; i < gridSize; i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.setAttribute('style', `
      width: ${squareSize}px;
      height: ${squareSize}px;
    `)
    gridContainer.appendChild(newSquare);
  }

}

drawGrid(gridSize);