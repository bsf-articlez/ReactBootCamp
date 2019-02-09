import React, { Component } from "react";
import Counter from "../../components/Counter";
import CounterHook from "../../components/CounterHooks";

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Counter />
        <CounterHook />
      </div>
    );
  }
}

export default AppContainer;
