import React from 'react';
import '../../css/Login.css';
import LoginForm from './LoginForm';

const Login = ({ setToken }) => {

  return (
  <>
    <div className='login'>
      <div className='jumbotron form-box'>
        <LoginForm setToken={setToken} ></LoginForm>
      </div>
    </div>
  </>
  )
}

export default Login