const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

function handleClick(e) {
  if (e.target.textContent || gameOver) return;

  e.target.textContent = currentPlayer;

  if (checkForWin()) {
    gameOver = true;
    document.querySelector('#status').textContent = `Player ${currentPlayer} wins!`;
  } else if (checkForDraw()) {
    gameOver = true;
    document.querySelector('#status').textContent = "It's a draw!";
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.querySelector('#status').textContent = `Player ${currentPlayer}'s turn`
}

