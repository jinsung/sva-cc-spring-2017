function Asteroid () {
	this.setup = function (loc, size) {
		this.size = size;
		this.maxSpeed = 3;
		this.position = createVector(loc.x, loc.y);
		this.velocity = createVector(0, 0);
		this.acc = createVector(0, 0);
	};

	this.addForce = function (vector) {
		this.acc.add(vector);
	};

	this.update = function () {
		this.velocity.add(this.acc);
		this.position.add(this.velocity);
		this.velocity.limit(this.maxSpeed);

		if (this.position.x < 0 || this.position.x > width ||
			this.position.y < 0 || this.position.y > height ||
			this.size < 10) {
			this.isDead = true;
		}

		this.acc.mult(0);

	};

	this.hit = function() {

	};

	this.draw = function () {
		ellipse(this.position.x, this.position.y, this.size, this.size );
	};
}