let mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

let articleSchema = new mongoose.Schema({
    title: {type: String, required: true, index: true, unique: true},
    content: {type: String},
    category: {type: ObjectId, ref: 'Category'},
    creator: {type:ObjectId, ref: 'User', required: true},
    createdOn: {type: Date, default: Date.now()}
});

let Article = mongoose.model('Article', articleSchema);
module.exports = Article;