function Ship () {
	this.setup = function () {
		this.width = 40;
		this.height = 40;
		this.position = createVector(120, 345);
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0,0);
		this.rotation = 4.72;
		this.bullets = [];
	}

	this.addForce = function (vector) {
		vector.rotate(this.rotation);
		this.acceleration.add(vector);
	}

	this.fire = function () {
		var b = new Bullet();
		b.setup(this.position, this.rotation);
		this.bullets.push(b);
	}

	this.update = function () {
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.velocity.mult(0.98);
		this.acceleration.mult(0);

		if (this.position.x > width) {
			this.position.x = 0;
		} else if (this.position.x < 0) {
			this.position.x = width;
		}

		if (this.position.y > height) {
			this.position.y = 0;
		} else if (this.position.y < 0) {
			this.position.y = height;
		}

		//for ( var i = 0; i < this.bullets.length; i++) {
		for (var i = this.bullets.length - 1; i >= 0; i --) {
			this.bullets[i].update();

		}

	}

	this.draw = function () {
		push();
		translate (this.position.x, this.position.y);
		rotate(this.rotation);

		triangle(this.width/2, 0, 
				- this.width/2, - this.height/2,
				- this.width/2, this.height/2)

	pop();

	for (var i = 0; i < this.bullets.length; i++) {
		this.bullets[i].draw();
	}

	}
}