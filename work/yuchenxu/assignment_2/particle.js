

function Particle(){
	this.setup = function (x,y,size){
		this.myX = x + (size * 0.5);
		this.myY = y + (size * 0.5);
		this.mySize = Math.random() * size;

	};
	this.draw = function (time){
		var k = (time * 0.0001123) % 5;
		this.mySize = Math.sin( Math.cos(this.myY * k) + Math.sin(this.myX * 1 - k)) * 5.0;
		fill(this.myX, this.myY, this.mySize);
		rect(this.myX, this.myY, 1, this.mySize);

	};
}