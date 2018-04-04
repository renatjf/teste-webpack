import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home';
import Component01 from './Component1';
import Component02 from './Component2';

export default () => (
  <Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Component01" component={Component01}/>
    <Route exact path="/Component02" component={Component02}/>
  </div>
</Router>
);