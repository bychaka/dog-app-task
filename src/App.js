import React, { Component } from 'react'
import './App.css'
import ListDogs from './ListDogs'

const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </div>
      <React.Fragment>
        <ListDogs data={this.getListDogs()} />
      </React.Fragment>
    )
  }

  getListDogs = () => {
    const data = fetch(LIST_ALL_DOGS).json()
    console.log(data)
    return data
  }
}

export default App
