var numOfPoints = 100;
var numOfCircles = 20;
var prevPos;
var time;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255);
    smooth();
    time = 0;
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  var size = width * 0.45;
  prevPos = createVector(0,0);
  nPrevPos = createVector(0,0);
  noiseScale = 0.03;
  //var noiseXScale = mouseX/width * 0.2;
  //var noiseYScale = mouseY/height * 0.2;
  time+= 0.01;
  push();
  strokeWeight(1);
  for (var j = 0; j < numOfCircles; j++) {
    size = (width * 0.45) * ((j+1)/numOfCircles)
    for (var i = 0; i < numOfPoints; i++) {

      var x = width/2 + Math.cos(Math.PI * 2.0 * i/(numOfPoints-2)) * size;
      var y = height/2 + Math.sin(Math.PI * 2.0 * i/(numOfPoints-2)) * size;

      var noiseVal = noise(time, x*noiseScale, y*noiseScale)
      var noisePos = map(noiseVal, 0, 1, -5, 5);

      var nx = x + noisePos;
      var ny = y + noisePos;
      if (i > 1) {
        stroke( ((j/numOfCircles) * 255) );
        line(prevPos.x, prevPos.y, nx, ny);
      }
      prevPos.set(nx, ny);
    }
  }
  pop();
}
