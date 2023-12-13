class king {
    hasBeenMoved = false;
    inCheck = false;
    type = "king";
    validMoves = [];
    position = [];

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        
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