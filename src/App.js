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
import Tv from "./Components/Movie/Tv";
import Person from "./Components/Movie/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      movie: [],
      tv: [],
      person: [],
      redirectToReferrer: false,
    };
  }

  handleSubmit = async (data) => {
    await connect.getData(data).then((data) => {
      this.setState({ data: data, redirectToReferrer: true });
    });
  };

  handleClickMovie = async (id) => {
    await connect
      .getDataMovie(id)
      .then((movie) => this.setState({ movie: movie }));
  };

  handleClickTv = async (id) => {
    await connect.getDataTv(id).then((tv) => this.setState({ tv: tv }));
  };

  handleClickPerson = async (id) => {
    await connect
      .getDataPerson(id)
      .then((person) => this.setState({ person: person }));
  };

  handleClickReferrer = () => {
    this.setState({ redirectToReferrer: false });
  };

  render() {
    const { data, movie, tv, person, redirectToReferrer } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
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
                          handleClickMovie={this.handleClickMovie}
                          handleClickTv={this.handleClickTv}
                          handleClickPerson={this.handleClickPerson}
                          handleClickReferrer={this.handleClickReferrer}
                          data={data}
                        />
                      )}
                    />
                  </React.Fragment>
                )}
                {Object.values(movie).length > 0 && (
                  <React.Fragment>
                    <Redirect from="/result" to={`movie/${movie.apiData.id}`} />
                    <Route
                      exact
                      path={`/movie/${movie.apiData.id}`}
                      render={() => <Movie movie={movie} />}
                    />
                  </React.Fragment>
                )}
                {Object.values(tv).length > 0 && (
                  <React.Fragment>
                    <Redirect from="/result" to={`tv/${tv.apiData.id}`} />
                    <Route
                      exact
                      path={`/tv/${tv.apiData.id}`}
                      render={() => <Tv tv={tv} />}
                    />
                  </React.Fragment>
                )}
                {Object.values(person).length > 0 && (
                  <React.Fragment>
                    <Redirect
                      from="/result"
                      to={`person/${person.connectApi.id}`}
                    />
                    <Route
                      exact
                      path={`/person/${person.connectApi.id}`}
                      render={() => <Person person={person} />}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
