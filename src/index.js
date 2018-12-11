import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import 'reset-css';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>,
  document.getElementById('root')
);

console.log('hello');
