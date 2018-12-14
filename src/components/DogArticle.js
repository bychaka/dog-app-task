import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './DogArticle.scss';

class DogArticle extends Component {
  render() {
    const breedName = this.props.data.breedUrl;
    // const breedImageUrl = this.props.data.breedImageUrl;
    return (
      <div className="dog-article">
        <p className="dog-name">{breedName}</p>
        {/* <p className="dog-name">{breedImageUrl}</p> */}
        <Link to={`/breed/${breedName}`} className="dog-article-link">
          view more
        </Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    breed: store.breed,
  };
};

export default connect(mapStateToProps)(DogArticle);
