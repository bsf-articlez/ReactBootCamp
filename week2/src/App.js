import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <Counter label={count} />
        <Button count={count} />
      </div>
    );
  }
}

export default App;
