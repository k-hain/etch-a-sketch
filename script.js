const gridContainer = document.getElementById('gridContainer');
const rainbowBtn = document.getElementById('rainbowBtn');
const sketchBtn = document.getElementById('sketchBtn');

let gridSize = 16;
let gridPixelSize = 640;
let squareSize = 0;
let drawingStyle = ''

drawGrid();
changeStyle('rainbow', true);

function drawGrid() {
  squareSize = gridPixelSize / gridSize;
  gridContainer.style['width'] = `${gridPixelSize}px`;
  for (let i = 0; i < gridSize; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('gridRow');
    for (let i = 0; i < gridSize; i++) {
      const newSquare = document.createElement('div');
      newSquare.classList.add('square');
      newSquare.style['width'] = `${squareSize}px`;
      newSquare.style['height'] = `${squareSize}px`;
      switch(drawingStyle) {
        case 'rainbow':
          newSquare.style['opacity'] = 1;
          break;
        case 'sketch':
          newSquare.style['opacity'] = 0;
          newSquare.style["backgroundColor"] = 'black';
      }
      newSquare.addEventListener('mouseenter', (event) => {
        switch(drawingStyle) {
          case 'rainbow':
            newSquare.style["backgroundColor"] = randomColor();
            break;
          case 'sketch':
            newSquare.style['opacity'] = +newSquare.style['opacity'] + 0.1;
        } 
      });
      newRow.appendChild(newSquare);      
    }
    gridContainer.appendChild(newRow);
  }
}

function deleteGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function resizeGrid() {
  deleteGrid();
  gridSize = 0;
  while (gridSize <= 0 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = parseInt(prompt('Set grid size (1 to 100)'));
  }
  drawGrid();
}

function clearGrid() {
  deleteGrid();
  drawGrid();
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function changeStyle(newStyle, firstTime = false) {
  drawingStyle = newStyle;
  switch(drawingStyle) {
    case 'rainbow':
      sketchBtn.classList.remove('activeStyle');
      rainbowBtn.classList.remove('disabledStyle');
      rainbowBtn.classList.add('activeStyle');
      sketchBtn.classList.add('disabledStyle');
      break;
    case 'sketch':
      rainbowBtn.classList.remove('activeStyle');
      sketchBtn.classList.remove('disabledStyle');
      sketchBtn.classList.add('activeStyle');
      rainbowBtn.classList.add('disabledStyle');
  }
  if (!firstTime) {
    clearGrid();
  }
}
