const express = require("express")
const router = express.Router()
const app = express()

const porta = 3333

const mulheres = [
    {nome: "Elisa",
      img: '',
    minibio: "gente fina"},
    { nome: "Maria",
    minibio: "ninguem sabe ninguem viu"},
    {nome: "Getrudes",
minibio: "legal demais e muito doida "}
]
function mostraMulheres(req,res) {

     res.json(mulheres)
}
function mostraPorta() {

    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)