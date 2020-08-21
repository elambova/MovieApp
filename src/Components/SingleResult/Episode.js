import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTv } from "@fortawesome/free-solid-svg-icons";
import noPhotoFound from "../../images/noPhotoFound.png";

function Episode(props) {
  const { episode, tvId, handleClickReferrer } = props;
  const apiData = episode.apiData;
  const secure_url = episode.imagesUrl;
  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  return (
    <React.Fragment>
      <Link
        className="back result"
        to={`/tv/${tvId}/season/${apiData.season_number}`}
        title="Back to Season"
      >
        &laquo; <FontAwesomeIcon icon={faTv} />
      </Link>
      <Link className="back" to="/" onClick={backToHome} title="Back to Home">
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content" id="specificEpisode">
        <h2 className="episode-name">{apiData.name}</h2>
        <p className="episode-number">
          Season {apiData.season_number} / Episode {apiData.episode_number}
        </p>
        <img
          src={
            apiData.still_path === null
              ? `${noPhotoFound}`
              : `${secure_url}original${apiData.still_path}`
          }
          alt={apiData.name}
        />
        <time className="bold" datatype={apiData.air_date}>
          Air Date: {apiData.air_date}
        </time>
        {apiData.overview !== null && (
          <React.Fragment>
            <p className="bold">Overview:</p>
            <span>{apiData.overview}</span>
          </React.Fragment>
        )}
        {apiData.crew.lenght > 0 && (
          <React.Fragment>
            <p className="bold">Crew:</p>
            {apiData.crew.map((member) => member.name)}
          </React.Fragment>
        )}
        {apiData.guest_stars.lenght > 0 && (
          <React.Fragment>
            <p className="bold">Guest stars:</p>
            {apiData.guest_stars.map((star) => star.name)}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

Episode.propTypes = {
  episode: PropTypes.object.isRequired,
  tvId: PropTypes.number.isRequired,
  handleClickReferrer: PropTypes.func.isRequired,
};

export default Episode;
