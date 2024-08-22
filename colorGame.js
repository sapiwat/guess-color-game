let numSquares = 9;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButton();
  setupSquares();
  reset();
}
function setupSquares() {
  //add event listener for squares
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setupModeButton() {
  //mode buttons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    // add event listener "click"
    modeButtons[i].addEventListener("click", function () {
      for (let j = 0; j < modeButtons.length; j++) {
        modeButtons[j].classList.remove("selected");
      }
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else if (this.textContent === "Medium") {
        numSquares = 6;
      } else {
        numSquares = 9;
      }
      //similar to the if statement above
      //this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
      //figure out how many squares to show
      //pick new colors
      //pick a new pickedColor
      //update page to reflect changes
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  //change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "#steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //repeat num times
  for (let i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  //pick a "green" from 0 - 255
  //pick a "blue" from 0 - 255
  let colorElement = 0;
  let rgbArr = [];
  for (let i = 0; i < 3; i++) {
    rgbArr.push((colorElement = Math.floor(Math.random() * 256)));
  }
  return `rgb(${rgbArr.join(", ")})`;
}
