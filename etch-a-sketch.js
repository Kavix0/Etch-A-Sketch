const container = document.getElementById('container');

let numSquares = (prompt("How many squares would you like in the grid?"));
renderGrid(numSquares);

function renderGrid(numSquares){
    let rowDiv;
    let columnDiv;

    for(let i = 0; i < numSquares; i++){
        rowDiv = document.createElement("div");
        rowDiv.classList.add("gridLine");

        for(let j = 0; j < numSquares; j++){
            columnDiv = document.createElement("div");
            columnDiv.classList.add("gridSquare");
            columnDiv.setAttribute("onmouseover", "randomColor(this)");
            rowDiv.appendChild(columnDiv);
        }
        console.log(rowDiv);
        container.appendChild(rowDiv);
    }

    let div_list = document.querySelectorAll(".gridSquare");
    let div_array = [...div_list];

    div_array.forEach(div => {
        div.setAttribute("onmouseover", "straightBlack(this)");
    }); 
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