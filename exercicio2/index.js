const express = require("express")

const app = express()

app.get("/", function(req,res){
    res.end("Gerenciador Financeiro")
})

app.listen(8080)