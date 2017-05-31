const mongoose = require('mongoose');

const Image = require("./models/Image");
const Tag = require("./models/Tag");

function saveImage(image) {
    return new Promise((resolve, reject) => {
        let newImage = new Image({
            url: image.url,
            description: image.description,
            creationDate: Date.now(),
            tags: []
        });
        if (image.tags != undefined && image.tags.length > 0) {
            let createTagPromises = [];
            for (let tag of image.tags) {
                createTagPromises.push(createTag(tag).then((tagId) => {
                    newImage.tags.push(tagId);
                }));
            }

            Promise.all(createTagPromises).then(() => {
                Image.create(newImage).then((insertedImage) => {
                    for (let tag of image.tags) {
                        updateTag({name: tag, imageId: insertedImage._id}).then((msg) => {
                            console.log(msg);
                            resolve();
                        });
                    }
                });
            });
        }
    });
};

function findByTag(tagName) {
    return new Promise(function(resolve, reject){
        Tag.findOne({name: tagName}).then((tag) => {
            Image.find({tags: tag._id}).then((images) => {
                let sortedImages = images.sort((a, b) => b.creationDate > a.creationDate);
                resolve(sortedImages);
            })
        })
    })
};

function createTag(tag) {
    return new Promise(function(resolve, reject) {
        Tag.findOne({name: tag}).then((existingTag) => {
            if(existingTag) {
                resolve(existingTag._id)
                return;
            }

            let newTag = new Tag({
                name: tag,
                creationDate: Date.now()
            });
            newTag.save().then((insertedTag) => {
                resolve(insertedTag._id);
            });
        })
    })
}

function updateTag(tag) {
    return new Promise(function(resolve, reject) {
        Tag.findOne({name: tag.name}).then((existingTag) => {
            existingTag.images.push(tag.imageId);
            existingTag.save().then(() => {
                resolve("Tag updated");
            });
        })
    })
}

module.exports.saveImage = saveImage;
module.exports.findByTag = findByTag;

