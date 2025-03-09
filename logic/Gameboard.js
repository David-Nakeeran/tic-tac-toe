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

  updateBoard(outerIndex, innerIndex, symbol) {
    this.board[outerIndex][innerIndex] = symbol;
  }
}
