//AMD format with RequireJS loader
define([], function() {
    let playerName = '';

    function logPlayer() {
        console.log(`The current player is ${playerName}.`);
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    return {
        logPlayer,
        setName,
        getName
    }
});

//CommonJS format with SystemJS loader exports
/*exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;*/

//ES6 export syntax
/*// private members
let playerName = '';

export function logPlayer() {
    console.log(`The current player is ${playerName}.`);
}

export function setName(newName) {
    playerName = newName;
}

export function getName() {
    return playerName;
}
//cc*/
