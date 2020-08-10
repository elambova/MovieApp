import React, { Component } from "react";
import Movies from "./results/Movies";
import People from "./results/People";

export default class ResultContainer extends Component {
  getMediaType = (data) => {
    const movies = [];
    const tv = [];
    const people = [];
    const secure_url = data.imagesUrl;

    data.apiData.forEach((item) => {
      switch (item.media_type) {
        case "movie":
          movies.push(item);
        case "person":
          people.push(item);
        case "tv":
          tv.push(item);
      }
    });

    if (movies.length > 0 || tv.length > 0) {
      return <Movies secure_url={secure_url} tv={tv} />;
    } else {
      return <People secure_url={secure_url} people={people} />;
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
