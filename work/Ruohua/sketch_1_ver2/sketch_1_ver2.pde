PImage myImage; //<>//
int gapw, gaph;
int size =4;
void setup () {
  size(852, 480, P3D);
  myImage = loadImage("assets/3.png");
  image(myImage, 0, 0, width, height);
  noStroke();
  gapw = width/size;    
  gaph = height/size;
}

void draw() {
  background(255);



  for (int px = 0; px < gapw; px ++ ) {
    for ( int py = 0; py < gaph; py ++ ) {
      pushMatrix();
      int x = px*size + size/2;
      int y = py*size + size/2;
      int loc = x + y*width; 
      color c = myImage.pixels[loc]; 

        float z = (mouseX/(float)width) * brightness(myImage.pixels[loc]);
        fill(c);        
        translate(x, y, z);
      ellipseMode(CENTER);
      ellipse(0, 0, size/2, size/2);
      popMatrix();
    }
  }
}