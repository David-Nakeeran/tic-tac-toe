export default class Display {
  constructor(gameController, gameBoard) {
    this.gameController = gameController;
    this.gameBoard = gameBoard;
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
      element.addEventListener("click", (e) => {
        const cellId = e.target.dataset.id;

        const outerIndex = Number(cellId.slice(0, 1));
        const innerIndex = Number(cellId.slice(1, 2));

        const symbol = this.gameController.playerMove(outerIndex, innerIndex);
        if (symbol != null) {
          this.announcePlayerTurn();
          element.textContent = symbol;
          this.gameController.winConditions();
        }
      });
    });
  }

  playerAnnouncementPara() {
    const announcement = document.getElementById("announcement");
    const para = document.createElement("para");
    para.setAttribute("id", "player-announcement");
    announcement.append(para);
  }

  announcePlayerTurn() {
    let para = document.getElementById("player-announcement");
    if (this.gameController.isPlayer1Active) {
      para.textContent = "Player 1 turn";
    } else {
      para.textContent = "Player 2 turn";
    }
  }
}
