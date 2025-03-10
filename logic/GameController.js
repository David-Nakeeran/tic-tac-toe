export default class GameController {
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

    if (isCellEmpty) {
      this.gameBoard.updateBoard(outerIndex, innerIndex, symbol);
      this.switchPlayer();
      return symbol;
    }

    return null;
  }

  winConditions() {
    for (let i = 0; i < this.gameBoard.board.length; i++) {
      console.log(this.gameBoard.board[i][0]);
      console.log(this.gameBoard.board[i][2]);
      let rowWin = this.gameBoard.board[i].every(
        (cell) => cell === this.gameBoard.board[i][2]
      );
      if (rowWin) {
        console.log("win");
        console.log(this.gameBoard.board[i][0]);
        break;
      }
    }
  }
  //   for (let j = 0; j < this.gameBoard.board[i].length; j++) {}
  // }
  // if (
  //   this.gameBoard.board[0][1] === "X" &&
  //   this.gameBoard.board[0][1] === "X" &&
  //   this.gameBoard.board[0][2] === "X"
  // ) {
  //   console.log("Player 1 wins");
  // }
}
