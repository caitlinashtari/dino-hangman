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
