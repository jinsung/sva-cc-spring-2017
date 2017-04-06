//https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%22new%20york,%20ny%22)&format=json&env=store://datatables.org/alltableswithkeys
var weather;
var temp;
function preload() {
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%22new%20york,%20ny%22)&format=json&env=store://datatables.org/alltableswithkeys';
  weather = loadJSON(url);
}

function setup() {
  console.log('weather', weather);
  var temp = weather.query.results.channel.item.condition.temp;

}
