const { response } = require("express");
const { Player } = require("../models/player.model");

module.exports.createPlayer = (request, response) => {
  // request.body is form body
  const { name } = request.body;
  const { position } = request.body;

  Player.create({
    name,
    position,
  })
    .then((player) => response.json(player))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPlayers = (request, response) => {
  Player.find()
    .then((players) => response.json(players))
    .catch((err) => response.json(err));
};

module.exports.getPlayer = (request, response) => {
  Player.findOne({ _id: request.params.id })
    .then((player) => response.json(player))
    .catch((err) => response.json(err));
};

module.exports.deletePlayer = (request, response) => {
  Player.findOneAndDelete({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
