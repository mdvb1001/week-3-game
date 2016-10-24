var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var choices = ['crash', 'bladerunner', 'jerassic', 'diehard', 'blade', 'taken', 'conair', 'therock', 'rambo', 'predator', 'heat', 'rocky'];
var guessesRemaining = 12;
var chosenWord = "";
var wins = "";
var correctGuesses = 0;
var correctLetters = [];
var incorrectLetters = [];
var letters = [];
var progress = [];
var userGuess = "";
var locationArray = [];

//this will reset
function init() {

    letters = []; //reset the letters array, because we started over
    progress = []; //reset progress because we started a new game.

    for (var i = 0; i < chosenWord.length; i++) {
        letters.push(chosenWord[i]);
        // progress.push('_');
        console.log(letters);
        // console.log("progress:" + progress);
    }
};

// function that Starts and Resets game + Pushes the letters from chosenWord to the array `letters`
function chooseWord() {
    chosenWord = choices[Math.floor(Math.random() * choices.length) + 0];
    console.log(chosenWord);
    guessesRemaining = 12;
    correctGuesses = 0;
    console.log(guessesRemaining);
    console.log(correctGuesses);
};


function playGame() {

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        //make sure the user types a non numeric character.
        if (options.indexOf(userGuess) === -1) {
            console.log('Please type in a letter only!');
            return; //restart wait for keypress
        }

        if (chosenWord.indexOf(userGuess) === -1) {
            guessesRemaining--;
            console.log(guessesRemaining);
        }

        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === userGuess) {
                for (var i = 0; i < locationArray.length; i++) {
                    locationArray.push(i);
                    progress[locationArray[i]] = userGuess;
                    correctGuesses++;
                    console.log(locationArray);
                    console.log(correctGuesses);
                }
            }
        }
    }

    //this needs to be changed:
    // We need to, search in the chosen word via chosenWord[i]
    // for each i, see if the character the user selected is a match
    // if the character matches an i index of chosenWord, locationArray.push(i)
    // for (i = 0, i < locationArray.length, i++) =>
    // progress[locationArray[i]] = userGuess


    // if (chosenWord.indexOf(userGuess) === -1) {
    //     guessesRemaining--;
    //     console.log(userGuess);
    //     console.log('Nope!');
    // } else if (chosenWord.indexOf(userGuess) < chosenWord.length) {
    //     correctGuesses++;
    //     console.log('Nice!');
    // }

    if (correctGuesses === chosenWord.length) {
        console.log('You got the WERD!!');
        wins++;
        // playGame();
    }

    if (guessesRemaining <= 0) {
        console.log('You LOST!!!!!!!');
        playGame();
    }

};


// function that stores the CORRECT LETTERS into an array called `correctLetters`
function pushCorrectLetters() {
    if (chosenword.indexof(userGuess) != -1) {
        correctLetters.push('');
        console.log(correctLetters);
    } else {
        incorrectLetters.push('');
        console.log(incorrectLetters);
    }

};

function progressUpdate() {
    for (var k = 0; k < letters.length; k++) {
        if (lettersCorrect.indexOf(letters[k]) !== -1) {
            progress[k] = letters[k];
        } else {
            progress[k] = '_';
        }
    }
};

// function print() {
//     document.getElementById('currentWord').innerHTML = progress.join('');
//     document.getElementById('lettersUsed').innerHTML = incorrectLetters.join('');
//     document.getElementById('guessesLeft').innerHTML = guessesRemaining;
//     document.getElementById('wins').innerHTML = wins;

//     $("ul").replace("<ul>" + progress + " </ul>")

//     var hangmanWord = document.getElementById('hangman-word');
//     hangmanWord.innerHTML = //progress concatenated string
//         //for loop through progress[i]
//         // var hangmanString = hangmanString + progress[i]
//         // --rr---c

// }