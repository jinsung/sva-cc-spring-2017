// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2, c3, c4;
var myRed;
var myGreen;
var myBlue;
var mySize;
var myX;
var myY;

function setup() {
  createCanvas(580, 580);

  // Define colors
  b1 = color(192, 108, 133);
  b2 = color(248, 177, 149);
  c1 = color(52, 93, 126);
  c2 = color(108, 92, 124);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width, height, b1, b2, X_AXIS);
  // Foreground
  setGradient(90, 90, 400, 400, c1, c2, Y_AXIS);
  
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function mouseClicked(){
  if (mouseIsPressed) {
    ellipse(100, 100, 98), fill(242, 114, 128), noStroke();
    ellipse(100, 100, 100), fill(192, 108, 133), noStroke();
    ellipse(290, 290, 100), fill(108, 92, 124), noStroke();
    ellipse(500, 500, 100), fill(108, 92, 124), noStroke();
  } else {
    background (255);
    ellipse(100, 100, 98), fill(242, 114, 128), noStroke();
    ellipse(100, 100, 100), fill(192, 108, 133), noStroke();
    ellipse(290, 290, 100), fill(108, 92, 124), noStroke();
    ellipse(500, 500, 100), fill(108, 92, 124), noStroke();
  }
}

