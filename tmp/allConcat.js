var Dino = require('./../js/dino.js').dinoModule;

var checkMatch = function(guessedLetter, secretWord) {
  console.log("check for secret word"+ secretWord);
  for (i = 0; i < secretWord.length; i++) {
    if (guessedLetter == secretWord[i]) {
      secretWord.replace(secretWord[i], guessedLetter);
      return true;
    }
  }
};


$(document).ready(function() {

  $("#letterGuessForm").submit(function(event) {
    event.preventDefault();
    guess = $("#letterGuess").val();
    success = checkMatch(guess, thisDino.word);
    console.log("submit form" + success);
    if (success === true) {
      console.log("WOOT");
    } else {
      console.log("FAIL");
    }
  });

  $("#newGameButt").click(function(){
    $(".newGame").hide();
    $("#letterGuessForm").show();
    var thisDino = new Dino();
    thisDino.getDinoIpsum();
  });
});
