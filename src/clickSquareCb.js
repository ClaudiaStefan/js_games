import highlightSquares from './highlightSquares';
import resetAllSquares from './resetAllSquares';
import generateFireworks from './generateFireworks';
import generateSquares from './generateSquares';
import addCurrentLevel from './addCurrentLevel';
import {
  getValFromSequnece,
  getSequenceLength,
  getLastClickedIndex,
  getNrOfSquares,
  updateLastClickedIndex,
  getLevel,
  updateLevel,
} from './store';

const clickSquareCb = e => {
  const lastClickedIndex = getLastClickedIndex();
  if (lastClickedIndex === getSequenceLength()) {
    return;
  }
  const squareId  = e.target.id.split('_')[1];
  if (getValFromSequnece(lastClickedIndex).toString() === squareId) {
    e.target.className = 'square square-good';
    if (lastClickedIndex + 1 === getSequenceLength()) {
      generateFireworks();
      setTimeout(() => {
        updateLevel(getLevel() + 1);
        addCurrentLevel(getLevel());
        generateSquares(getNrOfSquares());
      }, 3 * 1000);
    }
    updateLastClickedIndex(lastClickedIndex + 1);
  } else {
    e.target.className = 'square square-bad';
    setTimeout(() => {
      e.target.className = 'square';
      resetAllSquares(getNrOfSquares());
      updateLastClickedIndex(0);
      highlightSquares(0);
    }, 400);
  }
}

export default clickSquareCb;
