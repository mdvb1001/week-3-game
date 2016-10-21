

var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var choices = ['crash', 'bladerunner', 'jerassicworld', 'diehard', 'blade', 'taken', 'conair', 'therock', 'rambo', 'predator', 'heat', ''];
var numberOfGuesses = 12; 
var chosenWord = "";
var wins = "";
var correctGuess = 0;
var gamePiece = [];
var userGuess = "";


function initializeGame() {
	document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	}
	if (options.indexOf(userGuess) === -1) {
				console.log('Please type in a letter only!');
			}
	else if (options.indexOf(userGuess) < options.length) {
			}; 
};


function startGame() {
	chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
  	console.log(chosenWord);
	numberOfGuesses = 12;
	correctGuess = 0;
	for (var i = 0; i < chosenWord.length; i++) {
  		gamePiece.push('_ ')
	};

	document.getElementById('currentWord').innerHTML=gamePiece.join('');

	if (correctGuess === chosenWord.length) {
					console.log('You got the WERD!!');
					wins++;
					startGame();
				};

	else if (numberOfGuesses <= 0) {
					console.log('You LOST!!!!!!!');
					startGame();
				};

};


function printCorrectGuesses () {
	for (var i = 0; i < gamePiece.length; i++) {
  	document.getElementById('currentWord').innerHTML=gamePiece[i];
  }
};


function matchGuesses () {
	for (var i = 0; i < chosenWord.length; i++) {
  		if (chosenWord[i] === userGuess) {
    		gamePiece[i] = userGuess;
    		correctGuess++;
    		printUserGuesses();

  		}
  		else if (chosenWord[i] != userGuess) {
  			numberOfGuesses--;
  		}
	}
};


initializeGame();
startGame();
matchGuesses();




document.onkeyup = function(event) {

	  		document.onkeyup = function(event) {
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			if (options.indexOf(userGuess) === -1) {
				console.log('Please type in a letter only!');
			}
			else if (options.indexOf(userGuess) < options.length) {
			}; 


			if (chosenWord.indexOf(userGuess) === -1) {
				numberOfGuesses--;
				console.log(userGuess);
				console.log('Nope!');
			}
			else if (chosenWord.indexOf(userGuess) < chosenWord.length) {
				correctGuess++;
				console.log('Nice!');
				printUserGuesses();
			}; 
			console.log('Number of Guesses Remaining ' + numberOfGuesses);





			// var letterIndex = chosenWord.indexOf(userGuess);

			// if (chosenWord.charAt(letterIndex) === userGuess) {
			// 	console.log(userGuess);

			// 	var PrintLetter = document.getElementById('results');
			// 	 	var newPrintLetter = document.createElement('p');
			// 	 	newPrintLetter.innerHTML ="<h1>" + "Current Word:" + " " + userGuess + "</h1>";
			// 	 	PrintLetter.appendChild(newPrintLetter);

			// 	// document.getElementById('currentWord').innerHTML="<h1>" + "_" + userGuess + "_" + "</h1>";
				
			// 	//var theWordFirst = chosenWord.toString('');
			// };

			// if (correctGuess === chosenWord.length) {
			// 	console.log('You got the WERD!!');
			// 	wins++;
			// 	resetGame();
			// };

	  // 		if (numberOfGuesses <= 0) {
			// 	console.log('You LOST!!!!!!!');
			// 	resetGame();
			// };
	
		}

	};


// document.onkeyup
// arrays
// array[math.floor(Math.random()*array.length)]
// indexOf (returns -1 if not in there)
// if / if else / else statement
// functions
// querySelector
// innerHTML
// return values from functions
// you can use objects (for hard hw BONUS). 
// ******

// .join(",") -- join all the letters together into a string 
// var guesses = [] -- this contains all the letters guessed 
// guesses.push(letterGuessed)
// guesses.join
// var guesses = ['a','b','c']
// var guessesStr = guesses.join(',');
// document.getElementById('currentWord').innerHTML = guessesStr

// 

// <div id="guesses"></div>
// <div id="guessesLeft"></div>
// When user runs out of guesses, new game 
// Reseting the game -- restting the number of guesses to 12
// 
// 
// 