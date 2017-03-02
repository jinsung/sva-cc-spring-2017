function Particle() {
  this.setup = function(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
  }

  this.update = function (x, y, size) {
    this.x = x;
    this.y = y;
  }

  this.draw = function (index) {
    push();
    translate(this.x, this.y);
    rotate(index/100 * Math.PI * 2.0);
    rect(0, 0, this.size, this.size);
    pop();
  }
}
