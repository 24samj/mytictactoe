let gameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let currPlayer = "X";

function placeCoin(index) {
    if (currPlayer === "X") {
        if (gameboard[index[0]][index[1]] === null) {
            gameboard[index[0]][index[1]] = "X";
            document.getElementById(`${index}`).innerText = currPlayer;
            currPlayer = "O";
        } else {
            alert("Please select valid box");
            return;
        }
    } else if (currPlayer === "O") {
        if (gameboard[index[0]][index[1]] === null) {
            gameboard[index[0]][index[1]] = "O";
            document.getElementById(`${index}`).innerText = currPlayer;
            currPlayer = "X";
        } else {
            alert("Please select valid box");
            return;
        }
    }
    checkWin();
    updateCurrentPlayer(currPlayer);
}

function checkWin() {
    let winner = null;

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (
            gameboard[i][0] !== null &&
            gameboard[i][0] === gameboard[i][1] &&
            gameboard[i][1] === gameboard[i][2]
        ) {
            winner = gameboard[i][0];
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (
            gameboard[0][i] !== null &&
            gameboard[0][i] === gameboard[1][i] &&
            gameboard[1][i] === gameboard[2][i]
        ) {
            winner = gameboard[0][i];
        }
    }

    // Check diagonals
    if (
        gameboard[0][0] !== null &&
        gameboard[0][0] === gameboard[1][1] &&
        gameboard[1][1] === gameboard[2][2]
    ) {
        winner = gameboard[0][0];
    }
    if (
        gameboard[0][2] !== null &&
        gameboard[0][2] === gameboard[1][1] &&
        gameboard[1][1] === gameboard[2][0]
    ) {
        winner = gameboard[0][2];
    }
    // Display winner
    if (winner !== null) {
        alert(`Player ${winner} wins!`);
        window.location.reload();
    }
}
function updateCurrentPlayer(currPlayer) {
    if (currPlayer === "X") {
        const currentPlayerEl = document.getElementById("currentplayer");
        currentPlayerEl.innerHTML = `Player ${currPlayer}'s turn`;
    } else if (currPlayer === "O") {
        const currentPlayerEl = document.getElementById("currentplayer");
        currentPlayerEl.innerHTML = `Player ${currPlayer}'s turn`;
    }
}

document.querySelector("#play-button").addEventListener("click", function () {
    document.querySelector("#overlay").style.display = "none";
});

document.querySelector("#play-button").addEventListener("click", function () {
    document.querySelector("#overlay").style.display = "none";
    document.querySelector("#myaudio").play();
});

updateCurrentPlayer(currPlayer);
