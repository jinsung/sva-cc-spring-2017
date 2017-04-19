 var xPosition;
 var yPosition;
 var colorIncrease = 10;

  function setup () {
  createCanvas(640, 640);
  background(0);
  stroke(0, 255, 0);
  fill(0,0,0);
  ellipse(320,320,500,500);
  fill(0,0,0);
  ellipse(320,320,300,300);
  fill(0,0,0);
  ellipse(320,320,100,100);

  fill(255,0,0);
  ellipse(100,100,100,100);

  fill(127,0,0);
  ellipse(100,100,15,15);

    fill(255,0,0);
  ellipse(100,540,100,100);

  fill(127,0,0);
  ellipse(100,540,15,15);

    fill(255,0,0);
  ellipse(540,540,100,100);

  fill(127,0,0);
  ellipse(540,540,15,15);

  fill(255,0,0);
  ellipse(540,100,100,100);

  fill(127,0,0);
  ellipse(540,100,15,15);

  fill(255,0,0);
  ellipse(320,320,15,15);

}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (240, 0, 0);
  ellipse(mouseX, mouseY, 100, 100);

  fill (220, 0, 0);
  ellipse(mouseX, mouseY, 80, 80);

  fill (200, 0, 0);
  ellipse(mouseX, mouseY, 60, 60);

  fill (180, 0, 0);
  ellipse(mouseX, mouseY, 40, 40);

  fill (160, 0, 0);
  ellipse(mouseX, mouseY, 20, 20);
}

function draw() {
  fill (255,0,0);
  ellipse(mouseX, mouseY, 20, 20);

}

var circleX = 10;
var circleY = 20;
var circleSize = 20;
var speedX = 2;
var speedY = 2.1;



function draw() {


  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  circleX += speedX;
  circleY += speedY;

  if (circleX > width || circleX < 0) {
    speedX *= -1;
  } else if (circleY > height || circleY < 0) {
    speedY *= -1;
  }

}


