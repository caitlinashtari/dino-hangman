(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Dino() {
  this.word = "";
}




// var output = underscoreGenerate(that.word);
// $(".dinoWord").html(output);

exports.dinoModule = Dino;

},{}],2:[function(require,module,exports){
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
    if (success === dinoWord1) {
      console.log("fail");
    }
    else {
      $('#gameWord').text(success);
      underWord = success;
      console.log("dinoword" + dinoWord1);
    }
  });
}
});

},{"./../js/dino.js":1}]},{},[2]);
