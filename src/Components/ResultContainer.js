import React, { Component } from "react";
import Movies from "./results/Movies";
import People from "./results/People";
import TvShows from "./results/TvShows";

export default class ResultContainer extends Component {
  render() {
    const { data } = this.props;
    const dataLenght = Object.values(data).length;
    const secure_url =
      dataLenght !== 0 ? data.images.secure_base_url + "w185/" : "";

    return (
      <React.Fragment>
        <div className="flex-container">
          {dataLenght > 0 &&
            (() => {
              switch (data.results[0].media_type) {
                case "person":
                  return <People people={data} secure_url={secure_url} />;
                case "movie":
                  return <Movies movies={data} secure_url={secure_url} />;
                case "tv":
                  return <TvShows tv={data} secure_url={secure_url} />;
                default:
                  return null;
              }
            })()}
        </div>
      </React.Fragment>
    );
  }
}
