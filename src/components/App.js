import React, { Component } from 'react';
import './App.css';
import ListDogs from './ListDogs';

const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React 2 App!</h1>
        <div>{this.getListDogs()}</div>
      </div>
    );
  }

  getListDogs() {
    let listDogs = fetch(LIST_ALL_DOGS);
    const data = listDogs.json();
    console.log(data.message);
  }
}

export default App;
