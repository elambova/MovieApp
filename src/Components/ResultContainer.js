import React from "react";
import PropTypes from "prop-types";
import Movies from "./AllResults/Movies";
import People from "./AllResults/People";
import NotFound from "./NotFound";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function ResultContainer(props) {
  const {
    data,
    handleClickMovie,
    handleClickTv,
    handleClickPerson,
    handleClickReferrer,
  } = props;

  const dataLenght = Object.values(data).length;

  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

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
            handleClickMovie={handleClickMovie}
            handleClickTv={handleClickTv}
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
          handleClickMovie={handleClickMovie}
          handleClickTv={handleClickTv}
          people={people}
        />
      );
    } else {
      return <NotFound handleClickReferrer={handleClickReferrer} />;
    }
  };

  return (
    <React.Fragment>
      <Link className="back" to="/" onClick={backToHome} title="Back to Home">
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content">
        {dataLenght > 0 &&
          renderComponentsByMediaType(
            data,
            handleClickMovie,
            handleClickTv,
            handleClickPerson
          )}
      </div>
    </React.Fragment>
  );
}

ResultContainer.propTypes = {
  data: PropTypes.object.isRequired,
  handleClickReferrer: PropTypes.func.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  handleClickTv: PropTypes.func.isRequired,
  handleClickPerson: PropTypes.func.isRequired,
};

export default ResultContainer;
