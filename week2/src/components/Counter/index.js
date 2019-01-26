import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label || 0
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.label !== this.props.label) {
      this.setState({ label: this.props.label });
    }
    // console.log("componentDidUpdate", this.state.name);
    // console.log("prevProps", nextState.name);
  };

  render() {
    const { label } = this.state;
    return (
      <div>
        <span>{label}</span>
        <br />
      </div>
    );
  }
}

export default Counter;
