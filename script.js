const gridContainer = document.getElementById('gridContainer');

let gridSize = 16;
let gridPixelSize = 640;
let squareSize = gridPixelSize / gridSize;

function drawGrid(gridSize) {
  
  gridContainer.style['width'] = `${gridPixelSize}px`;

  for (let i = 0; i < gridSize; i++) {

    const newRow = document.createElement('div');
    newRow.classList.add('gridRow');

    for (let i = 0; i < gridSize; i++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('square');
      newSquare.style['width'] = `${squareSize}px`;
      newSquare.style['height'] = `${squareSize}px`;

      newSquare.addEventListener('mouseenter', (event) => {
        newSquare.style["backgroundColor"] = 'red';
      });

      newRow.appendChild(newSquare);      
    }

    gridContainer.appendChild(newRow);

  }
}

drawGrid(gridSize);