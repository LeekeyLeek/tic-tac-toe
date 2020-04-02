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
                //display.playerSensor(playerOne, playerTwo)
                //Change Obj innerHTML
            });

            boardContainer.appendChild(boardSquare);

        };

    };
    //OBJECT Constructor here
    let makeObject = function() {

    }

    let renderGrid = function(boardSquare) {
        // array goes through array[0-8]. TEMPORARY

        switch(boardSquare) {
            case 1:
                array[0] = '0: X'                  
                square0.innerHTML = array[0]
                break
            case 2:
                array[1] = '1: O'
                square1.innerHTML = array[1]
                break
            case 3:
                array[2] = '2: X'             
                square2.innerHTML = array[2]
                break
            case 4:
                array[3] = '3: O'
                square3.innerHTML = array[3]
                break
            case 5:
                array[4] = '4: X'
                square4.innerHTML = array[4]
                break
            case 6:
                array[5] = '5: O'
                square5.innerHTML = array[5]
                break
            case 7:
                array[6] = '6: X'
                square6.innerHTML = array[6]
                break
            case 8:
                array[7] = '7: O'
                square7.innerHTML = array[7]
                break
            case 9:
                array[8] = '8: X'
                square8.innerHTML = array[8]
                break

        };

    };

    return {array, createGrid, renderGrid};
    
})()

const display =(() => {
    
    const thisGrid = {
        /*These will be converted into objects. id will be stored,
        array[] association will be stored.
        eventListener will change innerHTML depending on which player clicked.
        Can possibly just make it so these objects do the work.
        Create constructor in gameBoard */
        square0 = document.getElementById(`square0`),              

        square1 = document.getElementById(`square1`),

        square2 = document.getElementById(`square2`),

        square3 = document.getElementById(`square3`),

        square4 = document.getElementById(`square4`),

        square5 = document.getElementById(`square5`),

        square6 = document.getElementById(`square6`),

        square7 = document.getElementById(`square7`),

        square8 = document.getElementById(`square8`),
    };

    /*
    On click, run displayController.nodeSensor
    Current node is returned as square0-8
    playerSensor() runs, determines marked player. 
    Determines which node. Changes node innerHTML
    */

    let nodeSensor = () => {

        switch(node){
            case square0:
                return node = square0
            
        }



    };
    
    //Senses which player is currently clicking
    let playerSensor = () => {
        switch(playerOne.marker){
            //temp basic examples. both evals need to also look at current square.
            case true:
                array[0] = 'X'
                square0.innerHTML = array[0]
            case false:
                array[0] = 'O'
                square0.innerHTML = array[0]
        };
    };

    return {playerSensor, nodeSensor}

})()

//Factories
const playerFactory = (name, marker) => {

    let leftClick = () => {console.log('temporary left click')};

    this.marker = marker;

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

    return {leftClick, name, marker, markerChange};
};
//Objects
const playerOne = playerFactory('Temp1', true)
const playerTwo = playerFactory('Temp2', false)


console.log(playerOne.marker)
console.log(playerTwo.marker)
gameBoard.createGrid()