import React from 'react'
import SideBar from "../component/SideBar";
import api from '../util/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personagem from '../entity/Personagem'

class CadastrarPersonagem extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mostrar: false
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
        mostrar : true,
        tipo: response.tipo
      })
    }
  }


  async request(e){
    e.preventDefault()
    const nome = document.querySelector('#nome').value
    const descricao = document.querySelector('#descricao').value
    const descricaoCompleta = document.querySelector('#descricaoCompleta').value
    const url = document.querySelector('#url').value
    if(nome === null || nome === undefined || nome === ''){
      toast.error("Campo 'nome' não informado.", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } else if(descricao === null || descricao === undefined || descricao === ''){
      toast.error("Campo 'Descrição' não informado.", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } else if(descricaoCompleta === null || descricaoCompleta === undefined || descricaoCompleta === ''){
      toast.error("Campo 'Decrição completa' não informado.", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } else if(url === null || url === undefined || url === '') {
      toast.error("Campo 'url' não informado.", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } else {
      // instancia da classe Personagem
      let personagem = new Personagem(nome, descricao, descricaoCompleta, url)
      const request = new api(`/character/add`)
      const response = await request.httpPost(personagem.getObjeto())
      if(response.status === 201){
        document.querySelector('#nome').value = null
        document.querySelector('#descricao').value = null
        document.querySelector('#descricaoCompleta').value = null
        document.querySelector('#url').value = null
        toast.success("Cadastro realizado com sucesso!", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      } else{
        toast.error("Não foi possível realizar o cadastro", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      }
    }
  }

  visualizar(){
    const url = document.querySelector('#url').value
    if(url !== null && url !== undefined && url !== ''){
      window.open(url, '_blank')
    } else{
      toast.error("Informe uma url", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
  }

  render(){

    let content = null
    let tipo = this.state.tipo
    if(this.state.mostrar && tipo === 'TP1'){
      content  = 
      <div>
        <SideBar background="cadastro"/>
        <div style={{position: 'stick', backgroundColor: '#b9babd', backgroundSize: 'cover', height: '100vh', paddingTop: '2%'}}>
          <div style={{paddingLeft: '10%', textAlign: 'center'}}>
            <input type="text" style={{width: '60%'}} placeholder="Nome..." id="nome"></input><br/><br/>
            <input type="text" style={{width: '60%'}} placeholder="Descricao..." id="descricao"></input><br/><br/>
            <input type="text" style={{width: '60%'}} placeholder="Descrição completa..." id="descricaoCompleta"></input><br/><br/>
            <input type="text" style={{width: '50%'}} placeholder="Informe a url da imagem" id="url"></input><button style={{marginLeft: '3.6%'}} className="BtnCadastro" onClick={this.visualizar}>Visualizar</button><br/><br/>
            <button onClick={this.request} className="BtnCadastro">Cadastrar</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    } else {
      content = <div>
        <SideBar background="cadastro"/>
        <div style={{position: 'stick', backgroundColor: '#b9babd', backgroundSize: 'cover', height: '100vh', paddingTop: '2%'}}>
          <div style={{paddingLeft: '10%', textAlign: 'center'}}>
            <div>Você não possui permissão para cadastrar personagens. Contacte o adiministrador</div>
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

export default CadastrarPersonagem