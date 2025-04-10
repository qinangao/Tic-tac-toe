const board = document.querySelector(".board");
const squares = document.querySelectorAll(".square");
const endBtn = document.querySelector(".endGame--btn");
const result = document.querySelector(".result");

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

// console.log(...squares);

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const players = ["X", "O"];
let currentPlayer = players[0];
let gameOver = false;

const switchPlayer = function () {
  if (currentPlayer === players[0]) {
    player2.style.backgroundColor = "#ff6347";
    player1.style.backgroundColor = " #f0e68c";
    currentPlayer = players[1];
  } else {
    player2.style.backgroundColor = "#f0e68c";
    player1.style.backgroundColor = "#ff6347";
    currentPlayer = players[0];
  }
};

squares.forEach((square) => {
  square.addEventListener("click", function (e) {
    if (square.innerText !== "" || gameOver) return;
    square.innerText = currentPlayer;

    if (checkWin(currentPlayer)) {
      result.innerText = `${
        currentPlayer === players[0] ? "Player 1" : "Player 2"
      } wins🎉`;
      return;
    }
    switchPlayer();
    if (checkTie()) {
      result.innerText = "The game is tie!💪";
      return;
    }
  });
});

const checkWin = function (currentPlayer) {
  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (
      squares[a].innerText === currentPlayer &&
      squares[b].innerText === currentPlayer &&
      squares[c].innerText === currentPlayer
    ) {
      gameOver = true;
      return true;
    }
  }
  return false;
};

const checkTie = function () {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerText === "") {
      return false;
    }
  }
  gameOver = true;
  return true;
};

endBtn.addEventListener("click", function () {
  squares.forEach((square) => {
    square.innerText = "";
  });
  player1.style.backgroundColor = "#ff6347";
  player2.style.backgroundColor = "#f0e68c";
  result.innerText = "";
  gameOver = false;
});
