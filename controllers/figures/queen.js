class queen {
    type = "queen";

    constructor(color) {
        this.color = color;
    }

    move(from, to, board) {
        if(board[to[1]][to[0]] != " ") {
            if (board[to[1]][to[0]].color == this.color) return false;
        }

        var difY = to[1]- from[1];
        var difX = to[0] - from[0];

        if(Math.abs(difY) - Math.abs(difX) != 0 && difY * difX != 0) return false;
        
        if(difY * difX == 0) {
            if(!this.checkStraight(from, to, board)) return false;
        }
        else {
            if(!this.checkDiag(from, to, board, difX, difY)) return false;
        }

        this.hasBeenMoved = true;
        return true;
    }

    checkStraight(from, to, board) {
        if(from[1] == to[1]) {
            if(from[0] - to[0] > 0) {
                for (let i = to[0]; i < from[0]; i++) {
                    if(board[to[1]][i] != " ") return false;
                }
            }
            else {
                for (let i = from[0]+1; i < to[0]; i++) {
                    if(board[to[1]][i] != " ") return false;
                }
            }
            
        }
        else if(from[0] == to[0]) {
            if(from[1] - to[1] > 0) {
                for (let i = to[1]; i < from[1]; i++) {
                    if(board[i][to[0]] != " ") return false;
                }
            }
            else {
                for (let i = from[1]+1; i < to[1]; i++) {
                    if(board[i][to[0]] != " ") return false;
                }
            }
        }
        return true;
    }

    checkDiag(from, to, board, difX, difY) {
        console.log(difX, difY)

        if(difX > 0 && difY < 0) {
            console.log(1, to, from)
            for (let i = from[0]+1, j = from[1]-1; i < to[0]; i++, j--) {
                console.log(board[j][i])
                if(board[j][i] != " ") return false;
            }
        }
        else if (difX > 0 && difY > 0){
            console.log(2)
            for (let i = from[0]+1, j = from[1]+1; i < to[0]; i++, j++) {
                if(board[j][i] != " ") return false;
            }
        }
        else if(difX < 0 && difY < 0) {
            console.log(3)
            for (let i = to[0], j = to[1]; i < from[1]; i++, j++) {
                //console.log(i,j, from)
                if(board[j][i] != " ") return false;
            }
        }
        else {
            console.log(4)
            for (let i = to[0], j = to[1]; i < to[1]; i++, j--) {
                if(board[j][i] != " ") return false;
            }
        }
        return true;
    }
}

module.exports = { queen };