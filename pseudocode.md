## Tic Tac Toe<br>

Description: <br>
Create a webpage that recreates the childhood classic game, tic-tac-toe, using JavaScript, HTML, and the Bootstrap CSS framework (minimal custom CSS)<br>
For this project, we will be using JavaScript to dynamically render elements, keep track of board status, display win conditions, and manage state.<br>

## MoSCoW<br>

### Must: <br>
1. The game should let the players know who's turn it is.<br>
2. Game tiles should only be clickable once, and if the game is over they should not be clickable at all.<br>
3. The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.<br>
4. There should be a Restart Game button that does not refresh the page (set state).<br>
5. On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.<br>
6. The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.<br>
7. Only have a single <div id="app"></div> in your index.HTML <br>

### Should: <br>
1. Allow players to enter their names<br>
2. Keep track of the number of games won by X and O<br>

### Could: <br>
1. Add a link to rules, display in a modal<br>
2. Turn the project into Connect Four<br>

### Won't: <br>
1. AI playing against you <br>
2. Recreate Go<br>

### Think Through<br>
Functions are when something “happens” So what’s happening?<br>
Do these all need to be stand alone functions? Which could or should be combined? <br>
Which variables could or should be combined into an object for storing state? <br>
How will all these variables/functions/objects interact with each other? <br>
How do they all get triggered in an order that achieves my goal?<br>
Gah, my brain<br>

## Step By Step:<br>

BEGIN<br>

User goes to the page<br>

1. The page will initially contain: A 3x3 display of tiles, title('Tic Tac Toe'), paragraph('player X turn') and reset button<br>
(These elements will be created inside a function)<br>
(The elements will be rendered by calling that function)<br>
(The initial state of the page will have each tile equal to an empty string that can be stored as an array, and the current player equal to 'X')<br>
(The initial state of the page will be stored in a function and called in the event handler of the reset button) <br>
(An object will be used to store the changing state as the game progresses, it will keep track of whos turn it is, the content of each tile, and if a winning condition has been met, using key value pairs) 
(The object property values can be changed when needed using .notation) 

2. User clicks on a tile, which changes the content of that tile from an empty string to 'x'
(This can be done with a function that sets the content of the tile clicked on to be equal to the property that keeps track of whos turn it is, from the object)
(It will need to be used in the rendering function so that it is visible to the user) 

3. The display of the paragraph changes to indicate ('player O turn')
(This can be done with a function that changes the object property that tracks which players turn it is, by switching it to O if its currently X and vice versa)
(This also will need to be used in the rendering function so that it is visible to the user) 

4. The user clicks on another tile which now changes the content of the tile from empty to 'O'. Previously clicked on cannot be clicked twice. 
(This should already be handled by using the same function from step 2.)(Previous tiles not being abled to be clicked on could be used as either a condition <br>
inside the event handler itself or inside a function that is called from within the click handler) <br>

5. The process continues, with the clicks and player indicator paragraph alternating between 'X' and 'O'<br>
(This should already be the case from the functions mentioned in steps 2 and 3. <br>

6. A paragraph display on the page becomes visible when one of three conditions is met: <br>
Player X gets three symbols('X') in a straight line (horizontal, vertical, or diagonal). <br>
Player O gets three symbols('O') in a straight line (horizontal, vertical, or diagonal). <br>
All tiles have been clicked on. <br>
(This will be done with a function that checks if a winning condition is met based off the index of an array that corrisponds to the tiles lining up in a specific way) <br>
(If it does then it updates the object property that tracks the game condition e.g win, draw)<br>
(If the game condition changes it triggers a content change of another paragraph that displays who has won on the screen) <br>

8. IF Player X gets three in a straight line. Paragraph says 'Player X Won!' <br>
IF Player O gets three in a straight line. Paragraph says 'Player O Won!'<br>
IF all tiles are clicked on without either player X or Player O getting three in a straight line, then paragraph says 'Draw!'<br>
(This conditional would be included in the function from step 6)<br>

9. If user wants to reset the game, they click the 'reset button' which sets the content of the tiles back to empty and defaults to player x turn. <br>
(Inside the function that renders the html elements, an event listener can be attached to the reset button element, the function that sets the inital state of the page can be passed into it)<br>
(Or maybe its not a good idea to have the click handler inside the function? In which case make the click handler on its on)  <br>

END<br>

Surely I have over complicated this? It feels like 3d sudoku<br>

### VARIABLES<br>
1. app (To link the HTML div element) <br>

2. playerTurn (To store who's turn it is)<br>

3. gameCondition (To store whether somebody has won or if it is a draw) <br>

4. gameBoard (To store whether each tile is 'empty', 'X' or 'O')<br>

5. displayWhosTurn (An html element that displays which players turn it is) <br>

6. displayResult (An html element that displays whether somebody has won or if the game is a draw) <br>

7. resetButton (To reinitialize the gameboard once game is over)<br>

8. winningCombinations (An array to store all the ways a player could win) <br>

### FUNCTIONS<br>
1. renderElements (To create and render all the HTML required) <br>
   // Create gameboard (9 tiles) <br>
   // Create paragraph indicating whos turn it is<br>
   // Create paragraph indicating if somebody has won<br>
   // Create button and event handler that resets the game <br>

2. initGame (To set the initial state of the game display)<br>
   // Sets the current player turn to 'X'<br>
   // Sets the 9 tiles to be an array of empty strings<br>
   // Sets the gameCondition to be incomplete<br>
   // Calls the render function to display this state<br>

3. clickAction (To control what happens when you click on the tiles)<br>
   // If a tile is an empty string and the game is incomplete, then change tile content to the current players turn symbol e.g 'X' or 'O'<br>
   // Check if the game condition is still incomplete (call the checkCondition function)<br>
   // Player turn switches (call the switchPlayer function) <br>
   // Update the display for the user (call the render function) <br>

4. switchPlayer (A function to alternate between player x and player o after each click)<br>
   // Player turn alternates to 'X' IF it currently 'O' OR 'O' IF it is currently 'X'<br>

5. checkCondition (To Check whether a player has won or if it is a draw)<br>
   // Make an array that lists the winning combinations from the tile array stored in the gameState object.<br>
   // IF 'X' OR 'O' line up in one of those orders then game condition is set to win<br>
   // IF all tiles are not an empty string then game condition is set to draw <br>
   // IF gameCondition is set to win it changes the text.content of the html element to 'X Wins!" or "O Wins!'<br>
   // IF gamecondition is set to win it changes the text.content of the html elemetn to 'It was a draw!'<br>

6. resetGame (To revert the display back to the original state of the game with all tiles empty)<br>
   // Just needs to call the initGame function inside a click handler<br>

### OBJECTS<br>
1. gameState (An Object that contains the playerTurn, gameCondition and gameBoard variables which can store state while the game progresses)<br>
   // Will contain the current players turn e.g 'X' or 'O'<br>
   // Will contain the content of the tiles e.g 'empty string', 'X' or 'O'<br>
   // Will contain the game condition e.g 'X Wins', 'O Wins', 'Draw', 'Incomplete'  <br>




