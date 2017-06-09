
const Category = require("../data/Category");

module.exports.addGet = (request, response) => {
    response.render('categories/add');
};

module.exports.addPost = (request, response) => {
    let category = request.body;
    category.creator = request.user._id;
    Category.create(category).then(() => {
        response.redirect('/');
    });
};
