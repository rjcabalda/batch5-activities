/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let btnRoll = document.getElementById('btn-roll');
let btnHold = document.getElementById('btn-hold');
let btnNewGame = document.getElementById('btn-newGame');
let diceImage0 = document.getElementById('currentDice0');
let diceImage1 = document.getElementById('currentDice1');

let getClass0 = document.getElementById('player-0-panel');
let getClass1 = document.getElementById('player-1-panel');


// getClass1.classList.add('active');


let score0 = document.getElementById('score-0');
let score1 = document.getElementById('score-1');
let current0 = document.getElementById('current-0');
let current1 = document.getElementById('current-1');

let randomIndex0 = 0;
let randomIndex1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let currentTurn = 0;
let totalScore0 = 86;
let totalScore1 = 86;

score0.innerHTML = totalScore0;
score1.innerHTML = totalScore0;

function rollDice() {
    randomIndex0 = (Math.floor(Math.random() * 6)) + 1;
    randomIndex1 = (Math.floor(Math.random() * 6)) + 1;
    diceImage0.src = 'dice-' + randomIndex0 + '.png';
    diceImage1.src = 'dice-' + randomIndex1 + '.png';

}

function changeTurn() {
    if (currentTurn === 0) {
        totalScore0 += currentScore0;
        score0.innerHTML = totalScore0;
        currentScore0 = 0;
        current0.innerHTML = currentScore0;
        currentTurn = 1;
        getClass0.classList.remove('active');
        getClass1.classList.add('active');


    } else if (currentTurn === 1) {
        totalScore1 += currentScore1;
        score1.innerHTML = totalScore1;
        currentScore1 = 0;
        current1.innerHTML = currentScore1;
        currentTurn = 0;
        getClass1.classList.remove('active');
        getClass0.classList.add('active');

    }

    if (totalScore0 >= 100) {
        document.getElementById('name-0').innerHTML = 'Player 1 Winner!';
        currentTurn = 2;
    }
    else if (totalScore1 >= 100) {
        document.getElementById('name-1').innerHTML = 'Player 2 Winner!';
        currentTurn = 2;
    }
}

function newGame() {
    currentScore0 = 0;
    currentScore1 = 0;
    currentTurn = 0;
    totalScore0 = 0;
    totalScore1 = 0;

    score0.innerHTML = totalScore0;
    score1.innerHTML = totalScore1;
    current0.innerHTML = currentScore0;
    current1.innerHTML = currentScore1;
    diceImage0.src = 'blank.png';
    diceImage1.src = 'blank.png';
    document.getElementById('name-0').innerHTML = 'Player 1';
    document.getElementById('name-1').innerHTML = 'Player 2';

}

btnRoll.addEventListener('click', () => {
    if (currentTurn === 0) {
        rollDice();
        currentScore0 += (randomIndex0 + randomIndex1);
        if (randomIndex0 === 1 || randomIndex1 === 1) {
            currentScore0 = 0;
            currentTurn = 1;
            getClass0.classList.remove('active');
            getClass1.classList.add('active');
        }

        current0.innerHTML = currentScore0;


    }
    else if (currentTurn === 1) {
        rollDice();
        currentScore1 += (randomIndex0 + randomIndex1);
        if (randomIndex0 === 1 || randomIndex1 === 1) {
            currentScore1 = 0;
            currentTurn = 0;
            getClass1.classList.remove('active');
            getClass0.classList.add('active');
        }

        current1.innerHTML = currentScore1;

    } else {
        alert('Someone has already won.\nPlease click New Game to start.');
    }

});

btnHold.addEventListener('click', () => {
    changeTurn();

});

btnNewGame.addEventListener('click', () => {
    newGame();
});


