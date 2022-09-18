const resetAllSquares = nrOfSquares => {
  for (let i = 0; i < nrOfSquares; i += 1) {
    const square = document.querySelector(`#square_${i}`);
    square.className = 'square';
  }
};

export default resetAllSquares;
