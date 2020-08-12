import React from "react";
import PropTypes from "prop-types";

import Form from "../Form";

function Movies(props) {
  const {
    movies,
    secure_url,
    handleClickMovie,
    handleClickTv,
    handleClickReferrer,
  } = props;
  const moviesLenght = movies.length;

  const clickMovie = (id) => {
    if (handleClickMovie) {
      handleClickMovie(id);
    }
  };

  const clickTv = (id) => {
    if (handleClickTv) {
      handleClickTv(id);
    }
  };

  return (
    <React.Fragment>
      {moviesLenght > 0 &&
        movies.map(
          (movie) =>
            movie.poster_path !== null && (
              <div
                key={movie.id}
                id={movie.id}
                className={movie.media_type}
                onClick={() =>
                  movie.media_type === "movie"
                    ? clickMovie(movie.id)
                    : clickTv(movie.id)
                }
              >
                <p>
                  {movie.title !== undefined
                    ? movie.title
                    : movie.original_name}
                </p>
                <img src={`${secure_url}${movie.poster_path}`} />
              </div>
            )
        )}
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
