

var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var choices = ['crash', 'bladerunner', 'jerassic', 'diehard', 'blade', 'taken', 'conair', 'therock', 'rambo', 'predator', 'heat', 'rocky'];
var guessesRemaining = 12; 
var wins = "";
var correctGuess = 0;
var correctLetters = [];
var incorrectLetters = [];
var letters = [];
var progress = [];
var userGuess = "";

// function playGame() {
// 	var chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
// 		console.log(chosenWord);
// 		guessesRemaining = 12;
// 		correctGuess = 0;
// 		for (var i = 0; i < chosenWord.length; i++) {
// 			letters.push('');
// 			progress.push('');
// 			console.log(letters);
// 			console.log(letters);
// 					};

// playGame();

// document.onkeyup = function(event) {
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// 	if (options.indexOf(userGuess) === -1) {
// 				console.log('Please type in a letter only!')
// 			}
// 	else if (options.indexOf(userGuess) < options.length) {
// 			}

// 	if (chosenWord.indexOf(userGuess) === -1) {
// 				guessesRemaining--;
// 				console.log(userGuess);
// 				console.log('Nope!');
// 			}
// 	else if (chosenWord.indexOf(userGuess) < chosenWord.length) {
// 				correctGuess++;
// 				console.log('Nice!');
// 						} 
// 				console.log('Number of Guesses Remaining ' + guessesRemaining);

// 	if (correctGuess === chosenWord.length) {
// 			console.log('You got the WERD!!');
// 			wins++;
// 			playGame();
// 						}

// 	if (guessesRemaining <= 0) {
// 			console.log('You LOST!!!!!!!');
// 			playGame();
// 			}
// 		}
// 		playGame();
// 			// function that stores the CORRECT LETTERS into an array called `correctLetters`

// 	if (chosenword.indexof(userGuess) != -1) {
// 			correctLetters.push('');
// 			console.log(correctLetters);
// 			}
// 	else {
// 			incorrectLetters.push('');
// 			console.log(incorrectLetters);
// 				}
				
// 	for (var k = 0; k < letters.length; k++) {
// 			if (lettersCorrect.indexOf(letters[k]) !== -1) {
// 			    progress[k] = letters[k];
// 			} else {
// 			    progress[k] = '_';
// 			        }
// 			 	}

// 	document.getElementById('currentWord').innerHTML=progress.join('');
// 	document.getElementById('lettersUsed').innerHTML=incorrectLetters.join('');
			
// };








// function printCorrectGuesses() {
// 	for (var i = 0; i < letters.length; i++) {
//   	document.getElementById('currentWord').innerHTML=letters[i];
//   }
// };

// function printIncorrectGuesses() {
// 	document.getElementById('currentWord').innerHTML = letters.join('');
// };


// function matchGuesses() {
// 	for (var i = 0; i < chosenWord.length; i++) {
//   		if (chosenWord[i] === userGuess) {
//     		letters[i] = userGuess;
//     		correctGuess++;

//   		}
//   		else if (chosenWord[i] != userGuess) {
//   			guessesRemaining--;
//   		}
// 	}
// };







document.onkeyup = function(event) {

	  	document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			var chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
				console.log(chosenWord);
				guessesRemaining = 12;
				correctGuess = 0;
			for (var i = 0; i < chosenWord.length; i++) {
				letters.push();
				progress.push();
				console.log(letters);
				console.log(progress);
					};
			if (options.indexOf(userGuess) === -1) {
				console.log('Please type in a letter only!');
				}
			else if (options.indexOf(userGuess) < options.length) {
				}


			if (chosenWord.indexOf(userGuess) === -1) {
				guessesRemaining--;
				console.log(userGuess);
				console.log('Nope!');
			}
			else if (chosenWord.indexOf(userGuess) < chosenWord.length) {
				correctGuess++;
				console.log('Nice!');
			} 
			console.log('Number of Guesses Remaining' + guessesRemaining);

			// var letterIndex = chosenWord.indexOf(userGuess);

			// if (chosenWord.charAt(letterIndex) === userGuess) {
			// 	console.log(userGuess);

			// 	var PrintLetter = document.getElementById('results');
			// 	 	var newPrintLetter = document.createElement('p');
			// 	 	newPrintLetter.innerHTML ="<h1>" + "Current Word:" + " " + userGuess + "</h1>";
			// 	 	PrintLetter.appendChild(newPrintLetter);

				// document.getElementById('currentWord').innerHTML="<h1>" + "_" + userGuess + "_" + "</h1>";
				
				//var theWordFirst = chosenWord.toString('');
			// };

		if (chosenword.indexof(userGuess) != -1) {
			correctLetters.push('');
			console.log(correctLetters);
			}
		else {
			incorrectLetters.push('');
			console.log(incorrectLetters);
				}
				
		for (var k = 0; k < letters.length; k++) {
			if (lettersCorrect.indexOf(letters[k]) !== -1) {
			    progress[k] = letters[k];
			} else {
			    progress[k] = '_';
			        }
			 	}

		document.getElementById('currentWord').innerHTML=progress.join('');
		document.getElementById('lettersUsed').innerHTML=incorrectLetters.join('');
			
			if (correctGuess === chosenWord.length) {
				console.log('You got the WERD!!');
				wins++;
				resetGame();
			};

	   		if (guessesRemaining <= 0) {
				console.log('You LOST!!!!!!!');
				resetGame();
			
	
		

	


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