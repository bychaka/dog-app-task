import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './DogArticle.scss';

class DogArticle extends Component {
  render() {
    const breed = this.props.data;
    return (
      <div className="dog-article">
        <div className="image-container">
          <img
            className="dog-article-image"
            alt="this is image of dog"
            src="https://via.placeholder.com/100"
          />
        </div>
        <p className="dog-name">{breed}</p>
        <Link className="dog-article-link" to="/dog-page">
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
