import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

// import { getMovies } from "../services/MoviesDb";
import { getGenres } from "../services/GenreServices";
import { deleteMovie, getMovies } from "../services/MoviesServices";

import Movies from "../components/Movies";
import { Pagination } from "../commons/Pagination";
import Geners from "../commons/Geners";

import { paginate } from "../utils/Paginate";
import { SerchBox } from "./form/SerchBox";
import "bootstrap/dist/css/bootstrap.css";
import { toast } from "react-toastify";

export default class MoviesRouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      generes: [],
      pageSize: 3,
      currentPage: 1,
      currentGenere: "",
      sortColumn: { path: "title", order: "asc" },
      querSearch: "",
    };
  }

  handlerDelete = async (id) => {
    const orginalMovies = this.state.movies;
    const movies = this.state.movies.filter((p) => p._id !== id);
    this.setState({ movies });

    try {
      await deleteMovie(id);
      toast.success("muvafiqyatli o'chirildi");
    } catch (e) {
      if (e.response && e.response.status === "404") {
        toast.error("Bunday id li movies alaqchon o'chgan");
      } else if (e.response && e.response.status === "403") {
        toast.error("Bunday huquq sizga berilmagan");
      }
      this.setState({ movies: orginalMovies });
    }
    // this.setState({
    //   movies: this.state.movies.filter((item) => item._id !== id),
    // });
  };

  handlerIsLike = (id) => {
    let tempMovies = [...this.state.movies];

    tempMovies = tempMovies.map((item) => {
      if (item._id === id) {
        return { ...item, isLike: !item.isLike };
      } else {
        return item;
      }
    });

    this.setState({ movies: [...tempMovies] });
  };

  handlerOnChangePage = (item) => {
    this.setState({ currentPage: item });
  };

  handlerSearch = (query) => {
    this.setState({ querSearch: query, currentPage: 1, currentGenere: "" });
  };

  handlerSelectGenere = (genre) => {
    this.setState({
      currentGenere: genre,
      currentPage: 1,
      querSearch: "",
    });
  };

  handlerSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      currentGenere,
      sortColumn,
      querSearch,
    } = this.state;

    // filter code
    let filtered = allMovies;

    if (querSearch !== "") {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(querSearch.toLowerCase())
      );
    } else if (currentGenere && currentGenere._id) {
      filtered = allMovies.filter(
        (item) => item.genre._id === currentGenere._id
      );
    }

    // sort code

    filtered = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    let paginatedMovies = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: paginatedMovies };
  };

  async componentDidMount() {
    const { data } = await getGenres();
    let generes = [{ name: "All Genere", _id: "" }, ...data];

    const { data: movies } = await getMovies();

    this.setState({
      movies,
      generes,
    });
  }

  render() {
    let count = this.state.movies.length;
    if (count === 0) return <p>show 0 movies</p>;

    const {
      currentPage,
      pageSize,
      currentGenere,
      generes,
      sortColumn,
    } = this.state;

    const {
      handlerDelete,
      handlerIsLike,
      handlerOnChangePage,
      handlerSelectGenere,
      handlerSort,
    } = this;

    const { totalCount, data: movies } = this.getPageData();
    const { user } = this.props;
    return (
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-3">
            <Geners
              items={generes}
              currentGenere={currentGenere}
              selectGenere={handlerSelectGenere}
            />
          </div>
          <div className="col">
            {user && (
              <Link to="/movie/new" className="btn btn-primary mb-2">
                New Movies
              </Link>
            )}

            <p>Shoing {totalCount} movies in DB</p>

            <SerchBox
              onSearch={this.handlerSearch}
              querySaerch={this.state.querSearch}
            />

            <Movies
              movies={movies}
              onDelete={handlerDelete}
              onLike={handlerIsLike}
              onSort={handlerSort}
              sortColumn={sortColumn}
              user={user}
            />

            <Pagination
              currentPage={currentPage}
              itemsCount={totalCount}
              pageSize={pageSize}
              onChangePage={handlerOnChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}
