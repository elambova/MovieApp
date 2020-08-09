import React, { Component } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import * as connect from "./ConnectionAPI/connect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: false };
  }

  handleSubmit = (data) => {
    this.setState({ loading: true }, async () => {
      await connect
        .getData(data)
        .then((data) => this.setState({ data: data, loading: false }));
    });
  };

  render() {
    const { data, loading } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Content
          data={data}
          handleSubmit={this.handleSubmit}
          loading={loading}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
