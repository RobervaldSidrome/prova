module.exports = function (app) {
  let controller = app.controllers.products;

  app.get('/', controller.index);
  app.get('/new', controller.new);
  app.post('/new', controller.newPost);
  app.get('/view/:id', controller.view);
  app.get('/edit/:id', controller.edit);
  app.post('/edit/:id', controller.editPost);
  app.get('/remove/:id', controller.remove);
}