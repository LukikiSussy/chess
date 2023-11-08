class rook {
    hasBeenMoved = false;
    type = "rook";

    constructor(color) {
        this.color = color;
    }

    move(from, to) {
        return true;
    }
}

module.exports = { rook };