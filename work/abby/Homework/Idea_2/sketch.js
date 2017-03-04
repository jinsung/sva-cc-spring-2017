var myRed;
var myGreen;
var myBlue;
var mySize;
var myX;
var myY;

function setup () {
  createCanvas(580, 580);
  background(248, 177, 149);
  ellipse(100, 100, 98), fill(242, 114, 128), noStroke();
  ellipse(100, 100, 100), fill(192, 108, 133), noStroke();
  ellipse(290, 290, 100), fill(108, 92, 124), noStroke();
  ellipse(500, 500, 100), fill(108, 92, 124), noStroke();
  
}

function draw() {
  myRed = (242, 114, 128);
  myGreen = (192, 108, 133);
  myBlue = (108, 92, 124);

  mySize = random(3);
  myX = random(width);
  myY = random(height);

  fill(myRed, myGreen, myBlue);
  noStroke();
  fill(52, 63, 126);

  rect(myX, myY, mySize, mySize);

}

function mouseClicked(){
  if (mouseIsPressed) {
    ellipse(100, 100, 98), fill(242, 114, 128), noStroke();
    ellipse(100, 100, 100), fill(192, 108, 133), noStroke();
    ellipse(290, 290, 100), fill(108, 92, 124), noStroke();
    ellipse(500, 500, 100), fill(108, 92, 124), noStroke();
  } else {
    background (248, 177, 149);
    ellipse(100, 100, 98), fill(242, 114, 128), noStroke();
    ellipse(100, 100, 100), fill(192, 108, 133), noStroke();
    ellipse(290, 290, 100), fill(108, 92, 124), noStroke();
    ellipse(500, 500, 100), fill(108, 92, 124), noStroke();
  }
}