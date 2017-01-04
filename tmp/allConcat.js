var Dino = require('./../js/dino.js').dinoModule;

var secretWord = "";

$(document).ready(function() {

  $("#letterGuessForm").submit(function(event) {
    event.preventDefault();
    guess = $("#letterGuess").val();
    success = checkMatch(guess);
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
