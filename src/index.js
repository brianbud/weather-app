import './style.css';
import weatherData from './weatherApi.js';

function render() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = `<h1>Weather App</h1>`;
  element.classList.add('test');

  btn.innerHTML = 'Click me';
  btn.onclick = weatherData;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(render());
