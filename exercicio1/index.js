const http = require('http')

http.createServer(function(req,res){
    res.end('Criando um simples servidor')
}).listen(8080)

