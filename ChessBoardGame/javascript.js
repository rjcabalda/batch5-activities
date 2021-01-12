let b_currentLetter;
let b_currentNumber;
let b_nextLetter;
let b_nextNumber;
let w_currentLetter;
let w_currentNumber;
let w_nextLetter;
let w_nextNumber;
let pawnMove1;
let pawnMove2;

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
let newFill;

let w_minute = 5;
let w_seconds = 0;
let w_totalSeconds = 0;
let w_intervalId = null;
let b_intervalId = null;
let b_minute = 5;
let b_seconds = 0;
let b_totalSeconds = 0;
let b_status = 0;
let w_status = 0;
let pause = true;
let hasClicked = false;

let currentPiece;

const empties = document.querySelectorAll('.empty');
const pieces = document.querySelectorAll('.pawn');

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for (const piece of pieces) {
    // console.log(piece.alt);
    piece.addEventListener('dragstart', function () {

        if (piece.alt === 'White Pawn') {
            currentPiece = 'White Pawn';
            wPawnDragStart(piece);
            newFill = piece;
            setTimeout(() => this.className = 'invisible', 0);

        }
        else if (piece.alt === 'Black Pawn') {
            currentPiece = 'Black Pawn';
            bPawnDragStart(piece);
            newFill = piece;
            setTimeout(() => this.className = 'invisible', 0);
        }

    });


    piece.addEventListener('dragend', function () {
        this.className = piece;
    });


}


//function of move pieces
function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    // this.className += ' hovered';

}

function dragLeave() {
    // this.className = 'empty';

}

function dragDrop() {
    // console.log(currentPiece);
    if (currentPiece == 'White Pawn') {
        whitePawnDrop(this); //----------------White Pawn function----------------
    } else {
        blackPawnDrop(this); //----------------Black Pawn function---------------------
    }
}
// ---------------------Function of the Pawn----------------------------------------------
function blackPawnDrop(currentState) {
    // console.log('black drop');
    w_nextLetter = currentState.getAttribute("id").charAt(0);
    w_nextNumber = currentState.getAttribute("id").slice(1);
    let checkMove1 = document.getElementById(pawnMove1)?.children.length;
    let checkMove2 = document.getElementById(pawnMove2)?.children.length;
    if (currentState.classList.contains('nextMove')) {
        document.getElementById(pawnMove1)?.classList.remove('nextMove');
        document.getElementById(pawnMove2)?.classList.remove('nextMove');
        currentState.append(newFill);
    } else {
        document.getElementById(pawnMove1)?.classList.remove('nextMove');
        document.getElementById(pawnMove2)?.classList.remove('nextMove');
    }

}

function whitePawnDrop(currentState) {
    // w_nextLetter = currentState.getAttribute("id").charAt(0);
    // w_nextNumber = currentState.getAttribute("id").slice(1);
    let checkMove1 = document.getElementById(pawnMove1)?.children.length;
    let checkMove2 = document.getElementById(pawnMove2)?.children.length;
    console.log(currentState.classList.contains('nextMove'));
    if (currentState.classList.contains('nextMove')) {
        document.getElementById(pawnMove1)?.classList.remove('nextMove');
        document.getElementById(pawnMove2)?.classList.remove('nextMove');
        currentState.append(newFill);
    }
    else {
        document.getElementById(pawnMove1)?.classList.remove('nextMove');
        document.getElementById(pawnMove2)?.classList.remove('nextMove');
    }
}
// ---------------------Function of the Pawn----------------------------------------------

function wPawnDragStart(state) {
    w_currentLetter = state?.parentNode.id.charAt(0);
    w_currentNumber = state?.parentNode.id.slice(1);
    w_nextLetter = state?.parentNode.id.charAt(0);
    w_nextNumber = parseInt(state?.parentNode.id.slice(1)) + 1;
    pawnMove1 = w_currentLetter + (parseInt(w_nextNumber));
    pawnMove2 = w_currentLetter + ((parseInt(w_nextNumber) + 1));
    let checkMove1 = document.getElementById(pawnMove1).children.length;
    let checkMove2 = document.getElementById(pawnMove2).children.length;
    let right = alphabet.indexOf(w_currentLetter) + 1;
    let left = alphabet.indexOf(w_currentLetter) - 1;

    if (w_currentLetter + w_currentNumber === w_currentLetter + 2) {
        if (checkMove1 === 0) {
            document.getElementById(pawnMove1).classList.add('nextMove');
            if (checkMove2 === 0) {
                document.getElementById(pawnMove2).classList.add('nextMove');
            }
        }
    } else {
        if (checkMove1 === 0 && w_currentLetter === w_nextLetter) {
            document.getElementById(pawnMove1).classList.add('nextMove');
        }

    }
    state.className += ' hold';

}
function bPawnDragStart(state) {
    w_currentLetter = state?.parentNode.id.charAt(0);
    w_currentNumber = state?.parentNode.id.slice(1);
    w_nextLetter = state?.parentNode.id.charAt(0);
    w_nextNumber = parseInt(state?.parentNode.id.slice(1)) - 1;
    pawnMove1 = w_currentLetter + w_nextNumber;
    pawnMove2 = w_currentLetter + ((parseInt(w_nextNumber) - 1));
    let checkMove1 = document.getElementById(pawnMove1).children.length;
    let checkMove2 = document.getElementById(pawnMove2).children.length;
    let right = alphabet.indexOf(w_currentLetter) + 1;
    let left = alphabet.indexOf(w_currentLetter) - 1;

    if (w_currentLetter + w_currentNumber === w_currentLetter + 7) {
        if (checkMove1 === 0) {
            document.getElementById(pawnMove1).classList.add('nextMove');
            if (checkMove2 === 0) {
                document.getElementById(pawnMove2).classList.add('nextMove');
            }
        }
    } else {
        if (checkMove1 === 0 && w_currentLetter === w_nextLetter) {
            document.getElementById(pawnMove1).classList.add('nextMove');
        }

    }
    state.className += ' hold';
}




