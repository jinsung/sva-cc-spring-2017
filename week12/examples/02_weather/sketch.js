// https://github.com/toddmotto/public-apis
// https://developer.yahoo.com/weather/
// http://meyerweb.com/eric/tools/dencoder/


var weatherData;
var forecastData;

var minTemp = 20;
var maxTemp = 85;
var today;
var daysInString;

function preload() {
    var city = "new york, ny";
    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "')&format=json&env=store://datatables.org/alltableswithkeys";
    weatherData = loadJSON(url);
}

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255);
    
    forecastData = weatherData.query.results.channel.item.forecast;
    console.log(weatherData);
    //console.log(forecastData);
    daysInString = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat" ];
    today = new Date();
    console.log("today", today.getDay(), daysInString[today.getDay()]);
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
    }
}

function draw() {
    background(200);
    var seg = (width-1)/forecastData.length;
    for (var i=0; i<forecastData.length; i++) {
        noFill();
        
        var hueHigh = map (forecastData[i].high, minTemp, 85, maxTemp, 0);
        var hueLow = map(forecastData[i].low, minTemp, 85, maxTemp, 0);
        var c1 = color(hueHigh, 255, 200);
        var c2 = color(hueLow, 255, 200);
        setGradient(seg * i, 0.0, seg, (height-1), c1, c2 );
        
        stroke(50);
        rect(seg * i,0.0, seg, (height-1) );
    }
    
    for (var i=0; i<forecastData.length; i++) {
        var dayIndex = (today.getDay() + i) % 6;
        
        var day = daysInString[dayIndex];
        fill(50);
        text( day, seg * i + 10, 20.0);
    }
    
}