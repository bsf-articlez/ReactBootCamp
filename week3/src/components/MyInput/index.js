import React, { Component } from "react";
import { MyInputStyled } from "./MyInputStyled";

class MyInput extends Component {
  render() {
    const { value, onClear, onChange } = this.props;
    return <MyInputStyled value={value} onChange={onChange} />;
  }
}
