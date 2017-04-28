function Ship () {
	this.setup = function () {
		this.width = 60;
		this.height = 30;
		this.position = createVector(width/2, height/2);
		this.velocity = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.rotation = 0;
	};

	this.addForce = function (vector) {
		vector.rotate(this.rotation);
		this.acc.add(vector);
	};

	this.rotate = function ( value ) {
		this.rotation += value;
	};

	this.update = function () {
		this.velocity.add(this.acc);
		this.position.add(this.velocity);
		this.velocity.mult(0.98);
		this.acc.mult(0);

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

	};

	this.draw = function () {
		push();
		translate ( this.position.x, this.position.y );
		rotate(this.rotation);

		triangle( this.width/2, 0, 
				  - this.width/2, - this.height/2,
				  - this.width/2,   this.height/2 )
		pop();
	};
}