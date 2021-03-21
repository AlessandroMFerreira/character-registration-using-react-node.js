import '../App.css';
import api from '../util/api'
import { ToastContainer, toast } from 'react-toastify';
import Usuario from '../entity/Usuario'

async function salvar(){
  const nome = document.querySelector('#nome').value
  const usuario = document.querySelector('#usuario').value
  const senha = document.querySelector('#senha').value
  const tipo = document.querySelector('input[name="tipo"]:checked').value
  const request = new api('/user/new')
  const obj = new Usuario(nome,usuario, senha, tipo)
  const response = await request.httpCadastrar(obj)
  if(response.status === 201){
    document.querySelector('#nome').value = null
    document.querySelector('#usuario').value = null
    document.querySelector('#senha').value = null
    toast.success("Usuário cadastrado com sucesso.", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  } else {
    toast.error("Erro.", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  }
}

function App() {

  return (
    <div className="Fundo">
      <div className="Card">
      <div className="Row">
          <input type="text" placeholder="Nome" id="nome"></input>
        </div>
        <br/>
        <div className="Row">
          <input type="text" placeholder="Usuario" id="usuario"></input>
        </div>
        <br/>
        <div className="Row">
          <input type="password" placeholder="Senha" id="senha"></input>
        </div>
        <br/>
        <div className="Row">
          <input type="radio" id="tipo1" name="tipo" value="TP1" />
          <label htmlFor="tipo1">Tipo 1</label><br></br>
          <input type="radio" id="tipo2" name="tipo" value="TP2" />
          <label htmlFor="tipo2">Tipo 2</label><br></br>
        </div>
        <br/>
        <div className="Row JustifyCenter">
          <span href="/#" onClick={salvar} className="A">Salvar</span>&nbsp;ou&nbsp;
          <a  href="/" className="A">Voltar</a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
