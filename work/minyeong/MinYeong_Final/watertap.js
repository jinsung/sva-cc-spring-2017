function Watertab () {
    this.setup = function () {
        
    }
    
    this.draw = function() {


      fill(150);
      rect(0, 100, 100, 30);


      fill(100);
      rect(0, 81, 15, 63);

      fill(180);
      rect(50, 70, 20, 30);

      fill(230);
      arc(60, 70, 7, 70, PI, TWO_PI);

      fill(170);
      rect(50, 30, 20, 10);


      fill(180);
      ellipse(60, 115, 50, 50);


      fill(190);
      arc(105, 137, 28, 80, PI, TWO_PI);

      fill(220);
      arc(105, 137, 15, 80, PI, TWO_PI);
    }
}