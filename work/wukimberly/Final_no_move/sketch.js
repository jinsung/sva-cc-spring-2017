var myShip;
var ac;
var timer;
var player1;
var aliens = [];
var bugs = [];
var alienbugs = [];


function setup() { 
	createCanvas(845, 400);

	player1 = new Player();
  player1.setup(120, 260, 120, 180);

	myShip = new Ship();
	myShip.setup();

	for (var i = 0; i < 7; i++) {
		aliens[i] = new alien (i *90+90, 80, 120, 180);
	}

  for (var i = 0; i < 7; i++) {
    bugs[i] = new bug (i *90+90, 20, 120, 180);
  }

  for (var i = 0; i < 7; i++) {
    alienbugs[i] = new alienbug (i*90+90, 140, 120, 180);
  }
}

function update() {
	timer++;
	if (timer > 130) {
		timer = 0;
		
	}
	myShip.update();
	
}

function draw() {
	background(144, 212, 247);
	noStroke();
    fill(225, 225, 225);

    rectMode(CENTER);
    rect(100, 375, 1500, 50);

    for (var i = 0; i < myShip.bullets.length; i++) {
    	for (var j = 0; j < aliens.length; j++) {
            if (myShip.bullets[i].hits(aliens[j])) {
                aliens[j].disappear();
            }
        } 
        
        for (var j = 0; j < bugs.length; j++) {
            if (myShip.bullets[i].hits(bugs[j])) {
                bugs[j].disappear();
            }
        } 
        
        for (var j = 0; j < alienbugs.length; j++) {
            if (myShip.bullets[i].hits(alienbugs[j])) {
                alienbugs[j].disappear();
            }
        } 
    }

  var edge = false;

  for (var i = 0; i < aliens.length; i++) {
      if (!aliens[i].isDead) {
        aliens[i].draw();
        aliens[i].move();
        if (aliens[i].x > width || aliens[i].x < 0) {
          edge = true;
        }
      }
  }

  if (edge) {
    for (var i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }

  var edge = false;

  for (var i = 0; i < bugs.length; i++) {
      if (!bugs[i].isDead) {
        bugs[i].draw();
        bugs[i].move();
        if (bugs[i].x > width || bugs[i].x < 0) {
          edge = true;
        }
      }
  }

  if (edge) {
    for (var i = 0; i < bugs.length; i++) {
      bugs[i].shiftDown();
    }
  }

  var edge = false;

  for (var i = 0; i < alienbugs.length; i++) {
      if (!alienbugs[i].isDead) {
        alienbugs[i].draw();
        alienbugs[i].move();
        if (alienbugs[i].x > width || alienbugs[i].x < 0) {
          edge = true;
        }
      }
  }

  if (edge) {
    for (var i = 0; i < alienbugs.length; i++) {
      alienbugs[i].shiftDown();
    }
  }

  player1.draw();

  this.update();
	fill(249, 145, 146);
	myShip.draw();
  myShip.update();

	noFill();
	stroke(0);	
	
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		player1.moveLeft();
		myShip.moveLeft();
	} else if (keyCode == 20) {
		myShip.move();
	} else if (keyCode == RIGHT_ARROW) {
		player1.moveRight();
		myShip.moveRight();
	} else if (keyCode == 32) {
		myShip.fire();
	}
}
