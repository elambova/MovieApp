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
import Movie from "./Components/SingleResult/Movie";
import Tv from "./Components/SingleResult/Tv";
import Person from "./Components/SingleResult/Person";
import Season from "./Components/SingleResult/Season";
import Episode from "./Components/SingleResult/Episode";
import Loader from "react-loader-spinner";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      movie: [],
      tv: [],
      person: [],
      season: [],
      episode: [],
      redirectToReferrer: false,
      loading: false,
      loadingMovie: false,
      loadingTv: false,
      loadingPerson: false,
      loadingSeason: false,
      loadingEpisode: false,
    };
  }

  handleSubmit = (data) => {
    this.setState({ loading: true, redirectToReferrer: true }, async () => {
      await connect.getData(data).then((data) => {
        this.setState({ data: data, loading: false });
      });
    });
  };

  handleClickMovie = (id) => {
    this.setState({ loadingMovie: true }, async () => {
      await connect
        .getDataMovie(id)
        .then((movie) => this.setState({ movie: movie, loadingMovie: false }));
    });
  };

  handleClickTv = (id) => {
    this.setState({ loadingTv: true }, async () => {
      await connect
        .getDataTv(id)
        .then((tv) => this.setState({ tv: tv, loadingTv: false }));
    });
  };

  handleClickPerson = (id) => {
    this.setState({ loadingPerson: true }, async () => {
      await connect
        .getDataPerson(id)
        .then((person) =>
          this.setState({ person: person, loadingPerson: false })
        );
    });
  };

  handleClickSeason = (tvId, seasonNumber) => {
    this.setState({ loadingSeason: true }, async () => {
      await connect
        .getDataSeason(tvId, seasonNumber)
        .then((season) =>
          this.setState({ season: season, loadingSeason: false })
        );
    });
  };

  handleClickEpisode = (tvId, seasonNumber, episodeNumber) => {
    this.setState({ loadingEpisode: true }, async () => {
      await connect
        .getDataEpisode(tvId, seasonNumber, episodeNumber)
        .then((episode) =>
          this.setState({ episode: episode, loadingEpisode: false })
        );
    });
  };

  handleClickReferrer = () => {
    this.setState({ redirectToReferrer: false });
  };

  render() {
    const {
      data,
      movie,
      tv,
      person,
      season,
      episode,
      redirectToReferrer,
      loading,
      loadingMovie,
      loadingTv,
      loadingPerson,
      loadingSeason,
      loadingEpisode,
    } = this.state;

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
            <Switch>
              <React.Fragment>
                {loading ? (
                  <Loader
                    className="loader"
                    type="ThreeDots"
                    color="#02588a"
                    height={100}
                    width={100}
                  />
                ) : (
                  Object.values(data).length > 0 && (
                    <React.Fragment>
                      <Redirect to="/result" />
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
                  )
                )}
                {loadingMovie ? (
                  <Loader
                    className="loader"
                    type="Rings"
                    color="#02588a"
                    height={100}
                    width={100}
                  />
                ) : (
                  Object.values(movie).length > 0 && (
                    <React.Fragment>
                      <Route
                        path={`/movie/${movie.apiData.id}`}
                        render={() => (
                          <Movie
                            movie={movie}
                            handleClickReferrer={this.handleClickReferrer}
                          />
                        )}
                      />
                    </React.Fragment>
                  )
                )}
                {loadingTv ? (
                  <Loader
                    className="loader"
                    type="Oval"
                    color="#02588a"
                    height={100}
                    width={100}
                  />
                ) : (
                  Object.values(tv).length > 0 && (
                    <React.Fragment>
                      <Route
                        exact
                        path={`/tv/${tv.apiData.id}`}
                        render={() => (
                          <Tv
                            tv={tv}
                            handleClickReferrer={this.handleClickReferrer}
                            handleClickSeason={this.handleClickSeason}
                          />
                        )}
                      />
                    </React.Fragment>
                  )
                )}
                {loadingPerson ? (
                  <Loader
                    className="loader"
                    type="Bars"
                    color="#02588a"
                    height={100}
                    width={100}
                  />
                ) : (
                  Object.values(person).length > 0 && (
                    <React.Fragment>
                      <Route
                        path={`/person/${person.apiData.id}`}
                        render={() => (
                          <Person
                            person={person}
                            handleClickReferrer={this.handleClickReferrer}
                          />
                        )}
                      />
                    </React.Fragment>
                  )
                )}
                {loadingSeason ? (
                  <Loader
                    className="loader"
                    type="Bars"
                    color="#02588a"
                    height={100}
                    width={100}
                  />
                ) : (
                  Object.values(season).length > 0 && (
                    <React.Fragment>
                      <Route
                        exact
                        path={`/tv/${tv.apiData.id}/season/${season.apiData.season_number}`}
                        render={() => (
                          <Season
                            season={season}
                            tvId={tv.apiData.id}
                            handleClickEpisode={this.handleClickEpisode}
                            handleClickReferrer={this.handleClickReferrer}
                          />
                        )}
                      />
                    </React.Fragment>
                  )
                )}
                {loadingEpisode ? (
                  <Loader
                    className="loader"
                    type="Bars"
                    color="#02588a"
                    height={100}
                    width={100}
                  />
                ) : (
                  Object.values(episode).length > 0 && (
                    <React.Fragment>
                      <Route
                        exact
                        path={`/tv/${tv.apiData.id}/season/${season.apiData.season_number}/episode/${episode.apiData.episode_number}`}
                        render={() => (
                          <Episode
                            episode={episode}
                            tvId={tv.apiData.id}
                            handleClickReferrer={this.handleClickReferrer}
                          />
                        )}
                      />
                    </React.Fragment>
                  )
                )}
              </React.Fragment>
            </Switch>
          )}
          <Footer />
          <ScrollToTop
            id="go-top"
            smooth
            component={<FontAwesomeIcon icon={faAngleUp} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
