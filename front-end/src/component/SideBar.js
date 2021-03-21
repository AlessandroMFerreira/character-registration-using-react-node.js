import React from 'react'
import '../App.css'

class SideBar extends React.Component{
  sair(){
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('password')
    window.sessionStorage.removeItem('tipo')
    window.location.href="http://localhost:3000/"
  }
  render(){
    let styleHome = {}
    let styleCadastro = {}
    let styleVisualizar = {}
    if(this.props.background === 'visualizar'){
      styleVisualizar = {
        backgroundColor: 'rgba(220, 53, 70, 0.5)'
      }
      styleHome = {}
      styleCadastro = {}
    } else  if(this.props.background === 'cadastro'){
      styleCadastro = {
        backgroundColor: 'rgba(220, 53, 70, 0.5)'
      }
      styleHome = {}
      styleVisualizar = {}
    } else if(this.props.background === 'home'){
      styleHome = {
        backgroundColor: 'rgba(220, 53, 70, 0.5)'
      }
      styleCadastro = {}
      styleVisualizar = {}
    } else {
      styleCadastro = {}
      styleVisualizar = {}
      styleHome = {}
    }
    return(
      <div className="Sidebar">
        <a href="/userArea/home" id="Home" style={styleHome}>Home</a>
        <a href="/userArea/cadastro" id="Cadastro" style={styleCadastro}>Cadastrar personagem</a>
        <a href="/userArea/listar" id="Listar" style={styleVisualizar}>Listar personagens</a>
        <a href="/" id="Listar" onClick={this.sair}>Sair</a>
      </div>
    )
  }
}

export default SideBar