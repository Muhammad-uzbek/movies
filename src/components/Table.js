import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Like from "./Like";
import { Link } from "react-router-dom";

export const Table = (props) => {
  const { movies, onDelete, onLike, onSort, sortColumn, user } = props;
  const columns = [
    {
      path: "title",
      label: "Title",
      contenet: ({ _id, title }) => <Link to={`/movie/${_id}`}>{title}</Link>,
    },
    { path: "genre.name", label: "Genres" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      label: "Delete",
      contenet: ({ isLike, _id }) => (
        <>
          <Like
            isLike={isLike}
            onLike={() => {
              onLike(_id);
            }}
          />
          {user?.isAdmin && (
            <button
              onClick={() => {
                onDelete(_id);
              }}
              className="btn btn-danger ml-5"
            >
              Delete
            </button>
          )}
        </>
      ),
    },
  ];
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />

      <TableBody
        onDelete={onDelete}
        onLike={onLike}
        data={movies}
        columns={columns}
      />
    </table>
  );
};
