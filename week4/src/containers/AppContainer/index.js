import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHooks";

class AppContainer extends Component {
  render() {
    return (
      <div>
        <span>No Hook</span>
        <Counter />
        <br />
        <br />
        <br />
        <span>With Hook</span>
        <CounterHook />
      </div>
    );
  }
}

export default AppContainer;
