let mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

let categorySchema = new mongoose.Schema({
    name: {type: String, required: true, index: true, unique: true},
    articles: [{type: ObjectId, ref: 'Article'}],
    creator: {type:ObjectId, ref: 'User', required: true}
});

let Category = mongoose.model('Category', categorySchema);
module.exports = Category;
