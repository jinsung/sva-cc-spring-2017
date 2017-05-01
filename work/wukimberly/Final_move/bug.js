function bug(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.xdir = 1;
  this.isDead = false;
    
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.height/4;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.draw = function () {
    noStroke();
    fill(100);
    rectMode(CENTER);

    this.drawLegs()
    this.drawHead();
    this.drawEyes();
    //this.drawEars();
    this.drawArms();
    
  }
    
  this.disappear = function () {
    this.isDead = true;
  }

  this.drawHead = function(isOn) {
    fill(255);

    rect(this.x, this.y + this.height * 0.2, this.width * 0.5, this.height * 0.17);
    
  }

  this.drawEyes = function(isOn) {
    fill(0);

    var eyeSize = this.width*0.05;

    ellipse(this.x+this.width*0.1, this.y+this.height*0.22, eyeSize, eyeSize);
    ellipse(this.x-this.width*0.1, this.y+this.height*0.22, eyeSize, eyeSize);
    
}

  this.drawEars = function() {
    fill(255);
    var earGap = this.width*0.4;
    var earSize = this.width*0.06;
    rect(this.x+this.width*0.1, + this.height*0.28, earSize, earSize);
    rect(this.x-this.width*0.1, + this.height*0.28, earSize, earSize);
    
  }

  this.drawBody = function(isOn) {
    fill(255);
    rect(this.x, this.y+this.height*0.5, this.width*0.65, this.height*0.2);
  }

  this.drawArms = function () {
    fill(255);
    var armGap = this.width*0.22;
    var armSize = this.width * 0.08;
    rect(this.x+this.width*0.28, this.y + this.height*0.28, armSize, armSize);
    rect(this.x-this.width*0.28, this.y + this.height*0.28, armSize, armSize);
  }

  this.drawLegs = function () {
    fill(255);
    var legGap = this.width * 0.15;
    var legYPos = this.height * 0.28;
    var legWidth = this.width * 0.1;
    var legHeight = this.height * 0.05;
    rect(this.x-legGap, this.y + legYPos, legWidth, legHeight);
    rect(this.x+legGap, this.y + legYPos, legWidth, legHeight);
  }
}