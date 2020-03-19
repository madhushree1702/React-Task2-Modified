import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Form from './Form';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route exact path='/Form' component={Form} />
           <Route exact path='/Home' component={Home} /> 
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;