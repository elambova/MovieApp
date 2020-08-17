import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTv } from "@fortawesome/free-solid-svg-icons";
import noPhotoFound from "../../images/noPhotoFound.png";

function Season(props) {
  const { season, tvId, handleClickReferrer, handleClickEpisode } = props;
  const apiData = season.apiData;
  const secure_url = season.imagesUrl;
  let history = useHistory();

  const backToHome = () => {
    handleClickReferrer();
    history.push("/");
  };

  const clickEpisode = (tvId, seasonNumber, episodeNumber) => {
    if (handleClickEpisode) {
      handleClickEpisode(tvId, seasonNumber, episodeNumber);
    }
  };

  return (
    <React.Fragment>
      <Link className="back result" to={`/tv/${tvId}`} title="Back to Tv">
        &laquo; <FontAwesomeIcon icon={faTv} />
      </Link>
      <Link className="back" to="/" onClick={backToHome} title="Back to Home">
        &laquo; <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="content" id="specificSeason">
        <h2 className="tv-name">{apiData.name}</h2>
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
              <ul>
                {apiData.episodes.map((episode) => (
                  <li key={episode.id} id={episode.id}>
                    <Link
                      to={`/tv/${tvId}/season/${apiData.id}/episode/${episode.episode_number}`}
                      onClick={() =>
                        clickEpisode(tvId, apiData.id, episode.episode_number)
                      }
                    >
                      <p className="bold">{episode.name}</p>
                      <img
                        src={
                          episode.poster_path === null
                            ? `${noPhotoFound}`
                            : `${secure_url}w300${episode.still_path}`
                        }
                        alt={episode.name}
                      />
                    </Link>
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
  tvId: PropTypes.number.isRequired,
  handleClickReferrer: PropTypes.func.isRequired,
};

export default Season;
