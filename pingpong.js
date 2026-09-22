const p1Button = document.querySelector('#p1but');
const p2Button = document.querySelector('#p2but');
const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playToSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = Number(playToSelect.value);
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (isGameOver) return;

    p1Score += 1;
    updateScore();

    if (p1Score === winningScore) {
        endGame(p1Display, p2Display);
    }
});

p2Button.addEventListener('click', () => {
    if (isGameOver) return;

    p2Score += 1;
    updateScore();

    if (p2Score === winningScore) {
        endGame(p2Display, p1Display);
    }
});

resetButton.addEventListener('click', resetGame);

playToSelect.addEventListener('change', () => {
    winningScore = Number(playToSelect.value);
    resetGame();
});

function updateScore() {
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}

function endGame(winner, loser) {
    isGameOver = true;
    winner.classList.add('winner');
    loser.classList.add('loser');
}

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;

    updateScore();

    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}
