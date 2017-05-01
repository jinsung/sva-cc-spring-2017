function SquareSystem(){

	this.setup = function (gap){
		this.squares = [];
		var index = 0;
		this.size = 29;
		for (var y = 0; y< 780; y += gap){
			for (var x = 0; x< 900; x += gap){
				this.squares[index] = new Square();
				this.squares[index].setup (x+gap/2,y+gap/2,this.size);
				index++;
			}
		}

	}

	this.draw = function (){
        


		for (var i=0; i < this.squares.length; i++) {
			this.squares[i].draw();

		}
	}
    
    this.findNearest = function (x, y) {
        var nearestSqr;
        for (var i=0; i < this.squares.length; i++) {
            var diffX = Math.abs(x - (this.squares[i].myX + this.size/2));
            var diffY = Math.abs(y - (this.squares[i].myY + this.size/2));
            if (diffX < this.size && diffY < this.size) {
                nearestSqr = this.squares[i];
            }
        }
        return nearestSqr;
        

    }
}

