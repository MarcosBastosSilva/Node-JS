const Sequelize = require('sequelize')

const sequelize = new Sequelize("cadastro","root"," ",{
    host:'localhost',
    dialect: 'mysql'
})


sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados conectado com sucesso")
}).catch(function(){
    console.log("erro: conexão com banco de dados nao conectada com sucesso ")
})

module.exports = sequelize
    
