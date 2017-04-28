function Bullet () {
	this.setup = function (pos, angle) {
		this.rotation = angle;
		this.pos = pos.copy();
		this.vel = p5.Vector.fromAngle(angle);
		this.vel.mult(20);
		this.size = 5;
		this.isDead = false;
	};

	this.update = function () {
		this.pos.add(this.vel);

		if (this.pos.x < 0 || this.pos.x > width || 
			this.pos.y < 0 || this.pos.y > height)
			this.isDead = true;

	this.hit = function () {
		this.isDead = true;
	}

	};

	this.draw = function () {
		fill(20, 255, 20);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);

	};
}