import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";

class Mother extends Component {
  render() {
    return <Child />;
  }
}
export default Mother;
