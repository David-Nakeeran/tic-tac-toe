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
    const topRow = [...this.gameBoard.board[0]];
    const middleRow = [...this.gameBoard.board[1]];
    const bottomRow = [...this.gameBoard.board[2]];

    let rowWin = topRow.every((cell) => cell === topRow[0]);
    if (rowWin) {
      console.log("win");
    }

    // let rowWin = this.gameBoard.board[0].every(
    //   (cell) => cell === this.gameBoard.board[0][2]
    // );
    // if (rowWin) {
    //   console.log("win");
    //   console.log(this.gameBoard.board[0][0]);
    // }

    for (let i = 0; i < this.gameBoard.board.length; i++) {}
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
