import React, { Component } from "react";
import Movies from "./results/Movies";
import People from "./results/People";

export default class ResultContainer extends Component {
  renderComponentsByMediaType = (data, handleClick) => {
    const movies = [];
    const people = [];
    const secure_url = data.imagesUrl;

    data.apiData.forEach((item) => {
      switch (item.media_type) {
        case "movie":
          return movies.push(item);
        case "person":
          return people.push(item);
        case "tv":
          return movies.push(item);
      }
    });

    if (people.length > 0 && movies.length > 0) {
      return (
        <React.Fragment>
          <People
            secure_url={secure_url}
            handleClick={handleClick}
            people={people}
          />
          <Movies
            secure_url={secure_url}
            handleClick={handleClick}
            movies={movies}
          />
        </React.Fragment>
      );
    } else if (movies.length > 0) {
      return (
        <Movies
          secure_url={secure_url}
          handleClick={handleClick}
          movies={movies}
        />
      );
    } else if (people.length > 0) {
      return (
        <People
          secure_url={secure_url}
          handleClick={handleClick}
          people={people}
        />
      );
    } else {
      return <h3>No results found for your search!</h3>;
    }
  };

  render() {
    const { data, handleClick } = this.props;
    const dataLenght = Object.values(data).length;

    return (
      <div className="content">
        <div className="flex-container">
          {dataLenght > 0 &&
            this.renderComponentsByMediaType(data, handleClick)}
        </div>
      </div>
    );
  }
}
