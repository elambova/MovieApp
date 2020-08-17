import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noPhotoFound from "../../images/noPhotoFound.png";

function Movies(props) {
  const { movies, secure_url, handleClickMovie, handleClickTv } = props;

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
        movies.map((movie) =>
          movie.media_type === "movie" ? (
            <Link
              key={movie.id}
              id={movie.id}
              className="link"
              to={`/movie/${movie.id}`}
              onClick={() => clickMovie(movie.id)}
            >
              <p>
                {movie.title !== undefined ? movie.title : movie.original_name}
              </p>
              <img
                src={
                  movie.poster_path === null
                    ? `${noPhotoFound}`
                    : `${secure_url}${movie.poster_path}`
                }
              />
            </Link>
          ) : (
            <Link
              key={movie.id}
              id={movie.id}
              className="link"
              to={`/tv/${movie.id}`}
              onClick={() => clickTv(movie.id)}
            >
              <span>
                {movie.title !== undefined ? movie.title : movie.original_name}
              </span>
              <img
                src={
                  movie.poster_path === null
                    ? `${noPhotoFound}`
                    : `${secure_url}${movie.poster_path}`
                }
              />
            </Link>
          )
        )}
    </React.Fragment>
  );
}
// movies, secure_url, handleClickMovie, handleClickTv
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  secure_url: PropTypes.string.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  handleClickTv: PropTypes.func.isRequired,
};

export default Movies;
