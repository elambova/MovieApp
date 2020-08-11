import React, { Component } from "react";
import Movies from "./results/Movies";
import People from "./results/People";

export default class ResultContainer extends Component {
  getMediaType = (data) => {
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
          <People secure_url={secure_url} people={people} />
          <Movies secure_url={secure_url} movies={movies} />
        </React.Fragment>
      );
    } else if (movies.length > 0) {
      return <Movies secure_url={secure_url} movies={movies} />;
    } else if (people.length > 0) {
      return <People secure_url={secure_url} people={people} />;
    } else {
      return <h3>No results found for your search!</h3>;
    }
  };

  render() {
    const { data } = this.props;
    const dataLenght = Object.values(data).length;

    return (
      <React.Fragment>
        <div className="flex-container">
          {dataLenght > 0 && this.getMediaType(data)}
        </div>
      </React.Fragment>
    );
  }
}
