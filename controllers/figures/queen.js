class queen {
    type = "queen";

    constructor(color) {
        this.color = color;
    }

    move(from, to) {
        return true;
    }
}

module.exports = { queen };