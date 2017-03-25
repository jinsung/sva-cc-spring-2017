var data1;

function preload () {
	data1 = loadJSON("test.json");
	
}

function setup () {
	console.log("city: ", data1.address.city);
}

function draw() {

	
}


