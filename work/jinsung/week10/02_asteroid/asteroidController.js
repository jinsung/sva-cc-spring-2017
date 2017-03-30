function AsteroidController () {

	this.setup = function ( ) {
		this.asteroids = [];
	};

	this.addAsteroid = function () {
		var prob = random(0, 1);
		var asteroid = new Asteroid();
		var force = createVector(0,0);
		var af = 0.4;
		var speed = 0.7;
		if (prob < 0.25) {
			// create asteroid on left side...
			var randomY = random(0, height);
			var loc = createVector (0, randomY);
			force = createVector( speed, random(-af, af) );
		} else if (prob < 0.5) {
			// create asteroid on right side..
			var randomY = random(0, height);
			var loc = createVector(width, randomY);
			force = createVector( -speed, random(-af, af) );
		} else if (prob < 0.75) {
			// create asteroid on top side..
			var randomX = random(0, width);
			var loc = createVector(randomX, 0);
			force = createVector( random(-af, af), speed );
		} else {
			// create asteroid on bottom side..
			var randomX = random(0, width);
			var loc = createVector(randomX, height);
			force = createVector( random(-af, af), -speed );
		}

		asteroid.setup(loc);
		asteroid.addForce(force);

		this.asteroids.push(asteroid);
	};

	this.update = function () {
		for (var i = 0; i < this.asteroids.length; i++ ) {
			var a = this.asteroids[i];
			a.update();
		}
	};

	this.draw = function () {
		for (var i = 0; i < this.asteroids.length; i++ ) {
			var a = this.asteroids[i];
			a.draw();
		}
	};
}