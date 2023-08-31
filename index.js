const http = require('http')
const port = 8080
const fs = require('fs')
const server = http.createServer((req,res) => {
   if(req.method === 'GET' && req.url === '/public')
   {
        res.end("You are visiting the public page")
   }
   else if(req.method === 'GET' && req.url === '/data'){
    res.end("You are visiting the data page")
   }
   res.end("Server on")
})
server.listen(port,() => {
    console.log('Server started successfully')
})