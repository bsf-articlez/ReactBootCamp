import React, { Component } from "react";
import { MyInputStyled, MyInputWrapper, ClearButton } from "./MyInputStyled";

class MyInput extends Component {
  render() {
    const { value, onClear, onChange } = this.props;
    return (
      <MyInputStyled value={value} onChange={onChange}>
        <ClearButton onClick={onClear}>clear</ClearButton>
        <MyInputWrapper value={value} onChange={onChange} />
      </MyInputStyled>
    );
  }
}

export default MyInput;
