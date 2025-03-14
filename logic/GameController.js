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
    // rows
    const topRow = [...this.gameBoard.board[0]];
    const middleRow = [...this.gameBoard.board[1]];
    const bottomRow = [...this.gameBoard.board[2]];

    // columns
    const firstColumn = [];
    const secondColumn = [];
    const thirdColumn = [];

    const topRowWin = this.checkRowForWin(topRow);
    const middleRowWin = this.checkRowForWin(middleRow);
    const bottomRowWin = this.checkRowForWin(bottomRow);

    if (topRowWin || middleRowWin || bottomRowWin) {
      this.isWinConditionMet = true;
    }
  }

  checkRowForWin(arr) {
    return arr.every((cell) => cell === arr[0] && cell != "");
  }
}
