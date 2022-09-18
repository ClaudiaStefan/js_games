import './main.css';
import highlightSquares from './highlightSquares';
import resetAllSquares from './resetAllSquares';
import generateSquares from './generateSquares';
import addCurrentLevel from './addCurrentLevel';
import { removeFireworks } from './generateFireworks';
import {
  addToSequence,
  resetSequence,
  getNrOfSquares,
  getLevel,
} from './store';

window.addEventListener('DOMContentLoaded', () => {
  generateSquares(getNrOfSquares());

  const startMemoryGame = document.querySelector('#start-memory-game');
  addCurrentLevel();
  
  const startMemoryGameCb = () => {
    resetAllSquares(getNrOfSquares());
    removeFireworks();
    let nrOfSquaresToHighlight = getNrOfSquares() - 2;
    resetSequence();
    while(nrOfSquaresToHighlight) {
      nrOfSquaresToHighlight -= 1;
      addToSequence(Math.floor(Math.random() * getNrOfSquares()));
    }

    highlightSquares(0, getNrOfSquares());
  };

  startMemoryGame.addEventListener('click', startMemoryGameCb, false);
}, false);
