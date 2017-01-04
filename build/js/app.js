(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Dino = function(){
};

Dino.prototype.getDinoIpsum = function(displayFunction) {
  console.log("getDinoIpsum has been called");
  $.get('http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1').then(function(response) {
    console.log(JSON.stringify(response));
    displayFunction(response);
  }).fail(function(error) {
    $(".dinoDisplay").text("ERROR");
  });
};

// Dino.prototype.checkMatch = function(letter) {
//
// };



exports.dinoModule = Dino;

},{}],2:[function(require,module,exports){
var Dino = require('./../js/dino.js').dinoModule;

var wordDisplay = function(word) {
  $(".dinoWord").html(word);
};

$(document).ready(function() {
  // $("#dinoForm").submit(function(event) {
  //   event.preventDefault();
  //
  // });

  $("#newGameButt").click(function(){
    $(".newGame").hide();
    $("#dinoForm").show();
    var thisDino = new Dino();
    var output = thisDino.getDinoIpsum(wordDisplay);
    wordDisplay(output);
  });
});

},{"./../js/dino.js":1}]},{},[2]);
