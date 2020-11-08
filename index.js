const express = require(`express`)

// Express app
const app = express()
const PORT = 8090

//Routes HTTP GET requests to the specified path with the specified callback functions.
app.get(`/`,(req,res)=>{
  res.send(`Welcome to node application~~`)
})


//Binds and listens for connections on the specified host and port.
app.listen(PORT)

console.log(`application running on port:https://${PORT}`)
