module.exports = (app) => {
  const service = require('../service/userService')

  //cadastrar novo usuario
  app.post('/user/new', async (req, res) =>{
    const retorno = await service.createNewUser(req.body)
	if(retorno === 'Já existe um usuário com este nome.'){
		 res.status(409).send()
	} else {
		 res.status(201).send()
	}
  })

  app.get('/user/validation/:user/:password', async(req, res) => {
    const retorno = await service.validateUser(req.params.user, req.params.password)
    res.json(retorno)
  })
}