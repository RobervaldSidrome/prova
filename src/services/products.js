let products = (app) => {
  let firebase = app.firebase;
  return firebase.database().ref('products');
}

module.exports = products