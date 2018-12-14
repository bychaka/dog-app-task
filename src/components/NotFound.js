import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="not-found-content">
          <img
            className="not-found-image"
            src="https://dog.ceo/img/dog-api-logo.svg"
          />
          <h1 className="wow">Wow-wow!</h1>
          <div className="error-message">Page not found!</div>
        </div>
      </div>
    );
  }
}

export default NotFound;
