import './style.css';
import weatherData from './weatherApi.js';

function render() {
  const div = document.createElement('div');
  div.id = 'main-container';

  const searchDiv = document.createElement('div');
  searchDiv.id = 'searchDiv';

  const weatherDiv = document.createElement('div');
  weatherDiv.id = 'weather-container';
  const btn = document.createElement('button');
  div.innerHTML = `<h1>Weather App</h1>`;
  div.classList.add('test');

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  btn.innerHTML = 'search city';
  btn.onclick = weatherData;
  searchDiv.appendChild(input);
  searchDiv.appendChild(btn);

  div.appendChild(searchDiv);
  div.appendChild(weatherDiv);
  return div;
}

document.body.appendChild(render());
