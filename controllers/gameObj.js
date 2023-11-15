const row = "RNBQKBNR"

const {rook} = require("./figures/rook");
const {queen} = require("./figures/queen");
const {pawn} = require("./figures/pawn");
const {king} = require("./figures/king");
const {knight} = require("./figures/knight");
const {bishop} = require("./figures/bishop");

const figures = {
    "R": rook,
    "N": knight,
    "B": bishop,
    "Q": queen,
    "K": king,
    "P": pawn
}

const players = {
    "whiteFinished": "black",
    "blackFinished": "white"
}

class Game {
    currentPlayer = "white";
    gameStatus = "active";
    moves = [];

    constructor(id) {
        this.gameId = id;
        this.board = this.resetBoard();
    }

    async makeMove(move) {
        var splitMove = move.split("-");
        for (let i = 0; i < splitMove.length; i++) {
            splitMove[i] = splitMove[i].split("");
            splitMove[i][0] = splitMove[i][0].charCodeAt(0) - 97;
            splitMove[i][1]--

            if (splitMove[i][0] > 7 || splitMove[i][0] < 0 || splitMove[i][1] > 7 || splitMove[i][1] < 0) {
                return "invalid piece location";
            }
        }

        var from = splitMove[0];
        var to = splitMove[1];

        //kontrola jestli je tak legalni
        if(from[0] == to[0] && from[1] == to[1]) return "that is not a move"
        if(this.board[from[1]][from[0]] == " ") return "no piece at that location"
        if(this.board[from[1]][from[0]].color != this.currentPlayer) return `it is not ${this.board[from[1]][from[0]].color}'s turn!`

        const moveResponse = this.board[from[1]][from[0]].move(from, to, this.board);
        
        if(moveResponse) {
            this.board[to[1]][to[0]] = this.board[from[1]][from[0]];
            this.board[from[1]][from[0]] = " ";
        }
        else {
            return "invalid move";
        }

        //zmena hrace bily na cerneho a naopak
        //this.currentPlayer = players[`${this.currentPlayer}Finished`];
        return "move completed successfully";
    }

    resetBoard() {
        var newBoard = [];

        for (let y = 0; y < 8; y++) {
            newBoard[y] = [];
            for (let x = 0; x < 8; x++) {
                if (y == 0) {
                    newBoard[y][x] = new figures[row[x]]("white");
                }
                /*else if (y == 1) {
                    newBoard[y][x] = new pawn("white");
                }
                else if (y == 6) {
                    newBoard[y][x] = new pawn("black");
                }*/
                else if (y == 7) {
                    newBoard[y][x] = new figures[row[x]]("black");
                }
                else if (x == 0 && y == 4) {
                    newBoard[y][x] = new figures[row[x]]("black");
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