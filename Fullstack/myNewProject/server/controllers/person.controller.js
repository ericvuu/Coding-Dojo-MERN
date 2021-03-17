const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createPerson = (request, response) => {
  // request.body is form body
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};
