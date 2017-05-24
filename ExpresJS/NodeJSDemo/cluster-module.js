let cluster = require('cluster')
let http = require('http')
let cpus = require('os').cpus().length

if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork()
    }
} else {
    http.createServer((request, response) => {
        for(let handler of handlers) {
            if(!handler(request, response)) {
                break;
            }
        }
    }).listen(3000);
}

