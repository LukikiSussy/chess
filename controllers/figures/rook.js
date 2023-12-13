class rook {
    hasBeenMoved = false;
    type = "rook";
    validMoves = [];
    position = [];

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        this.validMoves = [];
        //left
        for (let x = this.position[0]+1; x < 8; x++) {
            if(board[this.position[1]][x] == " ") {
                this.validMoves.push([x, this.position[1]]);
            }
            else if(board[this.position[1]][x].color != this.color) {
                this.validMoves.push([x, this.position[1]]);
                break;
            }
            else {
                break;
            }
        }
        //right
        for (let x = this.position[0]-1; x >= 0; x--) {
            if(board[this.position[1]][x] == " ") {
                this.validMoves.push([x, this.position[1]]);
            }
            else if(board[this.position[1]][x].color != this.color) {
                this.validMoves.push([x, this.position[1]]);
                break;
            }
            else {
                break;
            }
        }
        //up
        for (let y = this.position[1]+1; y < 8; y++) {
            if(board[y][this.position[0]] == " ") {
                this.validMoves.push([this.position[0], y]);
            }
            else if(board[y][this.position[0]].color != this.color) {
                this.validMoves.push([this.position[1], y]);
                break;
            }
            else {
                break;
            }
        }
        //down
        for (let y = this.position[1]-1; y >= 0; y--) {
            if(board[y][this.position[0]] == " ") {
                this.validMoves.push([this.position[0], y]);
            }
            else if(board[y][this.position[0]].color != this.color) {
                this.validMoves.push([this.position[1], y]);
                break;
            }
            else {
                break;
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

module.exports = { rook };