import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';

import DogsList from './DogsList';
import DogPage from './DogPage';
import NotFound from './NotFound';

// const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={DogsList} exact />
            <Route path="/breed/:breed" component={DogPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
