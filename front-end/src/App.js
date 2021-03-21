import './App.css';
import api from '../src/util/api'
import { ToastContainer, toast } from 'react-toastify';

async function redirect(){
  const user = document.querySelector('#usuario').value
  const password = document.querySelector('#senha').value
  const request = new api(`/user/validation/${user}/${password}`)
  const response = await request.httpGetUser()
  console.log(response)
  if(response){
    window.sessionStorage.setItem('user', user)
    window.sessionStorage.setItem('password', btoa(password))
    window.sessionStorage.setItem('tipo', response.tipo)
    window.location.href="http://localhost:3000/userArea/home"
  } else {
    toast.error("Usuário ou senha inválidos.", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  }
}

function Cadastro() {

  return (
    <div className="Fundo">
      <div className="Card">
        <div className="Row">
          <input type="text" placeholder="Usuario" id="usuario"></input>
        </div>
        <br/>
        <div className="Row">
          <input type="password" placeholder="Senha" id="senha"></input>
        </div>
        <br/>
        <div className="Row JustifyCenter">
          <a href="/#" onClick={redirect} className="A">Entre</a>&nbsp;ou&nbsp;
          <a  href="/cadastro" className="A">Cadastre-se</a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cadastro;
