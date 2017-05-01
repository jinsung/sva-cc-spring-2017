function Particle() {
  this.setup = function(x, y, size) {
    this.update(x, y, size);

  }

  this.update = function (x, y, size) {
    this.x = x;
    this.y = y;
    var newSize = size * Math.random();
    //var newSize = size * 0.5 + (Math.cos(this.x * 0.1) + Math.sin(this.y * 0.1)) * 2.0;
    //var newSize = size * 0.3 + Math.sin(this.x * this.y);
    this.size = newSize;
  }

  this.draw = function (time) {
    //var k = (time * 0.0001123) % 1;
    //this.size = Math.sin(Math.sin(Math.cos(this.y * k) + Math.sin(this.x * 1-k))) * ((k*30)+2.0);
    //fill(Math.pow(this.size, 2)%255,  Math.pow(this.size, 3)%255, 250);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
