import './style.css';
import { createNewScore, getAllScores } from './get_scores.js';

const listContainer = document.querySelector('.scores');
const form = document.querySelector('.form');
const name = document.querySelector('.user-name');
const userScore = document.querySelector('.user-score');
const alert = document.querySelector('.alert');
const refresh = document.querySelector('.refresh-btn');

const displayscores = (list) => {
  let display = list.map((item) => `<li><span class='name'>${item.user}</span>:<span class='score'>${item.score}</span></li>`);
  display = display.join('');
  listContainer.innerHTML = display;
};

const displayAlert = (message, action) => {
  alert.innerHTML = message;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.innerHTML = '';
    alert.classList.remove(`alert-${action}`);
  }, 3000);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const postScore = async () => {
    try {
      const id = await (await createNewScore(name.value, userScore.value)).json();
      displayAlert(id.result, 'success');
      return id;
    } catch (err) {
      return err;
    }
  };
  postScore();
  form.reset();
});

const getScore = async () => {
  try {
    const myScore = await (await getAllScores()).json();
    displayscores(myScore.result);
    return myScore;
  } catch (err) {
    return err;
  }
};

refresh.addEventListener('click', () => {
  getScore();
  displayAlert('refreshing scoreboard...', 'refresh' );
});

window.addEventListener('DOMContentLoaded', () => {
  getScore();
});
