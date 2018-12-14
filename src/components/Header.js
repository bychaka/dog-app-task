import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="https://dog.ceo/img/dog-api-logo.svg" />
        <h1 className="title">Dog API application by Aliaksandr Bychak</h1>
      </div>
    );
  }
}

export default Header;
