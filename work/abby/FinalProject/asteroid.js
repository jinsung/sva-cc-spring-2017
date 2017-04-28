function Asteroid () {

  this.setup = function (loc, size) {
    this.size = size;
    this.loc = createVector(loc.x, loc.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.isDead = false;
  };

  this.addForce = function (force) {
    this.acc.add(force);
  }

  this.hit = function () {
    this.size /= 2.0;
  }

  this.update = function () {
      this.vel.add(this.acc);
      this.vel.limit(0.5);
      this.loc.add(this.vel);
      this.vel.mult(0);

      if (this.size < 10 || this.loc.x > width || this.loc.x < 0 ||
          this.loc.y > height || this.loc.y < 0 ) {
        this.isDead = true;
      }
  };

  this.draw = function () {
    noFill(0, 0, 0);
    stroke( 255 );
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
  };

  this.separate = function (others) {
    var count = 0;
    var sumForce = createVector(0, 0);
    for (var i = 0; i < others.length; i++) {
      var other = others[i];
      var distance = p5.Vector.dist(this.loc, other.loc);
      if (distance !== 0) {
      if (distance < (this.size/2 + other.size/2)) {
        var difference = p5.Vector.sub(this.loc, other.loc);
        difference.normalize();
        sumForce.add(difference);
        count++;
      }
      }
    }

    sumForce.div(count);

    this.addForce(sumForce);
  }


}
