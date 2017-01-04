(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Dino() {
  this.word;
};

var underscoreGenerate = function(word) {
  var letterArray = [];
  for (i = 0; i < word.length; i++) {
    letterArray.push(" _ ");
  }
  output = letterArray.join("");
  return output
};

Dino.prototype.getDinoIpsum = function() {
  console.log("getDinoIpsum has been called");
  $.get('http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1').then(function(response) {
    word = (JSON.stringify(response));
        console.log(word);
    var output = underscoreGenerate(word);
        console.log("Test" + output);
    $(".dinoWord").html(output);
  }).fail(function(error) {
    $(".dinoWord").text("ERROR");
  });
};


var checkMatch = function(guessedLetter) {
  var success = false;
  for (i = 0; i < secretWord.length; i++) {
    if (guessedLetter == secretWord[i]) {
      secretWord.replace(secretWord[i], guessedLetter);
      success = true;
    }
  }
  return success;
};

exports.dinoModule = Dino;

},{}],2:[function(require,module,exports){
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

},{"./../js/dino.js":1}]},{},[2]);
