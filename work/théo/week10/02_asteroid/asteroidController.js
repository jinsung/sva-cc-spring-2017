function AsteroidController () {

	this.setup = function ( ) {
		this.asteroids = [];

	};

	this.addAsteroid = function () {
		var prob = random(0, 1);
		var asteroid = new Asteroid();
		var force = createVector(0, 0);
		var af = 0.7;
		var speed = 1;
		if (prob < 0.25) {
			var randomY = random(0, height);
			var loc = createVector (0, randomY);
			force = createVector(speed, random(-af, af) );

		}else if (prob < 0.5) {
			var randomY = random(0, height);
			var loc = createVector(width, randomY);
			force = createVector( -speed, random(-af, af));

		}else if (prob < 0.75) {
			var randomX = random(0, width);
			var loc = createVector (randomX, 0);
			force = createVector(random(-af, af), speed);

		}else{
			var randomX = random(0, width);
			var loc = createVector (randomX, height);
			force = createVector(random(-af, af), -speed);
		}

		asteroid.setup(loc);
		asteroid.addForce(force);


		this.asteroids.push(asteroid);
	};
	this.hit = function (index, angle) {

		var speed = 0.9;
		var asteroid1 = new Asteroid();
		var newSize = this.asteroids[index].size * 0.5;
		asteroid1.setup(this.asteroids[index].position, newSize);
		var force1 = p5.Vector.fromAngle(angle + Math.PI/2);
		force1.mult(3);
		asteroid1.addForce(force1);
		this.asteroids.push(asteroid1);

		var asteroid2 = new Asteroid();
		var newSize = this.asteroids[index].size * 0.5;
		asteroid2.setup(this.asteroids[index].position, newSize);
		var force2 = p5.Vector.fromAngle(angle - Math.PI/2);
		force2.mult(3);
		asteroid2.addForce(force2);
		this.asteroids.push(asteroid2);

		this.asteroids[index].isDead;
		this.asteroids.splice(index, 1);

	

	};

	this.update = function () {
		for (var i = 0; i < this.asteroids.length; i++) {
			var a = this.asteroids[i];
			a.update();
			if (a.isDead) {
				this.asteroids.splice(i, 1);
			}
		}
	};

	this.draw = function () {
		for (var i = 0; i < this.asteroids.length; i++) {
			var a = this.asteroids[i];
			a.draw();
		}
	};
}