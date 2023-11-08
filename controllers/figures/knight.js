class knight {
    type = "knight";

    constructor(color) {
        this.color = color;
    }

    move(from, to, board) {
        return true;
    }
}

module.exports = { knight };