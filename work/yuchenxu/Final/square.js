

function Square(){
	this.setup = function(x,y,size) {
		this.update(x,y);
		this.mySize = size;
        this.myColor = color(255, 255, 255);
        
        
	}

	this.update = function (x,y){
		this.myX = x;
		this.myY = y;
	}
    
    this.changeColor = function (color) {
        this.myColor = color;
    }
    

	this.draw= function(){
        
        fill(this.myColor);
        rect(this.myX, this.myY, this.mySize, this.mySize);    
        
        
	}
}