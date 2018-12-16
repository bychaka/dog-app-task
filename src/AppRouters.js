import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import DogsList from './components/DogList/DogsList';
import DogPage from './components/DogPage/DogPage';
import NotFound from './components/NotFound/NotFound';

export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/breeds" component={DogsList} />
        <Route path="/breeds/:breed" component={DogPage} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    );
  }
}
