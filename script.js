document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const scoreDisplay = document.getElementById('score');
    const newGameBtn = document.getElementById('new-game-btn');
  
    let score = 0;
    let grid = [];
    let hasWon = false;
  
    // Initialize the grid
    function initializeGrid() {
      for (let row = 0; row < 4; row++) {
        grid[row] = [];
        for (let col = 0; col < 4; col++) {
          grid[row][col] = 0;
        }
      }
    }
  
    // Add a new random number (2 or 4) to an empty cell
    function addNewNumber() {
      const emptyCells = [];
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (grid[row][col] === 0) {
            emptyCells.push({ row, col });
          }
        }
      }
      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const newValue = Math.random() < 0.9 ? 2 : 4;
        grid[randomCell.row][randomCell.col] = newValue;
      }
    }
  
    // Update the grid UI
    function updateGrid() {
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          const cell = document.getElementById(`cell-${row}-${col}`);
          cell.textContent = grid[row][col] === 0 ? '' : grid[row][col];
          cell.className = `grid-cell cell-${grid[row][col]}`;
        }
      }
    }
  
    // Handle game over condition
    function gameOver() {
      // Add your game over logic here
      console.log('Game Over');
    }
  
    // Check if the player has reached 2048 (win condition)
    function checkWinCondition() {
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (grid[row][col] === 2048) {
            hasWon = true;
            break;
          }
        }
      }
      if (hasWon) {
        // Add your win condition logic here
        console.log('You Win!');
      }
    }
  
    // Start a new game
    function newGame() {
      initializeGrid();
      addNewNumber();
      addNewNumber();
      updateGrid();
      score = 0;
      scoreDisplay.textContent = score;
      hasWon = false;
    }
  
    // Handle key press events
    function handleKeyPress(event) {
      if (!hasWon) {
        switch (event.key) {
          case 'ArrowUp':
            // Add your logic for moving tiles up
            break;
          case 'ArrowDown':
            // Add your logic for moving tiles down
            break;
          case 'ArrowLeft':
            // Add your logic for moving tiles left
            break;
          case 'ArrowRight':
            // Add your logic for moving tiles right
            break;
        }
        updateGrid();
        checkWinCondition();
      }
    }
  
    // Event listeners
    document.addEventListener('keydown', handleKeyPress);
    newGameBtn.addEventListener('click', newGame);
  
    // Start a new game when the page loads
    newGame();
  });
  