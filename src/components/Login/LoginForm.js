import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Dzlogo from '../../images/Dzlogo.png';



const LoginForm = () => {

  return (
    <div>
    <Container>
        <Row>
           <Col>
            <div className='anmeldungCentralizer'>
                <h1>LOGIN</h1>
            </div>
            </Col>
            
        </Row>
        <hr/>
        <br/>
        <Row>
            <Col>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className='labelText'>
        <Form.Label>Benutzername:</Form.Label>
        </div>
        <Form.Control type="email" placeholder="Benutzername eingeben" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div className='labelText'>
        <Form.Label>Passwort:</Form.Label>
      </div>
        <Form.Control type="password" placeholder="Passwort" />
      </Form.Group>
    
      <br/>
      <div className='buttonCentralizer'>
      <Button variant="success" type="submit">
        Anmelden
      </Button>
      </div>
    </Form>
            </Col>
        </Row>
        <br/>
        <hr/>
        <Row>
          <div className='logoCentralizer'>
            <Col>
                <img src={Dzlogo} alt='logo' height={20} width={120}/>
            </Col>
          </div>
          <br/>
          <div className='copyRight'>
            Copyright © DZ HYP {new Date().getFullYear()}
          </div>
        </Row>
     </Container>
     </div>  
  )
}

export default LoginForm