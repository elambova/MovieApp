import React from "react";
import PropTypes from "prop-types";
import Movies from "./results/Movies";
import People from "./results/People";
import { Link, useHistory } from "react-router-dom";

function ResultContainer(props) {
  const {
    data,
    handleClickMovie,
    handleClickTv,
    handleClickPerson,
    handleClickReferrer,
  } = props;

  const renderComponentsByMediaType = (
    data,
    handleClickMovie,
    handleClickTv,
    handleClickPerson
  ) => {
    const movies = [];
    const people = [];
    const secure_url = data.imagesUrl;

    data.apiData.forEach((item) => {
      switch (item.media_type) {
        case "movie":
          return movies.push(item);
        case "person":
          return people.push(item);
        case "tv":
          return movies.push(item);
      }
    });

    if (people.length > 0 && movies.length > 0) {
      return (
        <React.Fragment>
          <People
            secure_url={secure_url}
            handleClickPerson={handleClickPerson}
            people={people}
          />
          <Movies
            secure_url={secure_url}
            handleClickMovie={handleClickMovie}
            handleClickTv={handleClickTv}
            movies={movies}
          />
        </React.Fragment>
      );
    } else if (movies.length > 0) {
      return (
        <Movies
          secure_url={secure_url}
          handleClickMovie={handleClickMovie}
          handleClickTv={handleClickTv}
          movies={movies}
        />
      );
    } else if (people.length > 0) {
      return (
        <People
          secure_url={secure_url}
          handleClickPerson={handleClickPerson}
          people={people}
        />
      );
    } else {
      return <h3>No results found for your search!</h3>;
    }
  };

  const dataLenght = Object.values(data).length;

  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  return (
    <div className="content">
      <div className="flex-container">
        <Link className="back" to="/" onClick={backToHome}>
          &laquo; Back To Home
        </Link>
        {dataLenght > 0 &&
          renderComponentsByMediaType(
            data,
            handleClickMovie,
            handleClickTv,
            handleClickPerson
          )}
      </div>
    </div>
  );
}

ResultContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResultContainer;
