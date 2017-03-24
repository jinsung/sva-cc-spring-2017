function Rocket () {
  this.width = 20;
  this.height = 10;
  this.setup = function (loc) {
    this.loc = createVector(loc.x, loc.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.size = 20;
    this.angle = 0;
  };

  this.addForce = function (speed) {
    var force = createVector(speed, 0);
    force.rotate(this.angle);
    this.acc.add(force);
  }

  this.rotate = function (value) {
    this.angle += value;
  }

  this.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);
    if (this.loc.x < 0) {
      this.loc.x = width;
    } else if (this.loc.x > width) {
      this.loc.x = 0;
    }
    if (this.loc.y < 0) {
      this.loc.y = height;
    } else if (this.loc.y > height) {
      this.loc.y = 0;
    }

  };

  this.draw = function () {
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    fill(255, 0, 0);
    noStroke();

    triangle(this.width/2, 0,
             -this.width/2, -this.height/2,
             -this.width/2, this.height/2);
    pop();
  };

  this.isHit = function (asteroids) {
    for (var i = 0; i < asteroids.length; i++) {
      var a = asteroids[i];
      var distance = p5.Vector.dist(this.loc, a.loc);
      if (distance < (this.width/2 + a.size/2)) {
        return true;
      }
    }
    return false;
  }
}
