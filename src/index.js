import './style.css';
import { createNewScore, getAllScores } from './get_scores';

let listContainer = document.querySelector('.scores');
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
      let id = await (await createNewScore(name.value, userScore.value)).json();
      displayAlert(id.result, 'success');
    } catch (err) {
      return err;
    }
  };
  postScore();
  form.reset()
});

const getScore = async () => {
  try {
    const myScore = await (await getAllScores()).json();
    displayscores(myScore.result);
  } catch (err) {
    return err;
  }
};

refresh.addEventListener('click', () => {
  getScore();
});

window.addEventListener('DOMContentLoaded', () => {
  getScore();
});
