let sequence = [];
let lastClickedIndex = 0;
let level = 1;
const levels = {
  1: 6,
  2: 9,
  3: 12,
  4: 15,
}


const getSequences = () => sequence;
const addToSequence = val => {
  sequence.push(val);
};
const getValFromSequnece = index => sequence[index];
const resetSequence = () => {
  sequence = [];
  lastClickedIndex = 0;
};
const getSequenceLength = () => sequence.length;
const getLastClickedIndex = () => lastClickedIndex;
const updateLastClickedIndex = val => lastClickedIndex = val;
const getNrOfSquares = () => levels[level];
const getLevel = () => level;
const updateLevel = (newLevel) => {
  if (!levels[newLevel]) {
    level = 1;
  }
  level = newLevel;
  sequence = [];
}


export {
  addToSequence,
  getValFromSequnece,
  getSequences,
  getSequenceLength,
  resetSequence,
  getLastClickedIndex,
  updateLastClickedIndex,
  getNrOfSquares,
  getLevel,
  updateLevel,
};
