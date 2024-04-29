const gridContainer = document.getElementById('gridContainer');
const buttons = document.querySelector('#buttonContainer');

let gridSize = 16;
let gridPixelSize = 640;
let squareSize = gridPixelSize / gridSize;

drawGrid(gridSize);

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
        //newSquare.style["backgroundColor"] = 'red';
        newSquare.style["backgroundColor"] = randomColor();
      });
      newRow.appendChild(newSquare);      
    }
    gridContainer.appendChild(newRow);
  }
}

function resizeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  gridSize = 0;
  while (gridSize <= 0 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = parseInt(prompt('Set grid size (1 to 100)'));
  }
  squareSize = gridPixelSize / gridSize;
  drawGrid(gridSize);
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
