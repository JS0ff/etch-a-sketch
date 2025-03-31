const mainContainer = document.querySelector(".container");

// Creates a grid container
function createGrid() {
  let gridDivs = document.createElement("div");
  gridDivs.className = "grid";
  gridDivs.textContent = ` `;
  row.appendChild(gridDivs); // appends the container to the row
}

//Default 16x16 box
for (let i = 1; i <= 16; i++) {
  row = document.createElement("div");
  row.className = "row"; //every row will have 16 elements and rows quantity are 16
  mainContainer.appendChild(row);
  for (let j = 1; j <= 16; j++) {
    createGrid(); //Create 16 elements of empty container
  }
}

//Select all grid elements
const gridElement = document.querySelectorAll(".grid");
for (const element of gridElement) {
  //If mouse goes over the container color it to the brown color
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "brown";
  });
}

// User interface to get user number of squares
let numberOfGrid;
const popButton = document.querySelector("#popup");
popButton.addEventListener("click", function () {
  // Limit the choice from 0 to 100 pixels
  numberOfGrid = prompt("Enter the number of squares for grid: (0-100)");
  if (numberOfGrid > 100) {
    while (numberOfGrid > 100) {
      // Loop until the choice is less than 100
      numberOfGrid = prompt("Enter the number less than or equal to 100!");
    }
  }
  console.log(numberOfGrid);
  createUserGrid(numberOfGrid);
});

// Creates a grid with the user number of pixels
function createUserGrid(userNumber) {
  mainContainer.innerHTML = ""; // Delete the default 16x16 grid
  for (let i = 1; i <= userNumber; i++) {
    row = document.createElement("div");
    row.className = "row";
    mainContainer.appendChild(row);
    for (let j = 1; j <= userNumber; j++) {
      createGrid();
    }
  }

  //Color pixels
  const gridElement = document.querySelectorAll(".grid");
  for (const element of gridElement) {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "brown";
    });
  }
}

//Create rgb color mode button
const rgbButton = document.querySelector("#rgb");
//Random color Generator
//Change style of mouseover to random color
