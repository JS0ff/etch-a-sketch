//Create rgb color mode button
const rgbButton = document.querySelector("#rgb");
const mainContainer = document.querySelector(".container");

//User number of squares
let numberOfGrid;

//Default color of the mouse
let colorOfMouse = "rgb(141, 46, 213)";

//Random color Generator
function createRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  colorOfMouse = `rgb(${red},${green},${blue})`;
}
//Change style of mouseover to random color
rgbButton.addEventListener("click", function () {
  for (const element of gridElement) {
    createRandomColor();
    element.addEventListener("mouseover", function () {
      createRandomColor();
    });
  }
});

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

//Decreases the opacity of a gird element
function decreaseOpacity(element) {
  //Check if opacity have value and then start to decrease it
  if (element.style.opacity === "") {
    element.style.opacity = 1;
  } else if (element.style.opacity === "1") {
    element.style.opacity = 0.9;
  } else if (element.style.opacity === "0.9") {
    element.style.opacity = 0.8;
  } else if (element.style.opacity === "0.8") {
    element.style.opacity = 0.7;
  } else if (element.style.opacity === "0.7") {
    element.style.opacity = 0.6;
  } else if (element.style.opacity === "0.6") {
    element.style.opacity = 0.5;
  } else if (element.style.opacity === "0.5") {
    element.style.opacity = 0.4;
  } else if (element.style.opacity === "0.4") {
    element.style.opacity = 0.3;
  } else if (element.style.opacity === "0.3") {
    element.style.opacity = 0.2;
  } else if (element.style.opacity === "0.2") {
    element.style.opacity = 0.1;
  } else if (element.style.opacity === "0.1") {
    //Pure black
    element.style.opacity = 0;
  }
}

//Select all grid elements
const gridElement = document.querySelectorAll(".grid");
for (const element of gridElement) {
  //If mouse goes over the container color it to the brown color
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = colorOfMouse;
    decreaseOpacity(element);
  });
}

// User interface to get user number of squares
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
  colorOfMouse = "rgb(141, 46, 213)";
  rgbButton.addEventListener("click", function () {
    for (const element of gridElement) {
      element.addEventListener("mouseover", function () {
        createRandomColor();
      });
    }
  });

  //Create grid userNumber x userNumber
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
      element.style.backgroundColor = colorOfMouse;
      decreaseOpacity(element);
    });
  }
}
