const contentDiv = document.querySelector(".content");

function createGrid() {
    const gridSize = 8;
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement("div");
        square.className = "square";
        // This flex-basis is here to define the number of divs in a row, based on the grid size.
        // And the padding-top is to make each div a square.
        square.style.flexBasis = `${100 / gridSize}%`;
        square.style.paddingTop = `${100 / gridSize}%`;

        contentDiv.appendChild(square);
    }
}

createGrid();