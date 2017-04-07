function Particle(){

	this.setup = function(x, y, size){
		this.update(x, y, size);
	};

	this.update = function(x, y, size){
		this.x = x;
		this.y = y;
		var chSize = size * 0.7 + Math.cos(this.x * this.y);
		this.size = chSize;
	}

	this.draw = function(time){
		var k = (time * 0.0001123) % 1;
		this.size = Math.sin(Math.sin(Math.cos(this.y * k)+ Math.sin(this.x * 1-k))) * ((k * 40) + 6.0);
		fill(Math.pow(this.size, 2)%255, Math.pow(this.size, 2) % 255, 200);
		
		ellipse(this.x, this.y, this.size, this.size);
	}
}