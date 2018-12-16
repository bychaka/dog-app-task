import React, { Component } from 'react';
import './DogList.css';
import { connect } from 'react-redux';

import Loader from '../Loader/Loader';
import DogArticle from '../DogArticle/DogArticle';
import { DogsApiService } from '../../services/DogsApiService';
import { setDogsBreeds } from '../../actions/DogsPageActions';

class DogsList extends Component {
  isLoading = true;

  componentDidMount() {
    DogsApiService.getBreedsList()
      .then(breedsList => {
        this.isLoading = false;
        this.props.setDogsBreeds({ breeds: breedsList });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.isLoading) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <div className="dog-list">
          {this.props.breeds.map((breed, index) => (
            <DogArticle key={index} data={breed} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    breeds: store.dogsList.breeds,
  };
};

const mapDispatchToProps = dispatch => ({
  setDogsBreeds: dogsBreeds => dispatch(setDogsBreeds(dogsBreeds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogsList);
