function AsteroidSystem () {
  this.setup = function () {
    this.asteroids = [];
  };

  this.addAsteroid = function (rocketLoc) {
    var speed = 0.5;
    var angleDiff = 0.4;
    var asteroid = new Asteroid();
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
    asteroid.setup( loc );
    asteroid.addForce(force);
    this.asteroids.push(asteroid);
  };

  this.update = function () {
    for (var i = 0; i < this.asteroids.length; i++) {

      this.asteroids[i].update();
      this.asteroids[i].separate(this.asteroids);
      if (this.asteroids[i].isOutOfCanvas()) {
        this.asteroids.splice(i, 1);
      }
    }
  }

  this.draw = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw();
    }
  };
}
