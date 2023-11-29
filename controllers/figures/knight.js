class knight {
    type = "knight";
    validMoves = [];
    position = [];

    constructor(color, pos) {
        this.color = color;

        this.position = pos;
    }

    generateMoves(board) {
        
    }


    move(from, to, board) {
        return true;
    }
}

module.exports = { knight };