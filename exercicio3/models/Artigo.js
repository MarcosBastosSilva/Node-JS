const moongose = require('mongoose')

const Artigo = new moongose.Schema({
    titulo:{
        type:String,
        required:true
    },
    conteudo:{
        type:String,
        required:true
    },
    

},
{
    timestamps: true,
})

moongose.model('artigo', Artigo)