function Particle() {
	this.setup = function (x, y, size) {
		//this.myX = x
		//this.myY = y
		this.myX = x + (size * 0.5); //move circles to half right by adding (size * 0.5)
		this.myY = y + (size * 0.5);
		this.mySize = Math.random() * size;
	};

	this.draw = function (time) {
		var k = (time * 0.0001123) % 1; //k < 1
		//this.mySize = Math.sin(this.myX * k) * 10.0; //horizontally move
		//this.mySize = Math.cos(this.myY * k) * 10.0; //vertically move
		this.mySize = Math.sin(Math.cos(this.myY * k) + Math.sin(this.myX * 1 - k)) * 5.0;
		fill(this.size % 255, (this.size * 3) % 255, 230);
		ellipse (this.myX, this.myY, this.mySize, this.mySize);
	};
}