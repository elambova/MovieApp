import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPoll } from "@fortawesome/free-solid-svg-icons";

function Season(props) {
  const { season, tvId, handleClickReferrer } = props;
  const apiData = season.apiData;
  const secure_url = season.imagesUrl;
  let history = useHistory();

  console.log(apiData, history);

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  //   const backToTv = () => {
  //     handleClickReferrer();
  //     history.goBack();
  //   };

  return (
    <React.Fragment>
      <Link className="back result" to={`/tv/${tvId}`} title="Back to Results">
        &laquo; <FontAwesomeIcon icon={faPoll} />
      </Link>
      <Link className="back" to="/" onClick={backToHome} title="Back to Home">
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content" id="specificSeason">
        <h2>{apiData.name}</h2>
        <div>
          <div>
            {apiData.poster_path !== null && (
              <img
                src={`${secure_url}w500${apiData.poster_path}`}
                alt={apiData.name}
              />
            )}
          </div>
          <div className="more-info">
            <time className="bold" datatype={apiData.air_date}>
              Air Date: {apiData.air_date}
            </time>
            {apiData.overview !== null && (
              <div>
                <p className="bold">Overview:</p>
                <span>{apiData.overview}</span>
              </div>
            )}
          </div>
          {apiData.episodes.length !== 0 && (
            <div className="episodes">
              <p className="bold">Episodes: </p>
              <ul>
                {apiData.episodes.map((episode) => (
                  <li key={episode.id} id={episode.id}>
                    <p className="bold">{episode.name}</p>
                    {episode.poster_path !== null && (
                      <img
                        src={`${secure_url}w185${episode.still_path}`}
                        alt={episode.name}
                      />
                    )}
                    <p>{episode.map((ep) => ep.crew)}</p>
                    {episode.guest_stars.length > 0 && (
                      <p>{episode.map((ep) => ep.guest_stars)}</p>
                    )}
                    {episode.overview.trim().length > 0 && (
                      <p
                        className="toggle-view"
                        onClick={() => console.log(this)}
                      >
                        {episode.overview}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

Season.propTypes = {
  season: PropTypes.object.isRequired,
};

export default Season;
