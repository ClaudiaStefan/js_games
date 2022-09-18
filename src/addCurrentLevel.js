import { getLevel } from './store';


const addCurrentLevel = () => {
  const levelEl = document.querySelector('#level');
  levelEl.innerHTML = `Level: ${getLevel()}`;
}

export default addCurrentLevel;
