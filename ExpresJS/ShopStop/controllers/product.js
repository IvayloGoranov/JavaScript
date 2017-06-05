//const shortid = require("shortid");
//const formidable = require("formidable");

const Product = require("../models/Product");
const Category = require("../models/Category");

module.exports.addGet = (request, response) => {
    Category.find().then((categories) => {
        response.render('product/add', {categories: categories});
    });
};

module.exports.addPost = (request, response) => {
    let product = request.body;
    //product.image = '\\' + request.file.path;
    product.image = `/content/images/${request.file.filename}`;
    product.creator = request.user._id;

    Product.create(product).then((insertedProduct) => {
        Category.findById(insertedProduct.category).then((category) => {
            category.products.push(insertedProduct._id);
            category.save();

            response.redirect('/');
        });
    });

    /*let form = new formidable.IncomingForm()

    form.parse(request, (err, fields, files) => {
        if (err) {
            console.log(err)
            return
        }

        let product = fields;

        let image = files["image"];
        let fileName = shortid.generate();
        let filePath = path.normalize(path.join(__dirname, `../content/images/${fileName}`));
        fs.rename(image.path, filePath + image.name, (error) => {
            if(error) {
                console.log(error);
                return;
            }
        });

        product.image = filePath;

        Product.create(product).then((insertedProduct) => {
            Category.findById(insertedProduct.category).then((category) => {
                category.product.push(insertedProduct._id);
                category.save();

                response.writeHead(302, {'Location' : '/'});
                response.end();
            });
        });
    })*/
};

module.exports.editGet = (request, response) => {
    let id = request.params.id;
    Product.findById(id).then((product) => {
        if(product == null){
            response.sendStatus(404);
            return;
        }

        if(product.creator.equals(request.user._id) || request.user.roles.indexOf('Admin' >= 0)){
            let error = `error=${encodeURIComponent('User is not product owner')}`;
            response.redirect(`/?${error}`);

            return;
        }

        Category.find().then((categories) => {
            response.render('product/edit', {categories: categories, product: product});
        });
    });
};

module.exports.editPost = (request, response) => {
    let id = request.params.id;
    let editedProduct = request.body;

    Product.findById(id).then((product) => {
        if(product == null){
            response.redirect(`/error=${encodeURIComponent('Product not found!')}`);
            return;
        }

        if(product.creator.equals(request.user._id) || request.user.roles.indexOf('Admin' >= 0)){
            let error = `error=${encodeURIComponent('User is not product owner')}`;
            response.redirect(`/?${error}`);

            return;
        }

        product.name = editedProduct.name;
        product.description = editedProduct.description;
        product.price = editedProduct.price;

        if(request.file){
            //product.image = '\\' + request.file.path;
            product.image = `/content/images/${request.file.filename}`;
        }

        if(product.category.toString() !== editedProduct.category.toString()){
            Category.findById(product.category).then((oldCategory) => {
                Category.findById(editedProduct.category).then((newCategory) => {
                    let index = oldCategory.products.indexOf(product._id);
                    if(index >= 0) {
                        oldCategory.products.splice(index, 1);
                    }

                    oldCategory.save();

                    newCategory.products.push(product._id);
                    newCategory.save();

                    product.category = editedProduct.category;

                    product.save().then(() => {
                        response.redirect(`/success=${encodeURIComponent('Product edited!')}`);
                    });
                });
            });
        } else {
            product.save().then(() => {
                response.redirect(`/?success=${encodeURIComponent('Product edited!')}`);
            });
        }
    });
};

module.exports.deleteGet = (request, response) => {
    let id = request.params.id;
    Product.findById(id).then((product) => {
        if(product == null){
            response.sendStatus(404);
            return;
        }

        if(product.creator.equals(request.user._id) || request.user.roles.indexOf('Admin' >= 0)){
            let error = `error=${encodeURIComponent('User is not product owner')}`;
            response.redirect(`/?${error}`);

            return;
        }

        response.render('product/delete', {product: product});
    });
};

module.exports.deletePost = (request, response) => {
    let id = request.params.id;
    Product.findById(id).then((product) => {
        if(product == null){
            response.sendStatus(404);
            return;
        }

        if(product.creator.equals(request.user._id) || request.user.roles.indexOf('Admin' >= 0)){
            let error = `error=${encodeURIComponent('User is not product owner')}`;
            response.redirect(`/?${error}`);

            return;
        }

        Product.remove({_id: id}).then(() => {
            response.redirect(`/?success=${encodeURIComponent('Product deleted!')}`);
        });
    });
};

module.exports.buyGet = (request, response) => {
    let id = request.params.id;
    Product.findById(id).then((product) => {
        if(product == null){
            response.sendStatus(404);
            return;
        }

        response.render('product/buy', {product: product});
    });
};

module.exports.buyPost = (request, response) => {
    let productId = request.params.id;
    Product.findById(productId).then((product) => {
        if(product.buyer){
            let error = `error=${encodeURIComponent('Product was already bought')}`;
            response.redirect(`/?${error}`);

            return;
        }

        product.buyer = request.user._id;
        product.save().then(() => {
           request.user.boughtProducts.push(productId);
           request.user.save().then(() => {
              response.redirect('/');
           });
        });
    });
};

