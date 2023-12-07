export default function getWeatherData() {
  console.log('get weather data');
  let inputVal = document.querySelector('input').value;
  console.log(inputVal);
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=f346dd48e585413487e10743230612&q=${inputVal}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}
