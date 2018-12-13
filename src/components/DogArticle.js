import React, { Component } from 'react';
import DogPage from './DogPage';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './DogArticle.scss';

class DogArticle extends Component {
  handleSubmit(e) {
    // e.preventDefault()
    // const value = e.target.elements[0].value.toLowerCase()
    // this.context.router.push(`/genre/${value}`)
    console.log('ololo');
  }
  render() {
    const breedName = this.props.data.breedName;
    const breedImageUrl = this.props.data.breedImageUrl;
    return (
      <div className="dog-article">
        <div className="image-container">
          <img
            className="dog-article-image"
            alt="this is image of dog"
            src="https://via.placeholder.com/100"
          />
        </div>
        <p className="dog-name">{breedName}</p>
        <p className="dog-name">{breedImageUrl}</p>
        <Link
          to="/dog"
          className="dog-article-link"
          onClick={this.handleSubmit}
        >
          more
        </Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    breed: store.breed,
  };
};

export default connect(mapStateToProps)(DogArticle);
