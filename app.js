let playerScore, computerScore, selection, gamePlaying, comp, winningScore;

newGame();

function newGame() {
    playerScore = 0;
    computerScore = 0;
    winningScore = 10;

    document.querySelector('.player-selection').textContent = '';
    document.querySelector('.computer-selection').textContent = '';
    document.querySelector('.player-hand').style.display = 'none';
    document.querySelector('.computer-hand').style.display = 'none';
    document.querySelector('.player-score').textContent = '0';
    document.querySelector('.computer-score').textContent = '0';

    document.querySelector('.player-name').textContent = 'Player';
    document.querySelector('.player-panel').classList.remove('winner');
    document.querySelector('.computer-name').textContent = 'Computer';
    document.querySelector('.computer-panel').classList.remove('winner');

    gamePlaying = true;

}

function getWinner() {
    if (playerScore >= winningScore || computerScore >= winningScore) {
        if (playerScore >= winningScore) {
            document.querySelector('.player-name').textContent = 'Winner!';
            document.querySelector('.player-panel').classList.add('winner');

        } else {
            document.querySelector('.computer-name').textContent = 'Winner!';
            document.querySelector('.computer-panel').classList.add('winner');
        }
        gamePlaying = false;
    }
}

function computerPlay() {
    comp = Math.floor((Math.random() * 3) + 1);
    //console.log(computerPlay);
    document.querySelector('.computer-hand').setAttribute('src', comp + '.png');
    document.querySelector('.computer-hand').style.display = 'block';
    if (comp === 1) {
        document.querySelector('.computer-selection').textContent = 'Rock';
    } else if (comp === 2) {
        document.querySelector('.computer-selection').textContent = 'Scissors';
    } else {
        document.querySelector('.computer-selection').textContent = 'Paper';
    };
}

function rock() {
    if (gamePlaying === true) {
        document.querySelector('.player-selection').textContent = 'Rock';
        document.querySelector('.player-hand').style.display = 'block';
        document.querySelector('.player-hand').setAttribute('src', 'rock.png');

        computerPlay();

        if (comp === 1) {
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else if (comp === 2) {
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else {
            computerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        };
    };
    getWinner();
}

function paper() {
    if (gamePlaying === true) {
        document.querySelector('.player-selection').textContent = 'Paper';
        document.querySelector('.player-hand').style.display = 'block';
        document.querySelector('.player-hand').setAttribute('src', 'paper.png');

        computerPlay();

        if (comp === 1) {
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else if (comp === 2) {
            computerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else {
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        };
    };
    getWinner();
}

function scissors() {
    if (gamePlaying === true) {

        document.querySelector('.player-selection').textContent = 'Scissors';
        document.querySelector('.player-hand').style.display = 'block';
        document.querySelector('.player-hand').setAttribute('src', 'scissors.png');

        computerPlay();

        if (comp === 1) {
            computerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else if (comp === 2) {
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        } else {
            playerScore++;
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
        };
    }
    getWinner();
}


document.querySelector('.btn-rock').addEventListener('click', rock);
document.querySelector('.btn-paper').addEventListener('click', paper);
document.querySelector('.btn-scissors').addEventListener('click', scissors);
document.querySelector('.btn-new').addEventListener('click', newGame);