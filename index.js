const express = require('express')
const app = express()

app.get('/', function (request, response) {
    return response.send('Olá Dev! Bem vindo ao curso')
})
app.listen(3000)


//GET http://localhost:300/