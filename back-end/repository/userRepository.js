const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database: 'movies',
});


module.exports = {
  createNewUser: async (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(false)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  getUserByNickName: (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(false)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  validateUser:  (query) => {
    return new Promise (resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(false)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  },

  verifyType: (query) => {
    return new Promise(resolve => {
      connection.query(query, (err, result) => {
        if(err){
          resolve(false)
        } else {
          resolve(JSON.parse(JSON.stringify(result)))
        }
      })
    })
  }
}