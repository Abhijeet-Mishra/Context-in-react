import React, { Component } from "react";
import ReactDOM from "react-dom";
import Mother from "./Mother";

class GrandMother extends Component {
  render() {
    return <Mother />;
  }
}
export default GrandMother;
