import React, { Component } from 'react';
import DogArticle from './DogArticle';
import './DogList.css';
import * as http from 'axios';
import { connect } from 'react-redux';
import { setDogsBreeds } from '../actions/DogsPageActions';

const DOG_LIST_URL = 'https://dog.ceo/api/breeds/list/all';

class DogsList extends Component {
  onLoadDogs = () => {
    http
      .get(DOG_LIST_URL)
      .then(response => {
        const fetched = response.data.message;
        const keys = Object.getOwnPropertyNames(fetched);

        const allBreeds = [];
        // const breedsForImages = [];
        keys.forEach(breed => {
          if (Array.isArray(fetched[breed]) && fetched[breed].length) {
            fetched[breed].forEach(subBreed => {
              allBreeds.push(`${subBreed} ${breed}`);
              // breedsForImages.push(`${breed}-${subBreed}`);
            });
          } else {
            allBreeds.push(breed);
            // breedsForImages.push(breed);
          }
        });

        const dogs = allBreeds.map((value, index) => {
          return {
            id: index,
            breedName: value,
            breedImageUrl: `https://dog.ceo/api/breed/${value}/images/random`,
          };
        });

        // const dogsForImages = breedsForImages.map((value, index) => {
        //   return { id: index, breedNameImage: value };
        // });

        // this.props.setDogsBreedsForImages({ dogsForImages });
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
      <div className="dog-list">
        {/* <button type="button" onClick={this.onLoadDogs}>
          Load Fucking Dogs!
        </button> */}
        {dogsBreeds.map(breed => (
          <DogArticle key={breed.id} data={breed} />
          // <p key={breed.id}>{breed.breedName}</p>
        ))}
      </div>
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
