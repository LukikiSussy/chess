class rook {
    hasBeenMoved = false;
    type = "rook";

    constructor(color) {
        this.color = color;
    }

    move(from, to, board) {
        if(from[0] != to[0] && from[1] != to[1]) return false;
        if(board[to[1]][to[0]] != " ") {
            if (board[to[1]][to[0]].color == this.color) return false;
        }

        if(from[1] == to[1]) {
            if(from[0] - to[0] > 0) {
                for (let i = to[0]; i < from[0]; i++) {
                    if(board[to[1]][i] != " ") return false;
                }
            }
            else {
                for (let i = from[0]+1; i < to[0]; i++) {
                    if(board[to[1]][i] != " ") return false;
                }
            }
            
        }
        else if(from[0] == to[0]) {
            if(from[1] - to[1] > 0) {
                for (let i = to[1]; i < from[1]; i++) {
                    if(board[i][to[0]] != " ") return false;
                }
            }
            else {
                for (let i = from[1]+1; i < to[1]; i++) {
                    if(board[i][to[0]] != " ") return false;
                }
            }
            
        }

        this.hasBeenMoved = true;
        return true;
    }
}

module.exports = { rook };