 var myX;
 var myY;
 var mySize;
 var myTargetX;
 var myTargetY;

function setup () {
  createCanvas(375, 667);
  background(0);
  mySize = 50;
  myX = random(width);
  myY = random(height);
  myTargetX = myX;
  myTargetY = myY;
  noStroke();
  stroke(255);
}

function draw() {
  background (0);
  var xDifferent = myTargetX - myX;
  var yDifferent = myTargetY - myY;
  var speeeeeeed = 0.05;
  myX = myX + xDifferent * speeeeeeed;
  myY = myY + yDifferent * speeeeeeed;

  fill(100);

  ellipse (myX, myY, mySize, mySize);

}

function mouseClicked() {
  myTargetX = mouseX;
  myTargetY = mouseY;

}
