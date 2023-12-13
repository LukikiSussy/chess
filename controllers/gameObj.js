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
    currentPlayer = "black";
    gameStatus = "active";

    constructor(id) {
        this.gameId = id;
        this.board = this.resetBoard();
        this.updatePieces(this.board);
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

        const moveResponse = this.board[from[1]][from[0]].move(to);
        
        if(moveResponse) {
            this.chceckForEnPassant(from, to);
            this.board[to[1]][to[0]] = this.board[from[1]][from[0]];
            this.board[to[1]][to[0]].position = to;
            this.board[from[1]][from[0]] = " ";
            this.updatePieces(this.board);
        }
        else {
            return "invalid move";
        }

        //zmena hrace bily na cerneho a naopak
        this.currentPlayer = players[`${this.currentPlayer}Finished`];
        return "move completed successfully";
    }

    chceckForEnPassant(from, to) {
        if(this.board[from[1]][from[0]].type == "pawn") {
            if(from[0] - to[0] != 0 && this.board[to[1]][to[0]] == " ") {
                this.board[to[1]-1][to[0]] = " ";
            }
        }
    }

    resetBoard() {
        var newBoard = [];

        for (let y = 0; y < 8; y++) {
            newBoard[y] = [];
            for (let x = 0; x < 8; x++) {
                if (y == 0) {
                    newBoard[y][x] = new figures[row[x]]("white", [x, y]);
                }
                else if (y == 1) {
                    newBoard[y][x] = new pawn("white", [x, y]);
                }
                else if (y == 6) {
                    newBoard[y][x] = new pawn("black", [x, y]);
                }
                else if (y == 7) {
                    newBoard[y][x] = new figures[row[x]]("black", [x, y]);
                }
                else if (y == 4 && x == 0) {
                    newBoard[y][x] = new pawn("white", [x, y]);
                }
                else if (y == 4 && x == 1) {
                    newBoard[y][x] = new pawn("white", [x, y]);
                }
                else {
                    newBoard[y][x] = " ";
                }
            }            
        }

        return newBoard;
    }

    updatePieces(board) {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if(board[y][x] != " ") {
                    board[y][x].generateMoves(board);
                }
            }
        }
    }
}

module.exports = { Game };