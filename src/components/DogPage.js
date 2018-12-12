// Object.keys(data).forEach(key => {
//   let value = data[key];
//   console.log(`${key}: ${value}`);
// });

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogPage.css';

class DogPage extends Component {
  render() {
    return (
      <div className="dog-article">
        <img
          className="dog-page-image"
          alt="this is image of dog"
          src="https://via.placeholder.com/500"
        />
        <p className="dog-name">{'Breed Dog'}</p>
        <Link>Next random image</Link>
      </div>
    );
  }
}

export default DogPage;
