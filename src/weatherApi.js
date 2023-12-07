export default async function getWeatherData() {
  console.log('get weather data');
  let inputVal = document.querySelector('input').value;
  console.log(inputVal);
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f346dd48e585413487e10743230612&q=${inputVal}`
  );
  const data = await response.json();
  console.log(data);
}
