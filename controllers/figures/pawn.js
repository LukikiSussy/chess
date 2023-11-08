class pawn {
    hasBeenMoved = false;
    type = "pawn";

    constructor(color) {
        this.color = color;
    }

    move(from, to, board) {
        if (from[0] != to[0] && !this.canEnPassant(from, to, board)) return false;

        if (!this.hasBeenMoved) {
            if (this.color == "white") {
                if(this.hasBeenMoved == false && to[1] - from[1] <= 2) {
                    this.hasBeenMoved = true;
                    return true;
                }
                else if(to[1] - from[1] <= 1) {
                    this.hasBeenMoved = true;
                    return true;
                }
                return false;
            }

            if (this.color == "black") {
                if(this.hasBeenMoved == false && to[1] - from[1] >= -2) {
                    this.hasBeenMoved = true;
                    return true;
                }
                else if(to[1] - from[1] >= -1) {
                    this.hasBeenMoved = true;
                    return true;
                }
                return false;
            }
        }
    }

    canEnPassant(from, to, board) {
        return false
    }
}

module.exports = { pawn };