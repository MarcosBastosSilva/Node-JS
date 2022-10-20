const express = require('express')
const app  = express()
const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost/TesteNo1')
.then(() =>{
    console.log("Conexão com mongo db sucedida")
}).catch((erro) => { 
    console.log("Conexão não foi realizada com sucesso.")
})



app.get("/", (req,res) => {
    return res.json({titulo:"CRIANDO API"})
})


app.listen(8080)