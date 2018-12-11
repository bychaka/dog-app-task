import React, { Component } from 'react';
import './App.css';
import ListDogs from './ListDogs';

const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">My React 2 App!</h1>
        <ul className="dog-list">{this.getListDogs()}</ul>
      </div>
    );
  }

  getListDogs() {
    fetch(LIST_ALL_DOGS)
      .then(response => response.json())
      .then(function(data) {
        let dogList = Object(data.message);
        for (let breed in dogList) {
          // порода в списке
          let dogBreed = document.createElement('li');
          dogBreed.innerHTML = breed;
          if (dogList[breed] !== 0) {
            let ul = document.createElement('ul');
            dogList[breed].forEach(element => {
              let breedItem = document.createElement('li');
              breedItem.classList.add('dog-list-item');
              breedItem.innerHTML = element;
              ul.appendChild(breedItem);
            });
            dogBreed.appendChild(ul);
          }
          document.querySelector('.dog-list').appendChild(dogBreed);
          // console.log(`${breed} : ${dogList[breed]}`);
        }
        console.info(dogList);
      });
  }

  // getDog(object) {
  //   let array = [];
  //   for (let key in object) {
  //     array.push(key);
  //   }
  //   console.info(array);
  // }
}

export default App;
