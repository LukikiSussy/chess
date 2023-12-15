class queen {
    type = "queen";
    validMoves = [];
    position = [];

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        this.validMoves = [];

        //STRAIGHT
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
                this.validMoves.push([this.position[0], y]);
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
                this.validMoves.push([this.position[0], y]);
                break;
            }
            else {
                break;
            }
        }

        //DIAG
        // top right
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
        for (let x = this.position[0]-1, y = this.position[1]+1; x >= 0 && y < 8; x--, y++) {
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
        for (let x = this.position[0]-1, y = this.position[1]-1; x >= 0 && y >= 0; x--, y--) {
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

module.exports = { queen };