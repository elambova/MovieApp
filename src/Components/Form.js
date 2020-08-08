import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

export default class Form extends Component {
  state = {
    movie: "",
    loading: false,
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.props.handleSubmit) {
      this.setState({ loading: !this.state.loading });
      this.props.handleSubmit(this.state.movie);
    }
  };

  render() {
    const { load } = this.props;
    const { loading } = this.state;

    {
      /* ["Bars","Circles","Rings","TailSpin","ThreeDots","Watch","RevolvingDot","Triangle","Plane","MutatingDots","CradleLoader"] */
    }
    return (
      <React.Fragment>
        <form method="POST" onSubmit={this.onSubmit} id="movie-form">
          <div>
            <label htmlFor="movie">Please enter movie name:</label>
            <input
              type="text"
              placeholder="Movie"
              name="movie"
              id="movie"
              onChange={(e) => this.setState({ movie: e.target.value })}
              required
            />
          </div>
          <button type="submit" form="movie-form" id="submit-btn" name="submit">
            {load === loading && (
              <Loader type="ThreeDots" color="black" height={35} width={40} />
            )}

            {load !== loading && "Enter"}
          </button>
        </form>
      </React.Fragment>
    );
  }
}
