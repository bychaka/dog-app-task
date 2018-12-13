import React, { Component } from 'react';
import './App.css';
import DogsList from './DogsList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <img className="logo" src="https://dog.ceo/img/dog-api-logo.svg" />
          <h1 className="title">Dog API application by Aliaksandr Bychak</h1>
        </div>
        <DogsList />
      </React.Fragment>
    );
  }
}

export default App;
