class bishop {
    type = "bishop";

    constructor(color) {
        this.color = color;
    }

    move(from, to, board) {
        return true;
    }
}

module.exports = { bishop };