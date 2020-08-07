import React, { Component } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import * as connect from "./ConnectionAPI/connect";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [] };
  }

  async componentDidMount() {
    this.setState({ movies: [] });
    const movies = await connect.getMovies("Matrix").then((data) => data);
    this.setState({ movies });
  }

  render() {
    console.log(this.state.movies.results);
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
