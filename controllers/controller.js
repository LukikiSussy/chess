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

    await currentGame.makeMove(req.body.move);

    res.status(200).send(currentGame);
    res.end();
}

module.exports = {
    createGame,
    move,

}