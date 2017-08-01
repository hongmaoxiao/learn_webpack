import _ from 'lodash';
import './style.css';
import Rain from './rain.png';

function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Rain;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
