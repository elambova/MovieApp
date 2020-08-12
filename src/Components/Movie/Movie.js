import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  const { movie } = props;
  const apiData = movie.apiData;
  const secure_url = movie.imagesUrl;
  console.log(movie);
  return (
    <div className="content">
      <h2>
        {apiData.title !== undefined ? apiData.title : apiData.original_title}
      </h2>
      {apiData.poster_path !== null && (
        <img
          src={`${secure_url}w185${apiData.poster_path}`}
          alt={
            apiData.title !== undefined ? apiData.title : apiData.original_title
          }
        />
      )}
      <time datatype={apiData.release_date}>
        Release Date: {apiData.release_date}
      </time>
      <p className="overview">{apiData.overview}</p>
      <ul className="spokenLanguages">
        {apiData.spoken_languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <ul className="productionCountries">
        {apiData.production_countries.map((country) => (
          <li key={country.iso_3166_1}>{country.name}</li>
        ))}
      </ul>
      <ul className="production_companies">
        {apiData.production_companies.map((company) => (
          <li key={company.id}>
            <p>{company.name}</p>
            {company.logo_path !== null && (
              <img
                src={`${secure_url}w92${company.logo_path}`}
                alt={company.name}
              />
            )}
          </li>
        ))}
      </ul>
      <ul className="genres">
        {apiData.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {};

export default Movie;
