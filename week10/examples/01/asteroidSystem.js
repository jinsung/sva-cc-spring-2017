function AsteroidSystem () {
  this.setup = function () {
    this.asteroids = [];
  };

  this.spawnAsteroid = function () {
    var size = 50.0;
    var speed = 0.5;
    var angleDiff = 0.4;

    var prop = Math.random();
    var loc = createVector( random(0, width), 0 );
    var force = createVector( random(), 1.0 );
    if (prop < 0.25) {
      loc = createVector( random(0, width), height );
      force = createVector( random(-angleDiff, angleDiff), -1.0 );
    } else if ( prop < 0.5 ) {
      loc = createVector( width, random(0, height) );
      force = createVector( -1.0, random(-angleDiff, angleDiff) );
    } else if ( prop < 0.75 ) {
      loc = createVector( 0, random(0, height) );
      force = createVector( 1.0, random(-angleDiff, angleDiff) );
    }
    force.normalize();
    force.mult(speed);
    this.addAsteroid(loc, force, size);
  };

  this.addAsteroid = function (loc, force, size) {
    var asteroid = new Asteroid();
    asteroid.setup( loc.copy(), size );
    asteroid.addForce(force.copy());
    this.asteroids.push(asteroid);
  }

  this.update = function () {
    for (var i = this.asteroids.length - 1; i >= 0 ; i--) {

      this.asteroids[i].update();
      this.asteroids[i].separate(this.asteroids);
      if (this.asteroids[i].isDead) {
        this.asteroids.splice(i, 1);
      }
    }
  }

  this.hit = function(asteroidIndex) {
    var loc = this.asteroids[asteroidIndex].loc.copy();
    var origHeadingAngle = this.asteroids[asteroidIndex].acc.heading();
    var headingAngle1 = origHeadingAngle + Math.PI/2.0;
    var headingAngle2 = origHeadingAngle - Math.PI/2.0;
    var size = this.asteroids[asteroidIndex].size * 0.5;
    this.asteroids.splice(asteroidIndex, 1);
    this.addAsteroid(loc,
                     p5.Vector.fromAngle(headingAngle1).mult(5),
                     size);
    this.addAsteroid(loc,
                     p5.Vector.fromAngle(headingAngle2).mult(5),
                     size);

  }

  this.draw = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw();
    }
  };
}
