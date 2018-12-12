import React, { Component } from 'react';
import './App.css';
import DogsList from './DogsList';

const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all';

class App extends Component {
  fetchDogsList() {
    return fetch(LIST_ALL_DOGS)
      .then(response => response.json())
      .then(function(data) {
        return data.message;
      });
  }

  getDogsList() {
    const allDogs = this.fetchDogsList().then(data => {
      // DogsReducer.setState(data);
    });
    console.info(allDogs);
    return allDogs;
  }

  // for (let [key, value] of iterable) {
  //   console.log(value);
  // }

  render() {
    return (
      <div>
        <h1 className="title">My React 2 App!</h1>
        <DogsList data={this.getDogsList()} />
      </div>
    );
  }
  // getListDogs(dogList) {
  //   for (let breed in dogList) {
  //     // порода в списке
  //     let dogBreed = document.createElement('li');
  //     dogBreed.innerHTML = breed;
  //     if (dogList[breed] !== 0) {
  //       let ul = document.createElement('ul');
  //       dogList[breed].forEach(element => {
  //         let breedItem = document.createElement('li');
  //         breedItem.classList.add('dog-list-item');
  //         breedItem.innerHTML = `${element} ${breed}`;
  //         ul.appendChild(breedItem);
  //       });
  //       dogBreed.appendChild(ul);
  //     }
  //     document.querySelector('.dog-list').appendChild(dogBreed);
  //     // console.log(`${breed} : ${dogList[breed]}`);
  //   }
  // }
}

export default App;
