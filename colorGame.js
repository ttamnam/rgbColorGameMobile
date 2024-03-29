var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1')
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners
	for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener('click', function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}

	reset();
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "inline-block";
			squares[i].style.backgroundColor = colors[i];

		} else {
			squares[i].style.display = "none";

		}
	}
	h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function(){
	reset();
})




function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make na array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		// get random color and push into array
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "r,g, and b" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

 function showPopup() {
    document.getElementById('overlay').style.display = 'flex';
  }

  function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
  }
