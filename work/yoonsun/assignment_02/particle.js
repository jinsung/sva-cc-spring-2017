var myR;
var myG;
var myB;

function Particle() {
	this.setup = function (x, y, size) {
		this.myX = x + (size * 0.5);
		this.myY = y + (size * 0.5);
		this.mySize = Math.random() * size;	

		myR = 20;
		myG = 50;
		myB = 100;
	}

	this.draw = function (time) {
		var k = (time * 0.0001123) % 2;
		this.mySize = Math.cos(this.myY * k) * 10.0;
		//this.mySize = Math.sin(Math.cos(this.myY * k) + Math.sin(this.myX * 1 - k)) * 10.0;
		fill(myR, myG, myB);
		ellipse(this.myX, this.myY, this.mySize, this.mySize);	
	}
}