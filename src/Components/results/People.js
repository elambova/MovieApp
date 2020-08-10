import React from "react";
import PropTypes from "prop-types";

function People(props) {
  const { people, secure_url } = props;
  const peopleLenght = Object.values(people).length;

  return (
    <React.Fragment>
      {peopleLenght > 0 && (
        <div id="person-info">
          <h3 id="name">{people.results[0].name}</h3>
          <img src={`${secure_url}${people.results[0].profile_path}`} alt="" />
        </div>
      )}
      {peopleLenght > 0 &&
        people.results.map((person) =>
          person.known_for.map(
            (movie) =>
              movie.poster_path !== null &&
              movie.poster_path !== undefined && (
                <div key={movie.id}>
                  <p>{movie.title ? movie.title : movie.original_name}</p>
                  <img src={`${secure_url}${movie.poster_path}`} />
                </div>
              )
          )
        )}
    </React.Fragment>
  );
}

People.propTypes = {
  people: PropTypes.object.isRequired,
};

export default People;
