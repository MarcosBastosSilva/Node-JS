const Sequelize = require('sequelize')
const banco = require('./banco')

const User = banco.define('users',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNule: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNule: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNule: false,
    }
})


//quando nao tem a tabela irá criar.
User.sync()

module.exports = User

