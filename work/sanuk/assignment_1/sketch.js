var xPosition;
var yPosition;
var colorIncrease = 10;

function setup() {
  createCanvas(640, 640);
  strokeWeight(4);
  background(0);
}

function draw() {
  background(100);
  ellipseMode(CENTER);
 

  fill (mouseX / 2);
//  ellipse(mouseX, mouseY, 20, 20);
  ellipse(width/2, height/2, mouseX, mouseY);

  fill (255, 183, 68);
  ellipse(320, 320, 100, 100);

  fill (189, 132, 255);
  ellipse(320, 320, 80, 80);

  fill (121, 250, 161);
  ellipse(320, 320, 60, 60);

  fill (234, 234, 234);
  ellipse(320, 320, 40, 40);


  fill (frameCount + colorIncrease * 3,255, 0);
  ellipse(mouseX, mouseY, 20, 20);


}
