let currentNumber = 1;
let startTime;
let intervalId;

function startGame() {
  startTime = new Date();
  intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  document.getElementById("timer").textContent = `Tiempo transcurrido: ${Math.floor(elapsedTime / 60)} minutos ${elapsedTime % 60} segundos`;
}

function handleClick(number) {
  if (number === currentNumber) {
    currentNumber++;
    renderGame();
  }
}

function renderGame() {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";

  const availableNumbers = Array.from({ length: 50 }, (_, i) => i + 1).filter(num => num >= currentNumber && num <= currentNumber + 24);

  for (let i = 0; i < 25; i++) {
    const numberBox = document.createElement("div");
    numberBox.className = "number-box";
    numberBox.textContent = availableNumbers[i];
    numberBox.addEventListener("click", () => handleClick(availableNumbers[i]));
    gameContainer.appendChild(numberBox);
  }
}

// Inicializar el juego
renderGame();
startGame();