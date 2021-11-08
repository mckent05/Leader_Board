import './style.css';

const listContainer = document.querySelector('.scores');

const scoreList = [
  {
    userName: 'Tope',
    score: 100,
  },
  {
    userName: 'Samauel',
    score: 80,
  },
  {
    userName: 'Blessed',
    score: 70,
  },
  {
    userName: 'Emmanuel',
    score: 120,
  },
];

const displayscores = (list) => {
  let display = list.map((item) => `<li><span class='name'>${item.userName}</span>:<span class='score'>${item.score}</span></li>`);
  display = display.join('');
  listContainer.innerHTML = display;
};

window.addEventListener('DOMContentLoaded', () => {
  displayscores(scoreList);
});
