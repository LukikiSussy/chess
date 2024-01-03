class king {
    hasBeenMoved = false;
    inCheck = false;
    type = "king";
    validMoves = [];
    position = [];

    moves = [[1, 1],[0, 1],[-1, 1],[-1, 0],[-1, -1],[0, -1],[1, -1],[1, 0]]

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        this.validMoves = [];
        for (let i = 0; i < this.moves.length; i++) {

            if(this.position[1] + this.moves[i][1] < 8 && this.position[1] + this.moves[i][1] >= 0 && this.position[0] + this.moves[i][0] < 8 && this.position[0] + this.moves[i][0] >= 0) {

                if(board[this.position[1] + this.moves[i][1]][this.position[0] + this.moves[i][0]] == " ") {
                    this.validMoves.push([this.position[0] + this.moves[i][0], this.position[1] + this.moves[i][1]]);
                }
                else if(board[this.position[1] + this.moves[i][1]][this.position[0] + this.moves[i][0]].color != this.color) {
                    this.validMoves.push([this.position[0] + this.moves[i][0], this.position[1] + this.moves[i][1]]);
                }

            }    
        }
    }


    move(to) {
        this.hasBeenMoved = true;
        for(let i = 0; i < this.validMoves.length; i++) {
            if(this.validMoves[i][0] == to[0] && this.validMoves[i][1] == to[1]) {
                return true;
            }
        }
        return false;
    }
}

module.exports = { king };