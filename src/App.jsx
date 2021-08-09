import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Campeao from './components/campeao/Campeao';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/" render={ () => <Campeao/>}/>
        <Route exact path="/campeoes" render={ () => <Campeao/>}/>
      </Switch>
    </Router>
  );
}

export default App;
