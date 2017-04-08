PImage myImage;
float yAngle;

void setup () {
  size(500, 500, P3D);
  yAngle = 0.0;
  myImage = loadImage("assets/image.png");
  image(myImage, 0, 0, width, height);
  noStroke(); //<>//
}

void draw() {
  background(100);
  int gap = 8;
  int size = 4;
  yAngle += 0.005;
  
  pushMatrix();
  translate(width/2, 0);
  //rotateY(yAngle);
  
  translate(-width/2, 0);
  for (int py = 0; py < myImage.height; py += gap ) {
    for ( int px = 0; px < myImage.width; px += gap ) {
      color c = myImage.get(px, py);
      
      fill(c);
      pushMatrix();
      int x = px + size/2;
      int y = py + size/2;
      translate(x, y,  c * 0.00001);
      ellipse(0, 0, gap, gap);      
      popMatrix();
    }
  }
  popMatrix();
}