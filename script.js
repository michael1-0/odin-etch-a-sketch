initializeGrid(24);

document.querySelector(".reset").addEventListener("click", () => {
    while (true) {
        let userChoice = Number(prompt("Input desired grid size: (size must be less than equal to 100)"));
        console.log(userChoice);
        if (userChoice === 0) {
            break;
        } else if (!(userChoice > 100)) {
            while (document.querySelector(".container").firstChild) {
                document.querySelector(".container").removeChild(document.querySelector(".container").firstChild)
            }
            initializeGrid(userChoice);
            break;
        } 
    }
});

function initializeGrid(size) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add(`row${i}`);
        document.querySelector(".container").appendChild(gridRow);
        for (let j = 0 ; j < size; j++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add("column");
            gridColumn.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                gridColumn.style.backgroundColor = "#" + randomColor;
            });
            document.querySelector(`.row${i}`).appendChild(gridColumn);
        }
    }
}