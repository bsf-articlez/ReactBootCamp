import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TodoItemWrapper,
  TodoItemMessage,
  TodoItemActionWrapper
} from "./styled";
import ActionButton from "../ActionButton";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo || {}
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.todo !== this.props.todo) {
      const { todo } = this.props;
      this.setState({ todo });
    }
  };

  render() {
    const { todo } = this.state;
    return (
      <TodoItemWrapper>
        <TodoItemMessage>{todo.message}</TodoItemMessage>
        <TodoItemActionWrapper>
          <ActionButton />
        </TodoItemActionWrapper>
      </TodoItemWrapper>
    );
  }
}

TodoListItem.defaultProps = {
  todo: {
    id: 0,
    message: ""
  }
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string
  })
};

export default TodoListItem;
