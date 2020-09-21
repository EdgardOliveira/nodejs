const express = require('express')
const app = express()
const port = 3000

//Listar todos
app.get('/mensagens', (req, res) => {
  res.send('Exibir toda a lista de mensagens')
})

//Cadastrar
app.post('/mensagens', (req, res) => {
    res.send('Criar uma mensagem')
})

//Listar um especifico
app.get('/mensagens/:id', (req, res) => {
    res.send('Listar uma mensagem especifica')
})

//Atualizar uma mensagem especifica
app.put('/mensagens/:id', (req, res) => {
    res.send('Atualizar uma mensagem')
})

//Excluir uma mensagem específica
app.delete('/mensagens/:id', (req, res) => {
    res.send('Excluir uma mensagem')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})