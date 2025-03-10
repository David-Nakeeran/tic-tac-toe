export default class Gameboard {
  constructor() {}
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  isCellEmpty(outerIndex, innerIndex) {
    return this.board[outerIndex][innerIndex] === "";
  }

  getCellElement(outerIndex, innerIndex) {
    if (this.board[outerIndex][innerIndex] === "X") {
      return "X";
    } else {
      return "O";
    }
  }

  updateBoard(outerIndex, innerIndex, symbol) {
    this.board[outerIndex][innerIndex] = symbol;
  }
}
