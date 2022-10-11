const express = require("express")
const { ConnectionAcquireTimeoutError } = require("sequelize")
const app = express()
const User = require('./User')

app.use(express.json())

app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html")
})

app.post("/cadastrar",async function(req,res) {
    //console.log(req.body)
        
    await User.create(req.body)
    .then(() => {
         res.json({
            erro:false,
            mensagem: "usuario cadastrado com sucesso"
        })
    }).catch(() => {
        res.status(400).json({
            erro:true,
            mensagem: "Erro,usuario não cadastrado com sucesso"
        })
    })
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