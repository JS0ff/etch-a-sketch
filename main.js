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
