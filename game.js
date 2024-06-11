const choices = document.querySelectorAll('#choices button');
const result = document.getElementById('result');
const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');
const resetButton = document.getElementById('reset');

let player1Score = 0;
let player2Score = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return 'It\'s a tie!';
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        player1Score++;
        return 'Player 1 wins!';
    } else {
        player2Score++;
        return 'Player 2 wins!';
    }
}

function updateScoreDisplay() {
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScoreDisplay();
    result.textContent = '';
}


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const player1Choice = choice.id;
        const player2Choice = computerPlay();
        const roundResult = playRound(player1Choice, player2Choice);
        result.textContent = roundResult;
        updateScoreDisplay();
    });
});


resetButton.addEventListener('click', resetGame);
