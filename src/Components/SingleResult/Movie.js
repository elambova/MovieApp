import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPoll } from "@fortawesome/free-solid-svg-icons";

function Movie(props) {
  const { movie, handleClickReferrer } = props;
  const apiData = movie.apiData;
  const secure_url = movie.imagesUrl;
  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  return (
    <React.Fragment>
      <Link className="back result" to="/result" title="Back to Results">
        &laquo; <FontAwesomeIcon icon={faPoll} />
      </Link>
      <Link className="back" to="/" onClick={backToHome} title="Back to Home">
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content" id="specificMovie">
        <h2 className="movie-title">
          {apiData.title !== undefined ? apiData.title : apiData.original_title}
        </h2>
        <div>
          <div>
            {apiData.poster_path !== null && (
              <img
                src={`${secure_url}w500${apiData.poster_path}`}
                alt={
                  apiData.title !== undefined
                    ? apiData.title
                    : apiData.original_title
                }
              />
            )}
          </div>
          <div className="more-info">
            <time className="bold" datatype={apiData.release_date}>
              Release Date: {apiData.release_date}
            </time>
            {apiData.homepage !== null && apiData.homepage.length > 0 && (
              <a
                className="bold"
                href={apiData.homepage}
                title={apiData.title || apiData.original_title}
              >
                <span>Website: </span>
                {apiData.title || apiData.original_title}
              </a>
            )}
            {apiData.overview !== null && (
              <div>
                <p className="bold">Overview:</p>
                <span>{apiData.overview}</span>
              </div>
            )}
            {apiData.spoken_languages.length > 0 && (
              <div>
                <p className="bold">Spoken Languages:</p>
                {apiData.spoken_languages.map((language) => (
                  <span key={language.name}>{language.name}</span>
                ))}
              </div>
            )}
            {apiData.production_countries.length > 0 && (
              <div>
                <p className="bold">Production Countries</p>
                {apiData.production_countries.map((country) => (
                  <span key={country.iso_3166_1}>{country.name}</span>
                ))}
              </div>
            )}
            {apiData.production_companies.length > 0 && (
              <div className="production_companies">
                <p className="bold">Production Companies:</p>
                {apiData.production_companies.map((company) => (
                  <span key={company.id}>{company.name}</span>
                ))}
              </div>
            )}
            {apiData.genres.length > 0 && (
              <div className="genres">
                <p className="bold">Genres:</p>
                {apiData.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
