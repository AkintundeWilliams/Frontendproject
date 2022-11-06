import React from 'react';
import '../../css/Login.css';
import LoginForm from './LoginForm';

const Login = () => {
  return (<>
    <div className='login'>
        <div className='jumbotron form-box'>
          <LoginForm></LoginForm>
        </div>
        </div>
    </>
  )
}

export default Login