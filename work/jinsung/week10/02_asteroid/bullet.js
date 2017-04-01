function Bullet () {
	this.setup = function (pos, angle) {
		this.pos = pos.copy();
		this.vel = p5.Vector.fromAngle(angle);
		this.vel.mult(10);
		this.size = 5;
		this.isDead = false;
	};

	this.update = function () {
		this.pos.add(this.vel);

		if (this.pos.x < 0 || this.pos.x > width ||
			this.pos.y < 0 || this.pos.y > height) {
			this.isDead = true;
		}
	};

	this.hit = function () {
		this.isDead = true;
	}

	this.draw = function () {
		ellipse (this.pos.x, this.pos.y, this.size, this.size);
	};
}