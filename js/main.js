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

    // Creates a div with a class of 'row' 
    const tileContainer = document.createElement('div')
    tileContainer.classList.add('row')
    app.appendChild(tileContainer)

    // Creates the 9 tiles that make up the gameboard
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement('div')
        tile.className = 'col-4'
        tile.textContent = gameState.gameBoard[i]
        tile.addEventListener('click', () => clickAction(i))
        tileContainer.appendChild(tile)
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
        switchPlayer()
        renderElements()
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
        [0, 4, 9], [2, 4, 6]
    ]
    for (let i = 0; i < winningCombinations.length; i++) {
        const combinations = winningCombinations[i]
  /*      if () { //<--- Not Completed, Check Later On (Needs to check the gameboard is equal with the winning combinations)
            gameState.gameCondition = 'win'
            return
        } else if (!gameState.gameBoard === '') {
            gameState.gameCondition = 'draw'
        } */
    }
}
//----------------------------------------------------------------------------------------------------------------------------------
initGame()

