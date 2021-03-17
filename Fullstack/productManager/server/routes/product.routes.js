const ProductController = require('../controllers/product.controller');

module.exports = function (app) {
  app.get('/products', ProductController.getAllProducts);
  app.get('/products/:id', ProductController.getProduct)
  app.post('/products', ProductController.createProduct);
}
