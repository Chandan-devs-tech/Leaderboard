import createScore from '../modules/createScore.js';
import isNumeric from '../modules/isNumeric.js';
import setToLocalStorage from '../modules/localStorage.js';
import './style.css';

const nameInput = document.querySelector('.inputName');
const scoreInput = document.querySelector('.inputScore');
const scoreInputBtn = document.querySelector('.scoreInputBtn');
const scoreBoard = document.querySelector('.scoreBoard');
const alert = document.querySelector('.alert');
const arrayOfScore = JSON.parse(localStorage.getItem('arrayOfScore')) || [];

const addScore = () => {
  if (nameInput.value) {
    if (isNumeric(scoreInput.value)) {
      const person = {
        name: nameInput.value,
        score: scoreInput.value,
      };
      scoreBoard.innerHTML = '';
      arrayOfScore.unshift(person);
      createScore(arrayOfScore, scoreBoard);
      setToLocalStorage(arrayOfScore);
      nameInput.value = '';
      scoreInput.value = '';
    } else {
      alert.textContent = 'Score should be a number!';
      alert.style.display = 'flex';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 1000);
      scoreInput.value = '';
    }
  }
};

scoreInputBtn.addEventListener('click', addScore);

window.addEventListener('DOMContentLoaded', createScore(arrayOfScore, scoreBoard));
