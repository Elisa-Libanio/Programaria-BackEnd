const mongoose = require("mongoose")
require("dotenv").config()

//  const conectaBancoDeDados  = () => {

// }

async function conectaBancoDeDados() {
    try {
        console.log('a conexao com o bd iniciou')

    await mongoose.connect(process.env.MONGO_URL)
    console.log('a conexao com o bd feita com sucesso')

    } catch(erro) {
    console.log(erro)
    }  
}

module.exports = conectaBancoDeDados