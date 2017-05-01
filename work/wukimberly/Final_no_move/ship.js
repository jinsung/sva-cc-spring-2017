function Ship () {
	this.setup = function (x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = 40;
		this.height = 40;
		this.speed = 10;
		this.position = createVector(120, 345);
		this.rotation = 4.72;
		this.bullets = [];
	} 

	this.moveRight = function () {
    	this.x = this.x + this.speed;
  }

  	this.moveLeft = function () {
    	this.x = this.x - this.speed;
  }
  
	this.fire = function () {
		var b = new Bullet();
		b.setup(this.position, this.rotation);
		this.bullets.push(b);
	}

	this.update = function () {
		
		for (var i = this.bullets.length - 1; i >= 0; i --) {
			this.bullets[i].update();

		}

	}

	this.draw = function () {
		push();
		translate (this.position.x, this.position.y);
		rotate(this.rotation);

		triangle(this.width/2, 0, 
				- this.width/2, - this.height/2,
				- this.width/2, this.height/2)

	pop();

	for (var i = 0; i < this.bullets.length; i++) {
		this.bullets[i].draw();
	}

	}
}