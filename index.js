const express = require(`express`)
const redis = require(`redis`)

// Express app
const app = express()
const PORT = 8090

// Redis setup
const client = redis.createClient({
	host: 'redis-server', // if not using docker it's usually sth like https://myredishost.com
	port: 6379, // default start up port for redis server
});

//Initialization
const KEY = `visits`
client.set(KEY, 0)

//Routes HTTP GET requests to the specified path with the specified callback functions.
app.get(`/`,(req,res)=>{
  client.get(KEY, (err, visitCount)=>{
    res.send(`Welcome to node application~~ you have visited the page ${visitCount} time.`)

    client.set(KEY, Number(visitCount) + 1)
  })
})


//Binds and listens for connections on the specified host and port.
app.listen(PORT)

console.log(`application running on port:https://${PORT}`)
