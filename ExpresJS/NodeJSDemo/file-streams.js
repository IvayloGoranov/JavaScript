let fs = require('fs')

//-----------------------------

fs.readFile('index.js', 'utf8', (err, data) => {
    console.log(data)
})

//---------------------------------------------

let readStream = fs.createReadStream('index.js')

let result = [] // try with ''

readStream.on('data', (data) => { result.push(data) })

readStream.on('end', () => console.log(result))

//--------------------------------------------------

let writeStream = fs.createWriteStream('index.copy.js')

readStream.on('data', (data) => writeStream.write(data))
readStream.on('end', () => console.log('ended'))

//-----------------------------------------------------
//Pipes:
//Allows fast read/write operations
//Reads chunks one by one and transfer them
//Like data/end but easier to write and use

readStream.pipe(writeStream)

//-------------------------------------
const zlib = require('zlib')

let gzip = zlib.createGzip()

readStream.pipe(gzip).pipe(writeStream)




