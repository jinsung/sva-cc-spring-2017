function Light(){
  
	this.setup = function(){
		createCanvas(100, 100, WEBGL);
	};	

	this.draw = function(){
  		background(0);
  		//move your mouse to change light direction
  		var dirX = (mouseX / width - 0.5) *2;
  		var dirY = (mouseY / height - 0.5) *(-2);
  		directionalLight(250, 250, 250, dirX, dirY, 0.25);
  		ambientMaterial(250);
  		sphere(50);
	};

}