function Asteroid () {

  this.setup = function (loc) {
    this.size = 50;
    this.loc = createVector(loc.x, loc.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  };

  this.addForce = function (force) {
    this.acc.add(force);
  }

  this.update = function () {
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.vel.mult(0);
      //this.acc.mult(0);
  };

  this.draw = function () {
    noFill(0, 0, 0);
    stroke( 255 );
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
  };

  this.isOutOfCanvas = function () {
    if (this.loc.x > width || this.loc.x < 0 ||
        this.loc.y > height || this.loc.y < 0 ) {
      return true;
    }
    return false;
  }
}
