export default class Display {
  constructor(gameController, gameBoard) {
    this.gameController = gameController;
    this.gameBoard = gameBoard;
    this.listener = (e) => this.handleClicks(e);
  }

  renderStartButton() {
    const btnContainer = document.getElementById("btn-container");

    const startBtn = document.createElement("button");
    startBtn.setAttribute("id", "start-btn");
    startBtn.textContent = "Start Game";
    btnContainer.append(startBtn);
  }

  renderRestartButton() {
    const btnContainer = document.getElementById("btn-container");
    document.getElementById("restart-btn");
    const restartBtn = document.createElement("button");
    restartBtn.setAttribute("id", "restart-btn");
    restartBtn.textContent = "Restart game";
    btnContainer.append(restartBtn);
  }

  restartGame() {
    this.renderRestartButton();
    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", () => {
      this.gameController.resetGameState();
      const cells = document.querySelectorAll("[data-id]");
      cells.forEach((element) => {
        element.textContent = "";
      });
      this.resetPlayerAnnouncementPara();
      this.gameController.isGameActive = true;
      if (this.gameController.isGameActive) {
        this.announcePlayerTurn();
        this.assignIconToBoard();
      }
    });
  }

  startGame() {
    this.renderStartButton();
    const startBtn = document.getElementById("start-btn");

    startBtn.addEventListener("click", () => {
      this.gameController.isGameActive = true;

      if (this.gameController.isGameActive) {
        this.playerAnnouncementPara();
        this.announcePlayerTurn();
        this.assignIconToBoard();
        startBtn.style.display = "none";
        this.restartGame();
      }
    });
  }

  renderGameBoard() {
    const wrapper = document.getElementById("wrapper");

    for (let i = 0; i < this.gameBoard.board.length; i++) {
      const outIndex = [i];
      for (let j = 0; j < this.gameBoard.board[i].length; j++) {
        const div = document.createElement("button");
        div.setAttribute("data-id", `${outIndex}${j}`);
        wrapper.append(div);
      }
    }
  }

  assignIconToBoard() {
    const cells = document.querySelectorAll("[data-id]");

    cells.forEach((element) => {
      element.addEventListener("click", this.listener);
    });
  }

  getCellIndices(cellId) {
    return {
      outerIndex: Number(cellId.slice(0, 1)),
      innerIndex: Number(cellId.slice(1, 2)),
    };
  }

  updateBoardUI(cell, symbol) {
    this.announcePlayerTurn();
    cell.textContent = symbol;
  }

  checkGameState() {
    this.gameController.checkingForGameTie();
    if (this.gameController.isTie) {
      this.announceTie();
      this.disableGameboardClicks();
    } else {
      this.gameController.winConditions();
      this.announceWinner();
      this.disableGameboardClicks();
    }
  }

  handleClicks(e) {
    const cellId = e.target.dataset.id;

    const { outerIndex, innerIndex } = this.getCellIndices(cellId);

    const symbol = this.gameController.playerMove(outerIndex, innerIndex);
    if (symbol != null) {
      this.updateBoardUI(e.target, symbol);
      this.checkGameState();
    }
  }

  playerAnnouncementPara() {
    const announcement = document.getElementById("announcement");
    const para = document.createElement("para");
    para.setAttribute("id", "player-announcement");
    announcement.append(para);
  }

  resetPlayerAnnouncementPara() {
    const announcement = document.getElementById("player-announcement");
    announcement.textContent = "";
  }

  announcePlayerTurn() {
    let para = document.getElementById("player-announcement");
    if (this.gameController.isPlayer1Active) {
      para.textContent = "Player 1 turn";
    } else {
      para.textContent = "Player 2 turn";
    }
  }

  announceWinner() {
    let para = document.getElementById("player-announcement");

    if (this.gameController.isWinConditionMet) {
      if (!this.gameController.isPlayer1Active) {
        para.textContent = "Player 1 wins the game!";
      } else {
        para.textContent = "Player 2 wins the game!";
      }
    }
  }

  announceTie() {
    let para = document.getElementById("player-announcement");

    para.textContent = "Game is a tie!";
  }

  disableGameboardClicks() {
    const cells = document.querySelectorAll("[data-id]");
    cells.forEach((element) => {
      if (this.gameController.isWinConditionMet || this.gameController.isTie) {
        element.removeEventListener("click", this.listener);
      }
    });
  }
}
