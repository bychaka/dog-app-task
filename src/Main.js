import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppRouter } from './AppRouters';

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/breeds" />} />
          <Route path="/breeds" component={AppRouter} />
        </Switch>
      </main>
    );
  }
}
