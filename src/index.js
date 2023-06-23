import isNumeric from './modules/isNumeric.js';
import postScore from './modules/post.js';
import scoreBoard from './modules/scoreBoard.js';
import './style.css';

const nameInput = document.querySelector('.inputName');
const scoreInput = document.querySelector('.inputScore');
const form = document.querySelector('.scoreInput');
const refreshBtn = document.querySelector('.refreshBtn');

form.addEventListener('submit', (e) => {
  if (nameInput && scoreInput) {
    if (isNumeric(scoreInput.value)) {
      e.preventDefault();
      postScore(nameInput.value, scoreInput.value);
      form.reset();
    }
  }
});

refreshBtn.addEventListener('click', scoreBoard);
