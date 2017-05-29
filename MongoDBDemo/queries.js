const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Unit = require("../models/Unit");

Unit.
    find({}).
    where('mainWeapon.name').equals('walking stick').
    where('life').gt(50).lt(80).
    where('type').in(['warrior', 'magician']).
    limit(10).
    sort('-life -mainWeapon.damage').
    select('type mainWeapon.name').
    exec().then((results) => {
        console.log(results);
    });

