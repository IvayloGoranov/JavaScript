const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Unit = require("../models/Unit");

Unit
    .find({name: "Bai Ivan"})
    .exec()
    .then(unit => {
        unit.name = 'Bai Razvan'
        unit.save()
    });
/*Unit
 .findOneAndUpdate({name: "Bai Ivan"}, {
 $set: { name: 'Kotangens' }
 })
 .exec();
 Weapon
 .update(
 { name: 'walking stick' },
 { $set: { damage: 8 } },
 { multi: true }) //all values matching criteria
 .exec();*/

Unit
    .remove({ name: 'Bai Razvan' })
    .exec();
Unit
    .count()
    .exec()
    .then(console.log);
Unit
    .count({ age: { $gt: 2 } })
    .exec()
    .then(console.log);
