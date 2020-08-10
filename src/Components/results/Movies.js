import React from "react";
import PropTypes from "prop-types";

function Movies(props) {
  const { movies, secure_url } = props;
  const moviesLenght = Object.values(movies).length;

  return (
    <React.Fragment>
      {moviesLenght > 0 &&
        movies.results.map(
          (movie) =>
            movie.poster_path !== null && (
              <div key={movie.id} id={movie.id}>
                <p>{movie.title}</p>
                <img src={`${secure_url}${movie.poster_path}`} />
              </div>
            )
        )}
    </React.Fragment>
  );
}

Movies.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default Movies;
