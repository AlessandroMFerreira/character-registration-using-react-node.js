import React from 'react'
import SideBar from "../component/SideBar";
import api from '../util/api'
import {Container, Col} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';


class VisualizarDados extends React.Component{
  constructor(props){
    super(props)
    this.getDados = this.getDados.bind(this)
    this.abrirPersonagem = this.abrirPersonagem.bind(this)
    this.state = {
      mostrar: false,
      dados: [],
      paginado: null,
      paginaAtual: 1,
      totalPaginas: 0
    }
  }
  componentWillUnmount (){
    this.setState({})
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
    let paginado = null
    if(retorno.length > 9){
      paginado = 
      <div>
        <button className="BtnCadastro" onClick={() => this.anterior()}>anterior</button>&nbsp;&nbsp;
        <button className="BtnCadastro" onClick={() => this.proximo()}>próximo</button>
      </div>
    }
    let totalPaginas = retorno.length/9
    let decimal = String(totalPaginas).split('.')
    if(Number(decimal[1]) > 0){
      totalPaginas = Math.round(retorno.length/9) + 1
    } else {
      totalPaginas = Number(decimal[0])
    }
    this.setState({
      totalPaginas: totalPaginas,
      dados: [...retorno],
      dadosMostrar: retorno.splice(0,9),
      paginado: paginado
    })
  }
  proximo(){
    const dados = Array.from(this.state.dados)
    if(this.state.paginaAtual < this.state.totalPaginas){
      let pagina = this.state.paginaAtual + 1
      let inicio = ((9 * pagina) - 9)
      this.setState({
        dadosMostrar: dados.splice(inicio, 9),
        paginaAtual: pagina
      })
    } else {
      toast.info("Não há mais dados para mostrar...", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
  }
  anterior (){
    const dados = Array.from(this.state.dados)
    if(this.state.paginaAtual > 1){
      let pagina = this.state.paginaAtual - 1
      let inicio = ((9 * pagina) - 9)
      this.setState({
        dadosMostrar: dados.splice(inicio, 9),
        paginaAtual: pagina
      })
    } else {
      toast.info("Você está no início da lista...", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
  }
  render(){
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
              {this.state.dadosMostrar}
            </Container>
            <div style={{marginTop: '4%', marginBottom: '3%'}}>
                {this.state.paginado}
            </div>
          </div>
        </div>
        <ToastContainer />
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