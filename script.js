//Modules
const gameBoard = (() => {

    //Grid HTML content
    let array =  ['','','','','','','','','',]

    let winConditions = {
    /*
    HORIZONTAL: If 0 1 2, 3 4 5, or 6 7 8 are one letter, that letter wins.
    VERTICAL: If 0 3 6, 1 4 7, or 2 5 8 are one letter, that letter wins.
    DIAGONAL: If 0 4 8, or 2 4 6 are one letter, that letter wins.
    TIE: If all 9 array slots are filled, the game ends in a tie IF a player doesn't win that round
    */
        //Horizontal
        win1 : [],
        //Vertical
        win2 : [],
        //Diagonal
        win3 : [],
        //Tie
        win4 : [],

        /* PSEUDOCODE/TEMP
        global: if(winner === playerOne || winner === playerTwo){endGame}

        ALL HORIZONTAL, playerOne WINS
        if (gameBoard.array[0] = X && gameBoard.array[1] = X && gameBoard.array[2] = X){
            return winner = playerOne
        } else if(gameBoard.array[3] = X && gameBoard.array[4] = X && gameBoard.array[5] = X)){
            return winner = playerOne
        } else if(gameBoard.array[6] = X && gameBoard.array[7] = X && gameBoard.array[8] = X) 
            {return winner = playerOne}

        ALL VERTICAL, playerOne WINS
        if (gameBoard.array[0] = X && gameBoard.array[3] = X && gameBoard.array[6] = X){
            return winner = playerOne
        } else if(gameBoard.array[1] = X && gameBoard.array[4] = X && gameBoard.array[7] = X)){
            return winner = playerOne
        } else if(gameBoard.array[2] = X && gameBoard.array[5] = X && gameBoard.array[8] = X) 
            {return winner = playerOne}

        ALL DIAGONAL, playerOne WINS
        if (gameBoard.array[0] = X && gameBoard.array[4] = X && gameBoard.array[8] = X){
            return winner = playerOne
        } else if(gameBoard.array[2] = X && gameBoard.array[4] = X && gameBoard.array[6] = X)){
            return winner = playerOne
        }

        TIE (Last check run)
        for (let i = 0; i <= array.length; i++){
            //if all of array[] is truthy, endGame.
        }

        Code above can be reused for playerTwo. Replace X with O, return winner = playerTwo.
        How to store these?
        */

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

    //Checks for a winner
    let endGame = () => {
        /* if (winner = playerOne || playerTwo){
                Stops the game. returns winner to display div.
            } else {
                break
            }
        */
    };

    return {array, createGrid};
    
})()


const display =(() => {
 
    //Senses which player is currently clicking and returns their answer.
    let playerSensor = (boardSquare) => {

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
                            document.getElementById(`square0`).innerHTML = gameBoard.array[0]
                            playerOne.marker = false
                        };
                        break
                    case 'square1':
                        if (gameBoard.array[1] === 'X' || gameBoard.array[1] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[1] = 'X'
                            document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                            playerOne.marker = false
                        };
                        break
                    case 'square2':
                        if (gameBoard.array[2] === 'X' || gameBoard.array[2] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[2] = 'X'
                            document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                            playerOne.marker = false
                        };
                        break
                    case 'square3':
                        if (gameBoard.array[3] === 'X' || gameBoard.array[3] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[3] = 'X'
                            document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                            playerOne.marker = false
                        };
                        break
                    case 'square4':
                        if (gameBoard.array[4] === 'X' || gameBoard.array[4] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[4] = 'X'
                            document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                            playerOne.marker = false
                        };
                        break
                    case 'square5':
                        if (gameBoard.array[5] === 'X' || gameBoard.array[5] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[5] = 'X'
                            document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                            playerOne.marker = false
                        };
                        break
                    case 'square6':
                        if (gameBoard.array[6] === 'X' || gameBoard.array[6] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[6] = 'X'
                            document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                            playerOne.marker = false
                        };
                        break
                    case 'square7':
                        if (gameBoard.array[7] === 'X' || gameBoard.array[7] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[7] = 'X'
                            document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                            playerOne.marker = false
                        };
                        break
                    case 'square8':
                        if (gameBoard.array[8] === 'X' || gameBoard.array[8] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[8] = 'X'
                            document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                            playerOne.marker = false
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
                            document.getElementById(`square0`).innerHTML = gameBoard.array[4]
                            playerOne.marker = true
                        };
                        break
                    case 'square1':
                        if (gameBoard.array[1] === 'X' || gameBoard.array[1] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[1] = 'O'
                            document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                            playerOne.marker = true
                        };
                        break
                    case 'square2':
                        if (gameBoard.array[2] === 'X' || gameBoard.array[2] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[2] = 'O'
                            document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                            playerOne.marker = true
                        };
                        break
                    case 'square3':
                        if (gameBoard.array[3] === 'X' || gameBoard.array[3] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[3] = 'O'
                            document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                            playerOne.marker = true
                        };
                        break
                    case 'square4':
                        if (gameBoard.array[4] === 'X' || gameBoard.array[4] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[4] = 'O'
                            document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                            playerOne.marker = true
                        };
                        break
                    case 'square5':
                        if (gameBoard.array[5] === 'X' || gameBoard.array[5] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[5] = 'O'
                            document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                            playerOne.marker = true
                        };
                        break
                    case 'square6':
                        if (gameBoard.array[6] === 'X' || gameBoard.array[6] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[6] = 'O'
                            document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                            playerOne.marker = true
                        };
                        break
                    case 'square7':
                        if (gameBoard.array[7] === 'X' || gameBoard.array[7] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[7] = 'O'
                            document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                            playerOne.marker = true
                        };
                        break
                    case 'square8':
                        if (gameBoard.array[8] === 'X' || gameBoard.array[8] === 'O'){
                            console.log("You cannot override this answer.")
                            break 
                        } else {
                            gameBoard.array[8] = 'O'
                            document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                            playerOne.marker = true
                        };
                        break
                };
                break
            };
        console.log('Player one is set to ' + playerOne.marker)
    };

    let currentPlayer = () => {
        // Looks at playerOne.marker and tells you whose turn it is
    };

    return {playerSensor, currentPlayer}

})()

//Factories
const playerFactory = (name, marker) => {

    name = name;
    marker = marker;

    //This might be removed. Temporarily being kept, in case needed.
    let markerChange = (marker) => {
        switch(marker){
            case false:
                this.marker = true
                break
            case true:
                this.marker = false
                break
        };
    };
    //This might be removed. Temporarily being kept, in case needed.
    let winnerChosen = (victor) => {
        //code
    }

    return {name, marker};
};

//Objects
let playerOne = playerFactory('Temp1', true)
let playerTwo = playerFactory('Temp2', false)

gameBoard.createGrid()