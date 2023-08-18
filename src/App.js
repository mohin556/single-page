import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbars from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route
          path="/"
          exact component={Home} 
          
          />
       
        <Route path="/product" component={Product} />
    
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  

    </div>
  );
}

export default App;
