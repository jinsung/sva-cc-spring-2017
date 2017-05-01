function Asteroid () {
	this.setup = function (loc) {
		this.size = 50;
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
	};

	this.draw = function () {
		ellipse(this.position.x, this.position.y, this.size, this.size );
	};
}