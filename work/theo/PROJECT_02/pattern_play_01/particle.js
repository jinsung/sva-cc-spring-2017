var myRed;
var myGreen;
var myBlue;

function Particle() {
	this.setup = function (x, y, size) {
		this.myX = x + (size * 0.5);
		this.myY = y + (size * 0.5);
		this.mySize = Math.random() * size;	
		myRed = 10;
		myGreen = 255;
		myBlue = 255;
	};

	this.draw = function (time) {
		var k = (time * 0.0001123) % 2;
		this.mySize = Math.sin(Math.cos(this.myY * k) + Math.sin(this.myX * (1-k)) ) * 20.0;
		fill(myRed, myGreen, myBlue);
		ellipse(this.myX, this.myY, this.mySize, this.mySize);	
		
	};
}