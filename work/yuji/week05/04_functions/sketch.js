var mouseX;
var mouseY;
var circleSize;

function setup() {
  createCanvas(480 , 480);
 }

function draw() {
  background(200);
  drawTarget(100, 100);
  drawTarget(300, 300);
  drawTarget(300, 100);

function drawTarget( x , y, circleSize, numOfCircles ) {
  circleSize = 300;
  var numOfCircles = 10;
  for (var i = 0; i < numOfCircles; i++) {
    var segment = i/numOfCircles;
    fill(segment * 255);
    circleSize = circleSize - segment * circleSize;
    ellipse(x, y, circleSize, circleSize );
  }
}

