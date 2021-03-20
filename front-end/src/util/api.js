const baseUrl = 'http://localhost:'
const port = '8080'

class Api {
  constructor(url){
    this.route = url
  }

  httpGet(){
    const config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': ''
      }
    }
    const url = `${baseUrl}${port}${this.route}`

    const retorno = fetch(url, config).then(response => response.json()).catch(err => console.log(err))

    return retorno
  }

  httpGetId(){
    const config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': ''
      }
    }
    const url = `${baseUrl}${port}${this.route}`

    const retorno = fetch(url, config).then(response => response.json()).catch(err => console.log(err))

    return retorno
  }
  httpPost(obj){
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': ''
      },
      body: JSON.stringify(obj)
    }
    const url = `${baseUrl}${port}${this.route}`

    const retorno = fetch(url, config).catch(err => console.log(err))

    return retorno
  }
  httpPut(object){
    const config = {
      mode: 'no-cors',
      method: 'PUT',
      body: object
    }
    const url = `${baseUrl}${port}${this.route}`

    const retorno = fetch(url, config)

    return retorno
  }
  httpDelete(){
    const config = {
      mode: 'no-cors',
      method: 'DELETE',
    }
    const url = `${baseUrl}${port}${this.route}`

    const retorno = fetch(url, config)

    return retorno
  }

}

export default Api