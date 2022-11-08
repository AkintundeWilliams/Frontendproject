import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import { findByLabelText } from '@testing-library/react';

export const Grid = styled.div;

export const Row = styled.div
  display: flex;
  ;

export const Col = styled.div
  display: flex;
;
function App() {
  const [token, setToken] = useState();

  console.log(token);
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {<Login/>}
        </Route>
        <Route path="/home" exact>
         {<Home/>} 
        </Route> 
        
      </Switch>
    </Router>
  );
}

export default App;
