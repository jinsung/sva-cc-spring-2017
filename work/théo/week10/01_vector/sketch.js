var myShip;
function setup ();{
	createCanvas(800, 800);
	myShip = new Ship();
	myShip.setup;
}
function update (){
	myShip.update();

}
function draw (){
	fill(255, 0 ,0);
	myShip.draw();
}