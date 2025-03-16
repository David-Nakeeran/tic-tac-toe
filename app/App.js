import Player from "../logic/Player.js";
import Gameboard from "../logic/Gameboard.js";
import GameController from "../logic/GameController.js";
import Display from "../views/Display.js";

export default class App {
  constructor() {
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.gameBoard = new Gameboard();
    this.gameController = new GameController(this.gameBoard);
    this.display = new Display(this.gameController, this.gameBoard);
  }

  InitialiseGame() {
    this.display.renderGameBoard();
    this.display.startGame();
  }

  startGame() {
    this.InitialiseGame();
  }
}

/*
Chores
button to start playing the game
button to restart the game
show winner or tie for end go game
*/
