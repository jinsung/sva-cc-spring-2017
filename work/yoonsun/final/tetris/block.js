function Block () {
    this.setup = function() {
        this.x = 0;
        this.y = 0;
        this.size = 10;
        
    }
    this.update = function() {
        if (this.y < (height - this.size)) {
            this.y += 5;
        }
    }
    this.draw = function() {
        rect(this.x, this.y, this.size, this.size);
    }
}