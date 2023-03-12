const container = document.getElementById('container');
const sliderValue = document.getElementById('rangeValue');
const blackButton = document.getElementById('blackButton');
const rainbowButton = document.getElementById('rainbowButton');
const eraserButton = document.getElementById('eraserButton');

let currentColor = 'blackButton';
let numSquares = sliderValue.value;
let mouseClicked = false;

renderGrid(numSquares);

sliderValue.oninput = function(){
    numSquares = sliderValue.value;
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
        gridItem.addEventListener('mousedown', mouseDown, changeColor);
        gridItem.addEventListener('mouseup', mouseUp);
        container.appendChild(gridItem);
    }

  /*  let div_list = document.querySelectorAll(".gridElement");
    let div_array = [...div_list];

    div_array.forEach(div => {
        div.setAttribute("onmouseover", "straightBlack(this)");
    });*/
}

function mouseDown(e){
    mouseClicked = true;
}

function mouseUp(e){
    mouseClicked = false;
}

function changeColor(e) {
    if(!mouseClicked) return;

    if(currentColor == 'blackButton') e.target.style.background = "#000000";
    else if (currentColor == 'rainbowButton') e.target.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
    else if (currentColor == 'eraserButton') e.target.style.background = "#F4F7F3";
}