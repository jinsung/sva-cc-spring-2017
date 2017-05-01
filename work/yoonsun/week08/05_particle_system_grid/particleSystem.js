function ParticleSystem () {

	this.setup = function(gap) {
		this.particles = [];
		var index = 0;
		var size = 10;

		for(var y = 0; y < height; y += gap) {

			for(var x = 0; x < width; x += gap) {
				size = Math.random() * 10;
				this.particles[index] = new Particle();
				this.particles[index].setup(x + gap/2, y + gap/2, size);
				index++;
				console.log("x: " + x + "y: " + y);
			}
		}
	}

	this.draw = function() {

		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].draw();
		}
	}
}