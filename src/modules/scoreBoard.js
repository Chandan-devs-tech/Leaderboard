import getScore from './get.js';
import sortedArr from './sortedData.js';

const scoreBoard = async () => {
  const allscore = await getScore();
  const sorted = sortedArr(allscore);
  const scoreBoardDiv = document.querySelector('.scoreBoard');
  scoreBoardDiv.innerHTML = '';
  for (let i = 0; i < sorted.length; i += 1) {
    const element = document.createElement('p');
    element.classList.add('scoreBoardItem');
    element.textContent = `${sorted[i].user} : ${sorted[i].score}`;
    scoreBoardDiv.appendChild(element);
  }
};

export default scoreBoard;
