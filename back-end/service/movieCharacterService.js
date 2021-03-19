const repositorio = require('../repository/movieCharacterRepository')
const table = 'movie_character'
const userService = require('../service/userService')
const avatarDir = 'C:\Temp\images'

module.exports =  {
  insertQuery : async (entity) => {
    let retorno = null
    let campos = ''
    let valor = ''
  
    Object.getOwnPropertyNames(entity).forEach(x => {
      campos += `${x},`
      valor += `'${entity[x]}',`
    })
    campos = campos.substr(0, campos.length - 1)
    valor = valor.substr(0, valor.length - 1)
    let query = `INSERT INTO ${table} (${campos}) VALUES (${valor})`
    retorno = await repositorio.insertQuery(query)
    return retorno
  },

  selectQuery: async () => {
    let retorno = null
    let query = `SELECT * FROM ${table}`
    retorno = await repositorio.selectQuery(query)

    return retorno
  },

  selectByIdQuery: async (id) => {
    let retorno = null
    let query  = `SELECT * FROM ${table} WHERE id = ${id}`
    retorno = await repositorio.selectByIdQuery(query)

    return retorno
  },

  updateQuery: async (id, entity, userId) => {
    // verifica se o usuario possui permissao para adicionar novos registros
    let verify = await userService.verifyType(userId)
    if(!verify || verify[0].tipo != 'TP1'){
      return false
    } else {
      let retorno = null
    let campoValor = ''
    entity = JSON.parse(JSON.stringify(entity))

  
    Object.getOwnPropertyNames(entity).forEach(x => {
      campoValor += `${x} = '${entity[x]}',`
    })
    campoValor = campoValor.substr(0, campoValor.length - 1)
    let query = `UPDATE ${table} set ${campoValor} WHERE id = ${id}`

    retorno = await repositorio.updateQuery(query)

    return retorno
    }
  },

  deleteById: async (id, userId) => {
    // verifica se o usuario possui permissao para adicionar novos registros
    let verify = await userService.verifyType(userId)
    if(!verify || verify[0].tipo != 'TP1'){
      return false
    } else {
      let retorno = null
      let query = `DELETE FROM ${table} WHERE id = ${id}`
      retorno = await repositorio.deleteById(query)
      return retorno
    }
  }
}