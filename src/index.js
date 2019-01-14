import React, { Component } from "react";
import ReactDOM from "react-dom";
import GrandMother from "./GrandMother";
import "./styles.css";
import { FamilyProvider } from "./Context";

class App extends Component {
  constructor() {
    super();
    this.state = {
      amulya: "KOHINOOR"
    };
  }
  render() {
    return (
      <div>
        <FamilyProvider value={this.state.amulya} className="App">
          <GrandMother />
        </FamilyProvider>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
