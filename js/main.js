// Testing JavaScript
console.log("Test")
//----------------------------------------------------------------------------------------------------------------------------------
// Stores player turn, tile content and game condition as object properties
let gameState = {
    playerTurn: 'X',
    gameBoard: ['', '', '', '', '', '', '', '', ''],
    gameCondition: 'incomplete'
}
//----------------------------------------------------------------------------------------------------------------------------------
// Creates and renders all the HTML elements needed
function renderElements() {
    const app = document.getElementById('app')
    app.innerHTML = ''

    // Creates the Title
    const title = document.createElement('h1')
    title.textContent = 'Tic Tac Toe'
    app.appendChild(title)

    // Creates the paragraph that indicates whos turn it is
    const playerTurnParagraph = document.createElement('p')
    playerTurnParagraph.textContent = `Player ${gameState.playerTurn} 's Turn`
    app.appendChild(playerTurnParagraph)

    // Creates a div with a class of 'container' for the row
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container')
    app.appendChild(containerDiv)

  // Creates 3 rows
  for (let i = 0; i < 3; i++) {
    const rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    containerDiv.appendChild(rowDiv)

    // Creates 3 columns in each row
    for (let j = 0; j < 3; j++) {
        const tile = document.createElement('div')
        tile.className = 'col-4'
        tile.textContent = gameState.gameBoard[i * 3 + j] // Calculate the index based on row and column
        tile.addEventListener('click', () => clickAction(i * 3 + j))
        rowDiv.appendChild(tile)
    }
}
    // Creates the paragraph that indicates the game result
    const gameResultParagraph = document.createElement('p')
    if (gameState.gameCondition === 'win') { //<---Check this section later. win and draw not defined yet
        gameResultParagraph.textContent = `Player ${gameState.playerTurn} wins!`
    } else if (gameState.gameCondition === 'draw') {
        gameResultParagraph.textContent = 'It\'s a draw!'
    }
    app.appendChild(gameResultParagraph)

    // Creates the Reset Button
    const resetButton = document.createElement('button')
    resetButton.textContent = 'Reset Game'
    resetButton.addEventListener('click', initGame)
    app.appendChild(resetButton)
}
//----------------------------------------------------------------------------------------------------------------------------------
// Sets the initial state of the game 
function initGame() {
    gameState.playerTurn = 'X'
    gameState.gameBoard = ['', '', '', '', '', '', '', '', '']
    gameState.gameCondition = 'incomplete'
    renderElements()
}
//----------------------------------------------------------------------------------------------------------------------------------
// Controls what happens when you click on the tiles
function clickAction(tileIndex) {
    if (gameState.gameBoard[tileIndex] === '' && gameState.gameCondition === 'incomplete') {
        gameState.gameBoard[tileIndex] = gameState.playerTurn
        checkCondition()
        renderElements()
        switchPlayer()
    }
}
//----------------------------------------------------------------------------------------------------------------------------------
// Switches the player symbol. 
function switchPlayer() {
    if (gameState.playerTurn === 'X') {
        gameState.playerTurn = 'O'
    } else {
        gameState.playerTurn = 'X'
    }
}
//----------------------------------------------------------------------------------------------------------------------------------
// Checks whether game is a win, draw or incomplete (Congrats you suck)
function checkCondition() { //
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i]
        if (gameState.gameBoard[a] === gameState.gameBoard[b] &&
            gameState.gameBoard[b] === gameState.gameBoard[c] &&
            gameState.gameBoard[a] !== ''
        ) {
            gameState.gameCondition = 'win'
            
        } else if (!gameState.gameBoard.includes('')) {
            gameState.gameCondition = 'draw'
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------------------
initGame()