import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FamilyConsumer } from "./Context";
class Child extends Component {
  render() {
    return <FamilyConsumer>{context => <p>{context}</p>}</FamilyConsumer>;
  }
}
export default Child;
