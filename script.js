const contentDiv = document.querySelector(".content");
const sizeButton = document.querySelector("#grid-size-button");

function createGrid(gridSize) {
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

function destroyGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.remove());
}

function getRandomRgb() {
    let values = [];
    for (let i = 0; i < 3; i++) {
        values.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${values[0]}, ${values[1]}, ${values[2]})`
}

sizeButton.addEventListener(
    "click",
    (e) => {
        const gridSize = prompt("Enter grid size:");
        if (1 <= gridSize && gridSize <= 100 && gridSize % 1 === 0) {
            destroyGrid();
            createGrid(gridSize);

            const gridSquares = document.querySelectorAll(".square");
            gridSquares.forEach(
                (square) => {
                    let opacity = 0;
                    square.addEventListener(
                        "mouseover",
                        (e) => {
                            if (opacity < 1) {
                                opacity = Math.round((opacity + 0.1) * 10) / 10;
                                console.log(opacity);
                            }

                            e.target.style.backgroundColor = getRandomRgb();
                        }
                    );
                }
            );
        } else {
            alert("Enter a valid grid size!");
        }

    }
)