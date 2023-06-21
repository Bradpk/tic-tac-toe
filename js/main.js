// Testing JavaScript
console.log("Test")
//----------------------------------------------------------------------------------------------------------------------------------
// Stores player turn, tile content and game condition as object properties
let gameState = {
    playerTurn: 'X',
    tileContent: ' ',
    gameCondition: 'incomplete'
}
//----------------------------------------------------------------------------------------------------------------------------------
// Create and render all the HTML elements needed
function renderElements() {
const app = document.getElementById('app')

// Creates the Title
const title = document.createElement('hi')
title.textContent = 'Tic Tac Toe'
app.appendChild(title)

const playerTurnParagraph = document.createElement('p')
playerTurnParagraph.textContent = `Player ${gameState.playerTurn} 's Turn`
app.appendChild(playerTurnParagraph)
}
//----------------------------------------------------------------------------------------------------------------------------------
// Sets the initial state of the game
function startGame() {

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
// Wait, all this is going to do is call the startGame function. What is even the point of this function? 
function resetGame() {

}




//----------------------------------------------------------------------------------------------------------------------------------
renderElements()










// Could make all the functions stand alone which result in having to call the functions more within other functions?
// Or I could combine them into larger functions?