function Robot() {
  this.x = 0;
  this.y = 0;
  this.width = 100;
  this.height = 100;
  this.setup = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  this.draw = function (isOn) {
    stroke(0);
    fill(100);
    rectMode(CENTER);

    this.drawBody(isOn);
    this.drawHead(isOn);
    this.drawArms();
    this.drawLegs();
  }

  this.drawHead = function(isOn) {
    fill(90);
    rect(this.x, this.y - this.height * 0.25, this.width * 0.08, this.height * 0.1 );
    rect(this.x, this.y + this.height * 0.1, this.width, this.height * 0.6);
    if (isOn) {
      fill(255, 255, 102);
    } else {
      fill(255);
    }

    ellipse(this.x, this.y - this.height * 0.3, this.width * 0.2, this.width * 0.2);

    // eyes
    fill(0);
    var eyeSize = this.width*0.08;
    ellipse(this.x+this.width*0.2, this.y+this.height*0.3, eyeSize, eyeSize);
    ellipse(this.x-this.width*0.2, this.y+this.height*0.3, eyeSize, eyeSize);
  }

  this.drawBody = function (isOn) {
    fill(90);
    rect(this.x, this.y+this.height*0.5, this.width*0.85, this.height*0.21);

    if (isOn) {
      fill(255);
    } else {
      fill(100);
    }

    var controllerHeight = this.y + this.height * 0.51;
    var controllerDotSize = this.width * 0.045;
    rect(this.x, controllerHeight, this.width * 0.57, this.height*0.15);

    if (isOn) {
      fill(255, 255, 102);
    } else {
      fill(255);
    }

    ellipse(this.x - this.width*0.09, controllerHeight, controllerDotSize, controllerDotSize);
    ellipse(this.x + this.width*0.09, controllerHeight, controllerDotSize, controllerDotSize);
    ellipse(this.x, controllerHeight, controllerDotSize, controllerDotSize);
  }

  this.drawArms = function () {
    fill(90);
    var armGap = this.width*0.42;
    var armSize = this.width * 0.15;
    ellipse(this.x - armGap, this.y + this.height*0.5, armSize, armSize);
    ellipse(this.x + armGap, this.y + this.height*0.5, armSize, armSize);
  }

  this.drawLegs = function () {
    fill(90);
    var legGap = this.width * 0.2;
    var legYPos = this.height * 0.6;
    var legWidth = this.width * 0.27;
    var legHeight = this.height * 0.1;
    rect(this.x-legGap, this.y + legYPos, legWidth, legHeight);
    rect(this.x+legGap, this.y + legYPos, legWidth, legHeight);
  }
}
