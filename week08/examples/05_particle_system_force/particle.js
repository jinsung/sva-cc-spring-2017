function Particle() {
  this.setup = function(pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  this.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.draw = function (index) {

    ellipse(this.x, this.y, this.size, this.size);
  }
}
