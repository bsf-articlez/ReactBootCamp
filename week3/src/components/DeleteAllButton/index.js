import React, { Component } from "react";
import PropTypes from "prop-types";
import { ClearAllButton } from "./styled";

class DeleteAllButton extends Component {
  render() {
    const { onDeleteAll } = this.props;
    return (
      <ClearAllButton onClick={onDeleteAll}>Delete All item</ClearAllButton>
    );
  }
}

// For default props
DeleteAllButton.defaultProps = {
  onDeleteAll: () => {}
};

// For validation props
DeleteAllButton.propTypes = {
  //   value: PropTypes.string.isRequired,
  onDeleteAll: PropTypes.func
};

export default DeleteAllButton;
