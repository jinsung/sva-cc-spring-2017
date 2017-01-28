var myXPosition = 0
var myYPosition = 0
var myTargetX
var myTargetY
var mySize;
var myX
var myY


function setup () {
  createCanvas(1000, 1000);
  background(70)
  mySize=50
  myX = random(width)
myY = random(height)
myTargetX=myX
myTargetY=myY
}

function draw() {

background(90)
var xDifferent = myTargetX - myX
var yDifferent = myTargetY - myY

myX = myX + xDifferent * 0.05
myY = myY + yDifferent * 0.05

fill(0)
ellipse(myX,myY,mySize,mySize)

}

function mouseClicked(){
	myTargetX=mouseX
	myTargetY=mouseY


}
