//CommonJS format with SystemJS loader dependencies
/*let player = require('./player.js');
 let game = require('./game.js');*/

//AMD format with RequireJS loader
define(['./player', './game'], function(player, game) {
    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function () {
        player.setName(document.getElementById('playername').value); // player.
        game.printGame(); // game.
    });

// add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function () {
        game.calculateScore(); // game.
    });

// set the default number of problems
    document.getElementById('problemCount').value = game.getProblemCount(); // game.
});


//ES6 import syntax
/*import { setName } from './player.js';
import * as game from './game.js';

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    setName(document.getElementById('playername').value); // player.
    game.printGame(); // game.
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore(); // game.
});

// set the default number of problems
document.getElementById('problemCount').value = game.getProblemCount(); // game.*/

//comment
