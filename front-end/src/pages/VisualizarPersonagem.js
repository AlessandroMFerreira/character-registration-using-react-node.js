import React from 'react'
import api from '../util/api'

class VisualizarPersonagem extends React.Component {

    state = {
      dados: null
    }

    goBack(){
      window.location.href="http://localhost:3000/userArea/listar"
    }

    async componentDidMount(){
      
      let id = window.location.href.split('/')[5]
      const request = new api(`/character/${id}`)
      const response = await request.httpGetId()
      const retorno =
      <div style={{marginLeft: '20%', marginTop: '2%'}}>
        <img src={response[0].url_imagem} alt="img" width="300px" height="400px"></img>
        <div>
          <b>Nome: </b>{response[0].nome}<br/>
          <b>Descrição: </b>{response[0].descricao_curta}<br/>
          <b>Descrição completa: </b>{response[0].descricao_completa}
        </div>
        <div>
          <button style={{backgroundColor: 'white', border: '1px solid', marginTop: '1%', padding: '0.6%'}} onClick={this.goBack}>Voltar</button>
        </div>
      </div>
      this.setState({
        dados: retorno
      })

    }
  render(){
    return(
      <div>
        {this.state.dados}
      </div>
    )
  }
}

export default VisualizarPersonagem