let score = 0;
let time = 5;
let intervalId = 0;
let topScore = 0

const timerElement = document.querySelector('#time');
const scoreElement = document.querySelector('#score');
const topScoreElement = document.querySelector('#top-score');
const redSquare = document.querySelector('#red-square');

const setTopScore = (score) => {
  topScore = score
  topScoreElement.innerHTML = score
}

setTopScore(localStorage.getItem('topScore') || 0)

const updateCounter = () => {
  score++;
  scoreElement.innerHTML = score;
}

const updateTimer = () => {
  time = time - 1
  if (time < 1) {
    clearInterval(intervalId)
    redSquare.classList.add('disabled')
    if (score > topScore) {
      setTopScore(score)
      localStorage.setItem('topScore', score)
    }
  }
  timerElement.innerHTML = time;
}

const onSquareClick = () => {
  if (time < 1) return
  if (score === 0) {
    timerElement.innerHTML = time;
    intervalId = setInterval(updateTimer, 1000);
  }

  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  const randomX = Math.floor(Math.random() *( window.innerWidth - 50));
  redSquare.style.top = `${randomY}px`;
  redSquare.style.left = `${randomX}px`;
  updateCounter()
}
redSquare.onclick = onSquareClick