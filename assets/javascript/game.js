

// 
var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var choices = ['homealone', 'diehard', 'blade', 'taken', 'conair', 'therock', 'rambo', 'predator'];
var chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
var word1 = '';
var numberOfGuesses = 12; 
var wins = 0;
function lettersAlreadyGuessed(userGuess) {
		console.log(userGuess)
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


document.onkeyup = function(event) {

	var fired = false;

	element.onkeyup = function(event) {
    	if(!fired) {
        	fired = true;
        	console.log(chosenWord);
        // do something
    	}
	};

	element.onkeyup = function(event) {
    	fired = false;
	};



	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (options.indexOf(userGuess) === -1) {
		console.log("Please type in a letter only!");
	}
	else if (options.indexOf(userGuess) < options.length) {
		console.log(userGuess);
	}





	// if (word1.indexOf(userGuess) === -1) {
	// 	numberOfGuesses--;
	// 	console.log(userGuess);


	// }
	// else if (word1.indexOf(userGuess) < word1.length) {
	// 	numberOfGuesses--;
	// 	lettersAlreadyGuessed();
	// 	console.log(userGuess);
	// } 
	// console.log('Number of Guesses Remaining ' + numberOfGuesses);
	
};

	