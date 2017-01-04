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
