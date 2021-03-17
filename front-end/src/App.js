import './App.css';


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
        <button className="Btn">Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
