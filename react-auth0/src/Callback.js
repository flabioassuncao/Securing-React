import React, { Component } from "react";

class Callback extends Component {
  componentDidMount() {
    if (/acess_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return <h1>Loanding...</h1>;
  }
}

export default Callback;
