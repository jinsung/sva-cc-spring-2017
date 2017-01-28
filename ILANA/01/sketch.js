var myXPosition = 0
var myYPosition = 0

function setup () {
  createCanvas(1000, 1000);
}

function draw() {
var x = 50

background (0,30,100)



fill(0,frameCount/10,0);
line(mouseX,mouseY,pmouseX + 100,pmouseY)

myXPosition = myXPosition + 1

}

strokeWeight(10)
fill(0,50,200)
ellipse(myXPosition,myYPosition + 100,x,x)
fill(200,0,12)
ellipse(myXPosition,myYPosition + 200,x,x)

fill(20,450,250)
rect(mouseX - 25,mouseY - 25,x,x)
