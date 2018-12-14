import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DogPage.css';

class DogPage extends Component {
  render() {
    const location = this.props.location.pathname;
    const urlImage = `https://dog.ceo/api/${location}/images/random`;
    console.log(location, urlImage);
    return (
      <div className="dog-page">
        <img
          className="dog-page-image"
          alt="this is image of dog"
          src="https://via.placeholder.com/500"
        />
        <p className="dog-name">{'Breed Dog'}</p>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    dogs: store.dogsList.dogs,
    // id: store.dogId.id,
  };
};

// const mapDispatchToProps = dispatch => ({
//   setDogId: dogsBreeds => dispatch(setDogId(dogsBreeds)),
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(DogPage);
