import React from 'react'
import '../App.css'

class SideBar extends React.Component{
  render(){
    return(
      <div className="Sidebar">
        <a href="/userArea/home" id="Home">Home</a>
        <a href="/userArea/cadastro" id="Cadastro">Cadastrar personagem</a>
        <a href="/userArea/listar" id="Listar">Listar personagens</a>
      </div>
    )
  }
}

export default SideBar