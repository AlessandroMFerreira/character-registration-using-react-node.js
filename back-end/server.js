const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

require('./controller/movieCharacterController')(app)
require('./controller/userController')(app)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})