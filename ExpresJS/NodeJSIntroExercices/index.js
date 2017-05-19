const storage = require("./storage");

storage.put("apple", 1.5);
storage.put("banana", 2.8);
storage.put("beer", 1);
storage.put("vodka", 14);
storage.put("whiskey", 22.50);
storage.put("bread", 1.4);
storage.put("cigarettes", 3.4);

console.log(storage.get("apple"));
storage.update("apple", 1.8);
console.log(storage.get("apple"));
storage.remove("cigarettes");

try{
    console.log(storage.get("cigarrets"));
}
catch(ex) {
    console.log("We do not sell cigarettes any more.");
}

storage.save(() => {
    storage.clear();
    /*storage.load(() => {
        console.log(storage.get("apple"));
        console.log(storage.get("banana"));
    });*/
    storage.load().then(() => {
        console.log(storage.get("apple"));
        console.log(storage.get("banana"));
    }).catch(error => console.log(error));
});

