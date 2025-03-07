console.log("Hello World")

class Gameboard {
    constructor() {

    }
    board = [
        ["","",""],
        ["","",""],
        ["","",""]
        ];
};

class Player {
    constructor(playerIcon) {
        this.playerIcon = playerIcon;
    }
}

class GameController {
    constructor(gameBoard) {
        this.board = gameBoard;
    }
}

function renderGameBoard(gameBoardObject) {
    const wrapper = document.getElementById("wrapper");

    for(let i = 0; i < gameBoardObject.length; i++) {
        const outIndex = [i];
        for(let j = 0; j < gameBoardObject[i].length; j++) {
            const div = document.createElement("button");
            div.setAttribute("data-id", `${outIndex}${j}`);
            wrapper.append(div);
        };
    };
};

function handleClicks(gameBoardObject) {
    const cells = document.querySelectorAll("[data-id]");
    let cellId;
    cells.forEach(element => {
        element.addEventListener("click", function(e){
            cellId = e.target.dataset.id;

            const outerIndex = cellId.slice(0,1);
            const innerIndex = cellId.slice(1,2);

            element.textContent = gameBoardObject[outerIndex][innerIndex] = "X";

            console.log(gameBoardObject);

        });
    });
    return cellId;
}

function assignIconToBoard(gameBoardObject, cellId) {
    // let outerIndex = cellId.slice(1, 2);
    // console.log(outerIndex)
    console.log(cellId)
}


const player1 = new Player("X");
const player2 = new Player("O");

const gameBoard = new Gameboard();
renderGameBoard(gameBoard.board);
const gameController = new GameController(gameBoard.board);
// assignIconToBoard(gameController.board, handleClicks());

handleClicks(gameController.board);