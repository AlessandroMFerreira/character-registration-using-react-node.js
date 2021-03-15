module.exports = (app) => {
  const service = require('../service/userService')

  //cadastrar novo usuario
  app.post('/user/new', async (req, res) =>{
    const retorno = await service.createNewUser(req.body)
    res.json(retorno)
  })

  app.get('/user/validation/:id/:password', async(req, res) => {
    const retorno = await service.validateUser(req.params.id, req.params.password)
    res.json(retorno)
  })
}