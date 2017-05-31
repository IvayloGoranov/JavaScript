const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

let tagSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true, unique: true},
    creationDate: {type: Date},
    images: [{type: ObjectId, ref: 'Image'}]
});

let Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;


