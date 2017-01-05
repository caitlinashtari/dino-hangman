(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Dino() {
  this.word = ""
};




// var output = underscoreGenerate(that.word);
// $(".dinoWord").html(output);

exports.dinoModule = Dino;

},{}],2:[function(require,module,exports){
var Dino = require('./../js/dino.js').dinoModule;

var checkMatch = function(guessedLetter, secretWord) {
  console.log("check for secret word" + secretWord);
  for (i = 0; i < secretWord.length; i++) {
    if (guessedLetter == secretWord[i]) {
      secretWord.replace(secretWord[i], guessedLetter);
      return true;
    }
  }
};

var underscoreGenerate = function(word) {
  var letterArray = [];
  for (i = 0; i < word.length; i++) {
    letterArray.push(" _ ");
  }
  output = letterArray.join("");
  return output;
};
//
// var word = ""
//
// var getDinoIpsum = function() {
//   $.get('http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1').then(function(response) {
//     word = response
//     console.log(response);
//     return word;
//   }).fail(function(error) {
//     $(".dinoWord").text("ERROR");
//   });
//   console.log("this is a te4st" + word);
// };

// var getDinoIpsum = function(displayResponse) {
//   $.get('http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1').then(function(response) {
//     console.log("inside function" + response);
//     displayResponse(response);
//   }).fail(function(error) {
//     $(".dinoWord").text("ERROR");
//   });
// };


var dinoWord = ""
$(document).ready(function() {
  var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1'),
      fillContainer = function(html) {
        $('#specialDiv').text(html);
        response = getDinos.responseJSON[0][0];
        makeDino(response);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };
      getDinos.then(fillContainer, oops);

console.log("test dino word " + getDinos.responseJSON);

  $("#letterGuessForm").submit(function(event) {
    event.preventDefault();
    guess = $("#letterGuess").val();
    success = checkMatch(guess, dinoWord);
    if (success === true) {
      console.log("WOOT");
    } else {
      console.log("FAIL");
    }
  });
function makeDino(dinoWord){

  var dinoWord1 = dinoWord;
  $("#newGameButt").click(function(){
    $(".newGame").hide();
    console.log("makeDino2",dinoWord1);
    $("#letterGuessForm").show();
    var dinoWord = getDinoIpsum();
    console.log("love it" + dinoWord);
    var thisDino = new Dino();
  });
}
});

},{"./../js/dino.js":1}]},{},[2]);
