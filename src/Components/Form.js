import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.handleSubmit) {
      this.props.handleSubmit(this.state.data);
    }
  };

  render() {
    return (
      <div className="content">
        <form method="POST" onSubmit={this.onSubmit} id="data-form">
          <div>
            <label htmlFor="data">
              Please enter name for search (movie, person or tv show):
            </label>
            <input
              type="text"
              placeholder="Movie, Actor/Actress or TV Show"
              name="data"
              id="data"
              onChange={(e) => this.setState({ data: e.target.value })}
              required
            />
          </div>
          <input
            type="submit"
            form="data-form"
            id="submit-btn"
            name="submit"
            value="Enter"
          />
        </form>
      </div>
    );
  }
}
