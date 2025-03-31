const mainContainer = document.querySelector(".container");

function createGrid() {
  let gridDivs = document.createElement("div");
  gridDivs.className = "grid";
  gridDivs.textContent = ` `;
  row.appendChild(gridDivs);
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
    element.style.backgroundColor = "brown";
  });
}

let numberOfGrid;
const popButton = document.querySelector("#popup");
popButton.addEventListener("click", function () {
  numberOfGrid = prompt("Enter the number of squares for grid: (0-100)");
  if (numberOfGrid > 100) {
    while (numberOfGrid > 100) {
      numberOfGrid = prompt("Enter the number less than or equal to 100!");
    }
  }
  console.log(numberOfGrid);
  createUserGrid(numberOfGrid);
});

function createUserGrid(userNumber) {
  mainContainer.innerHTML = "";
  for (let i = 1; i <= userNumber; i++) {
    row = document.createElement("div");
    row.className = "row";
    mainContainer.appendChild(row);
    for (let j = 1; j <= userNumber; j++) {
      createGrid();
    }
  }
  const gridElement = document.querySelectorAll(".grid");
  for (const element of gridElement) {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "brown";
    });
  }
}
