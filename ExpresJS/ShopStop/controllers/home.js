
const Product = require("../models/Product");

module.exports.index = (request, response) => {
    let queryData = request.query;

    Product.find({buyer: null}).populate("category").then((products) => {
        if(queryData.query) {
            products = products.filter(p => p.name.toLowerCase().includes(queryData.query));
        }

        let data = {products: products};
        if(request.query.error){
            data.error = request.query.error;
        } else if(request.query.success) {
            data.success = request.query.success;
        }

        response.render('home/index', data);
    });
};