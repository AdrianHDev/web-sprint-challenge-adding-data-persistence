// start your server here
const server = require('./api/server')
const port = process.env.PORT || 5000 

server.listen(port, '0.0.0.0', () => {
    console.log("Listening on port:", port)
})