import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

function Movie(props) {
  const { movie } = props;
  const apiData = movie.apiData;
  const secure_url = movie.imagesUrl;
  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  return (
    <div className="content" id="specificMovie">
      <Link className="back" to="/result">
        &laquo; Back To Results
      </Link>
      <Link className="back" to="/" onClick={backToHome}>
        &laquo; Back To Home
      </Link>
      <h2 className="movieTitle">
        {apiData.title !== undefined ? apiData.title : apiData.original_title}
      </h2>
      <div>
        <div>
          {apiData.poster_path !== null && (
            <img
              src={`${secure_url}w342${apiData.poster_path}`}
              alt={
                apiData.title !== undefined
                  ? apiData.title
                  : apiData.original_title
              }
            />
          )}
          <time datatype={apiData.release_date}>
            Release Date: {apiData.release_date}
          </time>
          {apiData.homepage !== null && apiData.homepage.length > 0 && (
            <a href={apiData.homepage}>
              {apiData.title || apiData.original_title}
            </a>
          )}
        </div>
        <div>
          {apiData.overview !== null && (
            <div>
              <p>Overview:</p>
              <span>{apiData.overview}</span>
            </div>
          )}
          {apiData.spoken_languages.length > 0 && (
            <div>
              <p>Spoken Languages:</p>
              {apiData.spoken_languages.map((language) => (
                <span key={language.name}>{language.name}</span>
              ))}
            </div>
          )}
          {apiData.production_countries.length > 0 && (
            <div>
              <p>Production Countries</p>
              {apiData.production_countries.map((country) => (
                <span key={country.iso_3166_1}>{country.name}</span>
              ))}
            </div>
          )}
          {apiData.production_companies.length > 0 && (
            <div className="production_companies">
              <p>Production Companies:</p>
              {apiData.production_companies.map((company) => (
                <span key={company.id}>{company.name}</span>
              ))}
            </div>
          )}
          {apiData.genres.length > 0 && (
            <div className="genres">
              <p>Genres:</p>
              {apiData.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
