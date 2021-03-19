module.exports = (app) => {

  const service = require('../service/movieCharacterService')

  app.post('/character/add', async (req, res) => {
    const retorno = await service.insertQuery(req.body)
    if(retorno){
      res.status(201).send()
    } else {
      res.status(401).send()
    }
  })

  app.get('/character/listAll', async (req, res) => {
    const retorno = await service.selectQuery()
    res.json(retorno)
  })

  app.get('/character/:id', async (req, res) => {
    const retorno = await service.selectByIdQuery(req.params.id)
    res.json(retorno)
  })

  app.put('/character/:id/:userId', async (req, res) => {
    const retorno = await service.updateQuery(req.params.id, req.body, req.params.userId)
    if(retorno){
      res.json(retorno)
    } else {
      res.status(401).send()
    }
  })

  app.delete('/character/:id/:userId', async (req, res) => {
    const retorno = await service.deleteById(req.params.id, req.params.userId)
    if(retorno){
      res.json('PERSONAGEM DELETADO COM SUCESSO!')
    } else {
      res.status(401).send()
    }
  })
}