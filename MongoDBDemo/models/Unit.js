let mongoose = require('mongoose');
const Weapon = require("../models/Weapon.js");

let unitSchema = new mongoose.Schema({
    name: {type: String, required: true, index: true, unique: true},
    type: {type: String, required: true},
    age: {type: Number, required: false},
    life: {type:Number, default: 100},
    weapons: [Weapon.schema],
    mainWeapon : {type: {}},
    partner: {type: ObjectId}
});
unitSchema.methods.attack = function(enemy) {
    if(this.mainWeapon) {
        enemy.life -= this.mainWeapon.damage;
    } else{
        enemy.life -= 1;
    }
};
unitSchema.virtual("stats").get(function(){
    let damage = this.mainWeapon.damage != undefined ? this.mainWeapon.damage : 1;
    return `name: ${this.name}, life: ${this.life}, damage: ${damage}`;
})
/*unitSchema.path('position.x').validate(function(value){
 return value>=0 && value <= maxX;
 }, 'Error message!!!');*/

let Unit = mongoose.model('Unit', unitSchema)
module.exports = Unit;

