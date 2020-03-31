const gameBoard = (() => {
    let array =  ['','','','','','','','','',]

    let createGrid = function() {
        
        let boardContainer = document.getElementById('boardContainer');
        
        for (let i = 0; i < 9; i++) {
            
            
            let boardSquare = document.createElement('div');
            boardSquare.className = 'boardSquare';
            boardContainer.appendChild(boardSquare);
        };
    };

    let renderGrid = function() {

    };

    return {array, createGrid, renderGrid};
    
})()

const displayController =(() => {

})()

const playerOne = playerFactory('Temp1')
const PlayerTwo = playerFactory('Temp2')
const playerFactory = (name) => {
    const leftClick = () => console.log('temporary left click');

    return {leftClick, name};
}


gameBoard.createGrid()