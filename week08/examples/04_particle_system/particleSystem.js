function ParticleSystem() {

  this.setup = function (numOfParticles) {
    this.particles = [];
    this.numOfParticles = numOfParticles;
    for (var i = 0; i < this.numOfParticles; i++) {
      this.particles[i] = new Particle();
      var px = Math.random() * width;
      var py = Math.random() * height;
      this.particles[i].setup(px, py, 10);
    }
  }

  this.update = function () {
    
  }

  this.draw = function () {
    for (var i = 0; i < this.numOfParticles; i++) {
      this.particles[i].draw();
    }
  }

}
