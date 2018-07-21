var numSquares = 9;
var colors = randomColorGenerator(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".difficulty");

for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click", function(){
		//loop through modes and remove selected class
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		mode[2].classList.remove("selected");
		//add selected class
		this.classList.add("selected");
		//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//change value of numSquares based on selected mode
		if (this.textContent === "Easy"){
			numSquares = 3;
		} else if (this.textContent === "Hard") {
			numSquares = 6;
		} else {
			numSquares = 9;
		}
		resetColor();
	});
}

resetButton.addEventListener("click", resetColor);

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare color to pickedColor
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!"
		h1.style.backgroundColor = clickedColor;
		changeColors(clickedColor);
		resetButton.textContent = "Play Again";
	} else {
		this.style.backgroundColor = "#232323";	
		messageDisplay.textContent = "Try again!";
	}

	});
}

function changeColors(color) {
	//loop through squares and change color to given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorGenerator(num){
	//create array
	var arr = [];
	//add num random colors to arr
	for (var i = 0; i < num; i++) {
		//get random colors and push into array
		arr.push(randomColor());
	}
	//return arr
	return arr;
}

function randomColor() {
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g =Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//put into "rgb(r, g, b)" format
	return "rgb(" + r + ", " + g + ", " + b + ")";
}	

function resetColor() {
	//generate all new colors
	colors = randomColorGenerator(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change colors of squares on page
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	//reset h1 background color
	h1.style.backgroundColor = "steelblue";

}

// var easyButton = document.querySelector("#easy");
// var hardButton = document.querySelector("#hard");

// easyButton.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3;
// 	colors = randomColorGenerator(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	resetColor();
// });

// hardButton.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = randomColorGenerator(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		}
// 	resetColor();
// });

