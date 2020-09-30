import React, { Component } from 'react';
import { FaRegHeart,FaHeart } from "react-icons/fa";


export default class Like extends Component {
  render() {
      const {isLike, onLike} = this.props;
    return (
        isLike ? (
            <FaHeart size='25' style={{cursor: "pointer"}} color="#ff5252" onClick={onLike}/>
        ) :(
            <FaRegHeart size='25' style={{cursor: "pointer"}} color="#ff5252" onClick={onLike}/>
        )
    )
  }
}
