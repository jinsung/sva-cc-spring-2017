function ParticleSystem() {

  this.setup = function (gap) {
    this.particles = [];
    this.gap = gap;
    for (var y = 0; y < height; y += gap ) {
      for (var x = 0; x < width; x += gap ) {
        this.addParticle(x + gap * 0.5, y + gap * 0.5);
      }
    }
  }

  this.addParticle = function (x, y) {
    var p = new Particle();
    p.setup(x, y, this.gap);
    this.particles.push(p);
  }

  this.draw = function (time) {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(time);
    }
  }

}
