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

// Creates the Title
const title = document.createElement('hi')
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
for (let i=0; i < 9; i++) {
    const tile = document.createElement('div')
    tile.classList.add('col-4')
    tile.addEventListener('click', clickAction ) // <--- Needs to call the clickAction function later on
    tile.textContent = gameState.gameBoard[i]
    tileContainer.appendChild(tile)
}

// Creates the paragraph that indicates the game result
const gameResultParagraph = document.createElement('p')
gameResultParagraph.textContent = '' //<--- Needs to display who won later on
app.appendChild(gameResultParagraph)

// Creates the Reset Button
const resetButton = document.createElement('button')
resetButton.textContent = "Reset Game"
resetButton.addEventListener('click', startGame) //<--- Check this later on 
app.appendChild(resetButton)
}
//----------------------------------------------------------------------------------------------------------------------------------
// Sets the initial state of the game 
function startGame() {
    gameState.playerTurn = 'X'
    gameState.gameBoard = ['', '', '', '', '', '', '', '', '']
    gameState.gameCondition = 'incomplete'
    renderElements()
}
//----------------------------------------------------------------------------------------------------------------------------------
// Controls what happens when you click on the tiles
function clickAction() {

}
//----------------------------------------------------------------------------------------------------------------------------------
// Switches the player symbol. 
function switchPlayer() {

}
//----------------------------------------------------------------------------------------------------------------------------------
// Checks whether game is a win, draw or incomplete
function checkCondition() {

}


//----------------------------------------------------------------------------------------------------------------------------------
// Wait, all this is going to do is call the startGame function. What is even the point of this function??
function resetGame() {

}




//----------------------------------------------------------------------------------------------------------------------------------
renderElements()










// Could make all the functions stand alone which result in having to call the functions more within other functions?
// Or I could combine them into larger functions?