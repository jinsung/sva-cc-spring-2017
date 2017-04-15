//https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="new york, ny")&format=json&env=store://datatables.org/alltableswithkeys
var weather;
var forcast;
function preload() {
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="new york, ny")&format=json&env=store://datatables.org/alltableswithkeys';
  weather = loadJSON(url);
}

function setup() {
  console.log('weather', weather);
  //var temp = weather.query.results.channel.item.condition.temp;

}

function draw() {

}
