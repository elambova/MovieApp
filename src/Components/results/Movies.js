import React from "react";
import PropTypes from "prop-types";

function Movies(props) {
  const { movies, secure_url } = props;
  const moviesLenght = movies.length;

  return (
    <React.Fragment>
      {moviesLenght > 0 &&
        movies.map(
          (movie) =>
            movie.poster_path !== null && (
              <div key={movie.id} id={movie.id} className={movie.media_type}>
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
