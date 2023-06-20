Tic Tac Toe

Description: 
Create a webpage that recreates the childhood classic game, tic-tac-toe, using JavaScript, HTML, and the Bootstrap CSS framework (minimal custom CSS)
For this project, we will be using JavaScript to dynamically render elements, keep track of board status, display win conditions, and manage state.

MoSCoW

Must: 
1. The game should let the players know who's turn it is.
2. Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
3. The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
4. There should be a Restart Game button that does not refresh the page (set state).
5. On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
6. The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
7. Only have a single <div id="app"></div> in your index.HTML 

Should: 
1. Allow players to enter their names
2. Keep track of the number of games won by X and O

Could: 
1. Add a link to rules, display in a modal
2. Turn the project into Connect Four

Won't: 
1. AI playing against you 
2. Recreate Go

Think Through
Functions are when something “happens” So what’s happening?
Do these all need to be stand alone functions? Which could or should be combined? 
Which variables could or should be combined into an object for storing state? 
How will all these variables/functions/objects interact with each other? 
How do they all get triggered in an order that achieves my goal?
Gah, my brain

Step By Step:

BEGIN

User goes to the page

Upon loading, the page will contain: a 3x3 display of tiles, title('Tic Tac Toe'), paragraph('player X turn') and reset button
(Function)(Event Handler)

User clicks on a tile which changes the content of the tile from empty to 'x'
(Function)(Event Handler) 

The display of the paragraph changes to indicate ('player O turn')
(Function) 

The user clicks on another tile which now changes the content of the tile from empty to 'O'. Tiles previously clicked on cannot be clicked twice. 
(Function)(Event Handler)

The process continues, with the clicks and player indicator paragraph alternating between 'X' and 'O'
(Function)

A display on the page when become visible when one of three conditions is met: 
Player X gets three symbols('X') in a straight line (horizontal, vertical, or diagonal). 
Player O gets three symbols('O') in a straight line (horizontal, vertical, or diagonal). 
All tiles have been clicked on. 
(Function) 

IF Player X gets three in a straight line. Alert says 'Player X Won!' 
IF Player O gets three in a straight line. Alert says 'Plater O Won!'
IF all tiles are clicked on without either player X or Player O getting three in a straight line, then alert says 'Draw!'
(Function)

If user wants to reset the game, they click the 'reset button' which sets the content of the tiles back to empty and defaults to player x turn. 
(Function)

END

VARIABLES
1. app (To link the HTML div element) 

2. playerTurn (To store state on who's turn it is)

3. gameCondition (To store state on whether somebody has won or if it is a draw) 

4. gameBoard (To state whether each tile is 'empty', 'X' or 'O'

5. displayWhosTurn (An html element that displays which players turn it is) 

6. displayResult (An html element that displays whether somebody has won or if the game is a draw) 

FUNCTIONS
1. renderElements (To render all the HTML required) 

2. initGame (To set the initial state of the game display) 

3. clickAction (To control what happens when you click on the tiles) 

4. checkCondition (To Check whether a player has won or if it is a draw) 

5. resetGame (To revert the display back to the original state of the game with all tiles empty) 

OBJECTS
1. gameState (An Object that contains the playerTurn, gameCondition and gameBoard variables which can store overall state) 



NOT COMPLETE
