const bcrypt = require('bcrypt')
const repositorio = require('../repository/userRepository')
const table = 'sys_user'

module.exports = {

  createNewUser: async (entity) => {
    const force = 10
    entity = JSON.parse(JSON.stringify(entity))

    function hashPassword(password){
      return new Promise(resolve => {
        bcrypt.hash(password, force, (err, encrypted) => {
          if(err){
            resolve(false)
          } else {
            resolve(encrypted)
          }
        })
      })
    }

    let password = await hashPassword(entity.senha)
    if(!password){
      return 'Não foi possível cadastrar o usuário.'
    } else {
      // verifica se usuario ja existe no banco
      let nickNameFindQuery = `SELECT usuario FROM ${table} WHERE usuario = '${entity.usuario}'`
      let check = await repositorio.getUserByNickName(nickNameFindQuery)
      if(check.length == 0){
      let retorno = null
      let campos = ''
      let values = ''
      entity.senha = password

      Object.getOwnPropertyNames(entity).forEach(x => {
        campos += `${x},`
        values += `'${entity[x]}',`
      })

      campos = campos.substr(0, campos.length - 1)
      values = values.substr(0, values.length - 1)

      let query = `INSERT INTO ${table} (${campos}) VALUES (${values})`
      retorno = await repositorio.createNewUser(query)

      return 'Usuário cadastrado com sucesso.'
      } else {
        return 'Já existe um usuário com este nome.'
      }
    }
  },

  validateUser: async (user, password) => {
    let retorno = ''
    let query = `SELECT usuario, senha, tipo FROM ${table} WHERE usuario = '${user}'`
    retorno = await repositorio.validateUser(query)
    if(retorno.length > 0){
      function compare(){
        return new Promise(resolve => {
          bcrypt.compare(password, retorno[0].senha, (err, result) => {
            if(result){
              resolve(true)
            } else {
              resolve(false)
            }
          })
        })
      }
      const validar = await compare()
      if(validar){
		  const obj = {
			usuario: retorno[0].usuario,
			tipo: retorno[0].tipo
		  }
		  return obj
	  } else {
		  return false
	  }
    } else {
      return false
    }
  },

  verifyType: async (id) => {
    let retorno = ''
    let query = `SELECT tipo FROM sys_user WHERE id = ${id}`
    retorno = await repositorio.verifyType(query)
    return retorno
  }
}