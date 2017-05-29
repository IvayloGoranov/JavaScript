let mongoose = require('mongoose')

let weaponSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true, unique: true}, //type: {}, [], Boolean, Date
    damage: {type: Number, required: true} // min:1, max: 100
});

let Weapon = mongoose.model('Weapon', weaponSchema);
module.exports = Weapon;