const mongoose = require('mongoose');
const encryption = require('../utilities/encryption');
const ObjectId = mongoose.Schema.ObjectId;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        unique: true
    },
    password: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    salt: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    lastName: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    age: {
        type: Number,
        min: [0, 'Age must be between 0 and 120'],
        max: [120, 'Age must be between 0 and 120']
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: 'Gender should be either "Male" or "Female".'
        }
    },
    roles: [{ type:String }],
    boughtProducts: [{ type: ObjectId, ref: 'Product' }],
    createdProducts: [{ type: ObjectId, ref: 'Product' }],
    createdCategories: [{ type: ObjectId, ref: 'Category' }]
});

userSchema.method({
    authenticate: function (password) {
        let hashedPassword = encryption.generateHashedPassword(this.salt, password);

        return hashedPassword === this.password;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.seedAdminUser = () => {
    User.find({username: 'admin'}).then(users => {
        if (users.length === 0) {
            let salt = encryption.generateSalt();
            let hashedPass = encryption.generateHashedPassword(salt, '123');

            User.create({
                username: 'admin',
                firstName: 'Chuck',
                lastName: 'Test',
                salt: salt,
                password: hashedPass,
                age: 33,
                gender: 'Male',
                roles: ['Admin']
            });
        }
    })
}
