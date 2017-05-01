function Player() {

  this.setup = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.width = width;
    this.height = height;
   
  }

  this.update = function(x, y) {
    this.x = x;
    this.y = y;

    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

  }

  this.moveRight = function () {
    this.x = this.x + this.speed;
  }

  this.moveLeft = function () {
    this.x = this.x - this.speed;
  }


  this.draw = function () {
    noStroke();
    fill(100);
    rectMode(CENTER);


    this.drawLegs()
    this.drawBody();
    this.drawHead();
    
    
    this.drawEyes();
    this.drawArms();
    this.drawHair();
    
  }

  this.drawHair = function() {
    fill(0);
    rect(this.x, this.y + this.height * 0.08, this.width * 0.75, this.height * 0.15);
  }

  this.drawHead = function() {
    fill(250, 218, 180);

    rect(this.x, this.y + this.height * 0.24, this.width * 0.75, this.height * 0.4);
    
  }

  this.drawEyes = function() {
      fill(0);

    var eyeSize = this.width*0.07;

    ellipse(this.x+this.width*0.2, this.y+this.height*0.3, eyeSize, eyeSize);
    ellipse(this.x-this.width*0.2, this.y+this.height*0.3, eyeSize, eyeSize);
    
}

  this.drawEars = function() {
    fill(90);
    var earGap = this.width*0.55;
    var earSize = this.width*0.10;
    rect(this.x - earGap, this.y + this.height*0.25, earSize, earSize);
    rect(this.x + earGap, this.y + this.height*0.25, earSize, earSize);
    
  }

  this.drawBody = function() {
    fill(255);
    rect(this.x, this.y+this.height*0.5, this.width*0.65, this.height*0.2);
  }

  this.drawArms = function () {
    fill(250, 218, 180);
    var armGap = this.width*0.15;
    var armSize = this.width * 0.13;
    ellipse(this.x - armGap, this.y + this.height*0.5, armSize, armSize);
    ellipse(this.x + armGap, this.y + this.height*0.5, armSize, armSize);
  }

  this.drawLegs = function () {
    fill(0);
    var legGap = this.width * 0.15;
    var legYPos = this.height * 0.6;
    var legWidth = this.width * 0.2;
    var legHeight = this.height * 0.08;
    rect(this.x-legGap, this.y + legYPos, legWidth, legHeight);
    rect(this.x+legGap, this.y + legYPos, legWidth, legHeight);
  }
}
