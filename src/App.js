import React, { Component } from 'react'
import './App.css'
import ListDogs from './components/ListDogs'

const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>My React App!</h1>
      </React.Fragment>
    )
  }

  // getListDogs = () => {
  //   let listDogs = fetch(LIST_ALL_DOGS)
  //   const data = listDogs.json()
  //   console.log(data.message)
  //   return data
  // }
}

export default App
