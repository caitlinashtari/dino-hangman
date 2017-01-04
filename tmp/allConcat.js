var Dino = require('./../js/dino.js').dinoModule;

var wordDisplay = function(word) {
  var letterArray = [];
  for (i = 0; i < word.length; i++) {
    letterArray.push(" _ ");
  }
  output = letterArray.join("");
  $(".dinoWord").html(output);
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
