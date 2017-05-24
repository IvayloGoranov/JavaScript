let form = new formidable.IncomingForm()

form.parse(req, (err, fields, files) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(fields) // examine and use
    console.log(files) // examine and use with fs.rename for example
})

