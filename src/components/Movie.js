import Joi from "joi-browser";
import React from "react";
import { getGenres } from "../services/GenreServices";
import { getMovie, saveMove } from "../services/MoviesServices";
import Form from "./form/Form";

export default class Movie extends Form {
  state = {
    data: {
      title: "",
      dailyRentalRate: "",
      numberInStock: "",
      genreId: "",
    },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().min(5).label("Title"),
    dailyRentalRate: Joi.number().required().min(1).max(10).label("Rate"),
    numberInStock: Joi.number().required().label("Stock"),
    genreId: Joi.string().required().label("Genere Id"),
  };

  populationGenre = async () => {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  };

  populationMovies = async () => {
    try {
      let movieId = this.props.match.params.id;

      if (movieId === "new") return;

      let { data: movie } = await getMovie(movieId);
      this.setState({ data: this.viewModel(movie) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        return this.props.history.replace("/movies");
    }
  };

  async componentDidMount() {
    await this.populationGenre();
    await this.populationMovies();
  }

  viewModel = (movie) => {
    return {
      _id: movie._id.toString(),
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock,
      genreId: movie.genre._id ?? movie.genre._id,
    };
  };

  doSubmit = async () => {
    const { data } = await saveMove(this.state.data);
    console.log(data);
    if (data) this.props.history.replace("/movies");
  };

  render() {
    return (
      <div className="m-5">
        <h1>Movie from </h1>

        <form onSubmit={this.handlerSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre")}
          {this.renderInput("numberInStock", "Number is Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderBtn("Save")}
        </form>
      </div>
    );
  }
}
