fetch("http://localhost:3000/api/v1/game",{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
        })
        .then(async function(res){ 
            res = await res.json();

            id = res.gameId;
            console.log(res)

            boardState = res.board;
            turn = res.currentPlayer;

            createBoard(res.board);
        })
        .catch(function(res){ console.log(res) })


function sendMove(move) {
    if(id == null) return;
    console.log(`http://localhost:3000/api/v1/game/${id}`)

    fetch(`http://localhost:3000/api/v1/game/${id}`,{
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            "move": move,
            "gameId": id,
        })
    })
    .then(async function(res){
        res = await res.json();

        boardState = res.game.board;
        turn = res.game.currentPlayer;

        console.log(res.moveStatus)

        updateBoard(res.game.board);
    })
    .catch(function(res){ console.log(res) })
}

function getValidMoves(x ,y) {
    if(id == null) return;

    fetch(`http://localhost:3000/api/v1/game/${id}/vm`,{
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            pos: [x,y],
            gameId: id,
        })
    })
    .then(async function(res){
        res = await res.json();

        visualizevalidMoves(res.validMoves);
        validMoves = res.validMoves;
    })
    .catch(function(res){ console.log(res) })
}