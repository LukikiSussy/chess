class bishop {
    type = "bishop";
    validMoves = [];
    position = [];

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        this.validMoves = [];
        //top right
        for (let x = this.position[0]+1, y = this.position[1]+1; x < 8 && y < 8; x++, y++) {
            if(board[y][x] == " ") {
                this.validMoves.push([x, y]);
            }
            else if(board[y][x].color != this.color) {
                this.validMoves.push([x, y]);
                break;
            }
            else {
                break;
            }
        }
        // bott right
        for (let x = this.position[0]+1, y = this.position[1]-1; x < 8 && y >= 0; x++, y--) {
            if(board[y][x] == " ") {
                this.validMoves.push([x, y]);
            }
            else if(board[y][x].color != this.color) {
                this.validMoves.push([x, y]);
                break;
            }
            else {
                break;
            }
        }
        // top left
        for (let x = this.position[0]-1, y = this.position[1]+1; x >= 0 && y < 8; x++, y++) {
            if(board[y][x] == " ") {
                this.validMoves.push([x, y]);
            }
            else if(board[y][x].color != this.color) {
                this.validMoves.push([x, y]);
                break;
            }
            else {
                break;
            }
        }
        // bott left
        for (let x = this.position[0]-1, y = this.position[1]-1; x >= 0 && y >= 0; x++, y--) {
            if(board[y][x] == " ") {
                this.validMoves.push([x, y]);
            }
            else if(board[y][x].color != this.color) {
                this.validMoves.push([x, y]);
                break;
            }
            else {
                break;
            }
        }
    }

    move(to) {
        for(let i = 0; i < this.validMoves.length; i++) {
            if(this.validMoves[i][0] == to[0] && this.validMoves[i][1] == to[1]) {
                return true;
            }
        }
        return false;
    }
}

module.exports = { bishop };