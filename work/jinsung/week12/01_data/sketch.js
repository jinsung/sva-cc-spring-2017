var weatherData;
var forcastArray;

 
function preload() {
    var yahooForecastURL = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="new york, ny")&format=json&env=store://datatables.org/alltableswithkeys";
}

function setup () {
	createCanvas( 500, 500 );
}

function draw() {
	background(200);
}


