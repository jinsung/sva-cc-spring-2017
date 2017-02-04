
var myX;
var myY;
var mySize
var myTargetX;
var myTargetY;

function setup () {  
	createCanvas(640, 480);
	
	mySize = 30;
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

    myX = myX + xDifferent * 0.05;
    myY = myY + yDifferent * 0.05;

    fill(100);

    ellipse(myX, myY, mySize, mySize);

}

	function mouseClicked(){
		myTargetX = mouseX;
		myTargetY = mouseY;


	}
