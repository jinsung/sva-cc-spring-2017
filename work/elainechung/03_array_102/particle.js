function Particle() {
	this.setup = function (x, y, size) {
		this.update(x, y);
		this.mySize = size;
	};
	
	this.update = function (x, y) {
		this.myX = x;
		this.myY = y;
	};

	this.draw = function () {
		ellipse(this.myX, this.myY,
			this.mySize, this.mySize);
	};
}
