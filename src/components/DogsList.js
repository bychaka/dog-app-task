import React, { Component } from 'react';
import DogArticle from './DogArticle';

// const LIST_ALL_DOGS = 'https://dog.ceo/api/breeds/list/all';

class DogsList extends Component {
  render() {
    // return <div className="App">Списка нет!</div>;
    const { data } = this.props;
    // let temp = Object.keys(data);
    let articleTemplate;

    Object.keys(this.props.data).forEach(key => {
      let value = data[key];
      console.log(`${key}: ${value}`);
    });

    for (let breed in data) {
      // // порода в списке
      // let dogBreed = document.createElement('li');
      // dogBreed.innerHTML = breed;
      // if (dogList[breed] !== 0) {
      //   let ul = document.createElement('ul');
      //   dogList[breed].forEach(element => {
      //     let breedItem = document.createElement('li');
      //     breedItem.classList.add('dog-list-item');
      //     breedItem.innerHTML = `${element} ${breed}`;
      //     ul.appendChild(breedItem);
      //   });
      //   dogBreed.appendChild(ul);
      // }
      // document.querySelector('.dog-list').appendChild(dogBreed);
      console.log(`${breed} : ${dogList[breed]}`);
    }

    return <div className="App">Списка нет!</div>;
  }
}

export default DogsList;

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
