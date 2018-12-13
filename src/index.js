import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import 'reset-css';
import './styles/index.scss';
import App from './components/App';
import DogsList from './components/DogsList';
import DogPage from './components/DogPage';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App}>
        {/* <Route path="dog-list" component={DogsList}> */}
        {/* <Route path="dog" component={DogPage} /> */}
        {/* </Route> */}
      </Route>
      {/* <Route path="*" component={NotFound} /> */}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
