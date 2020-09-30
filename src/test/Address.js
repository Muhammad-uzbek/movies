import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Address extends Component {
  render() {
    const {location: {pathname}} = this.props;
    return (
      <>
        <h1>hello Address</h1>
        <ul>
          <li><Link to={`${pathname}/user`}>User</Link></li>
          <li><Link to={`${pathname}/admin`}>Admin</Link></li>
      </ul>
      </>
    )
  }
}
