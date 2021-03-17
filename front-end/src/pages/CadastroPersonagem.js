import React from 'react'
import SideBar from "../component/SideBar";

class CadastrarPersonagem extends React.Component{
  render(){
    return (
      <div>
        <SideBar/>
        <div className="FundoPgs">
          <div className="InputText">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
        </div>
      </div>
    )
  }
}

export default CadastrarPersonagem