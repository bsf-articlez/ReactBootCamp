import React, { Component } from "react";
import { ButtonStyled } from "./styled";
// import "./styles.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ButtonStyled>Count</ButtonStyled>;
  }
}

export default Button;
