const express = require("express")

const app = express()

app.get("/", function(req,res){
    res.send("Gerenciador Financeiro")
})

app.get("/sobre-empresa", function(req,res){
    res.send("Pagina sobre a empresa")
})

app.get("/blog", function(req,res){
    res.send("Pagina sobre o blog")
})

app.get("/contato", function(req,res){
    res.send("Pagina de contato")
})

app.listen(8080)