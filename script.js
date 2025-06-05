const contentDiv = document.querySelector(".content");

function createGrid() {
    const gridSize = 16;
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement("div");
        square.className = "square";
        contentDiv.appendChild(square);
    }
}

createGrid();