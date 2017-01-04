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
