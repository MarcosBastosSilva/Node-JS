const express = require("express")

const app = express()


app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html")
})

app.post("/cadastrar",function(req,res){
    res.send("pagina sobre cadastro")
})

app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html")
})

app.get("/blog", function(req,res){
    res.send("Pagina sobre o blog")
})

app.get("/contato", function(req,res){
    res.send("Pagina de contato")
})

app.listen(8080)