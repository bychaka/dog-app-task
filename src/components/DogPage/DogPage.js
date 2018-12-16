import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DogPage.css';

import Loader from '../Loader/Loader';
import { DogsApiService } from '../../services/DogsApiService';
import { setBreedImages } from '../../actions/DogsPageActions';

class DogPage extends Component {
  isLoading = true;

  componentDidMount() {
    DogsApiService.getImagesByBreed(this.props.match.params.breed)
      .then(images => {
        this.isLoading = false;
        this.props.setBreedImages({
          breed: this.props.match.params.breed,
          images,
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }
  render() {
    if (this.isLoading) {
      return <Loader />;
    }
    const location = this.props.location.pathname;
    const urlImage = `https://dog.ceo/api/${location}/images/random`;
    console.log(location, urlImage);
    return (
      <div className="dog-page">
        {/* <img
          className="dog-page-image"
          alt="this is image of dog"
          src="https://via.placeholder.com/500"
        /> */}
        <p className="dog-name">{this.props.images.breed}</p>
        {this.props.images.images.map((imageUrl, key) => (
          <div key={key}>
            <img src={imageUrl} alt={this.props.images.breed} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    images: store.breedImages,
  };
};

const mapDispatchToProps = dispatch => ({
  setBreedImages: images => dispatch(setBreedImages(images)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogPage);
