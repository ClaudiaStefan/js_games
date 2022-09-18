import './firework.css';

const generateFireworks = () => {
  const container = document.querySelector('body');

  const fireworksContainer = document.createElement('div');
  fireworksContainer.className = 'firworks-container';

  const nrOfFirworks = 3;
  
  for(let i = 0; i < nrOfFirworks; i += 1) {
    const firwork = document.createElement('div');
    firwork.className = 'firework';
    firwork.id = `firework${i + 1}`;
  
    for(let j = 0; j < 12; j += 1) {
      const explosion = document.createElement('div');
      explosion.className = 'explosion';
      firwork.appendChild(explosion);
    }
  
    fireworksContainer.appendChild(firwork);
  }

  container.appendChild(fireworksContainer);
}

export const removeFireworks = () => {
  const fireworksContainer = document.querySelector('.firworks-container');
  fireworksContainer?.remove?.();
}

export default generateFireworks;

