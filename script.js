import {gameBoard, displayController} from '/gameBoard.js'

const playerFactory = (name) => {
    const leftClick = () => console.log('temporary');

    return {leftClick, name};
}

const playerOne = playerFactory('Temp1')
const PlayerTwo = playerFactory('Temp2')