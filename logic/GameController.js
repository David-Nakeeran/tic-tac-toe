export default class GameController {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.isGameActive = false;
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
    const winArr = [];
    for (let i = 0; i < this.gameBoard.board.length; i++) {
      winArr.push([...this.gameBoard.board[i]]); // rows
      winArr.push(this.gameBoard.board.map((row) => row[i])); //columns
    }

    winArr.push(this.gameBoard.board.map((row, index) => row[index])); // Left to right diagonal
    winArr.push(
      this.gameBoard.board.map((row, index) => row[row.length - 1 - index]) // right to left diagonal
    );

    for (let i = 0; i < winArr.length; i++) {
      if (this.checkArrayForWin(winArr[i])) {
        this.isWinConditionMet = true;
        break;
      }
    }
  }
  checkArrayForWin(arr) {
    return arr.every((cell) => cell === arr[0] && cell != "");
  }
}
// rows
// const topRow = [...this.gameBoard.board[0]];
// const middleRow = [...this.gameBoard.board[1]];
// const bottomRow = [...this.gameBoard.board[2]];

// columns
// const firstColumn = [
//   this.gameBoard.board[0][0],
//   this.gameBoard.board[1][0],
//   this.gameBoard.board[2][0],
// ];
// const secondColumn = [
//   this.gameBoard.board[0][1],
//   this.gameBoard.board[1][1],
//   this.gameBoard.board[2][1],
// ];
// const thirdColumn = [
//   this.gameBoard.board[0][2],
//   this.gameBoard.board[1][2],
//   this.gameBoard.board[2][2],
// ];

// diagonals
// const leftDiagonal = [
//   this.gameBoard.board[0][0],
//   this.gameBoard.board[1][1],
//   this.gameBoard.board[2][2],
// ];
// const rightDiagonal = [
//   this.gameBoard.board[0][2],
//   this.gameBoard.board[1][1],
//   this.gameBoard.board[2][0],
// ];

//   const winArray = [
//     topRow,
//     middleRow,
//     bottomRow,
//     firstColumn,
//     secondColumn,
//     thirdColumn,
//     leftDiagonal,
//     rightDiagonal,
//   ];
//   }
// }
