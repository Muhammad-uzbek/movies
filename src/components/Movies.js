import React, { Component } from "react";
import { Table } from "./Table";

export default class Movies extends Component {
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn, user } = this.props;

    return (
      <Table
        onDelete={onDelete}
        onLike={onLike}
        movies={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        user={user}
      />
    );
  }
}
