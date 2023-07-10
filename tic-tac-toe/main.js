const tictactoe = document.querySelector('.tic-tac-toe');

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('empty');
        tictactoe.appendChild(square);
    }
}

makeBoard();

let exesOrOhs = 'X';
function changeExesOrOhs() {
    exesOrOhs = exesOrOhs === 'X' ? 'O' : 'X';
}

function updateBoard() {
    const squares = document.querySelectorAll('.square');
    for (let square of squares) {
        if (square.classList.contains('X')) {
            square.innerHTML = 'X';
        } else if (square.classList.contains('O')) {
            square.innerHTML = 'O';
        }
    };
};

function areAllSquaresFilled() {
    const emptySquares = document.querySelectorAll('.empty');
    if (emptySquares.length === 0) {
        alert('Game is Over!');
    }
}

function gameIsOver() {
    const squares = document.querySelectorAll('.square');
    const winningCombinations = [
        [squares[0], squares[1], squares[2]],
        [squares[3], squares[4], squares[5]],
        [squares[6], squares[7], squares[8]],
        [squares[0], squares[3], squares[6]],
        [squares[1], squares[4], squares[7]],
        [squares[2], squares[5], squares[8]],
        [squares[0], squares[4], squares[8]],
        [squares[2], squares[4], squares[6]]
    ];
    for (let combination of winningCombinations) {
        if (combination.every(square => square.classList.contains('X'))) {
            alert('X is the winner!');
        } else if (combination.every(square => square.classList.contains('O'))) {
            alert('O is the winner!');
        }
    }
    return false;
}


function makeMove() {
    const squares = document.querySelectorAll('.square');
    for (let square of squares) {
        square.addEventListener('click', (event) => {
            if (square.classList.contains('empty')) {
                square.classList.add(exesOrOhs);
                square.classList.remove('empty');
                updateBoard();
                changeExesOrOhs();
                gameIsOver();
                if (gameIsOver() === false) {
                    areAllSquaresFilled();
                }
            }
        });
    };

}

makeMove();

function resetPlayerToX() {
    if (exesOrOhs === 'O') {
        changeExesOrOhs();
    }
}

function resetBoard() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    });
    makeBoard();
    makeMove();
    resetPlayerToX();
}

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetBoard);
