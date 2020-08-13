import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPoll } from "@fortawesome/free-solid-svg-icons";

function Tv(props) {
  const { tv, handleClickReferrer } = props;
  const apiData = tv.apiData;
  const secure_url = tv.imagesUrl;
  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  return (
    <div className="content" id="specificTv">
      <Link className="back" to="/result">
        &laquo; <FontAwesomeIcon icon={faPoll} />
      </Link>
      <Link className="back" to="/" onClick={backToHome}>
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <h2 className="tv-title">
        {apiData.name !== undefined ? apiData.name : apiData.original_name}
      </h2>
      <div>
        <div>
          {apiData.status === "Ended" && (
            <p>
              Status: <span className="ended">{apiData.status}</span>
            </p>
          )}
          {apiData.poster_path !== null && (
            <img
              src={`${secure_url}w500${apiData.poster_path}`}
              alt={
                apiData.name !== undefined
                  ? apiData.name
                  : apiData.original_name
              }
            />
          )}
        </div>
        <div className="more-info">
          <time className="bold" datatype={apiData.first_air_date}>
            First Air Date: {apiData.first_air_date}
          </time>
          <time className="bold" datatype={apiData.last_air_date}>
            Last Air Date: {apiData.last_air_date}
          </time>
          <time className="bold" datatype={apiData.next_episode_to_air}>
            Next Episode Air Date: {apiData.next_episode_to_air}
          </time>
          {apiData.homepage !== null && apiData.homepage.length > 0 && (
            <a className="bold" href={apiData.homepage}>
              {apiData.name || apiData.original_name}
            </a>
          )}
          {apiData.overview !== null && (
            <div>
              <p>Overview:</p>
              <span>{apiData.overview}</span>
            </div>
          )}
          {apiData.number_of_episodes !== 0 && (
            <p className="bold">
              Number of episodes: {apiData.number_of_episodes}
            </p>
          )}
          {apiData.number_of_seasons !== 0 && (
            <p className="bold">
              Number of seasons: {apiData.number_of_seasons}
            </p>
          )}
          {apiData.created_by.length > 0 && (
            <div>
              <p>Production Countries</p>
              {apiData.created_by.map((created) => (
                <span key={created.id}>{created.name}</span>
              ))}
            </div>
          )}
          {apiData.origin_country.length > 0 && (
            <div>
              <p>Production Countries</p>
              {apiData.origin_country.map((country) => (
                <span key={country}>{country}</span>
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
      {apiData.seasons.length !== 0 && (
        <div className="seasons">
          <p>Seasons: </p>
          <ul>
            {apiData.seasons.map((season) => (
              <li key={season.id} id={season.id}>
                <p>{season.name}</p>
                {season.poster_path !== null && (
                  <img
                    src={`${secure_url}w185${season.poster_path}`}
                    alt={season.name}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Tv.propTypes = {
  tv: PropTypes.object.isRequired,
};

export default Tv;
