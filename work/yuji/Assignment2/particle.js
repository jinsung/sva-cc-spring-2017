var mouseX = 50;
var r = 255;
var g = 0;
var b = 0;

function Particle() {
  this.setup = function(pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.age = 0;
    this.size = 100;
    this.lifeSpan = 300;
    this.isDead = false;
    this.mass = Math.random() + 0.1 * 5.0;
    this.damping = 1.00;
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function () {
    this.age ++;
    if (this.age > this.lifeSpan ||
        (this.pos.x < 0 || this.pos.x > width) ||
        (this.pos.y < 0 || this.pos.y > height) ) {
      this.isDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
  }

  this.draw = function (index) {
      
    rect(this.pos.x, this.pos.y, this.size, this.size);
     fill(r, g, b, 40);
       mouseX = mouseX + 1;
       r = r - 0.5
       g = g + 0.5
       b = b + 0.1
       if (r > 5) {
       r = r - 2}
       else{
       r = r + 1}
       if (g > 2) {
       g = g - 0.2}
       else{
       g = g + 1}
};
  

}
