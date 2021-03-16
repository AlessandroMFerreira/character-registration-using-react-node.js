import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UserLogin extends React.Component{
  
  
  render() {
    return(
      <Container md={12} lg={12} sm={6} xs={6}>
        <Row>
          <Form className="form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Informe seu usuário..."  className="input"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Informe sua senha..." className="input"/>
            </Form.Group>
            <button className="btn">entrar</button>
          </Form>
        </Row>

        <style type="text/css">
          {`
            .form {
              width: 100vw;
              heigth: 100vh;
              padding: 5%;
              background-color: #cccccc;
              border: 1px solid;
              box-shadow: 5px 10px;
              margin: 10%;
              border-radius: 5px;
            }

            .btn {
              background-color: white;
              color: black;
              border-color: black;
              box-shadow: unset;
            }

            .btn:focus {
              background-color: white;
              color: black;
              border-color: black;
              box-shadow: 1px 1px 1px black;
            }

            .input:focus{
              box-shadow: unset;
              border-color: black;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default UserLogin