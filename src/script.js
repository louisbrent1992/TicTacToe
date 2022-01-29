// Selector of all cell elements.
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");
const playButton = document.getElementById("playButton");
const container = document.getElementById("container");
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;

playButton.addEventListener("click", playNow);

function playNow() {
  // Hide play now button by adding hide class
  container.classList.add("hide");
  // Set board to display
  board.classList.add("show");
  // Start game
  startGame();
}

// Initializes default state of the game
function startGame() {
  circleTurn = false;
  // Every time we click on a cell, we want to add a handleClick function. Also, we only want the click event to fire once.
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  // Place mark.
  placeMark(cell, currentClass);
  // Check for win. If it's not a win, it's a draw.
  if (checkWin(currentClass)) {
    endGame(false);
    // Check for draw.
  } else if (isDraw()) {
    endGame(true);
  } else {
    // Switch turns.
    swapTurns();
    setBoardHoverClass();
  }
}

// Adds mark class for each cell when clicked
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

// Switches between X and O turns
function swapTurns() {
  circleTurn = !circleTurn;
}

// Adds hover class based on the current turn
function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

// Checks all of the winning combinations to see if some of the winning combinations are met.
function checkWin(currentClass) {
  // Returns true when a winning combination is found.
  return WINNING_COMBINATIONS.some((combination) => {
    // Checks every cell index for a winning combination and returns true.
    return combination.every((index) => {
      // If the current class is inside of one of the combination elements at each index, we have a winner.
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

// If every single cell contains an X or O class, then the game is a draw.
function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn ? "Circle" : "X"
    } Wins!`;
  }
  winningMessageElement.classList.add("show");
}

restartButton.addEventListener("click", startGame);
