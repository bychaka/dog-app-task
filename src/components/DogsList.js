import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DogArticle from './DogArticle';
import './DogList.css';
import * as http from 'axios';
import { connect } from 'react-redux';
import { setDogsBreeds } from '../actions/DogsPageActions';

import Header from './Header';

const DOG_LIST_URL = 'https://dog.ceo/api/breeds/list/all';

class DogsList extends Component {
  onLoadDogs = () => {
    http
      .get(DOG_LIST_URL)
      .then(response => {
        const fetched = response.data.message;
        const keys = Object.getOwnPropertyNames(fetched);

        const allBreeds = [];
        const breedsForImages = [];
        keys.forEach(breed => {
          if (Array.isArray(fetched[breed]) && fetched[breed].length) {
            fetched[breed].forEach(subBreed => {
              allBreeds.push(`${subBreed} ${breed}`);
              // breedsForImages.push(`${breed}-${subBreed}`);
              breedsForImages.push(breed);
            });
          } else {
            allBreeds.push(breed);
            breedsForImages.push(breed);
          }
        });

        const dogs = allBreeds.map((value, index) => {
          return {
            id: index,
            breedName: value,
            breedUrl: breedsForImages[index],
            breedImageUrl: `https://dog.ceo/api/breed/${
              breedsForImages[index]
            }/images/random`,
          };
        });

        this.props.setDogsBreeds({ dogs });
      })
      .catch(err => {
        console.log('Error from onLoadDogs', err);
      });
  };

  render() {
    this.onLoadDogs();
    const dogsBreeds = this.props.dogs;

    return (
      <React.Fragment>
        <Header />
        <div className="dog-list">
          {dogsBreeds.map(breed => (
            <DogArticle key={breed.id} data={breed} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    dogs: store.dogsList.dogs,
  };
};

const mapDispatchToProps = dispatch => ({
  setDogsBreeds: dogsBreeds => dispatch(setDogsBreeds(dogsBreeds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogsList);
