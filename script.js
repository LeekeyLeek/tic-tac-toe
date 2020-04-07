//Modules
const gameBoard = (() => {

    //Grid HTML content
    let array =  ['','','','','','','','','']
    
    //When set to playerOne or playerTwo, game ends
    let winner = '';
    
    //Checks to see if somebody has won
    let winCheck = () => {
        
        /*
        HORIZONTAL: If 0 1 2, 3 4 5, or 6 7 8 are one letter, that player wins.
        VERTICAL: If 0 3 6, 1 4 7, or 2 5 8 are one letter, that player wins.
        DIAGONAL: If 0 4 8, or 2 4 6 are one letter, that player wins.
        TIE: If all 9 array slots are filled, the game ends in a tie IF a player doesn't win that round
        */

        //Player ONE
        //Horizontal
        if (gameBoard.array[0] == 'X' && gameBoard.array[1] == 'X' && gameBoard.array[2] == 'X') {
            return gameBoard.winner = playerOne.name
        } else if (gameBoard.array[3] == 'X' && gameBoard.array[4] == 'X' && gameBoard.array[5] == 'X'){
            return gameBoard.winner = playerOne.name
        } else if (gameBoard.array[6] == 'X' && gameBoard.array[7] == 'X' && gameBoard.array[8] == 'X'){
            return gameBoard.winner = playerOne.name
        } //Vertical
        else if (gameBoard.array[0] == 'X' && gameBoard.array[3] == 'X' && gameBoard.array[6] == 'X'){
            return gameBoard.winner = playerOne.name
        } else if (gameBoard.array[1] == 'X' && gameBoard.array[4] == 'X' && gameBoard.array[7] == 'X'){
            return gameBoard.winner = playerOne.name
        } else if (gameBoard.array[2] == 'X' && gameBoard.array[5] == 'X' && gameBoard.array[8] == 'X'){
            return gameBoard.winner = playerOne.name
        } //Diagonal
        else if (gameBoard.array[0] == 'X' && gameBoard.array[4] == 'X' && gameBoard.array[8] == 'X'){
            return gameBoard.winner = playerOne.name
        } else if (gameBoard.array[2] == 'X' && gameBoard.array[4] == 'X' && gameBoard.array[6] == 'X'){
            return gameBoard.winner = playerOne.name
        } //Player TWO
        //Horizontal
        else if (gameBoard.array[0] == 'O' && gameBoard.array[1] == 'O' && gameBoard.array[2] == 'O'){
            return gameBoard.winner = playerTwo.name
        } else if (gameBoard.array[3] == 'O' && gameBoard.array[4] == 'O' && gameBoard.array[5] == 'O'){
            return gameBoard.winner = playerTwo.name
        } else if (gameBoard.array[6] == 'O' && gameBoard.array[7] == 'O' && gameBoard.array[8] == 'O'){
            return gameBoard.winner = playerTwo.name
        } //Vertical
        else if (gameBoard.array[0] == 'O' && gameBoard.array[3] == 'O' && gameBoard.array[6] == 'O'){
            return gameBoard.winner = playerTwo.name
        } else if (gameBoard.array[1] == 'O' && gameBoard.array[4] == 'O' && gameBoard.array[7] == 'O'){
            return gameBoard.winner = playerTwo.name
        } else if (gameBoard.array[2] == 'O' && gameBoard.array[5] == 'O' && gameBoard.array[8] == 'O'){
            return gameBoard.winner = playerTwo.name
        } //Diagonal
        else if (gameBoard.array[0] == 'O' && gameBoard.array[4] == 'O' && gameBoard.array[8] == 'O'){
            return gameBoard.winner = playerTwo.name
        } else if (gameBoard.array[2] == 'O' && gameBoard.array[4] == 'O' && gameBoard.array[6] == 'O'){
            return gameBoard.winner = playerTwo.name
        }

    };

    //Generates the grid
    let createGrid = () => {

        let boardContainer = document.getElementById('boardContainer');

        for (let i = 0; i < 9; i++) {

            let loopnumber = i
            let boardSquare = document.createElement('div');

            boardSquare.className = 'boardSquare';
            boardSquare.id = `square${loopnumber}`;

            boardSquare.addEventListener('mouseover', function(e){
                boardSquare.style.backgroundColor = 'grey';
            });
            boardSquare.addEventListener('mouseout', function(e){
                boardSquare.style.backgroundColor = 'white';
            });
            boardSquare.addEventListener('click', function(e){
                display.playerSensor(boardSquare)
            });

            boardContainer.appendChild(boardSquare);

        };

    };

    // Returns winner to display div.
    let winnerDisplay = document.getElementById('winner')
    let endGame = () => {
        
        switch(gameBoard.winner){
            case playerOne.name:
                winnerDisplay.innerHTML = `${playerOne.name} wins! Press "Reset" to start a new game.`;
                break
            case playerTwo.name:
                winnerDisplay.innerHTML = `${playerTwo.name} wins! Press "Reset" to start a new game.`;
        };

    };

    //Resets the game upon resetButton click.
    let resetGame = () => {
        winnerDisplay.innerHTML = '';
        gameBoard.array = ['','','','','','','','','']
        gameBoard.winner = '';

        document.getElementById(`square0`).innerHTML = '';
        document.getElementById(`square1`).innerHTML = '';
        document.getElementById(`square2`).innerHTML = '';
        document.getElementById(`square3`).innerHTML = '';
        document.getElementById(`square4`).innerHTML = '';
        document.getElementById(`square5`).innerHTML = '';
        document.getElementById(`square6`).innerHTML = '';
        document.getElementById(`square7`).innerHTML = '';
        document.getElementById(`square8`).innerHTML = '';

        display.currentPlayer()
    }
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', function(e){
        resetGame()
    })
    
    return {array, winner, createGrid, winCheck, endGame, resetGame, resetButton};
})()


