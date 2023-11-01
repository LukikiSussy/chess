const row = "RNBQKBNR"

class Game {
    currentPlayer = "white";
    gameStatus = "active";
    moves = [];

    constructor(id) {
        this.gameId = id;
        this.board = this.resetBoard();
    }

    async makeMove(move) {
        moveArray = move.split(" ");
        board[moveArray[1][1]][moveArray[1][0]] = board[moveArray[0][1]][moveArray[0][0]];
        board[moveArray[0][1]][moveArray[0][0]] = " ";
    }

    resetBoard() {
        var newBoard = [];

        for (let y = 0; y < 8; y++) {
            newBoard[y] = [];
            for (let x = 0; x < 8; x++) {
                if (y == 0) {
                    newBoard[y][x] = "w" + row[x];
                }
                else if (y == 1) {
                    newBoard[y][x] = "wP"
                }
                else if (y == 6) {
                    newBoard[y][x] = "bP"
                }
                else if (y == 7) {
                    newBoard[y][x] = "b" + row[x];
                }
                else {
                    newBoard[y][x] = " ";
                }
            }            
        }



        return newBoard;
    }
}

module.exports = { Game };