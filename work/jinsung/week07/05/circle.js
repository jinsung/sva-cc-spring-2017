function Circle () {
	this.position;
	this.velocity;
	this.acceleration;

	this.size;

	this.setup = function (pos_, size_) {
		this.position = pos_.copy();
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.size = size_;
	}

	this.addForce = function (force) {
		this.acceleration.add(force);
	}

	this.moveCircle = function() {
		var mass = this.size / 20;
		var acc = this.acceleration.div(mass);
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	this.checkEdges = function() {
		if (this.position.x < 0) {
			this.position.x = 0;
			this.velocity.x *= -1;
		} else if (this.position.x > width) {
			this.position.x = width;
			this.velocity.x *= -1;
		}

		if (this.position.y < 0) {
			this.position.y = 0;
			this.velocity.y *= -1;
		} else if (this.position.y > height) {
			this.position.y = height;
			this.velocity.y *= -1;
		}
	}

	this.drawCircle = function() {
		ellipse(this.position.x, this.position.y, this.size, this.size );
	}
}
