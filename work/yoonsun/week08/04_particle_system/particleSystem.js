function ParticleSystem () {

	this.setup = function(numOfParticles) {
		this.particles = [];
		for (var i = 0; i < numOfParticles; i++) {
			this.particles[i] = new Particle();
			this.particles[i].setup(Math.random() * width,
									Math.random() * height, 20);
		}
	}

	this.draw = function() {

		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].draw();
		}
	}
}