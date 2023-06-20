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


Functions are when something “happens” So what’s happening?

Step By Step:

BEGIN

User goes to the page

Upon loading, the page will contain: a 3x3 display of tiles(gameboard), title('Tic Tac Toe'), paragraph('player X turn') and reset button
(Function)(Event Handler)

User clicks on a tile which changes the content of the tile from empty to 'x'
(Function)(Event Handler) 

The display of the paragraph changes to indicate ('player O turn')
(Function) 

The user clicks on another tile which now changes the content of the tile from empty to 'O'. Tiles previously clicked on cannot be clicked twice. 
(Function) 

The process continues with the clicks and player indicator alternating between 'X' and 'O'
(Function)

An alert will display on the page when one of three conditions is met: 
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

FUNCTIONS

OBJECTS

