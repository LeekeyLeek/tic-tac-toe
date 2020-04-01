//Modules
const gameBoard = (() => {
    let array =  ['','','','','','','','','',]

    let createGrid = function() {

        let boardContainer = document.getElementById('boardContainer');
        
        for (let i = 0; i <= 9; i++) {
            let loopnumber = i

            console.log(loopnumber)

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
                // gameBoard.renderGrid()
            });
            // v This is temporary for testing

            switch(loopnumber) {
                case 1:
                    let square0 = document.getElementById(`square0`)
                    array[0] = '0: X'        
                    boardContainer.appendChild(boardSquare);            
                    square0.innerHTML = array[0]
                    break
                case 2:
                    let square1 = document.getElementById(`square1`)
                    array[1] = '1: O'
                    boardContainer.appendChild(boardSquare);
                    square1.innerHTML = array[1]
                    
                    break
                case 3:
                    let square2 = document.getElementById(`square2`)
                    array[2] = '2: X'    
                    boardContainer.appendChild(boardSquare);          
                    square2.innerHTML = array[2]
                    break
                case 4:
                    let square3 = document.getElementById(`square3`)
                    array[3] = '3: O'
                    boardContainer.appendChild(boardSquare);
                    square3.innerHTML = array[3]
                    break
                case 5:
                    let square4 = document.getElementById(`square4`)
                    array[4] = '4: X'
                    boardContainer.appendChild(boardSquare);
                    square4.innerHTML = array[4]
                    break
                case 6:
                    let square5 = document.getElementById(`square5`)
                    array[5] = '5: O'
                    boardContainer.appendChild(boardSquare);
                    square5.innerHTML = array[5]
                    break
                case 7:
                    let square6 = document.getElementById(`square6`)
                    array[6] = '6: X'
                    boardContainer.appendChild(boardSquare);
                    square6.innerHTML = array[6]
                    break
                case 8:
                    let square7 = document.getElementById(`square7`)
                    array[7] = '7: O'
                    boardContainer.appendChild(boardSquare);
                    square7.innerHTML = array[7]
                    break
                case 9:
                    let square8 = document.getElementById(`square8`)
                    array[8] = '8: X'
                    boardContainer.appendChild(boardSquare);
                    square8.innerHTML = array[8]
                    break
    
            };

            boardContainer.appendChild(boardSquare);

        };
        //outside for loop. Removes extra square.
        let square9 = document.getElementById('square9')
        square9.remove()
    };

    let renderGrid = function() {
        // array goes through array[0-8]. Temporary logic.

        switch(loopnumber) {
            case 1:
                let square0 = document.getElementById(`square0`)
                array[0] = 'X'                    
                square0.innerHTML = array[0]
                break
            case 2:
                let square1 = document.getElementById(`square1`)
                array[1] = 'O'
                square1.innerHTML = array[1]
                break
            case 3:
                let square2 = document.getElementById(`square2`)
                array[2] = 'X'              
                square2.innerHTML = array[2]
                break
            case 4:
                let square3 = document.getElementById(`square3`)
                array[3] = 'O'
                square3.innerHTML = array[3]
                break
            case 5:
                let square4 = document.getElementById(`square4`)
                array[4] = 'X'
                square4.innerHTML = array[4]
                break
            case 6:
                let square5 = document.getElementById(`square5`)
                array[5] = 'O'
                square5.innerHTML = array[5]
                break
            case 7:
                let square6 = document.getElementById(`square6`)
                array[6] = 'X'
                square6.innerHTML = array[6]
                break
            case 8:
                let square7 = document.getElementById(`square7`)
                array[7] = 'O'
                square7.innerHTML = array[7]
                break
            case 9:
                let square8 = document.getElementById(`square8`)
                array[8] = 'X'
                square8.innerHTML = array[8]
                break

        };

    };

    return {array, createGrid};
    
})()

const displayController =(() => {

})()

//Factories
const playerFactory = (name) => {
    const leftClick = () => console.log('temporary left click');

    return {leftClick, name};
}
const playerOne = playerFactory('Temp1')
const PlayerTwo = playerFactory('Temp2')

gameBoard.createGrid()