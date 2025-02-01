let timeElapsed = 0;
let timerInterval;
let gameStarted = false;
let clickedNumbers = 0; 
const totalNumbers = 9;  


function startGame() {
  if (gameStarted) return; 
  gameStarted = true;
  clickedNumbers = 0; 
  document.getElementById('start-game').disabled = true; 

  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById('timer').textContent = `Time: ${timeElapsed}s`;
  }, 1000);

  const numberButtons = document.querySelectorAll('.number-btn');
  numberButtons.forEach(btn => {
    btn.disabled = false;
    btn.addEventListener('click', handleButtonClick);
  });
}

function handleButtonClick(event) {
  const clickedButton = event.target;

  clickedButton.disabled = true;

  clickedNumbers++;

  if (clickedNumbers === totalNumbers) {
    endGame();
  }
}

function endGame() {
  clearInterval(timerInterval); 
  document.getElementById('timer').textContent = `Game Over! You completed it in ${timeElapsed} seconds.`;
  gameStarted = false;
  document.getElementById('start-game').disabled = false; 

  
  const numberButtons = document.querySelectorAll('.number-btn');
  numberButtons.forEach(btn => {
    btn.disabled = true; 
    btn.removeEventListener('click', handleButtonClick); 
  });
}

document.getElementById('start-game').addEventListener('click', startGame);
