const PlayerController = require("../controllers/player.controller");

// this are event listeners
module.exports = function (app) {
  app.get('/players/list', PlayerController.getAllPlayers);
  app.post("/players/addplayer", PlayerController.createPlayer);
  app.get('/players/:id', PlayerController.getPlayer);
  app.delete("/players/:id/delete", PlayerController.deletePlayer);
}
