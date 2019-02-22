import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.count !== this.props.count) {
      this.setState({ count: this.props.count });
    }
    // console.log("componentDidUpdate", this.state.name);
    // console.log("prevProps", nextState.name);
  };

  addNumber = () => {
    this.props.onAdd();
  };

  render() {
    return (
      <button onClick={this.addNumber}>Add {this.state.count} + 1 </button>
    );
  }
}

export default Button;
