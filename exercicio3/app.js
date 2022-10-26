const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


require("./models/Artigo")
const Artigo = mongoose.model('artigo')

const app = express()

app.use(express.json())




 mongoose.connect('mongodb://localhost/TesteNo1',{
    useNewUrlParser: true,
  useUnifiedTopology: true
 })
.then(() =>{
    console.log("Conexão com mongo db sucedida")
}).catch((erro) => { 
    console.log("Conexão não foi realizada com sucesso.")
})

app.get("/", async function (req,res)  {

    Artigo.find({})
    .then((artigo) => {
        return res.json(artigo)
    })
    .catch((erro) => {
        return res.status(400).json({
            error: true,
            mensagem: "houve um erro ao consultar."
        })
    })
})

app.get("/artigo/:id",async function(req,res) {

    Artigo.findOne({_id:req.params.id})
    .then((artigo) => {
        return res.json(artigo)
    })
    .catch((error) => {
        return res.status(400).json({
            erro: true,
            mensagem: "Encontramos um problema para a identificação do ID"
        })
    })    
})

app.post("/artigo", async function(req,res){
    const artigo = Artigo.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "O artigo nao pode ser cadastrado com sucesso"
        })
        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso"
        })
    })
});

app.put("/artigo/:id", async function(req,res){
    const artigo = Artigo.updateOne({_id: req.params.id}, req.body, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            mensagem:"erro ao tentar encontrar o ID"
        })
        return res.status(200).json({
            error:false,
            mensagem: "ID encontrado com sucesso."
        })
    })
})

app.delete("/artigo/:id",async function(req,res){
    const artigo = Artigo.deleteOne({_id: req.params.id}, req.body, (err) =>{
        if(err) return res.status(400).json({
            error:true,
            mensagem:"Não foi possivel apagar, favor verificar"
        })
        return res.status(200).json({
            error:false,
            mensagem:"O conteudo foi apagado com sucesso!"
        })
    })
})

app.listen(8080)