import React from 'react'
import SideBar from "../component/SideBar";
import api from '../util/api'

class VisualizarDados extends React.Component{

  async getDados(e){
    e.preventDefault()
    const request = new api('/character/listAll')
    const response = await request.httpGet()
    console.log(response)

  }
  render(){
    return(
      <div>
        <SideBar background="visualizar"/>
        <div style={{position: 'stick', backgroundColor: '#b9babd', backgroundSize: 'cover', height: '100vh', paddingTop: '2%'}}>
          <div style={{marginLeft: '30%'}}>
            <button onClick={this.getDados}>listar</button>
            <div id="teste">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VisualizarDados