class Game {
    currentPlayer = "white";
    gameStatus = "active";
    moves = [];

    constructor(id) {
        this.gameId = id;
        this.board = [];
                
        for (let i = 0; i < 8; i++) {
            this.board[i] = [];
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = " ";
            }            
        }
    }
}

module.exports = { Game };