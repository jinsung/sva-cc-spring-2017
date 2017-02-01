
var myX;
var myY;
var mySize;
var myTargetX;
var myTargetY;
var myRed;
var myGreen;
var myBlue;

function setup () {
  createCanvas(640, 480);

  mySize = 20;
  myX = random(width);
  myY = random(height);
  myTargetX = myX;
  myTargetY = myY;
  noStroke();

}

function draw() {

  background(0);

  var xDifferent = myTargetX - myX;
  var yDifferent = myTargetY - myY;
  var speed = 0.1;
  myX = myX + xDifferent * speed;
  myY = myY + yDifferent * speed;

  myRed = random(255);
  myGreen = random(255);
  myBlue = random(255);

  fill(myRed,myGreen,myBlue);

  ellipse(myX, myY, mySize, mySize);

}
function mouseClicked() {
	myTargetX = mouseX;
	myTargetY = mouseY;

}
