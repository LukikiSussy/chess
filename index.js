const express = require("express");
const cors = require("cors");

const gameController = require("./controllers/controller");

const app = express();
const port = 3000;


app.use(express.json()) 
app.use(cors({
    origin: '*'
}));

app.post("/api/v1/game", gameController.createGame);
app.post("/api/v1/game/:id", gameController.move);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });