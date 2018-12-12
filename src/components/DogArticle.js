import React, { Component } from 'react';
import './DogArticle.css';

class DogArticle extends Component {
  render() {
    const { breed } = this.props.data;
    return (
      <div className="dog-article">
        <p className="dog-article-image">Image</p>
        <p className="dog-name">{breed}</p>
      </div>
    );
  }
}

export default DogArticle;
