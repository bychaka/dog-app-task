import React, { Component } from 'react';
import './App.css';
import DogsList from './DogsList';
import DogArticle from './DogArticle';

const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all';

class App extends Component {
  fetchDogList() {
    return fetch(LIST_ALL_DOGS)
      .then(response => response.json())
      .then(function(data) {
        // let dogList = Object(data.message);
        // return dogList;

        Object.keys(data.message).forEach(key => {
          let value = data.message[key];
          console.log(`${key}: ${value}`);
        });
      });
  }

  // for (let [key, value] of iterable) {
  //   console.log(value);
  // }

  render() {
    // console.log(this.fetchDogList());
    return (
      <div>
        <h1 className="title">My React 2 App!</h1>
        <ul className="dog-list">
          <DogsList data={this.fetchDogList()} />
        </ul>
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
  // getDog(object) {
  //   let array = [];
  //   for (let key in object) {
  //     array.push(key);
  //   }
  //   console.info(array);
  // }
}

export default App;
