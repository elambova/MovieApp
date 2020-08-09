import React, { Component } from "react";
import PropTypes from "prop-types";
import ResultContainer from "./ResultContainer";
import Loader from "react-loader-spinner";

export default class Content extends Component {
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
    const { data, loading } = this.props;

    return (
      <div id="content">
        <form method="POST" onSubmit={this.onSubmit} id="data-form">
          <div>
            <label htmlFor="data">Please enter name for search:</label>
            <input
              type="text"
              placeholder="Movie"
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
        {loading ? (
          <Loader type="ThreeDots" color="#02588a" height={80} width={80} />
        ) : (
          <ResultContainer data={data} />
        )}
      </div>
    );
  }
}
