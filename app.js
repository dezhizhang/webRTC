'use strict'
 const http = require('http');

 let app = http.createServer((req,res) => {
     res.writeHead(200,{'Content-Type':'text/html'});
     res.end('index')
 });

 app.listen(8082,() => {
     console.log('server is run ')
 })
 


