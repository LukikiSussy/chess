const path = require("path");

const { Game } = require("./gameObj");
const gameObj = require("./gameObj").Game;

var games = [];
var gameIds = 0;

const createGame = (req, res) => {
    const gameId = gameIds++;

    const game = new Game(gameId);
    games[gameId] = game; 

    res.status(200).send(game);
    res.end();
}

const move = async (req, res) => {
    const currentGame = games[req.body.gameId];

    var moveStatus = await currentGame.makeMove(req.body.move);

    res.status(200).send({
        "game": currentGame,
        "moveStatus": moveStatus,
    });
    res.end();
}

const getValidMoves = async (req, res) => {
    const currentGame = games[req.body.gameId];
    const pos = req.body.pos;

    var movesStatus;
    var validMoves = [];

    if(pos[0] >= 8 || pos[0] < 0 || pos[1] >= 8 || pos[1] < 0) movesStatus = "invalid position";
    else {
        validMoves = currentGame.validMoves(pos);

        movesStatus = "ok";
    }

    res.status(200).send({
        "movesStatus": movesStatus,
        "validMoves": validMoves,
    });
    res.end();
}

const sendFrontEnd = async (req, res) => {
    console.log(path.join(__dirname, "..", "frontEnd", "front.html"))
    res.sendFile(path.join(__dirname, "..", "frontEnd", "front.html"));
}

module.exports = {
    createGame,
    move,
    getValidMoves,
    sendFrontEnd
}