import React, { Component } from 'react'

export default class NotFound extends Component {
  
  render() {
      const {history: {goBack}} = this.props;
    return (
        <>
            <h1>404 not Found</h1>
            <button className="btn btn-danger" onClick={() => {goBack()}}>goBack</button>
        </>
    )
  }
}
