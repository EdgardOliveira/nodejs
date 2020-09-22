const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

const jsonParser = bodyParser.json();
app.use(jsonParser)

const mensagens = [
    {
        id : 0,
        texto : "essa é uma mensagem",
    },
    {
        id : 1,
        texto: "essa é outra mensagem"
    },
];

//Listar todos
app.get('/mensagens', (req, res) => {
  res.json(mensagens.filter(Boolean))
})

//Cadastrar
app.post('/mensagens', (req, res) => {
    const mensagem = req.body.mensagem

    const id = mensagens.length
    
    mensagem.id = id
    
    mensagens.push(mensagem)

    console.log(mensagens)

    res.send(`A mensagem '${mensagem.texto}' foi criada com sucesso. Id ${mensagem.id}` )
})

//Listar um especifico
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id
    
    console.log(id)

    const mensagem = mensagens[id]

    res.send(`Listar uma mensagem especifica com o id ${id} '${mensagem}'`)
})

//Atualizar uma mensagem especifica
app.put('/mensagens/:id', (req, res) => {
    const id = req.params.id

    const texto = req.body.texto

    mensagens[id].texto = texto

    res.send(`Mensagem com Id ${id} atualizada para '${mensagens[id].texto}'`)
})

//Excluir uma mensagem específica
app.delete('/mensagens/:id', (req, res) => {
    const id = req.params.id

    delete mensagems[id]

    res.send('Excluir uma mensagem')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})