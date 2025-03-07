class Player {
    constructor(playerIcon) {
        this.playerIcon = playerIcon;
    };
};

class Gameboard {
    constructor() {

    }
    board = [
        ["","",""],
        ["","",""],
        ["","",""]
        ];
};

class GameController {
    constructor(gameBoard) {
        this.board = gameBoard.board;
        this.isPlayer1Active = true;
    }
}

class Display {
    constructor(gameController) {
        this.gameBoard = gameController.board;
        this.isPlayer1Active = gameController.isPlayer1Active;
    }

    renderGameBoard() {
        const wrapper = document.getElementById("wrapper");
    
        for(let i = 0; i < this.gameBoard.length; i++) {
            const outIndex = [i];
            for(let j = 0; j < this.gameBoard[i].length; j++) {
                const div = document.createElement("button");
                div.setAttribute("data-id", `${outIndex}${j}`);
                wrapper.append(div);
            };
        };
    };

    assignIconToBoard() {
        
        const cells = document.querySelectorAll("[data-id]");
        
            cells.forEach(element => {
                console.log(this.gameBoard);
                element.addEventListener("click", (e) => {
                    const cellId = e.target.dataset.id;
                    
                    const outerIndex = cellId.slice(0,1);
                    const innerIndex = cellId.slice(1,2);

                    if(!this.isPlayer1Active) {
                        element.textContent = this.gameBoard[outerIndex][innerIndex] = "O";
                        this.isPlayer1Active = !this.isPlayer1Active;
                        return;
                    } else {
                        element.textContent = this.gameBoard[outerIndex][innerIndex] = "X";
                        this.isPlayer1Active = !this.isPlayer1Active;
                    }
                    
                });
            });
    };
};

class App {
    constructor() {
        this.player1 = new Player("X");
        this.player2 = new Player("O");
        this.gameBoard = new Gameboard();
        this.gameController = new GameController(this.gameBoard);
        this.display = new Display(this.gameController);
    };

    start() {
        this.display.renderGameBoard();
        this.display.assignIconToBoard();
    }
};

// function handleClicks(gameBoardObject) {
//     const cells = document.querySelectorAll("[data-id]");
//     let cellId;

//     cells.forEach(element => {
//         element.addEventListener("click", function(e){
//             cellId = e.target.dataset.id;

            // const outerIndex = cellId.slice(0,1);
            // const innerIndex = cellId.slice(1,2);

            // element.textContent = gameBoardObject[outerIndex][innerIndex] = "X";
//         });
//     });
//     return cellId;
// }

function assignIconToBoard(gameBoardObject) {

    const cells = document.querySelectorAll("[data-id]");
        
    let isPlayer1Active = true;
        cells.forEach(element => {
            element.addEventListener("click", function(e){
                const cellId = e.target.dataset.id;
    
                const outerIndex = cellId.slice(0,1);
                const innerIndex = cellId.slice(1,2);

                if(!isPlayer1Active) {
                    element.textContent = gameBoardObject[outerIndex][innerIndex] = "O";
                    isPlayer1Active = !isPlayer1Active;
                    return;
                } else {
                    element.textContent = gameBoardObject[outerIndex][innerIndex] = "X";
                    isPlayer1Active = !isPlayer1Active;
                }
                
            });
        });
}

const app = new App();
app.start();

// renderGameBoard(gameBoard.board);



// assignIconToBoard(gameController.board);