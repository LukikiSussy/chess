const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const gameObj = require("./gameObj").Game;

app.use(cors({
    origin: '*'
}));

var games = [];

app.post("/api/v1/game", (req, res) => {
    console.log(req.body);
    let id = games.length;
    games.push(new gameObj(id));
    res.status(200).send("Redirecting");
    res.redirect(`/api/v1/game/${id}`);

    //res.header("Content-Type", "application/json");
    //res.write(JSON.stringify({board:games[0]}));
    res.end();
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });