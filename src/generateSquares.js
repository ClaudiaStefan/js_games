import clickSquareCb from './clickSquareCb';
import { removeFireworks } from './generateFireworks';

const generateSquares = nrOfSquares => {
  const memoryGameContainer = document.querySelector('#memory-game');
  memoryGameContainer.innerHTML = '';
  removeFireworks();
  const fragment = document.createDocumentFragment();
  for(let i = 0; i < nrOfSquares; i += 1) {
    const square = document.createElement('button');
    square.id = `square_${i}`;
    square.className = 'square';
    square.role='button';
    square.addEventListener('click', clickSquareCb, false);
    fragment.appendChild(square);
  }
  memoryGameContainer.appendChild(fragment);
}

export default generateSquares;
