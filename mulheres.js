const express = require("express")
const router = express.Router()
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const conectaBancoDeDados = require("./bancoDeDados")
conectaBancoDeDados()

const Mulher = require('./mulherModel')

//TiXIj2ODVW8f8kcb   senha mongodbCluster

//mongodb+srv://<username>:<password>@clustermulheres.1cyw3ol.mongodb.net/test

//mongodb+srv://<username>:<password>@clustermulheres.1cyw3ol.mongodb.net/?retryWrites=true&w=majority
const porta = 3333


async function mostraMulheres(req,res) {
    try {
        const mulheresVindasDoBD = await Mulher.find()
        res.json(mulheresVindasDoBD)

    }catch (erro) {
       console.log(erro)
    }

   
}

 async function criaMulher(req,res) {
    
    const novaMulher =  new Mulher({
        nome: req.body.nome ,
        imagem: req.body.imagem,
        minibio: req.body.minibio,
        citacao:req.body.citacao,

    })
    try {
      const mulherCriada = await novaMulher.save()
      res.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}
//patch 
async  function corrigeMulher(req,res) {
    try {
        const mulherEncontrada = await Mulher.findById(req.params.id)
        if(req.body.nome) {
            mulherEncontrada.nome = req.body.nome
        }
        if(req.body.minibio) {
            mulherEncontrada.minibio = req.body.minibio
        }
        if(req.body.imagem) {
            mulherEncontrada.imagem = req.body.imagem
        }
        if(req.body.citacao) {
            mulherEncontrada.citacao = req.body.citacao
        }
        const mulherAtualizada = await mulherEncontrada.save()
        res.json(mulherAtualizada)
    } catch (erro) {
        console.log(erro)
    }


}

async function deletaMulher(req,res) {
    try {
      await Mulher.findByIdAndDelete(req.params.id)
      res.json({message: "mulher deletada com sucesso"})
    } catch (erro) {
        console.log(erro)
    }
}
  
function mostraPorta() {

    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get("/mulheres", mostraMulheres))
app.use(router.post("/mulheres",criaMulher))
app.use(router.patch("/mulheres/:id", corrigeMulher))
app.use(router.delete("/mulheres/:id", deletaMulher))
app.listen(porta, mostraPorta)