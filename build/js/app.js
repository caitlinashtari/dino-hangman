(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Dino = function(){
};

Dino.prototype.getDinoIpsum = function(paragraphs, words, displayFunction) {
  console.log("getDinoIpsum has been called");
  $.get('http://dinoipsum.herokuapp.com/api/?paragraphs=' + paragraphs + '&words=' + words).then(function(response) {
    console.log(JSON.stringify(response));
    displayFunction(response);
  }).fail(function(error) {
    $(".dinoDisplay").text("ERROR");
  });
};



exports.dinoModule = Dino;

},{}],2:[function(require,module,exports){
var Dino = require('./../js/dino.js').dinoModule;

var dinoDisplay = function(apiResponse) {
  $(".dinoDisplay").text(apiResponse);
};

$(document).ready(function() {
  $("#dinoForm").submit(function(event) {
    event.preventDefault();
    var words = $("#words").val();
    var paragraphs = $("#paragraphs").val();
    var thisDino = new Dino();
    var output = thisDino.getDinoIpsum(paragraphs, words, dinoDisplay);
  });
});

},{"./../js/dino.js":1}]},{},[2]);
