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
