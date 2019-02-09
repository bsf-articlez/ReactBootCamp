import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onCount = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <span>{count}</span>
        <button onClick={this.onCount}>Click me please !!!!</button>
      </div>
    );
  }
}

export default Counter;
