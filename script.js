let currentRandom = Math.trunc(Math.random() * 25);
let writed = document.querySelector('.number');
let body = document.body;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const checkBtn = document.querySelector('.check-btn');
const againBtn = document.querySelector('.again-btn');
const message = document.querySelector('.message-text');
let messageSpan = document.querySelector('.message-span');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore-num');
let scoreNum = document.querySelector('.score-number');
let scoreSpan = document.querySelector('.score-span');
let enterNumber = document.querySelector('.input-number');

let currentScore = 25;
let currentNumber = 0;
let highscoreNum = 0;

checkBtn.addEventListener('click', () => {
  enterNumber = +document.querySelector('.input-number').value;
  writed.innerHTML = enterNumber;
  currentNumber = enterNumber;
  if (currentNumber === currentRandom) {
    message.innerHTML = 'Win!';
    messageSpan.innerHTML = '🎉';
    body.style.backgroundColor = '#54aa3d';
    if (currentScore < highscoreNum) {
      highscore.innerHTML = highscoreNum;
    } else if (currentScore > highscoreNum) {
      highscoreNum = currentScore;
      highscore.innerHTML = highscoreNum;
      window.localStorage.setItem('highscore', highscoreNum);
    }
  } else if (currentNumber > currentRandom) {
    currentScore--;
    scoreSpan.innerHTML = '💯';
    scoreNum.innerHTML = currentScore;
    message.innerHTML = 'Too hight!';
    messageSpan.innerHTML = '📉';
  } else if (currentNumber < currentRandom) {
    currentScore--;
    scoreSpan.innerHTML = '💯';
    scoreNum.innerHTML = currentScore;
    message.innerHTML = 'Too low!';
    messageSpan.innerHTML = '📈';
  }
});

againBtn.addEventListener('click', () => {
  writed.innerHTML = '?';
  body.style.backgroundColor = '#222';
  currentNumber = 0;
  currentScore = 25;
  scoreNum.innerHTML = currentScore;
  currentRandom = Math.trunc(Math.random() * 25);
});

leftArrow.addEventListener('click', () => {
  enterNumber = document.querySelector('.input-number');
  if (enterNumber.value <= 0) {
    enterNumber.value = 0;
  } else {
    enterNumber.value = +enterNumber.value - 1;
  }
});

rightArrow.addEventListener('click', () => {
  enterNumber = document.querySelector('.input-number');
  if (enterNumber.value >= 25) {
    enterNumber.value = 25;
  } else {
    enterNumber.value = +enterNumber.value + 1;
  }
});

// localStorage
if (window.localStorage.getItem('highscore')) {
  highscore.innerHTML = window.localStorage.getItem('highscore');
  highscoreNum = window.localStorage.getItem('highscore');
}
