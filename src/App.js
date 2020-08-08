import React, { Component } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import * as connect from "./ConnectionAPI/connect";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], isSubmit: false };
  }

  handleSubmit = async (isSubmit, movie) => {
    const movies = await connect.getMovies(movie).then((data) => data);
    this.setState({ movies, isSubmit });
  };

  render() {
    const { movies, isSubmit } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Content
          movies={movies}
          isSubmit={isSubmit}
          handleSubmit={this.handleSubmit}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
