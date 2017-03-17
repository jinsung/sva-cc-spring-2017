var backgroundColor = 0;
var target1X = 200;
var target1Y = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  backgroundColor = getDistance(target1X, target1Y, mouseX, mouseY);
  background(backgroundColor);

  drawTarget(target1X, target1Y, 5, 80);

  drawTarget(mouseX, mouseY, 10, 50);
}

function drawTarget(x, y, numOfCircles, targetSize, targetHue) {
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles; // range from 1 to 0.
    fill(step*255);
    var size = targetSize * step;
    ellipse(x, y, size, size );
  }
}

function getDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var result = Math.sqrt(dx*dx + dy*dy);
  return result;
}
