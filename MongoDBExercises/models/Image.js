const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

let imageSchema = new mongoose.Schema({
    url: {type: String, required: true, unique: true},
    creationDate: {type: Date},
    description: {type: String},
    tags: [{type: ObjectId, ref: 'Tag'}]
});

let Image = mongoose.model('Image', imageSchema);
module.exports = Image;