const display =(() => {
 
    //Determines which player is currently clicking and displays their answer.
    let playerSensor = (boardSquare) => {
        //If Statement will stop the game if a winner was already declared
        if (gameBoard.winner == playerOne.name || gameBoard.winner == playerTwo.name) {
            alert('The game is already over. Press "Reset" to start a new game.')
            return
        } else if(playerOne.name == 'Temp1' || playerTwo.name == 'Temp2'){
            alert('Please press "Name Change" to get started.')
            return
        } else {

          switch(playerOne.marker){

            case true:
                console.log('The node is ' + boardSquare.id)
                switch(boardSquare.id){
                    case 'square0':
                        if (gameBoard.array[0] === 'X' || gameBoard.array[0] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[0] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square0`).innerHTML = gameBoard.array[0]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square1':
                        if (gameBoard.array[1] === 'X' || gameBoard.array[1] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[1] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square2':
                        if (gameBoard.array[2] === 'X' || gameBoard.array[2] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[2] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square3':
                        if (gameBoard.array[3] === 'X' || gameBoard.array[3] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[3] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square4':
                        if (gameBoard.array[4] === 'X' || gameBoard.array[4] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[4] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square5':
                        if (gameBoard.array[5] === 'X' || gameBoard.array[5] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[5] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square6':
                        if (gameBoard.array[6] === 'X' || gameBoard.array[6] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[6] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square7':
                        if (gameBoard.array[7] === 'X' || gameBoard.array[7] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[7] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square8':
                        if (gameBoard.array[8] === 'X' || gameBoard.array[8] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[8] = 'X'
                            gameBoard.winCheck()
                            document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                            playerOne.marker = false
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                };
                break
          
            case false:
                console.log('The node is ' + boardSquare.id)
                switch(boardSquare.id){
                    case 'square0':
                        if (gameBoard.array[0] === 'X' || gameBoard.array[0] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[0] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square0`).innerHTML = gameBoard.array[4]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square1':
                        if (gameBoard.array[1] === 'X' || gameBoard.array[1] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[1] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square2':
                        if (gameBoard.array[2] === 'X' || gameBoard.array[2] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[2] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square3':
                        if (gameBoard.array[3] === 'X' || gameBoard.array[3] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[3] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square4':
                        if (gameBoard.array[4] === 'X' || gameBoard.array[4] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[4] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square5':
                        if (gameBoard.array[5] === 'X' || gameBoard.array[5] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[5] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square6':
                        if (gameBoard.array[6] === 'X' || gameBoard.array[6] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[6] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square7':
                        if (gameBoard.array[7] === 'X' || gameBoard.array[7] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[7] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                    case 'square8':
                        if (gameBoard.array[8] === 'X' || gameBoard.array[8] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[8] = 'O'
                            gameBoard.winCheck()
                            document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                            playerOne.marker = true
                            currentPlayer()
                            gameBoard.endGame()
                        };
                        break
                };
                break
            };
        console.log('Player one is set to ' + playerOne.marker)
        }; // <= End of Else statement
    };

    let currentPlayer = () => {
        let currentPlayer = document.getElementById('currentPlayer')
        
        if (gameBoard.winner == playerOne.name || gameBoard.winner == playerTwo.name) {
            currentPlayer.innerHTML = '';
            playerOne.marker = true; // <= Resets player order, for resetGame()
        } else if (playerOne.marker == true){
            currentPlayer.innerHTML = `It is ${playerOne.name}'s turn`;
        } else if (playerOne.marker == false){
            currentPlayer.innerHTML = `It is ${playerTwo.name}'s turn`;
        }

    };

    let displayForm = () => {
        let formDisplay = document.getElementById('formContainer')
        if (formDisplay.style.display === "none") {
            formDisplay.style.display = "block";
        } else { 
            formDisplay.style.display = "none";
        }
    };

    return {playerSensor, currentPlayer, displayForm}
})()

//Factory
const playerFactory = (name, marker) => {
    //Used to take player names and log the eventual winner
    name = name;
    //Used to switch between the active player marking the board
    marker = marker;

    let nameChange = () => {
        let name1 = document.getElementById('p1Name').value
        let name2 = document.getElementById('p2Name').value

        switch(name){
            case 'Temp1':
                return playerOne.name = name1
            case 'Temp2':
                return playerTwo.name = name2
        }

    }

    return {name, marker, nameChange};
};

//Global
let playerOne = playerFactory('Temp1', true)
let playerTwo = playerFactory('Temp2', false)
gameBoard.createGrid()