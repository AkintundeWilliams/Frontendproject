import './App.css';
import Login from './components/Login/Login';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';


function App() {
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
