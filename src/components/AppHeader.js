import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img className="logo" src="https://dog.ceo/img/dog-api-logo.svg" />
        </Link>
        <h1 className="title">Dog API application by Aliaksandr Bychak</h1>
      </div>
    );
  }
}

export default AppHeader;
