import React from "react";
import PropTypes from "prop-types";

function Movies(props) {
  const { movies } = props;
  const moviesLenght = Object.values(movies).length;
  const secure_url =
    moviesLenght !== 0 ? movies.images.secure_base_url + "w185/" : "";

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
