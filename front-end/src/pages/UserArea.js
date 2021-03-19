import React from 'react'
import '../App.css'
import SideBar from "../component/SideBar";


class Menu extends React.Component{
  constructor(props){
    super(props)
    window.localStorage.setItem('nick', 'Alessandro')
  }

  getNickName () {
    return window.localStorage.getItem('nick')
  }
  render (){
    return(
      <div>
        <SideBar background="home"/>
        <div className="FundoPgs">
          Bem Vindo {this.getNickName()}
        </div>
      </div>
    )
  }
}

export default Menu