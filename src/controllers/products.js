module.exports = function (app) {
  let service = require('../services/products')(app);
  return {
    index: (req, res) => {
      service.on('value', (snapshot) => {
        res.render('index', {products: snapshot.val() || []});
      });
    },
    new: (req, res) => {
      res.render('new');
    },
    newPost: (req, res) => {
      let newProduct = service.push();
      newProduct.set({
        descricao: req.body.descricao,
        dtcompra: req.body.dtcompra,
        preco: req.body.preco,
        origem: req.body.origem
      });
      res.redirect('/');
    },
    view: (req, res) => {
      let child = service.child(req.params.id);
      child.on('value', (snapshot) => {
        res.render('view', {id: req.params.id, product: snapshot.val() || []});
      });
    },
    edit: (req, res) => {
      let child = service.child(req.params.id);
      child.on('value', (snapshot) => {
        res.render('edit', {id: req.params.id, product: snapshot.val() || []});
      });
    },
    editPost: (req, res) => {
      let child = service.child(req.params.id);
      child.update({
        descricao: req.body.descricao,
        dtcompra: req.body.dtcompra,
        preco: req.body.preco,
        origem: req.body.origem,
        categoria: req.body.categoria
      });
      res.redirect('/');
    },
    remove: (req, res) => {
      let child = service.child(req.params.id);
      child.set(null, () => {
        res.redirect('/');
      });
    }
  }
}
