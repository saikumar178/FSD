const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end('Welcome to Nodejs');
    }else{
        res.writeHead(404, {'Content-Type':"text/plain"})
        res.end('404 -Invalid Route');
    }
})

server.listen(8000,()=>{
    console.log('Server is listening on http://localhost:8000');
})