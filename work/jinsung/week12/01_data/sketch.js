var weatherData;
var forecastArray;
var dayString
var date;
 
function preload() {
    var cityString = "new york, ny";
    var yahooForecastURL = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + cityString + "')&format=json&env=store://datatables.org/alltableswithkeys";
    
    weatherData = loadJSON(yahooForecastURL);
}

function setup () {
	createCanvas( 500, 500 );
    colorMode(HSB, 255);
    forecastArray = weatherData.query.results.channel.item.forecast;
    date = new Date();
    dayString = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log("date", dayString[date.getDay()]);
}

function drawGradation(x, y, w, h, c1, c2) {
    noFill();
    for (var i = y; i < y + h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c3 = lerpColor(c1, c2, inter);
        stroke(c3);
        line(x, i, x+w, i);
    }
}

function draw() {
	background(200);
    
    for (var i = 0; i < forecastArray.length; i++) {
        var segWidth = (width-1) / forecastArray.length;
        var xPos = segWidth * i;
        var highTemp = forecastArray[i].high;
        var lowTemp = forecastArray[i].low;
        var highHue = map(highTemp, 30, 90, 128, 255);
        var lowHue = map(lowTemp, 30, 90, 128, 255);
        var c1 = color(highHue, 200, 200);
        var c2 = color(lowHue, 200, 200);
        drawGradation(xPos, 0.0, segWidth, height, c1, c2);
        
        stroke(10);
        noFill();
        rect( xPos, 0, segWidth, (height-1) );
        fill(10);
        textSize(16);
        var day = dayString[ (date.getDay() + i) % 6 ];
        text( day, Math.round(xPos) + 13, 30 );
    }
}


