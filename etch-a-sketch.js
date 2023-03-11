const container = document.getElementById('container');
let currentColor = 'straightBlack';

let numSquares = (prompt("How many squares would you like in the grid?"));
renderGrid(numSquares);

function renderGrid(numSquares){

    let gridArea = numSquares * numSquares;

    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;

    for(let i = 0; i < gridArea; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridElement');
        gridItem.addEventListener('mouseover', changeColor);
        gridItem.addEventListener('mousedown', changeColor);
        container.appendChild(gridItem);
    }

  /*  let div_list = document.querySelectorAll(".gridElement");
    let div_array = [...div_list];

    div_array.forEach(div => {
        div.setAttribute("onmouseover", "straightBlack(this)");
    });*/
}

function changeColor(e) {
    e.target.style.backgroundColor = "#000000";
}

randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}

straightBlack = function(e) {
    e.style.background = "#000000";
}

shadesOfBlack = function(e) {
    e.style.background = (0, 0, 0, 0);
}