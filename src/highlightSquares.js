import resetAllSquares from './resetAllSquares';
import {
  getSequenceLength,
  getValFromSequnece,
  getNrOfSquares,
} from './store';

const highlightSquares = (i) => {
  if (i >= getSequenceLength()) {
    return;
  }
  setTimeout(() => {
    const square = document.querySelector(`#square_${getValFromSequnece(i)}`);
    square.className = 'square square-highlight';
    setTimeout(() => {
      resetAllSquares(getNrOfSquares());
      highlightSquares(i + 1, getNrOfSquares());
    }, 1.5 * 1000);
  }, 1 * 1000);
};

export default highlightSquares;
