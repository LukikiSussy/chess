function updateBoard(board) {
    clearColors()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] != " ") {
                document.getElementById(`cell${j}${i}`).style.backgroundImage = `url(chessImages/${board[i][j].type}-${board[i][j].color}.png)`;
            }
            else {
                document.getElementById(`cell${j}${i}`).style.backgroundImage = "none";
            }
        }
    }
}

function createBoard(board) {
    boardSize = [board.length, board[1].length]

    for (let i = board.length-1; i >= 0; i--) {
        let row = document.createElement("tr");
        for (let j = 0; j < board[i].length; j++) {
            let cell = document.createElement("td");
            if((i+j) % 2 == 0) {
                cell.style.backgroundColor = "brown";
            }
            else {
                cell.style.backgroundColor = "white";
            }
            cell.id = `cell${j}${i}`;
            cell.addEventListener("click", function(){
                cellClicked(cell.id, j, i)
            })

            cell.classList.add("cell");
            row.appendChild(cell);
        }
        document.getElementById("boardContainer").appendChild(row);
    }

    updateBoard(board);
}

function visualizevalidMoves(validMoves) {
    for(let i = 0; i < validMoves.length; i++) {
        document.getElementById(`cell${validMoves[i][0]}${validMoves[i][1]}`).style.backgroundColor = "blue";
    }
}

function clearColors() {
    for (let i = 0; i < boardSize[0]; i++) {
        for (let j = 0; j < boardSize[1]; j++) {
            if((i+j) % 2 == 0) {
                document.getElementById(`cell${j}${i}`).style.backgroundColor = "brown";
            }
            else {
                document.getElementById(`cell${j}${i}`).style.backgroundColor = "white";
            }
        }
    }
}