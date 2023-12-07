export default function getWeatherData() {
  console.log('get weather data');
  fetch(
    'http://api.weatherapi.com/v1/current.json?key=f346dd48e585413487e10743230612&q=london'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}
