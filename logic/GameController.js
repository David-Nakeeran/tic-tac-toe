export default class GameController {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.isPlayer1Active = true;
    this.isWinConditionMet = false;
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

    let topRowWin = topRow.every((cell) => cell === topRow[0] && cell != "");
    let middleRowWin = middleRow.every(
      (cell) => cell === middleRow[0] && cell != ""
    );
    let bottomRowWin = bottomRow.every(
      (cell) => cell === bottomRow[0] && cell != ""
    );
    if (topRowWin || middleRowWin || bottomRowWin) {
      this.isWinConditionMet = true;
    }
  }
}
