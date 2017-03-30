function Circle() {
	this.setup = function (x, y, size) {
			this.x = x;
			this.y = y;
			this.size = size;
			// assign x, y, size value to Circle member variable
	};

	this.draw = function () {
		ellipse(this.x, this.y, this.size, this.size);
			// draw ellipse with this.whatever values.
			
	};
}