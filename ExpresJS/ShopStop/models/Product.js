let mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

let productSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true, unique: true},
    description: {type: String},
    price: {type: Number, min: 0, max: Number.MAX_VALUE, required: true, default: 0},
    image: {type:String},
    category: {type: ObjectId, ref: 'Category'},
    buyer: {type:ObjectId, ref: 'User'},
    creator: {type:ObjectId, ref: 'User', required: true}
});

let Product = mongoose.model('Product', productSchema);
module.exports = Product;
