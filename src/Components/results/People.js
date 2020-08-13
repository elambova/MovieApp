import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function People(props) {
  const {
    people,
    secure_url,
    handleClickPerson,
    handleClickMovie,
    handleClickTv,
  } = props;
  const peopleLenght = people.length;

  const clickPerson = (id) => {
    if (handleClickPerson) {
      handleClickPerson(id);
    }
  };

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
      {peopleLenght > 0 && (
        <div id="person-info">
          <Link
            className="link"
            to={`/person/${people[0].id}`}
            onClick={() => clickPerson(people[0].id)}
          >
            <h3 id="name">{people[0].name}</h3>
            <img src={`${secure_url}${people[0].profile_path}`} alt="" />
          </Link>
        </div>
      )}
      {peopleLenght > 0 &&
        people[0].known_for.length > 0 &&
        people.map((person) =>
          person.known_for.map(
            (movie) =>
              movie.poster_path !== null &&
              movie.poster_path !== undefined &&
              (movie.media_type === "movie" ? (
                <Link
                  className="link"
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  onClick={() => clickMovie(movie.id)}
                >
                  <p>{movie.title ? movie.title : movie.original_name}</p>
                  <img src={`${secure_url}${movie.poster_path}`} />
                </Link>
              ) : (
                <Link
                  className="link"
                  to={`/tv/${movie.id}`}
                  key={movie.id}
                  onClick={() => clickTv(movie.id)}
                >
                  <p>{movie.title ? movie.title : movie.original_name}</p>
                  <img src={`${secure_url}${movie.poster_path}`} />
                </Link>
              ))
          )
        )}
    </React.Fragment>
  );
}

People.propTypes = {
  people: PropTypes.array.isRequired,
};

export default People;
