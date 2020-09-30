import React, { Component } from 'react'

export default class Geners extends Component {

  
  render() {

    const {items, selectGenere, currentGenere, idProperty, valueProperty} = this.props;
    return (
        <ul className="list-group">

            {items.map(item => (
                <li 
                    key={item[idProperty]} 
                    onClick={ () => {selectGenere(item)}}  
                    className={ item[idProperty] === currentGenere[idProperty] ? "list-group-item active": "list-group-item"}
                >
                        {item[valueProperty]}
                </li>
            ))}
            
        </ul>
    )
  }
}

Geners.defaultProps = {
    idProperty: '_id',
    valueProperty: 'name',

  };