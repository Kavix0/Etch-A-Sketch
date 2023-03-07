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
            rowDiv.appendChild(columnDiv);
        }

        console.log(rowDiv);
        container.appendChild(rowDiv);
    }
}