import React from "react";
import PropTypes from "prop-types";

function Movies(props) {
  const { tv, secure_url } = props;
  const tvLenght = tv.length;

  return (
    <React.Fragment>
      {tvLenght > 0 &&
        tv.map(
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
  tv: PropTypes.array.isRequired,
};

export default Movies;
