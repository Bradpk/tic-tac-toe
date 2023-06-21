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

1. The page will initially contain: A 3x3 display of tiles, title('Tic Tac Toe'), paragraph('player X turn') and reset button
(These elements will be created inside a function)
(The elements will be rendered by calling that function)
(The inital state of the page will have each tile equal to an empty string that can be stored as an array, and the current player equal to 'X')
(The inital state of the page will be stored in a function and called in the event handler of the reset button) 
(An object will be used to store the changing state as the game progresses, it will keep track of whos turn it is, the content of each tile, and if a winning condition has been met, using key value pairs) 
(The object property values can be changed when needed using .notation) 

2. User clicks on a tile, which changes the content of that tile from an empty string to 'x'
(This can be done with a function that sets the content of the tile clicked on to be equal to the property that keeps track of whos turn it is, from the object)
(It will need to be used in the rendering function so that it is visbile to the user) 

3. The display of the paragraph changes to indicate ('player O turn')
(This can be done with a function that changes the object property that tracks which players turn it is, by switching it to O if its currently X and vice versa)
(This also will need to be used in the rendering function so that it is visible to the user) 

4. The user clicks on another tile which now changes the content of the tile from empty to 'O'. Previously clicked on cannot be clicked twice. 
(This should already be handled by using the same function from step 2.)(Previous tiles not being abled to be clicked on could be used as either a condition inside the event handler itself or inside a function that is called from within the click handler) 

5. The process continues, with the clicks and player indicator paragraph alternating between 'X' and 'O'
(This should already be the case from the functions mentioned in steps 2 and 3. 

6. A display on the page when become visible when one of three conditions is met: 
Player X gets three symbols('X') in a straight line (horizontal, vertical, or diagonal). 
Player O gets three symbols('O') in a straight line (horizontal, vertical, or diagonal). 
All tiles have been clicked on. 
(This will be done with a function that checks if a winning condition is met based off the index of an array that corrisponds to the tiles lining up in a specific way) 
(If it does then it updates the object property that tracks the game condition e.g win, draw) 

7. IF Player X gets three in a straight line. Alert says 'Player X Won!' 
IF Player O gets three in a straight line. Alert says 'Plater O Won!'
IF all tiles are clicked on without either player X or Player O getting three in a straight line, then alert says 'Draw!'
(This conditional would be included in the function from step 6)

8. If user wants to reset the game, they click the 'reset button' which sets the content of the tiles back to empty and defaults to player x turn. 
(Inside the function that renders the html elements, an event listener can be attached to the reset button element and the function that sets the inital state of the page can be passed into it. 

END

Surely I have over complicated this? It feels like 3d sudoku

VARIABLES
1. app (To link the HTML div element) 

2. playerTurn (To store who's turn it is)

3. gameCondition (To store whether somebody has won or if it is a draw) 

4. gameBoard (To store whether each tile is 'empty', 'X' or 'O'

5. displayWhosTurn (An html element that displays which players turn it is) 

6. displayResult (An html element that displays whether somebody has won or if the game is a draw) 

7. resetButton (To reinitialize the gameboard once game is over)

8. winningCombinations (An array to store all the ways a player could win) 

FUNCTIONS
1. renderElements (To render all the HTML required) 
  variables: app, tiles, playerTurn, gameConditionMessage, resetButton

2. initGame (To set the initial state of the game display) 
  variables: playerTurn, gameBoard, gameCondition
  functions called: renderElements

3. clickAction (To control what happens when you click on the tiles) 
  variables: playerTurn, gameBoard, gameCondition
  functions called: checkCondition, renderElements
  IF tile string is empty and gameCondition is not won or drawn 
  THEN tile content is equal to playerTurn content. 
  Player turn alternates to X if it currently O or O if it is currently X

4. checkCondition (To Check whether a player has won or if it is a draw) 

5. resetGame (To revert the display back to the original state of the game with all tiles empty) 

OBJECTS
1. gameState (An Object that contains the playerTurn, gameCondition and gameBoard variables which can store overall state) 



NOT COMPLETE
