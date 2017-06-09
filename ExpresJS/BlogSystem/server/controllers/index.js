const home = require('./home-controller');
const users = require('./users-controller');
const articles = require('./articles-controller');
const categories = require('./categories-controller');

module.exports = {
  home: home,
  users: users,
  articles: articles,
  categories: categories
};
