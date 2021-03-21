import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import UserArea from './pages/UserArea'
import Componente404 from './pages/Componente404'
import CadastrarPersonagem from './pages/CadastroPersonagem'
import VisualizarDados from './pages/VisualizarDados'
import VisualizarPersonagem from './pages/VisualizarPersonagem'
import Cadastro from './pages/Cadastro'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/cadastro" exact={true} component={Cadastro} />
        <Route path="/userArea/home" exact={true} component={UserArea} />
        <Route path="/userArea/cadastro" exact={true} component={CadastrarPersonagem} />
        <Route path="/userArea/listar" exact={true} component={VisualizarDados} />
        <Route path="/userArea/personagem/:id" exact={true} component={VisualizarPersonagem} />
        <Route path='*' component={Componente404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
