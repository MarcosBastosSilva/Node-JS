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

app.delete("/deletar/:id",async function(req,res){
//console.log("a")
    const id = req.params.id
    //console.log(id)
    const user = await User.findByPk(id)
    //console.log(user)
    await user.destroy(1)
    
    .then(() => {
        res.json({
           erro:false,
           mensagem: "deletado"
       })
   }).catch(() => {
       res.status(400).json({
           erro:true,
           mensagem: "não deletado"
       })
   })
    

})

app.put("/atualizar/:id", async function(req,res){

    const { id } = req.params
    const {name, email, nacionaliade} = req.body

    const user = await User.findOne({where:{ id }})
   
    if(!user){
        res.status(400).json({mensagem:"NENHUM USUARIO ENCONTRADO"})
    } else {
        const user = await User.update({name,email,nacionaliade},{where:{ id }})
    }
    res.status(200).json({ User })
})

app.get("/user/:id", async function(req,res){

    const id = req.params.id
    const user =  User.findByPk(id)
    .then((user_banco) => {
        res.json({
           erro:false,
           mensagem: "ID acessado com sucesso",
           User:user_banco
       })
   }).catch(() => {
       res.status(400).json({
           erro:true,
           mensagem: "Não foi possivel acessar o ID"
       })
   })
})

app.get("/users", async function(req,res){
    
    const id = req.params.id
    const user =  User.findAll()
    .then((user_banco) => {
        res.json({
           erro:false,
           mensagem: "Todos os ID foram acessados",
           User:user_banco
       })
   }).catch(() => {
       res.status(400).json({
           erro:true,
           mensagem: "Não foi possivel acessar os ID's"
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