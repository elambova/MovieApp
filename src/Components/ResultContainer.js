import React, { Component } from "react";

export default class ResultContainer extends Component {
  render() {
    const { movies } = this.props;
    const secure_url = movies.images.secure_base_url + "w185/";
    
    return (
      <React.Fragment>
        <div className="flex-container">
          {movies.results.map(
            (movie) =>
              movie.poster_path !== null && (
                <div key={movie.id} id={movie.id}>
                  <p>{movie.title}</p>
                  <img src={`${secure_url}${movie.poster_path}`} />
                </div>
              )
          )}
        </div>
      </React.Fragment>
    );
  }
}
