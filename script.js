//Modules
const gameBoard = (() => {

    //Grid HTML content
    let array =  ['','','','','','','','','',]

    //Generates the grid
    let createGrid = function() {

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

    return {array, createGrid};
    
})()

const display =(() => {
    
    var square0 = document.getElementById(`square0`)    

    var square1 = document.getElementById(`square1`)

    var square2 = document.getElementById(`square2`)

    var square3 = document.getElementById(`square3`)

    var square4 = document.getElementById(`square4`)

    var square5 = document.getElementById(`square5`)

    var square6 = document.getElementById(`square6`)

    var square7 = document.getElementById(`square7`)

    var square8 = document.getElementById(`square8`)
    
    //Senses which player is currently clicking and returns their answer.
    let playerSensor = (boardSquare) => {

        switch(playerOne.marker){

            case true:
                console.log('The node is ' + boardSquare.id)
                switch(boardSquare.id){
                    case 'square0':
                        gameBoard.array[0] = 'X'
                        document.getElementById(`square0`).innerHTML = gameBoard.array[0]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square1':
                        gameBoard.array[1] = 'X'
                        document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square2':
                        gameBoard.array[2] = 'X'
                        document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square3':
                        gameBoard.array[3] = 'X'
                        document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square4':
                        gameBoard.array[4] = 'X'
                        document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square5':
                        gameBoard.array[5] = 'X'
                        document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square6':
                        gameBoard.array[6] = 'X'
                        document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square7':
                        gameBoard.array[7] = 'X'
                        document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square8':
                        gameBoard.array[8] = 'X'
                        document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                };
                break
          
            case false:
                console.log('The node is ' + boardSquare.id)
                switch(boardSquare.id){
                    case 'square0':
                        gameBoard.array[0] = 'O'
                        document.getElementById(`square0`).innerHTML = gameBoard.array[0]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square1':
                        gameBoard.array[1] = 'O'
                        document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square2':
                        gameBoard.array[2] = 'O'
                        document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square3':
                        gameBoard.array[3] = 'O'
                        document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square4':
                        gameBoard.array[4] = 'O'
                        document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square5':
                        gameBoard.array[5] = 'O'
                        document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square6':
                        gameBoard.array[6] = 'O'
                        document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square7':
                        gameBoard.array[7] = 'O'
                        document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case 'square8':
                        gameBoard.array[8] = 'O'
                        document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                };
                break
            };
        console.log('Player one is set to ' + playerOne.marker)
        console.log('Player two is set to ' + playerTwo.marker)
    };

    return {playerSensor}

})()

//Factories
const playerFactory = (name, marker) => {

    marker = marker;

    //This runs after playerSensor()
    let markerChange = (marker) => {
        switch(marker){
            case false:
                marker = true
                break
            case true:
                marker = false
                break
        };
    };

    return {name, marker, markerChange};
};

//Objects
const playerOne = playerFactory('Temp1', true)
const playerTwo = playerFactory('Temp2', false)

gameBoard.createGrid()