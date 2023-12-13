class pawn {
    hasBeenMoved = false;
    hasBeenDoubleMoved = false;
    type = "pawn";
    validMoves = [];
    position = [];
    direction = 0;

    constructor(color, pos) {
        this.color = color;

        this.position = pos;

        if(this.color == "white") {
            this.direction = 1;
        }
        else {
            this.direction = -1;
        }
    }

    generateMoves(board) {
        this.validMoves = [];

        //capture moves
        try {
            if(board[this.position[1]+this.direction][this.position[0]+1] != " " && board[this.position[1]+this.direction][this.position[0]+1] != undefined) {
                if(board[this.position[1]+this.direction][this.position[0]+1].color != this.color) {
                    this.validMoves.push([this.position[0]+1, this.position[1]+this.direction]);
                }
            }
        }
        catch { 
        }
        try {
            if(board[this.position[1]+this.direction][this.position[0]-1] != " " && board[this.position[1]+this.direction][this.position[0]-1] != undefined) {
                if(board[this.position[1]+this.direction][this.position[0]-1].color != this.color) {
                    this.validMoves.push([this.position[0]-1, this.position[1]+this.direction]);
                }
            }
        }
        catch{
        }

        //forward
        if(board[this.position[1]+this.direction][this.position[0]] == " ") {
            this.validMoves.push([this.position[0], this.position[1]+this.direction]);

            if(board[this.position[1]+(this.direction*2)][this.position[0]] == " " && !this.hasBeenMoved) {
                this.validMoves.push([this.position[0], this.position[1]+(this.direction*2)]);
            }
        }

        //en passant
        try {
            if(board[this.position[1]][this.position[0]+1] != " " && board[this.position[1]][this.position[0]+1] != undefined) {
                if(board[this.position[1]][this.position[0]+1].color != this.color && board[this.position[1]][this.position[0]+1].hasBeenDoubleMoved) {
                    this.validMoves.push([this.position[0]+1, this.position[1]+this.direction]);
                }
            }
        }
        catch { 
        }
        try {
            if(board[this.position[1]][this.position[0]-1] != " " && board[this.position[1]][this.position[0]-1] != undefined) {
                if(board[this.position[1]][this.position[0]-1].color != this.color && board[this.position[1]][this.position[0]-1].hasBeenDoubleMoved) {
                    this.validMoves.push([this.position[0]-1, this.position[1]+this.direction]);
                }
            }
        }
        catch{
        }
    }

    move(to) {
        this.hasBeenDoubleMoved = false;
        this.hasBeenMoved = true;

        for(let i = 0; i < this.validMoves.length; i++) {
            if(this.validMoves[i][0] == to[0] && this.validMoves[i][1] == to[1]) {

                if((to[1] - this.position[1])*this.direction >= 2) {
                    this.hasBeenDoubleMoved = true;
                }

                return true;
            }
        }
        return false;
    }
}

module.exports = { pawn };