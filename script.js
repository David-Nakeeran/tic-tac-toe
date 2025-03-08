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

    activePlayerSymbol() {
        if(!this.isPlayer1Active) {
            this.isPlayer1Active = !this.isPlayer1Active;
            return "O";
        } else {
            this.isPlayer1Active = !this.isPlayer1Active;
            return "X";
        }
    }

    isCellEmpty(outerIndex, innerIndex) {
        return this.board[outerIndex][innerIndex] === "";
    }
}

class Display {
    constructor(gameController) {
        this.gameController = gameController;
    }

    renderGameBoard() {
        const wrapper = document.getElementById("wrapper");
    
        for(let i = 0; i < this.gameController.board.length; i++) {
            const outIndex = [i];
            for(let j = 0; j < this.gameController.board[i].length; j++) {
                const div = document.createElement("button");
                div.setAttribute("data-id", `${outIndex}${j}`);
                wrapper.append(div);
            };
        };
    };

    assignIconToBoard() {
        
        const cells = document.querySelectorAll("[data-id]");
        
            cells.forEach(element => {
                element.addEventListener("click", (e) => {
                    const cellId = e.target.dataset.id;
                    
                    const outerIndex = Number(cellId.slice(0,1));
                    const innerIndex = Number(cellId.slice(1,2));

                    const isCellEmpty = this.gameController.isCellEmpty(outerIndex, innerIndex);
                    if(isCellEmpty) {
                        element.textContent = this.gameController.board[outerIndex][innerIndex] = this.gameController.activePlayerSymbol();
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

const app = new App();
app.start();
