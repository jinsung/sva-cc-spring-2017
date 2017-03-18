function Particle(){
	this.setup = function (x, y, size){
		this.myX = x + (size * 0.5);
		this.myY = y + (size * 0.5);
		this.mySize = Math.random() *size;
	};

	this.draw = function (time){
		var k = (time * 0.0001123) % 1;
		this.mySize = Math.sin(Math.cos(this.myY * k) + Math.sin(this.myX * 1-k)) * 3.0;
		fill(this.size % 255, (this.mySize * 3) % 255, 222);
		ellipse(this.myX, this.myY, this.mySize, this.mySize);	

	};
}