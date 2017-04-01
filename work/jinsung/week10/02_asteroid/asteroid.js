function Asteroid () {
	this.setup = function (loc, size) {
		this.size = size;
		this.maxSpeed = 3;
		this.position = createVector(loc.x, loc.y);
		this.velocity = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.isDead = false;
	};

	this.addForce = function (vector) {
		this.acc.add(vector);
	};

	this.update = function () {
		this.velocity.add(this.acc);
		this.position.add(this.velocity);
		this.velocity.limit(this.maxSpeed);

		if (this.position.x < 0 || this.position.x > width ||
			this.position.y < 0 || this.position.y > height) {
			this.isDead = true;
		}
	};

	this.hit = function () {

	};

	this.draw = function () {
		ellipse(this.position.x, this.position.y, this.size, this.size );
	};
}