document.write("Text written using JavaScript code!");


// 
var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var word1 = ['s','t','r','e','e','t','c','a','r'];
var numberOfGuesses = 5; 
var wins = 0;


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	function lettersAlreadyGuessed(userGuess) {
		console.log(userGuess)
	}; 

	if (word1.indexOf(userGuess) === -1) {
		numberOfGuesses--;
		console.log(userGuess);


	}
	else if (word1.indexOf(userGuess) < 9) {
		numberOfGuesses--;
		lettersAlreadyGuessed();
		console.log(userGuess);
	} 
	console.log('Number of Guesses Remaining ' + numberOfGuesses);
};

	