	// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}
var letterArray = ["A","B","C","D","E","F","G","H","I","J"];

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
		square.textContent =letterArray[j] + (i+1) ;

 		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

var hexDigits = new Array
                   ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16 ] + hexDigits[x % 16];
}

var hitCount = 0;

function fireTorpedo() {

	// Your game logic will go here!
	var userInput = $("#userInput").val();

  var row = userInput.substring(0,1).toUpperCase();
	row = letterConversion[row];
  var column = userInput.substring(1,3) - 1;
	var battleshipGuess = gameBoard[row][column];
	var guessDiv = "#s" + row + column;
	var rgbHexColor = rgb2hex($(guessDiv).css("background-color"));
	 if( (rgbHexColor == "#f6f8f9")&& battleshipGuess ){
		 hitCount += battleshipGuess
	 }
	 if (battleshipGuess){
		 $(guessDiv).css("background-color", "red");
 	 }
  else {
			$(guessDiv).css("background-color", "grey");
	}
	if(hitCount > 16) {
		$("#instructions").text("YOU SANK ALL OF MY SHIPS!");
	}
}
