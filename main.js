const mainContainer = document.querySelector(".container");

function createGrid() {
  let gridDivs = document.createElement("div");
  gridDivs.className = "grid";
  gridDivs.textContent = ` `;
  row.appendChild(gridDivs);
  row.innerHTML += "\n";
}

for (let i = 1; i <= 16; i++) {
  row = document.createElement("div");
  row.className = "row";
  mainContainer.appendChild(row);
  for (let j = 1; j <= 16; j++) {
    createGrid();
  }
}

const gridElement = document.querySelectorAll(".grid");
for (const element of gridElement) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "red";
  });
}

let numberOfGrid;
const popButton = document.querySelector("#popup");
popButton.addEventListener("click", function () {
  numberOfGrid = prompt("Enter the number of squares for grid: ");
  console.log(numberOfGrid);
});