//-----------------Timer----------------------------------------
document.getElementById("b_minute").innerHTML = "05";
document.getElementById("b_seconds").innerHTML = "00";
document.getElementById("w_minute").innerHTML = "05";
document.getElementById("w_seconds").innerHTML = "00";



function w_startTimer() {
    ++w_totalSeconds;
    w_seconds = Math.floor(60 - w_totalSeconds);

    if (w_seconds == 0) {
        w_minute -= 1;
        w_totalSeconds = 0;
    }
    if (w_minute == -1 && w_seconds == 0) {
        w_minute = 0;
        clearInterval(w_intervalId);
        clearInterval(b_intervalId);

        alert("Time's up!\nWhite Team");
    }
    if (w_seconds < 10) {
        document.getElementById("w_seconds").innerHTML = ("0" + w_seconds).slice(-2);
    } else {
        document.getElementById("w_seconds").innerHTML = w_seconds;
    }
    document.getElementById("w_minute").innerHTML = ("0" + w_minute).slice(-2);
}
function b_startTimer() {

    ++b_totalSeconds;

    b_seconds = Math.floor(60 - b_totalSeconds);

    if (b_seconds == 0) {
        b_minute -= 1;
        b_totalSeconds = 0;
    }
    if (b_minute == -1 && b_seconds == 0) {
        b_minute = 0;
        clearInterval(w_intervalId);
        clearInterval(b_intervalId);

        alert("Time's up!\nBlack Team");
    }
    if (b_seconds < 10) {
        document.getElementById("b_seconds").innerHTML = ("0" + b_seconds).slice(-2);
    } else {
        document.getElementById("b_seconds").innerHTML = b_seconds;
    }
    document.getElementById("b_minute").innerHTML = ("0" + b_minute).slice(-2);

}

document.getElementById('black-btn').addEventListener('click', () => {
    if (pause) {
        if (b_status == 0) {
            b_status++;
            w_status = 0;
            w_intervalId = setInterval(w_startTimer, 1000);
            clearInterval(b_intervalId);
            hasClicked = true;
        }
    }
});
document.getElementById('white-btn').addEventListener('click', () => {
    if (pause) {
        if (w_status == 0) {
            w_status++;
            b_status = 0;
            b_intervalId = setInterval(b_startTimer, 1000);
            clearInterval(w_intervalId);
            hasClicked = true;
        }
    }

});
document.getElementById('pause-btn').addEventListener('click', () => {
    if (pause) {
        if (hasClicked) {
            clearInterval(w_intervalId);
            clearInterval(b_intervalId);
            pause = false;
            document.querySelector('#pause-btn').innerHTML = 'Resume';
        }

    } else {
        if (hasClicked) {
            if (b_status == 0) {
                b_intervalId = setInterval(b_startTimer, 1000);
            }
            else if (w_status == 0) {
                w_intervalId = setInterval(w_startTimer, 1000);
            }
            document.querySelector('#pause-btn').innerHTML = 'Pause';
            pause = true;
        }

    }
});
document.getElementById('reset-btn').addEventListener('click', () => {
    w_minute = 4;
    b_minute = 4;
    w_totalSeconds = 0;
    b_totalSeconds = 0;
    b_status = 0;
    w_status = 0;
    pause = true;
    hasClicked = false;
    clearInterval(w_intervalId);
    clearInterval(b_intervalId);

    document.getElementById("b_minute").innerHTML = "05";
    document.getElementById("b_seconds").innerHTML = "00";
    document.getElementById("w_minute").innerHTML = "05";
    document.getElementById("w_seconds").innerHTML = "00";
});
//-----------------Timer----------------------------------------

