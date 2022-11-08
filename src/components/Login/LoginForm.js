import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Dzlogo from '../../images/Dzlogo.png';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('/home', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
const LoginForm = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
//    const token = await loginUser({
  //    username,
    //  password
  //  });
    setToken('debug');
  }
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
        <Form.Control type="email" placeholder="E-Mail eingeben" onChange={e => setUserName(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div className='labelText'>
        <Form.Label>Passwort:</Form.Label>
      </div>
        <Form.Control type="password" placeholder="Passwort" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
    
      <br/>
      <div className='buttonCentralizer'>
      <Button variant="success" type="submit" onSubmit={handleSubmit}>
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
            Copyright ©{new Date().getFullYear()} DZ HYP
          </div>
        </Row>
     </Container>
     </div>  
  )
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default LoginForm