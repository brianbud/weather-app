export default async function getWeatherData() {
  try {
    let inputVal = document.querySelector('input').value;

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=f346dd48e585413487e10743230612&q=${inputVal}`
    );

    const data = await response.json();
    const weatherContainer = document.querySelector('#weather-container');
    const weatherContent = document.createElement('div');
    weatherContent.id = 'weatherContent';
    const div = document.querySelector('#main-container');

    weatherContent.innerHTML = `
    <div>
    <h1>${data.current.condition['text']}</h1>
    <p>${data.location.name}, ${data.location.country}</p>
    <h1>${data.current.temp_c} C</h1>
    <h2>Feels Like: ${data.current.feelslike_c} C</h2>
    <h2>Humidity: ${data.current.humidity} %</h2>
    <h2>Wind: ${data.current.wind_mph} mph</h2>
    <div>
  `;
    weatherContainer.appendChild(weatherContent);
    div.appendChild(weatherContainer);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}
