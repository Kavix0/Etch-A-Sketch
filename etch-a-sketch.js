const container = document.getElementById('container');
const sliderValue = document.getElementById('rangeValue');
const blackButton = document.getElementById('blackButton');
const rainbowButton = document.getElementById('rainbowButton');
const eraserButton = document.getElementById('eraserButton');
const sizeValue = document.getElementById('sizeValue');

let currentColor = 'blackButton';
let numSquares = sliderValue.value;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

renderGrid(numSquares);

sliderValue.onmousemove = function(){
    numSquares = sliderValue.value;
    sizeValue.innerHTML = `${numSquares} x ${numSquares}`;
}

blackButton.onmousedown = function(){
    activeButton = document.getElementById(currentColor);
    activeButton.classList.remove('active')

    blackButton.classList.add('active');
    currentColor = 'blackButton';
}

rainbowButton.onmousedown = function(){
    activeButton = document.getElementById(currentColor);
    activeButton.classList.remove('active')

    rainbowButton.classList.add('active');
    currentColor = 'rainbowButton';
}

eraserButton.onmousedown = function(){
    activeButton = document.getElementById(currentColor);
    activeButton.classList.remove('active')

    eraserButton.classList.add('active');
    currentColor = 'eraserButton';
}

clearButton.onmousedown = function(){
    emptyGrid();
    renderGrid(); 
}

function emptyGrid(){
    document.querySelectorAll('.gridElement').forEach(e => e.remove());
}

function renderGrid(){
    let gridArea = numSquares * numSquares;

    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;

    for(let i = 0; i < gridArea; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridElement');
        gridItem.addEventListener('mouseover', changeColor);
        gridItem.addEventListener('mousedown', changeColor)
        container.appendChild(gridItem);
    }
}

function changeColor(e) {
    if(!mouseDown && e.type === 'mouseover') return;

    if(currentColor == 'blackButton') e.target.style.background = "#000000";
    else if (currentColor == 'rainbowButton') e.target.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
    else if (currentColor == 'eraserButton') e.target.style.background = "#F4F7F3";
}