//Modules
const gameBoard = (() => {
    let array =  ['','','','','','','','','',]

    let createGrid = function() {

        let boardContainer = document.getElementById('boardContainer');

        //Generates the grid
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
                display.nodeSensor(boardSquare)
                display.playerSensor(node)
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

    //Identifies the current node
    let nodeSensor = (boardSquare) => {

        switch(boardSquare.id){
            case "square0":
                console.log('node is now set to square0')
                return node = display.square0
            case "square1":
                console.log('node is now set to square1')
                return node = display.square1
            case "square2":
                console.log('node is now set to square2')
                return node = display.square2
            case "square3":
                console.log('node is now set to square3')
                return node = display.square3
            case "square4":
                console.log('node is now set to square4')
                return node = display.square4
            case "square5":
                console.log('node is now set to square5')
                return node = display.square5
            case "square6":
                console.log('node is now set to square6')
                return node = display.square6
            case "square7":
                console.log('node is now set to square7')
                return node = display.square7
            case "square8":
                console.log('node is now set to square8')
                return node = display.square8

        };

    };
    
    //Senses which player is currently clicking and returns their answer.
    let playerSensor = () => {

        switch(playerOne.marker){

            case true:
                console.log('The node is ' + node)
                switch(node){
                    case square0:
                        gameBoard.array[0] = 'X'
                        document.getElementById(`square0`).innerHTML = gameBoard.array[0]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square1:
                        gameBoard.array[1] = 'X'
                        document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square2:
                        gameBoard.array[2] = 'X'
                        document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square3:
                        gameBoard.array[3] = 'X'
                        document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square4:
                        gameBoard.array[4] = 'X'
                        document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square5:
                        gameBoard.array[5] = 'X'
                        document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square6:
                        gameBoard.array[6] = 'X'
                        document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square7:
                        gameBoard.array[7] = 'X'
                        document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square8:
                        gameBoard.array[8] = 'X'
                        document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                };
          
            case false:
                console.log('The node is ' + node)
                switch(node){
                    case square0:
                        gameBoard.array[0] = 'O'
                        document.getElementById(`square0`).innerHTML = gameBoard.array[0]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square1:
                        gameBoard.array[1] = 'O'
                        document.getElementById(`square1`).innerHTML = gameBoard.array[1]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square2:
                        gameBoard.array[2] = 'O'
                        document.getElementById(`square2`).innerHTML = gameBoard.array[2]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square3:
                        gameBoard.array[3] = 'O'
                        document.getElementById(`square3`).innerHTML = gameBoard.array[3]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square4:
                        gameBoard.array[4] = 'O'
                        document.getElementById(`square4`).innerHTML = gameBoard.array[4]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square5:
                        gameBoard.array[5] = 'O'
                        document.getElementById(`square5`).innerHTML = gameBoard.array[5]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square6:
                        gameBoard.array[6] = 'O'
                        document.getElementById(`square6`).innerHTML = gameBoard.array[6]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square7:
                        gameBoard.array[7] = 'O'
                        document.getElementById(`square7`).innerHTML = gameBoard.array[7]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                    case square8:
                        gameBoard.array[8] = 'O'
                        document.getElementById(`square8`).innerHTML = gameBoard.array[8]
                        playerOne.markerChange()
                        playerTwo.markerChange()
                        break
                };
        };
        console.log('Player one is set to ' + playerOne.marker)
        console.log('Player two is set to ' + playerTwo.marker)
    };

    return {playerSensor, nodeSensor, square0,square1,square2,square3,square4,
        square5, square6, square7, square8}

})()

//Factories
const playerFactory = (name, marker) => {

    marker = marker;

    //This runs after playerSensor()
    let markerChange = () => {
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