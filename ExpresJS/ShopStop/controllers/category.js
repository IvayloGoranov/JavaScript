
const Category = require("../models/Category");

module.exports.addGet = (request, response) => {
    response.render('category/add');
};

module.exports.addPost = (request, response) => {
    let category = request.body;
    category.creator = request.user._id;
    Category.create(category).then(() => {
        response.redirect('/');
    });
};

module.exports.productsByCategory = (request, response) => {
    let categoryName = request.params.category;
    Category.findOne({name: categoryName}).populate({
        path: 'products',
        match: { buyer: null }
    }).then((category) => {
        if(category == null){
            response.sendStatus(404);
            return;
        }

        response.render('category/products', {category: category});
    });
};