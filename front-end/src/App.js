import './App.css';

function redirect(){
  window.location.href = 'http://localhost:3000/userArea/home'
}

function App() {

  return (
    <div className="Fundo">
      <div className="Card">
        <div className="Row">
          <input type="text" placeholder="Usuario"></input>
        </div>
        <br/>
        <div className="Row">
          <input type="password" placeholder="Senha"></input>
        </div>
        <br/>
        <div className="Row JustifyCenter">
        <button className="Btn" onClick={redirect}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
