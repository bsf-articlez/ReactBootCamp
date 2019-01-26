import React, { Component } from "react";
import { ButtonStyled } from "./styled";
// import "./styles.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count || 0 };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.count !== this.props.count) {
      this.setState({ count: this.props.count });
    }
    // console.log("componentDidUpdate", this.state.name);
    // console.log("prevProps", nextState.name);
  };

  render() {
    const { count } = this.state;
    const { handle } = this.props; // this.props.handle
    return <ButtonStyled onClick={handle}>Count {count}</ButtonStyled>;
  }
}

export default Button;
