function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  var numOfCircles = 5;
  var targetSize = 100;
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles;
    var size = (targetSize * step);
    ellipse(width/2, height/2, size, size );
  }
}
