import React, { Component } from 'react';
import queryString from 'query-string';

export default class About extends Component {
  render() {
      const {
          location : {search}
        } = this.props;
      console.log(queryString.parse(search))
    return (
    <h1>About</h1>
    )
  }
}
