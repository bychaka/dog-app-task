import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
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
    const settings = {
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    if (this.isLoading) {
      return <Loader />;
    }
    return (
      <div className="dog-page">
        <p className="breed-name">{this.props.images.breed}</p>
        <div className="dog-slider">
          <Slider {...settings}>
            {this.props.images.images.map((imageUrl, key) => (
              <div key={key} className="slider-item">
                <img
                  className="slider-image"
                  src={imageUrl}
                  alt={this.props.images.breed}
                />
              </div>
            ))}
          </Slider>
        </div>
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
