function setup() {
  createCanvas(640, 640);
  noStroke();

  fill (0, 255, 0); // green
  rectMode(CORNER);
  rect(100, 100, 50, 30 );

  fill (255, 0, 0); // red
  rectMode(CENTER);
  rect(100, 100, 50, 30)

  fill (0, 0, 255); // blue
  rectMode(CORNERS);
  rect(100, 100, 50, 30);

  fill (0, 255, 255);
  ellipseMode(RADIUS);
  ellipse(300, 300, 50, 50);

  fill (0, 255, 0);
  ellipseMode(CORNER);
  ellipse(300, 300, 50, 50);

  fill (255, 0, 0);
  ellipseMode(CENTER);
  ellipse(300, 300, 50, 50);
}
