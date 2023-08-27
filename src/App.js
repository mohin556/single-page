import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbars from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer';

import Contact from './components/Extra/Extra';
import Product from './components/Product/Product';
import Login from './components/Login/Login';

import From from './components/From/From';
import Extra from './components/Extra/Extra';



function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        {/* <Route
          path="/"
          exact component={Home} 
          
          /> */}
       
        <Route path="/product" component={Product} />
        <Route exact path="/" component={From} />
        <Route path="/extra" component={Extra} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  

    </div>
  );
}

export default App;
