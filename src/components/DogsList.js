import React, { Component } from 'react';
import DogArticle from './DogArticle';
import './DogList.css';

class DogsList extends Component {
  renderDogArticles() {
    for (let n = 25; n < 25; n++) {}
  }
  render() {
    const { data } = this.props;
    const DogsList = () => {};
    return (
      <div className="dog-list">
        <DogArticle />
        <DogArticle />
        <DogArticle />
        <DogArticle />
        <DogArticle />
      </div>
    );
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
