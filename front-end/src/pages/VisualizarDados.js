import React from 'react'
import SideBar from "../component/SideBar";
import api from '../util/api'
import {Container, Col} from 'react-bootstrap'
class VisualizarDados extends React.Component{
  constructor(props){
    super(props)
    this.getDados = this.getDados.bind(this)
    this.abrirPersonagem = this.abrirPersonagem.bind(this)
    this.state = {
      mostrar: false,
      dados: []
    }
  }
  async componentDidMount(){
    const user = window.sessionStorage.getItem('user')
    const password = atob(window.sessionStorage.getItem('password'))
    const request = new api(`/user/validation/${user}/${password}`)
    const response = await request.httpGetUser()

    if(!response){
      window.sessionStorage.removeItem('user')
      window.sessionStorage.removeItem('password')
      window.location.href="http://localhost:3000/"
      this.setState({
        mostrar : false
      })
    } else {
      this.setState({
        mostrar : true
      })
    }
  }
  abrirPersonagem (id){
    window.location.href=`http://localhost:3000/userArea/personagem/${id}`
  }
  async getDados(){
    const request = new api('/character/listAll')
    const response = await request.httpGet()
    const retorno = response.map((item, index) => {
      return (
        <Col key={index}>
          <div>
            <img src={item.url_imagem} style={{border: '2px solid', width: '200px', height: '300px', margin: '2%'}} alt="avatar" onClick={() => this.abrirPersonagem(item.id)}></img>
            <div>
              <span><b>Nome: </b>{item.nome}</span><br/>
              <span><b>Descrição: </b>{item.descricao_curta}</span>
            </div>
          </div>
        </Col>
      )
    })
    this.setState({
      dados: [...retorno]
    }) 

  }
  render(){
    if(this.state.dados.length > 9){
      this.setState({
        dados: this.state.dados.slice(0,9)
      })
    }

    let content = null
    if(this.state.mostrar){
      content  = 
      <div>
        <SideBar background="visualizar"/>
        <div style={{position: 'stick', paddingTop: '2%'}}>
          <div style={{marginLeft: '30%'}}>
            <button onClick={this.getDados} style={{paddingLeft: '5%', paddingRight: '5%', fontWeight: 'bold', backgroundColor: 'white', borderRadius: '0.5', border: '1px solid'}}>listar</button>
          </div>
          <div style={{marginLeft: '30%'}}>
            <Container style={{gridTemplateColumns: 'auto auto auto', display: 'grid'}} fluid>
              {this.state.dados}
            </Container>
          </div>
        </div>
      </div>
    } 
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default VisualizarDados