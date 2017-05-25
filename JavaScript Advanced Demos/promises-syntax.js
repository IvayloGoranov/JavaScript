let p = new Promise(function(resolve, reject) {
    // Do an async task and then resolve or reject
    if (/* operation successful */)
        resolve('Success!');
    else /* operation failed */
        reject('Failure!');
});

p.then(function(result) {
    /* process the result (when the promise is resolved) */ })
    .catch(function(error) {
        /* handle the error (when the promise is rejected) */ });

Promise.all([p1, p2, p3])
    .then(function(result) {
        console.log("All tasks finished.");
        console.log("Result: " + result.join(", "));
        // nonExistingFunction();
    })
    .catch(function(error) {
        console.log("Some of the tasks failed.");
        console.log("Error: " + error);
    });

