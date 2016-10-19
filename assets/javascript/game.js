

// 
var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var choices = ['homealone', 'diehard', 'blade', 'taken', 'conair', 'therock', 'rambo', 'predator'];
var chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
var numberOfGuesses = 12; 
var success = 0;
function lettersAlreadyGuessed(userGuess) {
		console.log(userGuess)
	};



document.onkeyup = function(event) {
  var chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
  console.log(chosenWord);

	  	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		if (options.indexOf(userGuess) === -1) {
			console.log('Please type in a letter only!');
		}
		else if (options.indexOf(userGuess) < options.length) {}; 

		if (chosenWord.indexOf(userGuess) === -1) {
			numberOfGuesses--;
			console.log(userGuess);
			console.log('Nope!');

		}
		else if (chosenWord.indexOf(userGuess) < chosenWord.length) {
			numberOfGuesses--;
			success++;
			console.log('Nice!');
		}; 
		console.log('Number of Guesses Remaining ' + numberOfGuesses);

		if (success === chosenWord.length) {
			console.log('You got the WERD!!');
		};

		if (numberOfGuesses <= 0) {
			console.log('You LOST!!!!!!!');
		};

		var letterIndex = chosenWord.indexOf(userGuess);

		if (chosenWord.charAt(letterIndex) === userGuess) {
			console.log(userGuess);

			document.getElementById('currentWord').innerHTML="<h1>" + "_" + userGuess + "_" + "</h1>";


			// var PrintLetter = document.getElementById('results');
			//  	var newPrintLetter = document.createElement('p');
			//  	newPrintLetter.innerHTML ="<h1>" + "Current Word:" + " " + userGuess + "</h1>";
			//  	PrintLetter.appendChild(newPrintLetter)
			

			//var theWordFirst = chosenWord.toString('');
		};
	
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



	
    
  	