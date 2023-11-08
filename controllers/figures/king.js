class king {
    hasBeenMoved = false;
    inCheck = false;
    type = "king";

    constructor(color) {
        this.color = color;
    }

    move(from, to, board) {
        return true;
    }
}

module.exports = { king };