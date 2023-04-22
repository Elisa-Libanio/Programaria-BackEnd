const express = require("express")
const router = express.Router()
const app = express()

const porta = 3333

function mostraMulher(req, res) {

    res.json({
        nome: "Elisa",
        // imagem: "",
        minibio: "Desenvolvedora e instrutora"
    })

}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta)