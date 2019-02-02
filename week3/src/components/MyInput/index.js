import React, { Component } from "react";
import { MyInputStyled, MyInputWrapper, ClearButton } from "./MyInputStyled";
import PropTypes from "prop-types";

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

// For default props
MyInput.defaultProps = {
  value: "",
  onClear: () => {},
  onChange: () => {}
};

// For validation props
MyInput.propTypes = {
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func,
  onChange: PropTypes.func
};

export default MyInput;
