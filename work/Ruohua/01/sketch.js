
var myX;
var myY; 
var mySize;
var myTargetX;
var myTargetY;
// my change

function setup () {
  createCanvas(1000, 1000);
 
  mySize = 20
  myX = random(width);
  myY = random(height);
  myTargetX = myX
  myTargetY = myY;
  noStroke();
}

function draw() {
background(0);
   var xDifferent = myTargetX - myX;
   var yDifferent = myTargetY - myY;
   var speed = 0.2
   myX = myX + xDifferent * speed
   myY = myY + yDifferent * speed

   fill(100);

   ellipse(myX, myY, mySize, mySize);
}

function mouseClicked() {
	myTargetX = mouseX;
	myTargetY = mouseY;

}


 

