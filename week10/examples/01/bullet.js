function Bullet () {

  this.setup = function (loc, angle) {
    var maxDistance = 100;
    this.loc = loc.copy();
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(10);
    this.size = 5;
    this.isDead = false;
  };

  this.update = function () {
    if (this.loc.x < 0 || this.loc.x > width ||
        this.loc.y < 0 || this.loc.y > height) {
          this.isDead = true;
    }
    this.loc.add(this.vel);
  };

  this.draw = function () {
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
  };
}
