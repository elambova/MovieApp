import React from "react";
import PropTypes from "prop-types";

function TvShows(props) {
  const { tv, secure_url } = props;
  const tvLenght = Object.values(tv).length;

  return (
    <React.Fragment>
      {tvLenght > 0 &&
        tv.results.map(
          (tv) =>
            tv.poster_path !== null && (
              <div key={tv.id} id={tv.id}>
                <p>{tv.original_name}</p>
                <img src={`${secure_url}${tv.poster_path}`} />
              </div>
            )
        )}
    </React.Fragment>
  );
}

TvShows.propTypes = {
  tv: PropTypes.object.isRequired,
};

export default TvShows;
