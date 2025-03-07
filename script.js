console.log("Hello World")

// generate gameboard 3 x 3
class Gameboard {
    constructor() {

    }
    gameBoard = [
        ["-","-","-"],
        ["-","-","-"],
        ["-","-","-"]
        ];
}

function renderGameBoard(gameBoardObject) {
    const wrapper = document.getElementById("wrapper");

    for(let i = 0; i < gameBoardObject.length; i++) {
        const outIndex = [i];
        for(let j = 0; j < gameBoardObject[i].length; j++) {
            const div = document.createElement("button");
            div.setAttribute("data-id", `${outIndex}${j}`)
            wrapper.append(div);
        };
    };
};

const gameBoard = new Gameboard();
renderGameBoard(gameBoard.gameBoard);