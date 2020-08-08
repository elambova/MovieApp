import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import ResultContainer from "./ResultContainer";

export default class Content extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { movies, handleSubmit, load } = this.props;

    return (
      <div id="content">
        <Form handleSubmit={handleSubmit} movies={movies} load={load} />
        {Object.values(movies).length > 0 && (
          <ResultContainer movies={movies} />
        )}
      </div>
    );
  }
}
