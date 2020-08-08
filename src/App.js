import React, { Component } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import * as connect from "./ConnectionAPI/connect";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], load: true };
  }

  handleSubmit = async (movie) => {
    const movies = await connect.getMovies(movie).then((data) => data);
    this.setState({ movies, load: !this.state.load });
  };

  render() {
    const { movies, load } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Content movies={movies} handleSubmit={this.handleSubmit} load={load} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
