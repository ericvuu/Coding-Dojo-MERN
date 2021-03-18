const AuthorController = require("../controllers/author.controller");

// this are event listeners
module.exports = function (app) {
  app.get('/', AuthorController.getAllAuthors);
  app.post("/new", AuthorController.createAuthor);
  app.get('/:id', AuthorController.getAuthor);
  app.put('/edit/:id', AuthorController.updateAuthor);
  app.delete("/delete/:id", AuthorController.deleteAuthor);
}
