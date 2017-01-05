var Dino = require('./../js/dino.js').dinoModule;

var checkMatch = function(guessedLetter, secretWord, underWord) {
  var noSpaces = underWord.replace(/\s+/g, '');
  var underArray = noSpaces.split("");

  console.log(underArray);
   for (i = 0; i < secretWord.length; i++) {
    if (guessedLetter === secretWord[i]) {
      underArray[i] = guessedLetter;
      console.log("test log " + i);
    }
  }
  var underWord = underArray.join(" ");
  console.log(underWord);
  return underWord;
};

var underscoreGenerate = function(word) {
  var letterArray = [];
  for (i = 0; i < word.length; i++) {
    letterArray.push(" _ ");
  }
  output = letterArray.join("");
  return output;
};



$(document).ready(function() {
  var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1'),
      fillContainer = function() {
        response = getDinos.responseJSON[0][0];
        makeDino(response.toLowerCase());
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };
      getDinos.then(fillContainer, oops);



function makeDino(dinoWord){

  var dinoWord1 = dinoWord;
  var underWord = ""

  $("#newGameButt").click(function(){
    $(".newGame").hide();
    console.log("makeDino2", dinoWord1);
    $("#letterGuessForm").show();
    var thisDino = new Dino();
    underWord = underscoreGenerate(dinoWord1);
    $('#gameWord').text(underWord);
  });

  $("#letterGuessForm").submit(function(event) {
    event.preventDefault();
    guess = $("#letterGuess").val().toLowerCase();
    success = checkMatch(guess, dinoWord1, underWord);
    if (success == underWord) {
      $('#letterList').append('<li>' + guess + '</li>');
    }
    else {
      $('#letterList').append('<li>' + guess + '</li>');
      $('#gameWord').text(success);
      underWord = success;
    }
  });
}
});
