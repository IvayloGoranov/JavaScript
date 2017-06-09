const controllers = require('../controllers');
const auth = require('./auth');

module.exports = (app) => {
  app.get('/', controllers.home.index);

  app.get('/users/register', controllers.users.registerGet);
  app.post('/users/register', controllers.users.registerPost);

  app.get('/users/login', controllers.users.loginGet);
  app.post('/users/login', controllers.users.loginPost);
  app.post('/users/logout', controllers.users.logout);

  app.get('/articles/add', auth.isAuthenticated, controllers.articles.addGet);
  app.post('/articles/add', auth.isAuthenticated, controllers.articles.addPost);
  app.get('/articles/list', auth.isAuthenticated, controllers.articles.listAll);
  app.get('/articles/edit/:id', auth.isAuthenticated, controllers.articles.editGet);
  app.post('/articles/edit/:id', auth.isAuthenticated, controllers.articles.editPost);
  app.get('/articles/details/:id', auth.isAuthenticated, controllers.articles.details);

  app.get('/categories/add', auth.isInRole('Admin'), controllers.categories.addGet);
  app.post('/categories/add', auth.isInRole('Admin'), controllers.categories.addPost);

  app.all('*', (req, res) => {
    res.status(404);
    res.send('404 Not Found!');
    res.end();
  })
}
