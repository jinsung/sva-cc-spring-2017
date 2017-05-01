class Particle {
  float x;
  float y;
  
  float vx;
  float vy;

  Particle() {
    x = width;
    y = height/3;
    float a = random(TWO_PI);
    float speed = random(2);
    vx = cos(a)*speed;
    vy = sin(a)*speed;
  }

  void display() {
    stroke(255, 25);
    strokeWeight(1);
    color c = jens.get(int(x),int(y));
    fill(c);
    ellipse(x, y, mouseX/20, mouseY/15);
  }

  void move() {
    x = x + vx;
    random(-1, 5);
    y = y + vy;
    random(-1, 5);
    if (y < 0) {
      y = height;
    } 

    if (y > height) {
      y = 0;
    }
    if (x < 0) {
      x = width;
    } 

    if (x > width) {
      x = 0;
    }
  }
 }