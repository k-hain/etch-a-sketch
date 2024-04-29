const gridContainer = document.getElementById("gridContainer");

let gridSize = 16;
let gridPixelSize = 640;
let squareSize = gridPixelSize / gridSize;

function drawGrid(gridSize) {
  
  gridContainer.setAttribute('style', `
    width: ${gridPixelSize}px;
  `)

  for (let i = 0; i < gridSize; i++) {

    const newRow = document.createElement('div');
    newRow.classList.add('gridRow');

    for (let i = 0; i < gridSize; i++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('square');
      newSquare.setAttribute('style', `
        width: ${squareSize}px;
        height: ${squareSize}px;
      `)
      newRow.appendChild(newSquare);
    }

    gridContainer.appendChild(newRow);

  }
}

drawGrid(gridSize);