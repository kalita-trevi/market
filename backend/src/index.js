var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

// !IMPORTANATE Cors serve pra liberar o acesso ao meu backend
app.use(cors())

// !IMPORTANATE Permite backend enviar e receber JSON
app.use(express.json())

const produtos = [{
    nomeProduto: "arroz",
    qtdDisponivel: 10,
    valorUnitario: 25
}, {
    nomeProduto: "feijao",
    qtdDisponivel: 10,
    valorUnitario: 10
}, {
    nomeProduto: "oleo",
    qtdDisponivel: 10,
    valorUnitario: 10
}]

// Rotas
app.get('/estoque', (req, res) => {
    res.json(produtos)
})

// Iniciando apliccao
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})