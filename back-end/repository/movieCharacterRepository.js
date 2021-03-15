const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database: 'movies',
});


module.exports = {
  insertQuery: (query) => {
    return new Promise(resolve => {
      let retorno = null
      connection.query(query, (err, result) => {
        if(err){
          resolve(err)
        } else {
          console.log(JSON.parse(JSON.stringify(result)))
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  selectQuery: (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(err)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  selectByIdQuery: (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(err)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  updateQuery: (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(err)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  deleteById: (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(false)
        } else {
          resolve(true)
        }
      })
    })
  }
}