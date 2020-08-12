import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import * as connect from "./ConnectionAPI/connect";
import ResultContainer from "./Components/ResultContainer";
import Movie from "./Components/Movie/Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], movie: [], redirectToReferrer: false };
  }

  handleSubmit = async (data) => {
    await connect.getData(data).then((data) => {
      this.setState({ data: data, redirectToReferrer: true });
    });
  };

  handleClick = async (id) => {
    await connect
      .getDataMovie(id)
      .then((movie) => this.setState({ movie: movie }));
    <Redirect to="/movie/:id" />;
  };

  render() {
    const { data, movie, redirectToReferrer } = this.state;

    return (
      <Router>
        <React.Fragment>
          <Header />
          {!redirectToReferrer ? (
            <Route
              exact
              path="/"
              render={() => <Form handleSubmit={this.handleSubmit} />}
            />
          ) : (
            <React.Fragment>
              {Object.values(data).length > 0 && (
                <React.Fragment>
                  <Redirect from="/" to="/result" />
                  <Route
                    exact
                    path="/result"
                    render={() => (
                      <ResultContainer
                        handleClick={this.handleClick}
                        data={data}
                      />
                    )}
                  />
                </React.Fragment>
              )}
              {Object.values(movie).length > 0 && (
                <React.Fragment>
                  <Redirect from="/result" to={`movie/:${movie.apiData.id}`} />
                  <Route
                    exact
                    path={`/movie/:${movie.apiData.id}`}
                    render={() => <Movie movie={movie} />}
                  />
                </React.Fragment>
              )}
            </React.Fragment>
          )}
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
