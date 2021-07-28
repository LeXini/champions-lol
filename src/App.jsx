import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/" render={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
