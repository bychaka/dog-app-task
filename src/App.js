import React, { Component } from 'react';

import AppHeader from './components/AppHeader';
import { Main } from './Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
