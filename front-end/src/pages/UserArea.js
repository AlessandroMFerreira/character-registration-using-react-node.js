import React from 'react'
import '../App.css'
import SideBar from "../component/SideBar";
import api from '../util/api'


class Menu extends React.Component{

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
        mostrar : true
      })
    }
  }

  getNickName () {
    return window.sessionStorage.getItem('user')
  }
  render (){
    let content = null
    if(this.state.mostrar){
      content  = 
      <div>
          <SideBar background="home"/>
          <div style={{marginLeft: '30%'}}>
            Bem Vindo <b>{this.getNickName()}</b>
          </div>
        </div>
    } 
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Menu