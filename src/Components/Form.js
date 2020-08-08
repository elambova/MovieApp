import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  state = {
    movie: "",
    submit: true,
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.props.handleSubmit) {
      this.props.handleSubmit(this.state.submit, this.state.movie);
    }
  };

  render() {
    return (
      <React.Fragment>
        <form method="POST" onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="movie">Please enter movie name:</label>
            <input
              type="text"
              placeholder="City"
              name="movie"
              id="movie"
              onChange={(e) => this.setState({ movie: e.target.value })}
              required
            />
          </div>
          <input type="submit" id="submit-btn" value="Enter" name="submit" />
        </form>
      </React.Fragment>
    );
  }
}
