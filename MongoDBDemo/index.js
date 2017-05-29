const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ObjectId = mongoose.Schema.ObjectId;

let environment = process.env.NODE_ENV || 'development';
const config = require('./config/config.js');
const database = require('./config/database.config.js');

const Unit = require('../models/Unit');
const Weapon = require('../models/Weapon');

database(config[environment]);

let walkingStick = new Weapon({
    name: "walking stick",
    damage: 5
});
walkingStick.save().catch((err) => {
    console.log(err)
});

let unit = new Unit({
    name: "Bai Ivan",
    type: "warrior",
    age: "56",
    weapons: [walkingStick],
    mainWeapon: walkingStick
});

let unitId = ""
unit.save().then((unit) => {
    unitId = unit._id;
    let unitInDB = Unit.findById(unitId).exec()
        .then((unitInDB => { //Unit.find({name: 'Bai Ivan'})...
            console.log(unitInDB);
            console.log(unitInDB.stats)
        }))
}).catch((err) => {
    console.log(err)
});

/*mongoose.connect('mongodb://localhost:27017/mydatabase', (err) => {
    if(err){
        console.log(err);
        return;
    }

    let weaponSchema = new mongoose.Schema({
        name: {type: String, required: true, index: true, unique: true}, //type: {}, [], Boolean, Date
        damage: {type: Number, required: true} // min:1, max: 100
    });
    let Weapon = mongoose.model('Weapon', weaponSchema);

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
    /!*unitSchema.path('position.x').validate(function(value){
     return value>=0 && value <= maxX;
     }, 'Error message!!!');*!/
    let Unit = mongoose.model('Unit', unitSchema);

    let walkingStick = new Weapon({
        name: "walking stick",
        damage: 5
    });
    walkingStick.save().catch((err) => {
            console.log(err)
        });

    let unit = new Unit({
        name: "Bai Ivan",
        type: "warrior",
        age: "56",
        weapons: [walkingStick],
        mainWeapon: walkingStick
    });

    let unitId = ""
    unit.save().then((unit) => {
        unitId = unit._id;
        let unitInDB = Unit.findById(unitId).exec()
            .then((unitInDB => { //Unit.find({name: 'Bai Ivan'})...
            console.log(unitInDB);
            console.log(unitInDB.stats)
            }))
    }).catch((err) => {
        console.log(err)
    });
});*/

