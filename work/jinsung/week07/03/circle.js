function Circle () {
	this.x;
	this.y;
	this.speedX;
	this.speedY;

	this.size;

	this.setup = function (x_, y_, speedX_, speedY_) {
		this.x = x_;
		this.y = y_;
		this.speedX = speedX_;
		this.speedY = speedY_;
		this.size = 20;
	}

	this.moveCircle = function() {
		this.x += this.speedX; 
		this.y += this.speedY;
	}

	this.checkEdges = function() {
		if (this.x < 0) {
			this.x = 0;
			this.speedX = this.speedX * -1;
		} else if (this.x > width) {
			this.x = width;
			this.speedX *= -1;
		}

		if (this.y < 0) {
			this.y = 0;
			this.speedY *= -1;
		} else if (this.y > height) {
			this.y = height;
			this.speedY *= -1;
		}
	}

	this.drawCircle = function() {
		ellipse(this.x, this.y, this.size, this.size );
	}
}
