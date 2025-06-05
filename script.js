const contentDiv = document.querySelector(".content");

const gridSize = 16;
for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.className = "row";
    contentDiv.appendChild(row);

    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
    }
}
