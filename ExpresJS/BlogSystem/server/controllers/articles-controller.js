const Article = require("../data/Article");
const Category = require("../data/Category");

const DEFAULT_PAGE_SIZE = 10;

module.exports.addGet = (request, response) => {
    Category.find().then((categories) => {
        response.render('articles/add', {categories: categories});
    });
};

module.exports.addPost = (request, response) => {
    let article = request.body;
    article.creator = request.user._id;
    article.createdOn = Date.now();

    Article.create(article).then((insertedArticle) => {
        Category.findById(insertedArticle.category).then((category) => {
            category.articles.push(insertedArticle._id);
            category.save();

            response.redirect('/');
        });
    }).catch(err => {
        article.error = err;
        Category.find().then((categories) => {
            article.categories = categories;
            response.render('articles/add', article);
        });
    });
};

module.exports.listAll = (request, response) => {
    let page = parseInt(request.query.page) || 1;
    let nextPage = page + 1;
    let previousPage = page - 1;

    let search =  request.query.search;

    let query = Article.find({});

    if(query){
        query = query.where('title').regex(new RegExp(query, 'i'));
    }

    query.
            sort('-createdOn').
            skip((page - 1) * DEFAULT_PAGE_SIZE).
            limit(DEFAULT_PAGE_SIZE).
            then((articles) => {
                    Article.count({}).then((count) => {
                        response.render('articles/list',
                            {   articles: articles,
                                hasPreviousPage: page > 1,
                                hasNextPage: page < count,
                                nextPage: nextPage,
                                previousPage: previousPage,
                                search: search});
                    });
                });
};

module.exports.details = (request, response) => {
    let id = request.params.id;
    Article.findById(id).then((article) => {
        if(article == null){
            response.sendStatus(404);
            return;
        }

        response.render('articles/details', {article: article});
    });
};

module.exports.editGet = (request, response) => {
    let id = request.params.id;
    Article.findById(id).then((article) => {
        if(article == null){
            response.sendStatus(404);
            return;
        }

        if(!article.creator.equals(request.user._id) && request.user.roles.indexOf('Admin' >= 0)){
            response.locals.error = 'User is not product owner';
            response.redirect(`/`);

            return;
        }

        Category.find().then((categories) => {
            response.render('articles/edit', {categories: categories, article: article});
        });
    });
};

module.exports.editPost = (request, response) => {
    let id = request.params.id;
    let editedArticle = request.body;

    Article.findById(id).then((article) => {
        if(article == null){
            response.redirect(`/error=${encodeURIComponent('Article not found!')}`);
            return;
        }

        if(!article.creator.equals(request.user._id) && request.user.roles.indexOf('Admin' >= 0)){
            response.locals.error = 'User is not product owner';
            response.redirect(`/`);

            return;
        }

        article.title = editedArticle.title;
        article.content = editedArticle.content;

        if(article.category.toString() !== editedArticle.category.toString()){
            Category.findById(article.category).then((oldCategory) => {
                Category.findById(editedArticle.category).then((newCategory) => {
                    let index = oldCategory.products.indexOf(article._id);
                    if(index >= 0) {
                        oldCategory.products.splice(index, 1);
                    }

                    oldCategory.save();

                    newCategory.articles.push(article._id);
                    newCategory.save();

                    article.category = editedArticle.category;

                    article.save().then(() => {
                        response.redirect(`/success=${encodeURIComponent('Article edited!')}`);
                    });
                });
            });
        } else {
            article.save().then(() => {
                response.redirect(`/?success=${encodeURIComponent('Article edited!')}`);
            });
        }
    });
};
