import React, { Component } from "react";

export default class ResultContainer extends Component {
  render() {
    const { data } = this.props;
    const dataLenght = Object.values(data).length;
    console.log(data);
    const secure_url =
      dataLenght !== 0 ? data.images.secure_base_url + "w185/" : "";

    return (
      <React.Fragment>
        <div className="flex-container">
          {dataLenght > 0 && data.results[0].name !== undefined ? (
            <div>
              <h3 id="name">{data.results[0].name}</h3>
              <img
                src={`${secure_url}${data.results[0].profile_path}`}
                alt=""
              />
            </div>
          ) : null}
          {dataLenght > 0 &&
            data.results.map((item) =>
              item.poster_path !== null || item.poster_path !== undefined ? (
                <div key={item.id} id={item.id}>
                  <p>{item.title}</p>
                  <img src={`${secure_url}${item.poster_path}`} />
                </div>
              ) : null
            )}
        </div>
      </React.Fragment>
    );
  }
}
