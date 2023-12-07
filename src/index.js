import './style.css';
import weatherData from './weatherApi.js';

function render() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = `<h1>Weather App</h1>`;
  element.classList.add('test');

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  btn.innerHTML = 'console log weather';
  btn.onclick = weatherData;
  element.appendChild(input);
  element.appendChild(btn);
  return element;
}

document.body.appendChild(render());
