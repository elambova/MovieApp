import React, { Component } from "react";
import PropTypes from "prop-types";
import ResultContainer from "./ResultContainer";
import Form from "./Form";
import Loader from "react-loader-spinner";

export default class Content extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  render() {
    const { movies, isSubmit, handleSubmit } = this.props;
    console.log(Object.values(movies).length);
    return (
      <div id="content">
        <Form handleSubmit={handleSubmit} />
        <div id="result">
          {isSubmit !== true ? (
            Object.values(movies).length > 0 && (
              <ResultContainer movies={movies} />
            )
          ) : (
            <Loader type="Oval" color="teal" height={80} width={80} />
          )}
        </div>
      </div>
    );
  }
}
