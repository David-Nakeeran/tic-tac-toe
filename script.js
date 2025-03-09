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
    
    isCellEmpty(outerIndex, innerIndex) {
        return this.board[outerIndex][innerIndex] === "";
    }

    updateBoard(outerIndex, innerIndex, symbol) {
        this.board[outerIndex][innerIndex] = symbol;
    }
};

class GameController {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.isPlayer1Active = true;
    }

    activePlayerSymbol() {
        return this.isPlayer1Active ? "X" : "O";
    }

    switchPlayer() {
        this.isPlayer1Active = !this.isPlayer1Active;
    }

    playerMove(outerIndex, innerIndex) {
        const symbol = this.activePlayerSymbol();
        const isCellEmpty = this.gameBoard.isCellEmpty(outerIndex, innerIndex);
        if(isCellEmpty) {
            this.gameBoard.updateBoard(outerIndex, innerIndex, symbol);
            this.switchPlayer();
            return symbol;
        }
        return null;
    }
}

class Display {
    constructor(gameController, gameBoard) {
        this.gameController = gameController;
        this.gameBoard = gameBoard;
    }

    renderGameBoard() {
        const wrapper = document.getElementById("wrapper");
    
        for(let i = 0; i < this.gameBoard.board.length; i++) {
            const outIndex = [i];
            for(let j = 0; j < this.gameBoard.board[i].length; j++) {
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

                    const symbol = this.gameController.playerMove(outerIndex, innerIndex);
                    if(symbol != null) {
                        element.textContent = symbol;  
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
        this.display = new Display(this.gameController, this.gameBoard);
    };

    start() {
        this.display.renderGameBoard();
        this.display.assignIconToBoard();
    }
};

const app = new App();
app.start();
