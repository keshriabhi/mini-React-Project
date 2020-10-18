import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Abhishek",
  };
  render() {
    return <h2>Hello, {this.state.name}</h2>;
  }
}

export default App;
