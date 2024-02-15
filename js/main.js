import { Gameboard } from './gameboardClass.js';
import { Player } from './playerClass.js';





const gameboard = new Gameboard(3, 3);

// console.log(gameboard.boardSize);

let player1 = new Player('Sergio', 'X', `male`);

let player2 = new Player('Marta', 'O', `female`);


// console.log({player1})
// console.log(player1)
// console.log({player2})




const gameResult = (player1, player2) => {

    if (player1.getPlayerScore() > player2.getPlayerScore()) {
        console.log(`${player1.name} wins!`);
    } else if (player1.getPlayerScore() < player2.getPlayerScore()) {
        console.log( `${player2.name} wins!`);
    } else {
        console.log(`It's a draw!`);
    }
}

const printResultButton = document.querySelector(`.printResults`)

printResultButton.addEventListener(`click`, () => {
    gameResult(player1, player2);
})


