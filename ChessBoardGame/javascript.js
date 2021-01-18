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
let checkMove1;
let checkMove2;

let right;
let left;
let boxRight;
let boxLeft;

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
let horseMoves = [];
let currentPiece;

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

const empties = document.querySelectorAll('.empty');
const pieces = document.querySelectorAll('.piece');

for (const empty of empties) {
    empty.addEventListener('dragover', (e) => { e.preventDefault(); });
    empty.addEventListener('dragenter', (e) => { e.preventDefault(); });
    //empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
for (const piece of pieces) {
    piece.addEventListener('dragstart', function () {
        switch (piece.alt) {
            case 'White Pawn':
                currentPiece = piece.alt;
                wPawnDrag(piece, 'DragStart');
                newFill = piece;
                setTimeout(() => this.className = 'invisible', 0);
                break;
            case 'Black Pawn':
                currentPiece = piece.alt;
                bPawnDrag(piece, 'DragStart');
                newFill = piece;
                setTimeout(() => this.className = 'invisible', 0);
                break;
            case 'White Horse':
                currentPiece = piece.alt;
                whiteHorse(piece, 'DragStart');
                newFill = piece;
                setTimeout(() => this.className = 'invisible', 0);
                break;
            case 'Black Horse':
                currentPiece = piece.alt;
                blackHorse(piece, 'DragStart');
                newFill = piece;
                setTimeout(() => this.className = 'invisible', 0);
                break;
        }
    });


    piece.addEventListener('dragend', function () {
        this.className = piece;
    });


}

function dragDrop() {
    switch (currentPiece) {
        case 'White Pawn':
            wPawnDrag(this, 'DragDrop');
            break;
        case 'Black Pawn':
            bPawnDrag(this, 'DragDrop');
            break;
        case 'White Horse':
            whiteHorse(this, 'DragDrop');
            break;
        case 'Black Horse':
            blackHorse(this, 'DragDrop');
            break;
    }

}
// ---------------------Function of the black Pawn----------------------------------------------

function bPawnDrag(state, move) {
    if (move === 'DragStart') {
        b_currentLetter = state?.parentNode.id.charAt(0);
        b_currentNumber = state?.parentNode.id.slice(1);
        b_nextLetter = state?.parentNode.id.charAt(0);
        b_nextNumber = parseInt(state?.parentNode.id.slice(1)) - 1;
        pawnMove1 = b_currentLetter + b_nextNumber;
        pawnMove2 = b_currentLetter + ((parseInt(b_nextNumber) - 1));
        checkMove1 = document.getElementById(pawnMove1)?.children.length;
        checkMove2 = document.getElementById(pawnMove2)?.children.length;

        right = (alphabet[alphabet.indexOf(b_currentLetter) + 1]) + b_nextNumber;
        left = (alphabet[alphabet.indexOf(b_currentLetter) - 1]) + b_nextNumber;
        boxRight = document?.getElementById(right);
        boxLeft = document?.getElementById(left);

        if (boxRight?.children.length === 1 && boxRight.children[0].alt.split(' ')[0] === 'White') {
            boxRight.classList.add('capture');
        }
        if (boxLeft?.children.length === 1 && boxLeft.children[0].alt.split(' ')[0] === 'White') {
            boxLeft.classList.add('capture');
        }

        if (b_currentLetter + b_currentNumber === b_currentLetter + 7) {
            if (checkMove1 === 0) {
                document.getElementById(pawnMove1).classList.add('nextMove');
                if (checkMove2 === 0) {
                    document.getElementById(pawnMove2).classList.add('nextMove');
                }
            }
        } else {
            if (checkMove1 === 0 && b_currentLetter === b_nextLetter) {
                document.getElementById(pawnMove1).classList.add('nextMove');
            }

        }
        state.className += ' hold';

    } else { //--------------drop funtion------------
        // let checkMove1 = document.getElementById(pawnMove1)?.children.length;
        // let checkMove2 = document.getElementById(pawnMove2)?.children.length;
        if (state.classList.contains('nextMove')) {
            document.getElementById(pawnMove1)?.classList.remove('nextMove');
            document.getElementById(pawnMove2)?.classList.remove('nextMove');
            state.append(newFill);
        } else {
            document.getElementById(pawnMove1)?.classList.remove('nextMove');
            document.getElementById(pawnMove2)?.classList.remove('nextMove');
        }
        if (state.classList.contains('capture')) {
            boxLeft?.classList.remove('capture');
            boxRight?.classList.remove('capture');
            state.innerHTML = '';
            state.append(newFill);
        } else {
            boxLeft?.classList.remove('capture');
            boxRight?.classList.remove('capture');
        }
    }

}
function wPawnDrag(state, move) {

    if (move === 'DragStart') {
        w_currentLetter = state?.parentNode.id.charAt(0);
        w_currentNumber = state?.parentNode.id.slice(1);
        w_nextLetter = state?.parentNode.id.charAt(0);
        w_nextNumber = parseInt(state?.parentNode.id.slice(1)) + 1;
        pawnMove1 = w_currentLetter + (parseInt(w_nextNumber));
        pawnMove2 = w_currentLetter + ((parseInt(w_nextNumber) + 1));
        checkMove1 = document.getElementById(pawnMove1)?.children.length;
        checkMove2 = document.getElementById(pawnMove2)?.children.length;

        right = (alphabet[alphabet.indexOf(w_currentLetter) + 1]) + w_nextNumber;
        left = (alphabet[alphabet.indexOf(w_currentLetter) - 1]) + w_nextNumber;
        boxRight = document?.getElementById(right);
        boxLeft = document?.getElementById(left);

        if (boxRight?.children.length === 1 && boxRight.children[0].alt.split(' ')[0] === 'Black') {
            boxRight.classList.add('capture');
        }
        if (boxLeft?.children.length === 1 && boxLeft.children[0].alt.split(' ')[0] === 'Black') {
            boxLeft.classList.add('capture');
        }

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
    else { //------------drop function

        if (state.classList.contains('nextMove')) {
            document.getElementById(pawnMove1)?.classList.remove('nextMove');
            document.getElementById(pawnMove2)?.classList.remove('nextMove');
            state.append(newFill);
        }
        else {
            document.getElementById(pawnMove1)?.classList.remove('nextMove');
            document.getElementById(pawnMove2)?.classList.remove('nextMove');
        }
        if (state.classList.contains('capture')) {
            boxLeft?.classList.remove('capture');
            boxRight?.classList.remove('capture');
            state.innerHTML = '';
            state.append(newFill);
        } else {
            boxLeft?.classList.remove('capture');
            boxRight?.classList.remove('capture');
        }

    }
}

function whiteHorse(state, move) {
    if (move === 'DragStart') {
        w_currentLetter = state.parentNode.id.charAt(0);
        w_currentNumber = state.parentNode.id.slice(1);
        horseMoves = [
            alphabet[alphabet.indexOf(w_currentLetter) + 1] + (parseInt(w_currentNumber) + 2),
            alphabet[alphabet.indexOf(w_currentLetter) - 1] + (parseInt(w_currentNumber) + 2),
            alphabet[alphabet.indexOf(w_currentLetter) + 1] + (parseInt(w_currentNumber) - 2),
            alphabet[alphabet.indexOf(w_currentLetter) - 1] + (parseInt(w_currentNumber) - 2),
            alphabet[alphabet.indexOf(w_currentLetter) + 2] + (parseInt(w_currentNumber) + 1),
            alphabet[alphabet.indexOf(w_currentLetter) + 2] + (parseInt(w_currentNumber) - 1),
            alphabet[alphabet.indexOf(w_currentLetter) - 2] + (parseInt(w_currentNumber) + 1),
            alphabet[alphabet.indexOf(w_currentLetter) - 2] + (parseInt(w_currentNumber) - 1)
        ];
        for (const horseMove of horseMoves) {

            let checkPiece = document.getElementById(horseMove);

            if (checkPiece?.children.length === 0) {
                checkPiece.classList.add('nextMove');
            }
            if (checkPiece?.children.length === 1 && checkPiece?.children[0]?.alt.split(' ')[0] === 'Black') {
                checkPiece.classList.add('capture');
            }

        }
    }
    else {
        if (state.classList.contains('capture')) {
            state.innerHTML = '';
            state.append(newFill);
        }
        if (state.classList.contains('nextMove')) {
            state.append(newFill);
        }

        for (const horseMove of horseMoves) {

            let checkPiece = document.getElementById(horseMove);
            checkPiece?.classList.remove('nextMove');
            checkPiece?.classList.remove('capture');
        }

    }
}
function blackHorse(state, move) {
    if (move === 'DragStart') {
        w_currentLetter = state.parentNode.id.charAt(0);
        w_currentNumber = state.parentNode.id.slice(1);
        horseMoves = [
            alphabet[alphabet.indexOf(w_currentLetter) + 1] + (parseInt(w_currentNumber) + 2),
            alphabet[alphabet.indexOf(w_currentLetter) - 1] + (parseInt(w_currentNumber) + 2),
            alphabet[alphabet.indexOf(w_currentLetter) + 1] + (parseInt(w_currentNumber) - 2),
            alphabet[alphabet.indexOf(w_currentLetter) - 1] + (parseInt(w_currentNumber) - 2),
            alphabet[alphabet.indexOf(w_currentLetter) + 2] + (parseInt(w_currentNumber) + 1),
            alphabet[alphabet.indexOf(w_currentLetter) + 2] + (parseInt(w_currentNumber) - 1),
            alphabet[alphabet.indexOf(w_currentLetter) - 2] + (parseInt(w_currentNumber) + 1),
            alphabet[alphabet.indexOf(w_currentLetter) - 2] + (parseInt(w_currentNumber) - 1)
        ];
        for (const horseMove of horseMoves) {

            let checkPiece = document.getElementById(horseMove);

            if (checkPiece?.children.length === 0) {
                checkPiece.classList.add('nextMove');
            }
            if (checkPiece?.children.length === 1 && checkPiece?.children[0]?.alt.split(' ')[0] === 'White') {
                checkPiece.classList.add('capture');
            }

        }
    }
    else {
        if (state.classList.contains('capture')) {
            state.innerHTML = '';
            state.append(newFill);
        }
        if (state.classList.contains('nextMove')) {
            state.append(newFill);
        }

        for (const horseMove of horseMoves) {

            let checkPiece = document.getElementById(horseMove);
            checkPiece?.classList.remove('nextMove');
            checkPiece?.classList.remove('capture');
        }

    }
}


