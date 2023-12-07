import './style.css';
import weatherData from './weatherApi.js';

function render() {
  const div = document.createElement('div');
  const btn = document.createElement('button');
  div.innerHTML = `<h1>Weather App</h1>`;
  div.classList.add('test');

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  btn.innerHTML = 'console log weather';
  btn.onclick = weatherData;
  div.appendChild(input);
  div.appendChild(btn);

  return div;
}

document.body.appendChild(render());
