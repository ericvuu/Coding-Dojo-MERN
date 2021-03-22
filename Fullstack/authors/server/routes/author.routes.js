const AuthorController = require("../controllers/author.controller");

// this are event listeners
module.exports = function (app) {
  app.get('/authors', AuthorController.getAllAuthors);
  app.post("/authors", AuthorController.createAuthor);
  app.get('/authors/:id', AuthorController.getAuthor);
  app.put('/authors/:id', AuthorController.updateAuthor);
  app.delete("/authors/:id", AuthorController.deleteAuthor);
}
