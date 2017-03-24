function Circle () {
	this.setup = function (x, y, size) {
		this.myX = x;
		this.myY = y;
		this.mySize = size;
		// assign x, y, size value to Circle member variable
	};

	this.draw = function () {
		ellipse(this.myX, this.myY, this.mySize);
		// draw ellipse with this.whatever values
	};
}