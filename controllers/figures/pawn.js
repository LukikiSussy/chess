class pawn {
    hasBeenMoved = false;
    type = "pawn";
    validMoves = [];
    position = [];

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        
    }


    move(from, to, board) {
        if(this.canCapture(from, to, board)) return true;

        if (from[0] != to[0]) return false;

        if (this.color == "white") {
            if(this.hasBeenMoved == false && to[1] - from[1] == 2 && board[to[1]][to[0]] == " " && board[to[1] - 1][to[0]] == " ") {
                this.hasBeenMoved = true;
                return true;
            }
            else if(to[1] - from[1] <= 1 && board[to[1]][to[0]] == " ") {
                this.hasBeenMoved = true;
                return true;
            }
            return false;
        }

        if (this.color == "black") {
            if(this.hasBeenMoved == false && to[1] - from[1] == -2 && board[to[1]][to[0]] == " " && board[to[1] + 1][to[0]] == " ") {
                this.hasBeenMoved = true;
                return true;
            }
            else if(to[1] - from[1] >= -1  && board[to[1]][to[0]] == " ") {
                this.hasBeenMoved = true;
                return true;
            }
            return false;
        }
    }

    canEnPassant(from, to, board) {
        return false;
    }

    canCapture(from, to, board) {
        if(this.color == "white" && board[to[1]][to[0]] != " " && to[1] - from[1] == 1 && to[0] - from[0] == 1 || to[0] - from[0] == -1) {
            if(board[to[1]][to[0]].color == "white") return false;
            return true;
        }

        if(this.color == "black" && board[to[1]][to[0]] != " " && to[1] - from[1] == -1 && to[0] - from[0] == 1 || to[0] - from[0] == -1) {
            if(board[to[1]][to[0]].color == "black") return false;
            return true;
        }

        return false;
    }
}

module.exports = { pawn };