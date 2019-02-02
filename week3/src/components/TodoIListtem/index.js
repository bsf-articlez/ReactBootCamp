import React, { Component } from "react";
import PropTypes from "prop-types";

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo || {}
    };
  }

  conponentDisUpdate = prevProps => {
    if (prevProps.todo !== this.props.todo) {
      const { todo } = this.props;
      this.setState({ todo });
    }
  };

  render() {
    const todo = this.state;
    return <TodoItemWrapper>{todo.message}</TodoItemWrapper>;
  }
}

// For default props
ToDoListItem.defaultProps = {
  todo: {
    id: 0,
    message: ""
  }
};

// For validation props
ToDoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string
  })
};

export default ToDoListItem;
