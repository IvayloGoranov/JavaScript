const fs = require("fs");

const dataFile = "storage.dat";

let storage = new Map();

function put(key, value) {
    if(typeof key != 'string') {
        throw TypeError("Key entry should be a string.");
    }

    if(storage.has(key)) {
        throw TypeError(`Key ${key} already present in the storage.`);
    }

    storage.set(key, value);
}

function get(key) {
    if(typeof key != 'string') {
        throw TypeError("Key entry should be a string.");
    }

    let value = storage.get(key);
    if(value == undefined) {
        throw TypeError(`Key ${key} is not present in the storage.`);
    }

    return value;
}


function update(key, newValue) {
    if(typeof key != 'string') {
        throw TypeError("Key entry should be a string.");
    }

    if(!storage.has(key)) {
        throw TypeError(`Key ${key} is not present in the storage.`);
    }

    storage.set(key, newValue);
}


function remove(key) {
    if(typeof key != 'string') {
        throw TypeError("Key entry should be a string.");
    }

    if(!storage.has(key)) {
        throw TypeError(`Key ${key} is not present in the storage.`);
    }

    storage.delete((key));
}


function clear() {
    storage.clear();
}


function save(callback) {
    let dataObject = {};
    for(let [key, value] of storage) {
        dataObject[key] = value;
    }

    let dataObjectAsJSON = JSON.stringify(dataObject);
    //fs.writeFileSync(dataFile, dataObjectAsJSON);

    fs.writeFile(dataFile, dataObjectAsJSON, (error) => {
        if(error) {
            console.log(error);
            return;
        }

        callback();
    })
}


function load(callback) {
    //let dataObjectAsJSON = fs.readFileSync(dataFile, 'utf8');

    return new Promise((resolve, reject) => {
        fs.readFile(dataFile, 'utf8', (error, dataObjectAsJSON) => {
            if(error) {
                reject(error);
                return;
            }

            let dataObject = JSON.parse(dataObjectAsJSON);
            for(let key of Object.keys(dataObject)){
                storage.set(key, dataObject[key]);
            }

            resolve();
        })
    });

    /*fs.readFile(dataFile, 'utf8', (error, dataObjectAsJSON) => {
        if(error) {
            console.log(error);
            return;
        }

        let dataObject = JSON.parse(dataObjectAsJSON);
        for(let key of Object.keys(dataObject)){
            storage.set(key, dataObject[key]);
        }

        callback();
    })*/
}

module.exports = { put, get, update, remove, clear, save, load };
